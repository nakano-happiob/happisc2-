export default function FreeInfoSession(){
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#0F172A'}}>
            10月開催 無料説明会
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
                   <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>10月4日（土）</p>
                     <p className="text-lg" style={{color: '#475569'}}>9:15〜10:15 「ファシリテーション」</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>10月4日（土）</p>
                     <p className="text-lg" style={{color: '#475569'}}>10:30〜11:30 「フィジカルトレーナー」</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>10月16日（水）</p>
                     <p className="text-lg" style={{color: '#475569'}}>18:45〜19:45 「ファシリテーション」</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                   <div>
                     <p className="text-2xl font-semibold" style={{color: '#0F172A'}}>10月16日（水）</p>
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
