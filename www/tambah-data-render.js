// =====================================================
// DeX Gaku — tambah-data-render.js (V3 - Full Form)
// - Kotoba: Kanji + Kana + Penggunaan + Contoh Kalimat
// - Custom keyboard DIHAPUS, pakai keyboard HP native
// =====================================================

var tambahDataState = {
  kanjiKunyomiCount: 1,
  kanjiOnyomiCount: 1,
  kanjiContohCount: 1
};

var tdCurrentForm = "kotoba";
var isTdForceBack = false;

// =====================================================
// 1. MENU UTAMA TAMBAH DATA
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
  
  html += '<div class="td-filter-row">';
  html += '  <button class="td-filter-pill active" data-form="kotoba">Kotoba</button>';
  html += '  <button class="td-filter-pill" data-form="kanji">Kanji</button>';
  html += '  <button class="td-filter-pill" data-form="bunpo">Bunpo</button>';
  html += '</div>';

  html += '<div id="tdFormContainer" class="tambah-data-form-container"></div>';

  html += '<p class="tambah-data-info-text">';
  html += '💡 Data yang ditambahkan dari Menu tambah data atau Import bisa dihapus dengan cara menahan Card selama 2-3 detik.';
  html += '</p>';
  
  html += "</div></div>";
  container.innerHTML = html;

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
// 3. GET HTML FORMS
// =====================================================

