import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { IslamicStarSymbol } from './Ornament';
import { Sparkles, Heart, Crown } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Heart,
  Crown
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

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon Marker */}
                  <div className="absolute left-4 sm:left-1/2 top-0 transform -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#FFFDF9] border-2 border-[#B89A68] flex items-center justify-center shadow-md text-[#8D7047]">
                    <IconComponent size={16} />
                  </div>

                  {/* Event Details Content Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
                    }`}
                  >
                    <div className="bg-[#FFFDF9] p-6 sm:p-8 rounded-2xl gold-foil-border shadow-lg relative group transition-all duration-300 hover:shadow-xl">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#F5E8D7] text-[#8D7047] text-xs font-serif-luxury italic mb-3">
                        {event.date}
                      </span>
                      
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#3D3227] font-semibold mb-1">
                        {event.title}
                      </h3>
                      
                      {event.subTitle && (
                        <p className="font-serif-luxury italic text-xs sm:text-sm text-[#8D7047] mb-3">
                          {event.subTitle}
                        </p>
                      )}

                      <div className="h-[1px] w-12 bg-[#B89A68]/30 mb-3 my-2" />

                      <p className="font-sans-luxury text-xs sm:text-sm font-semibold text-[#8D7047] tracking-wide uppercase mb-1">
                        ⏰ {event.time}
                      </p>

                      <p className="font-sans-luxury text-xs sm:text-sm font-medium text-[#3D3227] mb-3">
                        📍 {event.venue}
                      </p>

                      <p className="font-sans-luxury text-xs sm:text-sm text-[#6B5B49] leading-relaxed font-light">
                        {event.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-[#B89A68]">
                        <IslamicStarSymbol size={12} />
                        <span className="text-[10px] tracking-widest uppercase font-serif-luxury">Blessing</span>
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
