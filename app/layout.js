import { Geist_Mono, Inter, Noto_Sans_JP, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ハピスク（HAPPISCH）｜ファシリテーションで毎日が変わる、関係が動き出す。',
  description: 'ハピスク（HAPPISCH）は、ファシリテーションを通じて会話・関係・学びを変えていくスクールです。無料説明会お申込受付中。',
  keywords: 'ハピスク,HAPPISCH,はぴすく,ﾊﾋﾟｽｸ,ハピスク ファシリテーション,ハピスク スクール,ハピスク オンライン,ハピスク 無料説明会,ハピオブ,ファシリテーション,ファシリテーター,コミュニケーション,対話力,会話,関係性,スクール,研修,オンライン,無料説明会,リカレント教育,大人の学び,スキルアップ',
  openGraph: {
    title: 'ハピスク（HAPPISCH）｜ファシリテーションで毎日が変わる、関係が動き出す。',
    description: 'ハピスク（HAPPISCH）は、ファシリテーションを通じて会話・関係・学びを変えていくスクールです。無料説明会お申込受付中。',
    type: 'website',
    url: 'https://happisch.com',
    siteName: 'ハピスク（HAPPISCH）',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ハピスク（HAPPISCH）｜ファシリテーションで毎日が変わる、関係が動き出す。',
    description: 'ハピスク（HAPPISCH）は、ファシリテーションを通じて会話・関係・学びを変えていくスクールです。無料説明会お申込受付中。',
  },
  alternates: {
    canonical: 'https://happisch.com'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="ハピオブ" />
        <meta name="publisher" content="ハピオブ" />
        <meta name="copyright" content="ハピオブ" />
        <meta name="theme-color" content="#14B8A6" />
        <meta name="msapplication-TileColor" content="#14B8A6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ハピスク" />
        <link rel="canonical" href="https://happisch.com" />
        <link rel="alternate" type="application/rss+xml" title="ハピスク RSS" href="/rss.xml" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${notoSansJP.variable} ${geistMono.variable} antialiased`} style={{fontFamily: 'var(--font-poppins), var(--font-inter), var(--font-noto), "Hiragino Kaku Gothic ProN", "Hiragino Sans", system-ui, sans-serif'}}>
        {children}
        <div className="fixed bottom-3 left-0 right-0 px-4 sm:hidden z-40">
          <div className="mx-auto max-w-md grid grid-cols-2 gap-2">
            <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="btn-teal text-sm py-3">無料説明会</a>
            <a href="#download" className="btn-yellow text-sm py-3">お問い合わせ</a>
          </div>
        </div>
      </body>
    </html>
  );
}
