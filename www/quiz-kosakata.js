// =====================================================
// quiz-kosakata.js
// Logika 7-Langkah Quiz Kosakata (Dengan Auto-Unwind History & Exit Confirm)
// =====================================================

var qkotoState = {
  step: 0,
  categories: [],
  maxAvailable: 0,
  mode: "id2jp",
  targetAmount: 10,
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
  isPlaying: false,       // Status sedang di dalam layar permainan
  currentQ: null,         // Menyimpan data soal saat ini untuk timer
  currentCorrectAns: "",  // Menyimpan jawaban benar saat ini untuk timer
  historySaved: false     // Mencegah riwayat tersimpan berkali-kali untuk 1 sesi
};

function handleQuizKosakataPopstate(state) {
  // Jika sedang proses auto-unwind untuk kembali ke menu utama
  if (qkotoState.isUnwinding) {
    if (state && state.quizStep && state.quizStep.indexOf("kotoba-") === 0) {
      history.back(); // Lanjutkan mundur
      return;
    } else {
      // Sudah sampai di luar halaman kosakata (menu utama quiz)
      qkotoState.isUnwinding = false;
      qkotoState.isFinished = false;
    }
  }

  var stepId = state && state.quizStep ? state.quizStep.replace("kotoba-", "") : "";
  var stepNum = parseInt(stepId, 10);

  // MENCEGAT TOMBOL KEMBALI SAAT BERMAIN
  if (qkotoState.isPlaying && stepNum < 5) {
    // Kembalikan hash URL ke step-5 agar halaman tidak benar-benar mundur
    history.pushState({ menu: "quiz", quizStep: "kotoba-5" }, "", "#quiz-kotoba-5");
    showQkotoExitConfirm();
    return;
  }

  // Mencegah kembali ke gameplay / konfirmasi jika quiz sudah selesai
  if (qkotoState.isFinished && stepNum > 0 && stepNum < 6) {
    qkotoState.isUnwinding = true;
    history.back();
    return;
  }

  if (stepNum === 1) renderQkotoStep1();
  else if (stepNum === 2) renderQkotoStep2();
  else if (stepNum === 3) renderQkotoStep3();
  else if (stepNum === 4) renderQkotoStep4();
  else if (stepNum === 5) renderQkotoStep5();
  else if (stepNum === 6) renderQkotoStep6();
  else if (stepNum === 7) renderQkotoStep7();
  else {
    detailExtra.innerHTML = renderQuizMenu();
    initQuizBackButton();
    initQuizCardClicks();
  }
}

function openQuizKosakataStep1() {
  qkotoState.step = 1;
  qkotoState.categories = [];
  qkotoState.mode = "id2jp";
  qkotoState.targetAmount = 10;
  qkotoState.isFinished = false;
  qkotoState.isUnwinding = false;
  qkotoState.isPlaying = false;
  qkotoState.historySaved = false;
  
  history.pushState({ menu: "quiz", quizStep: "kotoba-1" }, "", "#quiz-kotoba-1");
  renderQkotoStep1();
}

