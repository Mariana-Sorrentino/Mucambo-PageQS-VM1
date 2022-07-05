import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { NavigatioBtnSlider, PrevHome, NextHome } from "./styles";
function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrowsHome">
      <NavigatioBtnSlider>
        <PrevHome onClick={prevSlide}>
          <FaLongArrowAltLeft id="IconsSliderPrev" />
        </PrevHome>
        <NextHome onClick={nextSlide}>
          <FaLongArrowAltRight id="IconsSliderNext" />
        </NextHome>
      </NavigatioBtnSlider>
    </div>
  );
}

export default Arrows;
