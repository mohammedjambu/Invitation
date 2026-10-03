import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioProvider } from './context/AudioContext';
import { Preloader } from './components/Preloader';
import { ParticleBackground } from './components/ParticleBackground';
import { NavbarNavigation } from './components/NavbarNavigation';
import { HeroInvitation } from './components/HeroInvitation';
import { NikahBlessing } from './components/NikahBlessing';
import { FormalInvitation } from './components/FormalInvitation';
import { CoupleStory } from './components/CoupleStory';
import { EventsTimeline } from './components/EventsTimeline';
import { Countdown } from './components/Countdown';
// import { VenueLocation } from './components/VenueLocation';
// import { RSVPForm } from './components/RSVPForm';
// import { QuranicBlessing } from './components/QuranicBlessing';
import { ClosingInvitation } from './components/ClosingInvitation';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnveiled, setIsUnveiled] = useState(false);

  // Guarantee page scroll position starts at the top (0, 0)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleStartUnveil = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsUnveiled(true);
  };

  const handleComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsLoading(false);
  };

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-[#F8F0E5] text-[#3D3227] font-sans selection:bg-[#D8BE94]/30 selection:text-[#5A462A] overflow-x-hidden">
        {/* Floating Ambient Rose Petals & Gold Dust Background Across Full Website */}
        <ParticleBackground />

        {/* Premium Preloader Experience */}
        {isLoading && (
          <Preloader
            onStartUnveil={handleStartUnveil}
            onComplete={handleComplete}
          />
        )}

        {/* Minimal Floating Navigation & Audio Control - Appears ONLY after preloader unveiling starts */}
        <AnimatePresence>
          {(isUnveiled || !isLoading) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <NavbarNavigation />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Master Content Reveal Wrapper — Smooth Cinematic Entrance as Curtains Part */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(12px)' }}
          animate={{
            opacity: isUnveiled || !isLoading ? 1 : 0,
            scale: isUnveiled || !isLoading ? 1 : 0.95,
            filter: isUnveiled || !isLoading ? 'blur(0px)' : 'blur(12px)'
          }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full"
        >
          {/* 1. Hero Section — Majestic Architectural Invitation */}
          <HeroInvitation isUnveiled={isUnveiled || !isLoading} />

          {/* 2. Sacred Nikah Section — Done on the Hands of Moula TUS */}
          <NikahBlessing />

          {/* 3. Formal Digital Invitation Section */}
          <FormalInvitation />

          {/* 4. Couple Editorial Story Section */}
          <CoupleStory />

          {/* 5. Wedding Events Timeline Section */}
          <div id="events-section">
            <EventsTimeline />
          </div>

          {/* 6. Editorial Countdown Section */}
          <Countdown />

          {/* 7. Royal Venue & Location Section */}
          {/* <div id="venue-section">
            <VenueLocation />
          </div> */}

          {/* 8. Response Card / RSVP Section */}
          {/* <RSVPForm /> */}

          {/* 9. Quranic Verse & Spiritual Blessing Section */}
          {/* <QuranicBlessing /> */}

          {/* 10. Closing Invitation & Thank You Section */}
          <ClosingInvitation />
          <Analytics />
        </motion.div>
      </div>
    </AudioProvider>
  );
}

export default App;
