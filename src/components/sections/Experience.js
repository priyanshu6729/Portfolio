'use client';
import { useState } from 'react';
import { experiences } from '@/content/experience';
import { useInView } from '@/hooks/useInView';

const TYPE_BADGES = {
  internship: { label: 'INTERNSHIP', color: '#4fc3f7' },
  research: { label: 'LAB ASSIGNMENT', color: '#f5c518' },
  'part-time': { label: 'PART-TIME', color: '#a78bfa' },
  freelance: { label: 'FREELANCE', color: '#e63946' },
};

function formatDate(str) {
  if (!str) return 'Present';
  const [y, m] = str.split('-');
  return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m)-1]} ${y}`;
}

export default function Experience() {
  const [sectionRef, inView] = useInView();
  const [expanded, setExpanded] = useState(-1);

  return (
    <section id="experience" ref={sectionRef} style={{ background: 'var(--color-void)' }}>
      <div style={{ height: '1px', background: 'var(--gradient-line)', opacity: 0.3 }} />
      <div className="section-container section-padding">
        <p className={`section-eyebrow reveal ${inView ? 'in-view' : ''}`}>// 006 ── FIELD OPERATIONS LOG</p>
        <h2 className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: 'var(--color-bright)', marginBottom: '4rem', lineHeight: 1.1 }}>
          Experience.
        </h2>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '0', top: 0, width: '1px', height: inView ? '100%' : '0', background: 'linear-gradient(to bottom, var(--accent-saber), var(--color-border), transparent)', transition: 'height 1.5s var(--ease-drift) 0.3s' }} />
          {experiences.map((exp, i) => {
            const badge = TYPE_BADGES[exp.type] || TYPE_BADGES.internship;
            const isOpen = expanded === i;
            return (
              <div key={i} className={`reveal ${inView ? 'in-view' : ''}`}
                style={{ paddingLeft: '2.5rem', marginBottom: '3.5rem', position: 'relative', transitionDelay: `${0.2 + i * 0.15}s` }}>
                <div style={{ position: 'absolute', left: -5, top: '0.4rem', width: 10, height: 10, borderRadius: '50%', background: isOpen ? 'var(--accent-saber)' : 'var(--color-surface)', border: `1px solid ${isOpen ? 'var(--accent-saber)' : 'var(--color-border)'}`, boxShadow: isOpen ? '0 0 12px var(--accent-saber)' : 'none', transition: 'all 0.3s', zIndex: 1, animation: isOpen ? 'saber-glow 2s ease-in-out infinite' : 'none' }} />
                <div className="data-card" style={{ cursor: 'pointer' }} onClick={() => setExpanded(isOpen ? -1 : i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.8rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '0.15rem 0.5rem', border: `1px solid ${badge.color}`, color: badge.color, textTransform: 'uppercase' }}>{badge.label}</span>
                        {exp.remote && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.08em' }}>REMOTE</span>}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--color-bright)', marginBottom: '0.2rem' }}>{exp.role}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--accent-saber)', fontWeight: 500, fontSize: '0.9rem' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                        {formatDate(exp.start)} — {typeof exp.end === 'string' && exp.end !== 'present' ? formatDate(exp.end) : 'Present'}
                      </p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '0.2rem' }}>{exp.location}</p>
                    </div>
                  </div>
                  {isOpen && (
                    <div style={{ animation: 'fade-up 0.3s var(--ease-drift)', marginTop: '1.2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.2rem' }}>
                      <ul style={{ listStyle: 'none', marginBottom: '1.2rem' }}>
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.7rem', color: 'var(--color-primary)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                            <span style={{ color: 'var(--accent-saber)', flexShrink: 0, marginTop: '0.1rem' }}>•</span>{b}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                        {exp.tech.map(t => (
                          <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '0.2rem 0.5rem', background: 'rgba(79,195,247,0.06)', border: '1px solid rgba(79,195,247,0.2)', color: 'var(--accent-saber)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '0.8rem', letterSpacing: '0.08em' }}>
                    {isOpen ? '[ COLLAPSE ↑ ]' : '[ EXPAND ↓ ]'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
