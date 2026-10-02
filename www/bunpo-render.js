// =====================================================
// bunpo-render.js
// Logika tampilan menu Grammar/Bunpo, 3 level:
// 1. Halaman kategori: hero bergambar (gaya Kosakata & Kanji) + search bar
//    + grid kategori (2 kolom, pastel, bernomor).
// 2. Halaman daftar materi: hero kategori pendek (gaya Kosakata & Kanji)
//    + search + daftar materi dalam kategori terpilih (bernomor 01, 02, dst).
// 3. Halaman detail materi: hero card ilustrasi, Fungsi, Pola,
//    Contoh, Bentuk negatif.
//
// Halaman ini memakai HEADER CUSTOM SENDIRI (bukan header
// standar detailTitle/detailSub/detailGlyph milik aplikasi)
// supaya tidak terjadi judul dobel. Karena itu setiap fungsi
// render di sini memanggil hideStandardHeader() di awal, sama
// seperti pola yang sudah dipakai riwayat-render.js,
// rangkuman-render.js, dan simulasi-render.js.
//
// Membaca data dari bunpo-data.js (BUNPO_CATEGORIES).
// Untuk ubah/tambah materi, edit bunpo-data.js saja.
// =====================================================

// Palet warna pastel yang di-cycle per kategori (index % 6),
// meniru warna-warni pada mockup (biru, pink, hijau, kuning,
// ungu, teal berulang).
var BUNPO_PASTEL_PALETTE = [
  { bg: "#dceafd", accent: "#3f7fe0", accentSoft: "#eaf3fe" }, // biru
  { bg: "#fde0ea", accent: "#e0507e", accentSoft: "#fef0f5" }, // pink
  { bg: "#dcf5e3", accent: "#2f9e5c", accentSoft: "#eefaf2" }, // hijau
  { bg: "#fdf0cf", accent: "#c98a12", accentSoft: "#fef8e8" }, // kuning
  { bg: "#e8e0fb", accent: "#7752d6", accentSoft: "#f3eefe" }, // ungu
  { bg: "#d7f2f2", accent: "#1f9494", accentSoft: "#eafbfb" }  // teal
];

function bunpoPaletteFor(index) {
  return BUNPO_PASTEL_PALETTE[index % BUNPO_PASTEL_PALETTE.length];
}

// SVG hero ilustrasi (gunung Fuji + ranting sakura), dipakai
// berulang di header menu utama & kartu hero detail materi.
// Inline supaya tidak butuh file gambar eksternal.
function bunpoHeroIllustrationSVG(heightClass) {
  return (
    '<svg class="bunpo-hero-svg ' + heightClass + '" viewBox="0 0 400 140" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="400" height="140" fill="none"/>' +
    '<path d="M0 110 Q60 80 120 100 T240 95 T400 105 V140 H0 Z" fill="#cfe6f7" opacity="0.7"/>' +
    '<path d="M120 90 L165 30 L185 55 L200 25 L245 90 Z" fill="#eef3f8"/>' +
    '<path d="M175 42 L185 55 L195 43 L200 25 L210 45 L200 60 L190 58 L182 68 L170 55 Z" fill="#d8e4ee"/>' +
    '<circle cx="330" cy="30" r="4" fill="#f6a8c4"/>' +
    '<circle cx="345" cy="18" r="5" fill="#f6a8c4"/>' +
    '<circle cx="360" cy="34" r="4" fill="#f2c1d6"/>' +
    '<circle cx="315" cy="15" r="3.5" fill="#f2c1d6"/>' +
    '<path d="M300 45 Q330 20 375 10" stroke="#8a5a4a" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
    "</svg>"
  );
}

// Sama seperti menu Kosakata & Kanji: sembunyikan header standar dan lebarkan area isi
// supaya hero tampil penuh dari tepi ke tepi. Gaya ini hilang otomatis saat
// halaman detail materi dirender (karena detailExtra diganti).
var BUNPO_MENU_STYLE_OVERRIDE = '<style>#detailHeaderStandard, #detailStandardIntro { display: none !important; } .detail-body { padding-top: 0 !important; max-width: 100% !important; margin: 0 !important; }</style>';

// Tombol "Kembali" berbentuk pil (ikon panah + teks), dipakai di hero menu & daftar materi.
var BUNPO_BACK_PILL_INNER = '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali';

// =====================================================
// HELPER TAMPILAN: sorotan bagian grammar, ukuran judul, pola
// =====================================================

// Pemetaan partikel/kata ke romaji (untuk menyorot di baris romaji).
var BUNPO_ROMAJI_KEY = {
  "は": "wa", "が": "ga", "を": "o", "に": "ni", "で": "de", "と": "to", "の": "no",
  "も": "mo", "か": "ka", "や": "ya", "から": "kara", "まで": "made", "より": "yori",
  "です": "desu", "へ": "e"
};

