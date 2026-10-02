// =====================================================
// quiz-campuran.js
// Logika lengkap Quiz Campuran (40 soal, 4 nyawa, 30 dtk/soal)
// =====================================================

var QMIX_STATE = {
  step: "info", // "info", "countdown", "play", "gameover", "hasil", "detail", "detail-modal"
  currentIndex: 0,
  score: 0,
  hearts: 4,
  questions: [],
  userAnswers: [], // Menyimpan riwayat jawaban user
  timer: 30,
  timerInterval: null,
  startTime: 0,
  totalTime: 0,
  selectedFilter: "semua", // "semua", "benar", "salah"
  activeModalIndex: null,
  isFinished: false
};

/** Membuka halaman informasi Quiz Campuran dari menu Quiz */
function loadQuizCampuranMenu() {
  stopCampuranTimer();
  QMIX_STATE.isFinished = false;
  QMIX_STATE.step = "info";
  renderQuizCampuran();
  history.pushState({ menu: "quiz", quizStep: "campuran-info" }, "", "#quiz-campuran");
}

/** Routing Back HP/browser untuk Quiz Campuran. */
function handleQuizCampuranPopstate(state) {
  stopCampuranTimer();

  if (!state || !state.quizStep || state.quizStep.indexOf("campuran-") !== 0) {
    if (typeof loadQuizMenu === "function") loadQuizMenu();
    return;
  }

  var sub = state.quizStep.split("-")[1];

  if (sub === "info") {
    if (QMIX_STATE.isFinished) {
      // Jika menekan back dari Hasil/Gameover, dia akan lewat sini.
      // Langsung skip ke riwayat sebelumnya (Menu Quiz Utama)
      history.back();
      return;
    }
    QMIX_STATE.step = "info";
    renderQuizCampuran();
  } else if (sub === "play") {
    if (QMIX_STATE.isFinished) {
      history.back();
      return;
    }
    QMIX_STATE.step = "play";
    renderQuizCampuran();
    startCampuranTimer();
  } else if (sub === "gameover") {
    QMIX_STATE.step = "gameover";
    renderQuizCampuran();
  } else if (sub === "hasil") {
    QMIX_STATE.step = "hasil";
    renderQuizCampuran();
  } else if (sub === "detail") {
    QMIX_STATE.step = "detail";
    renderQuizCampuran();
  } else {
    if (typeof loadQuizMenu === "function") loadQuizMenu();
  }
}

/** Render utama berdasarkan step aktif */
function renderQuizCampuran() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  // Semua halaman Quiz Campuran memakai header sendiri.
  // Header standar (ikon ?, Quiz, Latihan Soal) disembunyikan agar
  // Hasil/Detail tidak lagi menampilkan header Quiz bawaan aplikasi.
  hideStandardHeader();

  if (QMIX_STATE.step === "info") {
    container.innerHTML = buildCampuranInfoHTML();
    attachCampuranInfoEvents();
  } else if (QMIX_STATE.step === "countdown") {
    container.innerHTML = buildCampuranCountdownHTML(window.__qmixCountdownNum || 3);
  } else if (QMIX_STATE.step === "play") {
    container.innerHTML = buildCampuranPlayHTML();
    attachCampuranPlayEvents();
  } else if (QMIX_STATE.step === "gameover") {
    container.innerHTML = buildCampuranGameOverHTML();
    attachCampuranGameOverEvents();
  } else if (QMIX_STATE.step === "hasil") {
    container.innerHTML = buildCampuranHasilHTML();
    attachCampuranHasilEvents();
  } else if (QMIX_STATE.step === "detail") {
    container.innerHTML = buildCampuranDetailHTML();
    attachCampuranDetailEvents();
  }
}

