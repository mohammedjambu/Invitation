import { useState } from 'react';
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
import { VenueLocation } from './components/VenueLocation';
// import { RSVPForm } from './components/RSVPForm';
import { QuranicBlessing } from './components/QuranicBlessing';
import { ClosingInvitation } from './components/ClosingInvitation';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-[#F8F0E5] text-[#3D3227] font-sans selection:bg-[#D8BE94]/30 selection:text-[#5A462A] overflow-x-hidden">
        {/* Premium Preloader Experience */}
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

        {/* Floating Ambient Golden Particles */}
        <ParticleBackground />

        {/* Minimal Floating Navigation & Audio Control */}
        <NavbarNavigation />

        {/* 1. Hero Section — Majestic Architectural Invitation */}
        <HeroInvitation />

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
        <div id="venue-section">
          <VenueLocation />
        </div>

        {/* 8. Response Card / RSVP Section */}
        {/* <RSVPForm /> */}

        {/* 9. Quranic Verse & Spiritual Blessing Section */}
        <QuranicBlessing />

        {/* 10. Closing Invitation & Thank You Section */}
        <ClosingInvitation />
      </div>
    </AudioProvider>
  );
}

export default App;
