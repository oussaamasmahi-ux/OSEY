
import React from 'react';

interface HomeViewProps {
  lang: string;
  t: any;
  currentWallpaper?: string;
}

const HomeView: React.FC<HomeViewProps> = ({ lang, t, currentWallpaper }) => {
  const prayers = [
    { name: lang === 'ar' ? 'الفجر' : 'Fajr', time: '04:45 AM', active: false },
    { name: lang === 'ar' ? 'الظهر' : 'Dhuhr', time: '12:15 PM', active: true },
    { name: lang === 'ar' ? 'العصر' : 'Asr', time: '03:45 PM', active: false },
    { name: lang === 'ar' ? 'المغرب' : 'Maghrib', time: '06:30 PM', active: false },
    { name: lang === 'ar' ? 'العشاء' : 'Isha', time: '08:00 PM', active: false }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-4">
      {/* Prayer Times Card with Specialized Background */}
      <div className="relative rounded-[2rem] p-7 shadow-2xl overflow-hidden border border-white/10 group">
        {/* Card Background Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-110 group-hover:scale-100"
          style={{ 
            backgroundImage: `url('${currentWallpaper || "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800"}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 to-emerald-900/40 backdrop-blur-sm"></div>

        <div className="relative z-10 flex justify-between items-start mb-8">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              {t.nextPrayer}
            </span>
            <h3 className="text-4xl font-black text-white leading-tight">الظهر <span className="text-lg opacity-60 font-normal">12:15</span></h3>
          </div>
          <div className="glass px-4 py-2 rounded-2xl flex flex-col items-center border-white/10">
            <span className="text-[10px] text-white/60 font-bold mb-1 uppercase tracking-tighter">متبقي</span>
            <span className="text-emerald-400 font-black text-sm tabular-nums tracking-tighter">02:15:44</span>
          </div>
        </div>
        
        <div className="relative z-10 grid grid-cols-5 gap-3">
          {prayers.map((prayer, i) => (
            <div key={i} className={`flex flex-col items-center py-4 rounded-2xl transition-all duration-500 ${prayer.active ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 -translate-y-1' : 'bg-white/5 text-slate-300'}`}>
              <span className="text-[9px] font-black uppercase mb-1.5 tracking-tighter">{prayer.name}</span>
              <span className="text-[10px] font-bold opacity-80">{prayer.time.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass rounded-[2rem] p-6 flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
          <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black dark:text-white">28°C</span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">مشمس • مكة</span>
          </div>
        </div>
        
        <div className="glass rounded-[2rem] p-6 flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
             <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black dark:text-white leading-none">15 شعبان</span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter mt-1">1446 هـ</span>
          </div>
        </div>
      </div>

      {/* Quote/Dua of the day */}
      <div className="glass rounded-[2rem] p-8 text-center relative overflow-hidden group border border-white/5">
        <div className="absolute top-2 left-4 text-emerald-500/10 text-6xl font-serif">"</div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full mb-5">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
          </div>
          <h3 className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-4">{t.dailyDua}</h3>
          <p className="amiri text-2xl leading-relaxed text-slate-800 dark:text-white/90">
            "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
          </p>
          <div className="mt-8 flex gap-3">
             <button className="px-6 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">مشاركة</button>
             <button className="px-6 py-2 glass text-emerald-500 rounded-xl text-xs font-bold active:scale-95 transition-all">حفظ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
