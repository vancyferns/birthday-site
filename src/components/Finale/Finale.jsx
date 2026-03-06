import { motion } from 'framer-motion';
import { mistFade, fadeInUp, fadeIn } from '../../utils/inkAnimations';
import './Finale.css';

function Finale() {
  return (
    <section className="finale">
      {/* Candle */}
      <motion.div
        className="finale__candle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="finale__flame-glow" />
        <div className="finale__flame" />
        <div className="finale__wick" />
        <div className="finale__wax" />
      </motion.div>

      {/* Main wish */}
      <motion.h2
        className="finale__wish"
        variants={mistFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        I know I'm growing up too. Ever evolving. And I might still change in ways I don't fully understand myself.
      </motion.h2>

      {/* Messages */}
      <motion.p
        className="finale__message"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        I'm trying to understand it. These changes sometimes feel like a natural result
        of different situations I face. I'm forming my own identity, my own set of
        values and beliefs — which I know might be conflicting or contradictory.
      </motion.p>

      <motion.p
        className="finale__message"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        But I just want you to know — me growing up does not mean you don't matter
        to me. You have done enough. You saw me when I needed it the most.
      </motion.p>

      <motion.p
        className="finale__message"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        I will grow up. Meet people. But you will still be remembered, respected,
        admired. And I hope you keep inspiring many others.
      </motion.p>

      {/* Signature */}
      <motion.p
        className="finale__signature"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        Happy Birthday, Ma'am.
      </motion.p>

      <motion.p
        className="finale__year"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        MMXXVI
      </motion.p>

      <motion.p
        className="finale__footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 2 }}
      >
        written in ink that doesn't fade
      </motion.p>
    </section>
  );
}

export default Finale;
