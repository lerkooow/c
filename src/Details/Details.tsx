import { useState } from "react";

import { motion } from "framer-motion";

import { ContactsModal } from "../ContactsModal";

import s from "./Details.module.scss";

export const Details = () => {
  const [showContactsModal, setShowContactsModal] = useState(false);

  const closeContactsModal = () => {
    setShowContactsModal(false);
  };

  return (
    <motion.div className={s.details} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <span className={s.details__eyebrow}>organizational details</span>
      <div className={s.details__titleRow}>
        <h3 className={s.details__title}>ОРГАНИЗАЦИОННЫЕ МОМЕНТЫ</h3>
      </div>

      <div className={s.details__container}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          Чтобы праздник прошёл комфортно для всех гостей, мы подготовили анкету. Пожалуйста, заполните её до <span style={{ color: "#4a6a8a" }}>06.06.2026</span>
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
          Если у вас возникнут вопросы, наш свадебный организатор <span>Анастасия</span> с радостью Вам поможет
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={s.details__button}
          onClick={() => setShowContactsModal(true)}
        >
          <span>Написать</span>
        </motion.p>

        {showContactsModal && <ContactsModal closeContactsModal={closeContactsModal} />}
      </div>
    </motion.div>
  );
};
