import React from 'react';
import { DUAS } from '../constants.ts';

interface AzkarViewProps {
  lang: string;
  t: any;
}

const AzkarView: React.FC<AzkarViewProps> = ({ t }) => {
  return (
    <div className="space-y-4 animate-in fade-in duration-700">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['الكل', 'الصباح', 'المساء', 'الصلاة', 'السفر', 'النوم'].map((cat, i) => (
          <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-emerald-500 text-white' : 'glass text-slate-500'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {DUAS.map((dua) => (
          <div key={dua.id} className="glass rounded-3xl p-6 shadow-md hover:shadow-lg transition-all group">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {dua.title}
              </h4>
              <button className="text-slate-400 hover:text-emerald-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <p className="amiri text-lg leading-relaxed text-slate-700 dark:text-slate-300 text-center mb-6">
              {dua.content}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-400">مرات التكرار:</span>
                <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded text-[10px] font-bold">3</span>
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md active:scale-90">
                <span className="text-lg font-bold">1</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AzkarView;