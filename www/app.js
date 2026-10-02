// =====================================================
// DeX Gaku — app.js (V2 - With Riwayat Swipe Handler)
// =====================================================

var MENU_DATA = {
  hiragana:  { glyph: "&#127760;", title: "Hiragana", sub: "あいうえお", content: "" },
  katakana:  { glyph: "T", title: "Katakana", sub: "アイウエオ", content: "" },
  kanji:     { glyph: "&#128214;", title: "Kanji", sub: "漢字 N5", content: "" },
  kotoba:    { glyph: '<img class="detail-glyph-img" src="assets/kosakata-shiba.svg" alt="Shiba memegang flashcard kosakata">', title: "Kosakata", sub: "Vocabulary", content: "" },
  bunpo:     { glyph: "&#127891;", title: "Grammar", sub: "Tata Bahasa", content: "" },
  quiz:      { glyph: "&#10067;", title: "Quiz", sub: "Latihan Soal", content: "" },
  simulasi:  { glyph: "&#128421;", title: "Simulasi JLPT", sub: "Mock Test", content: "" },
  riwayat:   { glyph: "&#128337;", title: "Riwayat", sub: "Histori Belajar", content: "" },
  tambah:    { glyph: "&#10133;", title: "Tambah Data", sub: "Data Baru", content: "" },
  rangkuman: { glyph: "&#9889;", title: "Rangkuman", sub: "Minna no Nihongo", content: "" },
  terjemahan: { glyph: "A/あ", title: "Terjemahan", sub: "Kamus & Translate", content: "" },
  ai: { glyph: "🤖", title: "AI Sensei", sub: "Asisten Belajar", content: "" }
};

var homeView = document.getElementById("homeView");
var detailView = document.getElementById("detailView");
var detailGlyph = document.getElementById("detailGlyph");
var detailTitle = document.getElementById("detailTitle");
var detailSub = document.getElementById("detailSub");
var detailExtra = document.getElementById("detailExtra");
var backBtn = document.getElementById("backBtn");

// =====================================================
// FLAG: Mencegah pushState saat popstate (anti loop)
// =====================================================
window.__isPopstateHandling = false;

function restoreStandardHeader() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.remove("hidden");
  if (standardHeader) standardHeader.classList.remove("hidden");
}

function hideStandardHeader() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");
}

// ---------- Navigasi ----------

function showDetail(menuKey) {
  var data = MENU_DATA[menuKey];
  if (!data) return;

  if (menuKey === "terjemahan" || menuKey === "ai") {
    homeView.classList.remove("active");
    detailView.classList.remove("active");
    var tView = document.getElementById("terjemahanView");
    var aView = document.getElementById("aiView");
    if (tView) tView.classList.remove("active");
    if (aView) aView.classList.remove("active");
    if (menuKey === "terjemahan" && tView) tView.classList.add("active");
    if (menuKey === "ai" && aView) aView.classList.add("active");
    window.scrollTo(0, 0);
    return;
  }

  var transView = document.getElementById("terjemahanView");
  if (transView) {
    transView.classList.remove("active");
    if (typeof resetTerjemahanPage === "function") resetTerjemahanPage();
  }

  var aView2 = document.getElementById("aiView");
  if (aView2) aView2.classList.remove("active");

  restoreStandardHeader();
  detailGlyph.innerHTML = data.glyph;
  detailTitle.textContent = data.title;
  detailSub.textContent = data.sub;

  if (menuKey === "hiragana" || menuKey === "katakana") {
    loadKanaMenu(menuKey);
  } else if (menuKey === "kanji") {
    // Panggil wrapper yang pushState (guard __isPopstateHandling ada di dalamnya)
    if (typeof openKanjiMenuWithHistory === "function") {
      openKanjiMenuWithHistory();
    } else {
      loadKanjiMenu();
    }
  } else if (menuKey === "kotoba") {
    loadKosakataMenu();
  } else if (menuKey === "bunpo") {
    loadBunpoMenu();
  } else if (menuKey === "quiz") {
    loadQuizMenu();
  } else if (menuKey === "simulasi") {
    if (typeof openSimulasiMenuWithHistory === "function") {
      openSimulasiMenuWithHistory();
    } else if (typeof loadSimulasiMenu === "function") {
      loadSimulasiMenu();
    }
  } else if (menuKey === "riwayat") {
    if (typeof loadRiwayatMenu === "function") loadRiwayatMenu();
  } else if (menuKey === "tambah") {
    if (typeof loadTambahDataMenu === "function") loadTambahDataMenu();
  } else if (menuKey === "rangkuman") {
    if (typeof loadRangkumanMenu === "function") loadRangkumanMenu();
  } else if (data.content && data.content.trim() !== "") {
    detailExtra.innerHTML = data.content;
  } else {
    detailExtra.innerHTML = '<div class="empty-state"><p>Konten untuk menu ini belum diisi.</p><p class="empty-hint">Kita akan lengkapi bagian ini satu per satu &#128021;</p></div>';
  }

  homeView.classList.remove("active");
  detailView.classList.add("active");
  window.scrollTo(0, 0);
}

