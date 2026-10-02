// =====================================================
// quiz-bunpo.js
// Logika 7-Langkah Quiz Grammar (Bunpo)
// =====================================================

var qbunpoState = {
  step: 0,
  categories: [],
  maxAvailable: 0,
  mode: "lengkapi", // 'lengkapi', 'benar', 'fungsi'
  targetAmount: 5, // Sesuai aturan: min 5
  finalAmount: 0,
  questions: [],
  currentIndex: 0,
  lives: 3,
  correctCount: 0,
  wrongCount: 0,
  timer: null,
  timeLeft: 30,
  timeTotal: 0,
  answersLog: [],
  isFinished: false,
  isUnwinding: false,
  isPlaying: false,
  currentQ: null,
  currentCorrectAns: "",
  historySaved: false
};

/**
 * Kembali ke menu utama Quiz dari halaman hasil/gameover, dengan cara
 * yang identik dengan menekan tombol back HP di halaman yang sama
 * (menandai isUnwinding lalu mundur lewat history sampai keluar dari
 * seluruh state "bunpo-*"). Dipakai oleh tombol "Kembali" di layar.
 */
function qbunpoBackToQuizMenu() {
  if (qbunpoState.isFinished) {
    qbunpoState.isUnwinding = true;
  }
  history.back();
}

function handleQuizBunpoPopstate(state) {
  if (qbunpoState.isUnwinding) {
    if (state && state.quizStep && state.quizStep.indexOf("bunpo-") === 0) {
      history.back();
      return;
    } else {
      qbunpoState.isUnwinding = false;
      qbunpoState.isFinished = false;
    }
  }

  var stepId = state && state.quizStep ? state.quizStep.replace("bunpo-", "") : "";
  var stepNum = parseInt(stepId, 10);

  if (qbunpoState.isPlaying && stepNum < 5) {
    history.pushState({ menu: "quiz", quizStep: "bunpo-5" }, "", "#quiz-bunpo-5");
    showQbunpoExitConfirm();
    return;
  }

  if (qbunpoState.isFinished && stepNum > 0 && stepNum < 6) {
    qbunpoState.isUnwinding = true;
    history.back();
    return;
  }

  if (stepNum === 1) renderQbunpoStep1();
  else if (stepNum === 2) renderQbunpoStep2();
  else if (stepNum === 3) renderQbunpoStep3();
  else if (stepNum === 4) renderQbunpoStep4();
  else if (stepNum === 5) renderQbunpoStep5();
  else if (stepNum === 6) renderQbunpoStep6();
  else if (stepNum === 7) renderQbunpoStep7();
  else {
    detailExtra.innerHTML = renderQuizMenu();
    initQuizBackButton();
    initQuizCardClicks();
  }
}

function openQuizBunpoStep1() {
  qbunpoState.step = 1;
  qbunpoState.categories = [];
  qbunpoState.mode = "lengkapi";
  qbunpoState.targetAmount = 5;
  qbunpoState.isFinished = false;
  qbunpoState.isUnwinding = false;
  qbunpoState.isPlaying = false;
  qbunpoState.historySaved = false;
  
  history.pushState({ menu: "quiz", quizStep: "bunpo-1" }, "", "#quiz-bunpo-1");
  renderQbunpoStep1();
}

