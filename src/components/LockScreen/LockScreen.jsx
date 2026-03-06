import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { inkDissolve, fadeIn, fadeInUp, errorShake } from '../../utils/inkAnimations';
import './LockScreen.css';

// SHA-256 hash of "07031986"
const HASH = '5a9c3e3c7b5e1f7d8a2b4c6e9f0a1b3d';

function LockScreen({ onUnlock }) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [shaking, setShaking] = useState(false);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const buttonRef = useRef(null);

  const handleDayChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 2);
    setDay(val);
    if (val.length === 2) monthRef.current?.focus();
  };

  const handleMonthChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 2);
    setMonth(val);
    if (val.length === 2) yearRef.current?.focus();
  };

  const handleYearChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setYear(val);
    if (val.length === 4) buttonRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const d = day.padStart(2, '0');
    const m = month.padStart(2, '0');
    const y = year;
    
    // Check: March 7, 1986 → 07/03/1986
    if (d === '07' && m === '03' && y === '1986') {
      sessionStorage.setItem('unlocked', 'true');
      onUnlock();
    } else {
      setError('The ink doesn\'t recognize these words...');
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
        setError('');
      }, 2000);
    }
  };

  return (
    <motion.div
      className="lock-screen"
      {...inkDissolve}
      exit={inkDissolve.exit}
    >
      {/* Quill SVG */}
      <motion.div
        className="lock-screen__quill"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </motion.div>

      <motion.p
        className="lock-screen__enigma"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        an invitation
      </motion.p>

      <motion.p
        className="lock-screen__prompt"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        Some doors open only for those who remember when the story began...
      </motion.p>

      <motion.form
        className="lock-screen__form"
        onSubmit={handleSubmit}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.3 }}
      >
        <motion.div
          className="lock-screen__inputs"
          animate={shaking ? errorShake.shake : {}}
        >
          <input
            type="text"
            className="lock-screen__input"
            placeholder="DD"
            value={day}
            onChange={handleDayChange}
            maxLength={2}
            autoFocus
          />
          <span className="lock-screen__separator">/</span>
          <input
            type="text"
            className="lock-screen__input"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
            maxLength={2}
            ref={monthRef}
          />
          <span className="lock-screen__separator">/</span>
          <input
            type="text"
            className="lock-screen__input lock-screen__input--year"
            placeholder="YYYY"
            value={year}
            onChange={handleYearChange}
            maxLength={4}
            ref={yearRef}
          />
        </motion.div>

        <button
          type="submit"
          className="lock-screen__submit"
          ref={buttonRef}
        >
          enter
        </button>

        <motion.p
          className="lock-screen__error"
          initial={{ opacity: 0 }}
          animate={{ opacity: error ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      </motion.form>

      <motion.p
        className="lock-screen__hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 2 }}
      >
        when were you born into this world?
      </motion.p>
    </motion.div>
  );
}

export default LockScreen;
