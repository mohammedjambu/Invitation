import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern } from './Ornament';

export const ClosingInvitation: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
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
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="max-w-xl sm:max-w-2xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* TOP REFINED ORNAMENT */}
        <motion.div variants={childVariants} className="mb-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-[#6D522B]/75">
            <span className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40" />
            <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
            <span className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40" />
          </div>
        </motion.div>

        {/* COUPLE NAMES CENTERPIECE SIGNATURE */}
        <motion.div variants={childVariants} className="my-2">
          <h2 className="font-script-luxury text-4xl sm:text-6xl md:text-7xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-xs">
            {weddingData.brideName} & {weddingData.groomName}
          </h2>
        </motion.div>

        {/* PERSONAL CLOSING MESSAGE */}
        <motion.div variants={childVariants} className="my-6 sm:my-8 max-w-lg mx-auto px-2">
          <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] leading-relaxed font-normal">
            "We would be honoured to have you with us,<br className="hidden sm:inline" />
            sharing in our joy and blessing this beautiful journey<br className="hidden sm:inline" />
            with your duas."
          </p>
        </motion.div>

        {/* FINE ORNAMENTAL DIVIDER */}
        <motion.div variants={childVariants} className="my-6 sm:my-8 flex items-center justify-center gap-3 text-[#B89A68]/60">
          <span className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#B89A68]/50" />
          <span className="text-[7px]">✦</span>
          <span className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#B89A68]/50" />
        </motion.div>

        {/* BACK TO THE BEGINNING NAVIGATION LINK */}
        <motion.div variants={childVariants} className="mt-2">
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

