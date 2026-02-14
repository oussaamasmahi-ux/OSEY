
import React, { useState } from 'react';
import { DUAS } from '../constants.ts';

interface AzkarViewProps {
  lang: string;
  t: any;
}

const AzkarView: React.FC<AzkarViewProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [counts, setCounts] = useState<Record<number, number>>({});
  
  const categories = ['الكل', 'الصباح', 'المساء', 'الصلاة', 'السفر', 'النوم'];

  const filteredDuas = activeCategory === 'الكل' 
    ? DUAS 
    : DUAS.filter(dua => dua.category === activeCategory);

  const handleIncrement = (id: number) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const resetCount = (id: number) => {
    setCounts(prev => ({ ...prev, [id]: 0 }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* شريط التصنيفات */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide px-1">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
              activeCategory === cat 
                ? 'bg-emerald-500 border-emerald-400 text-white shadow-xl shadow-emerald-500/30 scale-105' 
                : 'glass border-white/5 text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* قائمة الأذكار */}
      <div className="space-y-5 pb-10">
        {filteredDuas.length > 0 ? filteredDuas.map((dua) => (
          <div key={dua.id} className="glass rounded-[2rem] p-7 shadow-xl border border-white/10 hover:border-emerald-500/30 transition-all">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                <h4 className="font-black text-white text-sm">{dua.title}</h4>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-black uppercase tracking-widest">{dua.category}</span>
            </div>
            
            <p className="amiri text-2xl leading-[1.8] text-white/90 text-center mb-8 px-2 select-none">
              {dua.content}
            </p>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => resetCount(dua.id)}
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              
              <button 
                onClick={() => handleIncrement(dua.id)}
                className="flex-1 mx-4 bg-emerald-500 hover:bg-emerald-600 text-white h-14 rounded-[1.25rem] flex items-center justify-center transition-all shadow-lg active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-active:translate-y-0 transition-transform"></div>
                <span className="text-2xl font-black tabular-nums">{counts[dua.id] || 0}</span>
              </button>

              <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-500 hover:text-emerald-500 transition-colors active:scale-90">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        )) : (
          <div className="py-20 text-center opacity-30">
            <p className="text-slate-400 font-bold">لا توجد أذكار هنا حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AzkarView;
