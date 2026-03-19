'use client';

import React, { useEffect } from 'react';
import '@/styles/v1/index.css';
import '@/styles/v1/hero.css';
import '@/styles/v1/problems.css';
import '@/styles/v1/story.css';
import '@/styles/v1/mistakes.css';
import '@/styles/v1/solution.css';
import '@/styles/v1/cases.css';
import '@/styles/v1/cta.css';
import '@/styles/v1/simulator.css';

import HeroSection from '@/components/v1/HeroSection';
import ProblemsSection from '@/components/v1/ProblemsSection';
import StorySection from '@/components/v1/StorySection';
import MistakesSection from '@/components/v1/MistakesSection';
import SolutionSection from '@/components/v1/SolutionSection';
import CasesSection from '@/components/v1/CasesSection';
import CtaSection from '@/components/v1/CtaSection';

export default function V1Page() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Background Animated Glows */}
      <div className="global-bg-glow glow-1"></div>
      <div className="global-bg-glow glow-2"></div>
      
      <HeroSection />
      <ProblemsSection />
      <StorySection />
      <MistakesSection />
      <SolutionSection />
      <CasesSection />
      <CtaSection />
    </div>
  );
}
