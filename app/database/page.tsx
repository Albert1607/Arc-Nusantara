'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';

import gundalaImg from '../../assets/gundala.jpg';
import sriAsihImg from '../../assets/sri asih.jpg';
import onePieceImg from '../../assets/one piece.jpg';
import soloLevelingImg from '../../assets/solo leveling.jpg';
import spiderManImg from '../../assets/AmazingSpider-Man1.jpg';
import theKingsImg from '../../assets/the kings.jpg';

interface Comic {
  title: string;
  link: string;
  image: string;
  chapter: string;
  rating: number | null;
  genre: string;
  status: string;
  fetched_at: string;
}

const ITEMS_PER_PAGE = 40;

// ─── BLACKLIST: vulgar/adult keyword patterns ───────────
const BLACKLIST_PATTERNS = [
  /\bsex\b/i, /\bhentai\b/i, /\berotic/i, /\bnude\b/i, /\bnaked\b/i,
  /\bporn/i, /\becchi\b/i, /\br-?18\b/i,
  /\bboob/i, /\bbreast/i, /\bnsfw\b/i, /\blewd\b/i, /\borgasm/i,
  /\bfetish/i, /\bbondage\b/i,
  /\bntr\b/i, /\bnetorare\b/i, /\bmilf\b/i, /\badultery\b/i, /\bobscene\b/i,
  /\bpervert/i, /\bmolest/i, /\brape\b/i, /\bgrope\b/i, /\baphrodisiac/i,
  /\bprostitut/i, /\bbrothel\b/i, /\bconcubine/i, /\bmasturbat/i, /\bonanism\b/i,
  /\bdeflower/i, /\borgy\b/i, /\bthreesome\b/i, /\bincest\b/i,
  /\bvirgin\b/i,
];

// Genres to blacklist entirely
const BLACKLISTED_GENRES = ['Harem'];

function isBlacklisted(comic: Comic): boolean {
  // Check genre blacklist
  const genre = (comic.genre || '').trim();
  if (BLACKLISTED_GENRES.includes(genre)) return true;

  // Check title keyword blacklist
  const title = comic.title || '';
  return BLACKLIST_PATTERNS.some((pattern) => pattern.test(title));
}

// ─── CATEGORY DETECTION (image URL + title heuristics) ──
type ComicCategory = 'Manga' | 'Manhwa' | 'Manhua' | 'Barat';

function detectCategory(comic: Comic): ComicCategory {
  const titleLower = (comic.title || '').toLowerCase();

  // Detect Western comics
  if (titleLower.includes('(marvel comics)') || comic.title.includes('Marvel Comics')) {
    return 'Barat';
  }

  const img = (comic.image || '').toLowerCase();

  // 1. Image URL explicit labels (most reliable)
  if (/manhwa/.test(img) || /manwha/.test(img)) return 'Manhwa';
  if (/manhua/.test(img)) return 'Manhua';
  if (/thumbnail[-_]manga[-_]/.test(img)) return 'Manga';
  if (img.includes('thumbnail-komik')) return 'Manga';

  // 2. Title-based Japanese romaji heuristics
  const jpStrong = [' no ', ' wa ', ' ga ', ' ni '];
  const jpMedium = [
    ' de ', ' to ', ' na ', ' mo ', 'desu', '-chan', '-kun', '-sama',
    '-sensei', '-senpai', 'shoujo', 'shounen', 'mahou', 'yuusha', 'kenja',
    'tensei', 'isekai', ' ore ', ' boku ', 'watashi', 'shitara', 'datta',
    'janai', 'dakedo', 'monogatari', 'sekai', 'hime', 'ouji', 'hitori',
    'futari', 'onna', 'otoko', 'musume', 'gakuen', 'gakkou', 'senki',
    'kenshi', 'kishi', '-san ', 'sugiru', 'saikyou', 'bouken', ' maou',
    'tsuihou', 'joshi', 'kanojo', 'oneshot', 'nakama', 'tsukai',
    'dungeon', 'level ', 'skill ',
  ];

  let jpScore = 0;
  for (const p of jpStrong) { if (titleLower.includes(p)) jpScore += 2; }
  for (const p of jpMedium) { if (titleLower.includes(p)) jpScore += 1; }
  if (jpScore >= 2) return 'Manga';

  // 3. Chinese title keywords → Manhua
  const cnIndicators = [
    'cultivation', 'martial god', 'heavenly', 'immortal', 'supreme',
    'spirit sword', 'emperor', 'douluo', 'wuxia', 'xianxia', 'sect ',
    ' pill ', 'alchemy', 'dragon king', 'ancient ', 'celestial',
    'body refining', 'strongest', 'divine ', 'sovereign', 'invincible',
    'reincarnation',
  ];
  for (const kw of cnIndicators) { if (titleLower.includes(kw)) return 'Manhua'; }

  return 'Manga';
}

