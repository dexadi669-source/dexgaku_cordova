// =====================================================
// DeX Gaku — tambah-data-render.js (V2 - Smart Keyboard & Dynamic Buttons)
// =====================================================

var tambahDataState = {
  kanjiKunyomiCount: 1,
  kanjiOnyomiCount: 1,
  kanjiContohCount: 1
};

var tdCurrentForm = "kotoba"; 
var isTdForceBack = false;

// =====================================================
// 1. MENU UTAMA TAMBAH DATA (V2 STYLE)
// =====================================================

function loadTambahDataMenu() {
  if (typeof hideStandardHeader === "function") hideStandardHeader();
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var html = '<div class="td-wrap-v2 td-page-enter">';
  
  html += '<div class="td-hero-header">';
  html += '  <button class="td-back-btn" onclick="tdAttemptBack()">';
  html += '    <span class="td-back-ic">&lt;</span> Kembali';
  html += '  </button>';
  html += '  <h2 class="td-title">Tambah Data</h2>';
  html += '  <p class="td-subtitle">Tambahkan data belajar Bahasa Jepang kamu</p>';
  html += '</div>';

  html += '<div class="td-body-content">';
  
  // SWITCH PILLS SEPERTI RIWAYAT
  html += '<div class="td-filter-row">';
  html += '  <button class="td-filter-pill active" data-form="kotoba">Kotoba</button>';
  html += '  <button class="td-filter-pill" data-form="kanji">Kanji</button>';
  html += '  <button class="td-filter-pill" data-form="bunpo">Bunpo</button>';
  html += '</div>';

  // CONTAINER UNTUK FORM DINAMIS
  html += '<div id="tdFormContainer" class="tambah-data-form-container"></div>';

  html += '<p class="tambah-data-info-text">';
  html += '💡 Data yang ditambahkan dari Menu tambah data atau Import bisa dihapus dengan cara menahan Card selama 2-3 detik.';
  html += '</p>';
  
  html += "</div></div>";
  container.innerHTML = html;
  
  // Suntikkan Keyboard Custom
  tdInjectKeyboardHTML();

  tdAttachSwitchEvents();
  tdSwitchForm(tdCurrentForm || "kotoba", true);
}

function tdAttachSwitchEvents() {
  var pills = document.querySelectorAll(".td-filter-pill");
  for (var i = 0; i < pills.length; i++) {
    pills[i].addEventListener("click", function () {
      var choice = this.getAttribute("data-form");
      if (choice === tdCurrentForm) return;
      
      if (tdIsFormDirty()) {
        tdShowSwitchConfirmModal(choice);
      } else {
        tdSwitchForm(choice);
        history.replaceState({ menu: "tambah", tambahStep: choice }, "", "#tambah-" + choice);
      }
    });
  }
}

function tdSwitchForm(choice, isInitial) {
  tdHideKeyboard(); // Sembunyikan keyboard saat ganti tab
  tdCurrentForm = choice;
  
  var pills = document.querySelectorAll(".td-filter-pill");
  for (var i = 0; i < pills.length; i++) {
    pills[i].classList.toggle("active", pills[i].getAttribute("data-form") === choice);
  }
  
  var container = document.getElementById("tdFormContainer");
  if (!container) return;

  if (!isInitial) {
    container.style.opacity = 0;
    container.style.transform = "translateY(10px)";
  }
  
  setTimeout(function() {
    if (choice === "kotoba") container.innerHTML = tdGetFormKotobaHTML();
    else if (choice === "kanji") container.innerHTML = tdGetFormKanjiHTML();
    else if (choice === "bunpo") container.innerHTML = tdGetFormBunpoHTML();

    tdAttachFormEvents(choice);
    tdAttachKeyboardToInputs(); // Memasang event keyboard ke input yang baru dimuat

    if (!isInitial) {
      container.style.opacity = 1;
      container.style.transform = "translateY(0)";
    }
  }, isInitial ? 0 : 200);
}

// =====================================================
// 2. DETEKSI FORM & NAVIGASI KEMBALI
// =====================================================

function tdIsFormDirty() {
  var inputs = document.querySelectorAll('.tambah-data-form .tambah-data-input, .tambah-data-form .tambah-data-textarea');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() !== "") return true;
  }
  return false;
}

function tdAttemptBack() {
  tdHideKeyboard();
  if (tdIsFormDirty()) {
    tdShowExitConfirmModal();
  } else {
    isTdForceBack = true;
    history.back();
  }
}

function tdShowExitConfirmModal() {
  var overlay = document.createElement("div");
  overlay.id = "tdExitOverlay";
  overlay.className = "tambah-data-modal-overlay";
  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<h3 class="tambah-data-modal-title">Apakah Anda ingin keluar?</h3>' +
    '<p class="tambah-data-modal-desc">Data yang sudah Anda isi pada formulir ini akan hilang.</p>' +
    '<div class="tambah-data-modal-actions">' +
    '<button class="tambah-data-modal-cancel" id="tdExitStayBtn">Batal</button>' +
    '<button class="tambah-data-modal-danger" id="tdExitLeaveBtn">Keluar</button>' +
    "</div></div>";
  document.body.appendChild(overlay);

  document.getElementById("tdExitStayBtn").onclick = function () { overlay.remove(); };
  document.getElementById("tdExitLeaveBtn").onclick = function () {
    overlay.remove();
    var inputs = document.querySelectorAll('.tambah-data-form .tambah-data-input, .tambah-data-form .tambah-data-textarea');
    for (var i = 0; i < inputs.length; i++) inputs[i].value = "";
    isTdForceBack = true;
    history.back();
  };
}

function tdShowSwitchConfirmModal(targetChoice) {
  var overlay = document.createElement("div");
  overlay.id = "tdSwitchOverlay";
  overlay.className = "tambah-data-modal-overlay";
  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<h3 class="tambah-data-modal-title">Ganti Form?</h3>' +
    '<p class="tambah-data-modal-desc">Isian form saat ini belum disimpan dan akan hilang.</p>' +
    '<div class="tambah-data-modal-actions">' +
    '<button class="tambah-data-modal-cancel" id="tdSwitchStayBtn">Batal</button>' +
    '<button class="tambah-data-modal-danger" id="tdSwitchLeaveBtn">Ganti</button>' +
    "</div></div>";
  document.body.appendChild(overlay);

  document.getElementById("tdSwitchStayBtn").onclick = function () { overlay.remove(); };
  document.getElementById("tdSwitchLeaveBtn").onclick = function () {
    overlay.remove();
    var inputs = document.querySelectorAll('.tambah-data-form .tambah-data-input, .tambah-data-form .tambah-data-textarea');
    for (var i = 0; i < inputs.length; i++) inputs[i].value = "";
    tdSwitchForm(targetChoice);
    history.replaceState({ menu: "tambah", tambahStep: targetChoice }, "", "#tambah-" + targetChoice);
  };
}

function handleTambahDataPopstate(state) {
  var step = state && state.tambahStep;
  tdHideKeyboard();
  if (tdIsFormDirty() && !isTdForceBack) {
    history.pushState(Object.assign({}, state, { tambahStep: tdCurrentForm }), "", "#tambah-" + tdCurrentForm);
    if (step && step !== tdCurrentForm) {
      tdShowSwitchConfirmModal(step);
    } else {
      tdShowExitConfirmModal();
    }
    return;
  }
  isTdForceBack = false;

  if (step === "kotoba" || step === "kanji" || step === "bunpo") {
    tdSwitchForm(step);
  } else {
    tdSwitchForm("kotoba");
  }
}

