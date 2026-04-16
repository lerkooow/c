import s from "./Modal.module.scss";

type TModalProps = {
  closeSuccessModal: () => void;
};

export const Modal = ({ closeSuccessModal }: TModalProps) => {
  return (
    <div className={s.modal} onClick={closeSuccessModal}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        <button className={s.modal__close} onClick={closeSuccessModal} aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={s.modal__icon}>
          <svg width="52" height="48" viewBox="0 0 52 48" fill="none">
            <path d="M26 44S4 30 4 14a11 11 0 0 1 22-2 11 11 0 0 1 22 2c0 16-22 30-22 30z" fill="#a0bbd6" opacity="0.3" />
            <path d="M26 40S6 27 6 14a9 9 0 0 1 18-1.5A9 9 0 0 1 42 14c0 13-16 26-16 26z" fill="#a0bbd6" />
          </svg>
        </div>

        <h3 className={s.modal__title}>Спасибо!</h3>
        <p className={s.modal__sub}>Ваша анкета успешно отправлена</p>
        <p className={s.modal__text}>Мы очень ждём встречи с вами 🤍</p>
      </div>
    </div>
  );
};