// STEP 1: Kategori
function renderQbunpoStep1() {
  var html = getQbunpoHeader("Pilih Kategori Bunpo", "Pilih kategori grammar yang ingin diujikan.");
  html += '<div class="qbunpo-cat-grid">';
  
  var isAll = (typeof BUNPO_QUIZ_CATEGORIES !== 'undefined') && qbunpoState.categories.length === BUNPO_QUIZ_CATEGORIES.length;
  
  html += '<div class="qbunpo-cat-card ' + (isAll ? "selected" : "") + '" id="qbunpoCatAll">';
  html += '<div class="qbunpo-cat-check">&#10003;</div>';
  html += '<div class="qbunpo-cat-icon">&#128218;</div>';
  html += '<div class="qbunpo-cat-info"><div class="qbunpo-cat-title">All</div><div class="qbunpo-cat-sub">Semua kategori</div></div></div>';

  if (typeof BUNPO_QUIZ_CATEGORIES !== 'undefined') {
    for (var i = 0; i < BUNPO_QUIZ_CATEGORIES.length; i++) {
      var cat = BUNPO_QUIZ_CATEGORIES[i];
      var isSel = qbunpoState.categories.indexOf(cat.key) !== -1;
      html += '<div class="qbunpo-cat-card ' + (isSel ? "selected" : "") + '" data-qb-cat="' + cat.key + '">';
      html += '<div class="qbunpo-cat-check">&#10003;</div>';
      html += '<div class="qbunpo-cat-icon">' + cat.icon + '</div>';
      html += '<div class="qbunpo-cat-info"><div class="qbunpo-cat-title">' + cat.nama + '</div><div class="qbunpo-cat-sub">' + cat.soal.length + ' soal</div></div></div>';
    }
  }
  html += '</div>';

  var btnState = qbunpoState.categories.length > 0 ? "" : "disabled";
  html += '<div style="padding: 0 20px 20px;"><button class="qbunpo-btn-primary" id="qbunpoBtn1" ' + btnState + '>Lanjut &rarr;</button></div>';
  html += getQbunpoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qbunpoBack").onclick = function() { history.back(); };
  document.getElementById("qbunpoCatAll").onclick = function() {
    if (qbunpoState.categories.length === BUNPO_QUIZ_CATEGORIES.length) qbunpoState.categories = [];
    else qbunpoState.categories = BUNPO_QUIZ_CATEGORIES.map(c => c.key);
    renderQbunpoStep1();
  };

  var cards = detailExtra.querySelectorAll("[data-qb-cat]");
  for (var c = 0; c < cards.length; c++) {
    cards[c].onclick = function() {
      var key = this.getAttribute("data-qb-cat");
      var idx = qbunpoState.categories.indexOf(key);
      if (idx > -1) qbunpoState.categories.splice(idx, 1);
      else qbunpoState.categories.push(key);
      renderQbunpoStep1();
    };
  }

  document.getElementById("qbunpoBtn1").onclick = function() {
    history.pushState({ menu: "quiz", quizStep: "bunpo-2" }, "", "#quiz-bunpo-2");
    renderQbunpoStep2();
  };
}

// STEP 2: Mode
function renderQbunpoStep2() {
  var html = getQbunpoHeader("Pilih Mode Soal", "Pilih jenis soal yang ingin kamu kerjakan.");
  html += '<div class="qkoto-mode-list">';
  
  var modes = [
    { key: "lengkapi", title: "Lengkapi Kalimat", sub: "Contoh: わたし ___ がくせいです。", icon: "&#9999;&#65039;" },
    { key: "benar", title: "Pilih Kalimat yang Benar", sub: "Contoh: どちらの くるまが いいですか。", icon: "&#128221;" },
    { key: "fungsi", title: "Pilih Arti / Fungsi Grammar", sub: "Contoh: これは なんですか。", icon: "&#129300;" }
  ];

  modes.forEach(m => {
    var s = qbunpoState.mode === m.key ? "selected" : "";
    html += '<div class="qkoto-mode-card ' + s + '" data-mode="' + m.key + '">';
    html += '<div class="qkoto-radio"><div class="qkoto-radio-inner"></div></div>';
    html += '<div class="qkoto-mode-icon" style="background:#ffe4e6; color:#fb2c74;">' + m.icon + '</div>';
    html += '<div class="qkoto-mode-text"><div class="qkoto-mode-title">' + m.title + '</div><div class="qkoto-mode-sub">' + m.sub + '</div></div></div>';
  });

  html += '</div><div style="padding: 0 20px 20px;"><button class="qbunpo-btn-primary" id="qbunpoBtn2">Lanjut &rarr;</button></div>';
  html += getQbunpoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qbunpoBack").onclick = function() { history.back(); };
  var modeCards = detailExtra.querySelectorAll(".qkoto-mode-card");
  for (var i = 0; i < modeCards.length; i++) {
    modeCards[i].onclick = function() {
      qbunpoState.mode = this.getAttribute("data-mode");
      renderQbunpoStep2();
    };
  }

  document.getElementById("qbunpoBtn2").onclick = function() {
    var total = 0;
    BUNPO_QUIZ_CATEGORIES.forEach(c => {
      if (qbunpoState.categories.includes(c.key)) {
        total += c.soal.filter(s => s.mode === qbunpoState.mode).length;
      }
    });
    
    qbunpoState.maxAvailable = total;
    
    if (total === 0) {
      alert("Maaf, belum ada soal tersedia untuk mode ini di kategori yang dipilih.");
      return;
    }
    
    qbunpoState.targetAmount = Math.min(5, total);

    history.pushState({ menu: "quiz", quizStep: "bunpo-3" }, "", "#quiz-bunpo-3");
    renderQbunpoStep3();
  };
}

