import React, { useState } from 'react';
import { ShoppingBag, BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function Books({ lang, t }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedBook, setExpandedBook] = useState(null);

  const booksData = [
    {
      id: 'fantastic-land',
      title: {
        en: 'The Fantastic Land of Never-Ending Stories',
        ro: 'Fantasticul tărâm al poveștilor fără sfârșit'
      },
      genre: {
        en: "Children's Fantasy",
        ro: 'Literatură pentru copii'
      },
      publisher: 'Editura Lumen / Amazon KDP',
      year: '2020',
      description: {
        en: 'A magical story featuring dragons, elves, wizards, and floating castles, inviting children and adults alike to discover a world of endless dreams and adventures.',
        ro: 'O poveste magică cu dragoni, elfi, vrăjitori și castele plutitoare, invitând copiii și adulții deopotrivă să descopere o lume a viselor și a poveștilor fără sfârșit.'
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+The+Fantastic+Land+of+Never-Ending+Stories',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Fantasticul%20taram&c=books',
      cover: '/fantastic_land_cover.jpg',
      category: 'children',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
    },
    {
      id: 'woman-old-child',
      title: {
        en: 'The Woman, The Old Woman, The Child',
        ro: 'The Woman, The Old Woman, The Child'
      },
      genre: {
        en: 'Spiritual Poetry & Prose',
        ro: 'Poezie Spirituală & Proză'
      },
      publisher: 'Maybeify Publishing, India',
      year: '2023',
      description: {
        en: 'A profound collection of spiritual poetry exploring the sacred stages of femininity, inner healing, and the light and shadows that exist within the self. Awarded the Iconic Author Award 2023.',
        ro: 'O colecție profundă de poezie spirituală ce explorează stadiile sacre ale feminității, vindecarea interioară și alternanța dintre lumină și umbră în interiorul sinelui. Premiată cu Iconic Author Award 2023.'
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+The+Woman+The+Old+Woman+The+Child',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Maybeify&c=books',
      cover: null, // Custom CSS cover
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      badge: 'Iconic Author Award'
    },
    {
      id: 'umbrele-luminii',
      title: {
        en: 'Umbrele Luminii (Shadows of Light)',
        ro: 'Umbrele Luminii'
      },
      genre: {
        en: 'Philosophical Poetry',
        ro: 'Poezie Filosofică'
      },
      publisher: 'Editura Lumen',
      year: '2020',
      description: {
        en: 'A poetic manifest of the contemporary world, analyzing human existence, existential dread, love, and the dualities of life through intense philosophical verses.',
        ro: 'Un manifest poetic al lumii contemporane, analizând existența urbană, trăirile existențiale, iubirea și dualitățile vieții prin versuri de o intensă trăire filosofică.'
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Umbrele+Luminii',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Umbrele%20Luminii&c=books',
      cover: null,
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
    },
    {
      id: 'teoria-haosului',
      title: {
        en: 'Teoria Haosului (Chaos Theory)',
        ro: 'Teoria Haosului'
      },
      genre: {
        en: 'Contemporary Poetry',
        ro: 'Poezie Contemporană'
      },
      publisher: 'Editura Lumen',
      year: '2022',
      description: {
        en: 'A brilliant anthology of poems representing chaos as the beginning of creation, diving into deep psychological and emotional landscapes of modern human connection.',
        ro: 'O antologie poetică sclipitoare care prezintă haosul drept începutul creației, pătrunzând în peisaje psihologice și emoționale profunde ale conexiunilor umane moderne.'
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Teoria+Haosului',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Teoria%20Haosului&c=books',
      cover: null,
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)'
    },
    {
      id: 'mortii-nu-vor-apa',
      title: {
        en: "Morții nu vor apă (The Dead Don't Want Water)",
        ro: 'Morții nu vor apă'
      },
      genre: {
        en: 'Avant-garde Poetry',
        ro: 'Poezie de Discurs'
      },
      publisher: 'Editura Lumen',
      year: '2019',
      description: {
        en: "Roxana's debut poetry collection, delivering raw and striking discourse poetry that challenges standard literary forms, treating life, death, and transition with unmatched depth.",
        ro: 'Volumul de debut al Roxanei, livrând o poezie-discurs brută și frapantă care provoacă formele literare standard, tratând viața, moartea și tranziția cu o profunzime deosebită.'
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Mortii+nu+vor+apa',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Mortii%20nu%20vor%20apa&c=books',
      cover: null,
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    }
  ];

  const filteredBooks = booksData.filter(book => 
    activeFilter === 'all' || book.category === activeFilter
  );

  const toggleExpand = (id) => {
    setExpandedBook(expandedBook === id ? null : id);
  };

  return (
    <section id="books" className="section books-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">{t.books.title}</h2>
          <p className="section-subtitle">{t.books.subtitle}</p>
        </div>

        {/* Filter Navigation */}
        <div className="books-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {lang === 'en' ? 'All' : 'Toate'}
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'poetry' ? 'active' : ''}`}
            onClick={() => setActiveFilter('poetry')}
          >
            {lang === 'en' ? 'Poetry' : 'Poezie'}
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'children' ? 'active' : ''}`}
            onClick={() => setActiveFilter('children')}
          >
            {lang === 'en' ? "Children's Book" : 'Carte pentru Copii'}
          </button>
        </div>

        {/* Books Grid */}
        <div className="books-grid">
          {filteredBooks.map((book) => {
            const isExpanded = expandedBook === book.id;
            const bookTitle = book.title[lang];
            const bookDesc = book.description[lang];
            const bookGenre = book.genre[lang];

            return (
              <div key={book.id} className={`book-card glass-card ${isExpanded ? 'expanded' : ''}`}>
                
                {/* Book Cover Visual */}
                <div className="book-cover-container">
                  {book.cover ? (
                    <img 
                      src={book.cover} 
                      alt={bookTitle} 
                      className="book-cover-img" 
                    />
                  ) : (
                    <div className="book-cover-placeholder" style={{ background: book.gradient }}>
                      <div className="placeholder-pattern"></div>
                      <div className="placeholder-content">
                        <span className="placeholder-genre">{bookGenre}</span>
                        <h4 className="placeholder-title">{bookTitle}</h4>
                        <span className="placeholder-author">Roxana Neguț</span>
                      </div>
                    </div>
                  )}
                  {book.badge && (
                    <div className="book-card-badge">
                      <Star size={12} fill="currentColor" />
                      <span>{book.badge}</span>
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="book-card-info">
                  <span className="book-genre-label">{bookGenre}</span>
                  <h3 className="book-card-title">{bookTitle}</h3>
                  <div className="book-meta-short">
                    <span>{t.books.year}: <strong>{book.year}</strong></span>
                    <span className="meta-dot"></span>
                    <span>{book.publisher}</span>
                  </div>

                  <p className="book-short-desc">
                    {isExpanded ? bookDesc : `${bookDesc.substring(0, 110)}...`}
                  </p>

                  <button 
                    className="book-details-toggle"
                    onClick={() => toggleExpand(book.id)}
                  >
                    <span>{isExpanded ? t.books.hide_details : t.books.view_details}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {/* Purchase/Read Badges */}
                  <div className="book-actions">
                    <a 
                      href={book.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="purchase-btn amazon"
                    >
                      <ShoppingBag size={16} />
                      <span>{t.books.read_on_amazon}</span>
                    </a>
                    
                    <a 
                      href={book.googlePlayLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="purchase-btn google"
                    >
                      <BookOpen size={16} />
                      <span>{t.books.read_on_google}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
