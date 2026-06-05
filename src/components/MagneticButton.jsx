import { useRef, useCallback, useEffect } from 'react';

/**
 * MagneticButton — a button/link wrapper that magnetically attracts toward the cursor.
 * The element's inner content shifts slightly toward the mouse on hover.
 */
export default function MagneticButton({ children, className = '', strength = 0.35, as: Tag = 'button', ...props }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const frameRef = useRef(null);
  const active = useRef(false);

  const handleMouseMove = useCallback((e) => {
    if (!active.current) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const el = outerRef.current;
      const inner = innerRef.current;
      if (!el || !inner) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx * 0.5}px, ${dy * 0.5}px)`;
      inner.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }, [strength]);

  const handleMouseEnter = useCallback(() => {
    active.current = true;
    const el = outerRef.current;
    const inner = innerRef.current;
    if (el) el.style.transition = 'transform 0.1s ease';
    if (inner) inner.style.transition = 'transform 0.1s ease';
    window.addEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    active.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(frameRef.current);
    const el = outerRef.current;
    const inner = innerRef.current;
    if (el) {
      el.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)';
      el.style.transform = 'translate(0,0)';
    }
    if (inner) {
      inner.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)';
      inner.style.transform = 'translate(0,0)';
    }
  }, [handleMouseMove]);

  useEffect(() => () => {
    window.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(frameRef.current);
  }, [handleMouseMove]);

  return (
    <div ref={outerRef} style={{ display: 'inline-block' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Tag ref={innerRef} className={className} {...props}>
        {children}
      </Tag>
    </div>
  );
}
