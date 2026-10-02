// =====================================================
// DeX Gaku — rangkuman-data.js
// Data untuk fitur "Rangkuman": link Google Drive (Minna no
// Nihongo 1 & 2, Kosakata Bab 1-50, folder Iradori, folder
// Buku Dongeng) serta rangkuman materi tertulis Bab 1-25.
//
// File ini HANYA berisi data (tidak ada logic render).
// =====================================================

// ---------- Link Google Drive ----------
// fileId dipakai untuk membuka preview file (PDF/dokumen) via iframe
// /file/d/<id>/preview. folderId dipakai untuk membuka isi folder
// via iframe /embeddedfolderview?id=<id>#list. Keduanya tetap berada
// DI DALAM aplikasi (tidak membuka tab/app eksternal).
var RANGKUMAN_DRIVE_LINKS = {
  mina1: { fileId: "10lziS_fQcyWtkT0RO6ViqG5sHbqmgBS8", title: "Minna no Nihongo 1" },
  mina2: { fileId: "1AMrIvrXtmCHZdkqxDd_6nli5i4yOvUcF", title: "Minna no Nihongo 2" },
  kotobaBab1_50: { fileId: "1XrVYUvX9wiYTmuJwIAti_zfdWR-o0DWe", title: "Kosakata Bab 1-50" },
  iradori: { folderId: "1jVzNWsdJ-ka-TbedKKNCYXMA7XNMEcFR", title: "Test Iradori A1" },
  dongeng: { folderId: "15jQ6Mr0I_lKArU7XJrREzMqDTm1rhuyn", title: "Buku Dongeng" }
};

