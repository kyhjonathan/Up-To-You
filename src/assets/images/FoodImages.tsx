import type { FoodChoice } from "../../types/FoodTypes";

import malaxiangguo from "./ma-la-xiang-guo.jpg";
import chickenrice from "./hainanese-chicken-rice.jpg";
import meepok from "./mee-pok-image.jpeg";
import rotiprata from "./Singapore-Roti-Prata.webp";
import steak from "./steak-picture.avif";
import burger from "./burger-image.jpg";

export const foodChoices: FoodChoice[] = [
  {
    name: "Ma La Xiang Guo",
    image_src: malaxiangguo,
    cuisine: "Chinese",
  },
  {
    name: "Hainanese Chicken Rice",
    image_src: chickenrice,
    cuisine: "Chinese",
  },
  {
    name: "Mee Pok",
    image_src: meepok,
    cuisine: "Chinese",
  },
  {
    name: "Roti Prata",
    image_src: rotiprata,
    cuisine: "Indian",
  },
  {
    name: "Steak",
    image_src: steak,
    cuisine: "Western",
  },
  {
    name: "Burger",
    image_src: burger,
    cuisine: "Western",
  },
];

const images = {
  malaxiangguo,
  chickenrice,
  meepok,
  rotiprata,
  steak,
  burger,
};

export default images;
