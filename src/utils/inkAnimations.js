// ═══════════════════════════════════════════
// Shared Framer Motion Animation Variants
// ═══════════════════════════════════════════

// Fade in from below — default section reveal
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Fade in from above
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Simple fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

// Slow, mysterious fade — for atmospheric text
export const mistFade = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: 'easeOut' }
  }
};

// Stagger children — for letter-by-letter or paragraph-by-paragraph
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

// Individual letter animation
export const letterReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Stagger for sections (slower)
export const sectionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Ink bleed effect — scale from center
export const inkBleed = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Letter card hover
export const letterCardHover = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.03,
    rotate: -1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Ink dissolve — for lock screen exit
export const inkDissolve = {
  initial: { opacity: 1, scale: 1 },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(12px)',
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Error shake
export const errorShake = {
  shake: {
    x: [0, -10, 10, -10, 10, -5, 5, 0],
    transition: { duration: 0.5 }
  }
};

// Draw SVG line
export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
};

// Slow float — subtle ambient movement
export const slowFloat = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};
