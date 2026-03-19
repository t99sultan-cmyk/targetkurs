import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="solution-section" id="solution-section">
      <div className="container">
         <div className="solution-intro text-center reveal-on-scroll">
            <p className="text-lg font-bold mb-3">📢 Именно так мои ученики уже выходят на стабильные 500 000+ тг в месяц.</p>
            
            <div className="proof-gallery mt-5 mb-4 w-full flex flex-col items-center">
              <img src="/v1-images/dilnaz_chat.jpg" alt="Скриншот переписки Дильназ" className="w-full max-w-sm shadow-xl" style={{ marginBottom: '40px', borderRadius: '16px', border: '5px solid #fff' }} />
              <img src="/v1-images/islam_new_chat.jpg" alt="Скриншот переписки Ислама" className="w-full max-w-sm shadow-xl" style={{ borderRadius: '16px', border: '5px solid #fff' }} />
            </div>
         </div>

         <div className="solution-header text-center reveal-on-scroll mt-5">
            <h2 className="section-title">
               Формула успеха: <br/>
               Как реально <span className="text-gold">начать зарабатывать на таргете?</span>
            </h2>
            <p className="section-subtitle">
               Большинство курсов учат нажимать кнопки, но не объясняют, как реально зарабатывать. В итоге люди остаются с теорией, но без клиентов и денег.
            </p>
         </div>

         <div className="solution-promise glass-card reveal-on-scroll text-center" style={{ background: '#fff', border: '1px solid rgba(255, 51, 102, 0.3)', boxShadow: '0 5px 20px rgba(255, 51, 102, 0.05)' }}>
            <h3 style={{ color: '#1a1a1a', fontWeight: 'bold' }}>Я же даю не просто знания, а готовую систему, которая включает <span style={{color: '#ff3366'}}>4 пазла маркетинга:</span></h3>
         </div>

         <div className="solution-steps mt-4 reveal-on-scroll">
            
            <div className="step-card">
               <div className="step-number">1</div>
               <h4 className="step-title">Как привлекать клиентов, которые готовы платить</h4>
               <div className="step-compare">
                 <p className="wrong">❌ Ты не будешь писать в директ и упрашивать о работе.</p>
                 <p className="right">✅ Я покажу, как делать так, чтобы клиенты сами выходили на тебя.</p>
               </div>
            </div>

            <div className="step-card">
               <div className="step-number">2</div>
               <h4 className="step-title">Как делать рекламу, которая реально продает</h4>
               <div className="step-compare">
                 <p className="wrong">❌ Ты не будешь просто нажимать кнопки в Ads Manager.</p>
                 <p className="right">✅ Я научу видеть рекламу с точки зрения денег: как создавать креативы и офферы, которые дают заявки и прибыль.</p>
               </div>
            </div>

            <div className="step-card">
               <div className="step-number">3</div>
               <h4 className="step-title">Как работать с клиентами, чтобы они платили дорого</h4>
               <div className="step-compare">
                 <p className="wrong">❌ Ты не будешь сливать бюджеты и терять клиентов.</p>
                 <p className="right">✅ Я дам систему ведения проектов: как выстраивать отношения, чтобы они рекомендовали тебя.</p>
               </div>
            </div>

            <div className="step-card">
               <div className="step-number">4</div>
               <h4 className="step-title">Как масштабироваться и создать команду</h4>
               <div className="step-compare">
                 <p className="wrong">❌ Ты не будешь работать 24/7 и брать все проекты на себя.</p>
                 <p className="right">✅ Я покажу, как делегировать рутину и расти в доходе чужими руками.</p>
               </div>
            </div>

         </div>

          <div className="solution-footer text-center mt-8 pb-4 reveal-on-scroll">
            <h2 className="text-2xl font-bold mb-8 px-4">➡ Дальше я покажу реальные кейсы людей, которые применили эту систему и добились результата.</h2>
            
            <div className="w-full flex flex-col items-center px-4">
               <div className="photo-frame w-full max-w-sm" style={{ marginBottom: '50px', padding: '12px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.15)' }}>
                   <img src="/v1-images/intro_photo_suit.jpg" alt="Тимур в костюме" className="w-full" style={{ borderRadius: '6px', display: 'block' }} />
               </div>
               
               <div className="photo-frame w-full max-w-sm" style={{ padding: '12px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.15)' }}>
                   <img src="/v1-images/intro_photo_money.jpg" alt="Результаты в тенге" className="w-full" style={{ borderRadius: '6px', display: 'block' }} />
               </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default SolutionSection;
