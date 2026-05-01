"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RotateCcw, Target, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useWhatsAppClick } from "@/hooks/useWhatsAppClick";

type Q = {
  id: string;
  question: string;
  options: { value: string; label: string }[];
};

const questions: Q[] = [
  {
    id: "age",
    question: "Сколько тебе лет?",
    options: [
      { value: "u18", label: "До 18 лет" },
      { value: "18-24", label: "18–24" },
      { value: "25-34", label: "25–34" },
      { value: "35-44", label: "35–44" },
      { value: "45+", label: "45 и старше" },
    ],
  },
  {
    id: "exp",
    question: "Какой у тебя опыт с таргетом?",
    options: [
      { value: "none", label: "Совсем новичок — никогда не запускал рекламу" },
      { value: "junior", label: "Запускал немного, доход до 100 000 ₸" },
      { value: "mid", label: "Работаю таргетологом, 100–400 000 ₸/мес" },
      { value: "senior", label: "Опытный, выше 400 000 ₸/мес, нужен рост" },
    ],
  },
  {
    id: "time",
    question: "Сколько часов в день готов уделять?",
    options: [
      { value: "low", label: "1–2 часа — у меня основная работа" },
      { value: "mid", label: "3–4 часа — могу выделить вечером" },
      { value: "high", label: "5+ часов — готов погружаться" },
    ],
  },
  {
    id: "goal",
    question: "Какую цель хочешь достичь за 60 дней?",
    options: [
      { value: "300", label: "Стабильные 300 000 ₸/мес" },
      { value: "500", label: "500–700 000 ₸/мес" },
      { value: "1m", label: "Выйти на 1 000 000 ₸+" },
    ],
  },
  {
    id: "block",
    question: "Что мешает прямо сейчас?",
    options: [
      { value: "noclients", label: "Нет клиентов и не знаю, где их брать" },
      { value: "lowcheck", label: "Клиенты есть, но платят мало" },
      { value: "burn", label: "Выгораю — много работы за небольшие деньги" },
      { value: "skill", label: "Не уверен в своих навыках" },
    ],
  },
  {
    id: "ready",
    question:
      "Готов реально действовать — поглощать знания, внедрять, не откладывать на потом?",
    options: [
      { value: "now", label: "Да, готов начать прямо сейчас" },
      { value: "soon", label: "Готов, но нужно немного времени собраться" },
      { value: "maybe", label: "Думаю, попробую — посмотрю, как пойдёт" },
      { value: "later", label: "Скорее всего отложу, не сейчас" },
    ],
  },
];

function buildResult(answers: Record<string, string>) {
  const exp = answers.exp;
  const goal = answers.goal;
  const time = answers.time;
  const ready = answers.ready;
  const age = answers.age;

  let headline = "Тебе подходит интенсив";
  let body =
    "Ты в той точке, где система даёт максимум прироста за короткий срок.";

  if (ready === "later") {
    headline = "Сейчас, похоже, не твоё время";
    body =
      "Если откладываешь — результата не будет, как бы ни был хорош материал. Возвращайся, когда будешь готов реально вкладываться.";
    return { headline, body };
  }
  if (age === "u18") {
    headline = "Рано, но направление правильное";
    body =
      "До 18 — заходи, изучай, разбирайся. Но реальные деньги пойдут, когда сможешь работать с клиентами как взрослый. Напиши — расскажу, с чего начать сейчас.";
    return { headline, body };
  }

  if (exp === "none" && goal === "1m") {
    headline = "Высокая цель — но реальная";
    body =
      "С нуля до 1 000 000 ₸ — это интенсив + дисциплина 90 дней. Покажу пошаговый план.";
  } else if (exp === "senior") {
    headline = "Тебе нужно масштабирование, а не база";
    body =
      "Скорее всего, тебе подойдёт работа в команде, а не интенсив. Обсудим в WhatsApp.";
  } else if (time === "low" && goal === "1m") {
    headline = "Цель амбициозная, времени мало";
    body =
      "Реалистично — выход на 500 000 ₸ за 60 дней при 1–2 часах. К миллиону — позже. Покажу план.";
  } else if (exp === "junior") {
    headline = "Идеальный стартовый профиль";
    body =
      "У тебя уже есть база — на интенсиве ты быстро поднимешь чек и системно соберёшь поток клиентов.";
  }
  return { headline, body };
}

function answerLabels(answers: Record<string, string>) {
  const map = new Map<string, Map<string, string>>();
  for (const q of questions) {
    const opts = new Map<string, string>();
    for (const o of q.options) opts.set(o.value, o.label);
    map.set(q.id, opts);
  }
  return questions
    .map((q) => {
      const v = answers[q.id];
      if (!v) return null;
      const label = map.get(q.id)?.get(v) ?? v;
      return `• ${q.question} ${label}`;
    })
    .filter(Boolean)
    .join("\n");
}

export function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const { handleWhatsAppClick } = useWhatsAppClick();

  const total = questions.length;
  const progress = Math.round(((done ? total : step) / total) * 100);

  const choose = (val: string) => {
    const q = questions[step];
    const next = { ...answers, [q.id]: val };
    setAnswers(next);
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const result = done ? buildResult(answers) : null;

  return (
    <section
      className="py-20 bg-zinc-50 relative overflow-hidden text-zinc-950"
      id="quiz"
    >
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-600 rounded-full font-bold text-xs uppercase tracking-widest mb-5 border border-indigo-500/20">
            <Target className="w-3.5 h-3.5" />
            30 секунд · персональный план
          </div>
          <h2 className="text-balance text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Подходит ли тебе интенсив?
          </h2>
          <p className="text-base text-zinc-500 font-medium mt-3">
            5 вопросов — и я скажу честно, стоит ли тебе заходить и какой
            результат реален именно для тебя.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-zinc-100 rounded-[2rem] shadow-[0_18px_44px_rgba(0,0,0,0.05)] p-6 md:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Шаг {done ? total : step + 1} / {total}
            </span>
            {done && (
              <button
                onClick={restart}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Пройти заново
              </button>
            )}
          </div>
          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-8">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl md:text-2xl font-black mb-6 leading-snug">
                  {questions[step].question}
                </h3>
                <div className="space-y-2.5">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => choose(opt.value)}
                      className="w-full text-left flex items-center justify-between gap-3 p-4 rounded-xl border border-zinc-200 bg-white hover:border-emerald-500 hover:bg-emerald-50 active:scale-[0.99] transition-all"
                    >
                      <span className="font-medium">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <span className="inline-block text-5xl mb-4">🎯</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 text-balance">
                    {result.headline}
                  </h3>
                  <p className="text-base text-zinc-600 max-w-lg mx-auto text-balance">
                    {result.body}
                  </p>
                </div>

                <a
                  href={`https://wa.me/77064089933?text=${encodeURIComponent(
                    `Здравствуйте! Прошёл квиз — хочу обсудить интенсив.\n\nМои ответы:\n${answerLabels(answers)}`
                  )}`}
                  onClick={handleWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full h-14 sm:h-16 text-base sm:text-lg font-black bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-[18px] shadow-[0_0_36px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] px-4"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Написать в WhatsApp с моими ответами
                    </span>
                  </Button>
                </a>
                <p className="text-center text-xs text-zinc-500 mt-3 mb-4">
                  Откроется чат с уже заполненными ответами квиза — просто
                  отправь.
                </p>

                <a href="#pricing" className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-12 font-bold border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                  >
                    Вернуться к ценам и записи →
                  </Button>
                </a>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
