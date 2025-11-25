'use client';

import React, { useEffect, useRef } from 'react';

const AnimationHydra2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const headsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const center = { x: () => width / 2, y: () => height / 2 };
    const bodyRadius = 40;
    const headRadius = 18;
    const numHeads = 12;
    const neckLength = 180;
    const segments = 30;

    if (headsRef.current.length === 0) {
      headsRef.current = Array.from({ length: numHeads }, (_, i) => {
        const angle = (Math.PI * 2 / numHeads) * i;
        return {
          baseAngle: angle,
          phase: Math.random() * Math.PI * 2,
          speed: 2 + Math.random() * 2,
          waveAmp: 15 + Math.random() * 35,
          waveFreq: 3 + Math.random() * 3,
          chaosFactor: 0.5 + Math.random() * 1.5,
        };
      });
    }

    const drawNeck = (head: any, time: number) => {
      const points = [];
      const angle = head.baseAngle + Math.sin(time * 0.5 + head.phase) * 0.2;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const len = t * neckLength;
        const flicker = (Math.random() - 0.5) * head.chaosFactor * 4;
        const wave = Math.sin(time * head.speed + t * head.waveFreq * Math.PI * 2 + head.phase) *
          (head.waveAmp + flicker);
        const px = center.x() + dx * len + -dy * wave;
        const py = center.y() + dy * len + dx * wave;
        points.push({ x: px, y: py });
      }

      ctx.beginPath();
      ctx.strokeStyle = `rgba(180, 0, 255, 0.6)`;
      ctx.lineWidth = 3 + Math.sin(time * 10) * 1.5;
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      return points[points.length - 1];
    };

    const draw = () => {
      if (!isVisibleRef.current) {
        animationRef.current = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const time = Date.now() / 1000;

      // Draw body
      ctx.beginPath();
      ctx.fillStyle = '#220033';
      ctx.arc(center.x(), center.y(), bodyRadius, 0, Math.PI * 2);
      ctx.fill();

      headsRef.current.forEach((h) => {
        h.phase += 0.01 * h.chaosFactor;
        const headPos = drawNeck(h, time);

        const jitterX = (Math.random() - 0.5) * 12;
        const jitterY = (Math.random() - 0.5) * 12;

        ctx.beginPath();
        ctx.fillStyle = '#ff00cc';
        ctx.shadowColor = '#ff00cc';
        ctx.shadowBlur = 15;
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

export default AnimationHydra2;
