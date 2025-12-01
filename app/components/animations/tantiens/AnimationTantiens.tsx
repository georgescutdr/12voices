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
  rotationSpeed?: number; // new rotation speed
}

interface ContainerParams {
  baseColor: RGB;
  alphaRange: [number, number];
  speed: number;
  rotationSpeed?: number; // new rotation for container
}

interface VesicaPiscisChakraParams {
  spheresParams?: SphereParams[];
  containerParams?: ContainerParams;
  sphereRadius?: number;
  spacing?: number;
}

const defaultSpheresParams: SphereParams[] = [
  { baseColor: [138, 43, 226], glowAlphaRange: [0.2, 0.7], ringAlphaRange: [0.2, 0.5], glowSpeed: 4, ringSpeed: 3, glowEnabled: true, particlesAlpha: 0.6, rotationSpeed: 0.02 },
  { baseColor: [255, 255, 255], glowAlphaRange: [0.2, 0.7], ringAlphaRange: [0.2, 0.5], glowSpeed: 5, ringSpeed: 4, glowEnabled: true, particlesAlpha: 0.5, rotationSpeed: -0.015 },
  { baseColor: [0, 255, 180], glowAlphaRange: [0.2, 0.7], ringAlphaRange: [0.2, 0.5], glowSpeed: 3, ringSpeed: 2.5, glowEnabled: true, particlesAlpha: 0.5, rotationSpeed: 0.01 },
];

const defaultContainerParams: ContainerParams = {
  baseColor: [255, 255, 255],
  alphaRange: [0.2, 0.6],
  speed: 2,
  rotationSpeed: 0.005,
};

const VesicaPiscisChakra: React.FC<VesicaPiscisChakraParams> = ({
  spheresParams = defaultSpheresParams,
  containerParams = defaultContainerParams,
  sphereRadius = 100,
  spacing,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rotationRef = useRef(0);
  const sphereRotationsRef = useRef(spheresParams.map(() => 0));

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = container.clientWidth;
    let H = container.clientHeight;

    const getScale = () => {
      const w = window.innerWidth;
      if (w < 640) return 0.55; 
      if (w < 1024) return 0.8; 
      return 1;
    };

    let scale = getScale();
    let sphereRadiusScaled = sphereRadius * scale;
    let spacingScaled = (spacing ?? sphereRadius) * scale;
    let containerRadiusScaled = spacingScaled + sphereRadiusScaled;

    const centerX = () => container.clientWidth / 2;
    const centerY = () => container.clientHeight / 2;

    const resizeCanvas = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      scale = getScale();
      sphereRadiusScaled = sphereRadius * scale;
      spacingScaled = (spacing ?? sphereRadius) * scale;
      containerRadiusScaled = spacingScaled + sphereRadiusScaled;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const spheres = spheresParams.map((params, i) => ({
      x: () => centerX(),
      y: () => centerY() + (i - 1) * spacingScaled,
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
        this.decay = 0.008 + Math.random() * 0.01;
        this.color = color.replace(/[^,]+(?=\))/, alpha.toString());
        this.size = 1 + Math.random() * 2;
      }

      update() {
        this.radius += this.speed;
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
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    let particles: Particle[] = [];
    let time = 0;
    let animationId: number | null = null;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const drawSphere = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      baseRGB: RGB,
      glowAlpha: number,
      ringAlpha: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      if (glowAlpha > 0) {
        const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, sphereRadiusScaled);
        grad.addColorStop(0, `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${glowAlpha})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.shadowColor = `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${glowAlpha})`;
        ctx.shadowBlur = 60;
        ctx.beginPath();
        ctx.arc(0, 0, sphereRadiusScaled, 0, Math.PI * 2);
        ctx.fill();
      }

      if (ringAlpha > 0) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${ringAlpha})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 0;
        ctx.arc(0, 0, sphereRadiusScaled, 0, 2 * Math.PI);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawContainer = (ctx: CanvasRenderingContext2D, alpha: number, color: RGB, rotation: number) => {
      ctx.save();
      ctx.translate(centerX(), centerY());
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      ctx.arc(0, 0, containerRadiusScaled, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      time += 0.02;

      // container circle
      rotationRef.current += containerParams.rotationSpeed || 0;
      const containerAlpha = lerp(containerParams.alphaRange[0], containerParams.alphaRange[1], (Math.sin(time * containerParams.speed) + 1) / 2);
      const hueShift = Math.floor(100 + 155 * Math.abs(Math.sin(time * containerParams.speed * 0.3)));
      drawContainer(ctx, containerAlpha, [containerParams.baseColor[0], containerParams.baseColor[1], hueShift], rotationRef.current);

      // spheres
      spheres.forEach((s, i) => {
        sphereRotationsRef.current[i] += s.params.rotationSpeed || 0;

        const glowAlpha = s.params.glowEnabled ? lerp(s.params.glowAlphaRange[0], s.params.glowAlphaRange[1], (Math.sin(time * s.params.glowSpeed) + 1) / 2) : 0;
        const ringAlpha = lerp(s.params.ringAlphaRange[0], s.params.ringAlphaRange[1], (Math.sin(time * s.params.ringSpeed) + 1) / 2);

        drawSphere(ctx, s.x(), s.y(), s.params.baseColor, glowAlpha, ringAlpha, sphereRotationsRef.current[i]);

        if (s.params.particlesAlpha > 0) {
          for (let j = 0; j < 3; j++) {
            particles.push(new Particle(s.x(), s.y(), `rgba(${s.params.baseColor[0]},${s.params.baseColor[1]},${s.params.baseColor[2]},0.5)`, s.params.particlesAlpha));
          }
        }
      });

      particles.forEach((p) => p.update());
      particles.forEach((p) => p.draw(ctx));
      particles = particles.filter((p) => p.life > 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      } else if (entry.isIntersecting && !animationId) {
        animate();
      }
    }, { threshold: 0.1 });

    observer.observe(container);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [spheresParams, containerParams, sphereRadius, spacing]);

  return (
    <div ref={containerRef} className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="block w-full h-full" aria-label="Tantiens animation" />
    </div>
  );
};

export default VesicaPiscisChakra;
