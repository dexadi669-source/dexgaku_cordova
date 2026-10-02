// =====================================================
// DeX Gaku — import-export-render.js
// Logic Import & Export data tambahan (Kotoba/Kanji/Bunpo)
// yang tersimpan di localStorage lewat user-data-store.js.
//
// PENTING:
// - HANYA data tambahan user (dexgaku_userData) yang di-export/
//   import. Data DEFAULT dari file *-data.js bawaan aplikasi
//   tidak pernah disertakan maupun ditimpa.
// - Item hasil IMPORT ditandai source:"import" (bukan "user")
//   supaya tampil beda warna (ungu) dari data yang diketik
//   manual lewat Tambah Data (oranye), tapi tetap bisa dihapus
//   lewat long-press yang sama (lihat perubahan di
//   tdAttachLongPress, tambah-data-render.js).
// - Semua popup di sini custom (bukan alert()/confirm()),
//   konsisten dengan pola popup fitur lain di aplikasi.
// =====================================================

var IE_SCOPE_LABELS = { kotoba: "Kotoba", kanji: "Kanji", bunpo: "Bunpo", all: "Semua Data" };

// =====================================================
// 1. PENANDA WARNA/BADGE GENERIK (dipakai kosakata-render.js,
//    kanji-render.js, bunpo-render.js untuk kartu & detail)
// =====================================================

/**
 * @param {string} [source] - "user" | "import" | undefined (data default)
 * @returns {{isMarked:boolean, attr:string, textClass:string, badge:string}}
 */
function ieMarkerInfo(source) {
  if (source === "import") {
    return {
      isMarked: true,
      attr: ' data-td-source="import"',
      textClass: " ie-text-import",
      badge: '<span class="ie-badge-import">IMPOR</span>'
    };
  }
  if (source === "user") {
    return {
      isMarked: true,
      attr: ' data-td-source="user"',
      textClass: " tambah-data-text-user",
      badge: '<span class="tambah-data-badge">TAMBAHAN</span>'
    };
  }
  return { isMarked: false, attr: "", textClass: "", badge: "" };
}

// =====================================================
// 2. EXPORT
// =====================================================

/**
 * @param {"kotoba"|"kanji"|"bunpo"|"all"} scope
 */
function ieDoExport(scope) {
  if (typeof userDataBacaSemua !== "function") return;
  var all = userDataBacaSemua();

  var data = {};
  var totalItems = 0;
  if (scope === "all" || scope === "kotoba") { data.kotoba = all.kotoba; totalItems += all.kotoba.length; }
  if (scope === "all" || scope === "kanji") { data.kanji = all.kanji; totalItems += all.kanji.length; }
  if (scope === "all" || scope === "bunpo") { data.bunpo = all.bunpo; totalItems += all.bunpo.length; }

  if (totalItems === 0) {
    ieShowInfoModal("Tidak Ada Data", "Belum ada data " + IE_SCOPE_LABELS[scope] + " yang ditambahkan lewat menu Tambah Data, jadi tidak ada yang bisa di-export.");
    return;
  }

  var exportPayload = {
    app: "DeX Gaku",
    version: "1.0.0",
    exportedAt: new Date().toISOString(),
    scope: scope,
    data: data
  };

  var json = JSON.stringify(exportPayload, null, 2);
  var blob = new Blob([json], { type: "application/json;charset=utf-8" });
  var url = URL.createObjectURL(blob);

  var link = document.createElement("a");
  link.href = url;
  link.download = "DeX-Gaku-" + IE_SCOPE_LABELS[scope].replace(/\s+/g, "-") + "-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  ieShowInfoModal("Export Berhasil", totalItems + " data " + IE_SCOPE_LABELS[scope] + " berhasil di-export ke file JSON.");
}

// =====================================================
// 3. IMPORT
// =====================================================

/**
 * @param {"kotoba"|"kanji"|"bunpo"|"all"} scope
 */
function ieDoImport(scope) {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,application/json";
  input.style.display = "none";
  document.body.appendChild(input);

  input.addEventListener("change", function () {
    var file = input.files[0];
    if (!file) {
      document.body.removeChild(input);
      return;
    }

    var reader = new FileReader();
    reader.onload = function (event) {
      document.body.removeChild(input);
      var parsed;
      try {
        parsed = JSON.parse(event.target.result);
      } catch (e) {
        ieShowInfoModal("Gagal Import", "File yang dipilih bukan file JSON yang valid.");
        return;
      }
      if (!parsed || typeof parsed !== "object" || !parsed.data || typeof parsed.data !== "object") {
        ieShowInfoModal("Gagal Import", "Format file tidak dikenali. Pastikan ini adalah file backup DeX Gaku.");
        return;
      }
      ieProcessImportedData(parsed.data, scope);
    };
    reader.onerror = function () {
      document.body.removeChild(input);
      ieShowInfoModal("Gagal Import", "Terjadi kesalahan saat membaca file.");
    };
    reader.readAsText(file, "UTF-8");
  });

  input.click();
}

