import React from "react";
import { ContainerContato, MapsGoogles } from "src/styles/pages/Contato";

import SiteLayout from "src/layouts/site";
import BrandCategory from "src/Components/Brandcumb";
import BannerPage from "src/Components/BannerPage";
import BannerTeste from "src/Components/BannerTeste";
import BlockPostLeft from "src/Components/BlockPostLeft";
import BlockContact from "src/Components/BlockContact";
import BlockForm from "src/Components/BlockForm";
import API from "src/services/api";

export async function getServerSideProps(ctx) {
  const { data } = await API.get("site/pages/by-url/contato");

  return {
    props: { appData: data },
  };
}

export default function Contato({ appData }) {
  return (
    <React.Fragment>
      <SiteLayout appData={appData}>
        <ContainerContato>
          {/* Initial compnents imports */}
          <BrandCategory product="Contato" />
          {/* <BannerPage
            bannersPages={appData.pages.filter(
              (item) => item.title === "Contato"
            )}
          /> */}
          <BannerTeste img="/image/PageView/ContactPage.svg" title="" />

          <BlockContact />

          {/* Maps teste */}
          <MapsGoogles>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.273695770314!2d-46.6893931844751!3d-23.594515268703834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5747cd25f397%3A0xca45c0378e2a4a4a!2sMucambo%20S%2FA!5e0!3m2!1spt-BR!2sbr!4v1654527196777!5m2!1spt-BR!2sbr"
              width={"100%"}
              height={450}
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapsGoogles>
          {/* <BlockForm /> */}
          {/* <BlocksGloves /> */}
          {/* <BlockPostLeft /> */}
          {/* Finaly compnents imports */}
        </ContainerContato>
      </SiteLayout>
    </React.Fragment>
  );
}
