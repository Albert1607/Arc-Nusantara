'use client';

import Carousel from '@/components/Carousel';
import { useState, useEffect } from 'react';

/* ─── MODAL DATA ─────────────────────────────────────── */

const faktorModal = {
  digitalisasi: {
    title: 'Digitalisasi & Internet',
    label: '01, TEKNOLOGI',
    content: [
      'Revolusi internet di Indonesia tidak terjadi dalam semalam. Dimulai dari warung internet (warnet) yang menjamur di awal tahun 2000-an, akses terhadap konten digital perlahan namun pasti membuka pintu bagi jutaan pembaca untuk menikmati komik dari seluruh penjuru dunia. Manga yang sebelumnya harus dicari di toko buku atau disewa di persewaan buku, kini bisa dibaca gratis hanya dengan koneksi internet sederhana.',
      'Penetrasi smartphone yang massif sejak 2012–2015 menjadi titik balik paling krusial. Ketika harga ponsel Android mulai terjangkau dan paket data semakin murah, perilaku konsumsi konten masyarakat Indonesia berubah drastis. Membaca komik bukan lagi aktivitas yang membutuhkan perpindahan fisik ke toko buku, cukup dari genggaman tangan di mana saja dan kapan saja.',
      'Digitalisasi juga mengubah cara komik diproduksi dan didistribusikan. Komikus tidak lagi bergantung pada penerbit tradisional dengan proses editorial yang panjang dan biaya cetak yang tinggi. Platform digital memungkinkan siapa saja untuk mempublikasikan karyanya secara mandiri, langsung menjangkau jutaan pembaca tanpa perantara. Demokratisasi produksi ini memunculkan gelombang baru kreator indie yang sebelumnya tidak memiliki akses ke industri formal.',
      'Format file yang semakin dioptimalkan turut berperan. Dari gambar JPG resolusi rendah di era warnet, kini komik digital hadir dalam format WebP terkompresi atau bahkan format interaktif dengan animasi dan efek suara. Webtoon, sebagai contoh, telah mengembangkan format "Discover" yang memungkinkan kreator menambahkan musik latar dan gambar bergerak ke dalam panel mereka, sesuatu yang mustahil dilakukan oleh komik cetak konvensional.',
      'Ironi dari era digitalisasi adalah bagaimana ia sekaligus mengancam dan menyelamatkan industri komik. Di satu sisi, pembajakan digital menjadi momok bagi penerbit dan kreator karena konten dengan mudah disalin dan disebarkan tanpa izin. Di sisi lain, visibilitas yang tinggi di dunia maya justru memperluas jangkauan pembaca secara organik. Sebuah komik yang viral di media sosial bisa menarik ratusan ribu pembaca baru dalam waktu singkat, sesuatu yang tidak mungkin dicapai melalui jalur distribusi fisik tradisional.',
    ]
  },
  platform: {
    title: 'Platform Digital',
    label: '02, PLATFORM',
    content: [
      'Kemunculan platform baca komik digital telah merevolusi cara industri ini beroperasi. LINE Webtoon, yang masuk ke Indonesia sekitar tahun 2014–2015, bukan sekadar aplikasi membaca, ia adalah ekosistem lengkap yang menghubungkan kreator dengan pembaca, dilengkapi sistem monetisasi, program pelatihan kreator, dan mekanisme umpan balik real-time berupa komentar dan like. Model freemium yang ditawarkan, gratis untuk membaca dengan opsi premium untuk konten eksklusif, terbukti sangat efektif menarik pengguna baru.',
      'MangaPlus dari Shueisha menghadirkan inovasi yang berbeda namun sama revolusionernya: akses legal dan gratis ke manga-manga terbaru dari Jepang di hari yang sama dengan tanggal terbitnya di Jepang. Sebelum era MangaPlus, pembaca Indonesia harus menunggu berbulan-bulan untuk mendapatkan terjemahan legal, atau beralih ke sumber bajakan untuk membaca chapter terbaru. Kecepatan akses ini secara signifikan mengurangi insentif untuk membaca versi bajakan.',
      'Persaingan antar platform juga mendorong inovasi fitur yang terus-menerus. Kakao Webtoon menghadirkan sistem coin yang lebih fleksibel, Tapas menawarkan jalur monetisasi yang lebih menguntungkan bagi kreator, sementara MangaDex, meskipun berjalan di area abu-abu legalitas, membangun komunitas terjemahan scanlation yang solid. Kompetisi ini pada akhirnya menguntungkan pembaca dengan memberikan lebih banyak pilihan dan kualitas konten yang semakin baik.',
      'Dampak platform terhadap format dan gaya bercerita tidak bisa diremehkan. Format scroll vertikal yang dipopulerkan Webtoon secara fundamental mengubah cara komikus merancang panel dan alur cerita. Tidak ada lagi spread dua halaman atau splash page, komikus harus berpikir dalam unit "layar gulir" yang dioptimalkan untuk layar ponsel. Perubahan format ini juga mendorong penggunaan warna penuh sebagai standar, bukan pilihan, karena layar digital jauh lebih baik dalam mereproduksi warna dibanding kertas.',
      'Platform lokal seperti Ciayo Comics dan KomikID sempat hadir untuk memenuhi kebutuhan konten berbahasa Indonesia, namun sebagian besar tidak mampu bertahan dalam jangka panjang akibat keterbatasan modal dan persaingan dengan pemain global. Kegagalan platform lokal ini menjadi cerminan dari tantangan yang lebih besar: membangun ekosistem industri yang berkelanjutan membutuhkan investasi jangka panjang yang sering kali tidak bisa dipenuhi oleh startup kreatif dengan sumber daya terbatas.',
    ]
  },
  globalisasi: {
    title: 'Globalisasi Budaya',
    label: '03, BUDAYA',
    content: [
      'Globalisasi budaya pop Asia di Indonesia bukan fenomena yang muncul tiba-tiba. Prosesnya telah berlangsung selama lebih dari tiga dekade, dimulai dari tayangan anime di stasiun televisi nasional pada awal 1990-an. Dragon Ball, Sailor Moon, Doraemon, dan Crayon Shin-chan menjadi tontonan wajib generasi yang tumbuh di era itu. Ketika anak-anak ini beranjak remaja, hasrat untuk mengeksplorasi sumber asli anime, yaitu manga, menjadi dorongan yang natural.',
      'Gelombang K-Pop dan K-Drama yang melanda Indonesia sejak pertengahan 2000-an menambahkan dimensi baru dalam pergeseran budaya ini. Korean Wave atau Hallyu membawa serta manhwa sebagai bagian dari paket budaya Korea yang lebih besar. Pembaca yang terpesona dengan sinematografi K-Drama menemukan estetika visual serupa dalam manhwa, pencahayaan dramatis, karakter dengan penampilan memukau, dan narasi yang emosional. Crossover antara penggemar K-Drama dan pembaca manhwa menjadi sangat natural.',
      'Fenomena komunitas fan yang aktif turut mempercepat penyebaran budaya komik Asia. Fan sub (subtitle oleh penggemar), scanlation (scan dan terjemahan oleh komunitas), dan fan art menciptakan ekosistem konten yang jauh melampaui apa yang bisa disediakan oleh penerbit resmi. Komunitas-komunitas ini bukan hanya mengonsumsi konten, tetapi juga aktif memproduksi, menerjemahkan, dan mendistribusikan, membangun semacam perpustakaan digital yang terus berkembang.',
      'Acara-acara pop culture seperti festival anime, cosplay competition, dan komik expo yang semakin menjamur di kota-kota besar Indonesia menjadi bukti nyata dari penetrasi budaya ini. Jakarta Comic Con, Kaori Nusantara, dan berbagai event lokal lainnya mengumpulkan puluhan ribu penggemar setiap tahunnya. Event-event ini tidak hanya menjadi ajang konsumsi, tetapi juga ruang produksi, di mana komikus lokal bisa memamerkan dan menjual karya mereka langsung kepada pembaca yang antusias.',
      'Yang menarik adalah bagaimana globalisasi budaya ini tidak bersifat satu arah. Sementara manga dan manhwa mempengaruhi selera visual Indonesia, kreator lokal Indonesia juga semakin dilirik oleh pasar internasional. Beberapa komikus Indonesia kini aktif mempublikasikan karya mereka di Webtoon versi Inggris dan mendapatkan pembaca dari berbagai penjuru dunia. Pertukaran budaya ini menciptakan ekosistem yang lebih kaya, di mana identitas lokal dan pengaruh global berdialog secara kreatif.',
    ]
  },
  mediaSosial: {
    title: 'Media Sosial',
    label: '04, MEDIA SOSIAL',
    content: [
      'Media sosial telah mengubah cara komik ditemukan, dibagikan, dan dikonsumsi secara fundamental. Di era sebelumnya, rekomendasi komik bergantung pada kepercayaan antarpribadi, teman sekolah yang meminjamkan buku, kakak yang merekomendasikan judul, atau review di majalah khusus. Kini, sebuah panel tunggal yang diunggah ke Twitter atau Instagram bisa menjangkau jutaan orang dalam hitungan jam, menciptakan efek viral yang tidak terbayangkan sebelumnya.',
      'TikTok telah menjadi mesin rekomendasi komik yang paling powerful dalam beberapa tahun terakhir. Format video pendek yang memungkinkan kreator merekap alur cerita menarik dalam 60 detik, membahas teori plot, atau sekadar menampilkan panel-panel dramatis dengan musik yang tepat, telah menciptakan genre konten tersendiri yang disebut "BookTok" dan variannya "MangaTok". Jutaan penonton yang tidak pernah membaca komik sebelumnya terpapar konten ini dan akhirnya tertarik untuk membaca langsung.',
      'Fenomena "spoiler culture" di media sosial menciptakan dinamika yang kompleks. Di satu sisi, spoiler dan diskusi plot yang beredar di Twitter/X mendorong pembaca untuk segera membaca chapter terbaru agar bisa ikut berpartisipasi dalam percakapan. Di sisi lain, overexposure terhadap spoiler juga bisa mengurangi motivasi membaca bagi sebagian orang. Platform seperti Webtoon merespons ini dengan model "fast pass", pembaca bisa membayar untuk membaca chapter lebih awal, mengubah pengalaman spoiler menjadi peluang monetisasi.',
      'Kreator komik yang memanfaatkan media sosial secara cerdas berhasil membangun audiens yang loyal bahkan sebelum karya mereka resmi diterbitkan. Proses menggambar yang dibagikan secara live di Instagram, sketsa awal karakter yang diunggah ke Twitter, atau behind-the-scenes pembuatan komik di YouTube, semua ini membangun koneksi emosional antara kreator dan pembaca yang jauh lebih dalam dibanding model penerbit tradisional. Pembaca merasa menjadi bagian dari perjalanan penciptaan, bukan sekadar konsumen pasif.',
      'Algoritma media sosial secara aktif membentuk tren dan selera pembaca. Konten yang mendapat engagement tinggi, biasanya yang memanfaatkan elemen emosional, twist plot yang mengejutkan, atau visual yang memukau, akan didistribusikan lebih luas oleh algoritma. Hal ini mendorong baik kreator maupun platform komik untuk semakin memperhatikan aspek "hook" di chapter-chapter awal. Komik yang memiliki chapter pembuka yang kuat di era media sosial bisa tumbuh dengan kecepatan yang tidak tertandingi oleh media konvensional apapun.',
    ]
  }
};