// Penanda bentuk negatif (ませんか = ajakan, jadi bukan negatif).
var BUNPO_NEG_KANA_SRC = "(ではありません|じゃありません|くありません|ありません|ませんでした|ません(?!か)|なかったです|なかった|ないで\\s*ください|ないです|ない)";
var BUNPO_NEG_ROMAJI_SRC = "(?:dewa|ja) \\w*arimasen\\b|masen(?!\\s*ka\\b)\\b|naide\\b";

/** Ambil kata kunci Jepang dari judul (mis. "は・です" -> ["は","です"]). */
function bunpoJpKeys(str) {
  var parts = String(str || "").split(/[・\/／+＋\s]+/);
  var keys = [];
  for (var i = 0; i < parts.length; i++) {
    var k = parts[i].replace(/^[～〜~\-]+|[～〜~\-]+$/g, "").replace(/[()（）]/g, "");
    if (k && /[\u3040-\u30ff\u4e00-\u9fff]/.test(k) && !/[A-Za-z]/.test(k)) keys.push(k);
  }
  return keys;
}

/** Kata kunci grammar suatu materi: dari judul; jika tidak ada, dari preview (min. 2 huruf). */
function bunpoKeysFor(m) {
  var keys = bunpoJpKeys(m.judul);
  if (!keys.length) {
    var fb = bunpoJpKeys(m.preview);
    for (var i = 0; i < fb.length; i++) if (fb[i].length >= 2) keys.push(fb[i]);
  }
  var uniq = [];
  for (var j = 0; j < keys.length; j++) if (uniq.indexOf(keys[j]) === -1) uniq.push(keys[j]);
  return uniq;
}

/** Apakah kemunculan 1 huruf kunci pada posisi i benar-benar partikel (bukan bagian kata lain)? */
function bunpoParticleOk(text, i, k, mode) {
  var prev = text.charAt(i - 1), next = text.charAt(i + 1);
  if (mode === "kana") {
    if (i === 0) return false;
    if (next && !/[\s、。，,.！？!?…」』）)]/.test(next)) {
      if (!(k === "の" && text.substr(i + 1, 2) === "です")) return false;
    }
  }
  if (k === "で" && /[すしきはも]/.test(next)) return false;
  if (k === "は" && prev === "で") return false;
  if (k === "か" && next === "ら") return false;
  if (k === "と" && next === "き") return false;
  if (k === "も" && next === "う") return false;
  return true;
}

// Bentuk lain dari kata kunci (konjugasi, tulisan kanji, atau tulisan kana).
var BUNPO_ALIAS_ANY = {
  "たり": ["だり"], "あげる": ["あげます", "あげました"], "くれる": ["くれます", "くれました"],
  "もらう": ["もらいます", "もらいました"], "できる": ["できます"],
  "読める": ["読めます", "読めません"], "見られる": ["見られます"]
};
var BUNPO_ALIAS_KANJI = { "だれ": ["誰"], "なに": ["何"], "いちばん": ["一番"] };
var BUNPO_ALIAS_KANA = {
  "前に": ["まえに"], "行きます": ["いきます", "いきました"], "来ます": ["きます", "きました"],
  "帰ります": ["かえります", "かえりました"], "読める": ["よめる", "よめます"], "見られる": ["みられる", "みられます"]
};

/** Kata kunci + variannya untuk mode tertentu. */
function bunpoExpandKeys(keys, mode) {
  var out = keys.slice();
  function add(v) { if (out.indexOf(v) === -1) out.push(v); }
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var extra = (BUNPO_ALIAS_ANY[k] || []).slice();
    if (mode === "kanji") extra = extra.concat(BUNPO_ALIAS_KANJI[k] || []);
    if (mode === "kana") extra = extra.concat(BUNPO_ALIAS_KANA[k] || []);
    if (k.length >= 3 && k.slice(-2) === "ます") extra.push(k.slice(0, -2) + "ました");
    for (var j = 0; j < extra.length; j++) add(extra[j]);
  }
  return out;
}

