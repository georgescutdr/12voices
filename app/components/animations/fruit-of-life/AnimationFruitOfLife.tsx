'use client';

import React, { useEffect, useRef } from 'react';

const AnimationFruitOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0;
    let H = 0;

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      W = bounds.width;
      H = bounds.height;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    /** Fruit of Life layout (13 circles) */
    function computePositions(cx: number, cy: number, R: number) {
      const positions: { x: number; y: number }[] = [];

      // Center
      positions.push({ x: cx, y: cy });

      // 6 inner nodes
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        positions.push({
          x: cx + R * Math.cos(angle),
          y: cy + R * Math.sin(angle),
        });
      }

      // 6 outer nodes (closer)
      const R2 = R * 1.90; // <— closer outer ring than before
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        positions.push({
          x: cx + R2 * Math.cos(angle),
          y: cy + R2 * Math.sin(angle),
        });
      }

      return positions;
    }

    /** Draw glowing filled circle */
    function drawGlowingCircle(x: number, y: number, r: number, pulse: number) {
      // Gold inner glow
      const gold = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * 2.3);
      gold.addColorStop(0, `rgba(255,215,70,${0.35 + pulse * 0.3})`);
      gold.addColorStop(1, 'rgba(255,215,70,0)');

      // Blue outer glow
      const blue = ctx.createRadialGradient(x, y, r * 0.4, x, y, r * 3.3);
      blue.addColorStop(0, `rgba(80,140,255,${0.25 + pulse * 0.25})`);
      blue.addColorStop(1, 'rgba(80,140,255,0)');

      // GOLD glow
      ctx.beginPath();
      ctx.fillStyle = gold;
      ctx.arc(x, y, r * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // BLUE glow
      ctx.beginPath();
      ctx.fillStyle = blue;
      ctx.arc(x, y, r * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Main white core
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.98)';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 40 + pulse * 25;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    /** Animation */
    function animate() {
      if (!isVisibleRef.current) {
        animationIdRef.current = null;
        return;
      }

      ctx.clearRect(0, 0, W, H);

      timeRef.current += 0.016;
      const t = timeRef.current;

      const cx = W / 2;
      const cy = H / 2;

      const baseRadius = Math.min(W, H) * 0.11; // ⬅ bigger circles
      const pulse = 0.5 + 0.5 * Math.sin(t * 2.0);

      // All circle positions (before rotation)
      const circles = computePositions(cx, cy, baseRadius * 1.25);

      // Center
      drawGlowingCircle(circles[0].x, circles[0].y, baseRadius * 0.75, pulse);

      // Inner ring rotates clockwise
      for (let i = 1; i <= 6; i++) {
        const angle = t * 0.5;
        const px = circles[i].x - cx;
        const py = circles[i].y - cy;

        const x = cx + px * Math.cos(angle) - py * Math.sin(angle);
        const y = cy + px * Math.sin(angle) + py * Math.cos(angle);

        drawGlowingCircle(x, y, baseRadius * 0.62, pulse);
      }

      // Outer ring rotates counterclockwise
      for (let i = 7; i <= 12; i++) {
        const angle = -t * 0.35;
        const px = circles[i].x - cx;
        const py = circles[i].y - cy;

        const x = cx + px * Math.cos(angle) - py * Math.sin(angle);
        const y = cy + px * Math.sin(angle) + py * Math.cos(angle);

        drawGlowingCircle(x, y, baseRadius * 0.55, pulse);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && animationIdRef.current === null) animate();
        else if (!entry.isIntersecting && animationIdRef.current !== null) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    animate();

    return () => {
      resizeObserver.disconnect();
      observer.disconnect();
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[550px] relative"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default AnimationFruitOfLife;
