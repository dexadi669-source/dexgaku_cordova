// =====================================================
// kanji-render.js
// Fix: Back loop, double pushState, transisi lebih halus
// FIX BACK: Menu kanji push state, kategori back ke menu kanji
// FIX FINAL: handleKanjiPopstate tidak lompat ke home
// =====================================================

// ---------- Helper ----------

function groupKanjiByCategory() {
  var grouped = {};
  for (var i = 0; i < KANJI_DATA.length; i++) {
    var item = KANJI_DATA[i];
    if (!grouped[item.kategori]) grouped[item.kategori] = [];
    grouped[item.kategori].push(item);
  }
  return grouped;
}

function firstReading(item) {
  var reading = item.kunyomi && item.kunyomi.trim() !== "" ? item.kunyomi : item.onyomi;
  return reading ? reading.split("・")[0] : "";
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var KANA_TO_ROMAJI_MAP = {
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
  "ワ":"wa","ヲ":"wo","ン":"n"
};

function kanaToRomaji(kana) {
  if (!kana) return "";
  var result = "";
  for (var i = 0; i < kana.length; i++) {
    var ch = kana.charAt(i);
    result += KANA_TO_ROMAJI_MAP[ch] !== undefined ? KANA_TO_ROMAJI_MAP[ch] : ch;
  }
  return result;
}

var KANJI_MENU_STYLE_OVERRIDE = '<style>#detailHeaderStandard, #detailStandardIntro { display: none !important; } .detail-body { padding-top: 0 !important; max-width: 100% !important; margin: 0 !important; }</style>';

// =====================================================
// HALAMAN 1: Menu utama Kanji
// =====================================================

function renderKanjiMenu() {
  var grouped = groupKanjiByCategory();

  var activeCats = [];
  for (var k = 0; k < KANJI_CATEGORIES.length; k++) {
    var g = grouped[KANJI_CATEGORIES[k]];
    if (g && g.length > 0) activeCats.push(KANJI_CATEGORIES[k]);
  }

  var html = '<div class="koto-wrapper">';

  html += '<div class="koto-hero koto-hero-kanji">';
  html += '<button class="koto-back-top" id="kanjiHeroBack" aria-label="Kembali"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  html += '<h1 class="koto-title" style="margin-top:8px;">Kanji</h1>';
  html += '<p class="koto-subtitle">Kumpulan kanji Jepang level N5</p>';
  html += '<div class="koto-summary">';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#fff0e6; color:#ff8a4c;">&#128214;</div><div class="koto-sum-text"><span class="koto-sum-val">' + activeCats.length + '</span><span class="koto-sum-lbl">Kategori</span></div></div>';
  html += '<div class="koto-sum-divider"></div>';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#e6f0ff; color:#4c8aff; font-weight:800;">&#28450;</div><div class="koto-sum-text"><span class="koto-sum-val">' + KANJI_DATA.length + '</span><span class="koto-sum-lbl">Total Kanji</span></div></div>';
  html += '</div>';
  html += '</div>';

  html += '<div class="koto-content">';
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kanjiSearchInput" placeholder="Cari kanji atau arti..." autocomplete="off">';
  html += '<button type="button" id="kanjiSearchClear" class="kanji-search-clear hidden" aria-label="Hapus pencarian">&#10005;</button>';
  html += '</div>';

  html += '<div id="kanjiSearchResults"></div>';
  html += '<div id="kanjiCategoryList">';
  html += '<div class="koto-cat-grid">';

  var pastelColors = ['#ffe4e8', '#ffebd9', '#e6f0ff', '#f0e6ff', '#e4f7e8', '#e0f5f2'];
  var textColors = ['#e6395b', '#d6892b', '#2c6fdb', '#7c3aed', '#3c9b4a', '#14a89a'];

  for (var c = 0; c < activeCats.length; c++) {
    var cat = activeCats[c];
    var items = grouped[cat];
    var icon = KANJI_CATEGORY_ICON[cat] || "&#26085;";
    var num = (c + 1 < 10) ? "0" + (c + 1) : (c + 1);
    var bgCol = pastelColors[c % pastelColors.length];
    var txtCol = textColors[c % textColors.length];

    html += '<div class="koto-cat-card" data-kanji-cat="' + escapeHtml(cat) + '">';
    html += '<div class="koto-cat-icon-wrap" style="background:' + bgCol + '; color:' + txtCol + ';">' + icon + '</div>';
    html += '<div class="koto-cat-info">';
    html += '<div class="koto-cat-top"><span class="koto-cat-num">' + num + '</span><span class="koto-cat-arrow">&#8250;</span></div>';
    html += '<h4 class="koto-cat-name">' + cat + '</h4>';
    html += '<p class="koto-cat-count">' + items.length + ' Kanji</p>';
    html += '</div></div>';
  }

  html += '</div></div></div></div>';
  return html;
}

// =====================================================
// FIX: loadKanjiMenu TIDAK pushState (render murni)
// =====================================================
function loadKanjiMenu() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");

  detailExtra.innerHTML = KANJI_MENU_STYLE_OVERRIDE + renderKanjiMenu();

  var wrapper = detailExtra.querySelector(".koto-wrapper");
  if (wrapper) {
    wrapper.classList.add("koto-fade-in");
    setTimeout(function () { wrapper.classList.remove("koto-fade-in"); }, 300);
  }

  initKanjiHeroBack();
  initKanjiCategoryClicks();
  initKanjiSearch();
}

