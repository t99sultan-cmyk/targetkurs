"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  ArrowRight, Shield, Target, TrendingUp, Users, 
  BarChart, Zap, Search, Clock, Award, ChevronDown, 
  Play, CheckCircle
} from "lucide-react";

// --- THEME & REUSABLE CLASSES (IOS / TESLA PREMIUM) ---
// Dark mode base: Black. Accents: Gold (#D4AF37, #F3E5AB), Tiffany (#0ABAB5)
const glassCard = "bg-[#ffffff08] backdrop-blur-[24px] border border-[#ffffff14] rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)]";
const btnGold = "bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] active:scale-95 text-black shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 rounded-full font-semibold px-6 py-4 text-base w-full transition-all duration-500 ease-out";
const textGold = "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]";
const textTiffany = "text-[#0ABAB5]";

// --- CINEMATIC ANIMATIONS ---
// Slow, premium easing (custom cubic-bezier like Apple)
const premiumEase = [0.16, 1, 0.3, 1];

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: premiumEase } }
};
const fadeScale: any = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: premiumEase } }
};
const staggerChildren: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// --- COMPONENTS ---

// Slow moving atmospheric background
const CinematicBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[10%] -left-[20%] w-[120%] h-[50%] bg-[#D4AF37]/10 rounded-full mix-blend-screen filter blur-[100px]" 
    />
    <motion.div 
      animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 60, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[40%] -right-[30%] w-[130%] h-[60%] bg-[#0ABAB5]/10 rounded-full mix-blend-screen filter blur-[120px]" 
    />
    {/* Noise Texture Overlay for "Expensive/Paper-like" feel */}
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
  </div>
);

// 1. Hero Block
const HeroBlock = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-12 px-6">
    <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="w-full text-center z-10 flex flex-col items-center">
      
      <motion.div variants={fadeUp} className="mb-8">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] animate-pulse"></span>
            Premium B2B Traffic
          </span>
        </div>
      </motion.div>

      <motion.h1 variants={fadeUp} className="text-[40px] leading-[1.1] font-medium tracking-tight text-white mb-6">
        Продажи.<br />
        <span className={`font-serif italic ${textGold}`}>Не клики.</span>
      </motion.h1>
      
      <motion.p variants={fadeUp} className="text-sm text-[#A0A0A0] font-light leading-relaxed px-4 mb-10 max-w-[320px]">
        Эксклюзивный Data-Driven таргет для бизнеса, готового к масштабированию и кратному росту.
      </motion.p>
      
      <motion.div variants={fadeScale} className="w-full max-w-[280px]">
        <button className={btnGold}>
          Разбор проекта <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </motion.div>
      
    </motion.div>
  </section>
);

