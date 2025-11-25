'use client';

import React, { useRef, useEffect } from 'react';

export const AnimationChakra7: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef<boolean>(true); // Tracks visibility
  const animationFrameRef = useRef<number | null>(null); // Store frame ID

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = container.clientWidth;
    let H = container.clientHeight;
    canvas.width = W;
    canvas.height = H;

    const handleResize = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', handleResize);

    const chakra = {
      x: () => W / 2,
      y: () => H / 2,
      petals: 40,
      basePetalLength: 140,
      basePetalWidth: 30,
      colorStart: 'rgba(255, 255, 255, 0.8)',
      colorEnd: 'rgba(255, 255, 255, 0)',
      coreRadius: 40,
      angle: 0,
      spinDir: 1,
      spinPhase: 0,
    };

    const particles: Particle[] = [];

    class Particle {
      cx: number;
      cy: number;
      angle: number;
      radius: number;
      size: number;
      speed: number;
      life: number;
      decay: number;
      color: string;
      spinDir: number;
      x: number = 0;
      y: number = 0;

      constructor(cx: number, cy: number, speedScale: number) {
        this.cx = cx;
        this.cy = cy;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * 20 + 30 * speedScale;
        this.size = 1 + speedScale * 1.5;
        this.speed = 0.5 + speedScale * 2 + Math.random();
        this.life = 1;
        this.decay = 0.008 + 0.008 * (1 - speedScale);
        this.color = `rgba(135,206,250,${0.7 * speedScale})`;
        this.spinDir = chakra.spinDir;
      }

      update() {
        this.angle += this.spinDir * 0.02;
        this.radius += this.speed * 0.5;
        this.x = this.cx + Math.cos(this.angle) * this.radius;
        this.y = this.cy + Math.sin(this.angle) * this.radius;
        this.life -= this.decay;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const drawPetal = (
      ctx: CanvasRenderingContext2D,
      angle: number,
      length: number,
      width: number,
      colorStart: string,
      colorEnd: string
    ) => {
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(width * 0.5, -length * 0.3, width * 0.7, -length * 0.8, 0, -length);
      ctx.bezierCurveTo(-width * 0.7, -length * 0.8, -width * 0.5, -length * 0.3, 0, 0);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, -length);
      grad.addColorStop(0, colorStart);
      grad.addColorStop(1, colorEnd);
      ctx.fillStyle = grad;
      ctx.shadowColor = colorStart;
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.restore();
    };

    const drawCore = (ctx: CanvasRenderingContext2D, radius: number, color: string) => {
      const grad = ctx.createRadialGradient(0, 0, radius * 0.1, 0, 0, radius);
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.shadowColor = color;
      ctx.shadowBlur = 60;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fill();
    };

    const getSpinSpeed = () => {
      chakra.spinPhase += 0.0025;
      if (chakra.spinPhase > 1) chakra.spinPhase = 0;
      const phase = chakra.spinPhase < 0.5
        ? chakra.spinPhase * 2
        : 2 - chakra.spinPhase * 2;
      const minSpeed = 0.002;
      const maxSpeed = 0.02;
      return minSpeed + (maxSpeed - minSpeed) * phase;
    };

    let last = performance.now();

    const animate = () => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const now = performance.now();
      const delta = now - last;
      last = now;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      const speed = getSpinSpeed();
      chakra.angle += chakra.spinDir * speed * (delta / 16.67);

      const emissionRate = Math.floor(5 + speed * 1200);
      const speedScale = (speed - 0.002) / (0.02 - 0.002);

      for (let i = 0; i < emissionRate; i++) {
        particles.push(new Particle(chakra.x(), chakra.y(), speedScale));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw(ctx);
        }
      }

      ctx.save();
      ctx.translate(chakra.x(), chakra.y());
      ctx.rotate(chakra.angle);
      for (let i = 0; i < chakra.petals; i++) {
        const angle = (i / chakra.petals) * 2 * Math.PI;
        drawPetal(ctx, angle, chakra.basePetalLength, chakra.basePetalWidth, chakra.colorStart, chakra.colorEnd);
      }
      ctx.restore();

      ctx.save();
      ctx.translate(chakra.x(), chakra.y());
      drawCore(ctx, chakra.coreRadius, 'rgba(0,191,255,0.9)');
      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-black">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AnimationChakra7;