// =====================================================
// FIX: Wrapper yang dipakai navigasi untuk pushState
// =====================================================
function openKanjiMenuWithHistory() {
  loadKanjiMenu();
  if (window.__isPopstateHandling) return;
  history.pushState({ menu: "kanji" }, "", "#kanji");
}

function initKanjiHeroBack() {
  var btn = document.getElementById("kanjiHeroBack");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'instant' });
      history.back();
    });
  }
}

function initKanjiCategoryClicks() {
  var cards = detailExtra.querySelectorAll(".koto-cat-card[data-kanji-cat]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var cat = this.getAttribute("data-kanji-cat");
      var el = this;
      el.classList.add("tap-shrink");
      setTimeout(function () {
        openKanjiCategoryWithHistory(cat, 1);
      }, 140);
    });
  }
}

// =====================================================
// HALAMAN 2: Daftar kanji dalam satu kategori
// =====================================================

function renderKanjiCategoryList(kategori, page) {
  var currentPage = page || 1;
  var itemsPerPage = 10;

  var grouped = groupKanjiByCategory();
  var items = grouped[kategori] || [];
  var icon = KANJI_CATEGORY_ICON[kategori] || "&#26085;";

  var totalPages = Math.ceil(items.length / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var paginatedItems = items.slice(startIndex, endIndex);

  var html = KANJI_MENU_STYLE_OVERRIDE;
  html += '<div class="koto-wrapper">';
  html += '<div class="koto-hero koto-hero-sm koto-hero-kanji">';
  html += '<button class="koto-back-top" id="kanjiCatBack" aria-label="Kembali"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  html += '<div class="koto-cat-hero-content" style="margin-top:8px;">';
  html += '<div class="koto-cat-hero-icon">' + icon + '</div>';
  html += '<div><h2 class="koto-cat-hero-title">' + kategori + '</h2>';
  html += '<p class="koto-cat-hero-sub">' + items.length + ' Kanji</p></div>';
  html += '</div></div>';

  html += '<div class="koto-content">';
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kanjiCatSearchInput" placeholder="Cari dalam ' + kategori + '..." autocomplete="off">';
  html += '<button type="button" id="kanjiCatSearchClear" class="kanji-search-clear hidden" aria-label="Hapus pencarian">&#10005;</button>';
  html += '</div>';

  html += '<div class="kanji-paginated-list-container">';
  html += '<div class="koto-word-list" id="kanjiCatList">';
  html += renderKanjiListCards(paginatedItems, icon);
  html += '</div>';

  if (totalPages > 1) {
    html += '<div class="kanji-modern-pagination">';
    html += '<button id="kanjiPrevPage" class="kanji-page-pill-btn ' + (currentPage === 1 ? 'disabled' : '') + '">';
    html += '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Prev';
    html += '</button>';
    
    html += '<div class="kanji-page-indicators">';
    for (var p = 1; p <= totalPages; p++) {
      var activeClass = p === currentPage ? ' active' : '';
      html += '<button class="kanji-page-dot-btn' + activeClass + '" data-page-num="' + p + '">' + p + '</button>';
    }
    html += '</div>';

    html += '<button id="kanjiNextPage" class="kanji-page-pill-btn ' + (currentPage === totalPages ? 'disabled' : '') + '">';
    html += 'Next <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
    html += '</button>';
    html += '</div>';
  }
  html += '</div>';

  html += '</div></div>';

  return html;
}

function renderKanjiListCards(items, icon) {
  if (items.length === 0) {
    return '<div class="kanji-search-empty">Tidak ada kanji di kategori ini.</div>';
  }

  var html = "";
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var reading = firstReading(item);
    var romaji = kanaToRomaji(reading);
    var cardIcon = icon || KANJI_CATEGORY_ICON[item.kategori] || "&#26085;";
    var iMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { isMarked: item.source === "user", attr: item.source === "user" ? ' data-td-source="user"' : "", textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };

    html += '<div class="koto-word-card" data-kanji-no="' + item.no + '"' + (iMark.isMarked ? iMark.attr + ' data-td-id="' + item.id + '"' : '') + '>';
    html += '<div class="koto-word-icon">' + cardIcon + '</div>';
    html += '<div class="koto-word-info">';
    html += '<div class="koto-word-line-top">';
    html += '<span class="koto-word-jp-new' + iMark.textClass + '">' + item.kanji + ' (' + reading + ')</span>';
    html += '<span class="koto-word-rm-new">' + romaji + '</span>';
    html += '</div>';
    html += '<div class="koto-word-id-new">' + capitalize(item.arti) + iMark.badge + '</div>';
    html += '</div>';
    html += '<div class="koto-word-arrow">&#8250;</div>';
    html += '</div>';
  }
  return html;
}