// =====================================================
// STEP 1: Pilih Kategori
// =====================================================
function renderQkotoStep1() {
  var html = getQkotoHeader("Quiz Kosakata", "Pilih kategori yang ingin kamu gunakan untuk quiz.");
  
  html += '<div class="qkoto-cat-grid">';
  
  var isAll = qkotoState.categories.length === KOSAKATA_CATEGORIES.length;
  var totalAllKata = KOSAKATA_CATEGORIES.reduce((sum, cat) => sum + cat.kata.length, 0);
  
  html += '<div class="qkoto-cat-card ' + (isAll ? "selected" : "") + '" id="qkotoCatAll">';
  html += '<div class="qkoto-cat-check">&#10003;</div>';
  html += '<div class="qkoto-cat-icon" style="background:#ffe1e6; color:#e6395b;">&#10003;</div>';
  html += '<div class="qkoto-cat-title">All</div>';
  html += '<div class="qkoto-cat-sub">Semua Kategori</div>';
  html += '<div class="qkoto-cat-sub">' + totalAllKata + ' kata</div>';
  html += '</div>';

  var pastelColors = ['#ffe1e6', '#dbeeff', '#ffe9d9', '#ddf3e4', '#ece4fb', '#fff3cf'];
  var textColors = ['#e6395b', '#2c6fdb', '#d6892b', '#3c9b4a', '#8b5cf6', '#d6a02b'];

  for (var i = 0; i < KOSAKATA_CATEGORIES.length; i++) {
    var cat = KOSAKATA_CATEGORIES[i];
    var isSel = qkotoState.categories.indexOf(cat.key) !== -1;
    var bgCol = pastelColors[i % pastelColors.length];
    var txCol = textColors[i % textColors.length];

    html += '<div class="qkoto-cat-card ' + (isSel ? "selected" : "") + '" data-qk-cat="' + cat.key + '">';
    html += '<div class="qkoto-cat-check">&#10003;</div>';
    html += '<div class="qkoto-cat-icon" style="background:' + bgCol + '; color:' + txCol + ';">' + cat.icon + '</div>';
    html += '<div class="qkoto-cat-title">' + cat.nama + '</div>';
    html += '<div class="qkoto-cat-sub">' + cat.kata.length + ' kata</div>';
    html += '</div>';
  }
  
  html += '</div>';

  var btnState = qkotoState.categories.length > 0 ? "" : "disabled";
  html += '<div style="padding: 0 20px 20px;"><button class="qkoto-btn-primary" id="qkotoBtn1" ' + btnState + '>Lanjut &rarr;</button></div>';
  
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBack").onclick = function() { history.back(); };
  
  document.getElementById("qkotoCatAll").onclick = function() {
    if (qkotoState.categories.length === KOSAKATA_CATEGORIES.length) {
      qkotoState.categories = [];
    } else {
      qkotoState.categories = KOSAKATA_CATEGORIES.map(c => c.key);
    }
    renderQkotoStep1();
  };

  var cards = detailExtra.querySelectorAll("[data-qk-cat]");
  for (var c = 0; c < cards.length; c++) {
    cards[c].onclick = function() {
      var key = this.getAttribute("data-qk-cat");
      var idx = qkotoState.categories.indexOf(key);
      if (idx > -1) qkotoState.categories.splice(idx, 1);
      else qkotoState.categories.push(key);
      renderQkotoStep1();
    };
  }

  document.getElementById("qkotoBtn1").onclick = function() {
    var total = 0;
    KOSAKATA_CATEGORIES.forEach(c => {
      if(qkotoState.categories.includes(c.key)) total += c.kata.length;
    });
    qkotoState.maxAvailable = total;

    history.pushState({ menu: "quiz", quizStep: "kotoba-2" }, "", "#quiz-kotoba-2");
    renderQkotoStep2();
  };
}

// =====================================================
// STEP 2: Pilih Mode
// =====================================================
function renderQkotoStep2() {
  var html = getQkotoHeader("Quiz Kosakata", "Pilih mode quiz yang kamu inginkan.");
  
  html += '<div class="qkoto-mode-list">';
  
  var s1 = qkotoState.mode === "id2jp" ? "selected" : "";
  html += '<div class="qkoto-mode-card ' + s1 + '" data-mode="id2jp">';
  html += '<div class="qkoto-radio"><div class="qkoto-radio-inner"></div></div>';
  html += '<div class="qkoto-mode-icon" style="background:#ffe1e6; color:#e6395b;">&#128214;</div>';
  html += '<div class="qkoto-mode-text">';
  html += '<div class="qkoto-mode-title">Arti &rarr; Huruf Jepang</div>';
  html += '<div class="qkoto-mode-sub">Contoh: Makan &rarr; 食べる</div>';
  html += '</div></div>';

  var s2 = qkotoState.mode === "jp2id" ? "selected" : "";
  html += '<div class="qkoto-mode-card ' + s2 + '" data-mode="jp2id">';
  html += '<div class="qkoto-radio"><div class="qkoto-radio-inner"></div></div>';
  html += '<div class="qkoto-mode-icon" style="background:#dbeeff; color:#2c6fdb;">&#12354;</div>';
  html += '<div class="qkoto-mode-text">';
  html += '<div class="qkoto-mode-title">Huruf Jepang &rarr; Arti</div>';
  html += '<div class="qkoto-mode-sub">Contoh: 食べる &rarr; Makan</div>';
  html += '</div></div>';

  html += '</div>';
  
  html += '<div style="padding: 0 20px 20px;"><button class="qkoto-btn-primary" id="qkotoBtn2">Lanjut &rarr;</button></div>';
  
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBack").onclick = function() { history.back(); };

  var modes = detailExtra.querySelectorAll(".qkoto-mode-card");
  for (var i = 0; i < modes.length; i++) {
    modes[i].onclick = function() {
      qkotoState.mode = this.getAttribute("data-mode");
      renderQkotoStep2();
    };
  }

  document.getElementById("qkotoBtn2").onclick = function() {
    history.pushState({ menu: "quiz", quizStep: "kotoba-3" }, "", "#quiz-kotoba-3");
    renderQkotoStep3();
  };
}

