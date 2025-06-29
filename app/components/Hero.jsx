'use client';

import Image from 'next/image';

const animations = {
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `,
  bounce: `
    @keyframes bounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `,
  wave: `
    @keyframes wave {
      0% { transform: translateX(0); }
      50% { transform: translateX(-10px); }
      100% { transform: translateX(0); }
    }
  `
};

export default function Hero() {
  const heroInfo = [
    {
      icon: '✔',
      text: '3ヶ月プログラム'
    },
    {
      icon: '✔',
      text: 'オンライン・対面ハイブリッド'
    }
  ];

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* 背景画像 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/images/workshop1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.8)'
      }} />

      {/* 半透明オーバーレイ */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, rgba(255,229,236,0.9), rgba(229,241,255,0.9))',
        backdropFilter: 'blur(4px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <h1 style={{
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            fontWeight: '800',
            lineHeight: '1.2'
          }}>
            学歴より、"学習歴"。<br />
            未来を変える新しい学びを、
            <span style={{ color: 'var(--accent-pink)' }}>あなたに。</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            lineHeight: '1.8',
            fontWeight: '500'
          }}>
            自分に向き合う"学び直し"が、未来をつくる<br />
            新しいリカレントプログラム
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#entry" className="button button-primary" style={{
              fontSize: '1.1rem',
              padding: '1rem 2rem'
            }}>
              資料請求する
            </a>
            <a href="#entry" className="button button-outline" style={{
              fontSize: '1.1rem',
              padding: '1rem 2rem'
            }}>
              無料説明会申込
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 