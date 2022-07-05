import React from "react";
import {
  ContainerOndeEncontrar,
  OndeEncontrar,
  OndeEncontrarImg,
  SectorEncontrarTitle,
  TitleLocalition,
  SectorEncontrar,
} from "src/styles/pages/OndeEncontrar";

import SiteLayout from "src/layouts/site";
import BrandCategory from "src/Components/Brandcumb";
import BannerTeste from "src/Components/BannerTeste";
import BlockForm from "src/Components/BlockForm";
import BlockRevenda from "src/Components/BlockRevenda";
import API from "src/services/api";
import PageNames from "src/Components/BlockTitlePage";

export async function getServerSideProps(ctx) {
  const { data } = await API.get("site/pages/by-url/onde-encontrar");
  const { data: agents } = await API.get("site/agents");
  data.contents = {
    agents: agents,
  };
  return {
    props: { appData: data },
  };
}

export default function Ondeencontrar({ appData }) {
  return (
    <React.Fragment>
      <SiteLayout appData={appData}>
        <ContainerOndeEncontrar>
          <BrandCategory product="Onde Encontrar" />
          <BannerTeste img="/image/PageView/LocationPage.svg" title="" />
          <PageNames title="Onde Encontrar" />
          <BlockRevenda agentsData={appData.contents.agents} />
        </ContainerOndeEncontrar>
      </SiteLayout>
    </React.Fragment>
  );
}