// =====================================================
// STEP 3: Jumlah Soal
// =====================================================
function renderQkotoStep3() {
  var html = getQkotoHeader("Quiz Kosakata", "Pilih jumlah soal yang ingin kamu kerjakan.<br>( kelipatan 5 )");
  
  html += '<div class="qkoto-stepper-box">';
  html += '<button class="qkoto-stepper-btn" id="qkotoStepMin">&minus;</button>';
  html += '<div class="qkoto-stepper-val"><span class="qkoto-stepper-num">' + qkotoState.targetAmount + '</span><span class="qkoto-stepper-lbl">Soal</span></div>';
  html += '<button class="qkoto-stepper-btn" id="qkotoStepPlus">&plus;</button>';
  html += '</div>';

  html += '<div class="qkoto-info-box">';
  html += '<div class="qkoto-info-icon">&#8505;</div>';
  html += '<div class="qkoto-info-text">Jumlah soal akan menyesuaikan dengan kosakata yang tersedia pada kategori yang kamu pilih.</div>';
  html += '</div>';

  html += '<div class="qkoto-tersedia-box">';
  html += 'Kosakata tersedia: <strong>' + qkotoState.maxAvailable + '</strong><br>';
  var actualMax = Math.min(qkotoState.targetAmount, qkotoState.maxAvailable);
  html += 'Maksimal soal: <strong>' + actualMax + '</strong>';
  html += '</div>';

  html += '<div style="padding: 0 20px 20px;"><button class="qkoto-btn-primary" id="qkotoBtn3">Lanjut &rarr;</button></div>';
  
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBack").onclick = function() { history.back(); };

  document.getElementById("qkotoStepMin").onclick = function() {
    if (qkotoState.targetAmount > 5) {
      qkotoState.targetAmount -= 5;
      renderQkotoStep3();
    }
  };
  
  document.getElementById("qkotoStepPlus").onclick = function() {
    qkotoState.targetAmount += 5;
    renderQkotoStep3();
  };

  document.getElementById("qkotoBtn3").onclick = function() {
    qkotoState.finalAmount = Math.min(qkotoState.targetAmount, qkotoState.maxAvailable);
    history.pushState({ menu: "quiz", quizStep: "kotoba-4" }, "", "#quiz-kotoba-4");
    renderQkotoStep4();
  };
}

