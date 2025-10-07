export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ハピスク（HAPPISCH）",
    "alternateName": [
      "HAPPISCH",
      "はぴすく",
      "ﾊﾋﾟｽｸ",
      "ハピスク",
      "ハピオブ スクール",
      "ファシリテーションスクール ハピスク"
    ],
    "description": "ファシリテーションを通じて会話・関係・学びを変えていくスクール。オンライン・対面で受講可能。",
    "url": "https://happisch.com",
    "logo": "https://happisch.com/logo.png",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@happiob.com",
      "contactType": "customer service"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ハピスクプログラム",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "ファシリテーション",
          "description": "場づくり・聴く力・問い方・意見の引き出しを習得"
        },
        {
          "@type": "Course", 
          "name": "フィジカルトレーナー",
          "description": "姿勢・呼吸・生活リズムを整え集中力と健康を手に入れる"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "無料説明会",
      "url": "https://forms.gle/2hrPf8UR7rpYcK718"
    },
    "keywords": [
      "ハピスク",
      "HAPPISCH",
      "はぴすく",
      "ﾊﾋﾟｽｸ",
      "ファシリテーション",
      "ファシリテーター",
      "オンラインスクール",
      "リカレント教育",
      "大人の学び",
      "コミュニケーション",
      "対話力"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
