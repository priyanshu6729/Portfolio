'use client';
import { useState, useEffect } from 'react';
import { meta } from '@/content/meta';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const [sectionRef, inView] = useInView();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://formspree.io/f/placeholder', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
    } catch (_) {}
    setSending(false);
    setSent(true);
  };

  const socials = [
    { label: 'GitHub', href: meta.links.github, icon: '⬡' },
    { label: 'LinkedIn', href: meta.links.linkedin, icon: '◈' },
  ];

  return (
    <section id="contact" ref={sectionRef} style={{ background: 'var(--color-deep)' }}>
      <div style={{ height: '1px', background: 'var(--gradient-line)', opacity: 0.3 }} />
      <div className="section-container section-padding">
        <p className={`section-eyebrow reveal ${inView ? 'in-view' : ''}`}>// 007 ── OPEN CHANNEL</p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <h2 className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1`} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 300, color: 'var(--color-bright)', lineHeight: 0.95, marginBottom: '2rem' }}>
              Ready to<br />Establish<br />Contact?
            </h2>
            <p className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`} style={{ color: 'var(--color-secondary)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '400px' }}>
              Whether it's a role, a collab, or just a conversation about systems and code — I'm all ears. Hit me up.
            </p>
            <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-3`} style={{ marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>EMAIL CHANNEL</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-saber)' }}>{meta.email}</span>
                <button onClick={copyEmail} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
                  padding: '0.3rem 0.8rem', background: 'none', cursor: 'pointer',
                  border: '1px solid var(--color-border)', color: copied ? 'var(--accent-crawl)' : 'var(--color-muted)',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'COPIED ✓' : 'COPY'}
                </button>
              </div>
            </div>
            <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-4`} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2.5rem' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 2.5s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                SIGNAL ACTIVE — {meta.statusLabel}
              </span>
            </div>
            <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ display: 'flex', gap: '1rem' }}>
              {socials.filter(s => s.href).map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--color-secondary)',
                  border: '1px solid var(--color-border)', padding: '0.5rem 1rem',
                  transition: 'all 0.2s var(--ease-snap)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-saber)'; e.currentTarget.style.color = 'var(--accent-saber)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-secondary)'; }}
                >
                  {social.icon} {social.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`}>
            {sent ? (
              <div style={{ padding: '3rem', border: '1px solid var(--accent-saber)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--accent-saber)', marginBottom: '1rem' }}>Transmission Sent.</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-secondary)' }}>I'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { id: 'name', label: 'NAME', type: 'text', placeholder: 'your name' },
                  { id: 'email', label: 'EMAIL', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={`contact-${field.id}`} style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{field.label}</label>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.2s' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-saber)', padding: '0 0.7rem' }}>&gt;_</span>
                      <input
                        id={`contact-${field.id}`}
                        type={field.type} required
                        value={formState[field.id]}
                        onChange={e => setFormState(prev => ({ ...prev, [field.id]: e.target.value }))}
                        placeholder={field.placeholder}
                        style={{ flex: 1, padding: '0.75rem 0.5rem', background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', outline: 'none' }}
                        onFocus={e => e.currentTarget.parentElement.style.borderColor = 'var(--accent-saber)'}
                        onBlur={e => e.currentTarget.parentElement.style.borderColor = 'var(--color-border)'}
                      />
                    </div>
                  </div>
                ))}
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>MESSAGE</label>
                  <div style={{ border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.2s', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '0.75rem', left: '0.7rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-saber)', pointerEvents: 'none' }}>&gt;_</span>
                    <textarea
                      id="contact-message"
                      required rows={4}
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="your message..."
                      style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', outline: 'none', resize: 'vertical' }}
                      onFocus={e => e.currentTarget.parentElement.style.borderColor = 'var(--accent-saber)'}
                      onBlur={e => e.currentTarget.parentElement.style.borderColor = 'var(--color-border)'}
                    />
                  </div>
                </div>
                <button type="submit" disabled={sending} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '0.9rem', cursor: 'pointer',
                  border: '1px solid var(--accent-saber)', background: 'none', color: 'var(--accent-saber)',
                  position: 'relative', overflow: 'hidden', transition: 'color 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-void)'; e.currentTarget.querySelector('.fill').style.transform = 'scaleX(1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--accent-saber)'; e.currentTarget.querySelector('.fill').style.transform = 'scaleX(0)'; }}
                >
                  <span className="fill" style={{ position: 'absolute', inset: 0, background: 'var(--accent-saber)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.25s var(--ease-snap)' }} />
                  <span style={{ position: 'relative' }}>{sending ? 'TRANSMITTING...' : '[ SEND TRANSMISSION ]'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
