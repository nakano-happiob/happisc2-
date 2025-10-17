export default function FreeInfoSession(){
  return (
    <section className="py-16 bg-transparent relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#0F172A'}}>
            11月開催 無料説明会
          </h2>
          <p className="text-lg mb-8" style={{color: '#475569'}}>
            まずは気軽にオンラインでご参加ください。
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* 左側：開催日程 */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{color: '#0F172A'}}>
                開催日程
              </h3>
              <br/>
              <div className="space-y-4">
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-pink-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>11月6日（木）</p>
                     <p className="text-lg" style={{color: '#475569'}}>18:45〜19:45 「ファシリテーション」</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>11月6日（木）</p>
                     <p className="text-lg" style={{color: '#475569'}}>20:00〜21:00 「フィジカルトレーナー」</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>11月20日（木）</p>
                     <p className="text-lg" style={{color: '#475569'}}>18:45〜19:45 「ファシリテーション」</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>11月20日（木）</p>
                     <p className="text-lg" style={{color: '#475569'}}>20:00〜21:00 「フィジカルトレーナー」</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* 右側：説明とCTA */}
            <div className="text-center lg:text-left">
              <p className="text-lg mb-8" style={{color: '#0F172A', lineHeight: '1.7'}}>
                ハピスクやカリキュラムの詳細を知りたい方は、ぜひ説明会へ！
              </p>
                             <a 
                 href="https://forms.gle/2hrPf8UR7rpYcK718" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" 
                 style={{backgroundColor: '#EC4899', color: 'white'}}
               >
                 無料説明会に申し込む
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
