import { useEffect, useRef } from 'react';

/**
 * A radial glow that softly follows the mouse cursor.
 * Rendered as a fixed-position element behind all content.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMouseMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      // Smooth lerp toward target
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}
