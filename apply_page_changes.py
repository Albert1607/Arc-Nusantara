import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Carousel Import
content = content.replace("export default function Home() {", "import Carousel from '@/components/Carousel';\n\nexport default function Home() {")

# 2. Merge Misi Kami to Beranda
misi_pattern = re.compile(r'<p className="subtitle">Repositori digital yang memetakan pergeseran budaya seni sekuensial di Indonesia — dari asal-usul lokal hingga era digital global\.</p>.*?<section id="tujuan">.*?</section>', re.DOTALL)
misi_replacement = """<p className="subtitle">Repositori digital yang memetakan pergeseran budaya seni sekuensial di Indonesia — dari asal-usul lokal hingga era digital global.</p>
          <div style={{ marginBottom: '40px', maxWidth: '600px' }}>
            <h3 style={{ color: 'var(--accent-color)', fontSize: '14px', marginBottom: '12px' }}>TUJUAN KAMI</h3>
            <p style={{ fontSize: '15px', color: 'var(--secondary-text)' }}>Mendokumentasikan sejarah perjalanan komik, membedah evolusi gaya visual dari lokal hingga global, dan membangun arsip digital sebagai referensi komprehensif bagi pembaca lintas generasi.</p>
          </div>
          <div><a href="#linimasa" className="cta-btn">JELAJAHI SEJARAH →</a></div>
        </div>
      </section>"""
content = misi_pattern.sub(misi_replacement, content)

# 3. Timeline Progress Nav
nav_pattern = re.compile(r'<a href="#t1990" className="progress-node" data-target="1990"><div className="node-circle">03</div><span className="node-label">1990</span></a>')
nav_repl = """<a href="#t1972" className="progress-node" data-target="1972"><div className="node-circle">03</div><span className="node-label">1972</span></a>
            <a href="#t1990" className="progress-node" data-target="1990"><div className="node-circle">04</div><span className="node-label">1990</span></a>"""
content = content.replace('<a href="#t1990" className="progress-node" data-target="1990"><div className="node-circle">03</div><span className="node-label">1990</span></a>', nav_repl)
content = content.replace('<div className="node-circle">04</div><span className="node-label">2014</span>', '<div className="node-circle">05</div><span className="node-label">2014</span>')
content = content.replace('<div className="node-circle">05</div><span className="node-label">2024</span>', '<div className="node-circle">06</div><span className="node-label">2024</span>')

# 4. Carousel for 1931
img_1931 = re.compile(r'<div className="timeline-img-col" style={{backgroundImage: "url\(\'https://anelindabooks.jejualan.com[^\)]+\'\)"}}>\s*<div className="timeline-year-large">1931</div>\s*</div>')
img_1931_repl = """<div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://anelindabooks.jejualan.com/productimages/9/2/171292/put-on-edisi-4-komik-strip-pertama-indonesia-karya-kho-wan-gie-207-zoom-3.png',
                'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1931</div>
            </div>"""
content = img_1931.sub(img_1931_repl, content)

# 5. Carousel for 1953
img_1953 = re.compile(r'<div className="timeline-img-col" style={{backgroundImage: "url\(\'https://64.media.tumblr.com[^\)]+\'\)"}}>\s*<div className="timeline-year-large">1953</div>\s*</div>')
img_1953_repl = """<div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://64.media.tumblr.com/408d34e47488c3724cbe57b68c4b1f4e/tumblr_mqhzamReXu1ry4cywo1_400.jpg',
                '/assets/gundala.jpg',
                '/assets/sri asih.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1953</div>
            </div>"""
content = img_1953.sub(img_1953_repl, content)

# 6. Insert 1972 Block
block_1953_end = content.find('</div>\n        </div>', content.find('id="t1953"')) + 21
block_1972 = """
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
        </div>"""
content = content[:block_1953_end] + block_1972 + content[block_1953_end:]

# 7. Carousel for 1990
img_1990 = re.compile(r'<div className="timeline-img-col" style={{backgroundImage: "url\(\'https://i.pinimg.com[^\)]+\'\)"}}>\s*<div className="timeline-year-large">1990</div>\s*</div>')
img_1990_repl = """<div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://i.pinimg.com/474x/8d/a6/61/8da66191ce5474b15f7089de2c8634f0.jpg',
                '/assets/one piece.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>1990</div>
            </div>"""
content = img_1990.sub(img_1990_repl, content)

# 8. Carousel for 2014
img_2014 = re.compile(r'<div className="timeline-img-col" style={{backgroundImage: "url\(\'https://awsimages.detik.net.id[^\)]+\'\)"}}>\s*<div className="timeline-year-large">2014</div>\s*</div>')
img_2014_repl = """<div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                'https://awsimages.detik.net.id/content/2015/05/06/1059/juki_cvr2.jpg',
                '/assets/solo leveling.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>2014</div>
            </div>"""
content = img_2014.sub(img_2014_repl, content)

# 9. Carousel for 2024
img_2024 = re.compile(r'<div className="timeline-img-col" id="NDW" style={{backgroundImage: "url\(\'/assets/NDW.jpg\'\)"}}>\s*<div className="timeline-year-large">2024</div>\s*</div>')
img_2024_repl = """<div className="timeline-img-col" style={{ padding: 0 }}>
              <Carousel images={[
                '/assets/NDW.jpg',
                '/assets/wee1.jpg'
              ]} />
              <div className="timeline-year-large" style={{ position: 'absolute', bottom: '80px', left: '80px', zIndex: 10 }}>2024</div>
            </div>"""
content = img_2024.sub(img_2024_repl, content)

# 10. Extract Cara Baca and put it inside Linimasa
evolusi_section = re.search(r'<section id="evolusi">(.*?)</section>', content, re.DOTALL)
if evolusi_section:
    evolusi_inner = evolusi_section.group(1)
    # create the inner cara baca block
    cara_baca_block = f"""
        {{/* CARA BACA SEBAGAI SUB-HEADING LINIMASA */}}
        <div style={{{{ padding: '120px 80px', background: 'rgba(8,12,16,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)' }}}}>
          <div className="section-label">EVOLUSI FORMAT</div>
          <h2 style={{{{ fontSize: 'clamp(30px, 5vw, 50px)', marginBottom: '40px' }}}}>CARA <span className="accent-text">BACA</span> MASYARAKAT</h2>
          <div className="comparison-panels" style={{{{gridTemplateColumns: 'repeat(3,1fr)'}}}}>
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
"""
    # Insert it before the closing section of linimasa
    linimasa_end = content.find('</section>', content.find('id="linimasa"'))
    content = content[:linimasa_end] + cara_baca_block + "      " + content[linimasa_end:]
    # Remove the old evolusi section
    content = content.replace(f'<section id="evolusi">{evolusi_inner}</section>', '')

# 11. Carousel for Nasib Lokal
nasib_img = re.compile(r'<div className="nasib-hero-img">\s*<img src="https://yudhiherwibowo.wordpress.com[^"]+" alt="Komik Lokal Indonesia" loading="lazy" />\s*</div>')
nasib_img_repl = """<div className="nasib-hero-img">
            <Carousel images={[
              'https://yudhiherwibowo.wordpress.com/wp-content/uploads/2021/01/131336523_10221745478218354_4395296038348670424_o.jpg',
              'https://www.gramedia.com/blog/content/images/2025/07/Jagat.jpg',
              '/assets/wee1.jpg'
            ]} />
          </div>"""
content = nasib_img.sub(nasib_img_repl, content)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied to app/page.tsx successfully!")
