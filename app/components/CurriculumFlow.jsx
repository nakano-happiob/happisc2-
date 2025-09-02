import React from 'react';

export default function CurriculumFlow({ programFlow }) {
  return (
    <section style={{
      background: 'var(--bg-white)',
      padding: '6rem 0'
    }}>
      <div>
        <h3 style={{
          fontSize: '1.75rem',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--text-primary)'
        }}>
          ▼各プログラムの流れ
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
          alignItems: 'center',
          position: 'relative'
        }}>
          {programFlow.map((flow, index) => (
            <React.Fragment key={index}>
              <div className="card" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                minHeight: '160px',
                padding: '2rem 1.5rem',
                gap: '2rem',
                boxSizing: 'border-box',
                width: '100%'
              }}>
                <div style={{
                  minWidth: '56px',
                  minHeight: '56px',
                  width: '56px',
                  height: '56px',
                  background: 'var(--primary)',
                  color: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '2rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>{index + 1}</div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '240px',
                  maxWidth: '320px',
                  flex: '0 0 240px',
                  textAlign: 'center'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.2
                  }}>{flow.title}</span>
                  <span style={{
                    color: 'var(--primary)',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: 0
                  }}>{flow.time}</span>
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.15rem',
                  lineHeight: '1.7',
                  flex: 1,
                  textAlign: 'left',
                  paddingLeft: '1rem',
                  wordBreak: 'break-word',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}>
                  {flow.description}
                </div>
              </div>
              {index < programFlow.length - 1 && (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="16" y1="0" x2="16" y2="32" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" />
                    <polygon points="8,32 16,40 24,32" fill="var(--primary)" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
} 