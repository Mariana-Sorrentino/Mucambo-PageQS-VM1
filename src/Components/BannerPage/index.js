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
} from "./styles";

export default function BannerPage({ bannersPages }) {
  console.log(bannersPages);
  return (
    <React.Fragment>
      {/*  {bannersPages.map((item) => ( */}
      <ContainerBanner /* key={item.id} */ background={bannersPages.image}>
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
