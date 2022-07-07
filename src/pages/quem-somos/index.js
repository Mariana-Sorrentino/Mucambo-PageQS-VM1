import React from "react";
import { ContainerQuemSomos } from "src/styles/pages/QuemSomos";
import SiteLayout from "src/layouts/site";
import BlockLeftQuemSomos from "src/Components/BlockLeftQuemSomos";
import BlockSecuryti from "src/Components/BlockSecuryti";
import API from "src/services/api";
import BlockForm from "src/Components/BlockForm";
import SeparationPage from "src/Components/BlockSeparationsQS";
import BlockRightQuemSomos from "src/Components/BlockRightQuemSomos";
import BannerPage from "src/Components/BannerTeste";
import PageNames from "src/Components/BlockTitlePage";
import BlockPortfolio from "src/Components/BlockPortfolio";
import About from "src/Components/BlockAbout";
export async function getServerSideProps(ctx) {
  const { data } = await API.get("site/pages/by-url/quem-somos");
  return {
    props: { appData: data },
  };
}

export default function QuemSomos({ appData }) {
  return (
    <React.Fragment>
      <SiteLayout appData={appData}>
        <ContainerQuemSomos>
          {/* <BrandCategory product="Quem Somos" /> */}
          <BannerPage
            img="/image/PageView/bannerQuemSomos.svg"
            title=""
            subtitle=""
            product="Quem Somos"
          />
          <PageNames title="Quem Somos" />
          <BlockLeftQuemSomos />
          <SeparationPage
            active={false}
            viewLargura={true}
            viewDisplay={true}
            color="#66b031"
            colorTitle="#fff"
            title="<strong>O resultado de todo esse trabalho?</strong>"
            description=" Produtos desenvolvidos
            com todo o cuidado e dedicação, assegurando mais
            proteção, conforto, praticidade e bem-estar à rotina de
            casas e indústrias no mundo todo.
            "
          />
          <BlockPortfolio />
          <BlockRightQuemSomos />
          <About />
          <SeparationPage
            active={false}
            viewLargura={false}
            viewDisplay={false}
            color="#1951A0"
            colorTitle="#fff"
            title="<strong>Para levar toda a qualidade das luvas Mucambo à 
            sua clínica ou hospital,</strong> fale com nossos especialistas."
          />
          {/* <BlockSecuryti /> */}
        </ContainerQuemSomos>
      </SiteLayout>
    </React.Fragment>
  );
}
