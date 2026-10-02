// =====================================================
// kosakata-render.js (Fix Back Button - Single Popstate)
// =====================================================

var KOTOBA_STYLE_OVERRIDE = '<style>#detailHeaderStandard, #detailStandardIntro { display: none !important; } .detail-body { padding-top: 0 !important; max-width: 100% !important; margin: 0 !important; }</style>';

// Mapping Icon Subkategori
var SUB_ICONS = {
  "Ayah/Ibu": "👨",
  "Saudara": "👫",
  "Kakek/Nenek": "👴",
  "Kerabat": "👪",
  "Status Keluarga": "💍",
  "Bagian Rumah": "🏠",
  "Perabot": "🪑",
  "Peralatan Rumah": "🧹",
  "Aktivitas Rumah": "🧺",
  "Makanan Pokok": "🍚",
  "Minuman": "🥤",
  "Buah": "🍎",
  "Sayur": "🥬",
  "Lauk": "🍖",
  "Peralatan Makan": "🍽️",
  "Hewan": "🐾",
  "Cuaca": "☀️",
  "Musim": "🍂",
  "Geografi": "🏔️",
  "Tanaman": "🌱",
  "Hari": "📅",
  "Bulan": "🗓️",
  "Tahun": "📆",
  "Waktu Relatif": "⏰",
  "Jam": "🕐",
  "Kata Kerja Dasar": "🏃",
  "Aktivitas Harian": "🧑‍💻",
  "Aktivitas Belajar": "📚",
  "Aktivitas Hiburan": "🎮",
  "Sifat Ukuran": "📏",
  "Sifat Perasaan": "😊",
  "Sifat Cuaca": "🌡️",
  "Sifat Penilaian": "⭐",
  "Arah": "🧭",
  "Tempat Umum": "🏢",
  "Toko": "🏪",
  "Transportasi": "🚌",
  "Angka Dasar": "🔢",
  "Angka Bantu": "🧮",
  "Ukuran": "📐",
  "Jumlah": "➕",
  "Sapaan": "👋",
  "Ucapan Terima Kasih": "🙏",
  "Permintaan Maaf": "😔",
  "Frasa Umum": "💬",
  "Warna Dasar": "🎨",
  "Warna Lain": "🌈",
  "Profesi": "👔",
  "Tempat Kerja": "🏢",
  "Aktivitas Kerja": "💼"
};

// =====================================================
// 1. MENU UTAMA KOSAKATA
// =====================================================

function loadKosakataMenu() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  // CATATAN: TIDAK pushState di sini.
  // pushState sudah dilakukan oleh openDetailWithHistory() di app.js
  detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataMenu();
  initKosakataMenuEvents();
}

