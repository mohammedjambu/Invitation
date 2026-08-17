import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { ArabesqueDivider, CornerFiligree, IslamicStarSymbol } from './Ornament';
import { MapPin, Navigation, ExternalLink, X } from 'lucide-react';

export const VenueLocation: React.FC = () => {
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#F8F0E5] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-serif-luxury text-xs tracking-[0.3em] uppercase text-[#8D7047] font-semibold block mb-1">
            Destination & Setting
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#3D3227] font-normal">
            The Royal Venue
          </h2>
          <div className="w-16 h-[1px] bg-[#B89A68]/50 mx-auto mt-3" />
        </motion.div>

        {/* Venue Layout Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Architectural Venue Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-2xl gold-foil-border bg-[#EFE0CC] aspect-[16/10]">
              <img
                src={weddingData.venue.image}
                alt={weddingData.venue.name}
                className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03] transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3227]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="font-serif-luxury italic text-xs text-[#E3D1B4] uppercase tracking-widest block mb-1">
                  Primary Celebration Venue
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FFFDF9] font-medium leading-tight">
                  {weddingData.venue.name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Location Text & CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 bg-[#FFFDF9] p-8 sm:p-10 rounded-2xl gold-foil-border shadow-xl relative text-center lg:text-left space-y-6"
          >
            <CornerFiligree position="top-right" className="top-3 right-3" />

            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#B89A68]">
              <MapPin className="w-5 h-5 text-[#B89A68]" />
              <span className="font-serif-luxury text-xs uppercase tracking-widest text-[#8D7047] font-semibold">
                Location Details
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-luxury text-2xl text-[#3D3227] font-semibold">
                {weddingData.venue.name}
              </h4>
              <p className="font-serif-luxury italic text-sm text-[#8D7047]">
                {weddingData.venue.subHeading}
              </p>
              <p className="font-sans-luxury text-sm text-[#6B5B49] leading-relaxed pt-2">
                📍 {weddingData.venue.address}
                <br />
                {weddingData.venue.city}
              </p>
            </div>

            <ArabesqueDivider className="lg:justify-start" />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setShowMapModal(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#B89A68] to-[#8D7047] text-[#FFFDF9] font-serif-luxury text-sm tracking-wider uppercase shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                <Navigation size={16} />
                <span>View Map Preview</span>
              </button>

              <a
                href={weddingData.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#B89A68]/40 bg-[#F5E8D7]/40 text-[#8D7047] font-serif-luxury text-sm tracking-wider uppercase hover:bg-[#F5E8D7] transition-colors"
              >
                <ExternalLink size={16} />
                <span>Open Maps</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Map Modal */}
      <AnimatePresence>
        {showMapModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMapModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF9] w-full max-w-3xl rounded-2xl gold-foil-border p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#B89A68]/20 mb-4">
                <div className="flex items-center gap-2">
                  <IslamicStarSymbol size={18} />
                  <h3 className="font-serif-luxury text-xl text-[#3D3227] font-medium">
                    {weddingData.venue.name} Map
                  </h3>
                </div>
                <button
                  onClick={() => setShowMapModal(false)}
                  className="p-1 rounded-full text-[#8D7047] hover:bg-[#F5E8D7] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="w-full h-80 rounded-xl overflow-hidden border border-[#B89A68]/30">
                <iframe
                  title="Venue Map Location"
                  src={weddingData.venue.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="mt-4 flex justify-between items-center text-xs text-[#6B5B49]">
                <span>📍 {weddingData.venue.address}, {weddingData.venue.city}</span>
                <a
                  href={weddingData.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D7047] font-semibold underline flex items-center gap-1"
                >
                  Get Directions <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
