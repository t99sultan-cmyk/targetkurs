import React from 'react';

const CasesSection: React.FC = () => {
  return (
    <section className="cases-section">
      <div className="container">
        
        <div className="islam-case glass-card reveal-on-scroll">
           <div className="case-grid">
               <div className="case-content">
                 <span className="case-label">Кейс ученика</span>
                 <h3 className="case-title">От увольнения до 1 800 000 тг в месяц и собственной квартиры</h3>
                 
                 <div className="case-stats mb-4">
                    <div className="stat-item stat-past">
                       <span className="stat-label">Было</span>
                       <span className="stat-value">ЗП 300 000 ₸</span>
                    </div>
                    <div className="stat-arrow">→</div>
                    <div className="stat-item highlighted">
                       <span className="stat-label">Стало</span>
                       <span className="stat-value">ЗП 1 800 000 ₸</span>
                    </div>
                 </div>

                 <p className="case-desc">
                   6 месяцев назад Ислам работал менеджером по продажам.
                   Зарплата – 300 000 тг. Рабочий день – 8-10 часов.
                 </p>
                 <div className="quote-box mb-5">
                   Ощущение? “Я трачу всю жизнь, продавая чужие товары за копейки.”<br/>
                   <strong>А потом его уволили.</strong>
                 </div>

                 <div className="w-full flex justify-center mb-6 px-2">
                    <img src="/v1-images/islam_case_1.jpg" alt="Скриншот переписки 1" className="w-full max-w-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] object-cover" style={{ border: '6px solid #fff' }} />
                 </div>

                 <p className="case-desc mb-5 text-lg">
                   Но он рискнул и пошел в таргет. <strong>Первые деньги – уже через 7 дней!</strong> Клиент доволен → сразу заказ на месяц за 200 000₸.
                 </p>

                 <div className="w-full flex justify-center mb-6 px-2">
                    <img src="/v1-images/islam_case_2.jpg" alt="Скриншот переписки 2" className="w-full max-w-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] object-cover" style={{ border: '6px solid #fff' }} />
                 </div>
                 
                 <p className="case-desc mb-5 text-lg font-medium">
                   <strong>Работает из дома, путешествует, тратит деньги на себя, а не на аренду офиса.</strong>
                 </p>

                 <div className="w-full flex justify-center mt-2 mb-6 px-2">
                    <img src="/v1-images/islam_case_3.jpg" alt="Скриншот переписки 3" className="w-full max-w-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] object-cover" style={{ border: '6px solid #fff' }} />
                 </div>

                 <div className="proof-contact mt-2">
                    <p className="text-secondary">Думаешь, это неправда? Пиши Исламу и спроси сам: <strong>@isssaq</strong></p>
                 </div>
              </div>
           </div>
        </div>

        {/* --- Алие кейс (Добавлен как полноценный) --- */}
        <div className="aliya-case glass-card reveal-on-scroll mt-6">
           <div className="case-grid">
               <div className="case-content">
                 <span className="case-label">Кейс ученицы</span>
                 <h3 className="case-title">От работы администратором до 600 000+ тг в месяц</h3>
                 
                 <div className="case-stats mb-4">
                    <div className="stat-item stat-past">
                       <span className="stat-label">Было</span>
                       <span className="stat-value">ЗП 150 000 ₸</span>
                    </div>
                    <div className="stat-arrow">→</div>
                    <div className="stat-item highlighted">
                       <span className="stat-label">Стало</span>
                       <span className="stat-value">ЗП 600 000+ ₸</span>
                    </div>
                 </div>

                 <p className="case-desc">
                   До таргета Алия работала администратором в салоне красоты и зарабатывала 150 000 тенге.
                 </p>

                 <div className="w-full flex justify-center mt-5 mb-5 px-2">
                    <img src="/v1-images/aliya_case.jpg" alt="Скриншот переписки Алии" className="w-full max-w-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] object-cover" style={{ border: '6px solid #fff' }} />
                 </div>

                 <p className="case-desc mb-5 text-lg">
                   После таргета – <strong>клиенты сами бегают за ней</strong>.
                 </p>
                 
                 <p className="case-desc mb-5 text-lg font-medium">
                   Вышла на стабильные 600 000+ тг в месяц на таргете, её мышление полностью изменилось.
                 </p>
              </div>
           </div>
        </div>

        <div className="text-center mt-8 mb-4 reveal-on-scroll">
           <h3 className="text-2xl font-bold section-title">Они тоже были в шоке от результатов</h3>
        </div>

        <div className="mini-cases-grid reveal-on-scroll">
           <div className="mini-case glass-card">
              <div className="mini-case-header">
                 <div>
                    <h4>Амир,<br/>21 год</h4>
                    <span className="text-gold font-bold">500 000 тг/мес</span>
                 </div>
              </div>
              <p className="mini-case-text">
                 <strong>Было:</strong> Студент без денег. <br/>
                 <strong>После:</strong> Зарабатывает больше родителей, оплачивает учебу сам.
              </p>
           </div>

           {/* Removed Dana's case per client feedback */}
        </div>

      </div>
    </section>
  );
};

export default CasesSection;
