'use client';

import React, { useRef } from 'react';

// 共通フックを仮定（後で作成）
import useScrollAnimation from '../hooks/useScrollAnimation';

const keywords = [
  { text: '#学習歴', icon: '📚' },
  { text: '#実践力', icon: '💪' },
  { text: '#行動力', icon: '🚀' },
  { text: '#コミュニティ', icon: '🤝' },
  { text: '#ポートフォリオ', icon: '📊' },
  { text: '#多様性', icon: '🌈' }
];

const comparison = [
  {
    title: '従来型教育',
    points: [
      '一方的な知識伝達',
      '画一的なカリキュラム',
      '資格取得が目的',
      '教室での座学中心'
    ],
    color: '#95A5A6'
  },
  {
    title: 'ハピスク',
    points: [
      '双方向の実践的学習',
      '個別最適化された学び',
      'ポートフォリオ重視',
      'オンライン×対面融合'
    ],
    color: '#FF6B6B'
  }
];

export default function About() {
  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);
  return (
    <section
      ref={sectionRef}
      className={`section section-light${isVisible ? ' animate-fade-in' : ''}`}
      style={{ padding: '8rem 0' }}
    >
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '5rem',
        padding: '0 4rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '1rem'
          }}>
            会社・サービス紹介
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* 会社概要 */}
          <div className="card animate-fade-in" style={{
            minHeight: '400px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--primary)'
            }}>
              会社概要
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              fontSize: '0.95rem',
              lineHeight: '1.8'
            }}>
              <div>
                <strong>会社名：</strong>合同会社ハピオブ
              </div>
              <div>
                <strong>所在地：</strong>富山県富山市
              </div>
              <div>
                <strong>代表者：</strong>島田勝彰（代表兼CEO）
              </div>
              <div>
                <strong>創業：</strong>2012年（13期目）
              </div>
              <div>
                <strong>事業内容：</strong>コミュニケーション支援
              </div>
            </div>
            <p style={{
              marginTop: '2rem',
              color: 'var(--text-light)',
              fontSize: '0.9rem',
              lineHeight: '1.8'
            }}>
              富山県に拠点を構え、企業や行政のコミュニケーション支援およびコミュニティ構築支援を中心とした事業を展開。キャリア教育支援や採用支援の分野でも実績を持つ。
            </p>
          </div>

          {/* サービス説明 */}
          <div className="card animate-fade-in" style={{
            minHeight: '400px',
            animationDelay: '0.1s'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--primary)'
            }}>
              サービス説明
            </h3>
            <div style={{
              fontSize: '0.95rem',
              lineHeight: '1.8',
              color: 'var(--text-light)'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>2012年</strong>よりキャリア教育支援を開始し、大学生向けキャリア教育プログラム開発や長期実践型インターンシップを実施。
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>2015年</strong>からは地域中小企業の採用支援、合同企業説明会開催、採用エージェント代行などを展開。
              </p>
              <p>
                <strong>2022年</strong>からはコミュニケーション支援・コミュニティ構築事業を本格化し、多様な人々の出会いや学びの場を提供している。
              </p>
            </div>
          </div>
        </div>

        {/* ハピスクについて */}
        <div style={{
          maxWidth: '800px',
          margin: '4rem auto 0',
          textAlign: 'center'
        }}>
          {/*
          <div className="card animate-fade-in" style={{
            minHeight: '400px',
            animationDelay: '0.2s'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              color: 'var(--primary)'
            }}>
              ハピスク（HAPISQ）について
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '2',
              color: 'var(--text-light)'
            }}>
              「学歴」ではなく「学習歴」に価値を見出す新しいリカレント教育プログラムとして、<br />
              誰もが新しい可能性に踏み出せる社会を目指して活動しています。
            </p>
          </div>
          */}
        </div>
      </div>
    </section>
  );
} 