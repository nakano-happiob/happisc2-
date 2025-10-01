"use client";

export default function Header(){
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50" style={{borderBottom: '1px solid #E0E0E0'}}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 min-w-0">
            <img src="/logo.png" alt="Happiob Logo" className="h-8 lg:h-10 mr-2 lg:mr-3 flex-shrink-0" />
            <span className="text-lg lg:text-xl font-bold whitespace-nowrap" style={{color: '#333333'}}>HAPPISCH</span>
          </div>
          
          <nav className="hidden xl:flex items-center space-x-4 lg:space-x-6 mx-4 lg:mx-8">
            <a href="#hero" className="nav-link text-sm font-medium">ホーム</a>
            <a href="#about" className="nav-link text-sm font-medium">ファシリテーターとは</a>
            <a href="#usecases" className="nav-link text-sm font-medium">活用場面</a>
            <a href="#program" className="nav-link text-sm font-medium">学習コース</a>
            <a href="#curriculum" className="nav-link text-sm font-medium">カリキュラム</a>
            <a href="#benefits" className="nav-link text-sm font-medium">特徴</a>
            <a href="#faq" className="nav-link text-sm font-medium">FAQ</a>
            <a href="#about-company" className="nav-link text-sm font-medium">会社情報</a>
          </nav>
          
          <div className="flex items-center space-x-2 flex-shrink-0">
            <a href="https://forms.gle/2hrPf8UR7rpYcK718" target="_blank" rel="noopener noreferrer" className="btn-pink text-sm px-3 lg:px-4 py-2 whitespace-nowrap">無料説明会</a>
            <a href="https://form.run/@happiob" target="_blank" rel="noopener noreferrer" className="btn-yellow text-sm px-3 lg:px-4 py-2 whitespace-nowrap">お問い合わせ</a>
          </div>
        </div>
      </div>
    </header>
  );
}