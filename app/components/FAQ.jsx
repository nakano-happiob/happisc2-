"use client";

import { useState } from 'react';

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

  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggleFAQ = (index) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
  return (
    <section id="faq" className="section-space bg-transparent">
      <div className="container-live">
        <div className="text-center mb-section">
          <h2 className="title-lg">よくある質問</h2>
        </div>
        <div className="content-width">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="text-lg font-bold text-gray-900">Q. {faq.q}</h3>
                  <span className={`text-lg text-gray-400 transition-transform duration-200 ${openIndexes.has(i) ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndexes.has(i) && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="leading-relaxed" style={{fontSize: '20px'}}>
                      <span className="text-gray-700">A. </span>
                      <span style={{color: '#14B8A6'}}>{faq.a}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}