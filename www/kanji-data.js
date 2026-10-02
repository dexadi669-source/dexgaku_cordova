// =====================================================
// kanji-data.js
// Data 110 Kanji N5 Lengkap untuk aplikasi DeX Gaku.
// Kategori disederhanakan menjadi 9 Kategori Utama.
// =====================================================

var KANJI_DATA = [
  // =====================================================
  // 1. ANGKA
  // =====================================================
  { 
    no: 1, kanji: "一", kunyomi: "ひとつ", onyomi: "イチ・イツ", 
    arti: "satu", artiEn: "one", kategori: "Angka",
    radikal: "一 (satu)", goresan: 1,
    mnemonik: "Satu garis horizontal melambangkan angka satu.",
    deskripsi: "Sering muncul di angka, tanggal, dan kosakata dasar seperti 'ichi' (satu) atau 'hitotsu' (satu buah).",
    contoh: [
      { kata: "一つ", baca: "ひとつ", arti: "satu buah" },
      { kata: "一月", baca: "いちがつ", arti: "Januari" },
      { kata: "一番", baca: "いちばん", arti: "nomor satu, paling" }
    ]
  },
  { 
    no: 2, kanji: "二", kunyomi: "ふたつ", onyomi: "ニ", 
    arti: "dua", artiEn: "two", kategori: "Angka",
    radikal: "二 (dua)", goresan: 2,
    mnemonik: "Dua garis horizontal sejajar melambangkan angka dua.",
    deskripsi: "Digunakan untuk menyatakan angka dua, seperti 'ni' (dua) atau 'futatsu' (dua buah).",
    contoh: [
      { kata: "二つ", baca: "ふたつ", arti: "dua buah" },
      { kata: "二月", baca: "にがつ", arti: "Februari" },
      { kata: "二人", baca: "ふたり", arti: "dua orang" }
    ]
  },
  { 
    no: 3, kanji: "三", kunyomi: "みっつ", onyomi: "サン", 
    arti: "tiga", artiEn: "three", kategori: "Angka",
    radikal: "一 (satu)", goresan: 3,
    mnemonik: "Tiga garis horizontal melambangkan angka tiga.",
    deskripsi: "Sering dipakai dalam angka, seperti 'san' (tiga) atau 'mittsu' (tiga buah).",
    contoh: [
      { kata: "三つ", baca: "みっつ", arti: "tiga buah" },
      { kata: "三月", baca: "さんがつ", arti: "Maret" },
      { kata: "三人", baca: "さんにん", arti: "tiga orang" }
    ]
  },
  { 
    no: 37, kanji: "四", kunyomi: "よっつ・よん・よ", onyomi: "シ", 
    arti: "empat", artiEn: "four", kategori: "Angka",
    deskripsi: "Kanji dasar untuk angka empat. Perhatikan bahwa cara bacanya sering berubah menjadi 'yon' atau 'yo' dalam percakapan agar tidak tertukar dengan kata 'shi' (mati).",
    contoh: [ { kata: "四つ", baca: "よっつ", arti: "empat buah" }, { kata: "四月", baca: "しがつ", arti: "April" } ]
  },
  { 
    no: 38, kanji: "五", kunyomi: "いつつ", onyomi: "ゴ", 
    arti: "lima", artiEn: "five", kategori: "Angka",
    deskripsi: "Kanji dasar untuk angka lima.",
    contoh: [ { kata: "五つ", baca: "いつつ", arti: "lima buah" }, { kata: "五月", baca: "ごがつ", arti: "Mei" } ]
  },
  { 
    no: 39, kanji: "六", kunyomi: "むっつ", onyomi: "ロク・ロッ", 
    arti: "enam", artiEn: "six", kategori: "Angka",
    deskripsi: "Kanji dasar untuk angka enam. Sering mengalami perubahan bunyi (sokuon) jika digabungkan.",
    contoh: [ { kata: "六つ", baca: "むっつ", arti: "enam buah" }, { kata: "六百", baca: "ろっぴゃく", arti: "enam ratus" } ]
  },
  { 
    no: 40, kanji: "七", kunyomi: "ななつ", onyomi: "シチ", 
    arti: "tujuh", artiEn: "seven", kategori: "Angka",
    deskripsi: "Kanji dasar untuk angka tujuh. Sering dibaca 'nana' untuk menghindari kebingungan dengan 'ichi' (1).",
    contoh: [ { kata: "七つ", baca: "ななつ", arti: "tujuh buah" }, { kata: "七月", baca: "しちがつ", arti: "Juli" } ]
  },
  { 
    no: 41, kanji: "八", kunyomi: "やっつ", onyomi: "ハチ・ハッ", 
    arti: "delapan", artiEn: "eight", kategori: "Angka",
    deskripsi: "Kanji dasar untuk angka delapan. Bentuknya menyerupai gunung atau tenda yang terbuka ke bawah.",
    contoh: [ { kata: "八つ", baca: "やっつ", arti: "delapan buah" }, { kata: "八百", baca: "はっぴゃく", arti: "delapan ratus" } ]
  },
  { 
    no: 42, kanji: "九", kunyomi: "ここのつ", onyomi: "キュウ・ク", 
    arti: "sembilan", artiEn: "nine", kategori: "Angka",
    deskripsi: "Kanji dasar untuk angka sembilan.",
    contoh: [ { kata: "九つ", baca: "ここのつ", arti: "sembilan buah" }, { kata: "九月", baca: "くがつ", arti: "September" } ]
  },
  { 
    no: 43, kanji: "十", kunyomi: "とお", onyomi: "ジュウ・ジッ・ジュッ", 
    arti: "sepuluh", artiEn: "ten", kategori: "Angka",
    deskripsi: "Bentuknya seperti tanda silang atau palang. Melambangkan kelengkapan angka dasar.",
    contoh: [ { kata: "十", baca: "とお", arti: "sepuluh buah" }, { kata: "十月", baca: "じゅうがつ", arti: "Oktober" } ]
  },
  { 
    no: 44, kanji: "百", kunyomi: "", onyomi: "ヒャク・ハク", 
    arti: "seratus", artiEn: "hundred", kategori: "Angka",
    deskripsi: "Digunakan sebagai satuan ratusan. Sering berubah bunyi menjadi 'byaku' atau 'pyaku'.",
    contoh: [ { kata: "百", baca: "ひゃく", arti: "seratus" }, { kata: "三百", baca: "さんびゃく", arti: "tiga ratus" } ]
  },
  { 
    no: 45, kanji: "千", kunyomi: "ち", onyomi: "セン", 
    arti: "ribu", artiEn: "thousand", kategori: "Angka",
    deskripsi: "Digunakan sebagai satuan ribuan. Dapat berubah bunyi menjadi 'zen' pada angka tiga ribu (sanzen).",
    contoh: [ { kata: "千", baca: "せん", arti: "seribu" }, { kata: "三千", baca: "さんぜん", arti: "tiga ribu" } ]
  },
  { 
    no: 46, kanji: "万", kunyomi: "", onyomi: "マン・バン", 
    arti: "puluh ribu", artiEn: "ten thousand", kategori: "Angka",
    deskripsi: "Di Jepang, angka besar dihitung per sepuluh ribu, bukan per seribu seperti di Indonesia.",
    contoh: [ { kata: "一万", baca: "いちまん", arti: "sepuluh ribu" }, { kata: "万年筆", baca: "まんねんひつ", arti: "pena tinta" } ]
  },
  { 
    no: 47, kanji: "円", kunyomi: "", onyomi: "エン", 
    arti: "yen", artiEn: "yen", kategori: "Angka",
    deskripsi: "Kanji yang digunakan untuk mata uang Jepang (Yen). Awalnya memiliki arti 'bulat'.",
    contoh: [ { kata: "百円", baca: "ひゃくえん", arti: "seratus yen" }, { kata: "円い", baca: "まるい", arti: "bulat" } ]
  },
  { 
    no: 53, kanji: "半", kunyomi: "", onyomi: "ハン", 
    arti: "setengah", artiEn: "half", kategori: "Angka",
    deskripsi: "Digunakan saat merujuk pada separuh atau setengah dari sesuatu, sering juga terlihat dalam format jam.",
    contoh: [ { kata: "半分", baca: "はんぶん", arti: "setengah bagian" }, { kata: "四時半", baca: "よじはん", arti: "jam setengah lima" } ]
  },

  // =====================================================
  // 2. WAKTU
  // =====================================================
  { 
    no: 4, kanji: "日", kunyomi: "ひ・び", onyomi: "ニチ・ニ・ジツ", 
    arti: "matahari, hari", artiEn: "sun, day", kategori: "Waktu",
    radikal: "日 (matahari)", goresan: 4,
    mnemonik: "Bentuknya seperti matahari dengan satu titik di tengah.",
    deskripsi: "Muncul di nama hari, tanggal, dan kosakata terkait waktu seperti 'nichi' (hari) atau 'hi' (matahari).",
    contoh: [
      { kata: "日曜日", baca: "にちようび", arti: "hari Minggu" },
      { kata: "毎日", baca: "まいにち", arti: "setiap hari" },
      { kata: "日本", baca: "にほん", arti: "Jepang" }
    ]
  },
  { 
    no: 5, kanji: "月", kunyomi: "つき", onyomi: "ゲツ・ガツ", 
    arti: "bulan", artiEn: "moon, month", kategori: "Waktu",
    radikal: "月 (bulan)", goresan: 4,
    mnemonik: "Bentuknya seperti bulan sabit dengan dua garis di dalam.",
    deskripsi: "Digunakan untuk nama bulan, seperti 'gatsu' (bulan) atau 'tsuki' (bulan).",
    contoh: [
      { kata: "月曜日", baca: "げつようび", arti: "hari Senin" },
      { kata: "一月", baca: "いちがつ", arti: "Januari" },
      { kata: "今月", baca: "こんげつ", arti: "bulan ini" }
    ]
  },
  { 
    no: 6, kanji: "年", kunyomi: "とし", onyomi: "ネン", 
    arti: "tahun, umur", artiEn: "year, age", kategori: "Waktu",
    radikal: "干 (kering)", goresan: 6,
    mnemonik: "Bayangkan seseorang yang membawa setumpuk panen di punggungnya setiap tahun.",
    deskripsi: "Sering dipakai dalam kosakata waktu seperti 'nen' (tahun) atau 'toshi' (umur).",
    contoh: [
      { kata: "今年", baca: "ことし", arti: "tahun ini" },
      { kata: "去年", baca: "きょねん", arti: "tahun lalu" },
      { kata: "年齢", baca: "ねんれい", arti: "umur" }
    ]
  },
  { 
    no: 54, kanji: "分", kunyomi: "わかる・わける", onyomi: "フン・ブン・プン", 
    arti: "menit, mengerti, memisahkan", artiEn: "minute, understand, divide", kategori: "Waktu",
    deskripsi: "Memiliki makna ganda yang penting: memisahkan sesuatu, atau sebagai satuan 'menit' pada waktu.",
    contoh: [ { kata: "五分", baca: "ごふん", arti: "lima menit" }, { kata: "分かる", baca: "わかる", arti: "mengerti" } ]
  },
  { 
    no: 60, kanji: "毎", kunyomi: "", onyomi: "マイ", 
    arti: "setiap", artiEn: "every", kategori: "Waktu",
    deskripsi: "Digunakan sebagai awalan untuk menyatakan sesuatu yang berulang, seperti rutinitas atau kebiasaan.",
    contoh: [ { kata: "毎日", baca: "まいにち", arti: "setiap hari" }, { kata: "毎週", baca: "まいしゅう", arti: "setiap minggu" } ]
  },
  { 
    no: 73, kanji: "午", kunyomi: "", onyomi: "ゴ", 
    arti: "siang", artiEn: "noon", kategori: "Waktu",
    deskripsi: "Sebagai penanda waktu siang. Membentuk kata AM (Gozen) dan PM (Gogo).",
    contoh: [ { kata: "午前", baca: "ごぜん", arti: "pagi (AM)" }, { kata: "午後", baca: "ごご", arti: "sore (PM)" } ]
  },
  { 
    no: 98, kanji: "時", kunyomi: "とき", onyomi: "ジ", 
    arti: "saat, jam", artiEn: "time, hour", kategori: "Waktu",
    deskripsi: "Banyak dipakai untuk satuan jam atau menunjukkan waktu yang berlalu.",
    contoh: [ { kata: "時計", baca: "とけい", arti: "jam (benda)" }, { kata: "一時", baca: "いちじ", arti: "jam 1" } ]
  },
  { 
    no: 99, kanji: "週", kunyomi: "", onyomi: "シュウ", 
    arti: "minggu (bukan nama hari)", artiEn: "week", kategori: "Waktu",
    deskripsi: "Merujuk pada periode satu putaran pekan (7 hari).",
    contoh: [ { kata: "今週", baca: "こんしゅう", arti: "minggu ini" }, { kata: "来週", baca: "らいしゅう", arti: "minggu depan" } ]
  },
  { 
    no: 101, kanji: "今", kunyomi: "いま", onyomi: "コン・キン", 
    arti: "sekarang", artiEn: "now", kategori: "Waktu",
    deskripsi: "Menunjukkan keadaan saat ini, hari ini, atau tahun ini.",
    contoh: [ { kata: "今", baca: "いま", arti: "sekarang" }, { kata: "今日", baca: "きょう", arti: "hari ini" } ]
  },

  // =====================================================
  // 3. ARAH
  // =====================================================
  { 
    no: 10, kanji: "上", kunyomi: "うえ・あがる", onyomi: "ジョウ・ショウ", 
    arti: "atas, naik", artiEn: "up, above", kategori: "Arah",
    radikal: "一 (satu)", goresan: 3,
    mnemonik: "Garis horizontal dengan garis vertikal di atasnya.",
    deskripsi: "Digunakan untuk menunjukkan posisi atas atau arah naik, seperti 'ue' (atas) atau 'agaru' (naik).",
    contoh: [
      { kata: "上着", baca: "うわぎ", arti: "jaket" },
      { kata: "上手", baca: "じょうず", arti: "pandai" },
      { kata: "上る", baca: "のぼる", arti: "naik" }
    ]
  },
  { 
    no: 11, kanji: "下", kunyomi: "した・さがる・さげる", onyomi: "カ・ゲ", 
    arti: "bawah, turun", artiEn: "down, below", kategori: "Arah",
    radikal: "一 (satu)", goresan: 3,
    mnemonik: "Garis horizontal dengan garis vertikal di bawahnya.",
    deskripsi: "Digunakan untuk menunjukkan posisi bawah atau arah turun, seperti 'shita' (bawah) atau 'sagaru' (turun).",
    contoh: [
      { kata: "下着", baca: "したぎ", arti: "pakaian dalam" },
      { kata: "下手", baca: "へた", arti: "tidak pandai" },
      { kata: "下がる", baca: "さがる", arti: "turun" }
    ]
  },
  { 
    no: 12, kanji: "中", kunyomi: "なか", onyomi: "チュウ・ジュウ", 
    arti: "dalam", artiEn: "inside, middle", kategori: "Arah",
    radikal: "丨 (garis)", goresan: 4,
    mnemonik: "Garis vertikal yang menembus kotak.",
    deskripsi: "Digunakan untuk menunjukkan posisi dalam atau tengah, seperti 'naka' (dalam) atau 'chuu' (tengah).",
    contoh: [
      { kata: "中村", baca: "なかむら", arti: "Nakamura (nama keluarga)" },
      { kata: "中国", baca: "ちゅうごく", arti: "Tiongkok" },
      { kata: "家中", baca: "いえじゅう", arti: "seluruh rumah" }
    ]
  },
  { 
    no: 59, kanji: "先", kunyomi: "さき", onyomi: "セン", 
    arti: "ujung, sebelum", artiEn: "ahead, previous", kategori: "Arah",
    deskripsi: "Memiliki makna sesuatu yang berada di depan, lebih dahulu, atau ujung dari suatu benda.",
    contoh: [ { kata: "先生", baca: "せんせい", arti: "guru" }, { kata: "先月", baca: "せんげつ", arti: "bulan lalu" } ]
  },
  { 
    no: 61, kanji: "前", kunyomi: "まえ", onyomi: "ゼン", 
    arti: "depan, sebelum", artiEn: "front, before", kategori: "Arah",
    deskripsi: "Bisa merujuk pada posisi (di depan) maupun konteks waktu (sebelumnya).",
    contoh: [ { kata: "名前", baca: "なまえ", arti: "nama" }, { kata: "午前", baca: "ごぜん", arti: "pagi (AM)" } ]
  },
  { 
    no: 62, kanji: "後", kunyomi: "あと・うしろ", onyomi: "ゴ・コウ", 
    arti: "nanti, belakang", artiEn: "after, behind", kategori: "Arah",
    deskripsi: "Kebalikan dari kanji 前 (depan/sebelum). Bisa dibaca 'ushiro' (belakang) atau 'ato' (setelah ini).",
    contoh: [ { kata: "後ろ", baca: "うしろ", arti: "belakang" }, { kata: "午後", baca: "ごご", arti: "sore/malam (PM)" } ]
  },
  { 
    no: 63, kanji: "左", kunyomi: "ひだり", onyomi: "サ", 
    arti: "kiri", artiEn: "left", kategori: "Arah",
    deskripsi: "Digunakan untuk menunjuk arah sebelah kiri.",
    contoh: [ { kata: "左", baca: "ひだり", arti: "kiri" }, { kata: "左手", baca: "ひだりて", arti: "tangan kiri" } ]
  },
  { 
    no: 64, kanji: "右", kunyomi: "みぎ", onyomi: "ウ・ユウ", 
    arti: "kanan", artiEn: "right", kategori: "Arah",
    deskripsi: "Digunakan untuk menunjuk arah sebelah kanan.",
    contoh: [ { kata: "右", baca: "みぎ", arti: "kanan" }, { kata: "右手", baca: "みぎて", arti: "tangan kanan" } ]
  },
  { 
    no: 65, kanji: "東", kunyomi: "ひがし", onyomi: "トウ", 
    arti: "timur", artiEn: "east", kategori: "Arah",
    deskripsi: "Mewakili arah timur (tempat matahari terbit). Menjadi salah satu huruf di kata 'Tokyo'.",
    contoh: [ { kata: "東", baca: "ひがし", arti: "timur" }, { kata: "東京", baca: "とうきょう", arti: "Tokyo" } ]
  },
  { 
    no: 66, kanji: "西", kunyomi: "にし", onyomi: "セイ・サイ", 
    arti: "barat", artiEn: "west", kategori: "Arah",
    deskripsi: "Mewakili arah barat (tempat matahari terbenam).",
    contoh: [ { kata: "西", baca: "にし", arti: "barat" }, { kata: "関西", baca: "かんさい", arti: "wilayah Kansai" } ]
  },
  { 
    no: 67, kanji: "南", kunyomi: "みなみ", onyomi: "ナン・ナ", 
    arti: "selatan", artiEn: "south", kategori: "Arah",
    deskripsi: "Mewakili arah selatan.",
    contoh: [ { kata: "南", baca: "みなみ", arti: "selatan" }, { kata: "東南アジア", baca: "とうなんアジア", arti: "Asia Tenggara" } ]
  },
  { 
    no: 68, kanji: "北", kunyomi: "きた", onyomi: "ホク・ボッ", 
    arti: "utara", artiEn: "north", kategori: "Arah",
    deskripsi: "Mewakili arah utara.",
    contoh: [ { kata: "北", baca: "きた", arti: "utara" }, { kata: "北海道", baca: "ほっかいどう", arti: "Hokkaido" } ]
  },
  { 
    no: 94, kanji: "間", kunyomi: "あいだ・ま", onyomi: "カン・ケン", 
    arti: "diantara", artiEn: "between, interval", kategori: "Arah",
    deskripsi: "Berarti jeda, celah, jarak, atau di antara dua benda / waktu.",
    contoh: [ { kata: "間", baca: "あいだ", arti: "di antara" }, { kata: "時間", baca: "じかん", arti: "waktu, jam" } ]
  },
  { 
    no: 106, kanji: "外", kunyomi: "そと", onyomi: "ガイ・ゲ", 
    arti: "luar, di luar", artiEn: "outside", kategori: "Arah",
    deskripsi: "Menunjukkan area atau posisi di luar suatu bangunan atau kelompok.",
    contoh: [ { kata: "外", baca: "そと", arti: "di luar" }, { kata: "外国", baca: "がいこく", arti: "luar negeri" } ]
  },

  // =====================================================
  // 4. BENDA
  // =====================================================
  { 
    no: 22, kanji: "店", kunyomi: "みせ", onyomi: "テン", 
    arti: "toko, kedai", artiEn: "shop, store", kategori: "Benda",
    radikal: "广 (atap / bangunan miring)", goresan: 8,
    mnemonik: "Di bawah atap gedung (广), ada tempat bertransaksi barang (占).",
    deskripsi: "Sering terlihat di plang nama pertokoan, petunjuk kasir, serta nama jenis usaha ritel dan kuliner.",
    contoh: [
      { kata: "店員", baca: "てんいん", arti: "pegawai atau staf toko" },
      { kata: "喫茶店", baca: "きっさてん", arti: "kedai kopi tradisional" },
      { kata: "売店", baca: "ばいてん", arti: "kios atau stan kecil" }
    ]
  },
  { 
    no: 23, kanji: "駅", kunyomi: "", onyomi: "エキ", 
    arti: "stasiun", artiEn: "station", kategori: "Benda",
    radikal: "馬 (kuda)", goresan: 14,
    mnemonik: "Gabungan dari '馬' (kuda) dan '尺' (ukuran). Dulu, stasiun adalah tempat kuda berhenti.",
    deskripsi: "Digunakan untuk menyebut stasiun kereta, seperti 'eki' (stasiun).",
    contoh: [
      { kata: "駅員", baca: "えきいん", arti: "petugas stasiun" },
      { kata: "駅前", baca: "えきまえ", arti: "depan stasiun" },
      { kata: "東京駅", baca: "とうきょうえき", arti: "Stasiun Tokyo" }
    ]
  },
  { 
    no: 24, kanji: "門", kunyomi: "", onyomi: "モン", 
    arti: "gerbang", artiEn: "gate", kategori: "Benda",
    radikal: "門 (gerbang)", goresan: 8,
    mnemonik: "Bentuknya seperti dua daun pintu gerbang yang terbuka.",
    deskripsi: "Digunakan untuk menyebut gerbang, seperti 'mon' (gerbang).",
    contoh: [
      { kata: "門", baca: "もん", arti: "gerbang" },
      { kata: "専門", baca: "せんもん", arti: "spesialisasi" },
      { kata: "入門", baca: "にゅうもん", arti: "pengantar, masuk gerbang" }
    ]
  },
  { 
    no: 29, kanji: "校", kunyomi: "", onyomi: "コウ", 
    arti: "sekolah", artiEn: "school", kategori: "Benda",
    radikal: "木 (pohon)", goresan: 10,
    mnemonik: "Melambangkan tempat berkumpulnya banyak orang seperti pohon yang rindang.",
    deskripsi: "Digunakan untuk menyebut sekolah, seperti 'kou' (sekolah).",
    contoh: [
      { kata: "学校", baca: "がっこう", arti: "sekolah" },
      { kata: "高校", baca: "こうこう", arti: "SMA" },
      { kata: "校長", baca: "こうちょう", arti: "kepala sekolah" }
    ]
  },
  { 
    no: 30, kanji: "本", kunyomi: "", onyomi: "ホン", 
    arti: "buku", artiEn: "book", kategori: "Benda",
    radikal: "木 (pohon)", goresan: 5,
    mnemonik: "Bentuknya seperti pohon dengan garis horizontal di bawah.",
    deskripsi: "Digunakan untuk menyebut buku, seperti 'hon' (buku).",
    contoh: [
      { kata: "本", baca: "ほん", arti: "buku" },
      { kata: "日本", baca: "にほん", arti: "Jepang" },
      { kata: "本屋", baca: "ほんや", arti: "toko buku" }
    ]
  },
  { 
    no: 72, kanji: "車", kunyomi: "くるま", onyomi: "シャ", 
    arti: "mobil", artiEn: "car", kategori: "Benda",
    deskripsi: "Bentuk lamanya menyerupai kereta yang dilihat dari atas beserta roda-rodanya.",
    contoh: [ { kata: "車", baca: "くるま", arti: "mobil" }, { kata: "電車", baca: "でんしゃ", arti: "kereta listrik" } ]
  },
  { 
    no: 100, kanji: "道", kunyomi: "みち", onyomi: "ドウ・トウ", 
    arti: "jalan", artiEn: "road, way", kategori: "Benda",
    deskripsi: "Bisa berarti jalanan fisik maupun pedoman prinsipil ilmu (misal: Sado - upacara teh, Judo - beladiri).",
    contoh: [ { kata: "道", baca: "みち", arti: "jalan" }, { kata: "水道", baca: "すいどう", arti: "saluran pipa air" } ]
  },
  { 
    no: 103, kanji: "社", kunyomi: "", onyomi: "シャ・ジャ", 
    arti: "perusahaan", artiEn: "company, society", kategori: "Benda",
    deskripsi: "Dahulu berakar pada kata kuil. Kini paling sering dipakai untuk menyebut tempat kerja (perusahaan).",
    contoh: [ { kata: "社会", baca: "しゃかい", arti: "masyarakat" }, { kata: "社長", baca: "しゃちょう", arti: "direktur perusahaan" } ]
  },
  { 
    no: 108, kanji: "国", kunyomi: "くに", onyomi: "コク", 
    arti: "negara", artiEn: "country", kategori: "Benda",
    deskripsi: "Melambangkan wilayah atau batas suatu negara.",
    contoh: [ { kata: "国", baca: "くに", arti: "negara" }, { kata: "外国", baca: "がいこく", arti: "luar negeri" } ]
  },
  { 
    no: 109, kanji: "電", kunyomi: "", onyomi: "デン", 
    arti: "listrik", artiEn: "electricity", kategori: "Benda",
    deskripsi: "Kanji utama untuk teknologi berbasis listrik seperti kereta, telepon, dan lampu.",
    contoh: [ { kata: "電車", baca: "でんしゃ", arti: "kereta listrik" }, { kata: "電話", baca: "でんわ", arti: "telepon" } ]
  },

  // =====================================================
  // 5. SIFAT
  // =====================================================
  { 
    no: 34, kanji: "大", kunyomi: "おおきい", onyomi: "ダイ・タイ", 
    arti: "besar", artiEn: "big", kategori: "Sifat",
    radikal: "大 (besar)", goresan: 3,
    mnemonik: "Bentuknya seperti orang yang merentangkan tangan dan kaki lebar-lebar.",
    deskripsi: "Digunakan untuk menyatakan ukuran besar, seperti 'ookii' (besar) atau 'dai' (besar).",
    contoh: [
      { kata: "大きい", baca: "おおきい", arti: "besar" },
      { kata: "大学", baca: "だいがく", arti: "universitas" },
      { kata: "大人", baca: "おとな", arti: "orang dewasa" }
    ]
  },
  { 
    no: 35, kanji: "小", kunyomi: "ちいさい", onyomi: "ショウ", 
    arti: "kecil", artiEn: "small", kategori: "Sifat",
    radikal: "小 (kecil)", goresan: 3,
    mnemonik: "Bentuknya seperti tiga titik kecil yang tersebar.",
    deskripsi: "Digunakan untuk menyatakan ukuran kecil, seperti 'chiisai' (kecil) atau 'shou' (kecil).",
    contoh: [
      { kata: "小さい", baca: "ちいさい", arti: "kecil" },
      { kata: "小学校", baca: "しょうがっこう", arti: "SD" },
      { kata: "小説", baca: "しょうせつ", arti: "novel" }
    ]
  },
  { 
    no: 36, kanji: "高", kunyomi: "たかい", onyomi: "コウ", 
    arti: "mahal, tinggi", artiEn: "expensive, tall", kategori: "Sifat",
    radikal: "高 (tinggi)", goresan: 10,
    mnemonik: "Bentuknya seperti menara tinggi dengan atap bertingkat.",
    deskripsi: "Digunakan untuk menyatakan harga mahal atau benda tinggi, seperti 'takai' (mahal/tinggi) atau 'kou' (tinggi).",
    contoh: [
      { kata: "高い", baca: "たかい", arti: "mahal, tinggi" },
      { kata: "高校", baca: "こうこう", arti: "SMA" },
      { kata: "高級", baca: "こうきゅう", arti: "mewah" }
    ]
  },
  { 
    no: 74, kanji: "安", kunyomi: "やすい", onyomi: "アン", 
    arti: "murah, aman", artiEn: "cheap, safe", kategori: "Sifat",
    deskripsi: "Menggambarkan 'wanita di bawah atap', yang melambangkan kedamaian dan rasa aman, serta harga yang murah.",
    contoh: [ { kata: "安い", baca: "やすい", arti: "murah" }, { kata: "安全", baca: "あんぜん", arti: "aman" } ]
  },
  { 
    no: 75, kanji: "新", kunyomi: "あたらしい", onyomi: "シン", 
    arti: "baru", artiEn: "new", kategori: "Sifat",
    deskripsi: "Merujuk pada suatu hal, benda, atau informasi yang kondisinya masih baru.",
    contoh: [ { kata: "新しい", baca: "あたらしい", arti: "baru" }, { kata: "新聞", baca: "しんぶん", arti: "koran" } ]
  },
  { 
    no: 76, kanji: "古", kunyomi: "ふるい", onyomi: "コ", 
    arti: "lama, tua", artiEn: "old", kategori: "Sifat",
    deskripsi: "Merujuk pada benda atau kondisi yang sudah usang, lampau, atau tua (bukan untuk usia manusia).",
    contoh: [ { kata: "古い", baca: "ふるい", arti: "lama, tua" }, { kata: "中古", baca: "ちゅうこ", arti: "barang bekas" } ]
  },
  { 
    no: 77, kanji: "長", kunyomi: "ながい", onyomi: "チョウ", 
    arti: "panjang, pemimpin", artiEn: "long, leader", kategori: "Sifat",
    deskripsi: "Memiliki dua arti penting: ukuran benda yang 'panjang' dan posisi hierarki (kepala/pemimpin).",
    contoh: [ { kata: "長い", baca: "ながい", arti: "panjang" }, { kata: "社長", baca: "しゃちょう", arti: "presiden direktur" } ]
  },
  { 
    no: 78, kanji: "多", kunyomi: "おおい", onyomi: "タ", 
    arti: "banyak", artiEn: "many", kategori: "Sifat",
    deskripsi: "Kanji untuk menyatakan jumlah kuantitas yang besar.",
    contoh: [ { kata: "多い", baca: "おおい", arti: "banyak" }, { kata: "多分", baca: "たぶん", arti: "mungkin" } ]
  },
  { 
    no: 79, kanji: "少", kunyomi: "すくない・すこし", onyomi: "ショウ", 
    arti: "sedikit", artiEn: "few, a little", kategori: "Sifat",
    deskripsi: "Digunakan untuk jumlah kuantitas yang kecil atau kurang.",
    contoh: [ { kata: "少し", baca: "すこし", arti: "sedikit" }, { kata: "少ない", baca: "すくない", arti: "sedikit (kuantitas)" } ]
  },
  { 
    no: 80, kanji: "早", kunyomi: "はやい", onyomi: "ソウ・サッ", 
    arti: "cepat", artiEn: "early, fast", kategori: "Sifat",
    deskripsi: "Berarti cepat dari segi waktu (misal: bangun awal atau selesai lebih dulu).",
    contoh: [ { kata: "早い", baca: "はやい", arti: "cepat, awal" } ]
  },
  { 
    no: 110, kanji: "白", kunyomi: "しろ・しろい", onyomi: "ハク", 
    arti: "putih", artiEn: "white", kategori: "Sifat",
    deskripsi: "Salah satu warna dasar N5 untuk menyebut warna putih.",
    contoh: [ { kata: "白い", baca: "しろい", arti: "putih" }, { kata: "面白", baca: "おもしろい", arti: "menarik" } ]
  },

  // =====================================================
  // 6. ORANG
  // =====================================================
  { 
    no: 13, kanji: "人", kunyomi: "ひと", onyomi: "ジン・ニン", 
    arti: "orang", artiEn: "person", kategori: "Orang",
    radikal: "人 (orang)", goresan: 2,
    mnemonik: "Bentuknya seperti dua kaki yang sedang berjalan.",
    deskripsi: "Sangat sering dipakai untuk menyebut orang, seperti 'hito' (orang) atau 'jin' (orang).",
    contoh: [
      { kata: "日本人", baca: "にほんじん", arti: "orang Jepang" },
      { kata: "一人", baca: "ひとり", arti: "satu orang" },
      { kata: "人口", baca: "じんこう", arti: "populasi" }
    ]
  },
  { 
    no: 14, kanji: "女", kunyomi: "おんな", onyomi: "ジョ", 
    arti: "perempuan", artiEn: "woman", kategori: "Orang",
    radikal: "女 (perempuan)", goresan: 3,
    mnemonik: "Bentuknya seperti perempuan yang sedang duduk bersimpuh.",
    deskripsi: "Digunakan untuk menyebut perempuan, seperti 'onna' (perempuan) atau 'jo' (perempuan).",
    contoh: [
      { kata: "女性", baca: "じょせい", arti: "perempuan" },
      { kata: "女の子", baca: "おんなのこ", arti: "anak perempuan" },
      { kata: "彼女", baca: "かのじょ", arti: "dia (perempuan)" }
    ]
  },
  { 
    no: 15, kanji: "男", kunyomi: "おとこ", onyomi: "ダン・ナン", 
    arti: "laki-laki", artiEn: "man", kategori: "Orang",
    radikal: "田 (sawah)", goresan: 7,
    mnemonik: "Gabungan dari '田' (sawah) dan '力' (tenaga).",
    deskripsi: "Digunakan untuk menyebut laki-laki, seperti 'otoko' (laki-laki) atau 'dan' (laki-laki).",
    contoh: [
      { kata: "男性", baca: "だんせい", arti: "laki-laki" },
      { kata: "男の子", baca: "おとこのこ", arti: "anak laki-laki" },
      { kata: "彼氏", baca: "かれし", arti: "dia (laki-laki)" }
    ]
  },
  { 
    no: 19, kanji: "父", kunyomi: "ちち", onyomi: "フ", 
    arti: "ayah", artiEn: "father", kategori: "Orang",
    radikal: "父 (ayah)", goresan: 4,
    mnemonik: "Bentuknya seperti ayah yang membawa tongkat dan memakai topi.",
    deskripsi: "Digunakan untuk menyebut ayah, seperti 'chichi' (ayah) atau 'fu' (ayah).",
    contoh: [
      { kata: "父", baca: "ちち", arti: "ayah (saya)" },
      { kata: "お父さん", baca: "おとうさん", arti: "ayah (orang lain)" },
      { kata: "父親", baca: "ちちおや", arti: "ayah" }
    ]
  },
  { 
    no: 20, kanji: "母", kunyomi: "はは", onyomi: "ボ", 
    arti: "ibu", artiEn: "mother", kategori: "Orang",
    radikal: "毋 (jangan)", goresan: 5,
    mnemonik: "Bentuknya seperti ibu yang sedang menyusui anaknya.",
    deskripsi: "Digunakan untuk menyebut ibu, seperti 'haha' (ibu) atau 'bo' (ibu).",
    contoh: [
      { kata: "母", baca: "はは", arti: "ibu (saya)" },
      { kata: "お母さん", baca: "おかあさん", arti: "ibu (orang lain)" },
      { kata: "母国", baca: "ぼこく", arti: "tanah air" }
    ]
  },
  { 
    no: 21, kanji: "友", kunyomi: "とも", onyomi: "ユウ", 
    arti: "teman", artiEn: "friend", kategori: "Orang",
    radikal: "又 (lagi)", goresan: 4,
    mnemonik: "Bentuknya seperti dua tangan yang saling berjabat.",
    deskripsi: "Digunakan untuk menyebut teman, seperti 'tomo' (teman) atau 'yuu' (teman).",
    contoh: [
      { kata: "友達", baca: "ともだち", arti: "teman" },
      { kata: "親友", baca: "しんゆう", arti: "sahabat" },
      { kata: "友人", baca: "ゆうじん", arti: "teman (formal)" }
    ]
  },
  { 
    no: 55, kanji: "子", kunyomi: "こ", onyomi: "シ", 
    arti: "anak", artiEn: "child", kategori: "Orang",
    deskripsi: "Melambangkan seorang anak kecil. Banyak nama anak perempuan Jepang zaman dulu berakhiran dengan kanji ini.",
    contoh: [ { kata: "子供", baca: "こども", arti: "anak-anak" }, { kata: "女子", baca: "じょし", arti: "anak perempuan / wanita" } ]
  },
  { 
    no: 69, kanji: "名", kunyomi: "な", onyomi: "メイ・ミョウ", 
    arti: "nama", artiEn: "name", kategori: "Orang",
    deskripsi: "Biasa dipadukan dengan kata depan (mae) untuk membentuk kata 'Namae' (Nama).",
    contoh: [ { kata: "名前", baca: "なまえ", arti: "nama" }, { kata: "有名", baca: "ゆうめい", arti: "terkenal" } ]
  },
  { 
    no: 105, kanji: "何", kunyomi: "なに・なん", onyomi: "カ", 
    arti: "apa", artiEn: "what", kategori: "Orang",
    deskripsi: "Kata tanya paling dasar dalam bahasa Jepang untuk menanyakan sesuatu.",
    contoh: [ { kata: "何", baca: "なに", arti: "apa" }, { kata: "何人", baca: "なにじん / なんにおん", arti: "orang mana / berapa orang" } ]
  },

  // =====================================================
  // 7. TUBUH
  // =====================================================
  { 
    no: 16, kanji: "目", kunyomi: "め", onyomi: "モク・ボク", 
    arti: "mata", artiEn: "eye", kategori: "Tubuh",
    radikal: "目 (mata)", goresan: 5,
    mnemonik: "Bentuknya seperti mata yang sedang melihat ke samping.",
    deskripsi: "Digunakan untuk menyebut mata, seperti 'me' (mata) atau 'moku' (mata).",
    contoh: [
      { kata: "目玉", baca: "めだま", arti: "bola mata" },
      { kata: "目的", baca: "もくてき", arti: "tujuan" },
      { kata: "一番目", baca: "いちばんめ", arti: "pertama" }
    ]
  },
  { 
    no: 17, kanji: "口", kunyomi: "くち・ぐち", onyomi: "コウ", 
    arti: "mulut", artiEn: "mouth", kategori: "Tubuh",
    radikal: "口 (mulut)", goresan: 3,
    mnemonik: "Bentuknya seperti kotak terbuka yang melambangkan mulut.",
    deskripsi: "Digunakan untuk menyebut mulut, seperti 'kuchi' (mulut) atau 'kou' (mulut).",
    contoh: [
      { kata: "入口", baca: "いりぐち", arti: "pintu masuk" },
      { kata: "出口", baca: "でぐち", arti: "pintu keluar" },
      { kata: "人口", baca: "じんこう", arti: "populasi" }
    ]
  },
  { 
    no: 18, kanji: "手", kunyomi: "て", onyomi: "シュ", 
    arti: "tangan", artiEn: "hand", kategori: "Tubuh",
    radikal: "手 (tangan)", goresan: 4,
    mnemonik: "Bentuknya seperti tangan dengan jari-jari yang terbuka.",
    deskripsi: "Digunakan untuk menyebut tangan, seperti 'te' (tangan) atau 'shu' (tangan).",
    contoh: [
      { kata: "手紙", baca: "てがみ", arti: "surat" },
      { kata: "上手", baca: "じょうず", arti: "pandai" },
      { kata: "手伝う", baca: "てつだう", arti: "membantu" }
    ]
  },
  { 
    no: 56, kanji: "耳", kunyomi: "みみ", onyomi: "ジ", 
    arti: "telinga", artiEn: "ear", kategori: "Tubuh",
    deskripsi: "Bentuk dasar yang meniru anatomi telinga.",
    contoh: [ { kata: "耳", baca: "みみ", arti: "telinga" } ]
  },
  { 
    no: 57, kanji: "足", kunyomi: "あし・たりる", onyomi: "ソク", 
    arti: "kaki / cukup", artiEn: "leg, foot / sufficient", kategori: "Tubuh",
    deskripsi: "Bisa berarti organ 'kaki', tapi juga bisa bermakna 'cukup' atau 'menambahkan'.",
    contoh: [ { kata: "足", baca: "あし", arti: "kaki" }, { kata: "足りる", baca: "たりる", arti: "cukup" } ]
  },
  { 
    no: 58, kanji: "力", kunyomi: "ちから", onyomi: "リョク・リキ", 
    arti: "tenaga", artiEn: "power", kategori: "Tubuh",
    deskripsi: "Berarti tenaga atau kekuatan. Hati-hati karena bentuknya sangat mirip dengan katakana 'ka' (カ).",
    contoh: [ { kata: "力", baca: "ちから", arti: "tenaga" }, { kata: "力仕事", baca: "ちからしごと", arti: "pekerjaan fisik" } ]
  },

  // =====================================================
  // 8. ALAM
  // =====================================================
  { 
    no: 7, kanji: "山", kunyomi: "やま", onyomi: "サン", 
    arti: "gunung", artiEn: "mountain", kategori: "Alam",
    radikal: "山 (gunung)", goresan: 3,
    mnemonik: "Tiga puncak yang menjulang ke atas melambangkan gunung.",
    deskripsi: "Muncul di nama tempat, seperti 'yama' (gunung) atau 'san' (gunung).",
    contoh: [
      { kata: "富士山", baca: "ふじさん", arti: "Gunung Fuji" },
      { kata: "山道", baca: "やまみち", arti: "jalan gunung" },
      { kata: "登山", baca: "とざん", arti: "pendakian gunung" }
    ]
  },
  { 
    no: 8, kanji: "川", kunyomi: "かわ", onyomi: "セン", 
    arti: "sungai", artiEn: "river", kategori: "Alam",
    radikal: "川 (sungai)", goresan: 3,
    mnemonik: "Tiga garis vertikal yang mengalir melambangkan aliran sungai.",
    deskripsi: "Digunakan untuk menyebut sungai, seperti 'kawa' (sungai) atau 'sen' (sungai).",
    contoh: [
      { kata: "川岸", baca: "かわぎし", arti: "tepi sungai" },
      { kata: "小川", baca: "おがわ", arti: "sungai kecil" },
      { kata: "川口", baca: "かわぐち", arti: "muara sungai" }
    ]
  },
  { 
    no: 9, kanji: "木", kunyomi: "き", onyomi: "モク", 
    arti: "pohon", artiEn: "tree", kategori: "Alam",
    radikal: "木 (pohon)", goresan: 4,
    mnemonik: "Bentuknya seperti pohon dengan batang dan dahan.",
    deskripsi: "Sering dipakai dalam kata benda seperti 'ki' (pohon) atau 'moku' (kayu).",
    contoh: [
      { kata: "木曜日", baca: "もくようび", arti: "hari Kamis" },
      { kata: "木村", baca: "きむら", arti: "Kimura (nama keluarga)" },
      { kata: "大木", baca: "たいぼく", arti: "pohon besar" }
    ]
  },
  { 
    no: 27, kanji: "雨", kunyomi: "あめ・あま", onyomi: "ウ", 
    arti: "hujan", artiEn: "rain", kategori: "Alam",
    radikal: "雨 (hujan)", goresan: 8,
    mnemonik: "Bentuknya seperti awan dengan tetesan air yang jatuh.",
    deskripsi: "Digunakan untuk menyebut hujan, seperti 'ame' (hujan) atau 'u' (hujan).",
    contoh: [
      { kata: "雨", baca: "あめ", arti: "hujan" },
      { kata: "大雨", baca: "おおあめ", arti: "hujan lebat" },
      { kata: "雨天", baca: "うてん", arti: "cuaca hujan" }
    ]
  },
  { 
    no: 31, kanji: "牛", kunyomi: "うし", onyomi: "ギュウ", 
    arti: "sapi", artiEn: "cow", kategori: "Alam",
    radikal: "牛 (sapi)", goresan: 4,
    mnemonik: "Bentuknya seperti kepala sapi dengan tanduk.",
    deskripsi: "Digunakan untuk menyebut sapi, seperti 'ushi' (sapi) atau 'gyuu' (sapi).",
    contoh: [
      { kata: "牛肉", baca: "ぎゅうにく", arti: "daging sapi" },
      { kata: "牛乳", baca: "ぎゅうにゅう", arti: "susu sapi" },
      { kata: "子牛", baca: "こうし", arti: "anak sapi" }
    ]
  },
  { 
    no: 32, kanji: "魚", kunyomi: "さかな", onyomi: "ギョ", 
    arti: "ikan", artiEn: "fish", kategori: "Alam",
    radikal: "魚 (ikan)", goresan: 11,
    mnemonik: "Bentuknya seperti ikan dengan ekor dan sirip.",
    deskripsi: "Digunakan untuk menyebut ikan, seperti 'sakana' (ikan) atau 'gyo' (ikan).",
    contoh: [
      { kata: "魚", baca: "さかな", arti: "ikan" },
      { kata: "金魚", baca: "きんぎょ", arti: "ikan mas" },
      { kata: "魚市場", baca: "うおいちば", arti: "pasar ikan" }
    ]
  },
  { 
    no: 33, kanji: "馬", kunyomi: "うま", onyomi: "バ", 
    arti: "kuda", artiEn: "horse", kategori: "Alam",
    radikal: "馬 (kuda)", goresan: 10,
    mnemonik: "Bentuknya seperti kuda yang sedang berlari.",
    deskripsi: "Digunakan untuk menyebut kuda, seperti 'uma' (kuda) atau 'ba' (kuda).",
    contoh: [
      { kata: "馬", baca: "うま", arti: "kuda" },
      { kata: "競馬", baca: "けいば", arti: "balap kuda" },
      { kata: "馬車", baca: "ばしゃ", arti: "kereta kuda" }
    ]
  },
  { 
    no: 48, kanji: "田", kunyomi: "", onyomi: "デン・タ", 
    arti: "sawah", artiEn: "rice field", kategori: "Alam",
    deskripsi: "Melambangkan petak-petak sawah. Sangat sering muncul di nama keluarga orang Jepang.",
    contoh: [ { kata: "水田", baca: "すいでん", arti: "sawah berair" }, { kata: "山田", baca: "やまだ", arti: "Yamada (nama orang)" } ]
  },
  { 
    no: 49, kanji: "火", kunyomi: "ひ", onyomi: "カ", 
    arti: "api", artiEn: "fire", kategori: "Alam",
    deskripsi: "Mewakili kobaran api. Digunakan untuk menamai hari Selasa.",
    contoh: [ { kata: "火曜日", baca: "かようび", arti: "hari Selasa" }, { kata: "花火", baca: "はなび", arti: "kembang api" } ]
  },
  { 
    no: 50, kanji: "水", kunyomi: "みず", onyomi: "スイ", 
    arti: "air", artiEn: "water", kategori: "Alam",
    deskripsi: "Mewakili elemen air dan sering menjadi komponen pembentuk kanji lain.",
    contoh: [ { kata: "水曜日", baca: "すいようび", arti: "hari Rabu" }, { kata: "水道", baca: "すいどう", arti: "saluran air" } ]
  },
  { 
    no: 51, kanji: "金", kunyomi: "かね・かな", onyomi: "キン・コン", 
    arti: "uang, logam emas", artiEn: "money, gold", kategori: "Alam",
    deskripsi: "Berarti logam mulia, emas, atau uang secara umum. Menjadi simbol kekayaan.",
    contoh: [ { kata: "お金", baca: "おかね", arti: "uang" }, { kata: "金曜日", baca: "きんようび", arti: "hari Jumat" } ]
  },
  { 
    no: 52, kanji: "土", kunyomi: "つち", onyomi: "ド・ト", 
    arti: "tanah", artiEn: "soil, earth", kategori: "Alam",
    deskripsi: "Melambangkan elemen tanah atau bumi. Dipakai untuk nama hari Sabtu.",
    contoh: [ { kata: "土曜日", baca: "どようび", arti: "hari Sabtu" }, { kata: "お土産", baca: "おみやげ", arti: "oleh-oleh" } ]
  },
  { 
    no: 70, kanji: "貝", kunyomi: "かい", onyomi: "バイ", 
    arti: "kerang", artiEn: "shellfish", kategori: "Alam",
    deskripsi: "Dahulu cangkang kerang dipakai sebagai uang.",
    contoh: [ { kata: "貝", baca: "かい", arti: "kerang" } ]
  },
  { 
    no: 71, kanji: "天", kunyomi: "", onyomi: "テン", 
    arti: "atas, langit", artiEn: "heaven, sky", kategori: "Alam",
    deskripsi: "Berarti langit atau angkasa. Sering digunakan dalam kata terkait cuaca.",
    contoh: [ { kata: "天気", baca: "てんき", arti: "cuaca" }, { kata: "天国", baca: "てんごく", arti: "surga" } ]
  },
  { 
    no: 104, kanji: "花", kunyomi: "はな", onyomi: "カ", 
    arti: "bunga", artiEn: "flower", kategori: "Alam",
    deskripsi: "Menggambarkan tanaman dengan kelopak bunga di atasnya. Sangat sering dipakai untuk musim semi.",
    contoh: [ { kata: "花", baca: "はな", arti: "bunga" }, { kata: "花火", baca: "はなび", arti: "kembang api" } ]
  },
  { 
    no: 107, kanji: "空", kunyomi: "そら・あく", onyomi: "クウ", 
    arti: "langit, kosong", artiEn: "sky, empty", kategori: "Alam",
    deskripsi: "Bisa berarti langit yang membentang atau sesuatu yang bersifat kosong.",
    contoh: [ { kata: "空", baca: "そら", arti: "langit" }, { kata: "空気", baca: "くうき", arti: "udara" } ]
  },

  // =====================================================
  // 9. KATA KERJA
  // =====================================================
  { 
    no: 25, kanji: "生", kunyomi: "いきる・なま", onyomi: "セイ・ショウ", 
    arti: "hidup, mentah", artiEn: "life, raw", kategori: "Kata kerja",
    radikal: "生 (hidup)", goresan: 5,
    mnemonik: "Bentuknya seperti tunas yang tumbuh dari tanah.",
    deskripsi: "Digunakan untuk menyebut kehidupan, seperti 'sei' (hidup) atau 'nama' (mentah).",
    contoh: [
      { kata: "学生", baca: "がくせい", arti: "pelajar" },
      { kata: "生活", baca: "せいかつ", arti: "kehidupan" },
      { kata: "生まれる", baca: "うまれる", arti: "lahir" }
    ]
  },
  { 
    no: 26, kanji: "気", kunyomi: "", onyomi: "キ・ケ", 
    arti: "jiwa, semangat", artiEn: "spirit, mood", kategori: "Kata kerja",
    radikal: "气 (udara)", goresan: 6,
    mnemonik: "Bentuknya seperti uap yang naik dari beras.",
    deskripsi: "Sering dipakai dalam kosakata perasaan dan suasana hati, seperti 'ki' (jiwa) atau 'genki' (sehat).",
    contoh: [
      { kata: "元気", baca: "げんき", arti: "sehat, semangat" },
      { kata: "天気", baca: "てんき", arti: "cuaca" },
      { kata: "気分", baca: "きぶん", arti: "perasaan" }
    ]
  },
  { 
    no: 28, kanji: "学", kunyomi: "まなぶ", onyomi: "ガク", 
    arti: "mempelajari", artiEn: "study", kategori: "Kata kerja",
    radikal: "子 (anak)", goresan: 8,
    mnemonik: "Bentuknya seperti anak (子) yang sedang belajar di bawah atap.",
    deskripsi: "Digunakan untuk menyebut kegiatan belajar, seperti 'gaku' (belajar) atau 'manabu' (belajar).",
    contoh: [
      { kata: "学生", baca: "がくせい", arti: "pelajar" },
      { kata: "学校", baca: "がっこう", arti: "sekolah" },
      { kata: "大学", baca: "だいがく", arti: "universitas" }
    ]
  },
  { 
    no: 81, kanji: "行", kunyomi: "いく・おこなう", onyomi: "コウ・ギョウ", 
    arti: "pergi, mengadakan", artiEn: "go, conduct", kategori: "Kata kerja",
    deskripsi: "Salah satu kata kerja paling dasar yang berarti pergi menuju suatu tempat.",
    contoh: [ { kata: "行く", baca: "いく", arti: "pergi" }, { kata: "銀行", baca: "ぎんこう", arti: "bank" } ]
  },
  { 
    no: 82, kanji: "来", kunyomi: "くる", onyomi: "ライ", 
    arti: "datang", artiEn: "come", kategori: "Kata kerja",
    deskripsi: "Kata kerja dasar untuk 'datang', kebalikan dari 行く (iku).",
    contoh: [ { kata: "来る", baca: "くる", arti: "datang" }, { kata: "来月", baca: "らいげつ", arti: "bulan depan" } ]
  },
  { 
    no: 83, kanji: "食", kunyomi: "たべる", onyomi: "ショク", 
    arti: "makan", artiEn: "eat", kategori: "Kata kerja",
    deskripsi: "Digunakan untuk semua kata yang berhubungan dengan kegiatan mengonsumsi atau makanan.",
    contoh: [ { kata: "食べる", baca: "たべる", arti: "makan" }, { kata: "食堂", baca: "しょくどう", arti: "kantin, ruang makan" } ]
  },
  { 
    no: 84, kanji: "見", kunyomi: "みる", onyomi: "ケン", 
    arti: "melihat", artiEn: "see", kategori: "Kata kerja",
    deskripsi: "Menggambarkan 'mata' dengan kaki di bawahnya, melambangkan aktivitas melihat, menonton, atau mengamati.",
    contoh: [ { kata: "見る", baca: "みる", arti: "melihat" }, { kata: "見せる", baca: "みせる", arti: "memperlihatkan" } ]
  },
  { 
    no: 85, kanji: "入", kunyomi: "はいる・いれる", onyomi: "ニュウ", 
    arti: "masuk, memasukan", artiEn: "enter, insert", kategori: "Kata kerja",
    deskripsi: "Hati-hati, kanji ini sangat mirip dengan '人' (orang), namun coretan pertamanya dari kanan ke kiri.",
    contoh: [ { kata: "入る", baca: "はいる", arti: "masuk" }, { kata: "入れる", baca: "いれる", arti: "memasukkan" } ]
  },
  { 
    no: 86, kanji: "出", kunyomi: "でる・だす", onyomi: "シュツ", 
    arti: "keluar, mengeluarkan", artiEn: "exit, take out", kategori: "Kata kerja",
    deskripsi: "Kata kerja dasar yang bermakna meninggalkan ruang (keluar).",
    contoh: [ { kata: "出る", baca: "でる", arti: "keluar" }, { kata: "出す", baca: "だす", arti: "mengeluarkan" } ]
  },
  { 
    no: 87, kanji: "立", kunyomi: "たつ", onyomi: "リツ・リュウ", 
    arti: "berdiri", artiEn: "stand", kategori: "Kata kerja",
    deskripsi: "Melambangkan aktivitas berdiri tegak dari suatu permukaan.",
    contoh: [ { kata: "立つ", baca: "たつ", arti: "berdiri" } ]
  },
  { 
    no: 88, kanji: "書", kunyomi: "かく", onyomi: "ショ", 
    arti: "menulis", artiEn: "write", kategori: "Kata kerja",
    deskripsi: "Digunakan untuk aktivitas yang berhubungan dengan teks, pena, dan membaca atau menulis dokumen.",
    contoh: [ { kata: "書く", baca: "かく", arti: "menulis" }, { kata: "辞書", baca: "じしょ", arti: "kamus" } ]
  },
  { 
    no: 89, kanji: "言", kunyomi: "いう", onyomi: "ゲン・ゴン", 
    arti: "berbicara", artiEn: "say, word", kategori: "Kata kerja",
    deskripsi: "Sering menjadi bagian radikal bagi kanji lain yang berhubungan dengan komunikasi mulut.",
    contoh: [ { kata: "言う", baca: "いう", arti: "berkata" }, { kata: "言葉", baca: "ことば", arti: "kosakata, bahasa" } ]
  },
  { 
    no: 90, kanji: "飲", kunyomi: "のむ", onyomi: "イン", 
    arti: "minum", artiEn: "drink", kategori: "Kata kerja",
    deskripsi: "Mengandung radikal 'makanan' di sebelah kiri. Digunakan untuk aktivitas meneguk air.",
    contoh: [ { kata: "飲む", baca: "のむ", arti: "minum" }, { kata: "飲み物", baca: "のみもの", arti: "minuman" } ]
  },
  { 
    no: 91, kanji: "話", kunyomi: "はなす・はなし", onyomi: "ワ", 
    arti: "berbicara, pembicaraan", artiEn: "speak, talk", kategori: "Kata kerja",
    deskripsi: "Gabungan kata 'berbicara' (言) dan lidah/mulut, merujuk pada suatu obrolan atau percakapan interaktif.",
    contoh: [ { kata: "話す", baca: "はなす", arti: "berbicara" }, { kata: "電話", baca: "でんわ", arti: "telepon" } ]
  },
  { 
    no: 92, kanji: "読", kunyomi: "よむ", onyomi: "ドク・トク", 
    arti: "membaca", artiEn: "read", kategori: "Kata kerja",
    deskripsi: "Terdiri dari radikal 'berbicara' dan 'menjual'. Merupakan aktivitas melafalkan atau menangkap arti tulisan.",
    contoh: [ { kata: "読む", baca: "よむ", arti: "membaca" }, { kata: "読書", baca: "どくしょ", arti: "kegiatan membaca buku" } ]
  },
  { 
    no: 93, kanji: "語", kunyomi: "かたる", onyomi: "ゴ", 
    arti: "bercerita", artiEn: "word, language", kategori: "Kata kerja",
    deskripsi: "Sebagian besar digunakan sebagai akhiran yang berarti 'bahasa' (misal: Nihon-go).",
    contoh: [ { kata: "日本語", baca: "にほんご", arti: "Bahasa Jepang" }, { kata: "英語", baca: "えいご", arti: "Bahasa Inggris" } ]
  },
  { 
    no: 95, kanji: "聞", kunyomi: "きく", onyomi: "ブン・モン", 
    arti: "mendengar", artiEn: "hear, listen", kategori: "Kata kerja",
    deskripsi: "Menggambarkan 'telinga' (耳) yang berada di antara gerbang pintu (門), melambangkan aktivitas menyimak.",
    contoh: [ { kata: "聞く", baca: "きく", arti: "mendengar, bertanya" }, { kata: "新聞", baca: "しんぶん", arti: "koran" } ]
  },
  { 
    no: 96, kanji: "買", kunyomi: "かう", onyomi: "バイ", 
    arti: "membeli", artiEn: "buy", kategori: "Kata kerja",
    deskripsi: "Memiliki bentuk 'kerang' di bawahnya yang dulu dipakai sebagai simbol uang.",
    contoh: [ { kata: "買う", baca: "かう", arti: "membeli" }, { kata: "買い物", baca: "かいもの", arti: "belanja" } ]
  },
  { 
    no: 97, kanji: "休", kunyomi: "やすむ", onyomi: "キュウ", 
    arti: "istirahat, libur", artiEn: "rest, holiday", kategori: "Kata kerja",
    deskripsi: "Melukiskan seseorang (人) yang sedang bersandar santai pada sebuah pohon (木).",
    contoh: [ { kata: "休む", baca: "やすむ", arti: "istirahat, absen" }, { kata: "休み", baca: "やすみ", arti: "hari libur" } ]
  },
  { 
    no: 102, kanji: "会", kunyomi: "あう", onyomi: "カイ", 
    arti: "bertemu", artiEn: "meet", kategori: "Kata kerja",
    deskripsi: "Merupakan pertemuan antara dua orang atau perkumpulan organisasi / pertemuan orang banyak.",
    contoh: [ { kata: "会う", baca: "あう", arti: "bertemu" }, { kata: "会社", baca: "かいしゃ", arti: "perusahaan" } ]
  },

  //KANJI TAMBAHAN TOTAL ADA 40+
  {
  no: 111, kanji: "朝", kunyomi: "あさ", onyomi: "チョウ",
  arti: "pagi", artiEn: "morning", kategori: "Waktu",
  deskripsi: "Digunakan untuk menyebut waktu pagi.",
  contoh: [
    { kata: "朝", baca: "あさ", arti: "pagi" },
    { kata: "毎朝", baca: "まいあさ", arti: "setiap pagi" }
  ]
},

{
  no: 112, kanji: "昼", kunyomi: "ひる", onyomi: "チュウ",
  arti: "siang", artiEn: "noon / daytime", kategori: "Waktu",
  deskripsi: "Digunakan untuk menyebut waktu siang.",
  contoh: [
    { kata: "昼", baca: "ひる", arti: "siang" },
    { kata: "昼ご飯", baca: "ひるごはん", arti: "makan siang" }
  ]
},

{
  no: 113, kanji: "夜", kunyomi: "よる・よ", onyomi: "ヤ",
  arti: "malam", artiEn: "night", kategori: "Waktu",
  deskripsi: "Digunakan untuk menyebut waktu malam.",
  contoh: [
    { kata: "夜", baca: "よる", arti: "malam" },
    { kata: "今夜", baca: "こんや", arti: "malam ini" }
  ]
},

{
  no: 114, kanji: "近", kunyomi: "ちかい", onyomi: "キン",
  arti: "dekat", artiEn: "near", kategori: "Arah",
  deskripsi: "Digunakan untuk menunjukkan sesuatu yang dekat.",
  contoh: [
    { kata: "近い", baca: "ちかい", arti: "dekat" },
    { kata: "近く", baca: "ちかく", arti: "dekat / sekitar" }
  ]
},

{
  no: 115, kanji: "遠", kunyomi: "とおい", onyomi: "エン・オン",
  arti: "jauh", artiEn: "far", kategori: "Arah",
  deskripsi: "Digunakan untuk menunjukkan sesuatu yang jauh.",
  contoh: [
    { kata: "遠い", baca: "とおい", arti: "jauh" },
    { kata: "遠く", baca: "とおく", arti: "tempat jauh" }
  ]
},

{
  no: 116, kanji: "横", kunyomi: "よこ", onyomi: "オウ",
  arti: "samping", artiEn: "side", kategori: "Arah",
  deskripsi: "Digunakan untuk menunjukkan posisi di samping.",
  contoh: [
    { kata: "横", baca: "よこ", arti: "samping" },
    { kata: "横に", baca: "よこに", arti: "di samping" }
  ]
},

{
  no: 117, kanji: "家", kunyomi: "いえ・うち", onyomi: "カ・ケ",
  arti: "rumah", artiEn: "house / home", kategori: "Benda",
  deskripsi: "Kanji dasar untuk rumah atau tempat tinggal.",
  contoh: [
    { kata: "家", baca: "いえ", arti: "rumah" },
    { kata: "家族", baca: "かぞく", arti: "keluarga" }
  ]
},

{
  no: 118, kanji: "室", kunyomi: "むろ", onyomi: "シツ",
  arti: "ruangan", artiEn: "room", kategori: "Benda",
  deskripsi: "Digunakan untuk kata yang berkaitan dengan ruangan.",
  contoh: [
    { kata: "教室", baca: "きょうしつ", arti: "ruang kelas" },
    { kata: "室内", baca: "しつない", arti: "di dalam ruangan" }
  ]
},

{
  no: 119, kanji: "字", kunyomi: "あざ", onyomi: "ジ",
  arti: "huruf", artiEn: "letter / character", kategori: "Benda",
  deskripsi: "Digunakan untuk menyebut huruf atau karakter tulisan.",
  contoh: [
    { kata: "字", baca: "じ", arti: "huruf" },
    { kata: "漢字", baca: "かんじ", arti: "kanji" }
  ]
},

{
  no: 120, kanji: "文", kunyomi: "ふみ", onyomi: "ブン・モン",
  arti: "kalimat / tulisan", artiEn: "sentence / writing", kategori: "Benda",
  deskripsi: "Kanji yang berkaitan dengan kalimat dan tulisan.",
  contoh: [
    { kata: "文", baca: "ぶん", arti: "kalimat" },
    { kata: "作文", baca: "さくぶん", arti: "karangan" }
  ]
},

{
  no: 121, kanji: "顔", kunyomi: "かお", onyomi: "ガン",
  arti: "wajah", artiEn: "face", kategori: "Tubuh",
  deskripsi: "Kanji dasar untuk menyebut wajah.",
  contoh: [
    { kata: "顔", baca: "かお", arti: "wajah" },
    { kata: "笑顔", baca: "えがお", arti: "wajah tersenyum" }
  ]
},

{
  no: 122, kanji: "体", kunyomi: "からだ", onyomi: "タイ・テイ",
  arti: "tubuh", artiEn: "body", kategori: "Tubuh",
  deskripsi: "Kanji dasar untuk menyebut tubuh.",
  contoh: [
    { kata: "体", baca: "からだ", arti: "tubuh" },
    { kata: "体力", baca: "たいりょく", arti: "kekuatan fisik" }
  ]
},

{
  no: 123, kanji: "首", kunyomi: "くび", onyomi: "シュ",
  arti: "leher", artiEn: "neck", kategori: "Tubuh",
  deskripsi: "Digunakan untuk menyebut leher.",
  contoh: [
    { kata: "首", baca: "くび", arti: "leher" }
  ]
},

{
  no: 124, kanji: "兄", kunyomi: "あに", onyomi: "ケイ・キョウ",
  arti: "kakak laki-laki", artiEn: "older brother", kategori: "Orang",
  deskripsi: "Digunakan untuk menyebut kakak laki-laki.",
  contoh: [
    { kata: "兄", baca: "あに", arti: "kakak laki-laki" },
    { kata: "お兄さん", baca: "おにいさん", arti: "kakak laki-laki" }
  ]
},

{
  no: 125, kanji: "姉", kunyomi: "あね", onyomi: "シ",
  arti: "kakak perempuan", artiEn: "older sister", kategori: "Orang",
  deskripsi: "Digunakan untuk menyebut kakak perempuan.",
  contoh: [
    { kata: "姉", baca: "あね", arti: "kakak perempuan" },
    { kata: "お姉さん", baca: "おねえさん", arti: "kakak perempuan" }
  ]
},

{
  no: 126, kanji: "弟", kunyomi: "おとうと", onyomi: "テイ・ダイ",
  arti: "adik laki-laki", artiEn: "younger brother", kategori: "Orang",
  deskripsi: "Digunakan untuk menyebut adik laki-laki.",
  contoh: [
    { kata: "弟", baca: "おとうと", arti: "adik laki-laki" },
    { kata: "弟さん", baca: "おとうとさん", arti: "adik laki-laki" }
  ]
},

{
  no: 127, kanji: "妹", kunyomi: "いもうと", onyomi: "マイ",
  arti: "adik perempuan", artiEn: "younger sister", kategori: "Orang",
  deskripsi: "Digunakan untuk menyebut adik perempuan.",
  contoh: [
    { kata: "妹", baca: "いもうと", arti: "adik perempuan" },
    { kata: "妹さん", baca: "いもうとさん", arti: "adik perempuan" }
  ]
},

{
  no: 128, kanji: "医", kunyomi: "", onyomi: "イ",
  arti: "kedokteran", artiEn: "medicine", kategori: "Orang",
  deskripsi: "Kanji yang sering digunakan dalam kata yang berkaitan dengan dokter dan kedokteran.",
  contoh: [
    { kata: "医者", baca: "いしゃ", arti: "dokter" },
    { kata: "医学", baca: "いがく", arti: "ilmu kedokteran" }
  ]
},

{
  no: 129, kanji: "者", kunyomi: "もの", onyomi: "シャ",
  arti: "orang", artiEn: "person", kategori: "Orang",
  deskripsi: "Kanji yang digunakan dalam berbagai kata untuk menyebut orang.",
  contoh: [
    { kata: "医者", baca: "いしゃ", arti: "dokter" },
    { kata: "若者", baca: "わかもの", arti: "orang muda" }
  ]
},

{
  no: 130, kanji: "林", kunyomi: "はやし", onyomi: "リン",
  arti: "hutan kecil", artiEn: "woods / grove", kategori: "Alam",
  deskripsi: "Kanji untuk kawasan yang dipenuhi pepohonan.",
  contoh: [
    { kata: "林", baca: "はやし", arti: "hutan kecil" },
    { kata: "森林", baca: "しんりん", arti: "hutan" }
  ]
},

{
  no: 131, kanji: "森", kunyomi: "もり", onyomi: "シン",
  arti: "hutan", artiEn: "forest", kategori: "Alam",
  deskripsi: "Kanji dasar untuk menyebut hutan.",
  contoh: [
    { kata: "森", baca: "もり", arti: "hutan" },
    { kata: "森林", baca: "しんりん", arti: "hutan" }
  ]
},

{
  no: 132, kanji: "海", kunyomi: "うみ", onyomi: "カイ",
  arti: "laut", artiEn: "sea", kategori: "Alam",
  deskripsi: "Kanji dasar untuk menyebut laut.",
  contoh: [
    { kata: "海", baca: "うみ", arti: "laut" },
    { kata: "海外", baca: "かいがい", arti: "luar negeri" }
  ]
},

{
  no: 133, kanji: "石", kunyomi: "いし", onyomi: "セキ・シャク",
  arti: "batu", artiEn: "stone", kategori: "Alam",
  deskripsi: "Digunakan untuk menyebut batu.",
  contoh: [
    { kata: "石", baca: "いし", arti: "batu" }
  ]
},

{
  no: 134, kanji: "明", kunyomi: "あかるい・あきらか", onyomi: "メイ・ミョウ",
  arti: "terang", artiEn: "bright", kategori: "Sifat",
  deskripsi: "Digunakan untuk menggambarkan sesuatu yang terang atau cerah.",
  contoh: [
    { kata: "明るい", baca: "あかるい", arti: "terang / ceria" }
  ]
},

{
  no: 135, kanji: "暗", kunyomi: "くらい", onyomi: "アン",
  arti: "gelap", artiEn: "dark", kategori: "Sifat",
  deskripsi: "Digunakan untuk menggambarkan sesuatu yang gelap.",
  contoh: [
    { kata: "暗い", baca: "くらい", arti: "gelap" }
  ]
},

{
  no: 136, kanji: "広", kunyomi: "ひろい・ひろがる", onyomi: "コウ",
  arti: "luas", artiEn: "wide / spacious", kategori: "Sifat",
  deskripsi: "Digunakan untuk menggambarkan sesuatu yang luas.",
  contoh: [
    { kata: "広い", baca: "ひろい", arti: "luas" },
    { kata: "広場", baca: "ひろば", arti: "lapangan" }
  ]
},

{
  no: 137, kanji: "低", kunyomi: "ひくい", onyomi: "テイ",
  arti: "rendah", artiEn: "low", kategori: "Sifat",
  deskripsi: "Digunakan untuk menggambarkan sesuatu yang rendah.",
  contoh: [
    { kata: "低い", baca: "ひくい", arti: "rendah" }
  ]
},

{
  no: 138, kanji: "重", kunyomi: "おもい・かさねる", onyomi: "ジュウ・チョウ",
  arti: "berat", artiEn: "heavy", kategori: "Sifat",
  deskripsi: "Digunakan untuk menggambarkan sesuatu yang berat.",
  contoh: [
    { kata: "重い", baca: "おもい", arti: "berat" }
  ]
},

{
  no: 139, kanji: "軽", kunyomi: "かるい", onyomi: "ケイ",
  arti: "ringan", artiEn: "light", kategori: "Sifat",
  deskripsi: "Digunakan untuk menggambarkan sesuatu yang ringan.",
  contoh: [
    { kata: "軽い", baca: "かるい", arti: "ringan" }
  ]
},

{
  no: 140, kanji: "思", kunyomi: "おもう", onyomi: "シ",
  arti: "berpikir", artiEn: "think", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan pikiran atau pendapat.",
  contoh: [
    { kata: "思う", baca: "おもう", arti: "berpikir / merasa" },
    { kata: "思います", baca: "おもいます", arti: "saya pikir" }
  ]
},

{
  no: 141, kanji: "知", kunyomi: "しる", onyomi: "チ",
  arti: "tahu", artiEn: "know", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan mengetahui sesuatu.",
  contoh: [
    { kata: "知る", baca: "しる", arti: "mengetahui" },
    { kata: "知っています", baca: "しっています", arti: "mengetahui" }
  ]
},

{
  no: 142, kanji: "作", kunyomi: "つくる", onyomi: "サク・サ",
  arti: "membuat", artiEn: "make", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan kegiatan membuat sesuatu.",
  contoh: [
    { kata: "作る", baca: "つくる", arti: "membuat" },
    { kata: "作ります", baca: "つくります", arti: "membuat" }
  ]
},

{
  no: 143, kanji: "使", kunyomi: "つかう", onyomi: "シ",
  arti: "menggunakan", artiEn: "use", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan kegiatan menggunakan sesuatu.",
  contoh: [
    { kata: "使う", baca: "つかう", arti: "menggunakan" },
    { kata: "使います", baca: "つかいます", arti: "menggunakan" }
  ]
},

{
  no: 144, kanji: "持", kunyomi: "もつ", onyomi: "ジ",
  arti: "membawa / memegang", artiEn: "hold / carry", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan membawa atau memegang sesuatu.",
  contoh: [
    { kata: "持つ", baca: "もつ", arti: "membawa / memegang" },
    { kata: "持って", baca: "もって", arti: "bawa / pegang" }
  ]
},

{
  no: 145, kanji: "開", kunyomi: "あく・あける・ひらく", onyomi: "カイ",
  arti: "membuka", artiEn: "open", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan membuka atau terbuka.",
  contoh: [
    { kata: "開ける", baca: "あける", arti: "membuka" },
    { kata: "開く", baca: "あく", arti: "terbuka" }
  ]
},

{
  no: 146, kanji: "閉", kunyomi: "しまる・しめる", onyomi: "ヘイ",
  arti: "menutup", artiEn: "close", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan menutup atau tertutup.",
  contoh: [
    { kata: "閉める", baca: "しめる", arti: "menutup" },
    { kata: "閉まる", baca: "しまる", arti: "tertutup" }
  ]
},

{
  no: 147, kanji: "帰", kunyomi: "かえる", onyomi: "キ",
  arti: "pulang", artiEn: "return / go home", kategori: "Kata kerja",
  deskripsi: "Kanji dasar yang sering digunakan untuk kegiatan pulang.",
  contoh: [
    { kata: "帰る", baca: "かえる", arti: "pulang" },
    { kata: "帰ります", baca: "かえります", arti: "pulang" }
  ]
},

{
  no: 148, kanji: "歩", kunyomi: "あるく", onyomi: "ホ・ブ・フ",
  arti: "berjalan", artiEn: "walk", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan kegiatan berjalan kaki.",
  contoh: [
    { kata: "歩く", baca: "あるく", arti: "berjalan" },
    { kata: "歩いて", baca: "あるいて", arti: "berjalanlah / dengan berjalan" }
  ]
},

{
  no: 149, kanji: "走", kunyomi: "はしる", onyomi: "ソウ",
  arti: "berlari", artiEn: "run", kategori: "Kata kerja",
  deskripsi: "Digunakan untuk menyatakan kegiatan berlari.",
  contoh: [
    { kata: "走る", baca: "はしる", arti: "berlari" },
    { kata: "走ります", baca: "はしります", arti: "berlari" }
  ]
},

{
  no: 150, kanji: "起", kunyomi: "おきる・おこす", onyomi: "キ",
  arti: "bangun / membangunkan", artiEn: "wake up / get up", kategori: "Kata kerja",
  deskripsi: "Kanji dasar yang sering digunakan untuk kegiatan bangun.",
  contoh: [
    { kata: "起きる", baca: "おきる", arti: "bangun" },
    { kata: "起きます", baca: "おきます", arti: "bangun" }
  ]
},
// Tambahan=====================================================
  // ALAM
  // =====================================================
  { 
    no: 151, kanji: "雲", kunyomi: "くも", onyomi: "ウン", 
    arti: "awan", artiEn: "cloud", kategori: "Alam", 
    radikal: "雨 (hujan)", goresan: 12,
    mnemonik: "Awan (雲) terbentuk dari hujan (雨) dan uap yang berkumpul (云).",
    deskripsi: "Kanji untuk menyebut awan di langit.", 
    contoh: [{ kata: "雲", baca: "くも", arti: "awan" }] 
  },
  { 
    no: 152, kanji: "風", kunyomi: "かぜ", onyomi: "フウ", 
    arti: "angin", artiEn: "wind", kategori: "Alam", 
    radikal: "風 (angin)", goresan: 9,
    mnemonik: "Bayangkan angin yang membawa serangga kecil — bentuknya seperti wadah dengan serangga di dalam.",
    deskripsi: "Kanji untuk menyebut angin atau flu.", 
    contoh: [{ kata: "風", baca: "かぜ", arti: "angin" }] 
  },
  { 
    no: 153, kanji: "雪", kunyomi: "ゆき", onyomi: "セツ", 
    arti: "salju", artiEn: "snow", kategori: "Alam", 
    radikal: "雨 (hujan)", goresan: 11,
    mnemonik: "Hujan (雨) yang turun lalu dibersihkan dengan sapu (彐) — itulah salju.",
    deskripsi: "Kanji dasar untuk menyebut salju.", 
    contoh: [{ kata: "雪", baca: "ゆき", arti: "salju" }] 
  },
  { 
    no: 154, kanji: "星", kunyomi: "ほし", onyomi: "セイ", 
    arti: "bintang", artiEn: "star", kategori: "Alam", 
    radikal: "日 (matahari)", goresan: 9,
    mnemonik: "Matahari (日) yang muncul (生) di malam hari — itulah bintang.",
    deskripsi: "Kanji untuk menyebut bintang di langit.", 
    contoh: [{ kata: "星", baca: "ほし", arti: "bintang" }] 
  },
  { 
    no: 155, kanji: "葉", kunyomi: "は", onyomi: "ヨウ", 
    arti: "daun", artiEn: "leaf", kategori: "Alam", 
    radikal: "艹 (rumput)", goresan: 12,
    mnemonik: "Tanaman (艹) yang tumbuh di pohon (木) dan berhubungan dengan dunia (世) — itulah daun.",
    deskripsi: "Kanji untuk menyebut daun tanaman.", 
    contoh: [{ kata: "葉", baca: "は", arti: "daun" }] 
  },
  { 
    no: 156, kanji: "鳥", kunyomi: "とり", onyomi: "チョウ", 
    arti: "burung", artiEn: "bird", kategori: "Alam", 
    radikal: "鳥 (burung)", goresan: 11,
    mnemonik: "Bentuknya seperti burung yang sedang bertengger dengan ekor panjang.",
    deskripsi: "Kanji untuk menyebut burung.", 
    contoh: [{ kata: "鳥", baca: "とり", arti: "burung" }] 
  },

  // =====================================================
  // ORANG
  // =====================================================
  { 
    no: 157, kanji: "員", kunyomi: "", onyomi: "イン", 
    arti: "anggota / staf", artiEn: "member", kategori: "Orang", 
    radikal: "口 (mulut)", goresan: 10,
    mnemonik: "Orang yang dihitung dengan mulut (口) dan kerang (貝) sebagai simbol nilai — itulah anggota.",
    deskripsi: "Digunakan untuk menyebut anggota atau staf profesi.", 
    contoh: [
      { kata: "職員", baca: "しょくいん", arti: "staf / pegawai" }, 
      { kata: "会社員", baca: "かいしゃいん", arti: "karyawan perusahaan" }
    ] 
  },

  // =====================================================
  // BENDA / TEMPAT
  // =====================================================
  { 
    no: 158, kanji: "町", kunyomi: "まち", onyomi: "チョウ", 
    arti: "kota kecil / kota", artiEn: "town", kategori: "Benda", 
    radikal: "田 (sawah)", goresan: 7,
    mnemonik: "Sawah (田) yang dijaga oleh pasukan (丁) — itulah pemukiman atau kota kecil.",
    deskripsi: "Digunakan untuk menyebut kota kecil atau pemukiman.", 
    contoh: [{ kata: "町", baca: "まち", arti: "kota" }] 
  },
  { 
    no: 159, kanji: "寺", kunyomi: "てら", onyomi: "ジ", 
    arti: "kuil Buddha", artiEn: "temple", kategori: "Benda", 
    radikal: "寸 (ukuran)", goresan: 6,
    mnemonik: "Tanah (土) yang diukur (寸) untuk membangun tempat ibadah — itulah kuil.",
    deskripsi: "Merujuk pada bangunan kuil Buddha.", 
    contoh: [{ kata: "お寺", baca: "おてら", arti: "kuil Buddha" }] 
  },
  { 
    no: 160, kanji: "城", kunyomi: "しろ", onyomi: "ジョウ", 
    arti: "kastil", artiEn: "castle", kategori: "Benda", 
    radikal: "土 (tanah)", goresan: 9,
    mnemonik: "Tanah (土) yang ditumpuk dan dijadikan (成) bangunan kokoh — itulah kastil.",
    deskripsi: "Merujuk pada bangunan kastil atau benteng Jepang.", 
    contoh: [{ kata: "お城", baca: "おしろ", arti: "kastil" }] 
  },
  { 
    no: 161, kanji: "館", kunyomi: "やかた", onyomi: "カン", 
    arti: "gedung / museum", artiEn: "mansion / hall", kategori: "Benda", 
    radikal: "食 (makan)", goresan: 16,
    mnemonik: "Tempat makan (食) yang resmi dan lengkap (官) — itulah gedung.",
    deskripsi: "Kanji pembentuk gedung fasilitas umum.", 
    contoh: [
      { kata: "図書館", baca: "としょかん", arti: "perpustakaan" }, 
      { kata: "大使館", baca: "たいしかん", arti: "kedutaan besar" }
    ] 
  },
  { 
    no: 162, kanji: "局", kunyomi: "", onyomi: "キョク", 
    arti: "biro / kantor", artiEn: "bureau / office", kategori: "Benda", 
    radikal: "尸 (jasad)", goresan: 7,
    deskripsi: "Kanji pembentuk instansi atau badan kantor. Tidak ada jembatan ingatan khusus — hafalkan lewat kosakata seperti 郵便局.", 
    contoh: [{ kata: "郵便局", baca: "ゆうびんきょく", arti: "kantor pos" }] 
  },
  { 
    no: 163, kanji: "茶", kunyomi: "", onyomi: "チャ・サ", 
    arti: "teh", artiEn: "tea", kategori: "Benda", 
    radikal: "艹 (rumput)", goresan: 9,
    mnemonik: "Tanaman (艹) yang dipetik oleh orang (人) dan diolah dengan kayu (木) — itulah teh.",
    deskripsi: "Kanji dasar untuk sebutan teh.", 
    contoh: [
      { kata: "お茶", baca: "おちゃ", arti: "teh hijau" }, 
      { kata: "喫茶店", baca: "きっさてん", arti: "kedai kopi/teh" }
    ] 
  },
  { 
    no: 164, kanji: "卵", kunyomi: "たまご", onyomi: "ラン", 
    arti: "telur", artiEn: "egg", kategori: "Benda", 
    radikal: "卩 (segel)", goresan: 7,
    deskripsi: "Kanji dasar untuk menyebut telur. Bentuknya seperti telur yang dipecah jadi dua.", 
    contoh: [{ kata: "卵", baca: "たまご", arti: "telur" }] 
  },
  { 
    no: 165, kanji: "服", kunyomi: "", onyomi: "フク", 
    arti: "pakaian", artiEn: "clothes", kategori: "Benda", 
    radikal: "月 (bulan)", goresan: 8,
    mnemonik: "Bulan (月) yang melayani (服) tubuh — pakaian melayani tubuh setiap hari.",
    deskripsi: "Kanji dasar untuk menyebut pakaian atau baju.", 
    contoh: [
      { kata: "服", baca: "ふく", arti: "pakaian" }, 
      { kata: "洋服", baca: "ようふく", arti: "pakaian barat" }
    ] 
  },
  { 
    no: 166, kanji: "帽", kunyomi: "ずきん", onyomi: "ボウ", 
    arti: "topi", artiEn: "hat", kategori: "Benda", 
    radikal: "巾 (kain)", goresan: 12,
    mnemonik: "Kain (巾) yang dipakai di kepala dengan tulisan mata (目) — itulah topi.",
    deskripsi: "Digunakan dalam kata yang berkaitan dengan penutup kepala.", 
    contoh: [{ kata: "帽子", baca: "ぼうし", arti: "topi" }] 
  },
  { 
    no: 167, kanji: "表", kunyomi: "おもて・あらわす", onyomi: "ヒョウ", 
    arti: "tabel / permukaan / tunjuk", artiEn: "surface / table", kategori: "Benda", 
    radikal: "衣 (pakaian)", goresan: 8,
    mnemonik: "Pakaian (衣) bagian luar — permukaan yang terlihat dari luar.",
    deskripsi: "Berarti bagan, permukaan luar, atau pengumuman.", 
    contoh: [{ kata: "発表", baca: "はっぴょう", arti: "presentasi / pengumuman" }] 
  },

  // =====================================================
  // SIFAT
  // =====================================================
  { 
    no: 168, kanji: "甘", kunyomi: "あまい", onyomi: "カン", 
    arti: "manis", artiEn: "sweet", kategori: "Sifat", 
    radikal: "甘 (manis)", goresan: 5,
    mnemonik: "Bentuknya seperti mulut yang menikmati rasa manis di dalam kotak.",
    deskripsi: "Digunakan untuk rasa manis.", 
    contoh: [{ kata: "甘い", baca: "あまい", arti: "manis" }] 
  },
  { 
    no: 169, kanji: "辛", kunyomi: "からい", onyomi: "シン", 
    arti: "pedas", artiEn: "spicy", kategori: "Sifat", 
    radikal: "辛 (pedas)", goresan: 7,
    mnemonik: "Bentuknya seperti cabai yang berdiri tegak dengan tangkai di atas.",
    deskripsi: "Digunakan untuk menyatakan rasa pedas.", 
    contoh: [{ kata: "辛い", baca: "からい", arti: "pedas" }] 
  },
  { 
    no: 170, kanji: "便", kunyomi: "たより", onyomi: "ベン・ビン", 
    arti: "praktis / surat / penerbangan", artiEn: "convenient", kategori: "Sifat", 
    radikal: "亻 (orang)", goresan: 9,
    mnemonik: "Orang (亻) yang berubah (更) jadi serba mudah — itulah praktis.",
    deskripsi: "Digunakan dalam kata fasilitas praktis atau surat.", 
    contoh: [{ kata: "便利", baca: "べんり", arti: "praktis" }] 
  },
  { 
    no: 171, kanji: "利", kunyomi: "きく", onyomi: "リ", 
    arti: "manfaat / keuntungan", artiEn: "benefit", kategori: "Sifat", 
    radikal: "刂 (pisau)", goresan: 7,
    mnemonik: "Padi (禾) yang dipotong pisau (刂) menghasilkan keuntungan.",
    deskripsi: "Menunjukkan nilai guna atau keuntungan.", 
    contoh: [{ kata: "便利", baca: "べんり", arti: "praktis" }] 
  },
  { 
    no: 172, kanji: "同", kunyomi: "おなじ", onyomi: "ドウ", 
    arti: "sama", artiEn: "same", kategori: "Sifat", 
    radikal: "口 (mulut)", goresan: 6,
    mnemonik: "Orang yang berbicara dengan mulut (口) yang sama — itulah sama.",
    deskripsi: "Menyatakan kesamaan kondisi atau benda.", 
    contoh: [{ kata: "同じ", baca: "おなじ", arti: "sama" }] 
  },
  { 
    no: 173, kanji: "苦", kunyomi: "くるしい・にがい", onyomi: "ク", 
    arti: "pahit / menderita", artiEn: "bitter / painful", kategori: "Sifat", 
    radikal: "艹 (rumput)", goresan: 8,
    mnemonik: "Tanaman (艹) tua (古) yang rasanya pahit — itulah pahit.",
    deskripsi: "Menyatakan rasa pahit atau kondisi sengsara.", 
    contoh: [{ kata: "苦い", baca: "にがい", arti: "pahit" }] 
  },

  // =====================================================
  // KATA KERJA
  // =====================================================
  { 
    no: 174, kanji: "洗", kunyomi: "あらう", onyomi: "セン", 
    arti: "mencuci", artiEn: "wash", kategori: "Kata kerja", 
    radikal: "氵 (air)", goresan: 9,
    mnemonik: "Air (氵) yang dipakai dulu (先) untuk membersihkan — itulah mencuci.",
    deskripsi: "Digunakan untuk aktivitas mencuci benda atau anggota tubuh.", 
    contoh: [{ kata: "洗う", baca: "あらう", arti: "mencuci" }] 
  },
  { 
    no: 175, kanji: "考", kunyomi: "かんがえる", onyomi: "コウ", 
    arti: "memikirkan", artiEn: "consider / think", kategori: "Kata kerja", 
    radikal: "老 (tua)", goresan: 6,
    mnemonik: "Orang tua (老) yang mempertimbangkan banyak hal — itulah memikirkan.",
    deskripsi: "Melakukan pertimbangan atau pemikiran analitis.", 
    contoh: [{ kata: "考える", baca: "かんがえる", arti: "memikirkan" }] 
  },
  { 
    no: 176, kanji: "貸", kunyomi: "かす", onyomi: "タイ", 
    arti: "meminjamkan", artiEn: "lend", kategori: "Kata kerja", 
    radikal: "貝 (kerang)", goresan: 12,
    mnemonik: "Uang/barang berharga (貝) yang diberikan ke orang lain (代) — itulah meminjamkan.",
    deskripsi: "Aktivitas meminjamkan barang ke orang lain.", 
    contoh: [{ kata: "貸す", baca: "かす", arti: "meminjamkan" }] 
  },
  { 
    no: 177, kanji: "借", kunyomi: "かりる", onyomi: "シャク", 
    arti: "meminjam", artiEn: "borrow", kategori: "Kata kerja", 
    radikal: "亻 (orang)", goresan: 10,
    mnemonik: "Orang (亻) yang menerima barang dari masa lalu (昔) — itulah meminjam.",
    deskripsi: "Aktivitas meminjam barang dari orang lain.", 
    contoh: [{ kata: "借りる", baca: "かりる", arti: "meminjam" }] 
  },
  { 
    no: 178, kanji: "送", kunyomi: "おくる", onyomi: "ソウ", 
    arti: "mengirim", artiEn: "send", kategori: "Kata kerja", 
    radikal: "辶 (jalan)", goresan: 9,
    mnemonik: "Berjalan (辶) sambil membawa barang dan menyerahkannya (关) — itulah mengirim.",
    deskripsi: "Aktivitas mengirim pesan, barang, atau mengantar orang.", 
    contoh: [{ kata: "送る", baca: "おくる", arti: "mengirim" }] 
  },
  { 
    no: 179, kanji: "切", kunyomi: "きる", onyomi: "セツ", 
    arti: "memotong", artiEn: "cut", kategori: "Kata kerja", 
    radikal: "刀 (pedang)", goresan: 4,
    mnemonik: "Tujuh (七) potongan pedang (刀) — itulah memotong.",
    deskripsi: "Aktivitas memotong sesuatu.", 
    contoh: [
      { kata: "切る", baca: "きる", arti: "memotong" }, 
      { kata: "切手", baca: "きって", arti: "prangko" }
    ] 
  },
  { 
    no: 180, kanji: "脱", kunyomi: "ぬぐ", onyomi: "ダツ", 
    arti: "melepas (pakaian)", artiEn: "take off (clothes)", kategori: "Kata kerja", 
    radikal: "肉 (daging)", goresan: 11,
    deskripsi: "Aktivitas melepas sepatu atau pakaian. Tidak ada jembatan ingatan khusus — hafalkan lewat konteks 'melepas'.", 
    contoh: [{ kata: "脱ぐ", baca: "ぬぐ", arti: "melepas pakaian" }] 
  },
  { 
    no: 181, kanji: "咲", kunyomi: "さく", onyomi: "ショウ", 
    arti: "mekar", artiEn: "bloom", kategori: "Kata kerja", 
    radikal: "口 (mulut)", goresan: 9,
    mnemonik: "Bunga (口) yang tumbuh dari batang (关) — itulah mekar.",
    deskripsi: "Aktivitas mekarnya bunga.", 
    contoh: [{ kata: "咲く", baca: "さく", arti: "mekar" }] 
  },
  { 
    no: 182, kanji: "描", kunyomi: "えがく・かく", onyomi: "ビョウ", 
    arti: "menggambar", artiEn: "draw / paint", kategori: "Kata kerja", 
    radikal: "扌 (tangan)", goresan: 11,
    mnemonik: "Tangan (扌) yang menggores tanaman/tanah (苗) di kanvas — itulah menggambar.",
    deskripsi: "Aktivitas menggambar atau melukis.", 
    contoh: [{ kata: "描く", baca: "えがく", arti: "menggambar" }] 
  },
  { 
    no: 183, kanji: "払", kunyomi: "はらう", onyomi: "フツ", 
    arti: "membayar", artiEn: "pay", kategori: "Kata kerja", 
    radikal: "扌 (tangan)", goresan: 5,
    mnemonik: "Tangan (扌) yang menyerahkan uang secara pribadi (厶) — itulah membayar.",
    deskripsi: "Aktivitas melakukan pembayaran transaksi.", 
    contoh: [{ kata: "払う", baca: "はらう", arti: "membayar" }] 
  },
  { 
    no: 184, kanji: "展", kunyomi: "", onyomi: "テン", 
    arti: "pameran / membentangkan", artiEn: "exhibit", kategori: "Kata kerja", 
    radikal: "尸 (jasad)", goresan: 10,
    deskripsi: "Digunakan dalam konteks memamerkan sesuatu. Tidak ada jembatan ingatan khusus — hafalkan lewat kosakata 展示 (pameran).", 
    contoh: [{ kata: "展示", baca: "てんじ", arti: "pameran / peragaan" }] 
  },
  { 
    no: 185, kanji: "示", kunyomi: "しめす", onyomi: "ジ・シ", 
    arti: "menunjukkan", artiEn: "show", kategori: "Kata kerja", 
    radikal: "示 (menunjukkan)", goresan: 5,
    mnemonik: "Bentuknya seperti meja altar dengan persembahan di atasnya — melambangkan menunjukkan sesuatu.",
    deskripsi: "Menampilkan atau memperlihatkan petunjuk.", 
    contoh: [{ kata: "示す", baca: "しめす", arti: "menunjukkan" }] 
  },

  // =====================================================
  // ABSTRAK & KONSEP
  // =====================================================
  { 
    no: 186, kanji: "題", kunyomi: "", onyomi: "ダイ", 
    arti: "judul / topik / soal", artiEn: "topic / title", kategori: "Abstrak & Konsep", 
    radikal: "頁 (kepala)", goresan: 18,
    mnemonik: "Kepala (頁) yang benar (是) — topik utama yang benar dari sebuah bahasan.",
    deskripsi: "Gelar, subjek masalah, atau nomor soal ujian.", 
    contoh: [{ kata: "問題", baca: "もんだい", arti: "soal / masalah" }] 
  },
  { 
    no: 187, kanji: "問", kunyomi: "とう・問い", onyomi: "モン", 
    arti: "pertanyaan", artiEn: "question", kategori: "Abstrak & Konsep", 
    radikal: "口 (mulut)", goresan: 11,
    mnemonik: "Mulut (口) yang berada di dalam gerbang (門) — pertanyaan yang diajukan lewat pintu.",
    deskripsi: "Kanji untuk pertanyaan atau isu yang dipertanyakan.", 
    contoh: [
      { kata: "質問", baca: "しつもん", arti: "pertanyaan" }, 
      { kata: "問題", baca: "もんだい", arti: "soal / masalah" }
    ] 
  },
  { 
    no: 188, kanji: "計", kunyomi: "はかる", onyomi: "ケイ", 
    arti: "rencana / ukur", artiEn: "plan / measure", kategori: "Abstrak & Konsep", 
    radikal: "言 (bicara)", goresan: 9,
    mnemonik: "Berbicara (言) sepuluh (十) kali untuk mengukur dan merencanakan.",
    deskripsi: "Membuat estimasi, mengukur, atau merencanakan.", 
    contoh: [
      { kata: "時計", baca: "とけい", arti: "jam" }, 
      { kata: "計画", baca: "けいかく", arti: "rencana" }
    ] 
  },
  { 
    no: 189, kanji: "定", kunyomi: "さだめる", onyomi: "テイ・ジョウ", 
    arti: "kepastian / menentukan", artiEn: "decide / fix", kategori: "Abstrak & Konsep", 
    radikal: "宀 (atap)", goresan: 8,
    mnemonik: "Di bawah atap (宀), seseorang memutuskan (疋) dengan pasti.",
    deskripsi: "Kondisi yang sudah ditetapkan atau pasti.", 
    contoh: [{ kata: "予定", baca: "よてい", arti: "jadwal / rencana" }] 
  },
  { 
    no: 190, kanji: "予", kunyomi: "あらかじめ", onyomi: "ヨ", 
    arti: "sebelumnya / persiapan", artiEn: "beforehand", kategori: "Abstrak & Konsep", 
    radikal: "亅 (kail)", goresan: 4,
    deskripsi: "Melakukan persiapan atau menduga sebelum terjadi. Tidak ada jembatan ingatan khusus — hafalkan lewat 予定 dan 予報.", 
    contoh: [
      { kata: "予定", baca: "よてい", arti: "jadwal / rencana" }, 
      { kata: "天気予報", baca: "てんきよほう", arti: "prakiraan cuaca" }
    ] 
  },
  { 
    no: 191, kanji: "約", kunyomi: "", onyomi: "ヤク", 
    arti: "janji / kira-kira", artiEn: "promise / about", kategori: "Abstrak & Konsep", 
    radikal: "糸 (benang)", goresan: 9,
    mnemonik: "Benang (糸) yang mengikat kesepakatan — itulah janji.",
    deskripsi: "Kanji untuk ikatan janji atau penanda estimasi angka.", 
    contoh: [
      { kata: "約束", baca: "やくそく", arti: "janji" }, 
      { kata: "約三時", baca: "やくさんじ", arti: "kira-kira jam 3" }
    ] 
  },
  { 
    no: 192, kanji: "束", kunyomi: "たば", onyomi: "ソク", 
    arti: "ikat / bundel", artiEn: "bundle", kategori: "Abstrak & Konsep", 
    radikal: "木 (pohon)", goresan: 7,
    mnemonik: "Pohon (木) yang diikat dengan tali di tengahnya — itulah bundel.",
    deskripsi: "Ikatan fisik benda atau batasan hukum/komitmen.", 
    contoh: [{ kata: "約束", baca: "やくそく", arti: "janji" }] 
  },
  { 
    no: 193, kanji: "信", kunyomi: "", onyomi: "シン", 
    arti: "percaya / pesan", artiEn: "trust / message", kategori: "Abstrak & Konsep", 
    radikal: "亻 (orang)", goresan: 9,
    mnemonik: "Orang (亻) yang berkata (言) jujur — itulah dipercaya.",
    deskripsi: "Kepercayaan atau media pengirim kabar/pesan.", 
    contoh: [
      { kata: "送信", baca: "そうしん", arti: "mengirim pesan" }, 
      { kata: "信じる", baca: "しんじる", arti: "percaya" }
    ] 
  },
  { 
    no: 194, kanji: "号", kunyomi: "さけぶ", onyomi: "ゴウ", 
    arti: "nomor / simbol", artiEn: "number / signal", kategori: "Abstrak & Konsep", 
    radikal: "口 (mulut)", goresan: 5,
    mnemonik: "Mulut (口) yang mengeluarkan suara melengkung (丂) — itulah nomor atau panggilan.",
    deskripsi: "Tanda pengenal, nomor urut, atau sinyal.", 
    contoh: [
      { kata: "信号", baca: "しんごう", arti: "lampu lalu lintas" }, 
      { kata: "番号", baca: "ばんごう", arti: "nomor" }
    ] 
  },
  { 
    no: 195, kanji: "答", kunyomi: "こたえる・こたえ", onyomi: "トウ", 
    arti: "jawaban / menjawab", artiEn: "answer", kategori: "Abstrak & Konsep", 
    radikal: "竹 (bambu)", goresan: 12,
    mnemonik: "Bambu (竹) yang diikat dan disatukan (合) — jawaban yang disatukan dari pertanyaan.",
    deskripsi: "Balasan atas pertanyaan atau solusinya.", 
    contoh: [
      { kata: "答え", baca: "こたえ", arti: "jawaban" }, 
      { kata: "回答", baca: "かいとう", arti: "jawaban/respon" }
    ] 
  }
];  

