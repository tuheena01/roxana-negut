import { Camera, Heart, MessageCircle, ArrowRight } from 'lucide-react';

export default function InstagramFeed({ lang }) {
  
  const titleText = lang === 'en' ? 'Follow the Journey' : 'Urmărește Călătoria';
  const subtitleText = lang === 'en' 
    ? 'Daily poetry reflections, behind-the-scenes writing, and editorial thoughts from Bucharest.'
    : 'Reflecții zilnice, culise din procesul de creație și gânduri editoriale direct din București.';
    
  const feedItems = [
    {
      id: 1,
      type: 'text',
      content: lang === 'en' 
        ? '"Suntem umbre care aleargă după lumină..."' 
        : '„Suntem umbre care aleargă după lumină, uitând că avem nevoie de ambele...”',
      bgColor: '#FAF8F5',
      textColor: '#5B4B42',
      likes: '124',
      comments: '16'
    },
    {
      id: 2,
      type: 'image',
      placeholderText: lang === 'en' ? 'Writing Desk - Bucharest' : 'Biroul de Scris - București',
      gradient: 'linear-gradient(135deg, #FAF8F5 0%, #EAE6DF 100%)',
      likes: '208',
      comments: '34'
    },
    {
      id: 3,
      type: 'text',
      content: lang === 'en'
        ? '"The child in me plays with words, the woman bleeds through them, and the old woman smiles..."'
        : '„Copilul din mine se joacă cu cuvintele, femeia sângerează prin ele, iar bătrâna zâmbește...”',
      bgColor: '#FAF8F5',
      textColor: '#1A1A1A',
      likes: '189',
      comments: '22'
    },
    {
      id: 4,
      type: 'image',
      placeholderText: lang === 'en' ? 'Fantastic Land Concept Art' : 'Concept Art - Tărâmul Fantastic',
      gradient: 'linear-gradient(135deg, #EAE6DF 0%, #D4CEB8 100%)',
      likes: '312',
      comments: '56'
    },
    {
      id: 5,
      type: 'text',
      content: lang === 'en'
        ? '"Chaos is not the absence of order, but the matrix from which stars are born."'
        : '„Haosul nu este absența ordinii, ci matricea tăcută din care se nasc stelele.”',
      bgColor: '#FAF8F5',
      textColor: '#8C7C72',
      likes: '143',
      comments: '12'
    },
    {
      id: 6,
      type: 'image',
      placeholderText: lang === 'en' ? 'Limonada Poetică Excerpts' : 'Fragmente - Limonada Poetică',
      gradient: 'linear-gradient(135deg, #FAF8F5 0%, #D4CEB8 100%)',
      likes: '267',
      comments: '29'
    }
  ];

  return (
    <section id="instagram-feed" className="section instagram-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Camera size={14} />
            <span>Instagram</span>
          </div>
          <h2 className="section-title text-gradient">{titleText}</h2>
          <p className="section-subtitle">{subtitleText}</p>
        </div>

        {/* Instagram Grid */}
        <div className="instagram-grid">
          {feedItems.map((item, index) => (
            <a 
              key={item.id}
              href="https://instagram.com/roxana.negut" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`instagram-item glass-card reveal-slide-up reveal-delay-${(index % 3) + 1}`}
            >
              
              {/* Card Content */}
              {item.type === 'text' ? (
                <div className="instagram-text-card" style={{ backgroundColor: 'var(--bg-card)' }}>
                  <p className="instagram-quote-text" style={{ color: 'var(--text-primary)' }}>
                    {item.content}
                  </p>
                  <span className="instagram-handle">@roxana.negut</span>
                </div>
              ) : (
                <div className="instagram-image-placeholder" style={{ background: item.gradient }}>
                  <div className="insta-img-inner">
                    <span className="insta-placeholder-tag">{item.placeholderText}</span>
                    <span className="instagram-handle text-dark">@roxana.negut</span>
                  </div>
                </div>
              )}

              {/* Hover Overlay Stats */}
              <div className="instagram-overlay">
                <div className="instagram-stats">
                  <span className="stat-item">
                    <Heart size={18} fill="currentColor" />
                    <strong>{item.likes}</strong>
                  </span>
                  <span className="stat-item">
                    <MessageCircle size={18} fill="currentColor" />
                    <strong>{item.comments}</strong>
                  </span>
                </div>
              </div>

            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="instagram-cta-footer">
          <a 
            href="https://instagram.com/roxana.negut" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            <span>{lang === 'en' ? 'Follow on Instagram' : 'Urmărește pe Instagram'}</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
