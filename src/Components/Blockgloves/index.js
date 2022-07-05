import React from "react";
import {
  ContainerGloves,
  GlovesProduct,
  TitleProduct,
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
  CardTxt,
  CarddELETARDEPOIS,
  CarddELETARDEPOIS2,
  Contents,
  ContentsTitles,
  News,
  Icons,
  NavigationCard,
  BtnCard,
} from "./styles";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";
export default function Blockglovescompement() {
  return (
    <ContainerGloves>
      <GlovesProduct>
        <TitleProduct>Nossos Produtos</TitleProduct>
      </GlovesProduct>
      <GlovesTitle>
        <TitleBlock>Linha Cirúrgica</TitleBlock>
      </GlovesTitle>
      <GlovesFlay>
        <CardFaly>
          <Link href="/produtos/luvas-cirurgicas-sinteticas/sensitouch">
            <Card>
              <CardPhoto>
                <CardImg src="/image/Productcard/Sensitouch.svg" />
              </CardPhoto>
              <CardItem>
                <CardTag>
                  <CardTagTitleItem>Sensitouch</CardTagTitleItem>
                  <CardTagCategory id="colorA">Sintética</CardTagCategory>
                </CardTag>
                <CardTxt>
                  <Contents>
                    <ContentsTitles>
                      <strong>.</strong>luva sintética
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>látex free
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>anatômica
                    </ContentsTitles>
                  </Contents>
                  <News>
                    <Icons>
                      <BiPlus size={20} />
                    </Icons>
                  </News>
                </CardTxt>
              </CardItem>
            </Card>
          </Link>

          <Link href="/produtos/luvas-cirurgicas/sensitex">
            <Card>
              <CardPhoto>
                <CardImg src="/image/Productcard/Sensitex.svg" />
              </CardPhoto>
              <CardItem>
                <CardTag>
                  <CarddELETARDEPOIS>Sensitex</CarddELETARDEPOIS>
                  <CardTagCategory>Látex Natural</CardTagCategory>
                </CardTag>
                <CardTxt>
                  <Contents>
                    <ContentsTitles>
                      <strong>.</strong>pó bioabsorvível
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>confortável
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>anatômica
                    </ContentsTitles>
                  </Contents>
                  <News>
                    <Icons>
                      <BiPlus size={20} />
                    </Icons>
                  </News>
                </CardTxt>
              </CardItem>
            </Card>
          </Link>
          <Link href="/produtos/luvas-cirurgicas/sensifree">
            <Card>
              <CardPhoto>
                <CardImg src="/image/Productcard/Sensifree.svg" />
              </CardPhoto>
              <CardItem>
                <CardTag>
                  <CarddELETARDEPOIS2>Sensifree</CarddELETARDEPOIS2>
                  <CardTagCategory>Látex</CardTagCategory>
                </CardTag>
                <CardTxt>
                  <Contents>
                    <ContentsTitles>
                      <strong>.</strong>polímero sintético
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>sem pó
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>anatômica
                    </ContentsTitles>
                  </Contents>
                  <News>
                    <Icons>
                      <BiPlus size={20} />
                    </Icons>
                  </News>
                </CardTxt>
              </CardItem>
            </Card>
          </Link>
        </CardFaly>
        <NavigationCard>
          <Link href="/produtos/luvas-cirurgicas-sinteticas">
            <BtnCard>Ver todas</BtnCard>
          </Link>
        </NavigationCard>
      </GlovesFlay>
    </ContainerGloves>
  );
}