function renderKosakataMenu() {
  var totalKategori = KOSAKATA_CATEGORIES.length;
  var totalKata = 0;
  
  for (var i = 0; i < totalKategori; i++) {
    var cat = KOSAKATA_CATEGORIES[i];
    if (cat.subkategori) {
      for (var j = 0; j < cat.subkategori.length; j++) {
        totalKata += cat.subkategori[j].kata.length;
      }
    }
  }

  var html = '<div class="koto-wrapper">';
  
  // Hero Header
  html += '<div class="koto-hero">';
  html += '<button class="koto-back-top" onclick="handleKosakataBack()"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  
  html += '<h1 class="koto-title" style="margin-top:8px;">Kosakata</h1>';
  html += '<p class="koto-subtitle">Kumpulan kosakata bahasa Jepang</p>';
  
  html += '<div class="koto-summary">';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#fff0e6; color:#ff8a4c;">📖</div><div class="koto-sum-text"><span class="koto-sum-val">'+totalKategori+'</span><span class="koto-sum-lbl">Kategori</span></div></div>';
  html += '<div class="koto-sum-divider"></div>';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#e6f0ff; color:#4c8aff;">📄</div><div class="koto-sum-text"><span class="koto-sum-val">'+totalKata+'</span><span class="koto-sum-lbl">Total Kata</span></div></div>';
  html += '</div>';
  html += '</div>'; 

  html += '<div class="koto-content">';
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kotoSearchInput" placeholder="Cari kata, romaji, atau arti..." autocomplete="off">';
  html += '</div>';

  html += '<div id="kotoSearchResults"></div>';
  
  html += '<div id="kotoCatContainer">';
  html += '<div class="koto-cat-grid">';
  
  var pastelColors = ['#ffe4e8', '#ffebd9', '#e6f0ff', '#f0e6ff', '#e4f7e8', '#e0f5f2'];
  var textColors = ['#e6395b', '#d6892b', '#2c6fdb', '#7c3aed', '#3c9b4a', '#14a89a'];

  for (var i = 0; i < totalKategori; i++) {
    var cat = KOSAKATA_CATEGORIES[i];
    var num = (i + 1 < 10) ? "0" + (i + 1) : (i + 1);
    var bgCol = pastelColors[i % pastelColors.length];
    var txtCol = textColors[i % textColors.length];

    var catWordCount = 0;
    if (cat.subkategori) {
      for (var k = 0; k < cat.subkategori.length; k++) {
        catWordCount += cat.subkategori[k].kata.length;
      }
    }

    html += '<div class="koto-cat-card" data-cat-key="' + cat.key + '">';
    html += '<div class="koto-cat-icon-wrap" style="background:' + bgCol + '; color:'+txtCol+';">' + cat.icon + '</div>';
    html += '<div class="koto-cat-info">';
    html += '<div class="koto-cat-top"><span class="koto-cat-num">' + num + '</span><span class="koto-cat-arrow">›</span></div>';
    html += '<h4 class="koto-cat-name">' + cat.nama + '</h4>';
    html += '<p class="koto-cat-count">' + catWordCount + ' kata</p>';
    html += '</div></div>';
  }
  html += '</div></div>'; 
  html += '</div></div>'; 
  return html;
}

function initKosakataMenuEvents() {
  var cards = document.querySelectorAll(".koto-cat-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      openKosakataCategoryWithHistory(this.getAttribute("data-cat-key"));
    });
  }

  var input = document.getElementById("kotoSearchInput");
  if(input) {
    input.addEventListener("input", function() { runKosakataGlobalSearch(this.value); });
  }
}

// =====================================================
// 2. HALAMAN LIST SUBKATEGORI
// =====================================================

function openKosakataCategoryWithHistory(catKey) {
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ menu: "kotoba-cat", catKey: catKey }, "", "#kotoba-" + catKey);
  detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataCategoryDetail(catKey);
  initKosakataSubcategoryEvents(catKey);
}

function renderKosakataCategoryDetail(catKey) {
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  var totalSub = cat.subkategori ? cat.subkategori.length : 0;
  
  var html = '<div class="koto-wrapper">';
  
  html += '<div class="koto-hero koto-hero-sm">';
  html += '<button class="koto-back-top" onclick="handleKosakataBack()"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  
  html += '<div class="koto-cat-hero-content" style="margin-top:8px;">';
  html += '<div class="koto-cat-hero-icon">' + cat.icon + '</div>';
  html += '<div><h2 class="koto-cat-hero-title">' + cat.nama + '</h2>';
  html += '<p class="koto-cat-hero-sub">' + totalSub + ' Subkategori</p></div>';
  html += '</div></div>';

  html += '<div class="koto-content">';
  
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kotoSubSearchInput" placeholder="Cari kata dalam ' + cat.nama + '..." autocomplete="off">';
  html += '</div>';

  html += '<div id="kotoCatSearchResults"></div>';

  html += '<div class="koto-sub-grid" id="kotoSubList">';
  var pastelColors = ['#ffe4e8', '#ffebd9', '#e6f0ff', '#f0e6ff', '#e4f7e8', '#e0f5f2'];
  var textColors = ['#e6395b', '#d6892b', '#2c6fdb', '#7c3aed', '#3c9b4a', '#14a89a'];
  
  if (cat.subkategori) {
    for(var i = 0; i < cat.subkategori.length; i++) {
        var sub = cat.subkategori[i];
        var num = (i + 1 < 10) ? "0" + (i + 1) : (i + 1);
        var bgCol = pastelColors[i % pastelColors.length];
        var txtCol = textColors[i % textColors.length];
        var emoji = SUB_ICONS[sub.nama] || "📁";

        html += '<div class="koto-sub-card" data-sub-idx="'+i+'" data-cat="'+catKey+'">';
        html += '<div class="koto-sub-icon-wrap" style="background:'+bgCol+'; color:'+txtCol+';">' + emoji + '</div>';
        html += '<div class="koto-sub-info">';
        html += '<div class="koto-sub-top">';
        html += '<span class="koto-sub-num">' + num + '</span>';
        html += '<span class="koto-sub-arrow">›</span>';
        html += '</div>';
        html += '<h4 class="koto-sub-name">' + sub.nama + '</h4>';
        html += '<p class="koto-sub-count">' + sub.kata.length + ' kata</p>';
        html += '</div>';
        html += '</div>';
    }
  }
  
  html += '</div>';
  html += '</div></div>';

  return html;
}

