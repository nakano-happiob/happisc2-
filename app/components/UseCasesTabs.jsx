"use client";

export default function UseCases(){
  const sections = [
    {
      title: "合意形成・リレーションシップ",
      subtitle: "円滑に議論を進める・関係値を強化する",
      bgColor: "bg-pink-50",
      items: [
        {
          title: "全員を巻き込む",
          before: "会議で声の大きい人の意見だけで話が進み、他の社員は発言しづらい",
          after: "一人ひとりの声が拾われ、全員が「自分ごと」として合意に参加できる",
          icon: {
            symbol: "👥",
            color: "from-pink-500 to-orange-500"
          }
        },
        {
          title: "衝突を合意に変える",
          before: "部署間の打ち合わせで意見がぶつかると、気まずさから議論が止まってしまう",
          after: "対立が安全に扱われ、違いを出し合うことで建設的な合意が生まれる",
          icon: {
            symbol: "💡",
            color: "from-orange-500 to-yellow-500"
          }
        },
        {
          title: "信頼を育む",
          before: "職場のミーティングが表面的な意見交換で終わり、本音や信頼関係が築けない",
          after: "安心して本音を交わせることで、関係性が深まり、次の行動につながる",
          icon: {
            symbol: "🤝",
            color: "from-yellow-500 to-green-500"
          }
        }
      ]
    },
    {
      title: "アイデア・共創",
      subtitle: "様々な意見を引き出す・意見をかけ合わせる",
      bgColor: "bg-teal-50",
      items: [
        {
          title: "発想を引き出す",
          before: "授業中のグループワークで生徒が黙り込み、考えの幅が広がらない",
          after: "問いかけをきっかけに多様な発想が次々と生まれる",
          icon: {
            symbol: "📚",
            color: "from-teal-500 to-blue-500"
          }
        },
        {
          title: "アイデアを育てる",
          before: "ブレストでアイデアが単発で出てもつながらず、広がりが生まれない",
          after: "一人の言葉が別の人の気づきにつながり、新しい発想が形になる",
          icon: {
            symbol: "🎤",
            color: "from-blue-500 to-purple-500"
          }
        },
        {
          title: "視野を広げる",
          before: "自治会での話し合いが、従来のやり方や前提に縛られて新しい解決策が見えてこない",
          after: "多様な視点を掛け合わせ、想定外のアイデアや選択肢が見えてくる",
          icon: {
            symbol: "💭",
            color: "from-purple-500 to-pink-500"
          }
        }
      ]

    }
  ];
  
  return (
    <section id="usecases" className="section-space relative overflow-hidden bg-transparent">

      <div className="container-live relative z-10">
        <div className="text-center mb-16">
          <h2 className="title-lg mb-6">
            どんな場面で活かせるか？
          </h2>
          <p className="text-unified content-width" style={{color: 'var(--text-muted)'}}>
            あらゆるコミュニティで「ファシリテーター」が力を発揮します
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {sections.map((section, sectionIndex) => (
              <div key={section.title} className="relative">
                {/* セクションヘッダー */}
                <div className="text-center mb-10">
                  <h3 className="title-md mb-3" style={{color: 'var(--brand-teal-dark)'}}>
                    {section.title}
                  </h3>
                  <p className="text-xl" style={{color: 'var(--text-muted)'}}>
                    {section.subtitle}
                  </p>
                </div>

                {/* コンテンツグリッド */}
                <div className="grid md:grid-cols-3 gap-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-center">
                      {/* タイトル */}
                      <h4 className="text-xl font-bold mb-8" style={{color: '#0F172A'}}>
                        {item.title}
                      </h4>
                      
                      {/* Before/After */}
                      <div className="space-y-6">
                        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 text-left">
                          <p className="text-xs font-bold text-red-600 mb-3 uppercase tracking-wider">Before</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{item.before}</p>
                        </div>
                        
                        <div className="flex justify-center">
                          <span className="text-lg text-gray-400">↓</span>
                        </div>
                        
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 text-left">
                          <p className="text-xs font-bold text-green-600 mb-3 uppercase tracking-wider">After</p>
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">{item.after}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="btn btn-pink px-10 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            詳しく聞いてみる（無料説明会）
          </a>
        </div>
      </div>
    </section>
  );
}