// =====================================================
// DeX Gaku — user-data-store.js (V4 - Kotoba Lengkap)
// UPDATE V4:
// - Kotoba: field Penggunaan + Contoh Kalimat (array)
// - Konversi \n → <br> otomatis untuk penggunaan
// - Semua field baru OPSIONAL
// =====================================================

var USER_DATA_STORAGE_KEY = "dexgaku_userData";
var USER_KANJI_NO_OFFSET = 100000;

// =====================================================
// 1. BACA / SIMPAN localStorage
// =====================================================

function userDataBacaSemua() {
  try {
    var raw = localStorage.getItem(USER_DATA_STORAGE_KEY);
    if (!raw) return { kotoba: [], kanji: [], bunpo: [] };
    var parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { kotoba: [], kanji: [], bunpo: [] };
    return {
      kotoba: Array.isArray(parsed.kotoba) ? parsed.kotoba : [],
      kanji: Array.isArray(parsed.kanji) ? parsed.kanji : [],
      bunpo: Array.isArray(parsed.bunpo) ? parsed.bunpo : []
    };
  } catch (e) {
    return { kotoba: [], kanji: [], bunpo: [] };
  }
}

function userDataSimpanSemua(dataObj) {
  try {
    localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(dataObj));
    return true;
  } catch (e) {
    return false;
  }
}

// =====================================================
// 2. HELPER: KONVERSI KANA ↔ KATAKANA ↔ ROMAJI
// =====================================================

var TD_KANA_TO_ROMAJI = {
  "あ":"a","い":"i","う":"u","え":"e","お":"o",
  "か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko",
  "さ":"sa","し":"shi","す":"su","せ":"se","そ":"so",
  "た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to",
  "な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no",
  "は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
  "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo",
  "や":"ya","ゆ":"yu","よ":"yo",
  "ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro",
  "わ":"wa","を":"wo","ん":"n",
  "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go",
  "ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo",
  "だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do",
  "ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo",
  "ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po",
  "ゃ":"ya","ゅ":"yu","ょ":"yo","っ":"",
  "ア":"a","イ":"i","ウ":"u","エ":"e","オ":"o",
  "カ":"ka","キ":"ki","ク":"ku","ケ":"ke","コ":"ko",
  "サ":"sa","シ":"shi","ス":"su","セ":"se","ソ":"so",
  "タ":"ta","チ":"chi","ツ":"tsu","テ":"te","ト":"to",
  "ナ":"na","ニ":"ni","ヌ":"nu","ネ":"ne","ノ":"no",
  "ハ":"ha","ヒ":"hi","フ":"fu","ヘ":"he","ホ":"ho",
  "マ":"ma","ミ":"mi","ム":"mu","メ":"me","モ":"mo",
  "ヤ":"ya","ユ":"yu","ヨ":"yo",
  "ラ":"ra","リ":"ri","ル":"ru","レ":"re","ロ":"ro",
  "ワ":"wa","ヲ":"wo","ン":"n",
  "ー":"", "・":"", "　":""
};

function tdKanaToRomajiSimple(kana) {
  if (!kana) return "";
  var result = "";
  for (var i = 0; i < kana.length; i++) {
    var ch = kana.charAt(i);
    result += TD_KANA_TO_ROMAJI[ch] !== undefined ? TD_KANA_TO_ROMAJI[ch] : ch;
  }
  return result.toLowerCase();
}