// =====================================================
// 1. HALAMAN INFORMASI QUIZ
// =====================================================
function buildCampuranInfoHTML() {
  return `
    <div class="quizk-step-header" style="background:linear-gradient(135deg, #fff8ea, #fef2d9); padding:16px; border-radius:20px; margin-bottom:16px;">
      <button class="quizk-back-btn" id="qmixBackBtn">
        <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
      </button>
      <h2 class="quizk-step-title">Quiz Campuran</h2>
    </div>

    <div style="text-align:center; margin-bottom:20px;">
      <div style="font-size:3.2rem; margin-bottom:6px;">🎯</div>
      <h3 style="font-size:1.4rem; font-weight:800; margin:0 0 4px;">Quiz Campuran</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin:0;">Uji kemampuanmu dari semua materi!</p>
    </div>

    <div style="background:var(--card-bg); border-radius:20px; padding:18px; box-shadow:0 2px 10px rgba(0,0,0,0.04); margin-bottom:16px; text-align:left;">
      <div style="font-size:0.95rem; font-weight:800; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
        <span>📚</span> Materi Termasuk:
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; font-size:0.9rem; color:var(--text-muted);">
        <div>• Hiragana & Katakana</div>
        <div>• Kanji N5</div>
        <div>• Kosakata Sehari-hari</div>
        <div>• Bunpo / Tata Bahasa</div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
      <div style="background:var(--card-bg); border-radius:18px; padding:14px; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.04);">
        <div style="font-size:1.3rem; margin-bottom:4px;">⏱️</div>
        <div style="font-size:0.78rem; color:var(--text-muted);">Waktu</div>
        <div style="font-size:0.95rem; font-weight:800;">30 detik / soal</div>
      </div>
      <div style="background:var(--card-bg); border-radius:18px; padding:14px; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.04);">
        <div style="font-size:1.3rem; margin-bottom:4px;">❤️</div>
        <div style="font-size:0.78rem; color:var(--text-muted);">Nyawa</div>
        <div style="font-size:0.95rem; font-weight:800;">4 nyawa</div>
      </div>
    </div>

    <div style="background:#fef9e7; border-radius:14px; padding:12px 16px; font-size:0.85rem; color:#b78103; margin-bottom:20px; text-align:left;">
      ℹ️ Soal akan dipilih secara acak sebanyak <strong>40 soal</strong> dari semua materi.
    </div>

    <button class="qkoto-btn-primary" id="qmixStartDirectBtn">🚀 MULAI QUIZ</button>
  `;
}

function attachCampuranInfoEvents() {
  document.getElementById("qmixBackBtn").addEventListener("click", function() {
    history.back();
  });
  document.getElementById("qmixStartDirectBtn").addEventListener("click", function() {
    startCampuranCountdown();
  });
}

// =====================================================
// 2. COUNTDOWN 3-2-1-GO
// =====================================================
function startCampuranCountdown() {
  QMIX_STATE.step = "countdown";
  window.__qmixCountdownNum = 3;
  renderQuizCampuran();

  var count = 3;
  var interval = setInterval(function() {
    count--;
    if (count > 0) {
      window.__qmixCountdownNum = count;
      renderQuizCampuran();
    } else if (count === 0) {
      window.__qmixCountdownNum = "GO!";
      renderQuizCampuran();
    } else {
      clearInterval(interval);
      initCampuranGameplay();
    }
  }, 900);
}

function buildCampuranCountdownHTML(num) {
  var subText = num === "GO!" ? "Mulai!" : "Bersiap...";
  return `
    <div style="position:fixed; inset:0; background:linear-gradient(180deg, #fef2d9, #fde8bc); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:99999;">
      <div style="font-size:5rem; font-weight:900; color:#e0892b; animation: popIn 0.3s ease-out; margin-bottom:10px;">${num}</div>
      <div style="font-size:1.2rem; font-weight:700; color:#666;">${subText}</div>
    </div>
  `;
}

// =====================================================
// 3. GENERATE 40 SOAL ACAK & GAMEPLAY
// =====================================================
function initCampuranGameplay() {
  QMIX_STATE.currentIndex = 0;
  QMIX_STATE.score = 0;
  QMIX_STATE.hearts = 4;
  QMIX_STATE.userAnswers = [];
  QMIX_STATE.startTime = Date.now();
  QMIX_STATE.totalTime = 0;
  QMIX_STATE.selectedFilter = "semua";
  QMIX_STATE.questions = generateRandom40Questions();

  QMIX_STATE.step = "play";
  renderQuizCampuran();

  if (QMIX_STATE.isFinished) {
    // Jika bermain ulang dari halaman Hasil/GameOver, timpa state terakhirnya.
    QMIX_STATE.isFinished = false;
    history.replaceState({ menu: "quiz", quizStep: "campuran-play" }, "", "#quiz-campuran-play");
  } else {
    // Baru main pertama kali dari Info
    QMIX_STATE.isFinished = false;
    history.pushState({ menu: "quiz", quizStep: "campuran-play" }, "", "#quiz-campuran-play");
  }

  startCampuranTimer();
}

