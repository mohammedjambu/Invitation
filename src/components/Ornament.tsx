import React from 'react';

interface OrnamentProps {
  className?: string;
  size?: number;
}

export const ArabesqueDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center my-6 opacity-80 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B89A68] to-[#B89A68]" />
    <div className="mx-3 text-[#B89A68] flex items-center gap-1.5">
      <span className="text-[10px]">◆</span>
      <svg className="w-5 h-5 text-[#B89A68]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <span className="text-[10px]">◆</span>
    </div>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#B89A68] to-[#B89A68]" />
  </div>
);

export const IslamicStarSymbol: React.FC<OrnamentProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#B89A68] inline-block ${className}`}
  >
    <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="1" transform="rotate(0 12 12)" fill="none" />
    <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="1" transform="rotate(45 12 12)" fill="none" />
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6" />
  </svg>
);

export const CornerFiligree: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position,
  className = ""
}) => {
  const transformMap = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]'
  };

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-8 h-8 sm:w-12 sm:h-12 text-[#B89A68]/60 pointer-events-none ${transformMap[position]} ${className}`}
    >
      <path
        d="M2 2H20C30 2 38 10 38 20V38"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 6H18C24 6 30 12 30 18V30"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <path d="M12 2C12 8 8 12 2 12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
};

export const IslamicArchVector: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 300 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full text-[#B89A68] ${className}`}
  >
    {/* Outer Arch Frame */}
    <path
      d="M10 390 V180 Q150 10 290 180 V390 H10 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Inner Arch Frame */}
    <path
      d="M22 390 V185 Q150 25 278 185 V390 H22 Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 3"
      fill="none"
    />
    {/* Arch Peak Motif */}
    <circle cx="150" cy="18" r="4" fill="currentColor" />
    <path d="M150 2L150 14" stroke="currentColor" strokeWidth="1.5" />
    <path d="M142 8L158 8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const DawoodiBohraStarPattern: React.FC<OrnamentProps> = ({ className = "", size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#B89A68] inline-block ${className}`}
  >
    {/* Outer 8-point geometric star rosette */}
    <rect x="8" y="8" width="24" height="24" stroke="currentColor" strokeWidth="1" transform="rotate(0 20 20)" fill="none" opacity="0.85" />
    <rect x="8" y="8" width="24" height="24" stroke="currentColor" strokeWidth="1" transform="rotate(45 20 20)" fill="none" opacity="0.85" />
    {/* Inner delicate octagram */}
    <rect x="12" y="12" width="16" height="16" stroke="currentColor" strokeWidth="0.75" transform="rotate(22.5 20 20)" fill="none" opacity="0.6" />
    <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
    <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.9" />
  </svg>
);

export const CeremonialLineDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#B89A68]/60 to-[#B89A68]" />
    <span className="text-[#B89A68] text-[9px] opacity-70">◆</span>
    <DawoodiBohraStarPattern size={22} className="text-[#B89A68]" />
    <span className="text-[#B89A68] text-[9px] opacity-70">◆</span>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#B89A68]/60 to-[#B89A68]" />
  </div>
);

export const BotanicalGoldCorner: React.FC<{ position: 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position,
  className = ""
}) => {
  const isRight = position === 'bottom-right';
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-14 h-14 sm:w-20 sm:h-20 text-[#B89A68]/40 pointer-events-none ${isRight ? 'scale-x-[-1]' : ''} ${className}`}
    >
      <path
        d="M5 75 C 5 45, 25 25, 75 25"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M5 75 C 20 50, 45 20, 75 5"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="2 2"
        fill="none"
      />
      <circle cx="25" cy="45" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="45" cy="25" r="2" fill="currentColor" opacity="0.6" />
      <path d="M5 75 L 18 75 C 18 65, 12 58, 5 58 Z" fill="currentColor" opacity="0.15" />
    </svg>
  );
};

