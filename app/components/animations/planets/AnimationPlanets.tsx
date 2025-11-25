"use client";
import React, { useEffect, useRef } from "react";

const AnimationPlanets: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0;
    let H = 0;
    const center = { x: 0, y: 0 };

    const planets: any[] = [];
    const colors = [
      "#FFD166", // Mercury
      "#EF476F", // Venus
      "#06D6A0", // Earth
      "#118AB2", // Mars
      "#8338EC", // Jupiter
      "#3A86FF", // Saturn
      "#FF006E", // Uranus
      "#FB5607", // Neptune
    ];

    function resize() {
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

      setupPlanets();
    }

    function setupPlanets() {
      planets.length = 0;
      const baseDist = Math.min(W, H) * 0.1;
      for (let i = 0; i < 8; i++) {
        planets.push({
          radius: Math.max(2, Math.min(W, H) * (0.008 + i * 0.002)),
          distance: baseDist + i * (Math.min(W, H) * 0.05),
          angle: Math.random() * Math.PI * 2,
          speed: 0.002 + i * 0.0006,
          color: colors[i],
          opacity: 0.3 + Math.random() * 0.7,
          fadeDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    function hexToRgb(hex: string) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }

    function drawSun() {
      const gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, Math.min(W, H) * 0.1);
      gradient.addColorStop(0, "rgba(255,255,150,1)");
      gradient.addColorStop(0.5, "rgba(255,180,0,0.8)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(center.x, center.y, Math.min(W, H) * 0.12, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      if (!isVisibleRef.current) {
        animationRef.current = null;
        return;
      }

      ctx.fillStyle = "rgba(0, 0, 30, 0.25)";
      ctx.fillRect(0, 0, W, H);
      drawSun();

      planets.forEach((p) => {
        p.angle += p.speed;
        p.opacity += 0.01 * p.fadeDir;
        if (p.opacity >= 1) p.fadeDir = -1;
        if (p.opacity <= 0.3) p.fadeDir = 1;

        const x = center.x + Math.cos(p.angle) * p.distance;
        const y = center.y + Math.sin(p.angle) * p.distance;

        // Orbit path
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.arc(center.x, center.y, p.distance, 0, Math.PI * 2);
        ctx.stroke();

        // Glow
        const { r, g, b } = hexToRgb(p.color);
        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.radius * 3);
        glow.addColorStop(0, `rgba(${r},${g},${b},${p.opacity * 0.8})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Planet core
        ctx.beginPath();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current && animationRef.current === null) {
          animate();
        } else if (!isVisibleRef.current && animationRef.current !== null) {
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
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
        aria-label="Planetary System Animation"
      />
    </div>
  );
};

export default AnimationPlanets;