// =====================================================
// Updated KANJI_CATEGORIES menjadi 10 Kategori
var KANJI_CATEGORIES = [
  "Angka",
  "Waktu",
  "Arah",
  "Benda",
  "Sifat",
  "Orang",
  "Tubuh",
  "Alam",
  "Kata kerja",
  "Abstrak & Konsep"
];

// Emoji Ikon Tambahan
var KANJI_CATEGORY_ICON = {
  "Angka": "&#128290;",
  "Waktu": "&#8987;",
  "Arah": "&#129517;",
  "Benda": "&#128268;",
  "Sifat": "&#10024;",
  "Orang": "&#128101;",
  "Tubuh": "&#128070;",
  "Alam": "&#127795;",
  "Kata kerja": "&#127939;",
  "Abstrak & Konsep": "&#128161;"
};

// Warna Badge Tambahan
var KANJI_CATEGORY_COLOR = {
  "Angka": "pink",
  "Waktu": "amber",
  "Arah": "indigo",
  "Benda": "slate",
  "Sifat": "fuchsia",
  "Orang": "blue",
  "Tubuh": "rose",
  "Alam": "green",
  "Kata kerja": "red",
  "Abstrak & Konsep": "purple"
};


function kanjiCategoryColor(kategori) {
  return KANJI_CATEGORY_COLOR[kategori] || "slate";
}

