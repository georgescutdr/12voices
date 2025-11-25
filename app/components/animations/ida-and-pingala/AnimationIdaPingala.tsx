'use client';

import { useEffect, useRef } from 'react';

export default function AnimationIdaPingala() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const dpr = window.devicePixelRatio || 1;

    let angle = 0;

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

    const drawCentralAxis = () => {
      const midX = W / 2;
      const gradient = ctx.createLinearGradient(midX, 0, midX, H);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.8)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = 15;

      ctx.beginPath();
      ctx.moveTo(midX, 0);
      ctx.lineTo(midX, H);
      ctx.stroke();

      // Glowing sphere at top
      const sphereRadius = 14;
      const sphereX = midX;
      const sphereY = 40;

      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowBlur = 25;

      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.arc(sphereX, sphereY, sphereRadius + 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.fillStyle = '#ffffff';
      ctx.arc(sphereX, sphereY, sphereRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawDNA = () => {
      if (!isVisibleRef.current) {
        animationRef.current = null;
        return;
      }

      ctx.clearRect(0, 0, W, H);
      drawCentralAxis();

      const midX = W / 2;
      const amplitude = 60;
      const waveGap = 12;
      const rungCount = 30;

      for (let i = 0; i < rungCount; i++) {
        const y = H / 2 + (i - rungCount / 2) * waveGap;
        const depth = Math.cos(angle + i * 0.3);
        const size = 1 + depth * 0.5;

        const x1 = midX + amplitude * Math.sin(angle + i * 0.3);
        const x2 = midX - amplitude * Math.sin(angle + i * 0.3);

        if (depth < 0) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.fillStyle = depth > 0 ? '#4fc3f7' : '#0288d1';
        ctx.arc(x1, y, 4 * size, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = depth > 0 ? '#ff8a65' : '#e65100';
        ctx.arc(x2, y, 4 * size, 0, Math.PI * 2);
        ctx.fill();

        if (depth > 0) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();
        }
      }

      angle += 0.03;
      animationRef.current = requestAnimationFrame(drawDNA);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && animationRef.current === null) {
          drawDNA();
        } else if (!entry.isIntersecting && animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    observer.observe(container);
    drawDNA();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center bg-black"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
