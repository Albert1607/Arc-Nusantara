import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Database Komik | Arc Nusantara',
};

export default function DatabasePage() {
  return (
    <section className="db-main">
      <div className="section-label">BASIS DATA</div>
      <h2>INTI <span className="accent-text">DATA</span> KOMIK</h2>

      <div className="f-row">
        <button className="f-btn active" data-filter="Semua">Semua</button>
        <button className="f-btn" data-filter="Lokal">Lokal</button>
        <button className="f-btn" data-filter="Barat">Barat</button>
        <button className="f-btn" data-filter="Manga">Manga</button>
        <button className="f-btn" data-filter="Manhwa">Manhwa</button>
        <button className="f-btn" data-filter="Manhua">Manhua</button>
      </div>

      <div className="g-grid" id="grid">
        <div className="g-entry" data-category="Lokal">
          <div className="g-img">Gambar Komik</div>
          <span className="cat">Lokal</span>
          <h3>Gundala</h3>
          <p className="year-label">TAHUN 1969</p>
          <p className="short-desc">Karya legendaris Hasmi. Pahlawan super berkekuatan petir yang menjadi pilar identitas visual Indonesia.</p>
        </div>
        <div className="g-entry" data-category="Lokal">
          <div className="g-img">Gambar Komik</div>
          <span className="cat">Lokal</span>
          <h3>Sri Asih</h3>
          <p className="year-label">TAHUN 1953</p>
          <p className="short-desc">Karya RA Kosasih. Pelopor pahlawan super wanita yang memadukan kostum wayang dengan aksi modern.</p>
        </div>
        <div className="g-entry" data-category="Manga">
          <div className="g-img">Gambar Komik</div>
          <span className="cat">Manga</span>
          <h3>One Piece</h3>
          <p className="year-label">TAHUN 1997</p>
          <p className="short-desc">Serial petualangan bajak laut karya Eiichiro Oda yang memiliki pengaruh masif bagi komikus di Indonesia.</p>
        </div>
        <div className="g-entry" data-category="Manhwa">
          <div className="g-img">Gambar Komik</div>
          <span className="cat">Manhwa</span>
          <h3>Solo Leveling</h3>
          <p className="year-label">TAHUN 2018</p>
          <p className="short-desc">Pionir format gulir vertikal kelas dunia yang mendefinisikan standar baru kualitas art digital manhwa.</p>
        </div>
        <div className="g-entry" data-category="Barat">
          <div className="g-img">Gambar Komik</div>
          <span className="cat">Barat</span>
          <h3>The Amazing Spider-Man</h3>
          <p className="year-label">TAHUN 1962</p>
          <p className="short-desc">Karya Marvel yang menginspirasi lahirnya banyak pahlawan super bertema hewan di komik lokal era 70-an.</p>
        </div>
        <div className="g-entry" data-category="Manhua">
          <div className="g-img">Gambar Komik</div>
          <span className="cat">Manhua</span>
          <h3>The King&apos;s Avatar</h3>
          <p className="year-label">TAHUN 2015</p>
          <p className="short-desc">Menampilkan detail visual digital tingkat tinggi dengan tema e-sports yang sangat populer di kalangan gamer Indonesia.</p>
        </div>
      </div>
    </section>
  );
}
