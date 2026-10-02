// =====================================================
// quiz-kana.js
// =====================================================

var QUIZ_KANA_STATE = {
  jenis: null,        
  mode: null,          
  rows: [],             
  soalList: [],         
  currentIndex: 0,
  nyawa: 3,
  benar: 0,
  salah: 0,
  jawabanLog: [],       
  timerId: null,
  timerRemaining: 30,
  waktuMulaiSoal: 0,
  historyDepth: 0       // Tambahan untuk tracking history stack
};

var QUIZ_KANA_ROW_LABELS = ["A", "KA", "SA", "TA", "NA", "HA", "MA", "YA", "RA", "WA", "N"];
var QUIZ_KANA_TIMER_SECONDS = 30;
var QUIZ_KANA_NYAWA_AWAL = 3;

// =====================================================
// UTIL
// =====================================================

function quizKanaGetRows(jenis) {
  var seion = KANA_DATA[jenis].seion;
  var result = {};
  for (var r = 0; r < QUIZ_KANA_ROW_LABELS.length; r++) {
    var label = QUIZ_KANA_ROW_LABELS[r];
    var items = [];
    for (var c = 0; c < 5; c++) {
      var idx = r * 5 + c;
      var it = seion[idx];
      if (it && it.char) items.push(it);
    }
    result[label] = items;
  }
  return result;
}

function quizKanaShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// =====================================================
// LANGKAH 1
// =====================================================

function openQuizKanaStep1(skipPush) {
  QUIZ_KANA_STATE.jenis = null;
  QUIZ_KANA_STATE.mode = null;
  QUIZ_KANA_STATE.rows = [];
  QUIZ_KANA_STATE.historyDepth = 1;

  var html = "";
  html += quizKanaStepHeader("Quiz", "Pilih jenis huruf yang ingin kamu pelajari");
  html += '<div class="quizk-choice-grid">';
  html += quizKanaBigChoiceCard("hiragana", "&#12354;", "Hiragana", "ひらがな", "red");
  html += quizKanaBigChoiceCard("katakana", "&#12450;", "Katakana", "カタカナ", "blue");
  html += "</div>";

  detailExtra.innerHTML = html;
  initQuizKanaHeaderBack(function () { history.back(); });
  initQuizKanaStep1Clicks();

  if (!skipPush) {
    history.pushState({ menu: "quiz", quizStep: "kana-1", depth: 1 }, "", "#quiz-kana-1");
  }
}

function quizKanaBigChoiceCard(value, glyph, title, sub, color) {
  var html = "";
  html += '<div class="quizk-big-card quizk-color-' + color + '" data-value="' + value + '">';
  html += '<div class="quizk-big-badge">' + glyph + "</div>";
  html += '<div class="quizk-big-info">';
  html += '<p class="quizk-big-title">' + title + "</p>";
  html += '<p class="quizk-big-sub">' + sub + "</p>";
  html += '</div>';
  html += '<span class="quizk-big-arrow">&#8250;</span>';
  html += "</div>";
  return html;
}

function initQuizKanaStep1Clicks() {
  var cards = detailExtra.querySelectorAll(".quizk-big-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var val = this.getAttribute("data-value");
      var el = this;
      el.classList.add("quizk-tap-scale");
      QUIZ_KANA_STATE.jenis = val;
      setTimeout(function () {
        openQuizKanaStep2();
      }, 160);
    });
  }
}

// =====================================================
// LANGKAH 2
// =====================================================

function openQuizKanaStep2(skipPush) {
  QUIZ_KANA_STATE.historyDepth = 2;
  var html = "";
  html += quizKanaStepHeader("Pilih Mode", "Bagaimana kamu ingin menjawab soal?");
  html += '<div class="quizk-mode-grid">';
  html += quizKanaModeCard("jepang", QUIZ_KANA_STATE.jenis === "hiragana" ? "&#12354;" : "&#12450;", "Huruf Jepang", "Jawaban menggunakan huruf Jepang", "red");
  html += quizKanaModeCard("romaji", "A", "Romaji", "Jawaban menggunakan huruf romaji", "blue");
  html += "</div>";
  html += '<button type="button" class="quizk-next-btn" id="quizkStep2Next" disabled>Lanjut <span class="quizk-next-arrow">&#8594;</span></button>';

  detailExtra.innerHTML = html;
  initQuizKanaHeaderBack(function () { history.back(); });
  initQuizKanaStep2Clicks();

  if (!skipPush) {
    history.pushState({ menu: "quiz", quizStep: "kana-2", depth: 2 }, "", "#quiz-kana-2");
  }
}

