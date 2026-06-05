import React from 'react';
import { ShoppingBag, BookOpen, Star, Sparkles } from 'lucide-react';

export default function FeaturedBook({ lang, onOpenSample, t }) {
  
  const bookTitle = lang === 'en' 
    ? 'The Fantastic Land of Never-Ending Stories' 
    : 'Fantasticul tărâm al poveștilor fără sfârșit';
    
  const bookGenre = lang === 'en' ? "Children's Fantasy" : 'Literatură pentru copii';
  
  const bookDesc = lang === 'en'
    ? 'A magical story featuring dragons, elves, wizards, and floating castles, inviting children and adults alike to discover a world of endless dreams and adventures.'
    : 'O poveste magică cu dragoni, elfi, vrăjitori și castele plutitoare, invitând copiii și adulții deopotrivă să descopere o lume a viselor și a poveștilor fără sfârșit.';

  const bookSampleText = lang === 'en'
    ? `Once upon a time, in a corner of the universe hidden behind the thickest clouds, lay the Silver Forest. It was a place where trees whispered secrets in the wind and the rivers ran with liquid sapphire. At the heart of the forest stood the floating castle of Lumina, held aloft by the dreams of children.
    
    Aria, a young seeker of stories, walked along the cobblestone path. Beside her stood the ancient wizard Alistair, his cloak shimmering like a star-filled sky. "Look ahead, child," Alistair whispered, pointing his staff towards the golden spires in the distance. "For the dragons of the sunset are returning."
    
    A soft roar echoed from the horizon, and a crimson dragon swept across the violet sky, leaving a trail of gold dust that fell upon the silver leaves below. Aria held her breath. She knew that her adventure had just begun, and the stories here would never, ever end.`
    : `A fost odată ca niciodată, într-un colț de univers ascuns în spatele celor mai groși nori, o pădure argintie numită Pădurea de Argint. Era un loc în care copacii își șopteau secrete în vânt, iar râurile curgeau cu safir lichid. În inima pădurii se înălța castelul plutitor al Luminii, susținut de visurile copiilor.
    
    Aria, o tânără căutătoare de povești, mergea pe poteca de piatră. Lângă ea stătea bătrânul vrăjitor Alistair, cu mantia strălucind ca un cer plin de stele. „Privește înainte, copilă,” a șoptit Alistair, îndreptându-și toiagul spre turlele aurii din depărtare. „Căci dragonii apusului se întorc.”
    
    Un răget blând a răsunat de la orizont, iar un dragon stacojiu a brăzdat cerul violet, lăsând în urmă o trenă de praf de aur care cădea pe frunzele argintii. Aria și-a ținut respirația. Știa că aventura ei abia începuse, iar poveștile de aici nu se vor sfârși niciodată.`;

  return (
    <section id="featured-book" className="section featured-book-section">
      <div className="container">
        
        <div className="featured-badge-wrapper animate-fade-in">
          <div className="section-badge">
            <Star size={14} fill="currentColor" />
            <span>{lang === 'en' ? 'Featured Bestseller' : 'Bestseller Recomandat'}</span>
          </div>
        </div>

        <div className="featured-book-grid glass-card">
          
          {/* Cover Section */}
          <div className="featured-cover-wrapper">
            <div className="featured-cover-shadow"></div>
            <img 
              src="/fantastic_land_cover.jpg" 
              alt={bookTitle} 
              className="featured-cover-img" 
            />
            <div className="featured-sparkle-glow">
              <Sparkles size={24} className="sparkle-gold animate-pulse" />
            </div>
          </div>

          {/* Details Section */}
          <div className="featured-details">
            <span className="featured-genre-label">{bookGenre}</span>
            <h2 className="featured-book-title text-gradient-gold">{bookTitle}</h2>
            
            <div className="featured-meta">
              <span>{lang === 'en' ? 'Published' : 'An apariție'}: <strong>2020</strong></span>
              <span className="meta-dot"></span>
              <span>Editura Lumen / Amazon KDP</span>
            </div>

            <p className="featured-description">{bookDesc}</p>

            <div className="featured-ctas">
              <a 
                href="https://www.amazon.com/s?k=Roxana+Negut+The+Fantastic+Land+of+Never-Ending+Stories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                <ShoppingBag size={18} />
                <span>{t.books.read_on_amazon}</span>
              </a>
              
              <button 
                onClick={() => onOpenSample(bookTitle, bookSampleText)}
                className="btn-secondary"
              >
                <BookOpen size={18} />
                <span>{lang === 'en' ? 'Read Sample' : 'Citește un fragment'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
