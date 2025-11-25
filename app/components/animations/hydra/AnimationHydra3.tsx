'use client';

import React, { useEffect, useRef } from 'react';

const AnimationHydra3: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let W = 0;
    let H = 0;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      W = rect.width;
      H = rect.height;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    type Head = {
      baseAngle: number;
      phase: number;
      speed: number;
      waveAmp: number;
      waveFreq: number;
      chaosFactor: number;
      behavior: 'shake' | 'circle' | 'spiral' | 'snap';
      snapBackTimer: number;
      snapOffset: { x: number; y: number };
    };

    const center = { x: 0, y: 0 };
    const bodyRadius = 40;
    const headRadius = 18;
    const numHeads = 16;
    const neckLength = 200;
    const segments = 35;

    const behaviors = ['shake', 'circle', 'spiral', 'snap'] as const;

    const heads: Head[] = Array.from({ length: numHeads }, (_, i) => ({
      baseAngle: (Math.PI * 2 / numHeads) * i,
      phase: Math.random() * Math.PI * 2,
      speed: 1 + Math.random() * 3,
      waveAmp: 10 + Math.random() * 50,
      waveFreq: 2 + Math.random() * 4,
      chaosFactor: 0.5 + Math.random() * 2,
      behavior: behaviors[Math.floor(Math.random() * behaviors.length)],
      snapBackTimer: 0,
      snapOffset: { x: 0, y: 0 },
    }));

    const drawNeck = (h: Head, time: number) => {
      const pts: { x: number; y: number }[] = [];
      const angle = h.baseAngle + Math.sin(time * 0.6 + h.phase) * 0.4 * h.chaosFactor;
      const dx = Math.cos(angle), dy = Math.sin(angle);

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const len = t * neckLength;
        const flicker = (Math.random() - 0.5) * h.chaosFactor * 6;
        const wave = Math.sin(time * h.speed + t * h.waveFreq * Math.PI * 2 + h.phase) * (h.waveAmp + flicker);
        const px = center.x + dx * len + -dy * wave + (Math.random() - 0.5) * 2;
        const py = center.y + dy * len + dx * wave + (Math.random() - 0.5) * 2;
        pts.push({ x: px, y: py });
      }

      ctx.beginPath();
      const hue = (time * 40 + h.phase * 50) % 360;
      ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 0.5)`;
      ctx.lineWidth = 3 + Math.sin(time * 5 + h.phase) * 2;
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.stroke();

      return pts[pts.length - 1];
    };

    const draw = () => {
      if (!isVisibleRef.current) {
        animationRef.current = null;
        return;
      }

      const time = Date.now() / 1000;
      center.x = W / 2;
      center.y = H / 2;

      ctx.clearRect(0, 0, W, H);

      // Body
      ctx.beginPath();
      ctx.fillStyle = '#330033';
      ctx.arc(center.x, center.y, bodyRadius, 0, Math.PI * 2);
      ctx.fill();

      heads.forEach(h => {
        h.phase += 0.02 * h.chaosFactor * (0.5 + Math.sin(time * 0.3 + h.phase));
        const headPos = drawNeck(h, time);

        let jitterX = 0, jitterY = 0;

        switch (h.behavior) {
          case 'shake':
            jitterX = (Math.random() - 0.5) * 20;
            jitterY = (Math.random() - 0.5) * 20;
            break;
          case 'circle':
            const rC = 10 + Math.sin(time * h.speed + h.phase) * 5;
            jitterX = Math.cos(time * 2 + h.phase) * rC;
            jitterY = Math.sin(time * 2 + h.phase) * rC;
            break;
          case 'spiral':
            const rS = (Math.sin(time * h.speed + h.phase) + 1) * 10;
            jitterX = Math.cos(time * 5 + h.phase) * rS;
            jitterY = Math.sin(time * 5 + h.phase) * rS;
            break;
          case 'snap':
            if (Math.random() < 0.01 && h.snapBackTimer <= 0) {
              h.snapOffset = {
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
              };
              h.snapBackTimer = 20 + Math.random() * 30;
            }
            if (h.snapBackTimer > 0) {
              jitterX = h.snapOffset.x;
              jitterY = h.snapOffset.y;
              h.snapBackTimer--;
            } else {
              h.snapOffset = { x: 0, y: 0 };
            }
            break;
        }

        ctx.beginPath();
        ctx.fillStyle = '#ff0077';
        ctx.shadowColor = '#ff0077';
        ctx.shadowBlur = 18;
        ctx.arc(headPos.x + jitterX, headPos.y + jitterY, headRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && animationRef.current === null) {
          draw();
        } else if (!entry.isIntersecting && animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    draw();

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        position: 'relative',
        backgroundColor: 'black',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default AnimationHydra3;
