import { useState } from 'react';
import { Smile, Sparkles } from 'lucide-react';

export default function LimonadaPoetica({ lang, t }) {
  const quotes = [
    {
      en: "I am a soul that has come to earth to fulfill its mission and learn its lessons.",
      ro: "Sunt un suflet care a venit pe pământ să își îndeplinească misiunea și să își învețe lecțiile.",
      tags: ['soul', 'philosophy']
    },
    {
      en: "Let's drink life like a cold lemonade on a hot summer afternoon - sometimes sour, but always refreshing.",
      ro: "Să bem viața ca pe o limonadă rece într-o după-amiază caldă de vară - uneori acră, dar întreagă răcoritoare.",
      tags: ['life']
    },
    {
      en: "In the library of our minds, the books we write are the only ones that never collect dust.",
      ro: "În biblioteca minților noastre, cărțile pe care le scriem sunt singurele care nu adună niciodată praf.",
      tags: ['writing']
    },
    {
      en: "The child in me plays with words, the woman bleeds through them, and the old woman smiles at their vanity.",
      ro: "Copilul din mine se joacă cu cuvintele, femeia sângerează prin ele, iar bătrâna zâmbește de vanitatea lor.",
      tags: ['femininity', 'soul']
    },
    {
      en: "Chaos is not the absence of order, but the silent matrix from which new stars are born.",
      ro: "Haosul nu este absența ordinii, ci matricea tăcută din care se nasc noi stele.",
      tags: ['chaos', 'philosophy']
    },
    {
      en: "We are shadows chasing light, forgetting that we need both to draw the contour of our souls.",
      ro: "Suntem umbre care aleargă după lumină, uitând că avem nevoie de ambele pentru a desena conturul sufletelor noastre.",
      tags: ['soul']
    }
  ];

  const filterConfigs = {
    en: [
      { id: 'all', label: 'All Themes', tag: null, colorClass: 'liquid-yellow' },
      { id: 'soul', label: 'Soul', tag: 'soul', colorClass: 'liquid-blue' },
      { id: 'philosophy', label: 'Philosophy', tag: 'philosophy', colorClass: 'liquid-amber' },
      { id: 'life', label: 'Life', tag: 'life', colorClass: 'liquid-green' },
      { id: 'writing', label: 'Writing', tag: 'writing', colorClass: 'liquid-gold' },
      { id: 'chaos', label: 'Chaos', tag: 'chaos', colorClass: 'liquid-red' },
      { id: 'femininity', label: 'Femininity', tag: 'femininity', colorClass: 'liquid-pink' }
    ],
    ro: [
      { id: 'all', label: 'Toate temele', tag: null, colorClass: 'liquid-yellow' },
      { id: 'soul', label: 'Suflet', tag: 'soul', colorClass: 'liquid-blue' },
      { id: 'philosophy', label: 'Filosofie', tag: 'philosophy', colorClass: 'liquid-amber' },
      { id: 'life', label: 'Viață', tag: 'life', colorClass: 'liquid-green' },
      { id: 'writing', label: 'Scris', tag: 'writing', colorClass: 'liquid-gold' },
      { id: 'chaos', label: 'Haos', tag: 'chaos', colorClass: 'liquid-red' },
      { id: 'femininity', label: 'Feminitate', tag: 'femininity', colorClass: 'liquid-pink' }
    ]
  };

  const activeFiltersList = filterConfigs[lang];
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  const selectedConfig = activeFiltersList.find(f => f.id === activeFilter) || activeFiltersList[0];

  const squeezeLemon = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Generate bubble animations
    const newBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10 + '%',
      delay: Math.random() * 0.7 + 's',
      size: Math.random() * 9 + 4 + 'px'
    }));
    setBubbles(newBubbles);

    // Filter quotes list
    const candidateQuotes = quotes.filter(q => 
      selectedConfig.tag === null || q.tags.includes(selectedConfig.tag)
    );

    // Pick random quote
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * candidateQuotes.length);
      } while (
        candidateQuotes[nextIndex].en === currentQuote.en && 
        candidateQuotes.length > 1
      );
      
      setCurrentQuote(candidateQuotes[nextIndex] || quotes[0]);
    }, 450);

    setTimeout(() => {
      setIsAnimating(false);
      setBubbles([]);
    }, 1200);
  };

  // Switch filter configuration directly
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    
    const config = activeFiltersList.find(f => f.id === filterId) || activeFiltersList[0];
    const candidateQuotes = quotes.filter(q => 
      config.tag === null || q.tags.includes(config.tag)
    );
    setCurrentQuote(candidateQuotes[0] || quotes[0]);
  };

  return (
    <section id="limonada" className="section limonada-section">
      <div className="container">
        <div className="limonada-wrapper glass-card reveal-slide-up">
          <div className="limonada-intro">
            <div className="section-badge">
              <Smile size={14} />
              <span>{lang === 'en' ? 'Interactive Corner' : 'Colț Interactiv'}</span>
            </div>
            <h2 className="section-title text-gradient-gold">{t.limonada.title}</h2>
            <p className="limonada-subtitle">{t.limonada.subtitle}</p>
            <p className="limonada-instructions">{t.limonada.instructions}</p>

            {/* Pill Filters */}
            <div className="limonada-filters">
              {activeFiltersList.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange(filter.id)}
                >
                  <span className={`pill-dot ${filter.colorClass}`}></span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="limonada-widget-container">
            {/* The Poetic Lemonade Glass */}
            <div className="glass-container">
              <div className="glass-rim"></div>
              <div className="glass-straw"></div>
              <div className={`glass-liquid ${isAnimating ? 'stirring' : ''} ${selectedConfig.colorClass}`}>
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
                <span>{lang === 'en' ? 'Life like a Lemonade' : 'Viața ca o limonadă'}</span>
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
