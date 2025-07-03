import React from 'react';

export default function CurriculumIntro({ programInfo }) {
  return (
    <section style={{
      background: 'var(--bg-white)',
      padding: '6rem 0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '4rem'
      }}>
        <h2 style={{
          marginBottom: '1rem',
          color: 'var(--text-primary)'
        }}>
          "問い"から始まる、3ヶ月の学び
        </h2>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--primary)',
          fontWeight: '600',
          marginBottom: '3rem'
        }}>
          知識で終わらせない、行動につながるカリキュラム
        </p>
        {/* プログラム情報ボックス */}
        <div className="info-box" style={{
          marginBottom: '4rem'
        }}>
          {programInfo.map((info, index) => (
            <div key={index} className="info-item">
              <div className="info-label" style={{
                minWidth: '80px',
                textAlign: 'left',
                marginRight: '2rem'
              }}>
                {info.label}
              </div>
              <div className="info-text">
                {info.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 