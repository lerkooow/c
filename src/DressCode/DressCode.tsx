import { useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import s from "./DressCode.module.scss";
import { dressCodeColors } from "../data";

export const DressCode = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 32;
    setShowHint(!atEnd);
  };

  return (
    <section className={s.dressCode}>
      <motion.div className={s.dressCode__header} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} viewport={{ once: true }}>
        <span className={s.dressCode__eyebrow}>dress code</span>
        <div className={s.dressCode__titleRow}>
          <h3 className={s.dressCode__title}>ДРЕСС-КОД</h3>
        </div>
      </motion.div>

      <div className={s.dressCode__carouselWrap}>
        <div className={s.dressCode__carousel} ref={carouselRef} onScroll={handleScroll}>
          {dressCodeColors.map((color, index) => (
            <motion.div
              key={color.img}
              className={s.dressCode__card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className={s.dressCode__cardInner}>
                <img src={color.img} alt={color.name} className={s.dressCode__cardImg} />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showHint && (
            <motion.div className={s.dressCode__scrollHint} initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="11" fill="#a0bbd6b0" />
                <path d="M8 11H14M14 11L11 8M14 11L11 14" stroke="#fdf5e9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div className={s.dressCode__footer} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
        <p className={s.dressCode__description}>
          Мы будем очень рады, если вы <span>поддержите</span> цветовую гамму свадьбы
        </p>
        <a href="https://disk.yandex.ru/d/tzaIFHlIN-bMpw" target="_blank" className={s.dressCode__button}>
          Примеры цветовой палитры
        </a>
      </motion.div>
    </section>
  );
};
