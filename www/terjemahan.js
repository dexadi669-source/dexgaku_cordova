// =====================================================
// terjemahan.js
// =====================================================

function triggerHaptic(type = 'light') {
  if ('vibrate' in navigator) {
    if (type === 'light') navigator.vibrate(5);
    else if (type === 'medium') navigator.vibrate(12);
  }
}

const inputElement = document.getElementById("inputText");
const customKeyboard = document.getElementById("customKeyboard");
const kanaKeyboard = document.getElementById("kanaKeyboard");
const qwertyKeyboard = document.getElementById("qwertyKeyboard");
const numberKeyboard = document.getElementById("numberKeyboard");
const keyboardModeTitle = document.getElementById("keyboardModeTitle");
const universalBottomBar = document.getElementById("universalBottomBar");
const flickPreview = document.getElementById("flickPreview");

let keyboardMode = "qwerty"; 
let shiftActive = false;
let flickStartX = 0, flickStartY = 0;
let flickKey = null;

let multiTapActive = false;
let multiTapBase = "";
let multiTapIndex = 0;
let multiTapPosition = -1;

const kanaFamilies = {
  "あ": ["あ", "い", "う", "え", "お"], "か": ["か", "き", "く", "け", "こ"],
  "さ": ["さ", "し", "す", "せ", "そ"], "た": ["た", "ち", "つ", "て", "と"],
  "な": ["な", "に", "ぬ", "ね", "の"], "は": ["は", "ひ", "ふ", "へ", "ほ"],
  "ま": ["ま", "み", "む", "め", "も"], "や": ["や", "", "ゆ", "", "よ"], 
  "ら": ["ら", "り", "る", "れ", "ろ"], "わ": ["わ", "", "を", "", "ん"],
  "ん": ["ん", "、", "。"] 
};

function showKeyboard() {
  if (!customKeyboard.classList.contains("keyboard-visible")) {
    customKeyboard.classList.add("keyboard-visible");
  }
}

function hideKeyboard() {
  if (customKeyboard.classList.contains("keyboard-visible")) {
    customKeyboard.classList.remove("keyboard-visible");
    stopAutoDelete();
  }
}

// Fungsi untuk mereset halaman terjemahan menjadi seperti baru
function resetTerjemahanPage() {
  if (inputElement) inputElement.value = "";
  const outputDiv = document.getElementById("output");
  if (outputDiv) {
    outputDiv.innerHTML = `
      <div class="output-title">HASIL TERJEMAHAN</div>
      <div style="text-align:center; color:#888; font-size:13px; margin-top:20px;">Belum ada teks yang diterjemahkan.</div>
    `;
  }
  hideKeyboard();
}

document.addEventListener("pointerdown", (e) => {
  const tView = document.getElementById("terjemahanView");
  if (tView && tView.classList.contains("active")) {
    if (customKeyboard.classList.contains("keyboard-visible")) {
      const isClickInsideInput = inputElement.contains(e.target);
      const isClickInsideKeyboard = customKeyboard.contains(e.target);
      const isClickTranslateButton = e.target.closest('.btn-translate');
      const isClickBackButton = e.target.closest('.kanji-hero-back');

      if (!isClickInsideInput && !isClickInsideKeyboard && !isClickTranslateButton && !isClickBackButton) {
        hideKeyboard();
      }
    }
  }
});

if (inputElement) {
  inputElement.addEventListener("focus", showKeyboard);
  inputElement.addEventListener("click", showKeyboard);
}

function getCursorPosition() { return inputElement.selectionStart ?? inputElement.value.length; }

function insertText(text, isMultiTap = false) {
  if (!text) return; 
  triggerHaptic('light');
  const value = inputElement.value;
  const start = inputElement.selectionStart ?? value.length;
  const end = inputElement.selectionEnd ?? value.length;
  inputElement.value = value.slice(0, start) + text + value.slice(end);
  const newPos = start + text.length;
  inputElement.focus();
  inputElement.setSelectionRange(newPos, newPos);
  if (!isMultiTap) multiTapActive = false;
}

