import type { Variants } from 'framer-motion';

// ============================================================================
// PURE SCROLL-DRIVEN LUXURY MOTION SYSTEM FOR WEDDING INVITATION
// Easing: cubic-bezier(0.22, 1, 0.36, 1)
// Timings: Primary 700-900ms, Secondary 500-700ms, Decorative 400-600ms
// Stagger: 100-150ms
// Viewport Threshold: 15-25% visible with negative bottom margin
// ============================================================================

export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

// Viewport configuration for full sections (15% threshold, trigger once per session)
export const SECTION_VIEWPORT = {
  once: true,
  amount: 0.15, // 15% visible
  margin: '0px 0px 0px 0px'
};

// Viewport configuration for Hero section
export const HERO_VIEWPORT = {
  once: true,
  amount: 0.15, // 15% visible
  margin: '0px 0px 0px 0px'
};

// Viewport configuration for individual event cards
export const CARD_VIEWPORT = {
  once: true,
  amount: 0.1, // 10% visible
  margin: '0px 0px 0px 0px'
};

// Stagger Container Creator
export const createStaggerContainer = (staggerChildren = 0.13, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      ease: PREMIUM_EASE
    }
  }
});

// Standard Reveal Up (opacity 0 -> 1, translateY 25px -> 0, subtle blur to sharp)
export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: PREMIUM_EASE
    }
  }
};

// Reveal Down
export const revealDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE
    }
  }
};

// Soft Scale & Fade Reveal
export const revealFade: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE
    }
  }
};

// Luxurious Typography Reveal for Bride & Groom Names (Blur-to-sharp settling)
export const nameReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: PREMIUM_EASE
    }
  }
};

// Photograph Unveiling Mask Reveal (clipPath mask + subtle scale 1.03 -> 1.00)
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.03,
    filter: 'blur(3px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: PREMIUM_EASE
    }
  }
};

// Fine Gold Line Drawing (Horizontal)
export const lineRevealX: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.75,
      ease: PREMIUM_EASE
    }
  }
};

// Fine Gold Line Drawing (Vertical Timeline)
export const lineRevealY: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1.1,
      ease: PREMIUM_EASE
    }
  }
};

// Small Decorative Ornament Reveal
export const ornamentReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE
    }
  }
};

// Reduced Motion Fallbacks for Accessibility
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};
