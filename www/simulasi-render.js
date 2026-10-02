// =====================================================
// DeX Gaku — simulasi-render.js (CBT JFT-Basic & Anti-Cheat Full)
// =====================================================

window.restoreStandardHeader = window.restoreStandardHeader || function() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.remove("hidden");
  if (standardHeader) standardHeader.classList.remove("hidden");
};

var simState = {
  activePacket: "jft_sample",
  packetData: [],
  packetMeta: null,
  currentIdx: 0,
  answers: {},
  flagged: {},
  audioPlayCount: {},
  translationUsage: { moji: 0, kaiwa: 0, choukai: 0, dokkai: 0 },
  quizActive: false,
  quizFinished: false,
  remainingTime: 60 * 60,
  timerInterval: null,
  activeModalTab: "moji",
  exitPopupOpen: false,
  lockedSections: [],
  
  // VARIABEL DETEKSI KELUAR / OVERLAY APK (5,6 Detik = 5600 ms)
  appLeaveTimer: null,
  maxLeaveTimeMs: 5600,
  focusCheckInterval: null,
  lastInteractionTime: Date.now()
};

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getSectionBounds() {
  var rincian = simState.packetMeta.rincian;
  var bounds = {};
  var currentStart = 0;
  if (rincian.moji) { bounds.moji = { start: currentStart, end: currentStart + rincian.moji - 1, label: "文字と語彙 (Script & Vocab)", short: "文字と語彙" }; currentStart += rincian.moji; }
  if (rincian.kaiwa) { bounds.kaiwa = { start: currentStart, end: currentStart + rincian.kaiwa - 1, label: "会話と表現 (Conversation)", short: "会話と表現" }; currentStart += rincian.kaiwa; }
  if (rincian.choukai) { bounds.choukai = { start: currentStart, end: currentStart + rincian.choukai - 1, label: "聴解 (Listening)", short: "聴解" }; currentStart += rincian.choukai; }
  if (rincian.dokkai) { bounds.dokkai = { start: currentStart, end: currentStart + rincian.dokkai - 1, label: "読解 (Reading)", short: "読解" }; }
  return bounds;
}

function getSectionOrder() {
  var rincian = simState.packetMeta.rincian;
  var order = [];
  if (rincian.moji) order.push("moji");
  if (rincian.kaiwa) order.push("kaiwa");
  if (rincian.choukai) order.push("choukai");
  if (rincian.dokkai) order.push("dokkai");
  return order;
}

function getSectionLabel(key) {
  var labels = {
    moji: "文字と語彙 (Script & Vocab)",
    kaiwa: "会話と表現 (Conversation)",
    choukai: "聴解 (Listening)",
    dokkai: "読解 (Reading)"
  };
  return labels[key] || key;
}

function simSectionOfIndex(idx) {
  var bounds = getSectionBounds();
  for (var key in bounds) {
    if (idx >= bounds[key].start && idx <= bounds[key].end) return key;
  }
  return "moji";
}

function simEscapeQuestion(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}

function simResetState() {
  simState.quizActive = false;
  simState.quizFinished = false;
  simState.currentIdx = 0;
  simState.answers = {};
  simState.flagged = {};
  simState.audioPlayCount = {};
  simState.translationUsage = { moji: 0, kaiwa: 0, choukai: 0, dokkai: 0 };
  simState.lockedSections = [];
  simBatalHitungMundurKeluar();
}

// =====================================================
// DETEKSI KELUAR / FLOATING / NOTIFIKASI BAR
// =====================================================

function simInisialisasiDeteksiKeluarApp() {
  simState.lastInteractionTime = Date.now();

  // Event standar
  document.addEventListener("visibilitychange", simHandleVisibilityChange);
  window.addEventListener("blur", simHandleAppBlur);
  window.addEventListener("focus", simHandleAppFocus);
  window.addEventListener("resize", simHandleAppBlur);

  // Event sentuhan untuk melacak apakah pengguna aktif di dalam aplikasi
  window.addEventListener("touchstart", simUserInteracted, { passive: true });
  window.addEventListener("pointerdown", simUserInteracted, { passive: true });

  // Polling Interval: Mengecek status dokumen secara berkala setiap 500ms
  if (simState.focusCheckInterval) clearInterval(simState.focusCheckInterval);
  simState.focusCheckInterval = setInterval(function() {
    if (!simState.quizActive) return;

    // Jika dokumen tersembunyi, window tidak memiliki fokus, atau terdeteksi overlay
    if (document.hidden || !document.hasFocus()) {
      simMulaiHitungMundurKeluar();
    } else {
      simBatalHitungMundurKeluar();
    }
  }, 500);
}

function simHapusDeteksiKeluarApp() {
  document.removeEventListener("visibilitychange", simHandleVisibilityChange);
  window.removeEventListener("blur", simHandleAppBlur);
  window.removeEventListener("focus", simHandleAppFocus);
  window.removeEventListener("resize", simHandleAppBlur);

  window.removeEventListener("touchstart", simUserInteracted);
  window.removeEventListener("pointerdown", simUserInteracted);

  if (simState.focusCheckInterval) {
    clearInterval(simState.focusCheckInterval);
    simState.focusCheckInterval = null;
  }
  simBatalHitungMundurKeluar();
}

function simUserInteracted() {
  simState.lastInteractionTime = Date.now();
  if (simState.quizActive && document.hasFocus() && !document.hidden) {
    simBatalHitungMundurKeluar();
  }
}

function simHandleVisibilityChange() {
  if (!simState.quizActive) return;
  if (document.hidden) {
    simMulaiHitungMundurKeluar();
  } else {
    simBatalHitungMundurKeluar();
  }
}

function simHandleAppBlur() {
  if (!simState.quizActive) return;
  simMulaiHitungMundurKeluar();
}

function simHandleAppFocus() {
  if (!simState.quizActive) return;
  simBatalHitungMundurKeluar();
}