function changeKanjiPageSmooth(kategori, targetPage) {
  var listContainer = document.querySelector(".kanji-paginated-list-container");
  if (!listContainer) {
    openKanjiCategoryWithHistory(kategori, targetPage);
    return;
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
  listContainer.classList.add("kanji-page-transition-out");

  setTimeout(function() {
    var grouped = groupKanjiByCategory();
    var items = grouped[kategori] || [];
    var icon = KANJI_CATEGORY_ICON[kategori] || "&#26085;";
    var itemsPerPage = 10;
    var totalPages = Math.ceil(items.length / itemsPerPage) || 1;

    if (targetPage > totalPages) targetPage = totalPages;
    if (targetPage < 1) targetPage = 1;

    var startIndex = (targetPage - 1) * itemsPerPage;
    var paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    var listEl = document.getElementById("kanjiCatList");
    if (listEl) listEl.innerHTML = renderKanjiListCards(paginatedItems, icon);

    var paginationWrapper = document.querySelector(".kanji-modern-pagination");
    if (paginationWrapper) {
      var newPaginationHtml = '';
      newPaginationHtml += '<button id="kanjiPrevPage" class="kanji-page-pill-btn ' + (targetPage === 1 ? 'disabled' : '') + '">';
      newPaginationHtml += '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Prev';
      newPaginationHtml += '</button>';
      
      newPaginationHtml += '<div class="kanji-page-indicators">';
      for (var p = 1; p <= totalPages; p++) {
        var activeClass = p === targetPage ? ' active' : '';
        newPaginationHtml += '<button class="kanji-page-dot-btn' + activeClass + '" data-page-num="' + p + '">' + p + '</button>';
      }
      newPaginationHtml += '</div>';

      newPaginationHtml += '<button id="kanjiNextPage" class="kanji-page-pill-btn ' + (targetPage === totalPages ? 'disabled' : '') + '">';
      newPaginationHtml += 'Next <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
      newPaginationHtml += '</button>';

      paginationWrapper.innerHTML = newPaginationHtml;
      initKanjiPaginationEvents(kategori, targetPage);
    }

    initKanjiListClicks(kategori, targetPage);

    listContainer.classList.remove("kanji-page-transition-out");
    listContainer.classList.add("kanji-page-transition-in");

    setTimeout(function() {
      listContainer.classList.remove("kanji-page-transition-in");
    }, 220);

    history.replaceState({ menu: "kanji", kategori: kategori, page: targetPage }, "", "#kanji-cat-" + encodeURIComponent(kategori) + "-p" + targetPage);
  }, 130);
}

function openKanjiCategoryWithHistory(kategori, page) {
  var p = page || 1;
  window.scrollTo({ top: 0, behavior: 'instant' });

  detailExtra.innerHTML = renderKanjiCategoryList(kategori, p);
  detailExtra.classList.remove("slide-in-right");
  void detailExtra.offsetWidth;
  detailExtra.classList.add("slide-in-right");

  var wrapper = detailExtra.querySelector(".koto-wrapper");
  if (wrapper) {
    wrapper.classList.add("koto-fade-in");
    setTimeout(function () { wrapper.classList.remove("koto-fade-in"); }, 300);
  }

  initKanjiCatBack();
  initKanjiListClicks(kategori, p);
  initKanjiCatSearch(kategori);
  initKanjiPaginationEvents(kategori, p);

  if (window.__isPopstateHandling) return;
  history.pushState({ menu: "kanji", kategori: kategori, page: p }, "", "#kanji-cat-" + encodeURIComponent(kategori) + "-p" + p);
}

function initKanjiPaginationEvents(kategori, currentPage) {
  var prevBtn = document.getElementById("kanjiPrevPage");
  var nextBtn = document.getElementById("kanjiNextPage");
  var dotBtns = document.querySelectorAll(".kanji-page-dot-btn");

  if (prevBtn && !prevBtn.classList.contains("disabled")) {
    prevBtn.addEventListener("click", function () {
      if (currentPage > 1) {
        changeKanjiPageSmooth(kategori, currentPage - 1);
      }
    });
  }

  if (nextBtn && !nextBtn.classList.contains("disabled")) {
    nextBtn.addEventListener("click", function () {
      changeKanjiPageSmooth(kategori, currentPage + 1);
    });
  }

  for (var i = 0; i < dotBtns.length; i++) {
    dotBtns[i].addEventListener("click", function () {
      var targetP = parseInt(this.getAttribute("data-page-num"), 10);
      if (targetP !== currentPage) {
        changeKanjiPageSmooth(kategori, targetP);
      }
    });
  }
}

function initKanjiCatBack() {
  var btn = document.getElementById("kanjiCatBack");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'instant' });
      history.back();
    });
  }
}

