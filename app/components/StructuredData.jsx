export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ハピスク（HAPPISCH）",
    "alternateName": "HAPPISCH",
    "description": "ハピスクは、理論と実践で身につける本格的なファシリテーション力育成プログラム。会社・家庭・学校・地域など、あらゆる場面で活かせる対話力を習得し、会話と関係を変えていきます。",
    "url": "https://happisc.com",
    "logo": "https://happisc.com/logo.png",
    "image": "https://happisc.com/og-image.jpg",
    "telephone": "+81-XX-XXXX-XXXX",
    "email": "info@happiob.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP",
      "addressLocality": "東京都"
    },
    "founder": {
      "@type": "Organization",
      "name": "合同会社ハピオブ"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ハピスク カリキュラム",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "ファシリテーターA【合意形成・リレーションシップ】",
          "description": "実践的な場づくり・対話の深化・合意形成スキルの習得",
          "provider": {
            "@type": "Organization",
            "name": "ハピスク（HAPPISCH）"
          }
        },
        {
          "@type": "Course",
          "name": "ファシリテーターB【アイデア・共創】",
          "description": "場づくり・聴く力・問い方・意見の引き出し／白熱する対話の型を習得",
          "provider": {
            "@type": "Organization",
            "name": "ハピスク（HAPPISCH）"
          }
        }
      ]
    },
    "sameAs": [
      "https://happiob.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
