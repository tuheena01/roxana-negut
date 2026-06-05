import { useRef, useCallback } from 'react';

/**
 * TiltCard — wraps any content in a real 3D perspective tilt that follows mouse position.
 * Also adds a dynamic shine highlight that moves with the tilt angle.
 */
export default function TiltCard({
  children,
  className = '',
  intensity = 10,
  scale = 1.03,
  glareOpacity = 0.18,
  style = {},
}) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
      const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1

      card.style.transform = `perspective(900px) rotateX(${-dy * intensity}deg) rotateY(${dx * intensity}deg) scale(${scale})`;

      // Dynamic shine position
      const shine = shineRef.current;
      if (shine) {
        const shinePctX = ((dx + 1) / 2) * 100;
        const shinePctY = ((dy + 1) / 2) * 100;
        shine.style.background = `radial-gradient(circle at ${shinePctX}% ${shinePctY}%, rgba(212,175,55,${glareOpacity}) 0%, transparent 65%)`;
        shine.style.opacity = '1';
      }
    });
  }, [intensity, scale, glareOpacity]);

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.08s ease';
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.65s cubic-bezier(0.16,1,0.3,1)';
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
    const shine = shineRef.current;
    if (shine) shine.style.opacity = '0';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{ ...style, willChange: 'transform', transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic shine overlay */}
      <div ref={shineRef} className="tilt-shine" aria-hidden="true" />
      {children}
    </div>
  );
}