function tdGetFormKotobaHTML() {
  var html = '<div class="tambah-data-form">';
  
  // Kanji (opsional)
  html += '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="tdKotobaKanji">Kanji <span class="td-label-optional">(Opsional)</span></label>';
  html += '<input type="text" class="tambah-data-input" id="tdKotobaKanji" placeholder="Contoh: 父">';
  html += '<p class="td-field-hint">Kosongkan jika kata ini tidak punya kanji</p>';
  html += '</div>';
  
  // Kana (wajib)
  html += '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="tdKotobaKana">Kana <span class="tambah-data-required">*</span></label>';
  html += '<input type="text" class="tambah-data-input" id="tdKotobaKana" placeholder="Contoh: ちち">';
  html += '</div>';
  
  // Arti (wajib)
  html += tdFieldText("tdKotobaArti", "Arti", true, "Contoh: ayah");
  
  // Romaji (opsional)
  html += tdFieldText("tdKotobaRomaji", "Romaji (Opsional)", false, "Contoh: chichi");
  
  // Penggunaan (opsional, textarea)
  html += '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="tdKotobaPenggunaan">Penggunaan <span class="td-label-optional">(Opsional)</span></label>';
  html += '<textarea class="tambah-data-input tambah-data-textarea" id="tdKotobaPenggunaan" placeholder="Contoh: Dipakai untuk menyebut ayah SENDIRI ke orang lain.&#10;Kalau menyebut ayah orang lain, gunakan お父さん (otousan)." rows="4"></textarea>';
  html += '<p class="td-field-hint">Tekan Enter untuk baris baru</p>';
  html += '</div>';
  
  // Contoh Kalimat (opsional, repeatable)
  html += tdBuildKotobaContohGroup();
  
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

// Blok Contoh Kalimat untuk Kotoba (repeatable, mirip kanji)
function tdBuildKotobaContohGroup() {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label">Contoh Kalimat <span class="td-label-optional">(Opsional)</span></label>';
  html += '<div class="tambah-data-repeat-list" id="tdKotobaContohList">';
  html += tdKotobaContohRowHTML(1);
  html += '</div>';
  html += '<div class="tambah-data-action-group">';
  html += '<button type="button" class="tambah-data-add-btn" data-add-target="tdKotobaContohList" data-add-kind="kotoba-contoh">+ Tambah Contoh</button>';
  html += '<button type="button" class="tambah-data-remove-btn" data-remove-target="tdKotobaContohList">- Kurangi</button>';
  html += '</div>';
  html += '</div>';
  return html;
}

function tdKotobaContohRowHTML(num) {
  var n = num || 1;
  var html = '<div class="tambah-data-example-row tambah-data-kotoba-contoh-row">';
  html += '<div class="td-contoh-label">Contoh #' + n + '</div>';
  html += '<input type="text" class="tambah-data-input td-contoh-jp" placeholder="Kalimat Jepang (mis. 父は会社員です。)">';
  html += '<input type="text" class="tambah-data-input td-contoh-rm" placeholder="Romaji (mis. Chichi wa kaishain desu.)">';
  html += '<input type="text" class="tambah-data-input td-contoh-id" placeholder="Arti (mis. Ayah saya pegawai perusahaan.)">';
  html += '</div>';
  return html;
}

function tdGetFormKanjiHTML() {
  tambahDataState.kanjiKunyomiCount = 1;
  tambahDataState.kanjiOnyomiCount = 1;
  tambahDataState.kanjiContohCount = 1;

  var html = '<div class="tambah-data-form">';
  
  html += tdFieldText("tdKanjiKanji", "Kanji", true, "Contoh: 新");
  html += tdFieldText("tdKanjiArti", "Arti", true, "Contoh: baru");
  
  html += '<details class="tambah-data-details">';
  html += '<summary class="tambah-data-details-summary">Detail Tambahan (Opsional)</summary>';
  html += '<div class="tambah-data-details-body">';
  html += tdFieldText("tdKanjiArtiEn", "Arti (English)", false, "Contoh: new");
  html += tdFieldText("tdKanjiRadikal", "Radikal", false, "Contoh: 斤 (kapak)");
  html += tdFieldText("tdKanjiGoresan", "Jumlah Goresan", false, "Contoh: 13");
  html += tdFieldTextarea("tdKanjiMnemonik", "Jembatan Ingatan", false, "Contoh: Kapak di dekat pohon...");
  html += tdFieldTextarea("tdKanjiDeskripsi", "Deskripsi", false, "Contoh: Kanji dasar untuk 'baru'...");
  html += '</div></details>';
  
  html += tdBuildRepeatableGroup("tdKanjiKunyomiList", "Kunyomi", "kunyomi", "Contoh: あたらしい");
  html += tdBuildRepeatableGroup("tdKanjiOnyomiList", "Onyomi", "onyomi", "Contoh: シン");
  html += tdBuildRepeatableExampleGroup();

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
    tdAttachCategoryPicker("tdKotobaKategori", kotobaOptions, function (catKey) {
      tdRevealKotobaSubkategori(catKey);
    });
    tdAttachKotobaContohButtonEvents();
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
// 4. SUBMIT LOGIC
// =====================================================

function tdSubmitKotoba() {
  var kanji = document.getElementById("tdKotobaKanji").value.trim();
  var kana = document.getElementById("tdKotobaKana").value.trim();
  var arti = document.getElementById("tdKotobaArti").value.trim();
  var romaji = document.getElementById("tdKotobaRomaji").value.trim();
  var penggunaan = document.getElementById("tdKotobaPenggunaan").value.trim();
  var kategoriKey = tdGetPickerValue("tdKotobaKategori");
  var subkategori = tdGetPickerValue("tdKotobaSubkat");

  if (!kana || !arti || !kategoriKey) {
    tdShowValidationToast("Kana, Arti, dan Kategori wajib diisi.");
    return;
  }
  
  var subOptions = tdGetSubkategoriOptions(kategoriKey);
  if (subOptions.length > 0 && !subkategori) {
    tdShowValidationToast("Subkategori wajib dipilih.");
    return;
  }
  
  // Kumpulkan contoh kalimat
  var contohRows = document.querySelectorAll("#tdKotobaContohList .tambah-data-kotoba-contoh-row");
  var contohList = [];
  for (var i = 0; i < contohRows.length; i++) {
    var jp = contohRows[i].querySelector(".td-contoh-jp").value.trim();
    var rm = contohRows[i].querySelector(".td-contoh-rm").value.trim();
    var id = contohRows[i].querySelector(".td-contoh-id").value.trim();
    if (jp) contohList.push({ jp: jp, rm: rm, id: id });
  }
  
  if (typeof userDataTambahKotoba === "function") {
    var result = userDataTambahKotoba({
      kanji: kanji,
      kana: kana,
      arti: arti,
      romaji: romaji,
      penggunaan: penggunaan,
      contoh: contohList,
      kategoriKey: kategoriKey,
      subkategori: subkategori || null
    });
    
    if (!result.ok) {
      if (result.reason === "duplicate") tdShowDuplicateModal();
      else if (result.reason === "kana-required") tdShowValidationToast("Kana wajib diisi.");
      else tdShowValidationToast("Data tidak valid. Periksa kembali isian Anda.");
      return;
    }
  }
  tdShowSuccessModal("kotoba");
}

function tdSubmitKanji() {
  var kanjiChar = document.getElementById("tdKanjiKanji").value.trim();
  var arti = document.getElementById("tdKanjiArti").value.trim();
  var kategori = tdGetPickerValue("tdKanjiKategori");
  if (!kanjiChar || !arti || !kategori) {
    tdShowValidationToast("Kanji, Arti, dan Kategori wajib diisi.");
    return;
  }
  
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
  var judul = document.getElementById("tdBunpoJudul").value.trim();
  var sub = document.getElementById("tdBunpoSub").value.trim();
  var fungsi = document.getElementById("tdBunpoFungsi").value.trim();
  var pola = document.getElementById("tdBunpoPola").value.trim();
  var contohKalimat = document.getElementById("tdBunpoContoh").value.trim();
  var contohNegatif = document.getElementById("tdBunpoNegatif").value.trim();
  var kategoriKey = tdGetPickerValue("tdBunpoKategori");

  if (!judul || !sub || !fungsi || !pola || !kategoriKey) {
    tdShowValidationToast("Bunpo, Penjelasan singkat, Fungsi, Pola, dan Kategori wajib diisi.");
    return;
  }
  if (typeof userDataTambahBunpo === "function") {
    var result = userDataTambahBunpo({
      judul: judul, sub: sub, fungsi: fungsi, pola: pola,
      contohKalimat: contohKalimat, contohNegatif: contohNegatif,
      kategoriKey: kategoriKey
    });
    if (!result.ok) {
      if (result.reason === "duplicate") tdShowDuplicateModal();
      else tdShowValidationToast("Data tidak valid.");
      return;
    }
  }
  tdShowSuccessModal("bunpo");
}

// =====================================================
// 5. HELPER FIELD FORM
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
  if (list.children.length > 1) removeBtn.style.display = 'block';
  else removeBtn.style.display = 'none';
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
      tdUpdateRemoveButtonVisibility(targetId);
    });
  }

  var removeBtns = document.querySelectorAll(".tambah-data-remove-btn");
  for (var j = 0; j < removeBtns.length; j++) {
    removeBtns[j].addEventListener("click", function () {
      var targetId = this.getAttribute("data-remove-target");
      var list = document.getElementById(targetId);
      if (!list || list.children.length <= 1) return;
      list.removeChild(list.lastChild);
      tdUpdateRemoveButtonVisibility(targetId);
    });
  }
}