function showHome() {
  detailView.classList.remove("active");
  var tView = document.getElementById("terjemahanView");
  if (tView) {
    tView.classList.remove("active");
    if (typeof resetTerjemahanPage === "function") resetTerjemahanPage();
  }
  var aView = document.getElementById("aiView");
  if (aView) {
    aView.classList.remove("active");
    if (typeof forceClearAiChat === "function") forceClearAiChat();
  }
  homeView.classList.add("active");
  window.scrollTo(0, 0);
}

// =====================================================
// HELPER: Deteksi tujuan dari hash URL
// Berguna saat event.state null (fallback browser mobile)
// =====================================================
function getMenuFromHash() {
  var hash = location.hash || "";
  // PRIORITAS: riwayat-confirm harus dicek SEBELUM riwayat (karena prefix mirip)
  if (hash.indexOf("#riwayat-confirm") === 0) return { menu: "riwayat-confirm", fromHash: true };
  if (hash.indexOf("#riwayat") === 0) return { menu: "riwayat", fromHash: true };
  if (hash.indexOf("#kanji-cat-") === 0) return { menu: "kanji", fromHash: true };
  if (hash.indexOf("#kanji-") === 0) return { menu: "kanji", fromHash: true };
  if (hash === "#kanji") return { menu: "kanji", fromHash: true };
  if (hash.indexOf("#simulasi") === 0) return { menu: "simulasi", fromHash: true };
  if (hash.indexOf("#kotoba") === 0) return { menu: "kotoba", fromHash: true };
  if (hash.indexOf("#bunpo") === 0) return { menu: "bunpo", fromHash: true };
  if (hash.indexOf("#quiz") === 0) return { menu: "quiz", fromHash: true };
  if (hash.indexOf("#rangkuman") === 0) return { menu: "rangkuman", fromHash: true };
  if (hash.indexOf("#tambah") === 0) return { menu: "tambah", fromHash: true };
  if (hash.indexOf("#hiragana") === 0) return { menu: "hiragana", fromHash: true };
  if (hash.indexOf("#katakana") === 0) return { menu: "katakana", fromHash: true };
  return null;
}

