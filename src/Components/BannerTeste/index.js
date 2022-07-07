import React from "react";
import {
  ContainerBanner,
  OndeEncontrar,
  OndeEncontrarImg,
  SectorEncontrarTitle,
  TitleLocalition,
  SeparaPages,
  TitlePages,
  SectorEncontrar,
  Lentes,
  ContainerBrandcumb,
  List,
  Title,
  TitleStrong,
} from "./styles";

export default function BannerTeste({
  bannersPages,
  img,
  title,
  subtitle,
  sub,
  product,
  active,
}) {
  //console.log(bannersPages);
  return (
    <React.Fragment>
      {/* {bannersPages.map((item) => ( */}
      <ContainerBanner background={img}>
        <Lentes>
          <List>
            <Title>Home</Title> | <Title>{sub} </Title>
            <TitleStrong> {product}</TitleStrong>
          </List>
        </Lentes>
        <OndeEncontrar>
          {/* <OndeEncontrarImg /> */}
          <SectorEncontrarTitle>
            <SeparaPages>
              <TitleLocalition>{title}</TitleLocalition>
            </SeparaPages>

            <SeparaPages>
              {subtitle && <TitlePages>{subtitle}</TitlePages>}
            </SeparaPages>
          </SectorEncontrarTitle>
        </OndeEncontrar>
      </ContainerBanner>
      {/* ))} */}
    </React.Fragment>
  );
}

{
  /* background="/image/Banners/banner2.svg" */
}
{
  /* 
       <OndeEncontrar key={obj.id}>
            <OndeEncontrarImg src={obj.image} />
            <SectorEncontrarTitle>
              <TitleLocalition>{obj.Title}</TitleLocalition>
            </SectorEncontrarTitle>
          </OndeEncontrar>  */
}
