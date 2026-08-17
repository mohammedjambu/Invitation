import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { ArabesqueDivider, CornerFiligree, IslamicStarSymbol } from './Ornament';

export const QuranicBlessing: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden text-center">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-[#F5E8D7]/60 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-[#FFFDF9]/90 to-[#FDF8EE]/90 rounded-3xl p-8 sm:p-16 gold-foil-border shadow-xl relative"
        >
          <CornerFiligree position="top-left" className="top-4 left-4" />
          <CornerFiligree position="top-right" className="top-4 right-4" />
          <CornerFiligree position="bottom-left" className="bottom-4 left-4" />
          <CornerFiligree position="bottom-right" className="bottom-4 right-4" />

          {/* Star Symbol */}
          <div className="mb-6 flex justify-center text-[#B89A68]">
            <IslamicStarSymbol size={28} />
          </div>

          <span className="font-serif-luxury text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold block mb-4">
            Quranic Blessing
          </span>

          {/* Arabic Verse */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="my-6"
          >
            <p className="font-arabic-luxury text-3xl sm:text-4xl md:text-5xl text-[#8D7047] leading-relaxed tracking-wide px-2">
              {weddingData.quranicVerse.arabic}
            </p>
          </motion.div>

          <ArabesqueDivider className="my-8" />

          {/* English Translation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl mx-auto space-y-3"
          >
            <p className="font-serif-luxury italic text-lg sm:text-xl text-[#3D3227] leading-relaxed font-light">
              {weddingData.quranicVerse.english}
            </p>
            <p className="font-serif-luxury text-xs tracking-widest text-[#8D7047] font-medium uppercase">
              — {weddingData.quranicVerse.reference}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
