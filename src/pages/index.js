import React from "react";
import API from "../services/api";
import SiteLayout from "../layouts/site";
import { ContainerHome } from "../styles/Home";
import Carousel from "../Components/Sliders";
import SliderCirurgic from "../Components/CirurgicSlider";
// import Banners from "../Components/Banner";
import BlocoCard from "../Components/BlockCard";
import BlocksGloves from "../Components/Blockgloves";
import BlocksGlovescomplement from "../Components/Blockglovescomplement";
import BlockSocietyEnveroment from "../Components/BlockSocietyenvironment";

export default function Home({ appData }) {
  console.log(appData);
  return (
    <React.Fragment>
      <SiteLayout appData={appData}>
        <ContainerHome>
          <Carousel bannersData={appData.contents.banners.home} />
          <BlocoCard />
          <SliderCirurgic bannersData={appData.contents.banners.products} />
          <BlocksGloves />
          <BlocksGlovescomplement />
          <BlockSocietyEnveroment />
        </ContainerHome>
      </SiteLayout>
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  const { data } = await API.get("site/pages/by-url/home");
  const { data: banners } = await API.get("site/banners");
  data.contents = {
    banners: banners,
  };
  return {
    props: { appData: data },
  };
}
