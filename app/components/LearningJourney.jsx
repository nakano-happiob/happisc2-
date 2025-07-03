'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function LearningJourney() {
  const steps = [
    {
      title: '自分を知る',
      description: 'これまでの経験や価値観を見つめ直し、「自分は何を大切にしたいか」「どんな未来を描きたいか」を言語化します。'
    },
    {
      title: '対話し、行動する',
      description: '多様な背景を持つ仲間や講師と共に問いを深め、アイデアや気づきを現実の行動につなげます。ワークショップやグループディスカッションを通じて、「実践知」を体験。'
    },
    {
      title: '"学習歴"を可視化する',
      description: '学びの過程や成果を"ポートフォリオ"として記録。自分だけの成長ストーリーを言葉と行動で可視化し、次の一歩へつなげます。'
    }
  ];

  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={`section${isVisible ? ' animate-fade-in' : ''}`}
    >
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 4rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'var(--primary)',
            fontWeight: '800',
            marginBottom: '2rem',
            letterSpacing: '0.02em',
            lineHeight: '1.2'
          }}>
            「学習歴」を積み重ねるための3ステップ
          </h2>
        </div>

        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))',
          gap: '1rem',
          maxWidth: '1100px',
          margin: '0 auto',
          alignItems: 'stretch',
          minHeight: 'unset'
        }}>
          {/* 背景の大きな矢印SVG（カード間のみ） */}
          <svg
            viewBox="0 0 900 80"
            width="100%"
            height="80"
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              zIndex: 0,
              transform: 'translateY(-50%)',
              pointerEvents: 'none'
            }}
          >
            <line x1="40" y1="40" x2="860" y2="40" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round" />
            <polygon points="860,30 900,40 860,50" fill="var(--primary)" />
          </svg>
          {steps.map((step, index) => (
            <div key={index} className="step animate-fade-in" style={{
              animationDelay: `${index * 0.2}s`,
              border: '2px solid var(--border-light)',
              borderRadius: '16px',
              background: '#fff',
              boxShadow: 'var(--shadow-sm)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
              height: '100%',
              minHeight: 'unset'
            }}>
              {/* ステップ1・2・3で画像を切り替え */}
              {index === 0 ? (
                <Image
                  src="/images/thinking.jpeg"
                  alt="考えるイメージ"
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    maxWidth: '200px',
                    height: '200px',
                    objectFit: 'contain',
                    marginBottom: '2rem',
                    borderRadius: '12px',
                  }}
                  priority
                />
              ) : index === 1 ? (
                <Image
                  src="/images/comunity1.jpeg"
                  alt="コミュニティイメージ"
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    maxWidth: '200px',
                    height: '200px',
                    objectFit: 'contain',
                    marginBottom: '2rem',
                    borderRadius: '12px',
                  }}
                  priority
                />
              ) : index === 2 ? (
                <Image
                  src="/images/goal.jpeg"
                  alt="ゴールイメージ"
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    maxWidth: '200px',
                    height: '200px',
                    objectFit: 'contain',
                    marginBottom: '2rem',
                    borderRadius: '12px',
                  }}
                  priority
                />
              ) : (
                <div className="image-placeholder" style={{
                  width: '100%',
                  height: '200px',
                  marginBottom: '2rem'
                }} />
              )}
              {/* ステップ番号 */}
              <div style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: 'var(--primary)',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
                background: 'none',
                border: 'none',
                borderRadius: 0
              }}>
                STEP {index + 1}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontWeight: '700'
              }}>
                {step.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '4rem auto 0',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'stretch'
        }}>
          <div className="card card-gradient animate-fade-in" style={{
            animationDelay: '0.6s',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              lineHeight: '1.6'
            }}>
              ハピスクでは、<br />
              学びを終わらせない
              <span style={{
                fontWeight: '800',
                color: 'var(--primary)'
              }}>「循環型の成長体験」</span>
              を、<br />
              すべての人に届けます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 