const timelineModal = {
  t1931: {
    title: 'Put On & Era Komik Kolonial',
    label: 'ERA KOLONIAL, 1931',
    content: [
      'Tahun 1931 menandai tonggak sejarah paling awal dalam perjalanan industri komik Indonesia. Kho Wan Gie, seorang seniman keturunan Tionghoa yang tinggal di Batavia (kini Jakarta), mulai menerbitkan komik strip berjudul "Put On" di surat kabar Sin Po. Karakter Put On, seorang pria bujang kikuk yang menghadapi situasi sehari-hari dengan cara yang absurd dan menggelikan, langsung mendapat sambutan hangat dari pembaca. Keberhasilannya membuktikan bahwa masyarakat Indonesia, bahkan di masa kolonial, memiliki selera dan apresiasi terhadap narasi visual bergaya humor.',
      'Sin Po sendiri adalah salah satu surat kabar terbesar yang diterbitkan oleh komunitas Tionghoa peranakan di Hindia Belanda. Komik strip di surat kabar bukanlah konsep baru, tradisi ini sudah lama ada di Amerika Serikat dan Eropa. Namun keputusan Sin Po untuk menerbitkan Put On menandai adaptasi format barat ini ke dalam konteks lokal yang autentik. Kho Wan Gie tidak sekadar meniru, ia menciptakan karakter dan situasi yang sangat relevan dengan kehidupan keseharian masyarakat urban Batavia pada masa itu.',
      'Konteks kolonial memberikan warna tersendiri pada karya-karya komik awal Indonesia. Pembaca komik pada era ini adalah masyarakat urban yang terdidik, umumnya mereka yang bisa membaca dan memiliki akses ke surat kabar. Komik menjadi medium yang unik: cukup sederhana untuk menghibur, namun seringkali cukup tajam untuk mengkritik situasi sosial dan politik dengan cara yang tersamarkan melalui humor. Put On, meski tidak secara eksplisit politis, merekam kehidupan sosial Batavia dengan detail yang berharga secara historis.',
      'Pengaruh Put On terhadap generasi komikus berikutnya sulit diukur secara kuantitatif, namun signifikansinya tidak bisa diragukan. Ia membuktikan bahwa komik bisa menjadi medium bercerita yang serius dan bermartabat dalam konteks Indonesia. Setelah Put On, berbagai komik strip lain mulai bermunculan di surat-surat kabar dan majalah Indonesia, sebuah ekosistem kecil namun vital yang menjadi benih dari industri komik yang lebih besar di masa pasca-kemerdekaan.',
      'Warisan Put On melampaui zamannya. Kho Wan Gie terus berkarya selama beberapa dekade, menjadikan Put On salah satu komik strip dengan durasi penerbitan terpanjang dalam sejarah Indonesia. Karakter Put On menemani pembaca melalui berbagai periode sejarah, masa pendudukan Jepang, revolusi kemerdekaan, hingga era Orde Lama. Ketangguhan karakter ini dalam bertahan melalui berbagai pergolakan sejarah menjadikannya simbol dari daya tahan budaya komik Indonesia itu sendiri.',
    ]
  },
  t1953: {
    title: 'Fajar Heroisme: Sri Asih & Pahlawan Lokal',
    label: 'ERA PAHLAWAN LOKAL, 1953',
    content: [
      'Tahun 1953 adalah tahun ketika RA Kosasih melahirkan Sri Asih, pahlawan super wanita pertama Indonesia yang sekaligus menjadi salah satu pahlawan super wanita pertama di Asia. Kemunculan Sri Asih bukan sekadar peristiwa budaya biasa; ia adalah deklarasi kemandirian kreatif dari para komikus Indonesia yang ingin menciptakan pahlawan mereka sendiri, bukan sekadar mengadaptasi yang sudah ada dari luar negeri. Dengan latar belakang budaya wayang dan mitologi Nusantara, Sri Asih hadir dengan identitas yang sangat berbeda dari Superman atau Wonder Woman.',
      'RA Kosasih adalah tokoh sentral dalam pembentukan DNA komik Indonesia. Lahir di Bogor pada tahun 1919, Kosasih memiliki kecintaan yang mendalam terhadap seni wayang dan budaya Jawa. Karya-karyanya, yang meliputi Sri Asih, Siti Gahara, Dewi Maya, hingga adaptasi epik Mahabharata dan Ramayana, menunjukkan komitmen untuk mengintegrasikan kekayaan budaya lokal ke dalam medium komik yang masih relatif baru. Ia membuktikan bahwa komik bisa menjadi wahana pelestarian dan penyebaran budaya tradisional kepada generasi muda.',
      'Era 1950-an hingga 1960-an adalah periode keemasan pertama komik Indonesia. Berbagai komikus berbakat bermunculan dengan karakter-karakter orisinal yang hingga kini masih dikenang. Ganes TH menciptakan Si Buta dari Gua Hantu, pendekar buta dengan kemampuan silat yang luar biasa. Djair menggambar Jaka Sembung, seorang pahlawan rakyat yang melawan penjajah dengan kekuatan supernatural. Wid NS melahirkan Gundala Putra Petir, pahlawan super dengan kekuatan petir yang menjadi ikon komik Indonesia. Keberagaman karakter ini mencerminkan kekayaan imajinasi dan keberanian bereksperimen para komikus lokal.',
      'Pengaruh budaya wayang dan seni tradisional Indonesia terlihat jelas dalam estetika visual komik era ini. Garis-garis yang tegas dan berani, proporsi tubuh yang heroik namun tidak kaku, serta penggunaan elemen visual yang terinspirasi dari seni ukir dan batik, semua ini menciptakan gaya visual yang khas Indonesia, berbeda dari komik Barat maupun Asia yang contemporer. Meski kemudian gaya ini mulai tergusur oleh pengaruh manga, periode ini meninggalkan warisan visual yang unik dan berharga.',
      'Tragisnya, banyak komik dari era keemasan ini yang kini sulit ditemukan dalam kondisi baik. Keterbatasan teknologi percetakan dan pengelolaan arsip yang belum matang menyebabkan banyak edisi pertama dari komik-komik bersejarah ini hilang atau rusak dimakan waktu. Upaya digitalisasi dan konservasi yang dilakukan oleh komunitas pecinta komik dan beberapa lembaga kebudayaan masih jauh dari cukup. Ironisnya, sebagian komik lokal era ini lebih mudah ditemukan dalam koleksi perpustakaan di Belanda, dibawa oleh orang-orang Belanda yang tinggal di Indonesia pada masa kolonial, daripada di perpustakaan atau museum di Indonesia sendiri.',
    ]
  },
  t1972: {
    title: 'Invasi Marvel & DC: Barat Menguasai Rak Toko',
    label: 'INVASI KOMIK BARAT, 1972',
    content: [
      'Dekade 1970-an membawa gelombang besar komik superhero Amerika ke Indonesia. Spider-Man, Superman, Batman, Fantastic Four, karakter-karakter ikonik ini tiba-tiba hadir di rak toko buku dan kios majalah dalam terjemahan Bahasa Indonesia. Penerbit lokal yang melihat potensi pasar mulai berlomba-lomba mendapatkan lisensi untuk menerbitkan komik-komik Barat ini. Hasilnya adalah banjir konten superhero Amerika yang secara signifikan mengubah lanskap industri komik Indonesia.',
      'Kualitas produksi komik Barat, dengan garis yang halus, anatomi yang detail, dan narasi yang dramatis, memberikan standar visual baru yang sebelumnya belum pernah ada di pasar komik Indonesia. Pembaca yang terbiasa dengan gaya visual komik lokal tiba-tiba dihadapkan pada splash page superhero yang menawan, efek gambar yang dinamis, dan pewarnaan (meski masih terbatas) yang lebih canggih. Kontras ini menciptakan persepsi, yang tidak sepenuhnya adil, bahwa komik asing lebih "berkualitas" dibanding produk lokal.',
      'Dampak terhadap komikus lokal bersifat ganda. Di satu sisi, masuknya komik Barat memberikan referensi visual baru yang memperluas wawasan dan mengangkat standar teknis. Banyak komikus Indonesia generasi ini yang belajar banyak dari membedah anatomi gambar dan teknik narasi komik Marvel dan DC. Di sisi lain, dominasi komik impor di pasar menekan ruang bagi karya lokal. Dengan lebih banyak sumber daya yang dimiliki penerbit asing, mereka bisa menawarkan harga lebih kompetitif dan menguasai distribusi dengan lebih efektif.',
      'Periode ini juga menandai masuknya komik dari Eropa, terutama dari Prancis dan Belgia. Tintin karya Hergé, Lucky Luke, dan Asterix menemukan pembaca setia di Indonesia. Komik-komik Eropa ini menawarkan gaya yang berbeda dari superhero Amerika, lebih berfokus pada humor, petualangan, dan narasi yang lebih bersifat picaresque. Diversitas gaya yang masuk ke Indonesia pada periode ini sesungguhnya memperkaya khazanah referensi visual pembaca dan komikus lokal, meski juga semakin mempersempit ruang pasar bagi produksi lokal.',
      'Ironisnya, periode ketika komik Barat paling dominan juga menjadi periode ketika karya-karya komik lokal Indonesia paling orisinal diproduksi. Para komikus Indonesia tidak menyerah, mereka justru bereksperimen lebih berani, menciptakan genre-genre baru yang memadukan pengaruh Barat dengan sensibilitas lokal. Galeri karya dari era ini, yang mencakup komik silat, komik horror, komik roman, dan komik petualangan, membuktikan bahwa tekanan persaingan justru mendorong kreativitas ke arah yang tidak terduga.',
    ]
  },
  t1990: {
    title: 'Tsunami Manga: Elex Media & Revolusi Gaya Asia',
    label: 'INVASI MANGA, 1990',
    content: [
      'Keputusan Elex Media Komputindo untuk mulai menerbitkan manga secara legal di awal 1990-an mengubah segalanya. Dragon Ball karya Akira Toriyama menjadi pintu gerbang, sebuah komik dengan gaya visual yang sama sekali berbeda dari apa yang pernah ada sebelumnya di pasar Indonesia. Mata besar, ekspresi yang hiperbolis, efek garis kecepatan yang dramatis, dan narasi yang dipadukan dengan humor slapstick, paket visual ini langsung beresonansi dengan pembaca muda Indonesia dengan cara yang tidak tertandingi oleh komik Barat atau lokal.',
      'Fenomena manga tidak bisa dipisahkan dari kehadiran anime di televisi Indonesia. RCTI, Indosiar, dan stasiun TV lainnya secara bergiliran menayangkan adaptasi anime dari manga-manga populer. Dragon Ball, Sailormoon, Doraemon, Detektif Conan, dan kemudian Naruto, menjadi tayangan yang ditunggu-tunggu setiap minggu. Siklus antara anime dan manga ini menciptakan loops of engagement: anak-anak yang gemar menonton anime kemudian mencari komik aslinya, dan sebaliknya. Sinergi lintas media ini adalah kekuatan yang tidak dimiliki oleh komik Barat maupun lokal.',
      'Gaya visual manga memberikan "bahasa visual" baru yang dengan cepat diadopsi oleh komikus Indonesia. Anatomi yang disesuaikan dengan gaya kartun, ekspresi wajah yang dikodekan secara visual (chibi untuk lucu, vein mark untuk marah, sweat drop untuk canggung), serta konvensi panel yang sinematik, semua ini menjadi kosakata baru yang diserap secara masif oleh generasi komikus yang tumbuh bersama manga. Transformasi gaya visual ini terjadi begitu cepat dan menyeluruh sehingga pada awal 2000-an, batas antara "manga Indonesia" dan "komik lokal gaya manga" sudah sangat kabur.',
      'Dampak ekonomi dari boom manga sangat besar. Elex Media Komputindo menjadi salah satu penerbit terbesar di Indonesia, dengan daftar judul yang terus bertambah. Toko buku Gramedia, yang terafiliasi dengan Kompas Gramedia Group, induk dari Elex Media, menjadi destinasi wajib bagi pencinta manga. Industri merchandise, toko aksesoris anime, dan festival pop culture yang terinspirasi dari budaya manga mulai bermunculan. Manga bukan lagi sekadar komik, ia menjadi lifestyle, sebuah subkultur dengan komunitas yang kuat dan identitas yang khas.',
      'Namun tsunami manga juga membawa dampak yang kurang menyenangkan bagi komik lokal. Pembaca yang terbiasa dengan produksi manga yang sangat teratur, dengan artist studio yang mendukung mangaka, editor yang ketat, dan kualitas cetakan yang konsisten, mulai membandingkan standar ini dengan produksi komik lokal yang sering kali dikerjakan sendiri oleh komikusnya. Gap kualitas produksi ini, bukan gap kualitas cerita atau gambar, menjadi salah satu faktor utama mengapa komik lokal kalah bersaing di pasaran pada era ini.',
    ]
  },
  t2014: {
    title: 'Webtoon Masuk: Era Komik Vertikal Digital',
    label: 'ERA DIGITAL, 2014',
    content: [
      'Ketika LINE Webtoon meluncurkan versi Bahasa Indonesia pada tahun 2014–2015, tidak ada yang mengira dampaknya akan sedemikian besar dan permanen. Platform yang awalnya dikembangkan oleh Naver Corporation Korea ini membawa konsep yang revolusioner: komik berwarna penuh dalam format scroll vertikal, bisa diakses secara gratis dari smartphone, dengan jadwal update yang teratur. Model ini langsung memukul pasar dengan tepat, ia memenuhi semua kebutuhan pembaca modern Indonesia yang sudah akrab dengan layar ponsel dan koneksi internet.',
      'Keputusan strategis Webtoon untuk membuka program Canvas, platform terbuka di mana siapa saja bisa menerbitkan komik mereka, memiliki implikasi yang luar biasa. Ribuan komikus Indonesia yang sebelumnya tidak memiliki akses ke penerbit tradisional kini bisa langsung menjangkau jutaan pembaca. Kreator seperti Annisa Nisfihani dengan Pasutri Gaje-nya atau berbagai kreator lokal lainnya membangun basis pembaca yang solid melalui Webtoon, membuktikan bahwa ada pasar yang besar untuk konten Indonesia di platform digital.',
      'Format scroll vertikal yang dipopulerkan Webtoon mengharuskan restrukturisasi cara bercerita yang fundamental. Komikus tidak lagi bisa mengandalkan layout halaman yang biasa digunakan dalam manga atau komik buku. Setiap panel harus dirancang untuk pengalaman gulir, transisi antar panel harus mulus secara vertikal, climax harus ditempatkan di bagian bawah "chapter" untuk mendorong pembaca terus scroll, dan panel lebar harus diganti dengan panel vertikal yang memenuhi lebar layar ponsel. Perubahan format ini melahirkan bahasa visual baru dalam dunia komik.',
      'Webtoon juga mengubah dinamika kekuasaan dalam industri komik. Dengan data engagement real-time (jumlah subscriber, likes, komentar per chapter), platform memiliki visibilitas penuh terhadap performa setiap judul. Kreator yang konsisten menghasilkan chapter berkualitas dengan jadwal yang teratur akan mendapat boost dari algoritma. Sistem ini lebih meritokratis dibanding model penerbit tradisional, kualitas dan konsistensi, bukan koneksi industri, yang menentukan keberhasilan. Meski ada kritik bahwa model ini juga bisa mengeksploitasi kreator dengan ekspektasi jadwal yang tidak realistis.',
      'Dampak jangka panjang dari masuknya Webtoon masih terus terasa hingga hari ini. Generasi komikus Indonesia yang tumbuh bersama Webtoon memiliki pemahaman yang jauh lebih baik tentang produksi konten digital, branding personal, dan interaksi dengan audiens dibanding generasi sebelumnya. Mereka adalah generasi yang dari awal berkarya dalam logika platform digital, dengan pemahaman tentang algoritma, engagement metrics, dan community building yang menjadi modal berharga dalam industri kreatif modern.',
    ]
  },
  t2024: {
    title: 'Kebangkitan Kreator Lokal di Era AI & Platform Global',
    label: 'ERA KREATOR LOKAL, 2024',
    content: [
      'Tahun 2024 menandai babak baru yang penuh paradoks dalam industri komik Indonesia. Di satu sisi, kreator lokal Indonesia kini memiliki akses yang belum pernah ada sebelumnya ke audiens global melalui platform-platform digital internasional. Beberapa kreator Indonesia berhasil masuk dalam daftar komik terpopuler di Webtoon versi Inggris, menjangkau pembaca dari Amerika Serikat, Eropa, hingga Asia lainnya. Pencapaian ini menunjukkan bahwa kualitas karya kreator Indonesia sudah setara, bahkan melampaui, standar internasional.',
      'Namun di sisi lain, ancaman dari AI generatif yang semakin canggih mulai menghantui industri komik secara global, termasuk di Indonesia. Tools seperti Midjourney, DALL-E, dan Stable Diffusion memungkinkan siapa saja menghasilkan gambar berkualitas komik dalam hitungan detik, sesuatu yang membutuhkan bertahun-tahun latihan jika dilakukan oleh manusia. Respons komunitas komikus Indonesia terpolarisasi: sebagian menolak keras penggunaan AI dan mengkampanyekan apresiasi terhadap karya manusia, sementara sebagian lainnya mulai mengeksplorasi AI sebagai tools bantu produksi.',
      'Komik lokal yang berhasil menembus pasar global umumnya memiliki satu kesamaan: identitas budaya yang kuat yang dipadukan dengan standar produksi kelas dunia. Garudayana karya Is Yuniarto, dengan visualisasi mitologi wayang dalam gaya manga yang impresif, menjadi contoh paling sering dikutip. Karya-karya serupa yang mengangkat keunikan budaya nusantara, dari folklore daerah, kuliner lokal, hingga dinamika sosial masyarakat urban Indonesia, ternyata justru memiliki daya tarik yang unik di mata pembaca internasional yang sudah jenuh dengan cerita-cerita generik.',
      'Ekosistem pendukung kreator lokal mulai terbentuk, meski masih dalam tahap awal. Komunitas-komunitas online seperti grup Discord dan Telegram untuk komikus Indonesia, program mentorship dari kreator senior ke kreator pemula, serta workshop dan webinar tentang produksi komik digital, semua ini mulai membangun infrastruktur informal yang mendukung pertumbuhan industri. Beberapa platform lokal juga mulai bermunculan kembali dengan model bisnis yang lebih matang, mencoba mengisi gap yang ditinggalkan oleh platform-platform sebelumnya yang gagal.',
      'Tantangan terbesar yang dihadapi industri komik Indonesia pada tahun 2024 dan ke depannya bukan lagi tentang kualitas artistik atau orisinalitas cerita, kedua hal itu sudah terbukti ada. Tantangan terbesarnya adalah membangun ekosistem yang bisa menghidupi kreator secara finansial dalam jangka panjang. Monetisasi yang adil, perlindungan hak cipta yang efektif, dan jalur karir yang berkelanjutan menjadi tiga pilar yang harus dibangun bersama oleh kreator, platform, penerbit, dan pemerintah jika industri komik Indonesia ingin benar-benar bangkit sebagai kekuatan kreatif global.',
    ]
  }
};

