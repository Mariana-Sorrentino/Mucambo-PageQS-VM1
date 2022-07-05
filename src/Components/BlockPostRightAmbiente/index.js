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

export default function BlockPostRightAmbiente() {
  return (
    <ContainerMaster>
      <CardPost>
        <CardRight>
          <RightTexts>
            <RightTitles>
              <RightTextsTitle>
                <strong> A proteção e a sustentabilidade</strong> e
                biodiversidade
              </RightTextsTitle>
              {/* <ImgTitle src="/image/Post/PostMeioambiente.svg" /> */}
            </RightTitles>

            <RightTextsParagraph>
              A <strong> MUCAMBO </strong> se certifica de que somente utiliza
              em suas atividades imóveis de sua propriedade e posse. Da mesma
              forma, a MUCAMBO preza, em todas as suas operações, pela boa-fé e
              pelo respeito às comunidades locais e os seus respectivos direitos
              legítimos a propriedade. Os direitos de propriedade e uso regular
              da terra devem ser facilmente comprováveis por intermédio de
              documentos como certidões e alvarás emitidas pelos órgãos
              competentes.
            </RightTextsParagraph>
          </RightTexts>
        </CardRight>
        <CardLeft>
          <LeftImg src="/image/Post/Post2.png" />
        </CardLeft>
      </CardPost>
      <Separation active={true} />
      {/* {`${70}px`} */}
    </ContainerMaster>
  );
}