// =====================================================
// POPSTATE UNIVERSAL (Anti Loop dengan Flag)
// =====================================================
window.addEventListener("popstate", function (event) {
  // Set flag: semua pushState yang dipanggil dari handler ini akan di-skip
  window.__isPopstateHandling = true;
  setTimeout(function () { window.__isPopstateHandling = false; }, 0);

  // ===============================
  // ⚡ PRIORITAS TERTINGGI: HANDLE RIWAYAT POPUP/SWIPE
  // Harus dipanggil PALING AWAL sebelum handler lainnya.
  // Kalau popup konfirmasi / swipe card sedang terbuka,
  // tutup dulu dan JANGAN lanjut ke handler lain.
  // ===============================
  if (typeof riwayatHandlePopstate === "function") {
    if (riwayatHandlePopstate()) return;
  }

  var state = event.state;

  // FIX: Kalau state null, coba recover dari hash URL
  if (!state) {
    var recovered = getMenuFromHash();
    if (recovered) {
      state = recovered;
    }
  }

  // Tutup Terjemahan
  var tView = document.getElementById("terjemahanView");
  if (tView && tView.classList.contains("active")) {
    if (typeof resetTerjemahanPage === "function") resetTerjemahanPage();
    tView.classList.remove("active");
  }

  // Tutup AI
  var aView = document.getElementById("aiView");
  if (aView && aView.classList.contains("active")) {
    aView.classList.remove("active");
  }

  // ===============================
  // 1. MODAL KOSAKATA
  // ===============================
  var kotoModal = document.getElementById("kotoWordModal");
  if (kotoModal) {
    kotoModal.style.animation = "slideDown 0.18s ease-in forwards";
    setTimeout(function () {
      if (kotoModal && kotoModal.parentNode) kotoModal.parentNode.removeChild(kotoModal);
    }, 180);
    return;
  }

  // ===============================
  // 2. KOSAKATA
  // ===============================
  if (state && state.menu && state.menu.indexOf("kotoba") === 0) {
    if (typeof handleKosakataPopstate === "function") handleKosakataPopstate(event);
    return;
  }

  // ===============================
  // 3. KANJI
  // ===============================
  if (state && state.menu === "kanji") {
    if (typeof handleKanjiPopstate === "function") handleKanjiPopstate(state);
    return;
  }

  // ===============================
  // 4. BUNPO
  // ===============================
  if (state && state.menu === "bunpo" && state.catKey && !state.materiIdx && state.materiIdx !== 0) {
    backToBunpoMateriList(state.catKey);
    return;
  }
  if (state && state.menu === "bunpo" && !state.catKey) {
    backToBunpoMenu();
    return;
  }

  // ===============================
  // 5. QUIZ
  // ===============================
  if (state && state.menu === "quiz" && state.quizStep) {
    if (state.quizStep.indexOf("kanji-") === 0) {
      if (typeof quizKanjiSyncHistoryDepth === "function") quizKanjiSyncHistoryDepth(state);
      handleQuizKanjiPopstate(state);
    } else if (state.quizStep.indexOf("kotoba-") === 0) {
      if (typeof handleQuizKosakataPopstate === "function") handleQuizKosakataPopstate(state);
    } else if (state.quizStep.indexOf("bunpo-") === 0) {
      if (typeof handleQuizBunpoPopstate === "function") handleQuizBunpoPopstate(state);
    } else if (state.quizStep.indexOf("campuran-") === 0) {
      if (typeof handleQuizCampuranPopstate === "function") handleQuizCampuranPopstate(state);
    } else {
      handleQuizKanaPopstate(state);
    }
    return;
  }

  // ===============================
  // 6. SIMULASI
  // ===============================
if (state && state.menu === "simulasi") {
  if (typeof handleSimulasiPopstate === "function") {
    handleSimulasiPopstate(state);
  }
  return;
}


  // ===============================
  // 7. TAMBAH DATA
  // ===============================
  if (state && state.menu === "tambah") {
    if (typeof handleTambahDataPopstate === "function") handleTambahDataPopstate(state);
    return;
  }

  // ===============================
  // 7b. RIWAYAT (menu utama)
  // ===============================
  if (state && state.menu === "riwayat") {
    if (typeof loadRiwayatMenu === "function") loadRiwayatMenu();
    return;
  }

  // ===============================
  // 7c. RIWAYAT CONFIRM (edge case — kalau flag riwayat tidak sinkron)
  // ===============================
  if (state && state.menu === "riwayat-confirm") {
    var confEl = document.getElementById("riwConfirmOverlay");
    if (confEl) confEl.remove();
    if (typeof riwayatState !== "undefined") {
      riwayatState.confirmOpen = false;
    }
    if (typeof loadRiwayatMenu === "function") loadRiwayatMenu();
    return;
  }

  // ===============================
  // 8. RANGKUMAN
  // ===============================
  if (state && state.menu === "rangkuman") {
    if (typeof handleRangkumanPopstate === "function") handleRangkumanPopstate(state);
    return;
  }

  // ===============================
  // 9. HIRAGANA / KATAKANA
  // ===============================
  if (state && (state.menu === "hiragana" || state.menu === "katakana")) {
    showDetail(state.menu);
    return;
  }

  // ===============================
  // 10. FALLBACK
  // ===============================
  if (state && state.menu && state.menu !== "home") {
    showDetail(state.menu);
    return;
  }

  showHome();
});

