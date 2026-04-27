import { motion } from "framer-motion";

import { PATH_D, useDateWithPath } from "./hooks/useDateWithPath";

import s from "./DateWithPath.module.scss";

type ScheduleItemProps = {
  top: number;
  left?: number;
  right?: number;
  time: string;
  labels: string[];
  direction: "left" | "right";
  delay: number;
};

const ScheduleItem = ({ top, left, right, time, labels, direction, delay }: ScheduleItemProps) => (
  <motion.div
    className={s.dwp__item}
    style={{ top, left, right }}
    initial={{ opacity: 0, x: direction === "left" ? -22 : 22 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    <p className={s.dwp__time}>{time}</p>
    {labels.map((label) => (
      <p key={label} className={s.dwp__label}>
        {label}
      </p>
    ))}
  </motion.div>
);

export const DateWithPath = () => {
  const { sectionRef, pathRef, dates, datesAfter } = useDateWithPath();
  return (
    <div className={s.dwp} ref={sectionRef}>
      <motion.h2 className={s.dwp__title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
        июнь 2026 • суббота
      </motion.h2>

      <motion.div className={s.dwp__dates} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}>
        {dates.map((d, index) => (
          <motion.p
            key={d}
            className={s.dwp__day}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {d}
          </motion.p>
        ))}

        <motion.div
          className={s.dwp__event}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={s.dwp__wedding}>27</p>
        </motion.div>

        {datesAfter.map((d, index) => (
          <motion.p
            key={d}
            className={s.dwp__day}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {d}
          </motion.p>
        ))}
      </motion.div>

      <div className={s.dwp__canvas}>
        <svg viewBox="0 0 375 660" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.dwp__svg}>
          <path ref={pathRef} d={PATH_D} stroke="#a0bbd6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        <ScheduleItem top={110} left={85} time="15:30" labels={["Сбор гостей", "Фуршет"]} direction="left" delay={0} />
        <ScheduleItem top={240} right={70} time="16:30" labels={["Начало нашей", "свадебной церемонии"]} direction="right" delay={0} />
        <ScheduleItem top={335} left={10} time="17:00" labels={["Банкет"]} direction="left" delay={0} />
        <ScheduleItem top={465} left={60} time="23:00" labels={["Завершение нашего свадебного дня"]} direction="left" delay={0} />
      </div>
    </div>
  );
};