// =====================================================
// 3. GET HTML FORMS & ATTACH EVENTS
// =====================================================

function tdGetFormKotobaHTML() {
  var html = '<div class="tambah-data-form">';
  
  // Field Kanji (opsional)
  html += '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="tdKotobaKanji">Kanji <span class="td-label-optional">(Opsional)</span></label>';
  html += '<input type="text" inputmode="none" class="tambah-data-input" id="tdKotobaKanji" placeholder="Contoh: 父">';
  html += '<p class="td-field-hint">Kosongkan jika kata ini tidak punya kanji</p>';
  html += '</div>';
  
  // Field Kana (wajib)
  html += '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="tdKotobaKana">Kana <span class="tambah-data-required">*</span></label>';
  html += '<input type="text" inputmode="none" class="tambah-data-input" id="tdKotobaKana" placeholder="Contoh: ちち">';
  html += '</div>';
  
  // Field Arti
  html += tdFieldText("tdKotobaArti", "Arti", true, "Contoh: ayah");
  
  // Field Romaji (opsional)
  html += tdFieldText("tdKotobaRomaji", "Romaji (Opsional)", false, "Contoh: chichi");

  // Kategori
  var kotobaOptions = [];
  if (typeof KOSAKATA_CATEGORIES !== "undefined") {
    for (var i = 0; i < KOSAKATA_CATEGORIES.length; i++) {
      kotobaOptions.push({ value: KOSAKATA_CATEGORIES[i].key, label: KOSAKATA_CATEGORIES[i].nama });
    }
  }
  html += tdBuildCategoryPicker("tdKotobaKategori", kotobaOptions);
  
  // Container subkategori
  html += '<div id="tdKotobaSubkatContainer" class="td-subkat-container"></div>';
  
  html += '<button class="tambah-data-submit" id="tdKotobaSubmitBtn">Simpan Kotoba</button>';
  html += "</div>";
  return html;
}

function tdGetFormKanjiHTML() {
  tambahDataState.kanjiKunyomiCount = 1;
  tambahDataState.kanjiOnyomiCount = 1;
  tambahDataState.kanjiContohCount = 1;

  var html = '<div class="tambah-data-form">';
  
  // === WAJIB ===
  html += tdFieldText("tdKanjiKanji", "Kanji", true, "Contoh: 新");
  html += tdFieldText("tdKanjiArti", "Arti", true, "Contoh: baru");
  
  // === OPSIONAL (detail) ===
  html += '<details class="tambah-data-details">';
  html += '<summary class="tambah-data-details-summary">Detail Tambahan (Opsional)</summary>';
  html += '<div class="tambah-data-details-body">';
  html += tdFieldText("tdKanjiArtiEn", "Arti (English)", false, "Contoh: new");
  html += tdFieldText("tdKanjiRadikal", "Radikal", false, "Contoh: 斤 (kapak)");
  html += tdFieldText("tdKanjiGoresan", "Jumlah Goresan", false, "Contoh: 13");
  html += tdFieldTextarea("tdKanjiMnemonik", "Jembatan Ingatan", false, "Contoh: Kapak di dekat pohon...");
  html += tdFieldTextarea("tdKanjiDeskripsi", "Deskripsi", false, "Contoh: Kanji dasar untuk 'baru'...");
  html += '</div></details>';
  
  // === BACAAN ===
  html += tdBuildRepeatableGroup("tdKanjiKunyomiList", "Kunyomi", "kunyomi", "Contoh: あたらしい");
  html += tdBuildRepeatableGroup("tdKanjiOnyomiList", "Onyomi", "onyomi", "Contoh: シン");
  html += tdBuildRepeatableExampleGroup();

  // === KATEGORI ===
  var kanjiOptions = [];
  if (typeof KANJI_CATEGORIES !== "undefined") {
    for (var i = 0; i < KANJI_CATEGORIES.length; i++) {
      kanjiOptions.push({ value: KANJI_CATEGORIES[i], label: KANJI_CATEGORIES[i] });
    }
  }
  html += tdBuildCategoryPicker("tdKanjiKategori", kanjiOptions);
  html += '<button class="tambah-data-submit" id="tdKanjiSubmitBtn">Simpan Kanji</button>';
  html += "</div>";
  return html;
}

function tdGetFormBunpoHTML() {
  var html = '<div class="tambah-data-form">';
  html += tdFieldText("tdBunpoJudul", "Bunpo", true, "Contoh: は・です");
  html += tdFieldTextarea("tdBunpoSub", "Penjelasan singkat", true, "Contoh: Digunakan untuk menyatakan identitas.");
  html += tdFieldTextarea("tdBunpoFungsi", "Fungsi", true, "Contoh: Menyatakan identitas.");
  html += tdFieldText("tdBunpoPola", "Pola", true, "Contoh: A は B です。");
  html += tdFieldText("tdBunpoContoh", "Contoh", false, "Contoh: 私は学生です。");
  html += tdFieldText("tdBunpoNegatif", "Contoh bentuk negatif", false, "Contoh: 私は学生ではありません。");

  var bunpoOptions = [];
  if (typeof BUNPO_CATEGORIES !== "undefined") {
    for (var i = 0; i < BUNPO_CATEGORIES.length; i++) {
      bunpoOptions.push({ value: BUNPO_CATEGORIES[i].key, label: BUNPO_CATEGORIES[i].nama });
    }
  }
  html += tdBuildCategoryPicker("tdBunpoKategori", bunpoOptions);
  html += '<button class="tambah-data-submit" id="tdBunpoSubmitBtn">Simpan Bunpo</button>';
  html += "</div>";
  return html;
}

function tdAttachFormEvents(choice) {
  if (choice === "kotoba") {
    document.getElementById("tdKotobaSubmitBtn").onclick = tdSubmitKotoba;
    var kotobaOptions = [];
    if (typeof KOSAKATA_CATEGORIES !== "undefined") {
      for (var i = 0; i < KOSAKATA_CATEGORIES.length; i++) {
        kotobaOptions.push({ value: KOSAKATA_CATEGORIES[i].key, label: KOSAKATA_CATEGORIES[i].nama });
      }
    }
    // Attach dengan callback untuk reveal subkategori
    tdAttachCategoryPicker("tdKotobaKategori", kotobaOptions, function (catKey) {
      tdRevealKotobaSubkategori(catKey);
    });
  } else if (choice === "kanji") {
    document.getElementById("tdKanjiSubmitBtn").onclick = tdSubmitKanji;
    tdAttachAddButtonEvents();
    var kanjiOptions = [];
    if (typeof KANJI_CATEGORIES !== "undefined") {
      for (var i = 0; i < KANJI_CATEGORIES.length; i++) {
        kanjiOptions.push({ value: KANJI_CATEGORIES[i], label: KANJI_CATEGORIES[i] });
      }
    }
    tdAttachCategoryPicker("tdKanjiKategori", kanjiOptions);
  } else if (choice === "bunpo") {
    document.getElementById("tdBunpoSubmitBtn").onclick = tdSubmitBunpo;
    var bunpoOptions = [];
    if (typeof BUNPO_CATEGORIES !== "undefined") {
      for (var i = 0; i < BUNPO_CATEGORIES.length; i++) {
        bunpoOptions.push({ value: BUNPO_CATEGORIES[i].key, label: BUNPO_CATEGORIES[i].nama });
      }
    }
    tdAttachCategoryPicker("tdBunpoKategori", bunpoOptions);
  }
}

