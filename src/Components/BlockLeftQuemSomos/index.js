import React from "react";
import { ComponentPage } from "src/styles/PadaoPage";
import {
  ContainerMaster,
  CardPost,
  CardLeft,
  LeftImg,
  CardRight,
  RightTexts,
  RightTitles,
  RightTextsTitle,
  RightTextsParagraph,
} from "./styles";

export default function BlockLeftQuemSomos() {
  return (
    <ContainerMaster>
      {/* <GlovesProduct>
        <TitleProduct>Categoria Master</TitleProduct>
      </GlovesProduct> */}
      {/* <GlovesTitle>
        <TitleBlock>Linha Cirúrgica</TitleBlock>
      </GlovesTitle> */}

      <CardPost>
        <CardLeft>
          <LeftImg src="/image/Post/qsemNewell.png" />
        </CardLeft>
        <CardRight>
          <RightTexts>
            <RightTitles>
              <RightTextsTitle>
                <strong>Newell Brands</strong>
              </RightTextsTitle>
              {/* <ImgTitle src="/image/Post/LogoTitle-Quem-somos.svg" /> */}
            </RightTitles>

            <RightTextsParagraph>
              Uma empresa global, com marcas fortes e uma relação de confiança e
              comprometimento com cada consumidor. A Newell Brands tem como
              propósito colocar o consumidor em primeiro lugar, no centro de
              suas atividades.
              {/* <strong>
                Líder na produção e comercialização de luvas cirúrgicas no
                Brasil,
              </strong>
              a <strong>MUCAMBO</strong> foi a primeira empresa brasileira de
              luvas a conquistar a
              <strong>
                certificação ISO 9000 para seu Sistema de Qualidade.
              </strong> */}
            </RightTextsParagraph>
            <RightTextsParagraph>
              E é com o objetivo de cumprir essa missão que a empresa investe em
              inovação constante para acompanhar as demandas mais atuais do
              mercado e para atender a seus diferentes públicos com a máxima
              qualidade.
              {/* <strong>
                {" "}
                líder nacional na fabricação de luvas cirúrgicas.
              </strong> */}
            </RightTextsParagraph>
            {/* <RightTextsParagraph>
              Em 1999 foi <strong>integrada à Mapa Spontex,</strong> empresa
              sediada na França e{" "}
              <strong>
                referência mundial na produção de luvas de proteção e segurança
              </strong>{" "}
              com sua marca Mapa Professionnel.
              <b />
              Atualmente com{" "}
              <strong>
                12 plantas e 3 centros de desenvolvimento em diversos países,
              </strong>{" "}
              a empresa visa atender as necessidades e expectativas de seus
              clientes.
            </RightTextsParagraph> */}
          </RightTexts>
        </CardRight>
      </CardPost>
    </ContainerMaster>
  );
}