function bunpoEscapeRe(str) { return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

/** Cari posisi kata kunci di kalimat. mode: "kanji" | "kana" | "plain". */
function bunpoFindKeyMatches(text, keys, mode) {
  var res = [];
  var sorted = (mode === "plain" ? keys : bunpoExpandKeys(keys, mode)).slice().sort(function (a, b) { return b.length - a.length; });
  var taken = [];
  for (var n = 0; n < sorted.length; n++) {
    var k = sorted[n];
    var hits = [];
    if (mode === "kana" && k.length > 1) {
      // Baris hiragana dipisah spasi antar kata: izinkan spasi di antara huruf kunci.
      var re = new RegExp(k.split("").map(bunpoEscapeRe).join("\\s*"), "g"), mm;
      while ((mm = re.exec(text)) !== null) hits.push([mm.index, mm.index + mm[0].length]);
    } else {
      var from = 0, i;
      while ((i = text.indexOf(k, from)) !== -1) {
        from = i + k.length;
        if (k.length === 1 && !bunpoParticleOk(text, i, k, mode)) continue;
        hits.push([i, i + k.length]);
      }
    }
    for (var h = 0; h < hits.length; h++) {
      var s0 = hits[h][0], e0 = hits[h][1], overlap = false;
      for (var x = s0; x < e0; x++) if (taken[x]) { overlap = true; break; }
      if (overlap) continue;
      for (var y = s0; y < e0; y++) taken[y] = true;
      res.push({ s: s0, e: e0, c: "key" });
    }
  }
  return res;
}

/** Sorot kata kunci di baris romaji (hanya untuk partikel yang ada pemetaannya). */
function bunpoFindRomajiMatches(text, keys) {
  var res = [];
  for (var n = 0; n < keys.length; n++) {
    var word = BUNPO_ROMAJI_KEY[keys[n]];
    if (!word) continue;
    var re = new RegExp("\\b" + word + "\\b", "gi"), m;
    while ((m = re.exec(text)) !== null) res.push({ s: m.index, e: m.index + m[0].length, c: "key" });
  }
  return res;
}

function bunpoRegexMatches(text, src, cls) {
  var res = [], re = new RegExp(src, "g"), m;
  while ((m = re.exec(text)) !== null) {
    if (m[0].length === 0) { re.lastIndex++; continue; }
    res.push({ s: m.index, e: m.index + m[0].length, c: cls });
  }
  return res;
}

/** Bangun HTML dari teks + daftar posisi sorotan (yang tumpang tindih dilewati). */
function bunpoRenderMarked(text, matches) {
  matches.sort(function (a, b) { return a.s - b.s; });
  var out = "", pos = 0;
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    if (m.s < pos) continue;
    out += escapeBunpoHtml(text.slice(pos, m.s));
    out += '<mark class="bunpo-hl' + (m.c === "neg" ? " bunpo-hl-neg" : "") + '">' + escapeBunpoHtml(text.slice(m.s, m.e)) + "</mark>";
    pos = m.e;
  }
  return out + escapeBunpoHtml(text.slice(pos));
}

/** Sorot satu kalimat contoh. mode: "kanji" | "kana" | "romaji". */
function bunpoMarkSentence(text, keys, mode, negative) {
  text = String(text == null ? "" : text);
  var neg = [];
  if (negative) neg = bunpoRegexMatches(text, mode === "romaji" ? BUNPO_NEG_ROMAJI_SRC : BUNPO_NEG_KANA_SRC, "neg");
  var km = mode === "romaji" ? bunpoFindRomajiMatches(text, keys) : bunpoFindKeyMatches(text, keys, mode);
  km = km.filter(function (k) {
    for (var i = 0; i < neg.length; i++) if (k.s < neg[i].e && neg[i].s < k.e) return false;
    return true;
  });
  return bunpoRenderMarked(text, neg.concat(km));
}

/** Sorot teks pendek (mis. preview di chip list). */
function bunpoMarkPlain(text, keys) {
  text = String(text == null ? "" : text);
  return bunpoRenderMarked(text, bunpoFindKeyMatches(text, keys, "plain"));
}

/** Apakah contoh ini bentuk negatif? (ませんか = ajakan, bukan negatif) */
function bunpoIsNegativeExample(ex) {
  if (!ex) return false;
  return new RegExp("ません(?!か)|ない|なかった").test(String(ex.kanji || "") + String(ex.hiragana || ""));
}

/** Kelas ukuran huruf judul menurut panjangnya. */
function bunpoJudulSize(judul) {
  var n = String(judul || "").length;
  if (n <= 2) return "bp-j-xl";
  if (n <= 6) return "bp-j-l";
  if (n <= 12) return "bp-j-m";
  return "bp-j-s";
}

function bunpoPad2(n) { return (n < 10 ? "0" : "") + n; }

/** Pecah pola menjadi "chip" rumus; token yang cocok kata kunci dibuat kuning. */
function bunpoPolaChipsHTML(pola, keys) {
  var tokens = String(pola || "").split(/\s+/).filter(function (t) { return t; });
  var html = "";
  for (var i = 0; i < tokens.length; i++) {
    var t = tokens[i];
    if (/^[+＋\/／|→]$/.test(t)) {
      html += '<span class="bunpo-fx-op">' + escapeBunpoHtml(t) + "</span>";
      continue;
    }
    var bare = t.replace(/[。、．.,]+$/, "").replace(/^[～〜]+/, "");
    html += '<span class="bunpo-fx-tok' + (keys.indexOf(bare) !== -1 ? " key" : "") + '">' + escapeBunpoHtml(t) + "</span>";
  }
  return html;
}

function bunpoNorm(s) {
  return String(s || "").replace(/[\s。、．.～〜+＋]/g, "").toLowerCase();
}

/** Teks fungsi: kata KAPITAL (mis. TOPIK) dijadikan penekanan. */
function bunpoFungsiHTML(text) {
  return escapeBunpoHtml(String(text || "")).replace(/\b[A-Z]{3,}(?:\s[A-Z]{3,})*\b/g, '<b class="bunpo-em">$&</b>');
}

