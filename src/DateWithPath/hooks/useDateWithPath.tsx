import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const PATH_D = `
  M 193 57
  C 210 70,  235 84,  247 101
  C 259 118, 259 133, 256 148
  C 254 164, 247 178, 234 191
  C 220 205, 200 214, 181 219
  C 159 225, 137 225, 115 224
  C  93 223,  73 220,  59 216
  C  49 213,  43 210,  43 210
  C  46 222,  56 241,  68 262
  C  83 285,  98 300, 117 317
  C 137 334, 154 343, 176 356
  C 198 368, 210 374, 232 381
  C 254 388, 271 390, 293 389
  C 315 388, 330 383, 344 374
  C 359 366, 369 355, 372 345
  C 375 337, 372 329, 365 325
  C 355 320, 340 319, 318 322
  C 291 326, 264 333, 234 343
  C 203 354, 181 364, 151 378
  C 120 392,  93 407,  66 427
  C  39 446,  20 461,  10 479
  C   2 493,   5 506,  12 518
  C  22 533,  39 546,  68 563
  C 100 582, 137 598, 164 612
`;

export const useDateWithPath = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 95%"],
  });

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    let rafId: number;

    const update = () => {
      const p = scrollYProgress.get();
      const off = len * (1 - Math.min(Math.max(p, 0), 1));
      path.style.strokeDashoffset = `${off}`;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [scrollYProgress]);

  const dates = ["24", "25", "26"];
  const datesAfter = ["28", "29", "30"];

  return { sectionRef, pathRef, dates, datesAfter };
};
