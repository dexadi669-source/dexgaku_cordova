// =====================================================
// quiz-render.js
// Logika tampilan menu utama Quiz:
// - Header hero custom (ilustrasi target panah, gunung,
//   pagoda, sakura) dengan tombol back bulat melayang,
//   menggantikan header standar (detail-glyph/title/sub).
// - Kartu pilihan materi quiz: Hiragana & Katakana (2 kolom),
//   Kanji & Kosakata (2 kolom), Grammar (full-width),
//   Campuran N5 (full-width, dengan mascot & jumlah soal).
// =====================================================

/**
 * Membuat HTML lengkap halaman menu utama Quiz, termasuk
 * header hero-nya sendiri (menggantikan header standar).
 * @returns {string}
 */
function renderQuizMenu() {
  var html = "";

  // Header hero: ilustrasi + tombol back bulat + judul
  html += '<div class="quiz-hero">';
  html += '<button class="quiz-hero-back" id="quizBackBtn" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
  html += "</button>";

  html += '<div class="quiz-hero-bg">';
  html += '<span class="quiz-hero-sakura s1">&#127800;</span>';
  html += '<span class="quiz-hero-sakura s2">&#127800;</span>';
  html += '<span class="quiz-hero-sakura s3">&#127800;</span>';
  html += '<span class="quiz-hero-sparkle sp1">&#10022;</span>';
  html += '<span class="quiz-hero-sparkle sp2">&#10022;</span>';
  html += '<span class="quiz-hero-pagoda">&#127961;</span>';
  html += '<span class="quiz-hero-mountain">&#127956;</span>';
  html += "</div>";

  html += '<div class="quiz-hero-target">&#127919;</div>';
  html += '<h1 class="quiz-hero-title">Quiz <span class="quiz-hero-title-accent">N5</span></h1>';
  html += '<p class="quiz-hero-sub">Uji kemampuan bahasa Jepangmu!</p>';
  html += "</div>";

  // Kartu putih besar berisi semua pilihan materi
  html += '<div class="quiz-panel">';

  html += '<p class="quiz-panel-heading">';
  html += '<span class="quiz-heading-star">&#10022;</span> Pilih Materi Quiz <span class="quiz-heading-star">&#10022;</span>';
  html += "</p>";

  html += '<div class="quiz-cat-grid">';
  html += renderQuizCategoryCard("kana", "&#12354;", "icon-red", "Hiragana &amp; Katakana", "Pilih huruf, mode, dan row", "pill-red");
  html += renderQuizCategoryCard("kanji", "&#28450;", "icon-orange", "Kanji", "Pilih kategori dan jumlah soal", "pill-orange");
  html += renderQuizCategoryCard("kotoba", "&#128214;", "icon-green", "Kosakata", "Pilih kategori dan jumlah soal", "pill-green");
  html += "</div>"; // .quiz-cat-grid

  // Grammar: kartu full-width, layout horizontal
  html += '<div class="quiz-wide-card" data-quiz-menu="bunpo">';
  html += '<div class="card-icon icon-purple quiz-wide-icon">&#129513;</div>';
  html += '<div class="quiz-wide-text">';
  html += '<p class="quiz-wide-title">Grammar</p>';
  html += '<p class="quiz-wide-sub">Tebak, lengkapi, dan susun kalimat dengan pola yang tepat</p>';
  html += '<span class="quiz-pill pill-purple">Mulai</span>';
  html += "</div>";
  html += '<span class="quiz-wide-arrow arrow-purple">&#8250;</span>';
  html += "</div>";

  // Campuran N5: kartu full-width dengan mascot
  html += '<div class="quiz-mix-card" data-quiz-menu="campuran">';
  html += '<div class="quiz-mix-left">';
  html += '<div class="card-icon icon-orange-light quiz-wide-icon">&#127922;</div>';
  html += "</div>";
  html += '<div class="quiz-mix-text">';
  html += '<p class="quiz-mix-title">Campuran N5 <span class="quiz-count-pill">40 Soal</span></p>';
  html += '<p class="quiz-mix-sub">Semua materi akan diacak secara random</p>';
  html += '<span class="quiz-mix-btn">Mulai Quiz <span class="quiz-mix-btn-arrow">&#8250;</span></span>';
  html += "</div>";
  html += '<div class="quiz-mix-mascot">&#128021;</div>';
  html += "</div>";

  html += "</div>"; // .quiz-panel

  // Tip footer
  html += '<div class="quiz-tip-banner">';
  html += '<span class="quiz-tip-icon">&#128161;</span>';
  html += '<p class="quiz-tip-text">Pilih materi yang ingin kamu latih sesuai kebutuhanmu. Semangat! &#128170;</p>';
  html += '<span class="quiz-tip-deco">&#127800;</span>';
  html += "</div>";

  return html;
}

