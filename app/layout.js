import './globals.css';

export const metadata = {
  title: 'ハピスク - 学歴より、学習歴。',
  description: '「学歴」ではなく「学習歴」に価値を見出す新しいリカレント教育プログラム',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&family=Montserrat:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
