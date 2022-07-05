import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
//import "../../styles/globals.css";
import { SliderOpac, SlidercContainerHome, SvgContainer } from "./styles";

function Slidercirurgic({ bannersData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = bannersData.length - 1;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 1 : activeIndex + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <SlidercContainerHome>
      <SliderContent activeIndex={activeIndex} bannersData={bannersData} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        bannersData={bannersData}
        banana={(activeIndex) => setActiveIndex(activeIndex)}
      />

      {/* <SliderOpac /> */}
    </SlidercContainerHome>
  );
}

export default Slidercirurgic;
