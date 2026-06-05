import React, { useState } from 'react';
import { Mail, Send, Heart, Globe, ArrowRight } from 'lucide-react';

export default function Footer({ lang, t }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setName('');
      setMessage('');
      setSubmitted(false);
    }, 5000);
  };

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        
        {/* Contact Form & Info */}
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h3 className="footer-logo">Roxana Neguț</h3>
            <p className="footer-tagline">
              {lang === 'en' 
                ? "Writing poetry, children's literature, and articles that explore life, shadow, and light."
                : "Scriind poezie, literatură pentru copii și articole care explorează viața, umbra și lumina."}
            </p>
            
            <div className="contact-details">
              <a href="mailto:contact@roxananegut.com" className="contact-link">
                <Mail size={16} />
                <span>contact@roxananegut.com</span>
              </a>
              <a href="https://roxananegut.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Globe size={16} />
                <span>www.roxananegut.com</span>
              </a>
            </div>

            {/* Social Handles */}
            <div className="social-links">
              <a href="https://facebook.com/roxana.negut" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <span>FB</span>
              </a>
              <a href="https://twitter.com/roxananegut" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <span>TW</span>
              </a>
              <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Goodreads">
                <span>GR</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <span>IG</span>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">{lang === 'en' ? 'Quick Links' : 'Linkuri Rapide'}</h4>
            <ul className="footer-links-list">
              <li><a href="#home">{t.nav.home}</a></li>
              <li><a href="#about">{t.nav.about}</a></li>
              <li><a href="#books">{t.nav.books}</a></li>
              <li><a href="#reviews">{t.nav.reviews}</a></li>
              <li><a href="#interview">{t.nav.interview}</a></li>
              <li><a href="#limonada">{t.nav.limonada}</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="footer-form-container">
            <h4 className="footer-heading">{t.contact.title}</h4>
            {submitted ? (
              <div className="form-success-card glass-card">
                <Heart size={24} className="heart-success float-animation" />
                <p>{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder={t.contact.name} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input" 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder={t.contact.email} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    placeholder={t.contact.message} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="3"
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <span>{t.contact.send}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {year} Roxana Neguț. {lang === 'en' ? 'All rights reserved.' : 'Toate drepturile rezervate.'}
          </p>
          <p className="crafted-text">
            {lang === 'en' ? 'Crafted with' : 'Creat cu'} <Heart size={12} fill="#ec4899" color="#ec4899" /> {lang === 'en' ? 'for literature lovers.' : 'pentru iubitorii de literatură.'}
          </p>
        </div>

      </div>
    </footer>
  );
}