// Khusus untuk Kotoba — tombol tambah contoh kalimat
function tdAttachKotobaContohButtonEvents() {
  var addBtn = document.querySelector('.tambah-data-add-btn[data-add-target="tdKotobaContohList"]');
  var removeBtn = document.querySelector('.tambah-data-remove-btn[data-remove-target="tdKotobaContohList"]');
  
  if (addBtn) {
    addBtn.addEventListener("click", function () {
      var list = document.getElementById("tdKotobaContohList");
      if (!list) return;
      var nextNum = list.children.length + 1;
      var wrap = document.createElement("div");
      wrap.innerHTML = tdKotobaContohRowHTML(nextNum);
      list.appendChild(wrap.firstChild);
      tdUpdateRemoveButtonVisibility("tdKotobaContohList");
    });
  }
  
  if (removeBtn) {
    removeBtn.addEventListener("click", function () {
      var list = document.getElementById("tdKotobaContohList");
      if (!list || list.children.length <= 1) return;
      list.removeChild(list.lastChild);
      tdUpdateRemoveButtonVisibility("tdKotobaContohList");
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
      if (typeof onSelect === "function") onSelect(value, label);
      overlay.remove();
    });
  }
}

function tdFieldText(id, label, required, placeholder) {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="' + id + '">' + label;
  if (required) html += ' <span class="tambah-data-required">*</span>';
  html += "</label>";
  html += '<input type="text" class="tambah-data-input" id="' + id + '" placeholder="' + placeholder + '">';
  html += "</div>";
  return html;
}

function tdFieldTextarea(id, label, required, placeholder) {
  var html = '<div class="tambah-data-field">';
  html += '<label class="tambah-data-label" for="' + id + '">' + label;
  if (required) html += ' <span class="tambah-data-required">*</span>';
  html += "</label>";
  html += '<textarea class="tambah-data-input tambah-data-textarea" id="' + id + '" placeholder="' + placeholder + '" rows="2"></textarea>';
  html += "</div>";
  return html;
}

// =====================================================
// 6. SUBKATEGORI PICKER
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

// =====================================================
// 7. POPUP: VALIDASI, DUPLIKAT, SUKSES
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
// 8. LONG PRESS UNTUK HAPUS DATA USER
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