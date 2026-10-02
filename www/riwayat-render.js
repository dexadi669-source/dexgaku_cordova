// =====================================================
// DeX Gaku — riwayat-render.js (V5 - Final)
// - Swipe-to-delete pakai touch events
// - Popup konfirmasi instan (no delay)
// - Fix history loop
// - Fix kilatan merah (instan close)
// =====================================================

var RIWAYAT_STORAGE_KEY = "dexgaku_riwayat_quiz";
var RIWAYAT_MAX_ITEMS = 200;

var riwayatState = {
  filter: "semua",
  openSwipeId: null,
  confirmOpen: false,
  backHandled: false,
  expectingSelfBack: false
};

// =====================================================
// 1. STORAGE
// =====================================================

function riwayatBacaSemua() {
  try {
    var raw = localStorage.getItem(RIWAYAT_STORAGE_KEY);
    if (!raw) return [];
    var arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr;
  } catch (e) {
    return [];
  }
}

function riwayatSimpanSemua(list) {
  try {
    localStorage.setItem(RIWAYAT_STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

function simpanRiwayatQuiz(entry) {
  if (!entry || !entry.mode) return;
  var list = riwayatBacaSemua();
  var item = {
    id: entry.id || ("riw_" + Date.now() + "_" + Math.floor(Math.random() * 100000)),
    mode: entry.mode,
    type: entry.type || "",
    title: entry.title || "",
    subtitle: entry.subtitle || "",
    score: typeof entry.score === "number" ? entry.score : 0,
    maxScore: typeof entry.maxScore === "number" ? entry.maxScore : null,
    correct: typeof entry.correct === "number" ? entry.correct : 0,
    wrong: typeof entry.wrong === "number" ? entry.wrong : 0,
    total: typeof entry.total === "number" ? entry.total : 0,
    time: entry.time || "0:00",
    date: entry.date || riwayatTanggalHariIni(),
    status: entry.status || "",
    snapshot: entry.snapshot || null
  };
  list.unshift(item);
  if (list.length > RIWAYAT_MAX_ITEMS) list = list.slice(0, RIWAYAT_MAX_ITEMS);
  riwayatSimpanSemua(list);
}

function riwayatTanggalHariIni() {
  var d = new Date();
  return d.getFullYear() + "-" + riwayatPad2(d.getMonth() + 1) + "-" + riwayatPad2(d.getDate());
}

function riwayatPad2(n) { return n < 10 ? "0" + n : String(n); }

function riwayatFormatTanggal(iso) {
  var bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  var parts = String(iso).split("-");
  if (parts.length !== 3) return iso;
  var y = parseInt(parts[0], 10), m = parseInt(parts[1], 10), d = parseInt(parts[2], 10);
  if (!y || !m || !d) return iso;
  return d + " " + bulanList[m - 1] + " " + y;
}

// =====================================================
// 2. MENU UTAMA
// =====================================================

function loadRiwayatMenu() {
  hideStandardHeader();
  riwayatState.filter = "semua";
  riwayatState.openSwipeId = null;
  riwayatState.confirmOpen = false;
  riwayatState.expectingSelfBack = false;

  var container = document.getElementById("detailExtra");
  if (!container) return;

  container.innerHTML = riwayatBuildHTML();
  riwayatAttachEvents();
}

function riwayatBuildHTML() {
  var html = "";
  html += '<div class="riw-wrap r-wrap-v2">';

  html += '<div class="riw-hero-header">';
  html += '  <button class="riw-back-btn" id="riwBackBtn">';
  html += '    <span class="riw-back-ic">&lt;</span> Kembali';
  html += '  </button>';
  html += '  <h2 class="riw-title">Riwayat N5</h2>';
  html += '  <p class="riw-subtitle">Lacak progress belajarmu di DeX Gaku</p>';
  html += '</div>';

  html += '<div class="riw-body-content">';

  html += '<div class="riw-filter-row">';
  html += '<button class="riw-filter-pill active" data-filter="semua">Semua</button>';
  html += '<button class="riw-filter-pill" data-filter="quiz">Quiz</button>';
  html += '<button class="riw-filter-pill" data-filter="simulasi">Simulasi</button>';
  html += '</div>';

  html += '<div class="riw-list" id="riwList">';
  html += riwayatBuildListHTML();
  html += '</div>';

  html += '</div>';
  html += '</div>';
  return html;
}

function riwayatBuildListHTML() {
  var all = riwayatBacaSemua();
  var filtered = all.filter(function (item) {
    if (riwayatState.filter === "semua") return true;
    return item.mode === riwayatState.filter;
  });

  filtered.sort(function (a, b) {
    var da = String(a.date), db = String(b.date);
    if (da !== db) return da < db ? 1 : -1;
    return String(a.id) < String(b.id) ? 1 : -1;
  });

  if (filtered.length === 0) {
    return riwayatBuildEmptyStateHTML();
  }

  var html = "";
  for (var i = 0; i < filtered.length; i++) {
    html += riwayatBuildCardHTML(filtered[i]);
  }
  return html;
}

function riwayatBuildEmptyStateHTML() {
  var html = "";
  html += '<div class="riw-empty">';
  html += '<div class="riw-empty-emoji">📂</div>';
  html += '<p class="riw-empty-title">Masih Kosong, Nih...</p>';
  html += '<p class="riw-empty-sub">Ayo kerjakan quiz atau simulasi dulu<br>untuk melihat histori nilaimu di sini.</p>';
  html += '</div>';
  return html;
}

function riwayatIconInfo(item) {
  if (item.mode === "simulasi") {
    return { emoji: "🎓", cls: "riw-ic-simulasi" };
  }
  var map = {
    kanji: { emoji: "漢", cls: "riw-ic-kanji" },
    kotoba: { emoji: "📖", cls: "riw-ic-kotoba" },
    bunpo: { emoji: "📜", cls: "riw-ic-bunpo" },
    hiragana: { emoji: "あ", cls: "riw-ic-kana" },
    katakana: { emoji: "ア", cls: "riw-ic-kana" },
    campuran: { emoji: "⚡", cls: "riw-ic-campuran" }
  };
  return map[item.type] || { emoji: "📝", cls: "riw-ic-default" };
}

function riwayatBuildCardHTML(item) {
  var ic = riwayatIconInfo(item);
  var isSimulasi = item.mode === "simulasi";

  var scoreDisplay = isSimulasi ? (item.score + '<span class="riw-slash">/</span>' + item.maxScore) : item.score;
  var scoreUnit = isSimulasi ? '<span class="riw-unit">Poin</span>' : '<span class="riw-unit">%</span>';

  var statusLabel = item.status || (isSimulasi ? "" : "SELESAI");
  var statusCls = "riw-badge-netral";
  if (/lulus/i.test(statusLabel) && !/tidak/i.test(statusLabel)) statusCls = "riw-badge-hijau";
  else if (/tidak\s*lulus/i.test(statusLabel)) statusCls = "riw-badge-merah";

  var html = "";
  html += '<div class="riw-card-wrapper" data-riw-id="' + item.id + '">';

  html += '<div class="riw-card-swipe-actions">';
  html += '<button class="riw-swipe-btn riw-swipe-delete" data-swipe-action="delete" data-swipe-id="' + item.id + '">';
  html += '<span class="riw-swipe-ic">🗑️</span>';
  html += '<span class="riw-swipe-lbl">Delete</span>';
  html += '</button>';
  html += '<button class="riw-swipe-btn riw-swipe-all" data-swipe-action="all">';
  html += '<span class="riw-swipe-ic">🧹</span>';
  html += '<span class="riw-swipe-lbl">All</span>';
  html += '</button>';
  html += '</div>';

  html += '<div class="riw-card" data-card-id="' + item.id + '">';
  html += '<div class="riw-card-main">';

  html += '<div class="riw-card-icon-wrap ' + ic.cls + '">';
  html += '<span class="riw-icon-emoji">' + ic.emoji + '</span>';
  html += '</div>';

  html += '<div class="riw-card-bodytext">';
  if (statusLabel) {
    html += '<span class="riw-badge ' + statusCls + '">' + riwayatEscape(statusLabel) + '</span>';
  }
  html += '<p class="riw-card-title">' + riwayatEscape(item.title) + '</p>';
  if (item.subtitle) html += '<p class="riw-card-subtitle">' + riwayatEscape(item.subtitle) + '</p>';

  html += '<div class="riw-card-metarow">';
  html += '<span class="riw-meta-item">🕒 ' + riwayatEscape(item.time) + '</span>';
  html += '<span class="riw-meta-item">📅 ' + riwayatFormatTanggal(item.date) + '</span>';
  html += '</div>';
  html += '</div>';

  html += '</div>';

  html += '<div class="riw-card-result">';
  html += '<div class="riw-score-zone">';
  html += '<span class="riw-card-score">' + scoreDisplay + '</span>' + scoreUnit;
  html += '</div>';
  html += '<div class="riw-stats-zone">';
  html += '<div class="riw-stat-pill good"><span class="riw-st-ic">✅</span> ' + item.correct + ' <span class="riw-st-lbl">Benar</span></div>';
  html += '<div class="riw-stat-pill bad"><span class="riw-st-ic">❌</span> ' + item.wrong + ' <span class="riw-st-lbl">Salah</span></div>';
  html += '</div>';
  html += '</div>';

  html += '</div>';
  html += '</div>';
  return html;
}

function riwayatEscape(text) {
  if (!text) return "";
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// =====================================================
// 3. ATTACH EVENTS
// =====================================================

function riwayatAttachEvents() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var backBtnEl = document.getElementById("riwBackBtn");
  if (backBtnEl) {
    backBtnEl.onclick = function () {
      history.back();
    };
  }

  var filterBtns = container.querySelectorAll(".riw-filter-pill");
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      var f = this.getAttribute("data-filter");
      if (riwayatState.filter === f) return;
      riwayatState.filter = f;
      riwayatState.openSwipeId = null;

      var allPills = container.querySelectorAll(".riw-filter-pill");
      for (var p = 0; p < allPills.length; p++) {
        allPills[p].classList.toggle("active", allPills[p] === this);
      }

      var listEl = document.getElementById("riwList");
      if (listEl) {
        listEl.style.opacity = 0;
        setTimeout(function () {
          listEl.innerHTML = riwayatBuildListHTML();
          listEl.style.opacity = 1;
          riwayatAttachSwipeEvents();
        }, 100);
      }
    });
  }

  riwayatAttachSwipeEvents();
}

