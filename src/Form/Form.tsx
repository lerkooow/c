import { Modal } from "../Modal";
import { DrinksBlock } from "./DrinksBlock";

import { type Attendance, useForm } from "./hooks/useForm";

import loading from "../assets/loading.svg";

import s from "./Form.module.scss";

export const Form = () => {
  const {
    attendance,
    fullName,
    plusOneName,
    children,
    allergies,
    drinks,
    otherDrink,
    isFormValid,
    showSuccessModal,
    status,
    closeSuccessModal,
    handleSubmit,
    setAllergies,
    setChildren,
    setFullName,
    setAttendance,
    setPlusOneName,
    toggleDrink,
    setOtherDrink,
  } = useForm();

  return (
    <div className={s.form}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className={s.form__eyebrow}>guest form</span>
        <div className={s.form__titleRow}>
          <h3 className={s.form__title}>АНКЕТА ГОСТЯ</h3>
        </div>
      </div>
      <form className={s.form__wrapper} onSubmit={handleSubmit}>
        <div className={s.form__radioGroup}>
          <p>Вы будете присутствовать?</p>
          {[
            { value: "yes", label: "Да, обязательно!" },
            { value: "plus", label: "Да, и буду с парой" },
            { value: "no", label: "Нет, к сожалению(" },
          ].map(({ value, label }) => (
            <div key={value} className={s.form__radio}>
              <input type="radio" id={`attendance-${value}`} name="attendance" checked={attendance === value} onChange={() => setAttendance(value as Attendance)} />
              <label htmlFor={`attendance-${value}`}>{label}</label>
            </div>
          ))}
        </div>

        {attendance === "no" && (
          <div className={s.form__fieldsBlock}>
            <div className={s.form__item}>
              <label>Имя Фамилия (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
          </div>
        )}

        {attendance === "yes" && (
          <div className={s.form__fieldsBlock}>
            <div className={s.form__item}>
              <label>Имя Фамилия (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className={s.form__item}>
              <label>Дети (имя/возраст, если будут)</label>
              <input className={s.form__input} placeholder="Имя, возраст" value={children} onChange={(e) => setChildren(e.target.value)} />
            </div>
            <div className={s.form__item}>
              <label>Аллергия, предпочтения по еде (рыба, мясо, веганское и т.д.)</label>
              <input className={s.form__input} placeholder="Я предпочитаю..." value={allergies} onChange={(e) => setAllergies(e.target.value)} />
            </div>
            <DrinksBlock drinks={drinks} toggleDrink={toggleDrink} otherDrink={otherDrink} setOtherDrink={setOtherDrink} />
          </div>
        )}

        {attendance === "plus" && (
          <div className={s.form__fieldsBlock}>
            <div className={s.form__item}>
              <label>Имя Фамилия (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className={s.form__item}>
              <label>Имя Фамилия пары (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия пары" value={plusOneName} onChange={(e) => setPlusOneName(e.target.value)} />
            </div>
            <div className={s.form__item}>
              <label>Дети (имя/возраст, если будут)</label>
              <input className={s.form__input} placeholder="Имя, возраст" value={children} onChange={(e) => setChildren(e.target.value)} />
            </div>
            <div className={s.form__item}>
              <label>Аллергия, предпочтения по еде (рыба, мясо, веганское и т.д.)</label>
              <input className={s.form__input} placeholder="Я предпочитаю..." value={allergies} onChange={(e) => setAllergies(e.target.value)} />
            </div>
            <DrinksBlock drinks={drinks} toggleDrink={toggleDrink} otherDrink={otherDrink} setOtherDrink={setOtherDrink} />
          </div>
        )}

        {attendance && (
          <div className={s.form__button}>
            <button type="submit" className={s.form__submitBtn} disabled={status === "loading" || !isFormValid}>
              {status === "loading" ? (
                <span className={s.form__spinner}>
                  <img src={loading} alt="Loading" width={20} height={20} />
                </span>
              ) : (
                "Отправить"
              )}
            </button>
          </div>
        )}
      </form>

      {showSuccessModal && <Modal closeSuccessModal={closeSuccessModal} />}
    </div>
  );
};
