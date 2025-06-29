'use client';

export default function Curriculum() {
  const subjects = [
    {
      title: 'ファシリテーション',
      subtitle: '対話力・合意形成',
      description: 'グループワークや会議を効果的に進行するスキルを習得'
    },
    {
      title: 'キャリアデザイン',
      subtitle: '自己理解・未来設計',
      description: '自分の価値観と強みを活かしたキャリアプランを設計'
    },
    {
      title: 'AIテクノロジー',
      subtitle: '生成AI・ChatGPT活用',
      description: '最新のAIツールを活用した業務効率化と創造性向上'
    },
    {
      title: 'コミュニケーション',
      subtitle: '自己開示・傾聴',
      description: '深い対話を通じた関係構築と信頼関係の醸成'
    },
    {
      title: 'アートディレクション',
      subtitle: '表現力・創造力',
      description: '視覚的な表現を通じたアイデアの具現化と伝達'
    },
    {
      title: 'ファイナンス',
      subtitle: 'お金の見える化・資金計画',
      description: '個人・組織の財務管理と持続可能な事業設計'
    }
  ];

  const programFlow = [
    {
      title: 'テーマインプット',
      time: '30-40分',
      description: '専門講師による最新知識や事例紹介'
    },
    {
      title: 'グループワーク',
      time: '30-40分',
      description: 'ディスカッションや実践的なワーク'
    },
    {
      title: 'ふりかえり・アクション宣言',
      time: '20-30分',
      description: '自分の言葉でまとめ・次の行動へ'
    }
  ];

  const programInfo = [
    {
      label: '期間',
      text: '3ヶ月（全8回／週1回・各100分）',
      icon: '⏰'
    },
    {
      label: '形式',
      text: 'オンライン＆対面ハイブリッド／少人数クラス制',
      icon: '💻'
    },
    {
      label: '内容',
      text: '講義＋ワークショップ＋ふりかえり＋ポートフォリオ作成',
      icon: '📚'
    }
  ];

  return (
    <section id="curriculum" className="section section-gradient-secondary">
      <div className="container">
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
            多様な"問い"から始まる、3ヶ月の学び
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--primary)',
            fontWeight: '600',
            marginBottom: '3rem'
          }}>
            "知識"で終わらせない、行動につながるカリキュラム
          </p>

          {/* プログラム情報カード */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            marginBottom: '6rem'
          }}>
            {programInfo.map((info, index) => (
              <div key={index} className="card animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`,
                padding: '2rem',
                background: '#fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                width: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: 'var(--primary)',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  {info.label}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {info.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginBottom: '6rem'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            textAlign: 'center',
            marginBottom: '4rem',
            color: 'var(--text-primary)'
          }}>
            プログラムの流れ
          </h3>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {programFlow.map((flow, index) => (
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
                    <h4 style={{
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem',
                      color: 'var(--text-primary)'
                    }}>
                      {flow.title}
                    </h4>
                    <p style={{
                      color: 'var(--primary)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}>
                      {flow.time}
                    </p>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>
                      {flow.description}
                    </p>
                  </div>
                </div>

                {/* 矢印（最後のカード以外に表示） */}
                {index < programFlow.length - 1 && (
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
        </div>

        <div>
          <h3 style={{
            fontSize: '1.75rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>
            科目例（抜粋）
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
      </div>
    </section>
  );
} 