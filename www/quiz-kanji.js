// =====================================================
// quiz-kanji.js
// Alur lengkap Quiz Kanji dengan Auto-Unwind History
// =====================================================

var QUIZ_KANJI_STATE = {
  kategoriTerpilih: [],
  jenisSoal: "campuran",
  jumlahSoal: null,
  soalList: [],
  soalTipeList: [],
  currentIndex: 0,
  nyawa: 3,
  benar: 0,
  salah: 0,
  jawabanLog: [],
  timerId: null,
  timerRemaining: 30,
  waktuMulaiSoal: 0,
  isFinished: false,
  isUnwinding: false
};

var QUIZ_KANJI_TIMER_SECONDS = 30;
var QUIZ_KANJI_NYAWA_AWAL = 3;
var QUIZ_KANJI_JUMLAH_OPSI = [5, 10, 15, 20, "semua"];
var QUIZ_KANJI_TIPE_SOAL = ["kanji-arti", "arti-kanji", "kanji-bacaan", "bacaan-kanji"];

var QUIZ_KANJI_JENIS_OPSI = [
  { id: "kanji-arti", label: "Kanji - Arti", sub: "Tebak arti Kanji", color: "blue" },
  { id: "arti-kanji", label: "Arti - Kanji", sub: "Pilih Kanji dari arti", color: "pink" },
  { id: "kanji-bacaan", label: "Kanji - Bacaan", sub: "Tebak cara baca", color: "green" },
  { id: "bacaan-kanji", label: "Bacaan - Kanji", sub: "Pilih Kanji dari bacaan", color: "orange" },
  { id: "campuran", label: "Campuran", sub: "Semua diacak", color: "purple" }
];

// =====================================================
// UTIL
// =====================================================

function quizKanjiGroupByCategory() {
  var grouped = {};
  for (var i = 0; i < KANJI_DATA.length; i++) {
    var item = KANJI_DATA[i];
    if (!grouped[item.kategori]) grouped[item.kategori] = [];
    grouped[item.kategori].push(item);
  }
  return grouped;
}

/** @param {Array} arr */
function quizKanjiShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function quizKanjiPushHistory(step, hash) {
  history.pushState({ menu: "quiz", quizStep: step }, "", hash);
}

// =====================================================
// LANGKAH 1: Pilih Kategori (multi-select)
// =====================================================

/** @param {boolean} [isPopstate] */
function openQuizKanjiStep1(isPopstate) {
  QUIZ_KANJI_STATE.kategoriTerpilih = [];
  QUIZ_KANJI_STATE.jumlahSoal = null;
  QUIZ_KANJI_STATE.isFinished = false;
  QUIZ_KANJI_STATE.isUnwinding = false;

  var grouped = quizKanjiGroupByCategory();

  var html = "";
  html += quizKanjiStepHeader("Quiz Kanji", "Uji kemampuan Kanji yang sudah kamu pelajari.");

  html += '<div class="quizkj-cat-grid" id="quizkjCatGrid">';
  for (var i = 0; i < KANJI_CATEGORIES.length; i++) {
    var cat = KANJI_CATEGORIES[i];
    var items = grouped[cat];
    if (!items || items.length === 0) continue;

    var icon = KANJI_CATEGORY_ICON[cat] || "&#26085;";
    var color = kanjiCategoryColor(cat);

    html += '<div class="quizkj-cat-card" data-cat="' + escapeHtml(cat) + '" data-count="' + items.length + '">';
    html += '<span class="quizkj-cat-check">&#10003;</span>';
    html += '<div class="quizkj-cat-badge badge-' + color + '">' + icon + "</div>";
    html += '<p class="quizkj-cat-name">' + cat + "</p>";
    html += '<p class="quizkj-cat-count">' + items.length + " Kanji</p>";
    html += "</div>";
  }
  html += "</div>";

  html += '<div class="quizkj-summary" id="quizkjCatSummary">Pilih minimal 1 kategori</div>';

  html += '<button type="button" class="quizkj-next-btn" id="quizkjStep1Next" disabled>Lanjut <span class="quizkj-next-arrow">&#8594;</span></button>';

  detailExtra.innerHTML = html;
  initQuizKanjiHeaderBack(function () { history.back(); });
  initQuizKanjiStep1Clicks(grouped);

  if (!isPopstate) quizKanjiPushHistory("kanji-1", "#quiz-kanji-1");
}

