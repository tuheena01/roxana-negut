import { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function SampleModal({ isOpen, onClose, bookTitle, sampleText }) {
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Sample">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <Sparkles size={16} className="modal-sparkle" />
          <span className="modal-badge">Book Excerpt</span>
          <h3 className="modal-title">{bookTitle}</h3>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          {sampleText.split('\n\n').map((paragraph, index) => (
            <p key={index} className="modal-paragraph">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
