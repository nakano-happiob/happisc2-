export default function AboutDialogue(){
  return (
    <section id="about" className="section-space relative bg-transparent">
      {/* 背景画像エリア（後で画像挿入予定） */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      <div className="container-live relative z-10">
        <div className="text-center">
          {/* added keyword: ファシリテーションとは */}
          <h2 className="title-lg mb-12">なぜ今、ファシリテーションが必要か？</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
              <div className="space-y-6 text-unified" style={{color: 'var(--text-strong)', fontSize: '20px', lineHeight: '1.6'}}>
                {/* added keyword: 対話, 研修 */}
                <p>ハピオブではこれまで、企業・学校・地域など、150を超える場面で<br/>対話研修の場づくりをデザインしてきました。</p>
                {/* added keyword: ファシリテーション */}
                <p>また、どの場面でもファシリテーションを活用し、<br/>コミュニケーションの円滑化を図ってきました。</p>
                <p>その場にいる人が安心して本音を出しあい、集中して対話ができる。<br/>"見えない舵取り"をすることで、新しい気付きが生まれます。</p>
                <p>一方、仕事や日常のあらゆる議論は、言い合いや沈黙になりがちです。<br/>AIなどの技術が進歩しても、この問題は解決しません。</p>
                {/* added keyword: ファシリテーションとは */}
                <p>だからこそ今、<span style={{color: 'var(--brand-pink)'}}>ファシリテーションとは何か</span>を理解した、<br/>ファシリテーターの存在が注目されています。</p>
                {/* added keyword: 対話型リーダーシップ */}
                <p>あらゆる場面で活躍するファシリテーターが増えることで、<br/>会社・学校・地域もますます豊かになります。</p>
                <p>あなたもファシリテーターの一人として、<br/>持続可能なコミュニティづくりに貢献してみませんか？</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}