// =====================================================
// STEP 4: Konfirmasi
// =====================================================
function renderQkotoStep4() {
  var html = '<div class="qkoto-header">' +
             '<button class="qkoto-back-top" id="qkotoBack">&larr; Kembali</button>' +
             '<div class="qkoto-head-title" style="margin-top: 10px;">Siap untuk memulai?</div>' +
             '<div class="qkoto-head-sub">Periksa kembali pengaturan quiz kamu.</div>' +
             '</div>';
  
  var catNames = KOSAKATA_CATEGORIES.filter(c => qkotoState.categories.includes(c.key)).map(c => c.nama).join(" &bull; ");
  var modeStr = qkotoState.mode === "id2jp" ? "Arti &rarr; Huruf Jepang" : "Huruf Jepang &rarr; Arti";
  
  html += '<div class="qkoto-conf-list">';
  html += qkotoRenderConfRow("&#128214;", "Materi", "Kosakata");
  html += qkotoRenderConfRow("&#128194;", "Kategori", catNames);
  html += qkotoRenderConfRow("&#127919;", "Mode", modeStr);
  html += qkotoRenderConfRow("&#9776;", "Jumlah Soal", qkotoState.finalAmount + " soal<br><small style='color:#888;'>(Maksimal " + qkotoState.finalAmount + " dari kategori yang dipilih)</small>");
  html += qkotoRenderConfRow("&#9202;", "Waktu", "30 detik / soal");
  html += qkotoRenderConfRow("&#10084;", "Nyawa", "<span style='color:#e6395b'>&hearts; &hearts; &hearts;</span><br><small style='color:#888;'>3 nyawa</small>");
  html += '</div>';

  html += '<div style="padding: 0 20px 30px; display: flex; justify-content: center;">';
  html += '<button class="qkoto-btn-primary" style="max-width: 280px;" id="qkotoBtn4">Mulai Quiz &rarr;</button>';
  html += '</div>';
  
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBack").onclick = function() { history.back(); };

  document.getElementById("qkotoBtn4").onclick = function() {
    prepareQkotoData();
    history.pushState({ menu: "quiz", quizStep: "kotoba-5" }, "", "#quiz-kotoba-5");
    renderQkotoStep5();
  };
}

function qkotoRenderConfRow(icon, label, val) {
  return '<div class="qkoto-conf-row">' +
         '<div class="qkoto-conf-icon">' + icon + '</div>' +
         '<div class="qkoto-conf-text"><div class="qkoto-conf-lbl">' + label + '</div><div class="qkoto-conf-val">' + val + '</div></div>' +
         '</div>';
}

function prepareQkotoData() {
  var pool = [];
  KOSAKATA_CATEGORIES.forEach(cat => {
    if (qkotoState.categories.includes(cat.key)) {
      cat.kata.forEach(k => {
        pool.push({
          kata: k.kata,
          romaji: k.romaji,
          arti: k.arti,
          catNama: cat.nama
        });
      });
    }
  });
  
  pool = qkotoShuffleArray(pool);
  qkotoState.questions = pool.slice(0, qkotoState.finalAmount);
  
  qkotoState.currentIndex = 0;
  qkotoState.lives = 3;
  qkotoState.correctCount = 0;
  qkotoState.wrongCount = 0;
  qkotoState.timeTotal = 0;
  qkotoState.answersLog = [];
  qkotoState.fullPool = pool;
  qkotoState.isPlaying = true; // Tandai permainan dimulai
}

