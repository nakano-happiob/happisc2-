'use client';

import CurriculumIntro from './CurriculumIntro';
import CurriculumSubjects from './CurriculumSubjects';
import CurriculumFlow from './CurriculumFlow';
import { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Curriculum() {
  const subjects = [
    {
      title: 'ファシリテーション',
      subtitle: '対話力・合意形成',
      description: 'グループワークや会議を効果的に進行する合意形成スキルを習得'
    },
    {
      title: 'キャリアデザイン',
      subtitle: '自己理解・未来設計',
      description: '自分の価値観と強みを活かしたキャリアプランを設計'
    },
    {
      title: 'AI・テクノロジー',
      subtitle: '生成AI・ChatGPT活用',
      description: '最新のAIツールを活用した業務効率化と創造性向上'
    },
    {
      title: 'コミュニケーション',
      subtitle: '自己開示・傾聴',
      description: '対話を通じた関係構築と信頼関係の醸成'
    },
    {
      title: 'アートディレクション',
      subtitle: '表現力・創造力',
      description: '視覚的な表現を通じたアイデアの具現化と伝達'
    },
    {
      title: 'ファイナンス',
      subtitle: 'お金の見える化・資金計画',
      description: '個人・組織の財務管理と持続可能な事業設計'
    }
  ];

  const programFlow = [
    {
      title: 'テーマインプット',
      time: '30-40分',
      description: '専門講師による最新知識や事例紹介を交えた講義'
    },
    {
      title: 'グループワーク',
      time: '30-40分',
      description: 'ディスカッションや実践的なワークで知識を身につける'
    },
    {
      title: 'ふりかえり・アクション宣言',
      time: '20-30分',
      description: '自分の言葉でまとめ・次の行動へ'
    }
  ];

  const sectionRef = useRef(null);
  const isVisible = useScrollAnimation(sectionRef);
  const programInfo = [
    {
      // icon: '⏰',
      label: '期間',
      text: '3ヶ月（全8回／週1回・各100分）'
    },
    {
      // icon: '💻',
      label: '形式',
      text: 'オンライン＆対面ハイブリッド／少人数クラス制'
    },
    {
      // icon: '📚',
      label: '内容',
      text: '講義＋ワークショップ＋ふりかえり＋ポートフォリオ作成'
    }
  ];

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      className={`section section-gradient-secondary${isVisible ? ' animate-fade-in' : ''}`}
      style={{ padding: 0 }}
    >
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: 0,
        marginBottom: 0
      }}>
        <CurriculumIntro programInfo={programInfo} />
        <CurriculumSubjects subjects={subjects} />
        <CurriculumFlow programFlow={programFlow} />
      </div>
    </section>
  );
} 