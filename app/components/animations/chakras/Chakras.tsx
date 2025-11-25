"use client";

import React, { useEffect, useRef, useState } from "react";

type ChakraConfig = {
  petals: number;
  color: string;
  spinDir: 1 | -1;
  link: string;
  name: string;
};

export const Chakras: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const animationFrameId = useRef<number | null>(null);
  const isVisible = useRef(true);
  const [hoveredChakraIndex, setHoveredChakraIndex] = useState<number | null>(null);

  const chakras: ChakraConfig[] = [
    { petals: 4, color: "rgba(255, 0, 0, 0.8)", spinDir: -1, link: "/learning/chakras/chakra1", name: "Root Chakra" },
    { petals: 6, color: "rgba(255, 165, 0, 0.8)", spinDir: 1, link: "/learning/chakras/chakra2", name: "Sacral Chakra" },
    { petals: 10, color: "rgba(255, 255, 0, 0.8)", spinDir: -1, link: "/learning/chakras/chakra3", name: "Solar Plexus Chakra" },
    { petals: 12, color: "rgba(0, 128, 0, 0.8)", spinDir: 1, link: "/learning/chakras/chakra4", name: "Heart Chakra" },
    { petals: 16, color: "rgba(0, 0, 255, 0.8)", spinDir: -1, link: "/learning/chakras/chakra5", name: "Throat Chakra" },
    { petals: 2, color: "rgba(75, 0, 130, 0.8)", spinDir: 1, link: "/learning/chakras/chakra6", name: "Third Eye Chakra" },
    { petals: 100, color: "rgba(255, 255, 255, 0.8)", spinDir: -1, link: "/learning/chakras/chakra7", name: "Crown Chakra" },
  ];

  const animationConfig = { fadeSpeed: 0.05, slideDistance: 40 };

  useEffect(() => {
    function resize() {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setSize({ width: clientWidth, height: clientHeight });
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || size.width === 0 || size.height === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size.width;
    canvas.height = size.height;

    const W = size.width, H = size.height;
    const chakraRadius = 50, spacing = 110;
    const centerX = () => W / 2;
    const slowSpeed = 0.005, fastSpeed = 0.25;

    let chakraAngles = new Array(chakras.length).fill(0);
    let labelStates = chakras.map(() => ({ opacity: 0, offset: 0 }));
    let state = 0, stateTime = 0, time = 0, channelBrightness = 0;

    function easeInOut(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function drawPetal(ctx: CanvasRenderingContext2D, angle: number, color: string) {
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(10, -chakraRadius / 3, 10, -chakraRadius * 0.75, 0, -chakraRadius);
      ctx.bezierCurveTo(-10, -chakraRadius * 0.75, -10, -chakraRadius / 3, 0, 0);
      ctx.closePath();
      const grad = ctx.createRadialGradient(0, -chakraRadius / 2, 6, 0, -chakraRadius / 2, chakraRadius);
      grad.addColorStop(0, color);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.restore();
    }

    function drawChakra(ctx: CanvasRenderingContext2D, x: number, y: number, petals: number, rotation: number, color: string) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      if (petals === 2) {
        drawPetal(ctx, Math.PI / 2, color);
        drawPetal(ctx, -Math.PI / 2, color);
      } else {
        for (let i = 0; i < petals; i++) {
          drawPetal(ctx, (i / petals) * 2 * Math.PI, color);
        }
      }
      const coreRadius = 15;
      const coreGrad = ctx.createRadialGradient(0, 0, coreRadius * 0.1, 0, 0, coreRadius);
      coreGrad.addColorStop(0, "rgba(255,255,255,0.8)");
      coreGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.fillStyle = coreGrad;
      ctx.shadowColor = color;
      ctx.shadowBlur = 30;
      ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawCentralChannel(x: number, y1: number, y2: number, brightness: number) {
      const g = ctx.createLinearGradient(x, y1, x, y2);
      g.addColorStop(0, `rgba(255,255,255,${brightness})`);
      g.addColorStop(0.5, `rgba(255,255,255,${brightness * 0.6})`);
      g.addColorStop(1, `rgba(255,255,255,${brightness})`);
      ctx.beginPath();
      ctx.lineWidth = 8;
      ctx.strokeStyle = g;
      ctx.shadowColor = `rgba(255,255,255,${brightness})`;
      ctx.shadowBlur = 40 * brightness;
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.stroke();
    }

    function animate(dt: number) {
      if (!isVisible.current) {
        animationFrameId.current = requestAnimationFrame(t => animate(t - (time || t)));
        time = performance.now();
        return;
      }
      dt ||= 0;
      ctx.clearRect(0, 0, W, H);
      stateTime += dt / 1000;

      switch (state) {
        case 0:
          channelBrightness = 0.15;
          if (stateTime >= 2) { state = 1; stateTime = 0; }
          break;
        case 1:
          let t = stateTime / 1.5;
          if (t > 1) { t = 1; state = 2; stateTime = 0; }
          channelBrightness = 0.15 + easeInOut(t) * 0.85;
          break;
        case 2:
          channelBrightness = 1;
          if (stateTime >= 4) { state = 3; stateTime = 0; }
          break;
        case 3:
          let t2 = stateTime / 1.5;
          if (t2 > 1) { t2 = 1; state = 0; stateTime = 0; }
          channelBrightness = 1 - easeInOut(t2) * 0.85;
          break;
      }

      drawCentralChannel(centerX(), H / 2 + spacing * 3, H / 2 - spacing * 3, channelBrightness);

      chakras.forEach((chakra, i) => {
        const x = centerX();
        const y = H / 2 + spacing * (3 - i);
        const speed = i === hoveredChakraIndex ? fastSpeed : slowSpeed;
        chakraAngles[i] += chakra.spinDir * speed * (dt / 16.67);

        // Label animation state update
        const stateObj = labelStates[i];
        if (i === hoveredChakraIndex) {
          stateObj.opacity = Math.min(1, stateObj.opacity + animationConfig.fadeSpeed);
          stateObj.offset = Math.min(animationConfig.slideDistance, stateObj.offset + 4);
        } else {
          stateObj.opacity = Math.max(0, stateObj.opacity - animationConfig.fadeSpeed);
          stateObj.offset = Math.max(0, stateObj.offset - 4);
        }

        const side = i % 2 === 0 ? 1 : -1;
        const labelX = x + side * (chakraRadius + animationConfig.slideDistance - stateObj.offset + 20);
        const labelY = y;

        drawChakra(ctx, x, y, chakra.petals, chakraAngles[i], chakra.color);

        if (stateObj.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = stateObj.opacity;
          ctx.font = "16px sans-serif";
          ctx.fillStyle = "#fff";
          ctx.shadowColor = "#000";
          ctx.shadowBlur = 4;
          ctx.textAlign = side === 1 ? "left" : "right";
          ctx.textBaseline = "middle";
          ctx.fillText(chakra.name, labelX, labelY);
          ctx.restore();
        }
      });

      animationFrameId.current = requestAnimationFrame(t => animate(t - (time || t)));
      time = performance.now();
    }

    function getMousePos(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function isInside(x: number, y: number, i: number) {
      const dx = x - centerX(), dy = y - (H / 2 + spacing * (3 - i));
      return dx * dx + dy * dy <= chakraRadius * chakraRadius;
    }

    function onMove(e: MouseEvent) {
      const { x, y } = getMousePos(e);
      const idx = chakras.findIndex((_, i) => isInside(x, y, i));
      setHoveredChakraIndex(idx === -1 ? null : idx);
    }

    function onLeave() {
      setHoveredChakraIndex(null);
    }

    function onClick(e: MouseEvent) {
      const { x, y } = getMousePos(e);
      const idx = chakras.findIndex((_, i) => isInside(x, y, i));
      if (idx !== -1) window.location.href = chakras[idx].link;
    }

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);
    const obs = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
      if (isVisible.current && !animationFrameId.current) {
        time = performance.now();
        animationFrameId.current = requestAnimationFrame(t => animate(0));
      }
    }, { threshold: 0.1 });
    if (containerRef.current) obs.observe(containerRef.current);

    animationFrameId.current = requestAnimationFrame(t => animate(0));
    time = performance.now();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      if (containerRef.current) obs.unobserve(containerRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, [size, hoveredChakraIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ cursor: hoveredChakraIndex !== null ? "pointer" : "default" }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
};

export default Chakras;
