'use client';

import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Portfolio() {
  const portfolioExamples = [
    {
      title: '新しいプロジェクトの企画書',
      description: '学んだファシリテーションスキルを活用し、チーム全体を巻き込んだプロジェクト企画を実現'
    },
    {
      title: 'ワークショップでの気づき・ふりかえりレポート',
      description: '対話を通じて得た新しい視点と、それを活かした行動計画を可視化'
    },
    {
      title: 'キャリアの再設計プラン',
      description: '自己理解を深め、人生100年時代を見据えた長期的なキャリアビジョンを構築'
    },
    {
      title: 'AIを活用した学びの記録',
      description: 'ChatGPT等のAIツールを活用した効率的な学習方法と成果の記録'
    },
    {
      title: '地域活動やボランティア実践報告',
      description: 'コミュニティ構築の理論を実践に移し、地域社会への貢献活動を展開'
    },
    {
      title: 'ファイナンス計画書',
      description: '個人・組織の財務状況を可視化し、持続可能な資金計画を策定'
    }
  ];

  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`section section-light${isVisible ? ' animate-fade-in' : ''}`}
      style={{ padding: '8rem 0' }}
    >
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 4rem',
        marginBottom: '5rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            marginBottom: '1rem'
          }}>
            "学習歴"をカタチに——<br />
            ポートフォリオで見える成長
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '3rem'
          }}>
            ハピスクでは、修了証や資格だけでなく、<br />
            「自分がどう考え、どう行動し、どう変わったか」を可視化するポートフォリオを重視します。
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto 4rem'
        }}>
          {portfolioExamples.map((example, index) => (
            <div key={index} className="card animate-fade-in" style={{
              minHeight: '400px',
              animationDelay: `${index * 0.1}s`
            }}>
              {/* 画像プレースホルダー */}
              <div className="image-placeholder" style={{
                width: '100%',
                height: '200px',
                marginBottom: '1.5rem'
              }} />
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontWeight: '600',
                lineHeight: '1.4'
              }}>
                {example.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: '0.95rem',
                flex: 1
              }}>
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
