import React from "react";
import {
  ContainerMeioAmbiente,
  TitlePage,
  TitleInit,
  InitTitleMB,
  TitleDescriptionMB,
  Paragraph,
  Separations,
  BannerMeioAmbiente,
  NavigationBtn,
  BtaAccet,
} from "src/styles/pages/MeioAmbiente";

import SiteLayout from "src/layouts/site";
import BrandCategory from "src/Components/Brandcumb";
import BannerPage from "src/Components/BannerTeste";
import BlockPostLeft from "src/Components/BlockPostLeft";
import BlockLeftQuemSomos from "src/Components/BlockLeftQuemSomos";
import BlockPostRightAmbiente from "src/Components/BlockPostRightAmbiente";
import BlockPostLeftAmbiente from "src/Components/BlockPostLeftAmbiente";
import BlockSeparationsTitlePages from "src/Components/BlockSeparationsTitlePages";
import BlockCardDuble from "src/Components/BlockCardDuble";
import API from "src/services/api";

export async function getServerSideProps(ctx) {
  const { data } = await API.get("site/pages/by-url/meio-ambiente");
  return {
    props: { appData: data },
  };
}
import { useRouter } from "next/router";
import BlockForm from "src/Components/BlockForm";
import PageNames from "src/Components/BlockTitlePage";
export default function MeioAmbiente({ appData }) {
  const router = useRouter();
  //console.log("esta na pagina ", router);

  return (
    <React.Fragment>
      <SiteLayout appData={appData}>
        <ContainerMeioAmbiente>
          {/* Initial compnents imports */}
          {/* <BrandCategory product="Meio Ambiente" /> */}
          {/* <BannerPage
            bannersPages={appData.pages.filter(
              (item) => item.title === "meio-ambiente"
            )}
          /> */}
          <BannerPage
            img="/image/PageView/MeioambientePage.png"
            title=""
            subtitle=""
            product="Meio Ambiente"
          />
          {/* passar para componente se precisar */}

          <PageNames title="Sociedade e Meio ambiente" />
          <BlockSeparationsTitlePages
            color="#66b031"
            colorTitle="#fff"
            active={false}
            title="A POL??TICA DE DIREITO E USO DE TERRA E BIODIVERSIDADE"
            description=" Em rela????o ?? propriedade e utiliza????o da terra e do solo e
            biodiversidade, a <strong>MUCAMBO </strong> torna p??blica a presente
            pol??tica, que compreende as seguintes diretrizes:"
          />
          {/* passar para componente se precisar */}

          <BlockPostLeftAmbiente
            img="/image/postteste.png"
            title=" <strong> Direito de </strong> uso da terra"
            description="
                A <strong> MUCAMBO </strong> se certifica de que somente utiliza em suas atividades im??veis de sua propriedade e posse. Da mesma forma, a MUCAMBO preza, em todas as suas opera????es, pela boa-f?? e pelo respeito ??s comunidades locais e os seus respectivos direitos leg??timos a propriedade. Os direitos de propriedade e uso regular da terra devem ser facilmente comprov??veis por interm??dio de documentos como certid??es e alvar??s emitidas pelos ??rg??os competentes."
          />
          <BlockPostRightAmbiente />

          <BannerMeioAmbiente background="/image/Post/BannerCenterAmbiente.svg" />

          <BlockCardDuble />

          {/* <BannerA src=""/> */}
          {/* <BlockSeparationsTitlePages
            title="<strong>Di??logo e desenvolvimento </strong> socioambiental"
            description="A <strong>MUCAMBO </strong> investe na promo????o de di??logos de sensibiliza????o com seus colaboradores e mant??m canais abertos de comunica????o com as comunidades locais a fim de investigar e resolver eventuais queixas quanto ao uso da terra, bem como para a promo????o do desenvolvimento socioambiental."
          /> */}

          <BlockPostLeftAmbiente
            img="/image/Post/PostAmbiente4.svg"
            title=" <strong> Melhoria </strong> cont??nua"
            description="
            Ciente das suas responsabilidades, a MUCAMBO avalia os aspectos e impactos das suas atividades e suas implica????es na biodiversidade e uso da terra, e atua na promo????o do uso eficiente de recursos naturais, a fim de poder fornecer produtos em quantidade e qualidade que atendam ??s necessidades de seus clientes."
          />

          <TitlePage color="#66b031" active={false}>
            <TitleInit>
              <InitTitleMB colorTitle="#fff">
                VEJA TAMB??M NOSSA POL??TICA DE SA??DE, SEGURAN??A DO TRABALHO E
                MEIO AMBIENTE
              </InitTitleMB>
            </TitleInit>
            <TitleDescriptionMB>
              <NavigationBtn>
                <BtaAccet>Conhe??a</BtaAccet>
              </NavigationBtn>
            </TitleDescriptionMB>
          </TitlePage>

          {/* <BlockForm page={appData.page} /> */}

          {/* <BlockPostLeft /> */}
          {/* <Separations /> */}
          {/* Finaly compnents imports */}
        </ContainerMeioAmbiente>
      </SiteLayout>
    </React.Fragment>
  );
}
