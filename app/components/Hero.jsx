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
      // icon: '✔',
      text: 'プログラム期間３ヶ月'
    },
    {
      // icon: '✔',
      text: 'オンライン・対面ハイブリッド'
    }
  ];

  return (
    <section className="section" style={{
      paddingTop: '10rem',
      paddingBottom: '6rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 4rem'
      }}>
        {/* 左側：テキストコンテンツ */}
        <div className="animate-fade-in">
          <h1 style={{
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            学歴より、"学習歴"<br />
            未来を変える、新しい学び方<br />
            <span style={{ color: 'var(--primary)' }}>ハピスク</span>
          </h1>

          <p style={{
            fontSize: '1.5rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            自分に向き合う"学習歴"が、未来をつくる<br />
            リカレントプログラム
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <a href="#entry" className="button button-primary">
              資料請求する
            </a>
            <a href="#entry" className="button button-outline">
              無料説明会申込
            </a>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            fontSize: '0.9rem',
            color: 'var(--text-light)',
            flexWrap: 'wrap'
          }}>
            {heroInfo.map((info, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <span style={{
                  fontSize: '1.2rem'
                }}>
                  {info.icon}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {info.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 右側：画像プレースホルダー */}
        <div className="animate-slide-in" style={{
          animationDelay: '0.2s'
        }}>
          <Image
            src="/images/top2.jpg"
            alt="トップイメージ"
            width={800}
            height={600}
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              aspectRatio: '4/3',
              minHeight: '500px',
              borderRadius: '16px',
              // boxShadow: 'var(--shadow-md)'
            }}
            priority
          />
        </div>
      </div>

      {/* スクロール促し矢印 */}
      <div className="scroll-arrow" onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}>
        ↓
      </div>
    </section>
  );
} 