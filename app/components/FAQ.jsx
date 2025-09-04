export default function FAQ(){
  const faqs = [
    {
      q: "ファシリテーターに携わっていなくても参加できますか？",
      a: "もちろん参加いただけます。ハピスクでは多様な場面で使える「対話の型」が身につきます。"
    },
    {
      q: "オンラインでも参加可能ですか？",
      a: "対面・オンラインのご都合の良い方法で受講可能です。"
    },
    {
      q: "ファシリテーションとファシリテーターの違いは何ですか？",
      a: "ファシリテーションは、日常の会話や話し合いにも使える「場を進める技術」です。ファシリテーターは、その技術を専門にして「仕事として場を導く人」のことです。"
    },
    {
      q: "一般的な「話し方講座」とは何が違うのですか？",
      a: "話し方講座が「言葉の選び方や発声」に重点を置くのに対し、ハピスクでは「場の関係性や対話のプロセス」を扱います。"
    },
    {
      q: "受講料の支払い方法について教えてください。",
      a: "個人の方は銀行振込、法人の方は請求書払い（他、会社名義でのお支払いも可）に対応しています。クレジットカードやPayPalでのお支払いは近日対応予定です。"
    }
  ];
  
  return (
    <section id="faq" className="section-space bg-white">
      <div className="container-live">
        <div className="text-center mb-section">
          <h2 className="title-lg">よくある質問</h2>
        </div>
        <div className="content-width">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card-white">
                <h3 className="text-lg font-bold mb-4">Q. {faq.q}</h3>
                <br/>
                <p className="text-unified" style={{color: '#14B8A6', fontSize: '20px'}}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}