/**
 * Memproses object `data` dari file JSON hasil export (atau backup
 * manual dengan struktur serupa): { kotoba:[], kanji:[], bunpo:[] }.
 * Item duplikat (dicek dengan aturan identitas yang sama seperti
 * Tambah Data) otomatis dilewati, bukan menghentikan proses.
 * @param {Object} data
 * @param {"kotoba"|"kanji"|"bunpo"|"all"} scope
 */
function ieProcessImportedData(data, scope) {
  var result = { added: 0, duplicate: 0, invalid: 0 };

  if ((scope === "all" || scope === "kotoba") && Array.isArray(data.kotoba)) {
    data.kotoba.forEach(function (raw) {
      if (!raw || !raw.kata || !raw.arti || !raw.kategoriKey) { result.invalid++; return; }
      var r = userDataTambahKotoba({ kata: raw.kata, romaji: raw.romaji, arti: raw.arti, kategoriKey: raw.kategoriKey }, "import");
      if (r.ok) result.added++; else result.duplicate++;
    });
  }

  if ((scope === "all" || scope === "kanji") && Array.isArray(data.kanji)) {
    data.kanji.forEach(function (raw) {
      if (!raw || !raw.kanji || !raw.arti || !raw.kategori) { result.invalid++; return; }
      var kunyomiArr = typeof raw.kunyomi === "string" ? raw.kunyomi.split("・").filter(Boolean) : (raw.kunyomi || []);
      var onyomiArr = typeof raw.onyomi === "string" ? raw.onyomi.split("・").filter(Boolean) : (raw.onyomi || []);
      var r = userDataTambahKanji({ kanji: raw.kanji, arti: raw.arti, kunyomi: kunyomiArr, onyomi: onyomiArr, contoh: raw.contoh || [], kategori: raw.kategori }, "import");
      if (r.ok) result.added++; else result.duplicate++;
    });
  }

  if ((scope === "all" || scope === "bunpo") && Array.isArray(data.bunpo)) {
    data.bunpo.forEach(function (raw) {
      if (!raw || !raw.judul || !raw.kategoriKey) { result.invalid++; return; }
      var contohKalimat = raw.contoh && raw.contoh.kanji && raw.contoh.kanji !== "—" ? raw.contoh.kanji : "";
      var contohNegatif = raw.negatif && raw.negatif.kanji && raw.negatif.kanji !== "—" ? raw.negatif.kanji : "";
      var r = userDataTambahBunpo({ judul: raw.judul, sub: raw.sub, fungsi: raw.fungsi, pola: raw.pola, contohKalimat: contohKalimat, contohNegatif: contohNegatif, kategoriKey: raw.kategoriKey }, "import");
      if (r.ok) result.added++; else result.duplicate++;
    });
  }

  ieShowImportResultModal(result);
}

// =====================================================
// 4. POPUP CUSTOM (bukan alert()/confirm())
// =====================================================

function ieShowInfoModal(title, desc) {
  var overlay = document.createElement("div");
  overlay.id = "ieInfoOverlay";
  overlay.className = "tambah-data-modal-overlay";
  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<div class="tambah-data-modal-icon" style="background:#e2f0fb;">&#8505;&#65039;</div>' +
    '<h3 class="tambah-data-modal-title">' + title + "</h3>" +
    '<p class="tambah-data-modal-desc">' + desc + "</p>" +
    '<button class="tambah-data-modal-ok" id="ieInfoOkBtn">OK</button>' +
    "</div>";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
  document.getElementById("ieInfoOkBtn").onclick = function () { overlay.remove(); };
}

function ieShowImportResultModal(result) {
  var overlay = document.createElement("div");
  overlay.id = "ieResultOverlay";
  overlay.className = "tambah-data-modal-overlay";

  var isSuccess = result.added > 0;
  var descParts = [];
  descParts.push(result.added + " data berhasil ditambahkan");
  if (result.duplicate > 0) descParts.push(result.duplicate + " data dilewati karena sudah ada");
  if (result.invalid > 0) descParts.push(result.invalid + " data tidak valid dilewati");

  overlay.innerHTML =
    '<div class="tambah-data-modal">' +
    '<div class="tambah-data-modal-icon ' + (isSuccess ? "success" : "warn") + '">' + (isSuccess ? "&#9989;" : "&#9888;&#65039;") + "</div>" +
    '<h3 class="tambah-data-modal-title">' + (isSuccess ? "Import Selesai" : "Tidak Ada Data Baru") + "</h3>" +
    '<p class="tambah-data-modal-desc">' + descParts.join(", ") + ".</p>" +
    '<button class="tambah-data-modal-ok" id="ieResultOkBtn">OK</button>' +
    "</div>";
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
  document.getElementById("ieResultOkBtn").onclick = function () { overlay.remove(); };
}
