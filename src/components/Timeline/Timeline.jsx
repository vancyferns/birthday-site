import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp } from '../../utils/inkAnimations';
import './Timeline.css';

const moments = [
  {
    label: 'second year',
    text: "You were our class teacher when we joined our respective departments in second year. You noticed my discipline and hardwork from the start.",
    highlight: null
  },
  {
    label: 'the push',
    text: "You nudged me toward the Vice President role, even if indirectly. I was terrified of communication. But that one role changed the whole trajectory for me.",
    highlight: "I don't regret that decision."
  },
  {
    label: 'the low moments',
    text: "Initially you thought I was being lazy. But later you did understand. And even then, you still nudged me to do better.",
    highlight: null
  },
  {
    label: 'the dedication',
    text: "You showed up to teach even on days you were not very well. You taught with a dedication that I still admire.",
    highlight: 'That is who you are.'
  },
  {
    label: 'now',
    text: "Different states, different chapters. But your care, your unspoken understanding, your push — I still carry all of it.",
    highlight: "Happy birthday, Ma'am."
  }
];

const cardVariants = {
  enter: (direction) => ({
    rotateZ: direction > 0 ? 8 : -8,
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    rotateZ: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: (direction) => ({
    rotateZ: direction > 0 ? -15 : 15,
    x: direction > 0 ? -350 : 350,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.4, ease: 'easeIn' }
  })
};

function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (currentIndex < moments.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="timeline">
      <motion.p
        className="timeline__heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        small moments, deep marks
      </motion.p>

      <motion.div
        className="timeline__deck"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Stacked cards behind (decorative) */}
        <div className="timeline__stack">
          {moments.map((_, i) => {
            const offset = i - currentIndex;
            if (offset <= 0 || offset > 2) return null;
            return (
              <div
                key={i}
                className="timeline__stack-card"
                style={{
                  transform: `translateY(${offset * 6}px) scale(${1 - offset * 0.04}) rotate(${offset * 1.5}deg)`,
                  opacity: 1 - offset * 0.3,
                  zIndex: moments.length - i
                }}
              />
            );
          })}
        </div>

        {/* Active card */}
        <div className="timeline__active-area">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              className="timeline__card"
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <p className="timeline__label">{moments[currentIndex].label}</p>
              <p className="timeline__text">{moments[currentIndex].text}</p>
              {moments[currentIndex].highlight && (
                <motion.p
                  className="timeline__highlight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {moments[currentIndex].highlight}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="timeline__nav">
          <button
            className={`timeline__nav-btn ${currentIndex === 0 ? 'timeline__nav-btn--disabled' : ''}`}
            onClick={goPrev}
            disabled={currentIndex === 0}
            aria-label="Previous moment"
          >
            &#8592;
          </button>

          <div className="timeline__dots">
            {moments.map((_, i) => (
              <span
                key={i}
                className={`timeline__dot ${i === currentIndex ? 'timeline__dot--active' : ''} ${i < currentIndex ? 'timeline__dot--visited' : ''}`}
              />
            ))}
          </div>

          <button
            className={`timeline__nav-btn ${currentIndex === moments.length - 1 ? 'timeline__nav-btn--disabled' : ''}`}
            onClick={goNext}
            disabled={currentIndex === moments.length - 1}
            aria-label="Next moment"
          >
            &#8594;
          </button>
        </div>

        <p className="timeline__counter">{currentIndex + 1} / {moments.length}</p>
      </motion.div>
    </section>
  );
}

export default Timeline;
