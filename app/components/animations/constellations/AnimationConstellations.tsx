'use client';
import React, { useEffect, useRef } from "react";

const AnimationConstellations: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    const ctx = canvas.getContext("2d")!;
    
    const dpr = window.devicePixelRatio || 1;
    let W = 0;
    let H = 0;
    const center = { x: 0, y: 0 };
    let stars: any[] = [];

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      W = bounds.width;
      H = bounds.height;
      center.x = W / 2;
      center.y = H / 2;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      setupStars();
    };

    const setupStars = () => {
      stars = [];
      const numStars = 70;
      const baseRadius = Math.min(W, H) * 0.35;
      for (let i = 0; i < numStars; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = baseRadius * (0.4 + Math.random() * 0.6);
        stars.push({
          angle,
          r,
          twinkle: Math.random() * Math.PI * 2,
          brightness: 0.5 + Math.random() * 0.5,
        });
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let rotation = 0;

    const drawBackground = () => {
      const gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, Math.min(W, H) * 0.8);
      gradient.addColorStop(0, "rgba(5,5,25,1)");
      gradient.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);
    };

    const drawStars = () => {
      stars.forEach((s) => {
        const twinkle = (Math.sin(s.twinkle + Date.now() * 0.002) + 1) / 2;
        const x = center.x + Math.cos(s.angle + rotation) * s.r;
        const y = center.y + Math.sin(s.angle + rotation) * s.r;
        const size = 1.5 + twinkle * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + twinkle * s.brightness})`;
        ctx.fill();
      });
    };

    const drawConstellationLines = () => {
      ctx.lineWidth = 0.7;
      for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];
        const x1 = center.x + Math.cos(s1.angle + rotation) * s1.r;
        const y1 = center.y + Math.sin(s1.angle + rotation) * s1.r;
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const x2 = center.x + Math.cos(s2.angle + rotation) * s2.r;
          const y2 = center.y + Math.sin(s2.angle + rotation) * s2.r;
          const dx = x1 - x2;
          const dy = y1 - y2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = 1 - dist / 120;
            ctx.strokeStyle = `rgba(200,220,255,${alpha * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!isVisibleRef.current) {
        animationRef.current = null;
        return;
      }

      rotation += 0.0008;

      drawBackground();
      drawConstellationLines();
      drawStars();

      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current && animationRef.current === null) {
          animate();
        } else if (!isVisibleRef.current && animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    animate();

    return () => {
      resizeObserver.disconnect();
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] flex justify-center items-center bg-gradient-to-b from-black via-indigo-950 to-black rounded-xl overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-label="Constellation Animation"
      />
    </div>
  );
};

export default AnimationConstellations;
