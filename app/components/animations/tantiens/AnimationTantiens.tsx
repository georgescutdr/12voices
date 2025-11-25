'use client';

import React, { useEffect, useRef } from 'react';

type RGB = [number, number, number];

interface SphereParams {
  baseColor: RGB;
  glowAlphaRange: [number, number];
  ringAlphaRange: [number, number];
  glowSpeed: number;
  ringSpeed: number;
  glowEnabled: boolean;
  particlesAlpha: number;
}

interface ContainerParams {
  baseColor: RGB;
  alphaRange: [number, number];
  speed: number;
}

interface VesicaPiscisChakraParams {
  spheresParams?: SphereParams[];
  containerParams?: ContainerParams;
  sphereRadius?: number;
  spacing?: number;
}

const defaultSpheresParams: SphereParams[] = [
  {
    baseColor: [138, 43, 226],
    glowAlphaRange: [0.2, 0.6],
    ringAlphaRange: [0.2, 0.5],
    glowSpeed: 4,
    ringSpeed: 3,
    glowEnabled: true,
    particlesAlpha: 0.5,
  },
  {
    baseColor: [255, 255, 255],
    glowAlphaRange: [0.2, 0.6],
    ringAlphaRange: [0.2, 0.5],
    glowSpeed: 5,
    ringSpeed: 4,
    glowEnabled: true,
    particlesAlpha: 0.5,
  },
  {
    baseColor: [0, 255, 180],
    glowAlphaRange: [0.2, 0.6],
    ringAlphaRange: [0.2, 0.5],
    glowSpeed: 3,
    ringSpeed: 2.5,
    glowEnabled: true,
    particlesAlpha: 0.5,
  },
];

const defaultContainerParams: ContainerParams = {
  baseColor: [255, 255, 255],
  alphaRange: [0.2, 0.6],
  speed: 2,
};

const VesicaPiscisChakra: React.FC<VesicaPiscisChakraParams> = ({
  spheresParams = defaultSpheresParams,
  containerParams = defaultContainerParams,
  sphereRadius = 100,
  spacing,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = container.clientWidth;
    let H = container.clientHeight;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const spacingValue = spacing ?? sphereRadius;
    const containerRadius = spacingValue + sphereRadius;

    const centerX = () => container.clientWidth / 2;
    const centerY = () => container.clientHeight / 2;

    let time = 0;
    let animationId: number | null = null;

    interface Sphere {
      x: () => number;
      y: () => number;
      params: SphereParams;
    }

    const spheres: Sphere[] = spheresParams.map((params, i) => ({
      x: centerX,
      y: () => centerY() + (i - 1) * spacingValue,
      params,
    }));

    class Particle {
      x: number;
      y: number;
      angle: number;
      radius: number;
      speed: number;
      life: number;
      decay: number;
      color: string;
      size: number;

      constructor(x: number, y: number, color: string, alpha: number) {
        this.x = x;
        this.y = y;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 0;
        this.speed = 0.5 + Math.random() * 1.5;
        this.life = 1;
        this.decay = 0.01 + Math.random() * 0.01;
        this.color = color.replace(/[^,]+(?=\))/, alpha.toString());
        this.size = 1 + Math.random() * 2;
      }

      update() {
        this.radius += this.speed;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life -= this.decay;
      }

      draw(context: CanvasRenderingContext2D) {
        if (this.life <= 0) return;
        context.save();
        context.globalAlpha = this.life;
        context.fillStyle = this.color;
        context.shadowColor = this.color;
        context.shadowBlur = 20;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    let particles: Particle[] = [];

    const lerp = (min: number, max: number, t: number) => min + (max - min) * t;

    const drawSphere = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      baseRGB: RGB,
      glowAlpha: number,
      ringAlpha: number
    ) => {
      if (glowAlpha > 0) {
        const glowColor = `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${glowAlpha})`;
        const grad = context.createRadialGradient(x, y, 10, x, y, sphereRadius);
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        context.beginPath();
        context.fillStyle = grad;
        context.shadowColor = glowColor;
        context.shadowBlur = 60;
        context.arc(x, y, sphereRadius, 0, 2 * Math.PI);
        context.fill();
      }

      if (ringAlpha > 0) {
        const ringColor = `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${ringAlpha})`;
        context.beginPath();
        context.strokeStyle = ringColor;
        context.lineWidth = 2;
        context.shadowBlur = 0;
        context.arc(x, y, sphereRadius, 0, 2 * Math.PI);
        context.stroke();
      }
    };

    const drawContainerCircle = (context: CanvasRenderingContext2D, alpha: number, color: RGB) => {
      const x = centerX();
      const y = centerY();
      context.beginPath();
      context.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      context.lineWidth = 2;
      context.shadowBlur = 10;
      context.shadowColor = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      context.arc(x, y, containerRadius, 0, 2 * Math.PI);
      context.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      time += 0.02;

      const containerAlphaT = (Math.sin(time * containerParams.speed) + 1) / 2;
      const containerAlpha = lerp(
        containerParams.alphaRange[0],
        containerParams.alphaRange[1],
        containerAlphaT
      );

      const hueShift = Math.floor(100 + 155 * Math.abs(Math.sin(time * containerParams.speed * 0.3)));
      const containerColor: RGB = [
        containerParams.baseColor[0],
        containerParams.baseColor[1],
        hueShift,
      ];

      drawContainerCircle(ctx, containerAlpha, containerColor);

      spheres.forEach(({ x, y, params }) => {
        const cx = x();
        const cy = y();

        const glowT = (Math.sin(time * params.glowSpeed) + 1) / 2;
        const glowAlphaRaw = lerp(params.glowAlphaRange[0], params.glowAlphaRange[1], glowT);
        const glowAlpha = params.glowEnabled ? glowAlphaRaw : 0;

        const ringT = (Math.sin(time * params.ringSpeed + 1) + 1) / 2;
        const ringAlpha = lerp(params.ringAlphaRange[0], params.ringAlphaRange[1], ringT);

        drawSphere(ctx, cx, cy, params.baseColor, glowAlpha, ringAlpha);

        if (params.particlesAlpha > 0) {
          for (let i = 0; i < 3; i++) {
            const particleColor = `rgba(${params.baseColor[0]},${params.baseColor[1]},${params.baseColor[2]},0.5)`;
            particles.push(new Particle(cx, cy, particleColor, params.particlesAlpha));
          }
        }
      });

      particles.forEach((p) => p.update());
      particles.forEach((p) => p.draw(ctx));

      particles = particles.filter((p) => p.life > 0);

      animationId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && animationId === null) {
        animate();
      } else if (!entry.isIntersecting && animationId !== null) {
        if (animationId) cancelAnimationFrame(animationId);
        animationId = null;
      }
    }, { threshold: 0.1 });

    observer.observe(container);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [spheresParams, containerParams, sphereRadius, spacing]);

  return (
    <div ref={containerRef} className="w-full h-screen bg-black overflow-hidden relative">
      <canvas ref={canvasRef} className="block w-full h-full" aria-label="Tantiens animation" />
    </div>
  );
};

export default VesicaPiscisChakra;
