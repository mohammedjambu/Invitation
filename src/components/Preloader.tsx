import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { CornerFiligree } from './Ornament';
import { useAudio } from '../context/AudioContext';

interface PreloaderProps {
  onComplete: () => void;
}

type Stage = 'closed' | 'pressing' | 'openingFlap' | 'cardRising' | 'zoomingCard' | 'exiting';

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  // Interaction stages:
  // 'closed' -> 'pressing' -> 'openingFlap' -> 'cardRising' -> 'zoomingCard' -> 'exiting'
  const [stage, setStage] = useState<Stage>('closed');
  const [isDone, setIsDone] = useState(false);
  const { startAudio } = useAudio();

  const handleOpenEnvelope = () => {
    if (stage !== 'closed') return;

    // Trigger background audio (Kudmayi song skipping first 8s) on user click
    startAudio();

    // Stage 1: Press animation on seal
    setStage('pressing');

    setTimeout(() => {
      // Stage 2: Flap opens smoothly
      setStage('openingFlap');
    }, 280);

    setTimeout(() => {
      // Stage 3: Invitation card rises upward
      setStage('cardRising');
    }, 950);

    setTimeout(() => {
      // Stage 4: Card moves slightly forward toward the viewer
      setStage('zoomingCard');
    }, 1900);

    setTimeout(() => {
      // Stage 5: Fade preloader into website
      setStage('exiting');
    }, 2850);

    setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 3600);
  };

  if (isDone) return null;

  const isCardUp = stage === 'cardRising' || stage === 'zoomingCard' || stage === 'exiting';
  const isFlapOpen = stage !== 'closed' && stage !== 'pressing';
  const isZoomed = stage === 'zoomingCard' || stage === 'exiting';

  return (
    <AnimatePresence>
      {stage !== 'exiting' && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-50 overflow-hidden flex flex-col items-center justify-between py-6 sm:py-8 px-4 bg-paper-grain select-none"
        >
          {/* Subtle Warm Ambient Lighting Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(255,253,248,0.92)_0%,rgba(246,238,226,0.65)_50%,rgba(238,225,208,0.85)_100%)]" />

          {/* Golden Floating Vignette Dust */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* ========================================================= */}
          {/* TOP SECTION: ARABIC BISMILLAH & ISLAMIC GEOMETRIC ORNAMENT */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative z-20 flex flex-col items-center text-center pt-24 sm:pt-30"
          >
            {/* Arabic Bismillah Calligraphy */}
            <p className="font-arabic-luxury text-2xl sm:text-3xl md:text-4xl text-[#B89A68] tracking-wider leading-relaxed drop-shadow-[0_1px_2px_rgba(184,154,104,0.25)]">
              {/* {weddingData.bismillahArabic} */}
            </p>

            {/* Islamic 8-Point Geometric Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
              className="flex items-center justify-center gap-2 mt-4"
            >
              <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#C5A880]/60" />
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5A880]">
                <rect x="7" y="7" width="18" height="18" stroke="currentColor" strokeWidth="1.2" transform="rotate(0 16 16)" fill="none" />
                <rect x="7" y="7" width="18" height="18" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 16 16)" fill="none" />
                <circle cx="16" cy="16" r="4.5" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="16" cy="16" r="1.8" fill="currentColor" />
              </svg>
              <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#C5A880]/60" />
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* MAIN CENTERPIECE: PHYSICAL LUXURY ENVELOPE & INVITATION   */}
          {/* ========================================================= */}
          <div className="relative z-20 w-full max-w-[480px] sm:max-w-[560px] md:max-w-[620px] my-auto flex items-center justify-center perspective-1200">
            
            {/* Outer Envelope Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[1.55/1] max-h-[380px] sm:max-h-[410px] flex items-center justify-center"
            >
              {/* Envelope Ambient Drop Shadow */}
              <div className="absolute inset-0 bg-[#7C623C]/18 rounded-2xl blur-xl transform translate-y-6 scale-95 pointer-events-none" />

              {/* ----------------------------------------------------- */}
              {/* LAYER 1: ENVELOPE BACKING (Interior Pocket Space)     */}
              {/* ----------------------------------------------------- */}
              <div className="absolute inset-0 rounded-xl bg-[#E8D9C5] envelope-shadow overflow-hidden border border-[#D5C2AA]">
                {/* Pocket Depth Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#A88E6B]/30 via-transparent to-[#8C714E]/20 pointer-events-none" />
                {/* Fine Texture Lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8C714E_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* ----------------------------------------------------- */}
              {/* LAYER 2: INVITATION CARD (Partially tucked inside)    */}
              {/* ----------------------------------------------------- */}
              <motion.div
                initial={false}
                animate={{
                  y: !isFlapOpen ? '5%' : stage === 'openingFlap' ? '-12%' : stage === 'cardRising' ? '-52%' : '-58%',
                  scale: isZoomed ? 1.06 : stage === 'cardRising' ? 1.02 : 0.97,
                  zIndex: isCardUp ? 40 : 15
                }}
                transition={{
                  duration: stage === 'cardRising' ? 0.95 : 0.75,
                  ease: [0.25, 1, 0.5, 1]
                }}
                className="absolute w-[88%] sm:w-[90%] h-[92%] sm:h-[94%] top-[4%] bg-[#FAF5ED] rounded-lg gold-double-line card-shadow overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col justify-between items-center text-center cursor-default transform-gpu"
              >
                {/* Delicate Corner Filigree Ornaments */}
                <CornerFiligree position="top-left" className="!w-6 !h-6 sm:!w-9 sm:!h-9 text-[#C5A880]/70" />
                <CornerFiligree position="top-right" className="!w-6 !h-6 sm:!w-9 sm:!h-9 text-[#C5A880]/70" />
                <CornerFiligree position="bottom-left" className="!w-6 !h-6 sm:!w-9 sm:!h-9 text-[#C5A880]/70" />
                <CornerFiligree position="bottom-right" className="!w-6 !h-6 sm:!w-9 sm:!h-9 text-[#C5A880]/70" />

                {/* Fine Inner Dotted Frame */}
                <div className="absolute inset-2 sm:inset-3 rounded-md border border-dashed border-[#C5A880]/40 pointer-events-none" />

                {/* Card Top: Bismillah Header */}
                <div className="relative z-10 pt-1 sm:pt-2">
                  <p className="font-arabic-luxury text-sm sm:text-lg md:text-xl text-[#B89A68] tracking-wide">
                    {weddingData.bismillahArabic}
                  </p>
                  <p className="font-serif-luxury text-[9px] sm:text-[11px] tracking-[0.25em] uppercase text-[#8D7047] mt-1 font-medium">
                    Together with their families request the honor of your presence
                  </p>
                </div>

                {/* Card Center: Couple Names (Dominant Element) */}
                <div className="relative z-10 my-auto py-1">
                  <h2 className="font-script-luxury text-3xl sm:text-5xl md:text-6xl text-[#8D7047] font-normal leading-tight tracking-wide drop-shadow-sm">
                    {weddingData.brideName} & {weddingData.groomName}
                  </h2>
                  <div className="h-[1px] w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent mx-auto my-1.5" />
                  <p className="font-serif-luxury text-[10px] sm:text-xs italic text-[#6B5B49] max-w-[85%] mx-auto">
                    At the auspicious celebration of their Nikah & Wedding
                  </p>
                </div>

                {/* Card Bottom: Date, Venue & Moula TUS Blessing */}
                <div className="relative z-10 space-y-1 pb-1 sm:pb-2">
                  <p className="font-serif-luxury font-semibold text-xs sm:text-sm md:text-base text-[#3D3227] tracking-wide">
                    {weddingData.dateDisplay}
                  </p>
                  <p className="font-serif-luxury italic text-[10px] sm:text-xs text-[#8D7047]">
                    {weddingData.hijriDateDisplay}
                  </p>
                  
                  {/* Auspices Tag */}
                  <div className="pt-1">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#F5E8D7]/80 border border-[#B89A68]/35 text-[9px] sm:text-[10px] text-[#8D7047] font-serif-luxury italic">
                      ✨ {weddingData.nikahStatement}
                    </span>
                  </div>

                  <p className="font-serif-luxury text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#A68A5B] pt-1">
                    {weddingData.closingFamilies}
                  </p>
                </div>
              </motion.div>

              {/* ----------------------------------------------------- */}
              {/* LAYER 3: ENVELOPE POCKET FRONT (Bottom V-Fold Wall)   */}
              {/* ----------------------------------------------------- */}
              <div className="absolute inset-0 z-20 pointer-events-none rounded-xl overflow-hidden">
                <svg viewBox="0 0 600 380" className="w-full h-full preserve-3d">
                  {/* Pocket Shadow on Interior Card */}
                  <polygon points="0,380 0,90 300,240 600,90 600,380" fill="rgba(120,95,60,0.08)" />
                  {/* Front Pocket Paper Body */}
                  <polygon points="0,380 0,95 300,245 600,95 600,380" fill="#FAF0E4" />
                  {/* Fine Gold V-Line Accent along Front Pocket Edge */}
                  <polyline points="0,95 300,245 600,95" fill="none" stroke="#C5A880" strokeWidth="2" opacity="0.85" />
                  <polyline points="0,98 300,248 600,98" fill="none" stroke="#D8BE94" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                </svg>
              </div>

              {/* ----------------------------------------------------- */}
              {/* LAYER 4: ENVELOPE TOP TRIANGULAR FLAP (3D Open Flap)  */}
              {/* ----------------------------------------------------- */}
              <motion.div
                initial={false}
                animate={{
                  rotateX: !isFlapOpen ? 0 : 180,
                  zIndex: stage === 'closed' || stage === 'pressing' || stage === 'openingFlap' ? 30 : 10
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-0 left-0 right-0 h-[62%] z-30 preserve-3d transform-gpu"
              >
                {/* Triangular Flap SVG */}
                <svg viewBox="0 0 600 235" className="w-full h-full drop-shadow-[0_8px_16px_rgba(100,75,40,0.18)]">
                  {/* Triangular Flap Base Paper */}
                  <polygon points="0,0 600,0 300,225" fill="#F4E9DC" />
                  {/* Gold Foil Border Trim along Triangular Flap Edge */}
                  <polygon points="0,0 600,0 300,225" fill="none" stroke="#C5A880" strokeWidth="2.5" />
                  <polygon points="12,0 588,0 300,212" fill="none" stroke="#D8BE94" strokeWidth="1" strokeDasharray="4 3" opacity="0.75" />
                </svg>

                {/* --------------------------------------------------- */}
                {/* LAYER 5: GOLD WAX SEAL (Mounted on Flap Tip)        */}
                {/* --------------------------------------------------- */}
                <motion.button
                  type="button"
                  onClick={handleOpenEnvelope}
                  whileHover={{ scale: stage === 'closed' ? 1.05 : 1 }}
                  animate={{
                    scale: stage === 'pressing' ? 0.94 : 1,
                    opacity: isCardUp ? 0 : 1
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="absolute left-1/2 -translate-x-1/2 top-[175px] sm:top-[190px] md:top-[205px] -translate-y-1/2 z-40 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full wax-seal-gradient flex items-center justify-center cursor-pointer shadow-2xl group focus:outline-none"
                  aria-label="Open Wedding Invitation Envelope"
                >
                  {/* Outer Wax Seal Stamp Bevel Ring */}
                  <div className="absolute inset-1 rounded-full border border-[#FFFDF8]/50 pointer-events-none" />
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#8C6A32]/40 pointer-events-none" />

                  {/* Stamp Monogram Calligraphy */}
                  <span className="font-serif-luxury font-bold text-sm sm:text-base md:text-lg text-[#FFFDF8] tracking-widest drop-shadow-[0_1px_2px_rgba(70,50,20,0.8)] group-hover:scale-105 transition-transform">
                    {weddingData.monogram}
                  </span>
                </motion.button>
              </motion.div>

            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* BOTTOM SECTION: "CLICK SEAL TO OPEN" PROMPT               */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: stage === 'closed' ? [0.65, 1, 0.65] : 0,
              y: 0
            }}
            transition={{
              opacity: stage === 'closed' ? { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 },
              y: { duration: 0.8, delay: 0.4 }
            }}
            onClick={handleOpenEnvelope}
            className="relative z-20 flex flex-col items-center gap-1.5 cursor-pointer pb-2 sm:pb-4 group"
          >
            <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.35em] uppercase text-[#A68A5B] font-medium group-hover:text-[#8D7047] transition-colors">
              Click Seal To Open
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#C5A880] group-hover:translate-y-0.5 transition-transform">
              <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
