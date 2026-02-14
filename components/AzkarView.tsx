
import React, { useState } from 'react';
import { DUAS } from '../constants.ts';

interface AzkarViewProps {
  lang: string;
  t: any;
}

const AzkarView: React.FC<AzkarViewProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  
  const categories = ['الكل', 'الصباح', 'المساء', 'الصلاة', 'السفر', 'النوم'];

  const filteredDuas = activeCategory === 'الكل' 
    ? DUAS 
    : DUAS.filter(dua => dua.category === activeCategory);

  return (
    <div className="space-y-4 animate-in fade-in duration-700">
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105' 
                : 'glass text-slate-500 dark:text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4 pb-10">
        {filteredDuas.length > 0 ? filteredDuas.map((dua) => (
          <div key={dua.id} className="glass rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {dua.title}
              </h4>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded-lg text-slate-400 font-bold">{dua.category}</span>
            </div>
            <p className="amiri text-xl leading-relaxed text-slate-700 dark:text-white/90 text-center mb-6 px-2">
              {dua.content}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <button className="p-2 glass rounded-xl text-slate-400 hover:text-emerald-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white min-w-[3rem] h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-90 font-black">
                1
              </button>
            </div>
          </div>
        )) : (
          <div className="py-20 text-center opacity-40">
            <p className="text-slate-500 font-bold">لا يوجد أذكار في هذا القسم حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AzkarView;
