import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      {/* BERANDA */}
      <section id="beranda">
        <div className="hero-bg-img"></div>
        <div className="hero-inner">
          <div className="section-label">INISIALISASI_SISTEM</div>
          <h1>ARC<br /><span className="accent-text">NUSANTARA</span></h1>
          <p className="subtitle">Repositori digital yang memetakan pergeseran budaya seni sekuensial di Indonesia — dari asal-usul lokal hingga era digital global.</p>
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
          <div className="modern-card">
            <div className="card-img-wrap"><img src="https://images.unsplash.com/photo-1544082646-12fd181f4809?q=80&w=1740&auto=format&fit=crop" alt="Digitalisasi Internet" id="digitalisasi-internet" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">01 — TEKNOLOGI</span>
              <h3>Digitalisasi &amp; Internet</h3>
              <p>Akses internet yang semakin mudah membuat manga dan manhwa bisa dibaca gratis secara online, jauh lebih mudah dari membeli komik fisik di toko buku.</p>
            </div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img src="/assets/apps.png" alt="Platform Digital" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">02 — PLATFORM</span>
              <h3>Platform Digital</h3>
              <p>Webtoon, MangaPlus, dan platform baca online lainnya hadir dengan model gratis atau murah, mengubah cara orang mengakses komik sepenuhnya.</p>
            </div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img src="https://images.unsplash.com/photo-1755962270071-d8e353c7ca97?w=900&auto=format&fit=crop&q=60" alt="Globalisasi Budaya" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">03 — BUDAYA</span>
              <h3>Globalisasi Budaya</h3>
              <p>Popularitas anime di TV Indonesia sejak 1990an membawa penonton untuk mencari sumber aslinya — manga. Budaya pop Jepang dan Korea menyebar lewat film, musik, dan media sosial.</p>
            </div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=75" alt="Media Sosial" loading="lazy" /></div>
            <div className="card-body">
              <span className="card-num">04 — MEDIA SOSIAL</span>
              <h3>Media Sosial</h3>
              <p>TikTok, Instagram, dan Twitter mempercepat penyebaran rekomendasi komik. Satu panel viral bisa membuat ribuan orang langsung mencari judul tersebut.</p>
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
        <div className="timeline-block" id="t1931" data-year="1931">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://anelindabooks.jejualan.com/productimages/9/2/171292/put-on-edisi-4-komik-strip-pertama-indonesia-karya-kho-wan-gie-207-zoom-3.png',
                'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1931</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA KOLONIAL</span>
                <h3>Put On (Kho Wan Gie)</h3>
                <p>Lahirnya industri komik lokal melalui surat kabar Sin Po. Put On menjadi ikon komik strip pertama yang populer di tanah air, mengangkat isu sosial keseharian masyarakat dengan cerdas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-block" id="t1953" data-year="1953">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://64.media.tumblr.com/408d34e47488c3724cbe57b68c4b1f4e/tumblr_mqhzamReXu1ry4cywo1_400.jpg',
                '/assets/gundala.jpg',
                '/assets/sri asih.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1953</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA PAHLAWAN LOKAL</span>
                <h3>Fajar Heroisme: Sri Asih</h3>
                <p>RA Kosasih memperkenalkan pahlawan super wanita pertama. Periode ini menandai kemandirian komikus lokal dalam menciptakan karakter heroik dengan sentuhan budaya wayang dan mitologi Nusantara.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-block" id="t1972" data-year="1972">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                '/assets/AmazingSpider-Man1.jpg',
                'https://images.unsplash.com/photo-1612036782180-6f0b6ce846ce?w=800',
                'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=800'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1972</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">INVASI KOMIK BARAT</span>
                <h3>Masuknya Marvel &amp; DC</h3>
                <p>Era 1970-an ditandai dengan membanjirnya komik superhero dari Amerika Serikat, seperti Spider-Man dan Superman yang diterjemahkan ke bahasa Indonesia. Kehadiran mereka memberi pengaruh besar pada dinamika pasar dan selera visual pembaca di tanah air.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-block" id="t1990" data-year="1990">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://i.pinimg.com/474x/8d/a6/61/8da66191ce5474b15f7089de2c8634f0.jpg',
                '/assets/one piece.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1990</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">INVASI MANGA</span>
                <h3>Tsunami Manga</h3>
                <p>Elex Media Komputindo mulai menerbitkan manga secara legal. Dragon Ball dan Doraemon mengubah paradigma visual serta cara bercerita komikus generasi baru di Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-block" id="t2014" data-year="2014">
          <div className="timeline-content-grid">
            <div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://awsimages.detik.net.id/content/2015/05/06/1059/juki_cvr2.jpg',
                '/assets/solo leveling.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>2014</div>
            </div>
            <div className="timeline-text-col">
              <div className="timeline-entry-details">
                <span className="t-accent">ERA DIGITAL</span>
                <h3>Webtoon Masuk Indonesia</h3>
                <p>Platform manhwa asal Korea masuk ke pasar Indonesia dan langsung mengubah cara konsumsi komik. Format vertikal dan gratis menjadi magnet bagi jutaan pembaca muda.</p>
              </div>
            </div>
          </div>
        </div>
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
              </div>
            </div>
          </div>
        </div>
      
        {/* CARA BACA SEBAGAI SUB-HEADING LINIMASA */}
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

      {/* EVOLUSI CARA BACA */}
      

      {/* NASIB LOKAL */}
      <section id="nasib-lokal">
        <div className="section-label">DAMPAK</div>
        <h2>NASIB KOMIK <br /><span className="accent-text">LOKAL</span></h2>
        <div className="anatomy-layout" style={{gridTemplateColumns: '60% 40%', gap: '40px', alignItems: 'start'}}>
          <div className="nasib-hero-img">
            <Carousel images={[
              'https://yudhiherwibowo.wordpress.com/wp-content/uploads/2021/01/131336523_10221745478218354_4395296038348670424_o.jpg',
              'https://www.gramedia.com/blog/content/images/2025/07/Jagat.jpg',
              '/assets/wee1.jpg'
            ]} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <p style={{fontSize: '17px', lineHeight: '1.8', color: '#c8d8e4', marginBottom: '8px'}}>
              Masuknya manga dan manhwa tidak serta-merta mematikan komik lokal — justru memunculkan gelombang baru komikus Indonesia yang mengadopsi gaya visual Asia Timur namun tetap membawa cerita dan budaya lokal.
            </p>
            <div className="modern-card">
              <div className="card-img-wrap" style={{height: '160px'}}><img src="https://www.gramedia.com/blog/content/images/2025/07/Jagat.jpg" alt="Adaptasi Gaya" loading="lazy" /></div>
              <div className="card-body">
                <h3>Adaptasi Gaya</h3>
                <p>Komik lokal seperti Survival Borneo dan Garudayana mengadopsi gaya visual manga sambil mempertahankan konten lokal — membuktikan bahwa pengaruh ini bisa jadi kekuatan, bukan ancaman.</p>
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

      {/* PLATFORM */}
      <section id="platform">
        <div className="section-label">PLATFORM</div>
        <h2>EKOSISTEM <br /><span className="accent-text">DIGITAL</span></h2>
        <div className="card-grid">
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center 45%'}} src="https://i.pinimg.com/1200x/88/ff/8a/88ff8ae7d26d63a4868820a2e689ce0b.jpg" alt="Webtoon" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM — KR</span><h3>Webtoon</h3><p>Platform asal Korea yang masuk Indonesia sekitar 2014–2015. Memberi ruang bagi kreator lokal dan internasional untuk mempublikasikan karya secara gratis. Kini menjadi platform komik terbesar di Indonesia.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center 5%'}} src="https://awsimages.detik.net.id/community/media/visual/2021/09/20/aplikasi-manga-plus-terbitan-shueisha_43.webp?w=1200" alt="MangaPlus" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM — JP</span><h3>MangaPlus</h3><p>Platform resmi dari Shueisha — penerbit manga terbesar Jepang. Menyediakan akses legal dan gratis ke manga-manga populer seperti One Piece dan Jujutsu Kaisen di hari yang sama dengan terbit di Jepang.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center'}} src="/assets/ig.jpeg" alt="Media Sosial" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM — GLOBAL</span><h3>Media Sosial</h3><p>TikTok dan Instagram menjadi mesin rekomendasi komik terbesar. Panel-panel viral, review singkat, dan fan art mendorong jutaan orang untuk mencari dan membaca judul baru.</p></div>
          </div>
        </div>
      </section>

      {/* KEBANGKITAN */}
      <section id="kebangkitan">
        <div className="section-label">SEKARANG</div>
        <h2>BANGKITNYA <br /><span className="accent-text">KREATOR LOKAL</span></h2>
        <p style={{fontSize: '26px', fontWeight: 700, lineHeight: 1.35, color: '#c8d8e4', marginBottom: '60px', maxWidth: '900px'}}>Di tengah dominasi manga dan manhwa, muncul gelombang baru komikus Indonesia yang tidak menyerah — mereka mengadopsi format dan gaya visual yang populer, namun mengisi karya mereka dengan cerita, karakter, dan budaya yang berakar dari Indonesia.</p>
        <div className="card-grid">
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'top'}} src="https://bukukita.com/babacms/displaybuku/96183_f.jpg" alt="Garudayana" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">KOMIK LOKAL</span><h3>Garudayana</h3><p>Karya Is Yuniarto — komik bergaya manga dengan cerita berbasis mitologi wayang dan Mahabharata Indonesia. Membuktikan bahwa gaya visual Jepang bisa menjadi wadah cerita lokal.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'top'}} src="/assets/wee1.jpg" alt="Webtoon Lokal" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">PLATFORM LOKAL</span><h3>Webtoon Lokal</h3><p>Semakin banyak kreator Indonesia aktif di platform Webtoon, membangun audiens lokal maupun internasional dengan cerita original berbahasa Indonesia.</p></div>
          </div>
          <div className="modern-card">
            <div className="card-img-wrap"><img style={{objectPosition: 'center 15%'}} src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704035616i/204581190.jpg" alt="Survival Borneo" loading="lazy" /></div>
            <div className="card-body"><span className="card-num">HYBRID VISUAL</span><h3>Survival Borneo</h3><p>Komik lokal bergaya manga yang mengangkat tema petualangan di hutan Kalimantan — salah satu contoh paling awal dari hybrid antara gaya visual Asia dan konten lokal Indonesia.</p></div>
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
      </section>

      {/* AHLI */}
      <section id="ahli">
        <div className="section-label">WAWANCARA</div>
        <h2>PENDAPAT <span className="accent-text">AHLI</span></h2>
        <div className="opinion-layout">
          <div className="opinion-item">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75" alt="Budi Santoso" className="opinion-author-img" loading="lazy" />
            <div className="opinion-body">
              <span className="quote-mark">&ldquo;</span>
              <blockquote>Pergeseran ke format digital bukan hanya soal kenyamanan, tapi bagaimana narasi visual beradaptasi dengan teknologi.</blockquote>
              <div className="author-block"><p className="author-name">Budi Santoso</p><p className="author-role">Kurator Arsip Budaya</p></div>
            </div>
          </div>
          <div className="opinion-item">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=75" alt="Siti Aminah" className="opinion-author-img" loading="lazy" />
            <div className="opinion-body">
              <span className="quote-mark">&ldquo;</span>
              <blockquote>Gaya visual komik Indonesia saat ini adalah perpaduan unik antara estetika Manga dan kearifan lokal yang kuat.</blockquote>
              <div className="author-block"><p className="author-name">Siti Aminah</p><p className="author-role">Analis Visual Komunikasi</p></div>
            </div>
          </div>
          <div className="opinion-item">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=75" alt="Reza Mahendra" className="opinion-author-img" loading="lazy" />
            <div className="opinion-body">
              <span className="quote-mark">&ldquo;</span>
              <blockquote>Webtoon telah membuka pintu bagi kreator lokal untuk mencapai audiens global tanpa hambatan distribusi fisik.</blockquote>
              <div className="author-block"><p className="author-name">Reza Mahendra</p><p className="author-role">Ketua Komunitas Komik</p></div>
            </div>
          </div>
        </div>
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
    </>
  );
}
