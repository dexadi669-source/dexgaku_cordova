// =====================================================
// DeX Gaku — simulasi-data.js
// Data Soal Simulasi CBT JFT-Basic
// =====================================================

var SIMULASI_PACKETS = {
  // =====================================================
  // PAKET 1: SIMULASI BARU (Irodori & JLPT N5 Standard)
  // =====================================================
  jft_paket1: {
    title: "Paket 1 — JLPT N5 / JFT Standard",
    totalSoal: 50,
    totalPoin: 250,
    waktuMenit: 60,
    kkm: 145,
    rincian: {
      moji: 15,      // Section 1: 文字・語彙 (Moji-Goi)
      kaiwa: 15,     // Section 2: 文法・会話 (Bunpou-Kaiwa)
      choukai: 10,    // Section 3: 聴解 (Choukai)
      dokkai: 10     // Section 4: 読解 (Dokkai)
    },

    soal: [
      // =================================================
      // SECTION 1: 文字・語彙 (Moji / Goi) - 15 Soal
      // =================================================
      {
        id: 1, section: "moji", type: "Moji-Goi",
        image: "assets/simulasi/soal/paket1/p1_q1.png",
        question: "Gambar berikut menunjukkan kata apa?",
        translation: "Air",
        options: ["みんず", "みいず", "みつ", "みず"],
        correct: 3, points: 5
      },
      {
        id: 2, section: "moji", type: "Moji-Goi",
        image: "assets/simulasi/soal/paket1/p1_q2.png",
        question: "Manakah kosakata kanji yang tepat untuk gambar makanan ini?",
        translation: "Nasi Daging Sapi",
        options: ["牛丼", "そば", "サラダ", "すし"],
        correct: 0, points: 5
      },
      {
        id: 3, section: "moji", type: "Moji-Goi",
        image: "assets/simulasi/soal/paket1/p1_q3.png",
        question: "Pilihlah kosakata yang tepat untuk gambar ini!",
        translation: "Teh Hijau",
        options: ["紅茶", "お茶", "コーヒー", "お酒"],
        correct: 1, points: 5
      },
      {
        id: 4, section: "moji", type: "Moji-Goi",
        question: "あしたは 雨ですか。",
        translation: "Apakah besok hujan?",
        options: ["ゆき", "あめ", "くもり", "はれ"],
        correct: 1, points: 5
      },
      {
        id: 5, section: "moji", type: "Moji-Goi",
        question: "きょうしつで 書いて ください。",
        translation: "Tolong tulis di ruang kelas.",
        options: ["はいて", "きいて", "かいて", "ひいて"],
        correct: 2, points: 5
      },
      {
        id: 6, section: "moji", type: "Moji-Goi",
        question: "このいすは 小さいです。",
        translation: "Kursi ini kecil.",
        options: ["しいさい", "しさい", "ちいさい", "ちさい"],
        correct: 2, points: 5
      },
      {
        id: 7, section: "moji", type: "Moji-Goi",
        question: "あしたは 火よう日です。",
        translation: "Besok adalah hari Selasa.",
        options: ["かようび", "どようび", "すいようび", "にちようび"],
        correct: 0, points: 5
      },
      {
        id: 8, section: "moji", type: "Moji-Goi",
        question: "せいとは 百人います。",
        translation: "Siswanya ada 100 orang.",
        options: ["びゃくじん", "びゃくにん", "ひゃくじん", "ひゃくにん"],
        correct: 3, points: 5
      },
      {
        id: 9, section: "moji", type: "Moji-Goi",
        question: "そとで まちましょう。",
        translation: "Mari menunggu di luar.",
        options: ["中", "内", "列", "外"],
        correct: 3, points: 5
      },
      {
        id: 10, section: "moji", type: "Moji-Goi",
        question: "わたしの くには かわが おおいです。",
        translation: "Negara saya banyak sungai.",
        options: ["川", "木", "山", "花"],
        correct: 0, points: 5
      },
      {
        id: 11, section: "moji", type: "Moji-Goi",
        question: "ヤンさんの がっこうは どこですか。",
        translation: "Sekolahnya Yang-san di mana?",
        options: ["宇枚", "学枚", "宇校", "学校"],
        correct: 3, points: 5
      },
      {
        id: 12, section: "moji", type: "Moji-Goi",
        question: "きのうは かいしゃを やすみました。",
        translation: "Kemarin saya libur bekerja/perusahaan.",
        options: ["公仕", "会仕", "公社", "会社"],
        correct: 3, points: 5
      },
      {
        id: 13, section: "moji", type: "Moji-Goi",
        question: "（　　）を わすれましたから、じかんが わかりません。",
        translation: "Karena lupa jam tangan, tidak tahu waktu.",
        options: ["じしょ", "とけい", "ちず", "さいふ"],
        correct: 1, points: 5
      },
      {
        id: 14, section: "moji", type: "Moji-Goi",
        question: "わたしの うちは えきに ちかいですから、（　　）です。",
        translation: "Karena rumah saya dekat dari stasiun, sangat praktis/mudah.",
        options: ["じょうぶ", "へた", "いっぱい", "べんり"],
        correct: 3, points: 5
      },
      {
        id: 15, section: "moji", type: "Moji-Goi",
        question: "ふくを せんたくしました。",
        translation: "Kalimat yang memiliki makna sama: Saya mencuci pakaian.",
        options: [
          "ふくを きました。",
          "ふくを ぬぎました。",
          "ふくを わたしました。",
          "ふくを あらいました。"
        ],
        correct: 3, points: 5
      },

      // =================================================
      // SECTION 2: 文法・会話 (Bunpou / Kaiwa) - 15 Soal
      // =================================================
      {
        id: 16, section: "kaiwa", type: "Bunpou",
        image: "assets/simulasi/soal/paket1/p1_q16.png",
        question: "A: 肉、好きですか。\nB: はい、（　　）。",
        translation: "A: Apakah kamu suka daging? / B: Ya, suka.",
        options: ["食べます", "好きです", "好きじゃないです"],
        correct: 1, points: 5
      },
      {
        id: 17, section: "kaiwa", type: "Bunpou",
        image: "assets/simulasi/soal/paket1/p1_q17.png",
        question: "A: 何、飲みますか。\nB: じゃあ、ビール、（　　）。",
        translation: "A: Mau minum apa? / B: Kalau begitu, tolong bir.",
        options: ["お願いします", "好きです", "けっこうです"],
        correct: 0, points: 5
      },
      {
        id: 18, section: "kaiwa", type: "Bunpou",
        image: "assets/simulasi/soal/paket1/p1_q18.png",
        question: "A: 朝よく 牛乳（　　）飲みます。\nB: 私も 飲みます。",
        translation: "A: Pagi hari sering minum susu. / B: Saya juga minum.",
        options: ["を", "に", "が"],
        correct: 0, points: 5
      },
      {
        id: 19, section: "kaiwa", type: "Bunpou",
        question: "あしたの ひこうき（　　）国へ 帰ります。",
        translation: "Pulang ke negara (asal) menggunakan pesawat besok.",
        options: ["を", "か", "で", "に"],
        correct: 2, points: 5
      },
      {
        id: 20, section: "kaiwa", type: "Bunpou",
        question: "わたしは 毎朝7時ごろ 家（　　）出ます。",
        translation: "Saya keluar rumah sekitar jam 7 setiap pagi.",
        options: ["に", "が", "と", "を"],
        correct: 3, points: 5
      },
      {
        id: 21, section: "kaiwa", type: "Bunpou",
        question: "きのう スーパーで 田中さん（　　）会いました。",
        translation: "Kemarin bertemu dengan Tanaka-san di supermarket.",
        options: ["の", "を", "に", "で"],
        correct: 2, points: 5
      },
      {
        id: 22, section: "kaiwa", type: "Bunpou",
        question: "今日 やおやで りんごを 買いました。五つ（　　）1,000円でした。",
        translation: "Hari ini beli apel di toko buah. 5 buah harganya 1000 yen.",
        options: ["で", "に", "や", "と"],
        correct: 0, points: 5
      },
      {
        id: 23, section: "kaiwa", type: "Bunpou",
        question: "父は 毎朝 コーヒーを（　　）ながら 新聞を 読みます。",
        translation: "Ayah setiap pagi membaca koran sambil minum kopi.",
        options: ["飲み", "飲む", "飲んで", "飲んだ"],
        correct: 0, points: 5
      },
      {
        id: 24, section: "kaiwa", type: "Bunpou",
        question: "私は 小さいとき、なっとうが 好き（　　）でした。",
        translation: "Dulu sewaktu kecil, saya tidak suka natto.",
        options: ["ない", "じゃない", "ありません", "じゃありません"],
        correct: 3, points: 5
      },
      {
        id: 25, section: "kaiwa", type: "Bunpou",
        question: "店の人:「いらっしゃいませ。」\n山下:「すみません、いちごのケーキを 二つ（　　）。」",
        translation: "Pelayan: Selamat datang. / Yamashita: Permisi, tolong berikan 2 kue stroberi.",
        options: ["どうぞ", "ください", "ありますか", "ほしいですか"],
        correct: 1, points: 5
      },
      {
        id: 26, section: "kaiwa", type: "Bunpou",
        question: "リー:「日曜日に 私の家で アンさんと べんきょうをします。キムさんも（　　）。」",
        translation: "Lee: \"Hari Minggu mau belajar dengan Ann di rumahku. Kim-san mau ikut datang?\"",
        options: ["来ませんか", "来ませんでしたか", "来ていますか", "来ていましたか"],
        correct: 0, points: 5
      },
      {
        id: 27, section: "kaiwa", type: "Bunpou",
        question: "すみません、つぎの（　★　）まがってください。\nUrutan: 1.を 2.右 3.に 4.しんごう",
        translation: "Susunan kalimat: しんごう を 右 に (Tolong belok kanan di lampu lalu lintas berikutnya).",
        options: ["を", "右", "に", "しんごう"],
        correct: 0, points: 5
      },
      {
        id: 28, section: "kaiwa", type: "Bunpou",
        question: "私は 日曜日に 兄（　★　）出かけました。\nUrutan: 1.と 2.いっしょに 3.の 4.子ども",
        translation: "Susunan kalimat: 兄 の 子ども と (Pergi bersama anak dari kakak saya).",
        options: ["と", "いっしょに", "の", "子ども"],
        correct: 3, points: 5
      },
      {
        id: 29, section: "kaiwa", type: "Bunpou",
        question: "きのう 買った おかしは（　★　）きれいでした。\nUrutan: 1.色 2.が 3.きれい 4.まるくて",
        translation: "Susunan kalimat: まるくて 色 が (Kue yang dibeli kemarin bentuknya bulat dan warnanya cantik).",
        options: ["色", "が", "きれい", "まるくて"],
        correct: 0, points: 5
      },
      {
        id: 30, section: "kaiwa", type: "Bunpou",
        question: "駅の（　★　）本屋で ざっしを 買いました。\nUrutan: 1.近く 2.本屋 3.に 4.ある",
        translation: "Susunan kalimat: 近く に ある 本屋 (Membeli majalah di toko buku yang ada di dekat stasiun).",
        options: ["近く", "本屋", "に", "ある"],
        correct: 3, points: 5
      },

      // =================================================
      // SECTION 3: 聴解 (Choukai / Listening) - 10 Soal
      // =================================================
      {
        id: 31, section: "choukai", type: "Choukai",
        image: "assets/simulasi/soal/paket1/p1_q31.svg",
        audioText: "男: すみません、喫茶店ミドリはどこですか。\n女: あの交差点を左に曲がってください。道の左側に銀行があります。喫茶店ミドリは銀行のとなりですよ。\n\n質問: 喫茶店ミドリはどこにありますか。",
        translation: "Pertanyaan: Di manakah letak Kafe Midori?",
        question: "喫茶店ミドリはどこにありますか。",
        options: ["Nomor 1", "Nomor 2", "Nomor 3", "Nomor 4"],
        correct: 2, points: 5
      },
      {
        id: 32, section: "choukai", type: "Choukai",
        image: "assets/simulasi/soal/paket1/p1_q32.svg",
        audioText: "女: 木村さん、後ろにある雑誌を取ってください。\n男: 時計の雑誌ですか、車の雑誌ですか。\n女: 時計の雑誌です。7月のをお願いします。\n\n質問: 男の人はどの雑誌を渡しますか。",
        translation: "Pertanyaan: Majalah manakah yang diberikan pria tersebut kepada wanita itu?",
        question: "男の人はどの雑誌を女の人に渡しますか。",
        options: ["Majalah jam bulan 7", "Majalah jam bulan 8", "Majalah mobil bulan 7", "Majalah mobil bulan 8"],
        correct: 0, points: 5
      },
      {
        id: 33, section: "choukai", type: "Choukai",
        image: "assets/simulasi/soal/paket1/p1_q33.png",
        audioText: "女: お昼ご飯を食べましょう。私が作りますよ。\n男: 何かしましょうか。\n女: じゃあ、冷蔵庫からたまご3個と牛乳と魚を出してください。\n\n質問: 男の学生は冷蔵庫から何を出しますか。",
        translation: "Pertanyaan: Apa saja yang dikeluarkan siswa laki-laki dari kulkas?",
        question: "男の学生は冷蔵庫から何を出しますか。",
        options: ["Gambar 1", "Gambar 2", "Gambar 3", "Gambar 4"],
        correct: 1, points: 5
      },
      {
        id: 34, section: "choukai", type: "Choukai",
        audioText: "女: 皆さん、明日から休みですね。休みは4日から9日まで6日間です。10日はテストをします。休まないでください。\n\n質問: 学生はつぎ何日に学校に来ますか。",
        translation: "Pertanyaan: Tanggal berapa siswa harus datang kembali ke sekolah?",
        question: "学生はつぎ何日に学校に来ますか。",
        options: ["4日", "6日", "9日", "10日"],
        correct: 3, points: 5
      },
      {
        id: 35, section: "choukai", type: "Choukai",
        audioText: "女: 夜のクラスはありますか。\n男: 毎週月曜日、火曜日、木曜日、金曜日です。\n女: 火曜日と金曜日は仕事が6時に終わりません。木曜日は短いですから、月曜日にします。\n\n質問: 女の人は何曜日のクラスで勉強しますか。",
        translation: "Pertanyaan: Hari apa wanita tersebut akan mengikuti kelas?",
        question: "女の人は何曜日のクラスで勉強しますか。",
        options: ["月曜日", "火曜日", "木曜日", "金曜日"],
        correct: 0, points: 5
      },
      {
        id: 36, section: "choukai", type: "Choukai",
        audioText: "男: 加藤さんの家はどちらですか。\n女: 南町です。電車じゃなくて、バスで会社に来ていますか。\n男: いいえ、僕は自転車です。\n\n質問: 男の人は何で会社に来ていますか。",
        translation: "Pertanyaan: Naik apa pria tersebut pergi ke kantor?",
        question: "男の人は何で会社に来ていますか。",
        options: ["電車", "バス", "自転車", "車"],
        correct: 2, points: 5
      },
      {
        id: 37, section: "choukai", type: "Choukai",
        audioText: "シチュエーション: 山を歩いています。友達と一緒に休みたいです。なんと言いますか。",
        translation: "Situasi: Berjalan di gunung. Ingin istirahat bersama teman. Apa yang dikatakan?",
        question: "なんと言いますか。",
        options: ["あまり休みません。", "今、休んでいますか。", "すこし休みましょう。"],
        correct: 2, points: 5
      },
      {
        id: 38, section: "choukai", type: "Choukai",
        audioText: "シチュエーション: 友達にチョコレートをあげます。なんと言いますか。",
        translation: "Situasi: Memberikan cokelat kepada teman. Apa yang diucapkan?",
        question: "なんと言いますか。",
        options: ["どんなチョコレートですか。", "チョコレート、あげませんか。", "チョコレート、いかがですか。"],
        correct: 2, points: 5
      },
      {
        id: 39, section: "choukai", type: "Choukai",
        audioText: "質問: リーさん、リーさんはいつ日本に来ましたか。",
        translation: "Pertanyaan: Lee-san, kapan kamu datang ke Jepang?",
        question: "なんと言いますか。",
        options: ["去年です。", "5時間です。", "三か月です。"],
        correct: 0, points: 5
      },
      {
        id: 40, section: "choukai", type: "Choukai",
        audioText: "質問: 昼ご飯はもう食べましたか。",
        translation: "Pertanyaan: Apakah kamu sudah makan siang?",
        question: "なんと言いますか。",
        options: ["そうしましょう。", "食堂ですよ。", "いえ、今からです。"],
        correct: 2, points: 5
      },

      // =================================================
      // SECTION 4: 読解 (Dokkai / Reading) - 10 Soal
      // =================================================
      {
        id: 41, section: "dokkai", type: "Dokkai",
        question: "【作文】\n私の好きな飲み物はすいかジュースです。私の国ではいろいろな店にあります。（41）、日本では売っている店を知りません。\n\n（41）に入る言葉を選んでください。",
        translation: "Pilih kata sambung yang tepat untuk nomor (41):",
        options: ["もっと", "でも", "だから", "いつも"],
        correct: 1, points: 5
      },
      {
        id: 42, section: "dokkai", type: "Dokkai",
        question: "【作文】\nみなさんは何のジュースが好きですか。好きなジュースを（42）。\n\n（42）に入る言葉を選んでください。",
        translation: "Pilih frasa yang tepat untuk meminta informasi di nomor (42):",
        options: ["教えますよ", "教えたいです", "教えてください", "教えています"],
        correct: 2, points: 5
      },
      {
        id: 43, section: "dokkai", type: "Dokkai",
        question: "【短文】\nわたしは毎朝ご飯となっとうか、パンとたまごを食べて、学校へ行きます。でも、けさはなにも食べませんでした。バナナを学校へ持っていきました。起きた時間が おそかったからです。\n\n質問: けさ「わたし」は学校へ行く前に、何を食べましたか。",
        translation: "Pertanyaan: Sebelum pergi ke sekolah tadi pagi, apa yang dimakan?",
        options: [
          "ご飯と なっとうを食べました。",
          "パンとたまごを食べました。",
          "なにも食べませんでした。",
          "バナナを食べました。"
        ],
        correct: 2, points: 5
      },
      {
        id: 44, section: "dokkai", type: "Dokkai",
        question: "【お知らせ】\n「日本語1」と 「日本語2」のクラスのみなさんへ\n今日 出川先生はお昼までお休みです。午前の「日本語1」のクラスはありません。午後の「日本語2」のクラスはあります。 「日本語1」のしゅくだいは来週出してください。\n\n質問: 大学は「日本語1」のクラスの学生に何が言いたいですか。",
        translation: "Pertanyaan: Apa pesan untuk siswa kelas Bahasa Jepang 1?",
        options: [
          "今日 クラスがありますから、しゅくだいを出してください。",
          "今日 クラスがありますが、しゅくだいは来週出してください。",
          "今日 クラスはありません。しゅくだいは午後出してください。",
          "今日 クラスはありません。しゅくだいは来週出してください。"
        ],
        correct: 3, points: 5
      },
      {
        id: 45, section: "dokkai", type: "Dokkai",
        question: "【メモ】\nボゴさんへ\n10時ごろ ゆうびんきょくのひとがこのにもつをとりに来ますから、にもつとお金をわたしてください。お金は 中西さんが持っています。ゆうびんきょくのひとが来る前にもらいに行ってください。\n\n質問: このメモを読んで、ボゴさんははじめに何をしますか。",
        translation: "Pertanyaan: Menurut memo ini, apa hal pertama yang harus dilakukan Bogo?",
        options: [
          "中西さんにお金をもらいます。",
          "中西さんに荷物とお金を渡します。",
          "ゆうびんきょくの人ににもつをもらいます。",
          "ゆうびんきょくの人に荷物とお金を わたします。"
        ],
        correct: 0, points: 5
      },
      {
        id: 46, section: "dokkai", type: "Dokkai",
        question: "【文章】\nわたしはきのうの日曜日、友だちとサッカーをしました。朝からゆうがたまでしましたから、とてもつかれました。ゆうべはご飯を食べたあとで、すぐにねました。ですから、今日のかんじテストの べんきょうができませんでした。けさは8時に起きました。シャワーをあびて、朝ご飯を食べました。それから、すぐかんじのテキストをべんきょうしました。\n\n質問: どうしてけさは8時に起きましたか。",
        translation: "Pertanyaan: Mengapa tadi pagi bangun jam 8?",
        options: [
          "朝から ゆうがたまでサッカーをしたかったから",
          "シャワーをあびて、朝ご飯を食べたかったから",
          "かんじテストの べんきょうがしたかったから",
          "学校へ行って、べんきょうがしたかったから"
        ],
        correct: 2, points: 5
      },
      {
        id: 47, section: "dokkai", type: "Dokkai",
        question: "【文章のつづき】\nしかし、きょうしつでかんじを べんきょうしている人はいませんでした。まちがえました。テストは今日ではなくて、あしたでした。\n\n質問: チンさんは何をまちがえましたか。",
        translation: "Pertanyaan: Apa yang salah/keliru dari Chin-san?",
        options: [
          "かんじのテストをする きょうしつ",
          "かんじのテストがある日",
          "かんじのテキストのページ",
          "かんじのテキスト"
        ],
        correct: 1, points: 5
      },
      {
        id: 48, section: "dokkai", type: "Dokkai",
        image: "assets/simulasi/soal/paket1/p1_q48.svg",
        question: "【案内図】\nパブロさんは高木大学に行きたいです。花田駅か 糸川駅から乗ります。駅から大学までかかるお金は500円までで、時間はみじかいほうがいいです。パブロさんはどの行き方で行きますか。\n\n① 寺西駅→バス 46分 (300円)\n② 花田駅→電車 30分 (550円)\n③ 花田駅→地下鉄 40分 (450円)\n④ 糸川駅→電車 35分 (430円)",
        translation: "Pertanyaan: Rute mana yang paling cocok dipilih Pablo?",
        options: ["Rute ①", "Rute ②", "Rute ③", "Rute ④"],
        correct: 3, points: 5
      },
      {
        id: 49, section: "dokkai", type: "Dokkai",
        image: "assets/simulasi/soal/paket1/p1_q49.svg",
        question: "【時間割】\n「日本語1」の授業は 何曜日の 何時に ありますか。",
        translation: "Pertanyaan: Kapan jadwal pelajaran Bahasa Jepang 1?",
        options: [
          "月曜日と木曜日の 10:00〜11:30",
          "火曜日と金曜日の 10:00〜11:30",
          "月曜日と木曜日の 13:00〜14:30",
          "水曜日の 10:00〜11:30"
        ],
        correct: 0, points: 5
      },
      {
        id: 50, section: "dokkai", type: "Dokkai",
        image: "assets/simulasi/soal/paket1/p1_q50.svg",
        question: "【カレンダー】\nゴミの 日のお知らせ:\n「燃えるゴミ（ゴミA）」は 火曜日と 金曜日です。「ペットボトル」は 水曜日です。\n今日（木曜日）のつぎに 燃えるゴミを 出せる日は 何曜日ですか。",
        translation: "Pertanyaan: Hari apa selanjutnya setelah hari Kamis bisa membuang sampah organik/bisa terbakar (Moeru gomi)?",
        options: ["金曜日", "土曜日", "日曜日", "火曜日"],
        correct: 0, points: 5
      }
    ]
  },

  // =====================================================
  // PAKET 2: SIMULASI BARU (JLPT N5 2017 Standard)
  // =====================================================
  jft_paket2: {
    title: "Paket 2 — JLPT N5 / JFT Standard",
    totalSoal: 50,
    totalPoin: 250,
    waktuMenit: 60,
    kkm: 145,
    rincian: {
      moji: 15,      // Section 1: 文字・語彙 (Moji-Goi)
      kaiwa: 15,     // Section 2: 文法・会話 (Bunpou-Kaiwa)
      choukai: 10,    // Section 3: 聴解 (Choukai)
      dokkai: 10     // Section 4: 読解 (Dokkai)
    },

    soal: [
      // =================================================
      // SECTION 1: 文字・語彙 (Moji / Goi) - 15 Soal
      // =================================================
      {
        id: 1, section: "moji", type: "Moji-Goi",
        question: "先週 デパートに かいものにいきました。",
        translation: "Cara baca Kanji 先週 (Minggu lalu).",
        options: ["せんしゅ", "せんしゅう", "ぜんしゅ", "ぜんしゅう"],
        correct: 1, points: 5
      },
      {
        id: 2, section: "moji", type: "Moji-Goi",
        question: "ごはんの 後で さんぽします。",
        translation: "Cara baca Kanji 後で (Setelah/Sesudah).",
        options: ["つぎ", "うしろ", "まえ", "あと"],
        correct: 3, points: 5
      },
      {
        id: 3, section: "moji", type: "Moji-Goi",
        question: "ちかくに 山があります。",
        translation: "Cara baca Kanji 山 (Gunung).",
        options: ["かわ", "やま", "いけ", "うみ"],
        correct: 1, points: 5
      },
      {
        id: 4, section: "moji", type: "Moji-Goi",
        question: "このホテルは ヘやが 多いです。",
        translation: "Cara baca Kanji 多い (Banyak).",
        options: ["すくない", "おおい", "せまい", "ひろい"],
        correct: 1, points: 5
      },
      {
        id: 5, section: "moji", type: "Moji-Goi",
        question: "えんぴつが 六本 あります。",
        translation: "Cara baca 六本 (6 buah - benda panjang/pensil).",
        options: ["ろくぼん", "ろくぽん", "ろっぽん", "ろっぼん"],
        correct: 2, points: 5
      },
      {
        id: 6, section: "moji", type: "Moji-Goi",
        question: "この カメラは 安いです。",
        translation: "Cara baca Kanji 安い (Murah).",
        options: ["たかい", "やすい", "おもい", "かるい"],
        correct: 1, points: 5
      },
      {
        id: 7, section: "moji", type: "Moji-Goi",
        question: "けさ （　　）を あびました。",
        translation: "Penulisan Katakana untuk 'Shower'.",
        options: ["シャワー", "シャウー", "ツャワー", "ツャウー"],
        correct: 0, points: 5
      },
      {
        id: 8, section: "moji", type: "Moji-Goi",
        question: "あたらしい （　　）を かいました。",
        translation: "Kanji yang tepat untuk Kuruma (Mobil).",
        options: ["卓", "早", "車", "東"],
        correct: 2, points: 5
      },
      {
        id: 9, section: "moji", type: "Moji-Goi",
        question: "きのう たなかさんと （　　）ました。",
        translation: "Kanji yang tepat untuk Aimashita (Bertemu).",
        options: ["見", "書", "会", "話"],
        correct: 2, points: 5
      },
      {
        id: 10, section: "moji", type: "Moji-Goi",
        question: "わたしの へやはこの （　　）の 2かいです。",
        translation: "Kamar saya berada di lantai 2 apartemen ini.",
        options: ["エレベーター", "プール", "エアコン", "アパート"],
        correct: 3, points: 5
      },
      {
        id: 11, section: "moji", type: "Moji-Goi",
        question: "さとうさんは ギターを じょうずに （　　）。",
        translation: "Sato-san pandai bermain (memetik) gitar.",
        options: ["うたいます", "ききます", "ひきます", "あそびます"],
        correct: 2, points: 5
      },
      {
        id: 12, section: "moji", type: "Moji-Goi",
        question: "えきから たいしかんまでの （　　）を かいて ください。",
        translation: "Tolong gambarkan peta dari stasiun sampai kedutaan.",
        options: ["しゃしん", "ちず", "てがみ", "きっぷ"],
        correct: 1, points: 5
      },
      {
        id: 13, section: "moji", type: "Moji-Goi",
        question: "うるさいから テレビを （　　） ください。",
        translation: "Karena bising, tolong matikan TV-nya.",
        options: ["けして", "つけて", "しめて", "あけて"],
        correct: 0, points: 5
      },
      {
        id: 14, section: "moji", type: "Moji-Goi",
        question: "この まちには ゆうめいな たてものが あります。",
        translation: "Kalimat dengan arti serupa: Di kota ini ada gedung (ビル) terkenal.",
        options: [
          "この まちには ゆうめいな ビルが あります。",
          "この まちには ゆうめいな おちゃが あります。",
          "この まちには ゆうめいな ケーキが あります。",
          "この まちには ゆうめいな こうえんが あります。"
        ],
        correct: 0, points: 5
      },
      {
        id: 15, section: "moji", type: "Moji-Goi",
        question: "その えいがは おもしろくなかったです。",
        translation: "Kalimat dengan arti serupa: Film itu membosankan (つまらなかった).",
        options: [
          "その えいがは たのしかったです。",
          "その えいがは つまらなかったです。",
          "その えいがは みじかかったです。",
          "その えいがは ながかったです。"
        ],
        correct: 1, points: 5
      },

      // =================================================
      // SECTION 2: 文法・会話 (Bunpou / Kaiwa) - 15 Soal
      // =================================================
      {
        id: 16, section: "kaiwa", type: "Bunpou",
        question: "日本（　　）ラーメンは おいしいです。",
        translation: "Ramen (di/asal) Jepang rasanya enak.",
        options: ["に", "の", "を", "へ"],
        correct: 1, points: 5
      },
      {
        id: 17, section: "kaiwa", type: "Bunpou",
        question: "わたしには きょうだいが 二人います。弟（　　）妹です。",
        translation: "Saya punya 2 saudara. Adik laki-laki dan adik perempuan.",
        options: ["は", "も", "と", "か"],
        correct: 2, points: 5
      },
      {
        id: 18, section: "kaiwa", type: "Bunpou",
        question: "（タクシーで）\nA:「つぎの かどを 右（　　） まがってください。」\nB:「わかりました。」",
        translation: "Tolong belok ke kanan di tikungan berikutnya.",
        options: ["が", "や", "か", "に"],
        correct: 3, points: 5
      },
      {
        id: 19, section: "kaiwa", type: "Bunpou",
        question: "きのう、わたしは ひとり（　　）えいがを 見に行きました。",
        translation: "Kemarin saya pergi menonton film sendirian.",
        options: ["が", "を", "で", "は"],
        correct: 2, points: 5
      },
      {
        id: 20, section: "kaiwa", type: "Bunpou",
        question: "駅まで タクシーで 1000円（　　）です。",
        translation: "Sampai stasiun naik taksi sekitar (gurai) 1000 yen.",
        options: ["ぐらい", "など", "ごろ", "も"],
        correct: 0, points: 5
      },
      {
        id: 21, section: "kaiwa", type: "Bunpou",
        question: "わたしの 母は 50さいです。父は 55さいです。母は 父（　　）5さい わかいです。",
        translation: "Ibu saya lebih muda 5 tahun daripada (yori) Ayah.",
        options: ["から", "まで", "より", "のほうが"],
        correct: 2, points: 5
      },
      {
        id: 22, section: "kaiwa", type: "Bunpou",
        question: "子ども:「いただきます。」\n母:「あ、食べる（　　） 手を あらいましょう。」",
        translation: "Ibu: Sebelum (mae ni) makan, mari cuci tangan dulu.",
        options: ["まえに", "のまえに", "あとに", "のあとに"],
        correct: 0, points: 5
      },
      {
        id: 23, section: "kaiwa", type: "Bunpou",
        question: "A:「東京でも 雪が ふりますか。」\nB:「ええ、ふりますよ。でも、きょねんは あまり（　　）。」",
        translation: "B: Ya turun, tapi tahun lalu tidak terlalu turun salju (furimasen deshita).",
        options: ["ふりませんでした", "ふりません", "ふりました", "ふります"],
        correct: 0, points: 5
      },
      {
        id: 24, section: "kaiwa", type: "Bunpou",
        question: "中川:「山田さんの その カメラは いいですね。どこで かいましたか。」\n山田:「いえ、これは 兄に（　　）。」",
        translation: "Yamada: Bukan beli, ini saya dapat/diberikan (moraimashita) dari kakak.",
        options: ["あげました", "もらいました", "うりました", "かいました"],
        correct: 1, points: 5
      },
      {
        id: 25, section: "kaiwa", type: "Bunpou",
        question: "（店で）\n田中:「すみません。くだもの（　★　）か。」\n店の人:「こちらです。」\nUrutan: 1.どこ 2.あります 3.は 4.に",
        translation: "Susunan kalimat: くだもの は どこ に あります か (Buah-buahan ada di mana?).",
        options: ["どこ", "あります", "は", "に"],
        correct: 0, points: 5
      },
      {
        id: 26, section: "kaiwa", type: "Bunpou",
        question: "A:「山下さんは？」\nB:「となりの ヘやで（　★　）います。」\nUrutan: 1.れんしゅう 2.の 3.ギター 4.を",
        translation: "Susunan kalimat: ギター の れんしゅう を して (Sedang berlatih gitar di kamar sebelah).",
        options: ["れんしゅう", "の", "ギター", "を"],
        correct: 3, points: 5
      },
      {
        id: 27, section: "kaiwa", type: "Bunpou",
        question: "A:「会社（　★　）行っていますか。」\nB:「わたしは あるいて 行っています。」\nUrutan: 1.で 2.は 3.へ 4.何で",
        translation: "Susunan kalimat: 会社 へ は 何で 行っていますか (Ke kantor naik apa?).",
        options: ["で", "は", "へ", "何で"],
        correct: 1, points: 5
      },
      {
        id: 28, section: "kaiwa", type: "Bunpou",
        question: "山田:「ジョンさん、しゅくだいは ぜんぶ おわりましたか。」\nジョン:「いいえ、まだです。ここ（　★　）むずかしいです。」\nUrutan: 1.は 2.かんたんでした 3.が 4.から",
        translation: "Susunan kalimat: ここ から が むずかしいです (Mulai dari bagian ini yang sulit).",
        options: ["は", "かんたんでした", "が", "から"],
        correct: 2, points: 5
      },
      {
        id: 29, section: "kaiwa", type: "Bunpou",
        question: "【文章の穴埋め】\n日本に（ 29 ）、いろいろな 店で 食べました。\n学校の 前の 店は、安くて おいしいです。",
        translation: "Setelah datang (kite kara) ke Jepang, saya makan di berbagai toko.",
        options: ["行くから", "行ってから", "来るから", "来てから"],
        correct: 3, points: 5
      },
      {
        id: 30, section: "kaiwa", type: "Bunpou",
        question: "【文章の穴埋め】\nすしが すきな 人は、いっしょに（ 30 ）。",
        translation: "Bagi yang suka sushi, maukah pergi bersama-sama (ikimasen ka)?",
        options: ["行きましたか", "行きませんか", "行っていませんでしたか", "行っていませんか"],
        correct: 1, points: 5
      },

      // =================================================
      // SECTION 3: 聴解 (Choukai / Listening) - 10 Soal
      // =================================================
      {
        id: 31, section: "choukai", type: "Choukai",
        image: "assets/simulasi/soal/paket2/p2_q31.png",
        audioText: "F: すみません、その上の黒いかばんを取ってください。\nM: どちらですか。この小さいのですか。\nF: いいえ。大きいのです。\n\n質問: 店の人は、どのかばんを取りますか。",
        translation: "Pertanyaan: Tas manakah yang diambil pelayan toko?",
        question: "店の人は、どのかばんを取りますか。",
        options: ["Hitam kecil di atas", "Hitam besar di atas", "Putih besar di bawah", "Hitam kecil di bawah"],
        correct: 1, points: 5
      },
      {
        id: 32, section: "choukai", type: "Choukai",
        image: "assets/simulasi/soal/paket2/p2_q32.png",
        audioText: "M: 今からテストをします。辞書を使う問題がありますから、机の上に辞書を出してください。鉛筆と消しゴムも出してください。時計やノートは、かばんの中に入れてください。\n\n質問: 学生は、机の上に何を置きますか。",
        translation: "Pertanyaan: Benda apa saja yang ditaruh siswa di atas meja?",
        question: "学生は、机の上に何を置きますか。",
        options: ["Kamus dan Jam", "Pensil, Penghapus, Jam", "Kamus, Pensil, Penghapus", "Kamus, Pensil, Buku Catatan"],
        correct: 2, points: 5
      },
      {
        id: 33, section: "choukai", type: "Choukai",
        audioText: "M: 来週の日曜日、海へ行きますね。何を持っていきましょうか。\nF: 私はおにぎりを持っていきます。\nM: じゃあ僕は。\nF: 飲み物とお菓子をお願いします。あ、飲み物は重いですね。海に着いてから買いましょう。\nM: そうですね。\n\n質問: 男の人は、何を持っていきますか。",
        translation: "Pertanyaan: Benda apa yang dibawa pria tersebut dari rumah?",
        question: "男の人は、何を持っていきますか。",
        options: ["Onigiri", "Minuman dan Camilan", "Camilan saja", "Minuman saja"],
        correct: 2, points: 5
      },
      {
        id: 34, section: "choukai", type: "Choukai",
        audioText: "F: すみません、1番のバスはみどり駅に行きますか。\nM: いいえ、みどり駅に行くバスは3番と5番と7番ですよ。でも、今日は日曜日ですから5番はありません。それから3番は朝と夕方だけですから、今の時間は7番ですね。\n\n質問: 女の人は、何番のバスに乗りますか。",
        translation: "Pertanyaan: Bus nomor berapa yang harus dinaiki wanita tersebut saat ini?",
        question: "女の人は、何番のバスに乗りますか。",
        options: ["1番", "3番", "5番", "7番"],
        correct: 3, points: 5
      },
      {
        id: 35, section: "choukai", type: "Choukai",
        audioText: "M: 山田さんはいつも何時間ぐらい勉強しますか。\nF: 毎日3時間ぐらいです。\nM: えっ、私は毎日1時間です。\nF: あ、でも、明日はテストがありますから、今日は4時間勉強します。\n\n質問: 女の学生は、今日、何時間勉強しますか。",
        translation: "Pertanyaan: Berapa jam siswa perempuan akan belajar HARI INI?",
        question: "女の学生は、今日、何時間勉強しますか。",
        options: ["1時間", "2時間", "3時間", "4時間"],
        correct: 3, points: 5
      },
      {
        id: 36, section: "choukai", type: "Choukai",
        audioText: "M: あのう、山田さんの電話番号は、512-7734ですね？\nF: いいえ、7734じゃなくて7743です。\nM: 512の7743ですね。ありがとうございます。\n\n質問: 女の人の電話番号は何番ですか。",
        translation: "Pertanyaan: Berapa nomor telepon wanita tersebut?",
        question: "女の人の電話番号は何番ですか。",
        options: ["512-7733", "512-7734", "512-7743", "512-7744"],
        correct: 2, points: 5
      },
      {
        id: 37, section: "choukai", type: "Choukai",
        audioText: "シチュエーション: 電車の中です。おばあさんが来ました。何と言いますか。",
        translation: "Situasi: Di dalam kereta. Seorang nenek datang. Apa yang kamu katakan saat menawarkan tempat duduk?",
        question: "なんと言いますか。",
        options: ["どうもありがとう。", "初めまして。", "ここ、どうぞ。"],
        correct: 2, points: 5
      },
      {
        id: 38, section: "choukai", type: "Choukai",
        audioText: "シチュエーション: 友達は鉛筆がありません。友達に何と言いますか。",
        translation: "Situasi: Teman tidak membawa pensil. Apa yang kamu katakan untuk meminjamkannya?",
        question: "なんと言いますか。",
        options: ["鉛筆、借りましょうか。", "鉛筆、使いますか。", "鉛筆、貸してください。"],
        correct: 1, points: 5
      },
      {
        id: 39, section: "choukai", type: "Choukai",
        audioText: "質問: 今日は何日ですか。",
        translation: "Pertanyaan: Hari ini tanggal berapa?",
        question: "なんと言いますか。",
        options: ["三日（みっか）です。", "3週間です。", "3時です。"],
        correct: 0, points: 5
      },
      {
        id: 40, section: "choukai", type: "Choukai",
        audioText: "質問: 田中さん、その荷物を持ちましょうか。",
        translation: "Pertanyaan: Tanaka-san, mau saya bawakan barang itu?",
        question: "なんと言いますか。",
        options: ["どういたしまして。", "持ちませんでした。", "ありがとうございます。"],
        correct: 2, points: 5
      },

      // =================================================
      // SECTION 4: 読解 (Dokkai / Reading) - 10 Soal
      // =================================================
      {
        id: 41, section: "dokkai", type: "Dokkai",
        question: "【短文】\nわたしは今日、友だちと買い物に行きました。3か月前に見た えいがの DVDがほしかったからです。買ったDVDは、友だちや 姉といっしょに見ます。\n\n質問: 「わたし」は今日、何をしましたか。",
        translation: "Pertanyaan: Apa yang dilakukan 'Saya' hari ini?",
        options: [
          "友だちと えいがを見に行きました。",
          "友だちと DVDを買いに行きました。",
          "姉と えいがを見に行きました。",
          "姉と DVDを買いに行きました。"
        ],
        correct: 1, points: 5
      },
      {
        id: 42, section: "dokkai", type: "Dokkai",
        question: "【短文】\nわたしのへやには、テーブルが 一つといすが二つと 本だな（Rak buku）が 二つあります。本がたくさんありますから、もっと大きい 本つなががほしいです。\n\n質問: 今のへやには 本棚が いくつ ありますか。",
        translation: "Pertanyaan: Berapa banyak rak buku yang ada di kamarnya saat ini?",
        options: ["一つ", "二つ", "三つ", "四つ"],
        correct: 1, points: 5
      },
      {
        id: 43, section: "dokkai", type: "Dokkai",
        question: "【メモ】\n森さんへ\nクラスで使う 本を中川先生に かりました。5ページを 25枚 コピーしてください。コピーは南さんに わたしてください。本は、わたしが あしたかえしますから、わたしの 机の上においてください。\n山口より\n\n質問: 森さんはコピーをしたあとで、本をどうしますか。",
        translation: "Pertanyaan: Menurut memo, apa yang harus dilakukan Mori-san pada buku setelah memfoto kopinya?",
        options: [
          "クラスで使います。",
          "南さんに わたします。",
          "中川先生に かえします。",
          "山口先生の 机の上におきます。"
        ],
        correct: 3, points: 5
      },
      {
        id: 44, section: "dokkai", type: "Dokkai",
        question: "【中文】\nきのうの夜はおそくまでしごとをしました。とてもつかれました。しごとのあと、電車で帰りました。家の近くの駅で 電車をおりました。外は 雨でしたが、わたしはかさが ありませんでした。とてもこまりました。\n\n質問: どうしてこまりましたか。",
        translation: "Pertanyaan: Mengapa dia merasa kesulitan/bingung saat keluar stasiun?",
        options: [
          "おそい時間に駅に着いたから",
          "しごとがたくさんあったから",
          "とてもつかれたから",
          "かさがなかったから"
        ],
        correct: 3, points: 5
      },
      {
        id: 45, section: "dokkai", type: "Dokkai",
        question: "【中文のつづき】\n駅の人がわたしを見て、「あのはこの中のかさを使ってください。」と言いました。駅の人は「あれは『みんなのかさ』です。お金はいりません。あした、あのはこにかえしてください。」と言いました。\n\n質問: 「わたし」は、あしたどうしますか。",
        translation: "Pertanyaan: Apa yang harus dilakukan 'Saya' besok?",
        options: [
          "かさをはこの中に入れます。",
          "かさを駅の人にわたします。",
          "お金を はこの中に入れます。",
          "お金を 駅の人にわたします。"
        ],
        correct: 0, points: 5
      },
      {
        id: 46, section: "dokkai", type: "Dokkai",
        question: "【短文】\n木村さんは 毎朝 7時に 起きます。シャワーを あびてから、朝ご飯を 食べます。それから 8時に 家を出て、電車で 会社へ 行きます。会社は 8時半から 5時までです。\n\n質問: 木村さんは 何で 会社へ 行きますか。",
        translation: "Pertanyaan: Naik apa Kimura-san pergi ke kantor?",
        options: ["バス", "電車", "自転車", "あるいて"],
        correct: 1, points: 5
      },
      {
        id: 47, section: "dokkai", type: "Dokkai",
        question: "【短文】\nきのう 友だちから 手紙が 届きました。手紙には「来月 日本へ 行きますから、いっしょに どこかへ 出かけましょう」と 書いてありました。とても たのしみです。\n\n質問: 手紙は いつ 届きましたか。",
        translation: "Pertanyaan: Kapan surat dari teman itu sampai/diterima?",
        options: ["きのう", "きょう", "らいげつ", "おととい"],
        correct: 0, points: 5
      },
      {
        id: 48, section: "dokkai", type: "Dokkai",
        question: "【お知らせ】\n「日本語スピーチコンテストのお知らせ」\n日時: 10月15日（日）13:00〜16:00\n場所: さくらホール（3階）\n入場: 無料（お金はいりません）\n\n質問: スピーチコンテストを見るのにお金がいくらかかりますか。",
        translation: "Pertanyaan: Berapa biaya untuk menonton kontes pidato ini?",
        options: ["0円（無料）", "500円", "1000円", "1500円"],
        correct: 0, points: 5
      },
      {
        id: 49, section: "dokkai", type: "Dokkai",
        question: "【メール】\nサトウさんへ\nあしたの パートナー練習は 午前10時に 2階の 201教室で します。遅れないで ください。\nタナカより\n\n質問: タナカさんは サトウさんに 何を 伝えていますか。",
        translation: "Pertanyaan: Apa pesan yang disampaikan Tanaka kepada Sato?",
        options: [
          "あしたの 練習の時間と 場所",
          "あしたの テストの 範囲",
          "きょうの 宿題の 内容",
          "らいしゅうの 予定"
        ],
        correct: 0, points: 5
      },
      {
        id: 50, section: "dokkai", type: "Dokkai",
        image: "assets/simulasi/soal/paket2/p2_q50.svg",
        question: "【情報検索】\n「あらきや（Toko Araki）」で トイレットペーパーと 肉（にく）と 野菜（やさい）を **同じ日に** 安く 買いたいです。いつ 行けば いいですか。\n\n・トイレットペーパー (490円) ディスカウント: 6月11日(月) 〜 14日(木)\n・毎週 安い日: 水・木 (とうふ、にく、やさい)",
        translation: "Pertanyaan: Hari apa bisa membeli tisu toilet, daging, dan sayur murahan secara bersamaan?",
        options: [
          "6月11日(月)か 12日(火)",
          "6月13日(水)か 14日(木)",
          "6月15日(金)か 16日(土)",
          "6月17日(日)か 18日(月)"
        ],
        correct: 1, points: 5
      }
    ]
  }
};
