
export type Language = 'ar' | 'en' | 'fr';

export interface PrayerTime {
  name: string;
  time: string;
}

export interface WeatherData {
  temp: number;
  condition: string;
  location: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Dua {
  id: number;
  title: string;
  content: string;
  category: string;
}

export interface AppState {
  lang: Language;
  isDark: boolean;
  activeTab: 'home' | 'quiz' | 'azkar' | 'wird' | 'settings';
  wallpaperIndex: number;
}