function tdHiraganaToKatakana(str) {
  if (!str) return "";
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= 0x3041 && code <= 0x3096) {
      result += String.fromCharCode(code + 0x60);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

function tdKatakanaToHiragana(str) {
  if (!str) return "";
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= 0x30A1 && code <= 0x30F6) {
      result += String.fromCharCode(code - 0x60);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

function tdIsPureKana(str) {
  if (!str) return false;
  return /^[\u3041-\u3096\u30A1-\u30F6\u30FC・\s]+$/.test(str);
}

function tdHasKanji(str) {
  if (!str) return false;
  return /[\u4E00-\u9FFF\u3400-\u4DBF]/.test(str);
}

function tdParseKotobaString(kataStr) {
  var raw = String(kataStr || "").trim();
  var kanji = "";
  var kana = "";
  var match = raw.match(/^(.+?)\s*[（(](.+?)[)）]\s*$/);
  if (match) {
    kanji = match[1].trim();
    kana = match[2].trim();
  } else {
    if (tdHasKanji(raw)) {
      kanji = raw;
      kana = "";
    } else {
      kanji = "";
      kana = raw;
    }
  }
  return { kanji: kanji, kana: kana, raw: raw };
}

function tdNormalizeKotobaForms(kanjiInput, kanaInput) {
  var kanji = String(kanjiInput || "").trim();
  var kana = String(kanaInput || "").trim();
  var forms = {};
  var candidates = [];
  if (kanji) candidates.push(kanji);
  if (kana) candidates.push(kana);
  if (kanji && kana) candidates.push(kanji + " (" + kana + ")");
  for (var i = 0; i < candidates.length; i++) {
    var c = candidates[i];
    if (!c) continue;
    forms[c] = true;
    forms[c.toLowerCase()] = true;
    if (tdIsPureKana(c)) {
      var kata = tdHiraganaToKatakana(c);
      var hira = tdKatakanaToHiragana(c);
      var romaji = tdKanaToRomajiSimple(c);
      forms[kata] = true;
      forms[hira] = true;
      forms[romaji] = true;
      forms[romaji.toLowerCase()] = true;
    }
  }
  return forms;
}

// =====================================================
// 3. VALIDASI DUPLIKAT KETAT
// =====================================================

function userDataIsDuplicateKotoba(kanjiInput, kanaInput) {
  if (kanaInput === undefined) {
    var parsed = tdParseKotobaString(kanjiInput);
    kanjiInput = parsed.kanji;
    kanaInput = parsed.kana;
  }
  var inputForms = tdNormalizeKotobaForms(kanjiInput, kanaInput);
  var inputKeys = Object.keys(inputForms);
  if (inputKeys.length === 0) return false;
  if (typeof KOSAKATA_CATEGORIES === "undefined") return false;
  for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
    var cat = KOSAKATA_CATEGORIES[c];
    var allKata = [];
    if (cat.subkategori && cat.subkategori.length) {
      for (var s = 0; s < cat.subkategori.length; s++) {
        if (cat.subkategori[s].kata) allKata = allKata.concat(cat.subkategori[s].kata);
      }
    }
    if (cat.kata && cat.kata.length) allKata = allKata.concat(cat.kata);
    for (var i = 0; i < allKata.length; i++) {
      var existing = tdParseKotobaString(allKata[i].kata);
      var existingForms = tdNormalizeKotobaForms(existing.kanji, existing.kana);
      for (var k = 0; k < inputKeys.length; k++) {
        if (existingForms[inputKeys[k]]) return true;
      }
    }
  }
  return false;
}

function userDataIsDuplicateKanji(kanjiChar) {
  var target = String(kanjiChar).trim();
  if (!target) return false;
  if (typeof KANJI_DATA === "undefined") return false;
  for (var i = 0; i < KANJI_DATA.length; i++) {
    if (KANJI_DATA[i].kanji === target) return true;
  }
  return false;
}

function userDataIsDuplicateBunpo(judulBunpo) {
  var target = String(judulBunpo).trim();
  if (!target) return false;
  if (typeof BUNPO_CATEGORIES === "undefined") return false;
  for (var c = 0; c < BUNPO_CATEGORIES.length; c++) {
    var materiList = BUNPO_CATEGORIES[c].materi;
    if (!materiList) continue;
    for (var i = 0; i < materiList.length; i++) {
      if (materiList[i].judul === target) return true;
    }
  }
  return false;
}

// =====================================================
// HELPER: Escape HTML + convert \n → <br>
// =====================================================
function tdEscapeAndConvertNewline(str) {
  if (!str) return "";
  // Escape dulu (kecuali kita ingin <br> dari user)
  var escaped = String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  // Convert \n → <br>
  return escaped.replace(/\n/g, "<br>");
}

// =====================================================
// 4. TAMBAH DATA BARU
// =====================================================

/**
 * @param {Object} entry {
 *   kanji, kana, arti, romaji?, penggunaan?, contoh?[],
 *   kategoriKey, subkategori
 * }
 *   contoh[] = array { jp, rm, id } — field kosong akan difilter
 */
function userDataTambahKotoba(entry, source) {
  var kanjiInput = String(entry.kanji || "").trim();
  var kanaInput = String(entry.kana || "").trim();
  
  if (!kanaInput) {
    return { ok: false, reason: "kana-required" };
  }
  
  if (userDataIsDuplicateKotoba(kanjiInput, kanaInput)) {
    return { ok: false, reason: "duplicate" };
  }
  
  var kataGabung = kanjiInput ? kanjiInput + " (" + kanaInput + ")" : kanaInput;
  
  var targetCat = null;
  if (typeof KOSAKATA_CATEGORIES !== "undefined") {
    for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
      if (KOSAKATA_CATEGORIES[c].key === entry.kategoriKey) {
        targetCat = KOSAKATA_CATEGORIES[c];
        break;
      }
    }
  }
  
  var hasSubkat = !!(targetCat && targetCat.subkategori && targetCat.subkategori.length);
  var subkategoriName = entry.subkategori ? String(entry.subkategori).trim() : "";
  
  if (hasSubkat && !subkategoriName) {
    return { ok: false, reason: "subkategori-required" };
  }
  
  if (hasSubkat && subkategoriName) {
    var subFound = false;
    for (var s = 0; s < targetCat.subkategori.length; s++) {
      if (targetCat.subkategori[s].nama === subkategoriName) {
        subFound = true;
        break;
      }
    }
    if (!subFound) {
      return { ok: false, reason: "subkategori-invalid" };
    }
  }
  
  // Proses penggunaan: convert \n → <br> + escape HTML
  var penggunaanRaw = entry.penggunaan ? String(entry.penggunaan).trim() : "";
  var penggunaanFinal = penggunaanRaw ? tdEscapeAndConvertNewline(penggunaanRaw) : "";
  
  // Proses contoh kalimat: filter yang kosong semua
  var contohList = [];
  if (entry.contoh && entry.contoh.length) {
    for (var ce = 0; ce < entry.contoh.length; ce++) {
      var cObj = entry.contoh[ce] || {};
      var jp = String(cObj.jp || "").trim();
      var rm = String(cObj.rm || "").trim();
      var id = String(cObj.id || "").trim();
      // Minimal harus ada JP
      if (jp) {
        contohList.push({ jp: jp, rm: rm, id: id });
      }
    }
  }
  
  var all = userDataBacaSemua();
  var item = {
    id: "uk_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    source: source || "user",
    type: "kotoba",
    kata: kataGabung,
    kanji: kanjiInput,
    kana: kanaInput,
    romaji: entry.romaji ? entry.romaji.trim() : "",
    arti: entry.arti.trim(),
    penggunaan: penggunaanFinal,
    contoh: contohList,
    kategoriKey: entry.kategoriKey,
    subkategori: subkategoriName || null
  };
  all.kotoba.push(item);
  userDataSimpanSemua(all);
  userDataInjectKotobaItem(item);
  return { ok: true, item: item };
}

