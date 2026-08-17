import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { ArabesqueDivider, IslamicStarSymbol } from './Ornament';

export const ClosingInvitation: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#F8F0E5] via-[#F5E8D7] to-[#EFE0CC] overflow-hidden text-center border-t border-[#B89A68]/20">
      
      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="w-12 h-12 rounded-full border border-[#B89A68]/40 flex items-center justify-center mx-auto bg-[#FFFDF9]/60 text-[#8D7047]">
            <IslamicStarSymbol size={22} />
          </div>

          <h2 className="font-script-luxury text-5xl sm:text-6xl text-[#8D7047]">
            {weddingData.brideName} & {weddingData.groomName}
          </h2>

          <p className="font-serif-luxury italic text-base sm:text-lg text-[#5A462A] max-w-lg mx-auto font-light leading-relaxed">
            “{weddingData.closingMessage}”
          </p>

          <ArabesqueDivider className="my-4" />

          <p className="font-serif-luxury text-sm tracking-widest text-[#8D7047] font-semibold uppercase">
            {weddingData.closingFamilies}
          </p>
        </motion.div>

        {/* Minimal Scroll To Top Button */}
        <div className="pt-8">
          <button
            onClick={scrollToTop}
            className="text-xs font-serif-luxury tracking-[0.25em] uppercase text-[#6B5B49] hover:text-[#8D7047] transition-colors border-b border-[#B89A68]/30 pb-1 cursor-pointer"
          >
            Back to Top of Invitation ↑
          </button>
        </div>

        {/* Ultra-Minimal Footer Note */}
        <div className="pt-6 text-[11px] font-sans-luxury text-[#8D7047]/60 tracking-wider">
          {weddingData.dateDisplay}
        </div>
      </div>
    </footer>
  );
};
