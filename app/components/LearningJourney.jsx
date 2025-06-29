'use client';

export default function LearningJourney() {
  const steps = [
    {
      title: '自分を知る',
      description: 'これまでの経験や価値観を見つめ直し、「自分は何を大切にしたいか」「どんな未来を描きたいか」を言語化します。'
    },
    {
      title: '対話し、行動する',
      description: '多様な仲間や講師と共に、問いを深め、アイデアや気づきを現実の行動につなげます。ワークショップやグループディスカッションを通じて、「実践知」を体験。'
    },
    {
      title: '"学習歴"を可視化する',
      description: '学びの過程や成果を"ポートフォリオ"として記録。自分だけの成長ストーリーを言葉と行動で可視化し、次の一歩へつなげます。'
    }
  ];

  return (
    <section id="journey" className="section">
      <div className="container">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            marginBottom: '1rem'
          }}>
            あなたの"学び直し"が、未来をつくる。
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--primary)',
            fontWeight: '600',
            marginBottom: '2rem'
          }}>
            「学習歴」を重ねる3ステップの旅
          </p>
        </div>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {steps.map((step, index) => (
            <div key={index} className="animate-fade-in" style={{
              width: '100%',
              position: 'relative',
              animationDelay: `${index * 0.2}s`
            }}>
              {/* カード */}
              <div className="card" style={{
                padding: '2rem',
                background: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                position: 'relative'
              }}>
                {/* ステップ番号 */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--primary)'
                }}>
                  Step {index + 1}
                </div>

                <div style={{
                  marginTop: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    fontSize: '1rem'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* 矢印（最後のカード以外に表示） */}
              {index < steps.length - 1 && (
                <div style={{
                  fontSize: '2rem',
                  color: 'var(--primary)',
                  textAlign: 'center',
                  margin: '1rem 0'
                }}>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '4rem auto 0',
          textAlign: 'center',
          height: '300px',
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
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              lineHeight: '1.6'
            }}>
              ハピスクでは、「学びを終わらせない<br />
              循環型の成長体験」を、すべての人に届けます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 