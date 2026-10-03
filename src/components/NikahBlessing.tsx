import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  CornerFiligree,
  DawoodiBohraStarPattern,
  GeometricWatermarkPattern,
  BotanicalGoldCorner
} from './Ornament';

export const NikahBlessing: React.FC = () => {
  const photoSrc = weddingData.nikahImage || weddingData.coupleStory.image || "/images/nikah.jpeg";

  return (
    <section id="nikah-section" className="relative py-16 sm:py-24 px-3 sm:px-6 bg-[#F8F0E5] overflow-hidden">
      {/* Background Islamic Geometric Watermark */}
      <GeometricWatermarkPattern />

      {/* Soft Warm Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#F5E5D3]/60 via-[#FDF9F3]/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-[540px] sm:max-w-[580px] mx-auto relative z-10">
        {/* Physical Heirloom Invitation Page Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-gradient-to-b from-[#FFFDF9]/98 via-[#FDF8EE]/98 to-[#F8F0E5]/98 backdrop-blur-md rounded-t-[150px] sm:rounded-t-[200px] rounded-b-3xl p-6 sm:p-12 md:p-14 border border-[#B89A68]/35 shadow-[0_25px_60px_-15px_rgba(100,75,40,0.14),0_0_0_1px_rgba(184,154,104,0.25)] text-center select-none"
        >
          {/* Inner Dashed Gold Thread Outline */}
          <div className="absolute inset-3 sm:inset-4.5 rounded-t-[138px] sm:rounded-t-[188px] rounded-b-2xl border border-dashed border-[#B89A68]/30 pointer-events-none" />

          {/* Canvas Top Corner Filigrees */}
          <CornerFiligree position="top-left" className="top-4 left-4 sm:top-6 sm:left-6" />
          <CornerFiligree position="top-right" className="top-4 right-4 sm:top-6 sm:right-6" />

          {/* 01. Section Opening Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="pt-6 sm:pt-4 mb-2"
          >
            <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.38em] uppercase text-[#775E38] font-bold block">
              NIKAH MUBARAK
            </span>
          </motion.div>

          {/* 02. Arabic Wedding Blessing Calligraphy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mb-4 sm:mb-5"
          >
            <h2 className="font-arabic-luxury text-2xl sm:text-3xl md:text-4xl text-[#6D522B] leading-relaxed tracking-wide my-1 px-2 drop-shadow-xs">
              {weddingData.nikahHeadlineArabic}
            </h2>

            <div className="flex items-center justify-center gap-2.5 my-2.5 text-[#B89A68]">
              <span className="h-[0.5px] w-8 sm:w-14 bg-[#B89A68]/50" />
              <DawoodiBohraStarPattern size={12} className="text-[#775E38]" />
              <span className="h-[0.5px] w-8 sm:w-14 bg-[#B89A68]/50" />
            </div>
          </motion.div>

          {/* 03. Intimate Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mb-5 sm:mb-7"
          >
            <h1 className="font-script-luxury text-4xl sm:text-5xl md:text-6xl text-[#6D522B] font-normal leading-tight my-1 drop-shadow-[0_2px_4px_rgba(109,82,43,0.12)]">
              {weddingData.brideName} & {weddingData.groomName}
            </h1>
          </motion.div>

          {/* 04. Arched Heirloom Framing for Nikah Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[280px] sm:max-w-[330px] mx-auto my-5 sm:my-7 group"
          >
            {/* Outer Matting Frame with Soft Rounded Arch */}
            <div className="relative p-3 sm:p-4 bg-[#FFFDF9] rounded-t-[130px] sm:rounded-t-[160px] rounded-b-2xl border border-[#B89A68]/40 shadow-[0_12px_35px_-8px_rgba(100,75,40,0.14),0_0_0_1px_rgba(184,154,104,0.2)]">
              {/* Inner Fine Gold Double Outline */}
              <div className="p-1 sm:p-1.5 rounded-t-[122px] sm:rounded-t-[152px] rounded-b-xl border border-[#D8BE94]/50 relative">
                {/* Arch Corner Filigrees */}
                <CornerFiligree position="top-left" className="top-2 left-2 !w-6 !h-6 text-[#B89A68]/45" />
                <CornerFiligree position="top-right" className="top-2 right-2 !w-6 !h-6 text-[#B89A68]/45" />

                {/* Arched Photo Window */}
                <div className="relative overflow-hidden rounded-t-[115px] sm:rounded-t-[145px] rounded-b-lg border border-[#B89A68]/30 aspect-[3/4] bg-[#EFE0CC]">
                  <img
                    src={photoSrc}
                    alt="Nikah Solemnization Portrait"
                    className="w-full h-full object-cover object-top filter saturate-[0.98] contrast-[1.01] transition-transform duration-1000 group-hover:scale-103"
                  />
                  {/* Gentle Inner Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D3227]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 05. Nikah Historical Date & Location Metadata Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-col items-center gap-1.5 my-5 sm:my-6"
          >
            <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#FAF5EC]/90 backdrop-blur-sm border border-[#B89A68]/45 shadow-[0_4px_14px_rgba(92,68,37,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <DawoodiBohraStarPattern size={12} className="text-[#8D7047]" />
              <span className="font-serif-luxury text-[10.5px] sm:text-xs tracking-[0.26em] uppercase font-bold text-[#4A381E]">
                NIKAH · {weddingData.hijriNikahDateDisplay || weddingData.hijriDateDisplay}
              </span>
              <DawoodiBohraStarPattern size={12} className="text-[#8D7047]" />
            </div>

            <p className="font-serif-luxury text-[10px] sm:text-[11px] tracking-[0.26em] uppercase font-semibold text-[#8D7047]/90 mt-0.5">
              {weddingData.nikahLocation}
            </p>
          </motion.div>

          {/* 06. Main Sacred Nikah Statement — Emotional Centerpiece */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="my-6 sm:my-8 flex flex-col items-center gap-1 max-w-md mx-auto"
          >
            <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] font-medium tracking-wide leading-snug">
              Our Nikah was performed on the hands of
            </p>
            <p className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#6D522B] font-bold tracking-wider">
              Aqa Moula TUS
            </p>
          </motion.div>

          {/* 07. Short Closing Blessing */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="pt-2 pb-3 max-w-md mx-auto relative"
          >
            <div className="flex items-center justify-center gap-2 mb-2.5 opacity-60">
              <span className="h-[0.5px] w-8 bg-[#B89A68]" />
              <span className="text-[7px] text-[#775E38]">✦</span>
              <span className="h-[0.5px] w-8 bg-[#B89A68]" />
            </div>

            <p className="font-serif-luxury italic text-xs sm:text-sm text-[#775E38] tracking-wide leading-relaxed">
              A blessed beginning, under the Dua and Raza Mubarak of Aqa Moula TUS.
            </p>

            {/* Subtle Corner Accents */}
            <BotanicalGoldCorner position="bottom-left" className="bottom-0 left-0" />
            <BotanicalGoldCorner position="bottom-right" className="bottom-0 right-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};




