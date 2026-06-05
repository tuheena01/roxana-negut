import { useState } from 'react';
import { Mail, Send, Heart, Camera } from 'lucide-react';

export default function Footer({ lang, t }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  const year = new Date().getFullYear();
  
  const footerTagline = lang === 'en' ? 'Author • Poet • Storyteller' : 'Autor • Poet • Povestitor';
  const signupTitle = lang === 'en' ? "Join Roxana's Reader Circle" : 'Alătură-te cercului de cititori';
  const signupSubtitle = lang === 'en' 
    ? 'Get monthly literary reflections, book releases, and exclusive excerpts.'
    : 'Primește reflectii literare lunare, lansări de carte și fragmente în exclusivitate.';

  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        
        {/* Newsletter Signup */}
        <div className="newsletter-box glass-card">
          <div className="newsletter-info">
            <h3 className="newsletter-title">{signupTitle}</h3>
            <p className="newsletter-subtitle">{signupSubtitle}</p>
          </div>
          
          <div className="newsletter-form-wrapper">
            {submitted ? (
              <div className="newsletter-success animate-fade-in">
                <Heart size={16} className="heart-success float-animation" />
                <span>{lang === 'en' ? 'Welcome to the circle!' : 'Bine ai venit în cerc!'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder={t.contact.email} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input" 
                />
                <button type="submit" className="btn-primary newsletter-btn">
                  <span>{lang === 'en' ? 'Subscribe' : 'Abonează-te'}</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Minimal Cinematic Footer Baseline */}
        <div className="cinematic-footer">
          <h2 className="cinematic-logo">ROXANA NEGUȚ</h2>
          <p className="cinematic-tagline">{footerTagline}</p>
          
          <div className="cinematic-links">
            <a href="https://instagram.com/roxana.negut" target="_blank" rel="noopener noreferrer" className="cinematic-link-item">
              <Camera size={14} />
              <span>Instagram</span>
            </a>
            <span className="cinematic-divider">•</span>
            <a href="mailto:negutroxana@yahoo.com" className="cinematic-link-item">
              <Mail size={14} />
              <span>negutroxana@yahoo.com</span>
            </a>
          </div>

          <div className="cinematic-bottom">
            <p className="copyright-text">
              © {year} Roxana Neguț. {lang === 'en' ? 'All rights reserved.' : 'Toate drepturile rezervate.'}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
