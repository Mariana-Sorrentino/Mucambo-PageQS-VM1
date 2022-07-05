import React from "react";
import { ContainerProduct } from "src/styles/pages/Product";
import Link from "next/link";
import BannerPage from "src/Components/BannerPage";
import BrandCategory from "src/Components/Brandcumb";
import SiteLayout from "src/layouts/site";
import {
  ContainerGloves,
  GlovesTitle,
  TitleBlock,
  GlovesFlay,
  CardFaly,
  Card,
  CardPhoto,
  CardImg,
  CardItem,
  CardTagTitleItem,
  CardTagCategory,
  CardTag,
  CarddELETARDEPOIS,
  CardTxt,
  Contents,
  ContentsTitles,
  News,
  Icons,
  NavigationCard,
  BtnCard,
  SectorTtilePage,
  TitleCategory,
  DescriptionCategory,
  SectorProdutoDeletardepois,
} from "src/styles/pages/ComplementoProduto";
import { BiPlus } from "react-icons/bi";
import PageTitles from "src/Components/BlockTitlePage";
import API from "src/services/api";

export async function getServerSideProps(ctx) {
  const { group } = ctx.query;
  const { data: groupData } = await API.get(`products/by-group/${group}`);
  const { data: appData } = await API.get("site/pages/by-url/produtos");
  return {
    props: { appData, groupData },
  };
}

export default function ProductCategory({ appData, groupData }) {
  // console.log(groupData);
  return (
    <React.Fragment>
      <SiteLayout appData={appData}>
        <ContainerProduct>
          <BrandCategory sub="Produtos | " product={groupData.title} />

          <BannerPage
            bannersPages={{
              image: groupData.image,
              titlePage: groupData.title,
            }}
          />

          {groupData.categories.map((category) => {
            return (
              <>
                <PageTitles title={groupData.title} />
                <React.Fragment>
                  <ContainerGloves key={category.id}>
                    <SectorTtilePage id={category.id}>
                      <TitleCategory>{category.descriptionTitle}</TitleCategory>
                      <DescriptionCategory>
                        {category.descriptionText}
                      </DescriptionCategory>
                    </SectorTtilePage>
                    <GlovesTitle color={category.color}>
                      <TitleBlock>{category.title}</TitleBlock>
                    </GlovesTitle>

                    <GlovesFlay>
                      <CardFaly>
                        {category.products.map((product) => {
                          return (
                            <Link
                              href={`/produtos/${groupData.url}/${product.url}`}
                              key={`category-${category.id}-product-${product.id}`}
                            >
                              <Card>
                                <CardPhoto>
                                  <CardImg src={product.image} />
                                </CardPhoto>
                                <CardItem>
                                  <CardTag>
                                    <CarddELETARDEPOIS color={product.color}>
                                      {product.name}
                                    </CarddELETARDEPOIS>

                                    <CardTagCategory>
                                      {product.line.name}
                                    </CardTagCategory>
                                  </CardTag>
                                  <CardTxt>
                                    <Contents>
                                      {product.emphases.map((item) => {
                                        return (
                                          <ContentsTitles
                                            key={`category-${category.id}-product-${product.id}-emphase-${item.id}`}
                                          >
                                            <strong>.</strong>
                                            {item.title}
                                          </ContentsTitles>
                                        );
                                      })}
                                    </Contents>
                                    <Link
                                      href={`/produtos/${groupData.url}/${product.url}`}
                                    >
                                      <News>
                                        <Icons>
                                          <BiPlus size={20} />
                                        </Icons>
                                      </News>
                                    </Link>
                                  </CardTxt>
                                </CardItem>
                              </Card>
                            </Link>
                          );
                        })}
                      </CardFaly>
                    </GlovesFlay>
                  </ContainerGloves>
                </React.Fragment>
              </>
            );
          })}
          {/* <BlockForm /> */}
          {/* <GlovesFlay>
            <CardFaly> */}
          {/* // */}
          {/*  <Card key={item.id}>
                  <CardPhoto>
                    <CardImg src="/image/Productcard/CardProduct1.png" />
                  </CardPhoto>
                  <CardItem>
                    <CardTag>
                      <CarddELETARDEPOIS color={item.Bgcolor}>
                        Sensitex
                      </CarddELETARDEPOIS>

                      <CardTagCategory>Complementar</CardTagCategory>
                    </CardTag>
                    <CardTxt>
                      <Contents>
                        <ContentsTitles>
                          <strong>.</strong>luva de segurança
                        </ContentsTitles>
                        <ContentsTitles>
                          <strong>.</strong>acabamento flocado
                        </ContentsTitles>
                        <ContentsTitles>
                          <strong>.</strong>31 cm
                        </ContentsTitles>
                        <ContentsTitles>
                          <strong>.</strong>
                          {item.Bgcolor}
                        </ContentsTitles>
                      </Contents>
                      <News>
                        <Icons>
                          <BiPlus size={20} />
                        </Icons>
                      </News>
                    </CardTxt>
                  </CardItem>
                </Card> */}

          {/* // */}
          {/* </CardFaly>
          </GlovesFlay> */}

          {/* final Componente produto */}
        </ContainerProduct>
      </SiteLayout>
    </React.Fragment>
  );
}