// =====================================================
// 4. SUBMIT LOGIC (KOTOBA, KANJI, BUNPO)
// =====================================================


function tdSubmitKotoba() {
  tdHideKeyboard();
  var kanji = document.getElementById("tdKotobaKanji").value.trim();
  var kana = document.getElementById("tdKotobaKana").value.trim();
  var arti = document.getElementById("tdKotobaArti").value.trim();
  var romaji = document.getElementById("tdKotobaRomaji").value.trim();
  var kategoriKey = tdGetPickerValue("tdKotobaKategori");
  var subkategori = tdGetPickerValue("tdKotobaSubkat");

  // Validasi wajib
  if (!kana || !arti || !kategoriKey) {
    tdShowValidationToast("Kana, Arti, dan Kategori wajib diisi.");
    return;
  }
  
  // Cek subkategori
  var subOptions = tdGetSubkategoriOptions(kategoriKey);
  if (subOptions.length > 0 && !subkategori) {
    tdShowValidationToast("Subkategori wajib dipilih.");
    return;
  }
  
  if (typeof userDataTambahKotoba === "function") {
    var result = userDataTambahKotoba({
      kanji: kanji,
      kana: kana,
      arti: arti,
      romaji: romaji,
      kategoriKey: kategoriKey,
      subkategori: subkategori || null
    });
    
    if (!result.ok) {
      if (result.reason === "duplicate") {
        tdShowDuplicateModal();
      } else if (result.reason === "kana-required") {
        tdShowValidationToast("Kana wajib diisi.");
      } else {
        tdShowValidationToast("Data tidak valid. Periksa kembali isian Anda.");
      }
      return;
    }
  }
  tdShowSuccessModal("kotoba");
}

function tdSubmitKanji() {
  tdHideKeyboard();
  var kanjiChar = document.getElementById("tdKanjiKanji").value.trim();
  var arti = document.getElementById("tdKanjiArti").value.trim();
  var kategori = tdGetPickerValue("tdKanjiKategori");
  if (!kanjiChar || !arti || !kategori) {
    tdShowValidationToast("Kanji, Arti, dan Kategori wajib diisi.");
    return;
  }
  
  // Field opsional
  var artiEn = (document.getElementById("tdKanjiArtiEn") || {}).value || "";
  var radikal = (document.getElementById("tdKanjiRadikal") || {}).value || "";
  var goresan = (document.getElementById("tdKanjiGoresan") || {}).value || "";
  var mnemonik = (document.getElementById("tdKanjiMnemonik") || {}).value || "";
  var deskripsi = (document.getElementById("tdKanjiDeskripsi") || {}).value || "";
  
  var kunyomiInputs = document.querySelectorAll('#tdKanjiKunyomiList [data-kind="kunyomi"]');
  var kunyomi = [];
  for (var i = 0; i < kunyomiInputs.length; i++) {
    var v = kunyomiInputs[i].value.trim();
    if (v) kunyomi.push(v);
  }
  
  var onyomiInputs = document.querySelectorAll('#tdKanjiOnyomiList [data-kind="onyomi"]');
  var onyomi = [];
  for (var j = 0; j < onyomiInputs.length; j++) {
    var v2 = onyomiInputs[j].value.trim();
    if (v2) onyomi.push(v2);
  }
  
  var contohRows = document.querySelectorAll("#tdKanjiContohList .tambah-data-example-row");
  var contoh = [];
  for (var k = 0; k < contohRows.length; k++) {
    var kata = contohRows[k].querySelector(".tambah-data-example-kata").value.trim();
    var baca = contohRows[k].querySelector(".tambah-data-example-baca").value.trim();
    var artiContoh = contohRows[k].querySelector(".tambah-data-example-arti").value.trim();
    if (kata) contoh.push({ kata: kata, baca: baca, arti: artiContoh });
  }

  if (typeof userDataTambahKanji === "function") {
    var result = userDataTambahKanji({
      kanji: kanjiChar,
      arti: arti,
      artiEn: artiEn,
      kunyomi: kunyomi,
      onyomi: onyomi,
      contoh: contoh,
      kategori: kategori,
      radikal: radikal,
      goresan: goresan,
      mnemonik: mnemonik,
      deskripsi: deskripsi
    });
    if (!result.ok) {
      if (result.reason === "duplicate") tdShowDuplicateModal();
      else tdShowValidationToast("Data tidak valid.");
      return;
    }
  }
  tdShowSuccessModal("kanji");
}

function tdSubmitBunpo() {
  tdHideKeyboard();
  var judul = document.getElementById("tdBunpoJudul").value.trim();
  var sub = document.getElementById("tdBunpoSub").value.trim();
  var fungsi = document.getElementById("tdBunpoFungsi").value.trim();
  var pola = document.getElementById("tdBunpoPola").value.trim();
  var contohKalimat = document.getElementById("tdBunpoContoh").value.trim();
  var contohNegatif = document.getElementById("tdBunpoNegatif").value.trim();
  var kategoriKey = tdGetPickerValue("tdBunpoKategori");

  if (!judul || !sub || !fungsi || !pola || !kategoriKey) { tdShowValidationToast("Bunpo, Penjelasan singkat, Fungsi, Pola, dan Kategori wajib diisi."); return; }
  if (typeof userDataTambahBunpo === "function") {
    var result = userDataTambahBunpo({ judul: judul, sub: sub, fungsi: fungsi, pola: pola, contohKalimat: contohKalimat, contohNegatif: contohNegatif, kategoriKey: kategoriKey });
    if (!result.ok) { tdShowDuplicateModal(); return; }
  }
  tdShowSuccessModal("bunpo");
}

// =====================================================
// 5. HELPER FIELD FORM (Dengan Tombol Kurangi Dinamis)
// =====================================================

function tdBuildRepeatableGroup(listId, label, fieldKind, placeholder) {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label">' + label + "</label>";
  html += '<div class="tambah-data-repeat-list" id="' + listId + '">';
  html += '<input type="text" class="tambah-data-input tambah-data-repeat-input" data-kind="' + fieldKind + '" placeholder="' + placeholder + '">';
  html += "</div>";
  html += '<div class="tambah-data-action-group">';
  html += '<button type="button" class="tambah-data-add-btn" data-add-target="' + listId + '" data-add-kind="' + fieldKind + '" data-add-placeholder="' + placeholder + '">+ Tambah</button>';
  html += '<button type="button" class="tambah-data-remove-btn" data-remove-target="' + listId + '">- Kurangi</button>';
  html += '</div>';
  html += "</div>";
  return html;
}

function tdBuildRepeatableExampleGroup() {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label">Contoh</label>';
  html += '<div class="tambah-data-repeat-list" id="tdKanjiContohList">';
  html += tdExampleRowHTML();
  html += "</div>";
  html += '<div class="tambah-data-action-group">';
  html += '<button type="button" class="tambah-data-add-btn" data-add-target="tdKanjiContohList" data-add-kind="contoh">+ Tambah</button>';
  html += '<button type="button" class="tambah-data-remove-btn" data-remove-target="tdKanjiContohList">- Kurangi</button>';
  html += '</div>';
  html += "</div>";
  return html;
}

