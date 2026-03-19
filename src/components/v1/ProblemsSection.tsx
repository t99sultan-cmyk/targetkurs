import React from 'react';

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: "🤔",
      text: "Боишься попробовать, так как думаешь: «А вдруг не получится?»",
      delay: "1"
    },
    {
      icon: "💸",
      text: "Ты уже купил пару курсов, но клиентов – ноль. Деньги потратил, результата нет.",
      delay: "2"
    },
    {
      icon: "📉",
      text: "Листал вакансии, но везде требуют «опыт от 1 года».",
      delay: "3"
    },
    {
      icon: "🤐",
      text: "Пробовал писать клиентам, но либо просят работать бесплатно, либо вообще не отвечают.",
      delay: "4"
    },
    {
      icon: "🤯",
      text: "Кажется, что слишком много таргетологов, и заработать тут могут только профи.",
      delay: "1"
    },
    {
      icon: "😕",
      text: "Видишь, как другие зарабатывают на таргете, но у тебя ничего не выходит.",
      delay: "2"
    }
  ];

  return (
    <section className="problems-section">
      <div className="container">
        <h2 className="section-title reveal-on-scroll">
          Скорее всего, у тебя уже были мысли <br/>
          <span className="text-gold">попробовать таргет…</span>
        </h2>
        <p className="section-subtitle reveal-on-scroll">
          Но вот что происходит на самом деле:
        </p>

        <div className="problems-grid">
          {problems.map((prob, idx) => (
            <div 
               key={idx} 
               className={`problem-card glass-card reveal-on-scroll`} 
               style={{transitionDelay: `${parseInt(prob.delay) * 0.1}s`}}
            >
              <div className="problem-icon">{prob.icon}</div>
              <p className="problem-text">{prob.text}</p>
            </div>
          ))}
        </div>

        <div className="problems-summary glass-card reveal-on-scroll">
          <div className="summary-block highlight-red">
            <span className="summary-icon">💡</span>
            <div>
              <strong>На этом этапе застревают 90% новичков.</strong>
              <p>Они теряют время, ждут идеального момента, но так и не начинают зарабатывать.</p>
            </div>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-block highlight-green">
            <span className="summary-icon">🔥</span>
            <div>
              <strong>Но есть 10%, кто выходит на стабильные 500 000₸ в месяц.</strong>
              <p>У них есть система, которая убирает страх, дает четкие шаги и позволяет получить первые заказы уже в первые 2 недели.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemsSection;
