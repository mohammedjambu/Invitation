import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  IslamicStarSymbol,
  CornerFiligree,
  DawoodiBohraStarPattern,
  GeometricWatermarkPattern
} from './Ornament';
import { Sparkles, Clock, MapPin } from 'lucide-react';
import {
  PREMIUM_EASE,
  SECTION_VIEWPORT,
  CARD_VIEWPORT,
  revealUp,
  lineRevealX,
  lineRevealY
} from '../utils/motion';

/**
 * Formats full date string like "Tuesday, 24th November 2026" to "TUESDAY · 24 NOVEMBER 2026"
 */
const formatDateCapsule = (dateStr: string) => {
  const match = dateStr.match(/^([A-Za-z]+),\s*(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})/);
  if (match) {
    return `${match[1].toUpperCase()} · ${match[2]} ${match[3].toUpperCase()} ${match[4]}`;
  }
  return dateStr.toUpperCase();
};

export const EventsTimeline: React.FC = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: PREMIUM_EASE,
        staggerChildren: 0.14
      }
    }
  };

  const getCardVariants = (isEven: boolean): Variants => ({
    hidden: {
      opacity: 0,
      y: 28,
      x: isEven ? 16 : -16
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.75,
        ease: PREMIUM_EASE
      }
    }
  });

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF4EA] overflow-hidden">
      {/* Background Watermark & Subtle Islamic Pattern */}
      <GeometricWatermarkPattern className="opacity-[0.035]" />

      {/* Decorative Petals in margins */}
      <div className="absolute top-12 left-4 sm:left-12 w-20 h-20 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="#C08081">
          <path d="M50 10 C65 25, 75 45, 50 90 C25 45, 35 25, 50 10 Z" transform="rotate(-25 50 50)" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-4 sm:right-12 w-24 h-24 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="#D4999A">
          <path d="M50 10 C65 25, 75 45, 50 90 C25 45, 35 25, 50 10 Z" transform="rotate(35 50 50)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          variants={headerVariants}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            variants={revealUp}
            className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold block mb-2"
          >
            Program of Celebrations
          </motion.span>

          <motion.h2
            variants={revealUp}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#3D3227] font-normal tracking-wide"
          >
            Wedding Events Schedule
          </motion.h2>

          <motion.div
            variants={lineRevealX}
            className="w-16 h-[1px] bg-[#B89A68]/50 mx-auto mt-4 origin-center"
          />
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central Vertical Gold Line Draw (ScaleY 0 -> 1 from Top) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            variants={lineRevealY}
            style={{ originY: 0 }}
            className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#B89A68]/15 via-[#B89A68]/50 to-[#B89A68]/15 transform sm:-translate-x-1/2"
          />

          <div className="space-y-12 sm:space-y-16">
            {weddingData.events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isMain = event.isMainEvent;
              const formattedDate = formatDateCapsule(event.date);

              return (
                <motion.div
                  key={event.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={CARD_VIEWPORT}
                  variants={getCardVariants(isEven)}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Marker Node (Circular Outer + Fine Border + Center Ornament) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={CARD_VIEWPORT}
                    transition={{ duration: 0.5, ease: PREMIUM_EASE, delay: 0.1 }}
                    className={`absolute left-6 sm:left-1/2 top-7 transform -translate-x-1/2 z-20 flex items-center justify-center transition-all duration-300 ${
                      isMain
                        ? 'w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF3E8] border-2 border-[#8D7047] shadow-[0_0_12px_rgba(184,154,104,0.3)] text-[#7A5E35]'
                        : 'w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#B89A68]/60 shadow-xs text-[#8D7047]'
                    }`}
                  >
                    {isMain ? (
                      <DawoodiBohraStarPattern size={20} className="text-[#8D7047]" />
                    ) : (
                      <IslamicStarSymbol size={14} className="text-[#8D7047]" />
                    )}
                  </motion.div>

                  {/* Event Details Content Card (Luxury Stationery Card) */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] pl-14 sm:pl-0 ${
                      isEven ? 'sm:text-left sm:pr-6' : 'sm:text-left sm:pl-6'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-7 rounded-2xl relative group transition-all duration-300 overflow-hidden ${
                        isMain
                          ? 'bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E8] to-[#F5E8D7] border border-[#B89A68]/60 shadow-[0_8px_28px_rgba(61,50,39,0.07)] hover:shadow-[0_10px_32px_rgba(184,154,104,0.18)] hover:-translate-y-[2px]'
                          : 'bg-[#FFFDF9] border border-[#B89A68]/35 shadow-[0_4px_20px_rgba(61,50,39,0.05)] hover:shadow-[0_8px_25px_rgba(184,154,104,0.12)] hover:-translate-y-[2px]'
                      }`}
                    >
                      {/* Subtle Fine Inner Border Inset */}
                      <div
                        className={`absolute inset-2 border rounded-xl pointer-events-none ${
                          isMain ? 'border-[#B89A68]/35 border-dashed' : 'border-[#B89A68]/20'
                        }`}
                      />

                      {/* Corner Filigree Accents */}
                      <CornerFiligree
                        position="top-left"
                        className="!w-5 !h-5 sm:!w-6 sm:!h-6 top-2.5 left-2.5 text-[#B89A68]/35"
                      />
                      <CornerFiligree
                        position="top-right"
                        className="!w-5 !h-5 sm:!w-6 sm:!h-6 top-2.5 right-2.5 text-[#B89A68]/35"
                      />
                      <CornerFiligree
                        position="bottom-left"
                        className="!w-5 !h-5 sm:!w-6 sm:!h-6 bottom-2.5 left-2.5 text-[#B89A68]/35"
                      />
                      <CornerFiligree
                        position="bottom-right"
                        className="!w-5 !h-5 sm:!w-6 sm:!h-6 bottom-2.5 right-2.5 text-[#B89A68]/35"
                      />

                      {/* Zafaf Jaman Featured Highlight Shimmer Sweep */}
                      {isMain && (
                        <motion.div
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '200%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.6, delay: 0.45, ease: 'easeInOut' }}
                          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#B89A68]/20 to-transparent skew-x-12 pointer-events-none"
                        />
                      )}

                      {/* Card Content Container */}
                      <div className="relative z-10 space-y-3.5">
                        
                        {/* Zafaf Jaman Featured Tag */}
                        {isMain && (
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <span className="text-[#7A5E35] text-[10px] sm:text-[11px] font-serif-luxury font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B89A68]/15 border border-[#B89A68]/40 whitespace-nowrap">
                              <Sparkles size={11} className="text-[#8D7047] shrink-0" />
                              Bride's Main Celebration
                            </span>
                          </div>
                        )}

                        {/* 1. DATE UI (Warm Cream Capsule with Fine Border) */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-serif-luxury font-medium tracking-wider text-[#8D7047] bg-[#F5E8D7]/60 border border-[#B89A68]/30 shadow-xs whitespace-nowrap">
                            {formattedDate}
                          </span>
                        </div>

                        {/* 2. EVENT NAME */}
                        <div>
                          <h3
                            className={`font-serif-luxury text-[#2C2218] font-normal tracking-wide ${
                              isMain ? 'text-2xl sm:text-3xl text-[#221910]' : 'text-xl sm:text-2xl'
                            }`}
                          >
                            {event.title}
                          </h3>

                          {/* 3. EVENT DESCRIPTION */}
                          {event.subTitle && (
                            <p className="font-serif-luxury italic text-xs sm:text-sm text-[#8D7047] mt-1 font-normal leading-relaxed">
                              {event.subTitle}
                            </p>
                          )}
                        </div>

                        {/* 4. SUBTLE SINGLE HORIZONTAL SEPARATOR */}
                        <div className="w-full h-[1px] bg-[#B89A68]/20 my-3" />

                        {/* 5. MEAL / SERVICE TIME */}
                        {event.time && (
                          <div className="flex items-center gap-2.5 text-[#7A5E35]">
                            <div className="w-6 h-6 rounded-full bg-[#F5E8D7] border border-[#B89A68]/60 shadow-[0_1px_4px_rgba(184,154,104,0.18)] flex items-center justify-center text-[#7A5E35] shrink-0">
                              <Clock size={13} className="text-[#7A5E35]" />
                            </div>
                            <span className="text-xs font-sans-luxury tracking-widest font-semibold uppercase text-[#7A5E35]">
                              {event.time}
                            </span>
                          </div>
                        )}

                        {/* 6. VENUE / LOCATION */}
                        <div className="flex items-center gap-2.5 text-[#3D3227] pt-0.5">
                          <div className="w-6 h-6 rounded-full bg-[#F5E8D7] border border-[#B89A68]/60 shadow-[0_1px_4px_rgba(184,154,104,0.18)] flex items-center justify-center text-[#7A5E35] shrink-0">
                            <MapPin size={13} className="text-[#7A5E35]" />
                          </div>
                          <span className="font-sans-luxury text-xs sm:text-sm font-semibold tracking-wide text-[#3D3227]">
                            {event.venue}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