function quizKanaModeCard(value, glyph, title, sub, color) {
  var html = "";
  html += '<div class="quizk-mode-card quizk-color-' + color + '" data-value="' + value + '">';
  html += '<div class="quizk-mode-badge">' + glyph + "</div>";
  html += '<div class="quizk-mode-info">';
  html += '<p class="quizk-mode-title">' + title + "</p>";
  html += '<p class="quizk-mode-sub">' + sub + "</p>";
  html += '</div>';
  html += "</div>";
  return html;
}

function initQuizKanaStep2Clicks() {
  var cards = detailExtra.querySelectorAll(".quizk-mode-card");
  var nextBtn = document.getElementById("quizkStep2Next");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var siblings = detailExtra.querySelectorAll(".quizk-mode-card");
      for (var j = 0; j < siblings.length; j++) siblings[j].classList.remove("selected");
      this.classList.add("selected");

      QUIZ_KANA_STATE.mode = this.getAttribute("data-value");
      nextBtn.disabled = false;
    });
  }

  nextBtn.addEventListener("click", function () {
    if (!QUIZ_KANA_STATE.mode) return;
    openQuizKanaStep3();
  });
}

// =====================================================
// LANGKAH 3
// =====================================================

function openQuizKanaStep3(skipPush) {
  QUIZ_KANA_STATE.historyDepth = 3;
  var rowsData = quizKanaGetRows(QUIZ_KANA_STATE.jenis);

  var html = "";
  html += quizKanaStepHeader("Pilih Row", "Pilih baris huruf yang ingin kamu ujikan.");
  html += '<div class="quizk-jenis-pill">' + capitalizeFirstLetter(QUIZ_KANA_STATE.jenis) + "</div>";
  html += '<div class="quizk-row-grid" id="quizkRowGrid">';
  
  for (var i = 0; i < QUIZ_KANA_ROW_LABELS.length; i++) {
    var label = QUIZ_KANA_ROW_LABELS[i];
    var items = rowsData[label];
    if (items.length === 0) continue;
    
    var sample = items.map(function (it) { return it.char; }).join("");
    html += '<div class="quizk-row-card" data-row="' + label + '">';
    html += '<span class="quizk-row-check">&#10003;</span>';
    html += '<p class="quizk-row-label">' + label + "</p>";
    html += '<p class="quizk-row-sample">' + sample + "</p>";
    html += "</div>";
  }
  
  html += "</div>";
  html += '<div class="quizk-row-summary" id="quizkRowSummary">Pilih minimal 1 row</div>';
  html += '<button type="button" class="quizk-next-btn" id="quizkStep3Next" disabled>Lanjut <span class="quizk-next-arrow">&#8594;</span></button>';

  detailExtra.innerHTML = html;
  initQuizKanaHeaderBack(function () { history.back(); });
  initQuizKanaStep3Clicks(rowsData);

  if (!skipPush) {
    history.pushState({ menu: "quiz", quizStep: "kana-3", depth: 3 }, "", "#quiz-kana-3");
  }
}

function initQuizKanaStep3Clicks(rowsData) {
  var cards = detailExtra.querySelectorAll(".quizk-row-card");
  var nextBtn = document.getElementById("quizkStep3Next");
  var summary = document.getElementById("quizkRowSummary");

  function updateSummary() {
    var totalSoal = 0;
    for (var i = 0; i < QUIZ_KANA_STATE.rows.length; i++) {
      totalSoal += rowsData[QUIZ_KANA_STATE.rows[i]].length;
    }
    if (QUIZ_KANA_STATE.rows.length === 0) {
      summary.textContent = "Pilih minimal 1 row";
      nextBtn.disabled = true;
    } else {
      summary.innerHTML = '<span class="quizk-clock-icon">&#9200;</span> ' + QUIZ_KANA_STATE.rows.length + " Row dipilih &middot; " + totalSoal + " soal";
      nextBtn.disabled = false;
    }
  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var row = this.getAttribute("data-row");
      var idx = QUIZ_KANA_STATE.rows.indexOf(row);

      this.classList.add("quizk-tap-scale-sm");
      setTimeout(function (el) { el.classList.remove("quizk-tap-scale-sm"); }, 200, this);

      if (idx === -1) {
        QUIZ_KANA_STATE.rows.push(row);
        this.classList.add("selected");
      } else {
        QUIZ_KANA_STATE.rows.splice(idx, 1);
        this.classList.remove("selected");
      }
      updateSummary();
    });
  }

  nextBtn.addEventListener("click", function () {
    if (QUIZ_KANA_STATE.rows.length === 0) return;
    buildQuizKanaSoalList(rowsData);
    openQuizKanaStep4(false, false);
  });
}