// ---------- Rangkuman Materi Bab 1-25 (Minna no Nihongo) ----------
// Struktur tiap bab:
//   judul      : nama bab
//   fokus      : ringkasan fokus pembelajaran bab ini
//   pola       : array pola kalimat { judul, fungsi, jp, baca, arti }
//   partikel   : array partikel penting { partikel, fungsi, jp, arti }
//   katapenting: array string kata/pola penting (boleh berisi <br> untuk baris baru)
//   contoh     : array contoh kalimat tambahan { jp, baca, arti }
//   catatan    : array string catatan penting (poin peringatan)
//   ringkasan  : array string poin ringkasan cepat di akhir bab
var RANGKUMAN_BAB_LIST = [
  {
    judul: "Memperkenalkan Diri dan Identitas",
    fokus: "Fokus pada cara memperkenalkan diri, menyatakan identitas seperti pekerjaan atau kewarganegaraan, dan menggunakan partikel dasar kalimat.",
    pola: [
      { judul: "Pola 1", fungsi: "Menjelaskan bahwa subjek (N1) adalah N2. Kata です digunakan pada akhir kalimat untuk menyatakan penilaian, kepastian, serta menunjukkan sikap sopan kepada lawan bicara.", jp: "N1 は N2 です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは かいしゃいんです。", baca: "Watashi wa kaishain desu.", arti: "Saya adalah pegawai perusahaan." },
      { judul: "Pola 2", fungsi: "Merupakan bentuk negatif dari です. Digunakan untuk menyatakan bahwa N1 bukanlah N2. (じゃありません sering dipakai sehari-hari, sedangkan ではありません lebih resmi).", jp: "N1 は N2 じゃ（では）ありません。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "サントスさんは がくせいじゃ ありません。", baca: "Santosu-san wa gakusei ja arimasen.", arti: "Sdr. Santos bukan mahasiswa." },
      { judul: "Pola 3", fungsi: "Membuat kalimat tanya. Digunakan untuk menanyakan apakah isi kalimat tersebut benar atau tidak.", jp: "N1 は N2 ですか。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ミラーさんは アメリカじんですか。", baca: "Miraa-san wa Amerika-jin desu ka.", arti: "Apakah Sdr. Miller orang Amerika?" }
    ],
    partikel: [
      { partikel: "は", fungsi: "Menunjukkan bahwa kata sebelumnya adalah topik pembicaraan kalimat.", jp: "わたしは マイク・ミラーです。", arti: "Saya (adalah) Mike Miller." },
      { partikel: "も", fungsi: "Menyatakan arti \"juga\", dipakai jika predikatnya sama dengan predikat sebelumnya.", jp: "グプタさんも かいしゃいんです。", arti: "Sdr. Gupta juga pegawai perusahaan." },
      { partikel: "の", fungsi: "Menyambungkan dua kata benda, di mana kata benda pertama menerangkan kata benda kedua (seperti menunjukkan asal atau kepemilikan).", jp: "IMCの しゃいん", arti: "Pegawai (dari perusahaan) IMC." }
    ],
    katapenting: [
      "〜さん → Sdr./Bapak/Ibu (akhiran untuk menghormati nama orang lain, jangan dipakai untuk diri sendiri).",
      "だれ (どなた) → Siapa (どなた adalah bentuk yang lebih sopan).",
      "なんさい (おいくつ) → Umur berapa (おいくつ bentuk lebih sopan)."
    ],
    contoh: [
      { jp: "あのかたは どなたですか。", baca: "Ano kata wa donata desu ka.", arti: "Beliau siapa?" },
      { jp: "カリナさんも かいしゃいんですか。 いいえ、がくせいです。", baca: "Karina-san mo kaishain desu ka. Iie, gakusei desu.", arti: "Apakah Sdr. Karina juga pegawai perusahaan? Bukan, (dia) mahasiswa." }
    ],
    catatan: [
      "Partikel は ditulis \"ha\" tapi wajib dibaca \"wa\".",
      "Akhiran 〜さん diletakkan di belakang nama orang lain, jangan pernah memakainya untuk menyebut nama diri sendiri."
    ],
    ringkasan: [
      "は → penanda topik",
      "も → juga",
      "の → penyambung kata benda",
      "です → penutup kalimat positif / sopan",
      "か → penanda pertanyaan"
    ]
  },
  {
    judul: "Menunjuk Benda dan Kepemilikan",
    fokus: "Fokus pada cara menunjuk benda (ini/itu) di sekitar kita, serta menjelaskan kepemilikan benda.",
    pola: [
      { judul: "Pola 1", fungsi: "Menunjuk benda. Kore (dekat pembicara), Sore (dekat lawan bicara), Are (jauh dari keduanya).", jp: "これ / それ / あれ は N です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "これは じしょです。", baca: "Kore wa jisho desu.", arti: "Ini adalah kamus." },
      { judul: "Pola 2", fungsi: "Menunjuk benda secara spesifik dengan langsung diikuti oleh nama bendanya.", jp: "この N / その N / あの N は 〜です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "この ほんは わたしのです。", baca: "Kono hon wa watashi no desu.", arti: "Buku ini adalah punya saya." },
      { judul: "Pola 3", fungsi: "Menjawab kalimat tanya positif (Apakah ini...?). Sou desu berarti \"Ya, benar\", sedangkan Chigaimasu berarti \"Bukan/Salah\".", jp: "そうです / ちがいます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "それは じしょですか。 はい、そうです。", baca: "Sore wa jisho desu ka. Hai, sou desu.", arti: "Apakah itu kamus? Ya, benar." }
    ],
    partikel: [
      { partikel: "の (kepemilikan)", fungsi: "Menyatakan pemilik dari suatu benda, atau bisa dipakai sebagai pengganti kata benda jika bendanya sudah jelas.", jp: "わたしの ほんです。", arti: "Buku saya." },
      { partikel: "", fungsi: "", jp: "あれは だれの かばんですか。 さとうさんのです。", arti: "Itu tas siapa? Kepunyaan Sdr. Sato." }
    ],
    katapenting: [
      "これ → ini",
      "それ → itu",
      "あれ → itu (jauh)",
      "〜か、〜か → kalimat pilihan (\"Ini angka 9 atau 7?\").",
      "そうですか → O, begitu (diucapkan saat baru mengerti suatu informasi)."
    ],
    contoh: [
      { jp: "これは 「9」ですか、「7」ですか。", baca: "Kore wa '9' desu ka, '7' desu ka.", arti: "Ini \"9\" atau \"7\"?" },
      { jp: "この かさは あなたのですか。 いいえ、ちがいます。シュミットさんのです。", baca: "Kono kasa wa anata no desu ka. Iie, chigaimasu. Shumitto-san no desu.", arti: "Apakah payung ini punya Anda? Bukan, salah. Punya Sdr. Schmidt." }
    ],
    catatan: [
      "Jangan terbalik antara これ (berdiri sendiri) dan この (harus selalu diikuti kata benda, contoh: この ほん).",
      "Jika kalimat bertanya \"Apakah itu...?\" dan jawabannya negatif, jangan jawab \"いいえ、そうじゃありません\" melainkan pakailah \"いいえ、ちがいます\" (Bukan/salah)."
    ],
    ringkasan: [
      "これ/この → ini (dekat saya)",
      "それ/その → itu (dekat kamu)",
      "あれ/あの → itu (jauh)",
      "そうです → benar",
      "ちがいます → salah/bukan"
    ]
  },
  {
    judul: "Menunjuk Tempat dan Arah",
    fokus: "Fokus pada cara menunjuk tempat, arah, dan menanyakan lokasi keberadaan suatu ruangan, benda, atau produk.",
    pola: [
      { judul: "Pola 1", fungsi: "Menjelaskan nama suatu tempat. Koko (di sini), Soko (di situ), Asoko (di sana).", jp: "ここ / そこ / あそこ は Tempat です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ここは しょくどうです。", baca: "Koko wa shokudou desu.", arti: "Di sini kantin." },
      { judul: "Pola 2", fungsi: "Menjelaskan di mana suatu benda atau orang berada.", jp: "N は Tempat です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "やまださんは じむしょです。", baca: "Yamada-san wa jimusho desu.", arti: "Sdr. Yamada (ada) di kantor." },
      { judul: "Pola 3 (Buatan mana?)", fungsi: "Jika N1 adalah nama negara/perusahaan, dan N2 adalah produk, ini berarti produk tersebut \"buatan\" negara/perusahaan itu.", jp: "N1 の N2", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "これは どこの コンピューターですか。 にほんの コンピューターです。", baca: "Kore wa doko no konpyuutaa desu ka. Nihon no konpyuutaa desu.", arti: "Ini komputer buatan mana? Komputer buatan Jepang." }
    ],
    partikel: [
      { partikel: "は・の", fungsi: "Dalam bab ini belum ada partikel baru, namun partikel は (wa) dan の (no) masih terus digunakan untuk menunjukkan topik dan kepemilikan/asal produk.", jp: "", arti: "" }
    ],
    katapenting: [
      "どこ → di mana",
      "どちら → sebelah mana / di mana (bentuk lebih sopan dari doko)",
      "こちら / そちら / あちら → arah sini, arah situ, arah sana (bentuk sopan dari koko, soko, asoko)."
    ],
    contoh: [
      { jp: "おてあらいは どこですか。 あそこです。", baca: "Otearai wa doko desu ka. Asoko desu.", arti: "Kamar kecil di mana? Di sana." },
      { jp: "エレベーターは どちらですか。 あちらです。", baca: "Erebeetaa wa dochira desu ka. Achira desu.", arti: "Lift di sebelah mana? Di sebelah sana." }
    ],
    catatan: [
      "Untuk menanyakan tempat asal, sekolah, atau perusahaan, jangan gunakan partikel \"なん\" (apa), gunakanlah \"どこ\" atau \"どちら\". Contoh: かいしゃは どちらですか (Perusahaan (Anda) di mana/yang mana?).",
      "Awalan \"お (O-)\" seperti pada kata \"おくに\" (negara) atau \"おてあらい\" (toilet) dipakai untuk menunjukkan kesopanan."
    ],
    ringkasan: [
      "ここ/こちら → di sini",
      "そこ/そちら → di situ",
      "あそこ/あちら → di sana",
      "どこ/どちら → di mana",
      "どこの 〜 → buatan mana"
    ]
  },
  {
    judul: "Menyatakan Waktu dan Kata Kerja Dasar",
    fokus: "Fokus pada cara membaca jam, hari, dan menggunakan kata kerja dasar (waktu sekarang dan lampau) beserta partikel waktu.",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan waktu sekarang (Jam... Menit...).", jp: "いま 〜じ 〜ふん です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "いま 4じ 5ふんです。", baca: "Ima yo-ji go-fun desu.", arti: "Sekarang pukul empat lewat lima menit." },
      { judul: "Pola 2", fungsi: "〜ます (Positif sekarang/kebiasaan). 〜ません (Negatif sekarang). 〜ました (Positif lampau). 〜ませんでした (Negatif lampau).", jp: "Kata Kerja ます / ません / ました / ませんでした", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "きのう べんきょうしましたか。 いいえ、べんきょうしませんでした。", baca: "Kinou benkyou shimashita ka. Iie, benkyou shimasen deshita.", arti: "Kemarin belajar? Tidak, tidak belajar." },
      { judul: "Pola 3", fungsi: "Menyatakan batasan titik awal waktu \"dari...\" (kara) dan titik akhir waktu \"sampai...\" (made).", jp: "N (Waktu) から N (Waktu) まで", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "9じから 5じまで べんきょうします。", baca: "Ku-ji kara go-ji made benkyou shimasu.", arti: "(Saya) belajar dari pukul sembilan sampai dengan pukul lima." }
    ],
    partikel: [
      { partikel: "に (waktu)", fungsi: "Digunakan di belakang angka waktu (jam, tanggal) untuk menunjukkan kapan suatu aksi terjadi.", jp: "6じはんに おきます。", arti: "Bangun pada pukul setengah tujuh." },
      { partikel: "と", fungsi: "Menyambung dua kata benda secara setara (dan).", jp: "どようびと にちようび", arti: "Hari sabtu dan hari minggu." }
    ],
    katapenting: [
      "なんじ → Jam berapa",
      "なんようび → Hari apa",
      "はん → Setengah (30 menit)",
      "〜ね → Partikel di akhir kalimat untuk meminta persetujuan \"ya\"."
    ],
    contoh: [
      { jp: "まいにち 10じまで べんきょうします。 たいへんですね。", baca: "Mainichi juu-ji made benkyou shimasu. Taihen desu ne.", arti: "Setiap hari belajar sampai pukul sepuluh. O, berat ya." },
      { jp: "やすみは なんようびですか。 どようびと にちようびです。", baca: "Yasumi wa nan youbi desu ka. Doyoubi to nichiyoubi desu.", arti: "Liburnya hari apa? Hari Sabtu dan hari Minggu." }
    ],
    catatan: [
      "Partikel に HANYA dipakai untuk waktu yang ada angkanya (jam, bulan, tahun, tanggal).",
      "JANGAN pakai partikel に untuk waktu seperti: besok (ashita), hari ini (kyou), kemarin (kinou), setiap hari (mainichi)."
    ],
    ringkasan: [
      "〜ます → (akan/biasa) melakukan",
      "〜ました → (sudah) melakukan",
      "〜から → dari",
      "〜まで → sampai",
      "〜に → pada (jam/tanggal)"
    ]
  },
  {
    judul: "Pergerakan (Pergi, Datang, Pulang)",
    fokus: "Fokus pada perpindahan tempat menggunakan kata kerja \"Pergi\" (ikimasu), \"Datang\" (kimasu), dan \"Pulang\" (kaerimasu), serta menyebutkan kendaraan dan teman perjalanan.",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan arah tujuan pergerakan (pergi/datang/pulang ke suatu tempat). Partikel へ dibaca \"e\".", jp: "N (Tempat) へ 行きます / 来ます / 帰ります", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "きょうとへ いきます。", baca: "Kyouto e ikimasu.", arti: "Pergi ke Kyoto." },
      { judul: "Pola 2", fungsi: "Bentuk penyangkalan total (Tidak pergi ke mana-mana). Partikel も ditambahkan setelah kata tanya どこ.", jp: "どこ［へ］も 行きません / 行きませんでした", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "にちようび どこへも いきません。", baca: "Nichiyoubi doko e mo ikimasen.", arti: "Hari minggu tidak pergi ke mana-mana." },
      { judul: "Pola 3", fungsi: "Menyatakan sarana transportasi yang dipakai.", jp: "N (Kendaraan) で 行きます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "でんしゃで いきます。", baca: "Densha de ikimasu.", arti: "Pergi dengan kereta rel listrik." }
    ],
    partikel: [
      { partikel: "へ (dibaca 'e')", fungsi: "Menunjukkan arah tempat tujuan perpindahan.", jp: "うちへ かえります。", arti: "Pulang ke rumah." },
      { partikel: "で", fungsi: "Menunjukkan sarana transportasi / kendaraan.", jp: "", arti: "" },
      { partikel: "と", fungsi: "Menunjukkan dengan siapa kita melakukan kegiatan tersebut (bersama orang/hewan).", jp: "かぞくと にほんへ きました。", arti: "Datang ke Jepang bersama dengan keluarga." }
    ],
    katapenting: [
      "いつ → Kapan (Kata tanya ini tidak boleh dipasangkan dengan partikel に).",
      "あるいて → Berjalan kaki (Khusus jalan kaki, JANGAN tambahkan partikel で).",
      "ひとりで → Sendirian (Tidak menggunakan partikel と)."
    ],
    contoh: [
      { jp: "なん月 なん日に にほんへ きましたか。 3月 25日に きました。", baca: "Nan-gatsu nan-nichi ni Nihon e kimashita ka. San-gatsu ni-juu-go-nichi ni kimashita.", arti: "Kapan (tanggal & bulan berapa) datang di Jepang? Datang pada tanggal 25 Maret." },
      { jp: "だれと とうきょうへ いきますか。 やまださんと いきます。", baca: "Dare to Toukyou e ikimasu ka. Yamada-san to ikimasu.", arti: "Dengan siapa pergi ke Tokyo? Pergi dengan Sdr. Yamada." }
    ],
    catatan: [
      "Jangan pernah tulis partikel \"de\" setelah kata \"aruite\" (berjalan kaki).",
      "Partikel \"he\" ditulis dengan huruf hiragana \"he\" (へ) tapi wajib dibaca \"e\"."
    ],
    ringkasan: [
      "へ → ke (arah tujuan)",
      "で → dengan (kendaraan)",
      "と → bersama (orang)",
      "いつ → kapan"
    ]
  },
  {
    judul: "Objek Pekerjaan dan Ajakan",
    fokus: "Fokus pada cara menyebutkan objek dari sebuah aktivitas (makan nasi, minum air), menyebutkan lokasi aktivitas, dan mengajak orang lain melakukan sesuatu.",
    pola: [
      { judul: "Pola 1", fungsi: "Menunjukkan benda yang menjadi objek dari sebuah aktivitas (dikenai pekerjaan). Partikel を dibaca \"o\".", jp: "N を Kata Kerja (Transitif)", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ジュースを のみます。", baca: "Juusu o nomimasu.", arti: "Minum jus." },
      { judul: "Pola 2", fungsi: "Menunjukkan tempat di mana sebuah aksi/kegiatan dilakukan. Berbeda dengan partikel に/へ yang sekadar menunjuk tujuan, partikel で fokus pada \"lokasi aktivitas\".", jp: "N (Tempat) で Kata Kerja", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "えきで しんぶんを かいます。", baca: "Eki de shinbun o kaimasu.", arti: "Membeli surat kabar di stasiun." },
      { judul: "Pola 3", fungsi: "Bentuk untuk mengajak lawan bicara. 〜ませんか (ajakan halus: Bagaimana kalau kita...?). 〜ましょう (ajakan aktif/menyetujui: Mari kita...!).", jp: "V ませんか / V ましょう", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "いっしょに きょうとへ いきませんか。 ええ、いいですね。", baca: "Issho ni Kyouto e ikimasen ka. Ee, ii desu ne.", arti: "Bagaimana kalau kita pergi ke Kyoto bersama-sama? Ya, bagus ya." }
    ],
    partikel: [
      { partikel: "を (dibaca 'o')", fungsi: "Menjadi penanda objek penderita / hal yang dikerjakan.", jp: "サッカーを します。", arti: "Bermain sepak bola." },
      { partikel: "で (lokasi)", fungsi: "Menunjukkan tempat kejadian berlangsungnya suatu aksi.", jp: "", arti: "" }
    ],
    katapenting: [
      "なに（何） → Apa (dipakai saat ditanya sendiri, atau diikuti partikel を).",
      "なん（何） → Apa (dipakai jika huruf berikutnya berawalan t, d, n, atau diikuti kata bantu bilangan). Contoh: 何ですか (Nan desu ka)."
    ],
    contoh: [
      { jp: "きのう なにを しましたか。 サッカーを しました。", baca: "Kinou nani o shimashita ka. Sakkaa o shimashita.", arti: "Kemarin melakukan apa? Bermain sepak bola." },
      { jp: "ちょっと やすみましょう。", baca: "Chotto yasumimashou.", arti: "Mari istirahat sebentar." }
    ],
    catatan: [
      "Ingat perbedaan \"Nan\" dan \"Nani\". Pakai \"Nan\" kalau ketemu Desu (なんですか).",
      "Partikel \"o\" hanya ditulis dengan huruf を (bukan お), dan hanya dipakai murni sebagai partikel penanda objek."
    ],
    ringkasan: [
      "を → objek aktivitas",
      "で → lokasi aktivitas",
      "ませんか → bagaimana kalau kita...",
      "ましょう → mari kita..."
    ]
  },
  {
    judul: "Alat, Bahasa, dan Memberi/Menerima",
    fokus: "Fokus pada cara menyebutkan alat atau bahasa yang digunakan, serta pola untuk memberikan atau menerima sesuatu dari seseorang.",
    pola: [
      { judul: "Pola 1", fungsi: "Menunjukkan alat, benda, atau bahasa yang digunakan untuk melakukan suatu kegiatan.", jp: "N (Alat/Sarana) で V", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "はしで たべます。", baca: "Hashi de tabemasu.", arti: "Makan dengan sumpit." },
      { judul: "Pola 2", fungsi: "Menyatakan bahwa kita memberi benda (N2) kepada orang (N1).", jp: "N1 (Orang) に N2 を あげます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "きむらさんに はなを あげました。", baca: "Kimura-san ni hana o agemashita.", arti: "(Saya) memberikan bunga kepada Sdr. Kimura." },
      { judul: "Pola 3", fungsi: "Menyatakan bahwa kita menerima benda (N2) dari orang (N1).", jp: "N1 (Orang) に N2 を もらいます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "やまださんに はなを もらいました。", baca: "Yamada-san ni hana o moraimashita.", arti: "(Saya) mendapatkan bunga dari Sdr. Yamada." }
    ],
    partikel: [
      { partikel: "で (alat/bahasa)", fungsi: "Berfungsi untuk menyatakan \"menggunakan / dengan\".", jp: "にほんごで レポートを かきます。", arti: "Menulis laporan dalam bahasa Jepang." },
      { partikel: "に (kepada/dari orang)", fungsi: "Digunakan dengan kata kerja memberi (kepada siapa) atau menerima (dari siapa). Jika menerima dari instansi/perusahaan, partikel に sering diganti dengan から (dari).", jp: "", arti: "" }
    ],
    katapenting: [
      "もう → Sudah (diikuti bentuk ~mashita).",
      "まだ → Belum.",
      "〜語で何ですか → Dalam bahasa ~ apa? (Sangat berguna untuk menanyakan kosa kata baru)."
    ],
    contoh: [
      { jp: "「Thank you」は にほんごで なんですか。 「ありがとう」です。", baca: "\"Thank you\" wa Nihongo de nan desu ka. \"Arigatou\" desu.", arti: "Apa bahasa Jepangnya \"Thank you\"? \"Arigato\"." },
      { jp: "もう ひるごはんを たべましたか。 いいえ、まだです。", baca: "Mou hirugohan o tabemashita ka. Iie, mada desu.", arti: "Sudah makan siang? Belum." }
    ],
    catatan: [
      "Kalau ditanya \"Sudah makan?\" (もう 食べましたか), jika belum, JANGAN jawab \"いいえ、食べませんでした\". Jawablah dengan \"いいえ、まだです\" (Belum)."
    ],
    ringkasan: [
      "で → dengan (alat/bahasa)",
      "に あげます → memberi kepada",
      "に もらいます → menerima dari",
      "もう → sudah",
      "まだ → belum"
    ]
  },
  {
    judul: "Kata Sifat (Keadaan dan Deskripsi)",
    fokus: "Fokus pada mendeskripsikan benda, orang, dan tempat menggunakan dua jenis Kata Sifat Jepang (Kata Sifat -i dan Kata Sifat -na).",
    pola: [
      { judul: "Pola 1", fungsi: "Menerangkan sifat atau kondisi benda. Untuk kata sifat -na, akhiran \"na\" DIBUANG saat bertemu \"desu\". Untuk kata sifat -i, huruf \"i\" dibiarkan tetap ada sebelum \"desu\".", jp: "N は Kata Sifat (i / na) です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ワットせんせいは しんせつです。", baca: "Watto sensei wa shinsetsu desu.", arti: "Bapak Watt baik hati. (Kata dasar: Shinsetsu-na)" },
      { judul: "", fungsi: "", jp: "ふじさんは たかいです。", baca: "Fujisan wa takai desu.", arti: "Gunung Fuji tinggi. (Kata dasar: Takai)" },
      { judul: "Pola 2", fungsi: "KS-na (negatif): tambahkan じゃありません. KS-i (negatif): ubah huruf 'i' paling belakang menjadi くないです.", jp: "Kata Sifat (negatif) + です", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "あそこは しずかじゃありません。", baca: "Asoko wa shizuka ja arimasen.", arti: "Di sana tidak sunyi." },
      { judul: "", fungsi: "", jp: "この ほんは おもしろくないです。", baca: "Kono hon wa omoshirokunai desu.", arti: "Buku ini tidak menarik." },
      { judul: "Pola 3", fungsi: "Menanyakan \"Orang/tempat/benda yang BAGAIMANA?\".", jp: "N は どんな N2 ですか", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ならは どんな まちですか。 ふるい まちです。", baca: "Nara wa donna machi desu ka. Furui machi desu.", arti: "Nara kota bagaimana? Kota yang lama." }
    ],
    partikel: [
      { partikel: "が (kata hubung)", fungsi: "Berfungsi menyambungkan dua kalimat yang berlawanan arti, artinya \"tetapi\".", jp: "にほんの たべものは おいしいですが、たかいです。", arti: "Makanan Jepang enak, tetapi mahal." }
    ],
    katapenting: [
      "とても → Sangat (diikuti kalimat positif).",
      "あまり → Tidak begitu (selalu diikuti kalimat negatif).",
      "どうですか → Bagaimana? (Meminta pendapat akan suatu hal)."
    ],
    contoh: [
      { jp: "ペキンは さむいですか。 はい、とても さむいです。", baca: "Pekin wa samui desu ka. Hai, totemo samui desu.", arti: "Apakah Beijing dingin? Ya, sangat dingin." },
      { jp: "シャンハイも さむいですか。 いいえ、あまり さむくないです。", baca: "Shanhai mo samui desu ka. Iie, amari samukunai desu.", arti: "Apakah Shanghai juga dingin? Tidak, tidak begitu dingin." }
    ],
    catatan: [
      "Jangan pernah lupa mengubah bentuk pada kata sifat negatif!",
      "Kata sifat ii (bagus) merupakan perkecualian. Bentuk negatifnya bukan inai melainkan よくないです (yokunai desu).",
      "Saat kata sifat digabungkan langsung dengan kata bendanya, Kata Sifat-na JANGAN dibuang \"na\"-nya. (Contoh: しんせつな せんせい = Guru yang baik hati)."
    ],
    ringkasan: [
      "Kata sifat -na → positif = desu, negatif = ja arimasen",
      "Kata sifat -i → positif = i desu, negatif = kunai desu",
      "とても + positif → sangat...",
      "あまり + negatif → tidak begitu...",
      "が → tetapi"
    ]
  },
  {
    judul: "Kesukaan, Kemahiran, dan Alasan",
    fokus: "Fokus pada cara menyatakan kesukaan, kemahiran, kepemilikan, pemahaman, dan cara menjelaskan alasan suatu tindakan.",
    pola: [
      { judul: "Pola 1", fungsi: "Sebagian kata kerja (seperti ada, mengerti) dan kata sifat (suka, benci, pintar, bodoh) dalam Bahasa Jepang tidak menggunakan objek を, melainkan menggunakan partikel が.", jp: "N が あります / わかります / すきです / きらいです / じょうずです / へたです", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは イタリアりょうりが すきです。", baca: "Watashi wa Itaria ryouri ga suki desu.", arti: "Saya suka masakan Italia." },
      { judul: "Pola 2", fungsi: "Menyatakan alasan. Hal yang dinyatakan di depan kara (Kalimat 1) merupakan alasan dari kalimat di belakangnya (Kalimat 2).", jp: "Kalimat 1 から、Kalimat 2", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "じかんが ありませんから、しんぶんを よみません。", baca: "Jikan ga arimasen kara, shinbun o yomimasen.", arti: "Karena tidak ada waktu, (saya) tidak membaca surat kabar." }
    ],
    partikel: [
      { partikel: "が", fungsi: "Menjadi penanda subjek penekanan atau objek khusus untuk kepemilikan, pemahaman, dan kata sifat tertentu.", jp: "にほんごが わかります。", arti: "Mengerti bahasa Jepang." }
    ],
    katapenting: [
      "どうして → Mengapa/kenapa.",
      "よく / だいたい / すこし → Dengan baik / kira-kira / sedikit (digunakan dengan kalimat positif).",
      "あまり / ぜんぜん → Tidak begitu / sama sekali tidak (selalu digunakan bersama kalimat negatif)."
    ],
    contoh: [
      { jp: "どんな スポーツが すきですか。 サッカーが すきです。", baca: "Donna supootsu ga suki desu ka. Sakkaa ga suki desu.", arti: "Suka olahraga apa? Suka sepak bola." },
      { jp: "どうして あさ しんぶんを よみませんか。 じかんが ありませんから。", baca: "Doushite asa shinbun o yomimasen ka. Jikan ga arimasen kara.", arti: "Mengapa pada pagi hari tidak membaca surat kabar? Sebab tidak ada waktu." }
    ],
    catatan: [
      "Pemula sering menggunakan を untuk kata すき (suka). Ingat, harus selalu menggunakan が.",
      "Jika menjawab pertanyaan どうして (mengapa), pastikan akhiri kalimat jawaban dengan 〜から."
    ],
    ringkasan: [
      "が すきです → suka",
      "が わかります → mengerti",
      "どうして → mengapa?",
      "〜から → karena..."
    ]
  },
  {
    judul: "Keberadaan Benda dan Orang",
    fokus: "Fokus pada cara menyatakan keberadaan benda mati dan makhluk hidup, serta menyebutkan posisi (atas, bawah, dalam, luar).",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan di suatu tempat ada sesuatu/seseorang. あります: untuk benda mati/tumbuhan. います: untuk manusia/hewan.", jp: "Tempat に N が あります / います", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "じむしょに ミラーさんが います。", baca: "Jimusho ni Miraa-san ga imasu.", arti: "Di kantor ada Sdr. Miller." },
      { judul: "Pola 2", fungsi: "Menjelaskan di mana suatu topik (benda/orang yang sudah diketahui) berada.", jp: "N は Tempat に あります / います", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ミラーさんは じむしょに います。", baca: "Miraa-san wa jimusho ni imasu.", arti: "Sdr. Miller ada di kantor." }
    ],
    partikel: [
      { partikel: "に (keberadaan)", fungsi: "Menunjukkan tempat di mana benda atau seseorang itu berada atau eksis.", jp: "わたしの へやに つくえが あります。", arti: "Di kamar saya ada meja." },
      { partikel: "や", fungsi: "Menyambungkan kata benda, tetapi sifatnya menyebutkan perwakilan saja (A dan B, dan lain-lain), berbeda dengan と yang menyebutkan semuanya secara utuh.", jp: "てがみや しゃしん", arti: "Surat dan foto (dan lain-lain)." }
    ],
    katapenting: [
      "うえ / した / まえ / うしろ / なか / そと → Atas / bawah / depan / belakang / dalam / luar.",
      "みぎ / ひだり / となり / ちかく → Kanan / kiri / sebelah / dekat."
    ],
    contoh: [
      { jp: "つくえの うえに しゃしんが あります。", baca: "Tsukue no ue ni shashin ga arimasu.", arti: "Di atas meja ada foto." },
      { jp: "ちかに なにが ありますか。 レストランが あります。", baca: "Chika ni nani ga arimasu ka. Resutoran ga arimasu.", arti: "Di lantai basement ada apa? Ada restoran." }
    ],
    catatan: [
      "Hati-hati tertukar: あります (untuk buku, pohon, tas) dan います (untuk guru, anjing, anak).",
      "Gunakan partikel が setelah kata tanya keberadaan (なにが / だれが), jangan memakai は."
    ],
    ringkasan: [
      "あります → ada (benda mati)",
      "います → ada (makhluk hidup)",
      "に → di (tempat ada)",
      "や → dan (sebagai perwakilan)"
    ]
  },
  {
    judul: "Menghitung Benda dan Durasi",
    fokus: "Fokus pada cara menggunakan kata bantu bilangan untuk menghitung barang, mesin, lembaran, atau orang, serta menyatakan durasi dan frekuensi waktu.",
    pola: [
      { judul: "Pola 1", fungsi: "Menunjukkan jumlah dari benda yang menjadi objek tindakan. Angka (kuantitas) diletakkan langsung sebelum kata kerja tanpa partikel.", jp: "Kata Benda を [Jumlah] V", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "みかんを 8つ かいました。", baca: "Mikan o yattsu kaimashita.", arti: "Membeli delapan buah jeruk." },
      { judul: "Pola 2", fungsi: "Menunjukkan frekuensi (berapa kali) suatu kegiatan dilakukan dalam periode waktu tertentu.", jp: "[Waktu] に [Jumlah] 回 V", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "1かげつに 2かい えいがを みます。", baca: "Ikkagetsu ni ni-kai eiga o mimasu.", arti: "Sebulan dua kali menonton film." }
    ],
    partikel: [
      { partikel: "だけ", fungsi: "Berarti \"hanya / saja\", diletakkan di belakang kata benda atau angka kuantitas.", jp: "やすみは にちようびだけです。", arti: "Hari libur hanya hari Minggu saja." }
    ],
    katapenting: [
      "〜つ（ひとつ, ふたつ...） → Menghitung benda umum.",
      "〜にん（ひとり, ふたり...） → Menghitung orang.",
      "〜だい → Menghitung mesin/kendaraan.",
      "〜まい → Menghitung benda tipis (kertas, baju).",
      "どのくらい → Berapa lama."
    ],
    contoh: [
      { jp: "がいこくじんの がくせいが 2にん います。", baca: "Gaikokujin no gakusei ga futari imasu.", arti: "Ada dua orang mahasiswa asing." },
      { jp: "どのくらい にほんごを べんきょうしましたか。 3ねん べんきょうしました。", baca: "Dono kurai Nihongo o benkyou shimashita ka. San-nen benkyou shimashita.", arti: "Berapa lama belajar bahasa Jepang? Belajar selama tiga tahun." }
    ],
    catatan: [
      "Kata bantu bilangan diletakkan setelah partikel を/が dan sebelum kata kerja. Salah: 2にんの がくせいが います. Benar: がくせいが 2にん います.",
      "Untuk satu dan dua orang, bacanya spesial: ひとり (1 orang) dan ふたり (2 orang)."
    ],
    ringkasan: [
      "〜つ → benda umum",
      "〜にん → orang",
      "〜まい → lembaran tipis",
      "どのくらい → berapa lama (durasi)",
      "だけ → hanya"
    ]
  },
  {
    judul: "Waktu Lampau Kata Sifat dan Perbandingan",
    fokus: "Fokus pada cara merubah Kata Sifat dan Kata Benda ke bentuk lampau, serta membuat perbandingan antara dua benda atau lebih.",
    pola: [
      { judul: "Pola 1", fungsi: "Kata Benda & Kata Sifat な → 〜でした (positif), 〜じゃありませんでした (negatif). Kata Sifat い → 〜かったです (positif), 〜くありませんでした (negatif).", jp: "Bentuk Lampau Kata Sifat & Kata Benda", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "きのうは さむかったです。", baca: "Kinou wa samukatta desu.", arti: "Kemarin dingin." },
      { judul: "Pola 2", fungsi: "Membandingkan dua hal. N1 \"lebih\" (Kata Sifat) daripada N2.", jp: "N1 は N2 より Adj です。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ほっかいどうは きゅうしゅうより おおきいです。", baca: "Hokkaidou wa Kyuushuu yori ookii desu.", arti: "Hokkaido lebih besar daripada Kyushu." },
      { judul: "Pola 3", fungsi: "Menanyakan pilihan \"Mana yang lebih... di antara N1 dan N2?\". Jawaban memakai pola ~no hou ga.", jp: "N1 と N2 と どちらが Adj ですか。", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "サッカーと テニスと どちらが おもしろいですか。 サッカーのほうが おもしろいです。", baca: "Sakkaa to tenisu to dochira ga omoshiroi desu ka. Sakkaa no hou ga omoshiroi desu.", arti: "Antara sepak bola dan tenis mana yang lebih menarik? Sepak bola lebih menarik." }
    ],
    partikel: [
      { partikel: "より", fungsi: "Berarti \"daripada\", dipakai untuk membuat perbandingan.", jp: "", arti: "" },
      { partikel: "[の なか] で", fungsi: "Menentukan cakupan kategori saat mencari yang \"paling\".", jp: "くだもの［の なか］で、なにが いちばん すきですか。", arti: "Di antara buah-buahan, apa yang paling disuka?" }
    ],
    katapenting: [
      "どちら → Yang mana (antara dua pilihan).",
      "いちばん → Paling / nomor satu.",
      "ずっと → Jauh lebih..."
    ],
    contoh: [
      { jp: "1ねんで いつが いちばん さむいですか。 2がつが いちばん さむいです。", baca: "Ichi-nen de itsu ga ichiban samui desu ka. Ni-gatsu ga ichiban samui desu.", arti: "Dalam setahun, kapan yang paling dingin? Bulan 2 (Februari) yang paling dingin." }
    ],
    catatan: [
      "Bentuk lampau dari kata sifat ii (bagus) adalah よかったです (bukan ikatta desu).",
      "Jangan lupa menghapus huruf \"i\" paling belakang saat merubah kata sifat-i ke lampau (さむい → さむかったです)."
    ],
    ringkasan: [
      "〜かったです → lampau kata sifat-i",
      "〜でした → lampau kata sifat-na/benda",
      "〜より → daripada",
      "の ほうが → lebih (untuk jawaban)",
      "いちばん → paling"
    ]
  },
  {
    judul: "Keinginan dan Tujuan Pergi",
    fokus: "Fokus pada cara mengungkapkan keinginan memiliki benda, keinginan melakukan suatu tindakan, dan menyatakan tujuan pergi/datang.",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan keinginan untuk memiliki suatu benda (Saya ingin N).", jp: "N が ほしいです", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは くるまが ほしいです。", baca: "Watashi wa kuruma ga hoshii desu.", arti: "Saya ingin mobil." },
      { judul: "Pola 2", fungsi: "Menyatakan keinginan untuk melakukan suatu tindakan (Saya ingin V). Hilangkan masu, ganti dengan tai desu.", jp: "V (bentuk -masu) たいです", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "すしを たべたいです。（すしが たべたいです）", baca: "Sushi o tabetai desu.", arti: "Saya ingin makan sushi." },
      { judul: "Pola 3", fungsi: "Menyatakan tujuan dari pergerakan (Pergi/datang/pulang untuk melakukan sesuatu). Kata kerjanya dicoret masu-nya.", jp: "Tempat へ V (bentuk -masu) / N に いきます / きます / かえります", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "デパートへ かいものに いきます。", baca: "Depaato e kaimono ni ikimasu.", arti: "Pergi ke toserba untuk belanja." }
    ],
    partikel: [
      { partikel: "に (tujuan pergerakan)", fungsi: "Menunjukkan \"tujuan/niat\" dari pergerakan pergi, datang, atau pulang.", jp: "えいがを みに いきます。", arti: "Pergi untuk menonton film." }
    ],
    katapenting: [
      "なにか → Sesuatu.",
      "どこか → Suatu tempat.",
      "Catatan: Partikel へ atau を sering dihilangkan saat bertemu nanika atau dokoka."
    ],
    contoh: [
      { jp: "ふゆやすみに どこか いきたいですか。 はい、ほっかいどうへ スキーに いきたいです。", baca: "Fuyuyasumi ni dokoka ikitai desu ka. Hai, Hokkaidou e sukii ni ikitai desu.", arti: "Libur musim dingin ingin pergi ke suatu tempat? Ya, ingin pergi ke Hokkaido untuk main ski." }
    ],
    catatan: [
      "Pola hoshii desu dan tai desu HANYA digunakan untuk keinginan pembicara (saya) atau menanyakan keinginan lawan bicara (kamu). Jangan dipakai untuk pihak ketiga (dia).",
      "Untuk tai desu, partikel を boleh diganti menjadi が."
    ],
    ringkasan: [
      "ほしいです → ingin (benda)",
      "たいです → ingin (melakukan)",
      "〜に いきます → pergi untuk...",
      "なにか → sesuatu"
    ]
  },
  {
    judul: "Kata Kerja Bentuk TE dan Ajakan Aktif",
    fokus: "Fokus pada klasifikasi golongan kata kerja, pembentukan Kata Kerja-Te (て), meminta tolong, dan menyatakan kegiatan yang sedang berlangsung.",
    pola: [
      { judul: "Pola 1", fungsi: "Meminta, mempersilakan, atau menyuruh orang lain melakukan sesuatu secara sopan (Tolong V).", jp: "V-て ください", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ちょっと まって ください。", baca: "Chotto matte kudasai.", arti: "Tolong tunggu sebentar." },
      { judul: "Pola 2", fungsi: "Menyatakan aksi yang sedang berlangsung saat ini (Present Continuous Tense).", jp: "V-て います", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ミラーさんは いま でんわを かけて います。", baca: "Miraa-san wa ima denwa o kakete imasu.", arti: "Sdr. Miller sekarang sedang menelepon." },
      { judul: "Pola 3", fungsi: "Menawarkan bantuan atau mengajak secara aktif (Bagaimana kalau saya V?).", jp: "V-ましょうか", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "まどを あけましょうか。", baca: "Mado o akemashou ka.", arti: "Bagaimana kalau saya buka jendelanya?" }
    ],
    partikel: [
      { partikel: "が (subjek fenomena)", fungsi: "Digunakan sebagai penanda subjek saat membicarakan fenomena alam yang sedang terjadi di depan mata.", jp: "あめが ふって います。", arti: "Hujan sedang turun." }
    ],
    katapenting: [
      "Golongan Kata Kerja:",
      "Gol 1 (-i masu): かきます (menulis) → かいて",
      "Gol 2 (-e masu): たべます (makan) → たべて",
      "Gol 3 (khusus): します (melakukan) → して, きます (datang) → きて."
    ],
    contoh: [
      { jp: "すみませんが、しおを とって ください。", baca: "Sumimasen ga, shio o totte kudasai.", arti: "Maaf, tolong ambilkan garam." },
      { jp: "にもつを もちましょうか。 いいえ、けっこうです。", baca: "Nimotsu o mochimashou ka. Iie, kekkou desu.", arti: "Bagaimana kalau saya bawakan barangnya? Tidak usah, terima kasih." }
    ],
    catatan: [
      "Golongan 1 memiliki aturan perubahan bentuk -Te yang bervariasi (I, Chi, Ri → tte; Mi, Bi, Ni → nde; Ki → ite; Gi → ide). Pemula wajib menghafal ini!",
      "Kata いきます (pergi) adalah pengecualian. Bentuk Te-nya adalah いって (bukan iite)."
    ],
    ringkasan: [
      "〜て ください → tolong...",
      "〜て います → sedang...",
      "〜ましょうか → mau saya bantu...?"
    ]
  },
  {
    judul: "Izin, Larangan, dan Keadaan",
    fokus: "Fokus pada cara meminta izin, memberikan larangan, dan penggunaan V-て います untuk keadaan, profesi, atau kebiasaan.",
    pola: [
      { judul: "Pola 1", fungsi: "Meminta izin untuk melakukan sesuatu (Bolehkah saya V?).", jp: "V-て も いいですか", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "しゃしんを とっても いいですか。", baca: "Shashin o totte mo ii desu ka.", arti: "Bolehkah (saya) mengambil foto?" },
      { judul: "Pola 2", fungsi: "Menyatakan larangan keras (Tidak boleh V).", jp: "V-て は いけません", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ここで たばこを すっては いけません。", baca: "Koko de tabako o sutte wa ikemasen.", arti: "Tidak boleh merokok di sini." },
      { judul: "Pola 3", fungsi: "Selain untuk sesuatu yang sedang terjadi (Bab 14), pola ini juga digunakan untuk status pernikahan, tempat tinggal, atau pekerjaan rutin.", jp: "V-て います (Status/Keadaan/Kebiasaan)", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは けっこんして います。", baca: "Watashi wa kekkon shite imasu.", arti: "Saya sudah menikah (berstatus menikah)." }
    ],
    partikel: [
      { partikel: "に (tempat tinggal/tujuan tempel)", fungsi: "Menunjukkan lokasi menetap atau titik tempel suatu benda.", jp: "おおさかに すんで います。", arti: "Tinggal di Osaka." }
    ],
    katapenting: [
      "しっています → Tahu / Mengetahui.",
      "しりません → Tidak tahu (bentuk negatifnya BUKAN shitte imasen, melainkan shirimasen)."
    ],
    contoh: [
      { jp: "この カタログを もらっても いいですか。 ええ、いいですよ。どうぞ。", baca: "Kono katarogu o moratte mo ii desu ka. Ee, ii desu yo. Douzo.", arti: "Bolehkah saya mengambil katalog ini? Ya, boleh. Silakan." },
      { jp: "IMCは コンピューターの ソフトを つくって います。", baca: "IMC wa konpyuutaa no sofuto o tsukutte imasu.", arti: "IMC membuat (memproduksi rutin) perangkat lunak komputer." }
    ],
    catatan: [
      "Saat ditanya \"Bolehkah...?\", jika menolak jangan pakai ~te wa ikemasen karena terkesan marah/kasar. Gunakanlah ungkapan menolak halus seperti \"すみません、ちょっと…\"."
    ],
    ringkasan: [
      "〜ても いいですか → bolehkah...",
      "〜ては いけません → tidak boleh...",
      "〜て います → berstatus / tinggal di / bekerja rutin"
    ]
  },
  {
    judul: "Menyambung Kalimat Berurutan",
    fokus: "Fokus pada cara menyambung beberapa kata kerja yang terjadi berurutan, kalimat beruntun, serta menyambung kata sifat.",
    pola: [
      { judul: "Pola 1", fungsi: "Menyebutkan beberapa aktivitas secara berurutan sesuai urutan waktunya (Melakukan V1, lalu V2, lalu V3).", jp: "V1-て、V2-て、V3", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "あさ ジョギングをして、シャワーを あびて、かいしゃへ いきます。", baca: "Asa jogingu o shite, shawaa o abite, kaisha e ikimasu.", arti: "Pagi hari joging, mandi shower, lalu pergi ke kantor." },
      { judul: "Pola 2", fungsi: "Menyatakan bahwa V2 dilakukan setelah selesai melakukan V1 (Setelah V1, V2).", jp: "V1-てから、V2", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "コンサートが おわってから、レストランで しょくじしました。", baca: "Konsaato ga owatte kara, resutoran de shokuji shimashita.", arti: "Setelah konser selesai, (saya) makan di restoran." },
      { judul: "Pola 3", fungsi: "Menjelaskan ciri khas atau bagian spesifik (N2) dari suatu subjek utama (N1).", jp: "N1 は N2 が Kata Sifat です", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "おおさかは たべものが おいしいです。", baca: "Oosaka wa tabemono ga oishii desu.", arti: "Osaka itu, makanannya enak." }
    ],
    partikel: [
      { partikel: "を (arah keluar/melewati)", fungsi: "Partikel を dipakai untuk titik keluar atau area yang dilalui (untuk kata kerja seperti turun, keluar, berjalan).", jp: "でんしゃを おります。", arti: "Turun dari kereta." }
    ],
    katapenting: [
      "Menyambung Kata Sifat / Kata Benda:",
      "Kata Sifat-i: hapus i ganti 〜くて（おおきい → おおきくて）",
      "Kata Sifat-na & Kata Benda: tambah 〜で（しんせつ → しんせつで／がくせい → がくせいで）"
    ],
    contoh: [
      { jp: "ミラーさんは わかくて、げんきです。", baca: "Miraa-san wa wakakute, genki desu.", arti: "Sdr. Miller muda, dan sehat/energik." },
      { jp: "マリアさんは どのひとですか。 あの かみが ながい ひとです。", baca: "Maria-san wa dono hito desu ka. Ano kami ga nagai hito desu.", arti: "Sdr. Maria orang yang mana? Orang yang rambutnya panjang itu." }
    ],
    catatan: [
      "Saat menyambung kata sifat, pastikan perubahannya benar. Salah: おいしいで、やすいです. Benar: おいしくて、やすいです.",
      "Pola ~te kara sangat kuat menekankan bahwa aksi pertama HARUS selesai dulu sebelum yang kedua dimulai."
    ],
    ringkasan: [
      "〜て、〜て → (lalu) untuk urutan",
      "〜てから → setelah selesai...",
      "〜くて → sambungan kata sifat-i",
      "〜で → sambungan kata sifat-na/benda"
    ]
  },
  {
    judul: "Bentuk NAI, Larangan Halus, dan Kewajiban",
    fokus: "Fokus pada cara merubah kata kerja menjadi bentuk NAI (tidak), meminta orang lain untuk tidak melakukan sesuatu, dan menyatakan kewajiban.",
    pola: [
      { judul: "Pola 1", fungsi: "Meminta dengan sopan agar seseorang tidak melakukan suatu tindakan (Tolong jangan V).", jp: "V-ないで ください", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ここで しゃしんを とらないで ください。", baca: "Koko de shashin o toranaide kudasai.", arti: "Tolong jangan mengambil foto di sini." },
      { judul: "Pola 2", fungsi: "Menyatakan suatu kewajiban atau keharusan (Harus V). Pola ini dibentuk dari V-nai, dengan membuang \"i\" diganti kereba narimasen.", jp: "V-なければ なりません", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "くすりを のまなければ なりません。", baca: "Kusuri o nomanakereba narimasen.", arti: "Harus minum obat." },
      { judul: "Pola 3", fungsi: "Menyatakan tidak ada kewajiban (Tidak V pun tidak apa-apa / Tidak perlu V).", jp: "V-なくても いいです", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "あした こなくても いいです。", baca: "Ashita konakute mo ii desu.", arti: "Besok tidak datang pun tidak apa-apa." }
    ],
    partikel: [
      { partikel: "までに (batas waktu)", fungsi: "Menunjukkan batas waktu maksimal suatu tindakan harus diselesaikan (selambat-lambatnya).", jp: "どようび までに ほんを かえさなければ なりません。", arti: "Harus mengembalikan buku selambat-lambatnya hari Sabtu." }
    ],
    katapenting: [
      "Cara membuat V-nai (Bentuk NAI):",
      "Gol 1: vokal i sebelum masu diubah ke vokal a + nai (かきます → かかない). Khusus i menjadi wa (かいます → かわない).",
      "Gol 2: hapus masu + nai (たべます → たべない).",
      "Gol 3: します → しない／きます → こない."
    ],
    contoh: [
      { jp: "パスポートを みせなければ なりませんか。 はい、みせなければ なりません。", baca: "Pasupooto o misenakereba narimasen ka. Hai, misenakereba narimasen.", arti: "Apakah harus memperlihatkan paspor? Ya, harus memperlihatkan." },
      { jp: "にちようびは はやく おきなくても いいです。", baca: "Nichiyoubi wa hayaku okinakute mo ii desu.", arti: "Hari minggu tidak perlu bangun cepat." }
    ],
    catatan: [
      "Jangan tertukar antara まで (sampai) dan までに (selambat-lambatnya).",
      "Untuk kata kerja Golongan 3 きます (datang), bentuk nai-nya adalah こない (konai), bukan kinai."
    ],
    ringkasan: [
      "〜ないで ください → tolong jangan...",
      "〜なければ なりません → harus...",
      "〜なくても いいです → tidak perlu...",
      "〜までに → paling lambat pada..."
    ]
  },
  {
    judul: "Kemampuan dan Hobi (Bentuk Kamus)",
    fokus: "Fokus pada pengenalan Kata Kerja Bentuk Kamus (Jisho-kei), menyatakan kesanggupan (bisa), menceritakan hobi, dan pola sebelum melakukan sesuatu.",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan kemampuan, kebisaan, atau kesanggupan melakukan sesuatu (Bisa V).", jp: "V-る (Bentuk Kamus) こと が できます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ミラーさんは かんじを よむ ことが できます。", baca: "Miraa-san wa kanji o yomu koto ga dekimasu.", arti: "Sdr. Miller bisa membaca kanji." },
      { judul: "Pola 2", fungsi: "Menjelaskan hobi secara spesifik berupa aktivitas kata kerja (Hobi saya adalah V).", jp: "わたしの しゅみは V-る (Bentuk Kamus) こと です", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしの しゅみは えいがを みる ことです。", baca: "Watashi no shumi wa eiga o miru koto desu.", arti: "Hobi saya adalah menonton film." },
      { judul: "Pola 3", fungsi: "Menyatakan aktivitas V2 yang dilakukan sebelum aktivitas V1 atau sebelum Noun terjadi (Sebelum V1, melakukan V2).", jp: "V1-る (Bentuk Kamus) まえに、V2 / N の まえに、V2", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ねる まえに、にっきを かきます。", baca: "Neru mae ni, nikki o kakimasu.", arti: "Sebelum tidur, (saya) menulis buku harian." }
    ],
    partikel: [
      { partikel: "こと / まえに", fungsi: "Di bab ini, pola digerakkan oleh penambahan kata benda semu \"こと\" dan \"まえに\" tanpa partikel baru yang dominan.", jp: "", arti: "" }
    ],
    katapenting: [
      "Cara membuat Bentuk Kamus (V-ru):",
      "Gol 1: vokal i sebelum masu diubah ke vokal u (かきます → かく).",
      "Gol 2: hapus masu + ru (たべます → たべる).",
      "Gol 3: します → する／きます → くる."
    ],
    contoh: [
      { jp: "カードで はらう ことが できますか。 はい、できます。", baca: "Kaado de harau koto ga dekimasu ka. Hai, dekimasu.", arti: "Apakah bisa membayar dengan kartu? Ya, bisa." },
      { jp: "しょくじの まえに、てを あらいます。", baca: "Shokuji no mae ni, te o araimasu.", arti: "Sebelum makan, mencuci tangan." }
    ],
    catatan: [
      "Saat menceritakan hobi berupa kata kerja, jangan lupa menyisipkan kata こと untuk membendakan kata kerja tersebut. Salah: わたしの しゅみは みるです. Benar: みる ことです.",
      "Pola ~mae ni dengan angka waktu tidak memerlukan no. Contoh: 1じかん まえに (1 jam yang lalu)."
    ],
    ringkasan: [
      "〜る ことが できます → bisa melakukan...",
      "〜る ことです → hobi saya adalah...",
      "〜る／Nの まえに → sebelum..."
    ]
  },
  {
    judul: "Pengalaman, Aktivitas Acak, dan Perubahan Keadaan",
    fokus: "Fokus pada cara menceritakan pengalaman di masa lalu, menyebutkan beberapa aktivitas acak sebagai contoh, dan menyatakan perubahan kondisi.",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan pengalaman yang pernah dilakukan di masa lalu (Pernah V). Pola ini menggunakan Kata Kerja Bentuk Ta.", jp: "V-た ことが あります", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは うまに のった ことが あります。", baca: "Watashi wa uma ni notta koto ga arimasu.", arti: "Saya pernah naik kuda." },
      { judul: "Pola 2", fungsi: "Menyebutkan beberapa aktivitas yang mewakili beberapa kegiatan lain tanpa mengurutkan waktunya (Melakukan hal seperti V1 dan V2).", jp: "V1-たり、V2-たり します", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "にちようびは テニスを したり、えいがを みたり します。", baca: "Nichiyoubi wa tenisu o shitari, eiga o mitari shimasu.", arti: "Hari Minggu (saya) melakukan hal seperti bermain tenis dan menonton film." },
      { judul: "Pola 3", fungsi: "Menyatakan perubahan suatu keadaan menjadi berbeda dari sebelumnya (Menjadi...).", jp: "Kata Sifat / Kata Benda + なります", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "さむく なります。", baca: "Samuku narimasu.", arti: "Menjadi dingin." }
    ],
    partikel: [
      { partikel: "に (perubahan untuk KS-na & benda)", fungsi: "Dipakai sebelum kata なります (menjadi) jika kata sebelumnya adalah Kata Sifat-na atau Kata Benda.", jp: "げんきに なります。", arti: "Menjadi sehat." }
    ],
    katapenting: [
      "Cara membuat V-た (Bentuk Ta): sama persis dengan V-て (Bab 14), cukup ganti bunyi \"te/de\" menjadi \"ta/da\".",
      "かいて → かいた (Menulis)",
      "のんで → のんだ (Minum)",
      "たべて → たべた (Makan)"
    ],
    contoh: [
      { jp: "にほんへ いった ことが ありますか。 はい、いちど あります。", baca: "Nihon e itta koto ga arimasu ka. Hai, ichido arimasu.", arti: "Apakah pernah pergi ke Jepang? Ya, pernah satu kali." },
      { jp: "マリアさんは きれいに なりましたね。", baca: "Maria-san wa kirei ni narimashita ne.", arti: "Sdr. Maria menjadi cantik ya." }
    ],
    catatan: [
      "Jangan samakan ~て、~て (Bab 16) dengan ~たり、~たり (Bab 19). Pola ~te berurutan secara waktu, sedangkan ~tari acak hanya sebagai contoh aktivitas.",
      "Aturan merubah kata menjadi narimasu: Kata Sifat-i huruf \"i\" dibuang ganti ~く (さむい → さむく). Kata Sifat-na / Benda tambah ~に (げんき → げんきに)."
    ],
    ringkasan: [
      "〜た ことが あります → pernah...",
      "〜たり、〜たり します → melakukan kegiatan seperti A dan B",
      "〜く／〜に なります → menjadi..."
    ]
  },
  {
    judul: "Bentuk Biasa (Casual Form)",
    fokus: "Fokus pada pengenalan dan penggunaan Bentuk Biasa (Futsuutai) yang sering dipakai saat berbicara dengan teman akrab, keluarga, atau orang yang lebih muda.",
    pola: [
      { judul: "Pola 1", fungsi: "Menghilangkan akhiran formal seperti ~masu atau ~desu agar percakapan terasa santai dan akrab.", jp: "Bentuk Sopan (Teineitai) menjadi Bentuk Biasa (Futsuutai)", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "のむ？ うん、のむ。", baca: "Nomu? Un, nomu.", arti: "Mau minum? Ya, mau minum." },
      { judul: "Pola 2", fungsi: "Dalam percakapan biasa, partikel tanya か sering dihilangkan, dan pertanyaan ditandai hanya dengan intonasi naik. Hai diganti Un, Iie diganti Uun.", jp: "Percakapan dalam Bentuk Biasa", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ごはん たべる？ ううん、たべない。", baca: "Gohan taberu? Uun, tabenai.", arti: "Mau makan nasi? Tidak, tidak makan." }
    ],
    partikel: [
      { partikel: "は・を・へ (sering dihilangkan)", fungsi: "Dalam percakapan biasa, partikel seperti は, を, dan へ sering dihilangkan asalkan maknanya sudah jelas dari konteks.", jp: "コーヒー［を］ のむ？", arti: "Mau minum kopi?" }
    ],
    katapenting: [
      "Aturan Bentuk Biasa:",
      "V-masu → V-ru (Bentuk Kamus)",
      "V-masen → V-nai (Bentuk Nai)",
      "V-mashita → V-ta (Bentuk Ta)",
      "V-masen deshita → V-nakatta",
      "Desu (KB & KS-na) → だ (da)"
    ],
    contoh: [
      { jp: "あした ひま？ うん、ひま／ううん、ひまじゃない。", baca: "Ashita hima? Un, hima / Uun, hima ja nai.", arti: "Besok senggang? Ya, senggang / Tidak, tidak senggang." },
      { jp: "きのう パーティーへ いった？ ううん、いかなかった。", baca: "Kinou paatii e itta? Uun, ikanakatta.", arti: "Kemarin pergi ke pesta? Tidak, tidak pergi." }
    ],
    catatan: [
      "Jangan pernah menggunakan Bentuk Biasa kepada orang yang baru dikenal, atasan, atau guru karena sangat tidak sopan.",
      "Akhiran だ (da) yang menggantikan desu pada kalimat tanya sering dihilangkan agar tidak terdengar kasar. (Salah: ひまだ？ Benar: ひま？)."
    ],
    ringkasan: [
      "〜ます → 〜る",
      "〜ません → 〜ない",
      "〜ました → 〜た",
      "〜です → 〜だ",
      "はい／いいえ → うん／ううん"
    ]
  },
  {
    judul: "Menyatakan Pendapat dan Mengutip Perkataan",
    fokus: "Fokus pada cara menyatakan pendapat (saya pikir...), mengutip ucapan orang lain (berkata...), dan meminta persetujuan (..., kan?).",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan opini, pendapat, atau dugaan pembicara (Saya pikir/rasa...). Semua kalimat di depan kata to omoimasu harus diubah ke Bentuk Biasa.", jp: "Bentuk Biasa + と おもいます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "あした あめが ふると おもいます。", baca: "Ashita ame ga furu to omoimasu.", arti: "Saya pikir besok akan turun hujan." },
      { judul: "Pola 2", fungsi: "Mengutip perkataan orang lain secara langsung (dengan tanda kutip) atau tidak langsung (dengan bentuk biasa) (Berkata...).", jp: "\"Kalimat\" / Bentuk Biasa + と いいます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ミラーさんは 「らいしゅう とうきょうへ いきます」と いいました。", baca: "Miraa-san wa \"Raishuu Toukyou e ikimasu\" to iimashita.", arti: "Sdr. Miller berkata, \"Minggu depan akan pergi ke Tokyo\"." },
      { judul: "Pola 3", fungsi: "Memastikan sesuatu kepada lawan bicara dan mengharapkan persetujuan (..., kan? / ..., bukan?).", jp: "Bentuk Biasa + でしょう？", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "あしたの パーティーに いくでしょう？", baca: "Ashita no paatii ni iku deshou?", arti: "Besok pergi ke pesta, kan?" }
    ],
    partikel: [
      { partikel: "と (kutipan)", fungsi: "Berfungsi sebagai tanda kutip yang merangkum isi pikiran atau perkataan, diikuti kata omoimasu atau iimasu.", jp: "", arti: "" },
      { partikel: "で (tempat kejadian acara)", fungsi: "Jika kata kerjanya adalah あります (diadakan), partikel で digunakan untuk menunjukkan lokasi acara.", jp: "きょうとで おまつりが あります。", arti: "Di Kyoto diadakan perayaan." }
    ],
    katapenting: [
      "N でも V → Menawarkan sesuatu sebagai contoh acak (Minum kopi atau apa gitu).",
      "V-ないと → Kependekan dari V-nakereba narimasen, artinya \"Harus/Saya pamit karena harus...\"."
    ],
    contoh: [
      { jp: "にほんの ぶっかは たかいと おもいます。", baca: "Nihon no bukka wa takai to omoimasu.", arti: "Saya pikir harga barang di Jepang mahal." },
      { jp: "ちょっと おちゃでも のみませんか。", baca: "Chotto ocha demo nomimasen ka.", arti: "Bagaimana kalau kita minum teh atau sejenisnya sebentar?" }
    ],
    catatan: [
      "Saat menggabungkan Kata Benda atau Kata Sifat-na dengan to omoimasu, jangan lupa tambahkan だ (da) sebelumnya. Contoh: げんきだと おもいます.",
      "Hati-hati dengan intonasi deshou? Harus diucapkan dengan intonasi naik di akhir seperti bertanya."
    ],
    ringkasan: [
      "〜と おもいます → saya pikir...",
      "〜と いいます → berkata...",
      "〜でしょう？ → ...kan?",
      "〜で あります → diadakan di..."
    ]
  },
  {
    judul: "Anak Kalimat Penjelas Kata Benda",
    fokus: "Fokus pada cara membuat klausa (anak kalimat) panjang untuk menerangkan atau menjelaskan suatu kata benda.",
    pola: [
      { judul: "Pola 1", fungsi: "Menerangkan kata benda (N) dengan menggunakan kalimat (subjek + predikat) sebagai kata sifatnya. Predikat dalam anak kalimat harus berbentuk Biasa.", jp: "Anak Kalimat (Bentuk Biasa) + N", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "これは ミラーさんが つくった ケーキです。", baca: "Kore wa Miraa-san ga tsukutta keeki desu.", arti: "Ini adalah kue yang dibuat oleh Sdr. Miller." },
      { judul: "Pola 2", fungsi: "Menjelaskan waktu, janji, atau urusan untuk melakukan sesuatu.", jp: "V-る (Bentuk Kamus) + じかん／やくそく／ようじ", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは あさごはんを たべる じかんが ありません。", baca: "Watashi wa asagohan o taberu jikan ga arimasen.", arti: "Saya tidak punya waktu untuk makan sarapan." }
    ],
    partikel: [
      { partikel: "が (subjek dalam anak kalimat)", fungsi: "Di dalam anak kalimat penjelas, subjek TIDAK memakai partikel は, melainkan wajib diubah menjadi partikel が.", jp: "わたしが かった ほんです。", arti: "Buku yang (saya) beli." }
    ],
    katapenting: [
      "じかん → Waktu.",
      "やくそく → Janji.",
      "ようじ → Urusan."
    ],
    contoh: [
      { jp: "あしたは しやくしょへ いく ようじが あります。", baca: "Ashita wa shiyakusho e iku youji ga arimasu.", arti: "Besok ada urusan untuk pergi ke kantor balai kota." },
      { jp: "きょうとへ いく ひとは だれですか。", baca: "Kyouto e iku hito wa dare desu ka.", arti: "Orang yang pergi ke Kyoto siapa?" }
    ],
    catatan: [
      "Dalam Bahasa Indonesia kita sering memakai kata \"yang\" (Buku yang saya beli). Dalam Bahasa Jepang tidak ada kata \"yang\", posisinya dibalik: (Saya beli) + (Buku).",
      "Selalu pastikan partikel は di dalam klausa penjelas diubah menjadi が agar kalimat tidak membingungkan."
    ],
    ringkasan: [
      "Bentuk Biasa + Kata Benda → Benda yang (dilakukan/terjadi)...",
      "〜る じかん → waktu untuk...",
      "〜る やくそく → janji untuk...",
      "〜る ようじ → urusan untuk..."
    ]
  },
  {
    judul: "Menyatakan Waktu (Ketika/Saat) dan Syarat Pasti",
    fokus: "Fokus pada cara menyatakan \"kapan\" suatu kejadian berlangsung (Ketika/Saat) dan menjelaskan syarat alami (Jika..., maka pastinya...).",
    pola: [
      { judul: "Pola 1", fungsi: "Berarti \"Saat...\" atau \"Ketika...\". Penyambungan: V-る／V-ない／V-た + とき, Adj-i + とき, Adj-na + な + とき, N + の + とき.", jp: "V / Adj / N + とき、〜", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "としょかんで ほんを かりる とき、カードが いります。", baca: "Toshokan de hon o kariru toki, kaado ga irimasu.", arti: "Ketika meminjam buku di perpustakaan, perlu kartu." },
      { judul: "Pola 2", fungsi: "Menyatakan syarat dan akibat yang pasti terjadi secara alami (Jika/Kalau ini dilakukan, pasti akan...). Sering dipakai untuk arah jalan/cara kerja mesin.", jp: "V-る (Bentuk Kamus) + と、〜", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "この ボタンを おすと、おつりが でます。", baca: "Kono botan o osu to, otsuri ga demasu.", arti: "Jika menekan tombol ini, uang kembalian akan keluar." }
    ],
    partikel: [
      { partikel: "を (melewati tempat)", fungsi: "Menunjukkan tempat yang dilewati oleh gerakan (seperti berjalan, menyeberang, terbang).", jp: "はしを わたりました。", arti: "Menyeberangi jembatan." }
    ],
    katapenting: [
      "N が Adj (keadaan fenomena) → digunakan untuk menjelaskan keadaan benda/mesin yang diamati. Contoh: おとが おおきいです (Suaranya besar)."
    ],
    contoh: [
      { jp: "こどもの とき、よく えいがを みました。", baca: "Kodomo no toki, yoku eiga o mimashita.", arti: "Saat (masih) anak-anak, sering menonton film." },
      { jp: "みぎへ まがると、ゆうびんきょくが あります。", baca: "Migi e magaru to, yuubinkyoku ga arimasu.", arti: "Kalau belok ke kanan, ada kantor pos." }
    ],
    catatan: [
      "Jangan memakai pola と untuk kemauan, harapan, atau ajakan pembicara di kalimat belakangnya. Pola ini hanya untuk hal yang PASTI terjadi (fakta/mesin/jalan raya).",
      "Perhatikan sambungan とき: KS-na harus pakai な (ひまの とき salah, yang benar ひまな とき)."
    ],
    ringkasan: [
      "〜とき → ketika／saat...",
      "〜と → jika (pasti terjadi)",
      "N を (kata kerja pindah) → melewati..."
    ]
  },
  {
    judul: "Memberi dan Menerima Barang & Jasa",
    fokus: "Fokus pada pola baru untuk kata \"memberi\" (kuremasu), dan bagaimana menyatakan aksi memberikan pertolongan atau menerima bantuan.",
    pola: [
      { judul: "Pola 1", fungsi: "Berarti \"Memberikan (kepada saya)\". Berbeda dengan agemasu (memberi kepada orang lain), kuremasu dipakai KETIKA ADA ORANG LAIN MEMBERIKAN SESUATU KEPADA SAYA.", jp: "N1 (Orang) が わたしに N2 を くれます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "やまださんが わたしに はなを くれました。", baca: "Yamada-san ga watashi ni hana o kuremashita.", arti: "Sdr. Yamada memberikan bunga kepada saya." },
      { judul: "Pola 2", fungsi: "Menyatakan rasa syukur karena menerima perbuatan/jasa dari orang lain (Menerima bantuan V).", jp: "V-て もらいます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "わたしは すずきさんに にほんごを おしえて もらいました。", baca: "Watashi wa Suzuki-san ni Nihongo o oshiete moraimashita.", arti: "Saya diajarkan (menerima bantuan pengajaran) bahasa Jepang oleh Sdr. Suzuki." },
      { judul: "Pola 3", fungsi: "Menyatakan bahwa orang lain melakukan perbuatan/jasa untuk SAYA. Fokus subjek adalah si pemberi jasa.", jp: "V-て くれます", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "ははが セーターを おくって くれました。", baca: "Haha ga seetaa o okutte kuremashita.", arti: "Ibu telah mengirimkan sweter untuk saya." }
    ],
    partikel: [
      { partikel: "が (subjek pemberi kebaikan)", fungsi: "Dalam pola ~te kuremasu, orang yang memberikan bantuan bertindak sebagai subjek kalimat dan ditandai dengan partikel が.", jp: "", arti: "" }
    ],
    katapenting: [
      "V-て あげます → Melakukan suatu kebaikan/jasa untuk orang lain. Hati-hati memakainya kepada atasan/orang tak dikenal karena bisa terdengar sombong."
    ],
    contoh: [
      { jp: "わたしは たなかさんに かさを かして あげました。", baca: "Watashi wa Tanaka-san ni kasa o kashite agemashita.", arti: "Saya telah meminjamkan payung kepada Sdr. Tanaka." },
      { jp: "たろうくんは おばあさんに みちを おしえて あげました。", baca: "Tarou-kun wa obaasan ni michi o oshiete agemashita.", arti: "Taro menunjukkan jalan kepada nenek." }
    ],
    catatan: [
      "Jangan pernah menggunakan くれます jika subjeknya adalah SAYA. Kuremasu hanya digunakan saat Orang lain memberi ke Saya.",
      "Jika kamu yang membantu orang lain, gunakan 〜て あげます."
    ],
    ringkasan: [
      "〜て あげます → (saya) melakukan... untuk orang",
      "〜て もらいます → (saya) menerima perbuatan... dari orang",
      "〜て くれます → (orang) melakukan... untuk saya"
    ]
  },
  {
    judul: "Pengandaian (Jika) dan Pertentangan (Meskipun)",
    fokus: "Fokus pada cara mengandaikan suatu peristiwa (Jika / Kalau), dan menyatakan pertentangan kondisi (Meskipun / Biarpun).",
    pola: [
      { judul: "Pola 1", fungsi: "Menyatakan pengandaian \"Jika...\" atau \"Kalau...\". Dibentuk dari Kata Kerja, Sifat, atau Benda bentuk lampau biasa + ra.", jp: "Bentuk Biasa Lampau (Ta) + ら、〜 (〜たら)", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "おかねが あったら、りょこう します。", baca: "Okane ga attara, ryokou shimasu.", arti: "Kalau ada uang, saya akan jalan-jalan." },
      { judul: "Pola 2", fungsi: "Selain untuk pengandaian yang belum tentu terjadi, pola ini juga berarti \"Setelah selesai V, maka...\" jika untuk kejadian masa depan yang pasti selesai.", jp: "V-たら (Syarat Waktu)", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "えきへ ついたら、でんわを して ください。", baca: "Eki e tsuitara, denwa o shite kudasai.", arti: "Setelah tiba di stasiun, tolong telepon (saya)." },
      { judul: "Pola 3", fungsi: "Menyatakan pertentangan \"Meskipun...\" atau \"Biarpun...\". V-te+mo, Adj-i(hapus i)+kute+mo, Adj-na/N+de+mo.", jp: "V-ても / Adj-ても / N-でも", baca: "", arti: "" },
      { judul: "", fungsi: "", jp: "あめが ふっても、サッカーを します。", baca: "Ame ga futte mo, sakkaa o shimasu.", arti: "Meskipun hujan turun, saya (tetap) bermain sepak bola." }
    ],
    partikel: [
      { partikel: "が (subjek dalam anak kalimat bersyarat)", fungsi: "Mirip dengan Bab 22, subjek utama dalam klausa pengandaian atau pertentangan menggunakan partikel が.", jp: "", arti: "" }
    ],
    katapenting: [
      "もし 〜たら → Digunakan di awal kalimat untuk mempertegas pengandaian (Seandainya / Kalaupun).",
      "いくら 〜ても → Digunakan di awal kalimat untuk mempertegas pertentangan (Berapa banyak pun / Sekeras apa pun)."
    ],
    contoh: [
      { jp: "もし ひまだったら、てつだって ください。", baca: "Moshi hima dattara, tetsudatte kudasai.", arti: "Seandainya sedang senggang, tolong bantu saya." },
      { jp: "いくら かんがえても、わかりません。", baca: "Ikura kangaete mo, wakarimasen.", arti: "Sekeras apa pun (saya) berpikir, saya tetap tidak mengerti." }
    ],
    catatan: [
      "Jangan sampai salah membentuk ~たら. Kata Sifat-i: さむかったら (kalau dingin). Kata Benda/Sifat-na: あめだったら (kalau hujan).",
      "Pola ~tara jauh lebih luas dan bebas digunakan dibandingkan pola ~to (Bab 23) untuk menyatakan syarat."
    ],
    ringkasan: [
      "〜たら → jika／kalau／setelah",
      "〜ても／〜でも → meskipun／biarpun",
      "もし → seandainya",
      "いくら → seberapa pun"
    ]
  }
];

