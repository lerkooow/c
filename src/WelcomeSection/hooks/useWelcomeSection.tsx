import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useWelcomeSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return { ref, yPhoto, yText, opacity, scrollYProgress };
};
