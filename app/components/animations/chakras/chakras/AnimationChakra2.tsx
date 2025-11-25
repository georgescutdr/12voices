'use client';

import { useEffect, useRef } from 'react';

interface ChakraConfig {
  x: () => number;
  y: () => number;
  petals: number;
  color: string;
  angle: number;
  spinDir: number;
  spinPhase: number;
}

interface ParticleProps {
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  life: number;
  decay: number;
  color: string;
  direction: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export default function AnimationChakra2() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const isVisible = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const getSize = () => {
      if (!containerRef.current) {
        return { width: window.innerWidth, height: window.innerHeight };
      }
      return {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      };
    };

    let { width: W, height: H } = getSize();

    const setCanvasSize = () => {
      const size = getSize();
      W = size.width;
      H = size.height;

      canvas.width = W;
      canvas.height = H;

      // Set CSS size to fill container exactly (no scaling)
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    setCanvasSize();

    const resize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', resize);

    const chakra: ChakraConfig = {
      x: () => W / 2,
      y: () => H / 2,
      petals: 6,
      color: 'rgba(255, 165, 0, 0.8)',
      angle: 0,
      spinDir: 1,
      spinPhase: 0,
    };

    const particles: ParticleProps[] = [];

    class Particle implements ParticleProps {
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
        this.x = x;
        this.y = y;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 0;
        this.speed = 1 + speedScale * 2 + Math.random();
        this.life = 1;
        this.decay = 0.01 + Math.random() * 0.01 * (1 - speedScale);
        this.color = color;
        this.direction = direction;
      }

      update() {
        this.radius += this.speed;
        this.angle += this.direction * 0.05;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
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

    const drawChakra = (ctx: CanvasRenderingContext2D, chakra: ChakraConfig) => {
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

      const phase = chakra.spinPhase < 0.5
        ? chakra.spinPhase * 2
        : 2 - chakra.spinPhase * 2;

      const minSpeed = 0.001;
      const maxSpeed = 0.015;
      return minSpeed + (maxSpeed - minSpeed) * phase;
    };

    let last = performance.now();

    const animate = () => {
      if (!isVisible.current) {
        animationFrameId.current = requestAnimationFrame(animate);
        last = performance.now();
        return;
      }

      const now = performance.now();
      const delta = now - last;
      last = now;

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

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // IntersectionObserver to track visibility and pause animation when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisible.current = entry.isIntersecting;
          if (isVisible.current && !animationFrameId.current) {
            last = performance.now();
            animationFrameId.current = requestAnimationFrame(animate);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(canvas);

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      style={{ minHeight: '400px' }} // ensure container has height
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // no width/height attributes to avoid scaling issues
        }}
      />
    </div>
  );
}
