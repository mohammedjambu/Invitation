import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { DawoodiBohraStarPattern, GeometricWatermarkPattern } from './Ornament';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const targetTimestamp = +new Date(weddingData.weddingDateISO);

    const calculateTime = () => {
      const difference = targetTimestamp - Date.now();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isPast: false
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      }
    };

    // Calculate immediately on mount
    calculateTime();

    // Update timer accurately every second
    const timer = setInterval(calculateTime, 1000);

    // Recalculate immediately when tab becomes active again to prevent stale time
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        calculateTime();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds }
  ];

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
    <section id="countdown-section" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden text-center select-none">
      {/* 1. SEAMLESS BACKGROUND WATERMARK & AMBIENT RADIAL GLOW */}
      <GeometricWatermarkPattern />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#F5E5D3]/50 via-[#FDF9F3]/25 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. EDITORIAL COUNTDOWN CONTAINER (CARD-FREE PAPER COMPOSITION) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="max-w-2xl sm:max-w-3xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* EYEBROW & SECTION HEADING */}
        <motion.div variants={childVariants} className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#6D522B]/75">
            <span className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40" />
            <DawoodiBohraStarPattern size={14} className="text-[#6D522B]" />
            <span className="h-[0.5px] w-8 sm:w-12 bg-[#B89A68]/40" />
          </div>
          <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.32em] uppercase font-bold text-[#6D522B] block mb-1">
            THE CELEBRATION BEGINS IN
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#4A381E] font-normal drop-shadow-xs">
            Counting the Auspicious Moments
          </h2>
        </motion.div>

        {/* TOP CHAMPAGNE GOLD DIVIDER */}
        <motion.div variants={childVariants} className="my-6 sm:my-8 flex items-center justify-center gap-3 text-[#B89A68]/60">
          <span className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#B89A68]/50" />
          <span className="text-[7px]">✦</span>
          <span className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#B89A68]/50" />
        </motion.div>

        {/* LIVE COUNTDOWN NUMERALS OR POST-EVENT ANNOUNCEMENT */}
        <motion.div variants={childVariants} className="w-full">
          {timeLeft.isPast ? (
            <div className="my-6 sm:my-8">
              <h3 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#4A381E] tracking-wide uppercase drop-shadow-xs">
                THE CELEBRATION IS HERE
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 my-4 sm:my-6 items-center w-full max-w-xs sm:max-w-2xl mx-auto">
              {timeUnits.map((item, idx) => (
                <div key={item.label} className="relative flex flex-col items-center px-2 py-1">
                  {/* Subtle vertical divider between columns on desktop */}
                  {idx > 0 && (
                    <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-[#B89A68]/35 to-transparent pointer-events-none" />
                  )}

                  {/* Fixed Dimension Number Box to Eliminate Layout Shift */}
                  <div className="relative h-12 sm:h-16 md:h-20 w-16 sm:w-24 md:w-28 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={item.value}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold text-[#4A381E] tracking-tight drop-shadow-xs tabular-nums"
                      >
                        {String(item.value).padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <span className="font-serif-luxury text-[10.5px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#6D522B] mt-1.5 sm:mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>


        {/* BOTTOM CHAMPAGNE GOLD DIVIDER */}
        <motion.div variants={childVariants} className="my-6 sm:my-8 flex items-center justify-center gap-3 text-[#B89A68]/60">
          <span className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#B89A68]/50" />
          <span className="text-[7px]">✦</span>
          <span className="h-[0.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#B89A68]/50" />
        </motion.div>

        {/* WEDDING DATE CONFIRMATION ACCENT */}
        <motion.div variants={childVariants} className="mt-1">
          <p className="font-serif-luxury text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#6D522B]">
            FRIDAY · 27 NOVEMBER 2026
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Countdown;

