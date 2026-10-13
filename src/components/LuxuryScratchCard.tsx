import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CornerFiligree, DawoodiBohraStarPattern } from './Ornament';
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
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);

  const isScratchedRef = useRef(false);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const particleIdRef = useRef(0);
  const checkTimeoutRef = useRef<number | null>(null);
  const totalScratchedDistanceRef = useRef(0);

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

    if (onRevealComplete) {
      onRevealComplete();
    }
  }, [onRevealComplete]);

  // Draw the exact premium & elegant unopened card surface onto the canvas
  const drawCardSurface = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Use clientWidth & clientHeight which are unscaled by CSS transforms
    const width = container.clientWidth || 340;
    const height = container.clientHeight || 130;
    const dpr = Math.min(window.devicePixelRatio || 2, 3);

    // Set backing store dimensions according to DPR for ultra-crisp retina rendering
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.scale(dpr, dpr);

    // Reset composite operation to normal
    ctx.globalCompositeOperation = 'source-over';

    // 1. BASE WARM PARCHMENT & IVORY GRADIENT
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#FFFDF9');
    bgGrad.addColorStop(0.5, '#FAF3E8');
    bgGrad.addColorStop(1, '#F5E8D7');

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle paper grain warmth & micro-sheen
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillRect(0, 0, width, 1.5);

    // Delicate inset gold hairline guideline
    ctx.strokeStyle = 'rgba(184, 154, 104, 0.22)';
    ctx.lineWidth = 0.6;
    ctx.strokeRect(4, 4, width - 8, height - 8);

    // 2. CORNER GOLD FILIGREES (Top-Left & Top-Right)
    const drawFiligree = (top: number, left: number, flipX: boolean) => {
      ctx.save();
      ctx.translate(left, top);
      if (flipX) ctx.scale(-1, 1);
      const s = 16 / 48; // scale 48px viewBox to 16px
      ctx.scale(s, s);
      ctx.strokeStyle = 'rgba(184, 154, 104, 0.55)';
      ctx.fillStyle = 'rgba(184, 154, 104, 0.55)';

      // Outer smooth curved corner line
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(2, 2);
      ctx.lineTo(20, 2);
      ctx.bezierCurveTo(30, 2, 38, 10, 38, 20);
      ctx.lineTo(38, 38);
      ctx.stroke();

      // Inner dashed line
      ctx.lineWidth = 0.8;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(6, 6);
      ctx.lineTo(18, 6);
      ctx.bezierCurveTo(24, 6, 30, 12, 30, 18);
      ctx.lineTo(30, 30);
      ctx.stroke();
      ctx.setLineDash([]); // reset line dash

      // Corner accent dot
      ctx.beginPath();
      ctx.arc(6, 6, 2, 0, Math.PI * 2);
      ctx.fill();

      // Inner corner quadrant arc
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(12, 2);
      ctx.bezierCurveTo(12, 8, 8, 12, 2, 12);
      ctx.stroke();

      ctx.restore();
    };

    drawFiligree(6, 6, false); // top-left
    drawFiligree(width - 6, 6, true); // top-right

    // 3. CENTER ENVELOPE CREST & WAX SEAL BADGE
    const centerX = width / 2;
    const centerY = height / 2 - 15;
    const sealRadius = 19; // 38px diameter for harmonious visual balance

    // Soft drop shadow under seal
    ctx.beginPath();
    ctx.arc(centerX, centerY, sealRadius + 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(100, 75, 40, 0.09)';
    ctx.fill();

    // 1px Gold gradient outer rim
    const rimGrad = ctx.createLinearGradient(
      centerX - sealRadius,
      centerY - sealRadius,
      centerX + sealRadius,
      centerY + sealRadius
    );
    rimGrad.addColorStop(0, '#B89A68');
    rimGrad.addColorStop(0.45, '#FFF2D6');
    rimGrad.addColorStop(1, '#8D7047');

    ctx.beginPath();
    ctx.arc(centerX, centerY, sealRadius, 0, Math.PI * 2);
    ctx.fillStyle = rimGrad;
    ctx.fill();

    // Inner ivory circle fill (#FAF5EC)
    ctx.beginPath();
    ctx.arc(centerX, centerY, sealRadius - 1, 0, Math.PI * 2);
    ctx.fillStyle = '#FAF5EC';
    ctx.fill();

    // Dawoodi Bohra 8-Point Star Pattern in Center (size 16.5px)
    ctx.save();
    ctx.translate(centerX, centerY);
    const starScale = 16.5 / 40;
    ctx.scale(starScale, starScale);
    ctx.strokeStyle = '#6D522B';
    ctx.fillStyle = '#6D522B';

    // Outer 8-point geometric star: Square 1
    ctx.lineWidth = 1.1;
    ctx.globalAlpha = 0.88;
    ctx.strokeRect(-12, -12, 24, 24);

    // Outer 8-point geometric star: Square 2 rotated 45 deg
    ctx.save();
    ctx.rotate(Math.PI / 4);
    ctx.strokeRect(-12, -12, 24, 24);
    ctx.restore();

    // Inner octagram rotated 22.5 deg
    ctx.save();
    ctx.rotate(Math.PI / 8);
    ctx.lineWidth = 0.8;
    ctx.globalAlpha = 0.65;
    ctx.strokeRect(-8, -8, 16, 16);
    ctx.restore();

    // Inner delicate circle rings
    ctx.globalAlpha = 0.75;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.stroke();

    // Center focal jewel dot
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.arc(0, 0, 1.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 4. MAIN HEADING: "OUR WEDDING DATE"
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 11px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#4A381E';
    ctx.letterSpacing = '0.28em';
    ctx.fillText('OUR WEDDING DATE', centerX, centerY + 28);

    // 5. EDITORIAL CTA BADGE DIRECTLY BELOW HEADING
    const pillW = 142;
    const pillH = 17;
    const pillX = centerX - pillW / 2;
    const pillY = centerY + 37;
    const pillR = pillH / 2;

    // Subtle luxury pill background
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(pillX, pillY, pillW, pillH, pillR);
    } else {
      ctx.rect(pillX, pillY, pillW, pillH);
    }
    ctx.fillStyle = 'rgba(141, 112, 71, 0.08)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(184, 154, 104, 0.38)';
    ctx.lineWidth = 0.65;
    ctx.stroke();

    // Pill typography in Cormorant Garamond luxury serif
    ctx.font = '600 9.5px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#6D522B';
    ctx.letterSpacing = '0.22em';
    ctx.fillText('✦ SCRATCH TO REVEAL ✦', centerX, pillY + pillH / 2 + 0.5);

    ctx.restore();

    ctx.restore();
  }, []);

  // Initialize canvas on mount, font load, and dynamically respond to resize
  useEffect(() => {
    drawCardSurface();

    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        if (!isScratchedRef.current) {
          drawCardSurface();
        }
      });
    }

    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      if (!isScratchedRef.current) {
        drawCardSurface();
      }
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, [drawCardSurface]);

  // High-performance asynchronous scratch percentage calculator
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isScratchedRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const width = canvas.width;
      const height = canvas.height;
      // Stride sampling every 24px for lightning-fast sub-millisecond execution
      const sampleStep = 24;
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      let transparentPixels = 0;
      let totalSampled = 0;

      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha < 64) {
            transparentPixels++;
          }
          totalSampled++;
        }
      }

      const percent = totalSampled > 0 ? Math.round((transparentPixels / totalSampled) * 100) : 0;

      // When ~38% is scratched, smoothly and elegantly reveal the complete date
      if (percent >= 38 && !isScratchedRef.current) {
        handleFullReveal();
      }
    } catch {
      // Ignore if any cross-origin error occurs
    }
  }, [handleFullReveal]);

  // Debounced scratch checking during continuous dragging
  const scheduleScratchCheck = useCallback(() => {
    if (checkTimeoutRef.current !== null) return;
    checkTimeoutRef.current = window.setTimeout(() => {
      checkTimeoutRef.current = null;
      checkScratchPercentage();
    }, 320);
  }, [checkScratchPercentage]);

  // Spawn flying gold foil dust particles on scratch
  const spawnSparkles = (x: number, y: number) => {
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
      // Single click / tap: draw crisp circular erase
      ctx.beginPath();
      ctx.arc(currentPoint.x, currentPoint.y, 22, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Fluid stroke path
      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);
      ctx.stroke();
    }

    ctx.restore();

    lastPointRef.current = currentPoint;

    // Spawn subtle gold dust particles
    spawnSparkles(currentPoint.x, currentPoint.y);

    // Schedule debounced progress verification without stalling the main thread
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

    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if capture not supported
    }

    isDrawingRef.current = true;
    setIsScratching(true);

    const point = getCanvasPoint(e);
    lastPointRef.current = point;
    setCursorPos(point);
    scratch(point);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const point = getCanvasPoint(e);
    setCursorPos(point);

    if (!isDrawingRef.current || isScratchedRef.current) return;

    // Handle high-frequency coalesced events if available for 120Hz/240Hz screen fluidity
    const nativeEvent = e.nativeEvent as PointerEvent;
    if (typeof nativeEvent.getCoalescedEvents === 'function') {
      const coalescedEvents = nativeEvent.getCoalescedEvents();
      if (coalescedEvents.length > 0) {
        for (const ce of coalescedEvents) {
          const rect = canvas.getBoundingClientRect();
          const p = {
            x: ce.clientX - rect.left,
            y: ce.clientY - rect.top
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
    // Check percentage immediately when scratch stroke ends
    checkScratchPercentage();
  };

  const handlePointerLeave = () => {
    if (!isDrawingRef.current) {
      setCursorPos(null);
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center my-2 select-none w-full max-w-[310px] sm:max-w-[370px] mx-auto ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Scratch Card Outer Wrapper with Original Card Shadow, Border & Bevel */}
      <div
        ref={containerRef}
        className="relative w-full h-[126px] sm:h-[134px] rounded-xl overflow-hidden shadow-[0_8px_25px_-6px_rgba(100,75,40,0.14)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#F5E8D7] border border-[#B89A68]/45 p-0"
        style={{ touchAction: 'none' }}
      >
        {/* ========================================================= */}
        {/* LAYER 1: UNDERNEATH REVEALED TWO-COLUMN EDITORIAL CARD    */}
        {/* ========================================================= */}
        <div className="absolute inset-0 px-4 py-3 sm:px-6 sm:py-3.5 text-center flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5E8D7]">
          {/* Corner Filigrees in 4 Corners */}
          <CornerFiligree position="top-left" className="top-1.5 left-1.5 !w-4 !h-4 text-[#B89A68]/50" />
          <CornerFiligree position="top-right" className="top-1.5 right-1.5 !w-4 !h-4 text-[#B89A68]/50" />
          <CornerFiligree position="bottom-left" className="bottom-1.5 left-1.5 !w-4 !h-4 text-[#B89A68]/50" />
          <CornerFiligree position="bottom-right" className="bottom-1.5 right-1.5 !w-4 !h-4 text-[#B89A68]/50" />

          {/* Top Delicate Star Inscription Accent */}
          <div className="flex items-center gap-1.5 mb-1.5 text-[#8D7047] opacity-75">
            <span className="h-[0.5px] w-6 bg-[#B89A68]" />
            <DawoodiBohraStarPattern size={11} className="text-[#6D522B]" />
            <span className="h-[0.5px] w-6 bg-[#B89A68]" />
          </div>

          {/* TWO-COLUMN EDITORIAL DATE & TIME GRID */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 w-full my-0.5">
            {/* Left Column: Date */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif-luxury text-[10.5px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#6D522B]">
                {dayName}
              </span>
              <span className="font-arabic-luxury text-3xl sm:text-4xl font-semibold text-[#4A381E] leading-none tracking-tight drop-shadow-xs my-0.5">
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
              <span className="font-serif-luxury text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#6D522B]">
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
          <div className="flex items-center gap-1.5 mt-1.5 text-[#8D7047] opacity-75">
            <span className="h-[0.5px] w-7 bg-[#B89A68]" />
            <span className="text-[6px]">◆</span>
            <span className="h-[0.5px] w-7 bg-[#B89A68]" />
          </div>

          {/* Celebratory revealed radiance sweep */}
          {isScratched && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 2, ease: 'easeInOut' }}
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
          transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          className={`absolute inset-0 w-full h-full block touch-none z-10 rounded-xl ${
            !isScratched ? 'cursor-none active:cursor-none' : 'pointer-events-none'
          }`}
          style={{ touchAction: 'none' }}
          aria-label="Scratch card to reveal wedding date"
        />

        {/* Metallic Shimmer Sweep Across Unopened Card */}
        {!isScratched && (
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-20"
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
        {/* LAYER 4: LUXURY GOLD COIN CURSOR TOOL                     */}
        {/* ========================================================= */}
        <AnimatePresence>
          {cursorPos && !isScratched && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isScratching ? 0.92 : 1,
                rotate: isScratching ? -25 : 0,
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
