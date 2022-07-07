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

export default function BannerPage({ bannersPages, sub, product, active }) {
  console.log(bannersPages);
  return (
    <React.Fragment>
      {/*  {bannersPages.map((item) => ( */}
      <ContainerBanner /* key={item.id} */ background={bannersPages.image}>
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
              {/* <TitleLocalition>{bannersPages.titlePage}</TitleLocalition> */}
            </SeparaPages>

            <SeparaPages>
              {bannersPages.subtitle && (
                <TitlePages>{bannersPages.subtitle}</TitlePages>
              )}
            </SeparaPages>
          </SectorEncontrarTitle>
        </OndeEncontrar>
      </ContainerBanner>
      {/*   ))} */}
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
