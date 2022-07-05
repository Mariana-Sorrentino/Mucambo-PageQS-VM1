import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  TitlePage,
  TitleInit,
  InitTitle,
  TitleDescription,
  Paragraph,
} from "./styles";

export default function BlockSeparationsTitlePages({
  active,
  title,
  description,
  color,
  colorTitle,
}) {
  return (
    <TitlePage active={active} color={color}>
      <TitleInit>
        <InitTitle colorTitle={colorTitle}>{ReactHtmlParser(title)}</InitTitle>
      </TitleInit>
      <TitleDescription>
        <Paragraph colorTitle={colorTitle}>
          {ReactHtmlParser(description)}
        </Paragraph>
      </TitleDescription>
    </TitlePage>
  );
}
