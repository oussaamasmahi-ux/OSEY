
import React, { useState } from 'react';

interface WirdViewProps {
  lang: string;
  t: any;
}

const WirdView: React.FC<WirdViewProps> = ({ t }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'صلاة الفجر في وقتها', completed: true },
    { id: 2, title: 'أذكار الصباح', completed: true },
    { id: 3, title: 'قراءة سورة الملك', completed: false },
    { id: 4, title: 'صلاة الضحى', completed: false },
    { id: 5, title: 'الاستغفار (100 مرة)', completed: false },
    { id: 6, title: 'صلاة الوتر', completed: false }
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  };

  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  return (
    <div className="space-y-6 animate-in slide-in-from-left-4 duration-500">
      <div className="glass rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold dark:text-white">إنجاز اليوم</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">لقد أكملت {tasks.filter(t => t.completed).length} من {tasks.length} مهام</p>
          </div>
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-200 dark:text-slate-800" />
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={175.9} strokeDashoffset={175.9 - (175.9 * progress) / 100} className="text-emerald-500 transition-all duration-1000" />
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold dark:text-white">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <button 
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`w-full glass p-4 rounded-2xl flex items-center justify-between group transition-all ${task.completed ? 'opacity-60 grayscale' : 'hover:border-emerald-500/30'}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-all ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-700'}`}>
                {task.completed && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
              </div>
              <span className={`text-sm font-bold ${task.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>{task.title}</span>
            </div>
            {!task.completed && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>}
          </button>
        ))}
      </div>

      <button className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 text-sm font-medium hover:text-emerald-500 hover:border-emerald-500/50 transition-all">
        + إضافة ورد جديد
      </button>
    </div>
  );
};

export default WirdView;
