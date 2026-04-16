import { motion, useTransform, MotionValue } from "framer-motion";

import { useWelcomeSection } from "./hooks/useWelcomeSection";
import welcomeBg from "../assets/welcome.png";
import flowersBg from "../assets/Image.png";

import s from "./WelcomeSection.module.scss";

const FlowersFg = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  return (
    <motion.div className={s.welcomeSection__flowersFg} style={{ y }}>
      <img src={flowersBg} alt="flowers" className={s.welcomeSection__flowersImg} />
    </motion.div>
  );
};

export const WelcomeSection = () => {
  const { ref, yPhoto, yText, opacity, scrollYProgress } = useWelcomeSection();

  return (
    <div className={s.welcomeSection} ref={ref}>
      <motion.div className={s.welcomeSection__bgWrap} style={{ y: yPhoto }}>
        <img src={welcomeBg} alt="Welcome" className={s.welcomeSection__image} />
      </motion.div>
      <motion.div
        className={s.welcomeSection__contentWrapper}
        style={{ y: yText, opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <div className={s.welcomeSection__content}>
          <motion.p className={s.welcomeSection__firstName} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}>
            Руслан
          </motion.p>
          <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}>
            &
          </motion.span>
          <motion.p className={s.welcomeSection__secondName} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}>
            Валерия
          </motion.p>
        </div>
      </motion.div>

      <FlowersFg scrollYProgress={scrollYProgress} />

      <div className={s.welcomeSection__fade} />
    </div>
  );
};
