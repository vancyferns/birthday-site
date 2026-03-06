import { motion } from 'framer-motion';
import { fadeInUp, letterCardHover, sectionStagger } from '../../utils/inkAnimations';
import './Letters.css';

const letters = [
  {
    number: 'I',
    text: "You nudging me toward the Vice President role — indirectly, in your own way — shaped me as a person. And I don't regret that decision. It developed a social side of me that was never really there. I was terrified of communication, but that one role changed the whole trajectory for me. I improved a lot. My self-confidence improved a lot.",
    closing: '— on what you changed'
  },
  {
    number: 'II',
    text: "Even though you're no longer at the place where I still walk those corridors, I know you're somewhere out there, carving a path of your own. I don't know how much you might be going through. I'm not an everyday chat person, but I try to reach out — because I care. I really hope you're doing well.",
    closing: '— on the distance'
  },
  {
    number: 'III',
    text: "I sometimes struggle to find the right words — maybe because you were my mentor, and that dynamic never fully goes away even when you're no longer in front of the class. But I want you to know that I am here. I know I can't understand many things. But sometimes we don't need to understand — just being there is more than enough. Even if I can't fix anything, I can listen. There's probably a lot you've carried on your own, and I hope life gives you the peace, the love, and the care you truly deserve.",
    closing: '— on what stays'
  }
];

function Letters() {
  return (
    <section className="letters">
      <motion.p
        className="letters__heading"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        letters never sent
      </motion.p>

      <motion.div
        className="letters__grid"
        variants={sectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            className="letter-card"
            variants={fadeInUp}
            whileHover={letterCardHover.hover}
          >
            <p className="letter-card__number">{letter.number}</p>
            <p className="letter-card__text">{letter.text}</p>
            <p className="letter-card__closing">{letter.closing}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Letters;
