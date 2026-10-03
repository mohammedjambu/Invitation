import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern } from './Ornament';

interface HeroInvitationProps {
  isUnveiled?: boolean;
}

export const HeroInvitation: React.FC<HeroInvitationProps> = ({ isUnveiled = true }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('nikah-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F0E5] py-0 sm:py-6 md:py-8 px-0 sm:px-4">
      {/* Seamless background geometric watermark pattern matching all other sections */}
      <GeometricWatermarkPattern />

      {/* Soft warm radial backdrop glow centered behind portrait invitation card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-radial from-[#F5E5D3]/70 via-[#FDF9F3]/40 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 
        PHYSICAL PORTRAIT INVITATION CARD FRAME (9:16 Aspect Ratio)
        Fills mobile screen completely; presents as a centered luxury portrait card on desktop
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: isUnveiled ? 1 : 0, scale: isUnveiled ? 1 : 0.96 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[100vh] sm:h-[92vh] max-w-[500px] sm:max-w-[520px] aspect-[9/16] sm:rounded-2xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(100,75,40,0.22),0_10px_25px_-8px_rgba(100,75,40,0.12),0_0_0_1px_rgba(184,154,104,0.35)] bg-[#D4C4A9] flex flex-col justify-between select-none z-10"
      >
        {/* Layer 1: Exact Photorealistic Invitation Card Frame */}
        <img
          src="/images/hero_invitation_frame.png"
          alt="Mariya & Nuruddin Digital Wedding Invitation"
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
        />

        {/* Layer 2: Subtle Ambient Warmth Overlay on Central Paper */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,253,248,0.22)_0%,rgba(212,196,169,0)_70%)] pointer-events-none z-10" />

        {/* Layer 3: Subtle Animated Flame Flickers on Chandelier Candles */}
        <div className="absolute top-[8.2%] left-1/2 -translate-x-1/2 z-15 pointer-events-none w-full flex justify-center">
          <div className="relative w-[50%] max-w-[240px] h-16">
            {/* Outer Left Candle Flame */}
            <motion.div
              animate={{ opacity: [0.4, 0.95, 0.5, 0.85, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
              className="absolute left-[9.5%] top-[30%] w-3 h-3 rounded-full bg-[#FFE082] filter blur-[3px] opacity-80"
            />
            {/* Inner Left Candle Flame */}
            <motion.div
              animate={{ opacity: [0.7, 0.4, 0.9, 0.55, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              className="absolute left-[30.5%] top-[48%] w-3.5 h-3.5 rounded-full bg-[#FFB74D] filter blur-[3.5px] opacity-85"
            />
            {/* Inner Right Candle Flame */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.45, 0.8, 0.65] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute right-[30.5%] top-[48%] w-3.5 h-3.5 rounded-full bg-[#FFB74D] filter blur-[3.5px] opacity-85"
            />
            {/* Outer Right Candle Flame */}
            <motion.div
              animate={{ opacity: [0.85, 0.5, 0.95, 0.6, 0.75] }}
              transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
              className="absolute right-[9.5%] top-[30%] w-3 h-3 rounded-full bg-[#FFE082] filter blur-[3px] opacity-80"
            />
          </div>
        </div>

        {/* Layer 4: ELEGANT CENTRAL INVITATION CONTENT AREA */}
        <div className="absolute top-[31%] bottom-[12%] left-[8%] right-[8%] z-20 flex flex-col justify-between items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: isUnveiled ? 1 : 0, y: isUnveiled ? 0 : 15 }}
            transition={{ duration: 1.2, delay: 0.25 }}
            className="w-full flex flex-col items-center justify-between h-full py-1 sm:py-2"
          >
            {/* 1. Top Ceremonial Inscription: 786 / 110 */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-serif-luxury text-sm sm:text-base md:text-lg text-[#4A381E] tracking-[0.32em] font-bold uppercase drop-shadow-xs">
                786 / 110
              </span>
              <div className="flex items-center gap-2.5 opacity-75">
                <span className="h-[1px] w-6 sm:w-10 bg-[#775E38]" />
                <DawoodiBohraStarPattern size={13} className="text-[#5C4425]" />
                <span className="h-[1px] w-6 sm:w-10 bg-[#775E38]" />
              </div>
            </div>

            {/* 2. Formal Blessing & Family Introduction */}
            <div className="flex flex-col items-center gap-1 my-1">
              <p className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.28em] uppercase text-[#4A381E] font-bold leading-relaxed">
                WITH THE BLESSINGS OF AQA MOULA TUS
              </p>
              <p className="font-serif-luxury text-[11px] sm:text-xs md:text-sm tracking-[0.24em] uppercase text-[#6E5430] font-bold opacity-95">
                AND WITH THE LOVE OF THEIR FAMILIES
              </p>
            </div>

            {/* 3. COUPLE NAMES — PRIMARY HERO FOCUS */}
            <div className="my-1 sm:my-2 flex flex-col items-center">
              <h1 className="font-script-luxury text-6xl sm:text-7xl md:text-8xl text-[#4A3319] font-normal leading-[1.02] tracking-normal drop-shadow-[0_3px_8px_rgba(74,51,25,0.2)]">
                {weddingData.brideName}
              </h1>

              <span className="font-serif-luxury italic text-2xl sm:text-3xl text-[#6E5430] my-0.5 font-bold">
                &
              </span>

              <h1 className="font-script-luxury text-6xl sm:text-7xl md:text-8xl text-[#4A3319] font-normal leading-[1.02] tracking-normal drop-shadow-[0_3px_8px_rgba(74,51,25,0.2)]">
                {weddingData.groomName}
              </h1>
            </div>

            {/* 4. Supporting Invitation Line */}
            <div className="flex flex-col items-center gap-1 my-1">
              <p className="font-serif-luxury text-xs sm:text-sm md:text-base tracking-[0.26em] uppercase text-[#4A381E] font-bold leading-relaxed">
                INVITE YOU TO JOIN THEM
              </p>
              <p className="font-serif-luxury text-[11px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#6E5430] font-bold opacity-95">
                IN CELEBRATING THEIR WEDDING
              </p>
            </div>

            {/* 5. Luxury Invitation Hashtag Badge */}
            {weddingData.hashtag && (
              <div className="my-1">
                <div className="inline-flex items-center justify-center px-5 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#FAF5EC]/90 backdrop-blur-sm border border-[#B89A68]/50 shadow-[0_4px_14px_rgba(92,68,37,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.25em] font-bold text-[#4A381E]">
                    {weddingData.hashtag}
                  </span>
                </div>
              </div>
            )}

            {/* 6. Integrated Scroll Prompt Cue (Clean Text & Arrow without BG pill) */}
            <motion.button
              onClick={scrollToNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: isUnveiled ? 0.95 : 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 1 }}
              className="mt-1 sm:mt-2 flex flex-col items-center gap-0.5 text-[#4A381E] cursor-pointer group"
              aria-label="Scroll to view invitation details"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

