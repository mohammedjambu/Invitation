import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern, CornerFiligree } from './Ornament';

export const CoupleStory: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="couple-story-section" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden text-center select-none">
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT BACKDROP GLOW */}
      <GeometricWatermarkPattern />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#F5E5D3]/50 via-[#FDF9F3]/25 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. INTIMATE EDITORIAL STORY CONTAINER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="max-w-2xl sm:max-w-3xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* SECTION HEADER: THEIR STORY */}
        <motion.div variants={childVariants} className="mb-6 sm:mb-8 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#6D522B]/75">
            <span className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40" />
            <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
            <span className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40" />
          </div>
          <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.32em] uppercase font-bold text-[#6D522B]">
            A LITTLE ABOUT US
          </span>
        </motion.div>

        {/* EDITORIAL PORTRAIT COUPLE PHOTOGRAPH WITH ARCHED SILHOUETTE */}
        <motion.div variants={childVariants} className="my-3 sm:my-5 relative group">
          <div className="relative w-[260px] sm:w-[320px] md:w-[340px] aspect-[3/4] mx-auto p-2.5 bg-[#FAF4EA] rounded-t-[140px] sm:rounded-t-[170px] rounded-b-2xl border border-[#B89A68]/45 shadow-[0_20px_50px_-10px_rgba(100,75,40,0.18),0_0_0_1px_rgba(184,154,104,0.3)]">
            {/* Inner Fine Gold Foil Arched Border */}
            <div className="absolute inset-4 rounded-t-[125px] sm:rounded-t-[155px] rounded-b-xl border border-[#D8BE94]/75 pointer-events-none z-20" />
            
            {/* Corner Filigrees outside photo corners */}
            <CornerFiligree position="top-left" className="top-4 left-4 !w-6 !h-6 text-[#B89A68]/60 z-20" />
            <CornerFiligree position="top-right" className="top-4 right-4 !w-6 !h-6 text-[#B89A68]/60 z-20" />

            {/* Photo Container */}
            <div className="w-full h-full rounded-t-[128px] sm:rounded-t-[158px] rounded-b-xl overflow-hidden relative bg-[#EAD8BA]">
              <img
                src={weddingData.coupleStory.image}
                alt={`${weddingData.groomName} & ${weddingData.brideName}`}
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-103"
              />
              {/* Soft Lighting Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A381E]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* MAIN EDITORIAL HEADLINE WITH INTENTIONAL MOBILE LINE BREAKS */}
        <motion.div variants={childVariants} className="my-6 sm:my-8 max-w-md mx-auto">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#4A381E] font-normal leading-[1.15] tracking-wide uppercase font-bold drop-shadow-xs">
            IT WAS ALWAYS<br />
            THE LITTLE<br />
            THINGS
          </h2>
        </motion.div>

        {/* Subtle Decorative Star Divider */}
        <motion.div variants={childVariants} className="my-2 flex items-center justify-center gap-3 text-[#B89A68]/60">
          <span className="h-[0.5px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#B89A68]/50" />
          <span className="text-[7px]">◆</span>
          <span className="h-[0.5px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#B89A68]/50" />
        </motion.div>

        {/* PERSONAL REFLECTION BODY COPY */}
        <motion.div variants={childVariants} className="my-4 sm:my-6 max-w-lg mx-auto px-2">
          <p className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#4A381E] leading-relaxed font-normal">
            "Some stories are written in grand moments.<br className="hidden sm:inline" />
            Ours has been shaped by the quiet ones —<br className="hidden sm:inline" />
            the conversations, the smiles, the families,<br className="hidden sm:inline" />
            and all the little moments that brought us here."
          </p>
        </motion.div>

        {/* AQA MOULA TUS CLOSING MESSAGE */}
        <motion.div variants={childVariants} className="mt-4 sm:mt-6 mb-8 max-w-md mx-auto px-2">
          <p className="font-serif-luxury italic text-xs sm:text-sm md:text-base text-[#6D522B] font-semibold leading-relaxed">
            "With the Dua and Raza Mubarak of Aqa Moula TUS,<br className="hidden sm:inline" />
            we look forward to writing the next chapter together."
          </p>
        </motion.div>

        {/* COUPLE NAMES SIGNATURE */}
        <motion.div variants={childVariants} className="my-3 flex flex-col items-center">
          <h3 className="font-script-luxury text-4xl sm:text-6xl text-[#6D522B] font-normal leading-tight tracking-normal drop-shadow-xs">
            {weddingData.hashtag}
          </h3>
        </motion.div>

        {/* SIGNATURE HASHTAG BADGE PILL */}
        {/* {weddingData.hashtag && (
          <motion.div variants={childVariants} className="mt-6 sm:mt-8">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#FAF5EC]/90 backdrop-blur-sm border border-[#B89A68]/45 shadow-[0_4px_14px_rgba(92,68,37,0.1)]">
              <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.25em] font-bold text-[#4A381E]">
                {weddingData.hashtag}
              </span>
            </div>
          </motion.div>
        )} */}

      </motion.div>
    </section>
  );
};

export default CoupleStory;

