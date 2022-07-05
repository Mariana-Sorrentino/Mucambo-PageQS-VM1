import React from "react";

import { ContainerTitlePages, ViewTitle, TitlePages } from "./styles";

export default function Brandcumb({ title }) {
  return (
    <React.Fragment>
      <ContainerTitlePages>
        <ViewTitle>
          <TitlePages>{title}</TitlePages>
        </ViewTitle>
      </ContainerTitlePages>
    </React.Fragment>
  );
}
