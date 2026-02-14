
import React, { useState, useEffect, useMemo } from 'react';
import { TRANSLATIONS, WALLPAPERS } from './constants.ts';
import { AppState } from './types.ts';
import HomeView from './components/HomeView.tsx';
import QuizView from './components/QuizView.tsx';
import AzkarView from './components/AzkarView.tsx';
import WirdView from './components/WirdView.tsx';
import SettingsView from './components/SettingsView.tsx';
import Navigation from './components/Navigation.tsx';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(() => {
    // محاولة استعادة الحالة من التخزين المحلي
    const saved = localStorage.getItem('osey_islamk_state');
    return saved ? JSON.parse(saved) : {
      lang: 'ar',
      isDark: true,
      activeTab: 'home',
      wallpaperIndex: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('osey_islamk_state', JSON.stringify(appState));
  }, [appState]);

  useEffect(() => {
    document.body.className = appState.isDark ? 'dark' : 'light';
    document.documentElement.dir = appState.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = appState.lang;
  }, [appState.isDark, appState.lang]);

  const t = useMemo(() => TRANSLATIONS[appState.lang] || TRANSLATIONS.ar, [appState.lang]);
  const currentWallpaperUrl = WALLPAPERS[appState.wallpaperIndex];

  const renderContent = () => {
    const props = { lang: appState.lang, t };
    switch (appState.activeTab) {
      case 'home': return <HomeView {...props} currentWallpaper={currentWallpaperUrl} />;
      case 'quiz': return <QuizView {...props} />;
      case 'azkar': return <AzkarView {...props} />;
      case 'wird': return <WirdView {...props} />;
      case 'settings': return <SettingsView appState={appState} setAppState={setAppState} t={t} wallpapers={WALLPAPERS} />;
      default: return <HomeView {...props} currentWallpaper={currentWallpaperUrl} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative flex flex-col transition-all duration-500">
      {/* طبقات الخلفية الثابتة */}
      <div className="bg-app-container">
        <div 
          className="bg-image-layer" 
          style={{ backgroundImage: `url('${currentWallpaperUrl}')` }}
        ></div>
        <div className="bg-overlay-layer"></div>
      </div>

      {/* الهيدر */}
      <header className="sticky top-0 z-50 px-6 pt-10 pb-4 backdrop-blur-md bg-transparent flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black bg-gradient-to-l from-emerald-400 to-teal-200 bg-clip-text text-transparent tracking-tight">
            {t.appName}
          </h1>
          <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest opacity-80">spiritual life companion</span>
        </div>
        <button 
          onClick={() => setAppState(s => ({...s, isDark: !s.isDark}))}
          className="w-10 h-10 glass rounded-2xl flex items-center justify-center text-emerald-400 hover:scale-110 active:scale-90 transition-transform shadow-lg"
        >
          {appState.isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 px-4 pt-2 pb-32">
        {renderContent()}
        
        <div className="py-10 text-center opacity-30">
           <p className="text-[10px] font-bold text-slate-400 tracking-widest">
             بإشراف <span className="text-emerald-500">osey vet design</span>
           </p>
        </div>
      </main>

      {/* التنقل السفلي */}
      <Navigation 
        activeTab={appState.activeTab} 
        onTabChange={(tab) => setAppState(prev => ({...prev, activeTab: tab}))} 
        t={t} 
      />
    </div>
  );
};

export default App;
