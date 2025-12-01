'use client';

import React, { useEffect, useRef } from 'react';

const AnimationFlowerOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  const anglesRef = useRef([0, 0, 0]);
  const brightnessCycleDuration = 12000; // slower fade

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const radiusFactor = 0.06;
    const maxDistanceHex = 3;

    const speedRanges = [
      { min: 0.001, max: 0.12 },
      { min: -0.1, max: -0.002 },
      { min: 0.002, max: 0.09 },
    ];
    const speedCycleDurations = [6000, 9000, 7000];

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function rotatePoint(pt: { x: number; y: number }, angle: number) {
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      return {
        x: pt.x * cosA - pt.y * sinA,
        y: pt.x * sinA + pt.y * cosA,
      };
    }

    let layers: { x: number; y: number }[][] = [];

    const resizeCanvas = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const width = rect.width;
      const height = rect.height;
      const radius = Math.min(width, height) * radiusFactor;
      const horiz = radius;
      const vert = (radius * Math.sqrt(3)) / 2;

      // Generate hex grid points
      const circles: { x: number; y: number }[] = [];
      for (let q = -maxDistanceHex; q <= maxDistanceHex; q++) {
        const r1 = Math.max(-maxDistanceHex, -q - maxDistanceHex);
        const r2 = Math.min(maxDistanceHex, -q + maxDistanceHex);
        for (let r = r1; r <= r2; r++) {
          const x = horiz * (q + r / 2);
          const y = vert * r;
          circles.push({ x, y });
        }
      }

      let maxDist = 0;
      circles.forEach(c => {
        const d = Math.sqrt(c.x * c.x + c.y * c.y);
        if (d > maxDist) maxDist = d;
      });

      const layerThresholds = [maxDist / 3, (2 * maxDist) / 3, maxDist + 1];
      layers = [[], [], []];
      circles.forEach(c => {
        const d = Math.sqrt(c.x * c.x + c.y * c.y);
        if (d <= layerThresholds[0]) layers[0].push(c);
        else if (d <= layerThresholds[1]) layers[1].push(c);
        else layers[2].push(c);
      });
    };

    const drawCircle = (x: number, y: number, r: number, hue: number, brightness: number) => {
      // create a mystical gradient color
      const grad = ctx.createRadialGradient(x, y, r * 0.2, x, y, r);
      grad.addColorStop(0, `hsla(${hue}, 80%, ${30 + brightness * 50}%, ${0.8})`);
      grad.addColorStop(1, `hsla(${(hue + 60) % 360}, 80%, ${20 + brightness * 40}%, 0)`);

      ctx.fillStyle = grad;
      ctx.shadowColor = `hsla(${hue}, 80%, ${50 + brightness * 30}%, 0.7)`;
      ctx.shadowBlur = 20;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = `hsla(${hue}, 80%, ${30 + brightness * 50}%, 0.6)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    };

    const animate = (now = performance.now()) => {
      if (!isVisibleRef.current) {
        animationIdRef.current = null;
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * radiusFactor;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < layers.length; i++) {
        const t = (now % speedCycleDurations[i]) / speedCycleDurations[i];
        const sineT = 0.5 + 0.5 * Math.sin(t * 2 * Math.PI);
        const speed = lerp(speedRanges[i].min, speedRanges[i].max, sineT);
        anglesRef.current[i] += speed;
      }

      const brightnessT = (now % brightnessCycleDuration) / brightnessCycleDuration;
      const brightness = 0.5 + 0.5 * Math.sin(brightnessT * 2 * Math.PI);
      const hue = (now / 100) % 360; // slow hue rotation

      // draw outer circle
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${(hue + 180) % 360}, 60%, 40%, 0.3)`;
      ctx.lineWidth = 3;
      ctx.arc(centerX, centerY, radius * maxDistanceHex * 1.2, 0, Math.PI * 2);
      ctx.stroke();

      layers.forEach((layer, i) => {
        layer.forEach(pt => {
          const rotated = rotatePoint(pt, anglesRef.current[i]);
          drawCircle(centerX + rotated.x, centerY + rotated.y, radius, (hue + i * 60) % 360, brightness);
        });
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current && animationIdRef.current === null) {
          animate();
        } else if (!isVisibleRef.current && animationIdRef.current !== null) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      observer.disconnect();
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default AnimationFlowerOfLife;
