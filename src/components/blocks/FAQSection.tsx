"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export function FAQSection() {
  return (
    <section className="py-24 bg-white text-zinc-950 relative overflow-hidden" id="should-you-join">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-8"
          >
            Остались вопросы? <br /><span className="text-zinc-400 font-medium">Или сомнения?</span>
          </motion.h2>

          <div className="p-8 md:p-10 rounded-[3rem] bg-red-50 border border-red-100 text-left mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-[100px]" />
            <h3 className="text-2xl font-black text-red-900 mb-8 uppercase tracking-widest">Кому точно НЕ стоит заходить:</h3>
            <div className="space-y-6">
              {[
                'Если ты ищешь кнопку «бабло» и не готов работать.',
                'Если ты привык ныть и винить всех вокруг, кроме себя.',
                'Если ты не готов вкладывать время и дисциплину.',
                'Если ты думаешь, что я сделаю всё за тебя.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-800 font-bold text-lg">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-red-900 text-white rounded-2xl text-center">
               <p className="text-xl font-black tracking-tight">👉 Если это про тебя – просто закрой эту страницу. Нам не по пути.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
