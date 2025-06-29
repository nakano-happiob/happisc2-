'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Stories', href: '#stories' },
  { name: 'Entry/FAQ', href: '#entry' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-light)',
      zIndex: 50,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        {/* ロゴ */}
        <Link href="/" style={{
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.75rem',
          fontWeight: '800',
          fontFamily: 'Montserrat',
          letterSpacing: '-0.5px'
        }}>
          HAPISQ
        </Link>

        {/* デスクトップナビゲーション */}
        <nav style={{
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }
        }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
          <Link href="#entry" className="button button-accent" style={{
            marginLeft: '1rem'
          }}>
            エントリー
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            '@media (min-width: 768px)': {
              display: 'none'
            },
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: 'var(--text-primary)',
            marginBottom: '6px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: 'var(--text-primary)',
            marginBottom: '6px',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }} />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div style={{
        display: isMenuOpen ? 'block' : 'none',
        '@media (min-width: 768px)': {
          display: 'none'
        },
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: 'var(--bg-white)',
        padding: '1rem',
        boxShadow: 'var(--shadow-md)',
        borderTop: '1px solid var(--border-light)'
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              style={{
                textAlign: 'center',
                padding: '1rem'
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="#entry" 
            className="button button-accent"
            onClick={() => setIsMenuOpen(false)}
            style={{
              marginTop: '1rem',
              textAlign: 'center'
            }}
          >
            エントリー
          </Link>
        </nav>
      </div>
    </header>
  );
} 