function buildQuizKanaSoalList(rowsData) {
  var pool = [];
  for (var i = 0; i < QUIZ_KANA_STATE.rows.length; i++) {
    var items = rowsData[QUIZ_KANA_STATE.rows[i]];
    for (var j = 0; j < items.length; j++) {
      pool.push(items[j]);
    }
  }
  QUIZ_KANA_STATE.soalList = quizKanaShuffle(pool);
}

// =====================================================
// LANGKAH 4
// =====================================================

function openQuizKanaStep4(skipPush, replace) {
  QUIZ_KANA_STATE.historyDepth = 4;
  var html = "";
  html += quizKanaStepHeader("Konfirmasi Quiz", "Periksa kembali pilihanmu sebelum memulai.");
  html += '<div class="quizk-confirm-card">';
  html += quizKanaConfirmRow("&#12354;", "Huruf", capitalizeFirstLetter(QUIZ_KANA_STATE.jenis), "red");
  html += quizKanaConfirmRow("A", "Mode", QUIZ_KANA_STATE.mode === "jepang" ? "Huruf Jepang" : "Romaji", "blue");
  html += quizKanaConfirmRow("&#9638;", "Row", QUIZ_KANA_STATE.rows.join(" &middot; "), "orange");
  html += quizKanaConfirmRow("&#128221;", "Jumlah Soal", QUIZ_KANA_STATE.soalList.length + " soal", "green");
  html += "</div>";
  html += '<button type="button" class="quizk-start-btn" id="quizkStartBtn">&#9654; Mulai Quiz</button>';

  detailExtra.innerHTML = html;
  initQuizKanaHeaderBack(function () { history.back(); });

  document.getElementById("quizkStartBtn").addEventListener("click", function () {
    startQuizKanaGameplay();
  });

  if (!skipPush) {
    if (replace) {
      history.replaceState({ menu: "quiz", quizStep: "kana-4", depth: 4 }, "", "#quiz-kana-4");
    } else {
      history.pushState({ menu: "quiz", quizStep: "kana-4", depth: 4 }, "", "#quiz-kana-4");
    }
  }
}

function quizKanaConfirmRow(glyph, label, value, color) {
  var html = "";
  html += '<div class="quizk-confirm-row">';
  html += '<div class="quizk-confirm-icon quizk-color-' + color + '">' + glyph + "</div>";
  html += '<div class="quizk-confirm-text">';
  html += '<p class="quizk-confirm-label">' + label + "</p>";
  html += '<p class="quizk-confirm-value">' + value + "</p>";
  html += "</div>";
  html += "</div>";
  return html;
}

// =====================================================
// GAMEPLAY
// =====================================================

function startQuizKanaGameplay() {
  QUIZ_KANA_STATE.currentIndex = 0;
  QUIZ_KANA_STATE.nyawa = QUIZ_KANA_NYAWA_AWAL;
  QUIZ_KANA_STATE.benar = 0;
  QUIZ_KANA_STATE.salah = 0;
  QUIZ_KANA_STATE.jawabanLog = [];
  QUIZ_KANA_STATE.historyDepth = 4;

  // Gunakan replaceState agar saat di HP menekan back, stack tak bertambah kotor
  history.replaceState({ menu: "quiz", quizStep: "kana-play", depth: 4 }, "", "#quiz-kana-play");
  renderQuizKanaSoal();
}

