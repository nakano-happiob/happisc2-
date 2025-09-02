'use client';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-dark)',
      color: 'white',
      padding: '4rem 0 3rem',
      minHeight: '200px'
    }}>
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 4rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* ロゴ・会社情報 */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              fontFamily: 'Montserrat',
              fontWeight: '800',
              letterSpacing: '-0.5px'
            }}>
              HAPISQ
            </h3>
            <div style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8'
            }}>
              <p>運営：合同会社ハピオブ</p>
              <p>所在地：富山県富山市○○○</p>
              <p>お問い合わせ：info@hapisq.com</p>
              <p>電話：076-XXX-XXXX</p>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              ナビゲーション
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {[
                { name: 'About', href: '#about' },
                { name: 'Journey', href: '#journey' },
                { name: 'Curriculum', href: '#curriculum' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Stories', href: '#stories' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* SNSリンク */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              SNS
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {[
                { name: 'X', href: '#', icon: '𝕏' },
                { name: 'Facebook', href: '#', icon: '📘' },
                { name: 'Instagram', href: '#', icon: '📷' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{social.icon}</span>
                  <span style={{ fontSize: '0.9rem' }}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* リーガル */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>
              リーガル
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {[
                { name: '利用規約', href: '#' },
                { name: 'プライバシーポリシー', href: '#' },
                { name: '特定商取引法に基づく表記', href: '#' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          © {new Date().getFullYear()} HAPISQ by Happiob LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 