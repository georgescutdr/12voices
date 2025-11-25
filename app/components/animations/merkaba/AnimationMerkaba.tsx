'use client';

import React, { useEffect, useRef } from 'react';

const AnimationMerkaba: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let W = 0;
    let H = 0;
    let centerX = 0;
    let centerY = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      W = rect.width;
      H = rect.height;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      centerX = W / 2;
      centerY = H / 2;
    };

    resize();
    window.addEventListener('resize', resize);

    const rotateY = (point: any, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: point.x * cos + point.z * sin,
        y: point.y,
        z: -point.x * sin + point.z * cos,
      };
    };

    const focalLength = 400;
    const project = (point: any) => {
      const scale = focalLength / (focalLength + point.z);
      return {
        x: centerX + point.x * scale,
        y: centerY - point.y * scale,
        scale,
      };
    };

    const whiteTetra = [
      { x: 0, y: 100, z: 0 },
      { x: 115, y: -60, z: 66 },
      { x: -115, y: -60, z: 66 },
      { x: 0, y: -60, z: -133 },
    ];
    const blackTetra = whiteTetra.map(v => ({ x: v.x, y: -v.y, z: v.z }));

    const faces = [
      [0, 1, 2],
      [0, 2, 3],
      [0, 3, 1],
      [1, 3, 2],
    ];

    const lightDir = { x: 0, y: 1, z: 0 };

    const faceLight = (pts: any[]) => {
      const U = {
        x: pts[1].x - pts[0].x,
        y: pts[1].y - pts[0].y,
        z: pts[1].z - pts[0].z,
      };
      const V = {
        x: pts[2].x - pts[0].x,
        y: pts[2].y - pts[0].y,
        z: pts[2].z - pts[0].z,
      };
      const Nx = U.y * V.z - U.z * V.y;
      const Ny = U.z * V.x - U.x * V.z;
      const Nz = U.x * V.y - U.y * V.x;
      const length = Math.sqrt(Nx * Nx + Ny * Ny + Nz * Nz);
      if (length === 0) return 0;
      const normal = { x: Nx / length, y: Ny / length, z: Nz / length };
      const dot =
        normal.x * lightDir.x +
        normal.y * lightDir.y +
        normal.z * lightDir.z;
      return Math.max(0, dot);
    };

    const shadeColor = (color: string, intensity: number) => {
      const m = color.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]*)?\)/
      );
      if (!m) return color;
      const [r, g, b, a] = [
        Math.min(255, Math.floor(Number(m[1]) * intensity)),
        Math.min(255, Math.floor(Number(m[2]) * intensity)),
        Math.min(255, Math.floor(Number(m[3]) * intensity)),
        m[4] === undefined || m[4] === '' ? 1 : parseFloat(m[4]),
      ];
      return `rgba(${r},${g},${b},${a})`;
    };

    const drawTetrahedron = (
      vertices3D: any[],
      baseColor: string,
      glowColor: string,
      globalAlpha = 1
    ) => {
      const projected = vertices3D.map(project);
      const sortedFaces = faces.slice().sort((a, b) => {
        const zA =
          (vertices3D[a[0]].z +
            vertices3D[a[1]].z +
            vertices3D[a[2]].z) / 3;
        const zB =
          (vertices3D[b[0]].z +
            vertices3D[b[1]].z +
            vertices3D[b[2]].z) / 3;
        return zB - zA;
      });

      ctx.globalAlpha = globalAlpha;
      sortedFaces.forEach(face => {
        const pts3D = face.map(i => vertices3D[i]);
        const lightIntensity = faceLight(pts3D);
        ctx.fillStyle = shadeColor(
          baseColor,
          lightIntensity * 0.8 + 0.2
        );
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 15 * lightIntensity;
        ctx.beginPath();
        const pts2D = face.map(i => projected[i]);
        ctx.moveTo(pts2D[0].x, pts2D[0].y);
        ctx.lineTo(pts2D[1].x, pts2D[1].y);
        ctx.lineTo(pts2D[2].x, pts2D[2].y);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 2;
      faces.forEach(face => {
        ctx.beginPath();
        const p0 = projected[face[0]];
        ctx.moveTo(p0.x, p0.y);
        for (let i = 1; i < 3; i++) {
          const p = projected[face[i]];
          ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    };

    // Speed controls
    const slowDuration = 5000;
    const fastDuration = 4000;
    const transitionDuration = 2000;
    const slowSpeedWhite = 0.05;
    const fastSpeedWhite = 3.0;
    const slowSpeedBlack = -0.05;
    const fastSpeedBlack = -3.0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const getCyclePhaseAndT = (elapsed: number) => {
      const total = slowDuration + fastDuration + 2 * transitionDuration;
      const mod = elapsed % total;
      if (mod < slowDuration) return [0, 0];
      if (mod < slowDuration + transitionDuration)
        return [1, (mod - slowDuration) / transitionDuration];
      if (mod < slowDuration + transitionDuration + fastDuration)
        return [2, 0];
      return [
        3,
        (mod - slowDuration - transitionDuration - fastDuration) /
          transitionDuration,
      ];
    };

    let angleWhite = 0;
    let angleBlack = 0;
    let startTime = performance.now();
    let isVisible = true;
    let animationId: number | null = null;

    const animate = () => {
      if (!isVisible) return;

      const now = performance.now();
      const elapsed = now - startTime;

      const [phase, t] = getCyclePhaseAndT(elapsed);

      let speedWhite, speedBlack;
      switch (phase) {
        case 0:
          speedWhite = slowSpeedWhite;
          speedBlack = slowSpeedBlack;
          break;
        case 1:
          speedWhite = lerp(slowSpeedWhite, fastSpeedWhite, t);
          speedBlack = lerp(slowSpeedBlack, fastSpeedBlack, t);
          break;
        case 2:
          speedWhite = fastSpeedWhite;
          speedBlack = fastSpeedBlack;
          break;
        case 3:
          speedWhite = lerp(fastSpeedWhite, slowSpeedWhite, t);
          speedBlack = lerp(fastSpeedBlack, slowSpeedBlack, t);
          break;
      }

      angleWhite += speedWhite;
      angleBlack += speedBlack;

      ctx.clearRect(0, 0, W, H);

      const rotatedWhite = whiteTetra.map(v => rotateY(v, angleWhite));
      const rotatedBlack = blackTetra.map(v => rotateY(v, angleBlack));

      drawTetrahedron(
        rotatedBlack,
        'rgba(20,20,20,1)',
        'rgba(80,80,80,0.8)'
      );
      drawTetrahedron(
        rotatedWhite,
        'rgba(255,255,255,1)',
        'rgba(200,255,255,0.9)',
        0.5
      );

      animationId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationId) animate();
        if (!isVisible && animationId) {
          cancelAnimationFrame(animationId);
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
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        position: 'relative',
        backgroundColor: '#000000',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default AnimationMerkaba;
