import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeInUp, fadeIn } from '../../utils/inkAnimations';
import './Mystery.css';

const mysteryCards = [
  {
    front: '?',
    text: "You're very wise. You have a unique personality. And I want you to stay just the way you are.",
    type: 'quote'
  },
  {
    front: '??',
    text: "All I know is that you have a caring heart, but it's equally strict. You know how to balance strictness with care. It was the kind of mentorship I needed to grow as a person.",
    type: 'reflection'
  },
  {
    front: '???',
    text: "I don't feel the need for the same kind of mentorship I needed back then — now I need support and understanding from you, and I want to do that for you too.",
    type: 'reflection'
  },
  {
    front: '✦',
    text: "I watched something yesterday that made me rethink how I was treating people that mattered to me. So I decided to make an effort to be there for them and communicate more. Because we never know how long we have them. It touched me.",
    type: 'reflection'
  }
];

function Mystery() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState({});
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const washScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]);

  const revealCard = (index) => {
    setRevealed(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="mystery" ref={sectionRef}>
      {/* Parallax ink wash */}
      <motion.div
        className="mystery__wash"
        style={{ scale: washScale, opacity: washOpacity }}
      />

      {/* Ink drops */}
      {[1, 2, 3, 4, 5].map((n) => (
        <motion.div
          key={n}
          className={`mystery__drop mystery__drop--${n}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.06, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: n * 0.2, duration: 0.6 }}
        />
      ))}

      <motion.p
        className="mystery__heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        the mystery of you
      </motion.p>

      <motion.p
        className="mystery__instruction"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        tap each card to uncover
      </motion.p>

      <motion.div
        className="mystery__cards"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {mysteryCards.map((card, i) => (
          <motion.div
            key={i}
            className={`mystery-card ${revealed[i] ? 'mystery-card--revealed' : ''}`}
            onClick={() => revealCard(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
          >
            <div className="mystery-card__inner">
              <div className="mystery-card__front">
                <span className="mystery-card__symbol">{card.front}</span>
              </div>
              <div className="mystery-card__back">
                <p className={`mystery-card__text mystery-card__text--${card.type}`}>
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mystery__whisper"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        and I want you to flourish, in the way you want to
      </motion.p>
    </section>
  );
}

export default Mystery;