function initKosakataSubcategoryEvents(catKey) {
  var cards = document.querySelectorAll(".koto-sub-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      openKosakataSubcategory(this.getAttribute("data-cat"), parseInt(this.getAttribute("data-sub-idx")));
    });
  }

  var searchInput = document.getElementById("kotoSubSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      runKosakataCategorySearch(catKey, this.value);
    });
  }
}

function runKosakataCategorySearch(catKey, query) {
  var subGrid = document.getElementById("kotoSubList");
  var resultsWrap = document.getElementById("kotoCatSearchResults");
  var q = query.trim().toLowerCase();

  if (!q) {
    if (subGrid) subGrid.style.display = "grid";
    if (resultsWrap) resultsWrap.innerHTML = "";
    return;
  }
  
  if (subGrid) subGrid.style.display = "none";
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  var html = '<div class="koto-word-list">';
  var found = 0;

  if (cat && cat.subkategori) {
    for (var s = 0; s < cat.subkategori.length; s++) {
      var sub = cat.subkategori[s];
      for (var i = 0; i < sub.kata.length; i++) {
        var item = sub.kata[i];
        if (item.kata.indexOf(q) !== -1 || item.romaji.toLowerCase().indexOf(q) !== -1 || item.arti.toLowerCase().indexOf(q) !== -1) {
          found++;
          var iMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };
          html += '<div class="koto-word-card" onclick="openWordDetail(\''+catKey+'\', '+s+', '+i+')">';
          html += '<div class="koto-word-icon" style="background:#ffe4e8; color:#e6395b; font-size:14px; font-weight:800;">' + sub.nama.substring(0,2) + '</div>';
          
          html += '<div class="koto-word-info">';
          html += '<div class="koto-word-line-top">';
          html += '<span class="koto-word-jp-new' + iMark.textClass + '">' + item.kata + '</span>';
          html += '<span class="koto-word-rm-new">' + item.romaji + '</span>';
          html += '</div>';
          html += '<div class="koto-word-id-new">' + capitalizeFirst(item.arti) + ' <span style="font-size:10px; color:#ff5e7e; background:#ffe4e8; padding:2px 8px; border-radius:10px; margin-left:6px;">'+sub.nama+'</span>' + iMark.badge + '</div>';
          html += '</div>';

          html += '<div class="koto-word-arrow">›</div>';
          html += '</div>';
        }
      }
    }
  }
  html += '</div>';
  
  if(found === 0) {
      html = '<div style="text-align:center; padding:30px 20px; color:#888;">Tidak ada kosakata yang cocok di kategori ini.</div>';
  }
  if (resultsWrap) resultsWrap.innerHTML = html;
}

// =====================================================
// 3. HALAMAN DAFTAR KATA DARI SUBKATEGORI
// =====================================================

function openKosakataSubcategory(catKey, subIdx) {
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ menu: "kotoba-sub", catKey: catKey, subIdx: subIdx }, "", "#kotoba-" + catKey + "-" + subIdx);
  detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataSubcategoryDetail(catKey, subIdx);
  initKosakataWordEvents(catKey, subIdx);
}

