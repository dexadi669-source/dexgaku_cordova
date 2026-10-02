// =====================================================
// DeX Gaku — rangkuman-render.js
// Halaman "Rangkuman" dengan UI Modern, fixed position
// dan Header gambar + konten melengkung bergaya Bunpo.
// =====================================================

var rangkumanState = {
  activeBabIndex: 0
};

// =====================================================
// 1. MENU UTAMA RANGKUMAN
// =====================================================

function loadRangkumanMenu() {
  if (typeof hideStandardHeader === "function") hideStandardHeader();
  var container = document.getElementById("detailExtra");
  if (!container) return;
  container.innerHTML = rkBuildMenuHTML();
  rkAttachMenuEvents();
}

function rkBuildMenuHTML() {
  var html = "";
  html += '<div class="rk-page">';

  // -- HEADER --
  html += '<div class="rk-header">';
  html += '<button class="rk-back-btn" id="rkBackBtn" aria-label="Kembali">&#10094; &nbsp;Kembali</button>';
  html += '<div class="rk-header-text">';
  html += '<h1 class="rk-title">Rangkuman</h1>';
  html += '<p class="rk-header-sub">Materi belajar &amp; referensi Bahasa Jepang kamu.</p>';
  html += '</div>';
  html += '</div>';

  // -- KONTEN LIST BAWAH --
  html += '<div class="rk-content">';
  html += '<div class="rk-menu-list">';
  html += rkMenuCard("mina", "&#128218;", "MINANIHINGO", "Buku pelajaran, rangkuman per bab", true);
  html += rkMenuCard("kotoba", "&#128221;", "Rangkuman Kotoba Bab 1-50", "Buka daftar kosakata lengkap", false);
  html += rkMenuCard("iradori", "&#127919;", "Test Iradori A1", "Latihan soal dari folder Drive", false);
  html += rkMenuCard("dongeng", "&#128213;", "Buku Dongeng", "Kumpulan cerita Bahasa Jepang", false);
  html += '</div>';
  html += '</div>';

  html += '</div>';
  return html;
}

function rkMenuCard(key, icon, title, desc, expandable) {
  var html = "";
  html += '<div class="rk-card" data-rk-key="' + key + '">';
  html += '<div class="rk-card-icon">' + icon + "</div>";
  html += '<div class="rk-card-text">';
  html += '<p class="rk-card-title">' + title + "</p>";
  html += '<p class="rk-card-desc">' + desc + "</p>";
  html += "</div>";
  html += '<span class="rk-card-arrow">&#8250;</span>';
  html += "</div>";
  return html;
}

function rkAttachMenuEvents() {
  var backBtn = document.getElementById("rkBackBtn");
  if (backBtn) {
    backBtn.onclick = function (e) { 
      e.preventDefault(); 
      history.back(); 
    };
  }

  var cards = document.querySelectorAll(".rk-card[data-rk-key]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var key = this.getAttribute("data-rk-key");
      rkHandleMenuClick(key);
    });
  }
}

function rkHandleMenuClick(key) {
  if (key === "mina") {
    history.pushState({ menu: "rangkuman", rkStep: "mina" }, "", "#rangkuman-mina");
    rkRenderMinaSubmenu();
  } else if (key === "kotoba") {
    history.pushState({ menu: "rangkuman", rkStep: "viewer", rkViewerType: "file", rkViewerKey: "kotobaBab1_50" }, "", "#rangkuman-kotoba");
    rkRenderDriveViewer("file", "kotobaBab1_50");
  } else if (key === "iradori") {
    history.pushState({ menu: "rangkuman", rkStep: "viewer", rkViewerType: "folder", rkViewerKey: "iradori" }, "", "#rangkuman-iradori");
    rkRenderDriveViewer("folder", "iradori");
  } else if (key === "dongeng") {
    history.pushState({ menu: "rangkuman", rkStep: "viewer", rkViewerType: "folder", rkViewerKey: "dongeng" }, "", "#rangkuman-dongeng");
    rkRenderDriveViewer("folder", "dongeng");
  }
}

// =====================================================
// 2. SUBMENU MINANIHINGO
// =====================================================