function simMulaiHitungMundurKeluar() {
  if (simState.appLeaveTimer) return;
  simState.appLeaveTimer = setTimeout(function () {
    if (simState.quizActive) {
      simTampilkanPopupDiskualifikasi();
      selesaikanSimulasi();
    }
  }, simState.maxLeaveTimeMs);
}

function simBatalHitungMundurKeluar() {
  if (simState.appLeaveTimer) {
    clearTimeout(simState.appLeaveTimer);
    simState.appLeaveTimer = null;
  }
}

// POPUP CUSTOM DISKUALIFIKASI (MENGGANTIKAN ALERT BROWSER)
function simTampilkanPopupDiskualifikasi() {
  var existing = document.getElementById("simModalDisqualified");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "simModalDisqualified";
  overlay.className = "sim-modal-overlay";
  
  var html = '<div class="sim-confirm-modal-box" style="border-top: 5px solid #dc2626;">' +
    '<div class="sim-confirm-modal-ic" style="background:#fef2f2; color:#dc2626; border:2px solid #fecaca;">&#9888;</div>' +
    '<h3 class="sim-confirm-modal-title" style="color:#dc2626;">Simulasi Diakhiri!</h3>' +
    '<p class="sim-confirm-modal-desc" style="margin-bottom:20px; font-weight:600; color:#334155;">' +
      'Kamu terdeteksi <strong>meninggalkan aplikasi, membuka jendela mengapung, atau menurunkan panel notifikasi</strong> lebih dari 5,6 detik!' +
    '</p>' +
    '<div class="sim-confirm-modal-actions">' +
      '<button class="sim-btn-akhiri" id="btnDisqualifiedOk" style="width:100%;">LIHAT HASIL</button>' +
    '</div></div>';
    
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  document.getElementById("btnDisqualifiedOk").onclick = function() {
    overlay.remove();
  };
}

// =====================================================
// POPSTATE HANDLER (SINKRONISASI BACK HP & UI)
// =====================================================

function handleSimulasiPopstate(state) {
  if (simState.quizActive) {
    simTampilkanPopupBackSimulasi();
    return;
  }

  var step = state && state.simStep;

  if (simState.quizFinished || step === "hasil") {
    simResetState(); 
    history.replaceState({ menu: "simulasi", simStep: "menu", isSimMenu: true }, "", "#simulasi");
    loadSimulasiMenu(true);
    return;
  }

  if (step === "konfirmasi" && state.packetKey) {
    openSimulasiKonfirmasi(state.packetKey);
    return;
  }

  if (step === "menu" || (state && state.isSimMenu)) {
    simResetState();
    loadSimulasiMenu(true);
    return;
  }

  simResetState();
  if (typeof showHome === "function") {
    showHome();
  } else {
    loadSimulasiMenu(true);
  }
}

// =====================================================
// 1. MENU UTAMA SIMULASI
// =====================================================

function loadSimulasiMenu(skipPush) {
  if (typeof hideStandardHeader === "function") hideStandardHeader();
  simCleanupExamOverlay();

  var container = document.getElementById("detailExtra");
  if (!container) return;

  var pktSample = SIMULASI_PACKETS.jft_sample || SIMULASI_PACKETS[Object.keys(SIMULASI_PACKETS)[0]];

  var html = '<div class="sim-menu-wrap">';
  html += '<div class="sim-hero">';
  html += '<button class="sim-hero-back" id="simBackBtn"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  html += '<div class="sim-hero-top"><div class="sim-hero-badge">&#127891;</div>';
  html += '<div><h1 class="sim-hero-title">Simulasi JFT-Basic</h1><p class="sim-hero-reading">CBT Test Mode</p></div></div>';
  html += '<p class="sim-hero-desc">Simulasi Ujian Bahasa Jepang Dasar berbasis Komputer (CBT) standar Japan Foundation.</p></div>';

  html += '<div class="sim-summary">';
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#128214;</div><span class="sim-sum-val">' + pktSample.rincian.moji + '</span><span class="sim-sum-lbl">Moji</span></div><div class="sim-sum-div"></div>';
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#128172;</div><span class="sim-sum-val">' + pktSample.rincian.kaiwa + '</span><span class="sim-sum-lbl">Kaiwa</span></div><div class="sim-sum-div"></div>';
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#127911;</div><span class="sim-sum-val">' + pktSample.rincian.choukai + '</span><span class="sim-sum-lbl">Choukai</span></div><div class="sim-sum-div"></div>';
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#128211;</div><span class="sim-sum-val">' + pktSample.rincian.dokkai + '</span><span class="sim-sum-lbl">Dokkai</span></div>';
  html += '</div>';

  html += '<div class="sim-content" style="display:flex; flex-direction:column; gap:16px;">';

  Object.keys(SIMULASI_PACKETS).forEach(function(key) {
    var pkt = SIMULASI_PACKETS[key];
    html += '<div class="sim-packet-card featured">';
    html += '<span class="sim-packet-badge b1">Resmi JFT-Basic</span>';
    html += '<p class="sim-packet-title">' + pkt.title + '</p>';
    html += '<div class="sim-packet-grid-meta">';
    html += '<div class="sim-grid-item"><span class="sim-grid-ic">&#128221;</span><span class="sim-grid-val">' + pkt.totalSoal + ' Soal</span></div>';
    html += '<div class="sim-grid-item"><span class="sim-grid-ic">&#11088;</span><span class="sim-grid-val">' + pkt.totalPoin + ' Poin</span></div>';
    html += '<div class="sim-grid-item"><span class="sim-grid-ic">&#9201;&#65039;</span><span class="sim-grid-val">' + pkt.waktuMenit + ' Menit</span></div>';
    html += '</div>';
    html += '<button class="sim-packet-start-btn" data-packet-key="' + key + '">Mulai Simulasi CBT <span>&#8250;</span></button>';
    html += '</div>';
  });

  html += '</div></div>';

  container.innerHTML = html;

  document.getElementById("simBackBtn").onclick = function () {
    if (typeof showHome === "function") {
      showHome();
    } else {
      history.back();
    }
  };

  var startBtns = container.querySelectorAll(".sim-packet-start-btn");
  for (var i = 0; i < startBtns.length; i++) {
    startBtns[i].onclick = function() {
      var packetKey = this.getAttribute("data-packet-key");
      openSimulasiKonfirmasiWithHistory(packetKey);
    };
  }

  if (!skipPush) {
    history.replaceState({ menu: "simulasi", simStep: "menu", isSimMenu: true }, "", "#simulasi");
  }
}

