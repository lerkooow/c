import { useCountdown } from "./hooks/useCountdown";

import s from "./Countdown.module.scss";

import flowers from "../assets/flowers.svg";

export const Countdown = () => {
  const { timeLeft } = useCountdown();

  return (
    <div className={s.countdown}>
      <img src={flowers} width={150} height={100} alt="flower" className={s.countdown__flowers} />
      <div className={s.countdown__box}>
        <p className={s.countdown__title}>наша свадьба через...</p>
        <div className={s.countdown__container}>
          {timeLeft.map((item, index) => (
            <div key={index} className={s.countdown__wrapper}>
              <div className={s.countdown__date}>
                <p>{item.value}</p>
                <span>{item.label}</span>
              </div>
              {index < timeLeft.length - 1 && <p className={s.countdown__separator}>:</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
