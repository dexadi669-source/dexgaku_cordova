// =====================================================
// bunpo-data.js
// Data Grammar/Bunpo N5 untuk aplikasi DeX Gaku.
// Struktur 3 level:
//   1. Kategori (Partikel, Identitas, Kata Tunjuk, dst)
//   2. Materi dalam kategori (は, が, を, dst)
//   3. Detail materi (fungsi, pola, contoh, negatif)
// =====================================================

var BUNPO_CATEGORIES = [
  {
    key: "partikel",
    no: 1,
    nama: "Partikel",
    icon: "&#129513;",
    deskripsi: "Partikel dasar dalam bahasa Jepang",
    materi: [
      {
        judul: "は",
        sub: "Penanda Topik / Perbandingan",
        preview: "A は B が ～",
        pola: "A は B が ～。",
        polaKeterangan: "A = topik kalimat",
        fungsi: "Sebagai penanda TOPIK kalimat dan untuk menyatakan PERBANDINGAN.",
        contoh: {
          kanji: "私はカナダから来ました。",
          hiragana: "わたしは カナダから きました。",
          romaji: "Watashi wa Kanada kara kimashita.",
          arti: "Saya datang dari Kanada."
        },
        negatif: {
          kanji: "私は肉は食べますが、魚は食べません。",
          hiragana: "わたしは にくは たべますが、さかなは たべません。",
          romaji: "Watashi wa niku wa tabemasu ga, sakana wa tabemasen.",
          arti: "Saya makan daging, tetapi tidak makan ikan."
        }
      },
      {
        judul: "が",
        sub: "Penanda Subjek",
        preview: "A は B が ～",
        pola: "A は B が ～。",
        polaKeterangan: "Digunakan saat subjeknya kata tanya atau mendeskripsikan suatu hal.",
        fungsi: "Digunakan ketika subjeknya kata tanya, menjawab pertanyaan dengan が, atau mendeskripsikan suatu hal.",
        contoh: {
          kanji: "どれが田中さんのコップですか。",
          hiragana: "どれが たなかさんの コップですか。",
          romaji: "Dore ga Tanaka-san no koppu desu ka.",
          arti: "Yang mana gelas milik Tanaka?"
        },
        negatif: {
          kanji: "これが田中さんのです。",
          hiragana: "これが たなかさんのです。",
          romaji: "Kore ga Tanaka-san no desu.",
          arti: "Ini milik Tanaka (Jawaban)."
        }
      },
      {
        judul: "を",
        sub: "Penanda Objek / Tempat",
        preview: "～を",
        pola: "N を V",
        polaKeterangan: "N = Objek / Tempat",
        fungsi: "Menyatakan OBJEK tindakan atau TEMPAT yang dilewati/perpindahan.",
        contoh: {
          kanji: "毎朝公園を散歩します。",
          hiragana: "まいあさ こうえんを さんぽします。",
          romaji: "Maiasa kouen o sanpo shimasu.",
          arti: "Setiap pagi jalan-jalan di taman."
        },
        negatif: {
          kanji: "私は毎日日本語を勉強します。",
          hiragana: "わたしは まいにち にほんごを べんきょうします。",
          romaji: "Watashi wa mainichi nihongo o benkyou shimasu.",
          arti: "Saya belajar bahasa Jepang setiap hari."
        }
      },
      {
        judul: "と",
        sub: "Dan / Bersama",
        preview: "A と B",
        pola: "N1 と N2 / N と V",
        polaKeterangan: "Penghubung kata benda atau menyatakan rekan.",
        fungsi: "Berarti 'dan' atau 'bersama'. Digunakan bersama kata kerja tertentu yang mengandung perpindahan/aktivitas.",
        contoh: {
          kanji: "母と買い物しました。",
          hiragana: "ははと かいものしました。",
          romaji: "Haha to kaimono shimashita.",
          arti: "Saya berbelanja bersama ibu."
        },
        negatif: {
          kanji: "りんごとみかんを買いました。",
          hiragana: "りんごと みかんを かいました。",
          romaji: "Ringo to mikan o kaimashita.",
          arti: "Saya membeli apel dan jeruk."
        }
      },
      {
        judul: "に",
        sub: "Tempat / Tujuan / Waktu",
        preview: "～に",
        pola: "N に V",
        polaKeterangan: "N = Waktu / Tempat",
        fungsi: "Menunjukkan tempat keberadaan, tujuan perpindahan, atau titik waktu spesifik.",
        contoh: {
          kanji: "８時に来てください。",
          hiragana: "はちじに きて ください。",
          romaji: "Hachiji ni kite kudasai.",
          arti: "Tolong datang pada jam 8."
        },
        negatif: {
          kanji: "私は毎日学校に行きます。",
          hiragana: "わたしは まいにち がっこうに いきます。",
          romaji: "Watashi wa mainichi gakkou ni ikimasu.",
          arti: "Saya pergi ke sekolah setiap hari."
        }
      },
      {
        judul: "で",
        sub: "Tempat aktivitas / Cara",
        preview: "～で",
        pola: "N で V",
        polaKeterangan: "N = Tempat/Alat",
        fungsi: "Menunjukkan tempat aktivitas dilakukan, cara/alat, atau batasan (jumlah/harga).",
        contoh: {
          kanji: "電車で行きます。",
          hiragana: "でんしゃで いきます。",
          romaji: "Densha de ikimasu.",
          arti: "Pergi dengan kereta."
        },
        negatif: {
          kanji: "図書館で本を読みます。",
          hiragana: "としょかんで ほんを よみます。",
          romaji: "Toshokan de hon o yomimasu.",
          arti: "Saya membaca buku di perpustakaan."
        }
      },
      {
        judul: "も・か・や",
        sub: "Juga / Atau / Contoh",
        preview: "も / か / や",
        pola: "N も / N か N / N や N",
        polaKeterangan: "も (juga), か (atau), や (dan lain-lain)",
        fungsi: "も = juga, か = atau, や = menyebutkan sesuatu yang mewakili/sebagai contoh.",
        contoh: {
          kanji: "私もパーティーに行きます。",
          hiragana: "わたしも パーティーに いきます。",
          romaji: "Watashi mo paatii ni ikimasu.",
          arti: "Saya juga pergi ke pesta."
        },
        negatif: {
          kanji: "私は肉も魚も食べません。",
          hiragana: "わたしは にくも さかなも たべません。",
          romaji: "Watashi wa niku mo sakana mo tabemasen.",
          arti: "Saya tidak makan daging maupun ikan."
        }
      },
      {
        judul: "から・まで",
        sub: "Dari・Sampai",
        preview: "～から～まで",
        pola: "A から B まで",
        polaKeterangan: "A = Titik awal, B = Titik akhir",
        fungsi: "から = dari (waktu/tempat), まで = sampai (waktu/tempat).",
        contoh: {
          kanji: "テストは15日から18日までです。",
          hiragana: "テストは 15にちから 18にちまでです。",
          romaji: "Tesuto wa juugonichi kara juuhachinichi made desu.",
          arti: "Ujian dari tanggal 15 sampai 18."
        },
        negatif: {
          kanji: "家から駅まで歩きます。",
          hiragana: "いえから えきまで あるきます。",
          romaji: "Ie kara eki made arukimasu.",
          arti: "Saya berjalan dari rumah sampai stasiun."
        }
      }
    ]
  },
  {
    key: "identitas",
    no: 2,
    nama: "Identitas",
    icon: "&#128100;",
    deskripsi: "Pola kalimat untuk menyatakan identitas & kepemilikan",
    materi: [
      {
        judul: "は・です",
        sub: "Identitas",
        preview: "A は B です",
        pola: "A は B です。",
        polaKeterangan: "A = topik\nB = identitas/informasi",
        fungsi: "Menyatakan identitas atau informasi tentang A.",
        contoh: {
          kanji: "私は学生です。",
          hiragana: "わたしは がくせいです。",
          romaji: "Watashi wa gakusei desu.",
          arti: "Saya adalah pelajar."
        },
        negatif: {
          kanji: "私は学生ではありません。",
          hiragana: "わたしは がくせいではありません。",
          romaji: "Watashi wa gakusei dewa arimasen.",
          arti: "Saya bukan pelajar."
        }
      },
      {
        judul: "の",
        sub: "Kepemilikan / Pengganti Kata Benda",
        preview: "N の N",
        pola: "Kata benda + の + Kata benda",
        polaKeterangan: "Menghubungkan dua kata benda",
        fungsi: "Menyatakan kepemilikan, menerangkan kata benda, menyatakan buatan, atau sebagai pengganti kata benda.",
        contoh: {
          kanji: "日本の車。",
          hiragana: "にほんの くるま。",
          romaji: "Nihon no kuruma.",
          arti: "Mobil Jepang."
        },
        negatif: {
          kanji: "これはあなたのですか。いいえ、田中さんのです。",
          hiragana: "これは あなたのですか。いいえ、たなかさんのです。",
          romaji: "Kore wa anata no desu ka. Iie, Tanaka-san no desu.",
          arti: "Apakah ini milik Anda? Bukan, ini milik Tanaka."
        }
      }
    ]
  },
  {
    key: "kata-tunjuk",
    no: 3,
    nama: "Kata Tunjuk",
    icon: "&#128073;",
    deskripsi: "Kata ganti tunjuk (ini, itu, sana)",
    materi: [
      {
        judul: "これ・それ・あれ",
        sub: "Kata tunjuk benda",
        preview: "これ・それ・あれ",
        pola: "これ／それ／あれ は B です。",
        polaKeterangan: "Benda berdiri sendiri",
        fungsi: "Menunjuk benda: これ = ini, それ = itu, あれ = itu (jauh).",
        contoh: {
          kanji: "これは本です。",
          hiragana: "これは ほんです。",
          romaji: "Kore wa hon desu.",
          arti: "Ini adalah buku."
        },
        negatif: {
          kanji: "それはかばんです。",
          hiragana: "それは かばんです。",
          romaji: "Sore wa kaban desu.",
          arti: "Itu adalah tas."
        }
      },
      {
        judul: "この・その・あの",
        sub: "Kata tunjuk penjelas",
        preview: "この N",
        pola: "この／その／あの + Kata Benda",
        polaKeterangan: "Harus diikuti kata benda langsung",
        fungsi: "Digunakan sebelum kata benda untuk menunjuk secara spesifik.",
        contoh: {
          kanji: "このペン",
          hiragana: "この ペン",
          romaji: "Kono pen",
          arti: "Pena ini"
        },
        negatif: {
          kanji: "あの人",
          hiragana: "あの ひと",
          romaji: "Ano hito",
          arti: "Orang itu (jauh)"
        }
      },
      {
        judul: "こちら・そちら",
        sub: "Kata tunjuk orang/arah",
        preview: "こちら",
        pola: "こちらは N です。",
        polaKeterangan: "Sopan",
        fungsi: "Kata tunjuk untuk arah atau orang (bentuk sopan ketika memperkenalkan).",
        contoh: {
          kanji: "こちらは私の母です。",
          hiragana: "こちらは わたしの ははです。",
          romaji: "Kochira wa watashi no haha desu.",
          arti: "Ini adalah ibu saya."
        },
        negatif: {
          kanji: "お手洗いはそちらです。",
          hiragana: "おてあらいは そちらです。",
          romaji: "Otearai wa sochira desu.",
          arti: "Toilet ada di sebelah sana (dekat Anda)."
        }
      }
    ]
  },
  {
    key: "kata-tanya",
    no: 4,
    nama: "Kata Tanya",
    icon: "&#10067;",
    deskripsi: "Kata tanya dan kombinasinya",
    materi: [
      {
        judul: "だれ・なに・どこ",
        sub: "Kata Tanya Dasar",
        preview: "Kata Tanya",
        pola: "Kata Tanya + ですか / V-ますか",
        polaKeterangan: "だれ (siapa), なに (apa), どこ (mana/di mana)",
        fungsi: "Untuk menanyakan informasi spesifik.",
        contoh: {
          kanji: "これは誰のペンですか。",
          hiragana: "これは だれの ペンですか。",
          romaji: "Kore wa dare no pen desu ka.",
          arti: "Ini pena milik siapa?"
        },
        negatif: {
          kanji: "どうやって会社に行きますか。",
          hiragana: "どうやって かいしゃに いきますか。",
          romaji: "Douyatte kaisha ni ikimasu ka.",
          arti: "Bagaimana cara pergi ke perusahaan?"
        }
      },
      {
        judul: "Kata Tanya + か / も / でも",
        sub: "Sesuatu, Tidak satupun, Apapun",
        preview: "なにか / だれも / なんでも",
        pola: "Tanya+か (Positif) / Tanya+も (Negatif) / Tanya+でも (Bebas)",
        polaKeterangan: "なにか = sesuatu, だれも～ません = tak siapapun",
        fungsi: "Mengubah kata tanya menjadi kata ganti tak tentu, penekanan negatif total, atau bermakna 'apapun/siapapun'.",
        contoh: {
          kanji: "何か食べましょう。",
          hiragana: "なにか たべましょう。",
          romaji: "Nanika tabemashou.",
          arti: "Mari makan sesuatu."
        },
        negatif: {
          kanji: "教室に誰もいません。",
          hiragana: "きょうしつに だれも いません。",
          romaji: "Kyoushitsu ni daremo imasen.",
          arti: "Tidak ada seorang pun di kelas."
        }
      }
    ]
  },
  {
    key: "kata-kerja",
    no: 5,
    nama: "Kata Kerja",
    icon: "&#127939;",
    deskripsi: "Bentuk dan penggunaan kata kerja",
    materi: [
      {
        judul: "～て",
        sub: "Berurutan / Sedang",
        preview: "V-て",
        pola: "V-て、V-ます / V-ています",
        polaKeterangan: "Menghubungkan aktivitas berurutan",
        fungsi: "Menghubungkan kegiatan secara berurutan atau menyatakan keadaan sedang berlangsung (～ています).",
        contoh: {
          kanji: "朝起きて、シャワーを浴びて、朝ごはんを食べます。",
          hiragana: "あさ おきて、シャワーを あびて、あさごはんを たべます。",
          romaji: "Asa okite, shawaa o abite, asagohan o tabemasu.",
          arti: "Bangun pagi, mandi, lalu sarapan."
        },
        negatif: {
          kanji: "今妹はピアノを弾いています。",
          hiragana: "いま いもうとは ピアノを ひいて います。",
          romaji: "Ima imouto wa piano o hiite imasu.",
          arti: "Sekarang adik perempuan saya sedang bermain piano."
        }
      },
      {
        judul: "～てください / ～ないでください",
        sub: "Permintaan / Larangan",
        preview: "Tolong... / Jangan...",
        pola: "V-て + ください / V-ない + でください",
        polaKeterangan: "Permintaan halus kepada lawan bicara",
        fungsi: "Meminta seseorang untuk melakukan sesuatu (tolong), atau melarang melakukan sesuatu (jangan).",
        contoh: {
          kanji: "ペンを貸してください。",
          hiragana: "ペンを かして ください。",
          romaji: "Pen o kashite kudasai.",
          arti: "Tolong pinjamkan pena."
        },
        negatif: {
          kanji: "牛乳を買わないでください。",
          hiragana: "ぎゅうにゅうを かわないで ください。",
          romaji: "Gyuunyuu o kawanaide kudasai.",
          arti: "Tolong jangan membeli susu."
        }
      },
      {
        judul: "～たい / ～ほしい",
        sub: "Keinginan",
        preview: "Ingin...",
        pola: "V-ます(hilang ます) + たい / N が ほしい",
        polaKeterangan: "Menyatakan keinginan diri sendiri",
        fungsi: "～たい = ingin melakukan (aktivitas), ～ほしい = ingin memiliki/mendapatkan sesuatu (benda).",
        contoh: {
          kanji: "ステーキが食べたいです。",
          hiragana: "ステーキが たべたいです。",
          romaji: "Suteeki ga tabetai desu.",
          arti: "Saya ingin makan steak."
        },
        negatif: {
          kanji: "病院には行きたくないです。",
          hiragana: "びょういんには いきたくないです。",
          romaji: "Byouin ni wa ikitakunai desu.",
          arti: "Saya tidak ingin pergi ke rumah sakit."
        }
      },
      {
        judul: "～ましょう / ～ませんか",
        sub: "Ajakan / Tawaran",
        preview: "Ayo... / Mau tidak...",
        pola: "V-ましょう / V-ませんか",
        polaKeterangan: "Digunakan untuk mengajak lawan bicara",
        fungsi: "～ましょう = ayo, ～ましょうか = mau saya bantu...?, ～ませんか = mau tidak / ajakan.",
        contoh: {
          kanji: "一緒に映画に行きましょうか。",
          hiragana: "いっしょに えいがに いきましょうか。",
          romaji: "Issho ni eiga ni ikimashou ka.",
          arti: "Ayo pergi menonton film bersama."
        },
        negatif: {
          kanji: "何か食べませんか。",
          hiragana: "なにか たべませんか。",
          romaji: "Nanika tabemasen ka.",
          arti: "Mau makan sesuatu?"
        }
      },
{
        judul: "～なければなりません",
  sub: "Kewajiban / Harus",
  preview: "V-ない + ければなりません",
  pola: "V-ない (hapus い) + ければなりません",
  polaKeterangan: "Menyatakan keharusan/kewajiban",
  fungsi: "Digunakan untuk menyatakan sesuatu yang harus atau wajib dilakukan.",
  contoh: {
    kanji: "毎日日本語を勉強しなければなりません。",
    hiragana: "まいにち にほんごを べんきょう しなければなりません。",
    romaji: "Mainichi nihongo o benkyou shinakereba narimasen.",
    arti: "Setiap hari harus belajar bahasa Jepang."
  },
  negatif: {
    kanji: "薬を飲まなければなりません。",
    hiragana: "くすりを のまなければなりません。",
    romaji: "Kusuri o nomanakereba narimasen.",
    arti: "Harus minum obat."
        }
      },
      
      {
        judul: "Bentuk Potensial",
        sub: "Bisa melakukan",
        preview: "Bisa...",
        pola: "V-Potensial",
        polaKeterangan: "読む → 読める, する → できる",
        fungsi: "Menyatakan kesanggupan atau kemampuan melakukan suatu hal (bisa...).",
        contoh: {
          kanji: "私は漢字が少し読めます。",
          hiragana: "わたしは かんじが すこし よめます。",
          romaji: "Watashi wa kanji ga sukoshi yomemasu.",
          arti: "Saya bisa membaca sedikit kanji."
        },
        negatif: {
          kanji: "私は泳げません。",
          hiragana: "わたしは およげません。",
          romaji: "Watashi wa oyogemasen.",
          arti: "Saya tidak bisa berenang."
        }
      }
    ]
  },
  {
    key: "kata-sifat",
    no: 6,
    nama: "Kata Sifat",
    icon: "&#128522;",
    deskripsi: "Pola kalimat kata sifat い dan な",
    materi: [
      {
        judul: "Kata Sifat -i / -na",
        sub: "Deskripsi Sifat",
        preview: "～いです / ～な N",
        pola: "i-Adj + です / na-Adj(hapus na) + です / Adj + N",
        polaKeterangan: "Bentuk lampau: -katta desu / -deshita",
        fungsi: "Mendeskripsikan kata benda. Bisa juga digunakan langsung di depan kata benda (contoh: 高い山, きれいな海).",
        contoh: {
          kanji: "きれいな海",
          hiragana: "きれいな うみ",
          romaji: "Kirei na umi",
          arti: "Laut yang indah"
        },
        negatif: {
          kanji: "面白くありません / きれいではありません",
          hiragana: "おもしろくありません / きれいではありません",
          romaji: "Omoshiroku arimasen / Kirei dewa arimasen",
          arti: "Tidak menarik / Tidak indah"
        }
      },
      {
        judul: "Menghubungkan Kata Sifat",
        sub: "Dan (sifat)",
        preview: "～くて / ～で",
        pola: "-i (hapus い) + くて / -na + で",
        polaKeterangan: "Menggabungkan dua atau lebih kata sifat.",
        fungsi: "Menyambungkan kalimat deskripsi sifat.",
        contoh: {
          kanji: "このバッグは色も良くて、形もいいです。",
          hiragana: "この バッグは いろも よくて、かたちも いいです。",
          romaji: "Kono baggu wa iro mo yokute, katachi mo ii desu.",
          arti: "Tas ini warnanya bagus dan bentuknya juga bagus."
        },
        negatif: {
          kanji: "この部屋は静かで、きれいです。",
          hiragana: "この へやは しずかで、きれいです。",
          romaji: "Kono heya wa shizuka de, kirei desu.",
          arti: "Kamar ini tenang dan bersih."
        }
      }
    ]
  },
  {
    key: "waktu",
    no: 7,
    nama: "Waktu",
    icon: "&#128336;",
    deskripsi: "Pola kalimat berkaitan urutan waktu",
    materi: [
      {
        judul: "～とき",
        sub: "Ketika / Pada saat",
        preview: "～とき",
        pola: "V-Biasa/i-Adj/na-Adj+な/N+の + とき",
        polaKeterangan: "Menyatakan kejadian bertepatan",
        fungsi: "Menerangkan waktu atau keadaan ketika suatu kejadian/aksi berlangsung.",
        contoh: {
          kanji: "本を読むとき、メガネをかけます。",
          hiragana: "ほんを よむ とき、メガネを かけます。",
          romaji: "Hon o yomu toki, megane o kakemasu.",
          arti: "Saat membaca buku, saya memakai kacamata."
        },
        negatif: {
          kanji: "頭が痛いとき、この薬を飲みます。",
          hiragana: "あたまが いたい とき、この くすりを のみます。",
          romaji: "Atama ga itai toki, kono kusuri o nomimasu.",
          arti: "Saat kepala sakit, minum obat ini."
        }
      },
      {
  judul: "～たら",
  sub: "Pengandaian / Jika",
  preview: "～たら",
  pola: "V-た + ら / Adj/N-lampau + ら",
  polaKeterangan: "Menyatakan syarat/pengandaian",
  fungsi: "Menyatakan pengandaian atau kondisi 'Jika.../Setelah...'.",
  contoh: {
    kanji: "日本に行ったら、富士山に登りたいです。",
    hiragana: "にほんに いったら、ふじさんに のぼりたいです。",
    romaji: "Nihon ni ittara, Fujisan ni noboritai desu.",
    arti: "Jika pergi ke Jepang, saya ingin mendaki Gunung Fuji."
  },
  negatif: {
    kanji: "雨が降ったら、出かけません。",
    hiragana: "あめが ふったら、でかけません。",
    romaji: "Ame ga futtara, dekakemasen.",
    arti: "Jika hujan turun, saya tidak pergi keluar."
  }
},
      {
        judul: "～前に / ～たあとで",
        sub: "Sebelum / Setelah",
        preview: "～まえに / ～たあとで",
        pola: "V-kamus+前に / V-た+あとで",
        polaKeterangan: "Mengatur urutan aksi",
        fungsi: "Menyatakan urutan aksi. ～前に = sebelum..., ～たあとで = setelah...",
        contoh: {
          kanji: "日本へ来る前に、日本語を勉強しました。",
          hiragana: "にほんへ くる まえに、にほんごを べんきょうしました。",
          romaji: "Nihon e kuru mae ni, nihongo o benkyou shimashita.",
          arti: "Sebelum datang ke Jepang, saya belajar bahasa Jepang."
        },
        negatif: {
          kanji: "お風呂に入ったあとで、ビールを飲みます。",
          hiragana: "おふろに はいった あとで、ビールを のみます。",
          romaji: "Ofuro ni haitta ato de, biiru o nomimasu.",
          arti: "Setelah mandi, saya minum bir."
        }
      }
    ]
  },
  {
    key: "tempat",
    no: 8,
    nama: "Tempat",
    icon: "&#128205;",
    deskripsi: "Keberadaan dan perpindahan",
    materi: [
      {
        judul: "あります / います",
        sub: "Keberadaan / Punya",
        preview: "～に ～が あります",
        pola: "(Tempat) に (Benda/Orang) が あります/います",
        polaKeterangan: "います untuk manusia/hewan, あります untuk benda mati/tumbuhan",
        fungsi: "Menyatakan keberadaan di suatu tempat. Dalam konteks tertentu bisa bermakna 'mempunyai'.",
        contoh: {
          kanji: "冷蔵庫の中にケーキがあります。",
          hiragana: "れいぞうこの なかに ケーキが あります。",
          romaji: "Reizouko no naka ni keeki ga arimasu.",
          arti: "Ada kue di dalam kulkas."
        },
        negatif: {
          kanji: "兄弟がいません。",
          hiragana: "きょうだいが いません。",
          romaji: "Kyoudai ga imasen.",
          arti: "Saya tidak punya saudara (Makna 'punya')."
        }
      },
      {
        judul: "～に 行きます / 来ます / 帰ります",
        sub: "Tujuan pergerakan",
        preview: "～に 行きます",
        pola: "V-ます (hapus ます) + に + 行きます",
        polaKeterangan: "Menyatakan tujuan pergi/datang",
        fungsi: "Berarti 'pergi/datang/pulang untuk (melakukan sesuatu)'.",
        contoh: {
          kanji: "遊びに来てください。",
          hiragana: "あそびに きて ください。",
          romaji: "Asobi ni kite kudasai.",
          arti: "Silakan datang untuk bermain."
        },
        negatif: {
          kanji: "友達と映画を見に行きます。",
          hiragana: "ともだちと えいがを みに いきます。",
          romaji: "Tomodachi to eiga o mi ni ikimasu.",
          arti: "Saya pergi menonton film bersama teman."
        }
      }
    ]
  },
  {
    key: "perbandingan",
    no: 9,
    nama: "Perbandingan",
    icon: "&#128202;",
    deskripsi: "Pola kalimat membandingkan",
    materi: [
      {
        judul: "～より / ～ほうが",
        sub: "Lebih... daripada...",
        preview: "A は B より",
        pola: "A は B より ～ / A より B の ほうが ～",
        polaKeterangan: "Membandingkan dua objek",
        fungsi: "A は B より = A lebih... daripada B. A より B のほうが = Daripada A, B lebih...",
        contoh: {
          kanji: "昨日は今日より寒いです。",
          hiragana: "きのうは きょうより さむいです。",
          romaji: "Kinou wa kyou yori samui desu.",
          arti: "Kemarin lebih dingin daripada hari ini."
        },
        negatif: {
          kanji: "母より父のほうが料理が上手です。",
          hiragana: "ははより ちちの ほうが りょうりが じょうずです。",
          romaji: "Haha yori chichi no hou ga ryouri ga jouzu desu.",
          arti: "Daripada Ibu, Ayah lebih pandai memasak."
        }
      },
      {
        judul: "～が いちばん",
        sub: "Paling...",
        preview: "～がいちばん",
        pola: "A が いちばん ～",
        polaKeterangan: "Menyatakan yang paling tinggi/unggul",
        fungsi: "Untuk menyatakan sesuatu yang 'Paling...' dari kelompok tertentu.",
        contoh: {
          kanji: "日本では富士山が一番高い山です。",
          hiragana: "にほんでは ふじさんが いちばん たかいやまです。",
          romaji: "Nihon de wa Fujisan ga ichiban takai yama desu.",
          arti: "Di Jepang, Gunung Fuji adalah gunung yang paling tinggi."
        },
        negatif: {
          kanji: "果物の中でりんごが一番好きです。",
          hiragana: "くだものの なかで りんごが いちばん すきです。",
          romaji: "Kudamono no naka de ringo ga ichiban suki desu.",
          arti: "Di antara buah-buahan, saya paling suka apel."
        }
      }
    ]
  },
  {
    key: "penghubung",
    no: 10,
    nama: "Penghubung",
    icon: "&#128279;",
    deskripsi: "Kata penghubung antar kalimat dan aktivitas",
    materi: [
      {
        judul: "～たり ～たり します",
        sub: "Menyebutkan aktivitas acak",
        preview: "～たり～たり",
        pola: "V-た + り、V-た + り します",
        polaKeterangan: "Mewakili beberapa aktivitas di antara aktivitas lain",
        fungsi: "Untuk menyebutkan beberapa kejadian/kegiatan secara random sebagai perwakilan.",
        contoh: {
          kanji: "休みの日は友達と買い物に行ったり、食事をしたりします。",
          hiragana: "やすみの ひは ともだちと かいものに いったり、しょくじを したり します。",
          romaji: "Yasumi no hi wa tomodachi to kaimono ni ittari, shokuji o shitari shimasu.",
          arti: "Saat hari libur, saya pergi berbelanja dan makan bersama teman."
        },
        negatif: {
          kanji: "週末は本を読んだり、音楽を聞いたりします。",
          hiragana: "しゅうまつは ほんを よんだり、おんがくを きいたり します。",
          romaji: "Shuumatsu wa hon o yondari, ongaku o kiitari shimasu.",
          arti: "Saat akhir pekan, saya membaca buku, mendengarkan musik, dan sebagainya."
        }
      },
      {
        judul: "から / だから",
        sub: "Karena / Oleh karena itu",
        preview: "～から",
        pola: "Kalimat + から / だから、～",
        polaKeterangan: "Menyatakan alasan atau sebab-akibat",
        fungsi: "～から / ～からです = karena... | だから = oleh karena itu.",
        contoh: {
          kanji: "暑いから、窓を開けましょう。",
          hiragana: "あついから、まどを あけましょう。",
          romaji: "Atsui kara, mado o akemashou.",
          arti: "Karena panas, mari buka jendela."
        },
        negatif: {
          kanji: "明日はテストです。だから、今日は家で勉強します。",
          hiragana: "あしたは テストです。だから、きょうは うちで べんきょうします。",
          romaji: "Ashita wa tesuto desu. Dakara, kyou wa uchi de benkyou shimasu.",
          arti: "Besok ada ujian. Oleh karena itu, hari ini belajar di rumah."
        }
      },
      // Cari kategori "penghubung", lalu tambahkan objek ini di dalam array materi-nya:
{
  judul: "～ので",
  sub: "Sebab / Karena (Sopan)",
  preview: "～ので",
  pola: "Kalimat-Biasa + ので",
  polaKeterangan: "Alasan halus/sopan",
  fungsi: "Menyatakan alasan atau sebab secara halus dan sopan.",
  contoh: {
    kanji: "雨が降っているので、傘を持っていきます。",
    hiragana: "あめが ふっているので、かさを もっていきます。",
    romaji: "Ame ga futte iru node, kasa o motte ikimasu.",
    arti: "Karena sedang hujan, saya membawa payung."
  },
  negatif: {
    kanji: "用事があるので、お先に失礼します。",
    hiragana: "ようじが あるので、おさきに しつれいします。",
    romaji: "Youji ga aru node, osaki ni shitsurei shimasu.",
    arti: "Karena ada urusan, saya permisi pulang duluan."
  }
},
      {
        judul: "でも / けれども / け(れ)ど",
        sub: "Tetapi",
        preview: "～けど",
        pola: "Kalimat A。でも、Kalimat B。 / A けれども B",
        polaKeterangan: "Menyatakan hal yang berlawanan",
        fungsi: "Menghubungkan dua kalimat atau frasa yang saling bertentangan (tapi/tetapi).",
        contoh: {
          kanji: "日本語は難しいですが、おもしろいです。",
          hiragana: "にほんごは むずかしいですが、おもしろいです。",
          romaji: "Nihongo wa muzukashii desu ga, omoshiroi desu.",
          arti: "Bahasa Jepang itu sulit, tapi menarik."
        },
        negatif: {
          kanji: "今日は雨です。でも、出かけます。",
          hiragana: "きょうは あめです。でも、でかけます。",
          romaji: "Kyou wa ame desu. Demo, dekakemasu.",
          arti: "Hari ini hujan. Tapi, saya tetap pergi keluar."
        }
      }
    ]
  },
  {
    key: "ungkapan",
    no: 11,
    nama: "Ungkapan",
    icon: "&#128172;",
    deskripsi: "Kemampuan, keadaan, dan ungkapan penting",
    materi: [
      {
        judul: "～ことができます",
        sub: "Bisa / Dapat",
        preview: "～ことができる",
        pola: "N が できます / V-kamus + ことができます",
        polaKeterangan: "Menyatakan kesanggupan",
        fungsi: "Digunakan untuk menyatakan kemampuan (bisa melakukan sesuatu) atau kemungkinan (bisa terjadi).",
        contoh: {
          kanji: "誰でもこの部屋を使うことができます。",
          hiragana: "だれでも この へやを つかう ことが できます。",
          romaji: "Dare demo kono heya o tsukau koto ga dekimasu.",
          arti: "Siapa pun bisa menggunakan ruangan ini."
        },
        negatif: {
          kanji: "私は日本語を話すことはできますが、書くことはできません。",
          hiragana: "わたしは にほんごを はなす ことは できますが、かくことは できません。",
          romaji: "Watashi wa nihongo o hanasu koto wa dekimasu ga, kaku koto wa dekimasen.",
          arti: "Saya bisa berbicara bahasa Jepang, tetapi tidak bisa menulisnya."
        }
      },
      {
        judul: "Membendakan Kata Kerja",
        sub: "こと / の",
        preview: "V-kamus + こと",
        pola: "V-kamus + こと / の",
        polaKeterangan: "Merubah V menjadi N",
        fungsi: "Mengubah kata kerja menjadi kata benda agar bisa berkedudukan sebagai subjek/objek.",
        contoh: {
          kanji: "私の趣味は映画を見ることです。",
          hiragana: "わたしの しゅみは えいがを みることです。",
          romaji: "Watashi no shumi wa eiga o miru koto desu.",
          arti: "Hobi saya adalah menonton film."
        },
        negatif: {
          kanji: "漢字を覚えるのは大変です。",
          hiragana: "かんじを おぼえる のは たいへんです。",
          romaji: "Kanji o oboeru no wa taihen desu.",
          arti: "Mengingat kanji itu sulit."
        }
      },
      {
        judul: "～なります / ～します",
        sub: "Menjadi / Membuat menjadi",
        preview: "～くなる / ～にする",
        pola: "Adj-i(く)+なります/します | Adj-na/N(に)+なります/します",
        polaKeterangan: "Perubahan alami (なる) dan tindakan (する)",
        fungsi: "なります = keadaan menjadi (secara alami). します = membuat/mengubah menjadi (aksi).",
        contoh: {
          kanji: "天気がよくなりましたね。",
          hiragana: "てんきが よく なりましたね。",
          romaji: "Tenki ga yoku narimashita ne.",
          arti: "Cuacanya sudah menjadi bagus."
        },
        negatif: {
          kanji: "静かにしてください。",
          hiragana: "しずかに して ください。",
          romaji: "Shizuka ni shite kudasai.",
          arti: "Tolong (buat menjadi) tenang."
        }
      },
      {
        judul: "Memberi & Menerima",
        sub: "もらいます/くれます/あげます",
        preview: "あげる / もらう / くれる",
        pola: "A に B を あげる / もらう / くれる",
        polaKeterangan: "Arah pemberian barang",
        fungsi: "もらいます = menerima dari, くれます = orang lain memberi kepada saya, あげます = saya memberi ke orang.",
        contoh: {
          kanji: "友達がチョコレートをくれました。",
          hiragana: "ともだちが チョコレートを くれました。",
          romaji: "Tomodachi ga chokoreeto o kuremashita.",
          arti: "Teman memberi saya cokelat."
        },
        negatif: {
          kanji: "友達にチョコレートをあげます。",
          hiragana: "ともだちに チョコレートを あげます。",
          romaji: "Tomodachi ni chokoreeto o agemasu.",
          arti: "Saya memberi cokelat kepada teman."
        }
      }
    ]
  },
  {
    key: "perubahan",
    no: 12,
    nama: "Perubahan",
    icon: "&#128260;",
    deskripsi: "Perubahan bentuk kata kerja dan keinginan",
    materi: [
      {
        judul: "Bentuk Potensial",
        sub: "Bisa melakukan...",
        preview: "読める・見られる・できる",
        pola: "読む→読める / 見る→見られる / する→できる / 来る→こられる",
        polaKeterangan: "Menyatakan kesanggupan/kemampuan melakukan sesuatu",
        fungsi: "Bentuk potensial menyatakan kemampuan seseorang untuk melakukan suatu tindakan.",
        contoh: {
          kanji: "ひらがなは書けますが、漢字は書けません。",
          hiragana: "ひらがなは かけますが、かんじは かけません。",
          romaji: "Hiragana wa kakemasu ga, kanji wa kakemasen.",
          arti: "Saya bisa menulis hiragana, tetapi tidak bisa menulis kanji."
        },
        negatif: {
          kanji: "私は泳げません。",
          hiragana: "わたしは およげません。",
          romaji: "Watashi wa oyogemasen.",
          arti: "Saya tidak bisa berenang."
        }
      },
      {
        judul: "～たい",
        sub: "Ingin melakukan...",
        preview: "V-masu + たい",
        pola: "V(ます形) + たいです",
        polaKeterangan: "Menyatakan keinginan diri sendiri untuk melakukan sesuatu",
        fungsi: "Digunakan untuk menyatakan keinginan pembicara melakukan suatu tindakan.",
        contoh: {
          kanji: "ステーキが食べたいです。",
          hiragana: "ステーキが たべたいです。",
          romaji: "Suteeki ga tabetai desu.",
          arti: "Saya ingin makan steak."
        },
        negatif: {
          kanji: "病院には行きたくないです。",
          hiragana: "びょういんには いきたくないです。",
          romaji: "Byouin ni wa ikitakunai desu.",
          arti: "Saya tidak ingin pergi ke rumah sakit."
        }
      },
      {
        judul: "～ほしい",
        sub: "Ingin memiliki...",
        preview: "N + が + ほしい",
        pola: "Kata benda + が + ほしいです",
        polaKeterangan: "Menyatakan keinginan memiliki/mendapatkan sesuatu",
        fungsi: "Digunakan untuk menyatakan keinginan memiliki suatu benda, bukan melakukan tindakan.",
        contoh: {
          kanji: "私は猫がほしいです。",
          hiragana: "わたしは ねこが ほしいです。",
          romaji: "Watashi wa neko ga hoshii desu.",
          arti: "Saya ingin kucing."
        },
        negatif: {
          kanji: "私は妹がほしかったです。",
          hiragana: "わたしは いもうとが ほしかったです。",
          romaji: "Watashi wa imouto ga hoshikatta desu.",
          arti: "Saya dulu ingin adik perempuan."
        }
      },
      {
        judul: "～ましょう／～ましょうか",
        sub: "Ajakan dan tawaran",
        preview: "Ayo... / Mau saya...?",
        pola: "V(ます形) + ましょう／ましょうか",
        polaKeterangan: "ましょう = ajakan, ましょうか = tawaran bantuan",
        fungsi: "～ましょう mengajak lawan bicara melakukan sesuatu bersama. ～ましょうか menawarkan bantuan.",
        contoh: {
          kanji: "近いから歩きましょう。",
          hiragana: "ちかいから あるきましょう。",
          romaji: "Chikai kara arukimashou.",
          arti: "Karena dekat, ayo berjalan."
        },
        negatif: {
          kanji: "引っ越しをてつだいましょうか。",
          hiragana: "ひっこしを てつだいましょうか。",
          romaji: "Hikkoshi o tetsudaimashou ka.",
          arti: "Mau saya bantu pindahan?"
        }
      }
    ]
  }
];

// Kunci -> objek kategori, untuk lookup cepat di render.
var BUNPO_CATEGORY_MAP = {};
for (var _bi = 0; _bi < BUNPO_CATEGORIES.length; _bi++) {
  BUNPO_CATEGORY_MAP[BUNPO_CATEGORIES[_bi].key] = BUNPO_CATEGORIES[_bi];
}
