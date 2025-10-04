export default function FirstTermSchedule(){
  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#0F172A'}}>
            第1期 開講予定日
          </h2>
          <p className="text-lg mb-8" style={{color: '#475569'}}>
            2026年1月〜3月開催予定
          </p>
        </div>

        {/* コースタイトル */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8" style={{color: '#3B82F6'}}>
              エントリーコース
            </h3>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8" style={{color: '#8B5CF6'}}>
              アドバンスコース
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 左側：エントリーコース */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>1月14日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>1月21日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>1月28日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：アドバンスコース */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>2月11日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>2月18日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>2月25日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>3月11日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-6 mt-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-semibold mb-1" style={{color: '#0F172A'}}>3月18日（水）</p>
                  <p className="text-lg" style={{color: '#475569'}}>19:00-20:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