// 2. Pain Points Bloxk
const PainPointsBlock = () => {
  const pains = [
    { num: "01", title: "Бюджет в пустоту", desc: "Реклама идет, показы есть, но качественные контракты не заключаются." },
    { num: "02", title: "Дешевые лиды", desc: "Массовые заявки от людей, у которых нет денег на ваш чек." },
    { num: "03", title: "Мертвая аналитика", desc: "Вы не понимаете, какая именно кампания приносит реальный ROI." },
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-12">
        <h2 className="text-3xl font-medium text-white mb-2 tracking-tight">Вам это знакомо.</h2>
        <div className="w-12 h-px bg-[#D4AF37] opacity-50"></div>
      </motion.div>
      
      <div className="flex flex-col gap-6">
        {pains.map((pain, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 1, delay: i * 0.2, ease: premiumEase }}}} className="group border-b border-[#ffffff14] pb-6 last:border-0 relative">
            <div className={`text-[10px] font-mono mb-2 ${textTiffany}`}>{pain.num}</div>
            <h3 className="text-xl font-medium text-white mb-2">{pain.title}</h3>
            <p className="text-sm text-[#888888] font-light leading-relaxed">{pain.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 3. Solution / Analytics Block
const SolutionBlock = () => (
  <section className="py-20 px-6 relative z-10">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale} className={`${glassCard} p-8 relative overflow-hidden`}>
      {/* Subtle tiffany glow */}
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#0ABAB5]/10 blur-[50px] rounded-full pointer-events-none" />
      
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-4 block">Наш стандарт</span>
      <h2 className="text-2xl font-medium text-white mb-8">Математическая точность.</h2>
      
      <div className="space-y-6">
        <div className="bg-[#050505] rounded-2xl p-5 border border-[#ffffff0a]">
          <div className="flex justify-between items-center mb-3">
             <span className="text-xs text-[#666666]">LTV / ROMI</span>
             <TrendingUp size={14} className="text-[#D4AF37]" />
          </div>
          <div className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden relative">
             <motion.div initial={{ width: "0%" }} whileInView={{ width: "88%" }} transition={{ duration: 2, ease: premiumEase }} className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]"></motion.div>
          </div>
          <div className="mt-3 flex justify-between text-[10px] font-mono text-[#A0A0A0]">
            <span>$0</span>
            <span className={textTiffany}>+$42,000</span>
          </div>
        </div>

        <ul className="space-y-4 pt-2">
          {['Глубокая сквозная аналитика', 'Сегментация премиум-аудитории', 'A/B тесты на уровне смыслов'].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#CCCCCC] font-light">
              <CheckCircle className="text-[#0ABAB5] mt-0.5 shrink-0" size={16} strokeWidth={1.5} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
);

// 4. Value of the Lead Magnet
const DocumentBlock = () => (
  <section className="py-20 px-6 relative z-10">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10 text-center">
      <h2 className="text-3xl font-medium text-white mb-3 tracking-tight">Детальный Разбор</h2>
      <p className="text-sm text-[#888888] font-light">Ваша персональная стратегия роста.</p>
    </motion.div>
    
    <div className="grid grid-cols-2 gap-4">
      {[
        { title: "Анализ", desc: "Поиск точек слива." },
        { title: "Стратегия", desc: "Схема окупаемости." },
        { title: "Офферы", desc: "Смыслы для ЦА." },
        { title: "Масштаб", desc: "План на 3 месяца." },
      ].map((item, i) => (
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: i * 0.1, ease: premiumEase }}}} className="bg-[#ffffff05] border border-[#ffffff0a] p-5 rounded-[1.5rem]">
          <h4 className={`text-base font-medium mb-1 ${textGold}`}>{item.title}</h4>
          <p className="text-xs text-[#888888] font-light">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// 5. Form & Timer (The iOS Style Window)
const FormBlock = () => {
  const [timeLeft, setTimeLeft] = useState({ m: 14, s: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s === 0) {
          if (prev.m === 0) return { m: 15, s: 0 };
          return { m: prev.m - 1, s: 59 };
        }
        return { ...prev, s: prev.s - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 relative z-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale} className={`${glassCard} p-8 relative overflow-hidden border-[#D4AF37]/20`}>
        
        <div className="flex flex-col items-center justify-center mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#0ABAB5] mb-3">Приглашение ограничено</span>
          <div className="flex items-center gap-2">
            <div className="text-4xl font-light font-mono text-white tracking-widest">{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}</div>
          </div>
          <p className="text-[10px] text-[#666666] mt-2 text-center max-w-[200px]">Открыто только для 3 новых проектов в неделю.</p>
        </div>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input type="text" placeholder="Ваше Имя" className="w-full px-5 py-4 rounded-xl bg-[#ffffff05] border border-[#ffffff14] focus:border-[#D4AF37] focus:outline-none text-white text-sm font-light transition-colors" />
          </div>
          <div className="relative">
            <input type="tel" placeholder="WhatsApp / Telegram" className="w-full px-5 py-4 rounded-xl bg-[#ffffff05] border border-[#ffffff14] focus:border-[#D4AF37] focus:outline-none text-white text-sm font-light transition-colors" />
          </div>
          <div className="pt-2">
            <button className={btnGold}>
              Забронировать время
            </button>
          </div>
          <p className="text-[9px] text-[#444444] mt-4 text-center uppercase tracking-wider">
            Конфиденциальность гарантирована
          </p>
        </form>
      </motion.div>
    </section>
  );
};

// 7. Roadmap Process
const ProcessiOSBlock = () => (
  <section className="py-20 px-6 relative z-10">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
      <h2 className="text-3xl font-medium text-white tracking-tight">Дорожная карта.</h2>
    </motion.div>
    
    <div className="relative pl-4 space-y-12 border-l border-[#ffffff14]">
      {[
        { step: "Аудит", desc: "Изучение ваших прошлых РК и воронок." },
        { step: "Стратегия", desc: "Разработка эксклюзивных офферов." },
        { step: "Запуск", desc: "Тестирование лучших гипотез." },
        { step: "Масштаб", desc: "Кратный рост чистой прибыли." },
      ].map((item, i) => (
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 1, delay: i * 0.2, ease: premiumEase }}}} className="relative pl-6">
          <div className="absolute top-1 -left-[5px] w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
          <h4 className="text-lg font-medium text-white mb-1 tracking-tight">{item.step}</h4>
          <p className="text-sm text-[#888888] font-light">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// 8. Case Studies (Cards)
const CasesBlock = () => {
  const cases = [
    { title: "IT Консалтинг", stat: "340%", label: "ROMI" },
    { title: "B2B Платформа", stat: "-65%", label: "CPA" },
  ];
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10 text-center">
         <span className={`text-[10px] tracking-[0.2em] uppercase block mb-3 ${textGold}`}>Результаты</span>
         <h2 className="text-3xl font-medium text-white tracking-tight">Цифры не лгут.</h2>
      </motion.div>
      
      <div className="flex gap-4 overflow-x-auto pb-8 snap-x custom-scrollbar">
        {cases.map((c, i) => (
           <motion.div key={i} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1, ease: premiumEase }} className={`${glassCard} min-w-[260px] snap-center p-8 flex flex-col justify-between aspect-square group relative overflow-hidden`}>
             <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <h3 className="text-sm text-[#A0A0A0] font-light uppercase tracking-widest">{c.title}</h3>
             <div>
               <span className="text-5xl font-light text-white tracking-tighter block mb-1">{c.stat}</span>
               <span className={`text-xs font-medium uppercase tracking-widest ${textTiffany}`}>{c.label}</span>
             </div>
           </motion.div>
        ))}
      </div>
    </section>
  );
};

