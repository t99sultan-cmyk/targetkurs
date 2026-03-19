import React from 'react';

const MistakesSection: React.FC = () => {
  const mistakes = [
    {
      title: "Они уверены, что без опыта им никто не заплатит",
      thought: "«Сначала надо работать бесплатно, потом меня заметят…»",
      reality: "В реальности это тупик. Бесплатно ты привыкаешь работать за копейки, и тебя потом никто не воспринимает всерьез."
    },
    {
      title: "Они хватаются за всех подряд и работают с токсичными клиентами",
      thought: "«Возьму хоть кого-то, хоть за 30 000₸…»",
      reality: "Клиент просит «подешевле», давит, требует отчетов 24/7, а потом просто пропадает, не заплатив."
    },
    {
      title: "Они льют рекламу, не понимая, что реально продает",
      thought: "«Я же все правильно настроил, почему нет заявок?»",
      reality: "Клиент говорит: «Таргет не работает», но на самом деле у него кривой оффер и плохие креативы – а ты даже не знаешь, как это исправить."
    },
    {
      title: "Они боятся называть цену выше 100 000₸ и обесценивают себя",
      thought: "«Если я скажу 150 000₸, клиент уйдет…»",
      reality: "А клиенту НЕ НУЖЕН дешевый таргетолог. Дешевым специалистам не доверяют – они выглядят как новички."
    },
    {
      title: "Они просто настраивают рекламу, а не решают бизнес-задачи",
      thought: "«Я сделал рекламу, а клиент сам разберется…»",
      reality: "Нет! Клиент понятия не имеет, что делать с заявками. Он ждет от тебя не просто рекламу, а реальный поток клиентов с прибылью."
    }
  ];

  return (
    <section className="mistakes-section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        
        <h2 className="section-title reveal-on-scroll">
          Почему большинство таргетологов <br/>
          не выходит на <br/>
          <span className="text-red-highlight">высокий доход?</span>
        </h2>
        
        <p className="section-subtitle reveal-on-scroll">
          Я разобрал более 100 кейсов начинающих таргетологов и выявил главные ошибки, которые мешают им зарабатывать.
        </p>

        <div className="mistakes-continuous-container">
          
          <div className="mistakes-feed">
             {mistakes.map((mistake, index) => (
                <div 
                   key={index} 
                   className="mistake-card glass-card reveal-on-scroll"
                >
                  <div className="mistake-header">
                    <span className="mistake-number text-red-highlight">Ошибка 0{index + 1}</span>
                    <h3 className="mistake-title">{mistake.title}</h3>
                  </div>

                  <div className="mistake-body">
                    <div className="thought-box">
                      <span className="icon">💭</span>
                      <p><em>{mistake.thought}</em></p>
                    </div>

                    <div className="reality-box">
                      <span className="icon">❌</span>
                      <p><strong>Реальность:</strong> {mistake.reality}</p>
                    </div>
                  </div>
                </div>
             ))}
             
             <div className="how-to-fix glass-card mt-4 reveal-on-scroll" style={{ backgroundColor: '#fff', color: '#1a1a1a' }}>
               <h4 className="text-gold mb-3 text-lg" style={{ color: '#d4af37', fontWeight: 'bold' }}>🔥 Как сделать иначе?</h4>
               <ul className="fix-list" style={{ color: '#1a1a1a', fontWeight: '500' }}>
                 <li>✅ Сразу работать за деньги – без бесплатных проектов.</li>
                 <li>✅ Находить клиентов, которые платят дорого и ценят специалистов.</li>
                 <li>✅ Создавать рекламу, которая реально приносит деньги.</li>
                 <li>✅ Выстраивать работу с клиентом вдолгую.</li>
               </ul>
             </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MistakesSection;
