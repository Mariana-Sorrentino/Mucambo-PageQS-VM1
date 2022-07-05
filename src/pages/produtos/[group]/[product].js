import React from "react";
import ReactHtmlParser from "react-html-parser";
import SiteLayout from "src/layouts/site";
import API from "src/services/api";
import Link from "next/link";
import {
  ContainerDetalheProd,
  BannerProd,
  SeparaPages,
  SectorPrimary,
  TitleLocalition,
  DetailProduct,
  DetailProd,
  DetailProdItem,
  SectorDetailItems,
  DetailItems,
  DetailTitle,
  TitleProduct,
  DetailItemscaption,
  TitleDescription,
  ProducDestac,
  ProductMatirial,
  CartMaterial,
  CartItem,
  CartItemPhoto,
  CartItemTitle,
  TitleEspecific,
  Descriptioncaption,
  DescriptionGeralProduct,
  DetailImg,
  ImgProductFilter,
  ProductsModel,
  BlocKPainting,
  Navigation,
  Butnlink,
  TitleInstruction,
  ItemInstruct,
  CategoryInstruction,
  DescriptionInstruction,
  SectorPDF,
  DocImg,
  IconPhotoDoc,
  TitlePDF,
} from "src/styles/pages/DetailProduct";

import BrandCategory from "src/Components/Brandcumb";
import BlocksGlovesDetailProds from "src/Components/BlockGlovesDetailProduct";
import BannerPage from "src/Components/BannerPage";
import PageNames from "src/Components/BlockTitlePage";
export async function getServerSideProps(ctx) {
  const { product } = ctx.query;
  const { data: appData } = await API.get("site/pages/by-url/produtos");
  const { data: productData } = await API.get(`products/by-url/${product}`);
  var relatedsData = null;
  try {
    const { data: relateds } = await API.get(
      `products/relateds/${productData.id}`
    );
    relateds.length === 0 ? (relatedsData = null) : (relatedsData = relateds);
  } catch (error) {
    relatedsData = null;
  }
  return {
    props: { appData, productData, relatedsData },
  };
}

export default function Product({ appData, productData, relatedsData }) {
  return (
    <SiteLayout appData={appData}>
      <ContainerDetalheProd>
        <BrandCategory
          sub="Produtos | "
          product={productData.category.group.title}
        />
        <BannerPage
          bannersPages={{
            image: productData.category.group.image,
            titlePage: productData.category.group.title,
          }}
        />
        <PageNames title={productData.category.group.title} />
        {/* detalhe produto initial */}
        <DetailProduct>
          <SectorPrimary>
            <DetailProd>
              <DetailProdItem>
                <DetailItems>
                  <DetailTitle>Linha {productData.line.name}</DetailTitle>
                </DetailItems>
                <DetailItems>
                  <TitleProduct color={productData.color}>
                    {productData.name}
                  </TitleProduct>
                </DetailItems>
                <DetailItemscaption>
                  <TitleDescription>
                    {ReactHtmlParser(productData.description)}
                  </TitleDescription>
                </DetailItemscaption>

                <DetailItems>
                  <ProducDestac>Destaques</ProducDestac>
                </DetailItems>
              </DetailProdItem>
              {/* MAP DE IMAGEM MATERIAL */}
              <ProductMatirial>
                {productData.emphases.map((obj) => {
                  return (
                    <CartMaterial key={obj.id}>
                      <CartItem>
                        <CartItemPhoto src={obj.icon} />
                      </CartItem>
                      <CartItem>
                        <CartItemTitle>{obj.title}</CartItemTitle>
                      </CartItem>
                    </CartMaterial>
                  );
                })}
              </ProductMatirial>
            </DetailProd>

            {/* Image do product */}
            <DetailImg>
              <ImgProductFilter>
                <BlocKPainting />
                <ProductsModel src={productData.image} />
              </ImgProductFilter>

              {/* NAVIGATION LINK */}
              <Navigation>
                <Butnlink>Onde encontrar</Butnlink>
              </Navigation>
            </DetailImg>
          </SectorPrimary>
          <BannerProd background="/image/PageView/targetBg.png">
            <SeparaPages>
              <TitleLocalition>
                {/* {productData.category.group.title} */}
              </TitleLocalition>
            </SeparaPages>
          </BannerProd>
          {productData.material != "" && (
            <SectorDetailItems>
              <DetailItems>
                <TitleEspecific>Especificações técnicas</TitleEspecific>
              </DetailItems>
              <Descriptioncaption>
                {ReactHtmlParser(productData.material)}
                {/* map do P DO PRODUTO */}
              </Descriptioncaption>
              {productData.datasheet_url != "" && (
                <SectorPDF>
                  <DocImg>
                    <IconPhotoDoc src="/image/PageView/DocDow.svg" />
                  </DocImg>

                  <React.Fragment>
                    <TitlePDF>BAIXE NOSSA FICHA TÉCNICA</TitlePDF>
                    <Navigation style={{ marginTop: 0 }}>
                      <Butnlink
                        href={productData.datasheet_url}
                        target="_blank"
                      >
                        Download
                      </Butnlink>
                    </Navigation>
                  </React.Fragment>
                </SectorPDF>
              )}
            </SectorDetailItems>
          )}
        </DetailProduct>
        {productData.instructions_use != "" && (
          <TitleInstruction>
            <CategoryInstruction>Instruções de uso</CategoryInstruction>
            <ItemInstruct>
              {ReactHtmlParser(productData.instructions_use)}
            </ItemInstruct>
          </TitleInstruction>
        )}

        {relatedsData !== null && (
          <BlocksGlovesDetailProds
            relateds={relatedsData}
            line={`linha ${productData.line.name}`}
          />
        )}
      </ContainerDetalheProd>
    </SiteLayout>
  );
}
