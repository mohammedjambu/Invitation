import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  DawoodiBohraStarPattern,
  MughalArchTop,
  HeroBotanicalCorner,
  GeometricWatermarkPattern,
  CornerFiligree
} from './Ornament';
import { ChevronDown } from 'lucide-react';

export const HeroInvitation: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax subtle transformations over initial scroll
  const backgroundY = useTransform(scrollY, [0, 800], [0, 40]);
  const botanicalY = useTransform(scrollY, [0, 800], [0, -25]);
  const contentY = useTransform(scrollY, [0, 800], [0, 15]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('nikah-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] sm:min-h-[100vh] h-auto w-full flex items-center justify-center overflow-hidden bg-[#FAF5EE] py-10 sm:py-14 px-4 sm:px-6 md:px-8 selection:bg-[#D8BE94]/30">
      
      {/* 1. ATMOSPHERIC BACKGROUND ENVIRONMENT */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Soft Handmade Paper Radial Warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(245,230,210,0.65)_0%,rgba(250,245,238,0.85)_60%,rgba(248,240,229,1)_100%)]" />

        {/* Faint Architectural Background Linework Image Layer */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply filter blur-[0.5px]">
          <img
            src="/images/hero_background.jpg"
            alt="Palace Architecture Silhouette"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        {/* Almost Invisible Islamic Geometric Watermark Grid */}
        <GeometricWatermarkPattern className="opacity-[0.035]" />

        {/* Ambient Warm Golden Particles Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#B89A68]/10 rounded-full filter blur-[100px] pointer-events-none" />
      </motion.div>

      {/* 2. OVERFLOWING BOTANICAL BOTTOM CORNER FRAMES (Layered Depth) */}
      <motion.div
        style={{ y: botanicalY }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 z-20 pointer-events-none w-36 sm:w-56 md:w-72"
      >
        <HeroBotanicalCorner position="left" className="w-full h-auto" />
      </motion.div>

      <motion.div
        style={{ y: botanicalY }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-0 z-20 pointer-events-none w-36 sm:w-56 md:w-72"
      >
        <HeroBotanicalCorner position="right" className="w-full h-auto" />
      </motion.div>

      {/* 3. CENTRAL ARCHITECTURAL INVITATION COMPOSITION */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 w-full max-w-2xl lg:max-w-3xl mx-auto my-auto"
      >
        {/* Outer Architectural Islamic Arch Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-t-[140px] sm:rounded-t-[230px] md:rounded-t-[270px] rounded-b-[24px] sm:rounded-b-[36px] p-1.5 sm:p-2.5 bg-gradient-to-b from-[#C5A880]/40 via-[#B89A68]/25 to-[#8D7047]/30 shadow-[0_25px_60px_-15px_rgba(100,75,40,0.18)]"
        >
          {/* Middle Soft Ivory Raised Paper Layer */}
          <div className="relative rounded-t-[132px] sm:rounded-t-[222px] md:rounded-t-[262px] rounded-b-[20px] sm:rounded-b-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F7EFE3]/90 p-6 sm:p-10 md:p-12 border border-[#FFFDF9] shadow-inner text-center">
            
            {/* Inner Fine Dotted Champagne Border */}
            <div className="absolute inset-3 sm:inset-5 md:inset-6 rounded-t-[120px] sm:rounded-t-[206px] md:rounded-t-[244px] rounded-b-[14px] sm:rounded-b-[24px] border border-dashed border-[#B89A68]/35 pointer-events-none" />

            {/* Corner Decorative Ornaments */}
            <CornerFiligree position="top-left" className="top-4 left-4 sm:top-7 sm:left-7 opacity-40" />
            <CornerFiligree position="top-right" className="top-4 right-4 sm:top-7 sm:right-7 opacity-40" />
            <CornerFiligree position="bottom-left" className="bottom-4 left-4 sm:bottom-7 sm:left-7 opacity-40" />
            <CornerFiligree position="bottom-right" className="bottom-4 right-4 sm:bottom-7 sm:right-7 opacity-40" />

            {/* STAGE 3: Top Arch Crest & Ceremonial 786/110 Inscription */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-2 sm:pt-4 mb-2 sm:mb-4"
            >
              {/* Mughal Arch Top Finial Vector */}
              <MughalArchTop className="mb-2 sm:mb-3 opacity-90" />

              {/* 786 / 110 Inscription */}
              <p className="font-arabic-luxury text-xl sm:text-3xl text-[#8D7047] tracking-widest leading-none font-medium">
                786 / 110
              </p>

              {/* Tiny Champagne-Gold 8-Point Rosette */}
              <div className="flex items-center justify-center gap-2 mt-1.5 text-[#B89A68]">
                <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#B89A68]/50" />
                <DawoodiBohraStarPattern size={16} className="text-[#B89A68] opacity-80" />
                <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#B89A68]/50" />
              </div>
            </motion.div>

            {/* STAGE 4: Formal Introduction Wording */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="my-3 sm:my-5"
            >
              <p className="font-serif-luxury text-[11px] sm:text-xs md:text-sm tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#7D6645] font-normal leading-relaxed">
                TOGETHER WITH THEIR FAMILIES<br />
                <span className="text-[10px] sm:text-[11px] tracking-[0.25em] opacity-90">REQUEST THE HONOR OF YOUR PRESENCE</span>
              </p>
            </motion.div>

            {/* STAGE 5: COUPLE NAMES — PRIMARY HERO FOCUS */}
            <div className="my-4 sm:my-7 py-1 relative">
              {/* Bride Name: Mariya */}
              <motion.h1
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.9, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                className="font-script-luxury text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#8D7047] font-normal leading-tight tracking-normal drop-shadow-[0_2px_4px_rgba(141,112,71,0.15)]"
              >
                {weddingData.brideName}
              </motion.h1>

              {/* Ampersand */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="block font-serif-luxury italic text-xl sm:text-3xl text-[#B89A68] my-0.5 sm:my-1"
              >
                &
              </motion.span>

              {/* Groom Name: Nuruddin */}
              <motion.h1
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.3, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                className="font-script-luxury text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#8D7047] font-normal leading-tight tracking-normal drop-shadow-[0_2px_4px_rgba(141,112,71,0.15)]"
              >
                {weddingData.groomName}
              </motion.h1>
            </div>

            {/* STAGE 6: Wedding Date & Hijri Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="space-y-1 my-3 sm:my-5"
            >
              <p className="font-serif-luxury text-lg sm:text-2xl font-semibold text-[#3D3227] tracking-wide">
                {weddingData.dateDisplay}
              </p>
              <p className="font-serif-luxury italic text-xs sm:text-sm text-[#8D7047] opacity-90">
                {weddingData.hijriDateDisplay}
              </p>
            </motion.div>

            {/* Tiny Ornamental Divider */}
            <div className="flex items-center justify-center gap-2 my-2 sm:my-3">
              <span className="h-[1px] w-8 bg-[#B89A68]/30" />
              <span className="text-[#B89A68] text-[8px]">◆</span>
              <span className="h-[1px] w-8 bg-[#B89A68]/30" />
            </div>

            {/* STAGE 7: Royal Venue & Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="mb-4 sm:mb-6"
            >
              <p className="font-sans-luxury text-[11px] sm:text-xs text-[#6B5B49] uppercase tracking-[0.2em] font-medium">
                {weddingData.venue.name} — {weddingData.venue.city}
              </p>
            </motion.div>

            {/* STAGE 9: Nikah Status Badge (Ceremonial Gold Foil Seal) */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9]/90 border border-[#B89A68]/50 shadow-sm text-[#8D7047]"
            >
              <DawoodiBohraStarPattern size={14} className="text-[#B89A68]" />
              <span className="font-serif-luxury italic text-xs sm:text-sm font-medium tracking-wide">
                {weddingData.nikahStatement}
              </span>
            </motion.div> */}

          </div>
        </motion.div>
      </motion.div>

      {/* 4. "SCROLL TO DISCOVER" ELEGANT CUE */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-[#8D7047] opacity-80 hover:opacity-100 transition-opacity cursor-pointer group"
        aria-label="Scroll to discover invitation"
      >
        <span className="font-serif-luxury text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium">
          SCROLL TO DISCOVER
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#B89A68] group-hover:translate-y-0.5 transition-transform" />
        </motion.div>
      </motion.button>

      {/* Soft Bottom Transition Gradient Into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF5EE] to-transparent pointer-events-none z-10" />
    </section>
  );
};