function openDetailWithHistory(menuKey) {
  // showDetail sudah pushState untuk kanji & simulasi lewat wrapper-nya
  // Untuk menu lain, kita pushState di sini.
  // TAPI: untuk menghindari double push, cek dulu.
  var skipPush = (menuKey === "kanji" || menuKey === "simulasi");

  showDetail(menuKey);

  if (skipPush) return; // wrapper di dalam showDetail sudah pushState

  if (window.__isPopstateHandling) return;
  history.pushState({ menu: menuKey }, "", "#" + menuKey);
}

// ---------- Event listener kartu menu ----------
var cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    var key = this.getAttribute("data-menu");
    openDetailWithHistory(key);
  });
}

backBtn.addEventListener("click", function () {
  history.back();
});

// =====================================================
// INITIAL STATE
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
  if (!history.state) {
    history.replaceState({ menu: "home" }, "", "");
  }
});

// =====================================================
// SAPAAN MASKOT
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
  var greetingBubble = document.getElementById("shibaGreeting");
  if (greetingBubble) {
    var hour = new Date().getHours();
    var jpText = "";
    var textColor = "";

    if (hour >= 4 && hour < 11) { jpText = "おはよう! 🌅"; textColor = "#FFD166"; }
    else if (hour >= 11 && hour < 15) { jpText = "こんにちは! ☀️"; textColor = "#FFE082"; }
    else if (hour >= 15 && hour < 18) { jpText = "こんにちは! 🌇"; textColor = "#F28C5B"; }
    else if (hour >= 18 && hour < 24) { jpText = "こんばんは! 🌙"; textColor = "#1E2A44"; }
    else { jpText = "おやすみ! 🌌"; textColor = "#302B63"; }

    greetingBubble.textContent = jpText;
    greetingBubble.style.color = textColor;
  }
});

// =====================================================
// DEBUG HISTORY
// =====================================================
(function () {
  if (typeof localStorage === "undefined") return;
  if (localStorage.getItem("debugHistory") !== "1") return;

  var originalPush = history.pushState.bind(history);
  var originalReplace = history.replaceState.bind(history);

  history.pushState = function (state, title, url) {
    console.log("%c🟢 PUSH", "color: #22a06b; font-weight: bold;", {
      menu: state && state.menu, catKey: state && state.catKey, subIdx: state && state.subIdx,
      wordIdx: state && state.wordIdx, quizStep: state && state.quizStep, simStep: state && state.simStep,
      url: url, "history.length": history.length
    });
    return originalPush(state, title, url);
  };

  history.replaceState = function (state, title, url) {
    console.log("%c🟡 REPLACE", "color: #d6892b; font-weight: bold;", {
      menu: state && state.menu, simStep: state && state.simStep,
      url: url, "history.length": history.length
    });
    return originalReplace(state, title, url);
  };

  window.addEventListener("popstate", function (e) {
    console.log("%c🔴 POP", "color: #e6395b; font-weight: bold;", {
      menu: e.state && e.state.menu, catKey: e.state && e.state.catKey,
      subIdx: e.state && e.state.subIdx, wordIdx: e.state && e.state.wordIdx,
      quizStep: e.state && e.state.quizStep, simStep: e.state && e.state.simStep,
      hash: location.hash, "history.length": history.length
    });
  });

  console.log("%c🕵️ Debug history AKTIF", "color: #7c3aed; font-weight: bold; font-size: 14px;",
    "\nMatikan dengan: localStorage.removeItem('debugHistory') lalu refresh.");
})();