// STEP 3: Jumlah Soal (Min 5, Max 10)
function renderQbunpoStep3() {
  var html = getQbunpoHeader("Jumlah Soal", "Pilih jumlah soal yang ingin kamu kerjakan.<br>( Min 5, Max 10 )");
  
  html += '<div class="qbunpo-stepper-box">';
  html += '<button class="qbunpo-stepper-btn" id="qbunpoStepMin">&minus;</button>';
  html += '<div class="qkoto-stepper-val"><span class="qbunpo-stepper-num">' + qbunpoState.targetAmount + '</span><span class="qkoto-stepper-lbl">Soal</span></div>';
  html += '<button class="qbunpo-stepper-btn" id="qbunpoStepPlus">&plus;</button>';
  html += '</div>';

  html += '<div class="qkoto-info-box"><div class="qkoto-info-icon">&#8505;</div><div class="qkoto-info-text">Jumlah soal akan dibatasi maksimal 10 atau menyesuaikan stok soal.</div></div>';
  
  var actualMax = Math.min(10, qbunpoState.maxAvailable);
  html += '<div class="qkoto-tersedia-box">Soal tersedia: <strong>' + qbunpoState.maxAvailable + '</strong><br>Maksimal soal kuis ini: <strong>' + actualMax + '</strong></div>';
  html += '<div style="padding: 0 20px 20px;"><button class="qbunpo-btn-primary" id="qbunpoBtn3">Lanjut &rarr;</button></div>';
  
  html += getQbunpoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qbunpoBack").onclick = function() { history.back(); };

  document.getElementById("qbunpoStepMin").onclick = function() {
    if (qbunpoState.targetAmount > 5) {
      qbunpoState.targetAmount -= 1;
      renderQbunpoStep3();
    }
  };
  document.getElementById("qbunpoStepPlus").onclick = function() {
    var actualMax = Math.min(10, qbunpoState.maxAvailable);
    if (qbunpoState.targetAmount < actualMax) {
      qbunpoState.targetAmount += 1;
      renderQbunpoStep3();
    }
  };

  document.getElementById("qbunpoBtn3").onclick = function() {
    qbunpoState.finalAmount = Math.min(qbunpoState.targetAmount, qbunpoState.maxAvailable);
    history.pushState({ menu: "quiz", quizStep: "bunpo-4" }, "", "#quiz-bunpo-4");
    renderQbunpoStep4();
  };
}

// STEP 4: Konfirmasi
function renderQbunpoStep4() {
  var html = getQbunpoHeader("Siap untuk memulai?", "Periksa kembali pengaturan quiz kamu.");
  
  var catNames = BUNPO_QUIZ_CATEGORIES.filter(c => qbunpoState.categories.includes(c.key)).map(c => c.nama).join(" &bull; ");
  
  html += '<div class="qkoto-conf-list">';
  html += qkotoRenderConfRow("&#128218;", "Materi", "Grammar N5");
  html += qkotoRenderConfRow("&#128194;", "Kategori", catNames);
  html += qkotoRenderConfRow("&#9999;&#65039;", "Mode", qbunpoState.mode);
  html += qkotoRenderConfRow("&#9776;", "Jumlah Soal", qbunpoState.finalAmount + " soal");
  html += qkotoRenderConfRow("&#9202;", "Waktu", "30 detik / soal");
  html += qkotoRenderConfRow("&#10084;", "Nyawa", "<span style='color:#fb2c74'>&hearts; &hearts; &hearts;</span> (3 nyawa)");
  html += '</div>';

  html += '<div style="padding: 0 20px 30px;"><button class="qbunpo-btn-primary" id="qbunpoBtn4">Mulai Quiz &rarr;</button></div>';
  html += getQbunpoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qbunpoBack").onclick = function() { history.back(); };
  document.getElementById("qbunpoBtn4").onclick = function() {
    prepareQbunpoData();
    history.pushState({ menu: "quiz", quizStep: "bunpo-5" }, "", "#quiz-bunpo-5");
    renderQbunpoStep5();
  };
}

