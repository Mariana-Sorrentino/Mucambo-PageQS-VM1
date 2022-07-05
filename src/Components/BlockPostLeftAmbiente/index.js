import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  ContainerMaster,
  CardPost,
  CardLeft,
  LeftImg,
  CardRight,
  RightTexts,
  RightTitles,
  RightTextsTitle,
  ImgTitle,
  RightTextsParagraph,
} from "./styles";

export default function BlockPostLeftAmbiente({ img, title, description }) {
  return (
    <ContainerMaster>
      <CardPost>
        <CardLeft>
          <LeftImg src={img} />
          {/* backgroun={img} */}
          {/* "/image/postteste.png"  */}
        </CardLeft>
        <CardRight>
          <RightTexts>
            <RightTitles>
              <RightTextsTitle>{ReactHtmlParser(title)}</RightTextsTitle>
              {/* <ImgTitle src="/image/Post/PostMeioambiente.svg" /> */}
            </RightTitles>

            <RightTextsParagraph>
              {ReactHtmlParser(description)}
            </RightTextsParagraph>
          </RightTexts>
        </CardRight>
      </CardPost>
    </ContainerMaster>
  );
}