function openSimulasiMenuWithHistory() {
  loadSimulasiMenu(true);
  if (window.__isPopstateHandling) return;
  history.pushState({ menu: "simulasi", simStep: "menu", isSimMenu: true }, "", "#simulasi");
}

function openSimulasiKonfirmasiWithHistory(packetKey) {
  openSimulasiKonfirmasi(packetKey);
  if (!window.__isPopstateHandling) {
    history.pushState({ menu: "simulasi", simStep: "konfirmasi", packetKey: packetKey }, "", "#simulasi-konfirmasi");
  }
}

// =====================================================
// 2. HALAMAN KONFIRMASI ATURAN UJIAN
// =====================================================

function openSimulasiKonfirmasi(packetKey) {
  var pkt = SIMULASI_PACKETS[packetKey];
  if (!pkt) return;
  simState.activePacket = packetKey;
  simState.packetData = pkt.soal;
  simState.packetMeta = pkt;

  var container = document.getElementById("detailExtra");
  if (!container) return;

  var html = '<div class="sim-confirm-card">';
  html += '<span class="sim-confirm-badge b1">Aturan CBT JFT-Basic</span>';
  html += '<h3 class="sim-confirm-title">Konfirmasi Petunjuk Ujian</h3>';
  html += '<div class="sim-confirm-grid">';
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#128221;</span><div><div class="sim-confirm-lbl">Total Soal & Durasi</div><div class="sim-confirm-val">' + pkt.totalSoal + ' Soal / ' + pkt.waktuMenit + ' Menit</div></div></div>';
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#9888;&#65039;</span><div><div class="sim-confirm-lbl">Navigasi Ketat & Anti Curang</div><div class="sim-confirm-val" style="font-size:12.5px; font-weight:600; color:#d97706;">1. Anda tidak dapat kembali ke bagian sebelumnya setelah berpindah bagian.<br>2. Sesi Choukai wajib dikerjakan berurutan.<br>3. <strong style="color:#dc2626;">Dilarang keluar aplikasi/membuka window lain!</strong> Jika terdeteksi mengambang/keluar > 5,6 detik, ujian otomatis diakhiri.</div></div></div>';
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#127757;</span><div><div class="sim-confirm-lbl">Fitur Terjemahan</div><div class="sim-confirm-val" style="font-size:12.5px; font-weight:600;">Gunakan tombol "Your Language" saat ujian untuk melihat terjemahan Bahasa Indonesia.<br><span style="color:#dc2626; margin-top:4px; display:inline-block;">*PENTING: Tombol ini HANYA BISA digunakan 3 KALI per section (bagian).</span></div></div></div>';
  html += '</div>';
  html += '<div class="sim-confirm-actions">';
  html += '<button class="sim-confirm-btn-back" id="simBtnKonfirmasiKembali">BATAL</button>';
  html += '<button class="sim-confirm-btn-start" id="simBtnKonfirmasiMulai">MULAI SIMULASI &#8250;</button>';
  html += '</div></div>';

  container.innerHTML = html;
  
  document.getElementById("simBtnKonfirmasiKembali").onclick = function() { history.back(); };
  document.getElementById("simBtnKonfirmasiMulai").onclick = function() { mulaiSimulasiSejatiWithHistory(); };
}

function mulaiSimulasiSejatiWithHistory() {
  history.replaceState({ menu: "simulasi", simStep: "ujian" }, "", "#simulasi-ujian");
  mulaiSimulasiSejati();
}

function mulaiSimulasiSejati() {
  simResetState();
  simState.quizActive = true;
  simState.quizFinished = false;
  simState.remainingTime = simState.packetMeta.waktuMenit * 60;

  mulaiTimerSimulasi();
  simInisialisasiDeteksiKeluarApp();
  renderHalamanSoalSimulasi();
}

