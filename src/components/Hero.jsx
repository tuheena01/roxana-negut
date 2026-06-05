import React from 'react';
import { ArrowRight, BookOpen, Camera } from 'lucide-react';

export default function Hero({ t }) {
  // Direct translation overrides to meet the design audit exactly
  const taglines = {
    en: {
      subtitle: 'Author • Storyteller • Dream Weaver',
      accent: 'Stories that stay with you long after the last page.',
      cta_books: 'Explore My Books',
      cta_insta: 'Follow on Instagram'
    },
    ro: {
      subtitle: 'Autor • Povestitor • Urzitor de Visuri',
      accent: 'Povești care rămân în suflet mult timp după ultima pagină.',
      cta_books: 'Explorează Cărțile',
      cta_insta: 'Urmărește pe Instagram'
    }
  };

  // Detect active language from translations prop structure (if t.nav.home === 'Home', it is English)
  const isEn = t.nav.home === 'Home';
  const localT = isEn ? taglines.en : taglines.ro;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Content column */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span>Roxana Neguț Portfolio</span>
          </div>
          
          <h1 className="hero-title animate-slide-up">
            {t.hero.title}
          </h1>
          
          <p className="hero-subtitle text-gradient animate-slide-up-delay">
            {localT.subtitle}
          </p>
          
          <blockquote className="hero-quote animate-fade-in-slow">
            <span className="quote-mark">“</span>
            {localT.accent}
            <span className="quote-mark">”</span>
          </blockquote>
          
          <div className="hero-ctas animate-fade-in-slow">
            <a href="#featured-book" className="btn-primary">
              <BookOpen size={18} />
              <span>{localT.cta_books}</span>
              <ArrowRight size={16} />
            </a>
            <a href="#instagram-feed" className="btn-secondary">
              <Camera size={18} />
              <span>{localT.cta_insta}</span>
            </a>
          </div>
        </div>

        {/* Right Visual column */}
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