function prepareQbunpoData() {
  var pool = [];
  BUNPO_QUIZ_CATEGORIES.forEach(cat => {
    if (qbunpoState.categories.includes(cat.key)) {
      cat.soal.forEach(s => {
        if(s.mode === qbunpoState.mode) {
           pool.push(Object.assign({}, s, { catNama: cat.nama }));
        }
      });
    }
  });
  
  pool = pool.sort(() => Math.random() - 0.5);
  qbunpoState.questions = pool.slice(0, qbunpoState.finalAmount);
  qbunpoState.currentIndex = 0;
  qbunpoState.lives = 3;
  qbunpoState.correctCount = 0;
  qbunpoState.wrongCount = 0;
  qbunpoState.timeTotal = 0;
  qbunpoState.answersLog = [];
  qbunpoState.isPlaying = true;
}

// STEP 5: Gameplay
function renderQbunpoStep5() {
  if (qbunpoState.lives <= 0) return qbunpoGameOver();
  if (qbunpoState.currentIndex >= qbunpoState.finalAmount) return finishQbunpoGame();

  qbunpoState.timeLeft = 30;
  var q = qbunpoState.questions[qbunpoState.currentIndex];
  qbunpoState.currentQ = q;
  qbunpoState.currentCorrectAns = q.jawabanBenar;
  
  var html = '<div class="qbunpo-play-wrapper">';
  html += '<div class="qkoto-play-top">';
  html += '<button id="qbunpoPlayExit" style="background:none; border:none; font-size:20px; font-weight:bold; color:#888; cursor:pointer;">&#10005;</button>';
  html += '<div class="qkoto-play-progress">' + (qbunpoState.currentIndex + 1) + ' / ' + qbunpoState.finalAmount + '</div>';
  html += '<div class="qkoto-play-hearts" style="color:#fb2c74;">' + getQbunpoHearts(qbunpoState.lives) + '</div>';
  html += '<div class="qkoto-play-timer">&#9202; <span id="qbTimerNum">30</span></div>';
  html += '</div>';

  var progPct = ((qbunpoState.currentIndex) / qbunpoState.finalAmount) * 100;
  html += '<div class="qkoto-prog-bar"><div class="qkoto-prog-fill" style="background:#fb2c74; width:'+progPct+'%"></div></div>';

  html += '<div class="qkoto-play-card">';
  html += '<div class="qkoto-play-cat" style="background:#ffe4e6; color:#fb2c74;">' + q.catNama + '</div>';
  html += '<div class="qkoto-play-prompt">' + (q.prompt || "Lengkapi kalimat ini:") + '</div>';
  html += '<div class="qkoto-play-big" style="font-size: 24px;">' + q.pertanyaan + '</div>';
  html += '</div>';

  html += '<div class="qkoto-options-list">';
  var options = q.pilihan.slice().sort(() => Math.random() - 0.5);
  for (var i = 0; i < options.length; i++) {
    html += '<button class="qkoto-opt-btn" data-ans="' + options[i] + '">';
    html += '<span class="qkoto-opt-num" style="color:#fb2c74;">&#1011'+(2+i)+';</span> ' + options[i];
    html += '</button>';
  }
  html += '</div></div>';
  
  detailExtra.innerHTML = html;
  startQbunpoTimer();

  document.getElementById("qbunpoPlayExit").onclick = function() { showQbunpoExitConfirm(); };
  var btns = detailExtra.querySelectorAll(".qkoto-opt-btn");
  for (var b = 0; b < btns.length; b++) {
    btns[b].onclick = function() {
      clearInterval(qbunpoState.timer);
      qbunpoProcessAnswer(this.getAttribute("data-ans"), q.jawabanBenar, q);
    };
  }
}