// =====================================================
// =====================================================
// DAFTAR 35 TIPS, FAKTA MENARIK & ETIKA JEPANG
// =====================================================
var KANJI_TIPS_LIST = [
  // --- ETIKA & KEBIASAAN TEMPAT UMUM ---
  "Di kereta Jepang, hindari menelepon dan ubah HP ke 'Manner Mode' (silent). Bicara dengan suara pelan adalah etika utama.",
  "Di eskalator wilayah Tokyo, orang berdiri diam di sebelah kiri dan berjalan di sebelah kanan. Namun di wilayah Kansai (Osaka), kebalikannya!",
  "Mengelap wajah dengan serbet basah (Oshibori) di restoran dianggap kurang sopan untuk anak muda, Oshibori pada dasarnya hanya untuk membersihkan tangan.",
  "Jangan pernah menancapkan sumpit tegak lurus di atas mangkuk nasi. Hal tersebut menyerupai ritual pemakaman (Tsuk立て箸 - Tsukitatebashi).",
  "Menerima uang kembalian di Jepang selalu menggunakan kedua tangan atau diletakkan di atas baki kecil (Trays) yang disediakan kasir.",
  "Menyeruput mi (Miso ramen, Soba, Udon) hingga bersuara keras justru dianggap pujian bagi koki bahwa makanannya sangat lezat.",
  "Jangan makan atau minum sambil berjalan di tempat umum. Orang Jepang biasanya menghabiskan makanan/minuman di dekat mesin penjual (Jidouhanbaiki) atau depan minimarket.",
  "Di Jepang, memberikan uang tip (tipping) di restoran atau taksi dianggap tidak sopan karena pelayanan terbaik sudah termasuk dalam harga.",
  "Saat masuk ke rumah orang Jepang, selop/sepatu harus dilepas di area 'Genkan' dan dihadapkan ke arah pintu keluar.",
  "Di tempat pemandian umum (Onsen), Anda wajib membilas dan membersihkan badan sampai bersih sebelum masuk ke kolam berendam.",

  // --- FAKTA MENARIK BAHASA & BUDAYA ---
  "Kata 'Tofu' (豆腐) terdiri dari kanji 'Kacang' (豆) dan 'Melunak/Membusuk' (腐), merujuk pada proses fermentasi/pembekuan dadih kedelai.",
  "Jepang memiliki ribuan mesin penjual otomatis (Jidouhanbaiki) yang menjual berbagai hal, mulai dari es krim, kopi panas, hingga payung saat hujan.",
  "Angka 4 (四) sering dihindari di gedung atau rumah sakit Jepang karena salah satu cara bacanya 'Shi' memiliki bunyi yang sama dengan kata 'Mati' (死).",
  "Angka 9 (九) juga sering dihindari di beberapa tempat karena cara bacanya 'Ku' terdengar mirip dengan kata 'Penderitaan/Kesengsaraan' (苦).",
  "Perusahaan atau rumah di Jepang sering memasang patung kucing 'Maneki-neko'. Kucing dengan tangan kanan terangkat melambangkan rezeki/uang, tangan kiri melambangkan pelanggan.",
  "Kata 'Komorebi' (木漏れ日) adalah istilah khusus dalam bahasa Jepang untuk menggambarkan sinar matahari yang menerobos celah daun-daun pohon.",
  "Warna lalu lintas untuk 'hijau' di Jepang sering disebut 'Aoi' (biru) secara tradisional, meskipun warnanya hijau terang.",
  "Orang Jepang memiliki kebiasaan memberikan oleh-oleh berupa makanan khas daerah setempat yang disebut 'Omiyage' kepada rekan kerja setelah berlibur.",

  // --- TIPS BAHASA & KONTEKS PRAKTIS ---
  "Cara baca Kunyomi biasanya dipakai saat kanji berdiri sendiri, sedangkan Onyomi dipakai saat kanji digabungkan dengan kanji lain.",
  "Saat memanggil pelayan restoran, cukup berseru 「すみませーん！」(Sumimaseen!) dengan sopan sambil mengangkat tangan sedikit.",
  "Partikel 「は」ditulis 'ha', namun dibaca 'wa'. Contoh: 私は学生です (Watashi wa gakusei desu).",
  "Partikel 「へ」ditulis 'he', namun dibaca 'e' saat menunjukkan arah tujuan. Contoh: 日本へ行きます (Nihon e ikimasu).",
  "Kata 「すみません」(Sumimasen) sangat multifungsi: bisa berarti 'maaf', 'permisi', atau bahkan 'terima kasih' atas bantuan seseorang.",
  "Dalam percakapan santai, orang Jepang sering menghilangkan subjek (seperti 'saya' atau 'kamu') jika konteks lawan bicara sudah jelas.",
  "Untuk meminta barang di kasir/toko, gunakan 「〜をください」(o kudasai). Untuk meminta bantuan atau jasa, gunakan 「〜をお願いします」(o onegaishimasu).",
  "Kata 「大丈夫です」(Daijoubu desu) tidak hanya berarti 'saya tidak apa-apa', tetapi sering dipakai halus untuk menolak penawaran (misal: 'tidak perlu plastik').",
  "Gunakan 「おいしい」(Oishii) untuk menyebut makanan enak secara umum. Kata 「うまい」(Umai) juga berarti enak, tetapi lebih kasual dan biasa dipakai pria.",
  "Salam 「こんにちは」(Konnichiwa) lebih tepat dipakai sebagai salam sapaan siang hari kepada orang luar/kenalan, bukan untuk keluarga di dalam rumah.",
  "Ungkapan 「よろしくお願いします」(Yoroshiku onegaishimasu) bermakna fleksibel, seperti 'mohon bantuannya', 'senang bekerja sama', atau 'mohon bimbingannya'.",
  "Kata 「お疲れ様です」(Otsukaresama desu) adalah salam wajib di dunia kerja Jepang sebagai bentuk apresiasi kerja keras rekan tim.",
  "Nama orang atau panggilan jabatan (seperti Sensei, Tanaka-san) lebih sering dipakai daripada kata 'Kamu' (Anata) dalam percakapan langsung.",
  "Kata 「はい」(Hai) tidak selalu berarti setuju atau 'ya', melainkan sering menjadi respon 'saya mengangguk/mendengarkan ucapan Anda'.",
  "Kanji yang sama bisa memiliki cara baca yang berbeda tergantung kata pembentuknya. Fokuslah menghafal kosakata lengkapnya, bukan cuma satu cara baca kanji.",
  "Awalan 「お」(O) dan 「ご」(Go) ditambahkan sebelum kata benda untuk memperhalus nada bicara, contohnya 「お水」(Omizu - air) atau 「お名前」(Onamae - nama).",
  "Jangan selalu menerjemahkan kalimat bahasa Jepang kata per kata secara harfiah. Pahami situasi, lawan bicara, dan konteks budaya di balik ungkapan tersebut."
];
// =====================================================
// SCRIPT PENGGABUNG OTOMATIS (AUTO-MERGE RADIKAL)
// Letakkan kode ini di baris paling akhir file kanji-data.js
// =====================================================

