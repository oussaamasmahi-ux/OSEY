
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { TRANSLATIONS, WALLPAPERS } from './constants.ts';
import { Language, AppState } from './types.ts';
import HomeView from './components/HomeView.tsx';
import QuizView from './components/QuizView.tsx';
import AzkarView from './components/AzkarView.tsx';
import WirdView from './components/WirdView.tsx';
import SettingsView from './components/SettingsView.tsx';
import Navigation from './components/Navigation.tsx';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(() => {
    // محاولة استعادة الإعدادات من LocalStorage
    const saved = localStorage.getItem('osey_islamk_state');
    if (saved) return JSON.parse(saved);
    return {
      lang: 'ar',
      isDark: true,
      activeTab: 'home',
      wallpaperIndex: 0
    };
  });

  const [isLoading, setIsLoading] = useState(true);

  // حفظ الإعدادات تلقائياً
  useEffect(() => {
    localStorage.setItem('osey_islamk_state', JSON.stringify(appState));
  }, [appState]);

  // تحديث الخلفية والوضع الليلي في الـ DOM مباشرة (أسرع وأضمن)
  useLayoutEffect(() => {
    const bgLayer = document.getElementById('bg-layer');
    if (bgLayer) {
      bgLayer.style.backgroundImage = `url("${WALLPAPERS[appState.wallpaperIndex]}")`;
    }
    
    if (appState.isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    
    document.documentElement.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = appState.lang;
  }, [appState.wallpaperIndex, appState.isDark, appState.lang]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#020617] z-[100] flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-emerald-500 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-black text-white tracking-[0.2em] loader-logo uppercase">Osey Islamk</h2>
        <p className="mt-2 text-emerald-500/60 text-[10px] font-bold tracking-widest uppercase">الرفيق الروحي الرقمي</p>
      </div>
    );
  }

  const t = TRANSLATIONS[appState.lang];

  const renderContent = () => {
    switch (appState.activeTab) {
      case 'home': return <HomeView lang={appState.lang} t={t} currentWallpaper={WALLPAPERS[appState.wallpaperIndex]} />;
      case 'quiz': return <QuizView lang={appState.lang} t={t} />;
      case 'azkar': return <AzkarView lang={appState.lang} t={t} />;
      case 'wird': return <WirdView lang={appState.lang} t={t} />;
      case 'settings': return <SettingsView appState={appState} setAppState={setAppState} t={t} wallpapers={WALLPAPERS} />;
      default: return <HomeView lang={appState.lang} t={t} currentWallpaper={WALLPAPERS[appState.wallpaperIndex]} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col transition-all duration-500">
      {/* الهيدر شفاف فوق المحتوى */}
      <header className="sticky top-0 z-40 px-6 pt-10 pb-4 backdrop-blur-md bg-transparent flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black bg-gradient-to-l from-emerald-400 to-teal-100 bg-clip-text text-transparent">
            {t.appName}
          </h1>
          <span className="text-[9px] text-emerald-400/70 font-bold uppercase tracking-widest">Spiritual Companion</span>
        </div>
        
        <button 
          onClick={() => setAppState(s => ({...s, isDark: !s.isDark}))}
          className="w-11 h-11 glass rounded-2xl flex items-center justify-center text-emerald-400 hover:scale-110 active:scale-90 transition-all shadow-xl"
        >
          {appState.isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </header>

      <main className="flex-1 px-5 pb-36 overflow-y-auto scrollbar-hide pt-2">
        {renderContent()}
        
        <div className="py-12 text-center opacity-40">
           <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
             By <span className="text-emerald-500">Osey Vet Design</span>
           </p>
        </div>
      </main>

      <Navigation activeTab={appState.activeTab} onTabChange={(tab) => setAppState(prev => ({...prev, activeTab: tab}))} t={t} />
    </div>
  );
};

export default App;