function rkRenderMinaSubmenu() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var html = "";
  html += '<div class="rk-page">';
  
  html += '<div class="rk-header">';
  html += '<button class="rk-back-btn" id="rkBackBtn" aria-label="Kembali">&#10094; &nbsp;Kembali</button>';
  html += '<div class="rk-header-text">';
  html += '<h1 class="rk-title">MINANIHINGO</h1>';
  html += '<p class="rk-header-sub">Pilih buku atau rangkuman per bab.</p>';
  html += '</div>';
  html += '</div>';

  html += '<div class="rk-content">';
  html += '<div class="rk-menu-list">';
  html += rkMenuCard("mina1", "&#128217;", "Minna no Nihongo 1", "Buka buku (file Drive)", false);
  html += rkMenuCard("mina2", "&#128216;", "Minna no Nihongo 2", "Buka buku (file Drive)", false);
  html += rkMenuCard("babList", "&#9997;&#65039;", "Rangkuman Bab", "Baca rangkuman Bab 1 - 25", true);
  html += '</div>';
  html += '</div>';
  
  html += '</div>';

  container.innerHTML = html;

  document.getElementById("rkBackBtn").onclick = function (e) { 
    e.preventDefault(); 
    history.back(); 
  };
  
  var cards = container.querySelectorAll(".rk-card[data-rk-key]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var key = this.getAttribute("data-rk-key");
      if (key === "mina1" || key === "mina2") {
        history.pushState({ menu: "rangkuman", rkStep: "viewer", rkViewerType: "file", rkViewerKey: key }, "", "#rangkuman-" + key);
        rkRenderDriveViewer("file", key);
      } else if (key === "babList") {
        history.pushState({ menu: "rangkuman", rkStep: "babList" }, "", "#rangkuman-bab-list");
        rkRenderBabList();
      }
    });
  }
}

// =====================================================
// 3. DAFTAR BAB (1-25)
// =====================================================
function rkRenderBabList() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var html = "";
  html += '<div class="rk-page">';
  
  html += '<div class="rk-header">';
  html += '<button class="rk-back-btn" id="rkBackBtn" aria-label="Kembali">&#10094; &nbsp;Kembali</button>';
  html += '<div class="rk-header-text">';
  html += '<h1 class="rk-title">Rangkuman Bab</h1>';
  html += '<p class="rk-header-sub">Minna no Nihongo &middot; Bab 1 sampai 25</p>';
  html += '</div>';
  html += '</div>';

  html += '<div class="rk-content">';
  html += '<div class="rk-bab-grid">';
  for (var i = 0; i < RANGKUMAN_BAB_LIST.length; i++) {
    var bab = RANGKUMAN_BAB_LIST[i];
    var nomor = (i + 1 < 10 ? "0" : "") + (i + 1);
    html += '<div class="rk-bab-card" data-bab-idx="' + i + '">';
    html += '<span class="rk-bab-nomor">' + nomor + "</span>";
    html += '<div class="rk-bab-text">';
    html += '<p class="rk-bab-label">Bab ' + (i + 1) + "</p>";
    html += '<p class="rk-bab-judul">' + bab.judul + "</p>";
    html += "</div>";
    html += '<span class="rk-card-arrow">&#8250;</span>';
    html += "</div>";
  }
  html += '</div>';
  html += '</div>';
  
  html += '</div>';

  container.innerHTML = html;

  document.getElementById("rkBackBtn").onclick = function (e) { 
    e.preventDefault(); 
    history.back(); 
  };
  
  var babCards = container.querySelectorAll(".rk-bab-card");
  for (var j = 0; j < babCards.length; j++) {
    babCards[j].addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-bab-idx"), 10);
      history.pushState({ menu: "rangkuman", rkStep: "babDetail", rkBabIdx: idx }, "", "#rangkuman-bab-" + (idx + 1));
      rkRenderBabDetail(idx);
    });
  }
}

// =====================================================
// 4. DETAIL SATU BAB
// =====================================================