function initQuizKanjiStep1Clicks(grouped) {
  var cards = detailExtra.querySelectorAll(".quizkj-cat-card");
  var summary = document.getElementById("quizkjCatSummary");
  var nextBtn = document.getElementById("quizkjStep1Next");

  function updateSummary() {
    var totalKanji = 0;
    for (var i = 0; i < QUIZ_KANJI_STATE.kategoriTerpilih.length; i++) {
      totalKanji += grouped[QUIZ_KANJI_STATE.kategoriTerpilih[i]].length;
    }
    if (QUIZ_KANJI_STATE.kategoriTerpilih.length === 0) {
      summary.textContent = "Pilih minimal 1 kategori";
      nextBtn.disabled = true;
    } else {
      summary.innerHTML =
        '<strong>' + QUIZ_KANJI_STATE.kategoriTerpilih.length + " kategori</strong> dipilih &middot; " +
        "<strong>" + totalKanji + " Kanji</strong> tersedia";
      nextBtn.disabled = false;
    }
  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var cat = this.getAttribute("data-cat");
      var idx = QUIZ_KANJI_STATE.kategoriTerpilih.indexOf(cat);

      this.classList.add("quizkj-tap-scale-sm");
      var el = this;
      setTimeout(function () { el.classList.remove("quizkj-tap-scale-sm"); }, 200);

      if (idx === -1) {
        QUIZ_KANJI_STATE.kategoriTerpilih.push(cat);
        this.classList.add("selected");
      } else {
        QUIZ_KANJI_STATE.kategoriTerpilih.splice(idx, 1);
        this.classList.remove("selected");
      }
      updateSummary();
    });
  }

  nextBtn.addEventListener("click", function () {
    if (QUIZ_KANJI_STATE.kategoriTerpilih.length === 0) return;
    openQuizKanjiStepJenis(false);
  });
}

// =====================================================
// LANGKAH 2: Pilih Jenis Soal
// =====================================================

/** @param {boolean} [isPopstate] */
function openQuizKanjiStepJenis(isPopstate) {
  var html = "";
  html += quizKanjiStepHeader("Jenis Soal", "Pilih tipe soal yang ingin dikerjakan.");

  html += '<div class="quizkj-cat-grid">';
  for (var i = 0; i < QUIZ_KANJI_JENIS_OPSI.length; i++) {
    var opt = QUIZ_KANJI_JENIS_OPSI[i];
    var isSelected = QUIZ_KANJI_STATE.jenisSoal === opt.id;
    html += '<div class="quizkj-cat-card' + (isSelected ? ' selected' : '') + '" data-jenis="' + opt.id + '">';
    html += '<span class="quizkj-cat-check">&#10003;</span>';
    html += '<div class="quizkj-cat-badge badge-' + opt.color + '">&#128221;</div>';
    html += '<p class="quizkj-cat-name">' + opt.label + '</p>';
    html += '<p class="quizkj-cat-count">' + opt.sub + '</p>';
    html += '</div>';
  }
  html += '</div>';

  var btnState = QUIZ_KANJI_STATE.jenisSoal ? "" : "disabled";
  html += '<button type="button" class="quizkj-next-btn" id="quizkjStepJenisNext" ' + btnState + '>Lanjut <span class="quizkj-next-arrow">&#8594;</span></button>';

  detailExtra.innerHTML = html;
  initQuizKanjiHeaderBack(function () { history.back(); });
  initQuizKanjiStepJenisClicks();

  if (!isPopstate) quizKanjiPushHistory("kanji-jenis", "#quiz-kanji-jenis");
}

function initQuizKanjiStepJenisClicks() {
  var cards = detailExtra.querySelectorAll(".quizkj-cat-card");
  var nextBtn = document.getElementById("quizkjStepJenisNext");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      // Hapus status selected dari kartu lain
      for (var j = 0; j < cards.length; j++) {
        cards[j].classList.remove("selected");
      }
      
      QUIZ_KANJI_STATE.jenisSoal = this.getAttribute("data-jenis");
      this.classList.add("selected", "quizkj-tap-scale-sm");
      nextBtn.disabled = false;
      
      var el = this;
      setTimeout(function () { el.classList.remove("quizkj-tap-scale-sm"); }, 200);
    });
  }

  nextBtn.addEventListener("click", function () {
    if (!QUIZ_KANJI_STATE.jenisSoal) return;
    openQuizKanjiStep2(false);
  });
}

// =====================================================
// LANGKAH 3: Pilih Jumlah Soal
// =====================================================

function quizKanjiTotalTersedia() {
  var grouped = quizKanjiGroupByCategory();
  var total = 0;
  for (var i = 0; i < QUIZ_KANJI_STATE.kategoriTerpilih.length; i++) {
    total += grouped[QUIZ_KANJI_STATE.kategoriTerpilih[i]].length;
  }
  return total;
}