function renderQuizKanaSoal() {
  clearQuizKanaTimer();

  var idx = QUIZ_KANA_STATE.currentIndex;
  var total = QUIZ_KANA_STATE.soalList.length;
  var soal = QUIZ_KANA_STATE.soalList[idx];
  var percent = Math.round((idx / total) * 100);
  var options = quizKanaBuildOptions(soal);

  var html = "";
  // GAMBAR LATAR BERMASALAH (GERBANG) TELAH DIHAPUS DI SINI
  
  html += '<div class="quizk-play-topbar">';
  html += '<button type="button" class="quizk-exit-btn" id="quizkExitBtn" aria-label="Keluar">&#10005;</button>';
  html += '<div class="quizk-hearts" id="quizkHearts">' + quizKanaRenderHearts() + "</div>";
  html += '<div class="quizk-timer-badge" id="quizkTimerBadge">' + QUIZ_KANA_TIMER_SECONDS + "</div>";
  html += "</div>";

  html += '<div class="quizk-progress-row">';
  html += '<span class="quizk-progress-count">' + (idx + 1) + " / " + total + "</span>";
  html += "</div>";
  html += '<div class="quizk-progress-track"><div class="quizk-progress-fill" id="quizkProgressFill" style="width:' + percent + '%"></div></div>';
  html += '<p class="quizk-question-label">Huruf apakah ini?</p>';

  var isJepangMode = QUIZ_KANA_STATE.mode === "jepang";
  var soalDisplay = isJepangMode ? soal.romaji : soal.char;
  var soalCharClass = isJepangMode ? "quizk-char-circle quizk-char-romaji" : "quizk-char-circle";

  html += '<div class="' + soalCharClass + '" id="quizkCharCircle">' + soalDisplay + "</div>";
  html += '<div class="quizk-options" id="quizkOptions">';
  
  for (var i = 0; i < options.length; i++) {
    html += '<button type="button" class="quizk-option-btn" data-value="' + options[i] + '">' + options[i] + "</button>";
  }
  
  html += "</div>";
  html += '<div class="quizk-timeout-banner hidden" id="quizkTimeoutBanner">';
  html += '<span class="quizk-timeout-icon">&#9200;</span>';
  html += '<div><p class="quizk-timeout-title">Waktu habis!</p><p class="quizk-timeout-sub">Soal ini dianggap salah.</p></div>';
  html += "</div>";

  detailExtra.innerHTML = html;
  detailExtra.classList.remove("quizk-fade-slide");
  void detailExtra.offsetWidth;
  detailExtra.classList.add("quizk-fade-slide");

  document.getElementById("quizkExitBtn").addEventListener("click", function () {
    openQuizKanaExitConfirm();
  });

  var optBtns = detailExtra.querySelectorAll(".quizk-option-btn");
  for (var b = 0; b < optBtns.length; b++) {
    optBtns[b].addEventListener("click", function () {
      quizKanaSubmitAnswer(this.getAttribute("data-value"));
    });
  }

  QUIZ_KANA_STATE.waktuMulaiSoal = Date.now();
  QUIZ_KANA_STATE.timerRemaining = QUIZ_KANA_TIMER_SECONDS;
  startQuizKanaTimer();
}

function quizKanaRenderHearts() {
  var html = "";
  for (var i = 0; i < QUIZ_KANA_NYAWA_AWAL; i++) {
    var filled = i < QUIZ_KANA_STATE.nyawa;
    html += '<span class="quizk-heart' + (filled ? " filled" : " empty") + '">' + (filled ? "&#10084;&#65039;" : "&#129293;") + "</span>";
  }
  return html;
}

function quizKanaBuildOptions(soal) {
  var pool = QUIZ_KANA_STATE.soalList.filter(function (it) { return it.char !== soal.char; });
  var shuffled = quizKanaShuffle(pool);
  var distractors = shuffled.slice(0, 2);

  var isJepang = QUIZ_KANA_STATE.mode === "jepang";
  var correctValue = isJepang ? soal.char : soal.romaji;
  var options = [correctValue];

  for (var i = 0; i < distractors.length; i++) {
    options.push(isJepang ? distractors[i].char : distractors[i].romaji);
  }

  return quizKanaShuffle(options);
}

function startQuizKanaTimer() {
  var badge = document.getElementById("quizkTimerBadge");
  QUIZ_KANA_STATE.timerId = setInterval(function () {
    QUIZ_KANA_STATE.timerRemaining--;
    if (badge) {
      badge.textContent = QUIZ_KANA_STATE.timerRemaining;
      if (QUIZ_KANA_STATE.timerRemaining <= 5) badge.classList.add("urgent");
    }
    if (QUIZ_KANA_STATE.timerRemaining <= 0) {
      clearQuizKanaTimer();
      quizKanaHandleTimeout();
    }
  }, 1000);
}