function rkRenderBabDetail(idx) {
  var bab = RANGKUMAN_BAB_LIST[idx];
  if (!bab) return;
  rangkumanState.activeBabIndex = idx;

  var container = document.getElementById("detailExtra");
  if (!container) return;

  var html = "";
  html += '<div class="rk-page">';

  html += '<div class="rk-header">';
  html += '<button class="rk-back-btn" id="rkBackBtn" aria-label="Kembali">&#10094; &nbsp;Kembali</button>';
  html += '<div class="rk-header-text">';
  html += '<p class="rk-header-sub" style="font-weight:700; margin-bottom:4px;">Bab ' + (idx + 1) + '</p>';
  html += '<h1 class="rk-title" style="font-size:22px; line-height:1.3;">' + bab.judul + '</h1>';
  html += '</div>';
  html += '</div>';

  html += '<div class="rk-content">';

  html += '<div class="rk-section rk-section-fokus">';
  html += '<p class="rk-section-label">&#127919; Fokus Bab</p>';
  html += '<p class="rk-fokus-text">' + bab.fokus + "</p>";
  html += "</div>";

  if (bab.pola && bab.pola.length) {
    html += '<div class="rk-section">';
    html += '<p class="rk-section-label">&#128204; Pola Kalimat</p>';
    for (var i = 0; i < bab.pola.length; i++) {
      var p = bab.pola[i];
      if (p.judul) {
        html += '<div class="rk-pola-block">';
        html += '<p class="rk-pola-judul">' + p.judul + "</p>";
        if (p.fungsi) html += '<p class="rk-pola-fungsi">' + p.fungsi + "</p>";
        html += '<p class="rk-jp-text">' + p.jp + "</p>";
      } else {
        html += '<div class="rk-pola-example">';
        html += '<p class="rk-jp-text">' + p.jp + "</p>";
        if (p.baca) html += '<p class="rk-baca-text">' + p.baca + "</p>";
        if (p.arti) html += '<p class="rk-arti-text">' + p.arti + "</p>";
        html += "</div>";
        if (i === bab.pola.length - 1 || bab.pola[i + 1].judul) html += "</div>";
        continue;
      }
    }
    html += "</div>";
  }

  if (bab.partikel && bab.partikel.length) {
    html += '<div class="rk-section">';
    html += '<p class="rk-section-label">&#128290; Partikel Penting</p>';
    for (var j = 0; j < bab.partikel.length; j++) {
      var pt = bab.partikel[j];
      if (pt.partikel) {
        html += '<div class="rk-partikel-card">';
        html += '<span class="rk-partikel-badge">' + pt.partikel + "</span>";
        if (pt.fungsi) html += '<p class="rk-partikel-fungsi">' + pt.fungsi + "</p>";
        if (pt.jp) html += '<p class="rk-jp-text" style="font-size:15px;">' + pt.jp + "</p>";
        if (pt.arti) html += '<p class="rk-arti-text">' + pt.arti + "</p>";
        html += "</div>";
      }
    }
    html += "</div>";
  }

  if (bab.katapenting && bab.katapenting.length) {
    html += '<div class="rk-section">';
    html += '<p class="rk-section-label">&#128221; Kata / Pola Penting</p>';
    html += '<ul class="rk-list">';
    for (var k = 0; k < bab.katapenting.length; k++) {
      html += "<li>" + bab.katapenting[k] + "</li>";
    }
    html += "</ul>";
    html += "</div>";
  }

  if (bab.contoh && bab.contoh.length) {
    html += '<div class="rk-section">';
    html += '<p class="rk-section-label">&#128172; Contoh Kalimat</p>';
    for (var m = 0; m < bab.contoh.length; m++) {
      var c = bab.contoh[m];
      html += '<div class="rk-contoh-card">';
      html += '<p class="rk-jp-text">' + c.jp + "</p>";
      if (c.baca) html += '<p class="rk-baca-text">' + c.baca + "</p>";
      if (c.arti) html += '<p class="rk-arti-text">' + c.arti + "</p>";
      html += "</div>";
    }
    html += "</div>";
  }

  if (bab.catatan && bab.catatan.length) {
    html += '<div class="rk-section rk-section-catatan">';
    html += '<p class="rk-section-label">&#9888;&#65039; Catatan Penting</p>';
    html += '<ul class="rk-list rk-list-catatan">';
    for (var n = 0; n < bab.catatan.length; n++) {
      html += "<li>" + bab.catatan[n] + "</li>";
    }
    html += "</ul>";
    html += "</div>";
  }

  if (bab.ringkasan && bab.ringkasan.length) {
    html += '<div class="rk-section">';
    html += '<p class="rk-section-label">&#129504; Ringkasan Cepat</p>';
    html += '<div class="rk-ringkasan-chips">';
    for (var o = 0; o < bab.ringkasan.length; o++) {
      html += '<span class="rk-chip">' + bab.ringkasan[o] + "</span>";
    }
    html += "</div>";
    html += "</div>";
  }

  html += '<div class="rk-bab-nav">';
  if (idx > 0) {
    html += '<button class="rk-bab-nav-btn" id="rkBabPrevBtn">&#10094; &nbsp; Bab ' + idx + "</button>";
  } else {
    html += "<span></span>";
  }
  if (idx < RANGKUMAN_BAB_LIST.length - 1) {
    html += '<button class="rk-bab-nav-btn primary" id="rkBabNextBtn">Bab ' + (idx + 2) + " &nbsp; &#10095;</button>";
  } else {
    html += "<span></span>";
  }
  html += "</div>";

  html += "</div>"; // Tutup rk-content
  html += "</div>"; // Tutup rk-page

  container.innerHTML = html;

  document.getElementById("rkBackBtn").onclick = function (e) { 
    e.preventDefault(); 
    history.back(); 
  };

  var prevBtn = document.getElementById("rkBabPrevBtn");
  if (prevBtn) {
    prevBtn.onclick = function () {
      history.replaceState({ menu: "rangkuman", rkStep: "babDetail", rkBabIdx: idx - 1 }, "", "#rangkuman-bab-" + idx);
      rkRenderBabDetail(idx - 1);
      // Scroll halaman ke atas kembali setelah pindah bab
      container.querySelector('.rk-page').scrollTop = 0;
    };
  }
  var nextBtn = document.getElementById("rkBabNextBtn");
  if (nextBtn) {
    nextBtn.onclick = function () {
      history.replaceState({ menu: "rangkuman", rkStep: "babDetail", rkBabIdx: idx + 1 }, "", "#rangkuman-bab-" + (idx + 2));
      rkRenderBabDetail(idx + 1);
      // Scroll halaman ke atas kembali setelah pindah bab
      container.querySelector('.rk-page').scrollTop = 0;
    };
  }
}