/** @param {boolean} [isPopstate] */
function openQuizKanjiStep2(isPopstate) {
  var totalTersedia = quizKanjiTotalTersedia();

  var html = "";
  html += quizKanjiStepHeader("Jumlah Soal", "Pilih berapa Kanji yang ingin kamu ujikan.");

  html += '<div class="quizkj-jumlah-grid">';
  for (var i = 0; i < QUIZ_KANJI_JUMLAH_OPSI.length; i++) {
    var opt = QUIZ_KANJI_JUMLAH_OPSI[i];
    var isSemua = opt === "semua";
    var disabled = !isSemua && opt > totalTersedia;
    var label = isSemua ? "Semua" : opt + " Soal";
    var wideClass = isSemua ? " quizkj-jumlah-wide" : "";

    html += '<button type="button" class="quizkj-jumlah-card' + wideClass + (disabled ? " disabled" : "") + '" ';
    html += 'data-value="' + opt + '"' + (disabled ? " disabled" : "") + '>' + label + "</button>";
  }
  html += "</div>";

  html += '<p class="quizkj-tersedia-note">' + totalTersedia + " Kanji tersedia &middot; Jumlah soal maksimal: " + totalTersedia + "</p>";

  detailExtra.innerHTML = html;
  initQuizKanjiHeaderBack(function () { history.back(); });
  initQuizKanjiStep2Clicks();

  if (!isPopstate) quizKanjiPushHistory("kanji-2", "#quiz-kanji-2");
}

function initQuizKanjiStep2Clicks() {
  var cards = detailExtra.querySelectorAll(".quizkj-jumlah-card:not(.disabled)");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var val = this.getAttribute("data-value");
      QUIZ_KANJI_STATE.jumlahSoal = val === "semua" ? "semua" : parseInt(val, 10);

      var el = this;
      el.classList.add("quizkj-tap-scale-sm");
      setTimeout(function () {
        buildQuizKanjiSoalList();
        openQuizKanjiStep3(false);
      }, 160);
    });
  }
}

function buildQuizKanjiSoalList() {
  var grouped = quizKanjiGroupByCategory();
  var pool = [];

  for (var i = 0; i < KANJI_CATEGORIES.length; i++) {
    var cat = KANJI_CATEGORIES[i];
    if (QUIZ_KANJI_STATE.kategoriTerpilih.indexOf(cat) === -1) continue;
    var items = grouped[cat] || [];
    for (var j = 0; j < items.length; j++) pool.push(items[j]);
  }

  var jumlah = QUIZ_KANJI_STATE.jumlahSoal === "semua" ? pool.length : Math.min(QUIZ_KANJI_STATE.jumlahSoal, pool.length);

  var dipilih = pool.slice(0, jumlah);
  var diacak = quizKanjiShuffle(dipilih);

  QUIZ_KANJI_STATE.soalList = diacak;
  QUIZ_KANJI_STATE.soalTipeList = diacak.map(function () {
    if (QUIZ_KANJI_STATE.jenisSoal === "campuran") {
      return QUIZ_KANJI_TIPE_SOAL[Math.floor(Math.random() * QUIZ_KANJI_TIPE_SOAL.length)];
    }
    return QUIZ_KANJI_STATE.jenisSoal;
  });
}

// =====================================================
// LANGKAH 4: Konfirmasi
// =====================================================

/** @param {boolean} [isPopstate] */
function openQuizKanjiStep3(isPopstate) {
  var html = "";
  html += quizKanjiStepHeader("Siap untuk memulai?", "Periksa kembali pilihanmu sebelum memulai.");

  var jenisLabel = "Campuran";
  for (var k = 0; k < QUIZ_KANJI_JENIS_OPSI.length; k++) {
    if (QUIZ_KANJI_JENIS_OPSI[k].id === QUIZ_KANJI_STATE.jenisSoal) {
      jenisLabel = QUIZ_KANJI_JENIS_OPSI[k].label;
    }
  }

  html += '<div class="quizkj-confirm-card">';
  html += quizKanjiConfirmRow("&#128193;", "Kategori", QUIZ_KANJI_STATE.kategoriTerpilih.join(" &middot; "), "purple");
  html += quizKanjiConfirmRow("&#128221;", "Jenis Soal", jenisLabel, "orange");
  html += quizKanjiConfirmRow("&#128202;", "Jumlah Soal", QUIZ_KANJI_STATE.soalList.length + " soal", "green");
  html += "</div>";

  html += '<p class="quizkj-confirm-highlight">' + QUIZ_KANJI_STATE.soalList.length + " Kanji akan diujikan</p>";

  html += '<button type="button" class="quizkj-start-btn" id="quizkjStartBtn">&#9654; Mulai Quiz</button>';

  detailExtra.innerHTML = html;
  initQuizKanjiHeaderBack(function () { history.back(); });

  document.getElementById("quizkjStartBtn").addEventListener("click", function () {
    startQuizKanjiGameplay();
  });

  if (!isPopstate) quizKanjiPushHistory("kanji-3", "#quiz-kanji-3");
}

function quizKanjiConfirmRow(glyph, label, value, color) {
  var html = "";
  html += '<div class="quizkj-confirm-row">';
  html += '<div class="quizkj-confirm-icon quizkj-color-' + color + '">' + glyph + "</div>";
  html += '<div class="quizkj-confirm-text">';
  html += '<p class="quizkj-confirm-label">' + label + "</p>";
  html += '<p class="quizkj-confirm-value">' + value + "</p>";
  html += "</div>";
  html += "</div>";
  return html;
}

