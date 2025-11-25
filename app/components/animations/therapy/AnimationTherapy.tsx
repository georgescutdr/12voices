"use client";
import { useEffect, useRef } from "react";

export default function AnimationTherapy() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null); // keep track of requestAnimationFrame
  const isVisible = useRef(false);  // visibility flag

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Function to match the canvas size to the displayed size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      return { width: rect.width, height: rect.height };
    };

    let { width, height } = resizeCanvas();

    // Glow + fade configuration
    let glowPulse = 0;
    let glowDirection = 1;

    const waves = [
      { amplitude: 30, length: 0.008, speed: 0.01, color: "0,180,255" },
      { amplitude: 20, length: 0.012, speed: 0.02, color: "0,150,255" },
      { amplitude: 40, length: 0.006, speed: 0.015, color: "0,210,255" }
    ];

    let offset = 0;

    const draw = () => {
      if (!isVisible.current) return; // ✅ STOP animation when not visible

      ctx.clearRect(0, 0, width, height);

      glowPulse += glowDirection * 0.02;
      if (glowPulse > 1 || glowPulse < 0) glowDirection *= -1;

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            Math.sin(x * wave.length + offset * wave.speed) *
              wave.amplitude *
              Math.sin(x * 0.003 + offset * 0.02);

          ctx.lineTo(x, y);
        }

        ctx.shadowBlur = 20 + glowPulse * 20;
        ctx.shadowColor = `rgba(${wave.color}, ${0.3 + glowPulse * 0.4})`;

        ctx.strokeStyle = `rgba(${wave.color}, ${0.4 + glowPulse * 0.5})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      });

      offset += 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    // ✅ IntersectionObserver to detect visibility
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isVisible.current = true;
          draw(); // start animation
        } else {
          isVisible.current = false;
          cancelAnimationFrame(animationRef.current); // stop animation
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    const handleResize = () => {
      const size = resizeCanvas();
      width = size.width;
      height = size.height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "200px",
        display: "block",
      }}
    />
  );
}