function replaceLastMultiTap(newChar) {
  triggerHaptic('light');
  const value = inputElement.value;
  const pos = inputElement.selectionStart ?? value.length;
  if (pos <= 0) return;
  const before = Array.from(value.slice(0, pos));
  before.pop();
  const newValue = before.join("") + newChar + value.slice(pos);
  inputElement.value = newValue;
  const newPos = before.join("").length + newChar.length;
  inputElement.focus();
  inputElement.setSelectionRange(newPos, newPos);
}

function moveCursor(direction) {
  triggerHaptic('light'); multiTapActive = false; 
  let start = inputElement.selectionStart ?? inputElement.value.length;
  let end = inputElement.selectionEnd ?? inputElement.value.length;
  if (direction === -1 && start > 0) { start -= 1; end = start; } 
  else if (direction === 1 && end < inputElement.value.length) { start += 1; end = start; }
  inputElement.focus(); inputElement.setSelectionRange(start, end);
}

function insertEnter() { triggerHaptic('medium'); insertText("\n"); }

let deleteInterval = null;
let deleteTimeout = null;

function deleteCharacter() {
  triggerHaptic('medium'); multiTapActive = false;
  const value = inputElement.value;
  const start = inputElement.selectionStart ?? value.length;
  const end = inputElement.selectionEnd ?? value.length;
  if (start !== end) {
    inputElement.value = value.slice(0, start) + value.slice(end);
    inputElement.setSelectionRange(start, start); return;
  }
  if (start <= 0) return;
  const before = Array.from(value.slice(0, start));
  before.pop();
  inputElement.value = before.join("") + value.slice(end);
  const newPos = before.join("").length;
  inputElement.setSelectionRange(newPos, newPos);
}

function startAutoDelete() {
  deleteCharacter();
  deleteTimeout = setTimeout(() => {
    deleteInterval = setInterval(() => {
      if (inputElement.value.length === 0) { stopAutoDelete(); return; }
      deleteCharacter();
    }, 50); 
  }, 350);
}

function stopAutoDelete() { clearTimeout(deleteTimeout); clearInterval(deleteInterval); }

function handleUndo() {
  triggerHaptic('medium');
  if (multiTapActive && getCursorPosition() === multiTapPosition) {
    const family = kanaFamilies[multiTapBase];
    do { multiTapIndex = (multiTapIndex - 1 + family.length) % family.length; } while (family[multiTapIndex] === ""); 
    replaceLastMultiTap(family[multiTapIndex]);
    multiTapPosition = getCursorPosition();
  } else { deleteCharacter(); }
}

document.querySelectorAll("[data-action='delete']").forEach(btn => {
  btn.addEventListener("pointerdown", (e) => { e.preventDefault(); btn.classList.add("pressed"); startAutoDelete(); });
  btn.addEventListener("pointerup", (e) => { e.preventDefault(); btn.classList.remove("pressed"); stopAutoDelete(); });
  btn.addEventListener("pointerleave", () => { btn.classList.remove("pressed"); stopAutoDelete(); });
  btn.addEventListener("pointercancel", () => { btn.classList.remove("pressed"); stopAutoDelete(); });
});

document.querySelectorAll(".kana-key").forEach(key => {
  key.addEventListener("pointerdown", function(event) {
    event.preventDefault(); triggerHaptic('light'); flickKey = this; 
    flickStartX = event.clientX; flickStartY = event.clientY;
    this.classList.add("pressed"); showFlickPreview(this.dataset.base, "tap", flickKey);
  });
  key.addEventListener("pointermove", function(event) {
    if (!flickKey) return;
    const dx = event.clientX - flickStartX, dy = event.clientY - flickStartY;
    let dir = "tap"; if (Math.sqrt(dx*dx + dy*dy) >= 12) dir = getFlickDirection(dx, dy);
    showFlickPreview(this.dataset.base, dir, flickKey);
  });
  key.addEventListener("pointerup", function(event) {
    event.preventDefault(); if (!flickKey) return;
    const dx = event.clientX - flickStartX, dy = event.clientY - flickStartY;
    let dir = "tap"; if (Math.abs(dx) > 12 || Math.abs(dy) > 12) dir = getFlickDirection(dx, dy);
    const base = this.dataset.base;
    if (dir === "tap") {
      if (multiTapActive && multiTapBase === base && getCursorPosition() === multiTapPosition) {
        const family = kanaFamilies[base];
        do { multiTapIndex = (multiTapIndex + 1) % family.length; } while (family[multiTapIndex] === ""); 
        replaceLastMultiTap(family[multiTapIndex]); multiTapPosition = getCursorPosition();
      } else {
        multiTapActive = true; multiTapBase = base; multiTapIndex = 0;
        insertText(kanaFamilies[base][0], true); multiTapPosition = getCursorPosition();
      }
    } else { insertText(getKanaByDirection(base, dir)); }
    finishFlick();
  });
  key.addEventListener("pointercancel", finishFlick);
});

