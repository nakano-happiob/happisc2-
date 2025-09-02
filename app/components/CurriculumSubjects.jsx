import React from 'react';

export default function CurriculumSubjects({ subjects }) {
  return (
    <section style={{
      background: 'var(--bg-white)',
      padding: '6rem 0'
    }}>
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{
          fontSize: '1.75rem',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--text-primary)'
        }}>
          ▼プログラム（一部）
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {subjects.map((subject, index) => (
            <div key={index} className="card animate-fade-in" style={{
              minHeight: '400px',
              animationDelay: `${index * 0.1}s`
            }}>
              {/* 画像プレースホルダー */}
              <div className="image-placeholder" style={{
                width: '100%',
                height: '150px',
                marginBottom: '1.5rem'
              }} />
              <h4 style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: 'var(--primary)'
              }}>
                {subject.title}
              </h4>
              <p style={{
                color: 'var(--accent-dark)',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {subject.subtitle}
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                flex: 1
              }}>
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 