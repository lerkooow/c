type TSchedule = {
  time: string;
  title: string;
};

export const schedule: TSchedule[] = [
  {
    time: "15:00",
    title: "Cбор гостей",
  },
  {
    time: "16:00",
    title: "Начало нашей свадебной церемонии",
  },
  {
    time: "17:00",
    title: "Банкет",
  },
  {
    time: "23:00",
    title: "Финал",
  },
];

export const drinksData: string[] = ["Безалкогольные напитки (можете написать свой вариант)", "Вино Белое", "Вино Красное", "Виски", "Водка", "Шампанское"];

export const dressCodeColors: { name: string; img: string }[] = [
  { name: "Бежевый", img: "src/assets/beige.svg" },
  { name: "Нежно-голубой", img: "src/assets/blue.svg" },
  { name: "Нежно-розовый", img: "src/assets/pink.svg" },
  { name: "Карамельный", img: "src/assets/caramel.svg" },
  { name: "Нежно-желтый", img: "src/assets/yellow2.jpg" },
  { name: "Нежно-зеленый", img: "src/assets/green1.jpg" },
];
