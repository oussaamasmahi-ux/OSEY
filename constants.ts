
import { Language, QuizQuestion, Dua } from './types.ts';

export const WALLPAPERS = [
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551041777-ed31c360568c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523733593134-a820d071464e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584551520115-132bc652431d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590075865003-e48277faf551?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518005020453-1bb74470290b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
];

export const TRANSLATIONS = {
  ar: {
    home: 'الرئيسية',
    quiz: 'اختبر علمك',
    azkar: 'الأذكار',
    wird: 'الورد اليومي',
    settings: 'الإعدادات',
    prayerTimes: 'مواقيت الصلاة',
    nextPrayer: 'الصلاة القادمة',
    weather: 'الطقس اليوم',
    dailyDua: 'دعاء اليوم',
    startQuiz: 'ابدأ المسابقة',
    points: 'نقاط',
    language: 'اللغة',
    theme: 'المظهر',
    darkMode: 'الوضع الليلي',
    lightMode: 'الوضع النهاري',
    appName: 'إسلامك مع osey',
    score: 'النتيجة',
    congrats: 'أحسنت!',
    tryAgain: 'حاول مرة أخرى'
  },
  en: {
    home: 'Home',
    quiz: 'Quiz',
    azkar: 'Azkar',
    wird: 'Daily Wird',
    settings: 'Settings',
    prayerTimes: 'Prayer Times',
    nextPrayer: 'Next Prayer',
    weather: 'Weather',
    dailyDua: 'Daily Dua',
    startQuiz: 'Start Quiz',
    points: 'Points',
    language: 'Language',
    theme: 'Theme',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    appName: 'Islamk with osey',
    score: 'Score',
    congrats: 'Well done!',
    tryAgain: 'Try Again'
  },
  fr: {
    home: 'Accueil',
    quiz: 'Quiz',
    azkar: 'Invocations',
    wird: 'Wird Quotidien',
    settings: 'Paramètres',
    prayerTimes: 'Horaires de Prière',
    nextPrayer: 'Prochaine Prière',
    weather: 'Météo',
    dailyDua: 'Doua du jour',
    startQuiz: 'Commencer le Quiz',
    points: 'Points',
    language: 'Langue',
    theme: 'Thème',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    appName: 'Islamk avec osey',
    score: 'Score',
    congrats: 'Bravo!',
    tryAgain: 'Réessayer'
  }
};

export const QUIZ_DATA: QuizQuestion[] = [
  { id: 1, question: "من هو أول من أسلم من الرجال؟", options: ["أبو بكر الصديق", "علي بن أبي طالب", "عمر بن الخطاب", "عثمان بن عفان"], correctAnswer: 0 },
  { id: 2, question: "ما هي أطول سورة في القرآن الكريم؟", options: ["آل عمران", "البقرة", "النساء", "المائدة"], correctAnswer: 1 },
  { id: 3, question: "كم عدد أركان الإسلام؟", options: ["ثلاثة", "أربعة", "خمسة", "ستة"], correctAnswer: 2 },
  { id: 4, question: "ما هي السورة التي تسمى عروس القرآن؟", options: ["يس", "الرحمن", "الواقعة", "الملك"], correctAnswer: 1 },
  { id: 5, question: "من هو الملقب بذي النورين؟", options: ["عمر بن الخطاب", "علي بن أبي طالب", "عثمان بن عفان", "خالد بن الوليد"], correctAnswer: 2 },
  { id: 6, question: "كم عدد سور القرآن الكريم؟", options: ["110", "114", "118", "120"], correctAnswer: 1 },
  { id: 7, question: "من هي أم المساكين من زوجات النبي صلى الله عليه وسلم؟", options: ["خديجة بنت خويلد", "عائشة بنت أبي بكر", "زينب بنت خزيمة", "حفصة بنت عمر"], correctAnswer: 2 },
  { id: 8, question: "في أي شهر نزل القرآن الكريم؟", options: ["رجب", "شعبان", "رمضان", "شوال"], correctAnswer: 2 },
  { id: 9, question: "ما هي القبلة الأولى للمسلمين؟", options: ["الكعبة المشرفة", "المسجد الأقصى", "المسجد النبوي", "مسجد قباء"], correctAnswer: 1 },
  { id: 10, question: "من هو النبي الذي ابتلعه الحوت؟", options: ["يونس عليه السلام", "أيوب عليه السلام", "موسى عليه السلام", "إبراهيم عليه السلام"], correctAnswer: 0 },
  { id: 11, question: "كم عدد أركان الإيمان؟", options: ["خمسة", "ستة", "سبعة", "أربعة"], correctAnswer: 1 },
  { id: 12, question: "من هو خادم الرسول صلى الله عليه وسلم؟", options: ["أنس بن مالك", "بلال بن رباح", "زيد بن حارثة", "عبد الله بن مسعود"], correctAnswer: 0 },
  { id: 13, question: "ما هي أقصر سورة في القرآن الكريم؟", options: ["الإخلاص", "العصر", "الكوثر", "الناس"], correctAnswer: 2 },
  { id: 14, question: "من هو النبي الملقب بكليم الله؟", options: ["عيسى عليه السلام", "موسى عليه السلام", "إبراهيم عليه السلام", "نوح عليه السلام"], correctAnswer: 1 },
  { id: 15, question: "ما هو اسم ناقة الرسول صلى الله عليه وسلم؟", options: ["القصواء", "الشهباء", "الخضراء", "العصماء"], correctAnswer: 0 }
];

export const DUAS: Dua[] = [
  { id: 1, title: "أذكار الصباح", content: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير.", category: "الصباح" },
  { id: 2, title: "أذكار الصباح", content: "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور.", category: "الصباح" },
  { id: 3, title: "أذكار المساء", content: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له.", category: "المساء" },
  { id: 4, title: "بعد الصلاة", content: "أستغفر الله (ثلاثاً)، اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام.", category: "الصلاة" },
  { id: 5, title: "دعاء السفر", content: "سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون.", category: "السفر" },
  { id: 6, title: "أذكار النوم", content: "باسمك ربي وضعت جنبي وبك أرفعه، فإن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين.", category: "النوم" },
  { id: 7, title: "دعاء الاستيقاظ", content: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.", category: "الكل" }
];
