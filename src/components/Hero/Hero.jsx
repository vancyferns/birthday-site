import { motion } from 'framer-motion';
import { staggerContainer, letterReveal, fadeInUp, fadeIn } from '../../utils/inkAnimations';
import './Hero.css';

const title = "Happy Birthday, Ma'am";

function Hero() {
  return (
    <section className="hero">
      {/* Ink splatters */}
      <motion.div
        className="hero__splatter hero__splatter--1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="hero__splatter hero__splatter--2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className="hero__splatter hero__splatter--3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ duration: 2, delay: 1.5 }}
      />

      {/* Title — letter by letter */}
      <motion.h1
        className="hero__title"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            className="hero__letter"
            variants={letterReveal}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="hero__subtitle"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2.2 }}
      >
        To the one who shaped so much, in the quietest of ways.
      </motion.p>

      {/* Year marker */}
      <motion.p
        className="hero__year"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 3 }}
      >
        VII &middot; III &middot; MCMLXXXVI
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 4, duration: 1.5 }}
      >
        <span className="hero__scroll-text">scroll</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
