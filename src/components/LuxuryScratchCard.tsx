import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CornerFiligree } from './Ornament';
import { PREMIUM_EASE } from '../utils/motion';

interface LuxuryScratchCardProps {
  dayName?: string;
  dayNumber?: string;
  monthYear?: string;
  time?: string;
  venueName?: string;
  className?: string;
  onRevealComplete?: () => void;
}

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export const LuxuryScratchCard: React.FC<LuxuryScratchCardProps> = ({
  dayName = 'FRIDAY',
  dayNumber = '27',
  monthYear = 'NOVEMBER 2026',
  time = '07:30 PM',
  venueName = '(Batul Hall)',
  className = '',
  onRevealComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [isMousePointer, setIsMousePointer] = useState(false);
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);

  const isScratchedRef = useRef(false);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const particleIdRef = useRef(0);
  const checkTimeoutRef = useRef<number | null>(null);
  const totalScratchedDistanceRef = useRef(0);

  // Check reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Keep ref in sync
  useEffect(() => {
    isScratchedRef.current = isScratched;
  }, [isScratched]);

  // Full celebratory reveal function
  const handleFullReveal = useCallback(() => {
    if (isScratchedRef.current) return;
    setIsScratched(true);
    isScratchedRef.current = true;

    // Trigger champagne gold luxury confetti burst
    if (!prefersReducedMotion) {
      confetti({
        particleCount: 52,
        spread: 68,
        origin: { y: 0.62 },
        colors: ['#D4AF37', '#E5C158', '#FAF5EC', '#B89A68', '#8D7047'],
        ticks: 220,
        gravity: 0.85,
        scalar: 0.95,
        disableForReducedMotion: true
      });
    }

    if (onRevealComplete) {
      onRevealComplete();
    }
  }, [onRevealComplete, prefersReducedMotion]);

  // Draw the exact bespoke luxury wedding stationery card surface onto the canvas
  const drawCardSurface = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Do not repaint if already scratched
    if (isScratchedRef.current || totalScratchedDistanceRef.current > 0) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 146;
    const dpr = Math.min(window.devicePixelRatio || 2, 3);

    // Set backing store dimensions according to DPR for razor-sharp rendering
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.scale(dpr, dpr);

    // Reset composite operation to normal
    ctx.globalCompositeOperation = 'source-over';

    // 1. BASE WARM IVORY & PEARL PARCHMENT GRADIENT
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#FFFDF9');
    bgGrad.addColorStop(0.45, '#FAF4E8');
    bgGrad.addColorStop(1, '#F5E8D7');

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle paper grain warmth & top satin highlight
    const topHighlight = ctx.createLinearGradient(0, 0, width, 0);
    topHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    topHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');
    topHighlight.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
    ctx.fillStyle = topHighlight;
    ctx.fillRect(0, 0, width, 1.5);

    // 2. INSET GOLD HAIRLINE STATIONERY BORDER WITH MATCHING ROUNDED CORNERS
    const inset = 7.5;
    const innerW = width - inset * 2;
    const innerH = height - inset * 2;
    const innerR = 12;

    ctx.strokeStyle = 'rgba(184, 154, 104, 0.35)';
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(inset, inset, innerW, innerH, innerR);
    } else {
      ctx.rect(inset, inset, innerW, innerH);
    }
    ctx.stroke();

    // 3. SYMMETRICAL REFINED CORNER ORNAMENTS (4 CORNERS)
    const drawCornerAccent = (cx: number, cy: number, rotAngle: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotAngle);
      ctx.strokeStyle = 'rgba(184, 154, 104, 0.55)';
      ctx.fillStyle = 'rgba(184, 154, 104, 0.75)';
      ctx.lineWidth = 0.8;

      // Delicate corner quadrant curve
      ctx.beginPath();
      ctx.moveTo(0, 11);
      ctx.bezierCurveTo(2.5, 4.5, 4.5, 2.5, 11, 0);
      ctx.stroke();

      // Subtle diagonal ray towards center with jewel dot
      ctx.beginPath();
      ctx.moveTo(3.5, 3.5);
      ctx.lineTo(7, 7);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(8.5, 8.5, 1.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    drawCornerAccent(inset + 3, inset + 3, 0); // top-left
    drawCornerAccent(width - inset - 3, inset + 3, Math.PI / 2); // top-right
    drawCornerAccent(width - inset - 3, height - inset - 3, Math.PI); // bottom-right
    drawCornerAccent(inset + 3, height - inset - 3, -Math.PI / 2); // bottom-left

    // 4. CENTER CIRCULAR GOLD EMBLEM & DAWOODI BOHRA 8-POINT STAR
    const centerX = width / 2;
    const sealY = Math.round(height * 0.32);
    const sealRadius = 18.5; // 37px diameter for harmonious visual balance

    // Soft drop shadow under seal
    ctx.save();
    ctx.shadowColor = 'rgba(100, 75, 40, 0.12)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 1.5;

    // 1px Gold gradient outer rim
    const rimGrad = ctx.createLinearGradient(
      centerX - sealRadius,
      sealY - sealRadius,
      centerX + sealRadius,
      sealY + sealRadius
    );
    rimGrad.addColorStop(0, '#B89A68');
    rimGrad.addColorStop(0.35, '#FFF2D6');
    rimGrad.addColorStop(0.7, '#D4AF37');
    rimGrad.addColorStop(1, '#8D7047');

    ctx.beginPath();
    ctx.arc(centerX, sealY, sealRadius, 0, Math.PI * 2);
    ctx.fillStyle = rimGrad;
    ctx.fill();
    ctx.restore();

    // Inner warm ivory medallion face
    ctx.beginPath();
    ctx.arc(centerX, sealY, sealRadius - 1.1, 0, Math.PI * 2);
    ctx.fillStyle = '#FAF5EC';
    ctx.fill();

    // Inner concentric guide ring
    ctx.beginPath();
    ctx.arc(centerX, sealY, sealRadius - 2.8, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(184, 154, 104, 0.35)';
    ctx.lineWidth = 0.6;
    ctx.stroke();

    // Dawoodi Bohra 8-Point Star in Center
    ctx.save();
    ctx.translate(centerX, sealY);
    ctx.strokeStyle = '#6D522B';
    ctx.fillStyle = '#6D522B';

    // Outer 8-point geometric star: Square 1
    const s = 6.2;
    ctx.lineWidth = 0.95;
    ctx.beginPath();
    ctx.rect(-s, -s, s * 2, s * 2);
    ctx.stroke();

    // Outer 8-point geometric star: Square 2 rotated 45 deg
    ctx.save();
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.rect(-s, -s, s * 2, s * 2);
    ctx.stroke();
    ctx.restore();

    // Inner delicate circle ring
    ctx.beginPath();
    ctx.arc(0, 0, 3.2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(109, 82, 43, 0.7)';
    ctx.lineWidth = 0.7;
    ctx.stroke();

    // Center focal jewel dot
    ctx.beginPath();
    ctx.arc(0, 0, 1.25, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 5. MAIN HEADING: "OUR WEDDING DATE"
    const textY = sealY + sealRadius + 16.5;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 11.5px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#4A381E';
    if ('letterSpacing' in ctx) {
      ctx.letterSpacing = '0.28em';
    }
    ctx.fillText('OUR WEDDING DATE', centerX, textY);
    ctx.restore();

    // 6. EDITORIAL CTA PILL BADGE: "✦ SCRATCH TO REVEAL ✦"
    const pillW = 154;
    const pillH = 20.5;
    const pillX = centerX - pillW / 2;
    const pillY = textY + 12;
    const pillR = pillH / 2;

    ctx.save();
    // Pill background fill
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(pillX, pillY, pillW, pillH, pillR);
    } else {
      ctx.rect(pillX, pillY, pillW, pillH);
    }
    ctx.fillStyle = 'rgba(247, 241, 232, 0.82)';
    ctx.fill();

    // Pill fine champagne border
    ctx.strokeStyle = 'rgba(184, 154, 104, 0.42)';
    ctx.lineWidth = 0.75;
    ctx.stroke();

    // Pill text in Cormorant Garamond luxury serif
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 9.5px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#6D522B';
    if ('letterSpacing' in ctx) {
      ctx.letterSpacing = '0.22em';
    }
    ctx.fillText('✦  SCRATCH TO REVEAL  ✦', centerX, pillY + pillH / 2 + 0.5);

    ctx.restore();

    ctx.restore();
  }, []);

  // Initialize canvas on mount, font ready, and dynamically respond to resize without resetting progress
  useEffect(() => {
    let isMounted = true;
    const initDraw = () => {
      if (isMounted && !isScratchedRef.current && totalScratchedDistanceRef.current === 0) {
        drawCardSurface();
      }
    };

    initDraw();

    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(initDraw);
      document.fonts.load('600 12px "Cormorant Garamond"').then(initDraw).catch(() => {});
    }

    const timer1 = setTimeout(initDraw, 150);
    const timer2 = setTimeout(initDraw, 400);

    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      if (!isScratchedRef.current && totalScratchedDistanceRef.current === 0) {
        drawCardSurface();
      }
    });

    ro.observe(container);
    return () => {
      isMounted = false;
      clearTimeout(timer1);
      clearTimeout(timer2);
      ro.disconnect();
    };
  }, [drawCardSurface]);

  // High-performance asynchronous scratch percentage calculator with weighted central area
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isScratchedRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const width = canvas.width;
      const height = canvas.height;
      const sampleStep = 18;
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      let totalTransparent = 0;
      let totalSampled = 0;

      // Central active region where the user naturally scratches
      const centerXMin = width * 0.15;
      const centerXMax = width * 0.85;
      const centerYMin = height * 0.15;
      const centerYMax = height * 0.85;
      let centerTransparent = 0;
      let centerSampled = 0;

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          const isTransparent = alpha < 64;

          if (isTransparent) totalTransparent++;
          totalSampled++;

          if (x >= centerXMin && x <= centerXMax && y >= centerYMin && y <= centerYMax) {
            if (isTransparent) centerTransparent++;
            centerSampled++;
          }
        }
      }

      const overallPercent = totalSampled > 0 ? (totalTransparent / totalSampled) * 100 : 0;
      const centerPercent = centerSampled > 0 ? (centerTransparent / centerSampled) * 100 : 0;

      // Satisfying completion threshold: either 28% of entire card, or 36% of central date zone,
      // or substantial drag distance with at least 18% uncovered
      const shouldReveal =
        overallPercent >= 28 ||
        centerPercent >= 36 ||
        (totalScratchedDistanceRef.current > 650 && overallPercent >= 18);

      if (shouldReveal && !isScratchedRef.current) {
        handleFullReveal();
      }
    } catch {
      // Ignore cross-origin error if any
    }
  }, [handleFullReveal]);

  // Debounced scratch checking during continuous dragging
  const scheduleScratchCheck = useCallback(() => {
    if (checkTimeoutRef.current !== null) return;
    checkTimeoutRef.current = window.setTimeout(() => {
      checkTimeoutRef.current = null;
      checkScratchPercentage();
    }, 280);
  }, [checkScratchPercentage]);

  // Spawn flying gold foil dust particles on scratch
  const spawnSparkles = (x: number, y: number) => {
    if (prefersReducedMotion) return;

    const colors = ['#FFF3D6', '#EAD8BA', '#D4AF37', '#B89A68', '#FAF5EC'];
    const newSparkles: SparkleParticle[] = [];

    for (let i = 0; i < 2; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.0 + Math.random() * 2.0;
      particleIdRef.current++;
      newSparkles.push({
        id: particleIdRef.current,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.0,
        size: 2 + Math.random() * 2.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1
      });
    }

    setSparkles(prev => [...prev.slice(-12), ...newSparkles]);
  };

  // Sparkles animation loop
  useEffect(() => {
    if (sparkles.length === 0) return;

    const timer = requestAnimationFrame(() => {
      setSparkles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15,
            alpha: p.alpha - 0.06
          }))
          .filter(p => p.alpha > 0)
      );
    });

    return () => cancelAnimationFrame(timer);
  }, [sparkles]);

  // Hardware-accelerated, buttery smooth scratch stroke
  const scratch = (currentPoint: { x: number; y: number }) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 2, 3);
    const lastPoint = lastPointRef.current || currentPoint;

    const dx = currentPoint.x - lastPoint.x;
    const dy = currentPoint.y - lastPoint.y;
    const dist = Math.hypot(dx, dy);
    totalScratchedDistanceRef.current += dist;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 44; // Comfortable, luxurious scratch stroke width

    if (dist < 1) {
      // Single tap / click: crisp circular erase
      ctx.beginPath();
      ctx.arc(currentPoint.x, currentPoint.y, 22, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Fluid stroke path between pointer waypoints
      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);
      ctx.stroke();
    }

    ctx.restore();

    lastPointRef.current = currentPoint;

    // Spawn subtle gold dust particles
    spawnSparkles(currentPoint.x, currentPoint.y);

    // Schedule debounced progress verification
    scheduleScratchCheck();
  };

  // Convert client coordinates to canvas internal coordinates accurately
  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = (container.clientWidth || rect.width) / rect.width;
    const scaleY = (container.clientHeight || rect.height) / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  // Pointer event handlers with high-frequency coalesced event support
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isScratchedRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    e.preventDefault();
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    isDrawingRef.current = true;
    setIsScratching(true);
    const isMouse = e.pointerType === 'mouse' || e.pointerType === 'pen';
    setIsMousePointer(isMouse);

    const point = getCanvasPoint(e);
    lastPointRef.current = point;
    if (isMouse) {
      setCursorPos(point);
    }
    scratch(point);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMouse = e.pointerType === 'mouse' || e.pointerType === 'pen';
    setIsMousePointer(isMouse);
    const point = getCanvasPoint(e);

    if (isMouse) {
      setCursorPos(point);
    }

    if (!isDrawingRef.current || isScratchedRef.current) return;
    e.preventDefault();

    // High-frequency coalesced events support for high refresh rate screens
    const nativeEvent = e.nativeEvent as PointerEvent;
    if (typeof nativeEvent.getCoalescedEvents === 'function') {
      const coalescedEvents = nativeEvent.getCoalescedEvents();
      if (coalescedEvents.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const container = containerRef.current;
        const scaleX = (container?.clientWidth || rect.width) / rect.width;
        const scaleY = (container?.clientHeight || rect.height) / rect.height;

        for (const ce of coalescedEvents) {
          const p = {
            x: (ce.clientX - rect.left) * scaleX,
            y: (ce.clientY - rect.top) * scaleY
          };
          scratch(p);
        }
        return;
      }
    }

    scratch(point);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = false;
    setIsScratching(false);
    lastPointRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Pointer might not be captured
    }
    checkScratchPercentage();
  };

  const handlePointerLeave = () => {
    if (!isDrawingRef.current) {
      setCursorPos(null);
    }
  };

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label="Interactive scratch card to reveal wedding date. Press Enter or Space to reveal."
      aria-expanded={isScratched}
      onKeyDown={e => {
        if (!isScratched && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleFullReveal();
        }
      }}
      className={`relative flex flex-col items-center justify-center my-3 select-none w-full max-w-[340px] sm:max-w-[380px] mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A68]/60 rounded-2xl ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Screen Reader Accessible Announcement */}
      <span className="sr-only">
        Wedding Date: {dayName}, {dayNumber} {monthYear} at {time}, {venueName}.
      </span>

      {/* Scratch Card Outer Wrapper with Luxury Wedding Stationery Finish */}
      <div
        ref={containerRef}
        className="relative w-full h-[142px] sm:h-[150px] rounded-2xl overflow-hidden shadow-[0_10px_30px_-6px_rgba(90,68,38,0.13),0_3px_10px_-2px_rgba(90,68,38,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5E8D7] border border-[#B89A68]/40 p-0 transform-gpu transition-all duration-300"
        style={{ touchAction: 'none' }}
      >
        {/* ========================================================= */}
        {/* LAYER 1: UNDERNEATH REVEALED TWO-COLUMN EDITORIAL CARD    */}
        {/* ========================================================= */}
        <div className="absolute inset-0 px-4 py-3 sm:px-6 sm:py-3.5 text-center flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5E8D7]">
          {/* Inner hairline frame matching the unopened stationery design */}
          <div className="absolute inset-2 sm:inset-2.5 rounded-[12px] border border-[#B89A68]/30 pointer-events-none" />

          {/* Corner Filigrees in 4 Corners */}
          <CornerFiligree position="top-left" className="top-2 left-2 !w-4 !h-4 text-[#B89A68]/45" />
          <CornerFiligree position="top-right" className="top-2 right-2 !w-4 !h-4 text-[#B89A68]/45" />
          <CornerFiligree position="bottom-left" className="bottom-2 left-2 !w-4 !h-4 text-[#B89A68]/45" />
          <CornerFiligree position="bottom-right" className="bottom-2 right-2 !w-4 !h-4 text-[#B89A68]/45" />

          {/* Top Delicate Ceremonial Inscription Header */}
          <div className="flex items-center gap-2 mb-1 mt-4 lg-mt-0 text-[#8D7047] opacity-80">
            <span className="h-[0.5px] w-7 bg-gradient-to-r from-transparent to-[#B89A68]" />
            <span className="text-[7px]">✦</span>
            <span className="font-serif-luxury text-[9px] sm:text-[9.5px] font-semibold tracking-[0.26em] uppercase text-[#7A5C32]">
              SAVE THE DATE
            </span>
            <span className="text-[7px]">✦</span>
            <span className="h-[0.5px] w-7 bg-gradient-to-l from-transparent to-[#B89A68]" />
          </div>

          {/* TWO-COLUMN EDITORIAL DATE & TIME GRID */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 w-full my-0.5">
            {/* Left Column: Date */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif-luxury text-[10.5px] sm:text-[11px] font-bold tracking-[0.26em] uppercase text-[#6D522B]">
                {dayName}
              </span>
              <span className="font-arabic-luxury text-3xl sm:text-4xl font-semibold text-[#4A381E] leading-none tracking-tight drop-shadow-xs ">
                {dayNumber}
              </span>
              <span className="font-serif-luxury text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#6D522B] whitespace-nowrap">
                {monthYear}
              </span>
            </div>

            {/* Elegant Vertical Divider Line with Star Center Node */}
            <div className="relative h-12 sm:h-14 w-[1px] bg-gradient-to-b from-transparent via-[#B89A68]/70 to-transparent flex items-center justify-center">
              <div className="w-1.5 h-1.5 rotate-45 border border-[#B89A68]/80 bg-[#FAF5EC]" />
            </div>

            {/* Right Column: Time */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif-luxury text-[10px] sm:text-[11px] font-bold tracking-[0.26em] uppercase text-[#6D522B]">
                AT
              </span>
              <span className="font-arabic-luxury text-xl sm:text-2xl font-semibold text-[#4A381E] leading-none my-0.5 tracking-tight drop-shadow-xs whitespace-nowrap">
                {time}
              </span>
              <span className="font-serif-luxury text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8D7047] whitespace-nowrap">
                {venueName}
              </span>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="flex items-center gap-1.5 mt-1 text-[#8D7047] opacity-80">
            <span className="h-[0.5px] w-8 bg-gradient-to-r from-transparent to-[#B89A68]" />
            <span className="text-[6px]">◆</span>
            <span className="h-[0.5px] w-8 bg-gradient-to-l from-transparent to-[#B89A68]" />
          </div>

          {/* Celebratory revealed radiance sweep */}
          {isScratched && !prefersReducedMotion && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 2.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
            />
          )}
        </div>

        {/* ========================================================= */}
        {/* LAYER 2: INTERACTIVE SCRATCHABLE CARD SURFACE (CANVAS)    */}
        {/* ========================================================= */}
        <motion.canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          animate={{
            opacity: isScratched ? 0 : 1,
            pointerEvents: isScratched ? 'none' : 'auto'
          }}
          transition={{ duration: 0.65, ease: PREMIUM_EASE }}
          className={`absolute inset-0 w-full h-full block touch-none z-10 rounded-2xl ${
            !isScratched ? (isMousePointer ? 'cursor-none' : 'cursor-pointer') : 'pointer-events-none'
          }`}
          style={{ touchAction: 'none' }}
          aria-hidden={isScratched}
        />

        {/* Gentle Metallic Shimmer Sweep Across Unopened Card */}
        {!isScratched && !prefersReducedMotion && (
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', repeatDelay: 1 }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none z-20"
          />
        )}

        {/* ========================================================= */}
        {/* LAYER 3: FLYING GOLD DUST FOIL PARTICLES                  */}
        {/* ========================================================= */}
        {sparkles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none z-30 shadow-xs"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.alpha,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        {/* ========================================================= */}
        {/* LAYER 4: LUXURY GOLD COIN CURSOR TOOL (DESKTOP MOUSE ONLY)*/}
        {/* ========================================================= */}
        <AnimatePresence>
          {cursorPos && isMousePointer && !isScratched && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isScratching ? 0.92 : 1,
                rotate: isScratching ? -22 : 0,
                opacity: 1
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`
              }}
            >
              {/* Bespoke 3D Gold Scratching Coin */}
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#D4B37F] to-[#7A5B32] p-[1.5px] shadow-[0_4px_12px_rgba(70,50,20,0.35)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#9B7C47] via-[#E8D4B0] to-[#FAF3E8] border border-[#8C6A32]/60 flex items-center justify-center shadow-inner">
                  <div className="text-[8.5px] text-[#553E1E] font-serif font-black tracking-tighter">
                    ✦
                  </div>
                </div>
                {/* Coin edge ridge simulation */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#FFF3D6]/40 pointer-events-none" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
