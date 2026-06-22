import { useState } from 'react';
import { ShoppingBag, BookOpen, Clock, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Books({ lang, onOpenSample, t }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const booksData = [
    {
      id: 'fantastic-land',
      title: { en: 'The Fantastic Land of Never-Ending Stories', ro: 'Fantasticul tărâm al poveștilor fără sfârșit' },
      genre: { en: "Children's Fantasy", ro: 'Literatură pentru copii' },
      publisher: 'Amazon KDP',
      year: '2020',
      readTime: { en: '~4 min read', ro: '~4 min citire' },
      description: {
        en: 'A magical story featuring dragons, elves, wizards, and floating castles, inviting children and adults alike to discover a world of endless dreams and adventures.',
        ro: 'O poveste magică cu dragoni, elfi, vrăjitori și castele plutitoare, invitând copiii și adulții deopotrivă să descopere o lume a viselor și a poveștilor fără sfârșit.'
      },
      backQuote: {
        en: '"Play well, little one. For I am building the shield."',
        ro: '„Joacă-te bine, micuțo. Căci eu îți clădesc scutul."'
      },
      sampleText: {
        en: `Once upon a time, in a corner of the universe hidden behind the thickest clouds, lay the Silver Forest. It was a place where trees whispered secrets in the wind and the rivers ran with liquid sapphire. At the heart of the forest stood the floating castle of Lumina, held aloft by the dreams of children.\n\nAria, a young seeker of stories, walked along the cobblestone path. Beside her stood the ancient wizard Alistair, his cloak shimmering like a star-filled sky. "Look ahead, child," Alistair whispered, pointing his staff towards the golden spires. "The dragons of the sunset are returning."`,
        ro: `A fost odată ca niciodată, într-un colț de univers ascuns în spatele celor mai groși nori, o pădure argintie. Era un loc în care copacii își șopteau secrete în vânt, iar râurile curgeau cu safir lichid. În inima pădurii se înălța castelul plutitor al Luminii, susținut de visurile copiilor.\n\n„Privește înainte, copilă," a șoptit bătrânul vrăjitor Alistair, îndreptându-și toiagul spre turlele aurii. „Căci dragonii apusului se întorc."`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+The+Fantastic+Land',
      category: 'children',
      accent: '#3b82f6',
    },
    {
      id: 'umbrele-luminii',
      title: { en: 'Umbrele Luminii (Shadows of Light)', ro: 'Umbrele Luminii' },
      genre: { en: 'Philosophical Poetry', ro: 'Poezie Filosofică' },
      publisher: 'Editura Lumen',
      year: '2020',
      readTime: { en: '~5 min read', ro: '~5 min citire' },
      description: {
        en: 'A poetic manifest of the contemporary world, analyzing existence, dread, love, and the dualities of life through intense philosophical verses.',
        ro: 'Un manifest poetic al lumii contemporane, analizând existența urbană, trăirile existențiale, iubirea și dualitățile vieții prin versuri de o intensă trăire filosofică.'
      },
      backQuote: {
        en: '"We forget that the shadow is but a proof of the flame."',
        ro: '„Uităm că umbra nu este decât o dovadă a flăcării."'
      },
      sampleText: {
        en: `We walk through cities of steel, searching for a mirror that does not lie. We call ourselves children of the light, yet we are terrified of the dark. We forget that the shadow is but a proof of the flame.\n\nTo exist is to be divided—split between what we show the world and what we hide in the quiet rooms of our hearts. True peace lies not in defeating the shadow, but in taking its hand and walking together under the stars.`,
        ro: `Mergem prin orașe de oțel, căutând o oglindă care nu minte. Ne numim copii ai luminii, și totuși ne este groază de întuneric. Uităm că umbra nu este decât o dovadă a flăcării.\n\nA exista înseamnă a fi divizat—împărțit între ceea ce arătăm lumii și ceea ce ascundem în camerele tăcute ale inimilor noastre.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Umbrele+Luminii',
      category: 'poetry',
      accent: '#d4af37',
    },
    {
      id: 'teoria-haosului',
      title: { en: 'Teoria Haosului (Chaos Theory)', ro: 'Teoria Haosului' },
      genre: { en: 'Contemporary Poetry', ro: 'Poezie Contemporană' },
      publisher: lang === 'en' ? 'UP Publishing' : 'Editura UP',
      year: '2022',
      readTime: { en: '~5 min read', ro: '~5 min citire' },
      description: {
        en: 'A brilliant anthology representing chaos as the beginning of creation, diving into psychological and emotional landscapes of modern human connection.',
        ro: 'O antologie poetică sclipitoare care prezintă haosul drept începutul creației, pătrunzând în peisaje psihologice și emoționale profunde.'
      },
      backQuote: {
        en: '"Every broken heart is a crack through which new stars spill out."',
        ro: '„Fiecare inimă frântă este o crăpătură prin care se revarsă stele noi."'
      },
      sampleText: {
        en: `They told us that chaos was a monster, a pit of darkness from which nothing returns. But they lied. Chaos is the soil.\n\nOut of the shattered pieces of our plans, the universe designs its most intricate patterns. Every broken heart is a crack through which new stars spill out. Do not fear the collapse, for it is the only way the light finds its way in.`,
        ro: `Ni s-a spus că haosul este un monstru, o groapă de întuneric din care nimic nu se mai întoarce. Dar au mințit. Haosul este pământul roditor.\n\nDin bucățile sparte ale planurilor noastre, universul își desenează cele mai complexe tipare.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Teoria+Haosului',
      category: 'poetry',
      accent: '#9333ea',
    },
    {
      id: 'mortii-nu-vor-apa',
      title: { en: "Morții nu vor apă (The Dead Don't Want Water)", ro: 'Morții nu vor apă' },
      genre: { en: 'Avant-garde Poetry', ro: 'Poezie de Discurs' },
      publisher: 'Editura Lumen',
      year: '2019',
      readTime: { en: '~5 min read', ro: '~5 min citire' },
      description: {
        en: "Roxana's debut collection — raw, striking discourse poetry that challenges standard literary forms, treating life, death, and transition with unmatched depth.",
        ro: 'Volumul de debut al Roxanei — o poezie-discurs brută și frapantă care provoacă formele literare standard, tratând viața, moartea și tranziția cu o profunzime deosebită.'
      },
      backQuote: {
        en: '"They do not want our tears; they want our stories."',
        ro: '„Nu ne vor lacrimile; ne vor poveștile."'
      },
      sampleText: {
        en: `The dead do not ask for water. They do not thirst for the rivers of the earth. They thirst only for remembrance.\n\nWe leave flowers on cold marble, we speak in hushed tones, forgetting that their voices are not buried in the ground. They are in the wind that rustles the pages of our lives, in the silence that falls between our words. They do not want our tears; they want our stories.`,
        ro: `Morții nu cer apă. Nu le este sete de râurile pământului. Le este sete doar de aducere aminte.\n\nLăsăm flori pe marmura rece, vorbim în șoaptă, uitând că vocile lor nu sunt îngropate în pământ. Sunt în vântul care răfoiește paginile vieților noastre.`
      },
      amazonLink: 'https://www.amazon.com/s?k=Roxana+Negut+Mortii+nu+vor+apa',
      category: 'poetry',
      accent: '#e11d48',
    }
  ];

  const filteredBooks = booksData.filter(b => activeFilter === 'all' || b.category === activeFilter);

  return (
    <section id="books" className="section books-section">
      <div className="container">

        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>{lang === 'en' ? 'Bibliography' : 'Bibliografie'}</span>
          </div>
          <h2 className="section-title text-gradient">{t.books.title}</h2>
          <p className="section-subtitle">{t.books.subtitle}</p>
        </div>

        {/* Filter */}
        <div className="books-filter">
          {[
            { key: 'all', en: 'All Books', ro: 'Toate Cărțile' },
            { key: 'poetry', en: 'Poetry', ro: 'Poezie' },
            { key: 'children', en: "Children's", ro: 'Copii' },
          ].map(f => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {lang === 'en' ? f.en : f.ro}
            </button>
          ))}
        </div>

        {/* Books grid — 3D flip cards */}
        <div className="books-grid">
          {filteredBooks.map((book, index) => {
            const title = book.title[lang];
            const desc = book.description[lang];
            const genre = book.genre[lang];
            const excerpt = book.sampleText[lang];
            const quote = book.backQuote[lang];

            return (
              <TiltCard
                key={book.id}
                className={`book-flip-wrapper reveal-slide-up reveal-delay-${(index % 4) + 1}`}
                intensity={8}
                scale={1.02}
                glareOpacity={0.15}
              >
                <div className="book-flip-inner">

                  {/* ── FRONT FACE ── */}
                  <div className="book-face book-front glass-card">
                    <div className="book-accent-bar" style={{ background: book.accent }} />

                    <div className="book-cover-container">
                      <div className="book-cover-placeholder custom-book-cover" style={{ '--book-accent': book.accent }}>
                        <div className="placeholder-content">
                          <span className="placeholder-genre">{genre}</span>
                          <h4 className="placeholder-title">{title}</h4>
                          <span className="placeholder-author">Roxana Neguț</span>
                        </div>
                      </div>
                    </div>

                    <div className="book-card-info">
                      <div className="book-genre-label">{genre}</div>
                      <div className="book-reading-time">
                        <Clock size={11} />
                        <span>{book.readTime[lang]}</span>
                      </div>
                      <h3 className="book-card-title">{title}</h3>
                      <div className="book-meta-short">
                        <span>{t.books.year}: <strong>{book.year}</strong></span>
                        <span className="meta-dot" />
                        <span>{book.publisher}</span>
                      </div>
                      <p className="book-short-desc">{desc.substring(0, 115)}…</p>

                      <div className="book-flip-hint">
                        <ArrowRight size={14} />
                        <span>{lang === 'en' ? 'Hover to explore' : 'Hover pentru detalii'}</span>
                      </div>
                    </div>
                  </div>

                  {/* ── BACK FACE ── */}
                  <div className="book-face book-back glass-card">
                    <div className="book-accent-bar" style={{ background: book.accent }} />

                    <div className="book-back-content">
                      <span className="book-back-genre">{genre}</span>
                      <blockquote className="book-back-quote">
                        <span className="book-back-q-mark">"</span>
                        {quote}
                      </blockquote>
                      <p className="book-back-desc">{desc}</p>

                      <div className="book-actions">
                        <a
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="purchase-btn amazon"
                        >
                          <ShoppingBag size={15} />
                          <span>{t.books.read_on_amazon}</span>
                        </a>
                        <button
                          onClick={() => onOpenSample(title, excerpt)}
                          className="purchase-btn google"
                        >
                          <BookOpen size={15} />
                          <span>{lang === 'en' ? 'Read Sample' : 'Fragment'}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
