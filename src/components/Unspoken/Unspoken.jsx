import { motion } from 'framer-motion';
import { fadeInUp, mistFade } from '../../utils/inkAnimations';
import './Unspoken.css';

function Unspoken() {
  const lines = [
    {
      text: "I knew I was academically good. But other than that, no. I couldn't see anything else in myself.",
      emphasis: false
    },
    {
      text: "But you saw something in me that I couldn't see in myself. And it motivated me to be better every single day.",
      emphasis: true
    },
    {
      text: "Even in my lowest moments — when I wanted you to be there for me — I realised you didn't fully understand me at first. You thought I was being lazy. But later, you did understand. And even then, you still nudged me to do better.",
      emphasis: false
    },
    {
      text: "There were moments I did not need to speak, and you understood I was struggling. That made me feel seen.",
      emphasis: true
    },
    {
      text: "I admired the way you dealt with things. How you taught with the dedication to show up even on days you were not very well. Your care, your unspoken understanding, your push, your support — they have truly changed my life, even in small ways. And it continues inspiring me. I hope you inspire many others too.",
      emphasis: false
    }
  ];

  return (
    <section className="unspoken">
      <motion.p
        className="unspoken__heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        the unspoken
      </motion.p>

      <div className="unspoken__content">
        {lines.map((line, i) => (
          <motion.div key={i}>
            {i > 0 && i % 2 === 0 && (
              <motion.div
                className="unspoken__ink-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '2.5rem' }}
              />
            )}
            <motion.p
              className={`unspoken__line ${line.emphasis ? 'unspoken__line--emphasis' : ''}`}
              variants={line.emphasis ? mistFade : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              {line.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Unspoken;