function renderKosakataSubcategoryDetail(catKey, subIdx) {
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  var sub = cat.subkategori[subIdx];
  var html = '<div class="koto-wrapper">';
  
  html += '<div class="koto-hero koto-hero-sm">';
  html += '<button class="koto-back-top" onclick="handleKosakataBack()"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  
  html += '<div class="koto-cat-hero-content" style="margin-top:8px;">';
  html += '<div class="koto-cat-hero-icon">' + cat.icon + '</div>';
  html += '<div><h2 class="koto-cat-hero-title">' + sub.nama + '</h2>';
  html += '<p class="koto-cat-hero-sub">' + cat.nama + ' ・ ' + sub.kata.length + ' kata</p></div>';
  html += '</div></div>';

  html += '<div class="koto-content">';
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kotoLocalSearch" placeholder="Cari kata dalam ' + sub.nama + '...">';
  html += '</div>';

  html += '<div class="koto-word-list" id="kotoLocalList">';
  for(var i=0; i<sub.kata.length; i++) {
      var w = sub.kata[i];
      var wMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(w.source) : { isMarked: w.source === "user", attr: w.source === "user" ? ' data-td-source="user"' : "", textClass: w.source === "user" ? " tambah-data-text-user" : "", badge: w.source === "user" ? tdBadgeTambahanHTML() : "" };
      html += '<div class="koto-word-card" data-idx="'+i+'" data-sub="'+subIdx+'" data-cat="'+catKey+'"' + (wMark.isMarked ? wMark.attr + ' data-td-id="' + w.id + '"' : '') + '>';
      html += '<div class="koto-word-icon">' + cat.icon + '</div>';
      
      html += '<div class="koto-word-info">';
      html += '<div class="koto-word-line-top">';
      html += '<span class="koto-word-jp-new' + wMark.textClass + '">' + w.kata + '</span>';
      html += '<span class="koto-word-rm-new">' + w.romaji + '</span>';
      html += "</div>";
      html += '<div class="koto-word-id-new">' + capitalizeFirst(w.arti) + wMark.badge + '</div>';
      html += '</div>';

      html += '<div class="koto-word-arrow">›</div>';
      html += '</div>';
  }
  html += '</div>';
  html += '</div></div>';

  return html;
}

function initKosakataWordEvents(catKey, subIdx) {
  var cards = document.querySelectorAll(".koto-word-card");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener("click", function() {
      openWordDetail(this.getAttribute("data-cat"), parseInt(this.getAttribute("data-sub")), parseInt(this.getAttribute("data-idx")));
    });
    if (typeof tdAttachLongPress === "function") {
      tdAttachLongPress(card, function () {
        var id = this.getAttribute("data-td-id");
        if (typeof userDataHapus === "function") userDataHapus("kotoba", id);
        tdAnimateRemoveCard(this);
      }.bind(card));
    }
  }

  var input = document.getElementById("kotoLocalSearch");
  if(input) {
    input.addEventListener("input", function() {
       var q = this.value.toLowerCase().trim();
       for (var j = 0; j < cards.length; j++) {
         var c = cards[j];
         var text = c.textContent.toLowerCase();
         c.style.display = text.indexOf(q) !== -1 ? "flex" : "none";
       }
    });
  }
}

// =====================================================
// 4. MODAL DETAIL KOSAKATA
// =====================================================

var KOTOBA_TIPS_LIST = [
  "Bicara dengan suara pelan dan gunakan Manner Mode saat berada di dalam transportasi umum Jepang.",
  "Di restoran Jepang, mengelap wajah dengan serbet basah (Oshibori) kurang sopan untuk anak muda.",
  "Menerima barang atau uang kembalian di Jepang selalu disarankan menggunakan kedua tangan.",
  "Menyeruput mi (Ramen, Udon, Soba) hingga bersuara keras dianggap sebagai pujian bagi koki.",
  "Jangan menancapkan sumpit tegak lurus di mangkuk nasi karena mirip ritual pemakaman.",
  "Memberikan uang tip (tipping) di restoran atau taksi Jepang dianggap kurang sopan.",
  "Gunakan ungkapan 'Sumimasen' untuk memanggil pelayan restoran dengan sopan.",
  "Ungkapan 'Daijoubu desu' secara halus juga sering dipakai untuk menolak penawaran kasir.",
  "Awalan 'O' atau 'Go' ditambahkan sebelum kata benda untuk memperhalus ungkapan (misal: Omizu)."
];

function getRandomKotobaTip() {
  var idx = Math.floor(Math.random() * KOTOBA_TIPS_LIST.length);
  return KOTOBA_TIPS_LIST[idx];
}

