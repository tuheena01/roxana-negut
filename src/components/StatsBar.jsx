import { useEffect, useRef, useState } from 'react';
import { BookOpen, Globe, Award, Feather } from 'lucide-react';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function StatsBar({ lang }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const books = useCountUp(5, 1800, started);
  const countries = useCountUp(4, 1800, started);
  const awards = useCountUp(3, 1800, started);
  const years = useCountUp(15, 1800, started);

  const stats = [
    { icon: <BookOpen size={28} />, value: books, suffix: '+', label: lang === 'en' ? 'Published Volumes' : 'Volume Publicate' },
    { icon: <Globe size={28} />, value: countries, suffix: '', label: lang === 'en' ? 'Countries Featured In' : 'Țări Reprezentate' },
    { icon: <Award size={28} />, value: awards, suffix: '+', label: lang === 'en' ? 'International Awards' : 'Premii Internaționale' },
    { icon: <Feather size={28} />, value: years, suffix: '+', label: lang === 'en' ? 'Years of Writing' : 'Ani de Scris' },
  ];

  return (
    <div className="stats-bar-section reveal" ref={ref}>
      <div className="container">
        <div className="stats-bar-grid">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-card reveal-delay-${i + 1}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