function startQbunpoTimer() {
  clearInterval(qbunpoState.timer);
  qbunpoState.timer = setInterval(function() {
    qbunpoState.timeLeft--;
    qbunpoState.timeTotal++;
    var timerEl = document.getElementById("qbTimerNum");
    if (timerEl) {
      timerEl.textContent = qbunpoState.timeLeft;
      if (qbunpoState.timeLeft <= 5) timerEl.parentElement.classList.add("danger");
    }
    if (qbunpoState.timeLeft <= 0) {
      clearInterval(qbunpoState.timer);
      qbunpoProcessAnswer(null, qbunpoState.currentCorrectAns, qbunpoState.currentQ);
    }
  }, 1000);
}

function qbunpoProcessAnswer(chosen, correctAns, qObj) {
  var isCorrect = (chosen === correctAns);
  qbunpoState.answersLog.push({ q: qObj, userAns: chosen, correctAns: correctAns, isCorrect: isCorrect, time: 30 - qbunpoState.timeLeft });
  if (isCorrect) qbunpoState.correctCount++;
  else { qbunpoState.wrongCount++; qbunpoState.lives--; }
  qbunpoState.currentIndex++;
  
  if (chosen === null) showQbunpoTimeout(correctAns);
  else renderQbunpoStep5();
}

function showQbunpoExitConfirm() {
  clearInterval(qbunpoState.timer);
  var html = '<div class="qkoto-modal-overlay" id="qbExitOverlay"><div class="qkoto-modal-box" style="text-align:center;">';
  html += '<div style="font-size:32px; margin-bottom:10px;">&#9888;</div>';
  html += '<div style="font-weight:bold; font-size:20px; margin-bottom:8px;">Akhiri Quiz?</div>';
  html += '<button class="qbunpo-btn-primary" id="qbBtnAkhiri">Akhiri & Lihat Hasil</button>';
  html += '<button class="qbunpo-btn-secondary" id="qbBtnLanjut">Lanjutkan Quiz</button>';
  html += '</div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById("qbBtnAkhiri").onclick = function() { document.getElementById("qbExitOverlay").remove(); finishQbunpoGame(); };
  document.getElementById("qbBtnLanjut").onclick = function() { document.getElementById("qbExitOverlay").remove(); startQbunpoTimer(); };
}

function showQbunpoTimeout(correctAns) {
  var html = '<div class="qkoto-timeout-screen"><div class="qkoto-timeout-icon" style="color:#fb2c74;">&#9202;</div>';
  html += '<div class="qkoto-timeout-title">Waktu Habis!</div><div class="qkoto-timeout-val">' + correctAns + '</div>';
  html += '<button class="qbunpo-btn-primary" id="qbBtnTO" style="margin-top:40px;">Lanjut</button></div>';
  detailExtra.innerHTML = html;
  document.getElementById("qbBtnTO").onclick = function() { renderQbunpoStep5(); };
}

function qbunpoGameOver() {
  qbunpoState.isPlaying = false; qbunpoState.isFinished = true;
  history.replaceState({ menu: "quiz", quizStep: "bunpo-6" }, "", "#quiz-bunpo-6");
  var html = '<div class="qkoto-gameover-screen"><div class="qkoto-go-icon">&#128148;</div>';
  html += '<div class="qkoto-go-title">Kehabisan Nyawa!</div>';
  html += '<div class="qkoto-go-sub">Nyawamu habis. Kamu bisa lihat hasil quiz atau coba lagi.</div>';
  html += '<div class="qkoto-go-actions">';
  html += '<button class="qbunpo-btn-primary" id="qbBtnGOHasil">Lihat Hasil</button>';
  html += '<button class="qbunpo-btn-secondary" id="qbBtnGOUlang">Ulangi</button>';
  html += '<button class="qbunpo-btn-ghost-dark" id="qbBtnGOMenu">Kembali</button>';
  html += '</div></div>';
  detailExtra.innerHTML = html;
  document.getElementById("qbBtnGOHasil").onclick = function() { renderQbunpoStep6(); };
  document.getElementById("qbBtnGOUlang").onclick = function() { openQuizBunpoStep1(); };
  document.getElementById("qbBtnGOMenu").onclick = function() { qbunpoBackToQuizMenu(); };
}

