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
export default function Blockgloves() {
  return (
    <ContainerGloves>
      {/* <GlovesProduct>
        <TitleProduct>Nossos Produtos</TitleProduct>
      </GlovesProduct> */}
      <GlovesTitle>
        <TitleBlock>Linha Complementar</TitleBlock>
      </GlovesTitle>
      <GlovesFlay>
        <CardFaly>
          <Link href="/produtos/linha-complementar-latex-natural/Pro250">
            <Card>
              <CardPhoto>
                <CardImg src="/image/Productcard/Pro250.svg" />
              </CardPhoto>
              <CardItem>
                <CardTag>
                  <CardTagTitleItem>PRO 250</CardTagTitleItem>
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
                  </Contents>
                  <Link href="/produtos/linha-complementar-latex-natural/Pro250">
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
          <Link href="  /produtos/linha-complementar-latex-natural/Pro230">
            <Card>
              <CardPhoto>
                <CardImg src="/image/Productcard/Pro230.svg" />
              </CardPhoto>
              <CardItem>
                <CardTag>
                  <CardTagTitleItem>PRO 230</CardTagTitleItem>
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
                  </Contents>
                  <Link href="/produtos/linha-complementar-latex-natural/Pro230">
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

          <Link href="/produtos/linha-complementar-latex-natural/Pro137">
            <Card>
              <CardPhoto>
                <CardImg src="/image/Productcard/Pro137.svg" />
              </CardPhoto>
              <CardItem>
                <CardTag>
                  <CardTagTitleItem>PRO 137</CardTagTitleItem>
                  <CardTagCategory>Complementar</CardTagCategory>
                </CardTag>
                <CardTxt>
                  <Contents>
                    <ContentsTitles>
                      <strong>.</strong>luva de segurança
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>acabamento polimerizado
                    </ContentsTitles>
                    <ContentsTitles>
                      <strong>.</strong>30 cm
                    </ContentsTitles>
                  </Contents>
                  <Link href="/produtos/linha-complementar-latex-natural/Pro137">
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
        </CardFaly>
        <NavigationCard>
          <Link href="/produtos/linha-complementar-latex-natural">
            <BtnCard>Ver todas</BtnCard>
          </Link>
        </NavigationCard>
      </GlovesFlay>
    </ContainerGloves>
  );
}
