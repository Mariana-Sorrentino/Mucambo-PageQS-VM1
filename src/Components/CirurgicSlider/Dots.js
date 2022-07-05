import React from "react";
import { AllDotsHomeSlider, DotHomeSlider } from "./styles";

function Dots({ activeIndex, banana, bannersData }) {
  return (
    <AllDotsHomeSlider>
      {bannersData.map((slide, index) => (
        <DotHomeSlider
          key={`slide-bloc-content-${index}`}
          active={index === activeIndex ? true : false}
          onClick={() => banana(index)}
        ></DotHomeSlider>
      ))}
    </AllDotsHomeSlider>
  );
}

export default Dots;
