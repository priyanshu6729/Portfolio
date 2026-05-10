'use client';
import { useState, useEffect } from 'react';
import { skills } from '@/content/skills';
import { useInView } from '@/hooks/useInView';

const DOMAIN_CONFIG = {
  languages: { label: 'Core Languages',    color: '#4fc3f7', id: '01' },
  frameworks: { label: 'Frameworks & Libs', color: '#a78bfa', id: '02' },
  cloud:      { label: 'Databases & Cloud', color: '#f5c518', id: '03' },
  ml:         { label: 'Architecture & AI', color: '#eeeef8', id: '04' },
  tools:      { label: 'Tools & DevOps',    color: '#7a7a9a', id: '05' },
};

const PROF       = { expert: 3, proficient: 2, familiar: 1 };
const PROF_LABEL = { expert: 'EXPERT', proficient: 'PROFICIENT', familiar: 'FAMILIAR' };

/* ── Three stacked signal bars ── */
function SignalBars({ level, color, active }) {
  const heights = [5, 9, 13];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: '2px', flexShrink: 0 }}>
      {heights.map((h, i) => (
        <span
          key={i}
          style={{
            display:    'inline-block',
            width:      '4px',
            height:     `${h}px`,
            background: i < level
              ? (active ? color : `${color}88`)
              : 'rgba(255,255,255,0.08)',
            transition: 'background 0.2s ease',
          }}
        />
      ))}
    </span>
  );
}

/* ── Single skill row with hover-expand ── */
function SkillRow({ skill, color, idx, visible }) {
  const [hovered, setHovered] = useState(false);
  const level = PROF[skill.proficiency] || 1;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:          '0.45rem 0.65rem',
        borderLeft:       `2px solid ${hovered ? color : 'transparent'}`,
        background:       hovered ? `${color}0d` : 'transparent',
        cursor:           'default',
        opacity:          visible ? 1 : 0,
        transform:        visible ? 'translateY(0)' : 'translateY(8px)',
        transition:       `opacity 0.35s ease ${idx * 45}ms, transform 0.35s ease ${idx * 45}ms, background 0.2s ease, border-color 0.2s ease`,
      }}
    >
      {/* Name + year */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <SignalBars level={level} color={color} active={hovered} />
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.7rem',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color:         hovered ? color : 'var(--color-primary)',
          transition:    'color 0.2s ease',
          flex:          1,
          lineHeight:    1.3,
        }}>
          {skill.name}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize:   '0.57rem',
          color:      hovered ? `${color}88` : 'rgba(255,255,255,0.16)',
          transition: 'color 0.2s ease',
          flexShrink: 0,
        }}>
          {skill.since}
        </span>
      </div>

      {/* Slide-down detail */}
      <div style={{
        display:    'flex',
        gap:        '0.75rem',
        maxHeight:  hovered ? '28px' : '0',
        overflow:   'hidden',
        marginTop:  hovered ? '0.35rem' : '0',
        paddingTop: hovered ? '0.35rem' : '0',
        borderTop:  `1px solid ${hovered ? `${color}20` : 'transparent'}`,
        transition: 'max-height 0.22s ease, margin-top 0.22s ease, padding-top 0.22s ease, border-color 0.22s ease',
      }}>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.57rem',
          color:         color,
          letterSpacing: '0.1em',
          opacity:       0.85,
        }}>
          {PROF_LABEL[skill.proficiency]}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize:   '0.57rem',
          color:      'var(--color-secondary)',
        }}>
          {skill.usedIn.length > 0
            ? `${skill.usedIn.length} project${skill.usedIn.length > 1 ? 's' : ''}`
            : 'standalone'}
        </span>
      </div>
    </div>
  );
}