function mulaiTimerSimulasi() {
  if (simState.timerInterval) clearInterval(simState.timerInterval);
  simState.timerInterval = setInterval(function() {
    if (!simState.quizActive) return;
    simState.remainingTime--;
    updateTimerDisplay();
    if (simState.remainingTime <= 0) {
      simState.remainingTime = 0;
      clearInterval(simState.timerInterval);
      selesaikanSimulasi();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var el = document.getElementById("simTimerDisplay");
  if (!el) return;
  var m = Math.floor(simState.remainingTime / 60);
  var s = simState.remainingTime % 60;
  el.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  el.classList.toggle("warn", simState.remainingTime <= 300);
}

// =====================================================
// 3. HALAMAN PENGERJAAN SOAL (CBT MODE)
// =====================================================

function renderHalamanSoalSimulasi() {
  if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel();

  var idx = simState.currentIdx;
  var soal = simState.packetData[idx];
  if (!soal) return;

  var bounds = getSectionBounds();
  var sectionKey = simSectionOfIndex(idx);
  var sectionLabel = bounds[sectionKey].label;
  var isChoukai = sectionKey === "choukai";

  var root = document.getElementById("simExamRoot");
  if (!root) {
    root = document.createElement("div");
    root.id = "simExamRoot";
    root.className = "sim-exam-root";
    document.body.appendChild(root);
  }

  var isLast = idx === simState.packetData.length - 1;

  var html = '';
  html += '<div class="sim-exam-header">';
  html += '<div class="sim-exam-header-left">';
  html += '<button class="sim-exam-listbtn" id="simListBtn" aria-label="Daftar Soal">&#9776;</button>';
  html += '<div><div class="sim-exam-title">JFT-Basic CBT</div><span class="sim-exam-section-pill">' + sectionLabel + '</span></div>';
  html += '</div>';
  html += '<div class="sim-exam-header-right">';
  html += '<span class="sim-exam-progress">Soal ' + (idx + 1) + ' / ' + simState.packetData.length + '</span>';
  html += '<span class="sim-exam-timer" id="simTimerDisplay">--:--</span>';
  html += '</div></div>';

  html += '<div class="sim-exam-body">';
  html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">';
  html += '<span class="sim-qnum-badge">Question: ' + (idx + 1) + '</span>';
  
  var usedLang = simState.translationUsage[sectionKey] || 0;
  var sisaLang = 3 - usedLang;
  var disabledLang = sisaLang <= 0 ? ' disabled style="opacity:0.6; cursor:not-allowed; background:#f1f5f9; color:#94a3b8; border:1px solid #cbd5e1;"' : '';
  
  html += '<button class="sim-your-lang-btn" id="btnYourLang"' + disabledLang + '>&#127757; Your Language (' + sisaLang + ')</button>';
  html += '</div>';

  if (soal.image) {
    html += '<div style="text-align:center; margin-bottom:14px;"><img src="' + soal.image + '" alt="Ilustrasi Soal" style="max-width:100%; max-height:160px; border-radius:12px;"></div>';
  }

  if (isChoukai) {
    var playCount = simState.audioPlayCount[idx] || 0;
    var sisaPlay = 2 - playCount;
    html += '<div style="margin-bottom: 16px; background:#fff; padding:12px; border-radius:14px; border:1px solid #e2e8f0; text-align:center;">';
    if (sisaPlay > 0) {
      html += '<button class="sim-audio-btn" id="simPlayAudioBtn">&#9654; Putar Audio (Sisa: ' + sisaPlay + 'x)</button>';
    } else {
      html += '<button class="sim-audio-btn" disabled>Batas Pemutaran Habis (2/2)</button>';
    }
    html += '</div>';
  }

  html += '<div class="sim-question-text">' + simEscapeQuestion(soal.question) + '</div>';

  html += '<div class="sim-options">';
  soal.options.forEach(function(opt, optIdx) {
    var checked = simState.answers[idx] === optIdx;
    html += '<div class="sim-option' + (checked ? ' selected' : '') + '" data-opt-idx="' + optIdx + '">';
    html += '<span class="sim-option-radio"></span><span>' + opt + '</span></div>';
  });
  html += '</div></div>';

  html += '<div class="sim-exam-footer">';
  var isSectionStart = (idx === bounds[sectionKey].start);
  var prevDisabled = (idx === 0 || isChoukai || isSectionStart) ? ' disabled' : '';

  var isFlagged = !!simState.flagged[idx];
  html += '<button class="sim-flag-btn' + (isFlagged ? ' active' : '') + '" id="simFlagBtn" title="Tandai Ragu-ragu">&#127993;</button>';
  html += '<div style="display:flex; gap:8px;">';
  html += '<button class="sim-nav-btn prev" id="simPrevBtn"' + prevDisabled + '> Back</button>';
  if (isLast) {
    html += '<button class="sim-nav-btn finish" id="simNextBtn">Finish Section</button>';
  } else {
    html += '<button class="sim-nav-btn next" id="simNextBtn">Next </button>';
  }
  html += '</div></div>';

  root.innerHTML = html;
  updateTimerDisplay();

  var btnLang = document.getElementById("btnYourLang");
  if (btnLang) {
    btnLang.onclick = function() {
      var currUsed = simState.translationUsage[sectionKey] || 0;
      var currSisa = 3 - currUsed;
      if (currSisa <= 0) {
        alert("Batas penggunaan fitur terjemahan untuk bagian " + sectionLabel + " sudah habis.");
        return;
      }
      simBukaKonfirmasiTerjemahan(soal, sectionKey, sectionLabel, currSisa);
    };
  }

  document.getElementById("simFlagBtn").onclick = function() {
    simState.flagged[idx] = !simState.flagged[idx];
    renderHalamanSoalSimulasi();
  };

  var playBtn = document.getElementById("simPlayAudioBtn");
  if (playBtn) {
    playBtn.onclick = function() {
      var count = simState.audioPlayCount[idx] || 0;
      if (count < 2) {
        simState.audioPlayCount[idx] = count + 1;
        renderHalamanSoalSimulasi();
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          var speech = new SpeechSynthesisUtterance(soal.audioText || soal.question);
          speech.lang = 'ja-JP';
          speech.rate = 0.85;
          window.speechSynthesis.speak(speech);
        }
      }
    };
  }

  document.getElementById("simListBtn").onclick = bukaPopupDaftarSoal;
  document.getElementById("simPrevBtn").onclick = function() { pindahSoalSimulasi(-1); };
  document.getElementById("simNextBtn").onclick = function() {
    if (isLast) {
      konfirmasiSelesaiSimulasi();
    } else {
      var bounds2 = getSectionBounds();
      var currentSec = simSectionOfIndex(simState.currentIdx);
      var isSectionEnd = (simState.currentIdx === bounds2[currentSec].end);
      
      if (isSectionEnd) {
        simTampilkanKonfirmasiPindahSection(currentSec, simSectionOfIndex(simState.currentIdx + 1), simState.currentIdx + 1);
      } else {
        pindahSoalSimulasi(1);
      }
    }
  };

  var optEls = root.querySelectorAll(".sim-option");
  for (var i = 0; i < optEls.length; i++) {
    optEls[i].onclick = function() {
      var optIdx = parseInt(this.getAttribute("data-opt-idx"), 10);
      pilihJawabanSimulasi(optIdx);
    };
  }
}

function simBukaKonfirmasiTerjemahan(soal, sectionKey, sectionLabel, currSisa) {
  var existing = document.getElementById("simModalConfirmLang");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "simModalConfirmLang";
  overlay.className = "sim-modal-overlay";
  
  var html = '<div class="sim-confirm-modal-box">' +
    '<div class="sim-confirm-modal-ic" style="background:#eff6ff; color:#2563eb; border:2px solid #bfdbfe;">&#127757;</div>' +
    '<h3 class="sim-confirm-modal-title">Gunakan Terjemahan?</h3>' +
    '<p class="sim-confirm-modal-desc" style="margin-bottom:20px;">Fitur terjemahan hanya bisa dipakai <strong>3 kali</strong> per bagian ujian.<br><br>Sisa kuota kamu di <strong>' + sectionLabel + '</strong>: <strong style="color:#2563eb; font-size:15px;">' + currSisa + ' kali</strong>.<br>Yakin ingin menggunakan 1 kuota?</p>' +
    '<div class="sim-confirm-modal-actions">' +
    '<button class="sim-btn-lanjut" id="btnCancelLang">BATAL</button>' +
    '<button class="sim-btn-primary" id="btnConfirmLang">YA, GUNAKAN</button>' +
    '</div></div>';
    
  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  document.getElementById("btnCancelLang").onclick = function() { overlay.remove(); };
  document.getElementById("btnConfirmLang").onclick = function() {
    overlay.remove();
    var currUsed = simState.translationUsage[sectionKey] || 0;
    simState.translationUsage[sectionKey] = currUsed + 1;
    renderHalamanSoalSimulasi(); 
    simBukaModalTranslation(soal.translation || "Tidak ada terjemahan tersedia.");
  };
}

function simBukaModalTranslation(text) {
  var existing = document.getElementById("simModalLang");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "simModalLang";
  overlay.className = "sim-modal-overlay";
  overlay.innerHTML = '<div class="sim-modal-box">' +
    '<div class="sim-modal-head"><h3>Your Language (Indonesian)</h3><button class="sim-modal-close" id="btnCloseLang">&#10005;</button></div>' +
    '<div class="sim-modal-body" style="font-size:14px; line-height:1.6; color:#1e293b; background:#f8fafc; padding:14px;">' + simEscapeQuestion(text) + '</div>' +
    '</div>';

  document.body.appendChild(overlay);
  document.getElementById("btnCloseLang").onclick = function() { overlay.remove(); };
  overlay.onclick = function(e) { if (e.target === overlay) overlay.remove(); };
}

function pilihJawabanSimulasi(optIdx) {
  simState.answers[simState.currentIdx] = optIdx;
  var root = document.getElementById("simExamRoot");
  if (!root) return;
  var optEls = root.querySelectorAll(".sim-option");
  for (var i = 0; i < optEls.length; i++) {
    optEls[i].classList.toggle("selected", i === optIdx);
  }
}

// =====================================================
// NAVIGASI KETAT + SECTION LOCK
// =====================================================

function pindahSoalSimulasi(direction) {
  var currentSec = simSectionOfIndex(simState.currentIdx);
  var nextIdx = simState.currentIdx + direction;
  var nextSec = simSectionOfIndex(nextIdx);

  if (currentSec === "choukai" && direction < 0) {
    alert("Aturan JFT-Basic: Di bagian Pendengaran (Listening), Anda tidak bisa kembali ke soal sebelumnya.");
    return;
  }

  if (direction < 0 && currentSec !== nextSec) {
    alert("Aturan JFT-Basic: Anda tidak dapat kembali ke bagian (section) sebelumnya.");
    return;
  }

  if (direction > 0 && nextSec !== currentSec) {
    simTampilkanKonfirmasiPindahSection(currentSec, nextSec, nextIdx);
    return;
  }

  if (nextIdx >= 0 && nextIdx < simState.packetData.length) {
    simState.currentIdx = nextIdx;
    renderHalamanSoalSimulasi();
  }
}

function simTampilkanKonfirmasiPindahSection(currentSec, nextSec, targetIdx) {
  var existing = document.getElementById("simSectionConfirmOverlay");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "simSectionConfirmOverlay";
  overlay.className = "sim-modal-overlay";

  var currentLabel = getSectionLabel(currentSec);
  var nextLabel = getSectionLabel(nextSec);

  overlay.innerHTML =
    '<div class="sim-section-confirm-box">' +
      '<div class="sim-section-confirm-ic">&#9888;</div>' +
      '<h3 class="sim-section-confirm-title">Pindah Section?</h3>' +
      '<p class="sim-section-confirm-desc">' +
        'Apakah Anda yakin ingin berpindah ke <strong>' + nextLabel + '</strong>?<br><br>' +
        '<strong>PERINGATAN:</strong> Setelah berpindah, Anda <strong>TIDAK BISA</strong> kembali lagi ke <strong>' + currentLabel + '</strong> untuk mengubah atau memeriksa jawaban.' +
      '</p>' +
      '<div class="sim-section-confirm-actions">' +
        '<button class="sim-btn-batal" id="simSectionCancelBtn">Batal</button>' +
        '<button class="sim-btn-pindah" id="simSectionOkBtn">Lanjut Section</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);

  document.getElementById("simSectionCancelBtn").onclick = function () {
    overlay.remove();
  };

  document.getElementById("simSectionOkBtn").onclick = function () {
    overlay.remove();
    simKunciSectionDanPindah(currentSec, targetIdx);
  };

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) overlay.remove();
  });
}

