'use client';
import { useEffect, useState, useRef } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('connecting'); // connecting | loading | dissolve
  const onDoneRef = useRef(onDone);

  // Keep ref in sync without triggering effect re-runs
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    // Phase 1: show "ESTABLISHING CONNECTION..." for 600ms
    const t1 = setTimeout(() => setPhase('loading'), 600);

    // Phase 2: animate progress 0→100 over ~1.8s
    let val = 0;
    const interval = setInterval(() => {
      val += Math.random() * 8 + 2;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setPhase('dissolve');
      }
      setProgress(Math.min(val, 100));
    }, 60);

    // Phase 3: dissolve and call onDone
    const t2 = setTimeout(() => onDoneRef.current?.(), 2800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval); };
  }, []); // Empty deps — runs once

  const barFilled = Math.round(progress / 100 * 20);
  const bar = '█'.repeat(barFilled) + '░'.repeat(20 - barFilled);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9998,
      background: 'var(--color-void)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: '1.5rem',
      opacity: phase === 'dissolve' ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: phase === 'dissolve' ? 'none' : 'all',
    }}>
      {/* Scanlines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
      }} />

      {/* Sigil */}
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none" style={{ animation: 'spin-slow 4s linear infinite', opacity: 0.7 }}>
        <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" stroke="#4fc3f7" strokeWidth="1.5" fill="none"/>
        <polygon points="16,8 24,13 24,19 16,24 8,19 8,13" stroke="#f5c518" strokeWidth="1" fill="none" opacity="0.6"/>
        <circle cx="16" cy="16" r="2.5" fill="#4fc3f7"/>
      </svg>

      <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--accent-crawl)' }}>
          {phase === 'connecting' ? 'ESTABLISHING CONNECTION...' : `LOADING TRANSMISSION — ${Math.round(progress)}%`}
        </p>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: 'var(--accent-saber)', fontFamily: 'var(--font-mono)' }}>
          {bar}
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--color-muted)' }}>
          PRIYANSHU RAJ · TRANSMISSION v1.0
        </p>
      </div>
    </div>
  );
}
