'use client';

import { useState } from 'react';

export default function Entry() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const faqs = [
    {
      question: '仕事や家庭と両立できますか？',
      answer: 'はい。全日程のアーカイブ視聴や柔軟な出席方法を用意しています。忙しい方でも安心して参加いただけます。'
    },
    {
      question: 'オンラインだけで参加できますか？',
      answer: '可能です。対面とオンラインのハイブリッド型なので全国どこからでも参加できます。'
    },
    {
      question: 'ポートフォリオは初めてですが大丈夫？',
      answer: '講師やメンターが丁寧にサポートしますのでご安心ください。初心者の方でも安心して取り組めます。'
    },
    {
      question: '受講料はいくらですか？',
      answer: '詳細な料金については、無料説明会でご案内いたします。分割払いにも対応しています。'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="entry" className="section section-gradient">
      <div className="container">
        {/* FAQ セクション */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 6rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>
            よくあるご質問
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card animate-fade-in"
                style={{
                  cursor: 'pointer',
                  animationDelay: `${index * 0.1}s`,
                  textAlign: 'left'
                }}
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease'
                  }}>
                    {activeQuestion === index ? '−' : '+'}
                  </span>
                </div>
                {activeQuestion === index && (
                  <div style={{
                    padding: '0 1rem 1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* エントリーフォーム */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            資料請求・お問い合わせ
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}>
            ハピスクの詳しい資料や、<br />
            無料説明会についてのご案内をお送りします。
          </p>

          <div className="card animate-fade-in">
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  お名前 <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  メールアドレス <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  placeholder="090-1234-5678"
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  ご質問内容
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input"
                  rows="4"
                  placeholder="ご質問やご要望をご記入ください"
                  style={{ resize: 'vertical' }}
                />
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <button type="submit" className="button button-primary">
                  資料請求する
                </button>
                <button type="submit" className="button button-accent">
                  無料説明会に申し込む
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 