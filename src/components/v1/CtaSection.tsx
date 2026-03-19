import React from 'react';
import { useGlobalTimer } from '@/hooks/v1/useGlobalTimer';

const CtaSection: React.FC = () => {
  const timeLeft = useGlobalTimer();

  return (
    <section className="cta-section" style={{backgroundColor: 'var(--bg-primary)', paddingTop: '2rem', paddingBottom: '4rem'}}>
      <div className="container" style={{maxWidth: '600px'}}>
        
        <div className="cta-wrapper glass-card" style={{color: '#ffffff', textAlign: 'left', background: '#161618', border: '1px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'}}>
           
           <h2 className="cta-title" style={{fontSize: '2rem', fontWeight: 700, marginBottom: '2rem'}}>
             Теперь у тебя <span style={{color: '#d4af37'}}>два варианта.</span>
           </h2>

           <div className="variant-box mb-4" style={{display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', opacity: 0.8}}>
              <span style={{color: '#ff4d4d', fontSize: '1.5rem', opacity: 0.7}}>❌</span>
              <p style={{fontSize: '1.05rem', margin: 0, color: '#a1a1a6'}}>Оставить всё как есть.</p>
           </div>

           <div className="variant-box mb-5" style={{display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(212, 175, 55, 0.15)', padding: '1.25rem', borderRadius: '12px', border: '2px solid rgba(212, 175, 55, 0.5)', boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)', transform: 'scale(1.02)'}}>
              <div style={{background: '#00a854', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', flexShrink: 0, boxShadow: '0 0 10px rgba(0,168,84,0.4)'}}>✓</div>
              <p style={{fontSize: '1.15rem', margin: 0, color: '#ffffff'}}>
                <span style={{color: '#f5cf7b', fontWeight: '800'}}>Или сделать первый шаг –</span><br/>
                получить разбор системы бесплатно.
              </p>
           </div>

           <h3 style={{fontSize: '1.3rem', fontWeight: 700, marginBottom: '2rem', marginTop: '2.5rem', color: '#ffffff'}}>
             Жми кнопку и узнай, как ты можешь начать зарабатывать на таргете <span style={{color: '#d4af37'}}>уже в этом месяце.</span>
           </h3>

           <div className="alert-box mb-4" style={{display: 'flex', gap: '12px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '1rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'}}>
              <span className="pulse-dot" style={{fontSize: '1.2rem'}}>⏰</span>
              <div>
                <strong style={{fontSize: '0.95rem', color: '#ffffff', display: 'inline'}}>Важно:</strong> <span style={{fontSize: '0.95rem', color: '#a1a1a6'}}>Количество мест в команде ограничено.</span>
              </div>
           </div>

           <div className="cta-action text-center mt-5 mb-5">
             <a href="/" className="btn-primary btn-pulse w-full text-center" style={{background: 'linear-gradient(90deg, #d4af37, #f5cf7b)', color: '#1a1a1a', fontSize: '1.1rem', padding: '1rem 2rem', borderRadius: '40px', display: 'block', fontWeight: 700, textDecoration: 'none', boxShadow: '0 10px 20px rgba(212,175,55,0.3)'}}>
               Хочу в команду - готов зарабатывать 500 000₸+
             </a>
           </div>

           <h2 className="cta-title mt-5" style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff', textAlign: 'center'}}>
             Запись закрывается<br/> <span style={{color: '#d4af37'}}>сегодня ночью!</span>
           </h2>

           <p style={{fontSize: '1rem', marginBottom: '2rem', color: '#a1a1a6', textAlign: 'center'}}>
             После этого новые заявки<br/>
             приниматься <strong style={{color: '#ff4d4d'}}>НЕ БУДУТ.</strong>
           </p>

           <h3 style={{fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff'}}>Что это значит?</h3>

           <div className="variant-box mb-4" style={{display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', opacity: 0.8}}>
              <span style={{color: '#ff4d4d', fontSize: '1.2rem', flexShrink: 0, opacity: 0.7}}>❌</span>
              <p style={{fontSize: '1rem', margin: 0, color: '#a1a1a6'}}>Пропустить этот набор – возможно, <span style={{color: '#d4af37', fontWeight: 'bold'}}>второго шанса уже не будет.</span></p>
           </div>
           
           <div className="variant-box mb-4" style={{display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', opacity: 0.8}}>
              <span style={{color: '#ff4d4d', fontSize: '1.2rem', flexShrink: 0, opacity: 0.7}}>❌</span>
              <p style={{fontSize: '1rem', margin: 0, color: '#a1a1a6'}}>Пока ты думаешь, <span style={{color: '#d4af37', fontWeight: 'bold'}}>другие</span> уже начали зарабатывать.</p>
           </div>

           <div className="variant-box mb-5" style={{display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', opacity: 0.8}}>
              <span style={{color: '#ff4d4d', fontSize: '1.2rem', flexShrink: 0, opacity: 0.7}}>❌</span>
              <p style={{fontSize: '1rem', margin: 0, color: '#a1a1a6'}}>Через пару недель ты увидишь их результаты и поймешь – шанс упущен.</p>
           </div>

           <h2 className="cta-title mt-5" style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff', textAlign: 'center'}}>
             Мест осталось: <span style={{color: '#d4af37'}}>6 из 10.</span>
           </h2>

           <div className="alert-box mb-4" style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'}}>
              <span className="pulse-dot" style={{fontSize: '2rem'}}>⏳</span>
              <div style={{width: '100%', textAlign: 'center'}}>
                <p style={{fontSize: '1.05rem', margin: 0, color: '#ffffff'}}>
                  Как только последние места займут – регистрация<br/> <strong style={{color: '#d4af37'}}>закроется без предупреждений.</strong>
                </p>
                
                {/* Timer */}
                <div style={{marginTop: '1.5rem', textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
                  <div style={{fontSize: '0.75rem', color: '#a1a1a6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px'}}>До закрытия окна осталось</div>
                  <div style={{fontFamily: 'monospace', fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '3px'}}>
                     {timeLeft}
                  </div>
                </div>
              </div>
           </div>

           <div className="cta-action text-center mt-5">
             <a href="/" className="btn-primary btn-pulse w-full text-center" style={{background: 'linear-gradient(90deg, #ff6b00, #ff8c00)', color: '#fff', fontSize: '1.2rem', padding: '1rem 2rem', borderRadius: '40px', display: 'block', fontWeight: 700, textDecoration: 'none'}}>
               Хочу в команду - готов зарабатывать 500 000₸+
             </a>
           </div>

        </div>

      </div>
    </section>
  );
};

export default CtaSection;