function generateRandom40Questions() {
  var pool = [];

  // 1. Hiragana / Katakana
  if (typeof KANA_DATA !== "undefined") {
    ["hiragana", "katakana"].forEach(function(jenis) {
      var groups = KANA_DATA[jenis];
      if (groups) {
        Object.keys(groups).forEach(function(gKey) {
          groups[gKey].forEach(function(item) {
            if (item.char && item.romaji) {
              pool.push({
                materi: jenis.charAt(0).toUpperCase() + jenis.slice(1),
                badgeKey: jenis,
                tipe: "kana",
                soal: item.char,
                romaji: item.romaji,
                pertanyaan: "Apa huruf romaji dari karakter berikut?",
                jawabanBenar: item.romaji,
                pilihan: generateRandomOptions([item.romaji], getAllRomajiPool(), 4)
              });
            }
          });
        });
      }
    });
  }

  // 2. Kanji
  if (typeof KANJI_DATA !== "undefined") {
    KANJI_DATA.forEach(function(k) {
      if (k.kanji && k.arti) {
        pool.push({
          materi: "Kanji",
          badgeKey: "kanji",
          tipe: "kanji",
          soal: k.kanji,
          romaji: k.kunyomi || k.onyomi || "",
          pertanyaan: "Apa arti kanji berikut?",
          jawabanBenar: k.arti,
          pilihan: generateRandomOptions([k.arti], getAllKanjiArtiPool(), 4)
        });
      }
    });
  }

  // 3. Kosakata
  if (typeof KOSAKATA_CATEGORIES !== "undefined") {
    KOSAKATA_CATEGORIES.forEach(function(cat) {
      cat.kata.forEach(function(w) {
        if (w.kata && w.arti) {
          pool.push({
            materi: "Kosakata",
            badgeKey: "kotoba",
            tipe: "kosakata",
            soal: w.kata,
            romaji: w.romaji || "",
            pertanyaan: "Apa arti kata berikut?",
            jawabanBenar: w.arti,
            pilihan: generateRandomOptions([w.arti], getAllKosakataArtiPool(), 4)
          });
        }
      });
    });
  }

  // 4. Bunpo / Grammar
  if (typeof BUNPO_QUIZ_CATEGORIES !== "undefined") {
    BUNPO_QUIZ_CATEGORIES.forEach(function(cat) {
      cat.soal.forEach(function(s) {
        pool.push({
          materi: "Bunpo",
          badgeKey: "bunpo",
          tipe: "bunpo",
          soal: s.pertanyaan,
          pertanyaan: s.mode === "lengkapi" ? "Lengkapi kalimat berikut:" : "Pilih jawaban yang benar:",
          jawabanBenar: s.jawabanBenar,
          pilihan: s.pilihan
        });
      });
    });
  }

  // Acak pool dan ambil tepat 40 soal
  shuffleArray(pool);
  return pool.slice(0, 40);
}

function getAllRomajiPool() {
  var res = [];
  if (typeof KANA_DATA !== "undefined") {
    ["hiragana", "katakana"].forEach(function(j) {
      Object.keys(KANA_DATA[j]).forEach(function(gk) {
        KANA_DATA[j][gk].forEach(function(it) { if (it.romaji) res.push(it.romaji); });
      });
    });
  }
  return res;
}
function getAllKanjiArtiPool() {
  var res = [];
  if (typeof KANJI_DATA !== "undefined") {
    KANJI_DATA.forEach(function(k) { if (k.arti) res.push(k.arti); });
  }
  return res;
}
function getAllKosakataArtiPool() {
  var res = [];
  if (typeof KOSAKATA_CATEGORIES !== "undefined") {
    KOSAKATA_CATEGORIES.forEach(function(c) {
      c.kata.forEach(function(w) { if (w.arti) res.push(w.arti); });
    });
  }
  return res;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i]; array[i] = array[j]; array[j] = temp;
  }
}

