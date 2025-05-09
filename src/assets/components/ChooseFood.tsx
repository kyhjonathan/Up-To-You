import { useState } from "react";
import { foodChoices } from "../images/FoodImages";
import "./ChooseFood.css";

interface ChooseFoodProps {
  position: "left" | "right";
}

function ChooseFood({ position }: ChooseFoodProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextChoice = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === foodChoices.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ width: "50%", float: position }}>
      <img className="food-picture" src={foodChoices[currentIndex].image_src} />
      <div style={{ textAlign: "center" }}>
        <button className="choose-button" onClick={nextChoice}>
          Yes
        </button>
        <button className="choose-button">No</button>
      </div>
    </div>
  );
}

export default ChooseFood;