// 9. Expert Block
const AgencyBlock = () => (
  <section className="py-20 px-6 relative z-10">
    <div className={`${glassCard} !rounded-[2.5rem] p-8 text-center flex flex-col items-center`}>
      <div className="w-24 h-24 rounded-full bg-[#111111] mb-6 flex items-center justify-center p-0.5 border border-[#ffffff14]">
         {/* Simulate a dark aesthetic portrait */}
         <div className="w-full h-full rounded-full bg-[#1a1a1a] shadow-inner flex items-center justify-center overflow-hidden">
            <Users className="text-[#333333]" size={32} />
         </div>
      </div>
      <h2 className={`text-xl font-medium mb-1 ${textGold}`}>Target Premium Agency</h2>
      <p className="text-xs text-[#666666] tracking-[0.2em] uppercase mb-6">Since 2020</p>
      <p className="text-sm text-[#CCCCCC] font-light leading-relaxed mb-8 max-w-[280px]">
        Мы работаем только с бизнесом, который ценит качество аудитории выше сиюминутной экономии на клике. Более $2M освоенного бюджета.
      </p>
    </div>
  </section>
);

// 11. FAQ Accordion (Minimalist)
const FAQMinimalBlock = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "С какими бюджетами вы работаете?", a: "Мы рассматриваем проекты с минимальным рекламным бюджетом от $2,000 в месяц." },
    { q: "Как быстро окупятся инвестиции?", a: "Средний срок выхода на стабильный окупаемый трафик — 3-4 недели тестов." }
  ];
  return (
    <section className="py-20 px-6 relative z-10">
      <h2 className="text-2xl font-medium text-white mb-8 tracking-tight">Частые вопросы</h2>
      <div className="space-y-1 border-t border-[#ffffff14]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[#ffffff14] py-5">
             <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left focus:outline-none focus-visible:ring-0">
               <span className={`text-sm font-medium transition-colors ${open === i ? 'text-white' : 'text-[#A0A0A0]'}`}>{faq.q}</span>
               <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform duration-500 ease-[0.16,1,0.3,1] ${open === i ? 'rotate-180 text-white' : ''}`} />
             </button>
             <AnimatePresence>
               {open === i && (
                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.6, ease: premiumEase }} className="overflow-hidden">
                   <p className="pt-4 text-xs text-[#888888] font-light leading-relaxed">{faq.a}</p>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

// 12. Final CTA Block (Dark/Gold Cinematic)
const FinalCTAiOSBlock = () => (
  <section className="py-32 px-6 relative overflow-hidden z-20 flex justify-center items-center">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none" />
    
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale} className="text-center w-full max-w-[320px]">
      <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center mx-auto mb-6">
        <Award size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
      </div>
      <h2 className="text-3xl font-medium text-white mb-4 tracking-tight leading-tight">
        Готовы к масштабу?
      </h2>
      <p className="text-sm text-[#888888] font-light mb-10">
        Успейте оставить заявку.
      </p>
      <button className={btnGold}>
        Получить разбор <ArrowRight size={18} />
      </button>
    </motion.div>
  </section>
);

// --- MAIN PAGE DISPATCHER ---
export default function B2BTargetLanding() {
  return (
    <div className="min-h-screen bg-[#000000] flex justify-center items-center">
      <div className="w-full max-w-[480px] min-h-screen md:h-[90vh] md:min-h-0 md:rounded-[2.5rem] bg-[#030303] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden overflow-y-auto relative custom-scrollbar md:border-[10px] md:border-[#111111] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Hide scrollbar, ensure sleek presentation */}
        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar { display: none; }
          .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          body { background-color: #000000; }
        `}} />

        <CinematicBackground />
        
        <div className="relative z-10 w-full overflow-x-hidden">
          <HeroBlock />
          <PainPointsBlock />
          <SolutionBlock />
          <DocumentBlock />
          <FormBlock />
          <ProcessiOSBlock />
          <CasesBlock />
          <AgencyBlock />
          <FAQMinimalBlock />
          <FinalCTAiOSBlock />
        </div>
      </div>
    </div>
  );
}
