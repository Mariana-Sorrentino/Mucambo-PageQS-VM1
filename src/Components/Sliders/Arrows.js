import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { NavigatioBtn, PrevHome, NextHome } from "./styles";
function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrowsHome">
      <NavigatioBtn navigateactive={false}>
        <PrevHome onClick={prevSlide}>
          <FaLongArrowAltLeft id="IconsSliderPrev" />
        </PrevHome>
        <NextHome onClick={nextSlide}>
          <FaLongArrowAltRight id="IconsSliderNext" />
        </NextHome>
      </NavigatioBtn>
    </div>
  );
}

export default Arrows;
