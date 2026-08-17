import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { ArabesqueDivider, IslamicStarSymbol } from './Ornament';

export const CoupleStory: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#F5E8D7]/40 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Editorial Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Top: Arched Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 rounded-t-[180px] rounded-b-2xl border-2 border-[#B89A68]/30 transform rotate-1 pointer-events-none" />
              
              {/* Image Container with Arched Top */}
              <div className="relative overflow-hidden rounded-t-[170px] rounded-b-xl shadow-2xl bg-[#EFE0CC] border border-[#B89A68]/40 aspect-[3/4]">
                <img
                  src={weddingData.coupleStory.image}
                  alt={`${weddingData.groomName} & ${weddingData.brideName} Couple Portrait`}
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3227]/40 via-transparent to-transparent" />
                
                {/* Monogram Badge Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFDF9]/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#B89A68]/40 shadow-lg flex items-center gap-2">
                  <IslamicStarSymbol size={14} />
                  <span className="font-serif-luxury text-xs tracking-widest text-[#8D7047] font-semibold uppercase">
                    {weddingData.monogram}
                  </span>
                  <IslamicStarSymbol size={14} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right / Bottom: Story & Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <span className="font-serif-luxury text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold block">
              The Couple
            </span>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#3D3227] font-normal leading-tight">
              {weddingData.coupleStory.title}
            </h2>

            <div className="w-16 h-[1px] bg-[#B89A68] mx-auto lg:mx-0" />

            <blockquote className="font-serif-luxury italic text-xl sm:text-2xl text-[#8D7047] leading-relaxed border-l-0 lg:border-l-2 border-[#B89A68]/40 lg:pl-4">
              {weddingData.coupleStory.quote}
            </blockquote>

            <p className="font-sans-luxury text-sm sm:text-base text-[#6B5B49] leading-relaxed font-light">
              {weddingData.coupleStory.text}
            </p>

            <ArabesqueDivider className="lg:justify-start" />

            <div className="pt-2">
              <span className="font-script-luxury text-4xl sm:text-5xl text-[#8D7047] block">
                {weddingData.brideName} & {weddingData.groomName}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
