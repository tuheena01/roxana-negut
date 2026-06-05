import React from 'react';
import LimonadaPoetica from './LimonadaPoetica';
import InstagramFeed from './InstagramFeed';

export default function MediaSection({ lang, t }) {
  return (
    <section id="media" className="media-section-wrapper">
      <div className="media-section-divider"></div>
      
      {/* Interactive Lemonade Widget */}
      <LimonadaPoetica lang={lang} t={t} />
      
      <div className="media-section-divider"></div>
      
      {/* Instagram Feed Mockup */}
      <InstagramFeed lang={lang} />
    </section>
  );
}
