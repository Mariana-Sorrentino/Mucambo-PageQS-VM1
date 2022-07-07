import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  ContainerSeparationGreen,
  TitlePage,
  TitleInit,
  InitTitle,
  TitleDescription,
  Paragraph,
} from "./styles";

export default function BlockSeparationsTitleS({
  active,
  title,
  description,
  colorTitle,
  color,
  viewLargura,
  viewDisplay,
}) {
  return (
    <ContainerSeparationGreen>
      <TitlePage active={active} color={color}>
        <TitleInit viewLargura={viewLargura}>
          <InitTitle colorTitle={colorTitle}>
            {ReactHtmlParser(title)}
          </InitTitle>
        </TitleInit>
        <TitleDescription viewDisplay={viewDisplay}>
          <Paragraph colorTitle={colorTitle}>
            {ReactHtmlParser(description)}
          </Paragraph>
        </TitleDescription>
      </TitlePage>
    </ContainerSeparationGreen>
  );
}
