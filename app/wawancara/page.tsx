'use client';

import { useState, useEffect } from 'react';

interface QAPair {
  question: string;
  answer: string;
}

interface Interview {
  id: string;
  name: string;
  role: string;
  category: 'expert' | 'pembaca' | 'komunitas';
  categoryLabel: string;
  avatar: string;
  tagline: string;
  summary: string;
  quote: string;
  fullQA: QAPair[];
  avatarPosition?: string;
}

export default function WawancaraPage() {
  const [filter, setFilter] = useState<'Semua' | 'expert' | 'pembaca' | 'komunitas'>('Semua');
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Apa Kata Mereka | Arc Nusantara';
  }, []);

  const interviews: Interview[] = [
    {
      id: 'alfi',
      name: 'Amalia Alfi Abida',
      role: 'Komikus & Kreator LINE Webtoon',
      category: 'expert',
      categoryLabel: 'KREATOR / EXPERT',
      avatar: '/assets/avatar_alfi.jpg',
      tagline: 'Lulusan DKV ITS yang sukses merilis judul komik utama di LINE Webtoon Indonesia, bereksperimen dengan berbagai gaya visual.',
      summary: 'Alfi aktif di dunia komik profesional sejak 2020. Ia mengadopsi gaya sinematik manhwa karena visualnya yang dinamis dan efisien. Alfi percaya bahwa identitas lokal Indonesia dalam komik tidak harus selalu terikat pada art style gambar, melainkan bisa direpresentasikan secara kuat lewat atribut visual lingkungan sehari-hari dan bahasa penuturan tokoh.',
      quote: 'Banyak orang membaca komik bukan cuma untuk relate, tapi untuk lari dari realita. Itu alasan mengapa gaya anime yang simpel dengan mood lighting lebih populer.',
      fullQA: [
        {
          question: 'Boleh perkenalkan diri Anda dan sudah berapa lama berkecimpung di dunia komik Indonesia?',
          answer: 'Perkenalkan saya Amalia Alfi Abida, biasa dipanggil Alvia atau Amelia. Saya berasal dan tinggal di Surabaya, lulusan DKV ITS angkatan 2018 (lulus 2023). Untuk dunia komik sendiri, saya mulai mengenal format web komik (scroll vertikal) sekitar tahun 2016 secara amatir, lalu mulai ikut lomba di 2018 dan resmi rilis profesional (kontrak) sekitar tahun 2020. Di LINE Webtoon Indonesia, saya sudah merilis dua judul utama: "Moonflower" (tamat 2023) dan "Jeda" (series khusus Ramadan hasil kolaborasi dengan Amoeba Uwu).'
        },
        {
          question: 'Gaya atau komik apa yang paling besar pengaruhnya terhadap cara Anda menggambar dan bercerita?',
          answer: 'Pengaruh paling awal dan terbesar saya adalah anime Jepang yang ditonton sepulang sekolah atau mengaji, seperti Naruto dan Doraemon. Anime sangat memengaruhi cara dasar saya menggambar dan membangun character development. Namun seiring waktu, gaya bercerita dan visual saya banyak terpengaruh oleh kreator lokal di Webtoon seperti Kak Annisa Nisfihani (Pasutri Gaje), dipadukan dengan sentuhan pewarnaan sinematik dari manhwa Korea dan manga Jepang.'
        },
        {
          question: 'Menurut Anda, apa perbedaan gaya visual antara komik era dulu (Barat/lokal jadul) dibanding gaya Asia (manga, manhwa, manhua) yang populer sekarang?',
          answer: 'Perbedaannya sangat mendasar. Komik lama atau Barat umumnya menggunakan gaya semi-realis yang sangat detail dan kaku (seperti Si Buta dari Gua Hantu atau Panji Koming). Gaya visual Asia modern lebih "fun", ekspresif, dan disederhanakan, di mana fokus kekuatannya dipindahkan ke pewarnaan digital dan shading. Gaya ringan ini jauh lebih nyaman untuk dinikmati saat membaca cepat di layar HP (format scroll) dibanding gaya realis yang terasa berat dan serius.'
        },
        {
          question: 'Apakah Anda sendiri pernah mengubah atau menyesuaikan art style mengikuti tren gaya Asia? Apa alasannya?',
          answer: 'Ya, saya menyesuaikan gaya dengan format manhwa digital yang lebih sinematik. Di era digital, pewarnaan dan panel sinematik jauh lebih penting daripada anatomi manusia yang sempurna. Jika kita menggambar dengan gaya semi-realistik yang rumit untuk webtoon, selain membuat kreator cepat lelah, pembaca juga akan merasa overwhelm dan lelah saat scroll cepat. Gambar yang sedikit disederhanakan dengan lighting/mood yang kuat justru membantu pembaca lari dari realita.'
        },
        {
          question: 'Dari sudut pandang komikus, apa yang membuat gaya Asia sangat menarik bagi pembaca muda Indonesia?',
          answer: 'Gaya Asia sangat mudah dicerna. Ekspresi emosinya disederhanakan secara cerdas—misalnya kerutan marah atau mata berbinar bisa digambar dengan beberapa garis strip saja, namun maknanya langsung tersampaikan secara kuat. Ditambah lagi, komik digital seperti Webtoon memadukan visual berwarna dengan background music (BGM) atau gambar bergerak (GIF) yang membuat pengalaman membaca menjadi sangat santai dan imersif.'
        },
        {
          question: 'Apakah ada elemen visual khas Indonesia yang menurut Anda seharusnya tetap dipertahankan meski tren bergeser ke gaya Asia?',
          answer: 'Tentu saja ada. Identitas Indonesia tidak harus dipaksakan pada gaya goresan gambarnya, melainkan pada atribut visual dan latar cerita. Misalnya seragam sekolah OSIS, baju seragam PNS, arsitektur rumah lokal, kabel listrik tiang yang semrawut, ubin semen, pohon pisang, hingga keberagaman fisik suku (Bhinneka Tunggal Ika). Penggunaan gaya bahasa sehari-hari, adlibs, dan istilah lokal dalam balon kata juga sangat krusial menjaga ruh keindonesiaan komik.'
        },
        {
          question: 'Kapan dan bagaimana Anda mulai merasakan perubahan nyata pada selera pembaca Indonesia beralih ke komik Asia?',
          answer: 'Perubahan besar terjadi saat LINE Webtoon masuk secara masif ke pasar Indonesia sekitar tahun 2014-2016, diiringi promosi gencar di TV dan meluasnya kepemilikan smartphone. Puncaknya terjadi selama masa pandemi COVID-19 ketika digitalisasi merata di segala usia. Selera pembaca kini bergeser drastis ke arah format digital berwarna, meskipun belakangan ini pasar mengalami sedikit kejenuhan/stagnasi karena persaingan dengan konten short-form video (TikTok/Reels).'
        },
        {
          question: 'Menurut Anda, apa faktor terbesar pembaca muda lebih memilih manga/manhwa dibanding komik lokal tradisional?',
          answer: 'Faktor variasi dan kedalaman cerita (storytelling). Manga dan manhwa menawarkan pelarian imajinatif yang luas seperti tema fantasi atau isekai, yang membuat pembaca benar-benar masuk ke dunia baru. Komik lokal tradisional sering kali terbentur pada cerita slice-of-life harian yang sederhana. Meski slice-of-life tetap disukai, generasi muda juga membutuhkan variasi genre fiksi spekulatif dengan ekosistem rilis yang teratur.'
        },
        {
          question: 'Apa hambatan terbesar komikus lokal dalam beradaptasi dengan tren yang terus berubah ini?',
          answer: 'Hambatan terbesarnya adalah krisis kepercayaan diri terhadap IP (Intellectual Property) yang digarap, serta kekhawatiran melihat pasar yang sudah sangat padat. Solusinya adalah dengan tetap percaya pada konsep dasar karya sendiri, lalu mencari sudut pandang baru yang unik untuk membedakannya. Contohnya, tema sekolah biasa bisa diubah menjadi sangat menarik jika dicampur dengan misteri atau fantasi lokal.'
        }
      ]
    },
    {
      id: 'szami',
      name: 'Matahari Indonesia (Zsami)',
      role: 'Komikus Senior & Art Editor di Kisai Entertainment',
      category: 'expert',
      categoryLabel: 'KREATOR / EXPERT',
      avatar: '/assets/avatar_szami.jpg',
      tagline: 'Komikus kawakan dengan pengalaman lebih dari 15 tahun di media cetak nasional hingga platform digital global.',
      summary: 'Zsami memulai perjalanannya dari media cetak indie hingga menjadi Art Editor profesional untuk Tapas US. Referensinya sangat hibrida antara pacing dinamis manga Jepang dan worldbuilding komik Barat/lokal. Zsami menyoroti bahwa hambatan utama komikus lokal bukanlah kualitas visual, melainkan infrastruktur industri komik nasional yang masih rapuh.',
      quote: 'Komik lama (Barat/lokal) bersifat monumental—satu panel bisa berdiri sendiri seperti poster. Komik Asia modern sangat sinematik dan berfokus pada flow dan emosi.',
      fullQA: [
        {
          question: 'Boleh perkenalkan diri Anda dan sudah berapa lama berkecimpung di dunia komik Indonesia?',
          answer: 'Nama asli saya Matahari Indonesia, namun saya lebih dikenal dengan nama pena Zsami. Saya sudah berkecimpung di industri komik selama lebih dari 15 tahun. Saya memulai debut di majalah komik indie bernama 8 Magz pada tahun 2008, lalu beralih ke penerbit mayor Mizan di tahun 2011. Sepanjang karir, saya telah mengerjakan berbagai format webtoon, komik strip, dan saat ini bekerja sebagai Art Editor di Kisai Entertainment untuk platform Tapas US.'
        },
        {
          question: 'Gaya atau komik apa yang paling besar pengaruhnya terhadap cara Anda menggambar dan bercerita?',
          answer: 'Gaya saya sangat hibrida. Secara visual dan narasi, saya banyak belajar pacing dan ekspresi emosi dari manga Jepang (seperti Eiichiro Oda, Naoki Urasawa, dan CLAMP). Namun untuk desain dunia dan karakter, saya terpengaruh oleh komik Barat/Eropa seperti Tintin, W.I.T.C.H., komik Disney, serta komik lokal legendaris di Majalah Bobo dan karya duo Benny & Mice.'
        },
        {
          question: 'Menurut Anda, apa perbedaan gaya visual antara komik era dulu dibanding gaya Asia yang populer sekarang?',
          answer: 'Komik superhero Barat atau komik lokal masa lalu memiliki estetika yang monumental dan grafis—satu panel digambar dengan sangat matang sehingga bisa berdiri sendiri layaknya poster. Sebaliknya, komik Asia modern (manhwa/webtoon) lebih mengedepankan pendekatan sinematik. Fokusnya adalah kelancaran aliran antarpel (flow), ekspresi tokoh yang emosional, dan pewarnaan digital penuh yang dioptimalkan untuk kenyamanan membaca di gawai.'
        },
        {
          question: 'Apakah Anda sendiri pernah mengubah atau menyesuaikan art style Anda mengikuti tren gaya Asia?',
          answer: 'Di awal karir, saya sangat condong ke gaya manga shonen. Gaya saya berevolusi menjadi hybrid setelah menempuh pendidikan DKV ITB yang menuntut eksplorasi identitas lokal. Saat ini saya mengadopsi proporsi semi-realistik modern yang terinspirasi dari artis-artis digital seperti Ilya Kuvshinov dan Artgerm, namun untuk komik anak-anak dan strip, saya tetap menggunakan gaya kartun yang simpel.'
        },
        {
          question: 'Apa yang secara visual membuat gaya Asia terasa lebih menarik atau mudah diterima pembaca muda Indonesia?',
          answer: 'Ada empat faktor utama yang saya amati: Pertama, penyederhanaan ekspresi wajah yang membuat emosi terbaca cepat tanpa dialog panjang. Kedua, alur visual (pacing) sinematik yang mirip anime and drakor. Ketiga, desain karakter yang modis, rupawan, dan aspirasional. Keempat, format scroll vertikal yang sangat pas untuk dibaca satu tangan di layar ponsel pintar.'
        },
        {
          question: 'Apakah ada elemen visual khas Indonesia yang menurut Anda seharusnya tetap dipertahankan?',
          answer: 'Sangat banyak dan penting untuk dipertahankan. Elemen tersebut meliputi: kekayaan ragam budaya fisik (ragam hias batik, detail arsitektur lokal, kuliner nusantara), representasi fisik rasial masyarakat kita (kulit sawo matang, rambut, postur tubuh khas), humor komikal dan gestur khas orang lokal, serta penggambaran lingkungan tropis yang realistis seperti suasana warung kopi, pemukiman padat, dan vegetasi lokal.'
        },
        {
          question: 'Kapan dan bagaimana perubahan selera pembaca dari barat/lokal ke gaya Asia ini mulai terasa di Indonesia?',
          answer: 'Proses ini merupakan perjalanan panjang selama kurang lebih tiga dekade. Dimulai awal 1990-an ketika penerbit Elex Media mulai melisensi manga secara legal, diikuti tayangan anime di stasiun televisi nasional sepanjang tahun 2000-an. Gelombang ini akhirnya meledak secara masif pada era 2010-an seiring tersedianya platform webtoon digital di smartphone.'
        },
        {
          question: 'Menurut Anda, apa faktor terbesar yang mendorong generasi muda lebih memilih komik Asia dibanding komik lokal?',
          answer: 'Pertama adalah kemudahan dan kemurahan akses lewat platform digital. Kedua, pengaruh ekosistem budaya pop global (K-Pop, K-Drama, dan Anime) yang mendominasi kehidupan sehari-hari anak muda. Ketiga, konsistensi produksi komik Asia yang luar biasa tinggi karena didukung oleh sistem industri studio. Hal terakhir inilah yang belum dimiliki oleh pasar komik lokal Indonesia.'
        },
        {
          question: 'Apa hambatan terbesar komikus lokal Indonesia dalam bersaing di industri sekarang?',
          answer: 'Hambatannya bukan pada keterampilan menggambar atau bakat visual, melainkan pada rapuhnya ekosistem industri komik dalam negeri. Jalur karir bagi komikus lokal belum jelas, monetisasi sangat sulit, platform penerbitan lokal tidak berumur panjang, dan beban produksi sangat tinggi karena mayoritas komikus bekerja sendiri (solo) tanpa bantuan asisten. Ditambah lagi, tantangan masa depan berupa perkembangan AI generator yang berisiko menekan harga pasar.'
        }
      ]
    },
    {
      id: 'ezekiel',
      name: 'Ezekiel Reuben',
      role: 'Mahasiswa & Pembaca Binge Manhwa',
      category: 'pembaca',
      categoryLabel: 'PEMBACA AKTIF',
      avatar: '/assets/avatar_ezekiel.jpg',
      tagline: 'Mahasiswa berusia 19 tahun yang gemar membaca maraton (binge read) manhwa aksi fantasi hingga 5 jam sehari.',
      summary: 'Ezekiel meluangkan sekitar 5 jam setiap harinya untuk membaca komik ber-genre aksi, petualangan, fantasi, horor, dan thriller. Format vertikal dan visual manhwa asal Korea menjadi pilihan utamanya. Rekomendasi di platform sangat memengaruhinya untuk menemukan komik dengan kualitas top.',
      quote: 'Saya lebih suka manhwa Korea karena menyukai format gulir vertikal dan kualitas gambarnya. Sekali baca bisa langsung maraton (binge read).',
      fullQA: [
        {
          question: 'Boleh perkenalkan diri Anda dan apa kesibukan sehari-hari Anda?',
          answer: 'Nama saya Ezekiel Reuben, umur saya 19 tahun, dan kesibukan atau keseharian saya adalah kuliah.'
        },
        {
          question: 'Berapa banyak waktu yang biasanya Anda habiskan untuk membaca komik dalam sehari?',
          answer: 'Biasanya saya menghabiskan waktu luang saya sekitar 5 jam sehari untuk membaca komik.'
        },
        {
          question: 'Di media atau platform mana saja Anda biasanya mengakses komik?',
          answer: 'Saya biasa membaca lewat platform resmi seperti LINE Webtoon dan juga beberapa situs website bajakan di internet.'
        },
        {
          question: 'Bagaimana kebiasaan membaca komik Anda? Apakah mengikuti update mingguan atau marathon?',
          answer: 'Kebiasaan saya adalah suka melakukan marathon membaca (binge read) komik-komik manhwa yang ceritanya sudah tamat sepenuhnya.'
        },
        {
          question: 'Seberapa besar pengaruh rekomendasi atau daftar komik terpopuler di platform terhadap pilihan bacaan Anda?',
          answer: 'Rekomendasi terpopuler lumayan berpengaruh bagi saya, karena dari daftar terpopuler itu terlihat komik mana saja yang memiliki peringkat top.'
        },
        {
          question: 'Gaya komik dari negara mana (Jepang, Korea, Cina, lokal) yang paling sering Anda baca? Apa alasannya?',
          answer: 'Saya membaca lebih banyak komik asal Korea (manhwa) karena saya sangat menyukai kualitas art style dan format gulirnya.'
        },
        {
          question: 'Genre komik apa saja yang paling Anda sukai?',
          answer: 'Genre yang paling banyak saya baca itu adalah action, adventure, fantasy, horror, dan thriller. Saya membaca genre ini lumayan banyak karena memang genre-genre ini terbilang pasaran di manga, manhwa, maupun manhua sehingga mudah ditemukan.'
        }
      ],
      avatarPosition: 'center top'
    },
    {
      id: 'reynaldo',
      name: 'Reynaldo Dendy',
      role: 'Mahasiswa & Pembaca Komik Regresi',
      category: 'pembaca',
      categoryLabel: 'PEMBACA AKTIF',
      avatar: '/assets/avatar_reynaldo.jpg',
      tagline: 'Mahasiswa berusia 17 tahun yang gemar ngoding, anime, dan mengikuti rilis mingguan manhwa petualangan regresi.',
      summary: 'Dendy menghabiskan 20 menit hingga 3 jam per hari membaca komik. Ia sangat gemar melacak update rilis mingguan manhwa Korea. Minat terbesarnya ada pada komik fantasi dengan tema regresi, yang mendominasi 70% rekomendasi bacaannya.',
      quote: 'Saya suka sekali genre adventure bertema regresi (kembali ke masa lalu). Kalau rekomendasi memunculkan tema itu, 70% pasti saya baca.',
      fullQA: [
        {
          question: 'Boleh perkenalkan diri Anda dan apa saja kesibukan sehari-hari Anda?',
          answer: 'Nama saya Reynaldo Dendy, umur saya 17 tahun. Keseharian saya diisi dengan kuliah, ngoding (belajar pemrograman), membaca komik, menonton anime, serta menonton MPL (Mobile Legends Professional League).'
        },
        {
          question: 'Berapa banyak waktu yang Anda habiskan untuk membaca komik dalam sehari?',
          answer: 'Kalau sedang senggang (nganggur) saya bisa membaca berjam-jam, sekitar 3 jam total. Tapi kalau sedang sibuk, biasanya hanya berkisar 20 menit hingga 50 menit saja.'
        },
        {
          question: 'Di media atau platform mana saja Anda biasanya membaca komik?',
          answer: 'Dulu saya sering membaca di LINE Webtoon resmi, tapi sekarang saya lebih sering membaca bajakan lewat aplikasi seperti Komikindo apk.'
        },
        {
          question: 'Bagaimana kebiasaan membaca komik Anda? Apakah mengikuti update mingguan atau marathon?',
          answer: 'Saya tipe pembaca yang selalu mengikuti jadwal rilis update mingguan komik-komik tertentu yang sedang saya ikuti.'
        },
        {
          question: 'Seberapa besar pengaruh rekomendasi platform terhadap pilihan bacaan Anda?',
          answer: 'Pengaruhnya sekitar 70% bagi saya. Karena saya sangat menyukai tema regresi, maka rekomendasi yang muncul di gawai saya adalah tema regresi semua.'
        },
        {
          question: 'Gaya komik dari negara mana yang paling Anda sukai?',
          answer: 'Tentu saja yang paling utama adalah komik Korea (manhwa). Baru kalau sudah habis, saya membaca manga Jepang atau manhua China.'
        },
        {
          question: 'Genre komik apa saja yang paling Anda sukai?',
          answer: 'Saya menyukai genre adventure (petualangan), terutama karena saya sangat menyukai cerita yang bertema regresi.'
        }
      ],
      avatarPosition: 'center 30%'
    },
    {
      id: 'hast',
      name: 'Hast (KKBS)',
      role: 'Perwakilan Komunitas Komik & Bahasa Seni',
      category: 'komunitas',
      categoryLabel: 'PELAKU KOMUNITAS',
      avatar: '/assets/avatar_hast.jpg',
      tagline: 'Pengamat komik dan anggota aktif KKBS yang mengikuti transisi komik dari era persewaan buku fisik hingga platform digital modern.',
      summary: 'Hast menyaksikan langsung transisi cara baca komik di Indonesia. Berawal dari meminjam komik fisik sewaan (seperti Doraemon), ia kini aktif membaca komik digital di berbagai platform. Menurut Hast, dominasi komik Asia tidak terlepas dari matangnya ekosistem industri di negara asalnya, sementara apresiasi dan perlindungan finansial untuk komikus di Indonesia masih sangat minim.',
      quote: 'Secara kualitas, komik Indonesia sangat layak bersaing dengan mancanegara. Namun selama ekosistem industri kreatif masih rapuh, kita akan terus stagnan di sini saja.',
      fullQA: [
        {
          question: 'Boleh perkenalkan diri Anda dan kapan Anda mulai aktif di komunitas komik?',
          answer: 'Saya Hast, anggota aktif dari KKBS (Komunitas Komik dan Bahasa Seni). Ketertarikan saya pada dunia komik dimulai sejak akhir masa sekolah dasar (SD), di mana saya sering meminjam komik teman sekelas atau menyewa buku di persewaan dekat rumah sebelum era internet berkembang pesat.'
        },
        {
          question: 'Seberapa sering Anda membaca komik sekarang dan media apa yang digunakan?',
          answer: 'Sekarang saya membaca jauh lebih sering dibanding dahulu. Kehadiran teknologi smartphone dan internet memudahkan akses. Walau dahulu kami menyukai fisik, kini kami membaca melalui platform digital seperti Webtoon, Kakao Webtoon, Tapas, MangaPlus, hingga situs-situs lainnya yang mudah ditemui di internet.'
        },
        {
          question: 'Gaya komik apa yang paling memengaruhi minat membaca Anda di masa lalu?',
          answer: 'Sejak kecil, pengaruh terbesar datang dari manga Jepang. Doraemon adalah gerbang utama saya mengenal komik. Distribusi manga cetak yang sangat masif di era 90-an dan awal 2000-an menjadikannya bacaan paling populer dan mudah didapatkan oleh masyarakat Indonesia saat itu.'
        },
        {
          question: 'Mengapa menurut Anda industri komik luar (seperti Jepang) lebih mendominasi di Indonesia?',
          answer: 'Jepang dan negara barat telah berhasil membangun ekosistem profesionalitas industri kreatif yang sangat matang dan terintegrasi (seperti anime yang saling mendukung dengan manga). Ekosistem yang matang ini memungkinkan terciptanya beragam variasi genre dan judul cerita yang konsisten dirilis untuk memanjakan berbagai selera pembaca.'
        },
        {
          question: 'Bagaimana Anda melihat minat pembaca generasi muda saat ini terhadap platform digital?',
          answer: 'Generasi sekarang memiliki ketergantungan yang sangat tinggi pada smartphone. Platform digital telah membentuk budaya konsumsi yang cepat. Jadwal update komik digital yang sangat teratur (bahkan harian) mirip dengan tayangan sinetron zaman dulu, mendidik pembaca untuk terus konsumtif terhadap konten baru.'
        },
        {
          question: 'Bagaimana potensi komik lokal buatan komikus Indonesia di mata komunitas?',
          answer: 'Secara kualitas gambar dan cerita, banyak karya komikus Indonesia yang sebenarnya sangat layak untuk bersaing di tingkat mancanegara. Potensinya sangat besar, namun apresiasi publik dalam negeri masih tergolong minim dan cenderung segmentatif.'
        },
        {
          question: 'Apa harapan dan tantangan industri komik Indonesia ke depan menurut komunitas?',
          answer: 'Harapan itu selalu ada, namun perjuangannya sangat berat. Selama ekosistem industri kreatif di Indonesia tidak dibenahi (minimnya royalti yang layak, tidak ada jaminan karir, dan platform lokal yang tidak bertahan lama), pasar kita akan terus stagnan. Sangat sulit mempertahankan komikus baru untuk bertahan karena kendala finansial, sehingga penggiat komik lokal yang bertahan sering kali hanya segelintir orang yang itu-itu saja.'
        }
      ]
    }
  ];

  const filteredInterviews = filter === 'Semua' 
    ? interviews 
    : interviews.filter(item => item.category === filter);

  const activeInterview = interviews.find(item => item.id === activeId);

  const handleSelect = (id: string) => {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setActiveId(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // ─── ARTICLE LAYOUT (DETAILED VIEW) ───────────────────
  if (activeInterview) {
    const related = interviews.filter(item => item.id !== activeId);

    return (
      <section className="db-main animate-fade-in" style={{ paddingBottom: '120px' }}>
        {/* Back navigation */}
        <div style={{ marginBottom: '40px' }}>
          <button 
            onClick={handleBack} 
            className="f-btn"
            style={{ 
              background: 'transparent', 
              color: 'var(--accent-color)', 
              border: '1px solid rgba(126,173,207,0.3)', 
              padding: '12px 28px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: '1px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← KEMBALI KE WAWANCARA
          </button>
        </div>

        {/* Article Header */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '48px', marginBottom: '48px' }}>
          <span className="cat" style={{ fontSize: '10px', letterSpacing: '2px', border: '1px solid rgba(126,173,207,0.3)', padding: '4px 12px', display: 'inline-block', marginBottom: '24px' }}>
            {activeInterview.categoryLabel}
          </span>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: '1.0', marginBottom: '16px', letterSpacing: '-2px' }}>
            {activeInterview.name}
          </h1>
          <p className="accent-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {activeInterview.role}
          </p>
        </div>

        {/* Hero Segment (Avatar + Highlight Quote) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 320px) 1fr', gap: '48px', marginBottom: '64px', alignItems: 'start' }}>
          <div style={{ border: '1px solid var(--card-border)', borderTop: '3px solid var(--accent-color)', overflow: 'hidden', height: '400px' }}>
            <img 
              src={activeInterview.avatar} 
              alt={activeInterview.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: activeInterview.avatarPosition || 'center top', filter: 'brightness(0.85)' }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <span style={{ fontSize: '80px', color: 'var(--accent-glow)', lineHeight: 0.2, fontFamily: 'var(--font-heading)', userSelect: 'none' }}>“</span>
            <blockquote style={{ fontSize: '28px', fontStyle: 'italic', color: '#fff', lineHeight: '1.4', fontWeight: 300, marginBottom: '24px', position: 'relative', top: '-10px' }}>
              {activeInterview.quote}
            </blockquote>
            <div style={{ background: 'rgba(126, 173, 207, 0.04)', padding: '24px', borderLeft: '2px solid var(--accent-color)' }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-color)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Profil Singkat:
              </h4>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--secondary-text)', margin: 0 }}>
                {activeInterview.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Article Q&A Transcript */}
        <div style={{ maxWidth: '780px', margin: '0 auto 80px', padding: '0 16px' }}>
          <h2 style={{ fontSize: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '40px', letterSpacing: '1px' }}>
            TRANSKRIP LENGKAP WAWANCARA
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {activeInterview.fullQA.map((qa, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-color)', fontSize: '13px', fontWeight: 'bold', border: '1px solid rgba(126,173,207,0.3)', padding: '2px 8px', lineHeight: 1.2 }}>Q</span>
                  <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#fff', margin: 0, textTransform: 'none', letterSpacing: 'normal', lineHeight: '1.5', fontFamily: 'var(--font-heading)' }}>
                    {qa.question}
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingLeft: '44px' }}>
                  <p style={{ fontSize: '16px', lineHeight: '1.85', color: 'var(--secondary-text)', margin: 0, textAlign: 'justify' }}>
                    {qa.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related articles navigation */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '64px', marginTop: '84px' }}>
          <div className="section-label">WAWANCARA LAINNYA</div>
          <h3 style={{ fontSize: '28px', marginBottom: '40px', color: '#fff' }}>BACA PERSPEKTIF LAIN</h3>
          
          <div className="g-grid">
            {related.map((item) => (
              <div key={item.id} className="g-entry" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="g-img" style={{ height: '240px', overflow: 'hidden' }}>
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.avatarPosition || 'center top' }} 
                  />
                </div>
                <div className="g-entry-body" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="cat">{item.categoryLabel}</span>
                  <h3 style={{ fontSize: '20px' }}>{item.name}</h3>
                  <p className="year-label" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '12px' }}>
                    {item.role}
                  </p>
                  <p className="short-desc" style={{ marginBottom: '24px', flex: 1 }}>
                    {item.tagline}
                  </p>
                  <button 
                    className="f-btn active" 
                    style={{ width: '100%', padding: '10px 0', border: '1px solid var(--accent-color)', fontSize: '11px', fontWeight: 900 }}
                    onClick={() => handleSelect(item.id)}
                  >
                    BACA ARTIKEL →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ─── LIST LAYOUT (GRID OF CARDS) ─────────────────────
  return (
    <section className="db-main animate-fade-in" style={{ paddingBottom: '120px' }}>
      <div className="section-label">APA KATA MEREKA</div>
      <h2>PERSPEKTIF <span className="accent-text">INDUSTRI</span></h2>
      <p className="subtitle" style={{ maxWidth: '850px', marginBottom: '40px' }}>
        Kompilasi wawancara eksklusif dan pandangan mendalam mengenai pergeseran selera komik di Indonesia dari sudut pandang narasumber kredibel: Kreator (Expert), Pembaca Aktif, dan Komunitas Seni.
      </p>

      {/* FILTER TABS */}
      <div className="f-row" style={{ marginBottom: '48px' }}>
        <button 
          className={`f-btn ${filter === 'Semua' ? 'active' : ''}`} 
          onClick={() => setFilter('Semua')}
        >
          Semua
        </button>
        <button 
          className={`f-btn ${filter === 'expert' ? 'active' : ''}`} 
          onClick={() => setFilter('expert')}
        >
          Ahli / Expert
        </button>
        <button 
          className={`f-btn ${filter === 'pembaca' ? 'active' : ''}`} 
          onClick={() => setFilter('pembaca')}
        >
          Pembaca Aktif
        </button>
        <button 
          className={`f-btn ${filter === 'komunitas' ? 'active' : ''}`} 
          onClick={() => setFilter('komunitas')}
        >
          Komunitas
        </button>
      </div>

      {/* INTERVIEWS GRID */}
      <div className="g-grid">
        {filteredInterviews.map((item) => (
          <div key={item.id} className="g-entry" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="g-img" style={{ height: '240px', overflow: 'hidden' }}>
              <img 
                src={item.avatar} 
                alt={item.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.avatarPosition || 'center top' }} 
              />
            </div>
            <div className="g-entry-body" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="cat">{item.categoryLabel}</span>
              <h3>{item.name}</h3>
              <p className="year-label" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-color)', marginBottom: '12px' }}>
                {item.role}
              </p>
              <p className="short-desc" style={{ marginBottom: '24px', flex: 1 }}>
                {item.tagline}
              </p>
              <button 
                className="f-btn active" 
                style={{ width: '100%', padding: '10px 0', border: '1px solid var(--accent-color)', fontSize: '11px', fontWeight: 900 }}
                onClick={() => handleSelect(item.id)}
              >
                BACA WAWANCARA →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
