import React, { useState } from 'react';
import { ShoppingBag, BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function Books({ lang, onOpenSample, t }) {
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
      sampleText: {
        en: `Once upon a time, in a corner of the universe hidden behind the thickest clouds, lay the Silver Forest. It was a place where trees whispered secrets in the wind and the rivers ran with liquid sapphire. At the heart of the forest stood the floating castle of Lumina, held aloft by the dreams of children.
        
        Aria, a young seeker of stories, walked along the cobblestone path. Beside her stood the ancient wizard Alistair, his cloak shimmering like a star-filled sky. "Look ahead, child," Alistair whispered, pointing his staff towards the golden spires in the distance. "For the dragons of the sunset are returning."
        
        A soft roar echoed from the horizon, and a crimson dragon swept across the violet sky, leaving a trail of gold dust that fell upon the silver leaves below. Aria held her breath. She knew that her adventure had just begun, and the stories here would never, ever end.`,
        ro: `A fost odată ca niciodată, într-un colț de univers ascuns în spatele celor mai groși nori, o pădure argintie numită Pădurea de Argint. Era un loc în care copacii își șopteau secrete în vânt, iar râurile curgeau cu safir lichid. În inima pădurii se înălța castelul plutitor al Luminii, susținut de visurile copiilor.
        
        Aria, o tânără căutătoare de povești, mergea pe poteca de piatră. Lângă ea stătea bătrânul vrăjitor Alistair, cu mantia strălucind ca un cer plin de stele. „Privește înainte, copilă,” a șoptit Alistair, îndreptându-și toiagul spre turlele aurii din depărtare. „Căci dragonii apusului se întorc.”
        
        Un răget blând a răsunat de la orizont, iar un dragon stacojiu a brăzdat cerul violet, lăsând în urmă o trenă de praf de aur care cădea pe frunzele argintii. Aria și-a ținut respirația. Știa că aventura ei abia începuse, iar poveștile de aici nu se vor sfârși niciodată.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+The+Fantastic+Land+of+Never-Ending+Stories',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Fantasticul%20taram&c=books',
      cover: '/fantastic_land_cover.jpg',
      category: 'children',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
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
      sampleText: {
        en: `We walk through cities of steel, searching for a mirror that does not lie. We call ourselves children of the light, yet we are terrified of the dark. We forget that the shadow is but a proof of the flame.
        
        To exist is to be divided—split between what we show the world and what we hide in the quiet rooms of our hearts. True peace lies not in defeating the shadow, but in taking its hand and walking together under the stars.`,
        ro: `Mergem prin orașe de oțel, căutând o oglindă care nu minte. Ne numim copii ai luminii, și totuși ne este groază de întuneric. Uităm că umbra nu este decât o dovadă a flăcării.
        
        A exista înseamnă a fi divizat—împărțit între ceea ce arătăm lumii și ceea ce ascundem în camerele tăcute ale inimilor noastre. Adevărata pace nu stă în înfrângerea umbrei, ci în a o lua de mână și a merge împreună sub stele.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Umbrele+Luminii',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Umbrele%20Luminii&c=books',
      cover: null,
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #1a1817 0%, #12100f 100%)'
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
      sampleText: {
        en: `They told us that chaos was a monster, a pit of darkness from which nothing returns. But they lied. Chaos is the soil.
        
        Out of the shattered pieces of our plans, the universe designs its most intricate patterns. Every broken heart is a crack through which new stars spill out. Do not fear the collapse, for it is the only way the light finds its way in.`,
        ro: `Ni s-a spus că haosul este un monstru, o groapă de întuneric din care nimic nu se mai întoarce. Dar au mințit. Haosul este pământul roditor.
        
        Din bucățile sparte ale planurilor noastre, universul își desenează cele mai complexe tipare. Fiecare inimă frântă este o crăpătură prin care se revarsă stele noi. Nu te teme de colaps, căci este singura cale prin care lumina își găsește drumul înăuntru.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Teoria+Haosului',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Teoria%20Haosului&c=books',
      cover: null,
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #1a1817 0%, #12100f 100%)'
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
      sampleText: {
        en: `The dead do not ask for water. They do not thirst for the rivers of the earth. They thirst only for remembrance.
        
        We leave flowers on cold marble, we speak in hushed tones, forgetting that their voices are not buried in the ground. They are in the wind that rustles the pages of our lives, in the silence that falls between our words. They do not want our tears; they want our stories.`,
        ro: `Morții nu cer apă. Nu le este sete de râurile pământului. Le este sete doar de aducere aminte.
        
        Lăsăm flori pe marmura rece, vorbim în șoaptă, uitând că vocile lor nu sunt îngropate în pământ. Sunt în vântul care răfoiește paginile vieților noastre, în liniștea care se așterne între cuvintele noastre. Nu ne vor lacrimile; ne vor poveștile.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Mortii+nu+vor+apa',
      googlePlayLink: 'https://play.google.com/store/search?q=Roxana%20Negut%20Mortii%20nu%20vor%20apa&c=books',
      cover: null,
      category: 'poetry',
      gradient: 'linear-gradient(135deg, #1a1817 0%, #12100f 100%)'
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
            {lang === 'en' ? 'All Books' : 'Toate Cărțile'}
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
            const excerpt = book.sampleText[lang];

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
                    <div className="book-cover-placeholder custom-book-cover">
                      <div className="placeholder-pattern"></div>
                      <div className="placeholder-content">
                        <span className="placeholder-genre">{bookGenre}</span>
                        <h4 className="placeholder-title">{bookTitle}</h4>
                        <span className="placeholder-author">Roxana Neguț</span>
                      </div>
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

                  {/* Excerpt and Store Links */}
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
                    
                    <button 
                      onClick={() => onOpenSample(bookTitle, excerpt)}
                      className="purchase-btn google"
                    >
                      <BookOpen size={16} />
                      <span>{lang === 'en' ? 'Read Sample' : 'Citește fragment'}</span>
                    </button>
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