function finishQbunpoGame() {
  qbunpoState.isPlaying = false; qbunpoState.isFinished = true;
  history.replaceState({ menu: "quiz", quizStep: "bunpo-6" }, "", "#quiz-bunpo-6");
  renderQbunpoStep6();
}

// STEP 6: Hasil
function renderQbunpoStep6() {
  // Simpan ke Riwayat Quiz — hanya sekali per sesi.
  if (!qbunpoState.historySaved && typeof simpanRiwayatQuiz === "function") {
    qbunpoState.historySaved = true;
    var bunpoKategoriSet = {};
    for (var qi = 0; qi < qbunpoState.questions.length; qi++) {
      if (qbunpoState.questions[qi] && qbunpoState.questions[qi].catNama) {
        bunpoKategoriSet[qbunpoState.questions[qi].catNama] = true;
      }
    }
    var bunpoKategoriLabel = Object.keys(bunpoKategoriSet).join(", ") || "Semua Kategori";
    var bunpoTotal = qbunpoState.correctCount + qbunpoState.wrongCount;
    var bunpoNilai = bunpoTotal > 0 ? Math.round((qbunpoState.correctCount / bunpoTotal) * 100) : 0;
    var bunpoAvgTime = "0.0";
    if (qbunpoState.answersLog && qbunpoState.answersLog.length > 0) {
      var bunpoTotalWaktu = 0;
      for (var ai = 0; ai < qbunpoState.answersLog.length; ai++) {
        bunpoTotalWaktu += (qbunpoState.answersLog[ai].time || 0);
      }
      bunpoAvgTime = (bunpoTotalWaktu / qbunpoState.answersLog.length).toFixed(1);
    }
    simpanRiwayatQuiz({
      mode: "quiz",
      type: "bunpo",
      title: "Quiz Grammar",
      subtitle: bunpoKategoriLabel,
      score: bunpoNilai,
      correct: qbunpoState.correctCount,
      wrong: qbunpoState.wrongCount,
      total: bunpoTotal,
      time: bunpoAvgTime + "s",
      status: "SELESAI",
      snapshot: {
        answersLog: qbunpoState.answersLog,
        correctCount: qbunpoState.correctCount,
        wrongCount: qbunpoState.wrongCount,
        finalAmount: qbunpoState.finalAmount
      }
    });
  }

  var html = '<div class="qkoto-result-screen"><div class="qkoto-res-trophy">&#127942;</div>';
  html += '<div class="qkoto-res-title">Quiz Selesai!</div>';
  html += '<div class="qkoto-score-circle"><span class="qkoto-score-big" style="color:#fb2c74;">' + qbunpoState.correctCount + '</span>';
  html += '<span class="qkoto-score-div">/ ' + qbunpoState.finalAmount + '</span></div>';
  html += '<div class="qkoto-res-actions">';
  html += '<button class="qbunpo-btn-primary" id="qbBtnResDetail">&#128196; Detail</button>';
  html += '<button class="qbunpo-btn-secondary" id="qbBtnResUlang">&#10227; Coba Lagi</button>';
  html += '<button class="qbunpo-btn-ghost" id="qbBtnResMenu">Kembali</button>';
  html += '</div></div>';
  detailExtra.innerHTML = html;
  document.getElementById("qbBtnResDetail").onclick = function() { history.pushState({ menu: "quiz", quizStep: "bunpo-7" }, "", "#quiz-bunpo-7"); renderQbunpoStep7(); };
  document.getElementById("qbBtnResUlang").onclick = function() { openQuizBunpoStep1(); };
  document.getElementById("qbBtnResMenu").onclick = function() { qbunpoBackToQuizMenu(); };
}

