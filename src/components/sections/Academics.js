'use client';
import { academics } from '@/content/academics';
import { useInView } from '@/hooks/useInView';

const DOMAIN_COLORS = {
  core: '#4fc3f7', systems: '#a78bfa', web: '#f5c518', ml: '#eeeef8', elective: '#7a7a9a',
};

export default function Academics() {
  const [sectionRef, inView] = useInView();
  const gpaPercent = (academics.cgpa / academics.cgpaMax) * 100;

  return (
    <section id="academics" ref={sectionRef} style={{ background: 'var(--color-deep)' }}>
      <div style={{ height: '1px', background: 'var(--gradient-line)', opacity: 0.3 }} />
      <div className="section-container section-padding">
        <p className={`section-eyebrow reveal ${inView ? 'in-view' : ''}`}>// 005 ── MISSION BRIEFING ARCHIVE</p>
        <h2 className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: 'var(--color-bright)', marginBottom: '3rem', lineHeight: 1.1 }}>
          Academic Record.
        </h2>
        <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
          <div className="data-card">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>CGPA</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--accent-saber)', lineHeight: 1, marginBottom: '0.8rem' }}>{academics.cgpa}</p>
            <div style={{ height: '3px', background: 'var(--color-border)', borderRadius: '2px', marginBottom: '0.5rem', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-saber), var(--accent-force))', width: inView ? `${gpaPercent}%` : '0%', transition: 'width 1.2s var(--ease-drift) 0.5s', borderRadius: '2px' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)' }}>{academics.cgpaPercentile}</p>
          </div>
          <div className="data-card">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>DEGREE</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-bright)', marginBottom: '0.4rem' }}>{academics.degree}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)' }}>{academics.institution}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '0.4rem' }}>{academics.start} — {academics.end}</p>
          </div>
          <div className="data-card">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>COURSEWORK</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--accent-force)', lineHeight: 1, marginBottom: '0.5rem' }}>
              {academics.courses.filter(c => c.status === 'completed').length}+
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)' }}>Completed courses</p>
          </div>
          <div className="data-card">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>STATUS</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 2.5s ease-in-out infinite' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-bright)' }}>Active</p>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)' }}>In Progress · {academics.status}</p>
          </div>
        </div>
        <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-3`} style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>// RELEVANT COURSEWORK</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {academics.courses.map(course => {
              const col = DOMAIN_COLORS[course.domain] || '#7a7a9a';
              const opacity = course.status === 'completed' ? 1 : course.status === 'in-progress' ? 0.7 : 0.4;
              return (
                <span key={course.name} title={`Status: ${course.status}${course.grade ? ` · Grade: ${course.grade}` : ''}`} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '0.35rem 0.8rem',
                  background: `${col}${Math.round(opacity * 0.12 * 255).toString(16).padStart(2,'0')}`,
                  border: `1px solid ${col}${Math.round(opacity * 0.3 * 255).toString(16).padStart(2,'0')}`,
                  color: col, opacity, letterSpacing: '0.06em', cursor: 'default', transition: 'opacity 0.2s',
                }}>
                  {course.status === 'in-progress' ? '▸ ' : course.status === 'upcoming' ? '◌ ' : '● '}{course.name}
                </span>
              );
            })}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '1rem', letterSpacing: '0.08em' }}>
            ● Completed &nbsp; ▸ In Progress &nbsp; ◌ Upcoming
          </p>
        </div>
        {academics.certifications.length > 0 && (
          <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-4`}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>// CERTIFICATIONS</p>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {academics.certifications.map(cert => (
                <div key={cert.name} className="data-card" style={{ minWidth: '220px', flexShrink: 0 }}>
                  <p style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{cert.icon}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-bright)', fontWeight: 500, marginBottom: '0.3rem' }}>{cert.name}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-crawl)' }}>{cert.issuer}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '0.3rem' }}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