function getFlickDirection(dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) return dx > 0 ? "right" : "left";
  return dy > 0 ? "down" : "up";
}

function getKanaByDirection(base, direction) {
  const family = kanaFamilies[base] || [base, "", "", "", ""];
  if (direction === "tap") return family[0];
  if (direction === "left") return family[1] || family[0];
  if (direction === "up") return family[2] || family[0];
  if (direction === "right") return family[3] || family[0];
  if (direction === "down") return family[4] || family[0];
  return family[0];
}

function showFlickPreview(base, direction, keyElement) {
  const family = kanaFamilies[base] || [base, "", "", "", ""];
  document.getElementById("flickCenter").textContent = family[0];
  document.getElementById("flickLeft").textContent = family[1] || "";
  document.getElementById("flickTop").textContent = family[2] || "";
  document.getElementById("flickRight").textContent = family[3] || "";
  document.getElementById("flickBottom").textContent = family[4] || "";
  document.querySelectorAll(".flick-char").forEach(el => el.classList.remove("active"));
  
  if (direction === "tap") document.getElementById("flickCenter").classList.add("active");
  else if (direction === "left") document.getElementById("flickLeft").classList.add("active");
  else if (direction === "up") document.getElementById("flickTop").classList.add("active");
  else if (direction === "right") document.getElementById("flickRight").classList.add("active");
  else if (direction === "down") document.getElementById("flickBottom").classList.add("active");

  if (keyElement) {
    const rect = keyElement.getBoundingClientRect();
    flickPreview.style.left = (rect.left + rect.width / 2 - 72) + "px";
    flickPreview.style.top = (rect.top + rect.height / 2 - 72) + "px";
  }
  flickPreview.classList.add("show");
}

function finishFlick() {
  if (flickKey) flickKey.classList.remove("pressed");
  flickKey = null; flickPreview.classList.remove("show");
}

document.addEventListener("click", function(event) {
  const charKey = event.target.closest(".key[data-char], .bottom-key[data-char]");
  if (charKey) insertText(charKey.dataset.char);
  const actionKey = event.target.closest("[data-action]");
  if (actionKey) {
    const action = actionKey.dataset.action;
    if (action === "enter") insertEnter();
    if (action === "space") insertText(" ");
    if (action === "undo") handleUndo();
    if (action === "left") moveCursor(-1);
    if (action === "right") moveCursor(1);
    if (action === "switch-number") setKeyboardMode("number");
    if (action === "switch-qwerty") setKeyboardMode("qwerty");
    if (action === "switch-kana") setKeyboardMode("kana");
    if (action === "modifier") applyModifier();
  }
});

let modifierCount = 0; let modifierTimer = null;
const modifierKeyEl = document.querySelector('.modifier-key');
function applyModifier() {
  triggerHaptic('medium'); modifierCount++; if (modifierCount > 3) modifierCount = 1;
  clearTimeout(modifierTimer);
  modifierTimer = setTimeout(() => { modifierCount = 0; if (modifierKeyEl) modifierKeyEl.textContent = "小/゛゜"; }, 1000);
  if (modifierCount === 1) { if (modifierKeyEl) modifierKeyEl.textContent = "゛ Dakuten"; applyDakuten(); } 
  else if (modifierCount === 2) { if (modifierKeyEl) modifierKeyEl.textContent = "゜ Handaku"; applyHandakuten(); } 
  else if (modifierCount === 3) { if (modifierKeyEl) modifierKeyEl.textContent = "小 Small"; applySmallKana(); }
}

