
import { Language, QuizQuestion, Dua } from './types.ts';

export const WALLPAPERS = [
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop", // Mosque Night
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop", // Islamic Pattern
  "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=2070&auto=format&fit=crop", // Blue Mosque
  "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop", // Starry Night
  "https://images.unsplash.com/photo-1551041777-ed31c360568c?q=80&w=2070&auto=format&fit=crop", // Architecture
  "https://images.unsplash.com/photo-1523733593134-a820d071464e?q=80&w=2070&auto=format&fit=crop", // Makkah
  "https://images.unsplash.com/photo-1584551520115-132bc652431d?q=80&w=2070&auto=format&fit=crop", // Dome of the Rock
  "https://images.unsplash.com/photo-1590075865003-e48277faf551?q=80&w=2070&auto=format&fit=crop", // Medina
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop", // Peaceful Mountains
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop", // Sea Sunset
  "https://images.unsplash.com/photo-1518005020453-1bb74470290b?q=80&w=2070&auto=format&fit=crop", // Geometric Art
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"  // Deep Blue
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
    appName: 'Osey Islamk',
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
    appName: 'Osey Islamk',
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
    appName: 'Osey Islamk',
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
  { id: 15, question: "ما هو اسم ناقة الرسول صلى الله عليه وسلم؟", options: ["القصواء", "الشهباء", "الخضراء", "العصماء"], correctAnswer: 0 },
  { id: 16, question: "كم عدد سنوات الدعوة في مكة؟", options: ["10 سنوات", "13 سنة", "15 سنة", "23 سنة"], correctAnswer: 1 },
  { id: 17, question: "ما هو اسم بئر الماء في الحرم المكي؟", options: ["بئر بدر", "بئر زمزم", "بئر غرس", "بئر الأريان"], correctAnswer: 1 },
  { id: 18, question: "من هو الملك الموكل بالوحي؟", options: ["ميكائيل", "إسرافيل", "جبريل", "مالك"], correctAnswer: 2 },
  { id: 19, question: "في أي غزوة كُسرت بيضة النبي صلى الله عليه وسلم؟", options: ["بدر", "أحد", "الخندق", "حنين"], correctAnswer: 1 },
  { id: 20, question: "ما هي السورة التي بدأت بدون بسملة؟", options: ["الفاتحة", "التوبة", "يس", "الكهف"], correctAnswer: 1 },
  { id: 21, question: "من هو أول مؤذن في الإسلام؟", options: ["أبو بكر الصديق", "بلال بن رباح", "عمار بن ياسر", "سعد بن أبي وقاص"], correctAnswer: 1 },
  { id: 22, question: "ما هو لقب حمزة بن عبد المطلب؟", options: ["سيف الله المسلول", "أسد الله", "ذو الجناحين", "أمين الأمة"], correctAnswer: 1 },
  { id: 23, question: "كم عدد السجدات في القرآن الكريم؟", options: ["12 سجدة", "14 سجدة", "15 سجدة", "10 سجدات"], correctAnswer: 2 },
  { id: 24, question: "من هو النبي الذي بنى السفينة؟", options: ["هود عليه السلام", "نوح عليه السلام", "صالح عليه السلام", "شعيب عليه السلام"], correctAnswer: 1 },
  { id: 25, question: "ما هو الاسم الحقيقي لأبي بكر الصديق؟", options: ["عبد الله بن عثمان", "عمر بن الخطاب", "عثمان بن عفان", "عبد الرحمن بن عوف"], correctAnswer: 0 },
  { id: 26, question: "ما هي السورة التي تعدل ثلث القرآن؟", options: ["الفاتحة", "الإخلاص", "يس", "آية الكرسي"], correctAnswer: 1 },
  { id: 27, question: "من هو النبي الذي كان يبرئ الأكمه والأبرص بإذن الله؟", options: ["موسى عليه السلام", "عيسى عليه السلام", "داود عليه السلام", "سليمان عليه السلام"], correctAnswer: 1 },
  { id: 28, question: "ما هي مهنة النبي محمد صلى الله عليه وسلم قبل النبوة؟", options: ["الحدادة", "النجارة", "الرعي والتجارة", "الزراعة"], correctAnswer: 2 },
  { id: 29, question: "من هو الصحابي الذي تستحي منه الملائكة؟", options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"], correctAnswer: 2 },
  { id: 30, question: "ما هو أطول يوم في حياة المسلم؟", options: ["يوم الجمعة", "يوم العيد", "يوم القيامة", "يوم عرفة"], correctAnswer: 2 },
  { id: 31, question: "كم عدد أبناء النبي محمد صلى الله عليه وسلم؟", options: ["5", "6", "7", "8"], correctAnswer: 2 },
  { id: 32, question: "من هو الملقب بـ الفاروق؟", options: ["أبو بكر الصديق", "عمر بن الخطاب", "خالد بن الوليد", "حمزة بن عبد المطلب"], correctAnswer: 1 },
  { id: 33, question: "ما هي السورة التي تسمى قلب القرآن؟", options: ["البقرة", "يس", "الرحمن", "الواقعة"], correctAnswer: 1 },
  { id: 34, question: "في أي سنة هجرية كانت غزوة بدر؟", options: ["السنة الأولى", "السنة الثانية", "السنة الثالثة", "السنة الرابعة"], correctAnswer: 1 },
  { id: 35, question: "من هو النبي الذي أُعطي شطر الجمال؟", options: ["يوسف عليه السلام", "داود عليه السلام", "سليمان عليه السلام", "يحيى عليه السلام"], correctAnswer: 0 },
  { id: 36, question: "ما هو اسم خازن الجنة؟", options: ["مالك", "رضوان", "منكر", "نكير"], correctAnswer: 1 },
  { id: 37, question: "ما هو اسم خازن النار؟", options: ["رضوان", "مالك", "إسرافيل", "عزرائيل"], correctAnswer: 1 },
  { id: 38, question: "كم عدد الخلفاء الراشدين؟", options: ["3", "4", "5", "6"], correctAnswer: 1 },
  { id: 39, question: "من هو النبي الذي صام عن الكلام ثلاثة أيام؟", options: ["إسماعيل عليه السلام", "زكريا عليه السلام", "لوط عليه السلام", "إدريس عليه السلام"], correctAnswer: 1 },
  { id: 40, question: "ما هي أعظم آية في القرآن الكريم؟", options: ["آية الكرسي", "آخر آية في البقرة", "أول آية في الفاتحة", "آية الدين"], correctAnswer: 0 },
  { id: 41, question: "من هو النبي الذي سخر الله له الريح والجن؟", options: ["داود عليه السلام", "سليمان عليه السلام", "أيوب عليه السلام", "إلياس عليه السلام"], correctAnswer: 1 },
  { id: 42, question: "ما هي دار الإسلام الأولى التي هاجر إليها المسلمون؟", options: ["المدينة المنورة", "الحبشة", "مكة", "الطائف"], correctAnswer: 1 },
  { id: 43, question: "من هو الصحابي الذي لُقب بـ أمين الأمة؟", options: ["أبو عبيدة بن الجراح", "معاذ بن جبل", "سعد بن معاذ", "طلحة بن عبيد الله"], correctAnswer: 0 },
  { id: 44, question: "ما هي السورة التي ذكرت فيها البسملة مرتين؟", options: ["البقرة", "النمل", "النحل", "هود"], correctAnswer: 1 },
  { id: 45, question: "من هو النبي الذي لُقب بـ ذي النون؟", options: ["يونس عليه السلام", "إسماعيل عليه السلام", "إسحاق عليه السلام", "يعقوب عليه السلام"], correctAnswer: 0 },
  { id: 46, question: "ما هو اسم الجبل الذي استقرت عليه سفينة نوح؟", options: ["جبل الطور", "جبل الجودي", "جبل عرفات", "جبل أحد"], correctAnswer: 1 },
  { id: 47, question: "كم عدد أولي العزم من الرسل? ", options: ["3", "4", "5", "7"], correctAnswer: 2 },
  { id: 48, question: "من هو النبي الذي رفعه الله إليه؟", options: ["إبراهيم عليه السلام", "عيسى عليه السلام", "موسى عليه السلام", "يحيى عليه السلام"], correctAnswer: 1 },
  { id: 49, question: "ما هي الصلاة التي ليس لها ركوع ولا سجود؟", options: ["صلاة الكسوف", "صلاة الجنازة", "صلاة الاستسقاء", "صلاة الوتر"], correctAnswer: 1 },
  { id: 50, question: "من هو الصحابي الذي اهتز لموته عرش الرحمن؟", options: ["عمر بن الخطاب", "سعد بن معاذ", "علي بن أبي طالب", "خالد بن الوليد"], correctAnswer: 1 },
  { id: 51, question: "من هو النبي الذي بعث إلى قوم عاد؟", options: ["هود عليه السلام", "صالح عليه السلام", "شعيب عليه السلام", "لوط عليه السلام"], correctAnswer: 0 },
  { id: 52, question: "ما هي السورة التي تسمى المنجية؟", options: ["الملك", "الواقعة", "الكهف", "يس"], correctAnswer: 0 },
  { id: 53, question: "من هو الصحابي الذي لقب بسيف الله المسلول؟", options: ["خالد بن الوليد", "علي بن أبي طالب", "جعفر بن أبي طالب", "حمزة بن عبد المطلب"], correctAnswer: 0 },
  { id: 54, question: "ما هي السورة التي تسمى سنام القرآن؟", options: ["البقرة", "الفاتحة", "الإخلاص", "آل عمران"], correctAnswer: 0 },
  { id: 55, question: "كم عدد أبواب الجنة؟", options: ["5", "7", "8", "10"], correctAnswer: 2 }
];

export const DUAS: Dua[] = [
  {
    id: 1,
    title: "أذكار الصباح",
    content: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له...",
    category: "morning"
  },
  {
    id: 2,
    title: "أذكار المساء",
    content: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له...",
    category: "evening"
  }
];
