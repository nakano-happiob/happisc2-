'use client';

import Image from 'next/image';
import { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Vision() {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);
  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section section-light${isVisible ? ' animate-fade-in' : ''}`}
      style={{ padding: '8rem 0' }}
    >
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 4rem',
        marginBottom: '5rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'var(--primary)',
            fontWeight: '800',
            marginBottom: '2rem',
            letterSpacing: '0.02em',
            lineHeight: '1.2'
          }}>
            "学び続ける力"が、未来をつくる。
          </h2>
          <div className="animate-fade-in" style={{
            marginBottom: '4rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Image
              src="/images/main2.jpg"
              alt="学び続ける力が未来をつくるイメージ"
              width={600}
              height={300}
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                borderRadius: '16px',
                // boxShadow: 'var(--shadow-md)'
              }}
              priority
            />
          </div>

          {/* 下部：テキストコンテンツ */}
          <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              maxWidth: '1000px',
              margin: '0 auto 2rem'
            }}>
              私たちは今、「何を学んだか」よりも<br />
              「どう学び続け、どう変わってきたか」が問われる時代を生きています。<br />
              AIの進化、働き方の多様化、人生100年時代——<br />
              答えのない課題に満ちた社会で、自ら問いを立て、<br />
              変化し、行動できる力こそが、次の時代を切り開きます。
            </p>

            {/*
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              background: 'var(--bg-white)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-light)'
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
            */}
          </div>
        </div>
      </div>
    </section>
  );
} 