// =====================================================
// STEP 5: Gameplay
// =====================================================
function renderQkotoStep5() {
  if (qkotoState.lives <= 0) return qkotoGameOver();
  if (qkotoState.currentIndex >= qkotoState.finalAmount) return finishQkotoGame();

  qkotoState.timeLeft = 30;
  var q = qkotoState.questions[qkotoState.currentIndex];
  
  var isId2Jp = qkotoState.mode === "id2jp";
  var promptStr = isId2Jp ? "Apa bahasa Jepang dari kata berikut?" : "Apa arti dari kata berikut?";
  var bigStr = isId2Jp ? q.arti : q.kata;
  var correctAns = isId2Jp ? q.kata : q.arti;
  
  // Simpan state untuk keperluan resume timer
  qkotoState.currentQ = q;
  qkotoState.currentCorrectAns = correctAns;
  
  var distractors = [];
  var tries = 0;
  while(distractors.length < 2 && tries < 50) {
    var randQ = qkotoState.fullPool[Math.floor(Math.random() * qkotoState.fullPool.length)];
    var ansStr = isId2Jp ? randQ.kata : randQ.arti;
    if (ansStr !== correctAns && !distractors.includes(ansStr)) {
      distractors.push(ansStr);
    }
    tries++;
  }
  
  var options = [correctAns].concat(distractors);
  options = qkotoShuffleArray(options);
  
  var html = '<div class="qkoto-play-wrapper">';
  html += '<div class="qkoto-play-top">';
  // Tombol Silang UI untuk Keluar
  html += '<button id="qkotoPlayExit" style="background:none; border:none; font-size:20px; font-weight:bold; color:#888; cursor:pointer; padding:0 10px;">&#10005;</button>';
  html += '<div class="qkoto-play-progress">' + (qkotoState.currentIndex + 1) + ' / ' + qkotoState.finalAmount + '</div>';
  html += '<div class="qkoto-play-hearts">' + getQkotoHearts(qkotoState.lives) + '</div>';
  html += '<div class="qkoto-play-timer">&#9202; <span id="qkTimerNum">30</span></div>';
  html += '</div>';

  var progPct = ((qkotoState.currentIndex) / qkotoState.finalAmount) * 100;
  html += '<div class="qkoto-prog-bar"><div class="qkoto-prog-fill" style="width:'+progPct+'%"></div></div>';

  html += '<div class="qkoto-play-card">';
  html += '<div class="qkoto-play-cat"><span class="qkoto-cat-dot"></span> ' + q.catNama + '</div>';
  html += '<div class="qkoto-play-prompt">' + promptStr + '</div>';
  html += '<div class="qkoto-play-big">' + bigStr + '</div>';
  html += '</div>';

  html += '<div class="qkoto-options-list">';
  for (var i = 0; i < options.length; i++) {
    html += '<button class="qkoto-opt-btn" data-ans="' + options[i] + '">';
    html += '<span class="qkoto-opt-num">&#1011'+(2+i)+';</span> ' + options[i];
    html += '</button>';
  }
  html += '</div>';
  
  html += getQkotoFooter();
  html += '</div>';
  
  detailExtra.innerHTML = html;

  startQkotoTimer(); // Panggil fungsi timer

  // Listener tombol UI Silang
  var exitBtn = document.getElementById("qkotoPlayExit");
  if(exitBtn) {
    exitBtn.onclick = function() { showQkotoExitConfirm(); };
  }

  var btns = detailExtra.querySelectorAll(".qkoto-opt-btn");
  for (var b = 0; b < btns.length; b++) {
    btns[b].onclick = function() {
      clearInterval(qkotoState.timer);
      var chosen = this.getAttribute("data-ans");
      qkotoProcessAnswer(chosen, correctAns, q);
    };
  }
}

// =====================================================
// TIMER & EXIT CONFIRMATION
// =====================================================
function startQkotoTimer() {
  clearInterval(qkotoState.timer);
  qkotoState.timer = setInterval(function() {
    qkotoState.timeLeft--;
    qkotoState.timeTotal++;
    var timerEl = document.getElementById("qkTimerNum");
    if (timerEl) {
      timerEl.textContent = qkotoState.timeLeft;
      if (qkotoState.timeLeft <= 5) timerEl.parentElement.classList.add("danger");
    }
    
    if (qkotoState.timeLeft <= 0) {
      clearInterval(qkotoState.timer);
      qkotoProcessAnswer(null, qkotoState.currentCorrectAns, qkotoState.currentQ);
    }
  }, 1000);
}

function showQkotoExitConfirm() {
  // Pause timer sementara
  clearInterval(qkotoState.timer);

  var html = '<div class="qkoto-modal-overlay" id="qkExitOverlay">';
  html += '<div class="qkoto-modal-box" style="text-align:center;">';
  html += '<div style="font-size:32px; margin-bottom:10px;">&#9888;</div>';
  html += '<div style="font-weight:bold; font-size:20px; margin-bottom:8px;">Akhiri Quiz?</div>';
  html += '<div style="font-size:14px; color:#666; margin-bottom:24px;">Progres dan nilaimu akan dihitung hingga soal ini saja.</div>';
  html += '<button class="qkoto-btn-primary" id="qkBtnAkhiri" style="margin-bottom:12px; background:#e6395b; box-shadow:0 4px 0 #cc2b4a;">Akhiri & Lihat Hasil</button>';
  html += '<button class="qkoto-btn-secondary" id="qkBtnLanjut">Lanjutkan Quiz</button>';
  html += '</div></div>';

  document.body.insertAdjacentHTML('beforeend', html);

  document.getElementById("qkBtnAkhiri").onclick = function() {
    document.getElementById("qkExitOverlay").remove();
    finishQkotoGame(); // Langsung hentikan dan hitung hasil
  };

  document.getElementById("qkBtnLanjut").onclick = function() {
    document.getElementById("qkExitOverlay").remove();
    startQkotoTimer(); // Lanjutkan timer
  };
}

