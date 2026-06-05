import React, { useState, useEffect } from 'react';
import { Globe, BookOpen, User, MessageSquare, HelpCircle, Smile, Heart, Menu, X, Sun, Moon } from 'lucide-react';

export default function Header({ lang, setLang, theme, setTheme, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'books', 'reviews', 'interview', 'limonada'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
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

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo */}
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <span className="logo-init">R</span>
          <span className="logo-rest">oxana Neguț</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-menu">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Actions (Language, Theme, Mobile Hamburger) */}
        <div className="header-actions">
          
          {/* Language Toggle */}
          <button 
            className="lang-toggle" 
            onClick={() => setLang(lang === 'en' ? 'ro' : 'en')}
            aria-label="Toggle Language"
            title={lang === 'en' ? 'Schimbă în Română' : 'Switch to English'}
          >
            <Globe size={16} />
            <span className="lang-text">{lang === 'en' ? 'RO' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