function simKunciSectionDanPindah(currentSec, targetIdx) {
  if (simState.lockedSections.indexOf(currentSec) === -1) {
    simState.lockedSections.push(currentSec);
  }
  simState.currentIdx = targetIdx;
  simState.activeModalTab = simSectionOfIndex(targetIdx);
  renderHalamanSoalSimulasi();
}

function lompatKeSoal(idx) {
  var currentSec = simSectionOfIndex(simState.currentIdx);
  var targetSec = simSectionOfIndex(idx);
  var sectionOrder = getSectionOrder();

  if (simState.lockedSections.indexOf(targetSec) !== -1) {
    alert("Section ini sudah terkunci dan tidak bisa dibuka kembali.");
    return;
  }

  if (sectionOrder.indexOf(targetSec) < sectionOrder.indexOf(currentSec)) {
    alert("Aturan JFT-Basic: Tidak bisa kembali ke bagian sebelumnya yang sudah dilewati.");
    return;
  }

  if (sectionOrder.indexOf(targetSec) > sectionOrder.indexOf(currentSec)) {
    var targetBounds = getSectionBounds()[targetSec];
    simTampilkanKonfirmasiPindahSection(currentSec, targetSec, targetBounds.start);
    tutupPopupDaftarSoal();
    return;
  }

  if (currentSec === "choukai" && idx < simState.currentIdx) {
    alert("Aturan JFT-Basic: Pada bagian Listening, pengerjaan wajib berurutan ke depan.");
    return;
  }

  simState.currentIdx = idx;
  tutupPopupDaftarSoal();
  renderHalamanSoalSimulasi();
}

