import React from "react";
import { AllDotsHome, DotHome } from "./styles";

function Dots({ activeIndex, banana, bannersData }) {
  return (
    <AllDotsHome navigateDots={true}>
      {bannersData.map((slide, index) => (
        <DotHome
          key={`slide-bloc-content-${index}`}
          active={index === activeIndex ? true : false}
          onClick={() => banana(index)}
        ></DotHome>
      ))}
    </AllDotsHome>
  );
}

export default Dots;
