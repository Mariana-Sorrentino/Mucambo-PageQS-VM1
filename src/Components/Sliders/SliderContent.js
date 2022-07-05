import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { ComponentPage } from "src/styles/PadaoPage";
import Link from "next/link";
import {
  BlocosSliderHome,
  SlidesHome,
  SlideImageHome,
  SliderGroup,
  SliderGroupPage,
  SliderGroupTitle,
  SlideTitleHome,
  SliderGroupCaption,
  SlideTextParagraph,
  BtnLinkSlider,
  Butnlink,
} from "./styles";

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
          <SlideImageHome src={slide.url} alt="" />
          <SliderGroup>
            <SliderGroupPage>
              <SliderGroupTitle>
                <SlideTitleHome>{ReactHtmlParser(slide.title)}</SlideTitleHome>
              </SliderGroupTitle>
              <SliderGroupCaption>
                <SlideTextParagraph>
                  {ReactHtmlParser(slide.description)}
                </SlideTextParagraph>
              </SliderGroupCaption>
              <SliderGroupCaption>
                <BtnLinkSlider navigateLinks={false}>
                  <Link href="#">
                    <Butnlink>Saiba mas</Butnlink>
                  </Link>
                </BtnLinkSlider>
              </SliderGroupCaption>
            </SliderGroupPage>
          </SliderGroup>
        </SlidesHome>
      ))}
    </BlocosSliderHome>
  );
}

export default SliderContent;