function userDataTambahKanji(entry, source) {
  if (userDataIsDuplicateKanji(entry.kanji)) {
    return { ok: false, reason: "duplicate" };
  }
  var all = userDataBacaSemua();
  var noBaru = USER_KANJI_NO_OFFSET + all.kanji.length + 1;
  var item = {
    id: "ukj_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    source: source || "user",
    no: noBaru,
    kanji: entry.kanji.trim(),
    kunyomi: (entry.kunyomi || []).filter(Boolean).join("・"),
    onyomi: (entry.onyomi || []).filter(Boolean).join("・"),
    arti: entry.arti.trim(),
    artiEn: entry.artiEn ? entry.artiEn.trim() : "",
    kategori: entry.kategori,
    radikal: entry.radikal ? entry.radikal.trim() : "",
    goresan: (entry.goresan !== undefined && entry.goresan !== null && entry.goresan !== "")
              ? parseInt(entry.goresan, 10) : null,
    mnemonik: entry.mnemonik ? entry.mnemonik.trim() : "",
    deskripsi: entry.deskripsi ? entry.deskripsi.trim() : "",
    contoh: (entry.contoh || []).filter(function (c) { return c && c.kata; })
  };
  all.kanji.push(item);
  userDataSimpanSemua(all);
  userDataInjectKanjiItem(item);
  return { ok: true, item: item };
}

function userDataTambahBunpo(entry, source) {
  if (userDataIsDuplicateBunpo(entry.judul)) {
    return { ok: false, reason: "duplicate" };
  }
  var all = userDataBacaSemua();
  var item = {
    id: "ub_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    source: source || "user",
    judul: entry.judul.trim(),
    sub: entry.sub ? entry.sub.trim() : "",
    preview: entry.pola ? entry.pola.trim() : entry.judul.trim(),
    pola: entry.pola ? entry.pola.trim() : "",
    fungsi: entry.fungsi ? entry.fungsi.trim() : "",
    contoh: {
      kanji: entry.contohKalimat ? entry.contohKalimat.trim() : "—",
      hiragana: "—", romaji: "—", arti: "—"
    },
    negatif: {
      kanji: entry.contohNegatif ? entry.contohNegatif.trim() : "—",
      hiragana: "—", romaji: "—", arti: "—"
    },
    kategoriKey: entry.kategoriKey
  };
  all.bunpo.push(item);
  userDataSimpanSemua(all);
  userDataInjectBunpoItem(item);
  return { ok: true, item: item };
}

// =====================================================
// 5. HAPUS DATA USER
// =====================================================

