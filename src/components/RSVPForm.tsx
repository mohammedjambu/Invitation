import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../config/weddingData';
import { ArabesqueDivider, CornerFiligree } from './Ornament';
import { Check, Send, Calendar, Heart } from 'lucide-react';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'declining'>('attending');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger celebratory gold confetti burst
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#B89A68', '#D8BE94', '#8D7047', '#F5E8D7']
    });

    setIsSubmitted(true);
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Wedding of ${weddingData.groomName} & ${weddingData.brideName}`);
    const details = encodeURIComponent(`Sacred Nikah & Wedding Celebrations in the Blessed Presence of Moula TUS`);
    const location = encodeURIComponent(`${weddingData.venue.name}, ${weddingData.venue.address}`);
    const startDate = "20261128T173000Z";
    const endDate = "20261128T220000Z";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="rsvp-section" className="relative py-24 px-4 sm:px-6 bg-[#F5E8D7]/30 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-serif-luxury text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold block mb-1">
            Répondez S'il Vous Plaît
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3D3227] font-normal">
            Response Card
          </h2>
          <div className="w-16 h-[1px] bg-[#B89A68]/50 mx-auto mt-3" />
        </motion.div>

        {/* Form Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-gradient-to-b from-[#FFFDF9] via-[#FBF4E8] to-[#F5E8D7] rounded-3xl p-8 sm:p-14 gold-foil-border gold-foil-double-border shadow-2xl relative text-center"
        >
          <CornerFiligree position="top-left" className="top-4 left-4" />
          <CornerFiligree position="top-right" className="top-4 right-4" />
          <CornerFiligree position="bottom-left" className="bottom-4 left-4" />
          <CornerFiligree position="bottom-right" className="bottom-4 right-4" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-6 max-w-xl mx-auto text-left"
              >
                <div className="text-center mb-6">
                  <p className="font-serif-luxury italic text-base text-[#8D7047]">
                    “Please favor us with your response by November 15th, 2026”
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label className="block font-serif-luxury text-sm tracking-wider uppercase text-[#8D7047] font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#B89A68]/40 focus:border-[#8D7047] focus:ring-2 focus:ring-[#B89A68]/20 outline-none font-sans-luxury text-sm text-[#3D3227] transition-all"
                  />
                </div>

                {/* Attendance Options */}
                <div>
                  <label className="block font-serif-luxury text-sm tracking-wider uppercase text-[#8D7047] font-semibold mb-2">
                    Will You Be Attending? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttendance('attending')}
                      className={`p-3 rounded-xl border text-sm font-serif-luxury flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        attendance === 'attending'
                          ? 'bg-[#B89A68] text-[#FFFDF9] border-[#8D7047] shadow-md font-semibold'
                          : 'bg-[#FFFDF9] text-[#6B5B49] border-[#B89A68]/30 hover:border-[#B89A68]'
                      }`}
                    >
                      <Check size={16} />
                      <span>Joyfully Accepts</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttendance('declining')}
                      className={`p-3 rounded-xl border text-sm font-serif-luxury flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        attendance === 'declining'
                          ? 'bg-[#8D7047] text-[#FFFDF9] border-[#3D3227] shadow-md font-semibold'
                          : 'bg-[#FFFDF9] text-[#6B5B49] border-[#B89A68]/30 hover:border-[#B89A68]'
                      }`}
                    >
                      <span>Regretfully Declines</span>
                    </button>
                  </div>
                </div>

                {/* Number of Guests */}
                {attendance === 'attending' && (
                  <div>
                    <label className="block font-serif-luxury text-sm tracking-wider uppercase text-[#8D7047] font-semibold mb-2">
                      Number of Guests Attending
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#B89A68]/40 focus:border-[#8D7047] focus:ring-2 focus:ring-[#B89A68]/20 outline-none font-sans-luxury text-sm text-[#3D3227]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Message / Prayers */}
                <div>
                  <label className="block font-serif-luxury text-sm tracking-wider uppercase text-[#8D7047] font-semibold mb-2">
                    Message or Blessings for the Couple
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message of congratulations..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#B89A68]/40 focus:border-[#8D7047] focus:ring-2 focus:ring-[#B89A68]/20 outline-none font-sans-luxury text-sm text-[#3D3227] transition-all resize-none"
                  />
                </div>

                <ArabesqueDivider className="my-6" />

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B89A68] via-[#8D7047] to-[#B89A68] text-[#FFFDF9] font-serif-luxury text-base tracking-[0.2em] uppercase font-semibold shadow-lg hover:shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={18} />
                  <span>Confirm Presence</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 space-y-6 text-center max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#B89A68]/20 text-[#8D7047] flex items-center justify-center mx-auto mb-4 border border-[#B89A68]">
                  <Heart size={32} />
                </div>

                <h3 className="font-serif-luxury text-3xl text-[#3D3227] font-semibold">
                  Thank You, {name}!
                </h3>

                <p className="font-serif-luxury italic text-lg text-[#8D7047] leading-relaxed">
                  {attendance === 'attending'
                    ? `We are delighted to confirm your presence for ${guestCount} guest(s). Your blessings mean the world to ${weddingData.groomName} & ${weddingData.brideName}.`
                    : `We deeply appreciate your thoughtful message and prayers for ${weddingData.groomName} & ${weddingData.brideName}.`}
                </p>

                <ArabesqueDivider className="my-4" />

                {attendance === 'attending' && (
                  <button
                    onClick={handleAddToCalendar}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B89A68] text-[#FFFDF9] font-serif-luxury text-sm tracking-wider uppercase shadow-md hover:bg-[#8D7047] transition-colors cursor-pointer"
                  >
                    <Calendar size={16} />
                    <span>Add to Google Calendar</span>
                  </button>
                )}

                <div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-serif-luxury text-[#6B5B49] underline hover:text-[#8D7047] mt-4 block mx-auto cursor-pointer"
                  >
                    Edit Response
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
