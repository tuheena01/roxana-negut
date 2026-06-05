import React from 'react';
import { ShoppingBag, BookOpen, Star, Sparkles } from 'lucide-react';

export default function FeaturedBook({ lang, onOpenSample, t }) {
  
  const bookTitle = 'The Woman, The Old Woman, The Child';
  const bookGenre = lang === 'en' ? 'Spiritual Poetry & Prose' : 'Poezie Spirituală & Proză';
  
  const bookDesc = lang === 'en'
    ? 'A profound collection of spiritual poetry exploring the sacred stages of femininity, inner healing, and the light and shadows that exist within the self. Awarded the Iconic Author Award 2023.'
    : 'O colecție profundă de poezie spirituală ce explorează stadiile sacre ale feminității, vindecarea interioară și alternanța dintre lumină și umbră în interiorul sinelui. Premiată cu Iconic Author Award 2023.';

  const bookSampleText = lang === 'en'
    ? `There is a girl sitting on the steps of my childhood home, playing with pebbles of light. She does not know of the storms that lie ahead, nor does she care. She is whole.
    
    Behind her, in the doorway, stands the woman. Her hands are scarred from holding onto ropes of fire, her heart heavy but unbroken. She looks at the child with a mixture of grief and love. "Play well, little one," she whispers. "For I am building the shield."
    
    And in the rocking chair by the window sits the old woman. She carries the silver of moonbeams in her hair. She smiles, watching them both, knowing that the child, the woman, and the old woman are but a single thread woven into the fabric of eternity.`
    : `Există o copilă care stă pe treptele casei mele părintești, jucându-se cu pietricele de lumină. Nu știe de furtunile ce vor urma, și nici nu-i pasă. Este întreagă.
    
    În spatele ei, în pragul ușii, stă femeia. Mâinile îi sunt arse de la frânghii de foc, iar inima îi e grea, dar neînfrântă. O privește pe copilă cu un amestec de tristețe și iubire. „Joacă-te bine, micuțo,” șoptește ea. „Căci eu îți clădesc scutul.”
    
    Iar în balansoarul de lângă fereastră stă bătrâna. Poartă argintul razelor de lună în păr. Zâmbește, privindu-le pe amândouă, știind că copila, femeia și bătrâna nu sunt decât un singur fir țesut în pânza eternității.`;

  return (
    <section id="featured-book" className="section featured-book-section">
      <div className="container">
        
        <div className="featured-badge-wrapper animate-fade-in">
          <div className="section-badge">
            <Star size={14} fill="currentColor" />
            <span>{lang === 'en' ? 'Featured Masterpiece' : 'Capodoperă Recomandată'}</span>
          </div>
        </div>

        <div className="featured-book-grid glass-card">
          
          {/* Cover Section (Original Cover Image) */}
          <div className="featured-cover-wrapper">
            <img 
              src="/pdf_cover_p1.png" 
              alt={bookTitle} 
              className="book-cover-img" 
            />
            
            <div className="featured-sparkle-glow">
              <Sparkles size={22} className="sparkle-gold animate-pulse" />
            </div>
            
            <div className="featured-book-card-badge">
              <Star size={11} fill="currentColor" />
              <span>Iconic Author</span>
            </div>
          </div>

          {/* Details Section */}
          <div className="featured-details">
            <span className="featured-genre-label">{bookGenre}</span>
            <h2 className="featured-book-title text-gradient-gold">{bookTitle}</h2>
            
            <div className="featured-meta">
              <span>{lang === 'en' ? 'Published' : 'An apariție'}: <strong>2023</strong></span>
              <span className="meta-dot"></span>
              <span>Maybeify Publishing, India</span>
            </div>

            <p className="featured-description">{bookDesc}</p>

            <div className="featured-ctas">
              <a 
                href="https://www.amazon.com/s?k=Roxana+Negut+The+Woman+The+Old+Woman+The+Child" 
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
