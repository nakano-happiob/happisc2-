'use client';

export default function Stories() {
  const personas = [
    {
      title: '育休復帰後の社会人',
      description: 'キャリアと子育てを両立しながら、自分の強みを再発見したい',
      before: '子育てと仕事の両立に悩み、キャリアの方向性を見失っていた',
      after: '自分の価値観を整理し、新しい働き方を実現'
    },
    {
      title: '転職を考える20代',
      description: '自分のやりたいことを整理して、新しい一歩を踏み出したい',
      before: 'やりたいことが漠然としていて、次のステップが決められない',
      after: '明確なキャリアビジョンを持ち、自信を持って転職活動を開始'
    },
    {
      title: '地域活動に関わるミドル世代',
      description: '組織づくりや人を巻き込む力を身につけたい',
      before: '地域活動で人をまとめることに苦労していた',
      after: 'ファシリテーションスキルを身につけ、効果的な組織運営を実現'
    },
    {
      title: '将来に迷う学生',
      description: '学んできたことを社会でどう活かせるか知りたい',
      before: '学んだ知識と社会での実践のギャップに悩んでいた',
      after: '実践的なスキルを身につけ、社会で活躍できる自信を獲得'
    }
  ];

  const testimonials = [
    {
      text: '最初は"自分探し"のつもりで参加しましたが、ワークや対話を通じて思いもよらない可能性に気づきました。ポートフォリオをまとめることで"自分の変化"が可視化され、自信を持って転職活動に臨めました。',
      author: '20代・男性',
      role: '転職成功'
    },
    {
      text: '年代も職種も異なる仲間との交流が新鮮で、学び合いの場の力を感じました。子育てと仕事の悩みを言葉にできたのも大きな収穫です。',
      author: '30代・女性',
      role: 'キャリア再設計'
    }
  ];

  return (
    <section id="stories" className="section section-gradient">
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
            こんな人に、ハピスク
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8'
          }}>
            多様な背景を持つ受講生たちの変化のストーリー
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {personas.map((persona, index) => (
            <div key={index} className="card animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`,
              padding: '2rem'
            }}>
              {/* 画像プレースホルダー */}
              <div className="image-placeholder" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                margin: '0 auto 1.5rem'
              }} />
              
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--primary)',
                textAlign: 'center',
                lineHeight: '1.4'
              }}>
                {persona.title}
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontSize: '0.95rem'
              }}>
                「{persona.description}」
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                {/* Before */}
                <div style={{
                  background: 'var(--bg-light)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  width: '100%'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    Before
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>
                    {persona.before}
                  </p>
                </div>

                {/* 矢印 */}
                <div style={{
                  color: 'var(--primary)',
                  fontSize: '2rem',
                  margin: '0.5rem 0'
                }}>
                  ↓
                </div>

                {/* After */}
                <div style={{
                  background: 'var(--gradient-accent)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  width: '100%'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent-dark)',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    After
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    lineHeight: '1.5'
                  }}>
                    {persona.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>
            受講生の声
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card animate-fade-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: 'var(--primary)',
                  marginBottom: '1rem'
                }}>
                  "
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  color: 'var(--text-secondary)',
                  flex: 1
                }}>
                  {testimonial.text}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--primary)'
                  }}>
                    {testimonial.author}
                  </p>
                  <span className="label">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 