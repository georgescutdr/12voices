'use client';

import { useEffect, useRef, useState } from 'react';

const AnimationMetatronCube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0;
    let H = 0;

    const setSize = () => {
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

    setSize();
    window.addEventListener('resize', setSize);

    let innerRotation = 0;
    let outerRotation = 0;
    let time = 0;

    const minSpeed = 0.001;
    const maxSpeed = 1.5;

    const rotate2D = (x: number, y: number, angle: number) => ({
      x: x * Math.cos(angle) - y * Math.sin(angle),
      y: x * Math.sin(angle) + y * Math.cos(angle),
    });

    const drawSphere = (x: number, y: number, radius: number, glowAlpha: number) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, 0.25)`;
      ctx.shadowColor = `rgba(255, 255, 255, ${glowAlpha})`;
      ctx.shadowBlur = 50;
      ctx.arc(W / 2 + x, H / 2 + y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const getHexagonPoints = (radius: number) => {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        points.push({
          x: radius * Math.cos(angle),
          y: radius * Math.sin(angle),
        });
      }
      return points;
    };

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // 🔥 Responsiveness FIX — recalc every frame
      const baseRadius = Math.min(W, H) * 0.06;
      const innerRadius = baseRadius * 2;
      const outerRadius = baseRadius * 3.5;

      const pulse = 0.2 + 0.8 * Math.abs(Math.sin(time * 0.01));
      const innerRaw = getHexagonPoints(innerRadius);
      const outerRaw = getHexagonPoints(outerRadius);

      const innerPoints = innerRaw.map((p) => rotate2D(p.x, p.y, innerRotation));
      const outerPoints = outerRaw.map((p) => rotate2D(p.x, p.y, -outerRotation));

      const allPoints = [...innerPoints, ...outerPoints];

      drawSphere(0, 0, baseRadius, pulse);
      allPoints.forEach((p) => drawSphere(p.x, p.y, baseRadius, pulse));

      ctx.save();
      ctx.strokeStyle = `rgba(255, 255, 255, ${pulse * 0.6})`;
      ctx.lineWidth = 4;
      ctx.shadowColor = `rgba(255, 255, 255, ${pulse * 0.8})`;
      ctx.shadowBlur = 30;

      const all = [{ x: 0, y: 0 }, ...allPoints];
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const a = all[i];
          const b = all[j];
          ctx.beginPath();
          ctx.moveTo(W / 2 + a.x, H / 2 + a.y);
          ctx.lineTo(W / 2 + b.x, H / 2 + b.y);
          ctx.stroke();
        }
      }
      ctx.restore();

      const speedWave = (Math.sin(time * 0.005) + 1) / 2;
      const currentSpeed = minSpeed + (maxSpeed - minSpeed) * speedWave;

      innerRotation += currentSpeed;
      outerRotation += currentSpeed;
      time++;

      animationFrameId = requestAnimationFrame(draw);
    };

    const startAnimation = () => draw();
    const stopAnimation = () => cancelAnimationFrame(animationFrameId);

    if (isVisible) startAnimation();
    else stopAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener('resize', setSize);
    };
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] relative">
      <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />
    </div>
  );
};

export default AnimationMetatronCube;
