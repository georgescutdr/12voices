// components/MetatronCube.tsx
import React, { useEffect, useRef } from "react";

const MetatronCube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const animationIdRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);

  const spheresRef = useRef<
    {
      x: number;
      y: number;
      vx: number;
      vy: number;
      targetX: number;
      targetY: number;
      phase: number;
    }[]
  >([]);

  // Constants
  const sphereRadiusBase = 48;
  const glowSpeed = 0.01;
  const baseAlpha = 0.25;
  const friction = 0.96;
  const jitter = 0.3;
  const repulse = 0.05;

  // Helper: hexagon points
  function getHex(radius: number) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const ang = (Math.PI / 3) * i - Math.PI / 2;
      pts.push({ x: radius * Math.cos(ang), y: radius * Math.sin(ang) });
    }
    return pts;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let W = 0;
    let H = 0;
    let centerX = 0;
    let centerY = 0;
    let sphereRadius = sphereRadiusBase;

    // Resize function
    function setSize() {
      const cont = containerRef.current;
      const canv = canvasRef.current;
      const c = ctx;
      if (!cont || !canv || !c) return;

      const rect = cont.getBoundingClientRect();

      W = rect.width;
      H = rect.height;
      centerX = W / 2;
      centerY = H / 2;

      sphereRadius = Math.min(sphereRadiusBase, W / 20, H / 20);

      // CSS size
      canv.style.width = `${W}px`;
      canv.style.height = `${H}px`;

      // Real pixel size
      canv.width = W * dpr;
      canv.height = H * dpr;

      c.setTransform(1, 0, 0, 1, 0, 0);
      c.scale(dpr, dpr);

      // Recompute sphere positions
      const innerR = sphereRadius * 1.8;
      const outerR = sphereRadius * 3.2;
      const basePoints = [{ x: 0, y: 0 }, ...getHex(innerR), ...getHex(outerR)];

      spheresRef.current = basePoints.map((p) => ({
        x: p.x,
        y: p.y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        targetX: p.x,
        targetY: p.y,
        phase: Math.random() * Math.PI * 2,
      }));

      timeRef.current = 0;
    }

    setSize();
    window.addEventListener("resize", setSize);

    function drawSphere(x: number, y: number, glow: number) {
      const c = ctx;
      if (!c) return;

      c.beginPath();
      c.fillStyle = `rgba(255,255,255,${baseAlpha})`;
      c.shadowColor = `rgba(255,255,255,${glow})`;
      c.shadowBlur = 50;
      c.arc(centerX + x, centerY + y, sphereRadius, 0, Math.PI * 2);
      c.fill();
      c.shadowBlur = 0;
    }

    function update() {
      spheresRef.current.forEach((s) => {
        const dx = s.targetX - s.x;
        const dy = s.targetY - s.y;
        s.vx += dx * 0.0005;
        s.vy += dy * 0.0005;

        // Random movement
        s.vx += (Math.random() - 0.5) * jitter;
        s.vy += (Math.random() - 0.5) * jitter;

        // Repulsion
        spheresRef.current.forEach((o) => {
          if (o === s) return;
          const dx2 = s.x - o.x;
          const dy2 = s.y - o.y;
          const dist = Math.hypot(dx2, dy2);
          if (dist < sphereRadius * 2) {
            const f = (sphereRadius * 2 - dist) * repulse;
            s.vx += (dx2 / dist) * f;
            s.vy += (dy2 / dist) * f;
          }
        });

        s.vx *= friction;
        s.vy *= friction;
        s.x += s.vx;
        s.y += s.vy;
      });
    }

    function drawRedSnake(x1: number, y1: number, phase: number) {
      const c = ctx;
      if (!c) return;

      const dx = x1;
      const dy = y1;
      const len = Math.hypot(dx, dy);
      const steps = Math.floor(len / 10);

      c.save();
      c.lineWidth = 4;
      c.shadowColor = "rgba(255, 0, 0, 1)";
      c.strokeStyle = "rgba(255, 0, 0, 1)";
      c.shadowBlur = 50;

      c.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const nx = dx * t + Math.sin(t * Math.PI * 4 + phase) * 15;
        const ny = dy * t + Math.cos(t * Math.PI * 4 + phase) * 15;
        const sx = centerX + nx;
        const sy = centerY + ny;
        if (i === 0) c.moveTo(sx, sy);
        else c.lineTo(sx, sy);
      }

      c.stroke();
      c.restore();
    }

    function drawWhiteLines(glow: number) {
      const c = ctx;
      if (!c) return;

      c.save();
      c.lineWidth = 3;
      c.shadowColor = `rgba(255,255,255,${glow * 0.8})`;
      c.strokeStyle = `rgba(255,255,255,${glow * 0.5})`;
      c.shadowBlur = 25;

      for (let i = 0; i < spheresRef.current.length; i++) {
        for (let j = i + 1; j < spheresRef.current.length; j++) {
          const a = spheresRef.current[i];
          const b = spheresRef.current[j];
          c.beginPath();
          c.moveTo(centerX + a.x, centerY + a.y);
          c.lineTo(centerX + b.x, centerY + b.y);
          c.stroke();
        }
      }

      c.restore();
    }

    function draw() {
      const c = ctx;
      if (!c) return;

      c.clearRect(0, 0, W, H);

      const glow = 0.2 + 0.8 * Math.abs(Math.sin(timeRef.current * glowSpeed));

      update();
      drawWhiteLines(glow);

      spheresRef.current.slice(1).forEach((s) => {
        drawRedSnake(s.x, s.y, s.phase + timeRef.current * 0.5);
      });

      spheresRef.current.forEach((s) => drawSphere(s.x, s.y, glow));

      timeRef.current++;
      animationIdRef.current = requestAnimationFrame(draw);
    }

    // Pause animation when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!animationIdRef.current) draw();
        } else {
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
            animationIdRef.current = undefined;
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    draw();

    return () => {
      window.removeEventListener("resize", setSize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] relative"
    >
      <canvas ref={canvasRef} className="block bg-transparent" />
    </div>
  );
};

export default MetatronCube;