var TAMBAHAN_RADIKAL = {
  37: { radikal: "囗 (kotak)", goresan: 5, mnemonik: "Mulut (kotak) dengan dua garis di dalamnya melambangkan empat penjuru." },
  38: { radikal: "二 (dua)", goresan: 4, mnemonik: "Dua garis disilangkan yang menghubungkan langit dan bumi." },
  39: { radikal: "八 (delapan)", goresan: 4, mnemonik: "Orang di bawah atap." },
  40: { radikal: "一 (satu)", goresan: 2, mnemonik: "Garis memanjang yang dipotong tegak lurus." },
  41: { radikal: "八 (delapan)", goresan: 2, mnemonik: "Bentuknya saling terpisah dan membelah dua." },
  42: { radikal: "乙 (kedua)", goresan: 2, mnemonik: "Lengan manusia yang menekuk dan melengkung." },
  43: { radikal: "十 (sepuluh)", goresan: 2, mnemonik: "Garis silang yang menyatukan seluruh arah kompas." },
  44: { radikal: "白 (putih)", goresan: 6, mnemonik: "Satu garis tambahan di atas warna putih." },
  45: { radikal: "十 (sepuluh)", goresan: 3, mnemonik: "Satu garis miring di atas angka sepuluh." },
  46: { radikal: "一 (satu)", goresan: 3, mnemonik: "Bentuk dasar dari jumlah yang sangat besar." },
  47: { radikal: "冂 (batas)", goresan: 4, mnemonik: "Uang koin tertata di dalam kotak pembatas." },
  48: { radikal: "田 (sawah)", goresan: 5, mnemonik: "Petak-petak sawah yang dibagi secara merata." },
  49: { radikal: "火 (api)", goresan: 4, mnemonik: "Kobaran lidah api yang menyala ke atas." },
  50: { radikal: "水 (air)", goresan: 4, mnemonik: "Aliran air sungai yang bercabang ke samping." },
  51: { radikal: "金 (emas)", goresan: 8, mnemonik: "Bongkahan logam emas (dua titik) yang terkubur di bawah tanah." },
  52: { radikal: "土 (tanah)", goresan: 3, mnemonik: "Tunas tanaman yang tumbuh memecah permukaan tanah." },
  53: { radikal: "十 (sepuluh)", goresan: 5, mnemonik: "Garis vertikal yang membelah benda tepat di tengahnya." },
  54: { radikal: "刀 (pedang)", goresan: 4, mnemonik: "Pedang (刀) yang membelah sesuatu menjadi dua (八)." },
  55: { radikal: "子 (anak)", goresan: 3, mnemonik: "Anak bayi yang direntangkan tangannya." },
  56: { radikal: "耳 (telinga)", goresan: 6, mnemonik: "Menyerupai anatomi daun telinga manusia." },
  57: { radikal: "足 (kaki)", goresan: 7, mnemonik: "Menggambarkan kaki lengkap dengan lutut dan telapak." },
  58: { radikal: "力 (tenaga)", goresan: 2, mnemonik: "Bentuk otot lengan manusia yang menonjol." },
  59: { radikal: "儿 (kaki)", goresan: 6, mnemonik: "Berjalan (儿) mendahului orang lain." },
  60: { radikal: "毋 (jangan)", goresan: 6, mnemonik: "Orang (人) yang mengulang kegiatan yang sama setiap hari." },
  61: { radikal: "刀 (pedang)", goresan: 9, mnemonik: "Daging (月) yang dipotong pisau (刂) tepat di depan." },
  62: { radikal: "彳 (langkah)", goresan: 9, mnemonik: "Melangkah (彳) lambat dan tertinggal di belakang." },
  63: { radikal: "工 (kerja)", goresan: 5, mnemonik: "Tangan yang memegang alat tukang (工)." },
  64: { radikal: "口 (mulut)", goresan: 5, mnemonik: "Tangan yang menyuapkan makanan ke mulut (口)." },
  65: { radikal: "木 (pohon)", goresan: 8, mnemonik: "Matahari (日) terbit di balik pohon (木)." },
  66: { radikal: "襾 (penutup)", goresan: 6, mnemonik: "Burung kembali ke sarang saat matahari tenggelam." },
  67: { radikal: "十 (sepuluh)", goresan: 9, mnemonik: "Tenda terbuka yang menghadap angin selatan yang hangat." },
  68: { radikal: "匕 (sendok)", goresan: 5, mnemonik: "Dua orang kedinginan duduk saling membelakangi." },
  69: { radikal: "口 (mulut)", goresan: 6, mnemonik: "Di malam (夕) yang gelap, orang memanggil nama dengan mulut (口)." },
  70: { radikal: "貝 (kerang)", goresan: 7, mnemonik: "Cangkang kerang dengan kaki-kaki kecil menjulur." },
  71: { radikal: "大 (besar)", goresan: 4, mnemonik: "Orang yang besar (大) dengan garis langit luas di atas kepalanya." },
  72: { radikal: "車 (mobil)", goresan: 7, mnemonik: "Bentuk gerobak atau mobil dilihat dari atas beserta rodanya." },
  73: { radikal: "十 (sepuluh)", goresan: 4, mnemonik: "Jarum jam menunjuk ke atas saat matahari di puncak." },
  74: { radikal: "宀 (atap)", goresan: 6, mnemonik: "Wanita (女) yang berlindung di bawah atap (宀) merasa aman." },
  75: { radikal: "斤 (kapak)", goresan: 13, mnemonik: "Menebang pohon (木) menggunakan kapak (斤) untuk material baru." },
  76: { radikal: "口 (mulut)", goresan: 5, mnemonik: "Cerita turun dari sepuluh (十) generasi lewat mulut (口)." },
  77: { radikal: "長 (panjang)", goresan: 8, mnemonik: "Rambut tetua atau pemimpin yang menjuntai panjang." },
  78: { radikal: "夕 (sore)", goresan: 6, mnemonik: "Malam (夕) bertumpuk malam menjadi sangat banyak." },
  79: { radikal: "小 (kecil)", goresan: 4, mnemonik: "Sesuatu yang kecil (小) kemudian dikurangi lagi lewat satu garis." },
  80: { radikal: "日 (matahari)", goresan: 6, mnemonik: "Matahari (日) di atas bunga (十) yang mekar di awal pagi." },
  81: { radikal: "行 (berjalan)", goresan: 6, mnemonik: "Bentuk persimpangan jalan tempat orang bepergian." },
  82: { radikal: "木 (pohon)", goresan: 7, mnemonik: "Bongkahan gandum yang datang dari pohon (木)." },
  83: { radikal: "食 (makan)", goresan: 9, mnemonik: "Atap yang menutupi makanan enak agar bisa dimakan." },
  84: { radikal: "見 (melihat)", goresan: 7, mnemonik: "Mata (目) yang ditopang oleh kaki manusia untuk melihat-lihat." },
  85: { radikal: "入 (masuk)", goresan: 2, mnemonik: "Ujung panah atau orang yang sedang masuk menembus." },
  86: { radikal: "凵 (wadah)", goresan: 5, mnemonik: "Dua gunung (山) bertumpuk menandakan jalan keluar." },
  87: { radikal: "立 (berdiri)", goresan: 5, mnemonik: "Seseorang yang berdiri tegak membentangkan lengan di atas tanah." },
  88: { radikal: "曰 (berkata)", goresan: 10, mnemonik: "Tangan memegang kuas (聿) untuk menulis kata-kata (曰)." },
  89: { radikal: "言 (berkata)", goresan: 7, mnemonik: "Garis getaran suara yang keluar dari mulut (口)." },
  90: { radikal: "食 (makan)", goresan: 12, mnemonik: "Makanan/minuman (食) yang dihirup saat kehabisan napas (欠)." },
  91: { radikal: "言 (berbicara)", goresan: 13, mnemonik: "Berbicara (言) menggunakan lidah (舌) menghasilkan cerita panjang." },
  92: { radikal: "言 (berbicara)", goresan: 14, mnemonik: "Berbicara (言) saat berdagang (売) sambil membaca brosur teks." },
  93: { radikal: "言 (berbicara)", goresan: 14, mnemonik: "Kata-kata (言) yang diucapkan oleh saya (吾) menjadi bahasa." },
  94: { radikal: "門 (gerbang)", goresan: 12, mnemonik: "Matahari (日) menyinari celah kedua gerbang (門)." },
  95: { radikal: "耳 (telinga)", goresan: 14, mnemonik: "Telinga (耳) yang ditempelkan ke celah gerbang (門) untuk menguping." },
  96: { radikal: "貝 (kerang)", goresan: 12, mnemonik: "Jaring (网) yang dilempar untuk mengumpulkan uang/kerang (貝) untuk membeli." },
  97: { radikal: "亻 (orang)", goresan: 6, mnemonik: "Orang (亻) yang sedang duduk bersandar di pohon (木) untuk istirahat." },
  98: { radikal: "日 (matahari)", goresan: 10, mnemonik: "Matahari (日) bergerak melewati kuil (寺) seiring waktu." },
  99: { radikal: "辶 (jalan)", goresan: 11, mnemonik: "Berjalan (辶) dalam satu siklus (周) pekan penuh." },
  100: { radikal: "辶 (jalan)", goresan: 12, mnemonik: "Pemimpin (首) yang melangkah (辶) menyusuri rute." },
  101: { radikal: "人 (orang)", goresan: 4, mnemonik: "Atap jam yang menunjuk ke saat ini juga." },
  102: { radikal: "人 (orang)", goresan: 6, mnemonik: "Orang-orang berkumpul bersama di bawah satu atap." },
  103: { radikal: "示 (menunjukkan)", goresan: 7, mnemonik: "Altar (示) tempat dewa bumi (土) disembah." },
  104: { radikal: "艹 (rumput)", goresan: 7, mnemonik: "Tanaman (艹) yang berubah (化) rupa menjadi bunga mekar." },
  105: { radikal: "亻 (orang)", goresan: 7, mnemonik: "Orang (亻) memikul sesuatu sambil bertanya-tanya apa itu." },
  106: { radikal: "夕 (sore)", goresan: 5, mnemonik: "Meramal (卜) di luar ruangan pada malam hari (夕)." },
  107: { radikal: "穴 (lubang)", goresan: 8, mnemonik: "Lubang (穴) yang besar dan kosong di angkasa." },
  108: { radikal: "囗 (kotak)", goresan: 8, mnemonik: "Raja (王) dan permata yang dilindungi dinding wilayah (囗)." },
  109: { radikal: "雨 (hujan)", goresan: 13, mnemonik: "Hujan (雨) badai yang membawa energi kilat." },
  110: { radikal: "白 (putih)", goresan: 5, mnemonik: "Sinar menembus matahari menjadikannya putih terang." },
  111: { radikal: "月 (bulan)", goresan: 12, mnemonik: "Bulan (月) mulai meredup saat matahari pagi muncul di antara rumput." },
  112: { radikal: "日 (matahari)", goresan: 9, mnemonik: "Penggaris (尺) dan matahari (日) digunakan untuk mengukur panjang hari siang." },
  113: { radikal: "夕 (sore)", goresan: 8, mnemonik: "Orang (亻) berada di rumah saat sore (夕) menjelang malam tiba." },
  114: { radikal: "辶 (jalan)", goresan: 7, mnemonik: "Berjalan (辶) ke tempat yang jaraknya sedekat ayunan kapak (斤)." },
  115: { radikal: "辶 (jalan)", goresan: 13, mnemonik: "Berjalan (辶) mengenakan jubah panjang (袁) ke tempat yang sangat jauh." },
  116: { radikal: "木 (pohon)", goresan: 15, mnemonik: "Pohon (木) dengan daun menguning (黄) yang jatuh menyamping." },
  117: { radikal: "宀 (atap)", goresan: 10, mnemonik: "Babi (豕) atau ternak di bawah atap (宀) melambangkan rumah di masa lalu." },
  118: { radikal: "宀 (atap)", goresan: 9, mnemonik: "Tempat yang kamu capai (至) dan berlindung di bawah atap (宀) adalah ruangan." },
  119: { radikal: "子 (anak)", goresan: 6, mnemonik: "Anak (子) yang berlatih membaca huruf di bawah atap (宀)." },
  120: { radikal: "文 (tulisan)", goresan: 4, mnemonik: "Bentuk kerah baju orang yang dihiasi tato atau pola tulisan." },
  121: { radikal: "頁 (kepala)", goresan: 18, mnemonik: "Kepala (頁) yang memiliki fitur menonjol dan berkarakter (彦) adalah wajah." },
  122: { radikal: "亻 (orang)", goresan: 7, mnemonik: "Orang (亻) yang memiliki akar/pondasi (本) disebut dengan tubuh." },
  123: { radikal: "首 (leher)", goresan: 9, mnemonik: "Rambut yang tumbuh di atas hidung dan mata, menunjuk bagian leher/kepala." },
  124: { radikal: "儿 (kaki)", goresan: 5, mnemonik: "Mulut (口) besar yang selalu berbicara/memberi arahan kepada kaki/adiknya (儿)." },
  125: { radikal: "女 (perempuan)", goresan: 8, mnemonik: "Perempuan (女) yang lebih tua yang berjalan-jalan di kota (市)." },
  126: { radikal: "弓 (busur)", goresan: 7, mnemonik: "Tanduk yang melilit sebuah busur panah (弓)." },
  127: { radikal: "女 (perempuan)", goresan: 8, mnemonik: "Perempuan (女) yang statusnya belum (未) dewasa sepenuhnya." },
  128: { radikal: "匚 (kotak terbuka)", goresan: 7, mnemonik: "Panah (矢) yang disimpan rapat dalam kotak (匚) kedokteran." },
  129: { radikal: "老 (tua)", goresan: 8, mnemonik: "Orang yang lebih tua (老) dan selalu berbicara (白) tentang pengetahuan." },
  130: { radikal: "木 (pohon)", goresan: 8, mnemonik: "Dua pohon (木) bersebelahan yang membentuk hutan kecil." },
  131: { radikal: "木 (pohon)", goresan: 12, mnemonik: "Tiga pohon (木) rindang yang membentuk hutan lebat." },
  132: { radikal: "氵 (air)", goresan: 9, mnemonik: "Perairan (氵) tempat setiap (毎) jenis makhluk air tinggal." },
  133: { radikal: "石 (batu)", goresan: 5, mnemonik: "Bongkahan padat yang menggelinding di bawah tebing." },
  134: { radikal: "日 (matahari)", goresan: 8, mnemonik: "Matahari (日) dan bulan (月) bergabung menciptakan cahaya paling terang." },
  135: { radikal: "日 (matahari)", goresan: 13, mnemonik: "Matahari (日) yang tenggelam menyisakan senyap suara (音) kegelapan." },
  136: { radikal: "广 (atap miring)", goresan: 5, mnemonik: "Area leluasa yang berada di bawah atap tebing (广)." },
  137: { radikal: "亻 (orang)", goresan: 7, mnemonik: "Orang (亻) yang merunduk mengambil dokumen di lantai terendah." },
  138: { radikal: "里 (desa)", goresan: 9, mnemonik: "Beban ribuan (千) desa (里) dipanggul sekaligus terasa berat." },
  139: { radikal: "車 (mobil)", goresan: 14, mnemonik: "Kereta (車) yang melaju cepat melewati rute (巠) dengan ringan." },
  140: { radikal: "心 (hati)", goresan: 9, mnemonik: "Ladang (田) tempat bermacam-macam isi hati (心) ditumbuhkan." },
  141: { radikal: "矢 (panah)", goresan: 8, mnemonik: "Panah (矢) dan mulut (口) yang tahu persis titik sasarannya." },
  142: { radikal: "亻 (orang)", goresan: 7, mnemonik: "Seseorang (亻) yang sedang sibuk menggunakan alat untuk berkreasi." },
  143: { radikal: "亻 (orang)", goresan: 8, mnemonik: "Orang (亻) yang diberi perintah langsung oleh pejabat (吏) untuk bekerja." },
  144: { radikal: "扌 (tangan)", goresan: 9, mnemonik: "Tangan (扌) yang membawa persembahan erat-erat menuju kuil (寺)." },
  145: { radikal: "門 (gerbang)", goresan: 12, mnemonik: "Kedua tangan (廾) mengangkat palang untuk membuka gerbang (門)." },
  146: { radikal: "門 (gerbang)", goresan: 11, mnemonik: "Orang berbakat (才) tahu kapan harus mengunci gerbang (門)." },
  147: { radikal: "刀 (pedang)", goresan: 10, mnemonik: "Seorang pasukan meletakkan sapu dan pedangnya kembali ke pangkalannya." },
  148: { radikal: "止 (berhenti)", goresan: 8, mnemonik: "Berhenti (止) melangkah perlahan walau cuma sedikit (少)." },
  149: { radikal: "走 (berlari)", goresan: 7, mnemonik: "Gabungan dari elemen tanah dan kaki orang yang bergerak cepat." },
  150: { radikal: "走 (berlari)", goresan: 10, mnemonik: "Berlari (走) dari diri sendiri (己) atau bangkit tiba-tiba dari kasur." }
};

// Looping untuk memasukkan data radikal ke KANJI_DATA secara otomatis
for (var i = 0; i < KANJI_DATA.length; i++) {
  var no = KANJI_DATA[i].no;
  if (TAMBAHAN_RADIKAL[no]) {
    KANJI_DATA[i].radikal = TAMBAHAN_RADIKAL[no].radikal;
    KANJI_DATA[i].goresan = TAMBAHAN_RADIKAL[no].goresan;
    KANJI_DATA[i].mnemonik = TAMBAHAN_RADIKAL[no].mnemonik;
  }
}
