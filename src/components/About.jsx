import React from 'react';
import { Award, Sparkles, Feather, Shield } from 'lucide-react';

export default function About({ t }) {
  const awards = [
    {
      icon: <Shield className="award-icon-svg" size={24} />,
      text: t.about.award_1,
      title: "Literary Ambassador"
    },
    {
      icon: <Award className="award-icon-svg" size={24} />,
      text: t.about.award_2,
      title: "Iconic Author Award"
    },
    {
      icon: <Sparkles className="award-icon-svg" size={24} />,
      text: t.about.award_3,
      title: "Friendship Award"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-info reveal">
            <div className="section-badge">
              <Feather size={14} />
              <span>Biography</span>
            </div>
            <h2 className="about-title">{t.about.title}</h2>
            <div className="about-text-content">
              <p>{t.about.bio_1}</p>
              <p>{t.about.bio_2}</p>
            </div>
          </div>
          
          <div className="about-awards">
            <h3 className="awards-heading text-gradient-gold reveal">{t.about.awards_title}</h3>
            <div className="awards-list">
              {awards.map((award, index) => (
                <div key={index} className={`award-card glass-card reveal-slide-up reveal-delay-${index + 1}`}>
                  <div className="award-icon-container">
                    {award.icon}
                  </div>
                  <div className="award-details">
                    <h4 className="award-card-title">{award.title}</h4>
                    <p className="award-card-text">{award.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
