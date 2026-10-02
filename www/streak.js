// =====================================================
// streak.js
// Menghitung dan menampilkan "streak" (jumlah hari
// berturut-turut user membuka aplikasi), disimpan di
// localStorage supaya tetap ada walau app ditutup/dibuka
// ulang.
//
// Logika:
// - Setiap kali app dibuka, tanggal hari ini dibandingkan
//   dengan tanggal terakhir kali dibuka.
// - Kalau tanggal terakhir = kemarin -> streak +1
// - Kalau tanggal terakhir = hari ini -> streak tetap
// - Kalau tanggal terakhir lebih dari 1 hari yang lalu -> reset ke 1
// - Kalau belum pernah ada data -> mulai dari 1
// =====================================================

var STREAK_STORAGE_KEY = "dexgaku_streak_data";

/** Format tanggal jadi "YYYY-MM-DD" (tanpa jam) untuk perbandingan sederhana. */
function formatDateForStreak(date) {
  var y = date.getFullYear();
  var m = String(date.getMonth() + 1).padStart(2, "0");
  var d = String(date.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + d;
}

/** Menghitung selisih hari antara dua tanggal string "YYYY-MM-DD". */
function daysBetweenDates(dateStrA, dateStrB) {
  var a = new Date(dateStrA + "T00:00:00");
  var b = new Date(dateStrB + "T00:00:00");
  var diffMs = b.getTime() - a.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Membaca, memperbarui (jika perlu), dan menyimpan data streak.
 * @returns {number} jumlah streak saat ini
 */
function updateAndGetStreak() {
  var today = formatDateForStreak(new Date());
  var raw = null;

  try {
    raw = localStorage.getItem(STREAK_STORAGE_KEY);
  } catch (e) {
    // localStorage tidak tersedia; tampilkan streak 1 tanpa menyimpan.
    return 1;
  }

  var data = raw ? JSON.parse(raw) : null;

  if (!data || !data.lastDate) {
    // Pertama kali dibuka
    data = { lastDate: today, streak: 1 };
  } else if (data.lastDate === today) {
    // Sudah dibuka hari ini, streak tidak berubah
  } else {
    var diff = daysBetweenDates(data.lastDate, today);
    if (diff === 1) {
      // Dibuka hari berikutnya secara berturut-turut
      data.streak = (data.streak || 0) + 1;
    } else if (diff > 1) {
      // Ada hari yang terlewat, streak reset
      data.streak = 1;
    }
    data.lastDate = today;
  }

  try {
    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    // Gagal menyimpan; tetap tampilkan nilai yang dihitung.
  }

  return data.streak;
}

/** Menampilkan nilai streak ke elemen #streakValue di halaman utama. */
function renderStreak() {
  var streakEl = document.getElementById("streakValue");
  if (!streakEl) return;
  var streak = updateAndGetStreak();
  streakEl.textContent = streak;
}

// Jalankan begitu file ini dimuat (halaman utama sudah ada di DOM).
renderStreak();
