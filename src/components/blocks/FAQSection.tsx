"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, ChevronDown, HelpCircle } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "У меня нет опыта в таргете. Подойдёт?",
    a: "Да. Интенсив рассчитан в первую очередь на новичков. Мы стартуем с базы и за 60 дней проходим путь до первого клиента и стабильного дохода 300–500 000 ₸. Опыт работы с компьютером и желание разобраться — всё, что нужно.",
  },
  {
    q: "Сколько часов в день нужно уделять?",
    a: "Минимум 1–2 часа в день для выполнения практики и поиска клиентов. Ученики, которые выделяют 3–5 часов, выходят на результат быстрее. Полностью совмещается с работой/учёбой.",
  },
  {
    q: "Нужен ли стартовый бюджет на рекламу?",
    a: "Нет. Тебе не нужно вкладывать свои деньги в рекламу — ты будешь запускать кампании на бюджеты клиентов. Стартовать можно с нуля, без расходов.",
  },
  {
    q: "Я из России / другой страны. Подойдёт?",
    a: "Да, география не важна. Среди учеников есть таргетологи из РФ, КЗ, Узбекистана, Грузии, Турции. Все инструменты, которые мы используем, доступны из любой страны. Если есть вопросы по оплате Meta — научим обходным путям.",
  },
  {
    q: "Будет запись или только онлайн?",
    a: "Все материалы интенсива остаются в записи. Ты сможешь пересматривать любой блок, возвращаться к деталям и проходить в своём темпе. Обратная связь — в общем чате и на личном Zoom-разборе.",
  },
  {
    q: "А если у меня уже есть опыт работы таргетологом?",
    a: "Если ты уже зарабатываешь на таргете 200 000+ ₸/мес, интенсив поможет тебе пробить «потолок» через систему дорогих чеков, продажи и личный бренд. Если у тебя 500 000+ ₸/мес — лучше идти сразу в команду, напиши мне в WhatsApp, обсудим.",
  },
  {
    q: "Что входит в стоимость 1 990 ₸?",
    a: "Полный доступ к интенсиву (5 модулей), все шаблоны и скрипты, личный Zoom-разбор со мной, доступ в закрытый чат участников, бонусы (PDF, скрипты переговоров, шаблон договора). Всё, что нужно для старта.",
  },
  {
    q: "Какие гарантии? Что если не зайдёт?",
    a: "В течение 14 дней с момента оплаты — вернём деньги без вопросов и условий, если поймёшь, что формат не твой.",
  },
  {
    q: "Сертификат принимают компании?",
    a: "Сертификат подтверждает, что ты прошёл программу, и помогает в переговорах с клиентами и работодателями. Но в найме и фрилансе главное — кейсы, а их ты соберёшь во время интенсива.",
  },
  {
    q: "Можно оплатить рассрочкой?",
    a: "При цене 1 990 ₸ рассрочка не нужна. Если интересует серьёзная работа в команде на других условиях — обсудим в WhatsApp.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-20 md:py-24 bg-white text-zinc-950 relative overflow-hidden"
      id="faq"
    >
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full font-bold text-xs uppercase tracking-widest mb-5 border border-zinc-200">
              <HelpCircle className="w-3.5 h-3.5" />
              Частые вопросы
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="text-balance text-3xl md:text-4xl font-black tracking-tight"
            >
              Остались вопросы?
            </motion.h2>
          </div>

          <div className="space-y-2 mb-14">
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left group rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-colors overflow-hidden bg-white"
              >
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="font-bold text-base md:text-lg text-zinc-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-zinc-600 leading-relaxed text-sm md:text-base">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="p-7 md:p-9 rounded-[2rem] bg-red-50 border border-red-100 relative overflow-hidden"
          >
            <h3 className="text-lg md:text-xl font-black text-red-900 mb-5 uppercase tracking-widest">
              Кому точно НЕ стоит заходить:
            </h3>
            <div className="space-y-3.5">
              {[
                "Если ты ищешь кнопку «бабло» и не готов работать.",
                "Если ты привык ныть и винить всех вокруг, кроме себя.",
                "Если ты не готов вкладывать время и дисциплину.",
                "Если ты думаешь, что я сделаю всё за тебя.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-800 font-bold text-sm md:text-base leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-red-900 text-white rounded-2xl text-center">
              <p className="font-black tracking-tight text-base md:text-lg">
                👉 Если это про тебя — просто закрой эту страницу. Нам не по пути.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
