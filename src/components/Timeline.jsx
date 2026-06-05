import React, { useState } from 'react';
import { Calendar, Award, BookOpen, Sparkles, Star, Milestone } from 'lucide-react';

export default function Timeline({ lang, t }) {
  const [activeId, setActiveId] = useState(5); // Default to latest milestone (2023)

  const milestones = [
    {
      id: 0,
      year: '1981',
      icon: <Calendar size={18} />,
      title: {
        en: 'Born in Bucharest, Romania',
        ro: 'Nașterea la București, România'
      },
      subtitle: {
        en: 'Philosophy & Journalism Roots',
        ro: 'Rădăcini în Filosofie și Jurnalism'
      },
      description: {
        en: 'Born and raised in Bucharest, Roxana developed a deep fascination for words and existential thinking early on, leading her to pursue university degrees in Philosophy and Journalism.',
        ro: 'Născută și crescută la București, Roxana a dezvoltat de timpuriu o atracție profundă pentru cuvinte și gândirea existențială, urmând ulterior studii universitare de Filosofie și Jurnalism.'
      }
    },
    {
      id: 1,
      year: '2018',
      icon: <Star size={18} />,
      title: {
        en: 'Literary Ambassador',
        ro: 'Ambasador Literar'
      },
      subtitle: {
        en: 'Cesar Egido Serrano Foundation, Spain',
        ro: 'Fundația Cesar Egido Serrano, Spania'
      },
      description: {
        en: 'Appointed as the Literary Ambassador of Romania for the Cesar Egido Serrano Foundation in Spain. She was later honored as the Ambassador of the Word in 2019 and 2020.',
        ro: 'Desemnată Ambasador Literar al României pentru Fundația Cesar Egido Serrano din Spania. Ulterior, a fost onorată ca „Ambasador al Cuvântului” în anii 2019 și 2020.'
      }
    },
    {
      id: 2,
      year: '2019',
      icon: <BookOpen size={18} />,
      title: {
        en: 'Debut Poetry Collection',
        ro: 'Volumul de Debut'
      },
      subtitle: {
        en: '"Morții nu vor apă" Released',
        ro: 'Lansarea volumului „Morții nu vor apă”'
      },
      description: {
        en: "Published her striking avant-garde debut poetry volume, 'Morții nu vor apă' (The Dead Don't Want Water) through Editura Lumen, establishing her signature philosophical poetry voice.",
        ro: 'A publicat volumul său de debut cu poezie-discurs, „Morții nu vor apă”, la Editura Lumen, impunându-și vocea poetică cu puternice accente filosofice.'
      }
    },
    {
      id: 3,
      year: '2020',
      icon: <Award size={18} />,
      title: {
        en: 'Dual Milestones',
        ro: 'Dublă Distincție'
      },
      subtitle: {
        en: '"Umbrele Luminii" & Friendship Prize',
        ro: '„Umbrele Luminii” & Premiul Prieteniei'
      },
      description: {
        en: "Published 'Umbrele Luminii' (Shadows of Light). That same year, she received the Friendship Award ('Premiul Prieteniei') for her magical children's stories and fairy tales.",
        ro: 'A publicat volumul de poezie „Umbrele Luminii”. În același an, a primit „Premiul Prieteniei” pentru poveștile sale și basmele fermecătoare dedicate copiilor.'
      }
    },
    {
      id: 4,
      year: '2022',
      icon: <Sparkles size={18} />,
      title: {
        en: 'Chaos Theory',
        ro: 'Teoria Haosului'
      },
      subtitle: {
        en: 'Poetry of Creation',
        ro: 'Poezia Creației'
      },
      description: {
        en: "Released her poetry volume 'Teoria Haosului' (Chaos Theory), exploring emotional landscapes, human connection, and representing chaos as the primary engine of creation.",
        ro: 'A lansat volumul de poezie „Teoria Haosului”, explorând peisaje emoționale, conexiunile dintre oameni și conceptualizând haosul drept forța primară a creației.'
      }
    },
    {
      id: 5,
      year: '2023',
      icon: <Milestone size={18} />,
      title: {
        en: 'Iconic Author Award',
        ro: 'Iconic Author Award'
      },
      subtitle: {
        en: 'International Acclaim for Poetry',
        ro: 'Recunoaștere Internațională'
      },
      description: {
        en: "Awarded the Iconic Author Award 2023 by Maybeify Publisher (India) for her masterpiece poetry collection, 'The Woman, The Old Woman, The Child', celebrating stages of femininity.",
        ro: 'A primit premiul internațional „Iconic Author Award 2023” din partea Maybeify Publisher (India) pentru volumul de poezii „The Woman, The Old Woman, The Child”.'
      }
    }
  ];

  const sectionTitle = lang === 'en' ? 'The Literary Journey' : 'Călătoria Literară';
  const sectionSubtitle = lang === 'en' 
    ? 'Key milestones, international publications, and awards over the years.'
    : 'Momente cheie, publicații internaționale și distincții de-a lungul anilor.';

  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Milestone size={14} />
            <span>{lang === 'en' ? 'History' : 'Istoric'}</span>
          </div>
          <h2 className="section-title text-gradient">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>

        <div className="timeline-container">
          {/* Vertical axis line */}
          <div className="timeline-axis"></div>

          <div className="timeline-grid-layout">
            
            {/* Timeline Left: Year selector nodes */}
            <div className="timeline-nodes-list reveal">
              {milestones.map((milestone) => {
                const isActive = activeId === milestone.id;
                return (
                  <button
                    key={milestone.id}
                    className={`timeline-node-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveId(milestone.id)}
                  >
                    <div className="node-icon-glow"></div>
                    <div className="node-icon-circle">
                      {milestone.icon}
                    </div>
                    <span className="node-year-label">{milestone.year}</span>
                    <div className="node-connector-line"></div>
                  </button>
                );
              })}
            </div>

            {/* Timeline Right: Detailed card display */}
            <div className="timeline-detail-display reveal-slide-up">
              {milestones.map((milestone) => {
                const isActive = activeId === milestone.id;
                if (!isActive) return null;

                return (
                  <div key={milestone.id} className="timeline-detail-card glass-card animate-slide-up">
                    <div className="card-top-header">
                      <span className="timeline-detail-year">{milestone.year}</span>
                      <span className="timeline-detail-dots">•••</span>
                    </div>
                    <h3 className="timeline-detail-title text-gradient-gold">
                      {milestone.title[lang]}
                    </h3>
                    <h4 className="timeline-detail-subtitle">
                      {milestone.subtitle[lang]}
                    </h4>
                    <p className="timeline-detail-desc">
                      {milestone.description[lang]}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