// =====================================================
// 5. VIEWER GOOGLE DRIVE
// =====================================================

function rkRenderDriveViewer(type, key) {
  var viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes");
  }

  var linkData = RANGKUMAN_DRIVE_LINKS[key];
  if (!linkData) return;

  var container = document.getElementById("detailExtra");
  if (!container) return;

  var src;
  if (type === "file") {
    src = "https://drive.google.com/file/d/" + linkData.fileId + "/preview";
  } else {
    src = "https://drive.google.com/embeddedfolderview?id=" + linkData.folderId + "#list";
  }

  var html = "";
  html += '<div class="rk-viewer-page">';
  html += '<div class="rk-viewer-header">';
  html += '<button class="rk-viewer-back" id="rkViewerBackBtn" aria-label="Kembali">&#10094;</button>';
  html += '<p class="rk-viewer-title">' + linkData.title + "</p>";
  html += "</div>";
  html += '<div class="rk-viewer-frame-wrap">';
  html += '<div class="rk-viewer-loading" id="rkViewerLoading"><span class="rk-spinner"></span>Memuat&hellip;</div>';
  html += '<iframe class="rk-viewer-iframe" id="rkViewerIframe" src="' + src + '" allow="autoplay" loading="lazy"></iframe>';
  html += "</div>";
  html += "</div>";

  container.innerHTML = html;

  document.getElementById("rkViewerBackBtn").onclick = function (e) { 
    e.preventDefault();
    if (viewportMeta) {
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
    }
    history.back(); 
  };

  var iframe = document.getElementById("rkViewerIframe");
  var loadingEl = document.getElementById("rkViewerLoading");
  if (iframe && loadingEl) {
    iframe.addEventListener("load", function () {
      loadingEl.classList.add("rk-hidden");
    });
  }
}

// =====================================================
// 6. NAVIGASI MUNDUR (popstate)
// =====================================================

function handleRangkumanPopstate(state) {
  var viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
  }

  var step = state && state.rkStep;

  if (step === "viewer" && state.rkViewerType && state.rkViewerKey) {
    rkRenderDriveViewer(state.rkViewerType, state.rkViewerKey);
    return;
  }
  if (step === "babDetail" && typeof state.rkBabIdx === "number") {
    rkRenderBabDetail(state.rkBabIdx);
    return;
  }
  if (step === "babList") {
    rkRenderBabList();
    return;
  }
  if (step === "mina") {
    rkRenderMinaSubmenu();
    return;
  }
  loadRangkumanMenu();
}
