
import React, { useState, useMemo } from 'react';
import { DUAS } from '../constants.ts';
import { Dua } from '../types.ts';

interface AzkarViewProps {
  lang: string;
  t: any;
}

const AzkarItem: React.FC<{ dua: Dua }> = ({ dua }) => {
  const [count, setCount] = useState(0);
  const targetCount = 3; // يمكن جعل هذا ديناميكياً بناءً على البيانات لاحقاً

  return (
    <div className="glass rounded-3xl p-6 shadow-md hover:shadow-lg transition-all group border border-white/5">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold dark:text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          {dua.title}
        </h4>
        <button className="text-slate-400 hover:text-emerald-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <p className="amiri text-xl leading-relaxed text-slate-700 dark:text-slate-100 text-center mb-8 px-2">
        {dua.content}
      </p>
      <div className="flex justify-between items-center pt-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">التكرار:</span>
          <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-lg text-xs font-black">
            {count} / {targetCount}
          </span>
        </div>
        <button 
          onClick={() => setCount(prev => prev < targetCount ? prev + 1 : prev)}
          disabled={count >= targetCount}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-xl active:scale-90 relative overflow-hidden ${
            count >= targetCount 
            ? 'bg-slate-200 dark:bg-slate-800 text-slate-400' 
            : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          {count >= targetCount ? (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
             </svg>
          ) : (
            <span className="text-xl font-black">{targetCount - count}</span>
          )}
        </button>
      </div>
    </div>
  );
};

const AzkarView: React.FC<AzkarViewProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'morning', name: 'الصباح' },
    { id: 'evening', name: 'المساء' },
    { id: 'prayer', name: 'الصلاة' },
    { id: 'travel', name: 'السفر' },
    { id: 'sleep', name: 'النوم' }
  ];

  const filteredDuas = useMemo(() => {
    if (activeCategory === 'all') return DUAS;
    return DUAS.filter(d => d.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all duration-300 shadow-sm ${
              activeCategory === cat.id 
              ? 'bg-emerald-500 text-white shadow-emerald-500/20 scale-105' 
              : 'glass text-slate-500 hover:text-emerald-500'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {filteredDuas.length > 0 ? (
          filteredDuas.map((dua) => (
            <AzkarItem key={dua.id} dua={dua} />
          ))
        ) : (
          <div className="glass rounded-[2rem] p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-bold">لا توجد أذكار في هذا القسم حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AzkarView;