function clearQuizKanaTimer() {
  if (QUIZ_KANA_STATE.timerId) {
    clearInterval(QUIZ_KANA_STATE.timerId);
    QUIZ_KANA_STATE.timerId = null;
  }
}

function openQuizKanaExitConfirm() {
  clearQuizKanaTimer(); 

  var html = "";
  html += '<div class="quizk-modal-overlay" id="quizkExitOverlay">';
  html += '<div class="quizk-modal-box quizk-exit-box">';
  html += '<p class="quizk-exit-title">Akhiri Quiz?</p>';
  html += '<p class="quizk-exit-sub">Progres kamu pada quiz ini tidak akan disimpan jika kamu mengakhiri sekarang.</p>';
  html += '<button type="button" class="quizk-exit-end-btn" id="quizkExitEndBtn">Akhiri Quiz</button>';
  html += '<button type="button" class="quizk-exit-continue-btn" id="quizkExitContinueBtn">Lanjutkan</button>';
  html += "</div>";
  html += "</div>";

  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  function resumeAndClose() {
    var overlay = document.getElementById("quizkExitOverlay");
    if (overlay) overlay.remove();
    startQuizKanaTimer();
  }

  document.getElementById("quizkExitEndBtn").addEventListener("click", function () {
    var overlay = document.getElementById("quizkExitOverlay");
    if (overlay) overlay.remove();
    openQuizKanaBackToMenu();
  });

  document.getElementById("quizkExitContinueBtn").addEventListener("click", resumeAndClose);

  document.getElementById("quizkExitOverlay").addEventListener("click", function (e) {
    if (e.target === this) resumeAndClose();
  });
}

function quizKanaHandleTimeout() {
  var banner = document.getElementById("quizkTimeoutBanner");
  if (banner) banner.classList.remove("hidden");

  var soal = QUIZ_KANA_STATE.soalList[QUIZ_KANA_STATE.currentIndex];
  var correctValue = QUIZ_KANA_STATE.mode === "jepang" ? soal.char : soal.romaji;

  quizKanaRecordAnswer(soal, null, correctValue, false, QUIZ_KANA_TIMER_SECONDS);
  quizKanaLoseHeart();

  setTimeout(function () {
    quizKanaGoToNextSoal();
  }, 900);
}

function quizKanaSubmitAnswer(chosenValue) {
  clearQuizKanaTimer();

  var soal = QUIZ_KANA_STATE.soalList[QUIZ_KANA_STATE.currentIndex];
  var correctValue = QUIZ_KANA_STATE.mode === "jepang" ? soal.char : soal.romaji;
  var isCorrect = chosenValue === correctValue;
  var waktuDipakai = Math.round((Date.now() - QUIZ_KANA_STATE.waktuMulaiSoal) / 1000);

  quizKanaRecordAnswer(soal, chosenValue, correctValue, isCorrect, waktuDipakai);

  if (!isCorrect) {
    quizKanaLoseHeart();
  } else {
    QUIZ_KANA_STATE.benar++;
  }

  setTimeout(function () {
    quizKanaGoToNextSoal();
  }, 250);
}

function quizKanaRecordAnswer(soal, jawabanUser, jawabanBenar, isCorrect, waktu) {
  QUIZ_KANA_STATE.jawabanLog.push({
    char: soal.char,
    romaji: soal.romaji,
    jawabanUser: jawabanUser,
    jawabanBenar: jawabanBenar,
    isCorrect: isCorrect,
    waktu: waktu
  });
  if (!isCorrect) QUIZ_KANA_STATE.salah++;
}

function quizKanaLoseHeart() {
  QUIZ_KANA_STATE.nyawa--;
  var heartsEl = document.getElementById("quizkHearts");
  if (heartsEl) {
    heartsEl.innerHTML = quizKanaRenderHearts();
    heartsEl.classList.add("quizk-heart-shake");
    setTimeout(function () { heartsEl.classList.remove("quizk-heart-shake"); }, 300);
  }
}

function quizKanaGoToNextSoal() {
  if (QUIZ_KANA_STATE.nyawa <= 0) {
    showQuizKanaGameOver();
    return;
  }
  QUIZ_KANA_STATE.currentIndex++;
  if (QUIZ_KANA_STATE.currentIndex >= QUIZ_KANA_STATE.soalList.length) {
    openQuizKanaHasil();
    return;
  }
  renderQuizKanaSoal();
}