/** Kolom cari bergaya Kosakata/Kanji (id dipertahankan untuk logika pencarian). */
function bunpoSearchBoxHTML(inputId, clearId, placeholder) {
  return '<div class="koto-search bunpo-searchbar">' +
    '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
    '<input type="text" id="' + inputId + '" class="bunpo-search-input" placeholder="' + placeholder + '" autocomplete="off">' +
    '<button type="button" id="' + clearId + '" class="bunpo-search-clear hidden">&#10005;</button>' +
    "</div>";
}

// ---------- LEVEL 1: Menu kategori ----------

/**
 * Membuat HTML halaman utama menu Grammar: hero header + search
 * bar + grid 12 kartu kategori (2 kolom, bernomor, pastel).
 * @returns {string}
 */
function renderBunpoMenu() {
  // Hitung total materi dari semua kategori
  var totalMateri = 0;
  for (var t = 0; t < BUNPO_CATEGORIES.length; t++) {
    totalMateri += BUNPO_CATEGORIES[t].materi.length;
  }

  var html = BUNPO_MENU_STYLE_OVERRIDE;
  html += '<div class="koto-wrapper bunpo-page">';

  // ---------- Hero (susunan sama dengan menu Kosakata & Kanji) ----------
  html += '<div class="koto-hero koto-hero-bunpo">';
  html += '<button class="koto-back-top" id="bunpoMenuBackBtn" aria-label="Kembali">' + BUNPO_BACK_PILL_INNER + '</button>';
  html += '<h1 class="koto-title" style="margin-top:8px;">&#25991;&#27861; N5</h1>';
  html += '<p class="koto-subtitle">Belajar tata bahasa Jepang</p>';

  html += '<div class="koto-summary">';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#fff0e6; color:#ff8a4c;">&#128214;</div><div class="koto-sum-text"><span class="koto-sum-val">' + BUNPO_CATEGORIES.length + '</span><span class="koto-sum-lbl">Kategori</span></div></div>';
  html += '<div class="koto-sum-divider"></div>';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#f0e6ff; color:#7752d6; font-weight:800;">&#25991;</div><div class="koto-sum-text"><span class="koto-sum-val">' + totalMateri + '</span><span class="koto-sum-lbl">Total Materi</span></div></div>';
  html += '</div>';
  html += '</div>'; // .koto-hero

  html += '<div class="koto-content">';

  html += bunpoSearchBoxHTML("bunpoSearchInput", "bunpoSearchClear", "Cari grammar, pola, atau contoh...");

  html += '<div id="bunpoSearchResults"></div>';

  html += '<div id="bunpoCategoryList">';
  html += '<div class="bunpo-cat-grid">';

  for (var i = 0; i < BUNPO_CATEGORIES.length; i++) {
    var cat = BUNPO_CATEGORIES[i];
    var pal = bunpoPaletteFor(i);
    html += '<div class="bunpo-cat-card bunpo-tile" data-cat-key="' + cat.key + '" style="background:' + pal.bg + '; animation-delay:' + (i * 0.05) + 's;">';
    html += '<div class="bunpo-tile-top">';
    html += '<div class="bunpo-tile-ico"><span class="bunpo-tile-no" style="background:' + pal.accent + ';">' + cat.no + "</span>" + cat.icon + "</div>";
    html += '<p class="bunpo-tile-title">' + cat.nama + "</p>";
    html += "</div>";
    html += '<p class="bunpo-tile-desc">' + cat.deskripsi + "</p>";
    html += '<div class="bunpo-tile-foot"><span class="bunpo-tile-count" style="color:' + pal.accent + ';">' + cat.materi.length + ' materi</span><span class="bunpo-tile-arrow">&#8250;</span></div>';
    html += "</div>";
  }

  html += "</div>"; // .bunpo-cat-grid
  html += "</div>"; // #bunpoCategoryList

  html += "</div>"; // .koto-content
  html += "</div>"; // .koto-wrapper

  return html;
}

/** Dipanggil dari app.js saat menu Bunpo dibuka (Level 1: daftar kategori). */
function loadBunpoMenu() {
  hideStandardHeader();
  detailExtra.innerHTML = renderBunpoMenu();
  initBunpoCategoryClicks();
  initBunpoTopSearch();

  var menuBackBtn = document.getElementById("bunpoMenuBackBtn");
  if (menuBackBtn) {
    menuBackBtn.addEventListener("click", function () { history.back(); });
  }
}

/** Memasang event klik pada tiap kartu kategori grammar. */
function initBunpoCategoryClicks() {
  var cards = detailExtra.querySelectorAll(".bunpo-cat-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var key = this.getAttribute("data-cat-key");
      openBunpoCategoryWithHistory(key);
    });
  }
}

// ---------- LEVEL 2: Daftar materi dalam kategori ----------