// =====================================================
// GAMEPLAY
// =====================================================

function startQuizKanjiGameplay() {
  QUIZ_KANJI_STATE.currentIndex = 0;
  QUIZ_KANJI_STATE.nyawa = QUIZ_KANJI_NYAWA_AWAL;
  QUIZ_KANJI_STATE.benar = 0;
  QUIZ_KANJI_STATE.salah = 0;
  QUIZ_KANJI_STATE.jawabanLog = [];
  QUIZ_KANJI_STATE.isFinished = false;
  QUIZ_KANJI_STATE.isUnwinding = false;

  quizKanjiPushHistory("kanji-play", "#quiz-kanji-play");
  renderQuizKanjiSoal();
}

function quizKanjiGetSoalContent(item, tipe) {
  var arti = capitalize(item.arti);
  var bacaan = firstReading(item);

  if (tipe === "kanji-arti") {
    return { pertanyaan: "Apakah arti Kanji ini?", tampilan: item.kanji, isKanjiBesar: true, benar: arti };
  }
  if (tipe === "arti-kanji") {
    return { pertanyaan: "Kanji mana yang berarti ini?", tampilan: arti, isKanjiBesar: false, benar: item.kanji };
  }
  if (tipe === "kanji-bacaan") {
    return { pertanyaan: "Bagaimana cara membaca Kanji ini?", tampilan: item.kanji, isKanjiBesar: true, benar: bacaan };
  }
  return { pertanyaan: "Kanji mana yang dibaca seperti ini?", tampilan: bacaan, isKanjiBesar: false, benar: item.kanji };
}

function quizKanjiBuildOptions(item, tipe, benar) {
  var pool = QUIZ_KANJI_STATE.soalList.filter(function (it) { return it.no !== item.no; });
  var shuffled = quizKanjiShuffle(pool);
  var distractors = shuffled.slice(0, 2);

  var options = [benar];
  for (var i = 0; i < distractors.length; i++) {
    var d = distractors[i];
    if (tipe === "kanji-arti") options.push(capitalize(d.arti));
    else if (tipe === "arti-kanji") options.push(d.kanji);
    else if (tipe === "kanji-bacaan") options.push(firstReading(d));
    else options.push(d.kanji);
  }

  return quizKanjiShuffle(options);
}

function renderQuizKanjiSoal() {
  clearQuizKanjiTimer();

  var idx = QUIZ_KANJI_STATE.currentIndex;
  var total = QUIZ_KANJI_STATE.soalList.length;
  var item = QUIZ_KANJI_STATE.soalList[idx];
  var tipe = QUIZ_KANJI_STATE.soalTipeList[idx];
  var percent = Math.round((idx / total) * 100);

  var content = quizKanjiGetSoalContent(item, tipe);
  var options = quizKanjiBuildOptions(item, tipe, content.benar);

  var html = "";
  html += '<img src="assets/quiz-kanji-bg.svg" alt="" class="quizkj-bg-deco" onerror="this.style.display=\'none\'">';
  html += '<div class="quizkj-play-topbar">';
  html += '<button type="button" class="quizkj-exit-btn" id="quizkjExitBtn" aria-label="Keluar">&#10005;</button>';
  html += '<div class="quizkj-hearts" id="quizkjHearts">' + quizKanjiRenderHearts() + "</div>";
  html += '<div class="quizkj-timer-badge" id="quizkjTimerBadge">' + QUIZ_KANJI_TIMER_SECONDS + "</div>";
  html += "</div>";

  html += '<div class="quizkj-progress-row">';
  html += '<span class="quizkj-progress-count">' + (idx + 1) + " / " + total + "</span>";
  html += "</div>";
  html += '<div class="quizkj-progress-track"><div class="quizkj-progress-fill" id="quizkjProgressFill" style="width:' + percent + '%"></div></div>';

  html += '<p class="quizkj-question-label">' + content.pertanyaan + "</p>";

  if (content.isKanjiBesar) {
    html += '<div class="quizkj-char-circle" id="quizkjCharCircle">' + content.tampilan + "</div>";
  } else {
    html += '<div class="quizkj-text-circle" id="quizkjCharCircle">' + content.tampilan + "</div>";
  }

  html += '<div class="quizkj-options" id="quizkjOptions">';
  for (var i = 0; i < options.length; i++) {
    var optClass = tipe === "arti-kanji" || tipe === "bacaan-kanji" ? "quizkj-option-btn quizkj-option-kanji" : "quizkj-option-btn";
    html += '<button type="button" class="' + optClass + '" data-value="' + escapeHtml(options[i]) + '">' + options[i] + "</button>";
  }
  html += "</div>";

  html += '<div class="quizkj-timeout-banner hidden" id="quizkjTimeoutBanner">';
  html += '<span class="quizkj-timeout-icon">&#9200;</span>';
  html += '<div><p class="quizkj-timeout-title">Waktu habis!</p><p class="quizkj-timeout-sub">Soal ini akan dianggap salah.</p></div>';
  html += "</div>";

  detailExtra.innerHTML = html;
  detailExtra.classList.remove("quizkj-fade-slide");
  void detailExtra.offsetWidth;
  detailExtra.classList.add("quizkj-fade-slide");

  document.getElementById("quizkjExitBtn").addEventListener("click", function () {
    openQuizKanjiExitConfirm();
  });

  var optBtns = detailExtra.querySelectorAll(".quizkj-option-btn");
  for (var b = 0; b < optBtns.length; b++) {
    optBtns[b].addEventListener("click", function () {
      quizKanjiSubmitAnswer(this.getAttribute("data-value"), item, tipe, content.benar);
    });
  }

  QUIZ_KANJI_STATE.waktuMulaiSoal = Date.now();
  QUIZ_KANJI_STATE.timerRemaining = QUIZ_KANJI_TIMER_SECONDS;
  startQuizKanjiTimer();
}