function generateRandomOptions(correctArr, fullPool, count) {
  var opts = [correctArr[0]];
  shuffleArray(fullPool);
  for (var i = 0; i < fullPool.length && opts.length < count; i++) {
    if (opts.indexOf(fullPool[i]) === -1) {
      opts.push(fullPool[i]);
    }
  }
  shuffleArray(opts);
  return opts;
}

// =====================================================
// 4. HALAMAN PENGERJAAN QUIZ (GAMEPLAY)
// =====================================================
function buildCampuranPlayHTML() {
  var q = QMIX_STATE.questions[QMIX_STATE.currentIndex];
  var total = QMIX_STATE.questions.length;
  var currentNo = QMIX_STATE.currentIndex + 1;
  var progPercent = (currentNo / total) * 100;

  var heartsHTML = "";
  for (var i = 1; i <= 4; i++) {
    var cls = i <= QMIX_STATE.hearts ? "qkoto-heart" : "qkoto-heart empty";
    heartsHTML += `<span class="${cls}">${i <= QMIX_STATE.hearts ? "♥" : "♡"}</span>`;
  }

  var questionSizeClass = getCampuranQuestionSizeClass(q.soal);

  return `
    <div class="qkoto-play-wrapper qmix-play-wrapper" style="padding:0;">
      <div class="qkoto-play-top">
        <button class="quizk-exit-btn" id="qmixExitBtn">×</button>
        <div class="qkoto-play-progress">${currentNo} / ${total}</div>
        <div class="qkoto-play-hearts">${heartsHTML}</div>
        <div class="qkoto-play-timer" id="qmixTimerBox">⏱️ <span id="qmixTimerNum">${QMIX_STATE.timer}</span></div>
      </div>

      <div class="qkoto-prog-bar" style="margin-bottom:20px;">
        <div class="qkoto-prog-fill" style="width: ${progPercent}%;"></div>
      </div>

      <div class="qmix-question-card">
        <div class="qkoto-play-cat">
          <span class="qkoto-cat-dot"></span>
          <span>${q.materi.toUpperCase()}</span>
        </div>
        <div class="qkoto-play-prompt">${q.pertanyaan}</div>
        <div class="qmix-question-box ${questionSizeClass}">${escapeHtml(String(q.soal))}</div>
      </div>

      <div class="qkoto-options-list">
        ${q.pilihan.map(function(opt, idx) {
          return `<button class="qkoto-opt-btn qmix-opt" data-opt="${escapeHtml(opt)}"><span class="qkoto-opt-num">${idx + 1}.</span> ${escapeHtml(opt)}</button>`;
        }).join("")}
      </div>
    </div>
  `;
}

function getCampuranQuestionSizeClass(text) {
  var len = String(text || "").length;
  if (len <= 4) return "qmix-size-xl";
  if (len <= 10) return "qmix-size-lg";
  if (len <= 20) return "qmix-size-md";
  if (len <= 35) return "qmix-size-sm";
  return "qmix-size-xs";
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function attachCampuranPlayEvents() {
  var exitBtn = document.getElementById("qmixExitBtn");
  if (exitBtn) {
    exitBtn.addEventListener("click", openCampuranExitConfirm);
  }

  var optBtns = document.querySelectorAll(".qmix-opt");
  optBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var selectedVal = this.getAttribute("data-opt");
      submitCampuranAnswer(selectedVal);
    });
  });
}

