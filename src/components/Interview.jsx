import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Feather } from 'lucide-react';

export default function Interview({ lang, t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const qas = [
    {
      question: {
        en: "How would you describe your writing style?",
        ro: "Cum ați descrie stilul dumneavoastră de scriere?"
      },
      answer: {
        en: "I am a versatile writer who doesn't like to stick to a single genre. I write poetry, children's literature, science fiction, and magical realism. I write spontaneously—often without a pre-planned outline. The words flow from my soul onto the page as if they were already written somewhere in the ether.",
        ro: "Sunt o scriitoare versatilă căreia nu îi place să se limiteze la un singur gen. Scriu poezie, literatură pentru copii, science fiction și realism magic. Scriu spontan—adesea fără o schiță prestabilită. Cuvintele curg din sufletul meu pe pagină ca și cum ar fi fost deja scrise undeva în eter."
      }
    },
    {
      question: {
        en: "How does your background in Philosophy influence your literary work?",
        ro: "Cum vă influențează studiile de Filosofie opera literară?"
      },
      answer: {
        en: "Philosophy gives me the tools to look beneath the surface. When I write a poem or a children's story, I am always seeking the deeper existential truths. It helps me explore themes like the duality of light and shadow, the stages of femininity, and our cosmic purpose on this earth.",
        ro: "Filosofia îmi oferă instrumentele pentru a privi sub suprafață. Când scriu o poezie sau o poveste pentru copii, caut întotdeauna adevăruri existențiale mai profunde. Mă ajută să explorez teme precum dualitatea luminii și a umbrei, stadiile feminității și scopul nostru cosmic pe acest pământ."
      }
    },
    {
      question: {
        en: "What was the inspiration behind your book 'The Woman, The Old Woman, The Child'?",
        ro: "Care a fost inspirația din spatele cărții 'The Woman, The Old Woman, The Child'?"
      },
      answer: {
        en: "This collection is an honor to the three core archetypes that exist within every woman's lifetime. We are the child filled with wonder, the woman walking through storms and finding her strength, and the old woman carrying wisdom. It is about integrating these aspects of the self and honoring our shadows as much as our light.",
        ro: "Această colecție este un omagiu adus celor trei arhetipuri fundamentale care coexistă în viața fiecărei femei. Suntem copilul plin de uimire, femeia care trece prin furtuni și își găsește puterea, și bătrâna purtătoare de înțelepciune. Este vorba despre integrarea acestor aspecte ale sinelui și onorarea umbrelor noastre la fel de mult ca și a luminii."
      }
    },
    {
      question: {
        en: "How do you view the contemporary Romanian literary scene?",
        ro: "Cum vedeți scena literară românească contemporană?"
      },
      answer: {
        en: "The contemporary Romanian book market is smaller compared to others, but it is extremely dynamic, creative, and growing. There are many unique voices emerging, especially in poetry and indie genres. It is an exciting time to write and be part of this community, building bridges to international readers.",
        ro: "Piața de carte românească contemporană este mai mică în comparație cu altele, dar este extrem de dinamică, creativă și în continuă creștere. Apar multe voci unice, în special în poezie și genuri indie. Este un moment incitant pentru a scrie și a face parte din această comunitate, construind punți către cititorii internaționali."
      }
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="interview" className="section interview-section">
      <div className="container">
        <div className="interview-grid">
          
          <div className="interview-intro">
            <div className="section-badge">
              <Feather size={14} />
              <span>Q&A Session</span>
            </div>
            <h2 className="section-title text-gradient">{t.interview.title}</h2>
            <p className="section-subtitle">{t.interview.subtitle}</p>
            
            <div className="interview-image-card glass-card reveal">
              <div className="decor-glow"></div>
              <p className="decor-large-text">“</p>
              <p className="interview-quote-excerpt">
                {lang === 'en' 
                  ? "Writing is a spiritual path. It is a way of listening to the quiet whispers of the universe and turning them into ink." 
                  : "Scrisul este o cale spirituală. Este o modalitate de a asculta șoaptele liniștite ale universului și de a le transforma în cerneală."}
              </p>
              <div className="interview-signature">
                — Roxana Neguț
              </div>
            </div>
          </div>

          <div className="interview-accordion">
            {qas.map((qa, index) => {
              const isOpen = openIndex === index;
              const qText = qa.question[lang];
              const aText = qa.answer[lang];

              return (
                <div 
                  key={index} 
                  className={`accordion-item glass-card reveal-slide-up reveal-delay-${index + 1} ${isOpen ? 'open' : ''}`}
                >
                  <button 
                    className="accordion-header"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="accordion-title-wrapper">
                      <HelpCircle size={18} className="q-icon" />
                      <h4>{qText}</h4>
                    </div>
                    <div className="accordion-icon-toggle">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  
                  <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p>{aText}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