function tdExampleRowHTML() {
  var html = '<div class="tambah-data-example-row">';
  html += '<input type="text" class="tambah-data-input tambah-data-example-kata" placeholder="Kata (mis. 新しい)">';
  html += '<input type="text" class="tambah-data-input tambah-data-example-baca" placeholder="Bacaan (mis. あたらしい)">';
  html += '<input type="text" class="tambah-data-input tambah-data-example-arti" placeholder="Arti (mis. Baru)">';
  html += "</div>";
  return html;
}

function tdUpdateRemoveButtonVisibility(listId) {
  var list = document.getElementById(listId);
  var removeBtn = document.querySelector('.tambah-data-remove-btn[data-remove-target="' + listId + '"]');
  if (!list || !removeBtn) return;
  
  if (list.children.length > 1) {
    removeBtn.style.display = 'block';
  } else {
    removeBtn.style.display = 'none';
  }
}

function tdAttachAddButtonEvents() {
  var addBtns = document.querySelectorAll(".tambah-data-add-btn");
  for (var i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener("click", function () {
      var targetId = this.getAttribute("data-add-target");
      var kind = this.getAttribute("data-add-kind");
      var placeholder = this.getAttribute("data-add-placeholder") || "";
      var list = document.getElementById(targetId);
      if (!list) return;

      if (kind === "contoh") {
        var wrap = document.createElement("div");
        wrap.innerHTML = tdExampleRowHTML();
        list.appendChild(wrap.firstChild);
      } else {
        var input = document.createElement("input");
        input.type = "text";
        input.className = "tambah-data-input tambah-data-repeat-input";
        input.setAttribute("data-kind", kind);
        input.placeholder = placeholder;
        list.appendChild(input);
      }
      tdAttachKeyboardToInputs(); 
      tdUpdateRemoveButtonVisibility(targetId); 
    });
  }

  var removeBtns = document.querySelectorAll(".tambah-data-remove-btn");
  for (var j = 0; j < removeBtns.length; j++) {
    removeBtns[j].addEventListener("click", function() {
      var targetId = this.getAttribute("data-remove-target");
      var list = document.getElementById(targetId);
      if (!list || list.children.length <= 1) return;

      list.removeChild(list.lastChild); 
      tdUpdateRemoveButtonVisibility(targetId); 
    });
  }
}

function tdBuildCategoryPicker(id, options) {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label">Kategori <span class="tambah-data-required">*</span></label>';
  html += '<button type="button" class="tambah-data-picker-btn" id="' + id + '" data-value="">';
  html += '<span class="tambah-data-picker-text" id="' + id + 'Text">Pilih kategori&hellip;</span>';
  html += '<span class="tambah-data-picker-arrow">&#8250;</span>';
  html += "</button>";
  html += "</div>";
  return html;
}

function tdGetPickerValue(id) {
  var el = document.getElementById(id);
  return el ? el.getAttribute("data-value") || "" : "";
}

function tdAttachCategoryPicker(id, options, onSelect) {
  var btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener("click", function () {
    tdHideKeyboard();
    tdOpenCategoryPickerModal(id, options, onSelect);
  });
}

function tdOpenCategoryPickerModal(pickerId, options, onSelect) {
  var currentValue = tdGetPickerValue(pickerId);
  var overlay = document.createElement("div");
  overlay.id = "tdCategoryPickerOverlay";
  overlay.className = "tambah-data-modal-overlay tambah-data-picker-overlay";

  var listHtml = "";
  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var isSelected = opt.value === currentValue;
    listHtml += '<button type="button" class="tambah-data-picker-option' + (isSelected ? " selected" : "") + '" data-picker-value="' + opt.value + '">';
    listHtml += '<span>' + opt.label + "</span>";
    listHtml += '<span class="tambah-data-picker-radio' + (isSelected ? " checked" : "") + '"></span>';
    listHtml += "</button>";
  }

  overlay.innerHTML =
    '<div class="tambah-data-picker-sheet">' +
    '<div class="tambah-data-picker-head">' +
    '<h3>Pilih Kategori</h3>' +
    '<button class="tambah-data-modal-close" id="tdPickerCloseBtn">&#10005;</button>' +
    "</div>" +
    '<div class="tambah-data-picker-list">' + listHtml + "</div>" +
    "</div>";
  document.body.appendChild(overlay);

  overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
  document.getElementById("tdPickerCloseBtn").onclick = function () { overlay.remove(); };

  var optBtns = overlay.querySelectorAll(".tambah-data-picker-option");
  for (var j = 0; j < optBtns.length; j++) {
    optBtns[j].addEventListener("click", function () {
      var value = this.getAttribute("data-picker-value");
      var label = this.querySelector("span").textContent;
      var pickerBtn = document.getElementById(pickerId);
      pickerBtn.setAttribute("data-value", value);
      var textEl = document.getElementById(pickerId + "Text");
      if (textEl) {
        textEl.textContent = label;
        textEl.classList.add("tambah-data-picker-text-filled");
      }
      // Callback untuk reveal subkategori
      if (typeof onSelect === "function") onSelect(value, label);
      overlay.remove();
    });
  }
}

// =====================================================
// SUBKATEGORI PICKER (muncul setelah kategori dipilih)
// =====================================================

function tdGetSubkategoriOptions(catKey) {
  if (typeof KOSAKATA_CATEGORY_MAP === "undefined") return [];
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  if (!cat || !cat.subkategori || !cat.subkategori.length) return [];
  var opts = [];
  for (var i = 0; i < cat.subkategori.length; i++) {
    opts.push({ value: cat.subkategori[i].nama, label: cat.subkategori[i].nama });
  }
  return opts;
}

function tdGetSubkategoriOptions(catKey) {
  if (typeof KOSAKATA_CATEGORY_MAP === "undefined") return [];
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  if (!cat || !cat.subkategori || !cat.subkategori.length) return [];
  var opts = [];
  for (var i = 0; i < cat.subkategori.length; i++) {
    opts.push({ value: cat.subkategori[i].nama, label: cat.subkategori[i].nama });
  }
  return opts;
}

function tdRevealKotobaSubkategori(catKey) {
  var container = document.getElementById("tdKotobaSubkatContainer");
  if (!container) return;
  
  var subOptions = tdGetSubkategoriOptions(catKey);
  
  if (subOptions.length === 0) {
    container.classList.remove("td-subkat-visible");
    container.innerHTML = "";
    return;
  }
  
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label">Subkategori <span class="tambah-data-required">*</span></label>';
  html += '<button type="button" class="tambah-data-picker-btn" id="tdKotobaSubkat" data-value="">';
  html += '<span class="tambah-data-picker-text" id="tdKotobaSubkatText">Pilih subkategori&hellip;</span>';
  html += '<span class="tambah-data-picker-arrow">&#8250;</span>';
  html += '</button>';
  html += '</div>';
  
  container.innerHTML = html;
  tdAttachCategoryPicker("tdKotobaSubkat", subOptions);
  
  requestAnimationFrame(function () {
    container.classList.add("td-subkat-visible");
  });
}

function tdFieldText(id, label, required, placeholder) {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="' + id + '">' + label;
  if (required) html += ' <span class="tambah-data-required">*</span>';
  html += "</label>";
  html += '<input type="text" inputmode="none" class="tambah-data-input" id="' + id + '" placeholder="' + placeholder + '">';
  html += "</div>";
  return html;
}