function getQkotoHearts(lives) {
  var str = "";
  for(var i=0; i<3; i++) {
    if(i < lives) str += '<span class="qkoto-heart full">&hearts;</span>';
    else str += '<span class="qkoto-heart empty">&hearts;</span>';
  }
  return str;
}

function qkotoProcessAnswer(chosen, correctAns, qObj) {
  var isCorrect = (chosen === correctAns);
  
  qkotoState.answersLog.push({
    q: qObj,
    userAns: chosen,
    correctAns: correctAns,
    isCorrect: isCorrect,
    time: 30 - qkotoState.timeLeft
  });

  if (isCorrect) {
    qkotoState.correctCount++;
  } else {
    qkotoState.wrongCount++;
    qkotoState.lives--;
  }
  
  qkotoState.currentIndex++;
  
  if (chosen === null) {
    showQkotoTimeout(correctAns);
  } else {
    renderQkotoStep5();
  }
}

function showQkotoTimeout(correctAns) {
  var html = '<div class="qkoto-timeout-screen">';
  html += '<div class="qkoto-timeout-icon">&#9202;</div>';
  html += '<div class="qkoto-timeout-title">Waktu Habis!</div>';
  html += '<div class="qkoto-timeout-sub">Soal ini dianggap salah.</div>';
  html += '<div class="qkoto-timeout-lbl">Jawaban yang benar:</div>';
  html += '<div class="qkoto-timeout-val">' + correctAns + '</div>';
  html += '<div style="padding: 0 20px;"><button class="qkoto-btn-primary" id="qkotoBtnTO" style="margin-top:40px;">Lanjut</button></div>';
  html += '</div>';
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBtnTO").onclick = function() { renderQkotoStep5(); };
}

// =====================================================
// GAME OVER
// =====================================================
function qkotoGameOver() {
  qkotoState.isPlaying = false;
  qkotoState.isFinished = true;
  history.replaceState({ menu: "quiz", quizStep: "kotoba-6" }, "", "#quiz-kotoba-6");
  
  var html = '<div class="qkoto-gameover-screen">';
  html += '<div class="qkoto-go-icon">&#128148;</div>';
  html += '<div class="qkoto-go-title">Kamu kehabisan nyawa!</div>';
  html += '<div class="qkoto-go-sub">Jawaban benar: <strong>' + qkotoState.correctCount + ' / ' + qkotoState.finalAmount + '</strong></div>';
  html += '<div style="padding: 0 20px; width:100%; box-sizing:border-box;">';
  html += '<button class="qkoto-btn-primary" id="qkotoBtnGOHasil" style="margin-bottom:12px;">Lihat Hasil</button>';
  html += '<button class="qkoto-btn-secondary" id="qkotoBtnGOUlang">Coba Lagi</button>';
  html += '<div style="margin-top:24px;"><button class="qkoto-btn-text" id="qkotoGOBack">&larr; Kembali</button></div>';
  html += '</div>';
  html += '</div>';
  
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBtnGOHasil").onclick = function() {
    renderQkotoStep6();
  };
  
  document.getElementById("qkotoBtnGOUlang").onclick = function() {
    qkotoState.isFinished = false;
    openQuizKosakataStep1();
  };
  
  document.getElementById("qkotoGOBack").onclick = function() {
    qkotoState.isUnwinding = true;
    history.back();
  };
}

function finishQkotoGame() {
  qkotoState.isPlaying = false;
  qkotoState.isFinished = true;
  history.replaceState({ menu: "quiz", quizStep: "kotoba-6" }, "", "#quiz-kotoba-6");
  renderQkotoStep6();
}

