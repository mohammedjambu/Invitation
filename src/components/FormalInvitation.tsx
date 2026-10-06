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
// Physical luxury envelope & wax seal unfold interaction revealing the editorial date
// ============================================================================
const LuxuryDateRevealPanel: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center my-4 select-none w-full max-w-[310px] sm:max-w-[370px] mx-auto perspective-1200">
      <motion.div
        onClick={() => setIsRevealed(true)}
        className={`relative w-full cursor-pointer transition-transform duration-500 ${
          !isRevealed ? 'hover:scale-[1.02]' : ''
        }`}
        aria-label="Interactive Wedding Date & Time Reveal"
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
              className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#F5E8D7] rounded-xl p-4 sm:p-5 border border-[#B89A68]/45 shadow-[0_8px_25px_-6px_rgba(100,75,40,0.14)] text-center flex flex-col items-center justify-center overflow-hidden transform-gpu"
            >
              {/* Outer Fine Gold Filigree Corner Accents */}
              <CornerFiligree position="top-left" className="top-1.5 left-1.5 !w-4 !h-4 text-[#B89A68]/50" />
              <CornerFiligree position="top-right" className="top-1.5 right-1.5 !w-4 !h-4 text-[#B89A68]/50" />

              {/* Envelope Crest & Wax Seal Badge */}
              <div className="my-1 relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B89A68] via-[#EAD8BA] to-[#8D7047] p-[1px] shadow-sm flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#FAF5EC] flex items-center justify-center">
                    <DawoodiBohraStarPattern size={17} className="text-[#6D522B] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <span className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.28em] uppercase font-bold text-[#4A381E] mt-1.5 mb-0.5">
                OUR WEDDING DATE
              </span>

              {/* Gentle Shimmering Call to Action Cue */}
              {/* <div className="mt-1.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8D7047]/10 border border-[#B89A68]/30">
                <span className="font-serif-luxury text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-[#6D522B]">
                  REVEAL DATE & TIME ✦
                </span>
              </div> */}

              {/* Metallic Shimmer Sweep Across Unopened Seal */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>
          ) : (
            /* REVEALED STATE: TWO-COLUMN EDITORIAL DATE & TIME INSCRIPTION CARD */
            <motion.div
              key="revealed-date"
              initial={{ opacity: 0, y: 15, scale: 0.94, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.65, ease: PREMIUM_EASE }}
              className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5E8D7] rounded-xl px-4 py-4 sm:px-6 sm:py-5 border border-[#B89A68]/60 shadow-[0_10px_28px_-8px_rgba(100,75,40,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] text-center flex flex-col items-center justify-center overflow-hidden transform-gpu"
            >
              {/* Corner Filigree Borders */}
              <CornerFiligree position="top-left" className="top-1.5 left-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />
              <CornerFiligree position="top-right" className="top-1.5 right-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />
              <CornerFiligree position="bottom-left" className="bottom-1.5 left-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />
              <CornerFiligree position="bottom-right" className="bottom-1.5 right-1.5 !w-4.5 !h-4.5 text-[#B89A68]/50" />

              {/* Top Star Accent Header */}
              <div className="flex items-center gap-1.5 mb-2 text-[#8D7047] opacity-75">
                <span className="h-[0.5px] w-6 bg-[#B89A68]" />
                <DawoodiBohraStarPattern size={11} className="text-[#6D522B]" />
                <span className="h-[0.5px] w-6 bg-[#B89A68]" />
              </div>

              {/* TWO-COLUMN EDITORIAL DATE & TIME GRID */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 w-full my-1">
                
                {/* LEFT COLUMN: DATE */}
                <div className="flex flex-col items-center justify-center">
                  <span className="font-serif-luxury text-[11px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#6D522B]">
                    FRIDAY
                  </span>
                  <span className="font-arabic-luxury text-3xl sm:text-4xl font-semibold text-[#4A381E] leading-none tracking-tight drop-shadow-xs">
                    27
                  </span>
                  <span className="font-serif-luxury text-[11px] sm:text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#6D522B] whitespace-nowrap">
                    NOVEMBER 2026
                  </span>
                </div>

                {/* ELEGANT VERTICAL DIVIDER LINE */}
                <div className="h-14 sm:h-16 w-[1px] bg-gradient-to-b from-transparent via-[#B89A68]/60 to-transparent" />

                {/* RIGHT COLUMN: TIME */}
                <div className="flex flex-col items-center justify-center">
                  <span className="font-serif-luxury text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#6D522B]">
                    AT
                  </span>
                  <span className="font-arabic-luxury text-xl sm:text-2xl font-semibold text-[#4A381E] leading-none my-1 tracking-tight drop-shadow-xs whitespace-nowrap">
                    07:30 PM
                  </span>
                  <span className="font-serif-luxury text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8D7047] whitespace-nowrap">
                    ()
                  </span>
                </div>

              </div>

              {/* Bottom Decorative Accent */}
              <div className="flex items-center gap-1.5 mt-2 text-[#8D7047] opacity-75">
                <span className="h-[0.5px] w-7 bg-[#B89A68]" />
                <span className="text-[6px]">◆</span>
                <span className="h-[0.5px] w-7 bg-[#B89A68]" />
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

    // Phase 1: Architectural Backplate & Structure Frame (t = 0ms)
    setPhase(1);

    // Phase 2: Fine Gold Foil Linework & Keystone Ornament (t = 250ms)
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
      className="relative py-20 sm:py-28 md:py-36 px-3.5 sm:px-6 md:px-8 bg-[#F8F0E5] overflow-hidden"
    >
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT RADIAL GLOW */}
      <GeometricWatermarkPattern />

      {/* Flagship Ambient Backdrop Glow & Golden Rays Centered Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-radial from-[#F5E5D3]/80 via-[#FDF9F3]/40 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-radial from-[#EAD8BA]/35 via-transparent to-transparent rounded-full blur-2xl pointer-events-none z-0 animate-pulse" />

      {/* 2. RESTRAINED ARCHITECTURAL SUITE WRAPPER */}
      <div className="max-w-[580px] sm:max-w-[640px] md:max-w-[700px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* PHASE 1: REFINED ISLAMIC ARCHITECTURAL CROWN & BACKDROP STRUCTURE */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 1.0, ease: PREMIUM_EASE }}
          className="w-full flex flex-col items-center mb-[-1px] relative z-0 pointer-events-none px-4"
        >
          {/* Subtle Architectural Crown Silhouette */}
          <div className="w-full max-w-[420px] sm:max-w-[480px] h-14 sm:h-18 relative flex items-center justify-center">
            <svg
              viewBox="0 0 480 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              {/* Outer Broad Ogee Silhouette Line */}
              <path
                d="M 10 72 C 10 50, 70 42, 130 38 C 190 34, 225 18, 240 4 C 255 18, 290 34, 350 38 C 410 42, 470 50, 470 72"
                stroke="#D8BE94"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity={phase >= 2 ? 0.85 : 0}
                className="transition-opacity duration-700"
              />

              {/* Inner Concentric Delicate Arch Guideline */}
              <path
                d="M 40 72 C 40 56, 90 50, 145 46 C 198 42, 228 26, 240 14 C 252 26, 282 42, 335 46 C 390 50, 440 56, 440 72"
                stroke="#8D7047"
                strokeWidth="0.75"
                strokeDasharray="2 2"
                opacity={phase >= 2 ? 0.5 : 0}
                className="transition-opacity duration-700"
              />

              {/* Keystone Finial & Star Node */}
              <g opacity={phase >= 2 ? 1 : 0} className="transition-opacity duration-700">
                <circle cx="240" cy="4" r="2.2" fill="#6D522B" />
                <circle cx="240" cy="4" r="5.5" stroke="#B89A68" strokeWidth="0.7" fill="none" />
                <line x1="240" y1="9.5" x2="240" y2="17" stroke="#B89A68" strokeWidth="0.75" />
              </g>

              {/* Left & Right Shoulder Rosette Nodes */}
              <g opacity={phase >= 2 ? 0.75 : 0} className="transition-opacity duration-700">
                <circle cx="130" cy="38" r="1.5" fill="#6D522B" />
                <circle cx="350" cy="38" r="1.5" fill="#6D522B" />
              </g>
            </svg>
          </div>
        </motion.div>

        {/* 3. LUXURY ARCHED INVITATION STATIONERY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={phase >= 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.985 }}
          transition={{ duration: 1.0, ease: PREMIUM_EASE }}
          className="relative w-full [border-radius:180px_180px_1.5rem_1.5rem_/_85px_85px_1.5rem_1.5rem] sm:[border-radius:240px_240px_2rem_2rem_/_110px_110px_2rem_2rem] bg-[#FAF5EC] p-2 sm:p-3 shadow-[0_30px_70px_-15px_rgba(100,75,40,0.16),0_0_0_1px_rgba(216,190,148,0.5)] border border-[#E8D8C0]"
        >
          {/* Imperial Wax Seal Keystone Emblem Header */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 2 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B89A68] via-[#EAD8BA] to-[#8D7047] p-[1.5px] shadow-[0_4px_18px_rgba(109,82,43,0.22)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#FAF5EC] flex items-center justify-center border border-[#B89A68]/50">
                <DawoodiBohraStarPattern size={17} className="text-[#6D522B]" />
              </div>
            </div>
          </motion.div>

          {/* Layered Inset Arched Paper Surface with Gold Micro-Edge */}
          <div className="relative w-full [border-radius:170px_170px_1.25rem_1.25rem_/_78px_78px_1.25rem_1.25rem] sm:[border-radius:228px_228px_1.75rem_1.75rem_/_102px_102px_1.75rem_1.75rem] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F7EFE4] px-5 sm:px-12 md:px-16 pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 text-center select-none overflow-hidden border border-[#B89A68]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_50px_rgba(245,229,211,0.3)]">
            
            {/* Subtle Paper Texture Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(255,255,255,0.95)_0%,rgba(250,245,236,0.65)_50%,rgba(244,233,216,0.85)_100%)] pointer-events-none" />

            {/* Dynamic Gold Foil Light Reflection Sweep across Stationery Surface */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={phase >= 2 ? { x: ['-100%', '200%'], opacity: [0, 0.45, 0] } : {}}
              transition={{ repeat: Infinity, repeatDelay: 6, duration: 2.2, ease: 'easeInOut', delay: 1.2 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none z-20"
            />

            {/* Architectural Engraved Inset Linework Following Top Card Arch */}
            <div className="absolute inset-3 sm:inset-4.5 [border-radius:158px_158px_1rem_1rem_/_70px_70px_1rem_1rem] sm:[border-radius:215px_215px_1.5rem_1.5rem_/_95px_95px_1.5rem_1.5rem] border border-[#B89A68]/25 pointer-events-none" />
            <div className="absolute inset-4 sm:inset-5.5 [border-radius:150px_150px_0.85rem_0.85rem_/_64px_64px_0.85rem_0.85rem] sm:[border-radius:205px_205px_1.25rem_1.25rem_/_90px_90px_1.25rem_1.25rem] border border-[#8D7047]/15 pointer-events-none" />

            {/* Top Arch Vector Accent Lines */}
            <svg
              viewBox="0 0 600 120"
              preserveAspectRatio="none"
              className="absolute top-0 inset-x-0 w-full h-20 sm:h-28 pointer-events-none z-10 opacity-70"
            >
              <path
                d="M 20 115 C 20 50, 140 18, 300 18 C 460 18, 580 50, 580 115"
                stroke="#D8BE94"
                strokeWidth="1.2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 35 115 C 35 60, 150 28, 300 28 C 450 28, 565 60, 565 115"
                stroke="#B89A68"
                strokeWidth="0.8"
                strokeDasharray="4 2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Corner Architectural Filigrees */}
            <CornerFiligree position="top-left" className="top-4 sm:top-5.5 left-4 sm:left-5.5 !w-4.5 !h-4.5 sm:!w-6 sm:!h-6 text-[#B89A68]/45" />
            <CornerFiligree position="top-right" className="top-4 sm:top-5.5 right-4 sm:right-5.5 !w-4.5 !h-4.5 sm:!w-6 sm:!h-6 text-[#B89A68]/45" />
            <CornerFiligree position="bottom-left" className="bottom-4 sm:bottom-5.5 left-4 sm:left-5.5 !w-4.5 !h-4.5 sm:!w-6 sm:!h-6 text-[#B89A68]/45" />
            <CornerFiligree position="bottom-right" className="bottom-4 sm:bottom-5.5 right-4 sm:right-5.5 !w-4.5 !h-4.5 sm:!w-6 sm:!h-6 text-[#B89A68]/45" />

            {/* CONTENT CONTAINER - SPATIOUS, UNOBSTRUCTED & HIERARCHICAL */}
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              
              {/* PHASE 2: CENTRAL ISLAMIC STAR MOTIF & ACCENT LINE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="mb-4 sm:mb-6 flex items-center justify-center gap-3 w-full"
              >
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                  className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B89A68] to-[#B89A68] origin-right"
                />
                <div className="flex items-center gap-1.5 text-[#6D522B]">
                  <span className="text-[6.5px]">◆</span>
                  <DawoodiBohraStarPattern size={20} className="text-[#6D522B]" />
                  <span className="text-[6.5px]">◆</span>
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
                initial={{ opacity: 0, y: 14, filter: 'blur(2px)' }}
                animate={phase >= 3 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(2px)' }}
                transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                className="mb-5 sm:mb-7 max-w-[260px] sm:max-w-[320px] mx-auto"
              >
                <h2 className="font-arabic-luxury text-2xl sm:text-3xl md:text-4xl text-[#6D522B] leading-relaxed tracking-wide drop-shadow-xs">
                  {weddingData.bismillahArabic}
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2 text-[#B89A68]/70">
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={phase >= 3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                    className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-right"
                  />
                  <DawoodiBohraStarPattern size={13} className="text-[#6D522B]" />
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={phase >= 3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                    className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-left"
                  />
                </div>
              </motion.div>

              {/* PHASE 4: FORMAL INVITATION INTRODUCTORY COPY */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.75, ease: PREMIUM_EASE }}
                className="my-5 sm:my-6 space-y-1.5 max-w-[360px] sm:max-w-[420px] mx-auto"
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
              <div className="my-6 sm:my-8 flex flex-col items-center w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 18, filter: 'blur(3px)' }}
                  animate={phase >= 5 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(3px)' }}
                  transition={{ duration: 1.0, ease: PREMIUM_EASE }}
                  className="font-script-luxury text-5xl sm:text-7xl md:text-8xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-[0_2px_4px_rgba(109,82,43,0.12)]"
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
                  className="mt-1.5 sm:mt-2.5 space-y-0.5"
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
                className="my-3 sm:my-5 flex items-center justify-center gap-3 sm:gap-4 w-full"
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
              <div className="my-6 sm:my-8 flex flex-col items-center w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 18, filter: 'blur(3px)' }}
                  animate={phase >= 8 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(3px)' }}
                  transition={{ duration: 1.0, ease: PREMIUM_EASE }}
                  className="font-script-luxury text-5xl sm:text-7xl md:text-8xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-[0_2px_4px_rgba(109,82,43,0.12)]"
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
                  className="mt-1.5 sm:mt-2.5 space-y-0.5"
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
                className="mt-10 sm:mt-12 mb-6 sm:mb-8 pt-6 border-t border-[#B89A68]/25 max-w-[420px] sm:max-w-lg mx-auto w-full"
              >
                <span className="font-serif-luxury text-sm sm:text-sm tracking-[0.3em] uppercase font-bold text-[#775E38] block mb-3">
                  DEAR FRIENDS & FAMILY
                </span>

                <p className="font-serif-luxury text-sm sm:text-base text-[#4A381E] leading-relaxed font-normal text-center mb-3">
                  With our Nikah blessed by Aqa Moula TUS,<br />
                  we now look forward to celebrating this joyous occasion
                  surrounded by those closest to our hearts.
                </p>

                <p className="font-serif-luxury italic text-sm sm:text-sm text-[#6D522B] font-semibold text-center">
                  Your presence and duas would mean so much to us.
                </p>
              </motion.div>

              {/* PHASE 11: INTERACTIVE DATE REVEAL */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={phase >= 11 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.75, ease: PREMIUM_EASE }}
                className="pt-2 relative max-w-sm mx-auto w-full"
              >
                <LuxuryDateRevealPanel />
              </motion.div>

              {/* PHASE 12: #NOORKIHOOR LUXURY HASHTAG BADGE */}
              {weddingData.hashtag && (
                <div className="mt-6 sm:mt-8 w-full flex justify-center">
                  <LuxuryHashtagBadge
                    hashtag={weddingData.hashtag}
                    isTriggered={phase >= 12}
                    delay={100}
                  />
                </div>
              )}

              {/* Bottom Linework Corner Accents */}
              <BotanicalGoldCorner position="bottom-left" className="-bottom-1 -left-1 opacity-60" />
              <BotanicalGoldCorner position="bottom-right" className="-bottom-1 -right-1 opacity-60" />

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};