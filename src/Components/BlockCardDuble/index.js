import React from "react";
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
  Separation,
} from "./styles";

export default function BlockCardDuble() {
  return (
    <ContainerMaster>
      <CardPost>
        <CardRight>
          <RightTexts>
            <RightTitles>
              <RightTextsTitle>
                <strong> Diálogo e desenvolvimento </strong>socioambiental
              </RightTextsTitle>
              {/* <ImgTitle src="/image/Post/PostMeioambiente.svg" /> */}
            </RightTitles>
          </RightTexts>
        </CardRight>
        <CardLeft>
          <RightTextsParagraph>
            A <strong> MUCAMBO </strong> investe na promoção de diálogos de
            sensibilização com seus colaboradores e mantém canais abertos de
            comunicação com as comunidades locais a fim de investigar e resolver
            eventuais queixas quanto ao uso da terra, bem como para a promoção
            do desenvolvimento socioambiental.
          </RightTextsParagraph>
        </CardLeft>
      </CardPost>
      <Separation active={false} />
      {/* {`${70}px`} */}
    </ContainerMaster>
  );
}