function openCampuranExitConfirm() {
  stopCampuranTimer();

  if (document.getElementById("qmixExitOverlay")) return;

  var html = `
    <div class="quizkj-modal-overlay" id="qmixExitOverlay">
      <div class="quizkj-modal-box quizkj-exit-box">
        <p class="quizkj-exit-title">Akhiri Quiz?</p>
        <p class="quizkj-exit-sub">Progres yang sudah dikerjakan akan ditampilkan di halaman hasil.</p>
        <button type="button" class="quizkj-exit-end-btn" id="qmixExitEndBtn">Akhiri Quiz</button>
        <button type="button" class="quizkj-exit-continue-btn" id="qmixExitContinueBtn">Lanjutkan</button>
      </div>
    </div>
  `;

  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  function closeAndResume() {
    var overlay = document.getElementById("qmixExitOverlay");
    if (overlay) overlay.remove();
    if (QMIX_STATE.step === "play" && !QMIX_STATE.isFinished) {
      startCampuranTimer();
    }
  }

  document.getElementById("qmixExitContinueBtn").addEventListener("click", closeAndResume);
  document.getElementById("qmixExitEndBtn").addEventListener("click", function() {
    var overlay = document.getElementById("qmixExitOverlay");
    if (overlay) overlay.remove();
    finishCampuranQuiz(true);
  });

  document.getElementById("qmixExitOverlay").addEventListener("click", function(e) {
    if (e.target === this) closeAndResume();
  });
}

function finishCampuranQuiz(manualEnd) {
  stopCampuranTimer();
  QMIX_STATE.totalTime = Math.floor((Date.now() - QMIX_STATE.startTime) / 1000);
  QMIX_STATE.isFinished = true;
  QMIX_STATE.step = "hasil";

  simpanRiwayatCampuran();

  // Ganti history gameplay dengan history hasil agar Back tidak kembali ke soal aktif.
  history.replaceState(
    { menu: "quiz", quizStep: "campuran-hasil" },
    "",
    "#quiz-campuran-hasil"
  );

  renderQuizCampuran();
}

/** Simpan hasil Quiz Campuran ke Riwayat Quiz (dipanggil sekali per sesi, dari finishCampuranQuiz atau saat game over). */
function simpanRiwayatCampuran() {
  if (typeof simpanRiwayatQuiz !== "function") return;
  var total = QMIX_STATE.userAnswers.length;
  var benar = QMIX_STATE.score;
  var salah = QMIX_STATE.userAnswers.filter(function (a) { return !a.benar; }).length;
  var nilai = total > 0 ? Math.round((benar / total) * 100) : 0;
  var rataWaktu = total > 0 && QMIX_STATE.totalTime
    ? (QMIX_STATE.totalTime / total).toFixed(1)
    : "0.0";
  simpanRiwayatQuiz({
    mode: "quiz",
    type: "campuran",
    title: "Quiz Campuran",
    subtitle: "Semua Materi",
    score: nilai,
    correct: benar,
    wrong: salah,
    total: total,
    time: rataWaktu + "s",
    status: "SELESAI",
    snapshot: {
      userAnswers: QMIX_STATE.userAnswers,
      score: QMIX_STATE.score,
      totalTime: QMIX_STATE.totalTime
    }
  });
}

function startCampuranTimer() {
  stopCampuranTimer();
  QMIX_STATE.timer = 30;
  var timerNumEl = document.getElementById("qmixTimerNum");
  var timerBoxEl = document.getElementById("qmixTimerBox");

  QMIX_STATE.timerInterval = setInterval(function() {
    QMIX_STATE.timer--;
    if (timerNumEl) timerNumEl.textContent = QMIX_STATE.timer;

    if (QMIX_STATE.timer <= 5 && timerBoxEl) {
      timerBoxEl.classList.add("danger");
    }

    if (QMIX_STATE.timer <= 0) {
      stopCampuranTimer();
      // Waktu habis: dianggap salah, nyawa berkurang, lanjut otomatis tanpa popup
      handleCampuranAnswerResult(null, true);
    }
  }, 1000);
}

function stopCampuranTimer() {
  if (QMIX_STATE.timerInterval) {
    clearInterval(QMIX_STATE.timerInterval);
    QMIX_STATE.timerInterval = null;
  }
}

function submitCampuranAnswer(selectedVal) {
  stopCampuranTimer();
  handleCampuranAnswerResult(selectedVal, false);
}

