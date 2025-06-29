'use client';

import Image from 'next/image';

export default function Vision() {
  return (
    <section id="vision" className="section section-light">
      <div className="container">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* 画像セクション */}
          <div style={{
            width: '100%',
            height: '400px',
            marginBottom: '4rem',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/workshop2.jpg"
              alt="ワークショップの様子"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
            />
            {/* オーバーレイ */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.9))'
            }} />
          </div>

          {/* テキストコンテンツ */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>
              "学び続ける力"で社会を変える
            </h2>
            <div className="card animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--primary)'
              }}>
                ハピスク（HAPISQ）は、
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                textAlign: 'left',
                fontSize: '1.1rem',
                color: 'var(--text-secondary)'
              }}>
                <p>「学歴」ではなく「学習歴」に価値を見出し、</p>
                <p>自分らしい"学び直し"と"実践"を通じて、</p>
                <p>誰もが新しい可能性に踏み出せる社会を目指します。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 