function konfirmasiSelesaiSimulasi() {
  var totalAnswered = Object.keys(simState.answers).length;
  var totalSoal = simState.packetData.length;
  if (totalAnswered < totalSoal) {
    simTampilkanPopupSelesaiBelumLengkap(totalAnswered, totalSoal);
  } else {
    selesaikanSimulasi();
  }
}

function simTampilkanPopupSelesaiBelumLengkap(answered, total) {
  var sisa = total - answered;
  var overlay = document.createElement("div");
  overlay.className = "sim-modal-overlay";
  overlay.innerHTML = '<div class="sim-confirm-modal-box">' +
    '<div class="sim-confirm-modal-ic">!</div>' +
    '<h3 class="sim-confirm-modal-title">Soal Belum Lengkap</h3>' +
    '<p class="sim-confirm-modal-desc">Masih ada <strong>' + sisa + '</strong> soal belum dijawab. Selesaikan ujian sekarang?</p>' +
    '<div class="sim-confirm-modal-actions">' +
    '<button class="sim-btn-lanjut" id="simCancelFinish">Lanjut</button>' +
    '<button class="sim-btn-akhiri" id="simOkFinish">Selesaikan</button>' +
    '</div></div>';

  document.body.appendChild(overlay);
  document.getElementById("simCancelFinish").onclick = function() { overlay.remove(); };
  document.getElementById("simOkFinish").onclick = function() { overlay.remove(); selesaikanSimulasi(); };
}

// =====================================================
// 4. POPUP DAFTAR SOAL (GRID STATUS)
// =====================================================

function bukaPopupDaftarSoal() {
  simState.activeModalTab = simSectionOfIndex(simState.currentIdx);
  simRenderPopupDaftarSoal();
}

function simRenderPopupDaftarSoal() {
  var existing = document.getElementById("simModalDaftarSoal");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "simModalDaftarSoal";
  overlay.className = "sim-modal-overlay";

  var pkt = simState.packetMeta;
  var currentSec = simSectionOfIndex(simState.currentIdx);
  var sectionOrder = getSectionOrder();
  var currentSecIdx = sectionOrder.indexOf(currentSec);

  var tabDefs = [
    { key: "moji", label: "Moji" },
    { key: "kaiwa", label: "Kaiwa" },
    { key: "choukai", label: "Choukai" },
    { key: "dokkai", label: "Dokkai" }
  ];

  var tabsHTML = '';
  tabDefs.forEach(function(t) {
    if (!pkt.rincian[t.key]) return;
    
    var secIdx = sectionOrder.indexOf(t.key);
    var isLocked = simState.lockedSections.indexOf(t.key) !== -1;
    var isCurrent = (t.key === currentSec);
    var isUpcoming = secIdx > currentSecIdx;
    
    var tabClass = "sim-modal-tab";
    var lockIcon = "";
    
    if (isLocked) {
      tabClass += " locked";
      lockIcon = " &#128274;";
    } else if (isUpcoming) {
      tabClass += " upcoming";
      lockIcon = " &#128274;";
    } else if (isCurrent) {
      tabClass += " current-section";
    }
    
    if (simState.activeModalTab === t.key) tabClass += " active";
    
    tabsHTML += '<button class="' + tabClass + '" data-tab-key="' + t.key + '" data-locked="' + isLocked + '">' + t.label + lockIcon + '</button>';
  });

  var bounds = getSectionBounds()[simState.activeModalTab];
  var gridHTML = '';
  if (bounds) {
    for (var i = bounds.start; i <= bounds.end; i++) {
      var cls = "sim-num-btn";
      if (simState.answers[i] !== undefined) cls += " answered";
      if (i === simState.currentIdx) cls += " current";
      if (simState.flagged[i]) cls += " flagged";

      var numLabel = (i + 1) < 10 ? "0" + (i + 1) : String(i + 1);
      gridHTML += '<button class="' + cls + '" data-idx="' + i + '">' + numLabel + '</button>';
    }
  }

  overlay.innerHTML = '<div class="sim-modal-box">' +
    '<div class="sim-modal-head"><h3>Daftar Soal</h3><button class="sim-modal-close" id="simModalCloseBtn">&#10005;</button></div>' +
    '<div class="sim-modal-tabs">' + tabsHTML + '</div>' +
    '<div class="sim-modal-body">' +
    '<div class="sim-num-grid">' + gridHTML + '</div>' +
    '<div class="sim-modal-legend">' +
    '<span><span class="sim-legend-dot answered"></span> Dijawab</span>' +
    '<span><span class="sim-legend-dot current"></span> Aktif</span>' +
    '<span><span class="sim-legend-dot flagged"></span> Ragu-ragu</span>' +
    '<span><span class="sim-legend-dot empty"></span> Belum</span>' +
    '<span>&#128274; Terkunci</span>' +
    '</div></div></div>';

  document.body.appendChild(overlay);

  document.getElementById("simModalCloseBtn").onclick = tutupPopupDaftarSoal;
  overlay.onclick = function(e) { if (e.target === overlay) tutupPopupDaftarSoal(); };

  var tabBtns = overlay.querySelectorAll(".sim-modal-tab");
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].onclick = function() {
      var tabKey = this.getAttribute("data-tab-key");
      var isLocked = this.getAttribute("data-locked") === "true";
      
      if (isLocked) {
        alert("Section ini sudah terkunci dan tidak bisa dibuka kembali.");
        return;
      }
      
      var secIdx = sectionOrder.indexOf(tabKey);
      if (secIdx > currentSecIdx) {
        var targetBounds = getSectionBounds()[tabKey];
        simTampilkanKonfirmasiPindahSection(currentSec, tabKey, targetBounds.start);
        tutupPopupDaftarSoal();
        return;
      }
      
      if (tabKey === currentSec) {
        simState.activeModalTab = tabKey;
        simRenderPopupDaftarSoal();
      } else {
        alert("Anda tidak bisa kembali ke section sebelumnya.");
      }
    };
  }

  var numBtns = overlay.querySelectorAll(".sim-num-btn");
  for (var i = 0; i < numBtns.length; i++) {
    numBtns[i].onclick = function() {
      var idx = parseInt(this.getAttribute("data-idx"), 10);
      lompatKeSoal(idx);
    };
  }
}