function initKanjiListClicks(kategori, page) {
  var cards = detailExtra.querySelectorAll(".koto-word-card[data-kanji-no]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var no = parseInt(this.getAttribute("data-kanji-no"), 10);
      var el = this;
      el.classList.add("tap-pop");
      setTimeout(function () {
        openKanjiDetailWithHistory(no, kategori, page);
      }, 120);
    });
    if (typeof tdAttachLongPress === "function") {
      tdAttachLongPress(cards[i], function () {
        var id = this.getAttribute("data-td-id");
        if (typeof userDataHapus === "function") userDataHapus("kanji", id);
        tdAnimateRemoveCard(this);
      }.bind(cards[i]));
    }
  }
}

function initKanjiCatSearch(kategori) {
  var input = document.getElementById("kanjiCatSearchInput");
  var clearBtn = document.getElementById("kanjiCatSearchClear");
  var listEl = document.getElementById("kanjiCatList");
  if (!input) return;

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    var grouped = groupKanjiByCategory();
    var items = grouped[kategori] || [];

    if (clearBtn) clearBtn.classList.toggle("hidden", !q);

    if (!q) {
      listEl.innerHTML = renderKanjiListCards(items.slice(0, 10), KANJI_CATEGORY_ICON[kategori]);
      initKanjiListClicks(kategori, 1);
      return;
    }

    var filtered = items.filter(function (item) {
      return kanjiMatchesQuery(item, q);
    });

    listEl.innerHTML = renderKanjiListCards(filtered, KANJI_CATEGORY_ICON[kategori]);
    listEl.classList.remove("slide-in-short");
    void listEl.offsetWidth;
    listEl.classList.add("slide-in-short");
    initKanjiListClicks(kategori, 1);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      input.dispatchEvent(new Event("input"));
      input.focus();
    });
  }
}