// ─── GENRE CLEANUP ──────────────────────────────────────
function cleanGenre(raw: string | null | undefined): string {
  if (!raw) return 'Lainnya';
  // Remove leading commas, spaces, and trim
  let cleaned = raw.replace(/^[,\s]+/, '').trim();
  if (!cleaned) return 'Lainnya';
  return cleaned;
}

// Normalize status values
function normalizeStatus(raw: string): 'Ongoing' | 'Completed' {
  const s = raw.toLowerCase().trim();
  if (s === 'end' || s === 'completed' || s === 'tamat') return 'Completed';
  return 'Ongoing';
}

// ─── FEATURED COMICS (Pilihan Redaksi) ──────────────────
const featuredComics = [
  {
    img: gundalaImg,
    alt: 'Gundala',
    category: 'Lokal',
    title: 'Gundala',
    year: 'TAHUN 1969',
    desc: 'Karya legendaris Hasmi. Pahlawan super berkekuatan petir yang menjadi pilar identitas visual Indonesia.',
  },
  {
    img: sriAsihImg,
    alt: 'Sri Asih',
    category: 'Lokal',
    title: 'Sri Asih',
    year: 'TAHUN 1953',
    desc: 'Karya RA Kosasih. Pelopor pahlawan super wanita yang memadukan kostum wayang dengan aksi modern.',
  },
  {
    img: onePieceImg,
    alt: 'One Piece',
    category: 'Manga',
    title: 'One Piece',
    year: 'TAHUN 1997',
    desc: 'Serial petualangan bajak laut karya Eiichiro Oda yang memiliki pengaruh masif bagi komikus di Indonesia.',
  },
  {
    img: soloLevelingImg,
    alt: 'Solo Leveling',
    category: 'Manhwa',
    title: 'Solo Leveling',
    year: 'TAHUN 2018',
    desc: 'Pionir format gulir vertikal kelas dunia yang mendefinisikan standar baru kualitas art digital manhwa.',
  },
  {
    img: spiderManImg,
    alt: 'The Amazing Spider-Man',
    category: 'Barat',
    title: 'The Amazing Spider-Man',
    year: 'TAHUN 1962',
    desc: 'Karya Marvel yang menginspirasi lahirnya banyak pahlawan super bertema hewan di komik lokal era 70-an.',
  },
  {
    img: theKingsImg,
    alt: "The King's Avatar",
    category: 'Manhua',
    title: "The King's Avatar",
    year: 'TAHUN 2015',
    desc: 'Menampilkan detail visual digital tingkat tinggi dengan tema e-sports yang sangat populer di kalangan gamer Indonesia.',
  },
];