// =====================================================
// STEP 6: Hasil
// =====================================================
function renderQkotoStep6() {
  var avgTime = qkotoState.correctCount + qkotoState.wrongCount > 0 
                ? (qkotoState.timeTotal / (qkotoState.correctCount + qkotoState.wrongCount)).toFixed(1) 
                : 0;

  // Simpan ke Riwayat Quiz — hanya sekali per sesi (flag historySaved
  // dicegah dobel walau halaman hasil ini dirender ulang, misal lewat
  // tombol back/forward atau dibuka lagi dari halaman Riwayat).
  if (!qkotoState.historySaved && typeof simpanRiwayatQuiz === "function") {
    qkotoState.historySaved = true;
    var kotoKategoriSet = {};
    for (var qi = 0; qi < qkotoState.questions.length; qi++) {
      if (qkotoState.questions[qi] && qkotoState.questions[qi].catNama) {
        kotoKategoriSet[qkotoState.questions[qi].catNama] = true;
      }
    }
    var kotoKategoriLabel = Object.keys(kotoKategoriSet).join(", ") || "Semua Kategori";
    var kotoTotal = qkotoState.correctCount + qkotoState.wrongCount;
    var kotoNilai = kotoTotal > 0 ? Math.round((qkotoState.correctCount / kotoTotal) * 100) : 0;
    simpanRiwayatQuiz({
      mode: "quiz",
      type: "kotoba",
      title: "Quiz Kosakata",
      subtitle: kotoKategoriLabel,
      score: kotoNilai,
      correct: qkotoState.correctCount,
      wrong: qkotoState.wrongCount,
      total: kotoTotal,
      time: avgTime + "s",
      status: "SELESAI",
      snapshot: {
        answersLog: qkotoState.answersLog,
        correctCount: qkotoState.correctCount,
        wrongCount: qkotoState.wrongCount,
        finalAmount: qkotoState.finalAmount,
        timeTotal: qkotoState.timeTotal
      }
    });
  }

  var html = '<div class="qkoto-result-screen">';
  html += '<div class="qkoto-res-trophy">&#127942;</div>';
  html += '<div class="qkoto-res-title">Quiz Selesai!</div>';
  
  html += '<div class="qkoto-score-circle">';
  html += '<span class="qkoto-score-big">' + qkotoState.correctCount + '</span>';
  html += '<span class="qkoto-score-div">/ ' + qkotoState.finalAmount + '</span>';
  html += '<div class="qkoto-score-lbl">Jawaban benar</div>';
  html += '</div>';

  html += '<div class="qkoto-stats-grid">';
  html += '<div class="qkoto-stat-box"><div class="qkoto-stat-ic good">&#10003;</div><div class="qkoto-stat-lbl">Benar</div><div class="qkoto-stat-val">' + qkotoState.correctCount + '</div></div>';
  html += '<div class="qkoto-stat-box"><div class="qkoto-stat-ic bad">&#10005;</div><div class="qkoto-stat-lbl">Salah</div><div class="qkoto-stat-val">' + qkotoState.wrongCount + '</div></div>';
  html += '<div class="qkoto-stat-box"><div class="qkoto-stat-ic time">&#9202;</div><div class="qkoto-stat-lbl">Rata-rata waktu</div><div class="qkoto-stat-val">' + avgTime + ' s</div></div>';
  html += '</div>';

  html += '<div style="padding: 0 20px;">';
  html += '<button class="qkoto-btn-primary" id="qkotoBtnResDetail" style="margin-bottom:12px;">&#128196; Detail Jawaban</button>';
  html += '<button class="qkoto-btn-secondary" id="qkotoBtnResUlang">&#10227; Ulangi Quiz</button>';
  html += '<div style="margin-top:20px;"><button class="qkoto-btn-text" id="qkotoResBack">&larr; Kembali</button></div>';
  html += '</div>';
  
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBtnResDetail").onclick = function() {
    history.pushState({ menu: "quiz", quizStep: "kotoba-7" }, "", "#quiz-kotoba-7");
    renderQkotoStep7();
  };
  
  document.getElementById("qkotoBtnResUlang").onclick = function() {
    qkotoState.isFinished = false;
    openQuizKosakataStep1();
  };
  
  document.getElementById("qkotoResBack").onclick = function() {
    qkotoState.isUnwinding = true;
    history.back();
  };
}