// =====================================================
// HALAMAN 3: Detail Kanji
// =====================================================

function getKanjiExamples(item) {
  if (item.contoh && item.contoh.length > 0) {
    return item.contoh;
  }
  return [
    { kata: item.kanji, baca: firstReading(item), arti: capitalize(item.arti) }
  ];
}

function getRandomKanjiTip() {
  var list = KANJI_TIPS_LIST;
  var idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

function renderKanjiDetail(kanjiNo) {
  var item = findKanjiByNo(kanjiNo);
  if (!item) return "<p>Kanji tidak ditemukan.</p>";

  var examples = getKanjiExamples(item);
  var randomTip = getRandomKanjiTip();
  var dMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };

  var html = KANJI_MENU_STYLE_OVERRIDE;
  html += '<div class="kanji-v2-container kanji-detail-fade-in">';

  html += '<div class="kanji-v2-topbar">';
  html += '<button class="kanji-v2-back-btn" id="kanjiDetailBack" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#1A1A1A" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
  html += '</button>';
  html += '<div class="kanji-v2-topbar-title">KANJI PILIHAN</div>';
  html += '<div class="kanji-v2-brand"><img src="assets/logo-shiba.svg" alt="DeX Gaku" class="kanji-v2-brand-img" onerror="this.style.display=\'none\'"><span class="kanji-v2-brand-text">DEXGAKU</span></div>';
  html += '</div>';

  var catName = item.kategori ? item.kategori.toUpperCase() : "UMUM";
  html += '<div class="kanji-v2-cat-sub">KANJI ' + catName + '</div>';

  html += '<div class="kanji-v2-main-row">';
  html += '<div class="kanji-v2-box-wrap">';
  html += '<img src="assets/kanji/kanji_bg_main.png" alt="" class="kanji-v2-box-bg" onerror="this.style.display=\'none\'">';
  html += '<div class="kanji-v2-char' + dMark.textClass + '" id="kanjiDetailChar">' + item.kanji + '</div>';
  html += '</div>';

  html += '<div class="kanji-v2-arti-wrap">';
  html += '<div class="kanji-v2-section-tag">ARTI & MAKNA</div>';
  var formattedArti = item.arti.replace(/,\s*/g, ' / ');
  html += '<h2 class="kanji-v2-arti-main">' + formattedArti + dMark.badge + '</h2>';
  var subArti = item.artiEn || "shop / store"; 
  html += '<p class="kanji-v2-arti-sub">' + subArti + '</p>';
  html += '</div>';
  html += '</div>';

  html += '<div class="kanji-v2-divider"></div>';

  html += '<div class="kanji-v2-block">';
  html += '<div class="kanji-v2-section-tag">CARA BACA</div>';
  var kun = item.kunyomi && item.kunyomi.trim() !== "" ? "<b>Kun'yomi</b> " + item.kunyomi : "";
  var on = item.onyomi && item.onyomi.trim() !== "" ? "<b>On'yomi</b> " + item.onyomi : "";
  var bacaanTxt = [kun, on].filter(Boolean).join(" ・ ");
  html += '<div class="kanji-v2-reading-text">' + bacaanTxt + '</div>';

  if (item.radikal && item.goresan) {
    html += '<div class="kanji-v2-meta-text">';
    html += 'Radikal: ' + item.radikal + ' ・ ' + item.goresan + ' goresan';
    html += '</div>';
  }

  html += '</div>';

  html += '<div class="kanji-v2-divider"></div>';

  html += '<div class="kanji-v2-block">';
  html += '<div class="kanji-v2-section-tag">CARA MENGINGAT</div>';
  html += '<h3 class="kanji-v2-subheading">Jembatan ingatan</h3>';
  var memoDesc = item.mnemonik || item.deskripsi || "Tidak ada informasi atau jembatan ingatan yang tersedia untuk kanji ini.";
  html += '<p class="kanji-v2-desc">' + memoDesc + '</p>';
  html += '</div>';

  html += '<div class="kanji-v2-divider"></div>';

  html += '<div class="kanji-v2-block">';
  html += '<div class="kanji-v2-section-tag">KATA YANG MEMAKAINYA</div>';
  html += '<h3 class="kanji-v2-subheading">Contoh kata</h3>';
  var deskripsiKata = item.deskripsi || "Merupakan kanji dasar yang sering digunakan dalam kehidupan sehari-hari.";
  html += '<p class="kanji-v2-desc" style="margin-bottom:14px;">' + deskripsiKata + '</p>';

  html += '<div class="kanji-v2-examples-list">';
  for (var e = 0; e < examples.length; e++) {
    var ex = examples[e];
    html += '<div class="kanji-v2-ex-item">';
    html += '<span class="kanji-v2-ex-kata">' + ex.kata + '</span>';
    html += '<span class="kanji-v2-ex-sep"> &mdash; </span>';
    html += '<span class="kanji-v2-ex-arti">' + ex.arti + '</span>';
    html += '</div>';
  }
  html += '</div>';
  html += '</div>';

  html += '<div class="kanji-v2-tip-box">';
  html += '<span class="kanji-v2-tip-badge">TIP</span>';
  html += '<p class="kanji-v2-tip-content">' + randomTip + '</p>';
  html += '</div>';

  html += '</div>';
  return html;
}

