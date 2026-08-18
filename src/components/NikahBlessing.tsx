import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  CornerFiligree,
  DawoodiBohraStarPattern,
  BotanicalGoldCorner,
  GeometricWatermarkPattern
} from './Ornament';

export const NikahBlessing: React.FC = () => {
  const photoSrc = weddingData.nikahImage || weddingData.coupleStory.image || "/images/couple_portrait.jpg";

  return (
    <section id="nikah-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden">
      {/* Background Islamic Geometric Watermark */}
      <GeometricWatermarkPattern />

      {/* Warm Radial Glow Centered Behind Photograph */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#F5E5D3]/60 via-[#FDF9F3]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Layered Architectural Paper Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-gradient-to-b from-[#FFFDF9]/95 via-[#FDF8EE]/98 to-[#F8F0E5]/95 backdrop-blur-md rounded-t-[140px] sm:rounded-t-[220px] rounded-b-3xl p-6 sm:p-14 md:p-20 border border-[#B89A68]/35 ceremonial-paper-canvas text-center"
        >
          {/* Inner Dashed Architectural Outline */}
          <div className="absolute inset-3 sm:inset-5 rounded-t-[130px] sm:rounded-t-[208px] rounded-b-2xl border border-dashed border-[#B89A68]/30 pointer-events-none" />

          {/* Canvas Corner Filigrees */}
          <CornerFiligree position="top-left" className="top-4 left-4 sm:top-6 sm:left-6" />
          <CornerFiligree position="top-right" className="top-4 right-4 sm:top-6 sm:right-6" />

          {/* 01. Small Uppercase Luxury Serif Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="pt-8 sm:pt-6 mb-4"
          >
            <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.4em] uppercase text-[#8D7047] font-semibold block">
              N I K A H   M U B A R A K
            </span>
          </motion.div>

          {/* 02. Arabic Wedding Blessing Calligraphy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <h2 className="font-arabic-luxury text-2xl sm:text-4xl md:text-5xl text-[#8D7047] leading-relaxed tracking-wide my-1 drop-shadow-sm px-2">
              {weddingData.nikahHeadlineArabic}
            </h2>

            <div className="flex items-center justify-center gap-3 mt-2 text-[#B89A68]">
              <span className="h-[1px] w-12 sm:w-16 bg-[#B89A68]/40" />
              <DawoodiBohraStarPattern size={18} className="text-[#B89A68]" />
              <span className="h-[1px] w-12 sm:w-16 bg-[#B89A68]/40" />
            </div>
          </motion.div>

          {/* 03. Prominent Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="font-script-luxury text-4xl sm:text-6xl md:text-7xl text-[#8D7047] leading-tight my-1">
              {weddingData.brideName} & {weddingData.groomName}
            </h1>
          </motion.div>

          {/* 04. Nikah Photograph — Main Visual Centerpiece */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md sm:max-w-lg mx-auto my-6 sm:my-8 group"
          >
            {/* Outer Arch Photo Matting Frame */}
            <div className="relative p-3 sm:p-5 md:p-6 bg-[#FBF6EE] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-2xl border border-[#B89A68]/45 ceremonial-mat-shadow transition-transform duration-700 ease-out hover:-translate-y-1">
              
              {/* Inner Double Gold Trim */}
              <div className="p-1 sm:p-1.5 rounded-t-[130px] sm:rounded-t-[170px] rounded-b-xl border border-[#D8BE94]/50 relative">
                
                {/* Mat Corner Filigrees */}
                <CornerFiligree position="top-left" className="top-2 left-2 !w-6 !h-6 sm:!w-8 sm:!h-8 text-[#B89A68]/50" />
                <CornerFiligree position="top-right" className="top-2 right-2 !w-6 !h-6 sm:!w-8 sm:!h-8 text-[#B89A68]/50" />

                {/* Photo Arch Container */}
                <div className="relative overflow-hidden rounded-t-[122px] sm:rounded-t-[162px] rounded-b-lg border border-[#B89A68]/30 aspect-[3/4] bg-[#EFE0CC]">
                  <img
                    src={photoSrc}
                    alt="Nikah Solemnization Ceremonial Portrait"
                    className="w-full h-full object-cover object-top filter saturate-[0.98] contrast-[1.01] transition-transform duration-1000 group-hover:scale-103"
                  />
                  
                  {/* Subtle Inner Lighting & Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D3227]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Keepsake Ribbon Tag */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFDF9]/95 backdrop-blur-md px-5 py-2 rounded-full border border-[#B89A68]/40 shadow-md flex items-center gap-2.5 text-[#8D7047] whitespace-nowrap z-10">
                <DawoodiBohraStarPattern size={14} className="text-[#B89A68]" />
                <span className="font-serif-luxury text-xs tracking-widest uppercase font-semibold">
                  NIKAH · {weddingData.hijriDateDisplay}
                </span>
                <DawoodiBohraStarPattern size={14} className="text-[#B89A68]" />
              </div>
            </div>
          </motion.div>

          {/* 05. Main Primary Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 sm:mt-12 mb-3"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B89A68]" />
              
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#3D3227] font-normal leading-snug tracking-wide">
                {weddingData.nikahStatement || "Nikah performed by Moula TUS"}
              </h3>

              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B89A68]" />
            </div>
          </motion.div>

          {/* 06. Location: Saifee Mahal • Mumbai */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 text-[#8D7047]">
              <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold text-[#8D7047]">
                {weddingData.nikahLocation || "Saifee Mahal • Mumbai"}
              </span>
            </div>
          </motion.div>

          {/* 07. Generous Whitespace & One Short Supporting Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pb-4 max-w-lg mx-auto relative"
          >
            <div className="flex items-center justify-center gap-2 mb-3 text-[#B89A68]">
              <span className="h-[1px] w-10 bg-[#B89A68]/30" />
              <DawoodiBohraStarPattern size={16} className="text-[#B89A68]" />
              <span className="h-[1px] w-10 bg-[#B89A68]/30" />
            </div>

            <p className="font-serif-luxury italic text-sm sm:text-base text-[#8D7047] tracking-wide">
              {weddingData.nikahShortBlessing || "A blessed beginning, under the Du'a and Raza Mubarak of Moula TUS."}
            </p>

            {/* Bottom Botanical Corner Linework */}
            <BotanicalGoldCorner position="bottom-left" className="bottom-0 left-0" />
            <BotanicalGoldCorner position="bottom-right" className="bottom-0 right-0" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};