/**
 * Membuat HTML halaman daftar materi dalam satu kategori:
 * header custom (tombol back + judul kecil "Grammar N5"),
 * kartu ikon+nama+deskripsi kategori, search lokal, jumlah
 * materi, lalu daftar kartu materi bernomor.
 * @param {string} catKey
 * @returns {string}
 */
function renderBunpoMateriList(catKey) {
  var cat = BUNPO_CATEGORY_MAP[catKey];
  if (!cat) return "<p>Kategori tidak ditemukan.</p>";

  var catIndex = cat.no - 1;
  var pal = bunpoPaletteFor(catIndex >= 0 ? catIndex : 0);

  var html = BUNPO_MENU_STYLE_OVERRIDE;
  html += '<div class="koto-wrapper bunpo-page">';

  // ---------- Hero kategori (susunan sama dengan kategori Kosakata & Kanji) ----------
  html += '<div class="koto-hero koto-hero-sm koto-hero-bunpo">';
  html += '<button class="koto-back-top" id="bunpoListBackBtn" aria-label="Kembali">' + BUNPO_BACK_PILL_INNER + '</button>';
  html += '<div class="koto-cat-hero-content" style="margin-top:8px;">';
  html += '<div class="koto-cat-hero-icon">' + cat.icon + '</div>';
  html += '<div><h2 class="koto-cat-hero-title">' + cat.nama + '</h2>';
  html += '<p class="koto-cat-hero-sub">' + cat.materi.length + ' materi</p></div>';
  html += '</div></div>'; // .koto-hero

  html += '<div class="koto-content">';

  // Deskripsi kategori dipindah ke bawah hero supaya hero tetap ringkas & terbaca
  if (cat.deskripsi) {
    html += '<p class="bunpo-cat-caption">' + cat.deskripsi + '</p>';
  }

  html += bunpoSearchBoxHTML("bunpoMateriSearchInput", "bunpoMateriSearchClear", "Cari dalam " + cat.nama + "...");

  html += '<div id="bunpoMateriList">';
  html += renderBunpoMateriCards(cat.materi, pal);
  html += "</div>";

  html += "</div>"; // .koto-content
  html += "</div>"; // .koto-wrapper

  return html;
}

/**
 * Membuat HTML daftar kartu materi (dipisah supaya bisa
 * dipakai ulang untuk hasil pencarian lokal).
 * @param {Array} materiList
 * @param {Object} [pal] - palet warna kategori (dari bunpoPaletteFor)
 * @returns {string}
 */
function renderBunpoMateriCards(materiList, pal) {
  pal = pal || bunpoPaletteFor(0);
  var html = "";
  for (var i = 0; i < materiList.length; i++) {
    var m = materiList[i];
    var pos = (typeof m._idx === "number" ? m._idx : i) + 1;
    var nomor = bunpoPad2(pos);
    var mMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(m.source) : { isMarked: m.source === "user", attr: m.source === "user" ? ' data-td-source="user"' : "", textClass: m.source === "user" ? " tambah-data-text-user" : "", badge: m.source === "user" ? tdBadgeTambahanHTML() : "" };
    var keys = bunpoKeysFor(m);

    html += '<div class="bunpo-materi-card bunpo-row" data-materi-idx="' + m._idx + '" style="animation-delay:' + (i * 0.04) + 's;"' + (mMark.isMarked ? mMark.attr + ' data-td-id="' + m.id + '"' : '') + '>';
    html += '<span class="bunpo-row-num" style="background:' + pal.accentSoft + '; color:' + pal.accent + ';">' + nomor + "</span>";
    html += '<div class="bunpo-row-mid">';
    html += '<div class="bunpo-row-l1">';
    html += '<span class="bunpo-row-jud ' + bunpoJudulSize(m.judul) + mMark.textClass + '">' + m.judul + mMark.badge + "</span>";
    if (m.preview) {
      html += '<span class="bunpo-row-chip" style="background:' + pal.accentSoft + '; color:' + pal.accent + ';">' + bunpoMarkPlain(m.preview, keys) + "</span>";
    }
    html += "</div>";
    html += '<p class="bunpo-row-sub">' + m.sub + "</p>";
    html += "</div>";
    html += '<span class="bunpo-row-arr">&#8250;</span>';
    html += "</div>";
  }
  return html;
}

/**
 * Membuka halaman daftar materi kategori tertentu, dan
 * mendaftarkan ke history supaya tombol back HP kembali ke
 * daftar kategori.
 * @param {string} catKey
 */
function openBunpoCategoryWithHistory(catKey) {
  var cat = BUNPO_CATEGORY_MAP[catKey];
  if (!cat) return;

  // Tandai index asli tiap materi (dipakai saat render ulang
  // hasil pencarian lokal, supaya klik tetap mengarah ke
  // materi yang benar meski daftar sedang difilter).
  for (var i = 0; i < cat.materi.length; i++) {
    cat.materi[i]._idx = i;
  }

  hideStandardHeader();
  detailExtra.innerHTML = renderBunpoMateriList(catKey);
  initBunpoMateriClicks(catKey);
  initBunpoMateriSearch(catKey);
  initBunpoListBackButton();

  history.pushState({ menu: "bunpo", catKey: catKey }, "", "#bunpo-" + catKey);
}