function showQuizKanaGameOver() {
  var html = "";
  html += '<div class="quizk-gameover">';
  html += '<div class="quizk-gameover-heart">&#128148;</div>';
  html += '<h2 class="quizk-gameover-title">Nyawa Habis!</h2>';
  html += '<p class="quizk-gameover-sub">Quiz telah berakhir.</p>';
  html += '<button type="button" class="quizk-gameover-btn" id="quizkGameoverBtn">Lihat Hasil</button>';
  html += "</div>";

  detailExtra.innerHTML = html;
  document.getElementById("quizkGameoverBtn").addEventListener("click", function () {
    openQuizKanaHasil();
  });
}

// =====================================================
// HASIL QUIZ
// =====================================================

function openQuizKanaHasil(skipPush) {
  QUIZ_KANA_STATE.historyDepth = 4;
  var total = QUIZ_KANA_STATE.jawabanLog.length;
  var benar = QUIZ_KANA_STATE.benar;
  var nilai = total > 0 ? Math.round((benar / total) * 100) : 0;
  var totalWaktu = 0;
  
  for (var i = 0; i < QUIZ_KANA_STATE.jawabanLog.length; i++) {
    totalWaktu += QUIZ_KANA_STATE.jawabanLog[i].waktu;
  }
  var rataWaktu = total > 0 ? (totalWaktu / total).toFixed(1) : "0.0";

  if (!skipPush && typeof simpanRiwayatQuiz === "function") {
    var kanaJenisLabel = QUIZ_KANA_STATE.jenis === "katakana" ? "Katakana" : "Hiragana";
    var kanaRowLabel = (QUIZ_KANA_STATE.rows && QUIZ_KANA_STATE.rows.length > 0)
      ? "Row: " + QUIZ_KANA_STATE.rows.join(", ")
      : kanaJenisLabel;
    simpanRiwayatQuiz({
      mode: "quiz",
      type: QUIZ_KANA_STATE.jenis || "hiragana",
      title: "Quiz " + kanaJenisLabel,
      subtitle: kanaRowLabel,
      score: nilai,
      correct: benar,
      wrong: QUIZ_KANA_STATE.salah,
      total: total,
      time: rataWaktu + "s",
      status: "SELESAI",
      snapshot: {
        jawabanLog: QUIZ_KANA_STATE.jawabanLog,
        benar: benar,
        salah: QUIZ_KANA_STATE.salah,
        jenis: QUIZ_KANA_STATE.jenis
      }
    });
  }

  var html = "";
  html += quizKanaStepHeader("Hasil Quiz", "");
  html += '<div class="quizk-hasil-card">';
  html += '<div class="quizk-hasil-star">&#11088;</div>';
  html += '<p class="quizk-hasil-title">Quiz Selesai!</p>';
  html += '<div class="quizk-hasil-nilai">' + nilai + "</div>";
  html += '<p class="quizk-hasil-nilai-label">Nilai</p>';
  html += '<p class="quizk-hasil-fraction">' + benar + " / " + total + "</p>";
  html += "</div>";

  html += '<div class="quizk-hasil-stats">';
  html += '<div class="quizk-hasil-stat"><span class="quizk-hasil-stat-icon good">&#10003;</span><p class="quizk-hasil-stat-value">' + benar + '</p><p class="quizk-hasil-stat-label">Benar</p></div>';
  html += '<div class="quizk-hasil-stat"><span class="quizk-hasil-stat-icon bad">&#10005;</span><p class="quizk-hasil-stat-value">' + QUIZ_KANA_STATE.salah + '</p><p class="quizk-hasil-stat-label">Salah</p></div>';
  html += '<div class="quizk-hasil-stat"><span class="quizk-hasil-stat-icon time">&#9200;</span><p class="quizk-hasil-stat-value">' + rataWaktu + 's</p><p class="quizk-hasil-stat-label">Rata-rata</p></div>';
  html += "</div>";

  html += '<button type="button" class="quizk-detail-btn" id="quizkDetailBtn">&#8811; Detail Jawaban</button>';
  html += '<button type="button" class="quizk-ulangi-btn" id="quizkUlangiBtn">Ulangi Quiz</button>';
  html += '<button type="button" class="quizk-kembali-btn" id="quizkKembaliBtn">Kembali</button>';

  detailExtra.innerHTML = html;
  initQuizKanaHeaderBack(function () { openQuizKanaBackToMenu(); });

  document.getElementById("quizkDetailBtn").addEventListener("click", function () {
    openQuizKanaDetailJawaban("semua");
  });
  document.getElementById("quizkUlangiBtn").addEventListener("click", function () {
    buildQuizKanaSoalList(quizKanaGetRows(QUIZ_KANA_STATE.jenis));
    // Gunakan argumen replace (true) agar menimpa state daripada menambah tumpukan riwayat baru
    openQuizKanaStep4(false, true); 
  });
  document.getElementById("quizkKembaliBtn").addEventListener("click", function () {
    openQuizKanaBackToMenu();
  });

  if (!skipPush) {
    history.replaceState({ menu: "quiz", quizStep: "kana-hasil", depth: 4 }, "", "#quiz-kana-hasil");
  }
}

