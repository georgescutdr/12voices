// components/MetatronCube.tsx
import React, { useEffect, useRef } from "react";

const MetatronCube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationIdRef = useRef<number>();
  const timeRef = useRef(0);
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

  // Helper to get hex points
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

    // Resize canvas to fill container and scale for DPR
    function setSize() {
      const rect = container.getBoundingClientRect();

      W = rect.width;
      H = rect.height;
      centerX = W / 2;
      centerY = H / 2;

      // Adjust sphereRadius based on size - keep it proportional
      sphereRadius = Math.min(sphereRadiusBase, W / 20, H / 20);

      // CSS size
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      // Actual pixel size
      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Initialize spheres positions relative to new sizes
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
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${baseAlpha})`;
      ctx.shadowColor = `rgba(255,255,255,${glow})`;
      ctx.shadowBlur = 50;
      ctx.arc(centerX + x, centerY + y, sphereRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function update() {
      spheresRef.current.forEach((s) => {
        const dx = s.targetX - s.x;
        const dy = s.targetY - s.y;
        s.vx += dx * 0.0005;
        s.vy += dy * 0.0005;

        s.vx += (Math.random() - 0.5) * jitter;
        s.vy += (Math.random() - 0.5) * jitter;

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
      const dx = x1;
      const dy = y1;
      const len = Math.hypot(dx, dy);
      const steps = Math.floor(len / 10);

      ctx.save();
      ctx.lineWidth = 4;
      ctx.shadowColor = "rgba(255, 0, 0, 1)";
      ctx.strokeStyle = "rgba(255, 0, 0, 1)";
      ctx.shadowBlur = 50;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const nx = dx * t + Math.sin(t * Math.PI * 4 + phase) * 15;
        const ny = dy * t + Math.cos(t * Math.PI * 4 + phase) * 15;
        const sx = centerX + nx;
        const sy = centerY + ny;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
      ctx.restore();
    }

    function drawWhiteLines(glow: number) {
      ctx.save();
      ctx.lineWidth = 3;
      ctx.shadowColor = `rgba(255,255,255,${glow * 0.8})`;
      ctx.strokeStyle = `rgba(255,255,255,${glow * 0.5})`;
      ctx.shadowBlur = 25;

      for (let i = 0; i < spheresRef.current.length; i++) {
        for (let j = i + 1; j < spheresRef.current.length; j++) {
          const a = spheresRef.current[i];
          const b = spheresRef.current[j];
          ctx.beginPath();
          ctx.moveTo(centerX + a.x, centerY + a.y);
          ctx.lineTo(centerX + b.x, centerY + b.y);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
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

    // Intersection Observer to pause/resume animation when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!animationIdRef.current) {
            draw();
          }
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

    // Start animation initially
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
      className="w-full h-screen flex justify-center items-center bg-[#111]"
      style={{ position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        className="block bg-transparent"
        // Width and height controlled by resize logic
      />
    </div>
  );
};

export default MetatronCube;
