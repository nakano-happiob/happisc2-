export default function Program(){

  return (
    <section id="program" className="section-space" style={{background: '#fafafa'}}>
      <div className="container-live">
        <div className="text-center mb-section">
          <h2 className="title-lg">学習コースについて</h2>
          <p className="text-unified content-width" style={{color: 'var(--text-muted)'}}>
            あなたの学習スタイルに合わせた柔軟なプログラム設計
          </p>
        </div>

        {/* コース比較 */}
        <div className="content-width-wide">
          <div className="grid-fixed cols-2">
            {/* ベーシックコース */}
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl text-white shadow-2xl" style={{padding: '24px'}}>
              <div className="absolute top-6 right-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                おすすめ
              </div>
              
              <div style={{minHeight: '260px'}}>
                <h3 className="text-3xl font-bold mb-6" style={{textAlign: 'left'}}>アドバンスコース</h3>
                <p className="text-lg opacity-90 mb-6" style={{textAlign: 'left'}}>
                  ファシリテーターを目指す方向け
                </p>
                <p className="text-base opacity-80 mb-6" style={{textAlign: 'left'}}>
                  ファシリテーションに加え、専門的な学びで実践力と可能性を広げます
                </p>
                
                <div className="space-y-3 mb-6" style={{paddingLeft: '16px'}}>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-teal-500 text-sm">✓</span>
                    </span>
                    <span className="text-sm" style={{textAlign: 'left'}}>対話を起点に自分と周囲を変えていく力を身につける</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-teal-500 text-sm">✓</span>
                    </span>
                    <span className="text-sm" style={{textAlign: 'left'}}>3か月間で総合的に学習し、多角的に実践力を高める</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-teal-500 text-sm">✓</span>
                    </span>
                    <span className="text-sm" style={{textAlign: 'left'}}>修了後にファシリテーターとしての仕事・独立を目指す</span>
                  </div>
                </div>
                
                <div className="bg-white/20 rounded-xl p-4 mb-6" style={{textAlign: 'left'}}>
                  <p className="text-lg font-bold mb-1">8コマ×各90分</p>
                  <p className="text-sm opacity-80">【ファシリテーション×3コマ＋選択×5コマ】</p>
                  <p className="text-xl font-bold">通常価格：10万円</p>
                </div>
              </div>
              
              <a href="https://forms.gle/eg7QrVAPwk39FM156" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-teal-600 font-bold py-4 px-6 rounded-2xl text-center block hover:bg-gray-50 transition-colors duration-300">
                アドバンスコースを選ぶ
              </a>
            </div>

            {/* エントリーコース */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-teal-200" style={{padding: '24px'}}>
              <div style={{minHeight: '260px'}}>
                <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--text-strong)', textAlign: 'left'}}>エントリーコース</h3>
                <p className="text-lg mb-6" style={{color: 'var(--text-muted)', textAlign: 'left'}}>
                  ファシリテーションに触れてみたい方向け
                </p>
                <p className="text-base mb-6" style={{color: 'var(--text-muted)', textAlign: 'left'}}>
                  入門としてファシリテーションの基礎を体験し、対話の第一歩を踏み出せます
                </p>
                
                <div className="space-y-3 mb-6" style={{paddingLeft: '16px'}}>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm" style={{color: 'var(--text-strong)', textAlign: 'left'}}>聞く・まとめる・合意形成のエッセンスを体験</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm" style={{color: 'var(--text-strong)', textAlign: 'left'}}>初めてでも安心して学べるカリキュラム</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-sm" style={{color: 'var(--text-strong)', textAlign: 'left'}}>日常でファシリテーションの視点を持てるようになる</span>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-4 mb-6 border border-teal-200" style={{textAlign: 'left'}}>
                  <p className="text-lg font-bold mb-1" style={{color: 'var(--text-strong)'}}>3コマ×各90分</p>
                  <p className="text-sm opacity-80" style={{color: 'var(--text-muted)'}}>【ファシリテーション×3コマ】</p>
                  <p className="text-xl font-bold" style={{color: 'var(--text-strong)'}}>通常価格：5万円</p>
                </div>
              </div>
              
              <a href="https://forms.gle/sFTxcybFeDXapMPC6" target="_blank" rel="noopener noreferrer" className="w-full bg-teal-500 text-white font-bold py-4 px-6 rounded-2xl text-center block hover:bg-teal-600 transition-colors duration-300">
                エントリーコースを選ぶ
              </a>
            </div>
          </div>
        </div>

        {/* 追加情報 */}
        <div className="text-center mt-section content-width">
          <h3 className="title-md mb-4">選択に迷ったら</h3>
          <p className="text-base mb-6" style={{color: 'var(--text-muted)'}}>
            無料説明会で、あなたの目標に最適なコースをご提案いたします
          </p>
          <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="btn btn-pink font-bold">
            詳しく聞いてみる（無料説明会）
          </a>
        </div>
      </div>
    </section>
  );
}