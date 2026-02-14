
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, WALLPAPERS } from './constants.ts';
import { Language, AppState } from './types.ts';
import HomeView from './components/HomeView.tsx';
import QuizView from './components/QuizView.tsx';
import AzkarView from './components/AzkarView.tsx';
import WirdView from './components/WirdView.tsx';
import SettingsView from './components/SettingsView.tsx';
import Navigation from './components/Navigation.tsx';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    lang: 'ar',
    isDark: true,
    activeTab: 'home',
    wallpaperIndex: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل بسيط لضمان جاهزية الواجهة
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (appState.isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [appState.isDark]);

  useEffect(() => {
    document.documentElement.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = appState.lang;
  }, [appState.lang]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-emerald-500">
        <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
        <h2 className="text-xl font-bold tracking-widest animate-pulse">OSEY ISLAMK</h2>
      </div>
    );
  }

  const t = TRANSLATIONS[appState.lang];
  const currentWallpaperUrl = WALLPAPERS[appState.wallpaperIndex];

  const renderContent = () => {
    switch (appState.activeTab) {
      case 'home': return <HomeView lang={appState.lang} t={t} currentWallpaper={currentWallpaperUrl} />;
      case 'quiz': return <QuizView lang={appState.lang} t={t} />;
      case 'azkar': return <AzkarView lang={appState.lang} t={t} />;
      case 'wird': return <WirdView lang={appState.lang} t={t} />;
      case 'settings': return <SettingsView appState={appState} setAppState={setAppState} t={t} wallpapers={WALLPAPERS} />;
      default: return <HomeView lang={appState.lang} t={t} currentWallpaper={currentWallpaperUrl} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col transition-colors duration-500 overflow-x-hidden">
      <div className="bg-app" style={{ backgroundImage: `url('${currentWallpaperUrl}')` }}></div>
      <div className="bg-overlay"></div>

      <header className="sticky top-0 z-30 px-6 pt-8 pb-4 backdrop-blur-md bg-transparent flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black bg-gradient-to-l from-emerald-400 to-teal-200 bg-clip-text text-transparent tracking-tight">
            {t.appName}
          </h1>
          <span className="text-[10px] text-emerald-500/80 font-bold uppercase tracking-widest">spiritual companion</span>
        </div>
        <button 
          onClick={() => setAppState(s => ({...s, isDark: !s.isDark}))}
          className="w-10 h-10 glass rounded-full flex items-center justify-center text-emerald-400 hover:scale-110 active:scale-90 transition-all"
        >
          {appState.isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </header>

      <main className="flex-1 px-4 pb-32 overflow-y-auto scrollbar-hide">
        {renderContent()}
        <div className="py-10 text-center opacity-30">
           <p className="text-[11px] font-bold text-slate-400 tracking-wider">
             صنع من طرف <span className="text-emerald-500">osey vet</span>
           </p>
        </div>
      </main>

      <Navigation activeTab={appState.activeTab} onTabChange={(tab) => setAppState(prev => ({...prev, activeTab: tab}))} t={t} />
    </div>
  );
};

export default App;
