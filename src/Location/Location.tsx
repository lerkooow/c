import { motion } from "framer-motion";

import arrow from "../assets/arrow.svg";

import s from "./Location.module.scss";

export const Location = () => {
  return (
    <motion.div
      className={s.location}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className={s.location__eyebrow}>location</span>
      <div className={s.location__titleRow}>
        <h3 className={s.location__title}>
          МЕСТО ПРОВЕДЕНИЯ
          <br />
          <span>ТОРЖЕСТВА</span>
        </h3>
      </div>
      <p className={s.location__description}>
        Наш праздник пройдет
        <br /> в шатре на озере
      </p>
      <img src={arrow} width={56} height={86} alt="стрелка" className={s.location__arrow} />
      <motion.div className={s.location__map} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
        <span>Шатер Хотим Едим</span>
        <p className={s.location__address}>г. Уфа, Озеро Архимандритское</p>
        <a href="https://go.2gis.com/yv3ww" target="_blank" className={s.location__button}>
          Открыть карту
        </a>
      </motion.div>
    </motion.div>
  );
};
