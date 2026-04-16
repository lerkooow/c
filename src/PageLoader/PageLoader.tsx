import { motion, AnimatePresence } from "framer-motion";

import s from "./PageLoader.module.scss";

type TPageLoaderProps = {
  isVisible: boolean;
};

export const PageLoader = ({ isVisible }: TPageLoaderProps) => {
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

            <div className={s.loader__dots}>
              {[0, 1, 2].map((i) => (
                <motion.span key={i} className={s.loader__dot} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
