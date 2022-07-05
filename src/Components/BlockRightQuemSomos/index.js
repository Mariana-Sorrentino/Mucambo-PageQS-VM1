import React from "react";
import { ComponentFull, ComponentPage } from "src/styles/PadaoPage";
import {
  ContainerMaster,

  GlovesTitle,
  CardPost,
  CardLeft,
  LeftImg,
  CardRight,
  RightTexts,
  RightTitles,
  RightTextsTitle,
  Descriptions,
  RightTextsParagraph,
  BlockBotton,
  CardBotton,
  CardTextBotton,
  Year,
  TextBotton,
} from "./styles";

export default function BlockRightQuemSomos() {
  return (
    <ContainerMaster>
      <GlovesTitle>
        {/* <TitleBlock>Reconhecida pelos profissionais</TitleBlock> */}
      </GlovesTitle>
      <ComponentPage>
        {/* <GlovesProduct>
        <TitleProduct>Categoria Master</TitleProduct>
      </GlovesProduct> */}

        <CardPost>
          <CardRight>
            <RightTexts>
              <RightTitles>
                <RightTextsTitle>
                  <strong>Mucambo</strong>
                </RightTextsTitle>
                <RightTextsTitle>
                  Do sul da Bahia para todo o Brasil.
                </RightTextsTitle>
                {/* <ImgTitle src="/image/Post/LogoTitle-Quem-somos.svg" /> */}
              </RightTitles>
            </RightTexts>
            <Descriptions>
              <RightTextsParagraph>
                <strong>
                A história da Mucambo começa no ano de 1950 
                </strong> e tem como ponto de partida uma fábrica localizada em 
                território baiano e a missão de oferecer mais qualidade
                 e segurança aos profissionais da saúde de todo o país.
              </RightTextsParagraph>

              <RightTextsParagraph>
                Com o passar do tempo, o crescimento das operações e 
                o aumento no número de produtos comercializados, a 
                trajetória da empresa tomou novos rumos e sua linha 
                do tempo passou a ser sinalizada por dois marcos 
                muito importantes:
              </RightTextsParagraph>
            </Descriptions>
          </CardRight>
          <CardLeft>
            <LeftImg src="/image/Post/fabricaPageQuemSomos.png" />
          </CardLeft>
        </CardPost>
      </ComponentPage>

      <BlockBotton>
        <CardBotton>
          <CardRight>
            <CardTextBotton>
              <Year><strong>1999</strong></Year>
              <TextBotton>
                <strong>
                  A Mucambo foi incorporada à companhia francesa
                  Mapa Spontex.
                </strong>
              </TextBotton>
            </CardTextBotton>            
          </CardRight>

          <CardRight>
            <CardTextBotton>
              <Year><strong>2016</strong></Year>
              <TextBotton>
                <strong>
                Passou a fazer parte do grupo norte-americano
                Newell Brands.
                </strong>
              </TextBotton>
            </CardTextBotton>            
          </CardRight>
        </CardBotton>
      </BlockBotton>
    </ContainerMaster>
  );
}
