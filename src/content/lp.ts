// LP用データ（柔軟な数値型: number | string を許容）

export const hero = {
  headline: "対話力が、未来をつくる。",
  subhead: "「わからない」を可能性にする力を身につけるファシリテーションスクール。",
  lead: [
    "うまく伝わらない、分かり合えない、アイデアが出ない。",
    "そんな行き詰まりをほどくのが、「ファシリテーター」の存在です。",
    "ハピスクは、白熱する対話をつくる力を、理論と実践で身につけるプログラムです。",
    "会社にも、家庭にも、学校にも。正解のないあらゆる場面に活かせる力を身につけられます。",
  ],
  primaryCta: { label: "詳しく聞いてみる（無料説明会）", href: "#apply" },
  secondaryCta: { label: "資料を見る", href: "#download" },
  illustration: { src: "/img/hero-hand-zoom.png", alt: "手元にフォーカスした協働のイラスト" },
};

export const hotDialogueIntro = {
  body: [
    "白熱する対話は、勝ち負けのある議論でも、無難な雑談でもありません。",
    "その場にいる人が安心して本音を出しあい、集中して対話する、そんな時間を通して「何が見えたか」「なにを学んだか」の視野が広がります。",
    "ただ、仕事や日常のあらゆる議論は、言い合いや沈黙になりがちです。",
    "そこで白熱する対話に導く「ファシリテーター」が必要になります。場の安心を守り、対話の焦点を合わせ、ぶつかったエネルギーを気づきと行動へ渡す、“見えない舵取り”をすることで、新しい気付きが生まれます。",
  ],
  note: "",
  diagramAlt: "発散→溜まり→収束の簡易図",
};

export const useCases = {
  categories: [
    {
      key: "work",
      label: "仕事",
      items: [
        { title: "部下との1on1", before: "形式的な面談", after: "本音と課題が言語化できる面談に" },
        { title: "企画・開発会議", before: "議論が平行線", after: "前提の違いを把握し新しい選択肢が生まれる" },
        { title: "チーム形成", before: "衝突を避け成果につながらない", after: "心理的安全性が生まれ、成果につながる" },
      ],
    },
    {
      key: "student",
      label: "学生生活",
      items: [
        { title: "ゼミ／グループワーク", before: "一部の人だけに発言が偏る", after: "全員参加で意見が飛び交う" },
      ],
    },
    {
      key: "community",
      label: "コミュニティ（日常の集まり等）",
      items: [
        { title: "意思決定", before: "対立しがちで疲弊し、議論を諦める", after: "合意に至らなくても納得感が生まれる" },
      ],
    },
    {
      key: "daily",
      label: "日常",
      items: [
        { title: "家庭・友人との話し合い", before: "話がかみ合わず気まずい", after: "違いを認め合い次の具体案が残る" },
      ],
    },
  ],
  cta: { label: "詳しく聞いてみる（無料説明会）", href: "#apply" },
};

export const benefitsPersonal = {
  items: [
    {
      title: "対立を怖がらず話せる",
      result: "関係を崩さず本音を伝え合い、合意点と留保点を分けられる",
      felt: "もやもやが減り、次に何をするかが見える",
      outcome: "誤解が早期に防げて、前向きに切り替えられる",
    },
    {
      title: "初対面・多様な相手でも前に進む",
      result: "相手の前提と期待を素早くつかみ、共通の目的を作れる",
      felt: "冒頭10分で「やる／やらない」が決まり次の一手が定まる",
      outcome: "沈黙や堂々巡りが減り、判断・アイデアが出やすくなる",
    },
    {
      title: "“場を動かせる人”として信頼される",
      result: "「あなたがいると進む」と評価され、任される機会が増える",
      felt: "相談・同席依頼が増え、巻き込み力が強みとして認識される",
      outcome: "指名・紹介のチャンスが広がり、キャリアの選択肢が増える",
    },
  ],
};

export const curriculum = {
  courses: [
    { key: "facilitation", title: "ファシリテーション", goal: "場づくり・聴く力・問い方・意見の引き出し／白熱する対話の型を習得", practice: "10分ミニ進行→フィードバック" },
    { key: "communication", title: "コミュニケーション", goal: "自己開示・傾聴・非言語・伝え方・プレゼン基礎で関係の土台を整える", practice: "傾聴→リフレーズ→一言プレゼン" },
    { key: "career", title: "キャリアデザイン", goal: "自分史の言語化、強みの棚卸し、将来像の設計", practice: "ライフライン・インタビュー" },
    { key: "ai", title: "AIテクノロジー", goal: "AIを用いて発想と作業を拡張する", practice: "AIで問いを広げる・要約する" },
    { key: "positive", title: "ポジティブシンキング", goal: "失敗や不安との向き合い方、認知のクセを認識し挑戦を続ける回復力を身につける", practice: "リフレーミング・ドリル" },
    { key: "art", title: "アートディレクション", goal: "創造性を高め、考えを伝える力を身につける", practice: "会話内容を1枚に図解" },
    { key: "finance", title: "ファイナンス", goal: "意思決定を支えるお金の構造・考え方を学ぶ", practice: "小さな企画の損益スケッチ" },
    { key: "physical", title: "フィジカル", goal: "姿勢・呼吸・生活リズムを整え集中力と健康を手に入れる", practice: "2分呼吸→姿勢リセット" },
    { key: "startup", title: "起業", goal: "アイデアを行動に変える方法を学ぶ", practice: "仮説→検証計画→次の一手" },
  ],
};

export const programSpecs = {
  format: ["オンライン", "対面", "ハイブリッド"],
  capacity: "各回〇〇名" as number | string,
  durationMinutes: "1回〇〇分" as number | string,
  scheduleNote: "週1回×9週間（振替あり）",
  tracks: [
    { name: "ベーシックコース", description: "全講座受講", includes: curriculum.courses.map(c => c.key) },
    { name: "アドバンスコース", description: "選択式", includes: ["facilitation","communication","ai","startup"] },
  ],
  cta: { label: "日程を見る", href: "#apply" },
};

export const faq = {
  items: [
    { q: "ファシリテーターに携わっていなくても参加できますか？", a: "もちろん参加いただけます。ハピスクでは多様な場面で使える「対話の型」が身につきます。" },
    { q: "オンラインでも参加可能ですか？", a: "対面・オンラインのご都合の良い方法で受講可能です。" },
  ],
};

export const aboutCompany = {
  body: [
    "合同会社ハピオブは、コミュニケーションの再構築（Communication Rebuild）を支援する会社です。",
    "多くの組織では日々、情報のズレ・伝達の欠如・誤情報などのコミュニケーションエラーが起きています。これらは時に、組織の存続を揺るがすリスクになります。",
    "原因は一つではありません。コミュニケーション不足や心理的安全性の低さだけでなく、人材配置・採用／育成・人事（評価）制度・共通言語や経営計画書の設計など、組織の条件によって異なります。",
    "ハピオブは、組織内で起きているエラーの原因を特定し、人材戦略や経営戦略の構築を支援します。その結果として、既存のコミュニケーションの在り方そのものを再構築していくことを目指します。",
  ],
  vision: "すべての人が活躍する社会をつくる。",
  brandNote: "ハピスクは、そのビジョンを現場で実装するための対話力育成プログラムです。",
};

export const closing = {
  headline: "会話が変わる。関係が変わる。毎日が動き出す。",
  primaryCta: { label: "今すぐ、無料体験に申し込む", href: "#apply" },
  secondaryCta: { label: "資料を見る", href: "#download" },
};
