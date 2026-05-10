'use client';
import { meta } from '@/content/meta';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-void)', borderTop: '1px solid var(--color-border)',
      padding: '2.5rem var(--grid-margin)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
    }}>
      <div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          TRANSMISSION ENDED · {meta.coordinates}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', marginTop: '0.3rem', opacity: 0.5 }}>
          © {new Date().getFullYear()} {meta.name} · Built with Next.js · Deployed on Vercel
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'GitHub', href: meta.links.github },
          { label: 'LinkedIn', href: meta.links.linkedin },
          { label: 'Resume', href: meta.links.resume },
        ].filter(l => l.href).map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--color-muted)', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