function openQuizKanaBackToMenu() {
  clearQuizKanaTimer();
  
  // Ambil depth dari track internal. Jika tidak ada anggap kita berjarak 4 halaman dari menu kuis
  var depth = QUIZ_KANA_STATE.historyDepth || 4;
  QUIZ_KANA_STATE.historyDepth = 0; // reset
  
  if (depth > 0) {
    // Mundur sejauh jumlah halaman wizard kuis (membersihkan riwayat otomatis)
    history.go(-depth);
  } else {
    // Failsafe jika tak terdeteksi kedalamannya
    loadQuizMenu();
    history.replaceState({ menu: "quiz" }, "", "#quiz");
  }
}

// =====================================================
// DETAIL JAWABAN
// =====================================================

function openQuizKanaDetailJawaban(filter, skipPush) {
  QUIZ_KANA_STATE.historyDepth = 5;
  var html = "";
  html += quizKanaStepHeader("Detail Jawaban", "");
  html += '<div class="quizk-filter-tabs">';
  html += '<button type="button" class="quizk-filter-btn' + (filter === "semua" ? " active" : "") + '" data-filter="semua">Semua</button>';
  html += '<button type="button" class="quizk-filter-btn' + (filter === "benar" ? " active" : "") + '" data-filter="benar">Benar</button>';
  html += '<button type="button" class="quizk-filter-btn' + (filter === "salah" ? " active" : "") + '" data-filter="salah">Salah</button>';
  html += "</div>";
  html += '<div class="quizk-answer-list" id="quizkAnswerList">' + renderQuizKanaAnswerRows(filter) + "</div>";

  detailExtra.innerHTML = html;
  initQuizKanaHeaderBack(function () { history.back(); });
  initQuizKanaFilterClicks();
  initQuizKanaAnswerRowClicks();

  if (!skipPush) {
    history.pushState({ menu: "quiz", quizStep: "kana-detail", depth: 5 }, "", "#quiz-kana-detail");
  }
}

function renderQuizKanaAnswerRows(filter) {
  var html = "";
  for (var i = 0; i < QUIZ_KANA_STATE.jawabanLog.length; i++) {
    var log = QUIZ_KANA_STATE.jawabanLog[i];
    if (filter === "benar" && !log.isCorrect) continue;
    if (filter === "salah" && log.isCorrect) continue;

    var nomor = (i + 1 < 10 ? "0" : "") + (i + 1);
    var icon = log.isCorrect ? "&#10003;" : "&#10005;";
    var iconClass = log.isCorrect ? "good" : "bad";

    html += '<div class="quizk-answer-row" data-idx="' + i + '">';
    html += '<span class="quizk-answer-nomor">' + nomor + "</span>";
    html += '<span class="quizk-answer-char">' + log.char + "</span>";
    html += '<span class="quizk-answer-romaji">' + log.romaji + "</span>";
    html += '<span class="quizk-answer-icon ' + iconClass + '">' + icon + "</span>";
    html += "</div>";
  }
  if (!html) {
    html = '<div class="quizk-answer-empty">Tidak ada soal pada kategori ini.</div>';
  }
  return html;
}

function initQuizKanaFilterClicks() {
  var btns = detailExtra.querySelectorAll(".quizk-filter-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");
      var siblings = detailExtra.querySelectorAll(".quizk-filter-btn");
      for (var j = 0; j < siblings.length; j++) siblings[j].classList.remove("active");
      this.classList.add("active");

      var listEl = document.getElementById("quizkAnswerList");
      listEl.innerHTML = renderQuizKanaAnswerRows(filter);
      initQuizKanaAnswerRowClicks();
    });
  }
}

