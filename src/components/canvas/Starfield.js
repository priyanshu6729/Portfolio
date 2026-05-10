'use client';
import { useEffect } from 'react';

export default function Starfield() {
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = document.getElementById('starfield-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouseX = 0, mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 60 : 180;

    const stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.08 + 0.01,
      color: Math.random() < 0.8 ? `rgba(200,200,220,${Math.random() * 0.6 + 0.2})`
        : Math.random() < 0.7 ? `rgba(79,195,247,${Math.random() * 0.5 + 0.2})`
        : `rgba(245,197,24,${Math.random() * 0.4 + 0.15})`,
      ox: 0, oy: 0,
    }));

    const onMouse = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    if (!isMobile) window.addEventListener('mousemove', onMouse);

    if (prefersReduced) {
      // Static render — no animation loop
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
      });
      return () => {
        window.removeEventListener('resize', resize);
      };
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const px = isMobile ? 0 : (mouseX - canvas.width / 2) * 0.02;
        const py = isMobile ? 0 : (mouseY - canvas.height / 2) * 0.02;
        s.ox += (px - s.ox) * 0.05;
        s.oy += (py - s.oy) * 0.05;
        const x = s.x + s.ox;
        const y = (s.y + s.oy + s.speed) % canvas.height;
        s.y = y - s.oy;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas id="starfield-canvas" aria-hidden="true" style={{
      position: 'fixed', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0, opacity: 0.7,
    }} />
  );
}
