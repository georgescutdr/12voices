'use client';

import React, { useEffect, useRef } from 'react';

const AnimationTrinity: React.FC = () => {
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

    function drawOutwardWaves(cx: number, cy: number, maxRadius: number) {
      const waveCount = 6;
      for (let i = 0; i < waveCount; i++) {
        const offset = ((timeRef.current * 100 + i * 80) % maxRadius);
        const alpha = 1 - offset / maxRadius;

        const grad = ctx.createRadialGradient(cx, cy, offset, cx, cy, offset + 30);
        grad.addColorStop(0, `rgba(255,255,255,${0.2 * alpha})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(cx, cy, offset + 30, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawInwardLight(cx: number, cy: number, outerRadius: number) {
      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        const offset = (outerRadius - ((timeRef.current * 80 + i * 90) % outerRadius));
        const alpha = 1 - offset / outerRadius;

        const grad = ctx.createRadialGradient(cx, cy, offset, cx, cy, offset + 40);
        grad.addColorStop(0, `rgba(255, 215, 0, ${0.15 * alpha})`);
        grad.addColorStop(1, 'rgba(255, 215, 0, 0)');

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(cx, cy, offset + 40, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawWhiteCore(cx: number, cy: number, radius: number, pulse: number) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${0.6 + 0.4 * pulse})`;
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 40 + 20 * pulse;
      ctx.arc(cx, cy, radius * (0.6 + 0.4 * pulse), 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function drawGoldRing(cx: number, cy: number, radius: number, ringWidth: number, pulse: number) {
      const segments = 300;
      const waveAmplitude = 5 + 3 * pulse;
      const waveFrequency = 6;

      ctx.save();
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const wave = Math.sin(angle * waveFrequency + timeRef.current * 4) * waveAmplitude;
        const r = radius + wave;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      ctx.strokeStyle = `rgba(255, 223, 100, 1.0)`;
      ctx.lineWidth = ringWidth * 0.5;
      ctx.shadowColor = `rgba(255, 235, 120, 0.9)`;
      ctx.shadowBlur = 90 + 40 * pulse;
      ctx.stroke();
      ctx.restore();

      const aura = ctx.createRadialGradient(cx, cy, radius - ringWidth / 2, cx, cy, radius + ringWidth * 2);
      aura.addColorStop(0, `rgba(255, 240, 150, ${0.25 * pulse})`);
      aura.addColorStop(1, 'rgba(255, 240, 150, 0)');

      ctx.beginPath();
      ctx.fillStyle = aura;
      ctx.arc(cx, cy, radius + ringWidth * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      if (!isVisibleRef.current) {
        animationIdRef.current = null;
        return;
      }

      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const cy = H / 2;
      timeRef.current += 0.016;

      const pulse = 0.5 + 0.5 * Math.sin(timeRef.current * 2);
      const coreRadius = Math.min(W, H) * 0.04;
      const outerRadius = Math.min(W, H) * 0.25;

      drawOutwardWaves(cx, cy, outerRadius);
      drawInwardLight(cx, cy, outerRadius);
      drawWhiteCore(cx, cy, coreRadius, pulse);
      drawGoldRing(cx, cy, outerRadius, 12, pulse);

      animationIdRef.current = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current && animationIdRef.current === null) {
          animate();
        } else if (!isVisibleRef.current && animationIdRef.current !== null) {
          if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
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
      className="w-full h-screen bg-black flex justify-center items-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-label="Bidirectional Glowing Circle Animation"
      />
    </div>
  );
};

export default AnimationTrinity;
