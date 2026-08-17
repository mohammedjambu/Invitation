import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Heart, Calendar, MapPin, Send, Music } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { useAudio } from '../context/AudioContext';

export const NavbarNavigation: React.FC = () => {
  const { isPlaying, toggleAudio, songTitle, movieTitle } = useAudio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nikah Blessing', href: '#nikah-section', icon: Heart },
    { name: 'Events Schedule', href: '#events-section', icon: Calendar },
    { name: 'Venue & Map', href: '#venue-section', icon: MapPin },
    { name: 'RSVP Card', href: '#rsvp-section', icon: Send }
  ];

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#B89A68]/20">
        <div
          className="h-full bg-gradient-to-r from-[#B89A68] via-[#D8BE94] to-[#8D7047] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Floating Controls Bar */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 flex items-center gap-3">
        
        {/* Audio Status Floating Badge */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#B89A68]/30 shadow-md text-xs font-serif-luxury text-[#8D7047]"
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
          className={`w-11 h-11 rounded-full border backdrop-blur-md shadow-lg flex items-center justify-center transition-all cursor-pointer ${
            isPlaying
              ? 'bg-[#B89A68] text-[#FFFDF9] border-[#8D7047]'
              : 'bg-[#FFFDF9]/80 text-[#8D7047] border-[#B89A68]/40 hover:bg-[#F5E8D7]'
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
          className="w-11 h-11 rounded-full bg-[#FFFDF9]/80 backdrop-blur-md text-[#8D7047] border border-[#B89A68]/40 shadow-lg flex items-center justify-center hover:bg-[#F5E8D7] transition-all cursor-pointer"
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
            className="fixed top-18 right-4 sm:top-20 sm:right-6 z-40 bg-[#FFFDF9]/95 backdrop-blur-lg border border-[#B89A68]/30 rounded-2xl p-4 shadow-2xl w-60 text-left"
          >
            <div className="text-center pb-2 border-b border-[#B89A68]/20 mb-3">
              <span className="font-script-luxury text-2xl text-[#8D7047] block">
                {weddingData.monogram}
              </span>
              <span className="font-serif-luxury text-[10px] tracking-widest uppercase text-[#6B5B49]">
                Invitation Menu
              </span>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-serif-luxury text-[#3D3227] hover:bg-[#F5E8D7] hover:text-[#8D7047] transition-colors"
                  >
                    <Icon size={14} className="text-[#B89A68]" />
                    <span>{link.name}</span>
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
