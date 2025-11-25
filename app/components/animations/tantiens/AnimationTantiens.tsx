'use client';

import React, { useEffect, useRef } from 'react';

type RGB = [number, number, number];

interface SphereParams {
  baseColor: RGB;
  glowAlphaRange: [number, number]; // min/max glow alpha
  ringAlphaRange: [number, number]; // min/max ring alpha
  glowSpeed: number; // speed multiplier for glow alpha change
  ringSpeed: number; // speed multiplier for ring alpha change
  glowEnabled: boolean; // if false, glow alpha forced to 0
  particlesAlpha: number; // alpha for particles (0 disables particles)
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
    baseColor: [138, 43, 226], // Violet
    glowAlphaRange: [0.2, 0.6],
    ringAlphaRange: [0.2, 0.5],
    glowSpeed: 4,
    ringSpeed: 3,
    glowEnabled: true,
    particlesAlpha: 0.5,
  },
  {
    baseColor: [255, 255, 255], // White
    glowAlphaRange: [0.2, 0.6],
    ringAlphaRange: [0.2, 0.5],
    glowSpeed: 5,
    ringSpeed: 4,
    glowEnabled: true,
    particlesAlpha: 0.5,
  },
  {
    baseColor: [0, 255, 180], // Teal
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

    spacing = spacing ?? sphereRadius; // default spacing equals radius

    const containerRadius = spacing + sphereRadius;

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
      y: () => centerY() + (i - 1) * spacing,
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
        this.color = color.replace(/[^,]+(?=\))/, alpha.toString()); // replace alpha in rgba string
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

    function lerp(min: number, max: number, t: number) {
      return min + (max - min) * t;
    }

    function drawSphere(
      x: number,
      y: number,
      baseRGB: RGB,
      glowAlpha: number,
      ringAlpha: number
    ) {
      if (glowAlpha > 0) {
        // Glow
        const glowColor = `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${glowAlpha})`;
        const grad = ctx.createRadialGradient(x, y, 10, x, y, sphereRadius);
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 60;
        ctx.arc(x, y, sphereRadius, 0, 2 * Math.PI);
        ctx.fill();
      }

      if (ringAlpha > 0) {
        // Ring
        const ringColor = `rgba(${baseRGB[0]},${baseRGB[1]},${baseRGB[2]},${ringAlpha})`;
        ctx.beginPath();
        ctx.strokeStyle = ringColor;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 0;
        ctx.arc(x, y, sphereRadius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }

    function drawContainerCircle(alpha: number, color: RGB) {
      const x = centerX();
      const y = centerY();
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      ctx.arc(x, y, containerRadius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      time += 0.02; // faster time increment for speed

      // Animate container circle alpha with speed and range
      const containerAlphaT = (Math.sin(time * containerParams.speed) + 1) / 2;
      const containerAlpha = lerp(
        containerParams.alphaRange[0],
        containerParams.alphaRange[1],
        containerAlphaT
      );

      // Animate container color shift (simple hue shift on blue channel)
      const hueShift = Math.floor(
        100 + 155 * Math.abs(Math.sin(time * containerParams.speed * 0.3))
      );
      const containerColor: RGB = [
        containerParams.baseColor[0],
        containerParams.baseColor[1],
        hueShift,
      ];

      drawContainerCircle(containerAlpha, containerColor);

      spheres.forEach(({ x, y, params }) => {
        const cx = x();
        const cy = y();

        // Animate glow alpha for sphere
        const glowT = (Math.sin(time * params.glowSpeed) + 1) / 2;
        const glowAlphaRaw = lerp(
          params.glowAlphaRange[0],
          params.glowAlphaRange[1],
          glowT
        );
        const glowAlpha = params.glowEnabled ? glowAlphaRaw : 0;

        // Animate ring alpha for sphere
        const ringT = (Math.sin(time * params.ringSpeed + 1) + 1) / 2;
        const ringAlpha = lerp(
          params.ringAlphaRange[0],
          params.ringAlphaRange[1],
          ringT
        );

        drawSphere(cx, cy, params.baseColor, glowAlpha, ringAlpha);

        // Add particles if particlesAlpha > 0
        if (params.particlesAlpha > 0) {
          for (let i = 0; i < 3; i++) {
            const particleColor = `rgba(${params.baseColor[0]},${params.baseColor[1]},${params.baseColor[2]},0.5)`;
            particles.push(new Particle(cx, cy, particleColor, params.particlesAlpha));
          }
        }
      });

      particles.forEach((p) => p.update());
      particles.forEach((p) => p.draw(ctx));

      // Remove dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      animationId = requestAnimationFrame(animate);
    }

    function resize() {
      W = container.clientWidth;
      H = container.clientHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);

    // Intersection Observer to pause animation when out of viewport
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && animationId === null) {
          animate();
        } else if (!isVisible && animationId !== null) {
          if (animationId) cancelAnimationFrame(animationId);
          animationId = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [spheresParams, containerParams, sphereRadius, spacing]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-black overflow-hidden relative"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-label="Tantiens animation"
      />
    </div>
  );
};

export default VesicaPiscisChakra;
