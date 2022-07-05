import React from "react";

import { ContainerBrandcumb, List, Title, TitleStrong } from "./styles";

export default function Brandcumb({ sub, product, active }) {
  return (
    <React.Fragment>
      <ContainerBrandcumb>
        <List>
          <Title>Home</Title> | <Title>{sub} </Title>
          <TitleStrong> {product}</TitleStrong>
        </List>
      </ContainerBrandcumb>
    </React.Fragment>
  );
}
