import { useEffect, useRef, useState, useCallback } from 'react';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';

/** Place your file at: public/sounds/intro-sound.mp3 */
const AUDIO_SRC = '/sounds/intro-sound.mp3';
const STORAGE_MUTE = 'portfolio-intro-muted';
const VOLUME = 0.3;

/**
 * Soft intro on first user gesture (autoplay-safe). Plays once per session.
 * Mute preference persisted in localStorage.
 */
export default function IntroSound() {
  const audioRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const [isMuted, setIsMuted] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_MUTE) === 'true';
    } catch {
      return false;
    }
  });

  const persistMute = useCallback((muted) => {
    setIsMuted(muted);
    try {
      if (muted) localStorage.setItem(STORAGE_MUTE, 'true');
      else localStorage.removeItem(STORAGE_MUTE);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || isMuted) return;

    const removeListeners = () => {
      window.removeEventListener('click', onInteract);
      window.removeEventListener('keydown', onInteract);
      window.removeEventListener('touchstart', onInteract);
    };

    const onInteract = (e) => {
      if (e.target?.closest?.('[data-intro-sound-control="true"]')) return;
      if (hasPlayedRef.current || !audioRef.current) return;
      hasPlayedRef.current = true;
      const el = audioRef.current;
      el.volume = VOLUME;
      el.play()
        .then(() => removeListeners())
        .catch(() => {
          hasPlayedRef.current = false;
        });
    };

    window.addEventListener('click', onInteract, { passive: true });
    window.addEventListener('keydown', onInteract);
    window.addEventListener('touchstart', onInteract, { passive: true });

    return removeListeners;
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.pause();
    }
  }, [isMuted]);

  const toggleMute = useCallback(
    (e) => {
      e.stopPropagation();
      const next = !isMuted;
      persistMute(next);
      if (next && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    },
    [isMuted, persistMute]
  );

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} preload="auto" />
      <button
        type="button"
        data-intro-sound-control="true"
        onClick={toggleMute}
        className="fixed bottom-24 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-600 shadow-md backdrop-blur-sm transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-ink-800/90 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:text-white"
        title={isMuted ? 'Unmute intro sound (plays once on next click elsewhere)' : 'Mute intro sound'}
        aria-label={isMuted ? 'Sound muted' : 'Sound on — intro plays once after first site interaction'}
        aria-pressed={isMuted}
      >
        {isMuted ? <HiSpeakerXMark className="h-5 w-5" /> : <HiSpeakerWave className="h-5 w-5" />}
      </button>
    </>
  );
}
