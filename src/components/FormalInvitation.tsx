import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  CornerFiligree,
  DawoodiBohraStarPattern,
  BotanicalGoldCorner,
  GeometricWatermarkPattern
} from './Ornament';
import { PREMIUM_EASE } from '../utils/motion';
import { LuxuryHashtagBadge } from './LuxuryHashtagBadge';

// ============================================================================
// LUXURY INTERACTIVE DATE REVEAL COMPONENT
// Physical luxury envelope & seal unfold interaction revealing the editorial date
// ============================================================================
const LuxuryDateRevealPanel: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center my-4 select-none w-full max-w-[270px] sm:max-w-[300px] mx-auto perspective-1200">
      <motion.div
        onClick={() => setIsRevealed(true)}
        className={`relative w-full cursor-pointer transition-transform duration-500 ${
          !isRevealed ? 'hover:scale-[1.02]' : ''
        }`}
        aria-label="Interactive Wedding Date Reveal"
      >
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            /* CLOSED STATE: LUXURY UNOPENED SEAL & STATIONERY FLAP */
            <motion.div
              key="closed-seal"
              initial={{ opacity: 0, scale: 0.95, rotateX: 0 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.92, rotateX: -25, y: -8 }}
              transition={{ duration: 0.5, ease: PREMIUM_EASE }}
              className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#F5E8D7] rounded-xl p-3.5 sm:p-4 border border-[#B89A68]/50 shadow-[0_8px_25px_-6px_rgba(100,75,40,0.16)] text-center flex flex-col items-center justify-center overflow-hidden transform-gpu"
            >
              {/* Outer Fine Gold Filigree Corner Accents */}
              <CornerFiligree position="top-left" className="top-1.5 left-1.5 !w-4 !h-4 text-[#B89A68]/50" />
              <CornerFiligree position="top-right" className="top-1.5 right-1.5 !w-4 !h-4 text-[#B89A68]/50" />

              {/* Envelope Crest & Wax Seal Badge */}
              <div className="my-1 relative flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#B89A68] via-[#EAD8BA] to-[#8D7047] p-[1px] shadow-sm flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#FAF5EC] flex items-center justify-center">
                    <DawoodiBohraStarPattern size={16} className="text-[#6D522B] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <span className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.28em] uppercase font-bold text-[#4A381E] mt-1 mb-0.5">
                OUR WEDDING DATE
              </span>

              {/* Gentle Shimmering Call to Action Cue */}
              <div className="mt-1 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#8D7047]/10 border border-[#B89A68]/30">
                <span className="font-serif-luxury text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-[#6D522B]">
                  REVEAL OUR DATE ✦
                </span>
              </div>

              {/* Metallic Shimmer Sweep Across Unopened Seal */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>
          ) : (
            /* REVEALED STATE: ELEGANT COMPACT INSCRIPTION CARD WITH 3D UNBOXING */
            <motion.div
              key="revealed-date"
              initial={{ opacity: 0, y: 15, scale: 0.94, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.65, ease: PREMIUM_EASE }}
              className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5E8D7] rounded-xl p-3.5 sm:p-4.5 border border-[#B89A68]/60 shadow-[0_10px_28px_-8px_rgba(100,75,40,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] text-center flex flex-col items-center justify-center overflow-hidden transform-gpu"
            >
              {/* Corner Filigree Borders */}
              <CornerFiligree position="top-left" className="top-1.5 left-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />
              <CornerFiligree position="top-right" className="top-1.5 right-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />
              <CornerFiligree position="bottom-left" className="bottom-1.5 left-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />
              <CornerFiligree position="bottom-right" className="bottom-1.5 right-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />

              {/* Top Star Accent */}
              <div className="flex items-center gap-1.5 mb-1 text-[#8D7047] opacity-75">
                <span className="h-[0.5px] w-5 bg-[#B89A68]" />
                <DawoodiBohraStarPattern size={11} className="text-[#6D522B]" />
                <span className="h-[0.5px] w-5 bg-[#B89A68]" />
              </div>

              {/* Grand Editorial Date Hierarchy */}
              <div className="flex flex-col items-center my-0.5">
                <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#4A381E] leading-none tracking-tight drop-shadow-xs">
                  27
                </span>
                <span className="font-serif-luxury text-xs sm:text-sm font-bold tracking-[0.32em] uppercase text-[#6D522B] mt-1.5 mb-0.5">
                  NOVEMBER
                </span>
                <span className="font-serif-luxury text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#8D7047]">
                  2026
                </span>
              </div>

              {/* Bottom Decorative Accent */}
              <div className="flex items-center gap-1.5 mt-1.5 text-[#8D7047] opacity-75">
                <span className="h-[0.5px] w-6 bg-[#B89A68]" />
                <span className="text-[6px]">◆</span>
                <span className="h-[0.5px] w-6 bg-[#B89A68]" />
              </div>

              {/* Champagne Gold Shimmer Sweep */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// ============================================================================
// MAIN FORMAL INVITATION SECTION COMPONENT
// ============================================================================
export const FormalInvitation: React.FC = () => {
  const invitationRef = useRef<HTMLElement>(null);
  // Dedicated viewport observer: triggers strictly when Main Invitation section enters 20% of viewport on scroll
  const isInView = useInView(invitationRef, { amount: 0.2 });

  const hasTriggeredRef = useRef(false);
  const [phase, setPhase] = useState(0);
  const [mariyaCharCount, setMariyaCharCount] = useState(0);
  const [nuruddinCharCount, setNuruddinCharCount] = useState(0);

  const brideName = weddingData.brideName || 'Mariya';
  const groomName = weddingData.groomName || 'Nuruddin';

  useEffect(() => {
    if (hasTriggeredRef.current) return;
    if (!isInView) return;

    hasTriggeredRef.current = true;

    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase(14);
      setMariyaCharCount(brideName.length);
      setNuruddinCharCount(groomName.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: Architectural Arch Frame Gently Appears (t = 0ms)
    setPhase(1);

    // Phase 2: Fine Gold Foil Linework & Corner Filigrees (t = 250ms)
    timers.push(setTimeout(() => setPhase(2), 250));

    // Phase 3: Sacred Bismillah Arabic Calligraphy (t = 600ms)
    timers.push(setTimeout(() => setPhase(3), 600));

    // Phase 4: Formal Invitation Introduction Copy (t = 950ms)
    timers.push(setTimeout(() => setPhase(4), 950));

    // Phase 5: Mariya Typewriter & Editorial Ink Reveal (t = 1350ms)
    timers.push(setTimeout(() => {
      setPhase(5);
      for (let i = 1; i <= brideName.length; i++) {
        timers.push(setTimeout(() => {
          setMariyaCharCount(i);
        }, i * 120));
      }
    }, 1350));

    // Phase 6: Bride Family Information (t = 1950ms)
    timers.push(setTimeout(() => setPhase(6), 1950));

    // Phase 7: Ornamental Divider ("With") (t = 2350ms)
    timers.push(setTimeout(() => setPhase(7), 2350));

    // Phase 8: Nuruddin Typewriter & Editorial Ink Reveal (t = 2750ms)
    timers.push(setTimeout(() => {
      setPhase(8);
      for (let i = 1; i <= groomName.length; i++) {
        timers.push(setTimeout(() => {
          setNuruddinCharCount(i);
        }, i * 120));
      }
    }, 2750));

    // Phase 9: Groom Family Information (t = 3350ms)
    timers.push(setTimeout(() => setPhase(9), 3350));

    // Phase 10: "DEAR FRIENDS & FAMILY" & Personal Message (t = 3750ms)
    timers.push(setTimeout(() => setPhase(10), 3750));

    // Phase 11: Interactive Date Reveal Panel (t = 4300ms)
    timers.push(setTimeout(() => setPhase(11), 4300));

    // Phase 12: #NoorKiHoor Hashtag Badge (t = 4800ms)
    timers.push(setTimeout(() => setPhase(12), 4800));

    // Complete State (t = 5400ms)
    timers.push(setTimeout(() => setPhase(14), 5400));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isInView, brideName.length, groomName.length]);

  return (
    <section
      id="formal-invitation-section"
      ref={invitationRef as any}
      className="relative py-20 sm:py-28 md:py-32 px-3 sm:px-6 bg-[#F8F0E5] overflow-hidden"
    >
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT RADIAL GLOW */}
      <GeometricWatermarkPattern />

      {/* Warm Ambient Backdrop Glow Centered Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-radial from-[#F5E5D3]/60 via-[#FDF9F3]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* PHASE 1: ARCHITECTURAL INVITATION ARCH FRAME REVEALS */}
      <div className="max-w-[540px] sm:max-w-[600px] md:max-w-[640px] mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.985 }}
          transition={{ duration: 1.0, ease: PREMIUM_EASE }}
          className="relative w-full bg-[#FAF4EA] [border-radius:50%_50%_2.2rem_2.2rem_/_65px_65px_2.2rem_2.2rem] sm:[border-radius:50%_50%_3rem_3rem_/_95px_95px_3rem_3rem] p-6 sm:p-12 md:p-16 border border-[#B89A68]/50 shadow-[0_25px_70px_-15px_rgba(100,75,40,0.18),0_0_0_1px_rgba(184,154,104,0.3)] text-center select-none overflow-hidden"
        >
          {/* Subtle Paper Texture & Lighting Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,253,248,0.98)_0%,rgba(250,244,234,0.75)_60%,rgba(245,234,217,0.92)_100%)] pointer-events-none" />

          {/* PHASE 2: Outer Fine Gold Foil Arched Border Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="absolute inset-2.5 sm:inset-4 [border-radius:50%_50%_1.8rem_1.8rem_/_55px_55px_1.8rem_1.8rem] sm:[border-radius:50%_50%_2.5rem_2.5rem_/_83px_83px_2.5rem_2.5rem] border border-[#D8BE94]/80 pointer-events-none"
          />

          {/* PHASE 2: Inner Dashed Filigree Arched Frame Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE, delay: 0.1 }}
            className="absolute inset-4.5 sm:inset-7 [border-radius:50%_50%_1.4rem_1.4rem_/_45px_45px_1.4rem_1.4rem] sm:[border-radius:50%_50%_2rem_2rem_/_70px_70px_2rem_2rem] border border-dashed border-[#B89A68]/45 pointer-events-none"
          />

          {/* PHASE 2: Engraved Filigree Corner Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          >
            <CornerFiligree position="top-left" className="top-6 left-6 sm:top-9 sm:left-9 !w-7 !h-7 sm:!w-9 sm:!h-9 text-[#B89A68]/70" />
            <CornerFiligree position="top-right" className="top-6 right-6 sm:top-9 sm:right-9 !w-7 !h-7 sm:!w-9 sm:!h-9 text-[#B89A68]/70" />
            <CornerFiligree position="bottom-left" className="bottom-5 left-5 sm:bottom-8 sm:left-8 !w-8 !h-8 sm:!w-10 sm:!h-10 text-[#B89A68]/70" />
            <CornerFiligree position="bottom-right" className="bottom-5 right-5 sm:bottom-8 sm:right-8 !w-8 !h-8 sm:!w-10 sm:!h-10 text-[#B89A68]/70" />
          </motion.div>

          {/* PHASE 2: Side Vertical Linework Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="absolute top-1/3 bottom-1/4 left-2.5 sm:left-4.5 w-[1px] bg-gradient-to-b from-transparent via-[#B89A68]/40 to-transparent flex flex-col justify-between items-center py-6 pointer-events-none"
          >
            <span className="w-1 h-1 rounded-full bg-[#B89A68]/60" />
            <span className="text-[8px] text-[#B89A68]/60">✦</span>
            <span className="w-1 h-1 rounded-full bg-[#B89A68]/60" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="absolute top-1/3 bottom-1/4 right-2.5 sm:right-4.5 w-[1px] bg-gradient-to-b from-transparent via-[#B89A68]/40 to-transparent flex flex-col justify-between items-center py-6 pointer-events-none"
          >
            <span className="w-1 h-1 rounded-full bg-[#B89A68]/60" />
            <span className="text-[8px] text-[#B89A68]/60">✦</span>
            <span className="w-1 h-1 rounded-full bg-[#B89A68]/60" />
          </motion.div>


          {/* INVITATION CONTENT HIERARCHY */}
          <div className="relative z-20 pt-4 sm:pt-6 pb-4">
            
            {/* PHASE 2: FINE GOLD ORNAMENTAL CREST & LINES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE }}
              className="mb-4 sm:mb-5 flex items-center justify-center gap-3"
            >
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B89A68] to-[#B89A68] origin-right"
              />
              <div className="flex items-center gap-1.5 text-[#6D522B]">
                <span className="text-[7px]">◆</span>
                <DawoodiBohraStarPattern size={22} className="text-[#6D522B]" />
                <span className="text-[7px]">◆</span>
              </div>
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#B89A68] to-[#B89A68] origin-left"
              />
            </motion.div>

            {/* PHASE 3: ARABIC BISMILLAH CALLIGRAPHY */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(2px)' }}
              animate={phase >= 3 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 15, filter: 'blur(2px)' }}
              transition={{ duration: 0.8, ease: PREMIUM_EASE }}
              className="mb-5 sm:mb-7 max-w-[240px] sm:max-w-[300px] mx-auto"
            >
              <h2 className="font-arabic-luxury text-2xl sm:text-3xl md:text-4xl text-[#6D522B] leading-relaxed tracking-wide drop-shadow-xs">
                {weddingData.bismillahArabic}
              </h2>
              <div className="flex items-center justify-center gap-2 mt-1.5 text-[#B89A68]/70">
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={phase >= 3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                  className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-right"
                />
                <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={phase >= 3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                  className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-left"
                />
              </div>
            </motion.div>

            {/* PHASE 4: FORMAL INVITATION COPY */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.75, ease: PREMIUM_EASE }}
              className="my-5 sm:my-6 space-y-1.5 max-w-[340px] sm:max-w-[400px] mx-auto"
            >
              <p className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase font-bold text-[#4A381E]">
                TOGETHER WITH THEIR FAMILIES
              </p>
              <p className="font-serif-luxury text-[10.5px] sm:text-xs md:text-sm tracking-[0.24em] uppercase font-semibold text-[#6E5430] leading-relaxed">
                CORDIALLY INVITE YOU TO JOIN THEM<br />
                <span className="tracking-[0.22em] text-[#775E38]">IN CELEBRATING THE WEDDING OF</span>
              </p>
            </motion.div>

            {/* PHASE 5 & 6: BRIDE MARIYA & FAMILY INFORMATION */}
            <div className="my-6 sm:my-7 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
                animate={phase >= 5 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(3px)' }}
                transition={{ duration: 1.0, ease: PREMIUM_EASE }}
                className="font-script-luxury text-5xl sm:text-7xl md:text-8xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-[0_2px_4px_rgba(109,82,43,0.14)]"
              >
                {brideName.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={
                      phase >= 5 && index < mariyaCharCount
                        ? { opacity: 1, filter: 'blur(0px)' }
                        : { opacity: 0, filter: 'blur(4px)' }
                    }
                    transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                    style={{ display: 'inline', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={phase >= 6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.65, ease: PREMIUM_EASE }}
                className="mt-1 sm:mt-2 space-y-0.5"
              >
                <p className="font-serif-luxury italic text-xs sm:text-sm text-[#8D7047] font-medium tracking-wider">
                  Daughter of
                </p>
                <p className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.18em] font-bold text-[#4A381E] uppercase max-w-[380px] sm:max-w-md mx-auto">
                  Mr. Zulfiqar & Mrs. Maryam Sodawala
                </p>
              </motion.div>
            </div>

            {/* PHASE 7: ORNAMENTAL DIVIDER ("With") */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={phase >= 7 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE }}
              className="my-3 sm:my-4 flex items-center justify-center gap-3 sm:gap-4"
            >
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 7 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B89A68] to-[#B89A68] origin-right"
              />
              <span className="font-serif-luxury italic text-base sm:text-xl text-[#6D522B] font-semibold tracking-wider px-1">
                With
              </span>
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 7 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#B89A68] to-[#B89A68] origin-left"
              />
            </motion.div>

            {/* PHASE 8 & 9: GROOM NURUDDIN & FAMILY INFORMATION */}
            <div className="my-6 sm:my-7 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
                animate={phase >= 8 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(3px)' }}
                transition={{ duration: 1.0, ease: PREMIUM_EASE }}
                className="font-script-luxury text-5xl sm:text-7xl md:text-8xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-[0_2px_4px_rgba(109,82,43,0.14)]"
              >
                {groomName.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={
                      phase >= 8 && index < nuruddinCharCount
                        ? { opacity: 1, filter: 'blur(0px)' }
                        : { opacity: 0, filter: 'blur(4px)' }
                    }
                    transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                    style={{ display: 'inline', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={phase >= 9 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.65, ease: PREMIUM_EASE }}
                className="mt-1 sm:mt-2 space-y-0.5"
              >
                <p className="font-serif-luxury italic text-xs sm:text-sm text-[#8D7047] font-medium tracking-wider">
                  Son of
                </p>
                <p className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.18em] font-bold text-[#4A381E] uppercase max-w-[380px] sm:max-w-md mx-auto">
                  Mr. Mustafa & Mrs. Fatema Kagalwala
                </p>
              </motion.div>
            </div>

            {/* PHASE 10: DEAR FRIENDS & FAMILY + PERSONAL MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={phase >= 10 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.8, ease: PREMIUM_EASE }}
              className="mt-10 sm:mt-12 mb-6 sm:mb-8 pt-6 border-t border-[#B89A68]/25 max-w-[420px] sm:max-w-lg mx-auto"
            >
              <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-[#775E38] block mb-3">
                DEAR FRIENDS & FAMILY
              </span>

              <p className="font-serif-luxury text-sm sm:text-base text-[#4A381E] leading-relaxed font-normal text-center mb-3">
                With our Nikah blessed by Aqa Moula TUS,<br />
                we now look forward to celebrating this joyous occasion
                surrounded by those closest to our hearts.
              </p>

              <p className="font-serif-luxury italic text-xs sm:text-sm text-[#6D522B] font-semibold text-center">
                Your presence and duas would mean so much to us.
              </p>
            </motion.div>

            {/* PHASE 11: INTERACTIVE DATE REVEAL */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={phase >= 11 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.96 }}
              transition={{ duration: 0.75, ease: PREMIUM_EASE }}
              className="pt-2 relative max-w-sm mx-auto"
            >
              <LuxuryDateRevealPanel />
            </motion.div>

            {/* PHASE 12: #NOORKIHOOR LUXURY HASHTAG BADGE WITH CHARACTER TYPING & GOLD SPARKLE */}
            {weddingData.hashtag && (
              <div className="mt-6 sm:mt-8">
                <LuxuryHashtagBadge
                  hashtag={weddingData.hashtag}
                  isTriggered={phase >= 12}
                  delay={100}
                />
              </div>
            )}

            {/* Bottom Linework Corner Accents */}
            <BotanicalGoldCorner position="bottom-left" className="-bottom-2 -left-2" />
            <BotanicalGoldCorner position="bottom-right" className="-bottom-2 -right-2" />

          </div>
        </motion.div>
      </div>
    </section>
  );
};