function tutupPopupDaftarSoal() {
  var el = document.getElementById("simModalDaftarSoal");
  if (el) el.remove();
}

// =====================================================
// 5. HALAMAN HASIL UJIAN
// =====================================================

function selesaikanSimulasi() {
  if (!simState.quizActive) return;
  simState.quizActive = false;
  simState.quizFinished = true;
  if (simState.timerInterval) clearInterval(simState.timerInterval);

  simHapusDeteksiKeluarApp();
  tutupPopupDaftarSoal();
  simTutupPopupBackSimulasi();

  var root = document.getElementById("simExamRoot");
  if (root) root.remove();

  simSimpanRiwayat();

  history.replaceState({ menu: "simulasi", simStep: "hasil" }, "", "#simulasi-hasil");
  renderHalamanHasilSimulasi();
}

function simHitungNilai() {
  var totalNilai = 0, totalBenar = 0;
  var benarPerSection = { moji: 0, kaiwa: 0, choukai: 0, dokkai: 0 };
  var totalPerSection = { moji: 0, kaiwa: 0, choukai: 0, dokkai: 0 };

  simState.packetData.forEach(function(soal, idx) {
    var sec = soal.section || simSectionOfIndex(idx);
    totalPerSection[sec]++;
    if (simState.answers[idx] === soal.correct) {
      totalNilai += soal.points;
      totalBenar++;
      benarPerSection[sec]++;
    }
  });

  return { totalNilai: totalNilai, totalBenar: totalBenar, benarPerSection: benarPerSection, totalPerSection: totalPerSection };
}

function simSimpanRiwayat() {
  if (typeof simpanRiwayatQuiz !== "function") return;
  var hasil = simHitungNilai();
  var kkm = simState.packetMeta.kkm;
  var isLulus = hasil.totalNilai >= kkm;
  var waktuTerpakaiDetik = (simState.packetMeta.waktuMenit * 60) - simState.remainingTime;
  if (waktuTerpakaiDetik < 0) waktuTerpakaiDetik = 0;
  var m = Math.floor(waktuTerpakaiDetik / 60);
  var s = waktuTerpakaiDetik % 60;
  var waktuLabel = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

  simpanRiwayatQuiz({
    mode: "simulasi", type: "jft",
    title: "Simulasi JFT-Basic",
    subtitle: simState.packetMeta.title,
    score: hasil.totalNilai,
    maxScore: simState.packetMeta.totalPoin,
    correct: hasil.totalBenar,
    wrong: simState.packetData.length - hasil.totalBenar,
    total: simState.packetData.length,
    time: waktuLabel,
    status: isLulus ? "LULUS" : "TIDAK LULUS",
    snapshot: {
      activePacket: simState.activePacket,
      packetData: simState.packetData,
      packetMeta: simState.packetMeta,
      answers: simState.answers
    }
  });
}