function openKanjiDetailWithHistory(kanjiNo, kategori, page) {
  var item = findKanjiByNo(kanjiNo);
  if (!item) return;

  var effectiveKategori = kategori || item.kategori;
  var effectivePage = page || 1;

  window.scrollTo({ top: 0, behavior: 'instant' });

  detailExtra.innerHTML = renderKanjiDetail(kanjiNo);
  animateKanjiCharIn();
  initKanjiDetailBack(effectiveKategori, effectivePage);

  if (window.__isPopstateHandling) return;
  history.pushState(
    { menu: "kanji", kategori: effectiveKategori, page: effectivePage, kanjiNo: kanjiNo },
    "",
    "#kanji-" + kanjiNo
  );
}

function animateKanjiCharIn() {
  var el = document.getElementById("kanjiDetailChar");
  if (el) {
    el.classList.remove("kanji-char-pop");
    void el.offsetWidth;
    el.classList.add("kanji-char-pop");
  }
}

function initKanjiDetailBack(kategori, page) {
  var btn = document.getElementById("kanjiDetailBack");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'instant' });
      history.back();
    });
  }
}

function findKanjiByNo(kanjiNo) {
  for (var i = 0; i < KANJI_DATA.length; i++) {
    if (KANJI_DATA[i].no === kanjiNo) return KANJI_DATA[i];
  }
  return null;
}

function backToKanjiMenu() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  loadKanjiMenu();
}

function backToKanjiCategoryList(kategori, page) {
  window.scrollTo({ top: 0, behavior: 'instant' });
  var p = page || 1;
  detailExtra.innerHTML = renderKanjiCategoryList(kategori, p);

  var wrapper = detailExtra.querySelector(".koto-wrapper");
  if (wrapper) {
    wrapper.classList.add("koto-fade-in");
    setTimeout(function () { wrapper.classList.remove("koto-fade-in"); }, 300);
  }

  initKanjiCatBack();
  initKanjiListClicks(kategori, p);
  initKanjiCatSearch(kategori);
  initKanjiPaginationEvents(kategori, p);
}

// =====================================================
// FITUR PENCARIAN KANJI GLOBAL
// =====================================================

