import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="story-section">
      <div className="container">
        
        <div className="story-grid">
          
          <div className="story-content reveal-on-scroll">
             <div className="badge">
               Мой Путь
             </div>
             
             <h2 className="section-title text-left">
               Как я сам прошел этот путь <br/>
               <span className="text-gold">и вышел на высокий доход</span>
             </h2>

             <div className="story-text">
                <p>
                  <strong>Еще пару лет назад я сидел перед ноутбуком, смотрел вебинар и думал: «Ну вот, сейчас точно разберусь…»</strong>
                </p>
                <p>Но проходил день, неделя, месяц – а денег по-прежнему не было.</p>
                
                <ul className="story-list">
                  <li><span className="list-icon">❌</span>Я смотрел курсы, но понимал, что просто нажимать кнопки в Ads Manager – этого мало.</li>
                  <li><span className="list-icon">❌</span>Я пробовал писать потенциальным клиентам, но никто не отвечал.</li>
                  <li><span className="list-icon">❌</span>Когда брал первые заказы, ставил низкий ценник – и в итоге пахал за копейки.</li>
                </ul>

                <div className="quote-box glass-card mb-4">
                  <p>“Может, это не мое? Может, рынок и правда перегрет?”</p>
                </div>

                <p>Но потом я понял <strong>главную ошибку</strong> – таргет это не просто настройка рекламы.</p>
                <p>📌 <strong>Это система</strong> – если ты знаешь, как привлекать клиентов и выдавать результат, тебе готовы платить большие деньги.</p>

                <div className="timeline">
                   <div className="timeline-item">
                     <div className="timeline-dot"></div>
                     <div className="timeline-content">
                       <h4>Первый проект – 50 000 тг</h4>
                       <p>Я думал, что клиент будет недоволен, но он вернулся за повторным заказом!</p>
                     </div>
                   </div>
                   <div className="timeline-item">
                     <div className="timeline-dot"></div>
                     <div className="timeline-content">
                       <h4>Через месяц – 300 000 тг</h4>
                       <p>Это были самые легкие деньги, которые я когда-либо зарабатывал.</p>
                     </div>
                   </div>
                   <div className="timeline-item">
                     <div className="timeline-dot highlight-dot"></div>
                     <div className="timeline-content">
                       <h4 className="text-gold">Сейчас мои ученики 500 000+ тг/мес</h4>
                       <p>Просто следуя этой системе.</p>
                     </div>
                   </div>
                </div>
                
                <div className="cta-inline mt-4">
                  <p className="text-lg font-bold mb-3">Если ты хочешь так же – я помогу. Главное, сделать первый шаг.</p>
                </div>
             </div>
          </div>

          <div className="story-reason glass-card reveal-on-scroll">
             <h3 className="reason-title">
               <span className="text-neon">💡</span> Почему я беру в команду?
             </h3>
             <p className="reason-sub">
                Сейчас ко мне выходит все больше бизнесов, которым нужны крутые таргетологи.
             </p>

             <ul className="reason-list">
               <li>
                 <div className="reason-icon">📌</div>
                 <p>Я не успеваю вести все проекты сам, поэтому мне нужна команда специалистов, которые будут работать по моей проверенной модели.</p>
               </li>
               <li>
                 <div className="reason-icon">📌</div>
                 <p>Я обучу тебя с нуля, помогу выйти на стабильный доход и дам реальные заказы.</p>
               </li>
               <li>
                 <div className="reason-icon">📌</div>
                 <p>Ты не будешь просто проходить курс – ты станешь частью команды и начнешь зарабатывать.</p>
               </li>
             </ul>

             <div className="reason-goal mt-4">
               <strong>⚡ Моя цель</strong> – вырастить команду топовых таргетологов, которые смогут делать результат и получать от 500 000 тг за проект.
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StorySection;
