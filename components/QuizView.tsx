import React, { useState } from 'react';
import { QUIZ_DATA } from '../constants.ts';

interface QuizViewProps {
  lang: string;
  t: any;
}

const QuizView: React.FC<QuizViewProps> = ({ t }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(idx);
    if (idx === QUIZ_DATA[currentIdx].correctAnswer) {
      setScore(prev => prev + 10);
    }

    setTimeout(() => {
      if (currentIdx < QUIZ_DATA.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-10 animate-in zoom-in duration-500">
        <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
           <svg className="w-20 h-20 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold dark:text-white">{t.congrats}</h2>
        <div className="glass p-6 rounded-3xl w-full text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-2">{t.score}</p>
          <p className="text-5xl font-black text-emerald-500">{score}</p>
          <p className="text-xs text-slate-400 mt-2">{score / 10} / {QUIZ_DATA.length} إجابات صحيحة</p>
        </div>
        <button 
          onClick={() => {
            setCurrentIdx(0);
            setScore(0);
            setShowResult(false);
            setSelectedOption(null);
          }}
          className="bg-emerald-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-500/20"
        >
          {t.tryAgain}
        </button>
      </div>
    );
  }

  const question = QUIZ_DATA[currentIdx];

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center mb-2 px-2">
        <span className="text-xs font-bold text-slate-500">السؤال {currentIdx + 1} من {QUIZ_DATA.length}</span>
        <span className="text-xs font-bold text-emerald-500">{score} {t.points}</span>
      </div>
      
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-500 transition-all duration-500" 
          style={{ width: `${((currentIdx + 1) / QUIZ_DATA.length) * 100}%` }}
        />
      </div>

      <div className="glass rounded-3xl p-8 min-h-[200px] flex items-center justify-center text-center shadow-lg">
        <h3 className="text-xl font-bold dark:text-white leading-relaxed">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((opt, i) => {
          let stateClass = "border-transparent bg-white/5 dark:bg-white/5 text-slate-700 dark:text-slate-300";
          if (selectedOption !== null) {
            if (i === question.correctAnswer) stateClass = "bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02]";
            else if (i === selectedOption) stateClass = "bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20";
            else stateClass = "opacity-40 bg-slate-100 dark:bg-slate-800";
          } else {
            stateClass += " hover:bg-emerald-500/10 hover:border-emerald-500/30 active:scale-95";
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selectedOption !== null}
              className={`w-full p-5 rounded-2xl border transition-all text-right font-medium flex items-center gap-4 ${stateClass}`}
            >
              <span className={`w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-sm font-bold ${selectedOption === i ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'}`}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizView;