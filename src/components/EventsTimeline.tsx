import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { IslamicStarSymbol } from './Ornament';
import { Moon, Sun, Flower2, Users, Crown, Sparkles, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Moon,
  Sun,
  Flower2,
  Users,
  Crown,
  Sparkles,
  Heart
};

export const EventsTimeline: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-serif-luxury text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold block mb-1">
            Program of Celebrations
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3D3227] font-normal">
            Wedding Events Schedule
          </h2>
          <div className="w-16 h-[1px] bg-[#B89A68]/50 mx-auto mt-3" />
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          
          {/* Central Gold Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B89A68]/10 via-[#B89A68]/60 to-[#B89A68]/10 transform sm:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {weddingData.events.map((event, index) => {
              const IconComponent = iconMap[event.iconName] || Sparkles;
              const isEven = index % 2 === 0;
              const isMain = event.isMainEvent;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon Marker */}
                  <div
                    className={`absolute left-4 sm:left-1/2 top-0 transform -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-300 ${
                      isMain
                        ? 'w-11 h-11 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#FDF8EE] to-[#F5E8D7] border-2 border-[#8D7047] shadow-[0_0_16px_rgba(184,154,104,0.4)] text-[#7A5E35]'
                        : 'w-9 h-9 rounded-full bg-[#FFFDF9] border-2 border-[#B89A68] shadow-md text-[#8D7047]'
                    }`}
                  >
                    <IconComponent size={isMain ? 18 : 16} />
                  </div>

                  {/* Event Details Content Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-2xl relative group transition-all duration-300 ${
                        isMain
                          ? 'bg-gradient-to-br from-[#FFFDF9] via-[#FCF7EF] to-[#F7EEDD] border-2 border-[#C5A880]/80 shadow-[0_10px_35px_rgba(184,154,104,0.2)] hover:shadow-[0_12px_40px_rgba(184,154,104,0.28)] ring-1 ring-[#B89A68]/30'
                          : 'bg-[#FFFDF9] gold-foil-border shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {/* Subtle champagne gold corner highlight for main event */}
                      {isMain && (
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#B89A68]/15 to-transparent rounded-tr-2xl pointer-events-none" />
                      )}

                      {/* Header Badges */}
                      <div
                        className={`flex flex-wrap gap-2 items-center mb-3 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        {isMain && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#F3E5D0] via-[#EADBCE] to-[#F3E5D0] border border-[#B89A68]/60 text-[#7A5E35] text-[11px] font-serif-luxury font-semibold uppercase tracking-wider shadow-xs">
                            <Sparkles size={11} className="text-[#8D7047]" />
                            Bride's Main Celebration
                          </span>
                        )}
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-serif-luxury italic ${
                            isMain
                              ? 'bg-[#EFE2D1] text-[#7A5E35] font-medium border border-[#B89A68]/30'
                              : 'bg-[#F5E8D7] text-[#8D7047]'
                          }`}
                        >
                          {event.date}
                        </span>
                      </div>
                      
                      <h3
                        className={`font-serif-luxury text-[#3D3227] font-semibold mb-1 ${
                          isMain ? 'text-3xl sm:text-4xl text-[#2C2218]' : 'text-2xl sm:text-3xl'
                        }`}
                      >
                        {event.title}
                      </h3>
                      
                      {event.subTitle && (
                        <p
                          className={`font-serif-luxury italic text-xs sm:text-sm mb-3 ${
                            isMain ? 'text-[#7A5E35] font-medium' : 'text-[#8D7047]'
                          }`}
                        >
                          {event.subTitle}
                        </p>
                      )}

                      <div
                        className={`h-[1px] mb-3 my-2 ${
                          isEven ? 'sm:ml-auto' : ''
                        } ${
                          isMain
                            ? 'w-20 bg-gradient-to-r from-[#B89A68] to-[#D8BE94]'
                            : 'w-12 bg-[#B89A68]/30'
                        }`}
                      />

                      <p className="font-sans-luxury text-xs sm:text-sm font-semibold text-[#8D7047] tracking-wide uppercase mb-1">
                        ⏰ {event.time}
                      </p>

                      <p className="font-sans-luxury text-xs sm:text-sm font-medium text-[#3D3227] mb-3">
                        📍 {event.venue}
                      </p>

                      <p className="font-sans-luxury text-xs sm:text-sm text-[#6B5B49] leading-relaxed font-light">
                        {event.description}
                      </p>

                      <div
                        className={`mt-4 flex items-center gap-1.5 text-[#B89A68] ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <IslamicStarSymbol size={12} />
                        <span className="text-[10px] tracking-widest uppercase font-serif-luxury">
                          {isMain ? 'Sacred Main Gathering' : 'Blessing'}
                        </span>
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

