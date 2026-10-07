import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PREMIUM_EASE } from '../utils/motion';
import { DawoodiBohraStarPattern } from './Ornament';

interface LuxuryHashtagBadgeProps {
  hashtag: string;
  isTriggered?: boolean;
  delay?: number;
  className?: string;
}

export const LuxuryHashtagBadge: React.FC<LuxuryHashtagBadgeProps> = ({
  hashtag,
  isTriggered = true,
  delay = 0,
  className = ''
}) => {
  const hasTriggeredRef = useRef(false);
  const [typedCharCount, setTypedCharCount] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    if (!isTriggered || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Respect user reduced-motion setting
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsGlowing(true);
      setTypedCharCount(hashtag.length);
      return;
    }

    // Trigger typing sequence after delay (self-contained)
    setTimeout(() => {
      setIsGlowing(true);
      for (let i = 1; i <= hashtag.length; i++) {
        setTimeout(() => {
          setTypedCharCount(prev => Math.max(prev, i));
        }, i * 90);
      }
    }, delay);

    // Final safety completion
    setTimeout(() => {
      setIsGlowing(true);
      setTypedCharCount(hashtag.length);
    }, delay + hashtag.length * 90 + 300);

  }, [isTriggered, hashtag, delay]);

  const characters = hashtag.split('');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 15, rotate: -1.5 }}
      animate={
        isTriggered
          ? { opacity: 1, scale: 1, y: 0, rotate: 0 }
          : { opacity: 0, scale: 0.85, y: 15, rotate: -1.5 }
      }
      transition={{ duration: 0.85, ease: PREMIUM_EASE }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      aria-label={`Wedding Hashtag ${hashtag}`}
    >
      {/* 1. RADIANT GOLD AMBIENT AURA GLOW */}
      <motion.div
        animate={
          isGlowing
            ? { opacity: [0.35, 0.75, 0.45], scale: [0.95, 1.12, 1.0] }
            : { opacity: 0 }
        }
        transition={{ duration: 2.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute -inset-2 bg-gradient-to-r from-[#D8BE94]/40 via-[#F5E5D3]/70 to-[#D8BE94]/40 rounded-full blur-md pointer-events-none"
      />

      {/* 2. MAIN GILDED PILL CONTAINER */}
      <div className="relative inline-flex items-center gap-2 px-3 py-1 sm:px-6.5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#FAF5EC] to-[#F7EEDF] border border-[#B89A68]/60 shadow-[0_6px_22px_-4px_rgba(100,75,40,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
        
        {/* Left Decorative Gold Star */}
        <motion.div
          animate={isGlowing ? { rotate: [0, 180, 360] } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="text-[#6D522B] opacity-85 shrink-0"
        >
          <DawoodiBohraStarPattern size={13} />
        </motion.div>

        {/* SEQUENTIAL SPARKLE CHARACTER TYPING REVEAL */}
        <div className="font-serif-luxury text-xs sm:text-sm tracking-[0.28em] font-bold text-[#4A381E] flex items-center relative z-10">
          {characters.map((char, index) => {
            const isRevealed = index < typedCharCount;
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 1.4, filter: 'blur(3px)', color: '#D4AF37' }}
                animate={
                  isRevealed
                    ? { opacity: 1, scale: 1, filter: 'blur(0px)', color: '#4A381E' }
                    : { opacity: 0, scale: 1.4, filter: 'blur(3px)', color: '#D4AF37' }
                }
                transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                className="inline-block relative"
              >
                {char}
                {/* Micro Sparkle burst effect on active typing character */}
                {isRevealed && index === typedCharCount - 1 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 rounded-full bg-[#B89A68]/45 pointer-events-none"
                  />
                )}
              </motion.span>
            );
          })}
        </div>

        {/* Right Decorative Gold Star */}
        <motion.div
          animate={isGlowing ? { rotate: [360, 180, 0] } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="text-[#6D522B] opacity-85 shrink-0"
        >
          <DawoodiBohraStarPattern size={13} />
        </motion.div>

        {/* METALLIC CHAMPAGNE SHIMMER SWEEP */}
        <motion.div
          animate={
            isGlowing
              ? { x: ['-100%', '250%'] }
              : { x: '-100%' }
          }
          transition={{
            repeat: Infinity,
            repeatDelay: 3.5,
            duration: 1.6,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/65 to-transparent skew-x-12 pointer-events-none z-20"
        />
      </div>
    </motion.div>
  );
};