// ─── SKELETON LOADER ────────────────────────────────────
function SkeletonGrid() {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-img" />
          <div className="skeleton-body">
            <div className="skeleton-line w40" />
            <div className="skeleton-line w80" />
            <div className="skeleton-line w60" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── CATEGORY TABS ──────────────────────────────────────
const CATEGORIES: { label: string; value: string }[] = [
  { label: 'Semua', value: 'Semua' },
  { label: 'Manga', value: 'Manga' },
  { label: 'Manhwa', value: 'Manhwa' },
  { label: 'Manhua', value: 'Manhua' },
  { label: 'Barat', value: 'Barat' },
];

// ─── MAIN PAGE COMPONENT ────────────────────────────────
export default function DatabasePage() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');
  const [genreFilter, setGenreFilter] = useState('Semua');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    document.title = 'Database Komik | Arc Nusantara';
  }, []);

  // Fetch local data (Asia & Barat) in parallel
  useEffect(() => {
    const controller = new AbortController();

    async function fetchLocalComics() {
      try {
        setLoading(true);
        setError(null);
        
        const [resAsia, resBarat] = await Promise.all([
          fetch('/data/comics-asia.json', { signal: controller.signal }),
          fetch('/data/comics-barat.json', { signal: controller.signal })
        ]);

        if (!resAsia.ok) throw new Error(`HTTP ${resAsia.status} Asia`);
        if (!resBarat.ok) throw new Error(`HTTP ${resBarat.status} Barat`);

        const dataAsia = await resAsia.json();
        const dataBarat = await resBarat.json();

        setComics([...dataAsia, ...dataBarat]);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message || 'Gagal memuat data komik.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchLocalComics();
    return () => controller.abort();
  }, []);

  // Process comics: clean genres, filter blacklist, add category
  const processedComics = useMemo(() => {
    return comics
      .filter((c) => !isBlacklisted(c))
      .map((c) => ({
        ...c,
        genre: cleanGenre(c.genre),
        _category: detectCategory(c),
      }));
  }, [comics]);

  // Category stats
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = {};
    processedComics.forEach((c) => {
      counts[c._category] = (counts[c._category] || 0) + 1;
    });
    return counts;
  }, [processedComics]);

  // Extract unique genres (from currently visible category)
  const genres = useMemo(() => {
    let base = processedComics;
    if (categoryFilter !== 'Semua') {
      base = base.filter((c) => c._category === categoryFilter);
    }
    const genreSet = new Set<string>();
    base.forEach((c) => {
      if (c.genre) genreSet.add(c.genre);
    });
    return Array.from(genreSet).sort();
  }, [processedComics, categoryFilter]);

  // Filter + search logic
  const filteredComics = useMemo(() => {
    let result = processedComics;

    if (categoryFilter !== 'Semua') {
      result = result.filter((c) => c._category === categoryFilter);
    }

    if (genreFilter !== 'Semua') {
      result = result.filter((c) => c.genre === genreFilter);
    }

    if (statusFilter !== 'Semua') {
      result = result.filter((c) => normalizeStatus(c.status) === statusFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((c) => c.title.toLowerCase().includes(q));
    }

    return result;
  }, [processedComics, categoryFilter, genreFilter, statusFilter, search]);

  // Visible slice for pagination
  const visibleComics = useMemo(
    () => filteredComics.slice(0, visibleCount),
    [filteredComics, visibleCount]
  );

  const hasMore = visibleCount < filteredComics.length;

  // Reset visible count + genre filter when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
    setGenreFilter('Semua');
  }, [categoryFilter]);

  // Reset visible count when other filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [genreFilter, statusFilter, search]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  // Overall stats: 41 blacklisted NSFW items from raw Sanka Vollerei data
  const blacklistedCount = 41;

  return (
    <section className="db-main animate-fade-in" style={{ paddingBottom: '120px' }}>
      <div className="section-label">BASIS DATA</div>
      <h2>
        INTI <span className="accent-text">DATA</span> KOMIK
      </h2>

      {/* ─── PILIHAN REDAKSI (Static Featured) ─────────── */}
      <p
        className="subtitle"
        style={{ maxWidth: '850px', marginBottom: '24px' }}
      >
        Koleksi kurasi penting yang membentuk lanskap komik Indonesia dan dunia,
        dilengkapi dengan katalog lengkap ribuan judul dari berbagai genre.
      </p>

      <div className="g-grid" style={{ marginBottom: '0' }}>
        {featuredComics.map((item) => (
          <div key={item.title} className="g-entry" data-category={item.category}>
            <div className="g-img">
              <Image src={item.img} alt={item.alt} />
            </div>
            <div className="g-entry-body">
              <span className="cat">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="year-label">{item.year}</p>
              <p className="short-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="db-divider">
        <div className="db-divider-line" />
        <span className="db-divider-text">✦ KATALOG ARSIP KOMIK ✦</span>
        <div className="db-divider-line" />
      </div>

      {/* ─── STATS BAR ───────────────────────────────────── */}
      {!loading && !error && (
        <div className="db-stats-bar">
          <div className="db-stat-item">
            <span className="db-stat-num">{processedComics.length.toLocaleString()}</span>
            <span className="db-stat-label">Total Judul</span>
          </div>
          <div className="db-stat-item">
            <span className="db-stat-num">{genres.length}</span>
            <span className="db-stat-label">Genre</span>
          </div>
          <div className="db-stat-item">
            <span className="db-stat-num">{blacklistedCount}</span>
            <span className="db-stat-label">Disaring</span>
          </div>
          {(search || genreFilter !== 'Semua' || statusFilter !== 'Semua' || categoryFilter !== 'Semua') && (
            <div className="db-stat-item" style={{ marginLeft: 'auto' }}>
              <span className="db-stat-num">{filteredComics.length.toLocaleString()}</span>
              <span className="db-stat-label">Hasil Filter</span>
            </div>
          )}
        </div>
      )}

      {/* ─── CATEGORY TABS (Manga / Manhwa / Manhua) ─── */}
      {!loading && !error && (
        <div className="f-row" style={{ marginBottom: '24px' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`f-btn ${categoryFilter === cat.value ? 'active' : ''}`}
              onClick={() => setCategoryFilter(cat.value)}
            >
              {cat.label}
              {cat.value !== 'Semua' && categoryStats[cat.value]
                ? ` (${categoryStats[cat.value].toLocaleString()})`
                : ''}
            </button>
          ))}
        </div>
      )}

      {/* ─── SEARCH + STATUS ROW ─────────────────────────── */}
      <div className="db-search-row">
        <div className="db-search-wrap">
          <span className="db-search-icon">⌕</span>
          <input
            type="text"
            className="db-search"
            placeholder="Cari judul komik..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status toggle */}
        <div className="f-row" style={{ marginBottom: 0, gap: '8px' }}>
          {['Semua', 'Ongoing', 'Completed'].map((s) => (
            <button
              key={s}
              className={`f-btn ${statusFilter === s ? 'active' : ''}`}
              onClick={() => setStatusFilter(s)}
              style={{ padding: '10px 20px', fontSize: '11px' }}
            >
              {s === 'Semua' ? '⊛ Semua Status' : s}
            </button>
          ))}
        </div>
      </div>

      {/* ─── GENRE FILTER TABS ───────────────────────────── */}
      <div className="f-row" style={{ flexWrap: 'wrap' }}>
        <button
          className={`f-btn ${genreFilter === 'Semua' ? 'active' : ''}`}
          onClick={() => setGenreFilter('Semua')}
        >
          Semua Genre
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`f-btn ${genreFilter === genre ? 'active' : ''}`}
            onClick={() => setGenreFilter(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* ─── LOADING STATE ───────────────────────────────── */}
      {loading && <SkeletonGrid />}

      {/* ─── ERROR STATE ─────────────────────────────────── */}
      {error && (
        <div className="db-empty">
          <div className="db-empty-icon">⚠</div>
          <h4>Gagal Memuat Data</h4>
          <p>{error}</p>
          <button
            className="load-more-btn"
            style={{ marginTop: '24px' }}
            onClick={() => window.location.reload()}
          >
            COBA LAGI
          </button>
        </div>
      )}

      {/* ─── EMPTY STATE ─────────────────────────────────── */}
      {!loading && !error && filteredComics.length === 0 && (
        <div className="db-empty">
          <div className="db-empty-icon">∅</div>
          <h4>Tidak Ada Hasil</h4>
          <p>
            Tidak ditemukan komik dengan filter yang dipilih
            {search ? ` dan kata kunci "${search}"` : ''}.
          </p>
        </div>
      )}

      {/* ─── COMIC GRID (API) ────────────────────────────── */}
      {!loading && !error && filteredComics.length > 0 && (
        <>
          <div className="g-grid">
            {visibleComics.map((comic, idx) => {
              const status = normalizeStatus(comic.status);
              return (
                <div key={`${comic.title}-${idx}`} className="g-entry">
                  <a
                    href={comic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="g-entry-link"
                  >
                    <div className="g-img" style={{ height: '280px', overflow: 'hidden' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={comic.image}
                        alt={comic.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.style.background =
                              'linear-gradient(135deg, rgba(18,26,36,0.9), rgba(126,173,207,0.08))';
                            target.parentElement.style.display = 'flex';
                            target.parentElement.style.alignItems = 'center';
                            target.parentElement.style.justifyContent = 'center';
                            const placeholder = document.createElement('span');
                            placeholder.textContent = '📖';
                            placeholder.style.fontSize = '48px';
                            placeholder.style.opacity = '0.3';
                            target.parentElement.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                    <div className="g-entry-body">
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px' }}>
                        <span
                          className={`status-badge ${status === 'Ongoing' ? 'ongoing' : 'completed'}`}
                        >
                          {status}
                        </span>
                        <span
                          className="status-badge"
                          style={{
                            background: 'rgba(126,173,207,0.08)',
                            color: 'var(--accent-color)',
                            border: '1px solid rgba(126,173,207,0.25)',
                          }}
                        >
                          {comic._category}
                        </span>
                      </div>
                      <span className="cat">{comic.genre}</span>
                      <h3 style={{ fontSize: '16px', lineHeight: '1.3', marginBottom: '6px' }}>
                        {comic.title}
                      </h3>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* ─── LOAD MORE ──────────────────────────────── */}
          {hasMore && (
            <div className="db-load-more">
              <button className="load-more-btn" onClick={handleLoadMore}>
                MUAT LEBIH BANYAK → ({(filteredComics.length - visibleCount).toLocaleString()} TERSISA)
              </button>
            </div>
          )}

          {/* ─── PAGE POSITION INDICATOR ─────────────────── */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--secondary-text)',
              letterSpacing: '1px',
            }}
          >
            MENAMPILKAN {visibleComics.length} DARI {filteredComics.length.toLocaleString()} JUDUL
          </div>
        </>
      )}
    </section>
  );
}
