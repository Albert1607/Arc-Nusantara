import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import ScriptLoader from '@/components/ScriptLoader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arc Nusantara',
  description: 'Repositori digital yang memetakan pergeseran budaya seni sekuensial di Indonesia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="bg-layers">
          <div className="mesh-gradient"></div>
          <div className="grid-lines"></div>
          <div className="noise-overlay"></div>
        </div>
        <div className="scanline"></div>
        <Nav />
        {children}
        <ScriptLoader />
      </body>
    </html>
  );
}