function replaceLastCharacter(replacements) {
  multiTapActive = false; 
  const value = inputElement.value; const position = inputElement.selectionStart ?? value.length;
  if (position <= 0) return;
  const chars = Array.from(value.slice(0, position)); const last = chars.pop();
  if (!replacements[last]) return;
  chars.push(replacements[last]); const before = chars.join("");
  inputElement.value = before + value.slice(position);
  inputElement.focus(); inputElement.setSelectionRange(before.length, before.length);
}
function applyDakuten() { replaceLastCharacter({ "か":"が","き":"ぎ","く":"ぐ","け":"げ","こ":"ご", "さ":"ざ","し":"じ","す":"ず","せ":"ぜ","そ":"ぞ", "た":"だ","ち":"ぢ","つ":"づ","て":"で","と":"ど", "は":"ば","ひ":"び","ふ":"ぶ","へ":"べ","ほ":"ぼ" }); }
function applyHandakuten() { replaceLastCharacter({ "は":"ぱ","ひ":"ぴ","ふ":"ぷ","へ":"ぺ","ほ":"ぽ" }); }
function applySmallKana() { replaceLastCharacter({ "あ":"ぁ","い":"ぃ","う":"ぅ","え":"ぇ","お":"ぉ", "つ":"っ","や":"ゃ","ゆ":"ゅ","よ":"ょ","わ":"ゎ" }); }

function setKeyboardMode(mode) {
  keyboardMode = mode; triggerHaptic('light');
  kanaKeyboard.style.display = mode === "kana" ? "grid" : "none";
  qwertyKeyboard.style.display = mode === "qwerty" ? "block" : "none";
  numberKeyboard.style.display = mode === "number" ? "block" : "none";
  universalBottomBar.style.display = mode === "qwerty" ? "grid" : "none";
  if (mode === "kana") keyboardModeTitle.textContent = "KANA 12-KEY";
  else if (mode === "qwerty") keyboardModeTitle.textContent = "QWERTY LATIN";
  else if (mode === "number") keyboardModeTitle.textContent = "ANGKA & SIMBOL";
}

document.querySelectorAll(".q-key[data-key]").forEach(key => {
  key.addEventListener("click", function() {
    let char = this.dataset.key; if (shiftActive) char = char.toUpperCase();
    insertText(char); if (shiftActive) { shiftActive = false; updateShift(); }
  });
});

const shiftKey = document.getElementById("shiftKey");
if (shiftKey) {
  shiftKey.addEventListener("click", () => { triggerHaptic('medium'); shiftActive = !shiftActive; updateShift(); });
}
function updateShift() {
  if (shiftKey) shiftKey.classList.toggle("shift-active", shiftActive);
  document.querySelectorAll(".q-key[data-key]").forEach(key => {
    key.textContent = shiftActive ? key.dataset.key.toUpperCase() : key.dataset.key;
  });
}

function extractRomaji(data) {
  if (!data || !data[0]) return "-";
  for (let item of data[0]) { if (item && item[0] === null && item[2]) return item[2]; }
  try { for (let row of data[0]) { if (row && row[3]) return row[3]; } } catch (e) {} return "-";
}