// =====================================================
// 4. SWIPE TO DELETE
// =====================================================

var RIW_SWIPE_THRESHOLD = 60;
var RIW_SWIPE_MAX = 130;
var RIW_SWIPE_DEAD_ZONE = 10;

function riwayatAttachSwipeEvents() {
  var cards = document.querySelectorAll(".riw-card");

  for (var i = 0; i < cards.length; i++) {
    riwayatBindSwipeToCard(cards[i]);
  }

  var swipeBtns = document.querySelectorAll(".riw-swipe-btn");
  for (var b = 0; b < swipeBtns.length; b++) {
    swipeBtns[b].addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      var action = this.getAttribute("data-swipe-action");
      var id = this.getAttribute("data-swipe-id");

      if (action === "delete") {
        riwayatBukaKonfirmasiHapus(id);
      } else if (action === "all") {
        riwayatBukaKonfirmasiHapusAll();
      }
    });
  }

  if (!riwayatAttachSwipeEvents._docListenerAttached) {
    document.addEventListener("click", riwayatGlobalCloseSwipe, true);
    riwayatAttachSwipeEvents._docListenerAttached = true;
  }
}

function riwayatGlobalCloseSwipe(e) {
  if (!riwayatState.openSwipeId) return;
  var wrapper = e.target.closest(".riw-card-wrapper");
  if (wrapper && wrapper.getAttribute("data-riw-id") === riwayatState.openSwipeId) return;
  riwayatCloseSwipe(riwayatState.openSwipeId);
}

