'use client';

import React, { useEffect, useRef } from 'react';

const AnimationFlowerOfLife: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  const lastTimeRef = useRef(performance.now());
  const anglesRef = useRef([0, 0, 0]);
  const brightnessCycleDuration = 8000;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 700;
    const height = 700;

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const radius = 40;
    const horiz = radius;
    const vert = (radius * Math.sqrt(3)) / 2;
    const maxDistance = 3;
    const centerX = width / 2;
    const centerY = height / 2;

    // Generate hex grid points
    const circles: { x: number; y: number }[] = [];
    for (let q = -maxDistance; q <= maxDistance; q++) {
      const r1 = Math.max(-maxDistance, -q - maxDistance);
      const r2 = Math.min(maxDistance, -q + maxDistance);
      for (let r = r1; r <= r2; r++) {
        const x = horiz * (q + r / 2);
        const y = vert * r;
        circles.push({ x, y });
      }
    }

    function distance(pt: { x: number; y: number }) {
      return Math.sqrt(pt.x * pt.x + pt.y * pt.y);
    }

    let maxDist = 0;
    circles.forEach(c => {
      const d = distance(c);
      if (d > maxDist) maxDist = d;
    });

    const layerThresholds = [maxDist / 3, (2 * maxDist) / 3, maxDist + 1];
    const layers: { x: number; y: number }[][] = [[], [], []];
    circles.forEach(c => {
      const d = distance(c);
      if (d <= layerThresholds[0]) layers[0].push(c);
      else if (d <= layerThresholds[1]) layers[1].push(c);
      else layers[2].push(c);
    });

    // Speed oscillation parameters
    const speedRanges = [
      { min: 0.001, max: 0.12 }, // inner layer
      { min: -0.1, max: -0.002 }, // middle layer (CCW)
      { min: 0.002, max: 0.09 }, // outer layer
    ];

    const speedCycleDurations = [6000, 9000, 7000]; // ms

    // Utility functions
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

    function drawCircle(x: number, y: number, r: number, brightness: number) {
      const alpha = brightness * 0.9;
      const shadowAlpha = brightness * 0.8;

      const grad = ctx.createRadialGradient(x, y, r * 0.3, x, y, r);
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

      ctx.fillStyle = grad;
      ctx.shadowColor = `rgba(255, 255, 255, ${shadowAlpha})`;
      ctx.shadowBlur = 15;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawOuterCircle() {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
      ctx.lineWidth = 3;
      ctx.arc(centerX, centerY, maxDist + radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    function animate(now = performance.now()) {
      if (!isVisibleRef.current) {
        animationIdRef.current = null;
        lastTimeRef.current = now;
        return;
      }

      const deltaTime = now - lastTimeRef.current;
      lastTimeRef.current = now;

      ctx.clearRect(0, 0, width, height);

      // Update speed and angles per layer
      for (let i = 0; i < layers.length; i++) {
        const t = (now % speedCycleDurations[i]) / speedCycleDurations[i];
        const sineT = 0.5 + 0.5 * Math.sin(t * 2 * Math.PI);
        const minS = speedRanges[i].min;
        const maxS = speedRanges[i].max;
        const speed = lerp(minS, maxS, sineT);
        anglesRef.current[i] += speed;
      }

      // Update brightness
      const brightnessT = (now % brightnessCycleDuration) / brightnessCycleDuration;
      const brightness = 0.5 + 0.5 * Math.sin(brightnessT * 2 * Math.PI);

      drawOuterCircle();

      layers.forEach((layer, i) => {
        layer.forEach(pt => {
          const rotated = rotatePoint(pt, anglesRef.current[i]);
          drawCircle(centerX + rotated.x, centerY + rotated.y, radius, brightness);
        });
      });

      animationIdRef.current = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current && animationIdRef.current === null) {
          lastTimeRef.current = performance.now();
          animate();
        } else if (!isVisibleRef.current && animationIdRef.current !== null) {
          if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    animate();

    return () => {
      observer.disconnect();
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        width={700}
        height={700}
        className="block"
        aria-label="Flower of Life animation"
      />
    </div>
  );
};

export default AnimationFlowerOfLife;
