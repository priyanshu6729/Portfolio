'use client';
import { meta } from '@/content/meta';
import { useInView } from '@/hooks/useInView';



const beliefs = [
  { icon: '⚡', label: 'Ship Fast, Learn Faster', detail: 'Real projects teach more than any course.' },
  { icon: '🔗', label: 'Systems Thinking', detail: 'Every feature is part of an architecture.' },
  { icon: '🌐', label: 'Full-Stack Ownership', detail: 'From DB schema to pixel — own the whole thing.' },
];

const funFacts = [
  { label: 'Favorite Algorithm', value: 'A* Pathfinding' },
  { label: 'Current Read', value: 'Designing Data-Intensive Apps' },
  { label: 'Editor Theme', value: 'One Dark Pro' },
  { label: 'Debug Tool', value: 'console.log (always)' },
];

export default function About() {
  const [sectionRef, inView] = useInView();

  return (
    <section id="about" ref={sectionRef} style={{ background: 'var(--color-deep)', position: 'relative' }}>
      <div style={{ height: '4px', background: 'var(--gradient-line)', opacity: 0.4 }} />
      <div className="section-container section-padding">
        <p className={`section-eyebrow reveal ${inView ? 'in-view' : ''}`}>// 002 ── THE TRANSMISSION</p>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden', marginBottom: '3rem' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, var(--color-deep), transparent)', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, var(--color-deep), transparent)', zIndex: 2 }} />
              <div style={{ perspective: '600px', perspectiveOrigin: '50% 100%', height: '100%', overflow: 'hidden' }}>
                <div style={{
                  transform: 'rotateX(25deg)', transformOrigin: '50% 100%',
                  animation: inView ? 'crawl-scroll 18s linear 0.5s infinite' : 'none',
                  padding: '0 10%', color: 'var(--accent-crawl)',
                  fontFamily: 'var(--font-crawl)', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                  textAlign: 'center', lineHeight: 1.9,
                }}>
                  A long time ago in a university far, far away...<br /><br />
                  A young engineer set out to build things that matter. Armed with JavaScript and curiosity, they ventured into the frontier of full-stack systems...<br /><br />
                  From RESTful APIs to real-time tracking engines, the mission was clear: ship, learn, repeat.
                </div>
              </div>
            </div>
            <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1`}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--color-bright)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Full Stack<br />Engineer.</h2>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>I'm a final-year CS student at the University of Lucknow who builds scalable web applications from database schema to pixel-perfect frontend. My work lives at the intersection of system design and user experience.</p>
              <p style={{ color: 'var(--color-secondary)', lineHeight: 1.8 }}>I've shipped production systems at Northern Railways and Swabhiman Foundation — reducing real admin workloads, securing real user data, and handling real traffic. I believe great software is invisible engineering made visible through impact.</p>
            </div>
          </div>
          <div>
            <div className={`data-card reveal ${inView ? 'in-view' : ''} reveal-delay-2`} style={{ marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              <p style={{ color: 'var(--accent-crawl)', letterSpacing: '0.1em', marginBottom: '1rem' }}>PERSONAL DATA FILE ──────────</p>
              {[['LOCATION', meta.location], ['CURRENTLY', meta.institution], ['DEGREE', 'B.Tech CSE'], ['YEAR', meta.year], ['STATUS', meta.statusLabel], ['CGPA', '8.22 / 10.0'], ['STACK', 'Python · MERN · Next.js · REST']].map(([key, val]) => (
                <div key={key} style={{ display: 'flex', gap: '1rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-muted)', minWidth: '80px', flexShrink: 0 }}>{key}:</span>
                  <span style={{ color: 'var(--color-primary)' }}>{val}</span>
                </div>
              ))}
            </div>
            <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-3`} style={{ marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>// FUN FACTS</p>
              {funFacts.map(fact => (
                <div key={fact.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--color-border)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--color-secondary)' }}>{fact.label}</span>
                  <span style={{ color: 'var(--accent-saber)' }}>{fact.value}</span>
                </div>
              ))}
            </div>
            <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-4`}>
              {beliefs.map(b => (
                <div key={b.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--color-bright)', marginBottom: '0.2rem', fontSize: '0.9rem' }}>{b.label}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-secondary)' }}>{b.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
