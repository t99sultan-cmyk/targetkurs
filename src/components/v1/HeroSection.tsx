import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
             Возьму в команду и научу зарабатывать <br/>
             <span className="text-gold-gradient">на таргете</span>
          </h1>
          
          <h2 className="hero-subtitle animate-fade-in-up animate-delay-1 mt-2" style={{color: '#e53935'}}>
            – даже если ты полный новичок
          </h2>

          <p className="hero-description animate-fade-in-up animate-delay-2">
            Только проверенная система, без огромных вложений.
          </p>

          <div className="hero-cta-placeholder animate-fade-in-up animate-delay-3 h-8">
            {/* The CTA has been moved entirely to the end of the site */}
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up animate-delay-3">
            {/* The photo with ID 3C233509 was a good portrait or IMG_5331, we can use IMG_5102 2.jpg as it looks professional.
                Also we have IMG_5090 etc. We will use a placeholder styling and an image src from public.
                We'll use a relative path /v1-images/2a9ad722-1206-4a6c-8147-8d5c73e37bda.jpg as the portrait if it matches.
                Actually we'll use a CSS background or an img tag. Let's use an img tag with a specific id
            */}
            <div className="hero-image-bg-glow"></div>
            <img 
               src="/v1-images/aa228f07-3d1b-4acb-b045-8559436c3bc6.jpg" 
               alt="Sultanov" 
               className="hero-image" 
               onError={(e) => {
                 // Fallback if image not found
                 (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop';
               }}
            />
            
            <div className="floating-badge badge-1">
                <div className="badge-icon">💰</div>
                <div className="badge-text">
                   <div className="badge-title">Доход</div>
                   <div className="badge-value">от 500 000 ₸</div>
                </div>
            </div>
            
            <div className="floating-badge badge-2">
                <div className="badge-icon">🎯</div>
                <div className="badge-text">
                   <div className="badge-title">Опыт</div>
                   <div className="badge-value">С нуля</div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
