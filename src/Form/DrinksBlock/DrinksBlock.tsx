import s from "../Form.module.scss";

const drinksData: string[] = ["Безалкогольные напитки (можете написать свой вариант)", " Белое вино", "Красное вино", "Виски", "Водка", "Шампанское"];

export const DrinksBlock = ({ drinks, toggleDrink, otherDrink, setOtherDrink }: { drinks: string[]; toggleDrink: (d: string) => void; otherDrink: string; setOtherDrink: (v: string) => void }) => (
  <div className={s.form__checkboxWrapper}>
    <p>Предпочтения по алкоголю/напиткам (можно выбрать несколько вариантов)</p>
    {drinksData.map((drink) => (
      <div key={drink} className={s.form__checkbox}>
        <input type="checkbox" id={`drink-${drink}`} checked={drinks.includes(drink)} onChange={() => toggleDrink(drink)} />
        <label htmlFor={`drink-${drink}`}>{drink}</label>
      </div>
    ))}
    <div className={s.form__item}>
      <label>Свой вариант:</label>
      <input className={s.form__input} placeholder="Напишите свой вариант" value={otherDrink} onChange={(e) => setOtherDrink(e.target.value)} />
    </div>
  </div>
);
