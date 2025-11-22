import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'n8n Automated AI Music Video Agent',
  description:
    'End-to-end automated pipeline: rhyme idea generation, Sheets logging, audio/music, video render, YouTube upload, and logging ? all with free tools.',
  metadataBase: new URL('https://agentic-6c7ad1a8.vercel.app'),
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              n8n AI Agent
            </Link>
            <nav className="nav">
              <Link href="/#workflow">Workflow</Link>
              <Link href="/#setup">Setup</Link>
              <Link href="/#download">Download</Link>
              <a
                href="https://n8n.io"
                target="_blank"
                rel="noreferrer"
                className="ext"
              >
                n8n
              </a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>Built for fully automated music video generation with n8n.</span>
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              Deployed on Vercel
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

