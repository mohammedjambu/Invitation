import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern } from './Ornament';
import { PREMIUM_EASE } from '../utils/motion';
import { LuxuryHashtagBadge } from './LuxuryHashtagBadge';
import { useSmoothScroll } from '../context/SmoothScrollContext';

interface HeroInvitationProps {
  isUnveiled?: boolean;
}

export const HeroInvitation: React.FC<HeroInvitationProps> = ({ isUnveiled = true }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();
  // Dedicated viewport observer for Hero section
  const isInView = useInView(heroRef, { amount: 0.1 });

  const hasTriggeredRef = useRef(false);
  const [phase, setPhase] = useState(0);
  const [mariyaCharCount, setMariyaCharCount] = useState(0);
  const [nuruddinCharCount, setNuruddinCharCount] = useState(0);

  const scrollToNext = () => {
    scrollTo('#nikah-section');
  };

  const brideName = weddingData.brideName || 'Mariya';
  const groomName = weddingData.groomName || 'Nuruddin';

  // Trigger sequence when preloader is unveiled and Hero is visible or near top of page
  const isNearTop = typeof window !== 'undefined' && window.scrollY < 400;
  const shouldStartSequence = isUnveiled && (isInView || isNearTop);

  useEffect(() => {
    if (hasTriggeredRef.current) return;
    if (!shouldStartSequence) return;

    hasTriggeredRef.current = true;

    // Respect user reduced-motion setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase(10);
      setMariyaCharCount(brideName.length);
      setNuruddinCharCount(groomName.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: Environment Settle (curtains parting t = 0ms - 800ms)
    setPhase(1);

    // Phase 2: Top Content - 786 / 110 & Ornament (t = 1100ms - right as curtains complete parting!)
    timers.push(setTimeout(() => setPhase(2), 1100));

    // Phase 3: Upper Invitation Copy - Blessings Text (t = 1450ms)
    timers.push(setTimeout(() => setPhase(3), 1450));

    // Phase 4: Mariya Typewriter Reveal Start (t = 1900ms)
    timers.push(setTimeout(() => {
      setPhase(4);
      for (let i = 1; i <= brideName.length; i++) {
        timers.push(setTimeout(() => {
          setMariyaCharCount(i);
        }, i * 130));
      }
    }, 1900));

    // Phase 5: Ampersand Reveal (t = 1900 + brideName.length * 130 + 250 = 2930ms)
    const ampersandTime = 1900 + brideName.length * 130 + 250;
    timers.push(setTimeout(() => {
      setPhase(5);
    }, ampersandTime));

    // Phase 6: Nuruddin Typewriter Reveal Start (t = ampersandTime + 350ms = 3280ms)
    const nuruddinStartTime = ampersandTime + 350;
    timers.push(setTimeout(() => {
      setPhase(6);
      for (let i = 1; i <= groomName.length; i++) {
        timers.push(setTimeout(() => {
          setNuruddinCharCount(i);
        }, i * 130));
      }
    }, nuruddinStartTime));

    // Phase 7: Lower Invitation Text Reveal (t = nuruddinStartTime + groomName.length * 130 + 300 = 4620ms)
    const inviteTextTime = nuruddinStartTime + groomName.length * 130 + 300;
    timers.push(setTimeout(() => {
      setPhase(7);
    }, inviteTextTime));

    // Phase 8: Hashtag Pill (#NoorKiHoor) (t = inviteTextTime + 450ms = 5070ms)
    const hashtagTime = inviteTextTime + 450;
    timers.push(setTimeout(() => {
      setPhase(8);
    }, hashtagTime));

    // Phase 9: Final Scroll Prompt Cue (t = hashtagTime + 400ms = 5470ms)
    const finalTime = hashtagTime + 400;
    timers.push(setTimeout(() => {
      setPhase(9);
    }, finalTime));

    // Complete State
    timers.push(setTimeout(() => {
      setPhase(10);
    }, finalTime + 500));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [shouldStartSequence, brideName.length, groomName.length]);

  return (
    <section id="hero-section" ref={heroRef as any} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F0E5] py-0 sm:py-6 md:py-8 px-0 sm:px-4">
      {/* Seamless background geometric watermark pattern matching all other sections */}
      <GeometricWatermarkPattern />

      {/* Soft warm radial backdrop glow centered behind portrait invitation card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-radial from-[#F5E5D3]/70 via-[#FDF9F3]/40 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 
        PHYSICAL PORTRAIT INVITATION CARD FRAME (9:16 Aspect Ratio)
        Phase 1: Environment Settle (opacity: 0.85 -> 1, scale: 1.01 -> 1)
      */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0.85, scale: 1.01 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0.85, scale: 1.01 }}
        transition={{ duration: 1.0, ease: PREMIUM_EASE }}
        className="relative w-full h-[100vh] sm:h-[92vh] max-w-[500px] sm:max-w-[520px] aspect-[9/16] sm:rounded-2xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(100,75,40,0.22),0_10px_25px_-8px_rgba(100,75,40,0.12),0_0_0_1px_rgba(184,154,104,0.35)] bg-[#D4C4A9] flex flex-col justify-between select-none z-10"
      >
        {/* Layer 1: Exact Photorealistic Invitation Card Frame */}
        <img
          src="/images/hero_frame.avif"
          alt="Mariya & Nuruddin Digital Wedding Invitation"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
        />

        {/* Layer 2: Subtle Ambient Warmth Overlay on Central Paper */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,253,248,0.22)_0%,rgba(212,196,169,0)_70%)] pointer-events-none z-10" />

        {/* Layer 3: Subtle Calm Chandelier Flames */}
        <div className="absolute top-[8.2%] left-1/2 -translate-x-1/2 z-15 pointer-events-none w-full flex justify-center">
          <div className="relative w-[50%] max-w-[240px] h-16">
            {/* Outer Left Candle Flame */}
            <motion.div
              animate={{ opacity: [0.5, 0.85, 0.6, 0.8, 0.55] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="absolute left-[9.5%] top-[30%] w-3 h-3 rounded-full bg-[#FFE082] filter blur-[3px] opacity-80"
            />
            {/* Inner Left Candle Flame */}
            <motion.div
              animate={{ opacity: [0.7, 0.5, 0.85, 0.6, 0.75] }}
              transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
              className="absolute left-[30.5%] top-[48%] w-3.5 h-3.5 rounded-full bg-[#FFB74D] filter blur-[3.5px] opacity-85"
            />
            {/* Inner Right Candle Flame */}
            <motion.div
              animate={{ opacity: [0.65, 0.9, 0.55, 0.8, 0.6] }}
              transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
              className="absolute right-[30.5%] top-[48%] w-3.5 h-3.5 rounded-full bg-[#FFB74D] filter blur-[3.5px] opacity-85"
            />
            {/* Outer Right Candle Flame */}
            <motion.div
              animate={{ opacity: [0.8, 0.55, 0.85, 0.6, 0.75] }}
              transition={{ repeat: Infinity, duration: 3.0, ease: "easeInOut" }}
              className="absolute right-[9.5%] top-[30%] w-3 h-3 rounded-full bg-[#FFE082] filter blur-[3px] opacity-80"
            />
          </div>
        </div>

        {/* Layer 4: ELEGANT CENTRAL INVITATION CONTENT AREA - 9-PHASE CINEMATIC CASCADE */}
        <div className="absolute top-[31%] bottom-[12%] left-[8%] right-[8%] z-20 flex flex-col justify-between items-center text-center">
          <div className="w-full flex flex-col items-center justify-between h-full py-1 sm:py-2">
            
            {/* PHASE 2: Top Ceremonial Inscription (786 / 110) & Ornament */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.75, ease: PREMIUM_EASE }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-serif-luxury text-sm sm:text-base md:text-lg text-[#4A381E] tracking-[0.32em] font-bold uppercase drop-shadow-xs">
                786 / 110
              </span>

              {/* Small Decorative Star Ornament */}
              <div className="flex items-center gap-2.5 my-0.5">
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                  className="h-[1px] w-6 sm:w-10 bg-[#775E38] origin-right"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: PREMIUM_EASE, delay: 0.08 }}
                >
                  <DawoodiBohraStarPattern size={13} className="text-[#5C4425]" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={phase >= 2 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                  className="h-[1px] w-6 sm:w-10 bg-[#775E38] origin-left"
                />
              </div>
            </motion.div>

            {/* PHASE 3: Formal Blessing & Family Introduction (Line-by-Line Group Reveal) */}
            <div className="flex flex-col items-center gap-1 my-1">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.65, ease: PREMIUM_EASE }}
                className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.28em] uppercase text-[#4A381E] font-bold leading-relaxed"
              >
                WITH THE BLESSINGS OF AQA MOULA TUS
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.65, ease: PREMIUM_EASE, delay: 0.12 }}
                className="font-serif-luxury text-[11px] sm:text-xs md:text-sm tracking-[0.24em] uppercase text-[#6E5430] font-bold opacity-95"
              >
                AND WITH THE LOVE OF THEIR FAMILIES
              </motion.p>
            </div>

            {/* COUPLE NAMES — REFINED TYPEWRITER REVEAL */}
            <div className="my-1 sm:my-2 flex flex-col items-center">
              {/* PHASE 4: Bride Name (Mariya) Letter-by-Letter Typewriter Reveal */}
              <h1 className="font-script-luxury text-6xl sm:text-7xl md:text-8xl text-[#4A3319] font-normal leading-[1.02] tracking-normal drop-shadow-[0_3px_8px_rgba(74,51,25,0.2)]">
                {brideName.split('').map((char, index) => {
                  const isVisible = mariyaCharCount > index;
                  return (
                    <span
                      key={index}
                      className="transition-opacity duration-150 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        display: 'inline'
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
              </h1>

              {/* PHASE 5: "&" Connector */}
              <motion.span
                initial={{ opacity: 0, scale: 0.96 }}
                animate={phase >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: PREMIUM_EASE }}
                className="font-serif-luxury italic text-2xl sm:text-3xl text-[#6E5430] my-0.5 font-bold"
              >
                &
              </motion.span>

              {/* PHASE 6: Groom Name (Nuruddin) Letter-by-Letter Typewriter Reveal */}
              <h1 className="font-script-luxury text-6xl sm:text-7xl md:text-8xl text-[#4A3319] font-normal leading-[1.02] tracking-normal drop-shadow-[0_3px_8px_rgba(74,51,25,0.2)]">
                {groomName.split('').map((char, index) => {
                  const isVisible = nuruddinCharCount > index;
                  return (
                    <span
                      key={index}
                      className="transition-opacity duration-150 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        display: 'inline'
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
              </h1>
            </div>

            {/* PHASE 7: Supporting Invitation Lines */}
            <div className="flex flex-col items-center gap-1 my-1">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={phase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, ease: PREMIUM_EASE }}
                className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.26em] uppercase text-[#4A381E] font-bold leading-relaxed"
              >
                INVITE YOU TO JOIN THEM
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={phase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, ease: PREMIUM_EASE, delay: 0.12 }}
                className="font-serif-luxury text-[11px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#6E5430] font-bold opacity-95"
              >
                IN CELEBRATING THEIR WEDDING
              </motion.p>
            </div>

            {/* PHASE 8: Luxury Invitation Hashtag Badge */}
            {weddingData.hashtag && (
              <div className="my-1">
                <LuxuryHashtagBadge
                  hashtag={weddingData.hashtag}
                  isTriggered={phase >= 8}
                  delay={100}
                />
              </div>
            )}

            {/* PHASE 9: Integrated Scroll Prompt Cue */}
            <motion.button
              onClick={scrollToNext}
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 9 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, ease: PREMIUM_EASE }}
              whileHover={{ scale: 1.04 }}
              className="mt-1 sm:mt-2 flex flex-col items-center gap-0.5 text-[#4A381E] cursor-pointer group"
              aria-label="Scroll to view invitation details"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="font-serif-luxury text-[9.5px] sm:text-[11px] tracking-[0.3em] uppercase font-bold text-[#4A381E] drop-shadow-xs">
                  YOUR INVITATION AWAITS
                </span>
                <svg className="w-3.5 h-3.5 text-[#6E5430] group-hover:text-[#4A381E] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};




