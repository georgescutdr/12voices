'use client';

import { useEffect, useRef } from 'react';

interface Chakra {
  x: () => number;
  y: () => number;
  petals: number;
  color: string;
  angle: number;
  spinDir: number;
  spinPhase: number;
}

class Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  life: number;
  decay: number;
  color: string;
  direction: number;

  constructor(x: number, y: number, color: string, direction: number, speedScale: number) {
    this.originX = x;
    this.originY = y;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = 0;
    this.speed = 1 + speedScale * 2 + Math.random();
    this.life = 1;
    this.decay = 0.01 + Math.random() * 0.01 * (1 - speedScale);
    this.color = color;
    this.direction = direction;
    this.x = x;
    this.y = y;
  }

  update() {
    this.radius += this.speed;
    this.x = this.originX + Math.cos(this.angle) * this.radius;
    this.y = this.originY + Math.sin(this.angle) * this.radius;
    this.life -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.life <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.life;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function AnimationChakra6() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const runningRef = useRef<boolean>(true);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    let W = container.clientWidth;
    let H = container.clientHeight;

    const resize = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = W;
      canvas.height = H;
    };

    resize();
    window.addEventListener('resize', resize);

    const chakra: Chakra = {
      x: () => W / 2,
      y: () => H / 2,
      petals: 2,
      color: 'rgba(75, 0, 130, 0.8)',
      angle: 0,
      spinDir: 1,
      spinPhase: 0,
    };

    const particles: Particle[] = [];

    const drawPetal = (ctx: CanvasRenderingContext2D, angle: number, color: string) => {
      ctx.save();
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(20, -40, 20, -80, 0, -120);
      ctx.bezierCurveTo(-20, -80, -20, -40, 0, 0);
      ctx.closePath();

      const grad = ctx.createRadialGradient(0, -60, 10, 0, -60, 120);
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.shadowColor = color;
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.restore();
    };

    const drawChakra = (ctx: CanvasRenderingContext2D, chakra: Chakra) => {
      ctx.save();
      ctx.translate(chakra.x(), chakra.y());
      ctx.rotate(chakra.angle);
      for (let i = 0; i < chakra.petals; i++) {
        const angle = (i / chakra.petals) * 2 * Math.PI;
        drawPetal(ctx, angle, chakra.color);
      }

      const coreRadius = 30;
      ctx.beginPath();
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, coreRadius);
      grad.addColorStop(0, 'rgba(255,255,255,0.9)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.shadowColor = chakra.color;
      ctx.shadowBlur = 50;
      ctx.arc(0, 0, coreRadius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
    };

    const getSpinSpeed = () => {
      chakra.spinPhase += 0.002;
      if (chakra.spinPhase > 1) chakra.spinPhase = 0;

      const phase = chakra.spinPhase < 0.5 ? chakra.spinPhase * 2 : 2 - chakra.spinPhase * 2;
      const minSpeed = 0.001;
      const maxSpeed = 0.015;
      return minSpeed + (maxSpeed - minSpeed) * phase;
    };

    let last = performance.now();

    const animate = () => {
      if (!runningRef.current || !ctxRef.current) return;

      const now = performance.now();
      const delta = now - last;
      last = now;

      const ctx = ctxRef.current;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      const speed = getSpinSpeed();
      chakra.angle += chakra.spinDir * speed * delta;

      const emissionRate = Math.floor(3 + speed * 1000);
      const speedScale = (speed - 0.001) / (0.015 - 0.001);

      for (let i = 0; i < emissionRate; i++) {
        particles.push(new Particle(chakra.x(), chakra.y(), chakra.color, chakra.spinDir, speedScale));
      }

      particles.forEach(p => p.update());
      particles.forEach(p => p.draw(ctx));
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      drawChakra(ctx, chakra);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!runningRef.current) {
          runningRef.current = true;
          last = performance.now();
          animate();
        }
      } else {
        runningRef.current = false;
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      }
    }, { threshold: 0.1 });

    observer.observe(container);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
