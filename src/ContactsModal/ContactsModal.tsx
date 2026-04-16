import { useState } from "react";

import copy from "clipboard-copy";

import s from "./ContactsModal.module.scss";

type TContactsModalProps = {
  closeContactsModal: () => void;
};

export const ContactsModal = ({ closeContactsModal }: TContactsModalProps) => {
  const textToCopy = "79870951395";

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <div className={s.modal} onClick={closeContactsModal}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        <button className={s.modal__close} onClick={closeContactsModal} aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <p className={s.modal__sub}>Вы можете связаться с Анастасией любым удобным Вам способом</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexDirection: "column" }}>
          <a href="" className={s.modal__button} onClick={handleCopyClick}>
            {isCopied ? "Номер скопирован!" : "Скопировать номер"}
          </a>

          <a href="https://wa.me/79870951395" target="_blank" className={s.modal__button}>
            WhatsApp
          </a>
          <a href="https://t.me/anastasiyaa_nosova" target="_blank" className={s.modal__button}>
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};