/* ─── MODAL COMPONENT ────────────────────────────────── */
interface ModalData {
  title: string;
  label: string;
  content: string[];
}

function DetailModal({ data, onClose }: { data: ModalData; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(4,7,12,0.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeInModal 0.3s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'rgba(12,20,30,0.98)',
          border: '1px solid rgba(126,173,207,0.18)',
          borderTop: '3px solid var(--accent-color)',
          width: '100%', maxWidth: '760px',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: '48px 52px',
          position: 'relative',
          animation: 'slideUpModal 0.35s cubic-bezier(0.16,1,0.3,1)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '24px',
            background: 'transparent', border: '1px solid rgba(126,173,207,0.25)',
            color: 'var(--secondary-text)', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px',
            padding: '6px 14px', textTransform: 'uppercase',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-color)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-color)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(126,173,207,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--secondary-text)'; }}
        >
          ✕ TUTUP
        </button>

        {/* Header */}
        <span style={{
          fontFamily: 'var(--font-mono)', color: 'var(--accent-color)',
          fontSize: '10px', letterSpacing: '2px',
          border: '1px solid rgba(126,173,207,0.35)',
          padding: '4px 12px', display: 'inline-block', marginBottom: '20px'
        }}>
          {data.label}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px,3vw,32px)',
          fontWeight: 900, textTransform: 'uppercase',
          color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.05,
          marginBottom: '36px'
        }}>
          {data.title}
        </h3>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(126,173,207,0.1)', marginBottom: '36px' }} />

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {data.content.map((para, i) => (
            <p key={i} style={{
              fontSize: '15px', lineHeight: '1.85',
              color: 'var(--secondary-text)',
              textAlign: 'justify'
            }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SURABAYA CHART COMPONENT ───────────────────────── */
const surabayaData = [
  { label: 'Manhwa Korea', pct: 41, color: '#7EADCF' },
  { label: 'Manga Jepang',  pct: 33, color: '#5A8EBF' },
  { label: 'Komik Lokal',   pct: 14, color: '#3A6E9A' },
  { label: 'Manhua China',  pct: 8,  color: '#2A5070' },
  { label: 'Komik Barat',   pct: 4,  color: '#1A3550' },
];

function SurabayaChart() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      marginTop: '72px',
      borderTop: '1px solid rgba(126,173,207,0.1)',
      paddingTop: '64px'
    }}>
      <div className="section-label">RISET LOKAL</div>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px,3vw,36px)',
        fontWeight: 900, textTransform: 'uppercase',
        color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.0,
        marginBottom: '8px'
      }}>
        DATA KONSUMSI KOMIK<br />
        <span style={{ color: 'var(--accent-color)' }}>DI SURABAYA</span>
      </h3>
      <p style={{ color: 'var(--secondary-text)', fontSize: '14px', marginBottom: '40px', fontFamily: 'var(--font-mono)', letterSpacing: '0.5px' }}>
        // Preferensi genre & asal komik pembaca aktif, estimasi survei lokal 2024
      </p>

      {/* Bar Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '720px' }}>
        {surabayaData.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '13px',
                fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '1px', color: '#c8d8e4'
              }}>
                {item.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '18px',
                fontWeight: 900, color: item.color
              }}>
                {item.pct}%
              </span>
            </div>
            <div style={{
              height: '10px',
              background: 'rgba(126,173,207,0.08)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(126,173,207,0.1)'
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: animated ? `${item.pct}%` : '0%',
                background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                transition: `width ${0.7 + i * 0.12}s cubic-bezier(0.16,1,0.3,1)`,
                boxShadow: `0 0 12px ${item.color}44`
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Legend note */}
      <p style={{
        color: '#4a6070', fontSize: '11px',
        marginTop: '32px', fontFamily: 'var(--font-mono)',
        letterSpacing: '0.5px'
      }}>
        * Data bersifat estimasi berdasarkan survei pembaca aktif di Surabaya, N≈120 responden, 2024
      </p>
    </div>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────── */
