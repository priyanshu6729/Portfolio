'use client';
import { useEffect, useRef, useState } from 'react';
import { meta } from '@/content/meta';

const descriptors = ['Full Stack Engineer', 'MERN Developer', 'System Builder', 'CS Student'];

export default function Hero() {
  const [glitch, setGlitch] = useState(false);
  const [hoverGlitch, setHoverGlitch] = useState(false);
  const [descIndex, setDescIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const firstName = 'PRIYANSHU';
  const lastName = 'RAJ';

  // Rotating descriptors
  useEffect(() => {
    const interval = setInterval(() => {
      setDescIndex(i => (i + 1) % descriptors.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Random glitch intervals — disabled during hover
  useEffect(() => {
    let timeoutId;
    const scheduleGlitch = () => {
      const delay = 6000 + Math.random() * 6000;
      timeoutId = setTimeout(() => {
        if (!hoverGlitch) {
          setGlitch(true);
          setTimeout(() => { setGlitch(false); scheduleGlitch(); }, 120);
        } else {
          scheduleGlitch();
        }
      }, delay);
    };
    scheduleGlitch();
    return () => clearTimeout(timeoutId);
  }, [hoverGlitch]);

  const isGlitching = glitch || hoverGlitch;

  const renderLetters = (word, startDelay) =>
    word.split('').map((char, i) => (
      <span key={`${word}-${i}`} aria-hidden="true" style={{
        display: 'inline-block',
        animation: `letter-in 0.5s var(--ease-drift) ${startDelay + i * 0.03}s both`,
      }}>
        {char}
      </span>
    ));

  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center',
      paddingTop: '5rem', overflow: 'hidden',
    }}>
      {/* Nebula gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-nebula)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '3rem', paddingBottom: '6rem' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          {/* Text block */}
          <div>
            {/* Eyebrow */}
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--accent-crawl)',
              marginBottom: '1.5rem', animation: 'fade-up 0.6s var(--ease-drift) 0.3s both',
            }}>
              [ DESIGNATION: {meta.designation} ]
            </p>

            {/* Name — first and last on separate lines to prevent mid-word break */}
            <h1
              aria-label={meta.name}
              onMouseEnter={() => setHoverGlitch(true)}
              onMouseLeave={() => setHoverGlitch(false)}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 0.95,
                letterSpacing: '0.15em', color: 'var(--color-bright)',
                marginBottom: '1.5rem', cursor: 'default',
                animation: isGlitching ? 'glitch-shift 0.12s steps(1) 3' : 'none',
              }}
            >
              {renderLetters(firstName, 0.5)}
              <br />
              {renderLetters(lastName, 0.5 + firstName.length * 0.03 + 0.1)}
            </h1>

            {/* Institution */}
            <p style={{
              fontFamily: 'var(--font-body)', color: 'var(--color-secondary)',
              marginBottom: '1.2rem', fontSize: '1rem',
              animation: 'fade-up 0.6s var(--ease-drift) 1.4s both',
            }}>
              ── {meta.degree} · {meta.institution}
            </p>

            {/* Rotating descriptor */}
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-saber)',
              marginBottom: '2rem', minHeight: '1.5rem',
              animation: 'fade-up 0.6s var(--ease-drift) 1.6s both',
            }}>
              <span style={{ color: 'var(--color-muted)' }}>&gt; </span>
              <span key={descIndex} style={{ animation: 'fade-in 0.3s ease' }}>
                {descriptors[descIndex]}
              </span>
              <span style={{ opacity: showCursor ? 1 : 0, color: 'var(--accent-saber)', transition: 'opacity 0.1s' }}>_</span>
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily: 'var(--font-body)', color: 'var(--color-secondary)',
              maxWidth: '520px', lineHeight: 1.7, marginBottom: '2.5rem',
              animation: 'fade-up 0.6s var(--ease-drift) 1.8s both',
            }}>
              {meta.tagline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fade-up 0.6s var(--ease-drift) 2s both' }}>
              <a href="#projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '0.75rem 1.5rem',
                border: '1px solid var(--accent-saber)', color: 'var(--accent-saber)',
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                transition: 'color 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--color-void)';
                  e.currentTarget.querySelector('.fill').style.transform = 'scaleX(1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--accent-saber)';
                  e.currentTarget.querySelector('.fill').style.transform = 'scaleX(0)';
                }}
              >
                <span className="fill" style={{
                  position: 'absolute', inset: 0, background: 'var(--accent-saber)',
                  transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.25s var(--ease-snap)',
                }} />
                <span style={{ position: 'relative' }}>[ EXPLORE WORK ]</span>
              </a>
              <a href={meta.links.resume} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '0.75rem 1.5rem',
                color: 'var(--color-secondary)', cursor: 'pointer',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-bright)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-secondary)'}
              >
                READ RESUME ↗
              </a>
            </div>
          </div>

         {/* Right: holographic photo frame */}
          <div className="hero-photo" style={{ position: 'relative', width: '280px', height: '340px', flexShrink: 0 }}>
            <div style={{
              width: '100%', height: '100%',
              border: '1px solid var(--color-border)',
              position: 'relative', overflow: 'hidden',
              background: '#0a0a0f',
            }}>

              {/* ── Actual photo ── */}
              <img
                src="/poster.png"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(0.15) contrast(1.05)',
                }}
              />

              {/* Holographic interference lines overlay */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(79,195,247,0.3) 3px, rgba(79,195,247,0.3) 4px)',
              }} />

              {/* Scanline sweep */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-saber), transparent)',
                animation: 'scanline 3s linear infinite', opacity: 0.5,
              }} />

              {/* Bottom gradient fade with label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '64px',
                background: 'linear-gradient(to top, rgba(5,5,10,0.85) 0%, transparent 100%)',
                display: 'flex', alignItems: 'flex-end',
                padding: '0.55rem 0.7rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.52rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-saber)',
                  textTransform: 'uppercase',
                  opacity: 0.7,
                }}>
                  IDENTITY · VERIFIED
                </p>
              </div>

              {/* Corner marks */}
              <div style={{ position: 'absolute', top: 8, left: 8, width: 16, height: 16, borderTop: '1px solid var(--accent-saber)', borderLeft: '1px solid var(--accent-saber)' }} />
              <div style={{ position: 'absolute', top: 8, right: 8, width: 16, height: 16, borderTop: '1px solid var(--accent-saber)', borderRight: '1px solid var(--accent-saber)' }} />
              <div style={{ position: 'absolute', bottom: 8, left: 8, width: 16, height: 16, borderBottom: '1px solid var(--accent-saber)', borderLeft: '1px solid var(--accent-saber)' }} />
              <div style={{ position: 'absolute', bottom: 8, right: 8, width: 16, height: 16, borderBottom: '1px solid var(--accent-saber)', borderRight: '1px solid var(--accent-saber)' }} />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)',
          letterSpacing: '0.1em', animation: 'breath 2s ease-in-out infinite',
          textAlign: 'center',
        }}>
          ↓ SCROLL
        </div>
      </div>
    </section>
  );
}
