import React from "react";
import {
  ContainerMaster,
  GlovesProduct,
  TitleProduct,
  GlovesTitle,
  TitleBlock,
  CardPost,
  CardLeft,
  LeftImg,
  CardRight,
  RightTexts,
  RightTitles,
  RightTextsTitle,
  ImgTitle,
  RightTextsParagraph,
} from "./styles";

export default function BlockContact() {
  return (
    <ContainerMaster>
      {/* <GlovesProduct>
        <TitleProduct>Categoria Master</TitleProduct>
      </GlovesProduct> */}
      {/* <GlovesTitle>
        <TitleBlock>Linha Cirúrgica</TitleBlock>
      </GlovesTitle> */}
      <CardPost>
        <CardRight>
          <RightTexts>
            <RightTitles>
              <RightTextsTitle>
                <strong>Onde estamos</strong>
              </RightTextsTitle>
              <p>
                Para saber mais sobre nossos produtos ou sobre nossos
                representantes, entre em contato.
              </p>
              {/* <ImgTitle src="/image/Post/LogoTitle-Quem-somos.svg" /> */}
            </RightTitles>

            <RightTextsParagraph>
              <span>Endereço</span>
              Rua do Rócio, nº 351 – 3º andar – Cj. 32 – Vila Olímpia São
              Paulo/SP. CEP: 04552-000
              <span>Telefone</span>
              +55 11 2133.3000 | 0800 075 4638
              <span>Email</span>
              faleconosco.mapaspontexbr@newellco.com
            </RightTextsParagraph>

            {/* <RightTextsParagraph>
              Localizada no sul da Bahia, a Mucambo, fundada em 1950, hoje é
              <strong>
                {" "}
                líder nacional na fabricação de luvas cirúrgicas.
              </strong>
            </RightTextsParagraph>
            <RightTextsParagraph>
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

        <CardLeft>
          <LeftImg src="/image/Post/ContactGroup.svg" />
        </CardLeft>
      </CardPost>
    </ContainerMaster>
  );
}
