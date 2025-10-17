export default function Closing(){
  return (
    <section id="closing" className="section-space text-center relative overflow-hidden bg-transparent">

      <div className="container-live relative z-10">
        <div className="content-width">
          {/* White background card for better readability */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
            <h2 className="title-md mb-8" style={{color: 'var(--text-strong)'}}>
              会話が変わる。関係が変わる。毎日が動き出す。
            </h2>
            
            <br/>
            
            {/* 追加コンテンツ */}
            <div className="space-y-8 mb-12">
              <p className="text-unified font-semibold" style={{color: 'var(--text-strong)'}}>
                ハピスクで身につける対話力は、<br/>
                あなたの人生のあらゆる場面で力を発揮します
              </p>
              
              <p className="text-unified" style={{color: 'var(--text-muted)'}}>
                今こそ、対話力を身につけて新しい未来を創造しませんか？
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="btn btn-pink px-10 py-5 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" style={{color: 'white'}}>
                詳しく聞いてみる（無料説明会）
              </a>
              <a href="https://form.run/@happiob" target="_blank" rel="noopener noreferrer" className="btn btn-yellow px-10 py-5 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" style={{color: 'var(--text-strong)'}}>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}