import { useState } from "react";
import malaxiangguo from "../images/ma-la-xiang-guo.jpg";
import chickenrice from "../images/hainanese-chicken-rice.jpg";
import "./ChooseFood.css";

function ChooseFood() {
  const foodChoices = [{ src: malaxiangguo }, { src: chickenrice }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextChoice = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === foodChoices.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ width: "50%", float: "left" }}>
      <img className="food-picture" src={foodChoices[currentIndex].src} />
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