function riwayatBindSwipeToCard(card) {
  var cardId = card.getAttribute("data-card-id");
  if (!cardId) return;

  var startX = 0, startY = 0;
  var currentX = 0;
  var isDragging = false;
  var isHorizontalSwipe = false;
  var initialOffset = 0;
  var hasMoved = false;

  function getCurrentTranslate() {
    if (riwayatState.openSwipeId === cardId) return -RIW_SWIPE_MAX;
    return 0;
  }

  function handleStart(clientX, clientY) {
    startX = clientX;
    startY = clientY;
    currentX = 0;
    isDragging = true;
    isHorizontalSwipe = false;
    hasMoved = false;
    initialOffset = getCurrentTranslate();
    card.style.transition = "none";
  }

  function handleMove(clientX, clientY, preventFn) {
    if (!isDragging) return;

    var dx = clientX - startX;
    var dy = clientY - startY;

    if (!isHorizontalSwipe) {
      if (Math.abs(dx) < RIW_SWIPE_DEAD_ZONE && Math.abs(dy) < RIW_SWIPE_DEAD_ZONE) {
        return;
      }
      if (Math.abs(dy) > Math.abs(dx)) {
        isDragging = false;
        card.style.transition = "";
        return;
      }
      isHorizontalSwipe = true;
      hasMoved = true;
    }

    var offset = initialOffset + dx;

    if (offset > 20) offset = 20;
    if (offset < -RIW_SWIPE_MAX) {
      offset = -RIW_SWIPE_MAX + (offset + RIW_SWIPE_MAX) * 0.3;
    }

    currentX = offset;
    card.style.transform = "translate3d(" + offset + "px, 0, 0)";

    if (isHorizontalSwipe && preventFn) {
      preventFn();
    }
  }

  function handleEnd() {
    if (!isDragging) return;
    isDragging = false;

    if (!isHorizontalSwipe) {
      card.style.transition = "";
      return;
    }

    card.style.transition = "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)";

    if (currentX < -RIW_SWIPE_THRESHOLD) {
      riwayatOpenSwipe(cardId);
    } else {
      riwayatCloseSwipe(cardId);
    }

    setTimeout(function () {
      card.style.transform = "";
      card.style.transition = "";
    }, 220);
  }

  function handleCancel() {
    if (!isDragging) return;
    isDragging = false;
    card.style.transition = "transform 0.2s ease";
    card.style.transform = "";
    setTimeout(function () {
      card.style.transition = "";
    }, 220);
  }

  // TOUCH EVENTS
  card.addEventListener("touchstart", function (e) {
    var t = e.touches[0];
    handleStart(t.clientX, t.clientY);
  }, { passive: true });

  card.addEventListener("touchmove", function (e) {
    var t = e.touches[0];
    handleMove(t.clientX, t.clientY, function () {
      if (e.cancelable) e.preventDefault();
    });
  }, { passive: false });

  card.addEventListener("touchend", function () {
    handleEnd();
  });

  card.addEventListener("touchcancel", function () {
    handleCancel();
  });

  // POINTER EVENTS (PC)
  var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (!isTouchDevice) {
    card.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      handleStart(e.clientX, e.clientY);
    });

    card.addEventListener("pointermove", function (e) {
      handleMove(e.clientX, e.clientY, function () {
        if (e.cancelable) e.preventDefault();
      });
    });

    card.addEventListener("pointerup", function () {
      handleEnd();
    });

    card.addEventListener("pointercancel", function () {
      handleCancel();
    });
  }

  card.addEventListener("click", function (e) {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      hasMoved = false;
      return;
    }
    if (riwayatState.openSwipeId) {
      riwayatCloseSwipe(riwayatState.openSwipeId);
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

function riwayatOpenSwipe(cardId) {
  if (riwayatState.openSwipeId && riwayatState.openSwipeId !== cardId) {
    riwayatCloseSwipe(riwayatState.openSwipeId);
  }
  riwayatState.openSwipeId = cardId;
  var wrapper = document.querySelector('.riw-card-wrapper[data-riw-id="' + cardId + '"]');
  if (!wrapper) return;
  wrapper.classList.add("swipe-open");
}

function riwayatCloseSwipe(cardId) {
  if (!cardId) return;
  var wrapper = document.querySelector('.riw-card-wrapper[data-riw-id="' + cardId + '"]');
  if (wrapper) wrapper.classList.remove("swipe-open");
  if (riwayatState.openSwipeId === cardId) {
    riwayatState.openSwipeId = null;
  }
}

function riwayatCloseAllSwipe() {
  var wrappers = document.querySelectorAll(".riw-card-wrapper.swipe-open");
  for (var i = 0; i < wrappers.length; i++) {
    wrappers[i].classList.remove("swipe-open");
  }
  riwayatState.openSwipeId = null;
}

// =====================================================
// 5. KONFIRMASI HAPUS
// =====================================================

function riwayatBukaKonfirmasiHapus(id) {
  var all = riwayatBacaSemua();
  var item = null;
  for (var i = 0; i < all.length; i++) {
    if (String(all[i].id) === String(id)) { item = all[i]; break; }
  }
  if (!item) return;

  riwayatCloseAllSwipe();

  riwayatBukaConfirmModal({
    icon: "⚠️",
    title: "Hapus Data Ini?",
    desc: 'Data hasil "<span class="riw-text-bold">' + riwayatEscape(item.title) + '</span>" akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.',
    onConfirm: function () {
      riwayatHapusItem(item.id);
    }
  });
}

function riwayatBukaKonfirmasiHapusAll() {
  var total = riwayatBacaSemua().length;
  if (total === 0) {
    riwayatTampilkanToast("Tidak ada riwayat untuk dihapus");
    riwayatCloseAllSwipe();
    return;
  }

  riwayatCloseAllSwipe();

  riwayatBukaConfirmModal({
    icon: "🗑️",
    title: "Hapus Semua Riwayat?",
    desc: 'Sebanyak <span class="riw-text-bold">' + total + ' riwayat</span> akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.',
    onConfirm: function () {
      riwayatHapusSemua();
    }
  });
}

function riwayatBukaConfirmModal(opts) {
  var existing = document.getElementById("riwConfirmOverlay");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "riwConfirmOverlay";
  overlay.className = "riw-confirm-overlay";

  var html = '';
  html += '<div class="riw-confirm-modal">';
  html += '<div class="riw-confirm-ic">' + opts.icon + '</div>';
  html += '<h3 class="riw-confirm-title">' + opts.title + '</h3>';
  html += '<p class="riw-confirm-desc">' + opts.desc + '</p>';
  html += '<div class="riw-confirm-actions">';
  html += '<button class="riw-confirm-batal" id="riwConfBatal">Batal</button>';
  html += '<button class="riw-confirm-hapus" id="riwConfHapus">Ya, Hapus</button>';
  html += '</div>';
  html += '</div>';

  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  riwayatState.confirmOpen = true;
  riwayatState.backHandled = false;

  if (!window.__isPopstateHandling) {
    history.pushState({ menu: "riwayat-confirm" }, "", "#riwayat-confirm");
  }

  requestAnimationFrame(function () {
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) riwayatTutupConfirmModal();
  });

  document.getElementById("riwConfBatal").onclick = function () {
    riwayatTutupConfirmModal();
  };

  document.getElementById("riwConfHapus").onclick = function () {
    var callback = opts.onConfirm;

    // === FIX: Instant close, NO fade-out yang bikin kilatan ===
    var el = document.getElementById("riwConfirmOverlay");
    if (el) {
      // Set transition: none — biar langsung hilang
      el.style.transition = "none";
      el.style.background = "rgba(20, 20, 25, 0)";
      el.style.pointerEvents = "none";

      var modal = el.querySelector(".riw-confirm-modal");
      if (modal) {
        modal.style.transition = "none";
        modal.style.opacity = "0";
      }

      setTimeout(function () { el.remove(); }, 10);
    }

    riwayatState.confirmOpen = false;

    // Konsumsi state riwayat-confirm
    if (history.state && history.state.menu === "riwayat-confirm") {
      riwayatState.backHandled = true;
      riwayatState.expectingSelfBack = true;
      history.back();
    }

    // Jalankan callback INSTAN — jangan delay
    if (typeof callback === "function") callback();
  };
}

function riwayatTutupConfirmModal() {
  var el = document.getElementById("riwConfirmOverlay");
  if (el) {
    el.classList.remove("show");
    setTimeout(function () { el.remove(); }, 160);
  }

  riwayatState.confirmOpen = false;

  if (history.state && history.state.menu === "riwayat-confirm") {
    riwayatState.backHandled = true;
    riwayatState.expectingSelfBack = true;
    history.back();
  }
}

// =====================================================
// 6. HAPUS
// =====================================================

function riwayatHapusItem(id) {
  var all = riwayatBacaSemua();
  var next = all.filter(function (it) { return String(it.id) !== String(id); });
  riwayatSimpanSemua(next);

  var listEl = document.getElementById("riwList");
  if (listEl) {
    listEl.innerHTML = riwayatBuildListHTML();
    riwayatAttachSwipeEvents();
  }
  riwayatTampilkanToast("Riwayat berhasil dihapus");
}

function riwayatHapusSemua() {
  riwayatSimpanSemua([]);

  var listEl = document.getElementById("riwList");
  if (listEl) {
    listEl.innerHTML = riwayatBuildListHTML();
    riwayatAttachSwipeEvents();
  }
  riwayatTampilkanToast("Semua riwayat berhasil dihapus");
}

// =====================================================
// 7. TOAST
// =====================================================

function riwayatTampilkanToast(msg) {
  var existing = document.getElementById("riwToast");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.id = "riwToast";
  toast.className = "riw-toast v2-toast";
  toast.innerHTML = '<span class="rt-ic">ℹ️</span> ' + msg;
  document.body.appendChild(toast);

  requestAnimationFrame(function () { toast.classList.add("show"); });

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () { toast.remove(); }, 250);
  }, 2200);
}

// =====================================================
// 8. HANDLE POPSTATE — Fix History Loop
// =====================================================

function riwayatHandlePopstate() {
  if (riwayatState.expectingSelfBack) {
    riwayatState.expectingSelfBack = false;
    return true;
  }

  if (riwayatState.confirmOpen) {
    var el = document.getElementById("riwConfirmOverlay");
    if (el) {
      el.classList.remove("show");
      setTimeout(function () { el.remove(); }, 160);
    }
    riwayatState.confirmOpen = false;
    riwayatState.backHandled = true;
    return true;
  }

  if (riwayatState.openSwipeId) {
    riwayatCloseAllSwipe();
    history.pushState({ menu: "riwayat" }, "", "#riwayat");
    return true;
  }

  return false;
}