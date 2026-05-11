'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const isDatabase = pathname === '/database';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <div className="logo">ARC NUSANTARA</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/#beranda" onClick={() => setIsOpen(false)}>BERANDA</a>
        <a href="/#faktor" onClick={() => setIsOpen(false)}>PEMANTIK</a>
        <a href="/#linimasa" onClick={() => setIsOpen(false)}>LINIMASA</a>
        <a href="/#nasib-lokal" onClick={() => setIsOpen(false)}>NASIB LOKAL</a>
        <a href="/#statistik" onClick={() => setIsOpen(false)}>FAKTANYA</a>
        <a href="/#ahli" onClick={() => setIsOpen(false)}>APA KATA MEREKA</a>
        <a href="/#perbandingan" onClick={() => setIsOpen(false)}>PERBANDINGAN</a>
        <a href="/database" className={isDatabase ? 'active' : ''} onClick={() => setIsOpen(false)}>DATABASE</a>
      </div>
    </nav>
  );
}