function handleCampuranAnswerResult(selectedVal, isTimeout) {
  var q = QMIX_STATE.questions[QMIX_STATE.currentIndex];
  var isBenar = (!isTimeout && selectedVal === q.jawabanBenar);

  if (isBenar) {
    QMIX_STATE.score++;
  } else {
    QMIX_STATE.hearts--;
  }

  // Simpan riwayat jawaban
  QMIX_STATE.userAnswers.push({
    soalObj: q,
    userAnswer: isTimeout ? "(Waktu Habis)" : selectedVal,
    benar: isBenar
  });

  // Cek Game Over (Nyawa habis)
  if (QMIX_STATE.hearts <= 0) {
    stopCampuranTimer();
    QMIX_STATE.isFinished = true;
    QMIX_STATE.totalTime = Math.floor((Date.now() - QMIX_STATE.startTime) / 1000);
    QMIX_STATE.step = "gameover";
    simpanRiwayatCampuran();
    history.replaceState(
      { menu: "quiz", quizStep: "campuran-gameover" },
      "",
      "#quiz-campuran-gameover"
    );
    renderQuizCampuran();
    return;
  }

  // Cek Selesai 40 Soal
  QMIX_STATE.currentIndex++;
  if (QMIX_STATE.currentIndex >= QMIX_STATE.questions.length) {
    finishCampuranQuiz(false);
    return;
  }

  // Lanjut ke soal berikutnya secara instan (tanpa popup)
  renderQuizCampuran();
  startCampuranTimer();
}

// =====================================================
// 5. GAME OVER (FULL BLACK)
// =====================================================
function buildCampuranGameOverHTML() {
  return `
    <div class="qkoto-gameover-screen">
      <div class="qkoto-go-icon">💔</div>
      <div class="qkoto-go-title">Kehabisan Nyawa!</div>
      <div class="qkoto-go-sub">Nyawamu habis.<br>Quiz telah berakhir.</div>
      <div class="qkoto-go-actions">
        <button class="qkoto-btn-primary" id="qmixGOHasilBtn">Lihat Hasil</button>
        <button class="qbunpo-btn-ghost" id="qmixGOUlangBtn">Ulangi</button>
        <button class="qbunpo-btn-ghost" id="qmixGOMenuBtn" style="background:#24151a !important; color:#fff !important; border:1px solid #49222d !important;">Kembali</button>
      </div>
    </div>
  `;
}

function attachCampuranGameOverEvents() {
  document.getElementById("qmixGOHasilBtn").addEventListener("click", function() {
    QMIX_STATE.step = "hasil";
    history.replaceState({ menu: "quiz", quizStep: "campuran-hasil" }, "", "#quiz-campuran-hasil");
    renderQuizCampuran();
  });
  document.getElementById("qmixGOUlangBtn").addEventListener("click", function() {
    startCampuranCountdown();
  });
  document.getElementById("qmixGOMenuBtn").addEventListener("click", function() {
    history.back(); // Bersih: trigger popstate dengan natural
  });
}


// =====================================================
// 6. HALAMAN HASIL QUIZ SELESAI
// =====================================================
function buildCampuranHasilHTML() {
  var totalSoal = QMIX_STATE.userAnswers.length;
  var benar = QMIX_STATE.score;
  var salah = QMIX_STATE.userAnswers.filter(function(a) { return !a.benar; }).length;
  var nilaiFinal = totalSoal > 0 ? Math.round((benar / totalSoal) * 100) : 0;
  var rataWaktu = totalSoal > 0 && QMIX_STATE.totalTime
    ? (QMIX_STATE.totalTime / totalSoal).toFixed(1)
    : "0.0";

  return `
    <div class="qkoto-result-screen">
      <div class="qkoto-res-trophy">🏆</div>
      <div class="qkoto-res-title">Quiz Selesai!</div>

      <div class="qkoto-score-circle">
        <div class="qkoto-score-big">${nilaiFinal}</div>
        <div class="qkoto-score-div">/ 100</div>
      </div>
      <p style="font-size:0.95rem; font-weight:700; color:var(--text-dark); margin:0 0 20px;">${benar} / ${totalSoal} Jawaban benar</p>

      <div class="qkoto-stats-grid">
        <div class="qkoto-stat-box">
          <div class="qkoto-stat-ic good">✓</div>
          <div class="qkoto-stat-val">${benar}</div>
          <div class="qkoto-stat-lbl">Benar</div>
        </div>
        <div class="qkoto-stat-box">
          <div class="qkoto-stat-ic bad">×</div>
          <div class="qkoto-stat-val">${salah}</div>
          <div class="qkoto-stat-lbl">Salah</div>
        </div>
        <div class="qkoto-stat-box">
          <div class="qkoto-stat-ic time">⏱</div>
          <div class="qkoto-stat-val">${rataWaktu}s</div>
          <div class="qkoto-stat-lbl">Rata-rata</div>
        </div>
      </div>

      <div class="qkoto-res-actions">
        <button class="qkoto-btn-primary" id="qmixResDetailBtn">📋 Detail Jawaban</button>
        <button class="qkoto-btn-secondary" id="qmixResUlangBtn">↻ Coba Lagi</button>
        <button class="qbunpo-btn-ghost" id="qmixResMenuBtn" style="background:linear-gradient(135deg, #f04478, #f45e8c) !important; color:#fff !important; border:none !important;">← Kembali</button>
      </div>
    </div>
  `;
}

