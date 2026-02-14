
import React, { useState, useEffect } from 'react';

interface HomeViewProps {
  lang: string;
  t: any;
  currentWallpaper?: string;
}

const HomeView: React.FC<HomeViewProps> = ({ lang, t, currentWallpaper }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const prayers = [
    { name: lang === 'ar' ? 'الفجر' : 'Fajr', time: '04:45 AM', active: false },
    { name: lang === 'ar' ? 'الظهر' : 'Dhuhr', time: '12:15 PM', active: true },
    { name: lang === 'ar' ? 'العصر' : 'Asr', time: '03:45 PM', active: false },
    { name: lang === 'ar' ? 'المغرب' : 'Maghrib', time: '06:30 PM', active: false },
    { name: lang === 'ar' ? 'العشاء' : 'Isha', time: '08:00 PM', active: false }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-4 pb-10">
      {/* Prayer Times Card */}
      <div className="relative rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-white/10 group">
        <div 
          className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-110 group-hover:scale-100"
          style={{ 
            backgroundImage: `url('${currentWallpaper || "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800"}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)'
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/80 via-black/40 to-emerald-900/40 backdrop-blur-md"></div>

        <div className="relative z-10 flex justify-between items-center mb-10">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.nextPrayer}
            </span>
            <h3 className="text-4xl font-black text-white leading-tight">الظهر</h3>
            <span className="text-white/40 text-xs font-bold uppercase">12:15 PM • مكة المكرمة</span>
          </div>
          <div className="glass px-5 py-3 rounded-2xl flex flex-col items-center border-white/10 shadow-inner">
            <span className="text-[9px] text-white/50 font-black mb-1 uppercase tracking-tighter">متبقي</span>
            <span className="text-emerald-400 font-black text-lg tabular-nums tracking-tighter">02:15:44</span>
          </div>
        </div>
        
        <div className="relative z-10 grid grid-cols-5 gap-2">
          {prayers.map((prayer, i) => (
            <div key={i} className={`flex flex-col items-center py-5 rounded-2xl transition-all duration-500 border ${prayer.active ? 'bg-emerald-500 border-emerald-400 text-white shadow-xl shadow-emerald-500/40 -translate-y-2' : 'bg-white/5 border-white/5 text-slate-400'}`}>
              <span className="text-[8px] font-black uppercase mb-1.5 tracking-tight">{prayer.name}</span>
              <span className="text-[10px] font-bold opacity-90">{prayer.time.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass rounded-[2rem] p-6 flex items-center gap-4 group hover:border-emerald-500/30 transition-all border border-white/5">
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
        
        <div className="glass rounded-[2rem] p-6 flex items-center gap-4 group hover:border-emerald-500/30 transition-all border border-white/5">
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
      <div className="glass rounded-[2.5rem] p-8 text-center relative overflow-hidden group border border-emerald-500/10">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <svg className="w-24 h-24 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
           </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{t.dailyDua}</h3>
          <p className="amiri text-2xl leading-relaxed text-slate-800 dark:text-white/90">
            "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
          </p>
          <div className="mt-8 flex gap-3">
             <button className="px-8 py-2.5 bg-emerald-500 text-white rounded-2xl text-xs font-black shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">مشاركة</button>
             <button className="px-8 py-2.5 glass text-emerald-500 rounded-2xl text-xs font-black active:scale-95 transition-all">حفظ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