function openWordDetail(catKey, subIdx, wordIdx) {
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  var sub = cat.subkategori[subIdx];
  var w = sub.kata[wordIdx];

  var existingModal = document.getElementById("kotoWordModal");
  if (existingModal) existingModal.remove();

  var modal = document.createElement("div");
  modal.className = "koto-v2-modal";
  modal.id = "kotoWordModal";

  var wMarkDetail = typeof ieMarkerInfo === "function" ? ieMarkerInfo(w.source) : { isMarked: w.source === "user", textClass: w.source === "user" ? " tambah-data-text-user" : "", badge: w.source === "user" ? tdBadgeTambahanHTML() : "" };

  var rawKata = w.kata || "";
  var displayJp = rawKata.replace(/\s*\(.*?\)/g, "").trim();
  var displayHira = "";
  var hiraMatch = rawKata.match(/\((.*?)\)/);
  if (hiraMatch && hiraMatch[1]) {
    displayHira = hiraMatch[1];
  }

  var html = '';

  html += '<div class="koto-v2-topbar">';
  html += '<button class="koto-v2-back-btn" onclick="closeWordDetail()" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#1A1A1A" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
  html += '</button>';
  html += '<div class="koto-v2-brand"><img src="assets/logo-shiba.svg" alt="DeX Gaku" class="koto-v2-brand-img" onerror="this.style.display=\'none\'"><span class="koto-v2-brand-text">DEXGAKU</span></div>';
  html += '</div>';

  var catSubLabel = cat.nama.toUpperCase() + " ・ " + sub.nama.toUpperCase();
  html += '<div class="koto-v2-cat-sub">' + catSubLabel + '</div>';

  html += '<div class="koto-v2-hero-block">';
  html += '<h1 class="koto-v2-main-jp' + wMarkDetail.textClass + '">' + displayJp + wMarkDetail.badge + '</h1>';
  
  var subReading = w.romaji;
  if (displayHira) {
    subReading += ' ― ' + displayHira;
  }
  html += '<div class="koto-v2-sub-reading">' + subReading + '</div>';
  html += '<h2 class="koto-v2-main-arti">' + capitalizeFirst(w.arti) + '</h2>';
  html += '</div>';

  // === PENGGUNAAN (kondisional) ===
  if (w.penggunaan) {
    html += '<div class="koto-v2-divider"></div>';
    html += '<div class="koto-v2-block">';
    html += '<div class="koto-v2-section-tag">PENGGUNAAN ・ 使い方</div>';
    html += '<p class="koto-v2-usage-text">' + w.penggunaan + '</p>';
    html += '</div>';
  }

  // === CONTOH KALIMAT (kondisional, support multiple) ===
  // Kumpulkan semua contoh yang ada: contoh_jp, contoh2_jp, contoh3_jp, dst.
  var contohAll = [];
  var suffixes = ["", "2", "3", "4", "5"];
  for (var ci = 0; ci < suffixes.length; ci++) {
    var keyJp = "contoh" + suffixes[ci] + "_jp";
    var keyRm = "contoh" + suffixes[ci] + "_rm";
    var keyId = "contoh" + suffixes[ci] + "_id";
    if (w[keyJp]) {
      contohAll.push({
        jp: w[keyJp],
        rm: w[keyRm] || "",
        id: w[keyId] || ""
      });
    }
  }

  if (contohAll.length > 0) {
    html += '<div class="koto-v2-divider"></div>';
    for (var cj = 0; cj < contohAll.length; cj++) {
      html += '<div class="koto-v2-block">';
      html += '<div class="koto-v2-section-tag">CONTOH KALIMAT ・ 例文</div>';
      html += '<h3 class="koto-v2-ex-jp">' + contohAll[cj].jp + '</h3>';
      if (contohAll[cj].rm) html += '<p class="koto-v2-ex-rm">' + contohAll[cj].rm + '</p>';
      if (contohAll[cj].id) html += '<p class="koto-v2-ex-id">' + contohAll[cj].id + '</p>';
      html += '</div>';
      if (cj < contohAll.length - 1) {
        html += '<div class="koto-v2-divider"></div>';
      }
    }
  }

  // TIP selalu muncul (random)
  var tipText = w.tip || getRandomKotobaTip();
  html += '<div class="koto-v2-tip-box">';
  html += '<span class="koto-v2-tip-badge">TIP</span>';
  html += '<p class="koto-v2-tip-content">' + tipText + '</p>';
  html += '</div>';

  modal.innerHTML = html;
  document.body.appendChild(modal);

  history.pushState({ menu: "kotoba-detail", catKey: catKey, subIdx: subIdx, wordIdx: wordIdx }, "", "#kotoba-detail");
}