function kanjiMatchesQuery(item, query) {
  if (!query) return false;

  if (item.kanji.indexOf(query) !== -1) return true;
  if (item.arti.toLowerCase().indexOf(query) !== -1) return true;

  var kunyomi = item.kunyomi || "";
  var onyomi = item.onyomi || "";
  if (kunyomi.indexOf(query) !== -1) return true;
  if (onyomi.indexOf(query) !== -1) return true;

  var kunyomiParts = kunyomi.split("・");
  var onyomiParts = onyomi.split("・");
  var allParts = kunyomiParts.concat(onyomiParts);

  for (var i = 0; i < allParts.length; i++) {
    var romaji = kanaToRomaji(allParts[i]).toLowerCase();
    if (romaji.indexOf(query) !== -1) return true;
  }

  return false;
}

function searchKanji(query) {
  var q = query.trim().toLowerCase();
  if (!q) return [];

  var results = [];
  for (var i = 0; i < KANJI_DATA.length; i++) {
    if (kanjiMatchesQuery(KANJI_DATA[i], q)) {
      results.push(KANJI_DATA[i]);
    }
  }
  return results;
}

function renderKanjiSearchCard(item) {
  var reading = firstReading(item);
  var romaji = kanaToRomaji(reading);
  var sMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };

  var html = "";
  html += '<div class="kanji-list-card" data-kanji-no="' + item.no + '">';
  html += '<div class="kanji-list-char' + sMark.textClass + '">' + item.kanji + "</div>";
  html += '<div class="kanji-list-text">';
  html += '<p class="kanji-list-reading">' + reading + " / " + romaji + "</p>";
  html += '<p class="kanji-list-arti">' + capitalize(item.arti) + sMark.badge + "</p>";
  html += "</div>";
  html += '<span class="kanji-list-catlabel">' + escapeHtml(item.kategori) + "</span>";
  html += '<span class="kanji-list-arrow">&#8250;</span>';
  html += "</div>";
  return html;
}

function runKanjiSearch(query) {
  var resultsWrap = document.getElementById("kanjiSearchResults");
  var categoryList = document.getElementById("kanjiCategoryList");
  var clearBtn = document.getElementById("kanjiSearchClear");

  var q = query.trim();

  if (!q) {
    resultsWrap.innerHTML = "";
    categoryList.classList.remove("hidden");
    if (clearBtn) clearBtn.classList.add("hidden");
    return;
  }

  if (clearBtn) clearBtn.classList.remove("hidden");
  categoryList.classList.add("hidden");

  var results = searchKanji(q);

  var html = "";
  html += '<p class="kanji-search-heading">&#128270; Hasil untuk "' + escapeHtml(q) + '"</p>';
  html += '<p class="kanji-search-count">' + results.length + " hasil ditemukan</p>";

  if (results.length === 0) {
    html += '<div class="kanji-search-empty">Tidak ada kanji yang cocok. Coba kata kunci lain.</div>';
  } else {
    for (var i = 0; i < results.length; i++) {
      html += renderKanjiSearchCard(results[i]);
    }
  }

  resultsWrap.innerHTML = html;
  resultsWrap.classList.remove("slide-in-short");
  void resultsWrap.offsetWidth;
  resultsWrap.classList.add("slide-in-short");

  var cards = resultsWrap.querySelectorAll(".kanji-list-card");
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener("click", function () {
      var no = parseInt(this.getAttribute("data-kanji-no"), 10);
      window.scrollTo({ top: 0, behavior: 'instant' });
      openKanjiDetailWithHistory(no);
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function initKanjiSearch() {
  var input = document.getElementById("kanjiSearchInput");
  var clearBtn = document.getElementById("kanjiSearchClear");
  if (!input) return;

  input.addEventListener("input", function () {
    runKanjiSearch(input.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      runKanjiSearch("");
      input.focus();
    });
  }
}

// =====================================================
// =====================================================
// HANDLER POPSTATE KANJI — FIX FINAL v2
// =====================================================
function handleKanjiPopstate(state) {
  if (!state) {
    backToKanjiMenu();
    return;
  }

  if (state.menu === "kanji" && state.kategori) {
    backToKanjiCategoryList(state.kategori, state.page || 1);
    return;
  }

  if (state.menu === "kanji") {
    backToKanjiMenu();
    return;
  }
}
