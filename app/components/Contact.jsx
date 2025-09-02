'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "仕事や子育てと両立できますか？",
    answer: "はい、可能です。オンラインでの受講や録画視聴、柔軟なスケジュール調整など、ご自身のペースで学習を進められる環境を整えています。"
  },
  {
    question: "オンラインだけでも参加可能ですか？",
    answer: "はい、完全オンラインでの受講も可能です。ただし、より効果的な学習のため、可能な範囲でオフラインの交流会やワークショップへの参加をお勧めしています。"
  },
  {
    question: "受講料はどのくらいですか？",
    answer: "プログラムにより異なりますが、基本コースは月額3万円からご用意しています。詳細は無料説明会や資料でご確認いただけます。"
  },
  {
    question: "修了後のサポートはありますか？",
    answer: "はい。修了後も継続的に学習コミュニティに参加でき、キャリア相談や学習相談を受けることができます。また、定期的な交流会やイベントにもご参加いただけます。"
  }
];

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信処理
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section section-light" style={{
      padding: '8rem 0'
    }}>
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 4rem',
        marginBottom: '5rem'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '1rem'
          }}>
            お問い合わせ
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            lineHeight: '2'
          }}>
            ハピスクについてのご質問や、<br />
            プログラムの詳細についてお気軽にお問い合わせください。
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* お問い合わせフォーム */}
          <div className="card animate-fade-in" style={{
            minHeight: '400px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--primary)'
            }}>
              お問い合わせフォーム
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
                  fontWeight: '500'
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
                  fontWeight: '500'
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
                  fontWeight: '500'
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
                  fontWeight: '500'
                }}>
                  お問い合わせ内容 <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input"
                  rows="5"
                  placeholder="ご質問やご要望をご記入ください"
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="button button-primary" style={{
                marginTop: '1rem'
              }}>
                送信する
              </button>
            </form>
          </div>

          {/* 連絡先情報 */}
          <div className="card animate-fade-in" style={{
            minHeight: '400px',
            animationDelay: '0.1s'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--primary)'
            }}>
              連絡先情報
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  合同会社ハピオブ
                </h4>
                <div style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.8',
                  color: 'var(--text-light)'
                }}>
                  <p>〒930-0000</p>
                  <p>富山県富山市○○○</p>
                </div>
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  お電話でのお問い合わせ
                </h4>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  color: 'var(--primary)'
                }}>
                  076-XXX-XXXX
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  marginTop: '0.5rem'
                }}>
                  平日 9:00-18:00
                </p>
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  メールでのお問い合わせ
                </h4>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  color: 'var(--primary)'
                }}>
                  info@hapisq.com
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  marginTop: '0.5rem'
                }}>
                  24時間受付（返信は営業時間内）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 