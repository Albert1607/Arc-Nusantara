'use client';

import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  const isDatabase = pathname === '/database';

  return (
    <nav>
      <div className="logo">ARC NUSANTARA</div>
      <div className="nav-links">
        <a href="/#beranda">BERANDA</a>
        <a href="/#tujuan">MISI KITA</a>
        <a href="/#faktor">FAKTOR</a>
        <a href="/#linimasa">LINIMASA</a>
        <a href="/#evolusi">EVOLUSI CARA BACA</a>
        <a href="/#nasib-lokal">NASIB LOKAL</a>
        <a href="/#statistik">FAKTANYA</a>
        <a href="/#ahli">APA KATA MEREKA</a>
        <a href="/#perbandingan">PERBANDINGAN</a>
        <a href="/database" className={isDatabase ? 'active' : ''}>DATABASE</a>
      </div>
    </nav>
  );
}
