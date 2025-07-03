import { Poppins, M_PLUS_Rounded_1c, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// Poppinsフォントの設定（英字見出し用）
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['600', '700', '800']
});

// M PLUS Rounded 1cフォントの設定（日本語見出し用）
const mplus = M_PLUS_Rounded_1c({
  preload: false,
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mplus'
});

// Noto Sans JPフォントの設定（本文用）
const notoSansJP = Noto_Sans_JP({
  preload: false,
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto'
});

export const metadata = {
  title: 'ハピスク - 新しいリカレント教育プログラム',
  description: '「学歴」ではなく「学習歴」に価値を見出す新しいリカレント教育プログラム',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${poppins.variable} ${mplus.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
