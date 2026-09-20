import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swaySpeed: number;
  swayAmount: number;
  swayOffset: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  color1: string;
  color2: string;
  color3: string;
  hasGoldEdge: boolean;
}

interface GoldParticle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speedY: number;
  speedX: number;
  pulse: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Premium Royal Rose Petal Color Palette (Velvet Maroon, Royal Crimson, Rose Gold, Blush)
    const petalPalettes = [
      { c1: '#8B1E2D', c2: '#68121E', c3: '#4A0B14' }, // Deep Velvet Maroon
      { c1: '#AC283B', c2: '#8B1E2D', c3: '#5C101C' }, // Crimson Rose
      { c1: '#C53D50', c2: '#9E2B3C', c3: '#6E1B28' }, // Vibrant Royal Rose
      { c1: '#D47285', c2: '#B85265', c3: '#853243' }, // Soft Rose Gold
      { c1: '#C49A6C', c2: '#A37C4D', c3: '#6E4E28' }, // Royal Champagne Gold Accent Petal
    ];

    // Petal density balanced for elegance & performance
    const petalCount = Math.min(Math.floor(width / 35), 38);
    const petals: Petal[] = Array.from({ length: petalCount }, () => {
      const palette = petalPalettes[Math.floor(Math.random() * petalPalettes.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 7 + 7, // 7px to 14px size
        speedY: Math.random() * 0.7 + 0.35,
        speedX: (Math.random() - 0.5) * 0.3,
        swaySpeed: Math.random() * 0.02 + 0.008,
        swayAmount: Math.random() * 1.6 + 0.5,
        swayOffset: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: Math.random() * 0.025 + 0.01,
        opacity: Math.random() * 0.4 + 0.4,
        color1: palette.c1,
        color2: palette.c2,
        color3: palette.c3,
        hasGoldEdge: Math.random() > 0.65,
      };
    });

    // Floating Gold Dust Particles
    const goldParticleCount = Math.min(Math.floor(width / 45), 28);
    const goldParticles: GoldParticle[] = Array.from({ length: goldParticleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.15,
      speedY: -(Math.random() * 0.25 + 0.08),
      speedX: (Math.random() - 0.5) * 0.12,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Ambient Gold Dust Particles
      goldParticles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.003;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 154, 104, ${Math.max(0.08, Math.min(0.55, p.alpha))})`;
        ctx.fill();
      });

      // 2. Render Falling 3D Fluttering Rose Petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.swayOffset += p.swaySpeed;
        p.x += Math.sin(p.swayOffset) * p.swayAmount + p.speedX;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Reset petal if fallen off screen bottom
        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        // Save canvas transformation state
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Realistic 3D flip effect on horizontal axis
        const scaleX = Math.cos(p.flip);
        ctx.scale(scaleX, 1);

        // Linear Gradient for Organic Petal Depth & Shading
        const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
        grad.addColorStop(0, p.color1);
        grad.addColorStop(0.5, p.color2);
        grad.addColorStop(1, p.color3);

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = grad;

        // Natural Curvature Organic Rose Petal Geometry
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.6, p.size * 0.9, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.5, -p.size * 0.85, -p.size * 0.6, 0, -p.size);
        ctx.closePath();
        ctx.fill();

        // Subtle Rose Petal Central Vein / Highlight Line
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.7);
        ctx.quadraticCurveTo(p.size * 0.1, 0, 0, p.size * 0.65);
        ctx.strokeStyle = `rgba(255, 235, 210, ${0.28 * p.opacity})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();

        // Optional Gold Dust Shimmer Edge Accent
        if (p.hasGoldEdge) {
          ctx.beginPath();
          ctx.arc(0, -p.size * 0.8, p.size * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(216, 190, 148, ${0.45 * p.opacity})`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[35] opacity-85"
    />
  );
};
