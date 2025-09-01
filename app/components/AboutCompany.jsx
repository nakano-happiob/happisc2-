export default function AboutCompany(){
  return (
    <section id="about-company" className="section-space bg-white">
      <div className="container-live">
        <div className="text-center mb-section">
          <h2 className="title-lg">ハピオブについて</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* 左側：ロゴエリア */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 w-full max-w-sm">
              <div className="aspect-square rounded-2xl flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Happiob Company Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* 右側：テキストエリア */}
          <div className="lg:col-span-3 space-y-8">
            {/* ビジョンを上に移動 */}
            <div className="text-center lg:text-left p-6 rounded-xl bg-soft">
              <h3 className="title-md mb-4" style={{color: 'var(--brand-teal)'}}>すべての人が活躍する社会をつくる。</h3>
              <p className="text-lg">ハピスクは、そのビジョンを現場で実装するための対話力育成プログラムです。</p>
            </div>

            {/* 会社説明（ボックスなし） */}
            <div className="space-y-6" style={{fontSize: '18px', lineHeight: '1.7'}}>
              <p>合同会社ハピオブは、<strong style={{color: 'var(--brand-pink)'}}>コミュニケーションの再構築（Communication Rebuild）</strong>を支援する会社です。</p>
              
              
              <p>多くの組織では日々、情報のズレ・伝達の欠如・誤情報などのコミュニケーションエラーが起きています。これらは時に、組織の存続を揺るがすリスクになります。</p>
              <p>原因は一つではありません。コミュニケーション不足や心理的安全性の低さだけでなく、人材配置・採用／育成・人事（評価）制度・共通言語や経営計画書の設計など、組織の条件によって異なります。</p>
              <p>ハピオブは、組織内で起きているエラーの原因を特定し、人材戦略や経営戦略の構築を支援します。その結果として、既存のコミュニケーションの在り方そのものを再構築していくことを目指します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}