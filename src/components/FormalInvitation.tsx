import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { weddingData } from '../config/weddingData';

// Bespoke Mughal Islamic Architectural Arabesque Base & Medallion Ornament
const MughalBaseOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 500 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto pointer-events-none ${className}`}
  >
    <defs>
      {/* Matte Antique Gold Gradient */}
      <linearGradient id="mughalGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C4A882" stopOpacity="0.2" />
        <stop offset="25%" stopColor="#C4A882" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#E6D3B6" stopOpacity="1" />
        <stop offset="75%" stopColor="#C4A882" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#C4A882" stopOpacity="0.2" />
      </linearGradient>

      {/* Subtle Sage Leaf Fill */}
      <linearGradient id="subtleSageFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CBD8C7" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#9AA895" stopOpacity="0.5" />
      </linearGradient>
    </defs>

    {/* Central Horizontal Base Divider Lines with Gradient Fade */}
    <line x1="40" y1="70" x2="200" y2="70" stroke="url(#mughalGoldGrad)" strokeWidth="1" />
    <line x1="300" y1="70" x2="460" y2="70" stroke="url(#mughalGoldGrad)" strokeWidth="1" />

    {/* Center Mughal Islamic Geometric Rosette Medallion */}
    <g transform="translate(250, 70)">
      {/* Outer Star Flourish */}
      <circle cx="0" cy="0" r="18" fill="#FFFDF9" stroke="#B89A68" strokeWidth="1" />
      <circle cx="0" cy="0" r="14" stroke="#C4A882" strokeWidth="0.75" strokeDasharray="3 2" fill="none" />
      
      {/* 8-Pointed Star Motif */}
      <path d="M 0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z" fill="#B89A68" fillOpacity="0.85" />
      <circle cx="0" cy="0" r="3" fill="#FFFDF9" />
      <circle cx="0" cy="0" r="1.2" fill="#8C6E43" />

      {/* Flanking Arabesque Filigree Tendrils (Left & Right) */}
      <path d="M -18 0 C -35 -12 -55 -15 -75 -6 C -85 0 -95 10 -110 5" stroke="#B89A68" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M 18 0 C 35 -12 55 -15 75 -6 C 85 0 95 10 110 5" stroke="#B89A68" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* Tiny Sage Leaves on Tendrils */}
      <path d="M -45 -10 C -55 -18 -62 -14 -58 -5 Z" fill="url(#subtleSageFill)" stroke="#B89A68" strokeWidth="0.5" />
      <path d="M 45 -10 C 55 -18 62 -14 58 -5 Z" fill="url(#subtleSageFill)" stroke="#B89A68" strokeWidth="0.5" />

      {/* Accent Star Drops */}
      <circle cx="-110" cy="5" r="2" fill="#B89A68" />
      <circle cx="110" cy="5" r="2" fill="#B89A68" />
    </g>

    {/* Left & Right Corner Architectural Spandrels (Anchoring the Base) */}
    {/* Left Spandrel */}
    <g transform="translate(45, 105)">
      <path d="M 0 0 C 15 -10 30 -15 50 -12 C 35 -4 20 5 0 20 Z" fill="#FAF3E8" stroke="#B89A68" strokeWidth="0.75" />
      <circle cx="20" cy="-6" r="1.5" fill="#B89A68" />
    </g>

    {/* Right Spandrel */}
    <g transform="translate(455, 105) scale(-1, 1)">
      <path d="M 0 0 C 15 -10 30 -15 50 -12 C 35 -4 20 5 0 20 Z" fill="#FAF3E8" stroke="#B89A68" strokeWidth="0.75" />
      <circle cx="20" cy="-6" r="1.5" fill="#B89A68" />
    </g>
  </svg>
);

export const FormalInvitation: React.FC = () => {
  // Extract parent names cleanly if prefixed with "Son of" or "Daughter of"
  const cleanParentName = (text: string, prefix: string) => {
    if (!text) return '';
    const regex = new RegExp(`^${prefix}\\s*`, 'i');
    return text.replace(regex, '').trim().toUpperCase();
  };

  const groomParentsText = cleanParentName(weddingData.groomParents, 'Son of');
  const brideParentsText = cleanParentName(weddingData.brideParents, 'Daughter of');

  // Staggered Scroll-Triggered Animation Sequence
  const cardContainerVariants: Variants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const childFadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const nameFadeScale: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const lineDrawVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const baseOrnamentVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }
    }
  };

  return (
    <section id="formal-invitation-section" className="relative py-24 sm:py-32 md:py-36 px-4 sm:px-6 bg-[#FAF5EE] overflow-hidden">
      
      {/* SVG ClipPath & Pattern Definitions for Multi-Scalloped Mughal Islamic Arch */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="islamicMughalArchClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0.020
                     C 0.512 0.036, 0.560 0.054, 0.604 0.070
                     L 0.580 0.078
                     C 0.630 0.085, 0.730 0.105, 0.760 0.130
                     L 0.732 0.140
                     C 0.784 0.148, 0.884 0.168, 0.910 0.190
                     L 0.880 0.200
                     C 0.916 0.212, 0.944 0.228, 0.950 0.245
                     V 0.975
                     Q 0.950 0.990 0.910 0.990
                     H 0.090
                     Q 0.050 0.990 0.050 0.975
                     V 0.245
                     C 0.056 0.228, 0.084 0.212, 0.120 0.200
                     L 0.090 0.190
                     C 0.116 0.168, 0.216 0.148, 0.240 0.140
                     L 0.268 0.130
                     C 0.270 0.105, 0.370 0.085, 0.420 0.078
                     L 0.396 0.070
                     C 0.440 0.054, 0.488 0.036, 0.500 0.020 Z" />
          </clipPath>

          {/* Intricate Geometric Islamic Jali Side Pillar Pattern */}
          <pattern id="islamicJaliMosaic" width="16" height="24" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 16 6 L 16 18 L 8 24 L 0 18 L 0 6 Z" stroke="#B89A68" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
            <path d="M 8 0 L 8 24 M 0 12 L 16 12" stroke="#B89A68" strokeWidth="0.5" strokeOpacity="0.25" fill="none" />
            <circle cx="8" cy="12" r="1.8" fill="#B89A68" fillOpacity="0.3" />
          </pattern>

          {/* Soft Emboss Drop Shadow for 3D Arch Molding */}
          <filter id="archEmbossShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#6E5232" floodOpacity="0.18" />
          </filter>
        </defs>
      </svg>

      {/* Warm Ambient Soft Radial Lighting Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[900px] rounded-full bg-radial from-[#F5EAD9] via-[#FAF5EE]/60 to-transparent blur-3xl" />
      </div>

      {/* Subtle Islamic Background Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#8D7047_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Editorial Canvas Wrapper */}
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Physical Luxury Stationery Invitation Card Composition with Multi-Scalloped Mughal Islamic Arch */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardContainerVariants}
          whileHover={{ y: -3, transition: { duration: 0.4, ease: "easeOut" } }}
          className="relative w-full max-w-[460px] sm:max-w-[520px] md:max-w-[560px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#F5EAD9] rounded-b-3xl p-4 sm:p-8 md:p-12 text-center overflow-hidden shadow-[0_30px_70px_-15px_rgba(100,75,40,0.18),0_0_0_1px_rgba(184,154,104,0.25)] transition-shadow duration-500 hover:shadow-[0_35px_80px_-15px_rgba(100,75,40,0.24),0_0_0_1px_rgba(184,154,104,0.35)]"
          style={{ clipPath: 'url(#islamicMughalArchClip)' }}
        >
          {/* Subtle Paper Grain & Parchment Texture Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B89A68_1px,transparent_1px)] [background-size:20px_20px] mix-blend-multiply" />

          {/* SVG Vector Overlays for 3 Nested Embossed Scalloped Arch Borders & Jali Side Bands */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 500 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* 1. Outer Relief Shadow Bevel Border Line (Primary Architectural Silhouette) */}
            <path
              d="M 250 20
                 C 256 36, 280 54, 302 70
                 L 290 78
                 C 315 85, 365 105, 380 130
                 L 366 140
                 C 392 148, 442 168, 455 190
                 L 440 200
                 C 458 212, 472 228, 475 245
                 V 975
                 Q 475 990 455 990
                 H 45
                 Q 25 990 25 975
                 V 245
                 C 28 228, 42 212, 60 200
                 L 45 190
                 C 58 168, 108 148, 134 140
                 L 120 130
                 C 135 105, 185 85, 210 78
                 L 198 70
                 C 220 54, 244 36, 250 20 Z"
              stroke="#A88B64"
              strokeWidth="2.2"
              strokeOpacity="0.5"
              filter="url(#archEmbossShadow)"
              fill="none"
            />

            {/* 2. Middle Crisp Antique Gold Scalloped Border Line */}
            <path
              d="M 250 30
                 C 255 44, 277 61, 297 76
                 L 287 83
                 C 310 90, 357 109, 371 132
                 L 359 141
                 C 383 148, 431 167, 443 187
                 L 430 196
                 C 446 207, 460 222, 463 240
                 V 967
                 Q 463 978 447 978
                 H 53
                 Q 37 978 37 967
                 V 240
                 C 40 222, 54 207, 70 196
                 L 57 187
                 C 69 167, 117 148, 141 141
                 L 129 132
                 C 143 109, 190 90, 213 83
                 L 203 76
                 C 223 61, 245 44, 250 30 Z"
              stroke="#B89A68"
              strokeWidth="1.5"
              strokeOpacity="0.85"
              fill="none"
            />

            {/* 3. Inner Recessed Dashed Champagne Accent Border Line */}
            <path
              d="M 250 40
                 C 254 54, 274 68, 292 82
                 L 284 88
                 C 305 95, 349 113, 362 134
                 L 352 142
                 C 374 149, 420 166, 431 184
                 L 420 192
                 C 434 202, 448 216, 451 235
                 V 959
                 Q 451 966 439 966
                 H 61
                 Q 49 966 49 959
                 V 235
                 C 52 216, 66 202, 80 192
                 L 69 184
                 C 80 166, 126 149, 148 142
                 L 138 134
                 C 151 113, 195 95, 216 88
                 L 208 82
                 C 226 68, 246 54, 250 40 Z"
              stroke="#C4A882"
              strokeWidth="1"
              strokeOpacity="0.65"
              strokeDasharray="4 3"
              fill="none"
            />

            {/* Top Apex Ornamental Rosette Accent */}
            <g transform="translate(250, 40)">
              <circle cx="0" cy="0" r="3.5" fill="#B89A68" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="1.5" fill="#FAF3E8" />
            </g>

            {/* Left Vertical Islamic Jali Lattice Band */}
            <rect x="25" y="245" width="12" height="710" fill="url(#islamicJaliMosaic)" opacity="0.65" />
            <line x1="25" y1="245" x2="25" y2="955" stroke="#B89A68" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="37" y1="245" x2="37" y2="955" stroke="#B89A68" strokeWidth="0.8" strokeOpacity="0.4" />

            {/* Right Vertical Islamic Jali Lattice Band */}
            <rect x="463" y="245" width="12" height="710" fill="url(#islamicJaliMosaic)" opacity="0.65" />
            <line x1="463" y1="245" x2="463" y2="955" stroke="#B89A68" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="475" y1="245" x2="475" y2="955" stroke="#B89A68" strokeWidth="0.8" strokeOpacity="0.4" />
          </svg>

          {/* ARCH CONTENT HIERARCHY */}
          <div className="relative z-10 px-3 sm:px-6 pt-22 sm:pt-26 md:pt-30 pb-6 sm:pb-8">

            {/* 1. TOP: Arabic Bismillah Calligraphy (Generous Top Spacing) */}
            <motion.div variants={childFadeUp} className="mb-4 sm:mb-6 mt-8 max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto px-1">
              <p className="font-arabic-luxury text-xl sm:text-2xl md:text-3xl text-[#6E5232] tracking-normal leading-relaxed drop-shadow-xs text-center">
                {weddingData.bismillahArabic}
              </p>
            </motion.div>

            {/* 2. INVITATION HEADING */}
            <motion.div variants={childFadeUp} className="my-4 sm:my-5 space-y-1 max-w-[260px] sm:max-w-[320px] mx-auto px-1">
              <p className="font-serif-luxury text-[9px] sm:text-[11px] md:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold text-[#8C6E43]">
                YOU ARE INVITED TO THE
              </p>
              <p className="font-serif-luxury text-[9px] sm:text-[11px] md:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase font-semibold text-[#8C6E43]">
                Wedding CEREMONY OF
              </p>
            </motion.div>

            {/* 3. GROOM NAME (Primary Visual Focal Point) */}
            <motion.div variants={nameFadeScale} className="my-5 sm:my-7">
              <h3 className="font-card-script text-6xl sm:text-7xl md:text-8xl text-[#6E5232] font-normal leading-tight tracking-wide drop-shadow-xs">
                {weddingData.brideName}
              </h3>
            </motion.div>

            {/* 4. FIRST DECORATIVE DIVIDER */}
            <motion.div variants={lineDrawVariants} className="flex items-center justify-center gap-2.5 my-3.5 text-[#B89A68] opacity-90">
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B89A68] to-[#B89A68]" />
              <span className="text-xs text-[#8C6E43]">❖</span>
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#B89A68] to-[#B89A68]" />
            </motion.div>

            {/* 5. GROOM PARENTAGE (SON OF) */}
            <motion.div variants={childFadeUp} className="my-2.5 sm:my-3.5 space-y-1">
              <p className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.26em] font-semibold text-[#8C6E43] uppercase">
                DAUGHTER OF
              </p>
              <p className="font-serif-luxury text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.20em] font-semibold text-[#57422A] uppercase max-w-[360px] sm:max-w-md mx-auto leading-relaxed px-2">
                {brideParentsText || weddingData.brideParents}
              </p>
            </motion.div>

            {/* 6. "WITH" CONNECTOR */}
            <motion.div variants={childFadeUp} className="my-6 sm:my-5">
              <span className="font-card-script text-3xl sm:text-4xl italic text-[#8C6E43] block">
                With
              </span>
            </motion.div>

            {/* 7. BRIDE NAME (Primary Visual Focal Point) */}
            <motion.div variants={nameFadeScale} className="my-2 sm:my-7">
              <h3 className="font-card-script text-6xl sm:text-7xl md:text-8xl text-[#6E5232] font-normal leading-tight tracking-wide drop-shadow-xs">
                {weddingData.groomName}
              </h3>
            </motion.div>

            {/* 8. SECOND DECORATIVE DIVIDER */}
            <motion.div variants={lineDrawVariants} className="flex items-center justify-center gap-2.5 my-3.5 text-[#B89A68] opacity-90">
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B89A68] to-[#B89A68]" />
              <span className="text-xs text-[#8C6E43]">❖</span>
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#B89A68] to-[#B89A68]" />
            </motion.div>

            {/* 9. BRIDE PARENTAGE (DAUGHTER OF) */}
            <motion.div variants={childFadeUp} className="my-2.5 sm:my-3.5 space-y-1">
              <p className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.26em] font-semibold text-[#8C6E43] uppercase">
                SON OF
              </p>
              <p className="font-serif-luxury text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.20em] font-semibold text-[#57422A] uppercase max-w-[360px] sm:max-w-md mx-auto leading-relaxed px-2">
                {groomParentsText || weddingData.groomParents}
              </p>
            </motion.div>

            {/* 10. "DEAR FRIENDS AND FAMILY" HEADING */}
            <motion.div variants={childFadeUp} className="mt-8 sm:mt-11 mb-2.5">
              <h4 className="font-card-script text-3xl sm:text-4xl text-[#6E5232]">
                Dear Friends and Family
              </h4>
            </motion.div>

            {/* 11. INVITATION MESSAGE */}
            <motion.div variants={childFadeUp} className="mb-4 sm:mb-6">
              <p className="font-serif-luxury text-xs sm:text-sm md:text-[15px] text-[#57422A] leading-relaxed max-w-[340px] sm:max-w-md md:max-w-lg mx-auto font-normal text-center px-2">
                {weddingData.formalInvitationText}
              </p>
            </motion.div>

            {/* 12. BESPOKE MUGHAL ISLAMIC ARABESQUE MEDALLION BASE ORNAMENT */}
            <motion.div variants={baseOrnamentVariants} className="mt-4 sm:mt-6 w-full max-w-[340px] sm:max-w-[400px] mx-auto">
              <MughalBaseOrnament />
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
