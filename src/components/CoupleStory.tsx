import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern, CornerFiligree } from './Ornament';
import { PREMIUM_EASE } from '../utils/motion';

export const CoupleStory: React.FC = () => {
  const coupleStoryRef = useRef<HTMLElement>(null);
  
  // Dedicated viewport trigger: animation starts strictly when Couple Story enters 20% of viewport on scroll
  const isInView = useInView(coupleStoryRef, { amount: 0.2 });

  const hasTriggeredRef = useRef(false);
  const [phase, setPhase] = useState(0);
  const [hashtagCharCount, setHashtagCharCount] = useState(0);

  // Subtle Parallax effect tied to scroll when section is visible
  const { scrollYProgress } = useScroll({
    target: coupleStoryRef,
    offset: ['start end', 'end start']
  });
  const photoParallaxY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const hashtagText = weddingData.hashtag || '#NoorKiHoor';

  useEffect(() => {
    if (hasTriggeredRef.current) return;
    if (!isInView) return;

    hasTriggeredRef.current = true;

    // Respect user reduced-motion setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase(12);
      setHashtagCharCount(hashtagText.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: "A LITTLE ABOUT US" Label & Top Star Ornament (t = 0ms)
    setPhase(1);

    // Phase 2: Photograph "Memory Developing" Reveal (t = 250ms)
    timers.push(setTimeout(() => setPhase(2), 250));

    // Phase 3: Main Editorial Headline Line 1 ("IT WAS ALWAYS") (t = 650ms - overlaps elegantly before photo finishes)
    timers.push(setTimeout(() => setPhase(3), 650));

    // Phase 4: Main Editorial Headline Line 2 ("THE LITTLE") (t = 820ms)
    timers.push(setTimeout(() => setPhase(4), 820));

    // Phase 5: Main Editorial Headline Line 3 ("THINGS") (t = 990ms)
    timers.push(setTimeout(() => setPhase(5), 990));

    // Phase 6: Decorative Star Divider under headline (t = 1350ms)
    timers.push(setTimeout(() => setPhase(6), 1350));

    // Phase 7: Personal Story Quote ("Not one big moment...") (t = 1700ms)
    timers.push(setTimeout(() => setPhase(7), 1700));

    // Phase 8: Personal Story Sentence (Aqa Moula TUS statement) (t = 2100ms)
    timers.push(setTimeout(() => setPhase(8), 2100));

    // Phase 9: Ornamental Memory Mark (t = 2500ms)
    timers.push(setTimeout(() => setPhase(9), 2500));

    // Phase 10: Hashtag Script Signature Typewriter Ink Reveal (t = 2850ms)
    timers.push(setTimeout(() => {
      setPhase(10);
      for (let i = 1; i <= hashtagText.length; i++) {
        timers.push(setTimeout(() => {
          setHashtagCharCount(i);
        }, i * 110));
      }
    }, 2850));

    // Phase 11: Hashtag Crest Badge Reveal (t = 3500ms)
    timers.push(setTimeout(() => setPhase(11), 3500));

    // Complete State (t = 4000ms)
    timers.push(setTimeout(() => {
      setPhase(12);
    }, 4000));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isInView, hashtagText.length]);

  return (
    <section
      id="couple-story-section"
      ref={coupleStoryRef as any}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden text-center select-none"
    >
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT BACKDROP GLOW */}
      <GeometricWatermarkPattern />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#F5E5D3]/50 via-[#FDF9F3]/25 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. INTIMATE EDITORIAL STORY CONTAINER */}
      <div className="max-w-2xl sm:max-w-3xl mx-auto relative z-10 flex flex-col items-center">

        {/* PHASE 1: SECTION HEADER — "A LITTLE ABOUT US" */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, ease: PREMIUM_EASE }}
          className="mb-6 sm:mb-8 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-[#6D522B]/75">
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: PREMIUM_EASE }}
              className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-right"
            />
            <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: PREMIUM_EASE }}
              className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-left"
            />
          </div>
          <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.32em] uppercase font-bold text-[#6D522B]">
            A LITTLE ABOUT US
          </span>
        </motion.div>

        {/* PHASE 2: EDITORIAL PORTRAIT PHOTOGRAPH — MEMORY DEVELOPING REVEAL + SUBTLE PARALLAX */}
        <div className="my-3 sm:my-5 relative group">
          <motion.div
            style={{ y: photoParallaxY }}
            initial={{
              opacity: 0,
              scale: 1.06,
              filter: 'blur(5px)',
              clipPath: 'inset(6% 4% 6% 4%)'
            }}
            animate={
              phase >= 2
                ? {
                    opacity: 1,
                    scale: 1.0,
                    filter: 'blur(0px)',
                    clipPath: 'inset(0% 0% 0% 0%)'
                  }
                : {
                    opacity: 0,
                    scale: 1.06,
                    filter: 'blur(5px)',
                    clipPath: 'inset(6% 4% 6% 4%)'
                  }
            }
            transition={{ duration: 1.4, ease: PREMIUM_EASE }}
            className="relative w-[260px] sm:w-[320px] md:w-[340px] aspect-[3/4] mx-auto p-2.5 bg-[#FAF4EA] rounded-t-[140px] sm:rounded-t-[170px] rounded-b-2xl border border-[#B89A68]/45 shadow-[0_20px_50px_-10px_rgba(100,75,40,0.18),0_0_0_1px_rgba(184,154,104,0.3)]"
          >
            {/* Inner Fine Gold Foil Arched Border */}
            <div className="absolute inset-4 rounded-t-[125px] sm:rounded-t-[155px] rounded-b-xl border border-[#D8BE94]/75 pointer-events-none z-20" />
            
            {/* Corner Filigrees outside photo corners */}
            <CornerFiligree position="top-left" className="top-4 left-4 !w-6 !h-6 text-[#B89A68]/60 z-20" />
            <CornerFiligree position="top-right" className="top-4 right-4 !w-6 !h-6 text-[#B89A68]/60 z-20" />

            {/* Photo Container */}
            <div className="w-full h-full rounded-t-[128px] sm:rounded-t-[158px] rounded-b-xl overflow-hidden relative bg-[#EAD8BA]">
              <img
                src={weddingData.coupleStory.image}
                alt={`${weddingData.groomName} & ${weddingData.brideName}`}
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-103"
              />
              {/* Soft Lighting Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A381E]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* PHASE 3, 4, 5: MAIN EDITORIAL HEADLINE — LINE-BY-LINE MASKED REVEAL */}
        <div className="my-6 sm:my-8 max-w-md mx-auto flex flex-col items-center">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#4A381E] font-normal leading-[1.15] tracking-wide uppercase font-bold drop-shadow-xs flex flex-col items-center gap-0.5">
            {/* Line 1: IT WAS ALWAYS */}
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                className="block"
              >
                IT WAS ALWAYS
              </motion.span>
            </div>

            {/* Line 2: THE LITTLE */}
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                className="block"
              >
                THE LITTLE
              </motion.span>
            </div>

            {/* Line 3: THINGS */}
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.8, ease: PREMIUM_EASE }}
                className="block"
              >
                THINGS
              </motion.span>
            </div>
          </h2>
        </div>

        {/* PHASE 6: DECORATIVE STAR DIVIDER UNDER HEADLINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={phase >= 6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="my-2 flex items-center justify-center gap-3 text-[#B89A68]/60"
        >
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={phase >= 6 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="h-[0.5px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#B89A68]/50 origin-right"
          />
          <span className="text-[7px]">◆</span>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={phase >= 6 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="h-[0.5px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#B89A68]/50 origin-left"
          />
        </motion.div>

        {/* PHASE 7: PERSONAL STORY QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.85, ease: PREMIUM_EASE }}
          className="my-2 sm:my-4 max-w-lg mx-auto px-2"
        >
          <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] leading-relaxed font-normal">
            
              <>
                "Some stories are written in grand moments. <br />
                Ours has been shaped by the quiet ones — <br className="hidden sm:inline" />
                the conversations, the smiles, the families,<br className="hidden sm:inline" />
                and all the little moments that brought us here."
              </>
            
          </p>
        </motion.div>

        {/* PHASE 8: PERSONAL STORY SENTENCE (AQA MOULA TUS STATEMENT) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 8 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.75, ease: PREMIUM_EASE }}
          className="mt-6 sm:mt-6 mb-6 max-w-md mx-auto px-2"
        >
          <p className="font-serif-luxury italic text-sm sm:text-base md:text-base text-[#6D522B] font-semibold leading-relaxed">
              <>
                "With the Dua and Raza Mubarak of Aqa Moula TUS, <br />
                we look forward to write the next chapter together."
              </>
            
          </p>
        </motion.div>

        {/* PHASE 9: ORNAMENTAL MEMORY MARK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 9 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="my-2 flex items-center justify-center gap-1.5 text-[#8D7047]/70"
        >
          <span className="h-[0.5px] w-6 bg-[#B89A68]/40" />
          <DawoodiBohraStarPattern size={12} className="text-[#6D522B]" />
          <span className="h-[0.5px] w-6 bg-[#B89A68]/40" />
        </motion.div>

        {/* PHASE 10: HASHTAG SCRIPT SIGNATURE INK REVEAL (INSTEAD OF BRIDE & GROOM NAMES) */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
          animate={phase >= 10 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 10, filter: 'blur(3px)' }}
          transition={{ duration: 0.9, ease: PREMIUM_EASE }}
          className="my-3 flex flex-col items-center"
        >
          <h3 className="font-script-luxury text-4xl sm:text-6xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-xs">
            {hashtagText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={
                  phase >= 10 && index < hashtagCharCount
                    ? { opacity: 1, filter: 'blur(0px)' }
                    : { opacity: 0, filter: 'blur(4px)' }
                }
                transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                style={{ display: 'inline', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </motion.span>
            ))}
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

export default CoupleStory;
