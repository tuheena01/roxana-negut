import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    // Also track from window so particles react even outside canvas
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    // --- Particle setup ---
    const N = 70;
    const LINK_DIST = 110;
    const REPEL_DIST = 130;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const particles = Array.from({ length: N }, () => ({
      x: rand(0, canvas.width || 800),
      y: rand(0, canvas.height || 600),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      r: rand(0.8, 2.2),
      baseAlpha: rand(0.25, 0.65),
      alpha: 0,
      // each particle also has a slow pulsating brightness
      pulse: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.008, 0.022),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < REPEL_DIST && d > 0) {
          const f = ((REPEL_DIST - d) / REPEL_DIST) * 1.0;
          p.vx += (dx / d) * f * 0.6;
          p.vy += (dy / d) * f * 0.6;
        }

        // Gentle friction
        p.vx *= 0.965;
        p.vy *= 0.965;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.y > canvas.height + 5) p.y = -5;

        // Pulse alpha
        p.pulse += p.pulseSpeed;
        p.alpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(p.pulse));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;
        ctx.fill();
      }

      // Draw connections between close particles
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse-to-nearby-particles lines (attraction lines to mouse)
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 180) {
          const alpha = (1 - d / 180) * 0.22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
