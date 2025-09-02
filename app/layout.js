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
  title: "ハピスク（HAPPISCH）| ファシリテーション力で会話と関係を変える",
  description: "ハピスクは、理論と実践で身につける本格的なファシリテーション力育成プログラム。会社・家庭・学校・地域など、あらゆる場面で活かせる対話力を習得し、会話と関係を変えていきます。",
  keywords: "ファシリテーション, ファシリテーター, 対話力, コミュニケーション, 会話, 関係性, 合意形成, リレーションシップ, ハピスク, HAPPISCH, ハピオブ",
  authors: [{ name: "合同会社ハピオブ" }],
  creator: "合同会社ハピオブ",
  publisher: "合同会社ハピオブ",
  robots: "index, follow",
  openGraph: {
    title: "ハピスク（HAPPISCH）| ファシリテーション力で会話と関係を変える",
    description: "ハピスクは、理論と実践で身につける本格的なファシリテーション力育成プログラム。会社・家庭・学校・地域など、あらゆる場面で活かせる対話力を習得し、会話と関係を変えていきます。",
    url: "https://happisc.com",
    siteName: "ハピスク（HAPPISCH）",
    locale: "ja_JP",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ハピスク（HAPPISCH）ファシリテーション力育成プログラム",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ハピスク（HAPPISCH）| ファシリテーション力で会話と関係を変える",
    description: "ハピスクは、理論と実践で身につける本格的なファシリテーション力育成プログラム。",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://happisc.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="canonical" href="https://happisc.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00A4CC" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${notoSansJP.variable} ${geistMono.variable} antialiased`} style={{fontFamily: 'var(--font-poppins), var(--font-inter), var(--font-noto), "Hiragino Kaku Gothic ProN", "Hiragino Sans", system-ui, sans-serif'}}>
        {children}
        <div className="fixed bottom-3 left-0 right-0 px-4 sm:hidden z-40">
          <div className="mx-auto max-w-md grid grid-cols-2 gap-2">
            <a href="https://forms.gle/MXJqWHQg1JLh5ZDa6" target="_blank" rel="noopener noreferrer" className="btn-teal text-sm py-3">無料説明会</a>
            <a href="https://form.run/@happiob" target="_blank" rel="noopener noreferrer" className="btn-yellow text-sm py-3">お問い合わせ</a>
          </div>
        </div>
      </body>
    </html>
  );
}