export default function Home() {
  const [modal, setModal] = useState<ModalData | null>(null);

  const openModal = (data: ModalData) => setModal(data);
  const closeModal = () => setModal(null);

  return (
    <>
      {/* MODAL OVERLAY */}
      {modal && <DetailModal data={modal} onClose={closeModal} />}

      {/* CSS for modal animations */}
      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 20px;
          background: transparent;
          border: 1px solid rgba(126,173,207,0.35);
          color: var(--accent-color);
          padding: 10px 20px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .more-btn:hover {
          background: var(--accent-color);
          color: #050810;
          border-color: var(--accent-color);
          box-shadow: 0 0 18px rgba(126,173,207,0.25);
        }
        .timeline-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 24px;
          background: transparent;
          border: 1px solid rgba(126,173,207,0.3);
          color: var(--accent-color);
          padding: 12px 24px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .timeline-more-btn:hover {
          background: var(--accent-color);
          color: #050810;
          border-color: var(--accent-color);
          box-shadow: 0 0 18px rgba(126,173,207,0.22);
        }
      `}</style>

      {/* BERANDA */}
      <section id="beranda">
        <div className="hero-bg-img"></div>
        <div className="hero-inner">
          <div className="section-label">INISIALISASI_SISTEM</div>
          <h1>ARC<br /><span className="accent-text">NUSANTARA</span></h1>
          <p className="subtitle">Repositori digital yang memetakan pergeseran budaya seni sekuensial di Indonesia, dari asal-usul lokal hingga era digital global.</p>
          <div style={{ marginBottom: '40px', maxWidth: '600px' }}>
            <h3 style={{ color: 'var(--accent-color)', fontSize: '14px', marginBottom: '12px' }}>TUJUAN KAMI</h3>
            <p style={{ fontSize: '15px', color: 'var(--secondary-text)' }}>Mendokumentasikan sejarah perjalanan komik, membedah evolusi gaya visual dari lokal hingga global, dan membangun arsip digital sebagai referensi komprehensif bagi pembaca lintas generasi.</p>
          </div>
          <div><a href="#linimasa" className="cta-btn">JELAJAHI SEJARAH →</a></div>
        </div>
      </section>

      {/* FAKTOR */}
      <section id="faktor">
        <div className="section-label">MENGAPA</div>
        <h2>FAKTOR <br /><span className="accent-text">PERGESERAN</span></h2>
        <div className="card-grid" style={{gridTemplateColumns: '1fr 1fr'}}>
          {/* Card 1 */}
          <div className="modern-card">
            <div className="card-img-wrap"><img src="https://images.unsplash.com/photo-1544082646-12fd181f4809?q=80&w=1740&auto=format&fit=crop" alt="Digitalisasi Internet" id="digitalisasi-internet" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">01, TEKNOLOGI</span>
              <h3>Digitalisasi &amp; Internet</h3>
              <p>Akses internet yang semakin mudah membuat manga dan manhwa bisa dibaca gratis secara online, jauh lebih mudah dari membeli komik fisik di toko buku.</p>
              <button className="more-btn" onClick={() => openModal(faktorModal.digitalisasi)}>
                BACA SELENGKAPNYA →
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="modern-card">
            <div className="card-img-wrap"><img src="/assets/apps.png" alt="Platform Digital" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">02, PLATFORM</span>
              <h3>Platform Digital</h3>
              <p>Webtoon, MangaPlus, dan platform baca online lainnya hadir dengan model gratis atau murah, mengubah cara orang mengakses komik sepenuhnya.</p>
              <button className="more-btn" onClick={() => openModal(faktorModal.platform)}>
                BACA SELENGKAPNYA →
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="modern-card">
            <div className="card-img-wrap"><img src="https://images.unsplash.com/photo-1755962270071-d8e353c7ca97?w=900&auto=format&fit=crop&q=60" alt="Globalisasi Budaya" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">03, BUDAYA</span>
              <h3>Globalisasi Budaya</h3>
              <p>Popularitas anime di TV Indonesia sejak 1990an membawa penonton untuk mencari sumber aslinya, manga. Budaya pop Jepang dan Korea menyebar lewat film, musik, dan media sosial.</p>
              <button className="more-btn" onClick={() => openModal(faktorModal.globalisasi)}>
                BACA SELENGKAPNYA →
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="modern-card">
            <div className="card-img-wrap"><img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=75" alt="Media Sosial" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">04, MEDIA SOSIAL</span>
              <h3>Media Sosial</h3>
              <p>TikTok, Instagram, dan Twitter mempercepat penyebaran rekomendasi komik. Satu panel viral bisa membuat ribuan orang langsung mencari judul tersebut.</p>
              <button className="more-btn" onClick={() => openModal(faktorModal.mediaSosial)}>
                BACA SELENGKAPNYA →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LINIMASA */}
      <section id="linimasa" className="timeline-section">
        <div className="timeline-progress-nav" id="timeline-nav">
          <div className="progress-container">
            <div className="progress-line"></div>
            <a href="#t1931" className="progress-node active" data-target="1931"><div className="node-circle">01</div><span className="node-label">1931</span></a>
            <a href="#t1953" className="progress-node" data-target="1953"><div className="node-circle">02</div><span className="node-label">1953</span></a>
            <a href="#t1972" className="progress-node" data-target="1972"><div className="node-circle">03</div><span className="node-label">1972</span></a>
            <a href="#t1990" className="progress-node" data-target="1990"><div className="node-circle">04</div><span className="node-label">1990</span></a>
            <a href="#t2014" className="progress-node" data-target="2014"><div className="node-circle">05</div><span className="node-label">2014</span></a>
            <a href="#t2024" className="progress-node" data-target="2024"><div className="node-circle">06</div><span className="node-label">2024</span></a>
          </div>
        </div>

        {/* 1931 */}
        <div className="timeline-block" id="t1931" data-year="1931">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://anelindabooks.jejualan.com/productimages/9/2/171292/put-on-edisi-4-komik-strip-pertama-indonesia-karya-kho-wan-gie-207-zoom-3.png',
                '/assets/put_on_vintage.png',
                '/assets/vintage_newspaper.png'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1931</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA KOLONIAL</span>
                <h3>Put On (Kho Wan Gie)</h3>
                <p>Lahirnya industri komik lokal melalui surat kabar Sin Po. Put On menjadi ikon komik strip pertama yang populer di tanah air, mengangkat isu sosial keseharian masyarakat dengan cerdas.</p>
                <button className="timeline-more-btn" onClick={() => openModal(timelineModal.t1931)}>
                  ELABORASI LEBIH →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1953 */}
        <div className="timeline-block" id="t1953" data-year="1953">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                '/assets/sri_asih_cover.png',
                '/assets/sri_asih.jpg',
                '/assets/gundala.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1953</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA PAHLAWAN LOKAL</span>
                <h3>Fajar Heroisme: Sri Asih</h3>
                <p>RA Kosasih memperkenalkan pahlawan super wanita pertama. Periode ini menandai kemandirian komikus lokal dalam menciptakan karakter heroik dengan sentuhan budaya wayang dan mitologi Nusantara.</p>
                <button className="timeline-more-btn" onClick={() => openModal(timelineModal.t1953)}>
                  ELABORASI LEBIH →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1972 */}
        <div className="timeline-block" id="t1972" data-year="1972">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                '/assets/AmazingSpider-Man1.jpg',
                '/assets/retro_comic_shelf.png',
                '/assets/retro_superhero_indo.png'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1972</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">INVASI KOMIK BARAT</span>
                <h3>Masuknya Marvel &amp; DC</h3>
                <p>Era 1970-an ditandai dengan membanjirnya komik superhero dari Amerika Serikat, seperti Spider-Man dan Superman yang diterjemahkan ke bahasa Indonesia. Kehadiran mereka memberi pengaruh besar pada dinamika pasar dan selera visual pembaca di tanah air.</p>
                <button className="timeline-more-btn" onClick={() => openModal(timelineModal.t1972)}>
                  ELABORASI LEBIH →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1990 */}
        <div className="timeline-block" id="t1990" data-year="1990">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://i.pinimg.com/474x/8d/a6/61/8da66191ce5474b15f7089de2c8634f0.jpg',
                '/assets/one_piece.jpg',
                '/assets/manga_stack_90s.png'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1990</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">INVASI MANGA</span>
                <h3>Tsunami Manga</h3>
                <p>Elex Media Komputindo mulai menerbitkan manga secara legal. Dragon Ball dan Doraemon mengubah paradigma visual serta cara bercerita komikus generasi baru di Indonesia.</p>
                <button className="timeline-more-btn" onClick={() => openModal(timelineModal.t1990)}>
                  ELABORASI LEBIH →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2014 */}
        <div className="timeline-block" id="t2014" data-year="2014">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                '/assets/solo_leveling.jpg',
                'https://awsimages.detik.net.id/content/2015/05/06/1059/juki_cvr2.jpg',
                '/assets/webtoon_smartphone.png'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>2014</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA DIGITAL</span>
                <h3>Webtoon Masuk Indonesia</h3>
                <p>Platform manhwa asal Korea masuk ke pasar Indonesia dan langsung mengubah cara konsumsi komik. Format vertikal dan gratis menjadi magnet bagi jutaan pembaca muda.</p>
                <button className="timeline-more-btn" onClick={() => openModal(timelineModal.t2014)}>
                  ELABORASI LEBIH →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 */}
        <div className="timeline-block" id="t2024" data-year="2024">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                '/assets/NDW.jpg',
                '/assets/wee1.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>2024</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA KREATOR LOKAL</span>
                <h3>Kebangkitan Kreator Indonesia</h3>
                <p>Gelombang baru komikus Indonesia hadir di Webtoon dan media sosial, membuktikan bahwa konten lokal mampu bersaing secara global dengan mengadopsi format digital sambil mempertahankan cerita beridentitas Indonesia.</p>
                <button className="timeline-more-btn" onClick={() => openModal(timelineModal.t2024)}>
                  ELABORASI LEBIH →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CARA BACA */}
        <div style={{ padding: '120px 80px', background: 'rgba(8,12,16,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="section-label">EVOLUSI FORMAT</div>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 50px)', marginBottom: '40px' }}>CARA <span className="accent-text">BACA</span> MASYARAKAT</h2>
          <div className="comparison-panels" style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
            <div className="panel">
              <h4 className="panel-title">KANAN → KIRI</h4>
              <div className="panel-img"><img src="/assets/manga-way.png" alt="Manga format" loading="lazy" /></div>
              <div className="panel-body">
                <p className="panel-text">Format asli manga Jepang. Dibaca dari kanan ke kiri, atas ke bawah. Mengikuti arah tulisan bahasa Jepang tradisional.</p>
                <p className="panel-chars">// FORMAT: MANGA JEPANG</p>
              </div>
            </div>
            <div className="panel">
              <h4 className="panel-title">KIRI → KANAN</h4>
              <div className="panel-img"><img src="/assets/comic-way.png" alt="Komik Barat format" loading="lazy" /></div>
              <div className="panel-body">
                <p className="panel-text">Format komik Barat dan lokal Indonesia. Panel dibaca dari kiri ke kanan mengikuti arah baca latin yang umum digunakan.</p>
                <p className="panel-chars">// FORMAT: KOMIK LOKAL</p>
              </div>
            </div>
            <div className="panel">
              <h4 className="panel-title">ATAS → BAWAH</h4>
              <div className="panel-img"><img src="/assets/webtoon-way.png" alt="Webtoon scroll format" loading="lazy" /></div>
              <div className="panel-body">
                <p className="panel-text">Format webtoon/manhwa. Dibaca dari atas ke bawah dengan scroll vertikal. Dirancang khusus untuk layar smartphone.</p>
                <p className="panel-chars">// FORMAT: WEBTOON / MANHWA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NASIB LOKAL */}
      <section id="nasib-lokal">
        <div className="section-label">DAMPAK</div>
        <h2>NASIB KOMIK <br /><span className="accent-text">LOKAL</span></h2>
        <p style={{ fontSize: '19px', lineHeight: '1.45', color: '#c8d8e4', fontWeight: 700, marginBottom: '48px' }}>
          Masuknya manga dan manhwa tidak serta-merta mematikan komik lokal, justru memunculkan gelombang baru komikus Indonesia yang mengadopsi gaya visual Asia Timur namun tetap membawa cerita dan budaya yang berakar dari Indonesia.
        </p>
        <div className="anatomy-layout" style={{gridTemplateColumns: '60% 40%', gap: '40px', alignItems: 'stretch'}}>
          <div className="nasib-hero-img" style={{height: '100%', minHeight: '400px'}}>
            <Carousel images={[
              '/assets/hybrid_comic_cover.png',
              'https://www.gramedia.com/blog/content/images/2025/07/Jagat.jpg',
              '/assets/wee1.jpg'
            ]} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div className="modern-card">
              <div className="card-img-wrap" style={{height: '160px'}}><img src="https://www.gramedia.com/blog/content/images/2025/07/Jagat.jpg" alt="Adaptasi Gaya" loading="lazy" /></div>
              <div className="card-body">
                <h3>Adaptasi Gaya</h3>
                <p>Komik lokal seperti Survival Borneo dan Garudayana mengadopsi gaya visual manga sambil mempertahankan konten lokal, membuktikan bahwa pengaruh ini bisa jadi kekuatan, bukan ancaman.</p>
              </div>
            </div>
            <div className="modern-card">
              <div className="card-img-wrap" style={{height: '160px'}}><img src="/assets/wee1.jpg" alt="Kebangkitan Webtoon Lokal" loading="lazy" /></div>
              <div className="card-body">
                <h3>Kebangkitan Webtoon Lokal</h3>
                <p>Platform Webtoon memberi ruang bagi komikus Indonesia untuk berkarya dan mendapat pembaca global. Banyak kreator lokal kini aktif memproduksi konten di platform ini.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM / EKOSISTEM DIGITAL */}
      <section id="platform">
        <div className="section-label">PLATFORM</div>
        <h2>EKOSISTEM <br /><span className="accent-text">DIGITAL</span></h2>

        {/* Overview paragraphs */}
        <div style={{ marginBottom: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '19px', lineHeight: '1.45', color: '#c8d8e4', fontWeight: 700 }}>
            Ekosistem komik digital Indonesia bukan satu platform, melainkan jaringan yang saling melengkapi antara platform baca, media sosial, dan komunitas kreator yang bersama-sama membentuk cara konsumsi baru.
          </p>
          <p style={{ fontSize: '19px', lineHeight: '1.45', color: '#c8d8e4', fontWeight: 700 }}>
            Platform digital merevolusi cara produksi: kreator kini bisa berkarya mandiri, membangun audiens sendiri, dan memonetisasi karya langsung, tanpa bergantung pada penerbit tradisional.
          </p>
          <p style={{ fontSize: '19px', lineHeight: '1.45', color: '#c8d8e4', fontWeight: 700 }}>
            Persaingan antar platform menguntungkan pembaca lewat inovasi dan akses murah. Namun dominasi platform asing memunculkan pertanyaan: seberapa adil bagian kreator lokal dari ekosistem ini?
          </p>
        </div>

        <div className="card-grid">
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center 45%'}} src="https://i.pinimg.com/1200x/88/ff/8a/88ff8ae7d26d63a4868820a2e689ce0b.jpg" alt="Webtoon" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM, KR</span><h3>Webtoon</h3><p>Platform asal Korea yang masuk Indonesia sekitar 2014–2015. Memberi ruang bagi kreator lokal dan internasional untuk mempublikasikan karya secara gratis. Kini menjadi platform komik terbesar di Indonesia.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center 5%'}} src="https://awsimages.detik.net.id/community/media/visual/2021/09/20/aplikasi-manga-plus-terbitan-shueisha_43.webp?w=1200" alt="MangaPlus" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM, JP</span><h3>MangaPlus</h3><p>Platform resmi dari Shueisha, penerbit manga terbesar Jepang. Menyediakan akses legal dan gratis ke manga-manga populer seperti One Piece dan Jujutsu Kaisen di hari yang sama dengan terbit di Jepang.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center'}} src="/assets/ig.jpeg" alt="Media Sosial" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM, GLOBAL</span><h3>Media Sosial</h3><p>TikTok dan Instagram menjadi mesin rekomendasi komik terbesar. Panel-panel viral, review singkat, dan fan art mendorong jutaan orang untuk mencari dan membaca judul baru.</p></div>
          </div>
        </div>
      </section>

      {/* KEBANGKITAN */}
      <section id="kebangkitan">
        <div className="section-label">SEKARANG</div>
        <h2>BANGKITNYA <br /><span className="accent-text">KREATOR LOKAL</span></h2>
        <p style={{fontSize: '19px', fontWeight: 700, lineHeight: 1.45, color: '#c8d8e4', marginBottom: '60px', maxWidth: '900px'}}>Di tengah dominasi manga dan manhwa, muncul gelombang baru komikus Indonesia yang tidak menyerah, mereka mengadopsi format dan gaya visual yang populer, namun mengisi karya mereka dengan cerita, karakter, dan budaya yang berakar dari Indonesia.</p>
        <div className="card-grid">
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'top'}} src="https://bukukita.com/babacms/displaybuku/96183_f.jpg" alt="Garudayana" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">KOMIK LOKAL</span><h3>Garudayana</h3><p>Karya Is Yuniarto, komik bergaya manga dengan cerita berbasis mitologi wayang dan Mahabharata Indonesia. Membuktikan bahwa gaya visual Jepang bisa menjadi wadah cerita lokal.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'top'}} src="/assets/wee1.jpg" alt="Webtoon Lokal" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM LOKAL</span><h3>Webtoon Lokal</h3><p>Semakin banyak kreator Indonesia aktif di platform Webtoon, membangun audiens lokal maupun internasional dengan cerita original berbahasa Indonesia.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center 15%'}} src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704035616i/204581190.jpg" alt="Survival Borneo" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">HYBRID VISUAL</span><h3>Survival Borneo</h3><p>Komik lokal bergaya manga yang mengangkat tema petualangan di hutan Kalimantan, salah satu contoh paling awal dari hybrid antara gaya visual Asia dan konten lokal Indonesia.</p></div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section id="statistik" className="section-with-bg">
        <div className="section-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=1600&q=75')"}}></div>
        <div className="section-label">DATA</div>
        <h2>DALAM <br /><span className="accent-text">ANGKA</span></h2>
        <div className="stats-grid">
          <div className="stat-box"><div className="stat-number">4 Juta+</div><div className="stat-txt">PENGGUNA AKTIF WEBTOON DI INDONESIA</div></div>
          <div className="stat-box"><div className="stat-number">#1</div><div className="stat-txt">INDONESIA SEBAGAI PASAR KOMIK TERBESAR DI ASIA TENGGARA</div></div>
          <div className="stat-box"><div className="stat-number">1931</div><div className="stat-txt">TAHUN KOMIK LOKAL PERTAMA TERBIT DI INDONESIA</div></div>
          <div className="stat-box"><div className="stat-number">90an</div><div className="stat-txt">DEKADE MANGA MULAI MENGGESER KOMIK LOKAL DARI RAK TOKO BUKU</div></div>
        </div>
        <p style={{color: '#4a6070', fontSize: '12px', marginTop: '48px', fontFamily: 'var(--font-mono)'}}>* Data bersifat estimasi dan akan diverifikasi melalui wawancara dan riset lebih lanjut</p>

        {/* Surabaya Data Chart */}
        <SurabayaChart />
      </section>

      {/* PERBANDINGAN */}
      <section id="perbandingan">
        <div className="section-label">PERBANDINGAN</div>
        <h2>VARIAN <span className="accent-text">GAYA</span> VISUAL</h2>
        <div className="comparison-panels">
          <div className="panel">
            <h4 className="panel-title">KLASIK LOKAL</h4>
            <div className="panel-img"><img src="https://cdn.gramedia.com/uploads/items/cover_GUNDALA_SON_OF_LIGHTNING_1.jpg" alt="Klasik Lokal" loading="lazy" /></div>
            <div className="panel-body"><p className="panel-text">Garis tegas, proporsi anatomi realistis, pengaruh kuat dari komik strip Amerika era 50-an.</p><p className="panel-chars">// Realisme Kedirgantaraan</p></div>
          </div>
          <div className="panel">
            <h4 className="panel-title">MANGA</h4>
            <div className="panel-img"><img src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/02/jjk-manga-panel-split-with-itadori-colorized-in-the-center.jpg?w=1600&h=900&fit=crop" alt="Manga" loading="lazy" /></div>
            <div className="panel-body"><p className="panel-text">Gaya mata besar, ekspresi wajah dramatis, penggunaan efek garis kecepatan untuk aksi.</p><p className="panel-chars">// Dinamis &amp; Ekspresif</p></div>
          </div>
          <div className="panel">
            <h4 className="panel-title">MANHWA</h4>
            <div className="panel-img"><img src="https://preview.redd.it/existence-ended-with-72-chapters-what-are-your-thoughts-v0-igsfer0j3u5c1.png?width=640&crop=smart&auto=webp&s=cc58c400ce0e946dec5670ce3c805e4c34a4e0e9" alt="Manhwa" loading="lazy" /></div>
            <div className="panel-body"><p className="panel-text">Warna digital penuh, pencahayaan sinematik, format vertikal yang dioptimalkan untuk gulir.</p><p className="panel-chars">// Estetika Digital Modern</p></div>
          </div>
          <div className="panel">
            <h4 className="panel-title">MANHUA</h4>
            <div className="panel-img"><img src="https://image.gameapps.hk/images/202412/12/19c135bb2f743297.jpg" alt="Manhua" loading="lazy" /></div>
            <div className="panel-body"><p className="panel-text">Detail latar belakang yang sangat rumit, seringkali menggunakan elemen seni lukis tradisional Tiongkok.</p><p className="panel-chars">// Mitologi Kontemporer</p></div>
          </div>
        </div>
      </section>

      {/* AHLI (TEASER) */}
      <section id="ahli" style={{ minHeight: 'auto', padding: '120px 80px' }}>
        <div className="section-label">APA KATA MEREKA</div>
        <h2>PENDAPAT &amp; <br /><span className="accent-text">WAWANCARA MENDALAM</span></h2>
        <p className="subtitle" style={{ marginBottom: '40px', maxWidth: '800px' }}>
          Jelajahi pandangan kritis dan analisis mendalam dari para komikus profesional (expert), pembaca aktif, serta pelaku komunitas seni sekuensial mengenai perubahan selera visual komik di Indonesia.
        </p>
        <div><a href="/wawancara" className="cta-btn">BACA WAWANCARA SELENGKAPNYA →</a></div>
      </section>
    </>
  );
}
