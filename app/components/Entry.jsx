'use client';

import React, { useState, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

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

  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="entry"
      ref={sectionRef}
      className={`section section-light${isVisible ? ' animate-fade-in' : ''}`}
      style={{ padding: '8rem 0' }}
    >
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 4rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* FAQ */}
          <div className="card animate-fade-in" style={{
            minHeight: '400px',
            animationDelay: '0.1s'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--primary)',
              textAlign: 'center'
            }}>
              よくあるご質問
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div
                    className="faq-question"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      lineHeight: '1.4'
                    }}>
                      Q. {faq.question}
                    </span>
                    <span style={{
                      fontSize: '1.5rem',
                      transition: 'transform 0.3s ease',
                      transform: activeQuestion === index ? 'rotate(45deg)' : 'none',
                      color: 'var(--primary)',
                      flexShrink: 0
                    }}>
                      +
                    </span>
                  </div>
                  {activeQuestion === index && (
                    <div className="faq-answer animate-fade-in">
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.6'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 無料説明会エントリー受付中！見出しをここに移動 */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            margin: '3rem 0 2rem 0'
          }}>
            <h2 style={{
              marginBottom: '2rem'
            }}>
              無料説明会エントリー受付中！
            </h2>
          </div>

          {/* お問い合わせフォーム */}
          <div className="card animate-fade-in" style={{
            minHeight: '400px',
            animationDelay: '0.1s'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--primary)',
              textAlign: 'center'
            }}>
              資料請求・お問い合わせフォーム
            </h3>
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
                  お名前 <span style={{ color: 'var(--accent)' }}>*</span>
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
                  メールアドレス <span style={{ color: 'var(--accent)' }}>*</span>
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