function quizKanjiRenderHearts() {
  var html = "";
  for (var i = 0; i < QUIZ_KANJI_NYAWA_AWAL; i++) {
    var filled = i < QUIZ_KANJI_STATE.nyawa;
    html += '<span class="quizkj-heart' + (filled ? " filled" : " empty") + '">' + (filled ? "&#10084;&#65039;" : "&#129293;") + "</span>";
  }
  return html;
}

function startQuizKanjiTimer() {
  var badge = document.getElementById("quizkjTimerBadge");
  QUIZ_KANJI_STATE.timerId = setInterval(function () {
    QUIZ_KANJI_STATE.timerRemaining--;
    if (badge) {
      badge.textContent = QUIZ_KANJI_STATE.timerRemaining;
      if (QUIZ_KANJI_STATE.timerRemaining <= 5) badge.classList.add("urgent");
    }
    if (QUIZ_KANJI_STATE.timerRemaining <= 0) {
      clearQuizKanjiTimer();
      quizKanjiHandleTimeout();
    }
  }, 1000);
}

function clearQuizKanjiTimer() {
  if (QUIZ_KANJI_STATE.timerId) {
    clearInterval(QUIZ_KANJI_STATE.timerId);
    QUIZ_KANJI_STATE.timerId = null;
  }
}

function openQuizKanjiExitConfirm() {
  clearQuizKanjiTimer();

  var html = "";
  html += '<div class="quizkj-modal-overlay" id="quizkjExitOverlay">';
  html += '<div class="quizkj-modal-box quizkj-exit-box">';
  html += '<p class="quizkj-exit-title">Akhiri Quiz?</p>';
  html += '<p class="quizkj-exit-sub">Progres kamu pada quiz ini tidak akan disimpan jika kamu mengakhiri sekarang.</p>';
  html += '<button type="button" class="quizkj-exit-end-btn" id="quizkjExitEndBtn">Akhiri Quiz</button>';
  html += '<button type="button" class="quizkj-exit-continue-btn" id="quizkjExitContinueBtn">Lanjutkan</button>';
  html += "</div>";
  html += "</div>";

  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  function resumeAndClose() {
    var overlay = document.getElementById("quizkjExitOverlay");
    if (overlay) overlay.remove();
    startQuizKanjiTimer();
  }

  document.getElementById("quizkjExitEndBtn").addEventListener("click", function () {
    var overlay = document.getElementById("quizkjExitOverlay");
    if (overlay) overlay.remove();
    openQuizKanjiBackToMenu();
  });

  document.getElementById("quizkjExitContinueBtn").addEventListener("click", resumeAndClose);

  document.getElementById("quizkjExitOverlay").addEventListener("click", function (e) {
    if (e.target === this) resumeAndClose();
  });
}

function quizKanjiHandleTimeout() {
  var banner = document.getElementById("quizkjTimeoutBanner");
  if (banner) banner.classList.remove("hidden");

  var idx = QUIZ_KANJI_STATE.currentIndex;
  var item = QUIZ_KANJI_STATE.soalList[idx];
  var tipe = QUIZ_KANJI_STATE.soalTipeList[idx];
  var content = quizKanjiGetSoalContent(item, tipe);

  quizKanjiRecordAnswer(item, tipe, null, content.benar, false, QUIZ_KANJI_TIMER_SECONDS);
  quizKanjiLoseHeart();

  setTimeout(function () {
    quizKanjiGoToNextSoal();
  }, 900);
}

function quizKanjiSubmitAnswer(chosenValue, item, tipe, benar) {
  clearQuizKanjiTimer();

  var isCorrect = chosenValue === benar;
  var waktuDipakai = Math.round((Date.now() - QUIZ_KANJI_STATE.waktuMulaiSoal) / 1000);

  quizKanjiRecordAnswer(item, tipe, chosenValue, benar, isCorrect, waktuDipakai);

  if (!isCorrect) {
    quizKanjiLoseHeart();
  } else {
    QUIZ_KANJI_STATE.benar++;
  }

  setTimeout(function () {
    quizKanjiGoToNextSoal();
  }, 250);
}

