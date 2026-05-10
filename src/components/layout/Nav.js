'use client';
import { useEffect, useState } from 'react';
import { meta } from '@/content/meta';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Works', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: meta.links.resume, external: true },
  ];

  return (
    <>
      <nav role="navigation" aria-label="Main navigation" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '1rem var(--grid-margin)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backdropFilter: 'blur(20px)',
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(79,195,247,0.15)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        {/* Sigil */}
        <a href="#" aria-label="Back to top" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" stroke="#4fc3f7" strokeWidth="1.5" fill="none"/>
            <polygon points="16,8 24,13 24,19 16,24 8,19 8,13" stroke="#f5c518" strokeWidth="1" fill="none" opacity="0.6"/>
            <circle cx="16" cy="16" r="2.5" fill="#4fc3f7"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--color-secondary)', textTransform: 'uppercase' }}>
            {meta.name.split(' ').map(w => w[0]).join('')}
          </span>
        </a>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--color-secondary)',
                transition: 'color 0.2s, letter-spacing 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-bright)'; e.currentTarget.style.letterSpacing = '0.18em'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-secondary)'; e.currentTarget.style.letterSpacing = '0.12em'; }}
            >
              {link.label}{link.external && ' ↗'}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: '1px solid var(--color-border)', padding: '0.4rem 0.6rem', cursor: 'pointer', display: 'none' }}
          className="mobile-menu-btn" aria-label="Toggle menu">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-secondary)' }}>
            {mobileOpen ? '✕' : '☰'}
          </span>
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1001,
          background: 'var(--color-void)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem',
        }}>
          <button onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: 'var(--grid-margin)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-secondary)', fontSize: '1.2rem' }}
            aria-label="Close menu">
            ✕
          </button>
          {navLinks.map((link, i) => (
            <a key={link.label} href={link.href}
              onClick={() => setMobileOpen(false)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-orbitron)', fontSize: '1.8rem', letterSpacing: '0.1em',
                color: 'var(--color-bright)', textTransform: 'uppercase',
                animation: `fade-up 0.4s var(--ease-drift) ${i * 0.08}s both`,
              }}>
              {link.label}
            </a>
          ))}
          <span style={{ position: 'absolute', bottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>
            {meta.coordinates}
          </span>
        </div>
      )}
    </>
  );
}
