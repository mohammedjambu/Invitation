import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Heart, Calendar, Music, Home, FileText, Sparkles, Clock, Bookmark } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { useAudio } from '../context/AudioContext';
import { useSmoothScroll } from '../context/SmoothScrollContext';

export const NavbarNavigation: React.FC = () => {
  const { isPlaying, toggleAudio, songTitle, movieTitle } = useAudio();
  const { lenis, scrollTo } = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor Scroll Progress via Lenis physics ticks
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
    };

    if (lenis) {
      lenis.on('scroll', handleScroll);
      handleScroll();
      return () => {
        lenis.off('scroll', handleScroll);
      };
    } else {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lenis]);

  const navLinks = [
    { name: 'Welcome Cover', href: '#hero-section', icon: Home },
    { name: 'Nikah Blessing', href: '#nikah-section', icon: Heart },
    { name: 'Formal Invitation', href: '#formal-invitation-section', icon: FileText },
    { name: 'Our Story', href: '#couple-story-section', icon: Sparkles },
    { name: 'Events Schedule', href: '#events-section', icon: Calendar },
    { name: 'Countdown', href: '#countdown-section', icon: Clock },
    { name: 'Closing Blessing', href: '#closing-section', icon: Bookmark }
  ];

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-[#B89A68]/20 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#B89A68] via-[#D8BE94] to-[#8D7047] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Floating Controls Bar - Sticky Across All Sections */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[90] flex items-center gap-3">
        
        {/* Audio Status Floating Badge */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#B89A68]/45 shadow-lg text-xs font-serif-luxury text-[#8D7047]"
        >
          <Music size={13} className={`text-[#B89A68] ${isPlaying ? 'animate-spin-slow' : ''}`} />
          <span className="font-medium">{songTitle}</span>
          <span className="text-[10px] text-[#A68A5B] italic">({movieTitle})</span>
        </motion.div>

        {/* Audio Control Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAudio}
          className={`w-11 h-11 rounded-full border backdrop-blur-md shadow-xl flex items-center justify-center transition-all cursor-pointer ${
            isPlaying
              ? 'bg-[#B89A68] text-[#FFFDF9] border-[#8D7047]'
              : 'bg-[#FFFDF9]/90 text-[#8D7047] border-[#B89A68]/50 hover:bg-[#F5E8D7]'
          }`}
          aria-label="Toggle background music"
          title={isPlaying ? `Pause ${songTitle}` : `Play ${songTitle}`}
        >
          {isPlaying ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
        </motion.button>

        {/* Minimal Navigation Menu Trigger */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-11 h-11 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md text-[#8D7047] border border-[#B89A68]/50 shadow-xl flex items-center justify-center hover:bg-[#F5E8D7] transition-all cursor-pointer"
          aria-label="Navigation Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Floating Section Quick Navigation Dot Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="fixed top-18 right-4 sm:top-20 sm:right-6 z-[90] bg-[#FFFDF9]/98 backdrop-blur-xl border border-[#B89A68]/40 rounded-2xl p-4 shadow-2xl w-64 text-left"
          >
            <div className="text-center pb-2 border-b border-[#B89A68]/20 mb-3">
              <span className="font-script-luxury text-2xl text-[#8D7047] block">
                {weddingData.monogram}
              </span>
              {weddingData.hashtag && (
                <span className="font-serif-luxury text-[11px] tracking-widest text-[#8D7047] font-semibold block">
                  {weddingData.hashtag}
                </span>
              )}
              <span className="font-serif-luxury text-[9px] tracking-widest uppercase text-[#6B5B49] block mt-0.5">
                Invitation Menu
              </span>
            </div>

            <nav className="space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollTo(link.href);
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-serif-luxury text-[#3D3227] hover:bg-[#F5E8D7] hover:text-[#8D7047] transition-colors"
                  >
                    <Icon size={14} className="text-[#B89A68] shrink-0" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

