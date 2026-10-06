import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern, CornerFiligree } from './Ornament';
import { PREMIUM_EASE } from '../utils/motion';

export const CoupleStory: React.FC = () => {
  const coupleStoryRef = useRef<HTMLElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);

  // Dedicated viewport observer for top section (Header, Photo, Headline)
  const isTopInView = useInView(coupleStoryRef, {
    amount: 0.2
  });

  // Dedicated viewport observer for story text & hashtag signature:
  // Triggers strictly when the user scrolls down and reaches the upper story paragraph!
  const isTextInView = useInView(storyTextRef, {
    amount: 0.35,
    margin: '0px 0px -40px 0px'
  });

  const hasTopTriggeredRef = useRef(false);
  const hasTextTriggeredRef = useRef(false);

  const [topPhase, setTopPhase] = useState(0);
  const [textPhase, setTextPhase] = useState(0);
  const [hashtagCharCount, setHashtagCharCount] = useState(0);

  const hashtagText = weddingData.hashtag || '#NoorKiHoor';

  // 1. Top Section Reveal Sequence (Header, Photo, Headline)
  useEffect(() => {
    if (hasTopTriggeredRef.current) return;
    if (!isTopInView) return;

    hasTopTriggeredRef.current = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTopPhase(10);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: Section Header ("A LITTLE ABOUT US")
    setTopPhase(1);

    // Phase 2: Photograph "Memory Developing" Reveal (t = 200ms)
    timers.push(setTimeout(() => setTopPhase(2), 200));

    // Phase 3-5: Editorial Headline Lines (t = 550ms - 890ms)
    timers.push(setTimeout(() => setTopPhase(3), 550));
    timers.push(setTimeout(() => setTopPhase(4), 720));
    timers.push(setTimeout(() => setTopPhase(5), 890));

    // Phase 6: Divider under headline (t = 1150ms)
    timers.push(setTimeout(() => setTopPhase(6), 1150));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isTopInView]);

  // 2. Story Paragraph & Hashtag Signature Sequence
  // Triggers slowly as the user actually scrolls down and reaches the upper paragraph!
  useEffect(() => {
    if (hasTextTriggeredRef.current) return;
    if (!isTextInView) return;

    hasTextTriggeredRef.current = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTextPhase(10);
      setHashtagCharCount(hashtagText.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Text Phase 1: Personal Story Quote Paragraph (t = 0ms)
    setTextPhase(1);

    // Text Phase 2: Aqa Moula TUS statement (t = 450ms)
    timers.push(setTimeout(() => setTextPhase(2), 450));

    // Text Phase 3: Ornamental Memory Star (t = 850ms)
    timers.push(setTimeout(() => setTextPhase(3), 850));

    // Text Phase 4: Hashtag Script Signature Slow Ink Typing (t = 1200ms)
    // Slowly types out letter-by-letter as the user reads the invitation!
    timers.push(setTimeout(() => {
      setTextPhase(4);
      for (let i = 1; i <= hashtagText.length; i++) {
        timers.push(setTimeout(() => {
          setHashtagCharCount(i);
        }, i * 160)); // 160ms per character for a deliberate, elegant ink reveal
      }
    }, 1200));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [isTextInView, hashtagText.length]);

  return (
    <section
      id="couple-story-section"
      ref={coupleStoryRef as any}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden text-center select-none"
    >
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT BACKDROP GLOW */}
      <GeometricWatermarkPattern />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-radial from-[#F5E5D3]/50 via-[#FDF9F3]/25 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. INTIMATE EDITORIAL STORY CONTAINER */}
      <div className="max-w-2xl sm:max-w-3xl mx-auto relative z-10 flex flex-col items-center">

        {/* PHASE 1: SECTION HEADER — "A LITTLE ABOUT US" */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={topPhase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, ease: PREMIUM_EASE }}
          className="mb-6 sm:mb-8 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-[#6D522B]/75">
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={topPhase >= 1 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: PREMIUM_EASE }}
              className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-right"
            />
            <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={topPhase >= 1 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, ease: PREMIUM_EASE }}
              className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-left"
            />
          </div>
          <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.32em] uppercase font-bold text-[#6D522B]">
            A LITTLE ABOUT US
          </span>
        </motion.div>

        {/* PHASE 2: EDITORIAL PORTRAIT PHOTOGRAPH — MEMORY DEVELOPING REVEAL */}
        <div className="my-3 sm:my-5 relative group">
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(5px)',
              clipPath: 'inset(6% 4% 6% 4%)'
            }}
            animate={
              topPhase >= 2
                ? {
                    opacity: 1,
                    scale: 1.0,
                    filter: 'blur(0px)',
                    clipPath: 'inset(0% 0% 0% 0%)'
                  }
                : {
                    opacity: 0,
                    scale: 1.05,
                    filter: 'blur(5px)',
                    clipPath: 'inset(6% 4% 6% 4%)'
                  }
            }
            transition={{ duration: 1.3, ease: PREMIUM_EASE }}
            className="relative w-65 sm:w-[320px] md:w-85 aspect-3/4 mx-auto p-2.5 bg-[#FAF4EA] rounded-t-[140px] sm:rounded-t-[170px] rounded-b-2xl border border-[#B89A68]/45 shadow-[0_20px_50px_-10px_rgba(100,75,40,0.18),0_0_0_1px_rgba(184,154,104,0.3)] transform-gpu"
          >
            {/* Inner Fine Gold Foil Arched Border */}
            <div className="absolute inset-4 rounded-t-[125px] sm:rounded-t-[155px] rounded-b-xl border border-[#D8BE94]/75 pointer-events-none z-20" />
            
            {/* Corner Filigrees outside photo corners */}
            <CornerFiligree position="top-left" className="top-4 left-4 w-6! h-6! text-[#B89A68]/60 z-20" />
            <CornerFiligree position="top-right" className="top-4 right-4 w-6! h-6! text-[#B89A68]/60 z-20" />

            {/* Photo Container */}
            <div className="w-full h-full rounded-t-[128px] sm:rounded-t-[158px] rounded-b-xl overflow-hidden relative bg-[#EAD8BA]">
              <img
                src={weddingData.coupleStory.image}
                alt={`${weddingData.groomName} & ${weddingData.brideName}`}
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-103"
              />
              {/* Soft Lighting Vignette Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#4A381E]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* PHASE 3, 4, 5: MAIN EDITORIAL HEADLINE — LINE-BY-LINE MASKED REVEAL */}
        <div className="my-6 sm:my-8 max-w-md mx-auto flex flex-col items-center">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#4A381E] font-normal leading-[1.15] tracking-wide uppercase drop-shadow-xs flex flex-col items-center gap-0.5">
            {/* Line 1: IT WAS ALWAYS */}
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={topPhase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
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
                animate={topPhase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
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
                animate={topPhase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
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
          animate={topPhase >= 6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="my-2 flex items-center justify-center gap-3 text-[#B89A68]/60"
        >
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={topPhase >= 6 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="h-[0.5px] w-12 sm:w-16 bg-linear-to-r from-transparent to-[#B89A68]/50 origin-right"
          />
          <span className="text-[7px]">◆</span>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={topPhase >= 6 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="h-[0.5px] w-12 sm:w-16 bg-linear-to-l from-transparent to-[#B89A68]/50 origin-left"
          />
        </motion.div>

        {/* STORY TEXT & HASHTAG CONTAINER: Observer attached here so hashtag animation triggers strictly when user reaches upper paragraph */}
        <div ref={storyTextRef} className="w-full flex flex-col items-center">
          
          {/* TEXT PHASE 1: PERSONAL STORY QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={textPhase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.85, ease: PREMIUM_EASE }}
            className="my-2 sm:my-4 max-w-lg mx-auto px-2"
          >
            <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] leading-relaxed font-normal">
              "Some stories are written in grand moments. <br />
              Ours has been shaped by the quiet ones — <br className="hidden sm:inline" />
              the conversations, the smiles, the families,<br className="hidden sm:inline" />
              and all the little moments that brought us here."
            </p>
          </motion.div>

          {/* TEXT PHASE 2: PERSONAL STORY SENTENCE (AQA MOULA TUS STATEMENT) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={textPhase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            className="mt-4 sm:mt-5 mb-5 max-w-md mx-auto px-2"
          >
            <p className="font-serif-luxury italic text-sm sm:text-base text-[#6D522B] font-semibold leading-relaxed">
              "With the Dua and Raza Mubarak of Aqa Moula TUS, <br />
              we look forward to write the next chapter together."
            </p>
          </motion.div>

          {/* TEXT PHASE 3: ORNAMENTAL MEMORY MARK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={textPhase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="my-2 flex items-center justify-center gap-1.5 text-[#8D7047]/70"
          >
            <span className="h-[0.5px] w-6 bg-[#B89A68]/40" />
            <DawoodiBohraStarPattern size={12} className="text-[#6D522B]" />
            <span className="h-[0.5px] w-6 bg-[#B89A68]/40" />
          </motion.div>

          {/* TEXT PHASE 4: HASHTAG SCRIPT SIGNATURE SLOW INK REVEAL */}
          {/* Triggers slowly letter-by-letter as the user reaches the upper paragraph and reads the invitation */}
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
            animate={textPhase >= 4 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 12, filter: 'blur(3px)' }}
            transition={{ duration: 1.0, ease: PREMIUM_EASE }}
            className="my-3 flex flex-col items-center"
          >
            <h3 className="font-script-luxury text-4xl sm:text-6xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-xs">
              {hashtagText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={
                    textPhase >= 4 && index < hashtagCharCount
                      ? { opacity: 1, filter: 'blur(0px)' }
                      : { opacity: 0, filter: 'blur(4px)' }
                  }
                  transition={{ duration: 0.45, ease: PREMIUM_EASE }}
                  style={{ display: 'inline', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CoupleStory;
