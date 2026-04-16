import { useCallback, useEffect, useMemo, useState } from "react";

import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const useCountdown = () => {
  const timeZone = "Asia/Yekaterinburg";
  const weddingDate = useMemo(() => toZonedTime("2026-06-27T15:30:00", timeZone), [timeZone]);

  const [timeLeft, setTimeLeft] = useState<{ label: string; value: number }[]>([]);

  const declension = (num: number, forms: [string, string, string]) => {
    const n = Math.abs(num) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
  };

  const updateTimeLeft = useCallback(() => {
    const now = new Date();
    const days = differenceInDays(weddingDate, now);
    const hours = differenceInHours(weddingDate, now) % 24;
    const minutes = differenceInMinutes(weddingDate, now) % 60;
    const seconds = differenceInSeconds(weddingDate, now) % 60;

    setTimeLeft([
      { value: days, label: declension(days, ["день", "дня", "дней"]) },
      { value: hours, label: declension(hours, ["час", "часа", "часов"]) },
      { value: minutes, label: declension(minutes, ["минуту", "минуты", "минут"]) },
      { value: seconds, label: declension(seconds, ["секунду", "секунды", "секунд"]) },
    ]);
  }, [weddingDate]);

  useEffect(() => {
    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [updateTimeLeft]);

  return { timeLeft };
};
