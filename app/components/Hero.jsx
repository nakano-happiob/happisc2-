"use client";

export default function Hero(){
  return (
    <section id="hero" className="py-20 bg-gradient-to-br from-white via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-30 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main title centered */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{color: '#0F172A'}}>
            会話が変わる。関係が変わる。毎日が動き出す。
          </h1>
          <p className="text-3xl lg:text-5xl font-bold" style={{color: '#0F172A'}}>
            HAPPISCH（ハピスク）
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text content */}
          <div className="space-y-6 fade-in-left">
            <div className="space-y-4" style={{fontSize: '20px', lineHeight: '1.6'}}>
              <p>
                <span style={{color: '#14B8A6', fontWeight: 'bold'}}>ファシリテーション</span>で<br/>
                毎日のコミュニケーションが楽しくなる
              </p>
              
              <div className="space-y-2">
                <p>うまく伝わらない。</p>
                <p>分かり合えない。</p>
                <p>アイデアが出ない。</p>
              </div>
              
              <p>
                <strong style={{color: '#EC4899'}}>「ファシリテーター」の存在が、</strong><br/>
                会話や対話の行き詰まりを解きます。
              </p>
              
              <p>
                ハピスクは、理論と実践で身につける本格的なカリキュラムで、会社・家庭・学校・地域など、あらゆる場面で活かせるファシリテーション力の習得を目指します。
              </p>
            </div>
            
            <div className="pt-6">
              <a href="https://forms.gle/MXJqWHQg1JLh5ZDa6" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 pulse-soft" style={{backgroundColor: '#EC4899', color: 'white'}}>
                詳しく聞いてみる（無料説明会）
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative fade-in-right">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-100 to-blue-100 hover-lift">
              <img 
                src="/top2.jpg" 
                alt="ハピスクでのファシリテーション学習風景" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-100" style={{display: 'none'}}>
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <p className="text-lg font-medium">ファシリテーション学習</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}