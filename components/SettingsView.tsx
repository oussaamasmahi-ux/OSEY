
import React from 'react';
import { AppState, Language } from '../types.ts';

interface SettingsViewProps {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
  t: any;
  wallpapers: string[];
}

const SettingsView: React.FC<SettingsViewProps> = ({ appState, setAppState, t, wallpapers }) => {
  const toggleTheme = () => setAppState(prev => ({ ...prev, isDark: !prev.isDark }));
  const setLang = (lang: Language) => setAppState(prev => ({ ...prev, lang }));
  const setWallpaper = (index: number) => setAppState(prev => ({ ...prev, wallpaperIndex: index }));

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 mt-4">
      <div className="glass rounded-[2rem] p-8 text-center flex flex-col items-center">
        <div className="relative mb-6">
           <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
           <img 
             src={wallpapers[appState.wallpaperIndex]} 
             alt="Mosque Icon" 
             className="w-24 h-24 rounded-[2.5rem] relative z-10 shadow-2xl border-4 border-white/10 object-cover" 
           />
        </div>
        <h2 className="text-2xl font-black dark:text-white leading-tight">{t.appName}</h2>
        <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.3em] mt-2">Version 1.0.0 Alpha</p>
      </div>

      {/* Wallpaper Picker Section */}
      <div className="glass rounded-[2rem] p-6 space-y-4">
        <h4 className="px-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest">تغيير الخلفية</h4>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {wallpapers.map((url, i) => (
            <button
              key={i}
              onClick={() => setWallpaper(i)}
              className={`relative flex-shrink-0 w-20 h-28 rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
                appState.wallpaperIndex === i ? 'border-emerald-500 scale-105 shadow-lg shadow-emerald-500/20' : 'border-transparent opacity-60'
              }`}
            >
              <img src={url} alt={`Wallpaper ${i}`} className="w-full h-full object-cover" />
              {appState.wallpaperIndex === i && (
                <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                  <div className="bg-emerald-500 text-white rounded-full p-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="glass rounded-[2rem] p-6 space-y-4">
        <h4 className="px-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest">{t.language}</h4>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'ar', name: 'العربية' },
            { id: 'en', name: 'English' },
            { id: 'fr', name: 'Français' }
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => setLang(l.id as Language)}
              className={`py-3 rounded-2xl text-[11px] font-black transition-all ${appState.lang === l.id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-white/5 dark:bg-white/5 text-slate-500 hover:text-emerald-500 border border-transparent hover:border-emerald-500/20'}`}
            >
              {l.name}
            </button>
          ))}
        </div>
      </div>

      <div className="glass rounded-[2rem] p-6 space-y-4">
        <h4 className="px-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest">{t.theme}</h4>
        <button 
          onClick={toggleTheme}
          className="w-full flex items-center justify-between p-5 bg-white/5 dark:bg-black/20 rounded-2xl border border-transparent hover:border-emerald-500/20 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-xl ${appState.isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-amber-500/10 text-amber-500'}`}>
              {appState.isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              )}
            </div>
            <span className="font-bold text-sm dark:text-white">{appState.isDark ? t.darkMode : t.lightMode}</span>
          </div>
          <div className={`w-12 h-6 rounded-full transition-all relative ${appState.isDark ? 'bg-emerald-500' : 'bg-slate-300'}`}>
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${appState.isDark ? 'right-1' : 'left-1'}`}></div>
          </div>
        </button>
      </div>

      <div className="px-4 py-6 text-center">
         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
           developed with passion for the ummah<br/>
           <span className="text-emerald-500">osey vet design studio</span>
         </p>
      </div>
    </div>
  );
};

export default SettingsView;