/**
 * Membuat HTML satu kartu kategori quiz (Hiragana/Katakana/Kanji/Kosakata).
 * @param {string} menuKey
 * @param {string} glyph
 * @param {string} iconClass - kelas warna ikon (icon-red, icon-blue, dst)
 * @param {string} title
 * @param {string} sub
 * @param {string} pillClass - kelas warna pill "Mulai" (pill-red, pill-blue, dst)
 * @returns {string}
 */
function renderQuizCategoryCard(menuKey, glyph, iconClass, title, sub, pillClass) {
  var html = "";
  html += '<div class="quiz-cat-card ' + pillClass + '-border" data-quiz-menu="' + menuKey + '">';
  html += '<div class="card-icon ' + iconClass + ' quiz-cat-icon">' + glyph + "</div>";
  html += '<p class="quiz-cat-title">' + title + "</p>";
  html += '<p class="quiz-cat-sub">' + sub + "</p>";
  html += '<div class="quiz-cat-bottom">';
  html += '<span class="quiz-pill ' + pillClass + '">Mulai</span>';
  html += '<span class="quiz-cat-arrow arrow-' + pillClass.replace("pill-", "") + '">&#8250;</span>';
  html += "</div>";
  html += "</div>";
  return html;
}

/**
 * Dipanggil dari app.js saat menu Quiz dibuka. Menyembunyikan
 * header standar (glyph/title/sub) dan menampilkan header
 * hero khusus quiz di dalam #detailExtra.
 */
function loadQuizMenu() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");

  detailExtra.innerHTML = renderQuizMenu();
  initQuizBackButton();
  initQuizCardClicks();
}

/**
 * Mengembalikan header standar (dipakai saat pindah dari
 * quiz ke menu lain, supaya menu lain tidak ikut hilang headernya).
 */
function restoreStandardHeader() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.remove("hidden");
  if (standardHeader) standardHeader.classList.remove("hidden");
}

/** Tombol back bulat di hero quiz memanggil history.back() seperti tombol standar. */
function initQuizBackButton() {
  var btn = document.getElementById("quizBackBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      history.back();
    });
  }
}

/**
 * Memasang event klik pada kartu-kartu materi quiz.
 */
function initQuizCardClicks() {
  var cards = detailExtra.querySelectorAll("[data-quiz-menu]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var key = this.getAttribute("data-quiz-menu");
      if (key === "kana") {
        openQuizKanaStep1();
        return;
      }
      if (key === "kanji") {
        openQuizKanjiStep1();
        return;
      }
      if (key === "kotoba") {
        // Membuka langkah pertama Quiz Kosakata
        openQuizKosakataStep1();
        return;
      }
      if (key === "bunpo") {
        openQuizBunpoStep1();
        return;
      }
      if (key === "campuran") {
        // Membuka halaman info Quiz Campuran.
        loadQuizCampuranMenu();
        return;
      }
      console.log("Quiz dipilih:", key);
    });
  }
}

// Utility header visibility for Quiz sub-pages.
// Semua layar Quiz Campuran (info/countdown/play/gameover/hasil/detail)
// dapat memakai header custom tanpa ikon ?/judul standar aplikasi.
function hideStandardHeader() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");
}