// =====================================================
// STEP 7: Detail Jawaban
// =====================================================
function renderQkotoStep7() {
  var html = '<div class="qkoto-header">';
  html += '<button class="qkoto-back-top" id="qkotoBackDet">&larr; Kembali</button>';
  html += '</div>';
  
  html += '<div class="qkoto-det-summary">';
  html += '<div class="qkoto-det-sumbox"><span class="qkoto-det-ic good">&#10003;</span><div><strong>' + qkotoState.correctCount + '</strong><br><small>Benar</small></div></div>';
  html += '<div class="qkoto-det-sumbox"><span class="qkoto-det-ic bad">&#10005;</span><div><strong>' + qkotoState.wrongCount + '</strong><br><small>Salah</small></div></div>';
  html += '</div>';

  html += '<div class="qkoto-det-list">';
  for (var i = 0; i < qkotoState.answersLog.length; i++) {
    var ans = qkotoState.answersLog[i];
    var num = (i + 1 < 10) ? "0" + (i + 1) : (i + 1);
    var icClass = ans.isCorrect ? "good" : "bad";
    var icMark = ans.isCorrect ? "&#10003;" : "&#10005;";
    
    html += '<div class="qkoto-det-row" onclick="openQkotoAnsModal('+i+')">';
    html += '<div class="qkoto-det-num">' + num + '</div>';
    html += '<div class="qkoto-det-main">';
    html += '<div class="qkoto-det-jp">' + ans.q.kata + '</div>';
    html += '<div class="qkoto-det-cat">' + ans.q.catNama + '</div>';
    html += '</div>';
    html += '<div class="qkoto-det-mark ' + icClass + '">' + icMark + '</div>';
    html += '<div class="qkoto-det-arrow">&rsaquo;</div>';
    html += '</div>';
  }
  html += '</div>';
  
  html += getQkotoFooter();
  detailExtra.innerHTML = html;

  document.getElementById("qkotoBackDet").onclick = function() {
    history.back();
  };
}

window.openQkotoAnsModal = function(idx) {
  var ans = qkotoState.answersLog[idx];
  var statClass = ans.isCorrect ? "good" : "bad";
  var statStr = ans.isCorrect ? "Benar" : "Salah";
  
  var modalHtml = '<div class="qkoto-modal-overlay" id="qkAnsModal">';
  modalHtml += '<div class="qkoto-modal-box">';
  modalHtml += '<div class="qkoto-modal-top">';
  modalHtml += '<div class="qkoto-modal-title">Soal No. ' + (idx+1) + '</div>';
  modalHtml += '<button class="qkoto-modal-close" onclick="document.getElementById(\'qkAnsModal\').remove()">&#10005;</button>';
  modalHtml += '</div>';
  
  modalHtml += '<div class="qkoto-mod-cat">' + ans.q.catNama + '</div>';
  modalHtml += '<div class="qkoto-mod-jp">' + ans.q.kata + '</div>';
  modalHtml += '<div class="qkoto-mod-rm">' + ans.q.romaji + '</div>';
  modalHtml += '<div class="qkoto-mod-id">' + ans.q.arti + '</div>';
  
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

function qkotoShuffleArray(array) {
  var arr = array.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
  }
  return arr;
}

function getQkotoHeader(title, sub) {
  return '<div class="qkoto-header">' +
         '<button class="qkoto-back-top" id="qkotoBack">&larr; Kembali</button>' +
         '<div class="qkoto-head-title">' + title + '</div>' +
         '<div class="qkoto-head-sub">' + sub + '</div>' +
         '</div>';
}

function getQkotoFooter() {
  return '<img src="assets/quizkosakata/bg-quiz-koto.png" class="qkoto-footer-bg" alt="">';
}
