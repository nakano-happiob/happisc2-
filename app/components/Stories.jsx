'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Stories() {
  const personas = [
    {
      title: '育休復帰後の社会人',
      description: '子育てと仕事を両立しながら、自分の強みを再発見したい',
      before: '子育てと仕事の両立に悩み、キャリアの方向性を見失っていた',
      after: '自分の価値観を整理し、新しい働き方を実現'
    },
    {
      title: '転職を考える20代',
      description: '自分のやりたいことを整理して、新しい一歩を踏み出したい',
      before: 'やりたいことが漠然としていて、次のステップが決められない',
      after: '明確なキャリアビジョンを持ち、自信を持って転職活動を開始'
    },
    {
      title: 'マネジメントに関わるミドル世代',
      description: '組織づくりや人を巻き込む力を身につけたい',
      before: '会社の中でメンバーをまとめることに苦労していた',
      after: 'ファシリテーションスキルを身につけ、効果的な組織運営を実現'},
    {
      title: '将来に迷う学生',
      description: '学生時代に学んできたことを社会でどう活かせるか知りたい',
      before: '学んだ知識を社会で実践できるかの不安感に悩んでいた',
      after: '自分の知識に磨きをかけ、社会で活躍できる自信を獲得'
    }
  ];

  const testimonials = [
    {
      text: '最初は"自分探し"のつもりで参加しましたが、ワークや対話を通じて思いもよらない可能性に気づきました。ポートフォリオをまとめることで"自分の変化"が可視化され、自信を持って転職活動に臨めました。',
      author: '20代・男性',
      role: '転職成功'
    },
    {
      text: '年代も職種も異なる仲間との交流が新鮮で、学び合いの場の力を感じました。子育てと仕事の悩みを言葉にできたのも大きな収穫です。',
      author: '30代・女性',
      role: 'キャリア再設計'
    }
  ];

  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className={`section section-gradient${isVisible ? ' animate-fade-in' : ''}`}
      style={{ padding: '8rem 0' }}
    >
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
            marginBottom: '1rem'
          }}>
            こんな人に、ハピスク
          </h2>
          {/*
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8'
          }}>
            多様な背景を持つ受講生たちの変化のストーリー
          </p>
          */}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto 4rem'
        }}>
          {personas.map((persona, index) => (
            <div key={index} className="card animate-fade-in" style={{
              minHeight: '400px',
              animationDelay: `${index * 0.1}s`
            }}>
              {/* 育休復帰後の社会人のみ画像を表示 */}
              {index === 0 ? (
                <Image
                  src="/images/ikukyuu.jpg"
                  alt="育休復帰後の社会人"
                  width={360}
                  height={360}
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 2rem',
                    display: 'block'
                  }}
                  priority
                />
              ) : index === 1 ? (
                <Image
                  src="/images/tensyoku.jpg"
                  alt="転職を考える20代"
                  width={360}
                  height={360}
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 2rem',
                    display: 'block'
                  }}
                  priority
                />
              ) : index === 2 ? (
                <Image
                  src="/images/management.jpg"
                  alt="マネジメントに関わるミドル世代"
                  width={360}
                  height={360}
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 2rem',
                    display: 'block'
                  }}
                  priority
                />
              ) : index === 3 ? (
                <Image
                  src="/images/Whisk_edaf989215.jpg"
                  alt="将来に迷う学生"
                  width={360}
                  height={360}
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 2rem',
                    display: 'block'
                  }}
                  priority
                />
              ) : (
                <div className="image-placeholder" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  margin: '0 auto 2rem',
                  display: 'block'
                }} />
              )}
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--primary)',
                textAlign: 'center',
                lineHeight: '1.4'
              }}>
                {persona.title}
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontSize: '1.15rem',
                fontWeight: '500'
              }}>
                「{persona.description}」
              </p>

              <div style={{
                background: '#F3F4F6',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                minHeight: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {persona.before}
                </p>
              </div>

              {/* ↓矢印を中央揃えで追加 */}
              <div style={{
                textAlign: 'center',
                fontSize: '2rem',
                color: 'var(--primary)',
                margin: '0.5rem 0'
              }}>
                ↓
              </div>

              <div style={{
                background: 'var(--gradient-accent)',
                padding: '1rem',
                borderRadius: '8px',
                flex: 1,
                minHeight: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {persona.after}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*
        <div style={{
          marginTop: '6rem',
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>
            受講生の声
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card animate-fade-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: 'var(--primary)',
                  marginBottom: '1rem'
                }}>
                  "
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  color: 'var(--text-secondary)',
                  flex: 1
                }}>
                  {testimonial.text}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--primary)'
                  }}>
                    {testimonial.author}
                  </p>
                  <span className="label">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
} 