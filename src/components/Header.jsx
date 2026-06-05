import React, { useState, useEffect } from 'react';
import { Globe, BookOpen, User, MessageSquare, HelpCircle, Smile, Heart } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'books', 'reviews', 'interview', 'limonada'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: t.nav.home, icon: <Heart size={16} /> },
    { id: 'about', label: t.nav.about, icon: <User size={16} /> },
    { id: 'books', label: t.nav.books, icon: <BookOpen size={16} /> },
    { id: 'reviews', label: t.nav.reviews, icon: <MessageSquare size={16} /> },
    { id: 'interview', label: t.nav.interview, icon: <HelpCircle size={16} /> },
    { id: 'limonada', label: t.nav.limonada, icon: <Smile size={16} /> }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo">
          <span className="logo-init">R</span>
          <span className="logo-rest">oxana Neguț</span>
        </a>

        <nav className="nav-menu">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button 
            className="lang-toggle" 
            onClick={() => setLang(lang === 'en' ? 'ro' : 'en')}
            aria-label="Toggle Language"
            title={lang === 'en' ? 'Schimbă în Română' : 'Switch to English'}
          >
            <Globe size={18} />
            <span className="lang-text">{lang === 'en' ? 'RO' : 'EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
