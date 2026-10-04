import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern } from './Ornament';
import {
  PREMIUM_EASE,
  SECTION_VIEWPORT,
  lineRevealX
} from '../utils/motion';

export const ClosingInvitation: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Softest, calmest animation sequence for closing the invitation
  const closingContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.12,
        ease: PREMIUM_EASE
      }
    }
  };

  const closingOrnamentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: PREMIUM_EASE
      }
    }
  };

  const closingNamesVariants: Variants = {
    hidden: { opacity: 0, y: 18, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.1,
        ease: PREMIUM_EASE
      }
    }
  };

  const closingMessageVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: PREMIUM_EASE
      }
    }
  };

  const closingDividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: PREMIUM_EASE
      }
    }
  };

  const backToTopVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: PREMIUM_EASE
      }
    }
  };

  return (
    <footer id="closing-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden text-center select-none">
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT RADIAL GLOW */}
      <GeometricWatermarkPattern />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#F5E5D3]/50 via-[#FDF9F3]/25 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. SPACIOUS INTIMATE BACK-PAGE CONTAINER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        variants={closingContainerVariants}
        className="max-w-xl sm:max-w-2xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* STEP 1: TOP REFINED ORNAMENT */}
        <motion.div variants={closingOrnamentVariants} className="mb-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-[#6D522B]/75">
            <motion.span variants={lineRevealX} className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-right" />
            <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
            <motion.span variants={lineRevealX} className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40 origin-left" />
          </div>
        </motion.div>

        {/* STEP 2: COUPLE NAMES CENTERPIECE SIGNATURE */}
        <motion.div variants={closingNamesVariants} className="my-2">
          <h2 className="font-script-luxury text-4xl sm:text-6xl md:text-7xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-xs">
            {weddingData.brideName} & {weddingData.groomName}
          </h2>
        </motion.div>

        {/* STEP 3: PERSONAL CLOSING MESSAGE */}
        <motion.div variants={closingMessageVariants} className="my-6 sm:my-8 max-w-lg mx-auto px-2">
          <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] leading-relaxed font-normal">
            "We would be honoured to have you with us, <br className="hidden sm:inline" />
            sharing in our joy and blessing this beautiful journey <br className="hidden sm:inline" />
            with your duas."
          </p>
        </motion.div>

        {/* STEP 4: FINE ORNAMENTAL DIVIDER */}
        <motion.div variants={closingDividerVariants} className="my-6 sm:my-8 flex items-center justify-center gap-3 text-[#B89A68]/60 w-full">
          <motion.span variants={lineRevealX} className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#B89A68]/50 origin-right" />
          <span className="text-[7px]">✦</span>
          <motion.span variants={lineRevealX} className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#B89A68]/50 origin-left" />
        </motion.div>

        {/* STEP 5: BACK TO THE BEGINNING NAVIGATION LINK */}
        <motion.div variants={backToTopVariants} className="mt-2">
          <button
            onClick={scrollToTop}
            className="font-serif-luxury text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#6D522B] hover:text-[#4A381E] transition-colors cursor-pointer inline-block py-2"
          >
            BACK TO THE BEGINNING ↑
          </button>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default ClosingInvitation;