function quizKanjiRecordAnswer(item, tipe, jawabanUser, jawabanBenar, isCorrect, waktu) {
  QUIZ_KANJI_STATE.jawabanLog.push({
    kanji: item.kanji,
    arti: capitalize(item.arti),
    bacaan: firstReading(item),
    tipe: tipe,
    jawabanUser: jawabanUser,
    jawabanBenar: jawabanBenar,
    isCorrect: isCorrect,
    waktu: waktu
  });
  if (!isCorrect) QUIZ_KANJI_STATE.salah++;
}

function quizKanjiLoseHeart() {
  QUIZ_KANJI_STATE.nyawa--;
  var heartsEl = document.getElementById("quizkjHearts");
  if (heartsEl) {
    heartsEl.innerHTML = quizKanjiRenderHearts();
    heartsEl.classList.add("quizkj-heart-shake");
    setTimeout(function () { heartsEl.classList.remove("quizkj-heart-shake"); }, 300);
  }
}

function quizKanjiGoToNextSoal() {
  if (QUIZ_KANJI_STATE.nyawa <= 0) {
    showQuizKanjiGameOver();
    return;
  }

  QUIZ_KANJI_STATE.currentIndex++;

  if (QUIZ_KANJI_STATE.currentIndex >= QUIZ_KANJI_STATE.soalList.length) {
    openQuizKanjiHasil(false);
    return;
  }

  renderQuizKanjiSoal();
}

// =====================================================
// NYAWA HABIS
// =====================================================

function showQuizKanjiGameOver() {
  QUIZ_KANJI_STATE.isFinished = true;
  var html = "";
  html += '<div class="quizkj-gameover">';
  html += '<div class="quizkj-gameover-heart">&#128148;</div>';
  html += '<h2 class="quizkj-gameover-title">Nyawa Habis!</h2>';
  html += '<p class="quizkj-gameover-sub">Quiz telah berakhir.</p>';
  html += '<button type="button" class="quizkj-gameover-btn" id="quizkjGameoverBtn">Lihat Hasil</button>';
  html += "</div>";

  detailExtra.innerHTML = html;
  document.getElementById("quizkjGameoverBtn").addEventListener("click", function () {
    openQuizKanjiHasil(false);
  });
}

// =====================================================
// HASIL QUIZ
// =====================================================

/** @param {boolean} [isPopstate] */
function openQuizKanjiHasil(isPopstate) {
  QUIZ_KANJI_STATE.isFinished = true;
  var total = QUIZ_KANJI_STATE.jawabanLog.length;
  var benar = QUIZ_KANJI_STATE.benar;
  var nilai = total > 0 ? Math.round((benar / total) * 100) : 0;

  var totalWaktu = 0;
  for (var i = 0; i < QUIZ_KANJI_STATE.jawabanLog.length; i++) {
    totalWaktu += QUIZ_KANJI_STATE.jawabanLog[i].waktu;
  }
  var rataWaktu = total > 0 ? (totalWaktu / total).toFixed(1) : "0.0";

  // Simpan ke Riwayat Quiz — hanya sekali saat pertama kali hasil
  // ditampilkan (bukan saat re-render via back/forward atau saat
  // dibuka ulang dari halaman Riwayat).
  if (!isPopstate && typeof simpanRiwayatQuiz === "function") {
    var kanjiKategoriLabel = QUIZ_KANJI_STATE.kategoriTerpilih.length > 0
      ? QUIZ_KANJI_STATE.kategoriTerpilih.join(", ")
      : "Semua Kategori";
    simpanRiwayatQuiz({
      mode: "quiz",
      type: "kanji",
      title: "Quiz Kanji",
      subtitle: kanjiKategoriLabel,
      score: nilai,
      correct: benar,
      wrong: QUIZ_KANJI_STATE.salah,
      total: total,
      time: rataWaktu + "s",
      status: "SELESAI",
      snapshot: {
        jawabanLog: QUIZ_KANJI_STATE.jawabanLog,
        benar: benar,
        salah: QUIZ_KANJI_STATE.salah
      }
    });
  }

  var html = "";
  html += quizKanjiStepHeader("Hasil Quiz", "");

  html += '<div class="quizkj-hasil-card">';
  html += '<div class="quizkj-hasil-star">&#127881;</div>';
  html += '<p class="quizkj-hasil-title">Quiz Selesai!</p>';
  html += '<div class="quizkj-hasil-nilai">' + nilai + "</div>";
  html += '<p class="quizkj-hasil-nilai-label">Nilai</p>';
  html += '<p class="quizkj-hasil-fraction">' + benar + " / " + total + "</p>";
  html += '<p class="quizkj-hasil-fraction-label">Jawaban benar</p>';
  html += "</div>";

  html += '<div class="quizkj-hasil-stats">';
  html += '<div class="quizkj-hasil-stat"><span class="quizkj-hasil-stat-icon good">&#10003;</span><p class="quizkj-hasil-stat-value">' + benar + '</p><p class="quizkj-hasil-stat-label">Benar</p></div>';
  html += '<div class="quizkj-hasil-stat"><span class="quizkj-hasil-stat-icon bad">&#10005;</span><p class="quizkj-hasil-stat-value">' + QUIZ_KANJI_STATE.salah + '</p><p class="quizkj-hasil-stat-label">Salah</p></div>';
  html += '<div class="quizkj-hasil-stat"><span class="quizkj-hasil-stat-icon time">&#9200;</span><p class="quizkj-hasil-stat-value">' + rataWaktu + 's</p><p class="quizkj-hasil-stat-label">Rata-rata</p></div>';
  html += "</div>";

  html += '<button type="button" class="quizkj-detail-btn" id="quizkjDetailBtn">&#128203; Detail Jawaban</button>';
  html += '<button type="button" class="quizkj-ulangi-btn" id="quizkjUlangiBtn">&#128260; Ulangi Quiz</button>';
  html += '<button type="button" class="quizkj-kembali-btn" id="quizkjKembaliBtn">Kembali</button>';

  detailExtra.innerHTML = html;
  
  // Memicu trigger unwind saat ditekan icon <- kembali di atas
  initQuizKanjiHeaderBack(function () { openQuizKanjiBackToMenu(); });

  document.getElementById("quizkjDetailBtn").addEventListener("click", function () {
    openQuizKanjiDetailJawaban("semua", false);
  });
  
  document.getElementById("quizkjUlangiBtn").addEventListener("click", function () {
    QUIZ_KANJI_STATE.isFinished = false; // Reset isFinished agar tidak ter-unwind
    buildQuizKanjiSoalList();
    openQuizKanjiStep3(false);
  });
  
  document.getElementById("quizkjKembaliBtn").addEventListener("click", function () {
    openQuizKanjiBackToMenu();
  });

  if (!isPopstate) quizKanjiPushHistory("kanji-hasil", "#quiz-kanji-hasil");
}

