import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Reviews({ lang, t }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewsList = [
    {
      text: {
        en: "Roxana Neguț writes with a rare philosophical sensitivity. Her poetry is not just words; it is a spiritual diagnostic of modern life.",
        ro: "Roxana Neguț scrie cu o sensibilitate filosofică rară. Poezia ei nu înseamnă doar cuvinte; este un diagnostic spiritual al vieții moderne."
      },
      author: {
        en: "Famost Magazine",
        ro: "Revista Famost"
      },
      role: {
        en: "Culture Section Review",
        ro: "Cronică Secțiunea Cultură"
      },
      initials: "FM",
      rating: 5
    },
    {
      text: {
        en: "The Fantastic Land of Never-Ending Stories is a masterpiece of imagination. It has the charm of classic fairy tales with a modern, empowering twist for children.",
        ro: "Fantasticul tărâm al poveștilor fără sfârșit este o capodoperă a imaginației. Are farmecul basmelor clasice cu o întorsătură modernă și motivațională pentru copii."
      },
      author: {
        en: "Dr. Andrei Popescu",
        ro: "Dr. Andrei Popescu"
      },
      role: {
        en: "Contemporary Literature Critic",
        ro: "Critic de Literatură Contemporană"
      },
      initials: "AP",
      rating: 5
    },
    {
      text: {
        en: "In 'The Woman, The Old Woman, The Child', Neguț manages to capture the eternal cycle of femininity in a way that feels deeply personal yet universal.",
        ro: "În 'The Woman, The Old Woman, The Child', Neguț reușește să surprindă ciclul etern al feminității într-un mod care se simte profund personal și totuși universal."
      },
      author: {
        en: "Maybeify Publisher Review",
        ro: "Recenzie Editura Maybeify"
      },
      role: {
        en: "Editorial Board, India",
        ro: "Redacția Editorială, India"
      },
      initials: "MP",
      rating: 5
    },
    {
      text: {
        en: "Her discourse poetry in 'Morții nu vor apă' is striking and unforgettable. It challenges the boundaries of traditional verses.",
        ro: "Poezia sa de discurs din 'Morții nu vor apă' este izbitoare și de neuiat. Ea contestă granițele versurilor tradiționale."
      },
      author: {
        en: "Magazin Critic",
        ro: "Magazin Critic"
      },
      role: {
        en: "Literary Analyst Review",
        ro: "Recenzie Analist Literar"
      },
      initials: "MC",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviewsList.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviewsList.length) % reviewsList.length);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient-gold">{t.reviews.title}</h2>
          <p className="section-subtitle">{t.reviews.subtitle}</p>
        </div>

        <div className="reviews-carousel-wrapper">
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Review">
            <ChevronLeft size={24} />
          </button>

          <div className="reviews-carousel-container">
            {reviewsList.map((review, index) => {
              const isActive = index === activeIndex;
              const textContent = review.text[lang];
              const authorName = review.author[lang];
              const authorRole = review.role[lang];

              return (
                <div 
                  key={index} 
                  className={`review-slide glass-card ${isActive ? 'active' : ''}`}
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  <div className="review-quote-icon">
                    <Quote size={36} className="quote-svg-accent" />
                  </div>
                  
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />
                    ))}
                  </div>

                  <p className="review-text">{textContent}</p>

                  <div className="review-author-info">
                    {/* Rounded Monogram Avatar */}
                    <div className="review-avatar">
                      <span>{review.initials}</span>
                    </div>
                    
                    <div className="review-author-details">
                      <h4 className="review-author-name">{authorName}</h4>
                      <span className="review-author-role">{authorRole}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-control next" onClick={nextSlide} aria-label="Next Review">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {reviewsList.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
