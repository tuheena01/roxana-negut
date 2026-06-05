import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Camera, Award, Sparkles, BookOpenCheck } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import MagneticButton from './MagneticButton';

function useTypewriter(words, speed = 75, pause = 2400) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) { setDeleting(true); return; }
      if (deleting && charIdx === 0) { setDeleting(false); setWordIdx(i => (i + 1) % words.length); return; }
      setCharIdx(i => deleting ? i - 1 : i + 1);
      setDisplay(current.slice(0, deleting ? charIdx - 1 : charIdx + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero({ t, lang }) {
  const taglines = {
    en: {
      roles: ['Spiritual Poet', 'Storyteller', 'Award-Winning Author', 'Literary Ambassador'],
      accent: 'Writing for hearts that seek beauty, meaning, and truth.',
      cta_books: 'Explore My Books',
      cta_insta: 'Follow on Instagram',
      stat_books: '5+ Published Volumes',
      stat_readers: 'Readers Worldwide',
      stat_award: 'Iconic Author Award'
    },
    ro: {
      roles: ['Poetă Spirituală', 'Povestitor', 'Autor Premiat', 'Ambasador Literar'],
      accent: 'Scriind pentru inimi care caută frumosul, sensul și adevărul.',
      cta_books: 'Explorează Cărțile',
      cta_insta: 'Urmărește pe Instagram',
      stat_books: '5+ Volume Publicate',
      stat_readers: 'Cititori în întreaga lume',
      stat_award: 'Iconic Author Award'
    }
  };

  const isEn = !lang || lang === 'en';
  const localT = isEn ? taglines.en : taglines.ro;
  const typedRole = useTypewriter(localT.roles, 75, 2000);

  return (
    <section id="home" className="hero-section">

      {/* ── Interactive Particle Background ── */}
      <ParticleCanvas />

      {/* ── 3-D floating orbs decoration ── */}
      <div className="hero-orb orb-1" aria-hidden="true" />
      <div className="hero-orb orb-2" aria-hidden="true" />
      <div className="hero-orb orb-3" aria-hidden="true" />

      <div className="container hero-container">

        {/* ─── Left column ─── */}
        <div className="hero-content">

          <div className="hero-badge animate-fade-in">
            <Sparkles size={12} className="hero-badge-icon" />
            <span>{isEn ? 'Award-Winning International Author' : 'Autor Internațional Premiat'}</span>
          </div>

          <h1 className="hero-title animate-slide-up">
            {t.hero.title}
          </h1>

          {/* Typewriter */}
          <div className="hero-typewriter animate-slide-up-delay">
            <span className="hero-typewriter-text">{typedRole}</span>
            <span className="hero-cursor">|</span>
          </div>

          <blockquote className="hero-quote animate-fade-in-slow">
            <span className="quote-mark">"</span>
            {localT.accent}
            <span className="quote-mark">"</span>
          </blockquote>

          {/* CTAs with Magnetic effect */}
          <div className="hero-ctas animate-fade-in-slow">
            <MagneticButton as="a" href="#featured-book" className="btn-primary" strength={0.4}>
              <BookOpen size={18} />
              <span>{localT.cta_books}</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://instagram.com/roxana.negut"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              strength={0.4}
            >
              <Camera size={18} />
              <span>{localT.cta_insta}</span>
            </MagneticButton>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof animate-fade-in-slow">
            <div className="proof-item">
              <BookOpenCheck size={18} className="proof-icon" />
              <span>{localT.stat_books}</span>
            </div>
            <div className="proof-dot" />
            <div className="proof-item">
              <Sparkles size={18} className="proof-icon" />
              <span>{localT.stat_readers}</span>
            </div>
            <div className="proof-dot" />
            <div className="proof-item">
              <Award size={18} className="proof-icon" />
              <span>{localT.stat_award}</span>
            </div>
          </div>
        </div>

        {/* ─── Right column — Portrait + 3-D frame ─── */}
        <div className="hero-visual">
          <div className="portrait-container float-animation">
            <div className="portrait-glow" />

            {/* 3-D ring decorations */}
            <div className="portrait-ring ring-outer" aria-hidden="true" />
            <div className="portrait-ring ring-inner" aria-hidden="true" />

            <img src="/portrait.png" alt="Roxana Neguț" className="portrait-img" />
            <div className="portrait-frame-border" />
            <div className="decor-circle circle-1" />
            <div className="decor-circle circle-2" />

            {/* Floating award badge */}
            <div className="portrait-award-badge animate-fade-in-slow">
              <Award size={14} />
              <span>{isEn ? 'Iconic Author 2023' : 'Autor Iconic 2023'}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel" /></div>
      </div>
    </section>
  );
}
