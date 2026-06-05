import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBook from './components/FeaturedBook';
import About from './components/About';
import Books from './components/Books';
import Reviews from './components/Reviews';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';
import SampleModal from './components/SampleModal';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      books: 'Books',
      reviews: 'Reviews',
      media: 'Media',
      contact: 'Contact'
    },
    hero: {
      title: 'Roxana Neguț',
      subtitle: 'Author • Poet • Storyteller',
      cta_books: 'Explore My Books',
      cta_contact: 'Follow on Instagram',
      quote: 'Writing is the bridge that connects the woman, the old woman, and the child residing inside my soul.'
    },
    about: {
      title: 'About Roxana Neguț',
      bio_1: 'Roxana Neguț (born in 1981 in Bucharest, Romania) is a versatile Romanian poet, children\'s writer, and journalist. With an educational background in Philosophy and Journalism, she has spent decades blending philosophical depth with literary grace.',
      bio_2: 'Her literary portfolio spans multiple genres—from hauntingly deep spiritual poetry and short prose to enchanting children\'s fairy tales. In addition to her independent volumes, her works have been featured in numerous prestigious national and international anthologies in the US, UK, India, and Argentina.',
      awards_title: 'Recognition & Honors',
      award_1: 'Appointed as the Literary Ambassador of Romania for the Cesar Egido Serrano Foundation (Spain) in 2018, and Ambassador of the Word in 2019 and 2020.',
      award_2: 'Winner of the Iconic Author Award 2023 from Maybeify Publisher (India) for her poetry collection "The Woman, The Old Woman, The Child".',
      award_3: 'Awarded the "Premiul Prieteniei" (Friendship Award) in 2020 for her fairy tales.'
    },
    books: {
      title: 'Published Works',
      subtitle: 'Explore Roxana\'s other published poetry collections, exploring spiritual stages of femininity.',
      read_on_amazon: 'Buy on Amazon',
      read_on_google: 'Google Play Books',
      view_details: 'More Details',
      hide_details: 'Close',
      genre: 'Genre',
      publisher: 'Publisher',
      year: 'Published'
    },
    reviews: {
      title: 'Reader & Critic Reviews',
      subtitle: 'What literary critics and readers say about her books.'
    },
    limonada: {
      title: 'Limonada Poetică',
      subtitle: 'Inspired by her blog "Viața ca o limonadă" (Life like a Lemonade).',
      btn: 'Squeeze Poetic Lemon',
      instructions: 'Click the button below to brew a fresh, random poetic thought or verse written by Roxana.'
    },
    contact: {
      title: 'Let\'s Connect',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Thank you for your message! Roxana will get back to you soon.'
    }
  },
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre',
      books: 'Cărți',
      reviews: 'Recenzii',
      media: 'Media',
      contact: 'Contact'
    },
    hero: {
      title: 'Roxana Neguț',
      subtitle: 'Autor • Poet • Povestitor',
      cta_books: 'Explorează Cărțile',
      cta_contact: 'Contactează-mă',
      quote: 'Scrisul este puntea care leagă femeia, bătrâna și copilul care locuiesc în sufletul meu.'
    },
    about: {
      title: 'Despre Roxana Neguț',
      bio_1: 'Roxana Neguț (născută în 1981 la București) este o poetă, scriitoare de literatură pentru copii și jurnalistă română. Având studii de Filosofie și Jurnalism, și-a petrecut decenii îmbinând profunzimea filosofică cu grația literară.',
      bio_2: 'Portofoliul ei literar acoperă mai multe genuri – de la poezie spirituală profundă și proză scurtă până la basme fermecătoare pentru copii. Pe lângă volumele sale independente, creațiile sale au fost incluse în numeroase antologii naționale și internaționale de prestigiu din SUA, Marea Britanie, India și Argentina.',
      awards_title: 'Recunoaștere și Distincții',
      award_1: 'Desemnată Ambasador Literar în România pentru Fundația Cesar Egido Serrano (Spania) în 2018, și „Ambasador al Cuvântului” în 2019 și 2020.',
      award_2: 'Câștigătoare a „Iconic Author Award 2023” acordat de Maybeify Publisher (India) pentru volumul de poezii „The Woman, The Old Woman, The Child”.',
      award_3: 'Distinsă cu „Premiul Prieteniei” în 2020 pentru poveștile sale.'
    },
    books: {
      title: 'Volume Publicate',
      subtitle: 'Explorează celelalte volume de poezie ale Roxanei Neguț, pline de profunzime filosofică.',
      read_on_amazon: 'Cumpără de pe Amazon',
      read_on_google: 'Google Play Books',
      view_details: 'Mai multe detalii',
      hide_details: 'Închide',
      genre: 'Gen',
      publisher: 'Editură',
      year: 'An apariție'
    },
    reviews: {
      title: 'Recenzii și Opinii',
      subtitle: 'Ce spun criticii literari și cititorii despre cărțile sale.'
    },
    limonada: {
      title: 'Limonada Poetică',
      subtitle: 'Inspirat de blogul ei „Viața ca o limonadă”.',
      btn: 'Stoarce o Lămâie Poetică',
      instructions: 'Apasă butonul de mai jos pentru a obține un gând poetic sau un vers scris de Roxana.'
    },
    contact: {
      title: 'Să luăm legătura',
      name: 'Nume',
      email: 'Email',
      message: 'Mesaj',
      send: 'Trimite Mesajul',
      success: 'Vă mulțumim pentru mesaj! Roxana vă va răspunde în cel mai scurt timp.'
    }
  }
};

function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('roxana_lang');
    return saved === 'ro' ? 'ro' : 'en';
  });

  // Default theme is now dark (premium matte black and gold)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('roxana_theme');
    return saved ? saved : 'dark';
  });

  // Sample Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    localStorage.setItem('roxana_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('roxana_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleOpenSample = (title, text) => {
    setModalTitle(title);
    setModalText(text);
    setModalOpen(true);
  };

  const handleCloseSample = () => {
    setModalOpen(false);
  };

  const t = translations[lang];

  return (
    <div className="app-wrapper">
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <main className="main-content-flow">
        <Hero t={t} />
        
        {/* Featured Book Showcase */}
        <FeaturedBook lang={lang} onOpenSample={handleOpenSample} t={t} />
        
        <About t={t} />
        
        {/* Books grid */}
        <Books lang={lang} onOpenSample={handleOpenSample} t={t} />
        
        <Reviews lang={lang} t={t} />
        
        {/* Media & Interactive Section (Limonada + Instagram) */}
        <MediaSection lang={lang} t={t} />
      </main>
      
      <Footer lang={lang} t={t} />
      
      {/* Excerpt Modal overlay */}
      <SampleModal 
        isOpen={modalOpen} 
        onClose={handleCloseSample} 
        bookTitle={modalTitle} 
        sampleText={modalText} 
      />
    </div>
  );
}

export default App;
