import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { ArabesqueDivider, IslamicStarSymbol } from './Ornament';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(weddingData.weddingDateISO) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#F5E8D7]/30 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-gradient-to-b from-[#FFFDF9] via-[#FBF4E8] to-[#F5E8D7] rounded-3xl p-8 sm:p-14 gold-foil-border shadow-xl relative"
        >
          <div className="flex items-center justify-center gap-2 text-[#B89A68] mb-3">
            <IslamicStarSymbol size={16} />
            <span className="font-serif-luxury text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold">
              The Celebration Begins In
            </span>
            <IslamicStarSymbol size={16} />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#3D3227] font-normal mb-8">
            Counting the Auspicious Moments
          </h2>

          <ArabesqueDivider className="my-6" />

          {/* Editorial Numbers Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 my-8 items-center">
            {timeUnits.map((item, idx) => (
              <div key={item.label} className="relative flex flex-col items-center p-2">
                {/* Thin Vertical Gold Divider for sm screens */}
                {idx > 0 && (
                  <div className="hidden sm:block absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-[#B89A68]/40 to-transparent" />
                )}

                <motion.span
                  key={item.value}
                  initial={{ opacity: 0.7, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light text-[#8D7047] tracking-tight"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.span>

                <span className="font-sans-luxury text-[10px] sm:text-xs tracking-[0.25em] text-[#6B5B49] uppercase font-semibold mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-serif-luxury italic text-xs sm:text-sm text-[#8D7047] mt-4">
            Friday, 27th November 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};