function tdFieldTextarea(id, label, required, placeholder) {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="' + id + '">' + label;
  if (required) html += ' <span class="tambah-data-required">*</span>';
  html += "</label>";
  html += '<textarea class="tambah-data-input tambah-data-textarea" inputmode="none" id="' + id + '" placeholder="' + placeholder + '" rows="2"></textarea>';
  html += "</div>";
  return html;
}

// =====================================================
// 6. POPUP: VALIDASI, DUPLIKAT, SUKSES
// =====================================================

function tdShowValidationToast(msg) {
  var existing = document.getElementById("tdToast");
  if (existing) existing.remove();
  var toast = document.createElement("div");
  toast.id = "tdToast";
  toast.className = "tambah-data-toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.classList.add("tambah-data-toast-hide");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2400);
}

function tdShowDuplicateModal() {
  var overlay = document.createElement("div");
  overlay.id = "tdDuplicateOverlay";
  overlay.className = "tambah-data-modal-overlay";
  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<div class="tambah-data-modal-icon warn">&#9888;&#65039;</div>' +
    '<h3 class="tambah-data-modal-title">Data Sudah Ada</h3>' +
    '<p class="tambah-data-modal-desc">Data ini sudah tersedia di DeX Gaku.<br>Data yang sama tidak dapat ditambahkan.</p>' +
    '<button class="tambah-data-modal-ok" id="tdDuplicateOkBtn">OK</button>' +
    "</div>";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
  document.getElementById("tdDuplicateOkBtn").onclick = function () { overlay.remove(); };
}

function tdShowSuccessModal(type) {
  var labelMap = { kotoba: "Kotoba", kanji: "Kanji", bunpo: "Bunpo" };
  var overlay = document.createElement("div");
  overlay.id = "tdSuccessOverlay";
  overlay.className = "tambah-data-modal-overlay";
  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<div class="tambah-data-modal-icon success">&#9989;</div>' +
    '<h3 class="tambah-data-modal-title">Berhasil Ditambahkan</h3>' +
    '<p class="tambah-data-modal-desc">' + labelMap[type] + ' baru berhasil disimpan dan langsung dapat digunakan.</p>' +
    '<button class="tambah-data-modal-ok" id="tdSuccessOkBtn">Tambah Lagi</button>' +
    '<button class="tambah-data-modal-secondary" id="tdSuccessBackBtn">Kembali ke Menu</button>' +
    "</div>";
  document.body.appendChild(overlay);

  document.getElementById("tdSuccessOkBtn").onclick = function () {
    overlay.remove();
    var inputs = document.querySelectorAll('.tambah-data-form .tambah-data-input, .tambah-data-form .tambah-data-textarea');
    for (var i = 0; i < inputs.length; i++) inputs[i].value = "";
    tdSwitchForm(type, true); 
    window.scrollTo(0, 0);
  };
  document.getElementById("tdSuccessBackBtn").onclick = function () {
    overlay.remove();
    isTdForceBack = true;
    history.back();
  };
}

// =====================================================
// 7. LONG PRESS UNTUK HAPUS DATA USER
// =====================================================

var TD_LONG_PRESS_MS = 3000;

function tdAttachLongPress(el, onConfirmDelete) {
  var srcAttr = el ? el.getAttribute("data-td-source") : null;
  if (!el || (srcAttr !== "user" && srcAttr !== "import")) return;
  var pressTimer = null, triggered = false, startX = 0, startY = 0, MOVE_TOLERANCE = 10; 
  function clearPress() {
    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    el.classList.remove("tambah-data-pressing");
  }
  el.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    triggered = false; startX = e.clientX; startY = e.clientY;
    el.classList.add("tambah-data-pressing");
    pressTimer = setTimeout(function () {
      triggered = true; clearPress();
      if (navigator.vibrate) { try { navigator.vibrate(30); } catch (err) {} }
      tdShowDeleteConfirmModal(onConfirmDelete);
    }, TD_LONG_PRESS_MS);
  });
  el.addEventListener("pointermove", function (e) {
    if (!pressTimer) return;
    var dx = Math.abs(e.clientX - startX);
    var dy = Math.abs(e.clientY - startY);
    if (dx > MOVE_TOLERANCE || dy > MOVE_TOLERANCE) clearPress();
  });
  el.addEventListener("pointerup", function () { clearPress(); });
  el.addEventListener("pointercancel", function () { clearPress(); });
  el.addEventListener("pointerleave", function () { clearPress(); });
  el.addEventListener("click", function (e) {
    if (triggered) { e.stopPropagation(); e.preventDefault(); triggered = false; }
  }, true);
}

function tdShowDeleteConfirmModal(onConfirmDelete) {
  var overlay = document.createElement("div");
  overlay.id = "tdDeleteOverlay";
  overlay.className = "tambah-data-modal-overlay";
  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<h3 class="tambah-data-modal-title">Hapus Data?</h3>' +
    '<p class="tambah-data-modal-desc">Apakah kamu yakin ingin menghapus data ini?</p>' +
    '<div class="tambah-data-modal-actions">' +
    '<button class="tambah-data-modal-cancel" id="tdDeleteCancelBtn">Batal</button>' +
    '<button class="tambah-data-modal-danger" id="tdDeleteConfirmBtn">Hapus</button>' +
    "</div></div>";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
  document.getElementById("tdDeleteCancelBtn").onclick = function () { overlay.remove(); };
  document.getElementById("tdDeleteConfirmBtn").onclick = function () {
    overlay.remove();
    if (typeof onConfirmDelete === "function") onConfirmDelete();
  };
}

function tdAnimateRemoveCard(el) {
  if (!el) return;
  el.classList.add("tambah-data-card-removing");
  setTimeout(function () { el.remove(); }, 220);
}

function tdBadgeTambahanHTML() { return '<span class="tambah-data-badge">TAMBAHAN</span>'; }

// =====================================================
// 8. LOGIKA SMART KEYBOARD TAMBAH DATA
// =====================================================

var activeTdInput = null;
var tdKeyboardMode = "qwerty";
var tdShiftActive = false;
var tdFlickStartX = 0, tdFlickStartY = 0;
var tdFlickKey = null;
var tdMultiTapActive = false;
var tdMultiTapBase = "";
var tdMultiTapIndex = 0;
var tdMultiTapPosition = -1;

const tdKanaFamilies = {
  "あ": ["あ", "い", "う", "え", "お"], "か": ["か", "き", "く", "け", "こ"],
  "さ": ["さ", "し", "す", "せ", "そ"], "た": ["た", "ち", "つ", "て", "と"],
  "な": ["な", "に", "ぬ", "ね", "の"], "は": ["は", "ひ", "ふ", "へ", "ほ"],
  "ま": ["ま", "み", "む", "め", "も"], "や": ["や", "", "ゆ", "", "よ"], 
  "ら": ["ら", "り", "る", "れ", "ろ"], "わ": ["わ", "", "を", "", "ん"],
  "ん": ["ん", "、", "。"] 
};

function tdTriggerHaptic(type = 'light') {
  if ('vibrate' in navigator) {
    if (type === 'light') navigator.vibrate(5);
    else if (type === 'medium') navigator.vibrate(12);
  }
}

