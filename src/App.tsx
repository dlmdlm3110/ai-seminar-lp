import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Zap,
  GraduationCap,
  Trophy
} from 'lucide-react';
const App: React.FC = () => {
  // CORRECTED: Changed /edit to /viewform so users can submit the form
  const FORM_URL = "https://docs.google.com/forms/d/1SdVnk-hPYvTgWS0bFfaKbMReLxPc2VGGZWI25GIx4S8/viewform";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed w-full z-40 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-black text-xl tracking-tighter italic">
            <span className="text-cyan-400">AI</span><span className="text-white">×</span><span className="text-fuchsia-500">BUSINESS</span>
          </div>
          <a 
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(217,70,239,0.5)]"
          >
            申し込む
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-28 pb-20 sm:pt-40 sm:pb-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-bold text-sm sm:text-base animate-pulse">
            初心者向け・10名限定
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="block text-white mb-2 text-2xl sm:text-3xl font-bold tracking-normal">いまさら聞けない</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-cyan-400 neon-text-blue block mb-2">
              AI × ビジネス
            </span>
            <span className="block text-3xl sm:text-5xl text-white">活用セミナー</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            AI活用で広がる未来の可能性。<br className="sm:hidden" />
            「なんとなく知っている」を<br className="sm:hidden" />
            「仕事で使える」に変える90分。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 flex items-center gap-3">
              <Calendar className="text-fuchsia-500 w-6 h-6" />
              <div className="text-left">
                <span className="text-xs text-slate-400 block">開催日</span>
                <span className="font-bold text-xl font-mono">2025.12.13 (Sat)</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 flex items-center gap-3">
               <Clock className="text-cyan-500 w-6 h-6" />
               <div className="text-left">
                <span className="text-xs text-slate-400 block">時間</span>
                <span className="font-bold text-xl font-mono">13:20 - 14:30</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:scale-105 shadow-[0_0_30px_rgba(8,145,178,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative text-lg mr-2">今すぐ席を確保する</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </a>
            <p className="mt-3 text-sm text-slate-500">※定員に達し次第、締め切らせていただきます</p>
          </div>
        </div>
      </header>

      {/* Problem / Agitation Section */}
      <section className="py-20 bg-slate-900 clip-path-slant relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <AlertCircle className="text-yellow-500 w-8 h-8" />
              <span className="text-white">こんな悩みはありませんか？</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AIに興味はあるが、何から始めていいかわからない",
              "仕事や創作活動にAIを活かしたい",
              "ネットの情報だけでなく、直接会って疑問を解決したい"
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition duration-300">
                <div className="w-10 h-10 bg-slate-950 rounded-full flex items-center justify-center mb-4 text-cyan-400 font-bold border border-slate-700 mx-auto md:mx-0">
                  {i + 1}
                </div>
                <p className="font-medium text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Content Section */}
      <section className="py-24 bg-[#020617] relative">
         <div className="max-w-5xl mx-auto px-4">
          {/* Layout changed to single column centered with strict alignment classes */}
          <div className="flex flex-col gap-20 items-center w-full">
            
            <div className="w-full text-center flex flex-col items-center">
               <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-snug text-center">
                 <span className="text-fuchsia-500">90分</span>で<br />
                 AIを<span className="text-cyan-400 underline decoration-4 decoration-cyan-400/30 underline-offset-4">最強のパートナー</span>にする。
               </h2>
               <p className="text-slate-400 mb-10 leading-relaxed text-lg max-w-2xl mx-auto text-center">
                 難しい専門用語は使いません。明日から使える実践的なテクニックを中心に、
                 ビジネス現場での具体的な活用事例をご紹介します。
               </p>
               <div className="inline-block text-left bg-slate-900/50 p-6 rounded-2xl border border-slate-800 max-w-3xl w-full mx-auto">
                 <ul className="grid sm:grid-cols-2 gap-4">
                   {[
                     "ChatGPT・Geminiの基本操作と違い",
                     "劇的に業務効率が上がるプロンプト",
                     "AIを使ったアイデア出しと資料作成",
                     "質疑応答＆個別相談タイム"
                   ].map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                       <span className="text-lg font-medium">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
            
            {/* Lecturer Profile Section - Centered Layout */}
            <div className="w-full max-w-3xl relative mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 rounded-[2rem] blur-lg opacity-40"></div>
              <div className="bg-[#0f172a] border border-slate-700 rounded-[2rem] p-8 md:p-12 relative shadow-2xl text-center">
                 
                 <div className="flex flex-col items-center gap-6 mb-8">
                   <div className="relative group">
                     <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
                     <div className="relative w-36 h-36 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center shadow-inner ring-4 ring-[#0f172a]">
                        <GraduationCap className="w-16 h-16 text-white" />
                     </div>
                   </div>
                   <div className="flex-1 w-full">
                     <h3 className="text-3xl sm:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100 neon-text-blue text-center">
                       齊藤 友二
                     </h3>
                     <p className="text-cyan-400 font-bold mb-1 text-lg text-center">AIビジネスコンサルタント</p>
                     <p className="text-cyan-400 font-bold mb-6 text-lg text-center">ChatGPT活用コンサルタント</p>
                     <p className="text-slate-300 leading-relaxed max-w-xl mx-auto text-center">
                       AIビジネス支援パートナーとして、中小企業の皆様にAI活用のノウハウを提供しています。
                     </p>
                   </div>
                 </div>

                 <div className="bg-slate-900/80 rounded-xl border border-slate-700 p-8 text-left max-w-2xl mx-auto">
                    <h4 className="flex items-center justify-center gap-2 text-lg font-bold text-cyan-400 mb-6 border-b border-slate-700 pb-2">
                      <Trophy className="w-5 h-5" />
                      実績・経験
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-500 font-bold">›</span>
                        <span>2022年NFTバブルからAI活用を開始</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-500 font-bold mt-1">›</span>
                        <div>
                          <span className="font-bold text-white block mb-1">AIアプリ開発実績10以上</span>
                          <span className="text-sm text-slate-400 block pl-2 border-l-2 border-slate-700">
                            口コミレビューアプリ / 位置情報共有アプリ / 運賃見積もり計算アプリ / 沖縄バリアフリー旅行プランナー / 龍体文字占いアプリ など
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-500 font-bold">›</span>
                        <span>AIコミュニティで定期的に勉強会を開催</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-500 font-bold">›</span>
                        <span>中小企業経営者向けAI活用セミナー多数実施</span>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
         </div>
      </section>

      {/* Details & Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-[#020617] border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">開催概要・参加費</h2>
          
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid gap-6 text-left relative z-10">
              <div className="flex items-start gap-4 pb-6 border-b border-slate-700">
                <MapPin className="text-cyan-400 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">会場</h4>
                  <p className="text-xl font-bold">北谷商工会議所</p>
                  <p className="text-slate-400 text-sm mt-1">沖縄県中頭郡北谷町上勢頭837-1</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-6 border-b border-slate-700">
                <Users className="text-cyan-400 w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">定員</h4>
                  <p className="text-xl font-bold">10名限定 <span className="text-sm font-normal text-fuchsia-400 ml-2">※残りわずか</span></p>
                </div>
              </div>

              <div className="mt-4 p-6 bg-slate-900/80 rounded-2xl border border-cyan-500/30">
                <div className="flex justify-between items-center mb-2 opacity-50">
                  <span className="text-slate-300">一般価格</span>
                  <span className="text-xl line-through decoration-red-500 decoration-2">¥2,500</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#06C755] text-white px-2 py-1 rounded text-xs font-bold">公式LINE登録特典</span>
                    <span className="text-cyan-400 font-bold">早期割引価格</span>
                  </div>
                  <div className="text-5xl font-black italic tracking-tighter text-white neon-text-pink">
                    ¥1,500
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold text-xl py-5 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <Zap className="w-6 h-6 fill-current" />
                割引価格で申し込む
              </a>
              <p className="mt-4 text-xs text-slate-500">
                ※申し込みフォームへ移動します。
                <br />※当日、会場にて現金またはPayPayでお支払いください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#020617]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: "AIを全く使ったことがありませんが大丈夫ですか？", a: "はい、大歓迎です！アカウントの作成方法から丁寧に解説します。" },
              { q: "パソコンは必要ですか？", a: "スマートフォンだけでもご参加いただけますが、PCをお持ちいただくとより実践的な操作が可能です。" },
              { q: "キャンセル料はかかりますか？", a: "前日までのキャンセルは無料です。当日のキャンセルは100%頂戴しております。" }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-cyan-400 mb-2">Q. {faq.q}</h3>
                <p className="text-slate-300">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-10 text-center">
        <p className="text-slate-500 text-sm">
          © 2025 AI Business Seminar. All rights reserved.<br />
          主催：北谷AI活用推進委員会
        </p>
      </footer>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-slate-900/90 backdrop-blur border-t border-slate-700 sm:hidden z-30">
        <a 
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg shadow-lg flex justify-center items-center gap-2"
        >
          申し込む (¥1,500)
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default App;
