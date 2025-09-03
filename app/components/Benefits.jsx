'use client';

export default function Benefits(){
  // SVGアイコンコンポーネント
  const DialogueSkillIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
      {/* 人物1 */}
      <circle cx="22" cy="20" r="5" fill="white"/>
      <ellipse cx="22" cy="32" rx="6" ry="8" fill="white"/>
      
      {/* 人物2 */}
      <circle cx="38" cy="20" r="5" fill="white"/>
      <ellipse cx="38" cy="32" rx="6" ry="8" fill="white"/>
      
      {/* 会話バブル */}
      <ellipse cx="30" cy="45" rx="12" ry="6" fill="white" opacity="0.9"/>
      <path d="M25 45 L20 50 L25 48 Z" fill="white" opacity="0.9"/>
      
      {/* ハート（共感） */}
      <path d="M30 42 C28 40, 24 40, 24 44 C24 46, 30 50, 30 50 C30 50, 36 46, 36 44 C36 40, 32 40, 30 42 Z" 
            fill="#ff6b9d" opacity="0.8"/>
    </svg>
  );

  const PracticalSkillIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
      {/* 人物 */}
      <circle cx="30" cy="18" r="6" fill="white"/>
      <ellipse cx="30" cy="35" rx="8" ry="12" fill="white"/>
      
      {/* 電球（アイデア） */}
      <circle cx="45" cy="15" r="6" fill="#ffd700"/>
      <rect x="42" y="18" width="6" height="3" fill="#ffd700"/>
      <rect x="43" y="21" width="4" height="1" fill="#ffd700"/>
      
      {/* ギア（スキル） */}
      <circle cx="15" cy="45" r="8" fill="white" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
      <circle cx="15" cy="45" r="4" fill="currentColor" opacity="0.5"/>
      
      {/* 矢印（成長） */}
      <path d="M25 50 L35 40 L33 38 L35 40 L37 38" 
            stroke="#4caf50" strokeWidth="2" fill="none"/>
    </svg>
  );

  const SafeSpaceIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
      {/* 保護シールド */}
      <path d="M30 10 L40 15 L40 35 C40 40, 35 45, 30 45 C25 45, 20 40, 20 35 L20 15 Z" 
            fill="white" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
      
      {/* 中央のハート */}
      <path d="M30 25 C28 23, 25 23, 25 26 C25 28, 30 32, 30 32 C30 32, 35 28, 35 26 C35 23, 32 23, 30 25 Z" 
            fill="#ff6b9d"/>
            
      {/* 小さな人々（保護されている） */}
      <circle cx="26" cy="35" r="2" fill="currentColor" opacity="0.6"/>
      <circle cx="30" cy="37" r="2" fill="currentColor" opacity="0.6"/>
      <circle cx="34" cy="35" r="2" fill="currentColor" opacity="0.6"/>
    </svg>
  );

  const LeadershipIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
      {/* リーダー（中央、大きめ） */}
      <circle cx="30" cy="20" r="6" fill="white"/>
      <ellipse cx="30" cy="35" rx="8" ry="10" fill="white"/>
      
      {/* クラウン */}
      <path d="M24 15 L27 12 L30 15 L33 12 L36 15 L35 18 L25 18 Z" 
            fill="#ffd700"/>
      <circle cx="27" cy="14" r="1" fill="#ff6b9d"/>
      <circle cx="30" cy="13" r="1" fill="#ff6b9d"/>
      <circle cx="33" cy="14" r="1" fill="#ff6b9d"/>
      
      {/* チームメンバー（小さめ） */}
      <circle cx="15" cy="45" r="4" fill="white" opacity="0.8"/>
      <circle cx="45" cy="45" r="4" fill="white" opacity="0.8"/>
      <circle cx="12" cy="25" r="3" fill="white" opacity="0.7"/>
      <circle cx="48" cy="25" r="3" fill="white" opacity="0.7"/>
      
      {/* 接続線 */}
      <line x1="24" y1="32" x2="18" y2="42" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
      <line x1="36" y1="32" x2="42" y2="42" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    </svg>
  );

  const items = [
    {title: '対話力の習得', desc: '多様な価値観を受け止められる、ファシリテーターとしての資質・姿勢を学ぶ。', IconComponent: DialogueSkillIcon},
    {title: '実践的スキル', desc: 'どんな相手や状況でも本音を引き出し合い、「納得」と「次の一歩」に変えられるようになる。', IconComponent: PracticalSkillIcon},
    {title: '安全な場づくり', desc: '意見の衝突を健全に受け止め、心理的安全性の高い場を作ることができる。', IconComponent: SafeSpaceIcon},
    {title: 'リーダーシップ', desc: '職場や学校で複数人をまとめるリーダーとして指名される人材になる。', IconComponent: LeadershipIcon},
  ];
  
  const benefits = [
    {
      number: "01",
      title: "「学習歴」に着目",
      subtitle: "あなただけの学習記録",
      desc: "受講した背景や目指す姿に合わせ、あなたの「学習歴」を残します",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      number: "02", 
      title: "柔軟な受講形式",
      subtitle: "ライフスタイルに合わせて",
      desc: "対面・オンライン であなたのライフスタイルに合わせて選択",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      number: "03",
      title: "少人数制カリキュラム",
      subtitle: "一人ひとりに丁寧な指導",
      desc: "一人ひとりに目が届く人数で丁寧な指導を受けられます。",
      color: "bg-gradient-to-br from-teal-500 to-teal-600", 
      bgColor: "bg-teal-50"
    },
    {
      number: "04",
      title: "フォロー制度",
      subtitle: "継続的なサポート体制",
      desc: "カリキュラムや受講終了後の個別相談も可能です。",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="benefits" className="section-space bg-gradient">
      <div className="container-live">
        <div className="text-center mb-section">
          <h2 className="title-lg">ハピスクの特徴</h2>
          <p className="text-unified content-width" style={{color: 'var(--text-muted)'}}>
            ファシリテーターを目指すための独自のカリキュラムを用意しています
          </p>
        </div>
        
        <div className="content-width-wide">
          <div className="grid-fixed cols-2">
            {benefits.map((benefit, i) => (
              <div key={i} className={`feature-card ${benefit.bgColor} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <div className={`w-full h-full rounded-full ${benefit.color}`}></div>
                </div>
                
                <div className="relative z-10">
                                          <div className="flex items-start space-x-4 mb-6">
                          <div className={`flex-shrink-0 w-12 h-12 ${benefit.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {benefit.number}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2" style={{
                              color: benefit.number === "01" ? "#E91E63" : 
                                     benefit.number === "02" ? "#FF5722" :
                                     benefit.number === "03" ? "#14B8A6" : "#9C27B0",
                              textAlign: 'left'
                            }}>{benefit.title}</h3>
                            <p className="text-sm font-semibold mb-3" style={{color: 'var(--text-muted)', textAlign: 'left'}}>{benefit.subtitle}</p>
                          </div>
                        </div>
                  
                  <p className="text-base" dangerouslySetInnerHTML={{
                    __html: benefit.desc
                      .replace(/ファシリテーター/g, '<span style="color: var(--brand-pink)">ファシリテーター</span>')
                  }}></p>
                  

                </div>
              </div>
            ))}
          </div>
        </div>
        


      </div>
    </section>
  );
}