async function translateText() {
  hideKeyboard();
  const outputDiv = document.getElementById("output");
  const text = inputElement.value.trim();
  if (!text) return;
  outputDiv.innerHTML = `<div class="output-title">HASIL TERJEMAHAN</div><div style="text-align:center; padding:20px; font-weight:bold; color:#6bb3b9;">⏳ Memproses...</div>`;
  
  try {
    const isJapaneseChar = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
    let kanjiResult = text, romajiResult = "-", indoResult = "";

    if (isJapaneseChar) {
      const resId = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=id&dt=t&q=${encodeURIComponent(text)}`);
      const dataId = await resId.json();
      if (dataId && dataId[0]) indoResult = dataId[0].filter(x => x[0] !== null).map(x => x[0]).join("");
      const resRm = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=en&dt=rm&q=${encodeURIComponent(text)}`);
      const dataRm = await resRm.json();
      romajiResult = extractRomaji(dataRm);
    } else {
      const resJa = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja&dt=t&dt=rm&q=${encodeURIComponent(text)}`);
      const dataJa = await resJa.json();
      if (dataJa && dataJa[0]) {
        kanjiResult = dataJa[0].filter(x => x[0] !== null).map(x => x[0]).join("");
        romajiResult = extractRomaji(dataJa);
      }
      const resFinalId = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=id&dt=t&q=${encodeURIComponent(kanjiResult)}`);
      const dataFinalId = await resFinalId.json();
      if (dataFinalId && dataFinalId[0]) indoResult = dataFinalId[0].filter(x => x[0] !== null).map(x => x[0]).join("");
      else indoResult = text;
    }
    outputDiv.innerHTML = `
      <div class="output-title">HASIL TERJEMAHAN</div>
      <div class="result-card"><div class="label-pill bg-kanji">Kanji/Kana:</div><div class="result-text">${kanjiResult}</div></div>
      <div class="result-card"><div class="label-pill bg-romaji">Romanji</div><div class="result-text">${romajiResult}</div></div>
      <div class="result-card"><div class="label-pill bg-arti">Arti</div><div class="result-text">${indoResult}</div></div>
    `;
  } catch (err) {
    outputDiv.innerHTML = `<div class="output-title">HASIL TERJEMAHAN</div><div style="color:red; text-align:center; padding:10px; font-size:13px;">Gagal memuat data.<br>Periksa koneksi internet.</div>`;
  }
}
setKeyboardMode("qwerty"); 

// =====================================================
// FIX ROUTING & MANAJEMEN HISTORY
// =====================================================

// Fungsi terpusat untuk menutup panel terjemahan 
// dan memastikan tampilan kembali ke menu utama.
function tutupPanelTerjemahan() {
  const tView = document.getElementById("terjemahanView");
  if (tView) {
    tView.classList.remove("active");
  }
  
  resetTerjemahanPage();
  
  const mainView = document.getElementById("mainMenuView"); 
  if (mainView) {
    mainView.classList.add("active");
  }
}

// 1. Tangani interaksi Tombol Back Antarmuka (UI Button)
document.querySelectorAll('.kanji-hero-back').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    // Jika URL saat ini memuat jejak (hash) terjemahan, eksekusi history.back() 
    // agar sinkron dengan cara kerja tombol Kosakata dan mencegah tumpukan riwayat.
    if (window.location.hash.includes('terjemahan')) {
      history.back();
    } else {
      // Jika tidak ada di history, tutup UI secara manual dan paksa bersihkan URL 
      // supaya riwayat tidak meninggalkan jejak saat beralih ke menu lain.
      tutupPanelTerjemahan();
      history.replaceState(null, "", window.location.pathname);
    }
  });
});

// 2. Tangani sinkronisasi dengan Web History API (Mencegah menu menyangkut)
window.addEventListener('popstate', function(event) {
  const tView = document.getElementById("terjemahanView");
  
  // Jika panel terjemahan aktif, tapi URL hash-nya sudah bersih (berarti user menekan kembali),
  // tutup otomatis panel terjemahannya.
  if (tView && tView.classList.contains("active") && !window.location.hash.includes('terjemahan')) {
    tutupPanelTerjemahan();
  }
});

// 3. Tangani Hardware Back (Capacitor/Tombol Fisik HP)
if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
  window.Capacitor.Plugins.App.addListener('backButton', function(event) {
    const tView = document.getElementById("terjemahanView");
    
    if (tView && tView.classList.contains("active")) {
      // Sama seperti tombol antarmuka, jika hash tersedia, biarkan router history mundur perlahan
      if (window.location.hash.includes('terjemahan')) {
        window.history.back();
      } else {
        tutupPanelTerjemahan();
      }
    } else {
      // Jika panel tidak terbuka sama sekali, serahkan pada aksi kembali natural bawaan OS HP
      window.history.back();
    }
  });
}
