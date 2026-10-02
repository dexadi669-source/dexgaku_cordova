// =====================================================
// DeX Gaku — drawer.js
// Buka/tutup side drawer (menu hamburger) + toggle submenu
// Import/Export. Logic Import/Export itu sendiri (baca file,
// validasi, simpan ke localStorage) ada di
// import-export-render.js supaya file ini tetap fokus pada
// drawer sebagai komponen navigasi.
// =====================================================

var menuBtn = document.getElementById("menuBtn");
var sideDrawer = document.getElementById("sideDrawer");
var drawerOverlay = document.getElementById("drawerOverlay");
var drawerImportBtn = document.getElementById("drawerImportBtn");
var drawerExportBtn = document.getElementById("drawerExportBtn");
var drawerImportSubmenu = document.getElementById("drawerImportSubmenu");
var drawerExportSubmenu = document.getElementById("drawerExportSubmenu");

// -----------------------------------------------------
// Drawer utama
// -----------------------------------------------------

function openDrawer() {
  sideDrawer.classList.add("open");
  drawerOverlay.classList.add("open");
}

function closeDrawer() {
  sideDrawer.classList.remove("open");
  drawerOverlay.classList.remove("open");
  // Tutup juga submenu yang sedang terbuka supaya drawer selalu
  // kembali ke keadaan awal (tertutup) tiap kali dibuka lagi.
  if (drawerImportSubmenu) drawerImportSubmenu.classList.remove("open");
  if (drawerExportSubmenu) drawerExportSubmenu.classList.remove("open");
  if (drawerImportBtn) drawerImportBtn.classList.remove("expanded");
  if (drawerExportBtn) drawerExportBtn.classList.remove("expanded");
}

if (menuBtn) {
  menuBtn.addEventListener("click", openDrawer);
}

if (drawerOverlay) {
  drawerOverlay.addEventListener("click", closeDrawer);
}

// -----------------------------------------------------
// Toggle submenu Import / Export (accordion sederhana:
// membuka salah satu akan menutup yang lain).
// -----------------------------------------------------

function drawerToggleSubmenu(btn, submenu, otherBtn, otherSubmenu) {
  var willOpen = !submenu.classList.contains("open");
  submenu.classList.toggle("open", willOpen);
  btn.classList.toggle("expanded", willOpen);
  if (willOpen) {
    otherSubmenu.classList.remove("open");
    otherBtn.classList.remove("expanded");
  }
}

if (drawerImportBtn && drawerImportSubmenu && drawerExportBtn && drawerExportSubmenu) {
  drawerImportBtn.addEventListener("click", function () {
    drawerToggleSubmenu(drawerImportBtn, drawerImportSubmenu, drawerExportBtn, drawerExportSubmenu);
  });
  drawerExportBtn.addEventListener("click", function () {
    drawerToggleSubmenu(drawerExportBtn, drawerExportSubmenu, drawerImportBtn, drawerImportSubmenu);
  });
}

// -----------------------------------------------------
// Tombol-tombol di dalam submenu (Import/Export per jenis)
// -----------------------------------------------------

var ieSubItems = document.querySelectorAll(".drawer-subitem[data-ie-action]");
for (var i = 0; i < ieSubItems.length; i++) {
  ieSubItems[i].addEventListener("click", function () {
    var action = this.getAttribute("data-ie-action");
    var scope = this.getAttribute("data-ie-scope");
    closeDrawer();
    if (action === "import" && typeof ieDoImport === "function") {
      ieDoImport(scope);
    } else if (action === "export" && typeof ieDoExport === "function") {
      ieDoExport(scope);
    }
  });
}
