"use client";

export default function Hero(){
  return (
    <section id="hero" className="py-20 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text content */}
          <div className="space-y-6">
            {/* Main title left-aligned */}
            <div className="text-left mb-8 w-full">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4" style={{color: '#0F172A'}}>
                <span className="whitespace-nowrap" style={{color: '#0F172A', fontWeight: 'bold'}}>会話が変わる。関係が変わる。</span><br/>
                <span className="whitespace-nowrap" style={{color: '#0F172A', fontWeight: 'bold'}}>毎日が動き出す。</span><br/>
                <span style={{color: '#14B8A6', fontWeight: 'bold'}}>HAPPISCH（ハピスク）</span>
              </h1>
            </div>
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
                <strong style={{color: '#EC4899'}}>ファシリテーターの存在が、</strong><br/>
                会話や対話の行き詰まりを解きます。
              </p>
              
              <p>
                ハピスクは、ファシリテーションを中心とした多角的なカリキュラムを通して、会社・家庭・学校・地域など、いかなる場面でも自分の可能性を信じられる人を増やします。
              </p>
            </div>
            
            <div className="pt-6">
              <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" style={{backgroundColor: '#EC4899', color: 'white'}}>
                詳しく聞いてみる（無料説明会）
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-transparent">
              <img 
                src="/top2.jpg" 
                alt="ハピスクでのファシリテーション学習風景" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-transparent" style={{display: 'none'}}>
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
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
