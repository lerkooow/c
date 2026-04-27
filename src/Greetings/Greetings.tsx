import { useState } from "react";

import { motion } from "framer-motion";

import muted from "../assets/muted.svg";
import speaker from "../assets/speaker.svg";

import s from "./Greetings.module.scss";

interface IGreetings {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const Greetings = ({ audioRef }: IGreetings) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      className={s.greetings}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className={s.greetings__title}>
        ДОРОГИЕ НАШИ
        <br /> РОДНЫЕ И БЛИЗКИЕ!
      </p>
      <hr style={{ border: "none", backgroundColor: "#6a90b5", height: "1px", width: "64px" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className={s.audioControl} onClick={toggleAudio}>
          {isPlaying ? <img src={speaker} width={36} height={36} alt="Звук включен" /> : <img src={muted} width={36} height={36} alt="Звук выключен" />}
        </p>
        <p className={s.greetings__musicDescription}>
          Если вас отвлекает музыка,
          <br /> ее можно выключить
        </p>
      </div>
      <hr style={{ border: "none", backgroundColor: "#6a90b5", height: "1px", width: "64px" }} />
      <p className={s.greetings__description}>Мы начинаем новую главу нашей жизни и будем счастливы, если вы разделите этот день вместе с нами!</p>
    </motion.div>
  );
};
