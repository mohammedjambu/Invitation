import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { weddingData } from '../config/weddingData';

interface AudioContextType {
  isPlaying: boolean;
  startAudio: () => void;
  pauseAudio: () => void;
  toggleAudio: () => void;
  songTitle: string;
  movieTitle: string;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasUserStartedRef = useRef(false);

  const { src, startOffsetSeconds, title, movie } = weddingData.backgroundAudio;

  useEffect(() => {
    // Initialize single HTML5 Audio instance
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.6; // Gentle ambient background volume
    audioRef.current = audio;

    // Track play state events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Attempt browser autoplay on load if permitted
    const attemptAutoplay = async () => {
      try {
        if (audio.currentTime < startOffsetSeconds) {
          audio.currentTime = startOffsetSeconds;
        }
        await audio.play();
        hasUserStartedRef.current = true;
      } catch (err) {
        // Autoplay blocked by browser policy — will start on first user interaction
        console.log("Autoplay waiting for user interaction:", err);
      }
    };

    attemptAutoplay();

    // Fallback: Start playback on first user gesture anywhere on screen
    const handleFirstUserInteraction = () => {
      if (!hasUserStartedRef.current && audioRef.current) {
        if (audioRef.current.currentTime < startOffsetSeconds) {
          audioRef.current.currentTime = startOffsetSeconds;
        }
        audioRef.current.play().then(() => {
          hasUserStartedRef.current = true;
        }).catch(err => {
          console.warn("Audio play failed on interaction:", err);
        });
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true });

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      audio.pause();
      audioRef.current = null;
    };
  }, [src, startOffsetSeconds]);

  const startAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.currentTime < startOffsetSeconds) {
        audioRef.current.currentTime = startOffsetSeconds;
      }
      audioRef.current.play().then(() => {
        hasUserStartedRef.current = true;
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback error:", err);
      });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      startAudio();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        startAudio,
        pauseAudio,
        toggleAudio,
        songTitle: title,
        movieTitle: movie
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