/** Pasang klik tombol back custom di header daftar materi. */
function initBunpoListBackButton() {
  var btn = document.getElementById("bunpoListBackBtn");
  if (btn) {
    btn.addEventListener("click", function () { history.back(); });
  }
}

/** Memasang event klik pada tiap kartu materi. */
function initBunpoMateriClicks(catKey) {
  var cards = detailExtra.querySelectorAll(".bunpo-materi-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-materi-idx"), 10);
      openBunpoMateriDetailWithHistory(catKey, idx);
    });
    if (typeof tdAttachLongPress === "function") {
      tdAttachLongPress(cards[i], function () {
        var id = this.getAttribute("data-td-id");
        if (typeof userDataHapus === "function") userDataHapus("bunpo", id);
        tdAnimateRemoveCard(this);
      }.bind(cards[i]));
    }
  }
}

/** Pencarian lokal dalam satu kategori (judul, sub, atau preview). */
function initBunpoMateriSearch(catKey) {
  var input = document.getElementById("bunpoMateriSearchInput");
  var clearBtn = document.getElementById("bunpoMateriSearchClear");
  var listEl = document.getElementById("bunpoMateriList");
  if (!input) return;

  var cat = BUNPO_CATEGORY_MAP[catKey];
  var catIndex = cat.no - 1;
  var pal = bunpoPaletteFor(catIndex >= 0 ? catIndex : 0);

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();

    if (clearBtn) clearBtn.classList.toggle("hidden", !q);

    if (!q) {
      listEl.innerHTML = renderBunpoMateriCards(cat.materi, pal);
      initBunpoMateriClicks(catKey);
      return;
    }

    var filtered = cat.materi.filter(function (m) {
      return (
        m.judul.toLowerCase().indexOf(q) !== -1 ||
        m.sub.toLowerCase().indexOf(q) !== -1 ||
        m.preview.toLowerCase().indexOf(q) !== -1
      );
    });

    listEl.innerHTML = filtered.length
      ? renderBunpoMateriCards(filtered, pal)
      : '<div class="bunpo-search-empty">Tidak ada materi yang cocok.</div>';
    initBunpoMateriClicks(catKey);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      input.dispatchEvent(new Event("input"));
      input.focus();
    });
  }
}


    // ---------- LEVEL 3: Detail satu materi ----------

function renderBunpoMateriDetail(catKey, idx) {
  var cat = BUNPO_CATEGORY_MAP[catKey];
  if (!cat) return "<p>Kategori tidak ditemukan.</p>";
  var m = cat.materi[idx];
  if (!m) return "<p>Materi tidak ditemukan.</p>";

  var dMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(m.source) : { textClass: m.source === "user" ? " tambah-data-text-user" : "", badge: m.source === "user" ? tdBadgeTambahanHTML() : "" };
  var keys = bunpoKeysFor(m);

  var html = BUNPO_MENU_STYLE_OVERRIDE;
  html += '<div class="koto-wrapper bunpo-page">';

  // ---------- Hero (Header Detail Center Aligned) ----------
  html += '<div class="koto-hero koto-hero-sm koto-hero-bunpo">';
  html += '<button class="koto-back-top" id="bunpoDetailBackBtn" aria-label="Kembali">' + BUNPO_BACK_PILL_INNER + '</button>';
  html += '<div class="bunpo-dhero-center" style="margin-top:12px;">';
  html += '<span class="bunpo-crumb">MATERI ' + bunpoPad2(idx + 1) + ' &middot; ' + escapeBunpoHtml(String(cat.nama).toUpperCase()) + '</span>';
  html += '<h2 class="bunpo-dhero-judul ' + bunpoJudulSize(m.judul) + dMark.textClass + '">' + m.judul + dMark.badge + '</h2>';
  html += '<p class="bunpo-dhero-sub">' + m.sub + '</p>';
  html += '</div></div>'; // .koto-hero

  html += '<div class="koto-content bunpo-dcontent">';

  // ---------- POLA: kartu besar seperti rumus (paling atas) ----------
  var showRingkasan = m.preview && bunpoNorm(m.pola).indexOf(bunpoNorm(m.preview)) === -1;
  if (m.pola || m.polaKeterangan) {
    html += '<div class="bunpo-pola-card">';
    html += '<p class="bunpo-pola-label"><span class="bunpo-pola-dot">&#129513;</span> POLA KALIMAT</p>';
    if (m.pola) {
      html += '<div class="bunpo-formula' + (String(m.pola).length > 34 ? " compact" : "") + '">' + bunpoPolaChipsHTML(m.pola, keys) + "</div>";
    }
    if (m.polaKeterangan) {
      html += '<p class="bunpo-pola-note">' + escapeBunpoNl(escapeBunpoHtml(String(m.polaKeterangan))) + "</p>";
    }
    if (showRingkasan) {
      html += '<div class="bunpo-pola-mini"><small>RINGKASAN</small><span>' + escapeBunpoHtml(String(m.preview)) + "</span></div>";
    }
    html += "</div>";
  }

  // ---------- FUNGSI ----------
  if (m.fungsi) {
    html += '<div class="bunpo-block bunpo-block-fungsi">';
    html += '<p class="bunpo-block-label"><span class="bunpo-block-badge badge-fungsi">&#128214;</span> Fungsi</p>';
    html += '<p class="bunpo-block-text">' + bunpoFungsiHTML(m.fungsi) + "</p>";
    html += "</div>";
  }

  // ---------- CONTOH ----------
  var contohHtml = renderBunpoExampleBlock(m.contoh, false, keys);
  var contohHl = contohHtml.indexOf("bunpo-hl") !== -1;
  html += '<div class="bunpo-block bunpo-block-contoh">';
  html += '<p class="bunpo-block-label"><span class="bunpo-block-badge badge-contoh">&#128221;</span> Contoh' +
          (contohHl ? '<span class="bunpo-legend"><i></i>bagian yang dipelajari</span>' : "") + "</p>";
  html += contohHtml;
  html += "</div>";

  // ---------- Contoh kedua: "Bentuk negatif" bila memang negatif, selain itu "Contoh lain" ----------
  if (m.negatif && m.negatif.kanji && m.negatif.kanji !== "—") {
    var isNeg = bunpoIsNegativeExample(m.negatif);
    html += '<div class="bunpo-block ' + (isNeg ? "bunpo-block-negatif" : "bunpo-block-lain") + '">';
    html += '<p class="bunpo-block-label"><span class="bunpo-block-badge ' + (isNeg ? "badge-negatif" : "badge-lain") + '">' + (isNeg ? "&#10060;" : "&#128172;") + "</span> " + (isNeg ? "Bentuk negatif" : "Contoh lain") + "</p>";
    html += renderBunpoExampleBlock(m.negatif, isNeg, keys);
    html += "</div>";
  }

  html += "</div>"; // .koto-content
  html += "</div>"; // .koto-wrapper

  return html;
}