function openQuizKanjiBackToMenu() {
  clearQuizKanjiTimer();
  QUIZ_KANJI_STATE.isUnwinding = true;
  history.back();
}


// =====================================================
// DETAIL JAWABAN
// =====================================================

/**
 * @param {string} filter
 * @param {boolean} [isPopstate]
 */
function openQuizKanjiDetailJawaban(filter, isPopstate) {
  var html = "";
  html += quizKanjiStepHeader("Detail Jawaban", "");

  html += '<div class="quizkj-filter-tabs">';
  html += '<button type="button" class="quizkj-filter-btn' + (filter === "semua" ? " active" : "") + '" data-filter="semua">Semua</button>';
  html += '<button type="button" class="quizkj-filter-btn' + (filter === "benar" ? " active" : "") + '" data-filter="benar">Benar</button>';
  html += '<button type="button" class="quizkj-filter-btn' + (filter === "salah" ? " active" : "") + '" data-filter="salah">Salah</button>';
  html += "</div>";

  html += '<div class="quizkj-answer-list" id="quizkjAnswerList">' + renderQuizKanjiAnswerRows(filter) + "</div>";

  detailExtra.innerHTML = html;
  initQuizKanjiHeaderBack(function () { history.back(); });
  initQuizKanjiFilterClicks();
  initQuizKanjiAnswerRowClicks();

  if (!isPopstate) history.pushState({ menu: "quiz", quizStep: "kanji-detail" }, "", "#quiz-kanji-detail");
}

/** @param {string} filter */
function renderQuizKanjiAnswerRows(filter) {
  var html = "";
  for (var i = 0; i < QUIZ_KANJI_STATE.jawabanLog.length; i++) {
    var log = QUIZ_KANJI_STATE.jawabanLog[i];
    if (filter === "benar" && !log.isCorrect) continue;
    if (filter === "salah" && log.isCorrect) continue;

    var nomor = (i + 1 < 10 ? "0" : "") + (i + 1);
    var icon = log.isCorrect ? "&#10003;" : "&#10005;";
    var iconClass = log.isCorrect ? "good" : "bad";

    html += '<div class="quizkj-answer-row' + (log.isCorrect ? "" : " clickable") + '" data-idx="' + i + '">';
    html += '<span class="quizkj-answer-nomor">' + nomor + "</span>";
    html += '<span class="quizkj-answer-char">' + log.kanji + "</span>";
    html += '<div class="quizkj-answer-text">';
    html += '<p class="quizkj-answer-main">' + (log.jawabanUser || "&mdash;") + "</p>";
    if (!log.isCorrect) {
      html += '<p class="quizkj-answer-correct">Benar: ' + log.jawabanBenar + "</p>";
    }
    html += "</div>";
    html += '<span class="quizkj-answer-icon ' + iconClass + '">' + icon + "</span>";
    html += "</div>";
  }
  if (!html) {
    html = '<div class="quizkj-answer-empty">Tidak ada soal pada kategori ini.</div>';
  }
  return html;
}