function attachCampuranHasilEvents() {
  document.getElementById("qmixResDetailBtn").addEventListener("click", function() {
    QMIX_STATE.step = "detail";
    history.pushState({ menu: "quiz", quizStep: "campuran-detail" }, "", "#quiz-campuran-detail");
    renderQuizCampuran();
  });
  document.getElementById("qmixResUlangBtn").addEventListener("click", function() {
    startCampuranCountdown();
  });
  document.getElementById("qmixResMenuBtn").addEventListener("click", function() {
    history.back(); // Bersih: trigger popstate dengan natural
  });
}


// =====================================================
// 7. DETAIL JAWABAN DENGAN FILTER & BADGE MATERI
// =====================================================
function buildCampuranDetailHTML() {
  var filter = QMIX_STATE.selectedFilter;
  var filteredAnswers = QMIX_STATE.userAnswers.filter(function(ans) {
    if (filter === "benar") return ans.benar;
    if (filter === "salah") return !ans.benar;
    return true;
  });

  var listHTML = filteredAnswers.map(function(ans, index) {
    var realIndex = QMIX_STATE.userAnswers.indexOf(ans) + 1;
    var badgeColor = getMaterialBadgeColor(ans.soalObj.badgeKey);
    var markIcon = ans.benar ? "✓" : "✕";
    var markClass = ans.benar ? "good" : "bad";

    var detailText = ans.soalObj.soal;
    if (!ans.benar) {
      detailText = `Jawaban kamu: <strong>${escapeHtml(ans.userAnswer)}</strong><br>Jawaban benar: <strong style="color:#3c9b4a;">${escapeHtml(ans.soalObj.jawabanBenar)}</strong>`;
    } else {
      detailText = ans.soalObj.jawabanBenar;
    }

    return `
      <div class="qkoto-det-row qmix-detail-item" data-idx="${QMIX_STATE.userAnswers.indexOf(ans)}" style="display:flex; align-items:flex-start; gap:12px; padding:14px; background:#fff; border-radius:16px; margin-bottom:10px; box-shadow:0 2px 8px rgba(0,0,0,0.03); cursor:pointer;">
        <div class="qkoto-det-num" style="min-width:24px;">${realIndex < 10 ? '0' + realIndex : realIndex}</div>
        <div class="qkoto-det-main" style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="font-size:0.7rem; font-weight:800; background:${badgeColor.bg}; color:${badgeColor.text}; padding:2px 8px; border-radius:6px;">[ ${ans.soalObj.materi.toUpperCase()} ]</span>
            <span style="font-size:1rem; font-weight:800; color:var(--text-dark);">${escapeHtml(ans.soalObj.soal)}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); line-height:1.4;">${detailText}</div>
        </div>
        <div class="qkoto-det-mark ${markClass}" style="width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:bold; flex-shrink:0;">${markIcon}</div>
      </div>
    `;
  }).join("");

  if (filteredAnswers.length === 0) {
    listHTML = `<div style="text-align:center; color:var(--text-muted); padding:30px;">Tidak ada data untuk filter ini.</div>`;
  }

  return `
    <div style="padding:0;">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
        <button class="quizk-back-btn" id="qmixDetailBackBtn">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </button>
        <h2 style="font-size:1.25rem; font-weight:800; margin:0;">Detail Jawaban</h2>
      </div>

      <div class="qkoto-filter-tabs" style="display:flex; gap:8px; margin-bottom:16px;">
        <button class="qkoto-filter-btn ${filter === 'semua' ? 'active' : ''}" data-filter="semua">Semua</button>
        <button class="qkoto-filter-btn ${filter === 'benar' ? 'active' : ''}" data-filter="benar">Benar</button>
        <button class="qkoto-filter-btn ${filter === 'salah' ? 'active' : ''}" data-filter="salah">Salah</button>
      </div>

      <div class="qkoto-det-list" style="padding:0;">
        ${listHTML}
      </div>
    </div>
  `;
}