function closeWordDetail() {
  history.back();
}

// =====================================================
// 5. HANDLER POPSTATE (DIPANGGIL DARI app.js)
// =====================================================
// CATATAN PENTING:
// JANGAN tambahkan window.addEventListener("popstate") di file ini.
// Semua routing popstate ditangani di app.js supaya tidak dobel.

function handleKosakataPopstate(e) {
  var modal = document.getElementById("kotoWordModal");

  // Tutup modal jika sedang terbuka
  if (modal) {
    modal.style.animation = "slideDown 0.18s ease-in forwards";
    setTimeout(function() {
      if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 180);
    return;
  }

  // Render ulang berdasarkan state
  if (e.state && e.state.menu) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (e.state.menu === "kotoba-sub") {
      detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataSubcategoryDetail(e.state.catKey, e.state.subIdx);
      initKosakataWordEvents(e.state.catKey, e.state.subIdx);
    } else if (e.state.menu === "kotoba-cat") {
      detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataCategoryDetail(e.state.catKey);
      initKosakataSubcategoryEvents(e.state.catKey);
    } else if (e.state.menu === "kotoba") {
      detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataMenu();
      initKosakataMenuEvents();
    }
  } else {
    // Fallback: kembali ke home
    if (typeof showHome === "function") {
      showHome();
    }
  }
}

function handleKosakataBack() {
  history.back();
}

// Search Global (Halaman Utama Kosakata)
function runKosakataGlobalSearch(query) {
  var container = document.getElementById("kotoCatContainer");
  var resultsWrap = document.getElementById("kotoSearchResults");
  var q = query.trim().toLowerCase();

  if (!q) {
    if (container) container.style.display = "block";
    if (resultsWrap) resultsWrap.innerHTML = "";
    return;
  }
  
  if (container) container.style.display = "none";
  var html = '<div class="koto-word-list">';
  var found = 0;

  for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
    var cat = KOSAKATA_CATEGORIES[c];
    if (cat.subkategori) {
      for (var s = 0; s < cat.subkategori.length; s++) {
        var sub = cat.subkategori[s];
        for (var i = 0; i < sub.kata.length; i++) {
          var item = sub.kata[i];
          if (item.kata.indexOf(q) !== -1 || item.romaji.toLowerCase().indexOf(q) !== -1 || item.arti.toLowerCase().indexOf(q) !== -1) {
            found++;
            var iMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };
            html += '<div class="koto-word-card" onclick="openWordDetail(\''+cat.key+'\', '+s+', '+i+')">';
            html += '<div class="koto-word-icon" style="background:#ffe4e8; color:#e6395b; font-size:14px; font-weight:800;">' + cat.nama.substring(0,2) + '</div>';
            
            html += '<div class="koto-word-info">';
            html += '<div class="koto-word-line-top">';
            html += '<span class="koto-word-jp-new' + iMark.textClass + '">' + item.kata + '</span>';
            html += '<span class="koto-word-rm-new">' + item.romaji + '</span>';
            html += '</div>';
            html += '<div class="koto-word-id-new">' + capitalizeFirst(item.arti) + ' <span style="font-size:10px; color:#ff5e7e; background:#ffe4e8; padding:2px 8px; border-radius:10px; margin-left:6px;">'+cat.nama+'</span>' + iMark.badge + '</div>';
            html += '</div>';

            html += '<div class="koto-word-arrow">›</div>';
            html += '</div>';
          }
        }
      }
    }
  }
  html += '</div>';
  
  if(found === 0) {
      html = '<div style="text-align:center; padding:30px 20px; color:#888;">Tidak ada kosakata yang cocok.</div>';
  }
  if (resultsWrap) resultsWrap.innerHTML = html;
}

function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function backToKosakataMenu() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  loadKosakataMenu();
}