import { useState } from "react";
import { foodChoices } from "../images/FoodImages";
import "./ChooseFood.css";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

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
      <img
        className="food-picture"
        src={foodChoices[currentIndex].image_src}
        style={{ border: "2px solid black" }}
      />
      <div style={{ textAlign: "center" }}>
        <IconButton
          size="large"
          color="success"
          onClick={nextChoice}
          sx={{
            margin: "0 10px",
            "& .MuiSvgIcon-root": { fontSize: 40 },
            "&:hover": {
              backgroundColor: "#e8f5e9",
              "& .MuiSvgIcon-root": {
                transform: "scale(1.2)",
                transition: "transform 0.3s",
              },
            },
          }}
        >
          <ThumbUpIcon />
        </IconButton>
        <IconButton
          size="large"
          color="error"
          sx={{
            margin: "0 10px",
            "& .MuiSvgIcon-root": { fontSize: 40 },
            "&:hover": {
              backgroundColor: "#ffebee",
              "& .MuiSvgIcon-root": {
                transform: "scale(1.2)",
                transition: "transform 0.3s",
              },
            },
          }}
        >
          <ThumbDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChooseFood;
