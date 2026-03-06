import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MusicPlayer.css';

const MUSIC_URL = 'https://res.cloudinary.com/dkiu8wrxc/video/upload/v1772825659/the_mountain-soft-piano-background-444129_fhwwyb.mp3';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay on mount + loop forever
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    audio.loop = true;

    // Try autoplay immediately
    const tryPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Browser blocked autoplay — wait for any user interaction then play
        const handleInteraction = () => {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('scroll', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        };
        document.addEventListener('click', handleInteraction, { once: false });
        document.addEventListener('scroll', handleInteraction, { once: false });
        document.addEventListener('keydown', handleInteraction, { once: false });
        document.addEventListener('touchstart', handleInteraction, { once: false });
      });
    };

    // Small delay so the unlock transition completes first
    const timer = setTimeout(tryPlay, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src={MUSIC_URL} type="audio/mpeg" />
      </audio>

      <motion.button
        className={`music-toggle ${isPlaying ? 'music-toggle--playing' : 'music-toggle--paused'}`}
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        title={isPlaying ? 'Pause — It Will Be Love' : '♪ It Will Be Love'}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        <div className="music-toggle__bars">
          <div className="music-toggle__bar" />
          <div className="music-toggle__bar" />
          <div className="music-toggle__bar" />
          <div className="music-toggle__bar" />
        </div>
        <span className="music-toggle__tooltip">
          {isPlaying ? 'It Will Be Love ♪' : '♪ play'}
        </span>
      </motion.button>
    </>
  );
}

export default MusicPlayer;
