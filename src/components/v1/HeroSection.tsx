"use client";

import React from 'react';
import Image from 'next/image';
import { SplitTextReveal } from '@/components/ui/SplitTextReveal';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
             <SplitTextReveal type="words" stagger={0.05}>
               Возьму в команду и научу зарабатывать
             </SplitTextReveal>
             <br/>
             <span className="text-gold-gradient animate-fade-in-up animate-delay-1">на таргете</span>
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
            <div className="hero-image-bg-glow"></div>
            <Image
               src="/v1-images/aa228f07-3d1b-4acb-b045-8559436c3bc6.jpg"
               alt="Sultanov"
               className="hero-image"
               width={600}
               height={750}
               priority
               sizes="(max-width: 480px) 100vw, 480px"
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