/* ── Domain column ── */
function DomainColumn({ domain, cfg, allSkills, visible }) {
  const domainSkills = allSkills
    .filter(s => s.domain === domain)
    .sort((a, b) => PROF[b.proficiency] - PROF[a.proficiency]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      {/* Header */}
      <div style={{
        borderTop:    `1px solid ${cfg.color}`,
        paddingTop:   '0.9rem',
        paddingLeft:  '0.65rem',
        marginBottom: '0.85rem',
      }}>
        <p style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.58rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         cfg.color,
          opacity:       0.75,
          marginBottom:  '0.2rem',
          lineHeight:    1,
        }}>
          {cfg.label}
        </p>
        <p style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.51rem',
          color:         'rgba(255,255,255,0.2)',
          letterSpacing: '0.12em',
        }}>
          {cfg.id} · {domainSkills.length} modules
        </p>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {domainSkills.map((skill, i) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            color={cfg.color}
            idx={i}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Mobile accordion ── */
function MobileView({ allSkills }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.entries(DOMAIN_CONFIG).map(([domain, cfg]) => {
        const domainSkills = allSkills
          .filter(s => s.domain === domain)
          .sort((a, b) => PROF[b.proficiency] - PROF[a.proficiency]);
        const isOpen = open === domain;

        return (
          <div key={domain} style={{ borderTop: `1px solid ${cfg.color}30` }}>
            <button
              onClick={() => setOpen(isOpen ? null : domain)}
              style={{
                width:          '100%',
                background:     'transparent',
                border:         'none',
                padding:        '0.85rem 0',
                cursor:         'pointer',
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'center',
                gap:            '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{
                  width:      '2px',
                  height:     '14px',
                  background: isOpen ? cfg.color : `${cfg.color}30`,
                  display:    'inline-block',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         isOpen ? cfg.color : 'var(--color-primary)',
                  transition:    'color 0.2s',
                }}>
                  {cfg.label}
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize:   '0.6rem',
                color:      'rgba(255,255,255,0.22)',
                flexShrink: 0,
              }}>
                {isOpen ? '−' : '+'} {domainSkills.length}
              </span>
            </button>

            {isOpen && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {domainSkills.map(skill => (
                  <div key={skill.name} style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '0.6rem',
                    padding:    '0.42rem 0.5rem',
                  }}>
                    <SignalBars level={PROF[skill.proficiency]} color={cfg.color} active />
                    <span style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      color:         'var(--color-primary)',
                      flex:          1,
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '0.55rem',
                      color:      cfg.color,
                      opacity:    0.65,
                      flexShrink: 0,
                    }}>
                      {PROF_LABEL[skill.proficiency].slice(0, 3)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Sweeping scanline ── */
function Scanline() {
  return (
    <>
      <style>{`
        @keyframes scanline-sweep {
          0%   { top: -3px; opacity: 0; }
          4%   { opacity: 1; }
          96%  { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
      <div style={{
        position:      'absolute',
        inset:         0,
        pointerEvents: 'none',
        overflow:      'hidden',
        zIndex:        0,
      }}>
        <div style={{
          position:   'absolute',
          left:       0,
          right:      0,
          height:     '2px',
          background: 'linear-gradient(90deg, transparent, rgba(79,195,247,0.2) 20%, rgba(79,195,247,0.35) 50%, rgba(79,195,247,0.2) 80%, transparent)',
          animation:  'scanline-sweep 7s ease-in-out infinite',
          animationDelay: '1.5s',
        }} />
      </div>
    </>
  );
}

/* ── Proficiency legend ── */
function Legend() {
  return (
    <div style={{
      display:     'flex',
      alignItems:  'center',
      gap:         '1.5rem',
      flexWrap:    'wrap',
      marginTop:   '2rem',
      paddingTop:  '1.25rem',
      borderTop:   '1px solid rgba(255,255,255,0.06)',
    }}>
      <span style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '0.57rem',
        color:         'rgba(255,255,255,0.2)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      }}>
        Signal ▸
      </span>
      {[['Expert', 3], ['Proficient', 2], ['Familiar', 1]].map(([label, level]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <SignalBars level={level} color="rgba(255,255,255,0.3)" active />
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.57rem',
            color:         'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════
   Main export
══════════════════════════════════════ */
export default function Skills() {
  const [sectionRef, inView] = useInView();
  const [visible, setVisible]  = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <section id="skills" ref={sectionRef} style={{ background: 'var(--color-void)' }}>
      <div style={{ height: '1px', background: 'var(--gradient-line)', opacity: 0.3 }} />

      <div className="section-container section-padding">

        {/* Section heading */}
        <p className={`section-eyebrow reveal ${inView ? 'in-view' : ''}`}>
          // 003 ── WEAPONS OF CHOICE
        </p>
        <h2
          className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1`}
          style={{
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(2rem, 4vw, 3.5rem)',
            fontWeight:   300,
            color:        'var(--color-bright)',
            marginBottom: '0.5rem',
            lineHeight:   1.1,
          }}
        >
          Technical Arsenal.
        </h2>
        <p
          className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2`}
          style={{
            color:         'var(--color-secondary)',
            marginBottom:  '3rem',
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.75rem',
            letterSpacing: '0.08em',
          }}
        >
          {skills.length} skills · hover rows to inspect
        </p>

        {/* Intelligence board */}
        <div
          className={`reveal ${inView ? 'in-view' : ''} reveal-delay-3`}
          style={{ position: 'relative' }}
        >
          {inView && <Scanline />}

          {/* Desktop: 5-col grid */}
          <div
            className="skills-desktop"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap:                 '0 1.25rem',
              position:            'relative',
              zIndex:              1,
            }}
          >
            {Object.entries(DOMAIN_CONFIG).map(([domain, cfg]) => (
              <DomainColumn
                key={domain}
                domain={domain}
                cfg={cfg}
                allSkills={skills}
                visible={visible}
              />
            ))}
          </div>

          {/* Mobile: accordion */}
          <div className="skills-mobile" style={{ position: 'relative', zIndex: 1 }}>
            <MobileView allSkills={skills} />
          </div>
        </div>

        <Legend />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-desktop { display: none !important; }
          .skills-mobile  { display: block !important; }
        }
        @media (min-width: 901px) {
          .skills-desktop { display: grid !important; }
          .skills-mobile  { display: none !important; }
        }
      `}</style>
    </section>
  );
}