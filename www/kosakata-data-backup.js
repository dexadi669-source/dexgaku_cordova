// =====================================================
// kosakata-data.js
// Data kosakata N5 untuk aplikasi DeX Gaku, dikelompokkan
// ke dalam 12 kategori & subkategori bertingkat.
// Ditambah dukungan field opsional "penggunaan".
// =====================================================

var KOSAKATA_CATEGORIES = [
  {
    key: "orang-keluarga",
    no: 1,
    nama: "Orang & Keluarga",
    icon: "&#128101;",
    contoh: "人・私・父・母",
    subkategori: [
      {
        nama: "Ayah/Ibu",
        kata: [
          { 
            kata: "父 (ちち)", 
            romaji: "chichi", 
            arti: "ayah", 
            penggunaan: "Dipakai untuk menyebut ayah SENDIRI ke orang lain.<br>Kalau menyebut ayah orang lain atau memanggil ayah sendiri, gunakan お父さん (otousan).", 
            contoh_jp: "父は会社員です。", 
            contoh_rm: "Chichi wa kaishain desu.", 
            contoh_id: "Ayah saya pegawai perusahaan.",
            contoh2_jp: "父は毎朝六時に起きます。",
            contoh2_rm: "Chichi wa maiasa rokuji ni okimasu.",
            contoh2_id: "Ayah saya bangun jam 6 setiap pagi."
          },
          { 
            kata: "母 (はは)", 
            romaji: "haha", 
            arti: "ibu", 
            penggunaan: "Dipakai untuk menyebut ibu SENDIRI ke orang lain.<br>Kalau menyebut ibu orang lain atau memanggil ibu sendiri, gunakan お母さん (okaasan).", 
            contoh_jp: "母は料理が上手です。", 
            contoh_rm: "Haha wa ryouri ga jouzu desu.", 
            contoh_id: "Ibu saya pandai memasak.",
            contoh2_jp: "母は毎日買い物に行きます。",
            contoh2_rm: "Haha wa mainichi kaimono ni ikimasu.",
            contoh2_id: "Ibu saya pergi belanja setiap hari."
          },
          { 
            kata: "お父さん (おとうさん)", 
            romaji: "otousan", 
            arti: "ayah (panggilan)", 
            penggunaan: "Dipakai untuk memanggil ayah sendiri, atau menyebut ayah orang lain dengan sopan.", 
            contoh_jp: "お父さんは今どこですか。", 
            contoh_rm: "Otousan wa ima doko desu ka.", 
            contoh_id: "Ayah sekarang di mana?",
            contoh2_jp: "お父さん、ありがとう。",
            contoh2_rm: "Otousan, arigatou.",
            contoh2_id: "Ayah, terima kasih."
          },
          { 
            kata: "お母さん (おかあさん)", 
            romaji: "okaasan", 
            arti: "ibu (panggilan)", 
            penggunaan: "Dipakai untuk memanggil ibu sendiri, atau menyebut ibu orang lain dengan sopan.", 
            contoh_jp: "お母さんは台所にいます。", 
            contoh_rm: "Okaasan wa daidokoro ni imasu.", 
            contoh_id: "Ibu ada di dapur.",
            contoh2_jp: "お母さんは優しいです。",
            contoh2_rm: "Okaasan wa yasashii desu.",
            contoh2_id: "Ibu saya baik hati."
          },
                    { 
            kata: "家族 (かぞく)", 
            romaji: "kazoku", 
            arti: "keluarga", 
            penggunaan: "Dipakai untuk menyebut keluarga sendiri secara umum, termasuk ayah, ibu, dan anggota serumah.", 
            contoh_jp: "家族は四人です。", 
            contoh_rm: "Kazoku wa yonin desu.", 
            contoh_id: "Keluarga saya ada empat orang.",
            contoh2_jp: "家族と一緒に旅行します。",
            contoh2_rm: "Kazoku to issho ni ryokou shimasu.",
            contoh2_id: "Saya traveling bersama keluarga."
          },
          { 
            kata: "両親 (りょうしん)", 
            romaji: "ryoushin", 
            arti: "orang tua", 
            contoh_jp: "両親は元気です。", 
            contoh_rm: "Ryoushin wa genki desu.", 
            contoh_id: "Orang tua saya sehat.",
            contoh2_jp: "両親は東京に住んでいます。",
            contoh2_rm: "Ryoushin wa Toukyou ni sunde imasu.",
            contoh2_id: "Orang tua saya tinggal di Tokyo."
          }
        ]
      },
      {
        nama: "Saudara",
        kata: [
          { 
            kata: "兄 (あに)", 
            romaji: "ani", 
            arti: "kakak laki-laki", 
            penggunaan: "Dipakai untuk menyebut kakak laki-laki SENDIRI ke orang lain.<br>Kalau menyebut kakak laki-laki orang lain, gunakan お兄さん (oniisan).", 
            contoh_jp: "兄は東京にいます。", 
            contoh_rm: "Ani wa Toukyou ni imasu.", 
            contoh_id: "Kakak laki-laki saya ada di Tokyo.",
            contoh2_jp: "兄は大学生です。",
            contoh2_rm: "Ani wa daigakusei desu.",
            contoh2_id: "Kakak laki-laki saya mahasiswa."
          },
          { 
            kata: "姉 (あね)", 
            romaji: "ane", 
            arti: "kakak perempuan", 
            penggunaan: "Dipakai untuk menyebut kakak perempuan SENDIRI ke orang lain.<br>Kalau menyebut kakak perempuan orang lain, gunakan お姉さん (oneesan).", 
            contoh_jp: "姉は学生です。", 
            contoh_rm: "Ane wa gakusei desu.", 
            contoh_id: "Kakak perempuan saya pelajar.",
            contoh2_jp: "姉は日本語が上手です。",
            contoh2_rm: "Ane wa Nihongo ga jouzu desu.",
            contoh2_id: "Kakak perempuan saya pandai bahasa Jepang."
          },
                    { 
            kata: "お兄さん (おにいさん)", 
            romaji: "oniisan", 
            arti: "kakak laki-laki (panggilan)", 
            penggunaan: "Dipakai untuk memanggil kakak laki-laki sendiri, atau menyebut kakak laki-laki orang lain dengan sopan.", 
            contoh_jp: "お兄さんは何歳ですか。", 
            contoh_rm: "Oniisan wa nansai desu ka.", 
            contoh_id: "Kakak laki-laki kamu berapa tahun?",
            contoh2_jp: "お兄さんは優しいです。",
            contoh2_rm: "Oniisan wa yasashii desu.",
            contoh2_id: "Kakak laki-lakinya baik hati."
          },
          { 
            kata: "お姉さん (おねえさん)", 
            romaji: "oneesan", 
            arti: "kakak perempuan (panggilan)", 
            penggunaan: "Dipakai untuk memanggil kakak perempuan sendiri, atau menyebut kakak perempuan orang lain dengan sopan.", 
            contoh_jp: "お姉さんは学生ですか。", 
            contoh_rm: "Oneesan wa gakusei desu ka.", 
            contoh_id: "Kakak perempuan kamu pelajar?",
            contoh2_jp: "お姉さんは日本語が上手です。",
            contoh2_rm: "Oneesan wa Nihongo ga jouzu desu.",
            contoh2_id: "Kakak perempuannya pandai bahasa Jepang."
          },
          { 
            kata: "弟さん (おとうとさん)", 
            romaji: "otoutosan", 
            arti: "adik laki-laki (orang lain)", 
            penggunaan: "Dipakai untuk menyebut adik laki-laki ORANG LAIN. Kalau adik sendiri, cukup 弟 (otouto).", 
            contoh_jp: "弟さんはいくつですか。", 
            contoh_rm: "Otoutosan wa ikutsu desu ka.", 
            contoh_id: "Adik laki-laki kamu umur berapa?",
            contoh2_jp: "弟さんはサッカーが好きです。",
            contoh2_rm: "Otoutosan wa sakkaa ga suki desu.",
            contoh2_id: "Adik laki-lakinya suka sepak bola."
          },
          { 
            kata: "妹さん (いもうとさん)", 
            romaji: "imoutosan", 
            arti: "adik perempuan (orang lain)", 
            penggunaan: "Dipakai untuk menyebut adik perempuan ORANG LAIN. Kalau adik sendiri, cukup 妹 (imouto).", 
            contoh_jp: "妹さんは可愛いですね。", 
            contoh_rm: "Imoutosan wa kawaii desu ne.", 
            contoh_id: "Adik perempuanmu lucu ya.",
            contoh2_jp: "妹さんは何歳ですか。",
            contoh2_rm: "Imoutosan wa nansai desu ka.",
            contoh2_id: "Adik perempuanmu berapa tahun?"
          },
          { 
            kata: "弟 (おとうと)", 
            romaji: "otouto", 
            arti: "adik laki-laki", 
            contoh_jp: "弟は小学生です。", 
            contoh_rm: "Otouto wa shougakusei desu.", 
            contoh_id: "Adik laki-laki saya murid SD.",
            contoh2_jp: "弟はサッカーが好きです。",
            contoh2_rm: "Otouto wa sakkaa ga suki desu.",
            contoh2_id: "Adik laki-laki saya suka sepak bola."
          },
          { 
            kata: "妹 (いもうと)", 
            romaji: "imouto", 
            arti: "adik perempuan", 
            contoh_jp: "妹は可愛いですね。", 
            contoh_rm: "Imouto wa kawaii desu ne.", 
            contoh_id: "Adik perempuanmu lucu ya.",
            contoh2_jp: "妹はピアノを習っています。",
            contoh2_rm: "Imouto wa piano o naratte imasu.",
            contoh2_id: "Adik perempuan saya sedang belajar piano."
          },
          { 
            kata: "兄弟 (きょうだい)", 
            romaji: "kyoudai", 
            arti: "saudara", 
            penggunaan: "Dipakai untuk menyebut saudara secara umum, baik laki-laki maupun perempuan.", 
            contoh_jp: "兄弟が三人います。", 
            contoh_rm: "Kyoudai ga sannin imasu.", 
            contoh_id: "Saya punya tiga saudara.",
            contoh2_jp: "兄弟は仲がいいです。",
            contoh2_rm: "Kyoudai wa naka ga ii desu.",
            contoh2_id: "Saudara-saudara saya akrab."
          }
        ]
      },
      {
        nama: "Kakek/Nenek",
        kata: [
          { 
            kata: "お祖父さん (おじいさん)", 
            romaji: "ojiisan", 
            arti: "kakek", 
            penggunaan: "Dipakai untuk memanggil kakek sendiri atau menyebut kakek orang lain. Untuk menyebut kakek sendiri ke orang lain, gunakan 祖父 (sofu).", 
            contoh_jp: "お祖父さんは親切です。", 
            contoh_rm: "Ojiisan wa shinsetsu desu.", 
            contoh_id: "Kakek saya baik hati.",
            contoh2_jp: "お祖父さんは八十歳です。",
            contoh2_rm: "Ojiisan wa hachijussai desu.",
            contoh2_id: "Kakek saya berumur 80 tahun."
          },
          { 
            kata: "お祖母さん (おばあさん)", 
            romaji: "obaasan", 
            arti: "nenek", 
            penggunaan: "Dipakai untuk memanggil nenek sendiri atau menyebut nenek orang lain. Untuk menyebut nenek sendiri ke orang lain, gunakan 祖母 (sobo).", 
            contoh_jp: "お祖母さんは元気です。", 
            contoh_rm: "Obaasan wa genki desu.", 
            contoh_id: "Nenek saya sehat.",
            contoh2_jp: "お祖母さんは料理が上手です。",
            contoh2_rm: "Obaasan wa ryouri ga jouzu desu.",
            contoh2_id: "Nenek saya pandai memasak."
          },
          { 
            kata: "祖父 (そふ)", 
            romaji: "sofu", 
            arti: "kakek (sendiri)", 
            penggunaan: "Dipakai untuk menyebut kakek SENDIRI ke orang lain.", 
            contoh_jp: "祖父は医者でした。", 
            contoh_rm: "Sofu wa isha deshita.", 
            contoh_id: "Kakek saya dulu seorang dokter.",
            contoh2_jp: "祖父は京都に住んでいます。",
            contoh2_rm: "Sofu wa Kyouto ni sunde imasu.",
            contoh2_id: "Kakek saya tinggal di Kyoto."
          },
          { 
            kata: "祖母 (そぼ)", 
            romaji: "sobo", 
            arti: "nenek (sendiri)", 
            penggunaan: "Dipakai untuk menyebut nenek SENDIRI ke orang lain.", 
            contoh_jp: "祖母は七十歳です。", 
            contoh_rm: "Sobo wa nanajussai desu.", 
            contoh_id: "Nenek saya berumur 70 tahun.",
            contoh2_jp: "祖母は花が好きです。",
            contoh2_rm: "Sobo wa hana ga suki desu.",
            contoh2_id: "Nenek saya suka bunga."
          },
          { 
            kata: "祖父母 (そふぼ)", 
            romaji: "sofubo", 
            arti: "kakek dan nenek", 
            contoh_jp: "祖父母は田舎にいます。", 
            contoh_rm: "Sofubo wa inaka ni imasu.", 
            contoh_id: "Kakek dan nenek saya ada di kampung.",
            contoh2_jp: "祖父母に会いに行きます。",
            contoh2_rm: "Sofubo ni ai ni ikimasu.",
            contoh2_id: "Saya pergi menemui kakek dan nenek."
          }
        ]
      },
      {
        nama: "Kerabat",
        kata: [
          { 
            kata: "伯父さん (おじさん)", 
            romaji: "ojisan", 
            arti: "paman", 
            penggunaan: "Dipakai untuk memanggil paman sendiri atau menyebut paman orang lain. Untuk menyebut paman sendiri ke orang lain, gunakan 叔父 (oji).", 
            contoh_jp: "伯父さんは医者です。", 
            contoh_rm: "Ojisan wa isha desu.", 
            contoh_id: "Paman saya seorang dokter.",
            contoh2_jp: "伯父さんに会いました。",
            contoh2_rm: "Ojisan ni aimashita.",
            contoh2_id: "Saya bertemu paman."
          },
          { 
            kata: "伯母さん (おばさん)", 
            romaji: "obasan", 
            arti: "bibi", 
            penggunaan: "Dipakai untuk memanggil bibi sendiri atau menyebut bibi orang lain. Untuk menyebut bibi sendiri ke orang lain, gunakan 叔母 (oba).", 
            contoh_jp: "伯母さんは先生です。", 
            contoh_rm: "Obasan wa sensei desu.", 
            contoh_id: "Bibi saya seorang guru.",
            contoh2_jp: "伯母さんはケーキを作りました。",
            contoh2_rm: "Obasan wa keeki o tsukurimashita.",
            contoh2_id: "Bibi saya membuat kue."
          },
          { 
            kata: "いとこ", 
            romaji: "itoko", 
            arti: "sepupu", 
            contoh_jp: "いとこと遊びます。", 
            contoh_rm: "Itoko to asobimasu.", 
            contoh_id: "Saya bermain dengan sepupu.",
            contoh2_jp: "いとこは大阪にいます。",
            contoh2_rm: "Itoko wa Oosaka ni imasu.",
            contoh2_id: "Sepupu saya ada di Osaka."
          },
          { 
            kata: "甥 (おい)", 
            romaji: "oi", 
            arti: "keponakan laki-laki", 
            contoh_jp: "甥は五歳です。", 
            contoh_rm: "Oi wa gosai desu.", 
            contoh_id: "Keponakan laki-laki saya berumur 5 tahun.",
            contoh2_jp: "甥と公園へ行きました。",
            contoh2_rm: "Oi to kouen e ikimashita.",
            contoh2_id: "Saya pergi ke taman dengan keponakan."
          },
          { 
            kata: "姪 (めい)", 
            romaji: "mei", 
            arti: "keponakan perempuan", 
            contoh_jp: "姪は中学生です。", 
            contoh_rm: "Mei wa chuugakusei desu.", 
            contoh_id: "Keponakan perempuan saya murid SMP.",
            contoh2_jp: "姪はピアノが上手です。",
            contoh2_rm: "Mei wa piano ga jouzu desu.",
            contoh2_id: "Keponakan perempuan saya pandai piano."
          },
          { 
            kata: "親戚 (しんせき)", 
            romaji: "shinseki", 
            arti: "kerabat", 
            contoh_jp: "親戚の家に行きます。", 
            contoh_rm: "Shinseki no ie ni ikimasu.", 
            contoh_id: "Saya pergi ke rumah kerabat.",
            contoh2_jp: "お正月に親戚が集まります。",
            contoh2_rm: "Oshougatsu ni shinseki ga atsumarimasu.",
            contoh2_id: "Saat Tahun Baru, kerabat berkumpul."
          }
        ]
      },
      {
        nama: "Status Keluarga",
        kata: [
          { 
            kata: "夫 (おっと)", 
            romaji: "otto", 
            arti: "suami", 
            penggunaan: "Dipakai untuk menyebut suami SENDIRI ke orang lain.<br>Kalau menyebut suami orang lain, gunakan ご主人 (goshujin).", 
            contoh_jp: "夫は優しい人です。", 
            contoh_rm: "Otto wa yasashii hito desu.", 
            contoh_id: "Suami saya orang yang baik.",
            contoh2_jp: "夫と買い物に行きます。",
            contoh2_rm: "Otto to kaimono ni ikimasu.",
            contoh2_id: "Saya pergi belanja dengan suami."
          },
          { 
            kata: "妻 (つま)", 
            romaji: "tsuma", 
            arti: "istri", 
            penggunaan: "Dipakai untuk menyebut istri SENDIRI ke orang lain.<br>Kalau menyebut istri orang lain, gunakan 奥さん (okusan).", 
            contoh_jp: "妻は看護師です。", 
            contoh_rm: "Tsuma wa kangoshi desu.", 
            contoh_id: "Istri saya seorang perawat.",
            contoh2_jp: "妻と旅行に行きたいです。",
            contoh2_rm: "Tsuma to ryokou ni ikitai desu.",
            contoh2_id: "Saya ingin pergi traveling dengan istri."
          },
                    { 
            kata: "ご主人 (ごしゅじん)", 
            romaji: "goshujin", 
            arti: "suami (orang lain)", 
            penggunaan: "Dipakai untuk menyebut suami ORANG LAIN dengan sopan. Kalau suami sendiri, gunakan 夫 (otto).", 
            contoh_jp: "ご主人はお元気ですか。", 
            contoh_rm: "Goshujin wa ogenki desu ka.", 
            contoh_id: "Suami Anda sehat?",
            contoh2_jp: "ご主人は何のお仕事ですか。",
            contoh2_rm: "Goshujin wa nan no oshigoto desu ka.",
            contoh2_id: "Suami Anda bekerja di bidang apa?"
          },
          { 
            kata: "奥さん (おくさん)", 
            romaji: "okusan", 
            arti: "istri (orang lain)", 
            penggunaan: "Dipakai untuk menyebut istri ORANG LAIN dengan sopan. Kalau istri sendiri, gunakan 妻 (tsuma).", 
            contoh_jp: "奥さんはきれいですね。", 
            contoh_rm: "Okusan wa kirei desu ne.", 
            contoh_id: "Istri Anda cantik ya.",
            contoh2_jp: "奥さんも一緒に来ますか。",
            contoh2_rm: "Okusan mo issho ni kimasu ka.",
            contoh2_id: "Apakah istri Anda juga ikut datang?"
          },
          { 
            kata: "一人 (ひとり)", 
            romaji: "hitori", 
            arti: "satu orang", 
            contoh_jp: "家族は三人です。", 
            contoh_rm: "Kazoku wa sannin desu.", 
            contoh_id: "Keluarga saya ada tiga orang.",
            contoh2_jp: "一人で旅行します。",
            contoh2_rm: "Hitori de ryokou shimasu.",
            contoh2_id: "Saya traveling sendirian."
          },
          { 
            kata: "二人 (ふたり)", 
            romaji: "futari", 
            arti: "dua orang", 
            contoh_jp: "兄弟は二人です。", 
            contoh_rm: "Kyoudai wa futari desu.", 
            contoh_id: "Saudara saya ada dua orang.",
            contoh2_jp: "二人で映画を見ます。",
            contoh2_rm: "Futari de eiga o mimasu.",
            contoh2_id: "Kami berdua menonton film."
          },
          { 
            kata: "子ども (こども)", 
            romaji: "kodomo", 
            arti: "anak", 
            contoh_jp: "子どもは公園で遊びます。", 
            contoh_rm: "Kodomo wa kouen de asobimasu.", 
            contoh_id: "Anak-anak bermain di taman.",
            contoh2_jp: "子どもが二人います。",
            contoh2_rm: "Kodomo ga futari imasu.",
            contoh2_id: "Saya punya dua anak."
          },
          { 
            kata: "息子 (むすこ)", 
            romaji: "musuko", 
            arti: "anak laki-laki", 
            penggunaan: "Dipakai untuk menyebut anak laki-laki SENDIRI ke orang lain.", 
            contoh_jp: "息子は大学生です。", 
            contoh_rm: "Musuko wa daigakusei desu.", 
            contoh_id: "Anak laki-laki saya mahasiswa.",
            contoh2_jp: "息子はサッカーを習っています。",
            contoh2_rm: "Musuko wa sakkaa o naratte imasu.",
            contoh2_id: "Anak laki-laki saya belajar sepak bola."
          },
          { 
            kata: "娘 (むすめ)", 
            romaji: "musume", 
            arti: "anak perempuan", 
            penggunaan: "Dipakai untuk menyebut anak perempuan SENDIRI ke orang lain.", 
            contoh_jp: "娘は高校生です。", 
            contoh_rm: "Musume wa koukousei desu.", 
            contoh_id: "Anak perempuan saya murid SMA.",
            contoh2_jp: "娘は料理が好きです。",
            contoh2_rm: "Musume wa ryouri ga suki desu.",
            contoh2_id: "Anak perempuan saya suka memasak."
          }
        ]
  },
      {
        nama: "Saudara",
        kata: [
          { kata: "兄 (あに)", romaji: "ani", arti: "kakak laki-laki", contoh_jp: "兄は東京にいます。", contoh_rm: "Ani wa Toukyou ni imasu.", contoh_id: "Kakak laki-laki ada di Tokyo." },
          { kata: "姉 (あね)", romaji: "ane", arti: "kakak perempuan", contoh_jp: "姉は学生です。", contoh_rm: "Ane wa gakusei desu.", contoh_id: "Kakak perempuan saya mahasiswa." },
          { kata: "弟 (おとうと)", romaji: "otouto", arti: "adik laki-laki", contoh_jp: "弟は小学生です。", contoh_rm: "Otouto wa shougakusei desu.", contoh_id: "Adik laki-laki saya murid SD." },
          { kata: "妹 (いもうと)", romaji: "imouto", arti: "adik perempuan", contoh_jp: "妹は可愛いですね。", contoh_rm: "Imouto wa kawaii desu ne.", contoh_id: "Adik perempuanmu lucu ya." }
        ]
      },
      {
        nama: "Kakek/Nenek",
        kata: [
          { kata: "お祖父さん (おじいさん)", romaji: "ojiisan", arti: "kakek", contoh_jp: "お祖父さんは親切です。", contoh_rm: "Ojiisan wa shinsetsu desu.", contoh_id: "Kakek sangat baik hati." },
          { kata: "お祖母さん (おばあさん)", romaji: "obaasan", arti: "nenek", contoh_jp: "お祖母さんは八十歳です。", contoh_rm: "Obaasan wa yasai o tabemasu.", contoh_id: "Nenek berumur 80 tahun." },
          { kata: "家族 (かぞく)", romaji: "kazoku", arti: "keluarga", contoh_jp: "家族は四人です。", contoh_rm: "Kazoku wa yonin desu.", contoh_id: "Keluarga saya ada empat orang." }
        ]
      },
      {
        nama: "Kerabat",
        kata: [
          { kata: "伯父さん (おじさん)", romaji: "ojisan", arti: "paman", contoh_jp: "伯父さんは医者です。", contoh_rm: "Ojisan wa isha desu.", contoh_id: "Paman adalah dokter." },
          { kata: "伯母さん (おばさん)", romaji: "obasan", arti: "bibi", contoh_jp: "伯母さんに会いました。", contoh_rm: "Obasan ni aimashita.", contoh_id: "Saya telah bertemu bibi." },
          { kata: "親戚 (しんせき)", romaji: "shinseki", arti: "kerabat/saudara", contoh_jp: "親戚の家に行きます。", contoh_rm: "Shinseki no ie ni ikimasu.", contoh_id: "Saya pergi ke rumah kerabat." }
        ]
      },
      {
        nama: "Status Keluarga",
        kata: [
          { kata: "夫 (おっと)", romaji: "otto", arti: "suami", contoh_jp: "夫は優しい人です。", contoh_rm: "Otto wa yasashii hito desu.", contoh_id: "Suami saya orang yang ramah." },
          { kata: "妻 (つま)", romaji: "tsuma", arti: "istri", contoh_jp: "妻と買い物します。", contoh_rm: "Tsuma to kaimono shimasu.", contoh_id: "Saya berbelanja dengan istri." },
          { kata: "子ども (こども)", romaji: "kodomo", arti: "anak", contoh_jp: "子どもは公園で遊ぶ。", contoh_rm: "Kodomo wa kouen de asobu.", contoh_id: "Anak-anak bermain di taman." }
        ]
      }
    ]
  },
    {
    key: "rumah-kehidupan",
    no: 2,
    nama: "Rumah & Kehidupan",
    icon: "&#127968;",
    contoh: "家・部屋・机・窓",
    subkategori: [
      {
        nama: "Bagian Rumah",
        kata: [
          { 
            kata: "家 (いえ)", 
            romaji: "ie", 
            arti: "rumah", 
            penggunaan: "Dipakai untuk menyebut bangunan rumah. Kalau maksudnya 'rumah sendiri' secara abstrak, bisa pakai うち (uchi).", 
            contoh_jp: "私の家は大きいです。", 
            contoh_rm: "Watashi no ie wa ookii desu.", 
            contoh_id: "Rumah saya besar.",
            contoh2_jp: "家に帰ります。",
            contoh2_rm: "Ie ni kaerimasu.",
            contoh2_id: "Saya pulang ke rumah."
          },
          { 
            kata: "部屋 (へや)", 
            romaji: "heya", 
            arti: "kamar", 
            contoh_jp: "部屋は綺麗です。", 
            contoh_rm: "Heya wa kirei desu.", 
            contoh_id: "Kamarnya bersih.",
            contoh2_jp: "私の部屋は二階です。",
            contoh2_rm: "Watashi no heya wa nikai desu.",
            contoh2_id: "Kamar saya di lantai dua."
          },
          { 
            kata: "台所 (だいどころ)", 
            romaji: "daidokoro", 
            arti: "dapur", 
            contoh_jp: "台所で料理します。", 
            contoh_rm: "Daidokoro de ryouri shimasu.", 
            contoh_id: "Saya memasak di dapur.",
            contoh2_jp: "台所は狭いです。",
            contoh2_rm: "Daidokoro wa semai desu.",
            contoh2_id: "Dapurnya sempit."
          },
          { 
            kata: "庭 (にわ)", 
            romaji: "niwa", 
            arti: "halaman", 
            contoh_jp: "庭に花があります。", 
            contoh_rm: "Niwa ni hana ga arimasu.", 
            contoh_id: "Ada bunga di halaman.",
            contoh2_jp: "庭で遊びます。",
            contoh2_rm: "Niwa de asobimasu.",
            contoh2_id: "Saya bermain di halaman."
          },
          { 
            kata: "玄関 (げんかん)", 
            romaji: "genkan", 
            arti: "pintu masuk", 
            penggunaan: "Dipakai untuk menyebut area masuk rumah Jepang, tempat melepas sepatu sebelum masuk.", 
            contoh_jp: "玄関で靴を脱ぎます。", 
            contoh_rm: "Genkan de kutsu o nugimasu.", 
            contoh_id: "Melepas sepatu di pintu masuk.",
            contoh2_jp: "玄関に誰かいます。",
            contoh2_rm: "Genkan ni dareka imasu.",
            contoh2_id: "Ada seseorang di pintu masuk."
          },
                    { 
            kata: "うち", 
            romaji: "uchi", 
            arti: "rumah (sendiri)", 
            penggunaan: "Dipakai untuk menyebut rumah sendiri secara kasual. Lebih personal daripada 家 (ie).", 
            contoh_jp: "うちに帰ります。", 
            contoh_rm: "Uchi ni kaerimasu.", 
            contoh_id: "Saya pulang ke rumah.",
            contoh2_jp: "うちは駅の近くです。",
            contoh2_rm: "Uchi wa eki no chikaku desu.",
            contoh2_id: "Rumah saya dekat stasiun."
          },
          { 
            kata: "お風呂 (おふろ)", 
            romaji: "ofuro", 
            arti: "kamar mandi", 
            penggunaan: "Dipakai untuk menyebut kamar mandi Jepang (bak rendam), bukan sekadar tempat shower.", 
            contoh_jp: "お風呂に入ります。", 
            contoh_rm: "Ofuro ni hairimasu.", 
            contoh_id: "Saya masuk kamar mandi (berendam).",
            contoh2_jp: "お風呂は広いです。",
            contoh2_rm: "Ofuro wa hiroi desu.",
            contoh2_id: "Kamar mandinya luas."
          },
          { 
            kata: "階段 (かいだん)", 
            romaji: "kaidan", 
            arti: "tangga", 
            contoh_jp: "階段を上ります。", 
            contoh_rm: "Kaidan o noborimasu.", 
            contoh_id: "Saya naik tangga.",
            contoh2_jp: "階段で転びました。",
            contoh2_rm: "Kaidan de korobimashita.",
            contoh2_id: "Saya terjatuh di tangga."
          },
          { 
            kata: "アパート", 
            romaji: "apaato", 
            arti: "apartemen", 
            penggunaan: "Dipakai untuk menyebut apartemen kecil di Jepang. Untuk apartemen mewah, gunakan マンション (manshon).", 
            contoh_jp: "アパートに住んでいます。", 
            contoh_rm: "Apaato ni sunde imasu.", 
            contoh_id: "Saya tinggal di apartemen.",
            contoh2_jp: "アパートは静かです。",
            contoh2_rm: "Apaato wa shizuka desu.",
            contoh2_id: "Apartemennya tenang."
          },
          { 
            kata: "建物 (たてもの)", 
            romaji: "tatemono", 
            arti: "bangunan", 
            contoh_jp: "あの建物は新しいです。", 
            contoh_rm: "Ano tatemono wa atarashii desu.", 
            contoh_id: "Bangunan itu baru.",
            contoh2_jp: "建物の中に入ります。",
            contoh2_rm: "Tatemono no naka ni hairimasu.",
            contoh2_id: "Saya masuk ke dalam bangunan."
          },
          { 
            kata: "トイレ", 
            romaji: "toire", 
            arti: "toilet", 
            penggunaan: "Dipakai untuk menyebut toilet secara umum. Kalau mau lebih sopan, gunakan お手洗い (otearai).", 
            contoh_jp: "トイレはどこですか。", 
            contoh_rm: "Toire wa doko desu ka.", 
            contoh_id: "Toilet di mana?",
            contoh2_jp: "トイレを借りてもいいですか。",
            contoh2_rm: "Toire o karite mo ii desu ka.",
            contoh2_id: "Boleh saya pinjam toilet?"
          }
        ]
      },
      {
        nama: "Perabot",
        kata: [
          { 
            kata: "机 (つくえ)", 
            romaji: "tsukue", 
            arti: "meja", 
            contoh_jp: "机の上に本があります。", 
            contoh_rm: "Tsukue no ue ni hon ga arimasu.", 
            contoh_id: "Ada buku di atas meja.",
            contoh2_jp: "机で勉強します。",
            contoh2_rm: "Tsukue de benkyou shimasu.",
            contoh2_id: "Saya belajar di meja."
          },
          { 
            kata: "椅子 (いす)", 
            romaji: "isu", 
            arti: "kursi", 
            contoh_jp: "椅子に座ってください。", 
            contoh_rm: "Isu ni suwatte kudasai.", 
            contoh_id: "Silakan duduk di kursi.",
            contoh2_jp: "椅子が三つあります。",
            contoh2_rm: "Isu ga mittsu arimasu.",
            contoh2_id: "Ada tiga kursi."
          },
          { 
  kata: "手紙 (てがみ)", 
  romaji: "tegami", 
  arti: "surat", 
  penggunaan: "Dipakai untuk menyebut surat kertas. Kalau email, pakai メール (meeru).", 
  contoh_jp: "母に手紙を書きます。", 
  contoh_rm: "Haha ni tegami o kakimasu.", 
  contoh_id: "Saya menulis surat untuk ibu.",
  contoh2_jp: "手紙を送ります。",
  contoh2_rm: "Tegami o okurimasu.",
  contoh2_id: "Saya mengirim surat."
},
{ 
  kata: "切手 (きって)", 
  romaji: "kitte", 
  arti: "prangko", 
  penggunaan: "Dipakai untuk menyebut prangko pos. Sering muncul di JFT-Basic (kirim surat, kantor pos).", 
  contoh_jp: "切手を買います。", 
  contoh_rm: "Kitte o kaimasu.", 
  contoh_id: "Saya membeli prangko.",
  contoh2_jp: "切手を三枚ください。",
  contoh2_rm: "Kitte o sanmai kudasai.",
  contoh2_id: "Tolong beri tiga prangko."
},
          { 
            kata: "ベッド", 
            romaji: "beddo", 
            arti: "tempat tidur", 
            contoh_jp: "ベッドで寝ます。", 
            contoh_rm: "Beddo de nemasu.", 
            contoh_id: "Saya tidur di tempat tidur.",
            contoh2_jp: "ベッドの下に猫がいます。",
            contoh2_rm: "Beddo no shita ni neko ga imasu.",
            contoh2_id: "Ada kucing di bawah tempat tidur."
          },
          { 
            kata: "本棚 (ほんだな)", 
            romaji: "hondana", 
            arti: "rak buku", 
            contoh_jp: "本棚に本を並べます。", 
            contoh_rm: "Hondana ni hon o narabemasu.", 
            contoh_id: "Saya menata buku di rak buku.",
            contoh2_jp: "本棚は木でできています。",
            contoh2_rm: "Hondana wa ki de dekite imasu.",
            contoh2_id: "Rak buku terbuat dari kayu."
          },
                    { 
            kata: "傘 (かさ)", 
            romaji: "kasa", 
            arti: "payung", 
            contoh_jp: "傘を持って行きます。", 
            contoh_rm: "Kasa o motte ikimasu.", 
            contoh_id: "Saya pergi membawa payung.",
            contoh2_jp: "傘を忘れました。",
            contoh2_rm: "Kasa o wasuremashita.",
            contoh2_id: "Saya lupa membawa payung."
          },
          { 
            kata: "鞄 (かばん)", 
            romaji: "kaban", 
            arti: "tas", 
            contoh_jp: "鞄に本を入れます。", 
            contoh_rm: "Kaban ni hon o iremasu.", 
            contoh_id: "Saya memasukkan buku ke dalam tas.",
            contoh2_jp: "この鞄は重いです。",
            contoh2_rm: "Kono kaban wa omoi desu.",
            contoh2_id: "Tas ini berat."
          },
          { 
            kata: "服 (ふく)", 
            romaji: "fuku", 
            arti: "pakaian", 
            contoh_jp: "新しい服を買いました。", 
            contoh_rm: "Atarashii fuku o kaimashita.", 
            contoh_id: "Saya membeli pakaian baru.",
            contoh2_jp: "服を洗濯します。",
            contoh2_rm: "Fuku o sentaku shimasu.",
            contoh2_id: "Saya mencuci pakaian."
          },
          { 
            kata: "靴 (くつ)", 
            romaji: "kutsu", 
            arti: "sepatu", 
            contoh_jp: "靴を脱いでください。", 
            contoh_rm: "Kutsu o nuide kudasai.", 
            contoh_id: "Tolong lepas sepatunya.",
            contoh2_jp: "新しい靴を履きます。",
            contoh2_rm: "Atarashii kutsu o hakimasu.",
            contoh2_id: "Saya memakai sepatu baru."
          },
          { 
            kata: "窓 (まど)", 
            romaji: "mado", 
            arti: "jendela", 
            contoh_jp: "窓を開けてください。", 
            contoh_rm: "Mado o akete kudasai.", 
            contoh_id: "Tolong buka jendelanya.",
            contoh2_jp: "窓から海が見えます。",
            contoh2_rm: "Mado kara umi ga miemasu.",
            contoh2_id: "Dari jendela terlihat laut."
          }
        ]
      },
      {
        nama: "Peralatan Rumah",
        kata: [
          { 
            kata: "冷蔵庫 (れいぞうこ)", 
            romaji: "reizouko", 
            arti: "kulkas", 
            contoh_jp: "冷蔵庫に水があります。", 
            contoh_rm: "Reizouko ni mizu ga arimasu.", 
            contoh_id: "Ada air di dalam kulkas.",
            contoh2_jp: "冷蔵庫を閉めてください。",
            contoh2_rm: "Reizouko o shimete kudasai.",
            contoh2_id: "Tolong tutup kulkasnya."
          },
          { 
            kata: "テレビ", 
            romaji: "terebi", 
            arti: "televisi", 
            contoh_jp: "毎日テレビを見ます。", 
            contoh_rm: "Mainichi terebi o mimasu.", 
            contoh_id: "Setiap hari saya menonton TV.",
            contoh2_jp: "テレビの音が大きいです。",
            contoh2_rm: "Terebi no oto ga ookii desu.",
            contoh2_id: "Suara TV-nya besar."
          },
          { 
            kata: "時計 (とけい)", 
            romaji: "tokei", 
            arti: "jam", 
            penggunaan: "Dipakai untuk menyebut jam sebagai benda. Kalau menyebut 'jam sekian', gunakan 〜時 (〜ji).", 
            contoh_jp: "壁に時計があります。", 
            contoh_rm: "Kabe ni tokei ga arimasu.", 
            contoh_id: "Ada jam di dinding.",
            contoh2_jp: "この時計は高いです。",
            contoh2_rm: "Kono tokei wa takai desu.",
            contoh2_id: "Jam ini mahal."
          },
          { 
            kata: "電話 (でんわ)", 
            romaji: "denwa", 
            arti: "telepon", 
            contoh_jp: "電話をかけます。", 
            contoh_rm: "Denwa o kakemasu.", 
            contoh_id: "Saya menelepon.",
            contoh2_jp: "電話番号を教えてください。",
            contoh2_rm: "Denwa bangou o oshiete kudasai.",
            contoh2_id: "Tolong beri tahu nomor teleponnya."
          },
          { 
            kata: "ストーブ", 
            romaji: "sutoobu", 
            arti: "penghangat ruangan", 
            penggunaan: "Dipakai untuk menyebut alat penghangat ruangan saat musim dingin. Bisa pakai listrik atau minyak.", 
            contoh_jp: "冬はストーブを使います。", 
            contoh_rm: "Fuyu wa sutoobu o tsukaimasu.", 
            contoh_id: "Musim dingin saya pakai penghangat.",
            contoh2_jp: "ストーブのそばは暖かいです。",
            contoh2_rm: "Sutoobu no soba wa atatakai desu.",
            contoh2_id: "Di dekat penghangat itu hangat."
          },
          { 
            kata: "カレンダー", 
            romaji: "karendaa", 
            arti: "kalender", 
            contoh_jp: "壁にカレンダーがあります。", 
            contoh_rm: "Kabe ni karendaa ga arimasu.", 
            contoh_id: "Ada kalender di dinding.",
            contoh2_jp: "カレンダーに予定を書きます。",
            contoh2_rm: "Karendaa ni yotei o kakimasu.",
            contoh2_id: "Saya menulis jadwal di kalender."
          },
          { 
  kata: "エアコン", 
  romaji: "eakon", 
  arti: "AC", 
  penggunaan: "Kata serapan dari bahasa Inggris 'air conditioner'. Dipakai untuk menyebut pendingin ruangan.", 
  contoh_jp: "夏はエアコンをつけます。", 
  contoh_rm: "Natsu wa eakon o tsukemasu.", 
  contoh_id: "Musim panas saya menyalakan AC.",
  contoh2_jp: "エアコンが壊れました。",
  contoh2_rm: "Eakon ga kowaremashita.",
  contoh2_id: "AC-nya rusak."
},
{ 
  kata: "パソコン", 
  romaji: "pasokon", 
  arti: "komputer / laptop", 
  penggunaan: "Singkatan dari パーソナルコンピューター (personal computer). Dipakai untuk menyebut komputer secara umum.", 
  contoh_jp: "パソコンで仕事をします。", 
  contoh_rm: "Pasokon de shigoto o shimasu.", 
  contoh_id: "Saya bekerja pakai komputer.",
  contoh2_jp: "新しいパソコンを買いました。",
  contoh2_rm: "Atarashii pasokon o kaimashita.",
  contoh2_id: "Saya membeli komputer baru."
},
{ 
  kata: "ラジオ", 
  romaji: "rajio", 
  arti: "radio", 
  contoh_jp: "毎朝ラジオを聞きます。", 
  contoh_rm: "Maiasa rajio o kikimasu.", 
  contoh_id: "Setiap pagi saya mendengarkan radio.",
  contoh2_jp: "ラジオの音が小さいです。",
  contoh2_rm: "Rajio no oto ga chiisai desu.",
  contoh2_id: "Suara radionya kecil."
},
{ 
  kata: "カメラ", 
  romaji: "kamera", 
  arti: "kamera", 
  contoh_jp: "新しいカメラを買いました。", 
  contoh_rm: "Atarashii kamera o kaimashita.", 
  contoh_id: "Saya membeli kamera baru.",
  contoh2_jp: "カメラで写真を撮ります。",
  contoh2_rm: "Kamera de shashin o torimasu.",
  contoh2_id: "Saya mengambil foto pakai kamera."
},
{ 
  kata: "タオル", 
  romaji: "taoru", 
  arti: "handuk", 
  contoh_jp: "タオルで手を拭きます。", 
  contoh_rm: "Taoru de te o fukimasu.", 
  contoh_id: "Saya mengelap tangan dengan handuk.",
  contoh2_jp: "タオルを洗濯します。",
  contoh2_rm: "Taoru o sentaku shimasu.",
  contoh2_id: "Saya mencuci handuk."
},
{ 
  kata: "フライパン", 
  romaji: "furaipan", 
  arti: "wajan", 
  penggunaan: "Kata serapan dari bahasa Inggris 'frying pan'. Dipakai untuk menyebut wajan datar.", 
  contoh_jp: "フライパンで卵を焼きます。", 
  contoh_rm: "Furaipan de tamago o yakimasu.", 
  contoh_id: "Saya menggoreng telur di wajan.",
  contoh2_jp: "新しいフライパンを買いました。",
  contoh2_rm: "Atarashii furaipan o kaimashita.",
  contoh2_id: "Saya membeli wajan baru."
},
{ 
  kata: "サングラス", 
  romaji: "sangurasu", 
  arti: "kacamata hitam", 
  penggunaan: "Kata serapan dari bahasa Inggris 'sunglasses'. Dipakai untuk menyebut kacamata pelindung matahari.", 
  contoh_jp: "夏はサングラスをかけます。", 
  contoh_rm: "Natsu wa sangurasu o kakemasu.", 
  contoh_id: "Musim panas saya memakai kacamata hitam.",
  contoh2_jp: "サングラスが似合いますね。",
  contoh2_rm: "Sangurasu ga niaimasu ne.",
  contoh2_id: "Kacamata hitamnya cocok ya."
},
          { 
            kata: "電気 (でんき)", 
            romaji: "denki", 
            arti: "listrik / lampu", 
            penggunaan: "Dipakai untuk menyebut listrik atau lampu. Konteks menentukan artinya.", 
            contoh_jp: "電気を消してください。", 
            contoh_rm: "Denki o keshite kudasai.", 
            contoh_id: "Tolong matikan lampunya.",
            contoh2_jp: "電気代が高いです。",
            contoh2_rm: "Denki dai ga takai desu.",
            contoh2_id: "Biaya listriknya mahal."
          }
        ]
      },
      {
        nama: "Aktivitas Rumah",
        kata: [
          { 
            kata: "掃除 (そうじ)", 
            romaji: "souji", 
            arti: "bersih-bersih", 
            contoh_jp: "部屋を掃除します。", 
            contoh_rm: "Heya o souji shimasu.", 
            contoh_id: "Saya membersihkan kamar.",
            contoh2_jp: "毎週掃除をします。",
            contoh2_rm: "Maishuu souji o shimasu.",
            contoh2_id: "Saya bersih-bersih setiap minggu."
          },
          { 
            kata: "洗濯 (せんたく)", 
            romaji: "sentaku", 
            arti: "mencuci baju", 
            contoh_jp: "服を洗濯します。", 
            contoh_rm: "Fuku o sentaku shimasu.", 
            contoh_id: "Saya mencuci pakaian.",
            contoh2_jp: "今日は洗濯をしません。",
            contoh2_rm: "Kyou wa sentaku o shimasen.",
            contoh2_id: "Hari ini saya tidak mencuci baju."
          },
          { 
            kata: "料理 (りょうり)", 
            romaji: "ryouri", 
            arti: "memasak", 
            penggunaan: "Bisa berarti 'masakan' atau 'kegiatan memasak', tergantung konteks.", 
            contoh_jp: "晩ご飯を料理します。", 
            contoh_rm: "Bangohan o ryouri shimasu.", 
            contoh_id: "Saya memasak makan malam.",
            contoh2_jp: "母の料理は美味しいです。",
            contoh2_rm: "Haha no ryouri wa oishii desu.",
            contoh2_id: "Masakan ibu enak."
          },
          { 
            kata: "散歩 (さんぽ)", 
            romaji: "sanpo", 
            arti: "jalan-jalan", 
            contoh_jp: "公園を散歩します。", 
            contoh_rm: "Kouen o sanpo shimasu.", 
            contoh_id: "Saya jalan-jalan di taman.",
            contoh2_jp: "毎朝犬と散歩します。",
            contoh2_rm: "Maiasa inu to sanpo shimasu.",
            contoh2_id: "Setiap pagi saya jalan-jalan dengan anjing."
          },
          { 
            kata: "買い物 (かいもの)", 
            romaji: "kaimono", 
            arti: "belanja", 
            contoh_jp: "スーパーで買い物します。", 
            contoh_rm: "Suupaa de kaimono shimasu.", 
            contoh_id: "Saya belanja di supermarket.",
            contoh2_jp: "週末に買い物に行きます。",
            contoh2_rm: "Shuumatsu ni kaimono ni ikimasu.",
            contoh2_id: "Akhir pekan saya pergi belanja."
          }
        ]
      }
    ]
  },
  {
    key: "makanan-minuman",
    no: 3,
    nama: "Makanan & Minuman",
    icon: "&#127858;",
    contoh: "ご飯・水・肉・魚",
    subkategori: [
      {
        nama: "Makanan Pokok",
        kata: [
          { 
            kata: "ご飯 (ごはん)", 
            romaji: "gohan", 
            arti: "nasi", 
            penggunaan: "Bisa berarti 'nasi' atau 'makan' secara umum, tergantung konteks.", 
            contoh_jp: "ご飯を食べます。", 
            contoh_rm: "Gohan o tabemasu.", 
            contoh_id: "Saya makan nasi.",
            contoh2_jp: "朝ご飯はパンです。",
            contoh2_rm: "Asagohan wa pan desu.",
            contoh2_id: "Sarapan saya roti."
          },
          { 
            kata: "パン", 
            romaji: "pan", 
            arti: "roti", 
            contoh_jp: "朝食にパンを食べます。", 
            contoh_rm: "Choushoku ni pan o tabemasu.", 
            contoh_id: "Saya makan roti untuk sarapan.",
            contoh2_jp: "パンを買いに行きます。",
            contoh2_rm: "Pan o kai ni ikimasu.",
            contoh2_id: "Saya pergi membeli roti."
          },
          { 
  kata: "おにぎり", 
  romaji: "onigiri", 
  arti: "nasi kepal", 
  penggunaan: "Dipakai untuk menyebut nasi yang dibentuk bulat/segitiga dan dibungkus nori. Makanan praktis khas Jepang.", 
  contoh_jp: "コンビニでおにぎりを買います。", 
  contoh_rm: "Konbini de onigiri o kaimasu.", 
  contoh_id: "Saya membeli nasi kepal di minimarket.",
  contoh2_jp: "おにぎりを二つ食べました。",
  contoh2_rm: "Onigiri o futatsu tabemashita.",
  contoh2_id: "Saya makan dua nasi kepal."
},
{ 
  kata: "カレー", 
  romaji: "karee", 
  arti: "kari", 
  penggunaan: "Dipakai untuk menyebut masakan kari, salah satu makanan favorit di Jepang.", 
  contoh_jp: "今日の晩ご飯はカレーです。", 
  contoh_rm: "Kyou no bangohan wa karee desu.", 
  contoh_id: "Makan malam hari ini kari.",
  contoh2_jp: "カレーが好きです。",
  contoh2_rm: "Karee ga suki desu.",
  contoh2_id: "Saya suka kari."
},
          { 
            kata: "麺 (めん)", 
            romaji: "men", 
            arti: "mie", 
            penggunaan: "Dipakai untuk menyebut mie secara umum, termasuk ramen, udon, soba.", 
            contoh_jp: "麺が好きです。", 
            contoh_rm: "Men ga suki desu.", 
            contoh_id: "Saya suka mie.",
            contoh2_jp: "麺を茹でます。",
            contoh2_rm: "Men o yudemasu.", 
            contoh2_id: "Saya merebus mie."
          },
          { 
            kata: "うどん", 
            romaji: "udon", 
            arti: "udon", 
            contoh_jp: "うどんを食べます。", 
            contoh_rm: "Udon o tabemasu.", 
            contoh_id: "Saya makan udon.",
            contoh2_jp: "温かいうどんが好きです。",
            contoh2_rm: "Atatakai udon ga suki desu.",
            contoh2_id: "Saya suka udon hangat."
          },
          { 
            kata: "ラーメン", 
            romaji: "raamen", 
            arti: "ramen", 
            contoh_jp: "ラーメンを食べに行きます。", 
            contoh_rm: "Raamen o tabe ni ikimasu.", 
            contoh_id: "Saya pergi makan ramen.",
            contoh2_jp: "このラーメンは美味しいです。",
            contoh2_rm: "Kono raamen wa oishii desu.",
            contoh2_id: "Ramen ini enak."
          }
        ]
      },
      {
        nama: "Minuman",
        kata: [
          { 
            kata: "水 (みず)", 
            romaji: "mizu", 
            arti: "air", 
            contoh_jp: "水を飲みます。", 
            contoh_rm: "Mizu o nomimasu.", 
            contoh_id: "Saya minum air.",
            contoh2_jp: "冷たい水をください。",
            contoh2_rm: "Tsumetai mizu o kudasai.",
            contoh2_id: "Tolong beri air dingin."
          },
          { 
            kata: "お茶 (おちゃ)", 
            romaji: "ocha", 
            arti: "teh", 
            contoh_jp: "温かいお茶です。", 
            contoh_rm: "Atatakai ocha desu.", 
            contoh_id: "Ini teh hangat.",
            contoh2_jp: "毎朝お茶を飲みます。",
            contoh2_rm: "Maiasa ocha o nomimasu.",
            contoh2_id: "Setiap pagi saya minum teh."
          },
          { 
            kata: "コーヒー", 
            romaji: "koohii", 
            arti: "kopi", 
            contoh_jp: "コーヒーを飲みます。", 
            contoh_rm: "Koohii o nomimasu.", 
            contoh_id: "Saya minum kopi.",
            contoh2_jp: "コーヒーに砂糖を入れます。",
            contoh2_rm: "Koohii ni satou o iremasu.",
            contoh2_id: "Saya menambahkan gula ke kopi."
          },
          { 
            kata: "牛乳 (ぎゅうにゅう)", 
            romaji: "gyuunyuu", 
            arti: "susu sapi", 
            contoh_jp: "毎朝牛乳を飲みます。", 
            contoh_rm: "Maiasa gyuunyuu o nomimasu.", 
            contoh_id: "Setiap pagi saya minum susu.",
            contoh2_jp: "牛乳を買ってきます。",
            contoh2_rm: "Gyuunyuu o katte kimasu.",
            contoh2_id: "Saya akan membeli susu."
          },
          { 
            kata: "ジュース", 
            romaji: "juusu", 
            arti: "jus", 
            contoh_jp: "オレンジジュースが好きです。", 
            contoh_rm: "Orenji juusu ga suki desu.", 
            contoh_id: "Saya suka jus jeruk.",
            contoh2_jp: "ジュースを一本ください。",
            contoh2_rm: "Juusu o ippon kudasai.",
            contoh2_id: "Tolong beri satu botol jus."
          }
        ]
      },
      {
        nama: "Buah",
        kata: [
          { 
            kata: "果物 (くだもの)", 
            romaji: "kudamono", 
            arti: "buah-buahan", 
            contoh_jp: "果物は甘いです。", 
            contoh_rm: "Kudamono wa amai desu.", 
            contoh_id: "Buah-buahan rasanya manis.",
            contoh2_jp: "果物を買いに行きます。",
            contoh2_rm: "Kudamono o kai ni ikimasu.",
            contoh2_id: "Saya pergi membeli buah."
          },
          { 
            kata: "りんご", 
            romaji: "ringo", 
            arti: "apel", 
            contoh_jp: "りんごを一つ食べます。", 
            contoh_rm: "Ringo o hitotsu tabemasu.", 
            contoh_id: "Saya makan satu apel.",
            contoh2_jp: "赤いりんごです。",
            contoh2_rm: "Akai ringo desu.",
            contoh2_id: "Ini apel merah."
          },
          { 
            kata: "みかん", 
            romaji: "mikan", 
            arti: "jeruk", 
            contoh_jp: "みかんは冬の果物です。", 
            contoh_rm: "Mikan wa fuyu no kudamono desu.", 
            contoh_id: "Jeruk adalah buah musim dingin.",
            contoh2_jp: "みかんを三つ買いました。",
            contoh2_rm: "Mikan o mittsu kaimashita.",
            contoh2_id: "Saya membeli tiga jeruk."
          },
          { 
            kata: "バナナ", 
            romaji: "banana", 
            arti: "pisang", 
            contoh_jp: "バナナを買いました。", 
            contoh_rm: "Banana o kaimashita.", 
            contoh_id: "Saya telah membeli pisang.",
            contoh2_jp: "バナナは甘いです。",
            contoh2_rm: "Banana wa amai desu.",
            contoh2_id: "Pisang itu manis."
          },
          { 
            kata: "いちご", 
            romaji: "ichigo", 
            arti: "stroberi", 
            contoh_jp: "いちごが大好きです。", 
            contoh_rm: "Ichigo ga daisuki desu.", 
            contoh_id: "Saya sangat suka stroberi.",
            contoh2_jp: "いちごを食べました。",
            contoh2_rm: "Ichigo o tabemashita.",
            contoh2_id: "Saya makan stroberi."
          }
        ]
      },
      {
        nama: "Sayur",
        kata: [
          { 
            kata: "野菜 (やさい)", 
            romaji: "yasai", 
            arti: "sayur", 
            contoh_jp: "野菜を食べましょう。", 
            contoh_rm: "Yasai o tabemashou.", 
            contoh_id: "Mari makan sayur.",
            contoh2_jp: "野菜が体にいいです。",
            contoh2_rm: "Yasai ga karada ni ii desu.",
            contoh2_id: "Sayur baik untuk tubuh."
          },
          { 
            kata: "トマト", 
            romaji: "tomato", 
            arti: "tomat", 
            contoh_jp: "トマトは赤いです。", 
            contoh_rm: "Tomato wa akai desu.", 
            contoh_id: "Tomat berwarna merah.",
            contoh2_jp: "トマトが好きではありません。",
            contoh2_rm: "Tomato ga suki dewa arimasen.",
            contoh2_id: "Saya tidak suka tomat."
          },
          { 
            kata: "にんじん", 
            romaji: "ninjin", 
            arti: "wortel", 
            contoh_jp: "にんじんを切ります。", 
            contoh_rm: "Ninjin o kirimasu.", 
            contoh_id: "Saya memotong wortel.",
            contoh2_jp: "にんじんはオレンジ色です。",
            contoh2_rm: "Ninjin wa orenji iro desu.",
            contoh2_id: "Wortel berwarna oranye."
          },
          { 
            kata: "たまねぎ", 
            romaji: "tamanegi", 
            arti: "bawang bombai", 
            contoh_jp: "たまねぎを買います。", 
            contoh_rm: "Tamanegi o kaimasu.", 
            contoh_id: "Saya membeli bawang bombai.",
            contoh2_jp: "たまねぎを切ると泣きます。",
            contoh2_rm: "Tamanegi o kiru to nakimasu.",
            contoh2_id: "Kalau memotong bawang bombai, jadi menangis."
          },
          { 
            kata: "じゃがいも", 
            romaji: "jagaimo", 
            arti: "kentang", 
            contoh_jp: "じゃがいもを煮ます。", 
            contoh_rm: "Jagaimo o nimasu.", 
            contoh_id: "Saya merebus kentang.",
            contoh2_jp: "じゃがいもでポテトサラダを作ります。",
            contoh2_rm: "Jagaimo de poteto sarada o tsukurimasu.",
            contoh2_id: "Saya membuat salad kentang dari kentang."
          }
        ]
      },
      {
        nama: "Lauk",
        kata: [
          { 
            kata: "肉 (にく)", 
            romaji: "niku", 
            arti: "daging", 
            contoh_jp: "肉を焼きます。", 
            contoh_rm: "Niku o yakimasu.", 
            contoh_id: "Saya memanggang daging.",
            contoh2_jp: "肉が好きです。",
            contoh2_rm: "Niku ga suki desu.",
            contoh2_id: "Saya suka daging."
          },
          { 
            kata: "牛肉 (ぎゅうにく)", 
            romaji: "gyuuniku", 
            arti: "daging sapi", 
            contoh_jp: "牛肉を買いました。", 
            contoh_rm: "Gyuuniku o kaimashita.", 
            contoh_id: "Saya membeli daging sapi.",
            contoh2_jp: "牛肉は高いです。",
            contoh2_rm: "Gyuuniku wa takai desu.",
            contoh2_id: "Daging sapi mahal."
          },
          { 
            kata: "鶏肉 (とりにく)", 
            romaji: "toriniku", 
            arti: "daging ayam", 
            contoh_jp: "鶏肉を買います。", 
            contoh_rm: "Toriniku o kaimasu.", 
            contoh_id: "Saya membeli daging ayam.",
            contoh2_jp: "鶏肉で料理を作ります。",
            contoh2_rm: "Toriniku de ryouri o tsukurimasu.",
            contoh2_id: "Saya membuat masakan dari daging ayam."
          },
          { 
  kata: "たまごやき", 
  romaji: "tamagoyaki", 
  arti: "telur dadar", 
  penggunaan: "Dipakai untuk menyebut telur dadar gulung khas Jepang. Biasanya ditulis pakai hiragana.", 
  contoh_jp: "たまごやきを作ります。", 
  contoh_rm: "Tamagoyaki o tsukurimasu.", 
  contoh_id: "Saya membuat telur dadar.",
  contoh2_jp: "たまごやきが好きです。",
  contoh2_rm: "Tamagoyaki ga suki desu.",
  contoh2_id: "Saya suka telur dadar."
},
{ 
  kata: "アイスクリーム", 
  romaji: "aisukuriimu", 
  arti: "es krim", 
  penggunaan: "Kata serapan dari bahasa Inggris 'ice cream'. Dipakai untuk menyebut es krim.", 
  contoh_jp: "夏にアイスクリームを食べます。", 
  contoh_rm: "Natsu ni aisukuriimu o tabemasu.", 
  contoh_id: "Musim panas saya makan es krim.",
  contoh2_jp: "アイスクリームが好きです。",
  contoh2_rm: "Aisukuriimu ga suki desu.",
  contoh2_id: "Saya suka es krim."
},
          { 
            kata: "魚 (さかな)", 
            romaji: "sakana", 
            arti: "ikan", 
            contoh_jp: "魚を焼きます。", 
            contoh_rm: "Sakana o yakimasu.", 
            contoh_id: "Saya memanggang ikan.",
            contoh2_jp: "魚が好きです。",
            contoh2_rm: "Sakana ga suki desu.",
            contoh2_id: "Saya suka ikan."
          },
          { 
            kata: "卵 (たまご)", 
            romaji: "tamago", 
            arti: "telur", 
            contoh_jp: "卵を買います。", 
            contoh_rm: "Tamago o kaimasu.", 
            contoh_id: "Saya membeli telur.",
            contoh2_jp: "卵焼きが好きです。",
            contoh2_rm: "Tamagoyaki ga suki desu.",
            contoh2_id: "Saya suka telur dadar."
          }
        ]
      },
      {
        nama: "Bumbu & Rempah",
        kata: [
          { 
            kata: "塩 (しお)", 
            romaji: "shio", 
            arti: "garam", 
            contoh_jp: "塩を入れます。", 
            contoh_rm: "Shio o iremasu.", 
            contoh_id: "Saya menambahkan garam.",
            contoh2_jp: "塩が足りません。",
            contoh2_rm: "Shio ga tarimasen.",
            contoh2_id: "Garamnya kurang."
          },
          { 
            kata: "砂糖 (さとう)", 
            romaji: "satou", 
            arti: "gula", 
            contoh_jp: "砂糖を入れます。", 
            contoh_rm: "Satou o iremasu.", 
            contoh_id: "Saya menambahkan gula.",
            contoh2_jp: "コーヒーに砂糖を入れます。",
            contoh2_rm: "Koohii ni satou o iremasu.",
            contoh2_id: "Saya menambahkan gula ke kopi."
          },
          { 
            kata: "醤油 (しょうゆ)", 
            romaji: "shouyu", 
            arti: "kecap asin", 
            penggunaan: "Dipakai untuk menyebut kecap asin khas Jepang, bukan kecap manis Indonesia.", 
            contoh_jp: "醤油をかけます。", 
            contoh_rm: "Shouyu o kakemasu.", 
            contoh_id: "Saya menuangkan kecap asin.",
            contoh2_jp: "醤油は日本料理に大切です。",
            contoh2_rm: "Shouyu wa Nihon ryouri ni taisetsu desu.",
            contoh2_id: "Kecap asin penting untuk masakan Jepang."
          },
          { 
            kata: "味噌 (みそ)", 
            romaji: "miso", 
            arti: "miso", 
            penggunaan: "Dipakai untuk menyebut pasta kedelai fermentasi khas Jepang, bahan utama sup miso.", 
            contoh_jp: "味噌汁を飲みます。", 
            contoh_rm: "Misoshiru o nomimasu.", 
            contoh_id: "Saya minum sup miso.",
            contoh2_jp: "味噌は大豆で作ります。",
            contoh2_rm: "Miso wa daizu de tsukurimasu.",
            contoh2_id: "Miso terbuat dari kedelai."
          },
          { 
            kata: "胡椒 (こしょう)", 
            romaji: "koshou", 
            arti: "merica", 
            contoh_jp: "胡椒をかけます。", 
            contoh_rm: "Koshou o kakemasu.", 
            contoh_id: "Saya menaburkan merica.",
            contoh2_jp: "胡椒が好きです。",
            contoh2_rm: "Koshou ga suki desu.",
            contoh2_id: "Saya suka merica."
          }
        ]
      },
      {
        nama: "Peralatan Makan",
        kata: [
          { 
            kata: "お皿 (おさら)", 
            romaji: "osara", 
            arti: "piring", 
            contoh_jp: "お皿を洗います。", 
            contoh_rm: "Osara o araimasu.", 
            contoh_id: "Saya mencuci piring.",
            contoh2_jp: "お皿を三枚ください。",
            contoh2_rm: "Osara o sanmai kudasai.",
            contoh2_id: "Tolong beri tiga piring."
          },
          { 
            kata: "コップ", 
            romaji: "koppu", 
            arti: "cangkir/gelas", 
            contoh_jp: "コップに水を入れます。", 
            contoh_rm: "Koppu ni mizu o iremasu.", 
            contoh_id: "Saya menuangkan air ke gelas.",
            contoh2_jp: "コップを割りました。",
            contoh2_rm: "Koppu o warimashita.",
            contoh2_id: "Saya memecahkan gelas."
          },
          { 
            kata: "箸 (はし)", 
            romaji: "hashi", 
            arti: "sumpit", 
            contoh_jp: "箸で食べます。", 
            contoh_rm: "Hashi de tabemasu.", 
            contoh_id: "Saya makan pakai sumpit.",
            contoh2_jp: "箸が上手に使えません。",
            contoh2_rm: "Hashi ga jouzu ni tsukaemasen.",
            contoh2_id: "Saya belum bisa pakai sumpit dengan baik."
          },
          { 
            kata: "スプーン", 
            romaji: "supuun", 
            arti: "sendok", 
            contoh_jp: "スプーンで食べます。", 
            contoh_rm: "Supuun de tabemasu.", 
            contoh_id: "Saya makan pakai sendok.",
            contoh2_jp: "スプーンを一つください。",
            contoh2_rm: "Supuun o hitotsu kudasai.",
            contoh2_id: "Tolong beri satu sendok."
          },
          { 
            kata: "フォーク", 
            romaji: "fooku", 
            arti: "garpu", 
            contoh_jp: "フォークを使います。", 
            contoh_rm: "Fooku o tsukaimasu.", 
            contoh_id: "Saya memakai garpu.",
            contoh2_jp: "フォークとナイフをください。",
            contoh2_rm: "Fooku to naifu o kudasai.",
            contoh2_id: "Tolong beri garpu dan pisau."
          }
        ]
      }
    ]
  },
  {
    key: "hewan-alam",
    no: 4,
    nama: "Hewan & Alam",
    icon: "&#127794;",
    contoh: "犬・猫・山・川",
    subkategori: [
      {
        nama: "Hewan",
        kata: [
          { 
            kata: "動物 (どうぶつ)", 
            romaji: "doubutsu", 
            arti: "hewan", 
            contoh_jp: "動物が好きです。", 
            contoh_rm: "Doubutsu ga suki desu.", 
            contoh_id: "Saya suka hewan.",
            contoh2_jp: "動物園へ行きます。",
            contoh2_rm: "Doubutsuen e ikimasu.",
            contoh2_id: "Saya pergi ke kebun binatang."
          },
          { 
            kata: "犬 (いぬ)", 
            romaji: "inu", 
            arti: "anjing", 
            contoh_jp: "犬が走っています。", 
            contoh_rm: "Inu ga hashitte imasu.", 
            contoh_id: "Anjing sedang berlari.",
            contoh2_jp: "毎朝犬と散歩します。",
            contoh2_rm: "Maiasa inu to sanpo shimasu.",
            contoh2_id: "Setiap pagi saya jalan-jalan dengan anjing."
          },
          { 
            kata: "猫 (ねこ)", 
            romaji: "neko", 
            arti: "kucing", 
            contoh_jp: "猫が寝ています。", 
            contoh_rm: "Neko ga nette imasu.", 
            contoh_id: "Kucing sedang tidur.",
            contoh2_jp: "猫が好きです。",
            contoh2_rm: "Neko ga suki desu.",
            contoh2_id: "Saya suka kucing."
          },
          { 
            kata: "鳥 (とり)", 
            romaji: "tori", 
            arti: "burung", 
            contoh_jp: "鳥が飛んでいます。", 
            contoh_rm: "Tori ga tonde imasu.", 
            contoh_id: "Burung sedang terbang.",
            contoh2_jp: "庭に鳥がいます。",
            contoh2_rm: "Niwa ni tori ga imasu.",
            contoh2_id: "Ada burung di halaman."
          },
          { 
            kata: "魚 (さかな)", 
            romaji: "sakana", 
            arti: "ikan", 
            contoh_jp: "魚を焼きます。", 
            contoh_rm: "Sakana o yakimasu.", 
            contoh_id: "Saya memanggang ikan.",
            contoh2_jp: "海で魚を見ました。",
            contoh2_rm: "Umi de sakana o mimashita.",
            contoh2_id: "Saya melihat ikan di laut."
          },
          { 
            kata: "馬 (うま)", 
            romaji: "uma", 
            arti: "kuda", 
            contoh_jp: "馬が走っています。", 
            contoh_rm: "Uma ga hashitte imasu.", 
            contoh_id: "Kuda sedang berlari.",
            contoh2_jp: "馬に乗りたいです。",
            contoh2_rm: "Uma ni noritai desu.",
            contoh2_id: "Saya ingin menunggang kuda."
          }
        ]
      },
      {
        nama: "Cuaca",
        kata: [
          { 
            kata: "天気 (てんき)", 
            romaji: "tenki", 
            arti: "cuaca", 
            contoh_jp: "今日はいい天気です。", 
            contoh_rm: "Kyou wa ii tenki desu.", 
            contoh_id: "Hari ini cuacanya bagus.",
            contoh2_jp: "明日の天気はどうですか。",
            contoh2_rm: "Ashita no tenki wa dou desu ka.",
            contoh2_id: "Bagaimana cuaca besok?"
          },
          { 
            kata: "晴れ (はれ)", 
            romaji: "hare", 
            arti: "cerah", 
            contoh_jp: "今日は晴れです。", 
            contoh_rm: "Kyou wa hare desu.", 
            contoh_id: "Hari ini cerah.",
            contoh2_jp: "晴れの日が好きです。",
            contoh2_rm: "Hare no hi ga suki desu.",
            contoh2_id: "Saya suka hari yang cerah."
          },
          { 
            kata: "雨 (あめ)", 
            romaji: "ame", 
            arti: "hujan", 
            contoh_jp: "雨が降っています。", 
            contoh_rm: "Ame ga futte imasu.", 
            contoh_id: "Hujan sedang turun.",
            contoh2_jp: "傘を持って行きます。",
            contoh2_rm: "Kasa o motte ikimasu.",
            contoh2_id: "Saya pergi membawa payung."
          },
          { 
            kata: "雪 (ゆき)", 
            romaji: "yuki", 
            arti: "salju", 
            contoh_jp: "冬に雪が降ります。", 
            contoh_rm: "Fuyu ni yuki ga furimasu.", 
            contoh_id: "Salju turun di musim dingin.",
            contoh2_jp: "雪が好きです。",
            contoh2_rm: "Yuki ga suki desu.",
            contoh2_id: "Saya suka salju."
          },
          { 
            kata: "風 (かぜ)", 
            romaji: "kaze", 
            arti: "angin", 
            penggunaan: "Perhatikan: 風 (かぜ) = angin. Kalau 風邪 (かぜ) = flu. Kanjinya beda.", 
            contoh_jp: "強い風が吹きます。", 
            contoh_rm: "Tsuyoi kaze ga fukimasu.", 
            contoh_id: "Angin kencang bertiup.",
            contoh2_jp: "今日は風が強いです。",
            contoh2_rm: "Kyou wa kaze ga tsuyoi desu.",
            contoh2_id: "Hari ini anginnya kencang."
          }
        ]
      },
      {
        nama: "Musim",
        kata: [
          { 
            kata: "春 (はる)", 
            romaji: "haru", 
            arti: "musim semi", 
            contoh_jp: "春は暖かくなります。", 
            contoh_rm: "Haru wa atatakaku narimasu.", 
            contoh_id: "Musim semi menjadi hangat.",
            contoh2_jp: "春に桜が咲きます。",
            contoh2_rm: "Haru ni sakura ga sakimasu.",
            contoh2_id: "Bunga sakura mekar di musim semi."
          },
          { 
            kata: "夏 (なつ)", 
            romaji: "natsu", 
            arti: "musim panas", 
            contoh_jp: "夏はとても暑いです。", 
            contoh_rm: "Natsu wa totemo atsui desu.", 
            contoh_id: "Musim panas sangat panas.",
            contoh2_jp: "夏に海へ行きます。",
            contoh2_rm: "Natsu ni umi e ikimasu.",
            contoh2_id: "Saya pergi ke laut di musim panas."
          },
          { 
            kata: "秋 (あき)", 
            romaji: "aki", 
            arti: "musim gugur", 
            contoh_jp: "秋は涼しいです。", 
            contoh_rm: "Aki wa suzushii desu.", 
            contoh_id: "Musim gugur udaranya sejuk.",
            contoh2_jp: "秋に紅葉を見ます。",
            contoh2_rm: "Aki ni kouyou o mimasu.",
            contoh2_id: "Saya melihat daun merah di musim gugur."
          },
          { 
            kata: "冬 (ふゆ)", 
            romaji: "fuyu", 
            arti: "musim dingin", 
            contoh_jp: "冬は寒いです。", 
            contoh_rm: "Fuyu wa samui desu.", 
            contoh_id: "Musim dingin dingin.",
            contoh2_jp: "冬に雪が降ります。",
            contoh2_rm: "Fuyu ni yuki ga furimasu.",
            contoh2_id: "Salju turun di musim dingin."
          },
          { 
            kata: "梅雨 (つゆ)", 
            romaji: "tsuyu", 
            arti: "musim hujan", 
            penggunaan: "Dipakai untuk menyebut musim hujan di Jepang sekitar Juni–Juli.", 
            contoh_jp: "梅雨は雨が多いです。", 
            contoh_rm: "Tsuyu wa ame ga ooi desu.", 
            contoh_id: "Musim hujan banyak hujannya.",
            contoh2_jp: "梅雨の時はかさが大切です。",
            contoh2_rm: "Tsuyu no toki wa kasa ga taisetsu desu.",
            contoh2_id: "Saat musim hujan, payung itu penting."
          }
        ]
      },
      {
        nama: "Geografi",
        kata: [
          { 
            kata: "山 (やま)", 
            romaji: "yama", 
            arti: "gunung", 
            contoh_jp: "山に登ります。", 
            contoh_rm: "Yama ni noborimasu.", 
            contoh_id: "Saya mendaki gunung.",
            contoh2_jp: "あの山は高いです。",
            contoh2_rm: "Ano yama wa takai desu.",
            contoh2_id: "Gunung itu tinggi."
          },
          { 
            kata: "川 (かわ)", 
            romaji: "kawa", 
            arti: "sungai", 
            contoh_jp: "川で泳ぎます。", 
            contoh_rm: "Kawa de oyogimasu.", 
            contoh_id: "Saya berenang di sungai.",
            contoh2_jp: "川の水は綺麗です。",
            contoh2_rm: "Kawa no mizu wa kirei desu.",
            contoh2_id: "Air sungainya bersih."
          },
          { 
            kata: "海 (うみ)", 
            romaji: "umi", 
            arti: "laut", 
            contoh_jp: "海へ行きたいです。", 
            contoh_rm: "Umi e ikitai desu.", 
            contoh_id: "Saya ingin pergi ke laut.",
            contoh2_jp: "夏に海で泳ぎます。",
            contoh2_rm: "Natsu ni umi de oyogimasu.",
            contoh2_id: "Musim panas saya berenang di laut."
          },
          { 
            kata: "空 (そら)", 
            romaji: "sora", 
            arti: "langit", 
            contoh_jp: "空が青いです。", 
            contoh_rm: "Sora ga aoi desu.", 
            contoh_id: "Langit berwarna biru.",
            contoh2_jp: "空に星が見えます。",
            contoh2_rm: "Sora ni hoshi ga miemasu.",
            contoh2_id: "Bintang terlihat di langit."
          },
          { 
            kata: "池 (いけ)", 
            romaji: "ike", 
            arti: "kolam", 
            contoh_jp: "池に魚がいます。", 
            contoh_rm: "Ike ni sakana ga imasu.", 
            contoh_id: "Ada ikan di kolam.",
            contoh2_jp: "公園の池は綺麗です。",
            contoh2_rm: "Kouen no ike wa kirei desu.",
            contoh2_id: "Kolam di taman itu indah."
          }
        ]
      },
      {
        nama: "Tanaman",
        kata: [
          { 
            kata: "木 (き)", 
            romaji: "ki", 
            arti: "pohon", 
            contoh_jp: "大きな木があります。", 
            contoh_rm: "Ooki na ki ga arimasu.", 
            contoh_id: "Ada pohon yang besar.",
            contoh2_jp: "庭に木を植えます。",
            contoh2_rm: "Niwa ni ki o uemasu.",
            contoh2_id: "Saya menanam pohon di halaman."
          },
          { 
            kata: "花 (はな)", 
            romaji: "hana", 
            arti: "bunga", 
            contoh_jp: "綺麗な花ですね。", 
            contoh_rm: "Kirei na hana desu ne.", 
            contoh_id: "Bunganya indah ya.",
            contoh2_jp: "花を買いました。",
            contoh2_rm: "Hana o kaimashita.",
            contoh2_id: "Saya membeli bunga."
          },
          { 
            kata: "桜 (さくら)", 
            romaji: "sakura", 
            arti: "bunga sakura", 
            penggunaan: "Dipakai untuk menyebut bunga sakura, ikon musim semi Jepang.", 
            contoh_jp: "桜が咲きました。", 
            contoh_rm: "Sakura ga sakimashita.", 
            contoh_id: "Bunga sakura telah mekar.",
            contoh2_jp: "春に桜を見ます。",
            contoh2_rm: "Haru ni sakura o mimasu.",
            contoh2_id: "Musim semi saya melihat sakura."
          },
          { 
            kata: "草 (くさ)", 
            romaji: "kusa", 
            arti: "rumput", 
            contoh_jp: "草を切ります。", 
            contoh_rm: "Kusa o kirimasu.", 
            contoh_id: "Saya memotong rumput.",
            contoh2_jp: "庭に草がたくさんあります。",
            contoh2_rm: "Niwa ni kusa ga takusan arimasu.",
            contoh2_id: "Di halaman banyak rumput."
          },
          { 
            kata: "葉 (は)", 
            romaji: "ha", 
            arti: "daun", 
            contoh_jp: "木の葉が落ちます。", 
            contoh_rm: "Ki no ha ga ochimasu.", 
            contoh_id: "Daun pohon berjatuhan.",
            contoh2_jp: "葉が赤くなりました。",
            contoh2_rm: "Ha ga akaku narimashita.",
            contoh2_id: "Daunnya menjadi merah."
          }
        ]
      },
      {
        nama: "Bencana Alam",
        kata: [
          { 
            kata: "地震 (じしん)", 
            romaji: "jishin", 
            arti: "gempa", 
            penggunaan: "Dipakai untuk menyebut gempa bumi. Sering muncul di soal JFT-Basic karena penting untuk kehidupan di Jepang.", 
            contoh_jp: "地震がありました。", 
            contoh_rm: "Jishin ga arimashita.", 
            contoh_id: "Telah terjadi gempa.",
            contoh2_jp: "地震の時はテーブルの下に入ります。",
            contoh2_rm: "Jishin no toki wa teeburu no shita ni hairimasu.",
            contoh2_id: "Saat gempa, masuk ke bawah meja."
          },
          { 
            kata: "台風 (たいふう)", 
            romaji: "taifuu", 
            arti: "topan", 
            contoh_jp: "台風が来ます。", 
            contoh_rm: "Taifuu ga kimasu.", 
            contoh_id: "Topan akan datang.",
            contoh2_jp: "台風の日は外へ出ません。",
            contoh2_rm: "Taifuu no hi wa soto e demasen.",
            contoh2_id: "Di hari topan, tidak keluar rumah."
          },
          { 
            kata: "火事 (かじ)", 
            romaji: "kaji", 
            arti: "kebakaran", 
            contoh_jp: "火事がありました。", 
            contoh_rm: "Kaji ga arimashita.", 
            contoh_id: "Telah terjadi kebakaran.",
            contoh2_jp: "火事の時は119番をかけます。",
            contoh2_rm: "Kaji no toki wa hyakujuu kyuuban o kakemasu.",
            contoh2_id: "Saat kebakaran, telepon 119."
          },
          { 
            kata: "洪水 (こうずい)", 
            romaji: "kouzui", 
            arti: "banjir", 
            contoh_jp: "雨で洪水になりました。", 
            contoh_rm: "Ame de kouzui ni narimashita.", 
            contoh_id: "Karena hujan, terjadi banjir.",
            contoh2_jp: "洪水は危ないです。",
            contoh2_rm: "Kouzui wa abunai desu.",
            contoh2_id: "Banjir itu berbahaya."
          },
          { 
            kata: "避難 (ひなん)", 
            romaji: "hinan", 
            arti: "evakuasi", 
            penggunaan: "Dipakai untuk menyebut kegiatan mengungsi saat bencana. Sering muncul di soal JFT-Basic.", 
            contoh_jp: "すぐに避難してください。", 
            contoh_rm: "Sugu ni hinan shite kudasai.", 
            contoh_id: "Segera lakukan evakuasi.",
            contoh2_jp: "避難所はどこですか。",
            contoh2_rm: "Hinanjo wa doko desu ka.",
            contoh2_id: "Di mana tempat evakuasi?"
          }
        ]
      }
    ]
  },
    {
    key: "waktu-tanggal",
    no: 5,
    nama: "Waktu & Tanggal",
    icon: "&#128197;",
    contoh: "今日・明日・朝・夜",
    subkategori: [
      {
        nama: "Hari",
        kata: [
          { 
            kata: "日曜日 (にちようび)", 
            romaji: "nichiyoubi", 
            arti: "hari Minggu", 
            contoh_jp: "日曜日に休みます。", 
            contoh_rm: "Nichiyoubi ni yasumimasu.", 
            contoh_id: "Saya libur di hari Minggu.",
            contoh2_jp: "日曜日に友達に会います。",
            contoh2_rm: "Nichiyoubi ni tomodachi ni aimasu.",
            contoh2_id: "Hari Minggu saya bertemu teman."
          },
          { 
            kata: "月曜日 (げつようび)", 
            romaji: "getsuyoubi", 
            arti: "hari Senin", 
            contoh_jp: "月曜日に学校へ行きます。", 
            contoh_rm: "Getsuyoubi ni gakkou e ikimasu.", 
            contoh_id: "Hari Senin saya pergi ke sekolah.",
            contoh2_jp: "月曜日は忙しいです。",
            contoh2_rm: "Getsuyoubi wa isogashii desu.",
            contoh2_id: "Hari Senin saya sibuk."
          },
          { 
            kata: "火曜日 (かようび)", 
            romaji: "kayoubi", 
            arti: "hari Selasa", 
            contoh_jp: "火曜日に会議があります。", 
            contoh_rm: "Kayoubi ni kaigi ga arimasu.", 
            contoh_id: "Hari Selasa ada rapat.",
            contoh2_jp: "火曜日は暇です。",
            contoh2_rm: "Kayoubi wa hima desu.",
            contoh2_id: "Hari Selasa saya senggang."
          },
          { 
            kata: "水曜日 (すいようび)", 
            romaji: "suiyoubi", 
            arti: "hari Rabu", 
            contoh_jp: "水曜日に日本語を勉強します。", 
            contoh_rm: "Suiyoubi ni Nihongo o benkyou shimasu.", 
            contoh_id: "Hari Rabu saya belajar bahasa Jepang.",
            contoh2_jp: "水曜日は休みです。",
            contoh2_rm: "Suiyoubi wa yasumi desu.",
            contoh2_id: "Hari Rabu libur."
          },
          { 
            kata: "木曜日 (もくようび)", 
            romaji: "mokuyoubi", 
            arti: "hari Kamis", 
            contoh_jp: "木曜日にテストがあります。", 
            contoh_rm: "Mokuyoubi ni tesuto ga arimasu.", 
            contoh_id: "Hari Kamis ada ujian.",
            contoh2_jp: "木曜日は天気がいいです。",
            contoh2_rm: "Mokuyoubi wa tenki ga ii desu.",
            contoh2_id: "Hari Kamis cuacanya bagus."
          },
          { 
            kata: "金曜日 (きんようび)", 
            romaji: "kinyoubi", 
            arti: "hari Jumat", 
            contoh_jp: "金曜日の夜は暇です。", 
            contoh_rm: "Kinyoubi no yoru wa hima desu.", 
            contoh_id: "Jumat malam saya senggang.",
            contoh2_jp: "金曜日に映画を見ます。",
            contoh2_rm: "Kinyoubi ni eiga o mimasu.",
            contoh2_id: "Hari Jumat saya menonton film."
          },
          { 
            kata: "土曜日 (どようび)", 
            romaji: "doyoubi", 
            arti: "hari Sabtu", 
            contoh_jp: "土曜日に買い物します。", 
            contoh_rm: "Doyoubi ni kaimono shimasu.", 
            contoh_id: "Hari Sabtu saya belanja.",
            contoh2_jp: "土曜日は友達と遊びます。",
            contoh2_rm: "Doyoubi wa tomodachi to asobimasu.",
            contoh2_id: "Hari Sabtu saya bermain dengan teman."
          }
        ]
      },
      {
        nama: "Bulan",
        kata: [
          { 
            kata: "一月 (いちがつ)", 
            romaji: "ichigatsu", 
            arti: "bulan Januari", 
            contoh_jp: "一月は寒いです。", 
            contoh_rm: "Ichigatsu wa samui desu.", 
            contoh_id: "Bulan Januari dingin.",
            contoh2_jp: "一月に日本へ行きます。",
            contoh2_rm: "Ichigatsu ni Nihon e ikimasu.",
            contoh2_id: "Bulan Januari saya pergi ke Jepang."
          },
          { 
            kata: "四月 (しがつ)", 
            romaji: "shigatsu", 
            arti: "bulan April", 
            penggunaan: "Bulan April adalah awal tahun ajaran di Jepang, jadi sering muncul di percakapan.", 
            contoh_jp: "四月に学校が始まります。", 
            contoh_rm: "Shigatsu ni gakkou ga hajimarimasu.", 
            contoh_id: "Bulan April sekolah dimulai.",
            contoh2_jp: "四月に桜が咲きます。",
            contoh2_rm: "Shigatsu ni sakura ga sakimasu.",
            contoh2_id: "Bulan April bunga sakura mekar."
          },
          { 
            kata: "今月 (こんげつ)", 
            romaji: "kongetsu", 
            arti: "bulan ini", 
            contoh_jp: "今月は忙しいです。", 
            contoh_rm: "Kongetsu wa isogashii desu.", 
            contoh_id: "Bulan ini saya sibuk.",
            contoh2_jp: "今月の予定を確認します。",
            contoh2_rm: "Kongetsu no yotei o kakunin shimasu.",
            contoh2_id: "Saya memeriksa jadwal bulan ini."
          },
          { 
            kata: "来月 (らいげつ)", 
            romaji: "raigetsu", 
            arti: "bulan depan", 
            contoh_jp: "来月日本に行きます。", 
            contoh_rm: "Raigetsu Nihon ni ikimasu.", 
            contoh_id: "Bulan depan saya pergi ke Jepang.",
            contoh2_jp: "来月テストがあります。",
            contoh2_rm: "Raigetsu tesuto ga arimasu.",
            contoh2_id: "Bulan depan ada ujian."
          },
          { 
            kata: "先月 (せんげつ)", 
            romaji: "sengetsu", 
            arti: "bulan lalu", 
            contoh_jp: "先月日本へ行きました。", 
            contoh_rm: "Sengetsu Nihon e ikimashita.", 
            contoh_id: "Bulan lalu saya pergi ke Jepang.",
            contoh2_jp: "先月は忙しかったです。",
            contoh2_rm: "Sengetsu wa isogashikatta desu.",
            contoh2_id: "Bulan lalu saya sibuk."
          },
          { 
            kata: "何月 (なんがつ)", 
            romaji: "nangatsu", 
            arti: "bulan berapa", 
            penggunaan: "Dipakai untuk menanyakan bulan. Sering muncul di soal JFT-Basic.", 
            contoh_jp: "誕生日は何月ですか。", 
            contoh_rm: "Tanjoubi wa nangatsu desu ka.", 
            contoh_id: "Ulang tahunmu bulan berapa?",
            contoh2_jp: "今は何月ですか。",
            contoh2_rm: "Ima wa nangatsu desu ka.",
            contoh2_id: "Sekarang bulan berapa?"
          }
        ]
      },
      {
        nama: "Tahun",
        kata: [
          { 
            kata: "今年 (ことし)", 
            romaji: "kotoshi", 
            arti: "tahun ini", 
            contoh_jp: "今年二十歳になります。", 
            contoh_rm: "Kotoshi hatachi ni narimasu.", 
            contoh_id: "Tahun ini saya genap 20 tahun.",
            contoh2_jp: "今年は忙しいです。",
            contoh2_rm: "Kotoshi wa isogashii desu.",
            contoh2_id: "Tahun ini saya sibuk."
          },
          { 
            kata: "去年 (きょねん)", 
            romaji: "kyonen", 
            arti: "tahun lalu", 
            contoh_jp: "去年卒業しました。", 
            contoh_rm: "Kyonen sotsugyou shimashita.", 
            contoh_id: "Saya lulus tahun lalu.",
            contoh2_jp: "去年日本へ行きました。",
            contoh2_rm: "Kyonen Nihon e ikimashita.",
            contoh2_id: "Tahun lalu saya pergi ke Jepang."
          },
          { 
            kata: "来年 (らいねん)", 
            romaji: "rainen", 
            arti: "tahun depan", 
            contoh_jp: "来年結婚します。", 
            contoh_rm: "Rainen kekkon shimasu.", 
            contoh_id: "Tahun depan saya akan menikah.",
            contoh2_jp: "来年日本へ行きたいです。",
            contoh2_rm: "Rainen Nihon e ikitai desu.",
            contoh2_id: "Tahun depan saya ingin pergi ke Jepang."
          },
          { 
            kata: "毎年 (まいとし)", 
            romaji: "maitoshi", 
            arti: "setiap tahun", 
            contoh_jp: "毎年日本へ行きます。", 
            contoh_rm: "Maitoshi Nihon e ikimasu.", 
            contoh_id: "Setiap tahun saya pergi ke Jepang.",
            contoh2_jp: "毎年家族と旅行します。",
            contoh2_rm: "Maitoshi kazoku to ryokou shimasu.",
            contoh2_id: "Setiap tahun saya traveling dengan keluarga."
          },
          { 
            kata: "何年 (なんねん)", 
            romaji: "nannen", 
            arti: "tahun berapa / berapa tahun", 
            penggunaan: "Bisa berarti 'tahun berapa' atau 'berapa tahun', tergantung konteks kalimat.", 
            contoh_jp: "日本語を何年勉強しましたか。", 
            contoh_rm: "Nihongo o nannen benkyou shimashita ka.", 
            contoh_id: "Sudah berapa tahun belajar bahasa Jepang?",
            contoh2_jp: "今は何年ですか。",
            contoh2_rm: "Ima wa nannen desu ka.",
            contoh2_id: "Sekarang tahun berapa?"
          },
          { 
            kata: "今年中 (ことしじゅう)", 
            romaji: "kotoshijuu", 
            arti: "dalam tahun ini", 
            penggunaan: "Dipakai untuk menyatakan sesuatu harus selesai dalam tahun ini. Sering muncul di konteks kerja.", 
            contoh_jp: "今年中に引っ越します。", 
            contoh_rm: "Kotoshijuu ni hikkoshimasu.", 
            contoh_id: "Saya pindah rumah dalam tahun ini.",
            contoh2_jp: "今年中に日本語を勉強したいです。",
            contoh2_rm: "Kotoshijuu ni Nihongo o benkyou shitai desu.",
            contoh2_id: "Saya ingin belajar bahasa Jepang dalam tahun ini."
          }
        ]
      },
      {
        nama: "Waktu Relatif",
        kata: [
          { 
            kata: "今日 (きょう)", 
            romaji: "kyou", 
            arti: "hari ini", 
            contoh_jp: "今日は何をしますか。", 
            contoh_rm: "Kyou wa nani o shimasu ka.", 
            contoh_id: "Hari ini kamu melakukan apa?",
            contoh2_jp: "今日は暑いです。",
            contoh2_rm: "Kyou wa atsui desu.",
            contoh2_id: "Hari ini panas."
          },
          { 
            kata: "明日 (あした)", 
            romaji: "ashita", 
            arti: "besok", 
            contoh_jp: "明日テストがあります。", 
            contoh_rm: "Ashita tesuto ga arimasu.", 
            contoh_id: "Besok ada ujian.",
            contoh2_jp: "明日友達に会います。",
            contoh2_rm: "Ashita tomodachi ni aimasu.",
            contoh2_id: "Besok saya bertemu teman."
          },
          { 
            kata: "昨日 (きのう)", 
            romaji: "kinou", 
            arti: "kemarin", 
            contoh_jp: "昨日映画を見ました。", 
            contoh_rm: "Kinou eiga o mimashita.", 
            contoh_id: "Kemarin saya menonton film.",
            contoh2_jp: "昨日は雨でした。",
            contoh2_rm: "Kinou wa ame deshita.",
            contoh2_id: "Kemarin hujan."
          },
          { 
            kata: "明後日 (あさって)", 
            romaji: "asatte", 
            arti: "besok lusa", 
            penggunaan: "Dipakai untuk menyebut dua hari setelah hari ini. Sering muncul di soal JFT-Basic.", 
            contoh_jp: "明後日試験があります。", 
            contoh_rm: "Asatte shiken ga arimasu.", 
            contoh_id: "Besok lusa ada ujian.",
            contoh2_jp: "明後日日本へ行きます。",
            contoh2_rm: "Asatte Nihon e ikimasu.",
            contoh2_id: "Besok lusa saya pergi ke Jepang."
          },
          { 
            kata: "一昨日 (おととい)", 
            romaji: "ototoi", 
            arti: "kemarin lusa", 
            penggunaan: "Dipakai untuk menyebut dua hari sebelum hari ini. Sering muncul di soal JFT-Basic.", 
            contoh_jp: "一昨日友達に会いました。", 
            contoh_rm: "Ototoi tomodachi ni aimashita.", 
            contoh_id: "Kemarin lusa saya bertemu teman.",
            contoh2_jp: "一昨日は寒かったです。",
            contoh2_rm: "Ototoi wa samukatta desu.",
            contoh2_id: "Kemarin lusa dingin."
          },
          { 
            kata: "毎日 (まいにち)", 
            romaji: "mainichi", 
            arti: "setiap hari", 
            contoh_jp: "毎日日本語を勉強します。", 
            contoh_rm: "Mainichi Nihongo o benkyou shimasu.", 
            contoh_id: "Setiap hari saya belajar bahasa Jepang.",
            contoh2_jp: "毎日七時に起きます。",
            contoh2_rm: "Mainichi shichiji ni okimasu.",
            contoh2_id: "Setiap hari saya bangun jam 7."
          }
        ]
      },
      {
        nama: "Jam",
        kata: [
          { 
            kata: "今 (いま)", 
            romaji: "ima", 
            arti: "sekarang", 
            contoh_jp: "今何時ですか。", 
            contoh_rm: "Ima nanji desu ka.", 
            contoh_id: "Sekarang jam berapa?",
            contoh2_jp: "今忙しいです。",
            contoh2_rm: "Ima isogashii desu.",
            contoh2_id: "Sekarang saya sibuk."
          },
          { 
            kata: "朝 (あさ)", 
            romaji: "asa", 
            arti: "pagi", 
            contoh_jp: "毎朝六時に起きます。", 
            contoh_rm: "Maiasa rokuji ni okimasu.", 
            contoh_id: "Setiap pagi saya bangun jam 6.",
            contoh2_jp: "朝ご飯を食べます。",
            contoh2_rm: "Asagohan o tabemasu.",
            contoh2_id: "Saya makan sarapan."
          },
          { 
            kata: "昼 (ひる)", 
            romaji: "hiru", 
            arti: "siang", 
            contoh_jp: "昼ご飯を食べます。", 
            contoh_rm: "Hirugohan o tabemasu.", 
            contoh_id: "Saya makan siang.",
            contoh2_jp: "昼は暑いです。",
            contoh2_rm: "Hiru wa atsui desu.",
            contoh2_id: "Siang hari panas."
          },
          { 
            kata: "夜 (よる)", 
            romaji: "yoru", 
            arti: "malam", 
            contoh_jp: "夜早く寝ます。", 
            contoh_rm: "Yoru hayaku nemasu.", 
            contoh_id: "Malam saya tidur lebih awal.",
            contoh2_jp: "夜は静かです。",
            contoh2_rm: "Yoru wa shizuka desu.",
            contoh2_id: "Malam hari tenang."
          },
          { 
            kata: "午前 (ごぜん)", 
            romaji: "gozen", 
            arti: "AM / pagi", 
            penggunaan: "Dipakai untuk menyebut waktu sebelum jam 12 siang. Sering muncul di jadwal dan soal JFT-Basic.", 
            contoh_jp: "午前九時に会議があります。", 
            contoh_rm: "Gozen kuji ni kaigi ga arimasu.", 
            contoh_id: "Jam 9 pagi ada rapat.",
            contoh2_jp: "午前中は忙しいです。",
            contoh2_rm: "Gozenchuu wa isogashii desu.",
            contoh2_id: "Sepanjang pagi saya sibuk."
          },
          { 
            kata: "午後 (ごご)", 
            romaji: "gogo", 
            arti: "PM / sore", 
            penggunaan: "Dipakai untuk menyebut waktu setelah jam 12 siang. Sering muncul di jadwal dan soal JFT-Basic.", 
            contoh_jp: "午後三時に会います。", 
            contoh_rm: "Gogo sanji ni aimasu.", 
            contoh_id: "Saya bertemu jam 3 sore.",
            contoh2_jp: "午後から雨が降ります。",
            contoh2_rm: "Gogo kara ame ga furimasu.",
            contoh2_id: "Dari sore akan turun hujan."
          }
        ]
      }
    ]
  },
    {
    key: "aktivitas-kata-kerja",
    no: 6,
    nama: "Aktivitas & Kata Kerja",
    icon: "&#127939;",
    contoh: "行く・食べる・見る",
    subkategori: [
      {
        nama: "Kata Kerja Dasar",
        kata: [
          { 
            kata: "行く (いく)", 
            romaji: "iku", 
            arti: "pergi", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 行きます (ikimasu).", 
            contoh_jp: "スーパーへ行きます。", 
            contoh_rm: "Suupaa e ikimasu.", 
            contoh_id: "Saya pergi ke supermarket.",
            contoh2_jp: "明日学校へ行きます。",
            contoh2_rm: "Ashita gakkou e ikimasu.",
            contoh2_id: "Besok saya pergi ke sekolah."
          },
          { 
            kata: "来る (くる)", 
            romaji: "kuru", 
            arti: "datang", 
            penggunaan: "Kata kerja tidak beraturan (fukisoku). Bentuk masu: 来ます (kimasu).", 
            contoh_jp: "友達が来ます。", 
            contoh_rm: "Tomodachi ga kimasu.", 
            contoh_id: "Teman akan datang.",
            contoh2_jp: "明日先生が来ます。",
            contoh2_rm: "Ashita sensei ga kimasu.",
            contoh2_id: "Besok guru akan datang."
          },
          { 
            kata: "帰る (かえる)", 
            romaji: "kaeru", 
            arti: "pulang", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 帰ります (kaerimasu).", 
            contoh_jp: "うちへ帰ります。", 
            contoh_rm: "Uchi e kaerimasu.", 
            contoh_id: "Saya pulang ke rumah.",
            contoh2_jp: "毎日六時に帰ります。",
            contoh2_rm: "Mainichi rokuji ni kaerimasu.",
            contoh2_id: "Setiap hari saya pulang jam 6."
          },
          { 
            kata: "食べる (たべる)", 
            romaji: "taberu", 
            arti: "makan", 
            penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 食べます (tabemasu).", 
            contoh_jp: "朝ご飯を食べます。", 
            contoh_rm: "Asagohan o tabemasu.", 
            contoh_id: "Saya makan sarapan.",
            contoh2_jp: "何を食べたいですか。",
            contoh2_rm: "Nani o tabetai desu ka.",
            contoh2_id: "Kamu ingin makan apa?"
          },
          
          { 
            kata: "飲む (のむ)", 
            romaji: "nomu", 
            arti: "minum", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 飲みます (nomimasu).", 
            contoh_jp: "水を飲みます。", 
            contoh_rm: "Mizu o nomimasu.", 
            contoh_id: "Saya minum air.",
            contoh2_jp: "毎朝コーヒーを飲みます。",
            contoh2_rm: "Maiasa koohii o nomimasu.",
            contoh2_id: "Setiap pagi saya minum kopi."
          },
          { 
  kata: "持つ (もつ)", 
  romaji: "motsu", 
  arti: "memegang / membawa", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 持ちます (mochimasu).", 
  contoh_jp: "荷物を持ちます。", 
  contoh_rm: "Nimotsu o mochimasu.", 
  contoh_id: "Saya membawa barang.",
  contoh2_jp: "お金を持っていますか。",
  contoh2_rm: "Okane o motte imasu ka.",
  contoh2_id: "Apakah kamu punya uang?"
},
{ 
  kata: "使う (つかう)", 
  romaji: "tsukau", 
  arti: "menggunakan", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 使います (tsukaimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "ペンを使います。", 
  contoh_rm: "Pen o tsukaimasu.", 
  contoh_id: "Saya menggunakan pulpen.",
  contoh2_jp: "この言葉を使います。",
  contoh2_rm: "Kono kotoba o tsukaimasu.",
  contoh2_id: "Saya menggunakan kata ini."
},
{ 
  kata: "作る (つくる)", 
  romaji: "tsukuru", 
  arti: "membuat", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 作ります (tsukurimasu).", 
  contoh_jp: "料理を作ります。", 
  contoh_rm: "Ryouri o tsukurimasu.", 
  contoh_id: "Saya membuat masakan.",
  contoh2_jp: "母はケーキを作ります。",
  contoh2_rm: "Haha wa keeki o tsukurimasu.",
  contoh2_id: "Ibu membuat kue."
},
{ 
  kata: "思う (おもう)", 
  romaji: "omou", 
  arti: "berpikir / merasa", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 思います (omoimasu). Sering dipakai untuk menyatakan pendapat.", 
  contoh_jp: "いいと思います。", 
  contoh_rm: "Ii to omoimasu.", 
  contoh_id: "Saya pikir itu bagus.",
  contoh2_jp: "明日は雨だと思います。",
  contoh2_rm: "Ashita wa ame da to omoimasu.",
  contoh2_id: "Saya pikir besok akan hujan."
},
{ 
  kata: "知る (しる)", 
  romaji: "shiru", 
  arti: "tahu", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 知ります (shirimasu). Untuk 'sudah tahu' pakai 知っています (shitte imasu).", 
  contoh_jp: "彼の名前を知っています。", 
  contoh_rm: "Kare no namae o shitte imasu.", 
  contoh_id: "Saya tahu namanya.",
  contoh2_jp: "この店を知りません。",
  contoh2_rm: "Kono mise o shirimasen.",
  contoh2_id: "Saya tidak tahu toko ini."
},
{ 
  kata: "言う (いう)", 
  romaji: "iu", 
  arti: "berkata", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 言います (iimasu).", 
  contoh_jp: "先生が言いました。", 
  contoh_rm: "Sensei ga iimashita.", 
  contoh_id: "Guru berkata.",
  contoh2_jp: "もう一度言ってください。",
  contoh2_rm: "Mou ichido itte kudasai.",
  contoh2_id: "Tolong katakan sekali lagi."
},
{ 
  kata: "立つ (たつ)", 
  romaji: "tatsu", 
  arti: "berdiri", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 立ちます (tachimasu).", 
  contoh_jp: "ここに立ってください。", 
  contoh_rm: "Koko ni tatte kudasai.", 
  contoh_id: "Tolong berdiri di sini.",
  contoh2_jp: "椅子から立ちます。",
  contoh2_rm: "Isu kara tachimasu.",
  contoh2_id: "Saya berdiri dari kursi."
},
{ 
  kata: "座る (すわる)", 
  romaji: "suwaru", 
  arti: "duduk", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 座ります (suwarimasu).", 
  contoh_jp: "椅子に座ります。", 
  contoh_rm: "Isu ni suwarimasu.", 
  contoh_id: "Saya duduk di kursi.",
  contoh2_jp: "ここに座ってください。",
  contoh2_rm: "Koko ni suwatte kudasai.",
  contoh2_id: "Tolong duduk di sini."
},
{ 
  kata: "入る (はいる)", 
  romaji: "hairu", 
  arti: "masuk", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 入ります (hairimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "部屋に入ります。", 
  contoh_rm: "Heya ni hairimasu.", 
  contoh_id: "Saya masuk ke kamar.",
  contoh2_jp: "お風呂に入ります。",
  contoh2_rm: "Ofuro ni hairimasu.",
  contoh2_id: "Saya masuk ke kamar mandi."
},
{ 
  kata: "出る (でる)", 
  romaji: "deru", 
  arti: "keluar", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 出ます (demasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "家を出ます。", 
  contoh_rm: "Ie o demasu.", 
  contoh_id: "Saya keluar dari rumah.",
  contoh2_jp: "駅を出ます。",
  contoh2_rm: "Eki o demasu.",
  contoh2_id: "Saya keluar dari stasiun."
},
{ 
  kata: "開ける (あける)", 
  romaji: "akeru", 
  arti: "membuka", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 開けます (akemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "窓を開けます。", 
  contoh_rm: "Mado o akemasu.", 
  contoh_id: "Saya membuka jendela.",
  contoh2_jp: "ドアを開けてください。",
  contoh2_rm: "Doa o akete kudasai.",
  contoh2_id: "Tolong buka pintunya."
},
{ 
  kata: "閉める (しめる)", 
  romaji: "shimeru", 
  arti: "menutup", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 閉めます (shimemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "ドアを閉めます。", 
  contoh_rm: "Doa o shimemasu.", 
  contoh_id: "Saya menutup pintu.",
  contoh2_jp: "窓を閉めてください。",
  contoh2_rm: "Mado o shimete kudasai.",
  contoh2_id: "Tolong tutup jendelanya."
},
{ 
  kata: "貸す (かす)", 
  romaji: "kasu", 
  arti: "meminjamkan", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 貸します (kashimasu).", 
  contoh_jp: "本を貸します。", 
  contoh_rm: "Hon o kashimasu.", 
  contoh_id: "Saya meminjamkan buku.",
  contoh2_jp: "ペンを貸してください。",
  contoh2_rm: "Pen o kashite kudasai.",
  contoh2_id: "Tolong pinjamkan pulpen."
},
{ 
  kata: "借りる (かりる)", 
  romaji: "kariru", 
  arti: "meminjam", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 借ります (karimasu).", 
  contoh_jp: "本を借ります。", 
  contoh_rm: "Hon o karimasu.", 
  contoh_id: "Saya meminjam buku.",
  contoh2_jp: "トイレを借りてもいいですか。",
  contoh2_rm: "Toire o karite mo ii desu ka.",
  contoh2_id: "Boleh saya pinjam toilet?"
},
{ 
  kata: "送る (おくる)", 
  romaji: "okuru", 
  arti: "mengirim", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 送ります (okurimasu).", 
  contoh_jp: "手紙を送ります。", 
  contoh_rm: "Tegami o okurimasu.", 
  contoh_id: "Saya mengirim surat.",
  contoh2_jp: "メールを送りました。",
  contoh2_rm: "Meeru o okurimashita.",
  contoh2_id: "Saya sudah mengirim email."
},
{ 
  kata: "切る (きる)", 
  romaji: "kiru", 
  arti: "memotong", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 切ります (kirimasu).", 
  contoh_jp: "野菜を切ります。", 
  contoh_rm: "Yasai o kirimasu.", 
  contoh_id: "Saya memotong sayur.",
  contoh2_jp: "紙を切ってください。",
  contoh2_rm: "Kami o kitte kudasai.",
  contoh2_id: "Tolong potong kertasnya."
},
{ 
  kata: "待つ (まつ)", 
  romaji: "matsu", 
  arti: "menunggu", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 待ちます (machimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "駅で待ちます。", 
  contoh_rm: "Eki de machimasu.", 
  contoh_id: "Saya menunggu di stasiun.",
  contoh2_jp: "ちょっと待ってください。",
  contoh2_rm: "Chotto matte kudasai.",
  contoh2_id: "Tolong tunggu sebentar."
},
{ 
  kata: "呼ぶ (よぶ)", 
  romaji: "yobu", 
  arti: "memanggil", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 呼びます (yobimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "タクシーを呼びます。", 
  contoh_rm: "Takushii o yobimasu.", 
  contoh_id: "Saya memanggil taksi.",
  contoh2_jp: "先生を呼んでください。",
  contoh2_rm: "Sensei o yonde kudasai.",
  contoh2_id: "Tolong panggil guru."
},
{ 
  kata: "答える (こたえる)", 
  romaji: "kotaeru", 
  arti: "menjawab", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 答えます (kotaemasu).", 
  contoh_jp: "質問に答えます。", 
  contoh_rm: "Shitsumon ni kotaemasu.", 
  contoh_id: "Saya menjawab pertanyaan.",
  contoh2_jp: "先生の質問に答えました。",
  contoh2_rm: "Sensei no shitsumon ni kotaemashita.",
  contoh2_id: "Saya menjawab pertanyaan guru."
},
{ 
  kata: "分かる (わかる)", 
  romaji: "wakaru", 
  arti: "mengerti / paham", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 分かります (wakarimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "日本語が分かります。", 
  contoh_rm: "Nihongo ga wakarimasu.", 
  contoh_id: "Saya mengerti bahasa Jepang.",
  contoh2_jp: "意味が分かりません。",
  contoh2_rm: "Imi ga wakarimasen.",
  contoh2_id: "Saya tidak mengerti artinya."
},
          { 
            kata: "見る (みる)", 
            romaji: "miru", 
            arti: "melihat / menonton", 
            penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 見ます (mimasu).", 
            contoh_jp: "映画を見ます。", 
            contoh_rm: "Eiga o mimasu.", 
            contoh_id: "Saya menonton film.",
            contoh2_jp: "毎日テレビを見ます。",
            contoh2_rm: "Mainichi terebi o mimasu.",
            contoh2_id: "Setiap hari saya menonton TV."
          }
        ]
      },
      {
        nama: "Aktivitas Harian",
        kata: [
          { 
            kata: "起きる (おきる)", 
            romaji: "okiru", 
            arti: "bangun", 
            penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 起きます (okimasu).", 
            contoh_jp: "毎朝六時に起きます。", 
            contoh_rm: "Maiasa rokuji ni okimasu.", 
            contoh_id: "Setiap pagi saya bangun jam 6.",
            contoh2_jp: "今日は早く起きました。",
            contoh2_rm: "Kyou wa hayaku okimashita.",
            contoh2_id: "Hari ini saya bangun lebih awal."
          },
          { 
            kata: "寝る (ねる)", 
            romaji: "neru", 
            arti: "tidur", 
            penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 寝ます (nemasu).", 
            contoh_jp: "十一時に寝ます。", 
            contoh_rm: "Juuyoji ni nemasu.", 
            contoh_id: "Saya tidur jam 11.",
            contoh2_jp: "昨日早く寝ました。",
            contoh2_rm: "Kinou hayaku nemashita.",
            contoh2_id: "Kemarin saya tidur lebih awal."
          },
          { 
  kata: "着る (きる)", 
  romaji: "kiru", 
  arti: "memakai (baju)", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 着ます (kimasu). Khusus untuk baju atasan (kemeja, jaket). Untuk celana pakai 履く (haku).", 
  contoh_jp: "シャツを着ます。", 
  contoh_rm: "Shatsu o kimasu.", 
  contoh_id: "Saya memakai kemeja.",
  contoh2_jp: "コートを着て出かけます。",
  contoh2_rm: "Kooto o kite dekakemasu.",
  contoh2_id: "Saya memakai mantel lalu pergi."
},
{ 
  kata: "履く (はく)", 
  romaji: "haku", 
  arti: "memakai (bawahan/sepatu)", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 履きます (hakimasu). Khusus untuk celana, rok, sepatu, kaus kaki.", 
  contoh_jp: "靴を履きます。", 
  contoh_rm: "Kutsu o hakimasu.", 
  contoh_id: "Saya memakai sepatu.",
  contoh2_jp: "ジーンズを履きます。",
  contoh2_rm: "Jiinzu o hakimasu.",
  contoh2_id: "Saya memakai jeans."
},
{ 
  kata: "かぶる", 
  romaji: "kaburu", 
  arti: "memakai (topi)", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: かぶります (kaburimasu). Khusus untuk topi.", 
  contoh_jp: "帽子をかぶります。", 
  contoh_rm: "Boushi o kaburimasu.", 
  contoh_id: "Saya memakai topi.",
  contoh2_jp: "夏は帽子をかぶります。",
  contoh2_rm: "Natsu wa boushi o kaburimasu.",
  contoh2_id: "Musim panas saya memakai topi."
},
{ 
  kata: "かける", 
  romaji: "kakeru", 
  arti: "memakai (kacamata) / menelepon", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: かけます (kakemasu). Bisa berarti 'memakai kacamata' atau 'menelepon' (電話をかける).", 
  contoh_jp: "眼鏡をかけます。", 
  contoh_rm: "Megane o kakemasu.", 
  contoh_id: "Saya memakai kacamata.",
  contoh2_jp: "友達に電話をかけます。",
  contoh2_rm: "Tomodachi ni denwa o kakemasu.",
  contoh2_id: "Saya menelepon teman."
},
{ 
  kata: "覚える (おぼえる)", 
  romaji: "oboeru", 
  arti: "menghafal / mengingat", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 覚えます (oboemasu).", 
  contoh_jp: "漢字を覚えます。", 
  contoh_rm: "Kanji o oboemasu.", 
  contoh_id: "Saya menghafal kanji.",
  contoh2_jp: "先生の名前を覚えました。",
  contoh2_rm: "Sensei no namae o oboemashita.",
  contoh2_id: "Saya sudah mengingat nama guru."
},
{ 
  kata: "忘れる (わすれる)", 
  romaji: "wasureru", 
  arti: "lupa", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 忘れます (wasuremasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "傘を忘れました。", 
  contoh_rm: "Kasa o wasuremashita.", 
  contoh_id: "Saya lupa membawa payung.",
  contoh2_jp: "宿題を忘れました。",
  contoh2_rm: "Shukudai o wasuremashita.",
  contoh2_id: "Saya lupa PR."
},
{ 
  kata: "教える (おしえる)", 
  romaji: "oshieru", 
  arti: "mengajar / memberi tahu", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 教えます (oshiemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "日本語を教えます。", 
  contoh_rm: "Nihongo o oshiemasu.", 
  contoh_id: "Saya mengajar bahasa Jepang.",
  contoh2_jp: "道を教えてください。",
  contoh2_rm: "Michi o oshiete kudasai.",
  contoh2_id: "Tolong tunjukkan jalannya."
},
{ 
  kata: "できる", 
  romaji: "dekiru", 
  arti: "bisa / dapat", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: できます (dekimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "日本語ができます。", 
  contoh_rm: "Nihongo ga dekimasu.", 
  contoh_id: "Saya bisa bahasa Jepang.",
  contoh2_jp: "料理ができますか。",
  contoh2_rm: "Ryouri ga dekimasu ka.",
  contoh2_id: "Apakah kamu bisa memasak?"
},
{ 
  kata: "始める (はじめる)", 
  romaji: "hajimeru", 
  arti: "memulai", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 始めます (hajimemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "勉強を始めます。", 
  contoh_rm: "Benkyou o hajimemasu.", 
  contoh_id: "Saya mulai belajar.",
  contoh2_jp: "会議を始めます。",
  contoh2_rm: "Kaigi o hajimemasu.",
  contoh2_id: "Saya memulai rapat."
},
{ 
  kata: "終わる (おわる)", 
  romaji: "owaru", 
  arti: "selesai / berakhir", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 終わります (owarimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "授業が終わります。", 
  contoh_rm: "Jugyou ga owarimasu.", 
  contoh_id: "Pelajaran selesai.",
  contoh2_jp: "仕事は五時に終わります。",
  contoh2_rm: "Shigoto wa goji ni owarimasu.",
  contoh2_id: "Kerja selesai jam 5."
},
{ 
  kata: "生きる (いきる)", 
  romaji: "ikiru", 
  arti: "hidup", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 生きます (ikimasu). Hati-hati: sama bunyi dengan 行きます (ikimasu) = pergi.", 
  contoh_jp: "元気に生きます。", 
  contoh_rm: "Genki ni ikimasu.", 
  contoh_id: "Saya hidup dengan sehat.",
  contoh2_jp: "百歳まで生きます。",
  contoh2_rm: "Hyakusai made ikimasu.",
  contoh2_id: "Saya hidup sampai 100 tahun."
},
{ 
  kata: "見せる (みせる)", 
  romaji: "miseru", 
  arti: "memperlihatkan", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 見せます (misemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "写真を見せます。", 
  contoh_rm: "Shashin o misemasu.", 
  contoh_id: "Saya memperlihatkan foto.",
  contoh2_jp: "保険証を見せてください。",
  contoh2_rm: "Hokenshou o misete kudasai.",
  contoh2_id: "Tolong tunjukkan kartu asuransi."
},
{ 
  kata: "降りる (おりる)", 
  romaji: "oriru", 
  arti: "turun (dari kendaraan)", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 降ります (orimasu). Sering muncul di JFT-Basic (transportasi).", 
  contoh_jp: "次の駅で降ります。", 
  contoh_rm: "Tsugi no eki de orimasu.", 
  contoh_id: "Saya turun di stasiun berikutnya.",
  contoh2_jp: "バスを降ります。",
  contoh2_rm: "Basu o orimasu.",
  contoh2_id: "Saya turun dari bus."
},
{ 
  kata: "乗る (のる)", 
  romaji: "noru", 
  arti: "naik (kendaraan)", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 乗ります (norimasu). Sering muncul di JFT-Basic (transportasi).", 
  contoh_jp: "電車に乗ります。", 
  contoh_rm: "Densha ni norimasu.", 
  contoh_id: "Saya naik kereta.",
  contoh2_jp: "タクシーに乗ります。",
  contoh2_rm: "Takushii ni norimasu.",
  contoh2_id: "Saya naik taksi."
},
{ 
  kata: "急ぐ (いそぐ)", 
  romaji: "isogu", 
  arti: "bergegas", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 急ぎます (isogimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "時間がないから急ぎます。", 
  contoh_rm: "Jikan ga nai kara isogimasu.", 
  contoh_id: "Karena tidak ada waktu, saya bergegas.",
  contoh2_jp: "急いでください。",
  contoh2_rm: "Isoide kudasai.",
  contoh2_id: "Tolong bergegas."
},
{ 
  kata: "渡す (わたす)", 
  romaji: "watasu", 
  arti: "menyerahkan", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 渡します (watashimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "お金を渡します。", 
  contoh_rm: "Okane o watashimasu.", 
  contoh_id: "Saya menyerahkan uang.",
  contoh2_jp: "書類を渡してください。",
  contoh2_rm: "Shorui o watashite kudasai.",
  contoh2_id: "Tolong serahkan dokumennya."
},
{ 
  kata: "もらう", 
  romaji: "morau", 
  arti: "menerima", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: もらいます (moraimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "プレゼントをもらいました。", 
  contoh_rm: "Purezento o moraimashita.", 
  contoh_id: "Saya menerima hadiah.",
  contoh2_jp: "友達から手紙をもらいました。",
  contoh2_rm: "Tomodachi kara tegami o moraimashita.",
  contoh2_id: "Saya menerima surat dari teman."
},
{ 
  kata: "あげる", 
  romaji: "ageru", 
  arti: "memberi", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: あげます (agemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "友達にプレゼントをあげます。", 
  contoh_rm: "Tomodachi ni purezento o agemasu.", 
  contoh_id: "Saya memberi hadiah ke teman.",
  contoh2_jp: "花をあげました。",
  contoh2_rm: "Hana o agemashita.",
  contoh2_id: "Saya memberi bunga."
},
{ 
  kata: "くれる", 
  romaji: "kureru", 
  arti: "memberi (ke saya)", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: くれます (kuremasu). Dipakai kalau orang lain memberi ke saya.", 
  contoh_jp: "友達が本をくれました。", 
  contoh_rm: "Tomodachi ga hon o kuremashita.", 
  contoh_id: "Teman memberi saya buku.",
  contoh2_jp: "母が服をくれました。",
  contoh2_rm: "Haha ga fuku o kuremashita.",
  contoh2_id: "Ibu memberi saya pakaian."
},
{ 
  kata: "始まる (はじまる)", 
  romaji: "hajimaru", 
  arti: "dimulai", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 始まります (hajimarimasu). Pasangan dari 始める (hajimeru) = memulai.", 
  contoh_jp: "映画が始まります。", 
  contoh_rm: "Eiga ga hajimarimasu.", 
  contoh_id: "Film akan dimulai.",
  contoh2_jp: "授業は九時に始まります。",
  contoh2_rm: "Jugyou wa kuji ni hajimarimasu.",
  contoh2_id: "Pelajaran dimulai jam 9."
},
{ 
  kata: "住む (すむ)", 
  romaji: "sumu", 
  arti: "tinggal", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 住みます (sumimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "東京に住んでいます。", 
  contoh_rm: "Toukyou ni sunde imasu.", 
  contoh_id: "Saya tinggal di Tokyo.",
  contoh2_jp: "どこに住んでいますか。",
  contoh2_rm: "Doko ni sunde imasu ka.",
  contoh2_id: "Kamu tinggal di mana?"
},
{ 
  kata: "知らせる (しらせる)", 
  romaji: "shiraseru", 
  arti: "memberitahu", 
  penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 知らせます (shirasemasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "結果を知らせます。", 
  contoh_rm: "Kekka o shirasemasu.", 
  contoh_id: "Saya memberitahu hasilnya.",
  contoh2_jp: "先生に知らせてください。",
  contoh2_rm: "Sensei ni shirasete kudasai.",
  contoh2_id: "Tolong beritahu guru."
},
          { 
            kata: "働く (はたらく)", 
            romaji: "hataraku", 
            arti: "bekerja", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 働きます (hatarakimasu). Sering muncul di JFT-Basic.", 
            contoh_jp: "会社で働きます。", 
            contoh_rm: "Kaisha de hatarakimasu.", 
            contoh_id: "Saya bekerja di perusahaan.",
            contoh2_jp: "毎日八時から働きます。",
            contoh2_rm: "Mainichi hachiji kara hatarakimasu.",
            contoh2_id: "Setiap hari saya bekerja dari jam 8."
          },
          { 
            kata: "休む (やすむ)", 
            romaji: "yasumu", 
            arti: "istirahat / libur", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 休みます (yasumimasu). Sering muncul di JFT-Basic (izin kerja/sekolah).", 
            contoh_jp: "今日は休みます。", 
            contoh_rm: "Kyou wa yasumimasu.", 
            contoh_id: "Hari ini saya libur.",
            contoh2_jp: "風邪で会社を休みました。",
            contoh2_rm: "Kaze de kaisha o yasumimashita.",
            contoh2_id: "Saya tidak masuk kerja karena flu."
          },
          { 
  kata: "習う (ならう)", 
  romaji: "narau", 
  arti: "belajar / berlatih (dari seseorang)", 
  penggunaan: "Kata kerja golongan 1. Dipakai untuk belajar dari guru/instruktur, bukan belajar mandiri (yang pakai 勉強する).", 
  contoh_jp: "ピアノを習っています。", 
  contoh_rm: "Piano o naratte imasu.", 
  contoh_id: "Saya sedang belajar piano.",
  contoh2_jp: "先生に日本語を習います。",
  contoh2_rm: "Sensei ni Nihongo o naraimasu.",
  contoh2_id: "Saya belajar bahasa Jepang dari guru."
},
{ 
  kata: "洗う (あらう)", 
  romaji: "arau", 
  arti: "mencuci", 
  penggunaan: "Kata kerja golongan 1. Dipakai untuk mencuci benda, tangan, atau piring.", 
  contoh_jp: "手を洗います。", 
  contoh_rm: "Te o araimasu.", 
  contoh_id: "Saya mencuci tangan.",
  contoh2_jp: "お皿を洗います。",
  contoh2_rm: "Osara o araimasu.",
  contoh2_id: "Saya mencuci piring."
},
{ 
  kata: "並ぶ (ならぶ)", 
  romaji: "narabu", 
  arti: "berbaris", 
  penggunaan: "Kata kerja golongan 1 (bentuk intransitif). Dipakai untuk 'berbaris/berjejer'. Untuk 'menata' pakai 並べる (naraberu).", 
  contoh_jp: "店の前に並びます。", 
  contoh_rm: "Mise no mae ni narabimasu.", 
  contoh_id: "Saya berbaris di depan toko.",
  contoh2_jp: "人がたくさん並んでいます。",
  contoh2_rm: "Hito ga takusan narande imasu.",
  contoh2_id: "Banyak orang sedang berbaris."
},
{ 
  kata: "並べる (ならべる)", 
  romaji: "naraberu", 
  arti: "menata", 
  penggunaan: "Kata kerja golongan 2 (bentuk transitif). Pasangan dari 並ぶ.", 
  contoh_jp: "本を本棚に並べます。", 
  contoh_rm: "Hon o hondana ni narabemasu.", 
  contoh_id: "Saya menata buku di rak buku.",
  contoh2_jp: "机の上に物を並べます。",
  contoh2_rm: "Tsukue no ue ni mono o narabemasu.",
  contoh2_id: "Saya menata barang di atas meja."
},
{ 
  kata: "磨く (みがく)", 
  romaji: "migaku", 
  arti: "menggosok", 
  penggunaan: "Kata kerja golongan 1. Dipakai untuk menggosok gigi (歯を磨く), menyemir sepatu, atau memoles.", 
  contoh_jp: "毎朝歯を磨きます。", 
  contoh_rm: "Maiasa ha o migakimasu.", 
  contoh_id: "Setiap pagi saya menggosok gigi.",
  contoh2_jp: "靴を磨きます。",
  contoh2_rm: "Kutsu o migakimasu.",
  contoh2_id: "Saya menyemir sepatu."
},
{ 
  kata: "脱ぐ (ぬぐ)", 
  romaji: "nugu", 
  arti: "melepas (pakaian/sepatu)", 
  penggunaan: "Kata kerja golongan 1. Dipakai untuk melepas sepatu, baju, topi.", 
  contoh_jp: "玄関で靴を脱ぎます。", 
  contoh_rm: "Genkan de kutsu o nugimasu.", 
  contoh_id: "Saya melepas sepatu di pintu masuk.",
  contoh2_jp: "コートを脱いでください。",
  contoh2_rm: "Kooto o nuide kudasai.",
  contoh2_id: "Tolong lepas mantelnya."
},
{ 
  kata: "咲く (さく)", 
  romaji: "saku", 
  arti: "mekar (bunga)", 
  penggunaan: "Kata kerja golongan 1. Khusus untuk bunga yang mekar.", 
  contoh_jp: "桜が咲きました。", 
  contoh_rm: "Sakura ga sakimashita.", 
  contoh_id: "Bunga sakura telah mekar.",
  contoh2_jp: "春に花が咲きます。",
  contoh2_rm: "Haru ni hana ga sakimasu.",
  contoh2_id: "Bunga mekar di musim semi."
},
{ 
  kata: "捨てる (すてる)", 
  romaji: "suteru", 
  arti: "membuang (sampah)", 
  penggunaan: "Kata kerja golongan 2. Dipakai untuk membuang sampah atau barang.", 
  contoh_jp: "ごみを捨てます。", 
  contoh_rm: "Gomi o sutemasu.", 
  contoh_id: "Saya membuang sampah.",
  contoh2_jp: "ここにごみを捨てないでください。",
  contoh2_rm: "Koko ni gomi o sutenai de kudasai.",
  contoh2_id: "Jangan buang sampah di sini."
},
          { 
            kata: "買う (かう)", 
            romaji: "kau", 
            arti: "membeli", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 買います (kaimasu).", 
            contoh_jp: "野菜を買います。", 
            contoh_rm: "Yasai o kaimasu.", 
            contoh_id: "Saya membeli sayur.",
            contoh2_jp: "スーパーで肉を買いました。",
            contoh2_rm: "Suupaa de niku o kaimashita.",
            contoh2_id: "Saya membeli daging di supermarket."
          },
          { 
  kata: "掃除する (そうじする)", 
  romaji: "souji suru", 
  arti: "membersihkan", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 掃除します (souji shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "部屋を掃除します。", 
  contoh_rm: "Heya o souji shimasu.", 
  contoh_id: "Saya membersihkan kamar.",
  contoh2_jp: "毎週掃除します。",
  contoh2_rm: "Maishuu souji shimasu.",
  contoh2_id: "Saya membersihkan setiap minggu."
},
{ 
  kata: "洗濯する (せんたくする)", 
  romaji: "sentaku suru", 
  arti: "mencuci (baju)", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 洗濯します (sentaku shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "服を洗濯します。", 
  contoh_rm: "Fuku o sentaku shimasu.", 
  contoh_id: "Saya mencuci pakaian.",
  contoh2_jp: "今日は洗濯しません。",
  contoh2_rm: "Kyou wa sentaku shimasen.",
  contoh2_id: "Hari ini saya tidak mencuci."
},
{ 
  kata: "料理する (りょうりする)", 
  romaji: "ryouri suru", 
  arti: "memasak", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 料理します (ryouri shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "毎日料理します。", 
  contoh_rm: "Mainichi ryouri shimasu.", 
  contoh_id: "Setiap hari saya memasak.",
  contoh2_jp: "母は料理が上手です。",
  contoh2_rm: "Haha wa ryouri ga jouzu desu.",
  contoh2_id: "Ibu pandai memasak."
},
{ 
  kata: "散歩する (さんぽする)", 
  romaji: "sanpo suru", 
  arti: "jalan-jalan", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 散歩します (sanpo shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "公園を散歩します。", 
  contoh_rm: "Kouen o sanpo shimasu.", 
  contoh_id: "Saya jalan-jalan di taman.",
  contoh2_jp: "毎朝犬と散歩します。",
  contoh2_rm: "Maiasa inu to sanpo shimasu.",
  contoh2_id: "Setiap pagi saya jalan-jalan dengan anjing."
},
{ 
  kata: "電話する (でんわする)", 
  romaji: "denwa suru", 
  arti: "menelepon", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 電話します (denwa shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "後で電話します。", 
  contoh_rm: "Ato de denwa shimasu.", 
  contoh_id: "Nanti saya menelepon.",
  contoh2_jp: "母に電話しました。",
  contoh2_rm: "Haha ni denwa shimashita.",
  contoh2_id: "Saya menelepon ibu."
},
{ 
  kata: "結婚する (けっこんする)", 
  romaji: "kekkon suru", 
  arti: "menikah", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 結婚します (kekkon shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "来年結婚します。", 
  contoh_rm: "Rainen kekkon shimasu.", 
  contoh_id: "Tahun depan saya menikah.",
  contoh2_jp: "兄は結婚しています。",
  contoh2_rm: "Ani wa kekkon shite imasu.",
  contoh2_id: "Kakak laki-laki saya sudah menikah."
},
{ 
  kata: "引っ越す (ひっこす)", 
  romaji: "hikkosu", 
  arti: "pindah rumah", 
  penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 引っ越します (hikkoshimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "来月引っ越します。", 
  contoh_rm: "Raigetsu hikkoshimasu.", 
  contoh_id: "Bulan depan saya pindah rumah.",
  contoh2_jp: "大阪に引っ越しました。",
  contoh2_rm: "Oosaka ni hikkoshimashita.",
  contoh2_id: "Saya pindah ke Osaka."
},
{ 
  kata: "運動する (うんどうする)", 
  romaji: "undou suru", 
  arti: "berolahraga", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 運動します (undou shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "毎日運動します。", 
  contoh_rm: "Mainichi undou shimasu.", 
  contoh_id: "Setiap hari saya berolahraga.",
  contoh2_jp: "運動が好きです。",
  contoh2_rm: "Undou ga suki desu.",
  contoh2_id: "Saya suka olahraga."
},
{ 
  kata: "見学する (けんがくする)", 
  romaji: "kengaku suru", 
  arti: "mengunjungi (untuk belajar)", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 見学します (kengaku shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "工場を見学します。", 
  contoh_rm: "Koujou o kengaku shimasu.", 
  contoh_id: "Saya mengunjungi pabrik.",
  contoh2_jp: "学校を見学しました。",
  contoh2_rm: "Gakkou o kengaku shimashita.",
  contoh2_id: "Saya mengunjungi sekolah."
},
{ 
  kata: "出発する (しゅっぱつする)", 
  romaji: "shuppatsu suru", 
  arti: "berangkat", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 出発します (shuppatsu shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "八時に出発します。", 
  contoh_rm: "Hachiji ni shuppatsu shimasu.", 
  contoh_id: "Saya berangkat jam 8.",
  contoh2_jp: "明日日本へ出発します。",
  contoh2_rm: "Ashita Nihon e shuppatsu shimasu.",
  contoh2_id: "Besok saya berangkat ke Jepang."
},
{ 
  kata: "到着する (とうちゃくする)", 
  romaji: "touchaku suru", 
  arti: "tiba", 
  penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 到着します (touchaku shimasu). Sering muncul di JFT-Basic.", 
  contoh_jp: "十時に到着します。", 
  contoh_rm: "Juuji ni touchaku shimasu.", 
  contoh_id: "Saya tiba jam 10.",
  contoh2_jp: "飛行機が到着しました。",
  contoh2_rm: "Hikouki ga touchaku shimashita.",
  contoh2_id: "Pesawat telah tiba."
},
          { 
            kata: "会う (あう)", 
            romaji: "au", 
            arti: "bertemu", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 会います (aimasu). Partikel yang dipakai: に (ni).", 
            contoh_jp: "友達に会います。", 
            contoh_rm: "Tomodachi ni aimasu.", 
            contoh_id: "Saya bertemu teman.",
            contoh2_jp: "駅で会いましょう。",
            contoh2_rm: "Eki de aimashou.",
            contoh2_id: "Mari bertemu di stasiun."
          }
        ]
      },
      {
        nama: "Aktivitas Belajar",
        kata: [
          { 
            kata: "読む (よむ)", 
            romaji: "yomu", 
            arti: "membaca", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 読みます (yomimasu).", 
            contoh_jp: "本を読みます。", 
            contoh_rm: "Hon o yomimasu.", 
            contoh_id: "Saya membaca buku.",
            contoh2_jp: "毎日新聞を読みます。",
            contoh2_rm: "Mainichi shinbun o yomimasu.",
            contoh2_id: "Setiap hari saya membaca koran."
          },
          { 
            kata: "書く (かく)", 
            romaji: "kaku", 
            arti: "menulis", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 書きます (kakimasu).", 
            contoh_jp: "手紙を書きます。", 
            contoh_rm: "Tegami o kakimasu.", 
            contoh_id: "Saya menulis surat.",
            contoh2_jp: "ノートに名前を書きます。",
            contoh2_rm: "Nooto ni namae o kakimasu.",
            contoh2_id: "Saya menulis nama di buku catatan."
          },
          { 
            kata: "聞く (きく)", 
            romaji: "kiku", 
            arti: "mendengar / bertanya", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 聞きます (kikimasu). Bisa berarti 'mendengar' atau 'bertanya' tergantung konteks.", 
            contoh_jp: "音楽を聞きます。", 
            contoh_rm: "Ongaku o kikimasu.", 
            contoh_id: "Saya mendengarkan musik.",
            contoh2_jp: "先生に聞きます。",
            contoh2_rm: "Sensei ni kikimasu.",
            contoh2_id: "Saya bertanya kepada guru."
          },
          { 
            kata: "話す (はなす)", 
            romaji: "hanasu", 
            arti: "berbicara", 
            penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 話します (hanashimasu).", 
            contoh_jp: "日本語を話します。", 
            contoh_rm: "Nihongo o hanashimasu.", 
            contoh_id: "Saya berbicara bahasa Jepang.",
            contoh2_jp: "友達と話しました。",
            contoh2_rm: "Tomodachi to hanashimashita.",
            contoh2_id: "Saya berbicara dengan teman."
          },
          { 
            kata: "勉強する (べんきょうする)", 
            romaji: "benkyou suru", 
            arti: "belajar", 
            penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 勉強します (benkyou shimasu). Sering muncul di JFT-Basic.", 
            contoh_jp: "日本語を勉強します。", 
            contoh_rm: "Nihongo o benkyou shimasu.", 
            contoh_id: "Saya belajar bahasa Jepang.",
            contoh2_jp: "毎日二時間勉強します。",
            contoh2_rm: "Mainichi nijikan benkyou shimasu.",
            contoh2_id: "Setiap hari saya belajar 2 jam."
          },
          { 
            kata: "覚える (おぼえる)", 
            romaji: "oboeru", 
            arti: "menghafal / mengingat", 
            penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 覚えます (oboemasu).", 
            contoh_jp: "漢字を覚えます。", 
            contoh_rm: "Kanji o oboemasu.", 
            contoh_id: "Saya menghafal kanji.",
            contoh2_jp: "先生の名前を覚えました。",
            contoh2_rm: "Sensei no namae o oboemashita.",
            contoh2_id: "Saya sudah mengingat nama guru."
          }
        ]
      },
      {
      nama: "Aktivitas Hiburan",
      kata: [
        { 
          kata: "遊ぶ (あそぶ)", 
          romaji: "asobu", 
          arti: "bermain", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 遊びます (asobimasu).", 
          contoh_jp: "公園で遊びます。", 
          contoh_rm: "Kouen de asobimasu.", 
          contoh_id: "Saya bermain di taman.",
          contoh2_jp: "友達と遊びました。",
          contoh2_rm: "Tomodachi to asobimashita.",
          contoh2_id: "Saya bermain dengan teman."
        },
        { 
          kata: "旅行する (りょこうする)", 
          romaji: "ryokou suru", 
          arti: "traveling", 
          penggunaan: "Kata kerja golongan 3 (fukisoku). Bentuk masu: 旅行します (ryokou shimasu). Sering muncul di JFT-Basic.", 
          contoh_jp: "日本を旅行します。", 
          contoh_rm: "Nihon o ryokou shimasu.", 
          contoh_id: "Saya traveling di Jepang.",
          contoh2_jp: "来月旅行する予定です。",
          contoh2_rm: "Raigetsu ryokou suru yotei desu.",
          contoh2_id: "Bulan depan saya berencana traveling."
        },
        { 
          kata: "歌う (うたう)", 
          romaji: "utau", 
          arti: "menyanyi", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 歌います (utaimasu).", 
          contoh_jp: "歌を歌います。", 
          contoh_rm: "Uta o utaimasu.", 
          contoh_id: "Saya menyanyikan lagu.",
          contoh2_jp: "カラオケで歌いました。",
          contoh2_rm: "Karaoke de utaimashita.",
          contoh2_id: "Saya bernyanyi di karaoke."
        },
        { 
          kata: "撮る (とる)", 
          romaji: "toru", 
          arti: "mengambil (foto)", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 撮ります (torimasu). Khusus untuk foto/video.", 
          contoh_jp: "写真を撮ります。", 
          contoh_rm: "Shashin o torimasu.", 
          contoh_id: "Saya mengambil foto.",
          contoh2_jp: "ここで写真を撮ってもいいですか。",
          contoh2_rm: "Koko de shashin o totte mo ii desu ka.",
          contoh2_id: "Boleh saya mengambil foto di sini?"
        },
        { 
          kata: "泳ぐ (およぐ)", 
          romaji: "oyogu", 
          arti: "berenang", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 泳ぎます (oyogimasu).", 
          contoh_jp: "海で泳ぎます。", 
          contoh_rm: "Umi de oyogimasu.", 
          contoh_id: "Saya berenang di laut.",
          contoh2_jp: "泳ぐのが好きです。",
          contoh2_rm: "Oyogu no ga suki desu.",
          contoh2_id: "Saya suka berenang."
        },
        { 
          kata: "走る (はしる)", 
          romaji: "hashiru", 
          arti: "berlari", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 走ります (hashirimasu).", 
          contoh_jp: "公園を走ります。", 
          contoh_rm: "Kouen o hashirimasu.", 
          contoh_id: "Saya berlari di taman.",
          contoh2_jp: "毎朝走ります。",
          contoh2_rm: "Maiasa hashirimasu.",
          contoh2_id: "Setiap pagi saya berlari."
        },
        { 
          kata: "弾く (ひく)", 
          romaji: "hiku", 
          arti: "memainkan (alat musik)", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 弾きます (hikimasu). Khusus untuk alat musik petik/piano. Hati-hati: 引く (hiku) = menarik, kanji beda.", 
          contoh_jp: "ピアノを弾きます。", 
          contoh_rm: "Piano o hikimasu.", 
          contoh_id: "Saya memainkan piano.",
          contoh2_jp: "ギターを弾きます。",
          contoh2_rm: "Gitaa o hikimasu.",
          contoh2_id: "Saya memainkan gitar."
        },
        { 
          kata: "吹く (ふく)", 
          romaji: "fuku", 
          arti: "meniup / memainkan (alat tiup)", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 吹きます (fukimasu). Bisa berarti 'meniup' atau 'memainkan alat musik tiup'.", 
          contoh_jp: "トランペットを吹きます。", 
          contoh_rm: "Toranpetto o fukimasu.", 
          contoh_id: "Saya memainkan terompet.",
          contoh2_jp: "風が吹いています。",
          contoh2_rm: "Kaze ga fuite imasu.",
          contoh2_id: "Angin sedang bertiup."
        },
        { 
          kata: "叩く (たたく)", 
          romaji: "tataku", 
          arti: "memukul / menabuh", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 叩きます (tatakimasu). Bisa berarti 'memukul' atau 'menabuh' alat musik perkusi.", 
          contoh_jp: "太鼓を叩きます。", 
          contoh_rm: "Taiko o tatakimasu.", 
          contoh_id: "Saya menabuh drum.",
          contoh2_jp: "ドアを叩きます。",
          contoh2_rm: "Doa o tatakimasu.",
          contoh2_id: "Saya mengetuk pintu."
        },
        { 
          kata: "描く (えがく・かく)", 
          romaji: "egaku / kaku", 
          arti: "menggambar / melukis", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 描きます (kakimasu). Khusus untuk gambar/lukisan. Hati-hati: 書く (kaku) = menulis, kanji beda.", 
          contoh_jp: "絵を描きます。", 
          contoh_rm: "E o kakimasu.", 
          contoh_id: "Saya menggambar.",
          contoh2_jp: "彼女は絵が上手です。",
          contoh2_rm: "Kanojo wa e ga jouzu desu.",
          contoh2_id: "Dia pandai menggambar."
        },
        { 
          kata: "踊る (おどる)", 
          romaji: "odoru", 
          arti: "menari", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 踊ります (odorimasu).", 
          contoh_jp: "音楽に合わせて踊ります。", 
          contoh_rm: "Ongaku ni awasete odorimasu.", 
          contoh_id: "Saya menari mengikuti musik.",
          contoh2_jp: "踊るのが好きです。",
          contoh2_rm: "Odoru no ga suki desu.",
          contoh2_id: "Saya suka menari."
        },
        { 
          kata: "歩く (あるく)", 
          romaji: "aruku", 
          arti: "berjalan", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 歩きます (arukimasu).", 
          contoh_jp: "駅まで歩きます。", 
          contoh_rm: "Eki made arukimasu.", 
          contoh_id: "Saya berjalan sampai stasiun.",
          contoh2_jp: "毎日歩いて学校へ行きます。",
          contoh2_rm: "Mainichi aruite gakkou e ikimasu.",
          contoh2_id: "Setiap hari saya pergi ke sekolah dengan berjalan kaki."
        },
        { 
          kata: "飛ぶ (とぶ)", 
          romaji: "tobu", 
          arti: "terbang / melompat", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 飛びます (tobimasu). Bisa berarti 'terbang' atau 'melompat'.", 
          contoh_jp: "鳥が飛んでいます。", 
          contoh_rm: "Tori ga tonde imasu.", 
          contoh_id: "Burung sedang terbang.",
          contoh2_jp: "飛行機で飛びます。",
          contoh2_rm: "Hikouki de tobimasu.",
          contoh2_id: "Saya terbang dengan pesawat."
        },
        { 
          kata: "登る (のぼる)", 
          romaji: "noboru", 
          arti: "mendaki / naik", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 登ります (noborimasu). Dipakai untuk mendaki gunung, naik tangga, atau naik ke atas.", 
          contoh_jp: "山に登ります。", 
          contoh_rm: "Yama ni noborimasu.", 
          contoh_id: "Saya mendaki gunung.",
          contoh2_jp: "階段を登ります。",
          contoh2_rm: "Kaidan o noborimasu.",
          contoh2_id: "Saya naik tangga."
        },
        { 
          kata: "降りる (おりる)", 
          romaji: "oriru", 
          arti: "turun (dari kendaraan/tangga)", 
          penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 降ります (orimasu). Khusus untuk turun dari kendaraan atau tempat tinggi.", 
          contoh_jp: "次の駅で降ります。", 
          contoh_rm: "Tsugi no eki de orimasu.", 
          contoh_id: "Saya turun di stasiun berikutnya.",
          contoh2_jp: "バスを降ります。",
          contoh2_rm: "Basu o orimasu.",
          contoh2_id: "Saya turun dari bus."
        },
        { 
          kata: "見る (みる)", 
          romaji: "miru", 
          arti: "melihat / menonton", 
          penggunaan: "Kata kerja golongan 2 (ichidan). Bentuk masu: 見ます (mimasu).", 
          contoh_jp: "映画を見ます。", 
          contoh_rm: "Eiga o mimasu.", 
          contoh_id: "Saya menonton film.",
          contoh2_jp: "毎日テレビを見ます。",
          contoh2_rm: "Mainichi terebi o mimasu.",
          contoh2_id: "Setiap hari saya menonton TV."
        },
        { 
          kata: "聞く (きく)", 
          romaji: "kiku", 
          arti: "mendengar / bertanya", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 聞きます (kikimasu). Bisa berarti 'mendengar' atau 'bertanya' tergantung konteks.", 
          contoh_jp: "音楽を聞きます。", 
          contoh_rm: "Ongaku o kikimasu.", 
          contoh_id: "Saya mendengarkan musik.",
          contoh2_jp: "先生に聞きます。",
          contoh2_rm: "Sensei ni kikimasu.",
          contoh2_id: "Saya bertanya kepada guru."
        },
        { 
          kata: "読む (よむ)", 
          romaji: "yomu", 
          arti: "membaca", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 読みます (yomimasu).", 
          contoh_jp: "本を読みます。", 
          contoh_rm: "Hon o yomimasu.", 
          contoh_id: "Saya membaca buku.",
          contoh2_jp: "毎日新聞を読みます。",
          contoh2_rm: "Mainichi shinbun o yomimasu.",
          contoh2_id: "Setiap hari saya membaca koran."
        },
        { 
          kata: "書く (かく)", 
          romaji: "kaku", 
          arti: "menulis", 
          penggunaan: "Kata kerja golongan 1 (godan). Bentuk masu: 書きます (kakimasu).", 
          contoh_jp: "手紙を書きます。", 
          contoh_rm: "Tegami o kakimasu.", 
          contoh_id: "Saya menulis surat.",
          contoh2_jp: "ノートに名前を書きます。",
          contoh2_rm: "Nooto ni namae o kakimasu.",
          contoh2_id: "Saya menulis nama di buku catatan."
        }
      ]
    }
  ]
},
  {
  key: "sifat-kondisi",
  no: 7,
  nama: "Sifat & Kondisi",
  icon: "&#128522;",
  contoh: "大きい・小さい・新しい",
  subkategori: [
    {
      nama: "Sifat Ukuran",
      kata: [
        { 
          kata: "大きい (おおきい)", 
          romaji: "ookii", 
          arti: "besar", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 大きくない (ookikunai).", 
          contoh_jp: "この箱は大きいです。", 
          contoh_rm: "Kono hako wa ookii desu.", 
          contoh_id: "Kotak ini besar.",
          contoh2_jp: "大きい犬がいます。",
          contoh2_rm: "Ookii inu ga imasu.",
          contoh2_id: "Ada anjing besar."
        },
        { 
          kata: "小さい (ちいさい)", 
          romaji: "chiisai", 
          arti: "kecil", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 小さくない (chiisakunai).", 
          contoh_jp: "小さい犬です。", 
          contoh_rm: "Chiisai inu desu.", 
          contoh_id: "Ini anjing kecil.",
          contoh2_jp: "小さい部屋に住んでいます。",
          contoh2_rm: "Chiisai heya ni sunde imasu.",
          contoh2_id: "Saya tinggal di kamar kecil."
        },
        { 
          kata: "高い (たかい)", 
          romaji: "takai", 
          arti: "tinggi / mahal", 
          penggunaan: "Bisa berarti 'tinggi' (untuk benda) atau 'mahal' (untuk harga), tergantung konteks.", 
          contoh_jp: "この服は高いです。", 
          contoh_rm: "Kono fuku wa takai desu.", 
          contoh_id: "Baju ini mahal.",
          contoh2_jp: "高い山に登りました。",
          contoh2_rm: "Takai yama ni noborimashita.",
          contoh2_id: "Saya mendaki gunung yang tinggi."
        },
        { 
          kata: "安い (やすい)", 
          romaji: "yasui", 
          arti: "murah", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 安くない (yasukunai).", 
          contoh_jp: "この店は安いです。", 
          contoh_rm: "Kono mise wa yasui desu.", 
          contoh_id: "Toko ini murah.",
          contoh2_jp: "安い野菜を買いました。",
          contoh2_rm: "Yasui yasai o kaimashita.",
          contoh2_id: "Saya membeli sayur murah."
        },
        { 
          kata: "長い (ながい)", 
          romaji: "nagai", 
          arti: "panjang", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 長くない (nagakunai).", 
          contoh_jp: "この川は長いです。", 
          contoh_rm: "Kono kawa wa nagai desu.", 
          contoh_id: "Sungai ini panjang.",
          contoh2_jp: "長い髪が好きです。",
          contoh2_rm: "Nagai kami ga suki desu.",
          contoh2_id: "Saya suka rambut panjang."
        },
        { 
          kata: "短い (みじかい)", 
          romaji: "mijikai", 
          arti: "pendek", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 短くない (mijikakunai).", 
          contoh_jp: "短いスカートを穿きます。", 
          contoh_rm: "Mijikai sukaato o hakimasu.", 
          contoh_id: "Saya memakai rok pendek.",
          contoh2_jp: "この本は短いです。",
          contoh2_rm: "Kono hon wa mijikai desu.",
          contoh2_id: "Buku ini pendek."
        }
      ]
    },
    {
      nama: "Sifat Perasaan",
      kata: [
        { 
          kata: "嬉しい (うれしい)", 
          romaji: "ureshii", 
          arti: "senang", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk menyatakan perasaan senang pribadi.", 
          contoh_jp: "とても嬉しいです。", 
          contoh_rm: "Totemo ureshii desu.", 
          contoh_id: "Saya sangat senang.",
          contoh2_jp: "合格して嬉しいです。",
          contoh2_rm: "Goukaku shite ureshii desu.",
          contoh2_id: "Saya senang karena lulus."
        },
        { 
          kata: "楽しい (たのしい)", 
          romaji: "tanoshii", 
          arti: "menyenangkan", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk suasana atau kegiatan yang menyenangkan.", 
          contoh_jp: "旅行は楽しいです。", 
          contoh_rm: "Ryokou wa tanoshii desu.", 
          contoh_id: "Liburan itu menyenangkan.",
          contoh2_jp: "友達と話すのは楽しいです。",
          contoh2_rm: "Tomodachi to hanasu no wa tanoshii desu.",
          contoh2_id: "Berbicara dengan teman itu menyenangkan."
        },
        { 
          kata: "悲しい (かなしい)", 
          romaji: "kanashii", 
          arti: "sedih", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk perasaan sedih.", 
          contoh_jp: "悲しいニュースです。", 
          contoh_rm: "Kanashii nyuusu desu.", 
          contoh_id: "Ini berita yang sedih.",
          contoh2_jp: "彼女が引っ越して悲しいです。",
          contoh2_rm: "Kanojo ga hikkoshite kanashii desu.",
          contoh2_id: "Saya sedih karena dia pindah."
        },
        { 
          kata: "寂しい (さびしい)", 
          romaji: "sabishii", 
          arti: "kesepian", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk perasaan kesepian atau rindu.", 
          contoh_jp: "一人で寂しいです。", 
          contoh_rm: "Hitori de sabishii desu.", 
          contoh_id: "Sendirian jadi kesepian.",
          contoh2_jp: "家族に会えなくて寂しいです。",
          contoh2_rm: "Kazoku ni aenakute sabishii desu.",
          contoh2_id: "Saya kesepian karena tidak bisa bertemu keluarga."
        },
        { 
          kata: "怖い (こわい)", 
          romaji: "kowai", 
          arti: "takut", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk perasaan takut.", 
          contoh_jp: "犬が怖いです。", 
          contoh_rm: "Inu ga kowai desu.", 
          contoh_id: "Saya takut anjing.",
          contoh2_jp: "怖い映画を見ました。",
          contoh2_rm: "Kowai eiga o mimashita.",
          contoh2_id: "Saya menonton film horor."
        },
        { 
          kata: "心配 (しんぱい)", 
          romaji: "shinpai", 
          arti: "khawatir", 
          penggunaan: "Kata sifat-na (na-keiyoushi). Dipakai dengan な (na) sebelum kata benda, atau です (desu) di akhir.", 
          contoh_jp: "母が心配です。", 
          contoh_rm: "Haha ga shinpai desu.", 
          contoh_id: "Saya khawatir pada ibu.",
          contoh2_jp: "心配しないでください。",
          contoh2_rm: "Shinpai shinaide kudasai.",
          contoh2_id: "Jangan khawatir."
        }
      ]
    },
    {
      nama: "Sifat Cuaca",
      kata: [
        { 
          kata: "暑い (あつい)", 
          romaji: "atsui", 
          arti: "panas (cuaca)", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Khusus untuk cuaca/suhu udara. Untuk benda panas, pakai 熱い (atsui).", 
          contoh_jp: "今日は暑いですね。", 
          contoh_rm: "Kyou wa atsui desu ne.", 
          contoh_id: "Hari ini panas ya.",
          contoh2_jp: "夏はとても暑いです。",
          contoh2_rm: "Natsu wa totemo atsui desu.",
          contoh2_id: "Musim panas sangat panas."
        },
        { 
          kata: "寒い (さむい)", 
          romaji: "samui", 
          arti: "dingin (cuaca)", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Khusus untuk cuaca/udara. Untuk benda dingin, pakai 冷たい (tsumetai).", 
          contoh_jp: "冬は寒いです。", 
          contoh_rm: "Fuyu wa samui desu.", 
          contoh_id: "Musim dingin dingin.",
          contoh2_jp: "今日は寒いから、コートを着ます。",
          contoh2_rm: "Kyou wa samui kara, kooto o kimasu.",
          contoh2_id: "Karena hari ini dingin, saya pakai mantel."
        },
        { 
          kata: "涼しい (すずしい)", 
          romaji: "suzushii", 
          arti: "sejuk", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk udara yang nyaman sejuk.", 
          contoh_jp: "秋は涼しいです。", 
          contoh_rm: "Aki wa suzushii desu.", 
          contoh_id: "Musim gugur sejuk.",
          contoh2_jp: "朝は涼しいです。",
          contoh2_rm: "Asa wa suzushii desu.",
          contoh2_id: "Pagi hari sejuk."
        },
        { 
          kata: "暖かい (あたたかい)", 
          romaji: "atatakai", 
          arti: "hangat", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Dipakai untuk cuaca atau suasana yang hangat.", 
          contoh_jp: "春は暖かいです。", 
          contoh_rm: "Haru wa atatakai desu.", 
          contoh_id: "Musim semi hangat.",
          contoh2_jp: "今日は暖かいですね。",
          contoh2_rm: "Kyou wa atatakai desu ne.",
          contoh2_id: "Hari ini hangat ya."
        },
        { 
          kata: "晴れ (はれ)", 
          romaji: "hare", 
          arti: "cerah", 
          penggunaan: "Kata benda. Dipakai untuk menyatakan cuaca cerah. Sering muncul di prakiraan cuaca JFT-Basic.", 
          contoh_jp: "明日は晴れです。", 
          contoh_rm: "Ashita wa hare desu.", 
          contoh_id: "Besok cerah.",
          contoh2_jp: "晴れの日は気持ちがいいです。",
          contoh2_rm: "Hare no hi wa kimochi ga ii desu.",
          contoh2_id: "Hari cerah membuat perasaan senang."
        },
        { 
          kata: "曇り (くもり)", 
          romaji: "kumori", 
          arti: "mendung", 
          penggunaan: "Kata benda. Dipakai untuk menyatakan cuaca mendung. Sering muncul di prakiraan cuaca JFT-Basic.", 
          contoh_jp: "今日は曇りです。", 
          contoh_rm: "Kyou wa kumori desu.", 
          contoh_id: "Hari ini mendung.",
          contoh2_jp: "曇りの日は写真が暗いです。",
          contoh2_rm: "Kumori no hi wa shashin ga kurai desu.",
          contoh2_id: "Di hari mendung, foto jadi gelap."
        }
      ]
    },
    {
      nama: "Sifat Penilaian",
      kata: [
        { 
          kata: "いい / よい", 
          romaji: "ii / yoi", 
          arti: "bagus / baik", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif tidak beraturan: よくない (yokunai).", 
          contoh_jp: "とてもいい天気です。", 
          contoh_rm: "Totemo ii tenki desu.", 
          contoh_id: "Cuaca yang sangat bagus.",
          contoh2_jp: "これはいい本です。",
          contoh2_rm: "Kore wa ii hon desu.",
          contoh2_id: "Ini buku yang bagus."
        },
        { 
          kata: "悪い (わるい)", 
          romaji: "warui", 
          arti: "buruk / jelek", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 悪くない (warukunai).", 
          contoh_jp: "気分が悪いです。", 
          contoh_rm: "Kibun ga warui desu.", 
          contoh_id: "Badan saya kurang enak.",
          contoh2_jp: "天気が悪いです。",
          contoh2_rm: "Tenki ga warui desu.",
          contoh2_id: "Cuacanya buruk."
        },
        { 
          kata: "新しい (あたらしい)", 
          romaji: "atarashii", 
          arti: "baru", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 新しくない (atarashikunai).", 
          contoh_jp: "新しい靴を買います。", 
          contoh_rm: "Atarashii kutsu o kaimasu.", 
          contoh_id: "Saya membeli sepatu baru.",
          contoh2_jp: "新しい先生が来ました。",
          contoh2_rm: "Atarashii sensei ga kimashita.",
          contoh2_id: "Guru baru telah datang."
        },
        { 
          kata: "古い (ふるい)", 
          romaji: "furui", 
          arti: "lama / tua", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 古くない (furukunai).", 
          contoh_jp: "この家は古いです。", 
          contoh_rm: "Kono ie wa furui desu.", 
          contoh_id: "Rumah ini lama.",
          contoh2_jp: "古い写真を見ました。",
          contoh2_rm: "Furui shashin o mimashita.",
          contoh2_id: "Saya melihat foto lama."
        },
        { 
  kata: "辛い (からい)", 
  romaji: "karai", 
  arti: "pedas", 
  penggunaan: "Kata sifat-i. Dipakai untuk rasa pedas. Hati-hati: 辛い juga bisa dibaca つらい (tsurai) yang berarti 'berat/sulit' secara emosional.", 
  contoh_jp: "このカレーは辛いです。", 
  contoh_rm: "Kono karee wa karai desu.", 
  contoh_id: "Kari ini pedas.",
  contoh2_jp: "辛い料理が好きです。",
  contoh2_rm: "Karai ryouri ga suki desu.",
  contoh2_id: "Saya suka masakan pedas."
},
{ 
  kata: "痛い (いたい)", 
  romaji: "itai", 
  arti: "sakit / nyeri", 
  penggunaan: "Kata sifat-i. Dipakai untuk menyatakan rasa sakit fisik. Sering muncul di JFT-Basic (kesehatan).", 
  contoh_jp: "頭が痛いです。", 
  contoh_rm: "Atama ga itai desu.", 
  contoh_id: "Kepala saya sakit.",
  contoh2_jp: "お腹が痛いです。",
  contoh2_rm: "Onaka ga itai desu.",
  contoh2_id: "Perut saya sakit."
},
{ 
  kata: "甘い (あまい)", 
  romaji: "amai", 
  arti: "manis", 
  penggunaan: "Kata sifat-i. Dipakai untuk rasa manis.", 
  contoh_jp: "このケーキは甘いです。", 
  contoh_rm: "Kono keeki wa amai desu.", 
  contoh_id: "Kue ini manis.",
  contoh2_jp: "甘いものが好きです。",
  contoh2_rm: "Amai mono ga suki desu.",
  contoh2_id: "Saya suka makanan manis."
},
{ 
  kata: "重い (おもい)", 
  romaji: "omoi", 
  arti: "berat", 
  penggunaan: "Kata sifat-i. Dipakai untuk berat fisik. Kebalikannya: 軽い (karui) = ringan.", 
  contoh_jp: "この鞄は重いです。", 
  contoh_rm: "Kono kaban wa omoi desu.", 
  contoh_id: "Tas ini berat.",
  contoh2_jp: "荷物が重いです。",
  contoh2_rm: "Nimotsu ga omoi desu.",
  contoh2_id: "Barangnya berat."
},
        { 
          kata: "難しい (むずかしい)", 
          romaji: "muzukashii", 
          arti: "sulit", 
          penggunaan: "Kata sifat-i (i-keiyoushi). Bentuk negatif: 難しくない (muzukashikunai).", 
          contoh_jp: "この問題は難しいです。", 
          contoh_rm: "Kono mondai wa muzukashii desu.", 
          contoh_id: "Soal ini sulit.",
          contoh2_jp: "漢字は難しいですが、面白いです。",
          contoh2_rm: "Kanji wa muzukashii desu ga, omoshiroi desu.",
          contoh2_id: "Kanji itu sulit, tapi menarik."
        },
        { 
          kata: "簡単 (かんたん)", 
          romaji: "kantan", 
          arti: "mudah / gampang", 
          penggunaan: "Kata sifat-na (na-keiyoushi). Dipakai dengan な (na) sebelum kata benda, atau です (desu) di akhir.", 
          contoh_jp: "このテストは簡単です。", 
          contoh_rm: "Kono tesuto wa kantan desu.", 
          contoh_id: "Ujian ini mudah.",
          contoh2_jp: "簡単な料理を作ります。",
          contoh2_rm: "Kantan na ryouri o tsukurimasu.",
          contoh2_id: "Saya membuat masakan yang mudah."
        }
      ]
    }
  ]
},
   {
  key: "tempat-arah",
  no: 8,
  nama: "Tempat & Arah",
  icon: "&#128205;",
  contoh: "上・下・前・後",
  subkategori: [
    {
      nama: "Arah",
      kata: [
        { 
          kata: "上 (うえ)", 
          romaji: "ue", 
          arti: "atas", 
          penggunaan: "Dipakai untuk menyatakan posisi di atas. Pola: 〜の上 (〜 no ue).", 
          contoh_jp: "机の上に本があります。", 
          contoh_rm: "Tsukue no ue ni hon ga arimasu.", 
          contoh_id: "Ada buku di atas meja.",
          contoh2_jp: "上を見てください。",
          contoh2_rm: "Ue o mite kudasai.",
          contoh2_id: "Tolong lihat ke atas."
        },
        { 
          kata: "下 (した)", 
          romaji: "shita", 
          arti: "bawah", 
          penggunaan: "Dipakai untuk menyatakan posisi di bawah. Pola: 〜の下 (〜 no shita).", 
          contoh_jp: "椅子の下に猫がいます。", 
          contoh_rm: "Isu no shita ni neko ga imasu.", 
          contoh_id: "Ada kucing di bawah kursi.",
          contoh2_jp: "机の下に鞄があります。",
          contoh2_rm: "Tsukue no shita ni kaban ga arimasu.",
          contoh2_id: "Ada tas di bawah meja."
        },
        { 
          kata: "前 (まえ)", 
          romaji: "mae", 
          arti: "depan / sebelum", 
          penggunaan: "Bisa berarti 'depan' (posisi) atau 'sebelum' (waktu), tergantung konteks.", 
          contoh_jp: "駅の前で待ちます。", 
          contoh_rm: "Eki no mae de machimasu.", 
          contoh_id: "Saya menunggu di depan stasiun.",
          contoh2_jp: "ご飯の前に手を洗います。",
          contoh2_rm: "Gohan no mae ni te o araimasu.",
          contoh2_id: "Sebelum makan, cuci tangan."
        },
        { 
          kata: "後ろ (うしろ)", 
          romaji: "ushiro", 
          arti: "belakang", 
          penggunaan: "Dipakai untuk menyatakan posisi di belakang. Pola: 〜の後ろ (〜 no ushiro).", 
          contoh_jp: "家の後ろに庭があります。", 
          contoh_rm: "Ie no ushiro ni niwa ga arimasu.", 
          contoh_id: "Ada halaman di belakang rumah.",
          contoh2_jp: "後ろを見ないでください。",
          contoh2_rm: "Ushiro o minaide kudasai.",
          contoh2_id: "Jangan melihat ke belakang."
        },
        { 
          kata: "右 (みぎ)", 
          romaji: "migi", 
          arti: "kanan", 
          penggunaan: "Dipakai untuk menyatakan arah kanan. Sering muncul di petunjuk arah JFT-Basic.", 
          contoh_jp: "次の角を右へ曲がります。", 
          contoh_rm: "Tsugi no kado o migi e magarimasu.", 
          contoh_id: "Belok kanan di tikungan berikutnya.",
          contoh2_jp: "右側を歩きます。",
          contoh2_rm: "Migigawa o arukimasu.",
          contoh2_id: "Berjalan di sisi kanan."
        },
        { 
          kata: "左 (ひだり)", 
          romaji: "hidari", 
          arti: "kiri", 
          penggunaan: "Dipakai untuk menyatakan arah kiri. Sering muncul di petunjuk arah JFT-Basic.", 
          contoh_jp: "左へ曲がってください。", 
          contoh_rm: "Hidari e magatte kudasai.", 
          contoh_id: "Tolong belok kiri.",
          contoh2_jp: "銀行は左にあります。",
          contoh2_rm: "Ginkou wa hidari ni arimasu.",
          contoh2_id: "Bank ada di sebelah kiri."
        }
      ]
    },
    {
      nama: "Tempat Umum",
      kata: [
        { 
          kata: "駅 (えき)", 
          romaji: "eki", 
          arti: "stasiun", 
          penggunaan: "Dipakai untuk menyebut stasiun kereta. Sering muncul di JFT-Basic (petunjuk arah, transportasi).", 
          contoh_jp: "駅まで歩きます。", 
          contoh_rm: "Eki made arukimasu.", 
          contoh_id: "Saya berjalan sampai stasiun.",
          contoh2_jp: "駅はどこですか。",
          contoh2_rm: "Eki wa doko desu ka.",
          contoh2_id: "Stasiun di mana?"
        },
        { 
          kata: "学校 (がっこう)", 
          romaji: "gakkou", 
          arti: "sekolah", 
          contoh_jp: "学校は近いです。", 
          contoh_rm: "Gakkou wa chikai desu.", 
          contoh_id: "Sekolahnya dekat.",
          contoh2_jp: "毎日学校へ行きます。",
          contoh2_rm: "Mainichi gakkou e ikimasu.",
          contoh2_id: "Setiap hari saya pergi ke sekolah."
        },
        { 
          kata: "病院 (びょういん)", 
          romaji: "byouin", 
          arti: "rumah sakit", 
          penggunaan: "Dipakai untuk menyebut rumah sakit. Sering muncul di JFT-Basic (situasi darurat, kesehatan).", 
          contoh_jp: "病院へ行きます。", 
          contoh_rm: "Byouin e ikimasu.", 
          contoh_id: "Saya pergi ke rumah sakit.",
          contoh2_jp: "病院は駅の近くです。",
          contoh2_rm: "Byouin wa eki no chikaku desu.",
          contoh2_id: "Rumah sakit dekat stasiun."
        },
        { 
          kata: "銀行 (ぎんこう)", 
          romaji: "ginkou", 
          arti: "bank", 
          penggunaan: "Dipakai untuk menyebut bank. Sering muncul di JFT-Basic (situasi keuangan).", 
          contoh_jp: "銀行でお金を下ろします。", 
          contoh_rm: "Ginkou de okane o oroshimasu.", 
          contoh_id: "Saya menarik uang di bank.",
          contoh2_jp: "銀行は何時からですか。",
          contoh2_rm: "Ginkou wa nanji kara desu ka.",
          contoh2_id: "Bank buka dari jam berapa?"
        },
        { 
          kata: "郵便局 (ゆうびんきょく)", 
          romaji: "yuubinkyoku", 
          arti: "kantor pos", 
          penggunaan: "Dipakai untuk menyebut kantor pos. Sering muncul di JFT-Basic (kirim barang, formulir).", 
          contoh_jp: "郵便局で切手を買います。", 
          contoh_rm: "Yuubinkyoku de kitte o kaimasu.", 
          contoh_id: "Saya membeli perangko di kantor pos.",
          contoh2_jp: "郵便局はどこですか。",
          contoh2_rm: "Yuubinkyoku wa doko desu ka.",
          contoh2_id: "Kantor pos di mana?"
        },
        { 
          kata: "交番 (こうばん)", 
          romaji: "kouban", 
          arti: "pos polisi", 
          penggunaan: "Dipakai untuk menyebut pos polisi kecil di Jepang. Sering muncul di JFT-Basic (minta bantuan, arah).", 
          contoh_jp: "交番で道を聞きます。", 
          contoh_rm: "Kouban de michi o kikimasu.", 
          contoh_id: "Saya bertanya jalan di pos polisi.",
          contoh2_jp: "交番は駅の前にあります。",
          contoh2_rm: "Kouban wa eki no mae ni arimasu.",
          contoh2_id: "Pos polisi ada di depan stasiun."
        }
      ]
    },
    {
      nama: "Toko",
      kata: [
        { 
          kata: "店 (みせ)", 
          romaji: "mise", 
          arti: "toko", 
          penggunaan: "Dipakai untuk menyebut toko secara umum. Bisa digabung: パン屋 (toko roti), 本屋 (toko buku).", 
          contoh_jp: "あの店は安いです。", 
          contoh_rm: "Ano mise wa yasui desu.", 
          contoh_id: "Toko itu murah.",
          contoh2_jp: "店は十時に開きます。",
          contoh2_rm: "Mise wa juuji ni akimasu.",
          contoh2_id: "Toko buka jam 10."
        },
        { 
          kata: "スーパー", 
          romaji: "suupaa", 
          arti: "supermarket", 
          penggunaan: "Dipakai untuk menyebut supermarket. Sering muncul di JFT-Basic (belanja).", 
          contoh_jp: "スーパーで野菜を買います。", 
          contoh_rm: "Suupaa de yasai o kaimasu.", 
          contoh_id: "Saya membeli sayur di supermarket.",
          contoh2_jp: "スーパーは駅の近くです。",
          contoh2_rm: "Suupaa wa eki no chikaku desu.",
          contoh2_id: "Supermarket dekat stasiun."
        },
        { 
          kata: "コンビニ", 
          romaji: "konbini", 
          arti: "minimarket", 
          penggunaan: "Dipakai untuk menyebut convenience store 24 jam di Jepang. Sering muncul di JFT-Basic.", 
          contoh_jp: "コンビニでお弁当を買います。", 
          contoh_rm: "Konbini de obentou o kaimasu.", 
          contoh_id: "Saya membeli bekal di minimarket.",
          contoh2_jp: "コンビニは24時間開いています。",
          contoh2_rm: "Konbini wa nijuuyojikan aite imasu.",
          contoh2_id: "Minimarket buka 24 jam."
        },
        { 
          kata: "本屋 (ほんや)", 
          romaji: "hon'ya", 
          arti: "toko buku", 
          contoh_jp: "本屋で買いました。", 
          contoh_rm: "Hon'ya de kaimashita.", 
          contoh_id: "Saya membelinya di toko buku.",
          contoh2_jp: "本屋で雑誌を読みます。",
          contoh2_rm: "Hon'ya de zasshi o yomimasu.",
          contoh2_id: "Saya membaca majalah di toko buku."
        },
        { 
          kata: "八百屋 (やおや)", 
          romaji: "yaoya", 
          arti: "toko sayur", 
          contoh_jp: "八百屋で野菜を買います。", 
          contoh_rm: "Yaoya de yasai o kaimasu.", 
          contoh_id: "Saya membeli sayur di toko sayur.",
          contoh2_jp: "八百屋は安いです。",
          contoh2_rm: "Yaoya wa yasui desu.",
          contoh2_id: "Toko sayurnya murah."
        },
        { 
          kata: "喫茶店 (きっさてん)", 
          romaji: "kissaten", 
          arti: "kedai kopi", 
          penggunaan: "Dipakai untuk menyebut kedai kopi tradisional Jepang, bukan kafe modern (カフェ).", 
          contoh_jp: "喫茶店で話します。", 
          contoh_rm: "Kissaten de hanashimasu.", 
          contoh_id: "Saya berbincang di kedai kopi.",
          contoh2_jp: "喫茶店でコーヒーを飲みます。",
          contoh2_rm: "Kissaten de koohii o nomimasu.",
          contoh2_id: "Saya minum kopi di kedai kopi."
        }
      ]
    },
    {
      nama: "Transportasi",
      kata: [
        { 
          kata: "電車 (でんしゃ)", 
          romaji: "densha", 
          arti: "kereta", 
          penggunaan: "Dipakai untuk menyebut kereta listrik. Sering muncul di JFT-Basic (navigasi, jadwal).", 
          contoh_jp: "電車に乗ります。", 
          contoh_rm: "Densha ni norimasu.", 
          contoh_id: "Saya naik kereta.",
          contoh2_jp: "電車で学校へ行きます。",
          contoh2_rm: "Densha de gakkou e ikimasu.",
          contoh2_id: "Saya pergi ke sekolah naik kereta."
        },
        { 
          kata: "バス", 
          romaji: "basu", 
          arti: "bus", 
          penggunaan: "Dipakai untuk menyebut bus. Sering muncul di JFT-Basic (navigasi, jadwal).", 
          contoh_jp: "バスで駅へ行きます。", 
          contoh_rm: "Basu de eki e ikimasu.", 
          contoh_id: "Saya pergi ke stasiun naik bus.",
          contoh2_jp: "バスは何時に来ますか。",
          contoh2_rm: "Basu wa nanji ni kimasu ka.",
          contoh2_id: "Bus datang jam berapa?"
        },
        { 
          kata: "自転車 (じてんしゃ)", 
          romaji: "jitensha", 
          arti: "sepeda", 
          contoh_jp: "自転車を買いたいです。", 
          contoh_rm: "Jitensha o kaitai desu.", 
          contoh_id: "Saya ingin membeli sepeda.",
          contoh2_jp: "自転車で公園へ行きます。",
          contoh2_rm: "Jitensha de kouen e ikimasu.",
          contoh2_id: "Saya pergi ke taman naik sepeda."
        },
        { 
          kata: "車 (くるま)", 
          romaji: "kuruma", 
          arti: "mobil", 
          contoh_jp: "車で会社へ行きます。", 
          contoh_rm: "Kuruma de kaisha e ikimasu.", 
          contoh_id: "Saya pergi ke kantor naik mobil.",
          contoh2_jp: "父は車を運転します。",
          contoh2_rm: "Chichi wa kuruma o untenshimasu.",
          contoh2_id: "Ayah saya mengendarai mobil."
        },
        { 
          kata: "タクシー", 
          romaji: "takushii", 
          arti: "taksi", 
          penggunaan: "Dipakai untuk menyebut taksi. Sering muncul di JFT-Basic (situasi darurat, transportasi).", 
          contoh_jp: "タクシーで行きます。", 
          contoh_rm: "Takushii de ikimasu.", 
          contoh_id: "Saya pergi naik taksi.",
          contoh2_jp: "タクシーを呼んでください。",
          contoh2_rm: "Takushii o yonde kudasai.",
          contoh2_id: "Tolong panggilkan taksi."
        },
        { 
          kata: "飛行機 (ひこうき)", 
          romaji: "hikouki", 
          arti: "pesawat", 
          penggunaan: "Dipakai untuk menyebut pesawat terbang. Sering muncul di JFT-Basic (traveling, bandara).", 
          contoh_jp: "飛行機で日本へ行きます。", 
          contoh_rm: "Hikouki de Nihon e ikimasu.", 
          contoh_id: "Saya pergi ke Jepang naik pesawat.",
          contoh2_jp: "飛行機の中で寝ました。",
          contoh2_rm: "Hikouki no naka de nemashita.",
          contoh2_id: "Saya tidur di dalam pesawat."
        }
      ]
    }
  ]
},
  {
  key: "angka-jumlah",
  no: 9,
  nama: "Angka & Jumlah",
  icon: "&#128290;",
  contoh: "一・二・三・何",
  subkategori: [
    {
      nama: "Angka Dasar",
      kata: [
        { 
          kata: "一 (いち)", 
          romaji: "ichi", 
          arti: "satu", 
          penggunaan: "Dipakai untuk angka 1. Saat menghitung benda, sering pakai 一つ (hitotsu).", 
          contoh_jp: "一から十まで数えます。", 
          contoh_rm: "Ichi kara juu made kazoemasu.", 
          contoh_id: "Menghitung dari satu sampai sepuluh.",
          contoh2_jp: "一円です。",
          contoh2_rm: "Ichi en desu.",
          contoh2_id: "Satu yen."
        },
        { 
          kata: "二 (に)", 
          romaji: "ni", 
          arti: "dua", 
          penggunaan: "Dipakai untuk angka 2. Saat menghitung benda, sering pakai 二つ (futatsu).", 
          contoh_jp: "二回行きました。", 
          contoh_rm: "Nikai ikimashita.", 
          contoh_id: "Saya sudah pergi dua kali.",
          contoh2_jp: "二時に会います。",
          contoh2_rm: "Niji ni aimasu.",
          contoh2_id: "Bertemu jam 2."
        },
        { 
          kata: "三 (さん)", 
          romaji: "san", 
          arti: "tiga", 
          penggunaan: "Dipakai untuk angka 3. Saat menghitung benda, sering pakai 三つ (mittsu).", 
          contoh_jp: "三人で行きます。", 
          contoh_rm: "Sannin de ikimasu.", 
          contoh_id: "Pergi bertiga.",
          contoh2_jp: "三時に出発します。",
          contoh2_rm: "Sanji ni shuppatsu shimasu.",
          contoh2_id: "Berangkat jam 3."
        },
        { 
          kata: "四 (よん / し)", 
          romaji: "yon / shi", 
          arti: "empat", 
          penggunaan: "Biasanya dibaca よん (yon) karena し (shi) sama bunyinya dengan 'kematian'.", 
          contoh_jp: "四人います。", 
          contoh_rm: "Yonin imasu.", 
          contoh_id: "Ada empat orang.",
          contoh2_jp: "四時に起きます。",
          contoh2_rm: "Yoji ni okimasu.",
          contoh2_id: "Bangun jam 4."
        },
        { 
          kata: "五 (ご)", 
          romaji: "go", 
          arti: "lima", 
          contoh_jp: "五分待ってください。", 
          contoh_rm: "Gofun matte kudasai.", 
          contoh_id: "Tolong tunggu 5 menit.",
          contoh2_jp: "五時に終わります。",
          contoh2_rm: "Goji ni owarimasu.",
          contoh2_id: "Selesai jam 5."
        },
        { 
          kata: "十 (じゅう)", 
          romaji: "juu", 
          arti: "sepuluh", 
          contoh_jp: "十時に行きます。", 
          contoh_rm: "Juuji ni ikimasu.", 
          contoh_id: "Saya pergi jam 10.",
          contoh2_jp: "十円です。",
          contoh2_rm: "Juu en desu.",
          contoh2_id: "Sepuluh yen."
        }
      ]
    },
    {
      nama: "Angka Bantu",
      kata: [
        { 
          kata: "一つ (ひとつ)", 
          romaji: "hitotsu", 
          arti: "satu buah", 
          penggunaan: "Dipakai untuk menghitung benda secara umum (1–10).", 
          contoh_jp: "これを一つください。", 
          contoh_rm: "Kore o hitotsu kudasai.", 
          contoh_id: "Tolong beri ini satu buah.",
          contoh2_jp: "りんごを一つ食べました。",
          contoh2_rm: "Ringo o hitotsu tabemashita.",
          contoh2_id: "Saya makan satu apel."
        },
        { 
          kata: "二つ (ふたつ)", 
          romaji: "futatsu", 
          arti: "dua buah", 
          penggunaan: "Dipakai untuk menghitung benda secara umum.", 
          contoh_jp: "パンを二つ買いました。", 
          contoh_rm: "Pan o futatsu kaimashita.", 
          contoh_id: "Saya membeli dua roti.",
          contoh2_jp: "いすが二つあります。",
          contoh2_rm: "Isu ga futatsu arimasu.",
          contoh2_id: "Ada dua kursi."
        },
        { 
          kata: "三つ (みっつ)", 
          romaji: "mittsu", 
          arti: "tiga buah", 
          penggunaan: "Dipakai untuk menghitung benda secara umum.", 
          contoh_jp: "みっつあります。", 
          contoh_rm: "Mittsu arimasu.", 
          contoh_id: "Ada tiga buah.",
          contoh2_jp: "ケーキを三つ買います。",
          contoh2_rm: "Keeki o mittsu kaimasu.",
          contoh2_id: "Saya membeli tiga kue."
        },
        { 
          kata: "〜人 (にん)", 
          romaji: "nin", 
          arti: "〜 orang", 
          penggunaan: "Dipakai untuk menghitung jumlah orang. Contoh: 一人 (hitori), 二人 (futari), 三人 (sannin).", 
          contoh_jp: "家族は四人です。", 
          contoh_rm: "Kazoku wa yonin desu.", 
          contoh_id: "Keluarga saya ada empat orang.",
          contoh2_jp: "二人で行きます。",
          contoh2_rm: "Futari de ikimasu.",
          contoh2_id: "Pergi berdua."
        },
        { 
          kata: "〜枚 (まい)", 
          romaji: "mai", 
          arti: "〜 lembar", 
          penggunaan: "Dipakai untuk menghitung benda tipis: kertas, perangko, piring, baju.", 
          contoh_jp: "切手を三枚ください。", 
          contoh_rm: "Kitte o sanmai kudasai.", 
          contoh_id: "Tolong beri 3 lembar perangko.",
          contoh2_jp: "紙を二枚使います。",
          contoh2_rm: "Kami o nimai tsukaimasu.",
          contoh2_id: "Saya memakai 2 lembar kertas."
        },
        { 
          kata: "〜台 (だい)", 
          romaji: "dai", 
          arti: "〜 unit", 
          penggunaan: "Dipakai untuk menghitung mesin, kendaraan, alat elektronik.", 
          contoh_jp: "車が二台あります。", 
          contoh_rm: "Kuruma ga nidai arimasu.", 
          contoh_id: "Ada dua mobil.",
          contoh2_jp: "パソコンを一台買いました。",
          contoh2_rm: "Pasokon o ichidai kaimashita.",
          contoh2_id: "Saya membeli satu komputer."
        }
      ]
    },
    {
      nama: "Ukuran",
      kata: [
        { 
          kata: "メートル", 
          romaji: "meetoru", 
          arti: "meter", 
          penggunaan: "Dipakai untuk menyebut satuan panjang. Sering muncul di JFT-Basic (ukur jarak).", 
          contoh_jp: "百メートル走ります。", 
          contoh_rm: "Hyaku meetoru hashirimasu.", 
          contoh_id: "Berlari 100 meter.",
          contoh2_jp: "この部屋は五メートルです。",
          contoh2_rm: "Kono heya wa go meetoru desu.",
          contoh2_id: "Kamar ini 5 meter."
        },
        { 
          kata: "キロ", 
          romaji: "kiro", 
          arti: "kilo / kilometer", 
          penggunaan: "Bisa berarti kilogram (berat) atau kilometer (jarak), tergantung konteks.", 
          contoh_jp: "五キロ歩きました。", 
          contoh_rm: "Gokiro arukimashita.", 
          contoh_id: "Saya berjalan 5 kilometer.",
          contoh2_jp: "肉を一キロ買います。",
          contoh2_rm: "Niku o ichikiro kaimasu.",
          contoh2_id: "Saya membeli 1 kilo daging."
        },
        { 
          kata: "グラム", 
          romaji: "guramu", 
          arti: "gram", 
          penggunaan: "Dipakai untuk menyebut satuan berat. Sering muncul di JFT-Basic (belanja).", 
          contoh_jp: "百グラムください。", 
          contoh_rm: "Hyaku guramu kudasai.", 
          contoh_id: "Tolong beri 100 gram.",
          contoh2_jp: "三百グラムの肉です。",
          contoh2_rm: "Sanbyaku guramu no niku desu.",
          contoh2_id: "Daging 300 gram."
        },
        { 
          kata: "〜度 (ど)", 
          romaji: "do", 
          arti: "〜 derajat", 
          penggunaan: "Dipakai untuk menyebut suhu, sudut, atau frekuensi. Sering muncul di JFT-Basic (cuaca).", 
          contoh_jp: "今日は三十度です。", 
          contoh_rm: "Kyou wa sanjuu do desu.", 
          contoh_id: "Hari ini 30 derajat.",
          contoh2_jp: "熱が三十八度あります。",
          contoh2_rm: "Netsu ga sanjuuhachi do arimasu.",
          contoh2_id: "Demamnya 38 derajat."
        },
        { 
          kata: "〜歳 (さい)", 
          romaji: "sai", 
          arti: "〜 tahun (umur)", 
          penggunaan: "Dipakai untuk menyebut umur. Sering muncul di JFT-Basic (perkenalan, formulir).", 
          contoh_jp: "私は二十歳です。", 
          contoh_rm: "Watashi wa hatachi desu.", 
          contoh_id: "Saya berumur 20 tahun.",
          contoh2_jp: "息子は五歳です。",
          contoh2_rm: "Musuko wa gosai desu.",
          contoh2_id: "Anak laki-laki saya berumur 5 tahun."
        },
        { 
          kata: "〜番 (ばん)", 
          romaji: "ban", 
          arti: "〜 nomor", 
          penggunaan: "Dipakai untuk menyebut nomor urut. Sering muncul di JFT-Basic (nomor antrian, nomor rumah).", 
          contoh_jp: "三番の窓口です。", 
          contoh_rm: "Sanban no madoguchi desu.", 
          contoh_id: "Ini loket nomor 3.",
          contoh2_jp: "電話番号は何番ですか。",
          contoh2_rm: "Denwa bangou wa nanban desu ka.",
          contoh2_id: "Nomor teleponnya berapa?"
        }
      ]
    },
    {
      nama: "Jumlah",
      kata: [
        { 
          kata: "全部 (ぜんぶ)", 
          romaji: "zenbu", 
          arti: "semuanya", 
          penggunaan: "Dipakai untuk menyatakan keseluruhan. Sering muncul di JFT-Basic (belanja, pembayaran).", 
          contoh_jp: "全部でいくらですか。", 
          contoh_rm: "Zenbu de ikura desu ka.", 
          contoh_id: "Semuanya jadi berapa?",
          contoh2_jp: "全部食べました。",
          contoh2_rm: "Zenbu tabemashita.",
          contoh2_id: "Saya makan semuanya."
        },
        { 
          kata: "半分 (はんぶん)", 
          romaji: "hanbun", 
          arti: "setengah", 
          contoh_jp: "半分食べました。", 
          contoh_rm: "Hanbun tabemashita.", 
          contoh_id: "Saya makan setengahnya.",
          contoh2_jp: "ケーキを半分に切ります。",
          contoh2_rm: "Keeki o hanbun ni kirimasu.",
          contoh2_id: "Saya memotong kue jadi setengah."
        },
        { 
          kata: "たくさん", 
          romaji: "takusan", 
          arti: "banyak", 
          penggunaan: "Dipakai untuk menyatakan jumlah banyak. Sering muncul di JFT-Basic.", 
          contoh_jp: "たくさん食べてください。", 
          contoh_rm: "Takusan tabete kudasai.", 
          contoh_id: "Silakan makan yang banyak.",
          contoh2_jp: "人がたくさんいます。",
          contoh2_rm: "Hito ga takusan imasu.",
          contoh2_id: "Banyak orang."
        },
        { 
          kata: "少し (すこし)", 
          romaji: "sukoshi", 
          arti: "sedikit", 
          penggunaan: "Dipakai untuk menyatakan jumlah sedikit. Sering muncul di JFT-Basic.", 
          contoh_jp: "少し待ってください。", 
          contoh_rm: "Sukoshi matte kudasai.", 
          contoh_id: "Tolong tunggu sebentar.",
          contoh2_jp: "少し疲れました。",
          contoh2_rm: "Sukoshi tsukaremashita.",
          contoh2_id: "Saya sedikit lelah."
        },
        { 
          kata: "もっと", 
          romaji: "motto", 
          arti: "lebih", 
          penggunaan: "Dipakai untuk meminta tambahan atau menyatakan perbandingan. Sering muncul di JFT-Basic (belanja, restoran).", 
          contoh_jp: "もっとください。", 
          contoh_rm: "Motto kudasai.", 
          contoh_id: "Tolong beri lagi.",
          contoh2_jp: "もっとゆっくり話してください。",
          contoh2_rm: "Motto yukkuri hanashite kudasai.",
          contoh2_id: "Tolong bicara lebih pelan."
        },
        { 
          kata: "だけ", 
          romaji: "dake", 
          arti: "hanya", 
          penggunaan: "Dipakai untuk menyatakan batasan. Sering muncul di JFT-Basic (saat memesan, membeli).", 
          contoh_jp: "水だけください。", 
          contoh_rm: "Mizu dake kudasai.", 
          contoh_id: "Tolong beri air saja.",
          contoh2_jp: "一つだけ買いました。",
          contoh2_rm: "Hitotsu dake kaimashita.",
          contoh2_id: "Saya hanya membeli satu."
        }
      ]
    }
  ]
},
  {
  key: "percakapan",
  no: 10,
  nama: "Percakapan Sehari-hari",
  icon: "&#128172;",
  contoh: "ありがとう・はい・いいえ",
  subkategori: [
    {
      nama: "Sapaan",
      kata: [
        { 
          kata: "おはようございます", 
          romaji: "ohayou gozaimasu", 
          arti: "selamat pagi", 
          penggunaan: "Dipakai pagi hari (sekitar jam 4–10). Bentuk kasual: おはよう (ohayou).", 
          contoh_jp: "先生、おはようございます。", 
          contoh_rm: "Sensei, ohayou gozaimasu.", 
          contoh_id: "Selamat pagi, Guru.",
          contoh2_jp: "おはようございます。今日もいい天気ですね。",
          contoh2_rm: "Ohayou gozaimasu. Kyou mo ii tenki desu ne.",
          contoh2_id: "Selamat pagi. Hari ini juga cuacanya bagus ya."
        },
        { 
          kata: "こんにちは", 
          romaji: "konnichiwa", 
          arti: "halo / selamat siang", 
          penggunaan: "Dipakai siang sampai sore (sekitar jam 10–18).", 
          contoh_jp: "皆さん、こんにちは。", 
          contoh_rm: "Minasan, konnichiwa.", 
          contoh_id: "Halo semuanya.",
          contoh2_jp: "こんにちは。お元気ですか。",
          contoh2_rm: "Konnichiwa. Ogenki desu ka.",
          contoh2_id: "Halo. Apa kabar?"
        },
        { 
          kata: "こんばんは", 
          romaji: "konbanwa", 
          arti: "selamat malam", 
          penggunaan: "Dipakai malam hari (setelah jam 18).", 
          contoh_jp: "こんばんは、お元気ですか。", 
          contoh_rm: "Konbanwa, ogenki desu ka.", 
          contoh_id: "Selamat malam, apa kabar?",
          contoh2_jp: "こんばんは。遅くなってすみません。",
          contoh2_rm: "Konbanwa. Osoku natte sumimasen.",
          contoh2_id: "Selamat malam. Maaf saya terlambat."
        },
        { 
          kata: "さようなら", 
          romaji: "sayounara", 
          arti: "selamat tinggal", 
          penggunaan: "Dipakai untuk perpisahan lama. Untuk sehari-hari lebih sering じゃあね (jaa ne).", 
          contoh_jp: "さようなら、また明日。", 
          contoh_rm: "Sayounara, mata ashita.", 
          contoh_id: "Selamat tinggal, sampai besok.",
          contoh2_jp: "さようなら、元気でね。",
          contoh2_rm: "Sayounara, genki de ne.",
          contoh2_id: "Selamat tinggal, jaga diri ya."
        },
        { 
          kata: "おやすみなさい", 
          romaji: "oyasuminasai", 
          arti: "selamat tidur", 
          penggunaan: "Dipakai sebelum tidur. Bentuk kasual: おやすみ (oyasumi).", 
          contoh_jp: "おやすみなさい、また明日。", 
          contoh_rm: "Oyasuminasai, mata ashita.", 
          contoh_id: "Selamat tidur, sampai besok.",
          contoh2_jp: "もう遅いです。おやすみなさい。",
          contoh2_rm: "Mou osoi desu. Oyasuminasai.",
          contoh2_id: "Sudah malam. Selamat tidur."
        },
        { 
          kata: "いってきます", 
          romaji: "ittekimasu", 
          arti: "saya pergi dulu", 
          penggunaan: "Dipakai saat keluar rumah. Jawabannya: いってらっしゃい (itterasshai).", 
          contoh_jp: "いってきます。", 
          contoh_rm: "Ittekimasu.", 
          contoh_id: "Saya pergi dulu.",
          contoh2_jp: "じゃあ、いってきます。",
          contoh2_rm: "Jaa, ittekimasu.",
          contoh2_id: "Kalau begitu, saya pergi dulu."
        }
      ]
    },
    {
      nama: "Ucapan Terima Kasih",
      kata: [
        { 
          kata: "ありがとうございます", 
          romaji: "arigatou gozaimasu", 
          arti: "terima kasih", 
          penggunaan: "Bentuk sopan. Bentuk kasual: ありがとう (arigatou).", 
          contoh_jp: "どうもありがとうございます。", 
          contoh_rm: "Doumo arigatou gozaimasu.", 
          contoh_id: "Terima kasih banyak.",
          contoh2_jp: "手伝ってくれてありがとうございます。",
          contoh2_rm: "Tetsudatte kurete arigatou gozaimasu.",
          contoh2_id: "Terima kasih sudah membantu."
        },
        { 
          kata: "どういたしまして", 
          romaji: "dou itashimashite", 
          arti: "sama-sama", 
          penggunaan: "Jawaban dari ucapan terima kasih. Sering muncul di JFT-Basic.", 
          contoh_jp: "いいえ、どういたしまして。", 
          contoh_rm: "Iie, dou itashimashite.", 
          contoh_id: "Tidak, sama-sama.",
          contoh2_jp: "どういたしまして。お役に立てて嬉しいです。",
          contoh2_rm: "Dou itashimashite. Oyaku ni tatete ureshii desu.",
          contoh2_id: "Sama-sama. Saya senang bisa membantu."
        },
        { 
          kata: "どうぞ", 
          romaji: "douzo", 
          arti: "silakan", 
          penggunaan: "Dipakai untuk mempersilakan. Sering muncul di JFT-Basic (restoran, pintu, kursi).", 
          contoh_jp: "お茶をどうぞ。", 
          contoh_rm: "Ocha o douzo.", 
          contoh_id: "Silakan minum tehnya.",
          contoh2_jp: "どうぞお入りください。",
          contoh2_rm: "Douzo ohairi kudasai.",
          contoh2_id: "Silakan masuk."
        },
        { 
          kata: "いただきます", 
          romaji: "itadakimasu", 
          arti: "selamat makan", 
          penggunaan: "Diucapkan sebelum makan. Sering muncul di JFT-Basic (budaya Jepang).", 
          contoh_jp: "ご飯をいただきます。", 
          contoh_rm: "Gohan o itadakimasu.", 
          contoh_id: "Selamat makan.",
          contoh2_jp: "では、いただきます。",
          contoh2_rm: "Dewa, itadakimasu.", 
          contoh2_id: "Baiklah, selamat makan."
        },
        { 
          kata: "ごちそうさまでした", 
          romaji: "gochisousama deshita", 
          arti: "terima kasih atas makanannya", 
          penggunaan: "Diucapkan setelah makan. Sering muncul di JFT-Basic.", 
          contoh_jp: "ごちそうさまでした。", 
          contoh_rm: "Gochisousama deshita.", 
          contoh_id: "Terima kasih atas makanannya.",
          contoh2_jp: "とても美味しかったです。ごちそうさまでした。",
          contoh2_rm: "Totemo oishikatta desu. Gochisousama deshita.",
          contoh2_id: "Sangat enak. Terima kasih atas makanannya."
        },
        { 
          kata: "お疲れ様です", 
          romaji: "otsukaresama desu", 
          arti: "terima kasih atas kerja kerasnya", 
          penggunaan: "Dipakai di tempat kerja untuk menyapa rekan kerja. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "お疲れ様です。", 
          contoh_rm: "Otsukaresama desu.", 
          contoh_id: "Terima kasih atas kerja kerasnya.",
          contoh2_jp: "お疲れ様です。お先に失礼します。",
          contoh2_rm: "Otsukaresama desu. Osaki ni shitsurei shimasu.",
          contoh2_id: "Terima kasih. Saya pulang dulu."
        }
      ]
    },
    {
      nama: "Permintaan Maaf",
      kata: [
        { 
          kata: "すみません", 
          romaji: "sumimasen", 
          arti: "maaf / permisi", 
          penggunaan: "Bisa berarti 'maaf', 'permisi', atau 'terima kasih' tergantung konteks. Sering muncul di JFT-Basic.", 
          contoh_jp: "遅れてすみません。", 
          contoh_rm: "Okurete sumimasen.", 
          contoh_id: "Maaf saya terlambat.",
          contoh2_jp: "すみません、ちょっと聞いてもいいですか。",
          contoh2_rm: "Sumimasen, chotto kiite mo ii desu ka.",
          contoh2_id: "Permisi, boleh saya bertanya?"
        },
        { 
          kata: "ごめんなさい", 
          romaji: "gomen nasai", 
          arti: "mohon maaf", 
          penggunaan: "Dipakai untuk permintaan maaf yang lebih personal. Bentuk kasual: ごめん (gomen).", 
          contoh_jp: "本当にごめんなさい。", 
          contoh_rm: "Hontou ni gomen nasai.", 
          contoh_id: "Saya benar-benar minta maaf.",
          contoh2_jp: "約束を忘れてごめんなさい。",
          contoh2_rm: "Yakusoku o wasurete gomen nasai.",
          contoh2_id: "Maaf saya lupa janji."
        },
        { 
          kata: "失礼します", 
          romaji: "shitsurei shimasu", 
          arti: "permisi", 
          penggunaan: "Dipakai saat masuk/keluar ruangan, atau mengganggu orang. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "失礼します。", 
          contoh_rm: "Shitsurei shimasu.", 
          contoh_id: "Permisi.",
          contoh2_jp: "お先に失礼します。",
          contoh2_rm: "Osaki ni shitsurei shimasu.",
          contoh2_id: "Saya pulang duluan, permisi."
        },
        { 
          kata: "いいえ", 
          romaji: "iie", 
          arti: "tidak / tidak apa-apa", 
          penggunaan: "Dipakai untuk menolak atau menjawab 'tidak'. Sering muncul di JFT-Basic.", 
          contoh_jp: "いいえ、大丈夫です。", 
          contoh_rm: "Iie, daijoubu desu.", 
          contoh_id: "Tidak, tidak apa-apa.",
          contoh2_jp: "いいえ、違います。",
          contoh2_rm: "Iie, chigaimasu.",
          contoh2_id: "Tidak, bukan."
        },
        { 
          kata: "大丈夫です", 
          romaji: "daijoubu desu", 
          arti: "tidak apa-apa", 
          penggunaan: "Dipakai untuk menyatakan aman/tidak masalah. Bisa juga untuk menolak dengan halus. Sering muncul di JFT-Basic.", 
          contoh_jp: "はい、大丈夫です。", 
          contoh_rm: "Hai, daijoubu desu.", 
          contoh_id: "Ya, tidak apa-apa.",
          contoh2_jp: "結構です。大丈夫です。",
          contoh2_rm: "Kekkou desu. Daijoubu desu.",
          contoh2_id: "Tidak usah. Tidak apa-apa."
        },
        { 
          kata: "ちょっと待ってください", 
          romaji: "chotto matte kudasai", 
          arti: "tolong tunggu sebentar", 
          penggunaan: "Dipakai untuk meminta orang menunggu. Sering muncul di JFT-Basic (pelayanan).", 
          contoh_jp: "ちょっと待ってください。", 
          contoh_rm: "Chotto matte kudasai.", 
          contoh_id: "Tolong tunggu sebentar.",
          contoh2_jp: "すみません、ちょっと待ってください。",
          contoh2_rm: "Sumimasen, chotto matte kudasai.",
          contoh2_id: "Permisi, tolong tunggu sebentar."
        }
      ]
    },
    {
      nama: "Frasa Umum",
      kata: [
        { 
          kata: "はい", 
          romaji: "hai", 
          arti: "ya", 
          penggunaan: "Dipakai untuk menyatakan setuju. Sering muncul di JFT-Basic.", 
          contoh_jp: "はい、わかりました。", 
          contoh_rm: "Hai, wakarimashita.", 
          contoh_id: "Ya, saya mengerti.",
          contoh2_jp: "はい、そうです。",
          contoh2_rm: "Hai, sou desu.",
          contoh2_id: "Ya, benar."
        },
        { 
          kata: "もしもし", 
          romaji: "moshimoshi", 
          arti: "halo (telepon)", 
          penggunaan: "Dipakai saat mengangkat telepon. Sering muncul di JFT-Basic.", 
          contoh_jp: "もしもし、田中です。", 
          contoh_rm: "Moshimoshi, Tanaka desu.", 
          contoh_id: "Halo, ini Tanaka.",
          contoh2_jp: "もしもし、聞こえますか。",
          contoh2_rm: "Moshimoshi, kikoemasu ka.",
          contoh2_id: "Halo, terdengar?"
        },
        { 
          kata: "お願いします", 
          romaji: "onegaishimasu", 
          arti: "tolong / mohon", 
          penggunaan: "Dipakai untuk meminta sesuatu dengan sopan. Sering muncul di JFT-Basic (restoran, toko).", 
          contoh_jp: "これをお願いします。", 
          contoh_rm: "Kore o onegaishimasu.", 
          contoh_id: "Tolong yang ini.",
          contoh2_jp: "コーヒーをお願いします。",
          contoh2_rm: "Koohii o onegaishimasu.",
          contoh2_id: "Tolong kopinya."
        },
        { 
          kata: "わかりました", 
          romaji: "wakarimashita", 
          arti: "saya mengerti", 
          penggunaan: "Dipakai untuk menyatakan paham. Sering muncul di JFT-Basic.", 
          contoh_jp: "はい、わかりました。", 
          contoh_rm: "Hai, wakarimashita.", 
          contoh_id: "Ya, saya mengerti.",
          contoh2_jp: "よくわかりました。ありがとう。",
          contoh2_rm: "Yoku wakarimashita. Arigatou.",
          contoh2_id: "Saya sudah paham. Terima kasih."
        },
        { 
          kata: "わかりません", 
          romaji: "wakarimasen", 
          arti: "saya tidak mengerti", 
          penggunaan: "Dipakai untuk menyatakan tidak paham. Sering muncul di JFT-Basic.", 
          contoh_jp: "すみません、わかりません。", 
          contoh_rm: "Sumimasen, wakarimasen.", 
          contoh_id: "Maaf, saya tidak mengerti.",
          contoh2_jp: "日本語がまだわかりません。",
          contoh2_rm: "Nihongo ga mada wakarimasen.",
          contoh2_id: "Saya belum mengerti bahasa Jepang."
        },
        { 
          kata: "もう一度お願いします", 
          romaji: "mou ichido onegaishimasu", 
          arti: "tolong ulangi sekali lagi", 
          penggunaan: "Dipakai saat tidak mendengar atau tidak paham. Sering muncul di JFT-Basic.", 
          contoh_jp: "すみません、もう一度お願いします。", 
          contoh_rm: "Sumimasen, mou ichido onegaishimasu.", 
          contoh_id: "Maaf, tolong ulangi sekali lagi.",
          contoh2_jp: "ゆっくり、もう一度お願いします。",
          contoh2_rm: "Yukkuri, mou ichido onegaishimasu.",
          contoh2_id: "Pelan-pelan, tolong ulangi sekali lagi."
        }
      ]
    }
  ]
},
  {
  key: "warna",
  no: 11,
  nama: "Warna",
  icon: "&#127912;",
  contoh: "赤・青・白・黒",
  subkategori: [
    {
      nama: "Warna Dasar",
      kata: [
        { 
          kata: "赤 (あか)", 
          romaji: "aka", 
          arti: "merah", 
          penggunaan: "Dipakai untuk menyebut warna merah. Bentuk kata sifat: 赤い (akai).", 
          contoh_jp: "赤い車が好きです。", 
          contoh_rm: "Akai kuruma ga suki desu.", 
          contoh_id: "Saya suka mobil merah.",
          contoh2_jp: "りんごは赤いです。",
          contoh2_rm: "Ringo wa akai desu.",
          contoh2_id: "Apel itu merah."
        },
        { 
          kata: "青 (あお)", 
          romaji: "ao", 
          arti: "biru", 
          penggunaan: "Dipakai untuk menyebut warna biru. Bentuk kata sifat: 青い (aoi). Di Jepang, 青 juga dipakai untuk lampu lalu lintas hijau.", 
          contoh_jp: "青い空がきれいです。", 
          contoh_rm: "Aoi sora ga kirei desu.", 
          contoh_id: "Langit biru terlihat indah.",
          contoh2_jp: "青いシャツを着ます。",
          contoh2_rm: "Aoi shatsu o kimasu.",
          contoh2_id: "Saya memakai kemeja biru."
        },
        { 
          kata: "白 (しろ)", 
          romaji: "shiro", 
          arti: "putih", 
          penggunaan: "Dipakai untuk menyebut warna putih. Bentuk kata sifat: 白い (shiroi).", 
          contoh_jp: "白いシャツを着ます。", 
          contoh_rm: "Shiroi shatsu o kimasu.", 
          contoh_id: "Saya memakai kemeja putih.",
          contoh2_jp: "雪は白いです。",
          contoh2_rm: "Yuki wa shiroi desu.",
          contoh2_id: "Salju itu putih."
        },
        { 
          kata: "黒 (くろ)", 
          romaji: "kuro", 
          arti: "hitam", 
          penggunaan: "Dipakai untuk menyebut warna hitam. Bentuk kata sifat: 黒い (kuroi).", 
          contoh_jp: "黒い犬がいます。", 
          contoh_rm: "Kuroi inu ga imasu.", 
          contoh_id: "Ada anjing hitam.",
          contoh2_jp: "黒いかばんを買いました。",
          contoh2_rm: "Kuroi kaban o kaimashita.",
          contoh2_id: "Saya membeli tas hitam."
        },
        { 
          kata: "黄色 (きいろ)", 
          romaji: "kiiro", 
          arti: "kuning", 
          penggunaan: "Dipakai untuk menyebut warna kuning. Bentuk kata sifat: 黄色い (kiiroi).", 
          contoh_jp: "黄色い花を買いました。", 
          contoh_rm: "Kiiroi hana o kaimashita.", 
          contoh_id: "Saya membeli bunga kuning.",
          contoh2_jp: "バナナは黄色です。",
          contoh2_rm: "Banana wa kiiro desu.",
          contoh2_id: "Pisang itu kuning."
        },
        { 
          kata: "緑 (みどり)", 
          romaji: "midori", 
          arti: "hijau", 
          penggunaan: "Dipakai untuk menyebut warna hijau. Bentuk kata sifat: 緑の (midori no).", 
          contoh_jp: "緑の山が見えます。", 
          contoh_rm: "Midori no yama ga miemasu.", 
          contoh_id: "Tampak gunung yang hijau.",
          contoh2_jp: "緑の野菜を食べます。",
          contoh2_rm: "Midori no yasai o tabemasu.",
          contoh2_id: "Saya makan sayur hijau."
        }
      ]
    },
    {
      nama: "Warna Lain",
      kata: [
        { 
          kata: "茶色 (ちゃいろ)", 
          romaji: "chairo", 
          arti: "cokelat", 
          penggunaan: "Dipakai untuk menyebut warna cokelat. Bentuk kata sifat: 茶色の (chairo no).", 
          contoh_jp: "茶色の靴を買いました。", 
          contoh_rm: "Chairo no kutsu o kaimashita.", 
          contoh_id: "Saya membeli sepatu cokelat.",
          contoh2_jp: "このかばんは茶色です。",
          contoh2_rm: "Kono kaban wa chairo desu.",
          contoh2_id: "Tas ini berwarna cokelat."
        },
        { 
          kata: "ピンク", 
          romaji: "pinku", 
          arti: "merah muda / pink", 
          penggunaan: "Kata serapan dari bahasa Inggris. Dipakai untuk menyebut warna pink.", 
          contoh_jp: "ピンクの花が好きです。", 
          contoh_rm: "Pinku no hana ga suki desu.", 
          contoh_id: "Saya suka bunga pink.",
          contoh2_jp: "ピンクの服を着ます。",
          contoh2_rm: "Pinku no fuku o kimasu.",
          contoh2_id: "Saya memakai baju pink."
        },
        { 
          kata: "オレンジ", 
          romaji: "orenji", 
          arti: "oranye", 
          penggunaan: "Kata serapan dari bahasa Inggris. Dipakai untuk menyebut warna oranye.", 
          contoh_jp: "オレンジ色の花です。", 
          contoh_rm: "Orenji iro no hana desu.", 
          contoh_id: "Ini bunga warna oranye.",
          contoh2_jp: "オレンジジュースを飲みます。",
          contoh2_rm: "Orenji juusu o nomimasu.",
          contoh2_id: "Saya minum jus jeruk."
        },
        { 
          kata: "紫 (むらさき)", 
          romaji: "murasaki", 
          arti: "ungu", 
          penggunaan: "Dipakai untuk menyebut warna ungu. Bentuk kata sifat: 紫の (murasaki no).", 
          contoh_jp: "紫の花が咲きました。", 
          contoh_rm: "Murasaki no hana ga sakimashita.", 
          contoh_id: "Bunga ungu telah mekar.",
          contoh2_jp: "紫のシャツを買います。",
          contoh2_rm: "Murasaki no shatsu o kaimasu.",
          contoh2_id: "Saya membeli kemeja ungu."
        },
        { 
          kata: "灰色 (はいいろ)", 
          romaji: "haiiro", 
          arti: "abu-abu", 
          penggunaan: "Dipakai untuk menyebut warna abu-abu. Bentuk kata sifat: 灰色の (haiiro no).", 
          contoh_jp: "灰色の雲です。", 
          contoh_rm: "Haiiro no kumo desu.", 
          contoh_id: "Awan berwarna abu-abu.",
          contoh2_jp: "灰色のセーターを着ます。",
          contoh2_rm: "Haiiro no seetaa o kimasu.",
          contoh2_id: "Saya memakai sweater abu-abu."
        },
        { 
          kata: "金色 (きんいろ)", 
          romaji: "kin'iro", 
          arti: "emas", 
          penggunaan: "Dipakai untuk menyebut warna emas. Bentuk kata sifat: 金色の (kin'iro no).", 
          contoh_jp: "金色の時計です。", 
          contoh_rm: "Kin'iro no tokei desu.", 
          contoh_id: "Jam berwarna emas.",
          contoh2_jp: "金色のメダルをもらいました。",
          contoh2_rm: "Kin'iro no medaru o moraimashita.",
          contoh2_id: "Saya menerima medali emas."
        }
      ]
    }
  ]
},
  {
  key: "pekerjaan",
  no: 12,
  nama: "Pekerjaan",
  icon: "&#128188;",
  contoh: "先生・医者・会社員",
  subkategori: [
    {
      nama: "Profesi",
      kata: [
        { 
          kata: "先生 (せんせい)", 
          romaji: "sensei", 
          arti: "guru / pengajar", 
          penggunaan: "Dipakai untuk menyebut guru, dokter, pengacara, atau orang yang dihormati. Bukan hanya guru sekolah.", 
          contoh_jp: "日本語の先生です。", 
          contoh_rm: "Nihongo no sensei desu.", 
          contoh_id: "Saya guru bahasa Jepang.",
          contoh2_jp: "先生に質問します。",
          contoh2_rm: "Sensei ni shitsumon shimasu.",
          contoh2_id: "Saya bertanya kepada guru."
        },
        { 
          kata: "医者 (いしゃ)", 
          romaji: "isha", 
          arti: "dokter", 
          penggunaan: "Dipakai untuk menyebut profesi dokter. Sering muncul di JFT-Basic (kesehatan, rumah sakit).", 
          contoh_jp: "父は医者です。", 
          contoh_rm: "Chichi wa isha desu.", 
          contoh_id: "Ayah saya dokter.",
          contoh2_jp: "医者に行きます。",
          contoh2_rm: "Isha ni ikimasu.",
          contoh2_id: "Saya pergi ke dokter."
        },
        { 
          kata: "看護師 (かんごし)", 
          romaji: "kangoshi", 
          arti: "perawat", 
          penggunaan: "Dipakai untuk menyebut profesi perawat. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "母は看護師です。", 
          contoh_rm: "Haha wa kangoshi desu.", 
          contoh_id: "Ibu saya perawat.",
          contoh2_jp: "看護師になりたいです。",
          contoh2_rm: "Kangoshi ni naritai desu.",
          contoh2_id: "Saya ingin menjadi perawat."
        },
        { 
          kata: "会社員 (かいしゃいん)", 
          romaji: "kaishain", 
          arti: "pegawai perusahaan", 
          penggunaan: "Dipakai untuk menyebut orang yang bekerja di perusahaan. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "兄は会社員です。", 
          contoh_rm: "Ani wa kaishain desu.", 
          contoh_id: "Kakak laki-laki saya pegawai perusahaan.",
          contoh2_jp: "私は会社員です。",
          contoh2_rm: "Watashi wa kaishain desu.",
          contoh2_id: "Saya pegawai perusahaan."
        },
        { 
          kata: "学生 (がくせい)", 
          romaji: "gakusei", 
          arti: "pelajar / mahasiswa", 
          penggunaan: "Dipakai untuk menyebut pelajar SMA ke atas atau mahasiswa. Untuk SD/SMP pakai 生徒 (seito).", 
          contoh_jp: "大学の学生です。", 
          contoh_rm: "Daigaku no gakusei desu.", 
          contoh_id: "Saya mahasiswa universitas.",
          contoh2_jp: "学生の時、よく図書館へ行きました。",
          contoh2_rm: "Gakusei no toki, yoku toshokan e ikimashita.",
          contoh2_id: "Waktu jadi mahasiswa, saya sering pergi ke perpustakaan."
        },
        { 
          kata: "警官 (けいかん)", 
          romaji: "keikan", 
          arti: "polisi", 
          penggunaan: "Dipakai untuk menyebut profesi polisi. Sering muncul di JFT-Basic (situasi darurat).", 
          contoh_jp: "警官に道を聞きます。", 
          contoh_rm: "Keikan ni michi o kikimasu.", 
          contoh_id: "Saya bertanya jalan kepada polisi.",
          contoh2_jp: "警官が来ました。",
          contoh2_rm: "Keikan ga kimashita.",
          contoh2_id: "Polisi telah datang."
        }
      ]
    },
    {
      nama: "Tempat Kerja",
      kata: [
        { 
          kata: "会社 (かいしゃ)", 
          romaji: "kaisha", 
          arti: "perusahaan", 
          penggunaan: "Dipakai untuk menyebut perusahaan/kantor. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "八時に会社へ行きます。", 
          contoh_rm: "Hachiji ni kaisha e ikimasu.", 
          contoh_id: "Saya pergi ke perusahaan jam 8.",
          contoh2_jp: "会社は駅の近くです。",
          contoh2_rm: "Kaisha wa eki no chikaku desu.",
          contoh2_id: "Perusahaan dekat stasiun."
        },
        { 
          kata: "銀行 (ぎんこう)", 
          romaji: "ginkou", 
          arti: "bank", 
          penggunaan: "Dipakai untuk menyebut bank. Sering muncul di JFT-Basic (keuangan).", 
          contoh_jp: "銀行で働いています。", 
          contoh_rm: "Ginkou de hataraite imasu.", 
          contoh_id: "Saya bekerja di bank.",
          contoh2_jp: "銀行でお金を下ろします。",
          contoh2_rm: "Ginkou de okane o oroshimasu.",
          contoh2_id: "Saya menarik uang di bank."
        },
        { 
          kata: "病院 (びょういん)", 
          romaji: "byouin", 
          arti: "rumah sakit", 
          penggunaan: "Dipakai untuk menyebut rumah sakit. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "病院で働きます。", 
          contoh_rm: "Byouin de hatarakimasu.", 
          contoh_id: "Saya bekerja di rumah sakit.",
          contoh2_jp: "病院へ行きます。",
          contoh2_rm: "Byouin e ikimasu.",
          contoh2_id: "Saya pergi ke rumah sakit."
        },
        { 
          kata: "学校 (がっこう)", 
          romaji: "gakkou", 
          arti: "sekolah", 
          penggunaan: "Dipakai untuk menyebut sekolah. Sering muncul di JFT-Basic (pendidikan).", 
          contoh_jp: "学校で働きます。", 
          contoh_rm: "Gakkou de hatarakimasu.", 
          contoh_id: "Saya bekerja di sekolah.",
          contoh2_jp: "学校は駅の近くです。",
          contoh2_rm: "Gakkou wa eki no chikaku desu.",
          contoh2_id: "Sekolahnya dekat stasiun."
        },
        { 
          kata: "食堂 (しょくどう)", 
          romaji: "shokudou", 
          arti: "kantin", 
          penggunaan: "Dipakai untuk menyebut kantin sekolah atau tempat makan sederhana.", 
          contoh_jp: "食堂で昼ご飯を食べます。", 
          contoh_rm: "Shokudou de hirugohan o tabemasu.", 
          contoh_id: "Saya makan siang di kantin.",
          contoh2_jp: "食堂は十二時に開きます。",
          contoh2_rm: "Shokudou wa juuniji ni akimasu.",
          contoh2_id: "Kantin buka jam 12."
        },
        { 
          kata: "工場 (こうじょう)", 
          romaji: "koujou", 
          arti: "pabrik", 
          penggunaan: "Dipakai untuk menyebut pabrik. Sering muncul di JFT-Basic (kerja industri).", 
          contoh_jp: "工場で働いています。", 
          contoh_rm: "Koujou de hataraite imasu.", 
          contoh_id: "Saya bekerja di pabrik.",
          contoh2_jp: "工場は郊外にあります。",
          contoh2_rm: "Koujou wa kougai ni arimasu.",
          contoh2_id: "Pabrik ada di pinggiran kota."
        }
      ]
    },
    {
      nama: "Aktivitas Kerja",
      kata: [
        { 
          kata: "仕事 (しごと)", 
          romaji: "shigoto", 
          arti: "pekerjaan", 
          penggunaan: "Dipakai untuk menyebut pekerjaan atau kegiatan kerja. Sering muncul di JFT-Basic.", 
          contoh_jp: "今日の仕事は終わりです。", 
          contoh_rm: "Kyou no shigoto wa owari desu.", 
          contoh_id: "Pekerjaan hari ini sudah selesai.",
          contoh2_jp: "仕事が忙しいです。",
          contoh2_rm: "Shigoto ga isogashii desu.",
          contoh2_id: "Pekerjaan saya sibuk."
        },
        { 
          kata: "会議 (かいぎ)", 
          romaji: "kaigi", 
          arti: "rapat", 
          penggunaan: "Dipakai untuk menyebut rapat kantor. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "十時から会議です。", 
          contoh_rm: "Juuji kara kaigi desu.", 
          contoh_id: "Rapat mulai jam 10.",
          contoh2_jp: "会議に出席します。",
          contoh2_rm: "Kaigi ni shusseki shimasu.",
          contoh2_id: "Saya menghadiri rapat."
        },
        { 
          kata: "働く (はたらく)", 
          romaji: "hataraku", 
          arti: "bekerja", 
          penggunaan: "Kata kerja golongan 1. Bentuk masu: 働きます (hatarakimasu). Sering muncul di JFT-Basic.", 
          contoh_jp: "毎日八時から働きます。", 
          contoh_rm: "Mainichi hachiji kara hatarakimasu.", 
          contoh_id: "Setiap hari saya bekerja dari jam 8.",
          contoh2_jp: "どこで働いていますか。",
          contoh2_rm: "Doko de hataraite imasu ka.",
          contoh2_id: "Kamu bekerja di mana?"
        },
        { 
          kata: "休む (やすむ)", 
          romaji: "yasumu", 
          arti: "istirahat / libur", 
          penggunaan: "Kata kerja golongan 1. Bentuk masu: 休みます (yasumimasu). Sering muncul di JFT-Basic (izin kerja).", 
          contoh_jp: "今日は仕事を休みます。", 
          contoh_rm: "Kyou wa shigoto o yasumimasu.", 
          contoh_id: "Hari ini saya tidak masuk kerja.",
          contoh2_jp: "風邪で会社を休みました。",
          contoh2_rm: "Kaze de kaisha o yasumimashita.",
          contoh2_id: "Saya tidak masuk kerja karena flu."
        },
        { 
          kata: "残業 (ざんぎょう)", 
          romaji: "zangyou", 
          arti: "lembur", 
          penggunaan: "Dipakai untuk menyebut kerja lembur. Sering muncul di JFT-Basic (kerja Jepang).", 
          contoh_jp: "今日は残業します。", 
          contoh_rm: "Kyou wa zangyou shimasu.", 
          contoh_id: "Hari ini saya lembur.",
          contoh2_jp: "残業が多くて疲れました。",
          contoh2_rm: "Zangyou ga ookute tsukaremashita.",
          contoh2_id: "Lemburnya banyak, saya lelah."
        },
        { 
          kata: "給料 (きゅうりょう)", 
          romaji: "kyuuryou", 
          arti: "gaji", 
          penggunaan: "Dipakai untuk menyebut gaji. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "給料をもらいました。", 
          contoh_rm: "Kyuuryou o moraimashita.", 
          contoh_id: "Saya menerima gaji.",
          contoh2_jp: "給料は毎月二十五日です。",
          contoh2_rm: "Kyuuryou wa maitsuki nijuugonichi desu.",
          contoh2_id: "Gaji diterima tanggal 25 setiap bulan."
        }
      ]
    },
    {
      nama: "Istilah Kerja",
      kata: [
        { 
          kata: "面接 (めんせつ)", 
          romaji: "mensetsu", 
          arti: "wawancara", 
          penggunaan: "Dipakai untuk menyebut wawancara kerja. Sering muncul di JFT-Basic (melamar kerja).", 
          contoh_jp: "明日面接があります。", 
          contoh_rm: "Ashita mensetsu ga arimasu.", 
          contoh_id: "Besok ada wawancara.",
          contoh2_jp: "面接の準備をします。",
          contoh2_rm: "Mensetsu no junbi o shimasu.",
          contoh2_id: "Saya mempersiapkan wawancara."
        },
        { 
          kata: "履歴書 (りれきしょ)", 
          romaji: "rirekisho", 
          arti: "daftar riwayat hidup", 
          penggunaan: "Dipakai untuk menyebut CV/resume dalam format Jepang. Sering muncul di JFT-Basic (melamar kerja).", 
          contoh_jp: "履歴書を書きます。", 
          contoh_rm: "Rirekisho o kakimasu.", 
          contoh_id: "Saya menulis daftar riwayat hidup.",
          contoh2_jp: "履歴書を持ってきました。",
          contoh2_rm: "Rirekisho o motte kimashita.",
          contoh2_id: "Saya membawa daftar riwayat hidup."
        },
        { 
          kata: "名刺 (めいし)", 
          romaji: "meishi", 
          arti: "kartu nama", 
          penggunaan: "Dipakai untuk menyebut kartu nama. Penting dalam budaya kerja Jepang. Sering muncul di JFT-Basic.", 
          contoh_jp: "名刺を交換します。", 
          contoh_rm: "Meishi o koukan shimasu.", 
          contoh_id: "Kami bertukar kartu nama.",
          contoh2_jp: "名刺をもらいました。",
          contoh2_rm: "Meishi o moraimashita.",
          contoh2_id: "Saya menerima kartu nama."
        },
        { 
          kata: "出張 (しゅっちょう)", 
          romaji: "shucchou", 
          arti: "perjalanan dinas", 
          penggunaan: "Dipakai untuk menyebut perjalanan kerja ke luar kota/negara. Sering muncul di JFT-Basic.", 
          contoh_jp: "来週大阪へ出張します。", 
          contoh_rm: "Raishuu Oosaka e shucchou shimasu.", 
          contoh_id: "Minggu depan saya perjalanan dinas ke Osaka.",
          contoh2_jp: "出張は三日間です。",
          contoh2_rm: "Shucchou wa mikkakan desu.",
          contoh2_id: "Perjalanan dinasnya tiga hari."
        },
        { 
          kata: "研修 (けんしゅう)", 
          romaji: "kenshuu", 
          arti: "pelatihan", 
          penggunaan: "Dipakai untuk menyebut pelatihan kerja. Sering muncul di JFT-Basic (kerja pemagang).", 
          contoh_jp: "研修を受けます。", 
          contoh_rm: "Kenshuu o ukemasu.", 
          contoh_id: "Saya mengikuti pelatihan.",
          contoh2_jp: "研修は一週間です。",
          contoh2_rm: "Kenshuu wa isshuukan desu.",
          contoh2_id: "Pelatihannya satu minggu."
        },
        { 
          kata: "契約 (けいやく)", 
          romaji: "keiyaku", 
          arti: "kontrak", 
          penggunaan: "Dipakai untuk menyebut kontrak kerja. Sering muncul di JFT-Basic (kerja).", 
          contoh_jp: "契約をします。", 
          contoh_rm: "Keiyaku o shimasu.", 
          contoh_id: "Saya membuat kontrak.",
          contoh2_jp: "契約は一年です。",
          contoh2_rm: "Keiyaku wa ichinen desu.",
          contoh2_id: "Kontraknya satu tahun."
        }
      ]
    }
  ]
},
  {
  key: "pakaian-aksesori",
  no: 13,
  nama: "Pakaian & Aksesori",
  icon: "&#128085;",
  contoh: "服・靴・帽子・ネクタイ",
  subkategori: [
    {
      nama: "Pakaian Atas",
      kata: [
        { 
          kata: "服 (ふく)", 
          romaji: "fuku", 
          arti: "pakaian", 
          penggunaan: "Dipakai untuk menyebut pakaian secara umum, baik atas maupun bawah.", 
          contoh_jp: "新しい服を買いました。", 
          contoh_rm: "Atarashii fuku o kaimashita.", 
          contoh_id: "Saya membeli pakaian baru.",
          contoh2_jp: "服を洗濯します。",
          contoh2_rm: "Fuku o sentaku shimasu.",
          contoh2_id: "Saya mencuci pakaian."
        },
        { 
          kata: "シャツ", 
          romaji: "shatsu", 
          arti: "kemeja", 
          penggunaan: "Kata serapan dari bahasa Inggris 'shirt'. Dipakai untuk menyebut kemeja atau baju atasan.", 
          contoh_jp: "白いシャツを着ます。", 
          contoh_rm: "Shiroi shatsu o kimasu.", 
          contoh_id: "Saya memakai kemeja putih.",
          contoh2_jp: "新しいシャツを買いました。",
          contoh2_rm: "Atarashii shatsu o kaimashita.",
          contoh2_id: "Saya membeli kemeja baru."
        },
        { 
          kata: "コート", 
          romaji: "kooto", 
          arti: "mantel / jaket", 
          penggunaan: "Dipakai untuk menyebut mantel panjang atau jaket tebal yang dipakai saat musim dingin.", 
          contoh_jp: "冬はコートを着ます。", 
          contoh_rm: "Fuyu wa kooto o kimasu.", 
          contoh_id: "Musim dingin saya memakai mantel.",
          contoh2_jp: "新しいコートを買いました。",
          contoh2_rm: "Atarashii kooto o kaimashita.",
          contoh2_id: "Saya membeli mantel baru."
        },
        { 
          kata: "セーター", 
          romaji: "seetaa", 
          arti: "sweater", 
          penggunaan: "Kata serapan dari bahasa Inggris 'sweater'. Dipakai untuk menyebut baju hangat berbahan rajut.", 
          contoh_jp: "灰色のセーターを着ます。", 
          contoh_rm: "Haiiro no seetaa o kimasu.", 
          contoh_id: "Saya memakai sweater abu-abu.",
          contoh2_jp: "冬はセーターが暖かいです。",
          contoh2_rm: "Fuyu wa seetaa ga atatakai desu.",
          contoh2_id: "Sweater hangat di musim dingin."
        },
        { 
          kata: "上着 (うわぎ)", 
          romaji: "uwagi", 
          arti: "jaket / baju luar", 
          penggunaan: "Dipakai untuk menyebut pakaian luar yang dipakai di atas baju dalam.", 
          contoh_jp: "上着を脱ぎます。", 
          contoh_rm: "Uwagi o nugimasu.", 
          contoh_id: "Saya melepas jaket.",
          contoh2_jp: "上着を着て出かけます。",
          contoh2_rm: "Uwagi o kite dekakemasu.",
          contoh2_id: "Saya memakai jaket lalu pergi keluar."
        }
      ]
    },
    {
      nama: "Pakaian Bawah",
      kata: [
        { 
          kata: "ズボン", 
          romaji: "zubon", 
          arti: "celana panjang", 
          penggunaan: "Kata serapan dari bahasa Prancis 'jupon'. Dipakai untuk menyebut celana panjang.", 
          contoh_jp: "黒いズボンを穿きます。", 
          contoh_rm: "Kuroi zubon o hakimasu.", 
          contoh_id: "Saya memakai celana panjang hitam.",
          contoh2_jp: "新しいズボンを買いました。",
          contoh2_rm: "Atarashii zubon o kaimashita.",
          contoh2_id: "Saya membeli celana panjang baru."
        },
        { 
          kata: "スカート", 
          romaji: "sukaato", 
          arti: "rok", 
          penggunaan: "Kata serapan dari bahasa Inggris 'skirt'. Dipakai untuk menyebut rok.", 
          contoh_jp: "短いスカートを穿きます。", 
          contoh_rm: "Mijikai sukaato o hakimasu.", 
          contoh_id: "Saya memakai rok pendek.",
          contoh2_jp: "赤いスカートが好きです。",
          contoh2_rm: "Akai sukaato ga suki desu.",
          contoh2_id: "Saya suka rok merah."
        },
        { 
          kata: "ジーンズ", 
          romaji: "jiinzu", 
          arti: "jeans", 
          penggunaan: "Kata serapan dari bahasa Inggris 'jeans'. Dipakai untuk menyebut celana jeans.", 
          contoh_jp: "ジーンズを穿きます。", 
          contoh_rm: "Jiinzu o hakimasu.", 
          contoh_id: "Saya memakai jeans.",
          contoh2_jp: "青いジーンズを買いました。",
          contoh2_rm: "Aoi jiinzu o kaimashita.",
          contoh2_id: "Saya membeli jeans biru."
        },
        { 
          kata: "下着 (したぎ)", 
          romaji: "shitagi", 
          arti: "pakaian dalam", 
          penggunaan: "Dipakai untuk menyebut pakaian dalam, baik atas maupun bawah.", 
          contoh_jp: "下着を変えます。", 
          contoh_rm: "Shitagi o kaemasu.", 
          contoh_id: "Saya mengganti pakaian dalam.",
          contoh2_jp: "下着を洗濯します。",
          contoh2_rm: "Shitagi o sentaku shimasu.",
          contoh2_id: "Saya mencuci pakaian dalam."
        },
        { 
          kata: "パジャマ", 
          romaji: "pajama", 
          arti: "piyama", 
          penggunaan: "Kata serapan dari bahasa Inggris 'pajamas'. Dipakai untuk menyebut baju tidur.", 
          contoh_jp: "パジャマを着ます。", 
          contoh_rm: "Pajama o kimasu.", 
          contoh_id: "Saya memakai piyama.",
          contoh2_jp: "新しいパジャマを買いました。",
          contoh2_rm: "Atarashii pajama o kaimashita.",
          contoh2_id: "Saya membeli piyama baru."
        }
      ]
    },
    {
      nama: "Aksesori",
      kata: [
        { 
          kata: "帽子 (ぼうし)", 
          romaji: "boushi", 
          arti: "topi", 
          penggunaan: "Dipakai untuk menyebut topi. Kata kerja yang cocok: かぶる (kaburu).", 
          contoh_jp: "帽子をかぶります。", 
          contoh_rm: "Boushi o kaburimasu.", 
          contoh_id: "Saya memakai topi.",
          contoh2_jp: "白い帽子を買いました。",
          contoh2_rm: "Shiroi boushi o kaimashita.",
          contoh2_id: "Saya membeli topi putih."
        },
        { 
          kata: "ネクタイ", 
          romaji: "nekutai", 
          arti: "dasi", 
          penggunaan: "Kata serapan dari bahasa Inggris 'necktie'. Dipakai untuk menyebut dasi pria.", 
          contoh_jp: "毎朝ネクタイをします。", 
          contoh_rm: "Maiasa nekutai o shimasu.", 
          contoh_id: "Setiap pagi saya memakai dasi.",
          contoh2_jp: "ネクタイを買いました。",
          contoh2_rm: "Nekutai o kaimashita.",
          contoh2_id: "Saya membeli dasi."
        },
        { 
          kata: "てぶくろ", 
          romaji: "tebukuro", 
          arti: "sarung tangan", 
          penggunaan: "Dipakai untuk menyebut sarung tangan. Biasanya ditulis pakai hiragana.", 
          contoh_jp: "冬はてぶくろをします。", 
          contoh_rm: "Fuyu wa tebukuro o shimasu.", 
          contoh_id: "Musim dingin saya memakai sarung tangan.",
          contoh2_jp: "てぶくろを忘れました。",
          contoh2_rm: "Tebukuro o wasuremashita.",
          contoh2_id: "Saya lupa membawa sarung tangan."
        },
        { 
          kata: "サングラス", 
          romaji: "sangurasu", 
          arti: "kacamata hitam", 
          penggunaan: "Kata serapan dari bahasa Inggris 'sunglasses'. Dipakai untuk menyebut kacamata pelindung matahari.", 
          contoh_jp: "夏はサングラスをかけます。", 
          contoh_rm: "Natsu wa sangurasu o kakemasu.", 
          contoh_id: "Musim panas saya memakai kacamata hitam.",
          contoh2_jp: "サングラスが似合いますね。",
          contoh2_rm: "Sangurasu ga niaimasu ne.",
          contoh2_id: "Kacamata hitamnya cocok ya."
        },
        { 
          kata: "眼鏡 (めがね)", 
          romaji: "megane", 
          arti: "kacamata", 
          penggunaan: "Dipakai untuk menyebut kacamata biasa (bukan kacamata hitam). Kata kerja: かける (kakeru).", 
          contoh_jp: "眼鏡をかけます。", 
          contoh_rm: "Megane o kakemasu.", 
          contoh_id: "Saya memakai kacamata.",
          contoh2_jp: "新しい眼鏡を買いました。",
          contoh2_rm: "Atarashii megane o kaimashita.",
          contoh2_id: "Saya membeli kacamata baru."
        }
      ]
    },
    {
      nama: "Alas Kaki",
      kata: [
        { 
          kata: "靴 (くつ)", 
          romaji: "kutsu", 
          arti: "sepatu", 
          penggunaan: "Dipakai untuk menyebut sepatu. Kata kerja: 履く (haku) untuk memakai, 脱ぐ (nugu) untuk melepas.", 
          contoh_jp: "靴を脱いでください。", 
          contoh_rm: "Kutsu o nuide kudasai.", 
          contoh_id: "Tolong lepas sepatunya.",
          contoh2_jp: "新しい靴を履きます。",
          contoh2_rm: "Atarashii kutsu o hakimasu.",
          contoh2_id: "Saya memakai sepatu baru."
        },
        { 
          kata: "靴下 (くつした)", 
          romaji: "kutsushita", 
          arti: "kaus kaki", 
          penggunaan: "Dipakai untuk menyebut kaus kaki. Kata kerja: 履く (haku).", 
          contoh_jp: "靴下を履きます。", 
          contoh_rm: "Kutsushita o hakimasu.", 
          contoh_id: "Saya memakai kaus kaki.",
          contoh2_jp: "白い靴下を買いました。",
          contoh2_rm: "Shiroi kutsushita o kaimashita.",
          contoh2_id: "Saya membeli kaus kaki putih."
        },
        { 
          kata: "スリッパ", 
          romaji: "surippa", 
          arti: "sandal rumah", 
          penggunaan: "Kata serapan dari bahasa Inggris 'slipper'. Dipakai untuk menyebut sandal yang dipakai di dalam rumah Jepang.", 
          contoh_jp: "家でスリッパを履きます。", 
          contoh_rm: "Ie de surippa o hakimasu.", 
          contoh_id: "Di rumah saya memakai sandal rumah.",
          contoh2_jp: "スリッパを脱ぎます。",
          contoh2_rm: "Surippa o nugimasu.",
          contoh2_id: "Saya melepas sandal rumah."
        },
        { 
          kata: "サンダル", 
          romaji: "sandaru", 
          arti: "sandal", 
          penggunaan: "Kata serapan dari bahasa Inggris 'sandals'. Dipakai untuk menyebut sandal untuk keluar rumah.", 
          contoh_jp: "夏はサンダルを履きます。", 
          contoh_rm: "Natsu wa sandaru o hakimasu.", 
          contoh_id: "Musim panas saya memakai sandal.",
          contoh2_jp: "サンダルを買いました。",
          contoh2_rm: "Sandaru o kaimashita.",
          contoh2_id: "Saya membeli sandal."
        },
        { 
          kata: "長靴 (ながぐつ)", 
          romaji: "nagagutsu", 
          arti: "sepatu bot", 
          penggunaan: "Dipakai untuk menyebut sepatu bot tinggi, sering dipakai saat hujan atau salju.", 
          contoh_jp: "雨の日は長靴を履きます。", 
          contoh_rm: "Ame no hi wa nagagutsu o hakimasu.", 
          contoh_id: "Saat hujan saya memakai sepatu bot.",
          contoh2_jp: "黒い長靴を買いました。",
          contoh2_rm: "Kuroi nagagutsu o kaimashita.",
          contoh2_id: "Saya membeli sepatu bot hitam."
        }
      ]
    }
  ]
},
  {
  key: "tubuh-kesehatan",
  no: 14,
  nama: "Tubuh & Kesehatan",
  icon: "&#129658;",
  contoh: "頭・目・手・足",
  subkategori: [
    {
      nama: "Bagian Tubuh",
      kata: [
        { 
          kata: "頭 (あたま)", 
          romaji: "atama", 
          arti: "kepala", 
          penggunaan: "Dipakai untuk menyebut kepala. Sering muncul di JFT-Basic (kesehatan, keluhan).", 
          contoh_jp: "頭が痛いです。", 
          contoh_rm: "Atama ga itai desu.", 
          contoh_id: "Kepala saya sakit.",
          contoh2_jp: "頭を洗います。",
          contoh2_rm: "Atama o araimasu.",
          contoh2_id: "Saya mencuci kepala (rambut)."
        },
        { 
          kata: "顔 (かお)", 
          romaji: "kao", 
          arti: "wajah", 
          contoh_jp: "顔を洗います。", 
          contoh_rm: "Kao o araimasu.", 
          contoh_id: "Saya mencuci muka.",
          contoh2_jp: "彼はいい顔をしています。",
          contoh2_rm: "Kare wa ii kao o shite imasu.",
          contoh2_id: "Dia punya wajah yang bagus."
        },
        { 
          kata: "目 (め)", 
          romaji: "me", 
          arti: "mata", 
          penggunaan: "Dipakai untuk menyebut mata. Sering muncul di JFT-Basic (kesehatan, gejala).", 
          contoh_jp: "目が悪いです。", 
          contoh_rm: "Me ga warui desu.", 
          contoh_id: "Mata saya kurang baik (rabun).",
          contoh2_jp: "目を閉じてください。",
          contoh2_rm: "Me o tojite kudasai.",
          contoh2_id: "Tolong tutup mata."
        },
        { 
          kata: "耳 (みみ)", 
          romaji: "mimi", 
          arti: "telinga", 
          contoh_jp: "耳が痛いです。", 
          contoh_rm: "Mimi ga itai desu.", 
          contoh_id: "Telinga saya sakit.",
          contoh2_jp: "耳を澄まします。",
          contoh2_rm: "Mimi o sumashimasu.",
          contoh2_id: "Saya menyimak dengan teliti."
        },
        { 
          kata: "口 (くち)", 
          romaji: "kuchi", 
          arti: "mulut", 
          penggunaan: "Dipakai untuk menyebut mulut. Bisa juga berarti 'pintu masuk/keluar' (contoh: 入口, 出口).", 
          contoh_jp: "口を開けてください。", 
          contoh_rm: "Kuchi o akete kudasai.", 
          contoh_id: "Tolong buka mulut.",
          contoh2_jp: "口が大きいです。",
          contoh2_rm: "Kuchi ga ookii desu.",
          contoh2_id: "Mulutnya besar."
        },
        { 
          kata: "手 (て)", 
          romaji: "te", 
          arti: "tangan", 
          contoh_jp: "手を洗います。", 
          contoh_rm: "Te o araimasu.", 
          contoh_id: "Saya mencuci tangan.",
          contoh2_jp: "手が冷たいです。",
          contoh2_rm: "Te ga tsumetai desu.",
          contoh2_id: "Tangan saya dingin."
        },
        { 
          kata: "足 (あし)", 
          romaji: "ashi", 
          arti: "kaki", 
          penggunaan: "Dipakai untuk menyebut kaki. Bisa juga berarti 'cukup' kalau ditulis 足りる (tariru).", 
          contoh_jp: "足が痛いです。", 
          contoh_rm: "Ashi ga itai desu.", 
          contoh_id: "Kaki saya sakit.",
          contoh2_jp: "足で歩きます。",
          contoh2_rm: "Ashi de arukimasu.",
          contoh2_id: "Saya berjalan dengan kaki."
        }
      ]
    },
    {
      nama: "Kondisi Tubuh",
      kata: [
        { 
          kata: "痛い (いたい)", 
          romaji: "itai", 
          arti: "sakit / nyeri", 
          penggunaan: "Kata sifat-i. Dipakai untuk menyatakan rasa sakit fisik. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "頭が痛いです。", 
          contoh_rm: "Atama ga itai desu.", 
          contoh_id: "Kepala saya sakit.",
          contoh2_jp: "お腹が痛いです。",
          contoh2_rm: "Onaka ga itai desu.",
          contoh2_id: "Perut saya sakit."
        },
        { 
          kata: "熱 (ねつ)", 
          romaji: "netsu", 
          arti: "demam / suhu tubuh", 
          penggunaan: "Dipakai untuk menyebut demam atau suhu tubuh. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "熱があります。", 
          contoh_rm: "Netsu ga arimasu.", 
          contoh_id: "Saya demam.",
          contoh2_jp: "熱が三十八度あります。",
          contoh2_rm: "Netsu ga sanjuuhachi do arimasu.",
          contoh2_id: "Demamnya 38 derajat."
        },
        { 
          kata: "風邪 (かぜ)", 
          romaji: "kaze", 
          arti: "flu / masuk angin", 
          penggunaan: "Dipakai untuk menyebut flu atau sakit ringan. Hati-hati: 風 (かぜ) = angin, 風邪 (かぜ) = flu.", 
          contoh_jp: "風邪を引きました。", 
          contoh_rm: "Kaze o hikimashita.", 
          contoh_id: "Saya kena flu.",
          contoh2_jp: "風邪で会社を休みました。",
          contoh2_rm: "Kaze de kaisha o yasumimashita.",
          contoh2_id: "Saya tidak masuk kerja karena flu."
        },
        { 
          kata: "頭痛 (ずつう)", 
          romaji: "zutsuu", 
          arti: "sakit kepala", 
          penggunaan: "Dipakai untuk menyebut sakit kepala. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "頭痛がします。", 
          contoh_rm: "Zutsuu ga shimasu.", 
          contoh_id: "Saya sakit kepala.",
          contoh2_jp: "頭痛がひどいです。",
          contoh2_rm: "Zutsuu ga hidoi desu.",
          contoh2_id: "Sakit kepala saya parah."
        },
        { 
          kata: "腹痛 (ふくつう)", 
          romaji: "fukutsuu", 
          arti: "sakit perut", 
          penggunaan: "Dipakai untuk menyebut sakit perut. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "腹痛がします。", 
          contoh_rm: "Fukutsuu ga shimasu.", 
          contoh_id: "Saya sakit perut.",
          contoh2_jp: "腹痛で病院へ行きます。",
          contoh2_rm: "Fukutsuu de byouin e ikimasu.",
          contoh2_id: "Saya pergi ke rumah sakit karena sakit perut."
        },
        { 
          kata: "元気 (げんき)", 
          romaji: "genki", 
          arti: "sehat / semangat", 
          penggunaan: "Kata sifat-na. Dipakai untuk menyatakan sehat atau semangat. Sering muncul di JFT-Basic (sapaan).", 
          contoh_jp: "元気ですか。", 
          contoh_rm: "Genki desu ka.", 
          contoh_id: "Apa kabar?",
          contoh2_jp: "はい、元気です。",
          contoh2_rm: "Hai, genki desu.",
          contoh2_id: "Ya, saya sehat."
        }
      ]
    },
    {
      nama: "Obat & Perawatan",
      kata: [
        { 
          kata: "薬 (くすり)", 
          romaji: "kusuri", 
          arti: "obat", 
          penggunaan: "Dipakai untuk menyebut obat. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "薬を飲みます。", 
          contoh_rm: "Kusuri o nomimasu.", 
          contoh_id: "Saya minum obat.",
          contoh2_jp: "薬を買いに行きます。",
          contoh2_rm: "Kusuri o kai ni ikimasu.",
          contoh2_id: "Saya pergi membeli obat."
        },
        { 
          kata: "注射 (ちゅうしゃ)", 
          romaji: "chuusha", 
          arti: "suntikan", 
          penggunaan: "Dipakai untuk menyebut suntikan. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "注射をします。", 
          contoh_rm: "Chuusha o shimasu.", 
          contoh_id: "Saya disuntik.",
          contoh2_jp: "注射が怖いです。",
          contoh2_rm: "Chuusha ga kowai desu.",
          contoh2_id: "Saya takut suntikan."
        },
        { 
          kata: "包帯 (ほうたい)", 
          romaji: "houtai", 
          arti: "perban", 
          penggunaan: "Dipakai untuk menyebut perban. Sering muncul di JFT-Basic (kesehatan, darurat).", 
          contoh_jp: "包帯を巻きます。", 
          contoh_rm: "Houtai o makimasu.", 
          contoh_id: "Saya membalut dengan perban.",
          contoh2_jp: "包帯を交換します。",
          contoh2_rm: "Houtai o koukan shimasu.",
          contoh2_id: "Saya mengganti perban."
        },
        { 
          kata: "絆創膏 (ばんそうこう)", 
          romaji: "bansoukou", 
          arti: "plester", 
          penggunaan: "Dipakai untuk menyebut plester luka. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "絆創膏を貼ります。", 
          contoh_rm: "Bansoukou o harimasu.", 
          contoh_id: "Saya menempelkan plester.",
          contoh2_jp: "絆創膏をください。",
          contoh2_rm: "Bansoukou o kudasai.",
          contoh2_id: "Tolong beri plester."
        },
        { 
          kata: "体温計 (たいおんけい)", 
          romaji: "taionkei", 
          arti: "termometer", 
          penggunaan: "Dipakai untuk menyebut termometer pengukur suhu tubuh. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "体温計で熱を測ります。", 
          contoh_rm: "Taionkei de netsu o hakarimasu.", 
          contoh_id: "Saya mengukur suhu dengan termometer.",
          contoh2_jp: "体温計はどこですか。",
          contoh2_rm: "Taionkei wa doko desu ka.",
          contoh2_id: "Termometer di mana?"
        }
      ]
    },
    {
      nama: "Rumah Sakit",
      kata: [
        { 
          kata: "病院 (びょういん)", 
          romaji: "byouin", 
          arti: "rumah sakit", 
          penggunaan: "Dipakai untuk menyebut rumah sakit. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "病院へ行きます。", 
          contoh_rm: "Byouin e ikimasu.", 
          contoh_id: "Saya pergi ke rumah sakit.",
          contoh2_jp: "病院は駅の近くです。",
          contoh2_rm: "Byouin wa eki no chikaku desu.",
          contoh2_id: "Rumah sakit dekat stasiun."
        },
        { 
          kata: "医者 (いしゃ)", 
          romaji: "isha", 
          arti: "dokter", 
          penggunaan: "Dipakai untuk menyebut profesi dokter. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "医者に行きます。", 
          contoh_rm: "Isha ni ikimasu.", 
          contoh_id: "Saya pergi ke dokter.",
          contoh2_jp: "父は医者です。",
          contoh2_rm: "Chichi wa isha desu.",
          contoh2_id: "Ayah saya dokter."
        },
        { 
          kata: "看護師 (かんごし)", 
          romaji: "kangoshi", 
          arti: "perawat", 
          penggunaan: "Dipakai untuk menyebut profesi perawat. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "看護師さんに聞きます。", 
          contoh_rm: "Kangoshi-san ni kikimasu.", 
          contoh_id: "Saya bertanya kepada perawat.",
          contoh2_jp: "看護師になりたいです。",
          contoh2_rm: "Kangoshi ni naritai desu.",
          contoh2_id: "Saya ingin menjadi perawat."
        },
        { 
          kata: "救急車 (きゅうきゅうしゃ)", 
          romaji: "kyuukyuusha", 
          arti: "ambulans", 
          penggunaan: "Dipakai untuk menyebut ambulans. Sering muncul di JFT-Basic (situasi darurat).", 
          contoh_jp: "救急車を呼んでください。", 
          contoh_rm: "Kyuukyuusha o yonde kudasai.", 
          contoh_id: "Tolong panggil ambulans.",
          contoh2_jp: "救急車が来ました。",
          contoh2_rm: "Kyuukyuusha ga kimashita.",
          contoh2_id: "Ambulans telah datang."
        },
        { 
          kata: "診察 (しんさつ)", 
          romaji: "shinsatsu", 
          arti: "pemeriksaan (dokter)", 
          penggunaan: "Dipakai untuk menyebut pemeriksaan oleh dokter. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "診察を受けます。", 
          contoh_rm: "Shinsatsu o ukemasu.", 
          contoh_id: "Saya menerima pemeriksaan.",
          contoh2_jp: "診察は何時からですか。",
          contoh2_rm: "Shinsatsu wa nanji kara desu ka.",
          contoh2_id: "Pemeriksaan mulai jam berapa?"
        },
        { 
          kata: "保険証 (ほけんしょう)", 
          romaji: "hokenshou", 
          arti: "kartu asuransi kesehatan", 
          penggunaan: "Dipakai untuk menyebut kartu asuransi kesehatan. Sering muncul di JFT-Basic (administrasi rumah sakit).", 
          contoh_jp: "保険証を見せてください。", 
          contoh_rm: "Hokenshou o misete kudasai.", 
          contoh_id: "Tolong tunjukkan kartu asuransi.",
          contoh2_jp: "保険証を持ってきました。",
          contoh2_rm: "Hokenshou o motte kimashita.",
          contoh2_id: "Saya membawa kartu asuransi."
        }
      ]
    }
  ]
},
  {
  key: "abstrak-konsep",
  no: 15,
  nama: "Abstrak & Konsep",
  icon: "&#129504;",
  contoh: "問題・音楽・宿題・予定",
  subkategori: [
    {
      nama: "Akademik & Belajar",
      kata: [
        { 
          kata: "問題 (もんだい)", 
          romaji: "mondai", 
          arti: "soal / masalah", 
          penggunaan: "Bisa berarti 'soal ujian' atau 'masalah' tergantung konteks. Sering muncul di JFT-Basic.", 
          contoh_jp: "この問題は難しいです。", 
          contoh_rm: "Kono mondai wa muzukashii desu.", 
          contoh_id: "Soal ini sulit.",
          contoh2_jp: "問題があります。",
          contoh2_rm: "Mondai ga arimasu.",
          contoh2_id: "Ada masalah."
        },
        { 
          kata: "宿題 (しゅくだい)", 
          romaji: "shukudai", 
          arti: "pekerjaan rumah (PR)", 
          penggunaan: "Dipakai untuk menyebut PR sekolah. Sering muncul di JFT-Basic (pendidikan).", 
          contoh_jp: "宿題をします。", 
          contoh_rm: "Shukudai o shimasu.", 
          contoh_id: "Saya mengerjakan PR.",
          contoh2_jp: "宿題がたくさんあります。",
          contoh2_rm: "Shukudai ga takusan arimasu.",
          contoh2_id: "PR-nya banyak."
        },
        { 
          kata: "質問 (しつもん)", 
          romaji: "shitsumon", 
          arti: "pertanyaan", 
          penggunaan: "Dipakai untuk menyebut pertanyaan. Sering muncul di JFT-Basic (sekolah, kerja).", 
          contoh_jp: "質問があります。", 
          contoh_rm: "Shitsumon ga arimasu.", 
          contoh_id: "Saya ada pertanyaan.",
          contoh2_jp: "先生に質問します。",
          contoh2_rm: "Sensei ni shitsumon shimasu.",
          contoh2_id: "Saya bertanya kepada guru."
        },
        { 
          kata: "答え (こたえ)", 
          romaji: "kotae", 
          arti: "jawaban", 
          penggunaan: "Dipakai untuk menyebut jawaban. Sering muncul di JFT-Basic (ujian).", 
          contoh_jp: "答えを書きます。", 
          contoh_rm: "Kotae o kakimasu.", 
          contoh_id: "Saya menulis jawaban.",
          contoh2_jp: "答えがわかりません。",
          contoh2_rm: "Kotae ga wakarimasen.",
          contoh2_id: "Saya tidak tahu jawabannya."
        },
        { 
          kata: "試験 (しけん)", 
          romaji: "shiken", 
          arti: "ujian", 
          penggunaan: "Dipakai untuk menyebut ujian formal. Sering muncul di JFT-Basic.", 
          contoh_jp: "明日試験があります。", 
          contoh_rm: "Ashita shiken ga arimasu.", 
          contoh_id: "Besok ada ujian.",
          contoh2_jp: "試験に合格しました。",
          contoh2_rm: "Shiken ni goukaku shimashita.",
          contoh2_id: "Saya lulus ujian."
        }
      ]
    },
    {
      nama: "Hiburan & Minat",
      kata: [
        { 
          kata: "音楽 (おんがく)", 
          romaji: "ongaku", 
          arti: "musik", 
          contoh_jp: "音楽を聞きます。", 
          contoh_rm: "Ongaku o kikimasu.", 
          contoh_id: "Saya mendengarkan musik.",
          contoh2_jp: "音楽が好きです。",
          contoh2_rm: "Ongaku ga suki desu.",
          contoh2_id: "Saya suka musik."
        },
        { 
          kata: "映画 (えいが)", 
          romaji: "eiga", 
          arti: "film", 
          penggunaan: "Dipakai untuk menyebut film. Sering muncul di JFT-Basic (hiburan).", 
          contoh_jp: "映画を見ます。", 
          contoh_rm: "Eiga o mimasu.", 
          contoh_id: "Saya menonton film.",
          contoh2_jp: "昨日映画を見ました。",
          contoh2_rm: "Kinou eiga o mimashita.",
          contoh2_id: "Kemarin saya menonton film."
        },
        { 
          kata: "写真 (しゃしん)", 
          romaji: "shashin", 
          arti: "foto", 
          penggunaan: "Dipakai untuk menyebut foto. Sering muncul di JFT-Basic.", 
          contoh_jp: "写真を撮ります。", 
          contoh_rm: "Shashin o torimasu.", 
          contoh_id: "Saya mengambil foto.",
          contoh2_jp: "写真を見せてください。",
          contoh2_rm: "Shashin o misete kudasai.",
          contoh2_id: "Tolong tunjukkan fotonya."
        },
        { 
          kata: "水泳 (すいえい)", 
          romaji: "suiei", 
          arti: "olahraga renang", 
          penggunaan: "Dipakai untuk menyebut olahraga renang. Berbeda dengan 泳ぐ (oyogu) yang artinya 'berenang' sebagai kata kerja.", 
          contoh_jp: "水泳が好きです。", 
          contoh_rm: "Suiei ga suki desu.", 
          contoh_id: "Saya suka olahraga renang.",
          contoh2_jp: "毎週水泳をします。",
          contoh2_rm: "Maishuu suiei o shimasu.",
          contoh2_id: "Setiap minggu saya berenang."
        },
        { 
          kata: "旅行 (りょこう)", 
          romaji: "ryokou", 
          arti: "traveling / perjalanan", 
          penggunaan: "Dipakai untuk menyebut kegiatan traveling. Sering muncul di JFT-Basic.", 
          contoh_jp: "日本を旅行します。", 
          contoh_rm: "Nihon o ryokou shimasu.", 
          contoh_id: "Saya traveling di Jepang.",
          contoh2_jp: "来月旅行する予定です。",
          contoh2_rm: "Raigetsu ryokou suru yotei desu.",
          contoh2_id: "Bulan depan saya berencana traveling."
        }
      ]
    },
    {
      nama: "Kehidupan & Masyarakat",
      kata: [
        { 
          kata: "予定 (よてい)", 
          romaji: "yotei", 
          arti: "jadwal / rencana", 
          penggunaan: "Dipakai untuk menyebut jadwal atau rencana. Sering muncul di JFT-Basic.", 
          contoh_jp: "今日の予定は何ですか。", 
          contoh_rm: "Kyou no yotei wa nan desu ka.", 
          contoh_id: "Jadwal hari ini apa?",
          contoh2_jp: "予定を確認します。",
          contoh2_rm: "Yotei o kakunin shimasu.",
          contoh2_id: "Saya memeriksa jadwal."
        },
        { 
          kata: "約束 (やくそく)", 
          romaji: "yakusoku", 
          arti: "janji", 
          penggunaan: "Dipakai untuk menyebut janji. Sering muncul di JFT-Basic.", 
          contoh_jp: "友達と約束があります。", 
          contoh_rm: "Tomodachi to yakusoku ga arimasu.", 
          contoh_id: "Saya ada janji dengan teman.",
          contoh2_jp: "約束を守ります。",
          contoh2_rm: "Yakusoku o mamorimasu.",
          contoh2_id: "Saya menepati janji."
        },
        { 
          kata: "生活 (せいかつ)", 
          romaji: "seikatsu", 
          arti: "kehidupan", 
          penggunaan: "Dipakai untuk menyebut kehidupan sehari-hari. Sering muncul di JFT-Basic.", 
          contoh_jp: "日本の生活は楽しいです。", 
          contoh_rm: "Nihon no seikatsu wa tanoshii desu.", 
          contoh_id: "Kehidupan di Jepang menyenangkan.",
          contoh2_jp: "生活が忙しいです。",
          contoh2_rm: "Seikatsu ga isogashii desu.",
          contoh2_id: "Kehidupan saya sibuk."
        },
        { 
          kata: "社会 (しゃかい)", 
          romaji: "shakai", 
          arti: "masyarakat", 
          penggunaan: "Dipakai untuk menyebut masyarakat. Sering muncul di JFT-Basic.", 
          contoh_jp: "社会の問題です。", 
          contoh_rm: "Shakai no mondai desu.", 
          contoh_id: "Ini masalah masyarakat.",
          contoh2_jp: "社会に出て働きます。",
          contoh2_rm: "Shakai ni dete hatarakimasu.",
          contoh2_id: "Saya masuk ke masyarakat dan bekerja."
        },
        { 
          kata: "文化 (ぶんか)", 
          romaji: "bunka", 
          arti: "budaya", 
          penggunaan: "Dipakai untuk menyebut budaya. Sering muncul di JFT-Basic.", 
          contoh_jp: "日本の文化が好きです。", 
          contoh_rm: "Nihon no bunka ga suki desu.", 
          contoh_id: "Saya suka budaya Jepang.",
          contoh2_jp: "文化を学びます。",
          contoh2_rm: "Bunka o manabimasu.",
          contoh2_id: "Saya mempelajari budaya."
        }
      ]
    },
    {
      nama: "Cuaca & Suhu",
      kata: [
        { 
          kata: "熱 (ねつ)", 
          romaji: "netsu", 
          arti: "demam / suhu tubuh", 
          penggunaan: "Dipakai untuk menyebut demam atau suhu tubuh. Sering muncul di JFT-Basic (kesehatan).", 
          contoh_jp: "熱があります。", 
          contoh_rm: "Netsu ga arimasu.", 
          contoh_id: "Saya demam.",
          contoh2_jp: "熱が三十八度あります。",
          contoh2_rm: "Netsu ga sanjuuhachi do arimasu.",
          contoh2_id: "Demamnya 38 derajat."
        },
        { 
          kata: "気温 (きおん)", 
          romaji: "kion", 
          arti: "suhu udara", 
          penggunaan: "Dipakai untuk menyebut suhu udara. Sering muncul di JFT-Basic (prakiraan cuaca).", 
          contoh_jp: "今日の気温は三十度です。", 
          contoh_rm: "Kyou no kion wa sanjuu do desu.", 
          contoh_id: "Suhu hari ini 30 derajat.",
          contoh2_jp: "気温が下がります。",
          contoh2_rm: "Kion ga sagarimasu.",
          contoh2_id: "Suhu udara turun."
        },
        { 
          kata: "気分 (きぶん)", 
          romaji: "kibun", 
          arti: "perasaan / mood", 
          penggunaan: "Dipakai untuk menyebut perasaan atau kondisi mood. Sering muncul di JFT-Basic.", 
          contoh_jp: "気分がいいです。", 
          contoh_rm: "Kibun ga ii desu.", 
          contoh_id: "Perasaan saya bagus.",
          contoh2_jp: "気分が悪いです。",
          contoh2_rm: "Kibun ga warui desu.",
          contoh2_id: "Perasaan saya kurang enak."
        },
        { 
          kata: "空気 (くうき)", 
          romaji: "kuuki", 
          arti: "udara", 
          penggunaan: "Dipakai untuk menyebut udara. Bisa juga berarti 'suasana'.", 
          contoh_jp: "空気が綺麗です。", 
          contoh_rm: "Kuuki ga kirei desu.", 
          contoh_id: "Udara-nya bersih.",
          contoh2_jp: "部屋の空気を換えます。",
          contoh2_rm: "Heya no kuuki o kaemasu.",
          contoh2_id: "Saya mengganti udara kamar."
        }
      ]
    }
  ]
}
];

// Kunci -> objek kategori, untuk lookup cepat di render.
var KOSAKATA_CATEGORY_MAP = {};
for (var _i = 0; _i < KOSAKATA_CATEGORIES.length; _i++) {
  KOSAKATA_CATEGORY_MAP[KOSAKATA_CATEGORIES[_i].key] = KOSAKATA_CATEGORIES[_i];
}