/**
 * Membuat HTML satu blok contoh kalimat (kanji, hiragana, romaji, arti)
 * dengan bagian grammar yang dipelajari disorot.
 * @param {Object} ex
 * @param {boolean} isNegative - true untuk kartu Bentuk Negatif (aksen merah)
 * @param {Array} keys - kata kunci grammar untuk disorot
 */
function renderBunpoExampleBlock(ex, isNegative, keys) {
  if (!ex) return "";
  keys = keys || [];
  var cardClass = isNegative ? "bunpo-example-card negative" : "bunpo-example-card";
  var html = "";
  html += '<div class="' + cardClass + '">';
  html += '<p class="bunpo-example-kanji">' + bunpoMarkSentence(ex.kanji, keys, "kanji", isNegative) + "</p>";
  html += '<p class="bunpo-example-hiragana">' + bunpoMarkSentence(ex.hiragana, keys, "kana", isNegative) + "</p>";
  html += '<p class="bunpo-example-romaji">' + bunpoMarkSentence(ex.romaji, keys, "romaji", isNegative) + "</p>";
  html += '<p class="bunpo-example-arti">' + escapeBunpoHtml(String(ex.arti == null ? "" : ex.arti)) + "</p>";
  html += "</div>";
  return html;
}

/** Ganti newline literal jadi <br> supaya polaKeterangan multi-baris tampil rapi. */
function escapeBunpoNl(str) {
  return str.split("\n").join("<br>");
}

/**
 * Membuka halaman detail satu materi grammar, mendaftarkan
 * ke history supaya tombol back HP kembali ke daftar materi
 * kategori tersebut.
 * @param {string} catKey
 * @param {number} idx
 */
function openBunpoMateriDetailWithHistory(catKey, idx) {
  var cat = BUNPO_CATEGORY_MAP[catKey];
  if (!cat) return;
  var m = cat.materi[idx];
  if (!m) return;

  hideStandardHeader();
  detailExtra.innerHTML = renderBunpoMateriDetail(catKey, idx);
  initBunpoDetailBackButton();

  history.pushState(
    { menu: "bunpo", catKey: catKey, materiIdx: idx },
    "",
    "#bunpo-" + catKey + "-" + idx
  );
}

/** Pasang klik tombol back custom di header detail materi. */
function initBunpoDetailBackButton() {
  var btn = document.getElementById("bunpoDetailBackBtn");
  if (btn) {
    btn.addEventListener("click", function () { history.back(); });
  }
}

// ---------- Navigasi mundur (dipakai popstate di app.js) ----------

/** Kembali ke daftar kategori grammar (dari daftar materi). */
function backToBunpoMenu() {
  loadBunpoMenu();
}