export const GeometricWatermarkPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute inset-0 pointer-events-none opacity-[0.035] ${className}`}
  >
    <defs>
      <pattern id="islamic-geo-grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <rect x="15" y="15" width="30" height="30" stroke="#8D7047" strokeWidth="0.8" fill="none" />
        <rect x="15" y="15" width="30" height="30" stroke="#8D7047" strokeWidth="0.8" transform="rotate(45 30 30)" fill="none" />
        <circle cx="30" cy="30" r="4" stroke="#8D7047" strokeWidth="0.5" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-geo-grid)" />
  </svg>
);

export const MughalArchTop: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 400 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full max-w-[320px] sm:max-w-[420px] mx-auto text-[#B89A68] ${className}`}
  >
    {/* Outer Scalloped Mughal Arch Line */}
    <path
      d="M 10 95 C 60 95, 80 70, 110 52 C 130 40, 160 25, 200 8 C 240 25, 270 40, 290 52 C 320 70, 340 95, 390 95"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Inner Parallel Scalloped Line */}
    <path
      d="M 25 95 C 70 95, 88 72, 116 56 C 134 45, 162 30, 200 15 C 238 30, 266 45, 284 56 C 312 72, 330 95, 375 95"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
      fill="none"
    />
    {/* Peak Finial & Star Crest */}
    <g transform="translate(200, 8)">
      <path d="M 0 -8 L 0 0" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="0" cy="-11" r="2" fill="currentColor" />
    </g>
    {/* Subtle Architectural Corner Accents */}
    <circle cx="110" cy="52" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="290" cy="52" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

export const HeroBotanicalCorner: React.FC<{ position: 'left' | 'right'; className?: string }> = ({
  position,
  className = ""
}) => {
  const isRight = position === 'right';
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${isRight ? 'scale-x-[-1]' : ''} ${className}`}
    >
      {/* Delicate Champagne-Gold Stems */}
      <path
        d="M 10 210 Q 50 180, 70 130 T 110 50"
        stroke="#B89A68"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M 20 210 Q 70 190, 100 140 T 140 70"
        stroke="#C5A880"
        strokeWidth="1"
        strokeDasharray="2 3"
        fill="none"
        opacity="0.65"
      />
      <path
        d="M 5 200 Q 30 150, 45 100"
        stroke="#A3B19B"
        strokeWidth="1.2"
        fill="none"
        opacity="0.75"
      />

      {/* Muted Sage Leaves */}
      <path d="M 65 140 C 50 125, 45 105, 62 108 C 75 110, 78 128, 65 140 Z" fill="#A3B19B" opacity="0.6" />
      <path d="M 95 90 C 80 78, 76 60, 92 63 C 104 65, 106 82, 95 90 Z" fill="#B2BCAC" opacity="0.55" />
      <path d="M 40 160 C 25 150, 20 135, 36 138 C 48 140, 50 152, 40 160 Z" fill="#A3B19B" opacity="0.5" />

      {/* Soft Blush & Ivory Flowers */}
      <circle cx="110" cy="50" r="10" fill="#F4E2DE" opacity="0.9" />
      <circle cx="110" cy="50" r="4" fill="#E8D5D1" opacity="0.95" />
      <circle cx="110" cy="50" r="1.5" fill="#B89A68" />

      {/* Small Secondary Blossoms */}
      <circle cx="70" cy="130" r="7" fill="#FFFDF9" opacity="0.95" stroke="#B89A68" strokeWidth="0.5" />
      <circle cx="70" cy="130" r="2.5" fill="#E8D5D1" />

      <circle cx="140" cy="70" r="6" fill="#F4E2DE" opacity="0.85" />
      <circle cx="140" cy="70" r="2" fill="#B89A68" />

      {/* Tiny Buds & Champagne Dust */}
      <circle cx="45" cy="100" r="3" fill="#D8BE94" opacity="0.8" />
      <circle cx="125" cy="35" r="2.5" fill="#F4E2DE" opacity="0.9" />
      <circle cx="85" cy="110" r="1.5" fill="#B89A68" opacity="0.6" />
      <circle cx="105" cy="80" r="2" fill="#B2BCAC" opacity="0.7" />
    </svg>
  );
};


