import React, { useState } from 'react';

const incomeOptions = [
  { id: '150k', title: 'До 150 000 ₸', baseText: 'До 150 000 ₸', multText: 'До 600 000 ₸' },
  { id: '300k', title: '150 000 – 300 000 ₸', baseText: '150 000 – 300 000 ₸', multText: '600 000 – 1 200 000 ₸' },
  { id: '600k', title: '300 000 – 600 000 ₸', baseText: '300 000 – 600 000 ₸', multText: '1 200 000 – 2 400 000 ₸' },
  { id: '1m', title: 'Более 600 000 ₸', baseText: 'Более 600 000 ₸', multText: 'Более 2 400 000 ₸' },
];

const readinessOptions = [
  { id: 'slow', icon: '🐢', title: 'Осторожный (ищу стабильность)' },
  { id: 'normal', icon: '⚡️', title: 'Обычный (готов пробовать)' },
  { id: 'fast', icon: '🚀', title: 'Агрессивный (хочу результат быстро)' },
];

const SimulatorSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [income, setIncome] = useState(incomeOptions[0]);
  const [readiness, setReadiness] = useState(readinessOptions[0]);
  const [rejected, setRejected] = useState(false);

  // Calculate future date
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  const dateString = futureDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const getDayAndMonth = () => {
    return futureDate.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long'
    });
  };

  const handleIncomeSelect = (opt: typeof incomeOptions[0]) => {
    setIncome(opt);
    setStep(2);
  };

  const handleReadinessSelect = (opt: typeof readinessOptions[0]) => {
    setReadiness(opt);
    setStep(3);
  };

  const scrollToSolution = () => {
    document.getElementById('solution-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="simulator-section">
      <div className="container">
        
        <div className="text-center mb-6 reveal-on-scroll">
           <div className="badge inline-block mb-3">LIFE RESET 2.0</div>
           <h2 className="section-title text-3xl md:text-4xl">Смоделируй свой следующий год</h2>
        </div>

        <div className="simulator-container glass-card reveal-on-scroll">
          <div className="simulator-inner p-6 md:p-10">
            
            {/* SCREEN 1: INCOME */}
            {step === 1 && (
              <div className="sim-screen sim-fade-in w-full max-w-2xl mx-auto">
                <div className="sim-step-badge mb-4">Шаг 1 из 2</div>
                <h3 className="sim-question text-2xl md:text-3xl font-bold mb-8 text-center">Сколько ты зарабатываешь сейчас?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {incomeOptions.map(opt => (
                    <button 
                      key={opt.id} 
                      className="sim-card-btn"
                      onClick={() => handleIncomeSelect(opt)}
                    >
                      <span className="sim-card-text text-xl font-semibold">{opt.title}</span>
                      <div className="sim-card-hover-fx"></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 2: READINESS */}
            {step === 2 && (
              <div className="sim-screen sim-fade-in w-full max-w-2xl mx-auto">
                <div className="sim-step-badge mb-4">Шаг 2 из 2</div>
                <h3 className="sim-question text-2xl md:text-3xl font-bold mb-8 text-center">Твой настрой на этот год?</h3>
                
                <div className="flex flex-col gap-4">
                  {readinessOptions.map(opt => (
                    <button 
                      key={opt.id} 
                      className="sim-card-btn flex items-center justify-start p-6"
                      onClick={() => handleReadinessSelect(opt)}
                    >
                      <span className="text-4xl mr-4">{opt.icon}</span>
                      <span className="sim-card-text text-xl font-semibold text-left">{opt.title}</span>
                      <div className="sim-card-hover-fx"></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 3: RESULT & CTA */}
            {step === 3 && (
              <div className="sim-screen sim-fade-in w-full max-w-4xl mx-auto">
                <h2 className="sim-title text-center text-3xl md:text-4xl font-extrabold mb-10">
                  Твоё <span className="text-gold">{getDayAndMonth()} {futureDate.getFullYear()} года</span>
                </h2>
                
                <div className="sim-split-container flex flex-col md:flex-row gap-6 mb-10">
                  
                  {/* LEFT SIDE: PATH 1 */}
                  <div className="sim-split-card sim-split-left flex-1 p-6 border border-white/10 rounded-2xl bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-500/50"></div>
                    <div className="mb-4 inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm font-bold uppercase tracking-wider">Путь №1 — Без изменений</div>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">Прошел ровно год. Сегодня {dateString}. Ты всё ещё там же.</p>
                    
                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 mb-6">
                      <div className="text-sm text-gray-400 mb-1">Доход:</div>
                      <div className="text-2xl font-bold text-white">{income.baseText}</div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <p className="italic text-gray-400">«Ты просто стал на год старше, но не богаче»</p>
                    </div>
                  </div>

                  {/* RIGHT SIDE: PATH 2 */}
                  <div className="sim-split-card sim-split-right flex-1 p-6 border border-gold/30 rounded-2xl bg-gold/5 relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-300"></div>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 blur-3xl rounded-full"></div>
                    
                    <div className="mb-4 inline-block px-3 py-1 bg-gold/20 text-gold rounded-lg text-sm font-bold uppercase tracking-wider">Путь №2 — Таргет/Команда</div>
                    <p className="text-lg text-white mb-6 leading-relaxed font-medium">{dateString}. Твой новый уровень.</p>
                    
                    <div className="bg-gold/10 p-4 rounded-xl border border-gold/20 mb-6 transform scale-105 shadow-lg">
                      <div className="text-sm text-gold/80 mb-1 font-semibold uppercase tracking-wide">Доход:</div>
                      <div className="text-3xl font-extrabold text-gold text-glow">{income.multText}</div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gold/20">
                      <p className="italic text-white font-medium">«Твой навык теперь печатает деньги. Ты в ресурсе и в команде»</p>
                    </div>
                  </div>

                </div>

                {/* CTA BLOCK */}
                <div className="sim-cta-container flex flex-col items-center mt-8">
                  {!rejected ? (
                    <>
                      <button 
                        className="sim-btn-primary w-full max-w-md py-4 text-center text-lg md:text-xl transform transition hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(212,175,55,0.3)] mb-4"
                        onClick={scrollToSolution}
                      >
                        ДА, Я ВЫБИРАЮ ПУТЬ №2
                      </button>
                      
                      <button 
                        className="text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white underline-offset-4 text-sm md:text-base py-2"
                        onClick={() => setRejected(true)}
                      >
                        Нет, мне нравится Путь №1
                      </button>
                    </>
                  ) : (
                    <div className="sim-fade-in text-center flex flex-col items-center">
                      <div className="p-6 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl max-w-lg mb-6">
                        <p className="text-lg text-gray-300 font-medium">
                          Окей, мы уважаем твой выбор. Возвращайся, когда стабильность надоест. Твоё время тикает... ⏳
                        </p>
                      </div>
                      <button 
                        className="animate-bounce w-12 h-12 flex items-center justify-center bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                        onClick={scrollToSolution}
                        aria-label="Scroll down"
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