function tdInjectKeyboardHTML() {
  if (document.getElementById("tdCustomKeyboard")) return;
  
  var html = `
    <!-- FLICK PREVIEW TAMBAH DATA -->
    <div id="tdFlickPreview" class="td-flick-preview">
      <div class="td-flick-char" id="tdFlickTop"></div>
      <div class="td-flick-char" id="tdFlickLeft"></div>
      <div class="td-flick-char" id="tdFlickCenter"></div>
      <div class="td-flick-char" id="tdFlickRight"></div>
      <div class="td-flick-char" id="tdFlickBottom"></div>
    </div>

    <!-- KEYBOARD TAMBAH DATA -->
    <div id="tdCustomKeyboard">
      <div id="tdKeyboardModeTitle" class="td-keyboard-mode-title">QWERTY INDONESIA</div>
      
      <!-- KANA MODE -->
      <div id="tdKanaKeyboard" class="td-kana-grid-layout" style="display:none;">
        <button class="td-key td-special" data-td-action="undo">↶</button>
        <button class="td-key td-kana-key" data-td-base="あ">あ</button>
        <button class="td-key td-kana-key" data-td-base="か">か</button>
        <button class="td-key td-kana-key" data-td-base="さ">さ</button>
        <button class="td-key td-delete-key" data-td-action="delete">⌫</button>
        <button class="td-key td-special" data-td-action="left">◀</button>
        <button class="td-key td-kana-key" data-td-base="た">た</button>
        <button class="td-key td-kana-key" data-td-base="な">な</button>
        <button class="td-key td-kana-key" data-td-base="は">は</button>
        <button class="td-key td-special" data-td-action="right">▶</button>
        <button class="td-key td-number-key" data-td-action="switch-number">123</button>
        <button class="td-key td-kana-key" data-td-base="ま">ま</button>
        <button class="td-key td-kana-key" data-td-base="や">や</button>
        <button class="td-key td-kana-key" data-td-base="ら">ら</button>
        <button class="td-key td-space-key" data-td-action="space">␣</button>
        <button class="td-key td-mode-key" data-td-action="switch-qwerty" style="font-size: 14px;">🌐 ID</button>
        <button class="td-key td-kana-key" data-td-base="わ">わ</button>
        <button class="td-key td-kana-key" data-td-base="ん">ん</button>
        <button class="td-key td-modifier-key" data-td-action="modifier">小/゛゜</button>
        <button class="td-key td-enter-key" data-td-action="enter" style="font-size: 19px;">↵</button>
      </div>

      <!-- NUMBER MODE -->
      <div id="tdNumberKeyboard" style="display:none;">
        <div class="td-keyboard-row td-num-4-col">
          <button class="td-key" data-td-char="1">1</button>
          <button class="td-key" data-td-char="2">2</button>
          <button class="td-key" data-td-char="3">3</button>
          <button class="td-key td-delete-key" data-td-action="delete">⌫</button>
        </div>
        <div class="td-keyboard-row td-num-4-col">
          <button class="td-key" data-td-char="4">4</button>
          <button class="td-key" data-td-char="5">5</button>
          <button class="td-key" data-td-char="6">6</button>
          <button class="td-key" data-td-char="-">-</button>
        </div>
        <div class="td-keyboard-row td-num-4-col">
          <button class="td-key" data-td-char="7">7</button>
          <button class="td-key" data-td-char="8">8</button>
          <button class="td-key" data-td-char="9">9</button>
          <button class="td-key td-space-key" data-td-action="space" style="font-size: 14px;">␣</button>
        </div>
        <div class="td-keyboard-row td-num-5-col">
          <button class="td-key td-mode-key" data-td-action="switch-kana" style="font-size: 12px;">🌐 JA</button>
          <button class="td-key" data-td-char=",">,</button>
          <button class="td-key" data-td-char="0">0</button>
          <button class="td-key" data-td-char=".">.</button>
          <button class="td-key td-enter-key" data-td-action="enter" style="font-size: 19px;">↵</button>
        </div>
      </div>

      <!-- QWERTY MODE -->
      <div id="tdQwertyKeyboard" style="display:none;">
        <div class="td-qwerty-row top">
          <button class="td-q-key" data-td-key="q">q</button><button class="td-q-key" data-td-key="w">w</button><button class="td-q-key" data-td-key="e">e</button><button class="td-q-key" data-td-key="r">r</button><button class="td-q-key" data-td-key="t">t</button><button class="td-q-key" data-td-key="y">y</button><button class="td-q-key" data-td-key="u">u</button><button class="td-q-key" data-td-key="i">i</button><button class="td-q-key" data-td-key="o">o</button><button class="td-q-key" data-td-key="p">p</button>
        </div>
        <div class="td-qwerty-row middle">
          <button class="td-q-key" data-td-key="a">a</button><button class="td-q-key" data-td-key="s">s</button><button class="td-q-key" data-td-key="d">d</button><button class="td-q-key" data-td-key="f">f</button><button class="td-q-key" data-td-key="g">g</button><button class="td-q-key" data-td-key="h">h</button><button class="td-q-key" data-td-key="j">j</button><button class="td-q-key" data-td-key="k">k</button><button class="td-q-key" data-td-key="l">l</button>
        </div>
        <div class="td-qwerty-row bottom">
          <button class="td-q-key td-q-special" id="tdShiftKey">⇧</button><button class="td-q-key" data-td-key="z">z</button><button class="td-q-key" data-td-key="x">x</button><button class="td-q-key" data-td-key="c">c</button><button class="td-q-key" data-td-key="v">v</button><button class="td-q-key" data-td-key="b">b</button><button class="td-q-key" data-td-key="n">n</button><button class="td-q-key" data-td-key="m">m</button><button class="td-q-key td-q-delete" data-td-action="delete">⌫</button>
        </div>
      </div>

      <!-- UNIVERSAL BOTTOM BAR -->
      <div class="td-keyboard-bottom" id="tdUniversalBottomBar" style="display:none;">
        <button class="td-bottom-key td-number-key" data-td-action="switch-number">123</button>
        <button class="td-bottom-key td-mode-key" data-td-action="switch-kana" style="font-size: 14px;">🌐 JA</button>
        <button class="td-bottom-key td-space-key" data-td-action="space">S P A C E</button>
        <button class="td-bottom-key td-key td-enter-key" data-td-action="enter" style="font-size: 19px;">↵</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
  tdInitKeyboardLogic();
}

function tdShowKeyboard() {
  var kbd = document.getElementById("tdCustomKeyboard");
  if (kbd && !kbd.classList.contains("keyboard-visible")) kbd.classList.add("keyboard-visible");
}

function tdHideKeyboard() {
  var kbd = document.getElementById("tdCustomKeyboard");
  if (kbd && kbd.classList.contains("keyboard-visible")) {
    kbd.classList.remove("keyboard-visible");
    tdStopAutoDelete();
  }
}

// Deteksi klik diluar input dan keyboard untuk menutup keyboard
document.addEventListener("pointerdown", function(e) {
  var kbd = document.getElementById("tdCustomKeyboard");
  if (kbd && kbd.classList.contains("keyboard-visible")) {
    var isInsideInput = activeTdInput && activeTdInput.contains(e.target);
    var isInsideKeyboard = kbd.contains(e.target);
    var isInsidePicker = e.target.closest('.tambah-data-picker-btn') || e.target.closest('.tambah-data-modal-overlay');
    var isSubmitBtn = e.target.closest('.tambah-data-submit') || e.target.closest('.tambah-data-add-btn') || e.target.closest('.tambah-data-remove-btn');
    if (!isInsideInput && !isInsideKeyboard && !isInsidePicker && !isSubmitBtn) {
      tdHideKeyboard();
    }
  }
});

function tdAttachKeyboardToInputs() {
  var inputs = document.querySelectorAll('#tdFormContainer .tambah-data-input, #tdFormContainer .tambah-data-textarea');
  for (var i = 0; i < inputs.length; i++) {
    // Matikan input default agar keyboard HP asli tidak muncul
    inputs[i].setAttribute('inputmode', 'none'); 

    inputs[i].addEventListener('focus', function() {
      activeTdInput = this;
      var id = (this.id || "").toLowerCase();
      var placeholder = (this.placeholder || "").toLowerCase();
      
      // Deteksi pintar: apakah ini input untuk bahasa Jepang?
      // Ganti bagian deteksi isJepang di dalam tdAttachKeyboardToInputs:
var isJepang = id.includes("jepang") || id.includes("kanji") || id.includes("kana") || 
               id.includes("kunyomi") || id.includes("onyomi") || 
               id.includes("pola") || id.includes("contoh") || 
               id.includes("judul") || id.includes("kata") || id.includes("baca") || 
               placeholder.includes("mis.") || placeholder.includes("父") || 
               placeholder.includes("ちち") || placeholder.includes("あたらしい");
      
      if (isJepang) tdSetKeyboardMode("kana");
      else tdSetKeyboardMode("qwerty");
      
      tdShowKeyboard();
      // Gulir agar input tidak tertutup keyboard
      setTimeout(() => { this.scrollIntoView({ behavior: "smooth", block: "center" }); }, 200);
    });
    
    inputs[i].addEventListener('click', function() {
      activeTdInput = this;
      tdShowKeyboard();
    });
  }
}

function tdGetCursorPosition() { return activeTdInput ? (activeTdInput.selectionStart ?? activeTdInput.value.length) : 0; }

function tdInsertText(text, isMultiTap = false) {
  if (!text || !activeTdInput) return; 
  tdTriggerHaptic('light');
  const value = activeTdInput.value;
  const start = activeTdInput.selectionStart ?? value.length;
  const end = activeTdInput.selectionEnd ?? value.length;
  activeTdInput.value = value.slice(0, start) + text + value.slice(end);
  const newPos = start + text.length;
  activeTdInput.focus();
  activeTdInput.setSelectionRange(newPos, newPos);
  if (!isMultiTap) tdMultiTapActive = false;
}

function tdReplaceLastMultiTap(newChar) {
  if (!activeTdInput) return;
  tdTriggerHaptic('light');
  const value = activeTdInput.value;
  const pos = activeTdInput.selectionStart ?? value.length;
  if (pos <= 0) return;
  const before = Array.from(value.slice(0, pos));
  before.pop();
  activeTdInput.value = before.join("") + newChar + value.slice(pos);
  const newPos = before.join("").length + newChar.length;
  activeTdInput.focus();
  activeTdInput.setSelectionRange(newPos, newPos);
}

function tdMoveCursor(direction) {
  if (!activeTdInput) return;
  tdTriggerHaptic('light'); tdMultiTapActive = false; 
  let start = activeTdInput.selectionStart ?? activeTdInput.value.length;
  let end = activeTdInput.selectionEnd ?? activeTdInput.value.length;
  if (direction === -1 && start > 0) { start -= 1; end = start; } 
  else if (direction === 1 && end < activeTdInput.value.length) { start += 1; end = start; }
  activeTdInput.focus(); activeTdInput.setSelectionRange(start, end);
}

function tdInsertEnter() { tdTriggerHaptic('medium'); tdInsertText("\n"); }

let tdDeleteInterval = null;
let tdDeleteTimeout = null;

function tdDeleteCharacter() {
  if (!activeTdInput) return;
  tdTriggerHaptic('medium'); tdMultiTapActive = false;
  const value = activeTdInput.value;
  const start = activeTdInput.selectionStart ?? value.length;
  const end = activeTdInput.selectionEnd ?? value.length;
  if (start !== end) {
    activeTdInput.value = value.slice(0, start) + value.slice(end);
    activeTdInput.setSelectionRange(start, start); return;
  }
  if (start <= 0) return;
  const before = Array.from(value.slice(0, start));
  before.pop();
  activeTdInput.value = before.join("") + value.slice(end);
  const newPos = before.join("").length;
  activeTdInput.setSelectionRange(newPos, newPos);
}

function tdStartAutoDelete() {
  tdDeleteCharacter();
  tdDeleteTimeout = setTimeout(() => {
    tdDeleteInterval = setInterval(() => {
      if (!activeTdInput || activeTdInput.value.length === 0) { tdStopAutoDelete(); return; }
      tdDeleteCharacter();
    }, 50); 
  }, 350);
}
function tdStopAutoDelete() { clearTimeout(tdDeleteTimeout); clearInterval(tdDeleteInterval); }

function tdHandleUndo() {
  tdTriggerHaptic('medium');
  if (tdMultiTapActive && tdGetCursorPosition() === tdMultiTapPosition) {
    const family = tdKanaFamilies[tdMultiTapBase];
    do { tdMultiTapIndex = (tdMultiTapIndex - 1 + family.length) % family.length; } while (family[tdMultiTapIndex] === ""); 
    tdReplaceLastMultiTap(family[tdMultiTapIndex]);
    tdMultiTapPosition = tdGetCursorPosition();
  } else { tdDeleteCharacter(); }
}

function tdGetFlickDirection(dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) return dx > 0 ? "right" : "left";
  return dy > 0 ? "down" : "up";
}

function tdGetKanaByDirection(base, direction) {
  const family = tdKanaFamilies[base] || [base, "", "", "", ""];
  if (direction === "tap") return family[0];
  if (direction === "left") return family[1] || family[0];
  if (direction === "up") return family[2] || family[0];
  if (direction === "right") return family[3] || family[0];
  if (direction === "down") return family[4] || family[0];
  return family[0];
}

function tdShowFlickPreview(base, direction, keyElement) {
  const flickPreview = document.getElementById("tdFlickPreview");
  const family = tdKanaFamilies[base] || [base, "", "", "", ""];
  document.getElementById("tdFlickCenter").textContent = family[0];
  document.getElementById("tdFlickLeft").textContent = family[1] || "";
  document.getElementById("tdFlickTop").textContent = family[2] || "";
  document.getElementById("tdFlickRight").textContent = family[3] || "";
  document.getElementById("tdFlickBottom").textContent = family[4] || "";
  document.querySelectorAll(".td-flick-char").forEach(el => el.classList.remove("active"));
  
  if (direction === "tap") document.getElementById("tdFlickCenter").classList.add("active");
  else if (direction === "left") document.getElementById("tdFlickLeft").classList.add("active");
  else if (direction === "up") document.getElementById("tdFlickTop").classList.add("active");
  else if (direction === "right") document.getElementById("tdFlickRight").classList.add("active");
  else if (direction === "down") document.getElementById("tdFlickBottom").classList.add("active");

  if (keyElement) {
    const rect = keyElement.getBoundingClientRect();
    flickPreview.style.left = (rect.left + rect.width / 2 - 72) + "px";
    flickPreview.style.top = (rect.top + rect.height / 2 - 72) + "px";
  }
  flickPreview.classList.add("show");
}

function tdFinishFlick() {
  if (tdFlickKey) tdFlickKey.classList.remove("pressed");
  tdFlickKey = null; document.getElementById("tdFlickPreview").classList.remove("show");
}

function tdSetKeyboardMode(mode) {
  tdKeyboardMode = mode; tdTriggerHaptic('light');
  document.getElementById("tdKanaKeyboard").style.display = mode === "kana" ? "grid" : "none";
  document.getElementById("tdQwertyKeyboard").style.display = mode === "qwerty" ? "block" : "none";
  document.getElementById("tdNumberKeyboard").style.display = mode === "number" ? "block" : "none";
  document.getElementById("tdUniversalBottomBar").style.display = mode === "qwerty" ? "grid" : "none";
  const title = document.getElementById("tdKeyboardModeTitle");
  if (mode === "kana") title.textContent = "KANA 12-KEY (JEPANG)";
  else if (mode === "qwerty") title.textContent = "QWERTY (INDONESIA)";
  else if (mode === "number") title.textContent = "ANGKA & SIMBOL";
}

let tdModifierCount = 0; let tdModifierTimer = null;
function tdApplyModifier() {
  const modEl = document.querySelector('.td-modifier-key');
  tdTriggerHaptic('medium'); tdModifierCount++; if (tdModifierCount > 3) tdModifierCount = 1;
  clearTimeout(tdModifierTimer);
  tdModifierTimer = setTimeout(() => { tdModifierCount = 0; if (modEl) modEl.textContent = "小/゛゜"; }, 1000);
  if (tdModifierCount === 1) { if (modEl) modEl.textContent = "゛ Daku"; tdReplaceLastCharacter({ "か":"が","き":"ぎ","く":"ぐ","け":"げ","こ":"ご", "さ":"ざ","し":"じ","す":"ず","せ":"ぜ","そ":"ぞ", "た":"だ","ち":"ぢ","つ":"づ","て":"で","と":"ど", "は":"ば","ひ":"び","ふ":"ぶ","へ":"べ","ほ":"ぼ" }); } 
  else if (tdModifierCount === 2) { if (modEl) modEl.textContent = "゜ Han"; tdReplaceLastCharacter({ "は":"ぱ","ひ":"ぴ","ふ":"ぷ","へ":"ぺ","ほ":"ぽ" }); } 
  else if (tdModifierCount === 3) { if (modEl) modEl.textContent = "小 Kecil"; tdReplaceLastCharacter({ "あ":"ぁ","い":"ぃ","う":"ぅ","え":"ぇ","お":"ぉ", "つ":"っ","や":"ゃ","ゆ":"ゅ","よ":"ょ","わ":"ゎ" }); }
}

function tdReplaceLastCharacter(replacements) {
  tdMultiTapActive = false; if (!activeTdInput) return;
  const value = activeTdInput.value; const position = activeTdInput.selectionStart ?? value.length;
  if (position <= 0) return;
  const chars = Array.from(value.slice(0, position)); const last = chars.pop();
  if (!replacements[last]) return;
  chars.push(replacements[last]); const before = chars.join("");
  activeTdInput.value = before + value.slice(position);
  activeTdInput.focus(); activeTdInput.setSelectionRange(before.length, before.length);
}

function tdUpdateShift() {
  const shiftBtn = document.getElementById("tdShiftKey");
  if (shiftBtn) shiftBtn.classList.toggle("td-shift-active", tdShiftActive);
  document.querySelectorAll(".td-q-key[data-td-key]").forEach(key => {
    key.textContent = tdShiftActive ? key.dataset.tdKey.toUpperCase() : key.dataset.tdKey;
  });
}

function tdInitKeyboardLogic() {
  document.querySelectorAll("[data-td-action='delete']").forEach(btn => {
    btn.addEventListener("pointerdown", (e) => { e.preventDefault(); btn.classList.add("pressed"); tdStartAutoDelete(); });
    btn.addEventListener("pointerup", (e) => { e.preventDefault(); btn.classList.remove("pressed"); tdStopAutoDelete(); });
    btn.addEventListener("pointerleave", () => { btn.classList.remove("pressed"); tdStopAutoDelete(); });
    btn.addEventListener("pointercancel", () => { btn.classList.remove("pressed"); tdStopAutoDelete(); });
  });

  document.querySelectorAll(".td-kana-key").forEach(key => {
    key.addEventListener("pointerdown", function(e) {
      e.preventDefault(); tdTriggerHaptic('light'); tdFlickKey = this; 
      tdFlickStartX = e.clientX; tdFlickStartY = e.clientY;
      this.classList.add("pressed"); tdShowFlickPreview(this.dataset.tdBase, "tap", tdFlickKey);
    });
    key.addEventListener("pointermove", function(e) {
      if (!tdFlickKey) return;
      const dx = e.clientX - tdFlickStartX, dy = e.clientY - tdFlickStartY;
      let dir = "tap"; if (Math.sqrt(dx*dx + dy*dy) >= 12) dir = tdGetFlickDirection(dx, dy);
      tdShowFlickPreview(this.dataset.tdBase, dir, tdFlickKey);
    });
    key.addEventListener("pointerup", function(e) {
      e.preventDefault(); if (!tdFlickKey) return;
      const dx = e.clientX - tdFlickStartX, dy = e.clientY - tdFlickStartY;
      let dir = "tap"; if (Math.abs(dx) > 12 || Math.abs(dy) > 12) dir = tdGetFlickDirection(dx, dy);
      const base = this.dataset.tdBase;
      if (dir === "tap") {
        if (tdMultiTapActive && tdMultiTapBase === base && tdGetCursorPosition() === tdMultiTapPosition) {
          const family = tdKanaFamilies[base];
          do { tdMultiTapIndex = (tdMultiTapIndex + 1) % family.length; } while (family[tdMultiTapIndex] === ""); 
          tdReplaceLastMultiTap(family[tdMultiTapIndex]); tdMultiTapPosition = tdGetCursorPosition();
        } else {
          tdMultiTapActive = true; tdMultiTapBase = base; tdMultiTapIndex = 0;
          tdInsertText(tdKanaFamilies[base][0], true); tdMultiTapPosition = tdGetCursorPosition();
        }
      } else { tdInsertText(tdGetKanaByDirection(base, dir)); }
      tdFinishFlick();
    });
    key.addEventListener("pointercancel", tdFinishFlick);
  });

  document.getElementById("tdCustomKeyboard").addEventListener("click", function(event) {
    const charKey = event.target.closest(".td-key[data-td-char], .td-bottom-key[data-td-char]");
    if (charKey) tdInsertText(charKey.dataset.tdChar);
    const actionKey = event.target.closest("[data-td-action]");
    if (actionKey) {
      const action = actionKey.dataset.tdAction;
      if (action === "enter") tdInsertEnter();
      if (action === "space") tdInsertText(" ");
      if (action === "undo") tdHandleUndo();
      if (action === "left") tdMoveCursor(-1);
      if (action === "right") tdMoveCursor(1);
      if (action === "switch-number") tdSetKeyboardMode("number");
      if (action === "switch-qwerty") tdSetKeyboardMode("qwerty");
      if (action === "switch-kana") tdSetKeyboardMode("kana");
      if (action === "modifier") tdApplyModifier();
    }
  });

  document.querySelectorAll(".td-q-key[data-td-key]").forEach(key => {
    key.addEventListener("click", function() {
      let char = this.dataset.tdKey; if (tdShiftActive) char = char.toUpperCase();
      tdInsertText(char); if (tdShiftActive) { tdShiftActive = false; tdUpdateShift(); }
    });
  });

  const shiftKey = document.getElementById("tdShiftKey");
  if (shiftKey) shiftKey.addEventListener("click", () => { tdTriggerHaptic('medium'); tdShiftActive = !tdShiftActive; tdUpdateShift(); });
}
