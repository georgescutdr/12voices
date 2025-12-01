'use client';

import React, { useEffect, useRef } from 'react';

const AnimationHydra1: React.FC = () => {
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

    const getScale = () => {
      const w = window.innerWidth;
      if (w < 768) return 0.6; // small screens
      if (w < 1024) return 0.8; // medium
      return 1; // large
    };

    let bodyRadius = 40;
    let headRadius = 15;
    let neckLength = 160;

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

      const scale = getScale();
      bodyRadius = 40 * scale;
      headRadius = 15 * scale;
      neckLength = 160 * scale;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const center = { x: () => width / 2, y: () => height / 2 };
    const numHeads = 12;
    const segments = 20;

    if (headsRef.current.length === 0) {
      headsRef.current = Array.from({ length: numHeads }, (_, i) => {
        const angle = (Math.PI * 2 / numHeads) * i;
        return {
          baseAngle: angle,
          phase: Math.random() * Math.PI * 2,
          speed: 1 + Math.random(),
          waveAmp: 10 + Math.random() * 10,
          waveFreq: 2 + Math.random() * 2,
        };
      });
    }

    const drawNeck = (head: any, time: number) => {
      const points = [];
      const angle = head.baseAngle;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const len = t * neckLength;
        const wave = Math.sin(time * head.speed + t * head.waveFreq * Math.PI * 2 + head.phase) * head.waveAmp;
        const px = center.x() + dx * len + -dy * wave;
        const py = center.y() + dy * len + dx * wave;
        points.push({ x: px, y: py });
      }

      ctx!.beginPath();
      ctx!.strokeStyle = '#444';
      ctx!.lineWidth = 3;
      ctx!.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx!.lineTo(points[i].x, points[i].y);
      }
      ctx!.stroke();

      return points[points.length - 1];
    };

    const animate = () => {
      if (!isVisibleRef.current) {
        animationRef.current = null;
        return;
      }

      ctx!.clearRect(0, 0, width, height);

      // Draw body
      ctx!.beginPath();
      ctx!.fillStyle = '#111';
      ctx!.arc(center.x(), center.y(), bodyRadius, 0, Math.PI * 2);
      ctx!.fill();

      const time = Date.now() / 1000;

      // Draw heads
      headsRef.current.forEach((head) => {
        const headPos = drawNeck(head, time);
        ctx!.beginPath();
        ctx!.fillStyle = '#5500ff';
        ctx!.arc(headPos.x, headPos.y, headRadius, 0, Math.PI * 2);
        ctx!.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && animationRef.current === null) {
          animate();
        } else if (!entry.isIntersecting && animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AnimationHydra1;
