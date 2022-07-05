import React from "react";
import {
  ContainerMaster,
  GlovesProduct,
  TitleProduct,
  GlovesTitle,
  TitleBlock,
  CardPost,
  CardLeft,
  LeftImg,
  CardRight,
  RightTexts,
  RightTextsTitle,
  RightTextsParagraph,
} from "./styles";

export default function BlockPostRight() {
  return (
    <ContainerMaster>
      <CardPost>
        <CardRight>
          <RightTexts>
            <RightTextsTitle>Referência em luvas cirúrgicas</RightTextsTitle>
            <RightTextsParagraph>
              Líder na produção e comercialização de luvas cirúrgicas no Brasil,
              a MUCAMBO foi a primeira empresa brasileira de luvas a conquistar
              a certificação ISO 9000 para seu Sistema de Qualidade. São mais de
              60 anos levando segurança e proteção para o dia-a-dia dos
              profissionais da Saúde em todo o país.
            </RightTextsParagraph>
          </RightTexts>
        </CardRight>
        <CardLeft>
          <LeftImg src="/image/postteste.png" />
        </CardLeft>
      </CardPost>
    </ContainerMaster>
  );
}
