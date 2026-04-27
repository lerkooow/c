import { motion, AnimatePresence } from "framer-motion";

import s from "./PageLoader.module.scss";

interface IPageLoaderProps {
  isVisible: boolean;
  onStart: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export const PageLoader = ({ isVisible, onStart, audioRef }: IPageLoaderProps) => {
  const handleStart = () => {
    audioRef.current?.play().catch(() => {});
    onStart();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className={s.loader} initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: "easeInOut" }}>
          <div className={s.loader__blob1} />
          <div className={s.loader__blob2} />
          <div className={s.loader__content}>
            <motion.div className={s.loader__heart} animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
              <svg width="56" height="52" viewBox="0 0 56 52" fill="none">
                <path d="M28 48S4 33 4 16a13 13 0 0 1 24-7 13 13 0 0 1 24 7c0 17-24 32-24 32z" fill="#a0bbd6" opacity="0.25" />
                <path d="M28 44S6 30 6 16a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 14-22 28-22 28z" fill="#a0bbd6" />
              </svg>
            </motion.div>

            <motion.p className={s.loader__names} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Руслан & Валерия
            </motion.p>

            <div className={s.loader__buttonWrapper}>
              <motion.button
                className={s.loader__button}
                onClick={handleStart}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -2 }}
              >
                Открыть приглашение
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
