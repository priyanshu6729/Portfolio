'use client';
import { useState, useEffect } from 'react';
import { projects } from '@/content/projects/index';
import { useInView } from '@/hooks/useInView';

const FILTERS = ['ALL', 'PERSONAL', 'GROUP', 'RESEARCH'];
const TYPE_COLORS = { personal: '#4fc3f7', group: '#2dd4bf', research: '#a78bfa', 'open-source': '#f5c518', hackathon: '#e63946' };

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,8,0.92)', backdropFilter: 'blur(8px)' }} />
      <div style={{
        position: 'relative', background: 'var(--color-surface)', border: '1px solid var(--color-border)',
        maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto',
        padding: '2.5rem', animation: 'fade-up 0.3s var(--ease-drift)',
      }}>
        <button onClick={onClose} aria-label="Close modal" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--color-secondary)', cursor: 'pointer', fontSize: '1rem', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-bright)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-secondary)'}
        >✕</button>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: TYPE_COLORS[project.type] || '#4fc3f7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>[ {project.type.toUpperCase()} ] {project.year}</p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--color-bright)', marginBottom: '0.5rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--color-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>{project.tagline}</p>

        {project.problem && (
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>// THE PROBLEM</p>
            <p style={{ color: 'var(--color-primary)', lineHeight: 1.7, fontSize: '0.9rem' }}>{project.problem}</p>
          </div>
        )}
        {project.approach && (
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>// APPROACH</p>
            <p style={{ color: 'var(--color-primary)', lineHeight: 1.7, fontSize: '0.9rem' }}>{project.approach}</p>
          </div>
        )}
        {project.outcome && (
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>// OUTCOME</p>
            <p style={{ color: 'var(--color-primary)', lineHeight: 1.7, fontSize: '0.9rem' }}>{project.outcome}</p>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.25rem 0.6rem', background: 'rgba(79,195,247,0.08)', border: '1px solid rgba(79,195,247,0.25)', color: 'var(--accent-saber)', letterSpacing: '0.06em' }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent-saber)', border: '1px solid var(--accent-saber)', padding: '0.5rem 1rem', transition: 'all 0.2s' }}>LIVE DEMO ↗</a>}
          {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--color-secondary)', border: '1px solid var(--color-border)', padding: '0.5rem 1rem', transition: 'all 0.2s' }}>GITHUB ↗</a>}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [sectionRef, inView] = useInView();
  const [filter, setFilter] = useState('ALL');
  const [selected, setSelected] = useState(null);

  const featured = projects.find(p => p.featured);
  const filtered = projects.filter(p => p !== featured && (filter === 'ALL' || p.type.toUpperCase() === filter));

  return (
    <section id="projects" ref={sectionRef} style={{ background: 'var(--color-deep)' }}>
      <div style={{ height: '1px', background: 'var(--gradient-line)', opacity: 0.3 }} />
      <div className="section-container section-padding">
        <p className={`section-eyebrow reveal ${inView ? 'in-view' : ''}`}>// 004 ── THE DOSSIER</p>
        <h2 className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: 'var(--color-bright)', marginBottom: '3rem', lineHeight: 1.1 }}>
          PROJECTS.
        </h2>

        {/* Featured project spotlight */}
        {featured && (
          <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`} style={{ marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--accent-crawl)', textTransform: 'uppercase', marginBottom: '1rem' }}>◈ FEATURED PROJECT</p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(79,195,247,0.06), rgba(167,139,250,0.03))',
              border: '1px solid var(--color-border)', padding: '3rem', position: 'relative',
              cursor: 'pointer', transition: 'border-color 0.3s var(--ease-snap), box-shadow 0.3s var(--ease-snap)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-saber)'; e.currentTarget.style.boxShadow = '0 8px 48px rgba(79,195,247,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}
              onClick={() => setSelected(featured)}
            >
              <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: TYPE_COLORS[featured.type], letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>[ {featured.type.toUpperCase()} ] · {featured.year}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, color: 'var(--color-bright)', marginBottom: '1rem', lineHeight: 1.1 }}>{featured.title}</h3>
                  <p style={{ color: 'var(--color-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '550px' }}>{featured.tagline}</p>
                  {featured.impact && (
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-crawl)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                      IMPACT: {featured.impact}
                    </p>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                    {featured.tech.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '0.25rem 0.6rem', background: 'rgba(79,195,247,0.08)', border: '1px solid rgba(79,195,247,0.25)', color: 'var(--accent-saber)' }}>{t}</span>
                    ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-secondary)', letterSpacing: '0.1em' }}>[ CLICK TO EXPAND CASE STUDY ]</span>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ width: '120px', height: '120px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(79,195,247,0.04)' }}>
                    <span style={{ fontSize: '2.5rem', opacity: 0.4 }}>⬡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter bar */}
        <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)', letterSpacing: '0.1em', marginRight: '0.5rem' }}>FILTER:</span>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.35rem 0.8rem', background: 'none', cursor: 'pointer',
              border: filter === f ? '1px solid var(--accent-crawl)' : '1px solid var(--color-border)',
              color: filter === f ? 'var(--accent-crawl)' : 'var(--color-secondary)',
              transition: 'all 0.2s var(--ease-snap)',
            }}>{f}</button>
          ))}
        </div>

        {/* Project grid */}
        {filtered.length === 0 ? (
          <div style={{ padding: '4rem 2rem', border: '1px dashed var(--color-border)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>
              NO PROJECTS FOUND FOR "{filter}" FILTER
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)', marginTop: '0.5rem', opacity: 0.6 }}>
              Try selecting a different category
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((project, i) => (
              <div key={project.slug}
                className={`data-card reveal ${inView ? 'in-view' : ''}`}
                style={{ cursor: 'pointer', transitionDelay: `${i * 0.08}s` }}
                onClick={() => setSelected(project)}
              >
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: TYPE_COLORS[project.type] || '#4fc3f7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>◈ {project.type.toUpperCase()} · {project.year}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--color-bright)', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>{project.tagline}</p>
                {project.impact && <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)', marginBottom: '1rem' }}>IMPACT: {project.impact}</p>}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '0.2rem 0.5rem', background: 'rgba(79,195,247,0.06)', border: '1px solid rgba(79,195,247,0.2)', color: 'var(--accent-saber)' }}>{t}</span>
                  ))}
                  {project.tech.length > 4 && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', alignSelf: 'center' }}>+{project.tech.length - 4}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
