import React from 'react';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';

export default function Hero({ t }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span>2026 Author Portfolio</span>
          </div>
          
          <h1 className="hero-title animate-slide-up">
            {t.hero.title}
          </h1>
          
          <p className="hero-subtitle text-gradient animate-slide-up-delay">
            {t.hero.subtitle}
          </p>
          
          <blockquote className="hero-quote animate-fade-in-slow">
            <span className="quote-mark">“</span>
            {t.hero.quote}
            <span className="quote-mark">”</span>
          </blockquote>
          
          <div className="hero-ctas animate-fade-in-slow">
            <a href="#books" className="btn-primary">
              <BookOpen size={18} />
              <span>{t.hero.cta_books}</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} />
              <span>{t.hero.cta_contact}</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-container float-animation">
            <div className="portrait-glow"></div>
            <img 
              src="/portrait.png" 
              alt="Roxana Neguț" 
              className="portrait-img" 
            />
            <div className="portrait-frame-border"></div>
            <div className="decor-circle circle-1"></div>
            <div className="decor-circle circle-2"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