/** Kembali ke daftar materi suatu kategori (dari detail materi). */
function backToBunpoMateriList(catKey) {
  openBunpoCategoryWithHistoryNoPush(catKey);
}

/** Sama seperti openBunpoCategoryWithHistory tapi tanpa pushState (dipakai saat navigasi mundur). */
function openBunpoCategoryWithHistoryNoPush(catKey) {
  var cat = BUNPO_CATEGORY_MAP[catKey];
  if (!cat) return;

  for (var i = 0; i < cat.materi.length; i++) {
    cat.materi[i]._idx = i;
  }

  hideStandardHeader();
  detailExtra.innerHTML = renderBunpoMateriList(catKey);
  initBunpoMateriClicks(catKey);
  initBunpoMateriSearch(catKey);
  initBunpoListBackButton();
}

// ---------- Pencarian global (dari halaman kategori utama) ----------

/**
 * Mencari materi dari SEMUA kategori sekaligus (dipakai
 * dari search box di halaman utama Grammar).
 * @param {string} query
 * @returns {Array} { catKey, catNama, catIcon, idx, materi }
 */
function searchBunpoGlobal(query) {
  var q = query.trim().toLowerCase();
  if (!q) return [];

  var results = [];
  for (var c = 0; c < BUNPO_CATEGORIES.length; c++) {
    var cat = BUNPO_CATEGORIES[c];
    for (var i = 0; i < cat.materi.length; i++) {
      var m = cat.materi[i];
      var hay = (m.judul + " " + m.sub + " " + m.preview + " " + m.fungsi).toLowerCase();
      if (hay.indexOf(q) !== -1) {
        results.push({ catKey: cat.key, catNama: cat.nama, catIcon: cat.icon, idx: i, materi: m });
      }
    }
  }
  return results;
}

/** Membuat HTML satu kartu hasil pencarian global grammar. */
function renderBunpoGlobalSearchCard(result) {
  var sMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(result.materi.source) : { textClass: result.materi.source === "user" ? " tambah-data-text-user" : "", badge: result.materi.source === "user" ? tdBadgeTambahanHTML() : "" };
  var html = "";
  html += '<div class="bunpo-search-result-card" data-cat-key="' + result.catKey + '" data-materi-idx="' + result.idx + '">';
  html += '<div class="bunpo-search-result-icon">' + result.catIcon + "</div>";
  html += '<div class="bunpo-search-result-text">';
  html += '<p class="bunpo-search-result-judul' + sMark.textClass + '">' + result.materi.judul + sMark.badge + "</p>";
  html += '<p class="bunpo-search-result-sub">' + result.materi.sub + " &middot; " + result.catNama + "</p>";
  html += "</div>";
  html += '<span class="bunpo-materi-arrow">&#8250;</span>';
  html += "</div>";
  return html;
}

/** Menjalankan pencarian global dan menampilkan hasilnya. */
function runBunpoGlobalSearch(query) {
  var resultsWrap = document.getElementById("bunpoSearchResults");
  var categoryList = document.getElementById("bunpoCategoryList");
  var clearBtn = document.getElementById("bunpoSearchClear");

  var q = query.trim();

  if (!q) {
    resultsWrap.innerHTML = "";
    categoryList.classList.remove("hidden");
    if (clearBtn) clearBtn.classList.add("hidden");
    return;
  }

  if (clearBtn) clearBtn.classList.remove("hidden");
  categoryList.classList.add("hidden");

  var results = searchBunpoGlobal(q);

  var html = "";
  html += '<p class="bunpo-search-heading">&#128270; Hasil untuk "' + escapeBunpoHtml(q) + '"</p>';
  html += '<p class="bunpo-search-count">' + results.length + " hasil ditemukan</p>";

  if (results.length === 0) {
    html += '<div class="bunpo-search-empty">Tidak ada grammar yang cocok. Coba kata kunci lain.</div>';
  } else {
    for (var i = 0; i < results.length; i++) {
      html += renderBunpoGlobalSearchCard(results[i]);
    }
  }

  resultsWrap.innerHTML = html;

  var cards = resultsWrap.querySelectorAll(".bunpo-search-result-card");
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener("click", function () {
      var catKey = this.getAttribute("data-cat-key");
      var idx = parseInt(this.getAttribute("data-materi-idx"), 10);
      var cat = BUNPO_CATEGORY_MAP[catKey];
      for (var j = 0; j < cat.materi.length; j++) cat.materi[j]._idx = j;
      openBunpoMateriDetailWithHistory(catKey, idx);
    });
  }
}

function escapeBunpoHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Memasang event listener untuk kotak pencarian di halaman utama Grammar. */
function initBunpoTopSearch() {
  var input = document.getElementById("bunpoSearchInput");
  var clearBtn = document.getElementById("bunpoSearchClear");
  if (!input) return;

  input.addEventListener("input", function () {
    runBunpoGlobalSearch(input.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      runBunpoGlobalSearch("");
      input.focus();
    });
  }
}