// STEP 7: Detail Jawaban
function renderQbunpoStep7() {
  var html = '<div class="qkoto-header"><button class="qbunpo-back-top" id="qbBackDet">&larr; Kembali</button></div>';
  
  html += '<div class="qkoto-det-summary">';
  html += '<div class="qkoto-det-sumbox"><span class="qkoto-det-ic good">&#10003;</span><div><strong>' + qbunpoState.correctCount + '</strong><br><small>Benar</small></div></div>';
  html += '<div class="qkoto-det-sumbox"><span class="qkoto-det-ic bad">&#10005;</span><div><strong>' + qbunpoState.wrongCount + '</strong><br><small>Salah</small></div></div>';
  html += '</div>';

  html += '<div class="qkoto-det-list">';
  for (var i = 0; i < qbunpoState.answersLog.length; i++) {
    var ans = qbunpoState.answersLog[i];
    var num = (i + 1 < 10) ? "0" + (i + 1) : (i + 1);
    var icClass = ans.isCorrect ? "good" : "bad";
    var icMark = ans.isCorrect ? "&#10003;" : "&#10005;";
    
    html += '<div class="qkoto-det-row" onclick="openQbunpoAnsModal('+i+')">';
    html += '<div class="qkoto-det-num">' + num + '</div>';
    html += '<div class="qkoto-det-main">';
    html += '<div class="qkoto-det-jp" style="font-size:14px;">' + ans.q.pertanyaan + '</div>';
    html += '<div class="qkoto-det-cat" style="color:#fb2c74;">' + ans.q.catNama + '</div>';
    html += '</div>';
    html += '<div class="qkoto-det-mark ' + icClass + '">' + icMark + '</div>';
    html += '<div class="qkoto-det-arrow">&rsaquo;</div>';
    html += '</div>';
  }
  html += '</div>';
  detailExtra.innerHTML = html;
  document.getElementById("qbBackDet").onclick = function() { history.back(); };
}

window.openQbunpoAnsModal = function(idx) {
  var ans = qbunpoState.answersLog[idx];
  var statClass = ans.isCorrect ? "good" : "bad";
  var statStr = ans.isCorrect ? "Benar" : "Salah";
  
  var modalHtml = '<div class="qkoto-modal-overlay" id="qbAnsModal">';
  modalHtml += '<div class="qkoto-modal-box">';
  modalHtml += '<div class="qkoto-modal-top">';
  modalHtml += '<div class="qkoto-modal-title">Soal No. ' + (idx+1) + '</div>';
  modalHtml += '<button class="qkoto-modal-close" onclick="document.getElementById(\'qbAnsModal\').remove()">&#10005;</button>';
  modalHtml += '</div>';
  
  modalHtml += '<div class="qkoto-mod-cat" style="background:#ffe4e6; color:#fb2c74;">' + ans.q.catNama + '</div>';
  modalHtml += '<div class="qkoto-mod-jp" style="font-size: 22px;">' + ans.q.pertanyaan + '</div>';
  
  modalHtml += '<div class="qkoto-mod-stat ' + statClass + '">' + statStr + '</div>';
  
  modalHtml += '<div class="qkoto-mod-anslist">';
  modalHtml += '<div class="qkoto-mod-ansrow"><span>Jawaban Kamu:</span><strong class="' + statClass + '">' + (ans.userAns || "- (Waktu Habis)") + '</strong></div>';
  if (!ans.isCorrect) {
    modalHtml += '<div class="qkoto-mod-ansrow"><span>Jawaban Benar:</span><strong class="good">' + ans.correctAns + '</strong></div>';
  }
  modalHtml += '</div>';
  modalHtml += '</div></div>';
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

function getQbunpoHeader(title, sub) {
  return '<div class="qbunpo-header"><button class="qbunpo-back-top" id="qbunpoBack">&larr; Kembali</button><div class="qbunpo-head-title">' + title + '</div><div class="qbunpo-head-sub">' + sub + '</div></div>';
}
function getQbunpoFooter() {
  return '<img src="assets/quizbunpo/bg-sakura.png" class="qbunpo-footer-bg" alt="">';
}
function getQbunpoHearts(lives) {
  var str = "";
  for(var i=0; i<3; i++) { str += (i < lives) ? '<span class="qkoto-heart full">&hearts;</span>' : '<span class="qkoto-heart empty">&hearts;</span>'; }
  return str;
}
