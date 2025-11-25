'use client';

import React, { useEffect, useRef } from 'react';

const designHeight = 700;

type Node3D = {
  name: string;
  x: number;
  y: number;
  z: number;
};

const nodes3DBase: Node3D[] = [
  { name: 'Keter', x: 0, y: -240, z: 0 },
  { name: 'Chokhmah', x: 120, y: -140, z: 0 },
  { name: 'Binah', x: -120, y: -140, z: 0 },
  { name: 'Chesed', x: 140, y: 0, z: 0 },
  { name: 'Gevurah', x: -140, y: 0, z: 0 },
  { name: 'Tiferet', x: 0, y: 70, z: 0 },
  { name: 'Netzach', x: 120, y: 140, z: 0 },
  { name: 'Hod', x: -120, y: 140, z: 0 },
  { name: 'Yesod', x: 0, y: 220, z: 0 },
  { name: 'Malkuth', x: 0, y: 320, z: 0 },
  { name: 'Keter2', x: 0, y: -140, z: 0 },
  { name: 'Keter3', x: 0, y: 0, z: 0 },
  { name: 'Keter4', x: 0, y: 140, z: 0 },
];

const connections = [
  [0, 1], [0, 2], [9, 6], [9, 7], [1, 3], [2, 4], [1, 2],
  [3, 5], [4, 5], [3, 6], [4, 7], [6, 7], [6, 8], [7, 8],
  [8, 9], [5, 8], [5, 6], [4, 7], [6, 7], [7, 5], [3, 4],
  [10, 11], [11, 12]
];

const AnimationSephirotTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let W = 0;
    let H = 0;
    let centerX = 0;
    let scaleFactor = 1;
    let focalLength = 600;

    // --- Resize Handler (throttled for performance)
    let resizeTimeout: NodeJS.Timeout;
    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const rect = container.getBoundingClientRect();
        W = rect.width;
        H = rect.height;

        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        centerX = W / 2;
        scaleFactor = (H * 0.85) / designHeight;
        focalLength = scaleFactor * 600;
      }, 100);
    };

    resize();
    window.addEventListener('resize', resize);

    const getScaledNodes = () =>
      nodes3DBase.map(n => ({
        x: n.x * scaleFactor,
        y: n.y * scaleFactor,
        z: n.z * scaleFactor,
        name: n.name,
      }));

    const rotateY = (p: Node3D, angle: number) => {
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      return {
        x: p.x * cosA + p.z * sinA,
        y: p.y,
        z: -p.x * sinA + p.z * cosA,
        name: p.name,
      };
    };

    const drawGlowCircle = (x: number, y: number, radius: number, color: string, glowBlur = 30) => {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = glowBlur;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawGlowLine = (x1: number, y1: number, x2: number, y2: number, color: string, glowBlur = 20) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = color;
      ctx.shadowBlur = glowBlur;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let rotationY = 0;
    const speedPhases = [0.01, 1.5, 0.02, 2.5, 0.03];
    const phaseDuration = 4000;
    let phaseIndex = 0;
    let phaseStartTime = performance.now();

    let animationId: number | null = null;
    let isVisible = false;

    const draw = () => {
      if (!isVisible) return;

      const now = performance.now();
      const elapsed = now - phaseStartTime;
      const t = Math.min(elapsed / phaseDuration, 1);
      const currentSpeed = speedPhases[phaseIndex];
      const nextSpeed = speedPhases[(phaseIndex + 1) % speedPhases.length];
      const rotationSpeed = lerp(currentSpeed, nextSpeed, t);

      if (t >= 1) {
        phaseIndex = (phaseIndex + 1) % speedPhases.length;
        phaseStartTime = now;
      }

      ctx.clearRect(0, 0, W, H);

      const scaledNodes = getScaledNodes();
      const rotatedNodes = scaledNodes.map(n => rotateY(n, rotationY));

      const projectedTemp = rotatedNodes.map(p => {
        const scale = focalLength / (focalLength + p.z);
        return { x: centerX + p.x * scale, y: p.y * scale, scale };
      });

      const minY = Math.min(...projectedTemp.map(p => p.y - 25));
      const maxY = Math.max(...projectedTemp.map(p => p.y + 25));
      const centerYOffset = H / 2 - (minY + maxY) / 2;

      const projectedNodes = rotatedNodes.map(p => {
        const scale = focalLength / (focalLength + p.z);
        return { x: centerX + p.x * scale, y: centerYOffset + p.y * scale, scale };
      });

      const nodesWithIndex = projectedNodes
        .map((p, i) => ({ ...p, index: i, z: rotatedNodes[i].z }))
        .sort((a, b) => a.z - b.z);

      for (const [i1, i2] of connections) {
        const n1 = projectedNodes[i1];
        const n2 = projectedNodes[i2];
        const avgScale = (n1.scale + n2.scale) / 2;
        drawGlowLine(n1.x, n1.y, n2.x, n2.y, `rgba(0,220,255,${avgScale})`, 12 * avgScale);
      }

      for (const node of nodesWithIndex) {
        const i = node.index;
        let baseColor = `rgba(0,220,255,${Math.min(1, node.scale)})`;
        if (i === 0) baseColor = `rgba(255,255,255,${Math.min(1, node.scale)})`;
        else if (i === 9) baseColor = `rgba(0,170,255,${Math.min(1, node.scale)})`;

        const glowIntensity = Math.sin(now * 0.002 + i) * 0.5 + 0.5;
        drawGlowCircle(node.x, node.y, 20 * node.scale, baseColor, 40 * glowIntensity);
      }

      rotationY += rotationSpeed;
      animationId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!animationId) animationId = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // --- Visibility control (only animates when visible)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else stop();
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    // Initial start if visible
    if (container.getBoundingClientRect().top < window.innerHeight) {
      isVisible = true;
      start();
    }

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      stop();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-black"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default AnimationSephirotTree;
