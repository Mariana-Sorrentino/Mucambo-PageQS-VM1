import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import {
  BlocosSliderHome,
  SlidesHome,
  SliderGroupImg,
  Sliderbloco,
  SliderIcon,
  SliderBTitle,
  SliderGroupTitle,
  SlideImageHome,
  SliderGroupText,
  SliderGroup,
  SlideTitleHome,
  SlideTitleStrong,
  SliderGroupCaption,
  SlideTextParagraph,
  BtnLinkSlider,
  Butnlink,
} from "./styles";
import { AiOutlineCheck } from "react-icons/ai";

function SliderContent({ activeIndex, bannersData }) {
  useEffect(() => {
    setInterval(() => {}, 3000);
  }, []);
  return (
    <BlocosSliderHome>
      {bannersData.map((slide, index) => (
        <SlidesHome
          key={`slide-bloc-content-${index}`}
          active={index === activeIndex ? true : false}
        >
          {/* grupo textos */}
          <SliderGroupText>
            <SliderGroup>
              <SliderGroupTitle>
                <SlideTitleHome>{slide.title}</SlideTitleHome>
              </SliderGroupTitle>
              <SliderGroupTitle>
                <SlideTitleStrong color={slide.color}>
                  {/* {slide.subtitle} */}
                  {ReactHtmlParser(slide.subtitle)}
                </SlideTitleStrong>
              </SliderGroupTitle>
              <SliderGroupCaption>
                <SlideTextParagraph>{slide.description}</SlideTextParagraph>
              </SliderGroupCaption>
              <SliderGroupCaption>
                <BtnLinkSlider>
                  <Butnlink>Saiba mas</Butnlink>
                </BtnLinkSlider>
              </SliderGroupCaption>
            </SliderGroup>
          </SliderGroupText>
          {/* grupo imagem */}
          <SliderGroupImg color={slide.color}>
            <SlideImageHome src={slide.url} alt="" />
            <Sliderbloco>
              <SliderIcon color={slide.color}>
                <AiOutlineCheck size="25" color="#fff" />
              </SliderIcon>
              <SliderBTitle>
                A marca favorita dos profissionais de saúde
              </SliderBTitle>
            </Sliderbloco>
          </SliderGroupImg>
        </SlidesHome>
      ))}
    </BlocosSliderHome>
  );
}

export default SliderContent;
