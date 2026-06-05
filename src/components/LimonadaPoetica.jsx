import React, { useState } from 'react';
import { Smile, Sparkles } from 'lucide-react';

export default function LimonadaPoetica({ lang, t }) {
  const quotes = [
    {
      en: "I am a soul that has come to earth to fulfill its mission and learn its lessons.",
      ro: "Sunt un suflet care a venit pe pământ să își îndeplinească misiunea și să își învețe lecțiile."
    },
    {
      en: "Let's drink life like a cold lemonade on a hot summer afternoon - sometimes sour, but always refreshing.",
      ro: "Să bem viața ca pe o limonadă rece într-o după-amiază caldă de vară - uneori acră, dar întreagă răcoritoare."
    },
    {
      en: "In the library of our minds, the books we write are the only ones that never collect dust.",
      ro: "În biblioteca minților noastre, cărțile pe care le scriem sunt singurele care nu adună niciodată praf."
    },
    {
      en: "The child in me plays with words, the woman bleeds through them, and the old woman smiles at their vanity.",
      ro: "Copilul din mine se joacă cu cuvintele, femeia sângerează prin ele, iar bătrâna zâmbește de vanitatea lor."
    },
    {
      en: "Chaos is not the absence of order, but the silent matrix from which new stars are born.",
      ro: "Haosul nu este absența ordinii, ci matricea tăcută din care se nasc noi stele."
    },
    {
      en: "We are shadows chasing light, forgetting that we need both to draw the contour of our souls.",
      ro: "Suntem umbre care aleargă după lumină, uitând că avem nevoie de ambele pentru a desena conturul sufletelor noastre."
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  const squeezeLemon = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Generate bubble coordinates
    const newBubbles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10 + '%',
      delay: Math.random() * 0.8 + 's',
      size: Math.random() * 10 + 5 + 'px'
    }));
    setBubbles(newBubbles);

    // Pick a random new quote (different from current if possible)
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * quotes.length);
      } while (quotes[nextIndex].en === currentQuote.en && quotes.length > 1);
      
      setCurrentQuote(quotes[nextIndex]);
    }, 400);

    setTimeout(() => {
      setIsAnimating(false);
      setBubbles([]);
    }, 1200);
  };

  return (
    <section id="limonada" className="section limonada-section">
      <div className="container">
        <div className="limonada-wrapper glass-card">
          <div className="limonada-intro">
            <div className="section-badge">
              <Smile size={14} />
              <span>Interactive Corner</span>
            </div>
            <h2 className="section-title text-gradient-gold">{t.limonada.title}</h2>
            <p className="limonada-subtitle">{t.limonada.subtitle}</p>
            <p className="limonada-instructions">{t.limonada.instructions}</p>
          </div>

          <div className="limonada-widget-container">
            {/* The Poetic Lemonade Glass */}
            <div className="glass-container">
              <div className="glass-rim"></div>
              <div className="glass-straw"></div>
              <div className={`glass-liquid ${isAnimating ? 'stirring' : ''}`}>
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                {bubbles.map(bubble => (
                  <div 
                    key={bubble.id} 
                    className="bubble" 
                    style={{ 
                      left: bubble.left, 
                      animationDelay: bubble.delay,
                      width: bubble.size,
                      height: bubble.size
                    }}
                  />
                ))}
              </div>
              <div className="glass-lemon-slice"></div>
            </div>

            {/* Dispensed Quote */}
            <div className={`quote-dispenser ${isAnimating ? 'dispensing' : ''}`}>
              <div className="quote-header">
                <Sparkles size={18} className="quote-sparkle" />
                <span>Viața ca o limonadă</span>
              </div>
              <div className="quote-body">
                <p className="quote-text-display">
                  “ {currentQuote[lang]} ”
                </p>
              </div>
              <div className="quote-footer">
                — Roxana Neguț
              </div>
            </div>

            {/* Squeeze Button */}
            <div className="squeezer-actions">
              <button 
                className="btn-primary squeeze-btn" 
                onClick={squeezeLemon}
                disabled={isAnimating}
              >
                <Sparkles size={18} />
                <span>{t.limonada.btn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