function renderHalamanHasilSimulasi() {
  if (typeof hideStandardHeader === "function") hideStandardHeader();
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var hasil = simHitungNilai();
  var totalSkor = hasil.totalNilai;
  if (totalSkor < 10) totalSkor = 10;

  var levelCEFR = "Tidak Lulus";
  var isLulus = totalSkor >= 145;
  if (totalSkor >= 200) levelCEFR = "A2.2";
  else if (totalSkor >= 175) levelCEFR = "A2.1";
  else if (totalSkor >= 145) levelCEFR = "A1";

  var barPosPct = Math.min(100, Math.max(0, ((totalSkor - 10) / 240) * 100));

  var html = '<div class="sim-result-wrap">';
  html += '<div class="jft-report-card">';
  html += '<h2 style="font-size:16px; text-align:center; margin:0 0 14px; font-weight:800; color:#1e293b;">Laporan Hasil Simulasi JFT-Basic</h2>';

  html += '<div style="display:flex; border:2px solid #ef4444; overflow:hidden; margin-bottom:16px;">';
  html += '<div style="flex:1; padding:10px; background:#fff; border-right:1px solid #fca5a5;">';
  html += '<div style="font-size:11px; color:#64748b; font-weight:700;">総合得点 (Total Score)</div>';
  html += '<div style="font-size:24px; font-weight:900; color:#0f172a;">' + totalSkor + '</div>';
  html += '</div>';
  html += '<div style="flex:1; padding:10px; background:#fff;">';
  html += '<div style="font-size:11px; color:#64748b; font-weight:700;">判定結果 (Assessment)</div>';
  html += '<div style="font-size:22px; font-weight:900; color:' + (isLulus ? '#16a34a' : '#dc2626') + ';">' + levelCEFR + '</div>';
  html += '</div></div>';

  html += '<div style="margin-bottom:20px;">';
  html += '<div style="font-size:11px; color:#64748b; margin-bottom:6px;">Rentang Skor (10 - 250):</div>';
  html += '<div style="position:relative; height:16px; background:linear-gradient(to right, #fca5a5, #fef08a, #86efac);">';
  html += '<div style="position:absolute; top:-4px; left:' + barPosPct + '%; transform:translateX(-50%); width:12px; height:24px; background:#0f172a;"></div>';
  html += '</div>';
  html += '<div style="display:flex; justify-content:space-between; font-size:10px; font-weight:700; color:#475569; margin-top:4px;">';
  html += '<span>10</span><span>145 (A1)</span><span>175 (A2.1)</span><span>200 (A2.2)</span><span>250</span>';
  html += '</div></div>';

  html += '<div style="background:#f8fafc; padding:14px; margin-bottom:20px;">';
  html += '<div style="font-size:12px; font-weight:800; color:#334155; margin-bottom:12px;">Persentase Jawaban Benar per Bagian:</div>';

  var secLabels = { moji: "文字と語彙 (Script & Vocab)", kaiwa: "会話と表現 (Conversation)", choukai: "聴解 (Listening)", dokkai: "読解 (Reading)" };
  for (var key in secLabels) {
    if (hasil.totalPerSection[key] > 0) {
      var pct = Math.round((hasil.benarPerSection[key] / hasil.totalPerSection[key]) * 100);
      html += '<div style="margin-bottom:10px;">';
      html += '<div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; margin-bottom:3px;">';
      html += '<span>' + secLabels[key] + '</span><span>' + pct + '%</span>';
      html += '</div>';
      html += '<div style="height:8px; background:#e2e8f0; overflow:hidden;">';
      html += '<div style="height:100%; width:' + pct + '%; background:#2563eb;"></div>';
      html += '</div></div>';
    }
  }
  html += '</div>';

  html += '<div style="text-align:center; margin-bottom:20px;">';
  html += '<span class="sim-result-status ' + (isLulus ? "pass" : "fail") + '">' + (isLulus ? "STATUS: LULUS" : "STATUS: TIDAK LULUS") + '</span>';
  html += '</div>';

  html += '<div class="sim-result-actions">';
  html += '<button class="sim-res-btn ulangi" id="simResBtnUlangi">Ulangi Simulasi</button>';
  html += '<button class="sim-res-btn menu" id="simResBtnMenu">Kembali ke Menu</button>';
  html += '</div>';

  html += '</div></div>';

  container.innerHTML = html;
  document.getElementById("simResBtnUlangi").onclick = function() { simUlangiSimulasi(); };
  document.getElementById("simResBtnMenu").onclick = function() { simKembaliKeMenuSimulasi(); };
}

function simKembaliKeMenuSimulasi() {
  simResetState();
  history.replaceState({ menu: "simulasi", simStep: "menu", isSimMenu: true }, "", "#simulasi");
  loadSimulasiMenu(true);
}

function simUlangiSimulasi() {
  simResetState();
  history.replaceState({ menu: "simulasi", simStep: "konfirmasi", packetKey: simState.activePacket }, "", "#simulasi-konfirmasi");
  openSimulasiKonfirmasi(simState.activePacket);
}

// =====================================================
// 6. PROTEKSI BACK + CLEANUP
// =====================================================

function simTampilkanPopupBackSimulasi() {
  if (simState.exitPopupOpen) return;
  simState.exitPopupOpen = true;

  var overlay = document.createElement("div");
  overlay.id = "simBackConfirmOverlay";
  overlay.className = "sim-modal-overlay";
  overlay.innerHTML = '<div class="sim-confirm-modal-box">' +
    '<div class="sim-confirm-modal-ic">!</div>' +
    '<h3 class="sim-confirm-modal-title">Akhiri Simulasi?</h3>' +
    '<p class="sim-confirm-modal-desc">Apakah kamu yakin ingin mengakhiri simulasi ini? Progress yang sudah dikerjakan akan dihitung sebagai hasil.</p>' +
    '<div class="sim-confirm-modal-actions">' +
    '<button class="sim-btn-lanjut" id="simBackLanjutBtn">Lanjut</button>' +
    '<button class="sim-btn-akhiri" id="simBackAkhiriBtn">Akhiri</button>' +
    '</div></div>';
  document.body.appendChild(overlay);

  document.getElementById("simBackLanjutBtn").onclick = simTutupPopupBackSimulasi;
  document.getElementById("simBackAkhiriBtn").onclick = function () {
    simTutupPopupBackSimulasi();
    selesaikanSimulasi();
  };
}

function simTutupPopupBackSimulasi() {
  simState.exitPopupOpen = false;
  var el = document.getElementById("simBackConfirmOverlay");
  if (el) el.remove();
}

function simCleanupExamOverlay() {
  if (simState.quizActive) selesaikanSimulasi();
  simHapusDeteksiKeluarApp();
  
  var root = document.getElementById("simExamRoot");
  if (root) root.remove();
  tutupPopupDaftarSoal();
  simTutupPopupBackSimulasi();
  var finishOverlay = document.getElementById("simFinishConfirmOverlay");
  if (finishOverlay) finishOverlay.remove();
  if (simState.timerInterval) clearInterval(simState.timerInterval);
  if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel();
}
