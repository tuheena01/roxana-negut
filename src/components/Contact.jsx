import { useState } from 'react';
import { Mail, Send, Camera, MapPin, Feather, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const labels = {
    en: {
      badge: 'Get In Touch',
      title: "Let's Connect",
      subtitle: "Whether you'd like to discuss a collaboration, invite Roxana to an event, or simply share your thoughts about her writing — she'd love to hear from you.",
      name: 'Your Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent! Roxana will be in touch soon.',
      error: 'Something went wrong. Please try again.',
      or: 'Or reach out directly',
      location: 'Bucharest, Romania',
      ig: '@roxana.negut',
      igHandle: 'Instagram',
    },
    ro: {
      badge: 'Ia Legătura',
      title: 'Să Ne Conectăm',
      subtitle: 'Dacă dorești să discuți o colaborare, să inviți Roxana la un eveniment sau să îți împărtășești gândurile despre scrierile sale — îi va face plăcere să audă de tine.',
      name: 'Numele tău',
      email: 'Adresă de Email',
      subject: 'Subiect',
      message: 'Mesajul tău',
      send: 'Trimite Mesajul',
      sending: 'Se trimite...',
      success: 'Mesaj trimis! Roxana te va contacta în curând.',
      error: 'Ceva a mers greșit. Te rugăm să încerci din nou.',
      or: 'Sau contactează direct',
      location: 'București, România',
      ig: '@roxana.negut',
      igHandle: 'Instagram',
    }
  };

  const L = labels[lang];

  return (
    <section id="contact-form" className="section contact-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">
            <Feather size={14} />
            <span>{L.badge}</span>
          </div>
          <h2 className="section-title text-gradient">{L.title}</h2>
          <p className="section-subtitle">{L.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Left: Info Panel */}
          <div className="contact-info-panel reveal">
            <div className="contact-info-card glass-card">
              <div className="contact-decor-quote">"</div>
              <p className="contact-inspirational">
                {lang === 'en'
                  ? "Every word written is a bridge between two souls. Reach out, and let us build one together."
                  : "Fiecare cuvânt scris este o punte între două suflete. Contactați-mă și hai să construim una împreună."}
              </p>
              <div className="contact-info-divider"></div>
              <div className="contact-info-items">
                <a href="mailto:negutroxana@yahoo.com" className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">Email</span>
                    <span className="contact-info-value">negutroxana@yahoo.com</span>
                  </div>
                </a>
                <a href="https://instagram.com/roxana.negut" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                  <div className="contact-info-icon">
                    <Camera size={20} />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">{L.igHandle}</span>
                    <span className="contact-info-value">{L.ig}</span>
                  </div>
                </a>
                <div className="contact-info-item non-link">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">{lang === 'en' ? 'Location' : 'Locație'}</span>
                    <span className="contact-info-value">{L.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-panel reveal-slide-up">
            <div className="contact-form-card glass-card">
              {status === 'success' ? (
                <div className="contact-success-state">
                  <div className="contact-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>{lang === 'en' ? 'Message Sent!' : 'Mesaj Trimis!'}</h3>
                  <p>{L.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-row">
                    <div className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                      <label htmlFor="contact-name">{L.name}</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        autoComplete="name"
                      />
                      <div className="form-underline"></div>
                    </div>
                    <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                      <label htmlFor="contact-email">{L.email}</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        autoComplete="email"
                      />
                      <div className="form-underline"></div>
                    </div>
                  </div>

                  <div className={`form-group ${focusedField === 'subject' ? 'focused' : ''} ${formData.subject ? 'filled' : ''}`}>
                    <label htmlFor="contact-subject">{L.subject}</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <div className="form-underline"></div>
                  </div>

                  <div className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                    <label htmlFor="contact-message">{L.message}</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                    ></textarea>
                    <div className="form-underline"></div>
                  </div>

                  {status === 'error' && (
                    <div className="contact-error-msg">
                      <AlertCircle size={16} />
                      <span>{L.error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn-primary contact-submit-btn ${status === 'sending' ? 'loading' : ''}`}
                    disabled={status === 'sending'}
                    id="contact-submit"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="btn-spinner"></span>
                        <span>{L.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{L.send}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