function initQuizKanaAnswerRowClicks() {
  var rows = detailExtra.querySelectorAll(".quizk-answer-row");
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-idx"), 10);
      openQuizKanaDetailSoal(idx);
    });
  }
}

function openQuizKanaDetailSoal(idx) {
  var log = QUIZ_KANA_STATE.jawabanLog[idx];
  var nomor = (idx + 1 < 10 ? "0" : "") + (idx + 1);

  var html = "";
  html += '<div class="quizk-modal-overlay" id="quizkModalOverlay">';
  html += '<div class="quizk-modal-box">';
  html += '<div class="quizk-modal-top">';
  html += '<button type="button" class="quizk-modal-close" id="quizkModalClose">&#10005;</button>';
  html += '<p class="quizk-modal-title">Detail Soal</p>';
  html += '<span class="quizk-modal-nomor">' + nomor + " / " + QUIZ_KANA_STATE.jawabanLog.length + "</span>";
  html += "</div>";

  html += '<div class="quizk-modal-char">' + log.char + "</div>";
  html += '<p class="quizk-modal-romaji">' + log.romaji + "</p>";
  html += '<span class="quizk-modal-status ' + (log.isCorrect ? "good" : "bad") + '">' + (log.isCorrect ? "Benar" : "Salah") + "</span>";

  html += '<div class="quizk-modal-answers">';
  html += '<div class="quizk-modal-answer-row"><span>Jawaban kamu</span><span class="quizk-modal-answer-value ' + (log.isCorrect ? "good" : "bad") + '">' + (log.jawabanUser || "&mdash;") + " " + (log.isCorrect ? "&#10003;" : "&#10005;") + "</span></div>";
  if (!log.isCorrect) {
    html += '<div class="quizk-modal-answer-row"><span>Jawaban yang benar</span><span class="quizk-modal-answer-value good">' + log.jawabanBenar + " &#10003;</span></div>";
  }
  html += "</div>";

  if (!log.isCorrect) {
    html += '<div class="quizk-modal-explain">';
    html += '<p class="quizk-modal-explain-label">Penjelasan</p>';
    html += '<p class="quizk-modal-explain-text">「' + log.char + "」dibaca <strong>" + log.romaji + "</strong>, bukan " + (log.jawabanUser || "-") + ".</p>";
    html += "</div>";
  }

  html += '<button type="button" class="quizk-modal-lanjut-btn" id="quizkModalLanjut">Lanjut</button>';
  html += "</div>";
  html += "</div>";

  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  function closeModal() {
    var overlay = document.getElementById("quizkModalOverlay");
    if (overlay) overlay.remove();
  }

  document.getElementById("quizkModalClose").addEventListener("click", closeModal);
  document.getElementById("quizkModalLanjut").addEventListener("click", closeModal);
  document.getElementById("quizkModalOverlay").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
}

// =====================================================
// HELPER UMUM
// =====================================================

function quizKanaStepHeader(title, sub) {
  var html = "";
  html += '<div class="quizk-step-header">';
  html += '<button class="quizk-back-btn" id="quizkBackBtn" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
  html += "</button>";
  html += '<p class="quizk-step-title">' + title + "</p>";
  html += "</div>";
  if (sub) {
    html += '<p class="quizk-step-sub">' + sub + "</p>";
  }
  return html;
}

function initQuizKanaHeaderBack(handler) {
  var btn = document.getElementById("quizkBackBtn");
  if (btn) btn.addEventListener("click", handler);
}

// =====================================================
// NAVIGASI MUNDUR
// =====================================================

function handleQuizKanaPopstate(state) {
  clearQuizKanaTimer();
  var step = state ? state.quizStep : null;
  
  // Sinkronkan depth tracker internal dengan depth dari event history state
  if (state && state.depth) {
    QUIZ_KANA_STATE.historyDepth = state.depth;
  }

  if (step === "kana-1") {
    openQuizKanaStep1(true);
  } else if (step === "kana-2") {
    openQuizKanaStep2(true);
  } else if (step === "kana-3") {
    openQuizKanaStep3(true);
  } else if (step === "kana-4") {
    openQuizKanaStep4(true);
  } else if (step === "kana-hasil") {
    openQuizKanaHasil(true);
  } else if (step === "kana-detail") {
    openQuizKanaDetailJawaban("semua", true);
  } else {
    loadQuizMenu();
  }
}
