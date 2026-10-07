import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { useAudio } from '../context/AudioContext';
import { DawoodiBohraStarPattern, CornerFiligree } from './Ornament';

interface PreloaderProps {
  onComplete: () => void;
  onStartUnveil?: () => void;
}

type Stage = 'closed' | 'opening' | 'exiting';

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, onStartUnveil }) => {
  const [stage, setStage] = useState<Stage>('closed');
  const [isDone, setIsDone] = useState(false);
  const { startAudio } = useAudio();

  // Extract Bride and Groom First Letters
  const brideInitial = weddingData.brideName ? weddingData.brideName.charAt(0).toUpperCase() : 'M';
  const groomInitial = weddingData.groomName ? weddingData.groomName.charAt(0).toUpperCase() : 'N';

  const handleOpenCurtain = () => {
    if (stage !== 'closed') return;

    // Trigger audio playback upon user interaction
    startAudio();

    // Signal parent that unveiling animation has started
    onStartUnveil?.();

    // Stage 1: Trigger curtain parting animation
    setStage('opening');

    // Stage 2: Complete preloader transition after curtains fully part
    setTimeout(() => {
      setStage('exiting');
      setIsDone(true);
      onComplete();
    }, 2500);
  };

  if (isDone) return null;

  const isOpening = stage === 'opening' || stage === 'exiting';

  return (
    <AnimatePresence>
      {stage !== 'exiting' && (
        <motion.div
          key="preloader-curtain-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          onClick={handleOpenCurtain}
          className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-transparent select-none ${isOpening ? 'pointer-events-none' : 'cursor-pointer'}`}
        >
          {/* ========================================================= */}
          {/* BACKGROUND AMBIENT REVEAL LIGHT (Warm Champagne Glow)     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpening ? 0 : 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-0"
          >
            <div className="w-175 h-175 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,232,215,0.85)_0%,rgba(216,190,148,0.35)_45%,transparent_75%)] filter blur-3xl transform scale-125" />
          </motion.div>

          {/* ========================================================= */}
          {/* TOP ROYAL FESTOON & SWAG VALANCE HEADER (Curved Drapery)  */}
          {/* Based on Theatrical Champagne Silk Festoons & Fringe Trim  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: isOpening ? '-105%' : 0,
              opacity: isOpening ? 0 : 1
            }}
            transition={{ duration: 2.2, ease: [0.25, 1, 0.35, 1] }}
            className="absolute top-0 left-0 right-0 z-30 pointer-events-none w-full h-32 sm:h-48 md:h-56 filter drop-shadow-xl overflow-visible"
          >
            <svg
              viewBox="0 0 1200 240"
              preserveAspectRatio="none"
              className="w-full h-full text-[#FAF0E2]"
            >
              <defs>
                {/* Soft Champagne Silk Shading Gradient */}
                <linearGradient id="swag-silk-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FAF0E2" />
                  <stop offset="35%" stopColor="#EAD8C1" />
                  <stop offset="70%" stopColor="#D4B896" />
                  <stop offset="100%" stopColor="#BF9E77" />
                </linearGradient>

                {/* Gold Trim Metallic Gradient */}
                <linearGradient id="gold-trim-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8D7047" />
                  <stop offset="25%" stopColor="#B89A68" />
                  <stop offset="50%" stopColor="#FFF8ED" />
                  <stop offset="75%" stopColor="#D8BE94" />
                  <stop offset="100%" stopColor="#8D7047" />
                </linearGradient>

                {/* Drop Shadow for Swags */}
                <filter id="swag-shadow" x="-10%" y="-10%" width="120%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#6B563D" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* ----------------------------------------------------- */}
              {/* 1. LEFT CURVED SWAG (FESTOON CURVE)                   */}
              {/* ----------------------------------------------------- */}
              <g filter="url(#swag-shadow)">
                {/* Outer Swag Silk Body */}
                <path
                  d="M 0,0 L 0,35 C 130,190 470,190 600,45 L 600,0 Z"
                  fill="url(#swag-silk-grad)"
                />
                {/* Concentric Parabolic Silk Drapery Curves (Fold Waves) */}
                <path d="M 0,25 C 130,155 470,155 590,35" fill="none" stroke="#FFFDF9" strokeWidth="2.5" opacity="0.7" />
                <path d="M 0,45 C 130,130 470,130 570,25" fill="none" stroke="#7D6645" strokeWidth="1.5" opacity="0.35" />
                <path d="M 0,65 C 130,105 470,105 550,20" fill="none" stroke="#FFFDF9" strokeWidth="2" opacity="0.6" />
                <path d="M 0,85 C 130,85 470,85 530,15" fill="none" stroke="#7D6645" strokeWidth="1.2" opacity="0.3" />
                
                {/* Bottom Gold Braid Border */}
                <path
                  d="M 0,35 C 130,190 470,190 600,45"
                  fill="none"
                  stroke="url(#gold-trim-grad)"
                  strokeWidth="4.5"
                />
              </g>

              {/* ----------------------------------------------------- */}
              {/* 2. RIGHT CURVED SWAG (FESTOON CURVE)                  */}
              {/* ----------------------------------------------------- */}
              <g filter="url(#swag-shadow)">
                {/* Outer Swag Silk Body */}
                <path
                  d="M 1200,0 L 1200,35 C 1070,190 730,190 600,45 L 600,0 Z"
                  fill="url(#swag-silk-grad)"
                />
                {/* Concentric Parabolic Silk Drapery Curves (Fold Waves) */}
                <path d="M 1200,25 C 1070,155 730,155 610,35" fill="none" stroke="#FFFDF9" strokeWidth="2.5" opacity="0.7" />
                <path d="M 1200,45 C 1070,130 730,130 630,25" fill="none" stroke="#7D6645" strokeWidth="1.5" opacity="0.35" />
                <path d="M 1200,65 C 1070,105 730,105 650,20" fill="none" stroke="#FFFDF9" strokeWidth="2" opacity="0.6" />
                <path d="M 1200,85 C 1070,85 730,85 670,15" fill="none" stroke="#7D6645" strokeWidth="1.2" opacity="0.3" />

                {/* Bottom Gold Braid Border */}
                <path
                  d="M 1200,35 C 1070,190 730,190 600,45"
                  fill="none"
                  stroke="url(#gold-trim-grad)"
                  strokeWidth="4.5"
                />
              </g>

              {/* ----------------------------------------------------- */}
              {/* 3. CENTER CASCADING JABOT (CENTER DRAPERY TAIL)       */}
              {/* ----------------------------------------------------- */}
              <g filter="url(#swag-shadow)">
                <path
                  d="M 530,0 Q 600,145 670,0 Z"
                  fill="url(#swag-silk-grad)"
                />
                <path d="M 550,0 Q 600,115 650,0" fill="none" stroke="#FFFDF9" strokeWidth="2" opacity="0.6" />
                <path d="M 570,0 Q 600,85 630,0" fill="none" stroke="#7D6645" strokeWidth="1.2" opacity="0.4" />
                <path
                  d="M 530,0 Q 600,145 670,0"
                  fill="none"
                  stroke="url(#gold-trim-grad)"
                  strokeWidth="3.5"
                />
                {/* Center Tassel Crown */}
                <circle cx="600" cy="145" r="5" fill="#B89A68" />
                <path d="M 595,150 L 605,150 L 608,180 L 592,180 Z" fill="#8D7047" />
                <path d="M 595,150 L 605,150 L 600,185 Z" fill="#D8BE94" opacity="0.8" />
              </g>

              {/* ----------------------------------------------------- */}
              {/* 4. GOLDEN FRINGE TASSELS ALONG THE SWAG CURVES        */}
              {/* ----------------------------------------------------- */}
              {/* Left Swag Fringe Line */}
              <path
                d="M 0,40 C 130,195 470,195 600,50"
                fill="none"
                stroke="#8D7047"
                strokeWidth="10"
                strokeDasharray="2 6"
                opacity="0.85"
              />
              <path
                d="M 0,40 C 130,195 470,195 600,50"
                fill="none"
                stroke="#B89A68"
                strokeWidth="14"
                strokeDasharray="1.5 8"
                opacity="0.75"
              />

              {/* Right Swag Fringe Line */}
              <path
                d="M 1200,40 C 1070,195 730,195 600,50"
                fill="none"
                stroke="#8D7047"
                strokeWidth="10"
                strokeDasharray="2 6"
                opacity="0.85"
              />
              <path
                d="M 1200,40 C 1070,195 730,195 600,50"
                fill="none"
                stroke="#B89A68"
                strokeWidth="14"
                strokeDasharray="1.5 8"
                opacity="0.75"
              />
            </svg>
          </motion.div>

          {/* ========================================================= */}
          {/* LEFT CHAMPAGNE SILK CURTAIN PANEL                          */}
          {/* ========================================================= */}
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: isOpening ? '-102%' : '0%' }}
            transition={{ duration: 2.4, ease: [0.25, 1, 0.35, 1] }}
            className="absolute left-0 top-0 bottom-0 w-[51.5%] z-20 shadow-[20px_0_45px_rgba(100,75,40,0.25)] overflow-hidden bg-champagne-curtain transform-gpu"
          >
            {/* Vertical Silk Drape Folds Pattern */}
            <div className="absolute inset-0 silk-folds-pattern opacity-65 pointer-events-none" />

            {/* Curved Drapery Wave Lines Gathering towards Tieback (Matching reference image) */}
            <svg viewBox="0 0 500 800" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-45">
              <path d="M 0,0 Q 250,300 0,600" stroke="#FFFDF9" strokeWidth="3" fill="none" opacity="0.6" />
              <path d="M 100,0 Q 350,320 0,550" stroke="#FFFDF9" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M 200,0 Q 420,340 0,500" stroke="#7D6645" strokeWidth="2" fill="none" opacity="0.35" />
              <path d="M 300,0 Q 480,360 0,450" stroke="#FFFDF9" strokeWidth="2.5" fill="none" opacity="0.5" />
              <path d="M 400,0 Q 500,380 0,400" stroke="#7D6645" strokeWidth="1.5" fill="none" opacity="0.3" />
            </svg>

            {/* Silk Ambient Surface Sheen */}
            <div className="absolute inset-0 bg-linear-to-r from-black/10 via-white/20 to-black/15 pointer-events-none" />

            {/* Inner Gold Embroidered Seam Trim (Right edge of Left Curtain) */}
            <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 gold-curtain-border flex flex-col justify-between items-center py-4 z-20">
              <div className="w-full h-full opacity-35 bg-[radial-gradient(#8D7047_1px,transparent_1px)] bg-size-[6px_6px]" />
            </div>

            {/* Vertical Ornate Filigree Gold Ribbon running next to border */}
            <div className="absolute right-4 sm:right-6 top-0 bottom-0 w-6 sm:w-10 opacity-35 pointer-events-none flex flex-col items-center justify-around py-8 text-[#8D7047]">
              {[...Array(10)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="4" y="4" width="16" height="16" transform="rotate(45 12 12)" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              ))}
            </div>

            {/* Left Curtain Braided Rope Tie-back Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none opacity-85">
              <svg width="140" height="240" viewBox="0 0 140 240" fill="none" className="text-[#8D7047]">
                <path d="M 0 40 Q 90 120 0 200" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M 0 40 Q 90 120 0 200" stroke="#B89A68" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                {/* Tassel at elbow */}
                <g transform="translate(65, 120)">
                  <circle cx="0" cy="0" r="7" fill="#B89A68" />
                  <path d="M-6 8 L6 8 L10 45 L-10 45 Z" fill="#8D7047" />
                  <path d="M-6 8 L6 8 L0 50 Z" fill="#D8BE94" opacity="0.8" />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT CHAMPAGNE SILK CURTAIN PANEL                         */}
          {/* ========================================================= */}
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: isOpening ? '102%' : '0%' }}
            transition={{ duration: 2.4, ease: [0.25, 1, 0.35, 1] }}
            className="absolute right-0 top-0 bottom-0 w-[51.5%] z-20 shadow-[-20px_0_45px_rgba(100,75,40,0.25)] overflow-hidden bg-champagne-curtain transform-gpu"
          >
            {/* Vertical Silk Drape Folds Pattern */}
            <div className="absolute inset-0 silk-folds-pattern opacity-65 pointer-events-none" />

            {/* Curved Drapery Wave Lines Gathering towards Tieback (Matching reference image) */}
            <svg viewBox="0 0 500 800" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-45 scale-x-[-1]">
              <path d="M 0,0 Q 250,300 0,600" stroke="#FFFDF9" strokeWidth="3" fill="none" opacity="0.6" />
              <path d="M 100,0 Q 350,320 0,550" stroke="#FFFDF9" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M 200,0 Q 420,340 0,500" stroke="#7D6645" strokeWidth="2" fill="none" opacity="0.35" />
              <path d="M 300,0 Q 480,360 0,450" stroke="#FFFDF9" strokeWidth="2.5" fill="none" opacity="0.5" />
              <path d="M 400,0 Q 500,380 0,400" stroke="#7D6645" strokeWidth="1.5" fill="none" opacity="0.3" />
            </svg>

            {/* Silk Ambient Surface Sheen */}
            <div className="absolute inset-0 bg-linear-to-l from-black/10 via-white/20 to-black/15 pointer-events-none" />

            {/* Inner Gold Embroidered Seam Trim (Left edge of Right Curtain) */}
            <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 gold-curtain-border flex flex-col justify-between items-center py-4 z-20">
              <div className="w-full h-full opacity-35 bg-[radial-gradient(#8D7047_1px,transparent_1px)] bg-size-[6px_6px]" />
            </div>

            {/* Vertical Ornate Filigree Gold Ribbon running next to border */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-6 sm:w-10 opacity-35 pointer-events-none flex flex-col items-center justify-around py-8 text-[#8D7047]">
              {[...Array(10)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="4" y="4" width="16" height="16" transform="rotate(45 12 12)" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              ))}
            </div>

            {/* Right Curtain Braided Rope Tie-back Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none opacity-85 scale-x-[-1]">
              <svg width="140" height="240" viewBox="0 0 140 240" fill="none" className="text-[#8D7047]">
                <path d="M 0 40 Q 90 120 0 200" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M 0 40 Q 90 120 0 200" stroke="#B89A68" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                {/* Tassel at elbow */}
                <g transform="translate(65, 120)">
                  <circle cx="0" cy="0" r="7" fill="#B89A68" />
                  <path d="M-6 8 L6 8 L10 45 L-10 45 Z" fill="#8D7047" />
                  <path d="M-6 8 L6 8 L0 50 Z" fill="#D8BE94" opacity="0.8" />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CENTERPIECE MONOGRAM EMBLEM (Bride & Groom First Letters)  */}
          {/* Matches Hero Section Ivory & Gold Architectural Card       */}
          {/* ========================================================= */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{
              scale: isOpening ? 1.25 : 1,
              opacity: isOpening ? 0 : 1,
              rotate: isOpening ? 3 : 0
            }}
            transition={{
              duration: isOpening ? 1.1 : 0.8,
              ease: [0.25, 1, 0.35, 1]
            }}
            className="relative z-40 flex flex-col items-center cursor-pointer group"
          >
            {/* Soft Ambient Golden Halo */}
            <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,230,210,0.8)_0%,rgba(184,154,104,0.3)_50%,transparent_75%)] filter blur-xl group-hover:scale-110 transition-transform duration-700" />

            {/* Main Gold Crest Medallion Frame */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2.5 sm:p-3 bg-linear-to-b from-[#C5A880]/60 via-[#B89A68]/40 to-[#8D7047]/50 shadow-[0_20px_50px_rgba(100,75,40,0.22)] flex items-center justify-center transform group-hover:scale-102 transition-transform duration-500">
              
              {/* Outer Decorative Gold Bevel Ring */}
              <div className="absolute inset-1.5 rounded-full border-2 border-[#B89A68]/60 pointer-events-none" />
              <div className="absolute inset-3 rounded-full border border-dashed border-[#B89A68]/40 pointer-events-none" />

              {/* Inner Soft Ivory Medallion Background */}
              <div className="w-full h-full rounded-full bg-linear-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F7EFE3] p-4 sm:p-6 flex flex-col items-center justify-between text-center relative overflow-hidden border border-[#FFFDF9] shadow-inner">
                
                {/* Micro Star Watermark Background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B89A68_1px,transparent_1px)] bg-size-[14px_14px] pointer-events-none" />

                {/* Corner Filigrees */}
                <CornerFiligree position="top-left" className="top-4 left-4 opacity-30 w-6! h-6!" />
                <CornerFiligree position="top-right" className="top-4 right-4 opacity-30 w-6! h-6!" />
                <CornerFiligree position="bottom-left" className="bottom-4 left-4 opacity-30 w-6! h-6!" />
                <CornerFiligree position="bottom-right" className="bottom-4 right-4 opacity-30 w-6! h-6!" />

                {/* Top Emblem Accent: Bohra 8-Point Star Motif */}
                <div className="pt-4 sm:pt-3 z-10">
                  <DawoodiBohraStarPattern size={22} className="text-[#8D7047] opacity-90" />
                </div>

                {/* CENTER MONOGRAM: BRIDE & GROOM FIRST LETTERS */}
                <div className="relative z-10 mb-12 flex flex-col items-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    {/* Bride First Letter */}
                    <span className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold text-[#8D7047] drop-shadow-[0_1px_2px_rgba(141,112,71,0.2)] tracking-wide">
                      {brideInitial}
                    </span>

                    {/* Elegant Ampersand Accent */}
                    <span className="font-script-luxury text-3xl sm:text-5xl md:text-6xl text-[#B89A68] font-normal italic mx-1 sm:mx-1 drop-shadow-sm">
                      &
                    </span>

                    {/* Groom First Letter */}
                    <span className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold text-[#8D7047] drop-shadow-[0_1px_2px_rgba(141,112,71,0.2)] tracking-wide">
                      {groomInitial}
                    </span>
                  </div>

                  {/* Gold Divider Line under Initials */}
                  <div className="flex items-center gap-2 my-1.5 sm:my-2 w-32 sm:w-44">
                    <span className="h-px w-full bg-linear-to-r from-transparent via-[#B89A68] to-transparent" />
                  </div>

                  {/* Couple Names Subtitle */}
                  <p className="font-serif-luxury text-[11px] sm:text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#7D6645] font-medium opacity-90">
                    {weddingData.brideName} & {weddingData.groomName}
                  </p>
                </div>

                

              </div>
            </div>

            {/* ========================================================= */}
            {/* INTERACTIVE CALL-TO-ACTION BUTTON / SEAL                   */}
            {/* ========================================================= */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.85, 1, 0.85]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="mt-6 sm:mt-8 flex flex-col items-center gap-2 group-hover:scale-105 transition-transform"
            >
              <div className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#F5E8D7]/90 border border-[#B89A68] shadow-[0_8px_20px_rgba(141,112,71,0.18)] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#B89A68] animate-ping" />
                <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8D7047] font-semibold">
                  Tap To Unveil
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#B89A68]">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
