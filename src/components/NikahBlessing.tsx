import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  CornerFiligree,
  DawoodiBohraStarPattern,
  GeometricWatermarkPattern,
  BotanicalGoldCorner
} from './Ornament';
import { PREMIUM_EASE } from '../utils/motion';

export const NikahBlessing: React.FC = () => {
  const photoSrc = weddingData.nikahImage || weddingData.coupleStory.image || "/images/nikah.jpeg";

  const nikahRef = useRef<HTMLElement>(null);
  // Dedicated viewport observer: triggers strictly when Nikah section enters 20% of viewport on scroll
  const isInView = useInView(nikahRef, { amount: 0.2 });

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
      setPhase(11);
      setMariyaCharCount(brideName.length);
      setNuruddinCharCount(groomName.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: Outer Card Frame Gently Appears (t = 0ms)
    setPhase(1);

    // Phase 2: Fine Gold Border & Header Badge (t = 200ms)
    timers.push(setTimeout(() => setPhase(2), 200));

    // Phase 3: Arabic Calligraphy Blessing (t = 450ms)
    timers.push(setTimeout(() => setPhase(3), 450));

    // Phase 4: Bride Name (Mariya) Typewriter Start (t = 750ms)
    timers.push(setTimeout(() => {
      setPhase(4);
      for (let i = 1; i <= brideName.length; i++) {
        timers.push(setTimeout(() => {
          setMariyaCharCount(i);
        }, i * 130));
      }
    }, 750));

    // Phase 5: Ampersand Reveal (t = 750 + brideName.length * 130 + 200)
    const ampersandTime = 750 + brideName.length * 130 + 200;
    timers.push(setTimeout(() => {
      setPhase(5);
    }, ampersandTime));

    // Phase 6: Groom Name (Nuruddin) Typewriter Start (t = ampersandTime + 250ms)
    const nuruddinStartTime = ampersandTime + 250;
    timers.push(setTimeout(() => {
      setPhase(6);
      for (let i = 1; i <= groomName.length; i++) {
        timers.push(setTimeout(() => {
          setNuruddinCharCount(i);
        }, i * 130));
      }
    }, nuruddinStartTime));

    // Phase 7: Photograph Unveiling - Emotional Centerpiece (t = nuruddinStartTime + groomName.length * 130 + 250)
    const photoTime = nuruddinStartTime + groomName.length * 130 + 250;
    timers.push(setTimeout(() => {
      setPhase(7);
    }, photoTime));

    // Phase 8: Hijri Date Badge & Identifier (t = photoTime + 700ms)
    const dateBadgeTime = photoTime + 700;
    timers.push(setTimeout(() => {
      setPhase(8);
    }, dateBadgeTime));

    // Phase 9: Sacred Aqa Moula TUS Statement & Location (t = dateBadgeTime + 350ms)
    const statementTime = dateBadgeTime + 350;
    timers.push(setTimeout(() => {
      setPhase(9);
    }, statementTime));

    // Phase 10: Final Quiet Blessing Line (t = statementTime + 400ms)
    const finalTime = statementTime + 400;
    timers.push(setTimeout(() => {
      setPhase(10);
    }, finalTime));

    // Complete State
    timers.push(setTimeout(() => {
      setPhase(11);
    }, finalTime + 500));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isInView, brideName.length, groomName.length]);

  return (
    <section id="nikah-section" ref={nikahRef as any} className="relative py-16 sm:py-24 px-3 sm:px-6 bg-[#F8F0E5] overflow-hidden">
      {/* Background Islamic Geometric Watermark */}
      <GeometricWatermarkPattern />

      {/* Soft Warm Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-162.5 bg-radial from-[#F5E5D3]/60 via-[#FDF9F3]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-135 sm:max-w-145 mx-auto relative z-10">
        {/* PHASE 1: Physical Heirloom Canvas Frame Fades & Gently Settles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.985 }}
          transition={{ duration: 0.95, ease: PREMIUM_EASE }}
          className="relative bg-linear-to-b from-[#FFFDF9]/98 via-[#FDF8EE]/98 to-[#F8F0E5]/98 backdrop-blur-md rounded-t-[150px] sm:rounded-t-[200px] rounded-b-3xl p-6 sm:p-12 md:p-14 border border-[#B89A68]/35 shadow-[0_25px_60px_-15px_rgba(100,75,40,0.14),0_0_0_1px_rgba(184,154,104,0.25)] text-center select-none"
        >
          {/* PHASE 2: Inner Dashed Gold Thread Outline & Filigrees */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="absolute inset-3 sm:inset-4.5 rounded-t-[138px] sm:rounded-t-[188px] rounded-b-2xl border border-dashed border-[#B89A68]/30 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          >
            <CornerFiligree position="top-left" className="top-4 left-4 sm:top-6 sm:left-6" />
            <CornerFiligree position="top-right" className="top-4 right-4 sm:top-6 sm:right-6" />
          </motion.div>

          {/* PHASE 2: Section Opening Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="pt-6 sm:pt-4 mb-2"
          >
            <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.38em] uppercase text-[#775E38] font-bold block">
              NIKAH MUBARAK
            </span>
          </motion.div>

          {/* PHASE 3: Arabic Calligraphy & Decorative Star Divider */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            className="mb-4 sm:mb-5"
          >
            <h2 className="font-arabic-luxury text-2xl sm:text-3xl md:text-4xl text-[#6D522B] leading-relaxed tracking-wide my-1 px-2 drop-shadow-xs">
              {weddingData.nikahHeadlineArabic}
            </h2>

            <div className="flex items-center justify-center gap-2.5 my-2.5 text-[#B89A68]">
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-8 sm:w-14 bg-[#B89A68]/50 origin-right"
              />
              <DawoodiBohraStarPattern size={12} className="text-[#775E38]" />
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 3 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-8 sm:w-14 bg-[#B89A68]/50 origin-left"
              />
            </div>
          </motion.div>

          {/* PHASE 4, 5, 6: Couple Names Letter-by-Letter Typewriter Reveal */}
          <div className="mb-5 sm:mb-7">
            <h1 className="font-script-luxury text-4xl sm:text-5xl md:text-6xl text-[#6D522B] font-normal leading-tight my-1 drop-shadow-[0_2px_4px_rgba(109,82,43,0.12)] flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              {/* Mariya Typewriter */}
              <span>
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
              </span>

              {/* Ampersand Accent */}
              <motion.span
                initial={{ opacity: 0, scale: 0.96 }}
                animate={phase >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: PREMIUM_EASE }}
                className="mx-1 sm:mx-1.5 inline-block text-3xl sm:text-4xl md:text-5xl font-serif-luxury italic text-[#8D7047]"
              >
                &
              </motion.span>

              {/* Nuruddin Typewriter */}
              <span>
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
              </span>
            </h1>
          </div>

          {/* PHASE 7: Arched Photograph Reveal — Emotional Centerpiece (scale: 1.04 -> 1, soft fade) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={phase >= 7 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.1, ease: PREMIUM_EASE }}
            className="relative max-w-70 sm:max-w-82.5 mx-auto my-5 sm:my-7 group"
          >
            {/* Outer Matting Frame with Soft Rounded Arch */}
            <div className="relative p-3 sm:p-4 bg-[#FFFDF9] rounded-t-[130px] sm:rounded-t-[160px] rounded-b-2xl border border-[#B89A68]/40 shadow-[0_12px_35px_-8px_rgba(100,75,40,0.14),0_0_0_1px_rgba(184,154,104,0.2)]">
              {/* Inner Fine Gold Double Outline */}
              <div className="p-1 sm:p-1.5 rounded-t-[122px] sm:rounded-t-[152px] rounded-b-xl border border-[#D8BE94]/50 relative">
                {/* Arch Corner Filigrees */}
                <CornerFiligree position="top-left" className="top-2 left-2 w-6! h-6! text-[#B89A68]/45" />
                <CornerFiligree position="top-right" className="top-2 right-2 w-6! h-6! text-[#B89A68]/45" />

                {/* Arched Photo Window */}
                <div className="relative overflow-hidden rounded-t-[115px] sm:rounded-t-[145px] rounded-b-lg border border-[#B89A68]/30 aspect-3/4 bg-[#EFE0CC]">
                  <motion.img
                    src={photoSrc}
                    alt="Nikah Solemnization Portrait"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={phase >= 7 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
                    transition={{ duration: 1.2, ease: PREMIUM_EASE }}
                    className="w-full h-full object-cover object-top filter saturate-[0.98] contrast-[1.01] transition-transform duration-1000 group-hover:scale-103"
                  />
                  {/* Gentle Inner Vignette Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#3D3227]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* PHASE 8: Supporting Hijri Date Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={phase >= 8 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="flex flex-col items-center gap-1.5 my-5 sm:my-6"
          >
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#FAF5EC]/90 backdrop-blur-sm border border-[#B89A68]/45 shadow-[0_4px_14px_rgba(92,68,37,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <DawoodiBohraStarPattern size={12} className="text-[#8D7047]" />
              <span className="font-serif-luxury text-[10.5px] sm:text-xs tracking-[0.26em] uppercase font-bold text-[#4A381E]">
                NIKAH · {weddingData.hijriNikahDateDisplay || weddingData.hijriDateDisplay}
              </span>
              <DawoodiBohraStarPattern size={12} className="text-[#8D7047]" />
            </div>

            <p className="font-serif-luxury text-[10px] sm:text-[11px] tracking-[0.26em] uppercase font-semibold text-[#8D7047]/90 mt-0.5">
              {weddingData.nikahLocation}
            </p>
          </motion.div>

          {/* PHASE 9: Main Sacred Nikah Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={phase >= 9 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="my-6 sm:my-8 flex flex-col items-center gap-1 max-w-md mx-auto"
          >
            <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] font-medium tracking-wide leading-snug">
              Our Nikah was performed on the hands of
            </p>
            <p className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#6D522B] font-bold tracking-wider">
              Aqa Moula TUS
            </p>
          </motion.div>

          {/* PHASE 10: Final Blessing Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={phase >= 10 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="pt-2 pb-3 max-w-md mx-auto relative"
          >
            <div className="flex items-center justify-center gap-2 mb-2.5 opacity-60">
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 10 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-8 bg-[#B89A68] origin-right"
              />
              <span className="text-[7px] text-[#775E38]">✦</span>
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={phase >= 10 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.6, ease: PREMIUM_EASE }}
                className="h-[0.5px] w-8 bg-[#B89A68] origin-left"
              />
            </div>

            <p className="font-serif-luxury italic text-sm sm:text-sm text-[#775E38] tracking-wide leading-relaxed">
              A blessed beginning, under the Dua and Raza Mubarak of Aqa Moula TUS.
            </p>

            {/* Subtle Corner Accents */}
            <BotanicalGoldCorner position="bottom-left" className="bottom-0 left-0" />
            <BotanicalGoldCorner position="bottom-right" className="bottom-0 right-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};