function getMaterialBadgeColor(key) {
  switch(key) {
    case "hiragana": return { bg: "#fde3e1", text: "#e0574a" };
    case "katakana": return { bg: "#dfeafd", text: "#2c6fdb" };
    case "kanji": return { bg: "#fdecd4", text: "#d6892b" };
    case "kotoba": return { bg: "#dff3e3", text: "#3c9b4a" };
    case "bunpo": return { bg: "#e8e2fb", text: "#7c3aed" };
    default: return { bg: "#eee", text: "#666" };
  }
}

function attachCampuranDetailEvents() {
  document.getElementById("qmixDetailBackBtn").addEventListener("click", function() {
    history.back();
  });

  var filterBtns = document.querySelectorAll(".qkoto-filter-btn");
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      QMIX_STATE.selectedFilter = this.getAttribute("data-filter");
      renderQuizCampuran();
    });
  });

  var detailRows = document.querySelectorAll(".qmix-detail-item");
  detailRows.forEach(function(row) {
    row.addEventListener("click", function() {
      var idx = parseInt(this.getAttribute("data-idx"));
      showCampuranDetailModal(idx);
    });
  });
}

function showCampuranDetailModal(idx) {
  var ans = QMIX_STATE.userAnswers[idx];
  if (!ans) return;

  var modalHTML = `
    <div class="qkoto-modal-overlay" id="qmixModalOverlay">
      <div class="qkoto-modal-box">
        <div class="qkoto-modal-top">
          <span class="qkoto-modal-title">Detail Soal #${idx + 1}</span>
          <button class="qkoto-modal-close" id="qmixModalClose">✕</button>
        </div>
        <div class="qkoto-mod-cat" style="background:${getMaterialBadgeColor(ans.soalObj.badgeKey).bg}; color:${getMaterialBadgeColor(ans.soalObj.badgeKey).text};">${ans.soalObj.materi.toUpperCase()}</div>
        <div class="qkoto-mod-jp qmix-modal-question ${getCampuranQuestionSizeClass(ans.soalObj.soal)}">${escapeHtml(String(ans.soalObj.soal))}</div>
        <div class="qkoto-mod-stat ${ans.benar ? 'good' : 'bad'}">${ans.benar ? 'Jawaban Benar ✓' : 'Jawaban Salah ✕'}</div>
        
        <div class="qkoto-mod-anslist">
          <div class="qkoto-mod-ansrow">
            <span>Jawaban Kamu</span>
            <strong class="${ans.benar ? 'good' : 'bad'}">${escapeHtml(ans.userAnswer)}</strong>
          </div>
          <div class="qkoto-mod-ansrow">
            <span>Jawaban Benar</span>
            <strong class="good">${escapeHtml(ans.soalObj.jawabanBenar)}</strong>
          </div>
        </div>
      </div>
    </div>
  `;

  var div = document.createElement("div");
  div.id = "qmixModalContainer";
  div.innerHTML = modalHTML;
  document.body.appendChild(div);

  document.getElementById("qmixModalClose").addEventListener("click", closeCampuranModal);
  document.getElementById("qmixModalOverlay").addEventListener("click", function(e) {
    if (e.target === this) closeCampuranModal();
  });
}

function closeCampuranModal() {
  var el = document.getElementById("qmixModalContainer");
  if (el) el.remove();
}