function initQuizKanjiFilterClicks() {
  var btns = detailExtra.querySelectorAll(".quizkj-filter-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");
      var siblings = detailExtra.querySelectorAll(".quizkj-filter-btn");
      for (var j = 0; j < siblings.length; j++) siblings[j].classList.remove("active");
      this.classList.add("active");

      var listEl = document.getElementById("quizkjAnswerList");
      listEl.innerHTML = renderQuizKanjiAnswerRows(filter);
      initQuizKanjiAnswerRowClicks();
    });
  }
}

function initQuizKanjiAnswerRowClicks() {
  var rows = detailExtra.querySelectorAll(".quizkj-answer-row.clickable");
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-idx"), 10);
      openQuizKanjiDetailSoal(idx);
    });
  }
}

/** @param {number} idx */
function openQuizKanjiDetailSoal(idx) {
  var log = QUIZ_KANJI_STATE.jawabanLog[idx];

  var html = "";
  html += '<div class="quizkj-modal-overlay" id="quizkjModalOverlay">';
  html += '<div class="quizkj-modal-box">';
  html += '<div class="quizkj-modal-top">';
  html += '<button type="button" class="quizkj-modal-close" id="quizkjModalClose">&#10005;</button>';
  html += '<p class="quizkj-modal-title">Info Kanji</p>';
  html += '<span></span>';
  html += "</div>";

  html += '<div class="quizkj-modal-char">' + log.kanji + "</div>";
  html += '<p class="quizkj-modal-romaji">' + log.bacaan + " &middot; " + log.arti + "</p>";
  html += '<span class="quizkj-modal-status bad">Salah</span>';

  html += '<div class="quizkj-modal-answers">';
  html += '<div class="quizkj-modal-answer-row"><span>Jawaban kamu</span><span class="quizkj-modal-answer-value bad">' + (log.jawabanUser || "&mdash;") + " &#10005;</span></div>";
  html += '<div class="quizkj-modal-answer-row"><span>Jawaban yang benar</span><span class="quizkj-modal-answer-value good">' + log.jawabanBenar + " &#10003;</span></div>";
  html += "</div>";

  html += '<button type="button" class="quizkj-modal-lanjut-btn" id="quizkjModalLanjut">Lanjut</button>';
  html += "</div>";
  html += "</div>";

  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  function closeModal() {
    var overlay = document.getElementById("quizkjModalOverlay");
    if (overlay) overlay.remove();
  }

  document.getElementById("quizkjModalClose").addEventListener("click", closeModal);
  document.getElementById("quizkjModalLanjut").addEventListener("click", closeModal);
  document.getElementById("quizkjModalOverlay").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
}

// =====================================================
// HELPER UMUM
// =====================================================

function quizKanjiStepHeader(title, sub) {
  var html = "";
  html += '<div class="quizkj-step-header">';
  html += '<img src="assets/quiz-kanji-bg.svg" alt="" class="quizkj-bg-deco" onerror="this.style.display=\'none\'">';
  html += '<button class="quizkj-back-btn" id="quizkjBackBtn" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
  html += "</button>";
  html += '<p class="quizkj-step-title">' + title + "</p>";
  html += "</div>";
  if (sub) {
    html += '<p class="quizkj-step-sub">' + sub + "</p>";
  }
  return html;
}

function initQuizKanjiHeaderBack(handler) {
  var btn = document.getElementById("quizkjBackBtn");
  if (btn) btn.addEventListener("click", handler);
}

// =====================================================
// Navigasi mundur (dipakai popstate di app.js)
// =====================================================

function handleQuizKanjiPopstate(state) {
  clearQuizKanjiTimer();

  if (QUIZ_KANJI_STATE.isUnwinding) {
    if (state && state.quizStep && state.quizStep.indexOf("kanji-") === 0) {
      history.back();
      return;
    } else {
      QUIZ_KANJI_STATE.isUnwinding = false;
      QUIZ_KANJI_STATE.isFinished = false;
    }
  }

  var step = state && state.quizStep ? state.quizStep : "";

  if (QUIZ_KANJI_STATE.isFinished && step !== "kanji-hasil" && step !== "kanji-detail" && step !== "") {
    QUIZ_KANJI_STATE.isUnwinding = true;
    history.back();
    return;
  }

  if (step === "kanji-1") {
    openQuizKanjiStep1(true);
  } else if (step === "kanji-jenis") {
    openQuizKanjiStepJenis(true);
  } else if (step === "kanji-2") {
    openQuizKanjiStep2(true);
  } else if (step === "kanji-3") {
    openQuizKanjiStep3(true);
  } else if (step === "kanji-hasil") {
    openQuizKanjiHasil(true);
  } else if (step === "kanji-detail") {
    openQuizKanjiDetailJawaban("semua", true);
  } else {
    loadQuizMenu();
  }
}
