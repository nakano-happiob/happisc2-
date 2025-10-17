export default function Curriculum(){
  // 開講中の科目
  const currentlyAvailable = [
    {
      title: 'ファシリテーターA\n【合意形成・リレーションシップ】',
      week: '第1週',
      desc: '実践的な場づくり・対話力の深化・合意形成スキルの習得',
      goal: '白熱する対話の型を習得',
      color: 'from-pink-500 to-pink-600',
      bgColor: '#fdf2f8',
      category: 'core'
    },
    {
      title: 'ファシリテーターB\n【アイデア・共創】',
      week: '第2週',
      desc: '場づくり・聴く力・問い方・意見の引き出し／白熱する対話力の型を習得',
      goal: '実践的ファシリテーション力を習得',
      color: 'from-pink-600 to-pink-700',
      bgColor: '#fdf2f8',
      category: 'core'
    },
    {
      title: 'フィジカルトレーナー',
      week: '第8週',
      desc: '姿勢・呼吸・生活リズムを整え集中力と健康を手に入れる',
      goal: 'パフォーマンス向上',
      color: 'from-red-500 to-red-600',
      bgColor: '#fef2f2',
      category: 'advanced'
    }
  ];

  // COMING SOONの科目
  const comingSoon = [
    {
      title: 'コミュニケーター',
      week: '第3週',
      desc: '自己開示・傾聴・非言語・伝え方・プレゼン基礎で関係の土台を整える',
      goal: '関係の土台を整える',
      color: 'from-orange-500 to-orange-600',
      bgColor: '#fff7ed',
      category: 'core'
    },
    {
      title: 'キャリアデザイナー',
      week: '第4週',
      desc: '自分史の言語化、強みを棚卸しし、将来像を設計する',
      goal: '将来像を設計する',
      color: 'from-teal-500 to-teal-600',
      bgColor: '#f0fdfa',
      category: 'core'
    },
    {
      title: 'アートディレクター',
      week: '第7週',
      desc: '創造性を高め、考えを伝える力を身につける',
      goal: 'ビジュアル思考をマスター',
      color: 'from-purple-500 to-purple-600',
      bgColor: '#faf5ff',
      category: 'skill'
    },
    {
      title: '起業家',
      week: '第9週',
      desc: 'アイデアを行動に変える方法を学ぶ',
      goal: '実践力を身につける',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: '#eef2ff',
      category: 'advanced'
    }
  ];
  
  return (
    <section id="curriculum" className="section-space bg-transparent">
      <div className="container-live">
        <div className="text-center mb-section">
          <h2 className="title-lg">カリキュラム</h2>
          <p className="text-unified content-width" style={{color: 'var(--text-muted)'}}>
            ファシリテーターに必要な資質・視点を多角的に学べます
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-6">
            
            {/* 開講中 */}
            <div className="lg:col-span-2">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{color: 'var(--brand-teal)'}}>開講中</h3>
                <p className="text-sm md:text-base" style={{color: 'var(--text-muted)'}}>現在受講可能な科目</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {currentlyAvailable.map((subject, i) => (
                  <div key={i} className="rounded-xl p-3 md:p-4 feature-card relative flex flex-col justify-between overflow-hidden" style={{
                    backgroundColor: subject.bgColor,
                    minHeight: 'auto',
                    height: 'auto'
                  }}>
                    {/* 開講中バッジ */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        開講中
                      </span>
                    </div>
                    
                    <div className="flex-1 pt-6 md:pt-2">
                      <div className="flex items-start mb-2 md:mb-3">
                        <div className={`w-3 h-3 ${subject.color} rounded-full mr-3 flex-shrink-0 mt-1`}></div>
                        <h4 className="text-sm md:text-lg break-words" style={{
                          color: '#0F172A',
                          fontWeight: '900',
                          fontSize: 'clamp(14px, 4vw, 18px)',
                          lineHeight: '1.2',
                          letterSpacing: '-0.025em',
                          whiteSpace: 'pre-line',
                          textAlign: 'left'
                        }}>
                          {subject.title}
                        </h4>
                      </div>
                      <p className="break-words" style={{
                        color: '#0F172A',
                        fontSize: 'clamp(12px, 3.5vw, 14px)',
                        lineHeight: '1.5',
                        paddingLeft: '24px',
                        paddingRight: '24px'
                      }}>{subject.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMING SOON */}
            <div className="lg:col-span-3">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{color: 'var(--text-muted)'}}>COMING SOON</h3>
                <p className="text-sm md:text-base" style={{color: 'var(--text-muted)'}}>準備中の科目</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {comingSoon.map((subject, i) => (
                  <div key={i} className="rounded-xl p-3 md:p-4 feature-card relative opacity-75 flex flex-col justify-between overflow-hidden" style={{
                    backgroundColor: subject.bgColor,
                    minHeight: 'auto',
                    height: 'auto'
                  }}>
                    {/* COMING SOONバッジ */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3">
                      <span className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                        COMING SOON
                      </span>
                    </div>
                    
                    <div className="flex-1 pt-6 md:pt-2">
                      <div className="flex items-start mb-2 md:mb-3">
                        <div className={`w-3 h-3 ${subject.color} rounded-full mr-3 flex-shrink-0 mt-1`}></div>
                        <h4 className="text-sm md:text-lg break-words" style={{
                          color: '#0F172A',
                          fontWeight: '900',
                          fontSize: 'clamp(14px, 4vw, 18px)',
                          lineHeight: '1.2',
                          letterSpacing: '-0.025em'
                        }}>
                          {subject.title}
                        </h4>
                      </div>
                      <p className="break-words" style={{
                        color: '#0F172A',
                        fontSize: 'clamp(12px, 3.5vw, 14px)',
                        lineHeight: '1.5',
                        paddingLeft: '24px',
                        paddingRight: '24px'
                      }}>{subject.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        
        {/* 追加メッセージとCTA */}
        <div className="text-center mt-section content-width">
          <p className="text-lg md:text-xl font-semibold mb-6 md:mb-8 break-words" style={{color: 'var(--text-strong)'}}>
            複数科目受講をご希望の方はご相談ください
          </p>
          <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="btn btn-pink px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            詳しく聞いてみる（無料説明会）
          </a>
        </div>
      </div>
    </section>
  );
}