import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import LockScreen from './components/LockScreen/LockScreen';
import Hero from './components/Hero/Hero';
import Unspoken from './components/Unspoken/Unspoken';
import Letters from './components/Letters/Letters';
import Mystery from './components/Mystery/Mystery';
import Finale from './components/Finale/Finale';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('unlocked') === 'true';
  });

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  // Prevent scroll when locked
  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isUnlocked]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isUnlocked && (
          <motion.div
            key="lock"
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(12px)',
              transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            <LockScreen onUnlock={handleUnlock} />
          </motion.div>
        )}
      </AnimatePresence>

      {isUnlocked && (
        <>
        <MusicPlayer />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Hero />
          <div className="section-divider" />
          <Unspoken />
          <div className="section-divider" />
          <Letters />
          <div className="section-divider" />
          <Mystery />
          <div className="section-divider" />
          <Finale />
        </motion.main>
        </>
      )}
    </>
  );
}

export default App;