function userDataHapus(type, id) {
  var all = userDataBacaSemua();
  if (type === "kotoba") {
    all.kotoba = all.kotoba.filter(function (it) { return it.id !== id; });
    if (typeof KOSAKATA_CATEGORIES !== "undefined") {
      for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
        var cat = KOSAKATA_CATEGORIES[c];
        if (cat.subkategori) {
          for (var s = 0; s < cat.subkategori.length; s++) {
            if (cat.subkategori[s].kata) {
              cat.subkategori[s].kata = cat.subkategori[s].kata.filter(function (k) { return k.id !== id; });
            }
          }
        }
        if (cat.kata) {
          cat.kata = cat.kata.filter(function (k) { return k.id !== id; });
        }
      }
    }
  } else if (type === "kanji") {
    all.kanji = all.kanji.filter(function (it) { return it.id !== id; });
    if (typeof KANJI_DATA !== "undefined") {
      for (var i = KANJI_DATA.length - 1; i >= 0; i--) {
        if (KANJI_DATA[i].id === id) KANJI_DATA.splice(i, 1);
      }
    }
  } else if (type === "bunpo") {
    all.bunpo = all.bunpo.filter(function (it) { return it.id !== id; });
    if (typeof BUNPO_CATEGORIES !== "undefined") {
      for (var b = 0; b < BUNPO_CATEGORIES.length; b++) {
        BUNPO_CATEGORIES[b].materi = BUNPO_CATEGORIES[b].materi.filter(function (m) { return m.id !== id; });
      }
    }
  }
  userDataSimpanSemua(all);
}

// =====================================================
// 6. PENYUNTIKAN KE VARIABEL GLOBAL
// =====================================================

function userDataInjectKotobaItem(item) {
  if (typeof KOSAKATA_CATEGORIES === "undefined") return;
  
  for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
    var cat = KOSAKATA_CATEGORIES[c];
    if (cat.key !== item.kategoriKey) continue;
    
    // Entry baru untuk KOSAKATA_CATEGORIES
    // Konversi "contoh" array → field contoh_jp/rm/id + contoh2_jp/rm/id
    // untuk kompatibilitas dengan render yang sudah ada
    var newEntry = {
      id: item.id,
      source: item.source || "user",
      kata: item.kata,
      romaji: item.romaji,
      arti: item.arti
    };
    
    if (item.penggunaan) newEntry.penggunaan = item.penggunaan;
    
    // Map array contoh ke slot contoh_jp, contoh2_jp, dst.
    if (item.contoh && item.contoh.length) {
      var suffixes = ["", "2", "3", "4", "5"];
      for (var ce = 0; ce < item.contoh.length && ce < 5; ce++) {
        var suffix = suffixes[ce];
        newEntry["contoh" + suffix + "_jp"] = item.contoh[ce].jp || "";
        newEntry["contoh" + suffix + "_rm"] = item.contoh[ce].rm || "";
        newEntry["contoh" + suffix + "_id"] = item.contoh[ce].id || "";
      }
    }
    
    if (item.subkategori && cat.subkategori && cat.subkategori.length) {
      for (var s = 0; s < cat.subkategori.length; s++) {
        if (cat.subkategori[s].nama === item.subkategori) {
          cat.subkategori[s].kata.push(newEntry);
          return;
        }
      }
      cat.subkategori[0].kata.push(newEntry);
      return;
    }
    
    if (!cat.kata) cat.kata = [];
    cat.kata.push(newEntry);
    return;
  }
}

function userDataInjectKanjiItem(item) {
  if (typeof KANJI_DATA === "undefined") return;
  var entry = {
    id: item.id,
    source: item.source || "user",
    no: item.no,
    kanji: item.kanji,
    kunyomi: item.kunyomi,
    onyomi: item.onyomi,
    arti: item.arti,
    kategori: item.kategori,
    contoh: item.contoh
  };
  if (item.artiEn) entry.artiEn = item.artiEn;
  if (item.radikal) entry.radikal = item.radikal;
  if (item.goresan !== null && item.goresan !== undefined) entry.goresan = item.goresan;
  if (item.mnemonik) entry.mnemonik = item.mnemonik;
  if (item.deskripsi) entry.deskripsi = item.deskripsi;
  KANJI_DATA.push(entry);
}

function userDataInjectBunpoItem(item) {
  if (typeof BUNPO_CATEGORIES === "undefined") return;
  for (var c = 0; c < BUNPO_CATEGORIES.length; c++) {
    if (BUNPO_CATEGORIES[c].key === item.kategoriKey) {
      BUNPO_CATEGORIES[c].materi.push({
        id: item.id,
        source: item.source || "user",
        judul: item.judul,
        sub: item.sub,
        preview: item.preview,
        pola: item.pola,
        fungsi: item.fungsi,
        contoh: item.contoh,
        negatif: item.negatif
      });
      return;
    }
  }
}

function userDataInjectAllOnStartup() {
  var all = userDataBacaSemua();
  for (var i = 0; i < all.kotoba.length; i++) userDataInjectKotobaItem(all.kotoba[i]);
  for (var j = 0; j < all.kanji.length; j++) userDataInjectKanjiItem(all.kanji[j]);
  for (var k = 0; k < all.bunpo.length; k++) userDataInjectBunpoItem(all.bunpo[k]);
}

userDataInjectAllOnStartup();