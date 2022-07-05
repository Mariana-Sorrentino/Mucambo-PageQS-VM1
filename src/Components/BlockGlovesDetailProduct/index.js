import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { BiPlus } from "react-icons/bi";
import API from "src/services/api";
import { toast } from "react-toastify";

export default function BlockGlovesDetailProduct({ relateds, line }) {
  const ItemCard = ({ data }) => {
    return (
      <Link
        href={`/produtos/${data.category.group.url}/${data.url}`}
        key={`prod-Mumcabo-${data.id}`}
      >
        <Card>
          <CardPhoto>
            <CardImg src={data.image} />
          </CardPhoto>
          <CardItem>
            <CardTag>
              <CardTagTitleItem color={data.color}>
                {data.name}
              </CardTagTitleItem>
              <CardTagCategory>{data.line.name}</CardTagCategory>
            </CardTag>
            <CardTxt>
              <Contents>
                {data.emphases &&
                  data.emphases.map((itm) => {
                    return (
                      <ContentsTitles
                        key={`ItemCard-${data.id}-Emphase-${itm.id}`}
                      >
                        <strong>.</strong>
                        {itm.title}
                      </ContentsTitles>
                    );
                  })}
              </Contents>
              <News>
                <Link href={`/produtos/${data.category.group.url}/${data.url}`}>
                  <Icons>
                    <BiPlus size={20} />
                  </Icons>
                </Link>
              </News>
            </CardTxt>
          </CardItem>
        </Card>
      </Link>
    );
  };

  return (
    <ContainerGloves>
      <React.Fragment>
        <GlovesTitle>
          <TitleBlock>
            Veja também nossa <strong>{line}</strong>
          </TitleBlock>
        </GlovesTitle>
        <GlovesFlay>
          <CardFaly>
            {relateds.map(function (item) {
              return <ItemCard key={`itemCard-${item.id}`} data={item} />;
            })}
          </CardFaly>
          <NavigationCard>
            <Link href={`/produtos/${relateds[0].category.group.url}`}>
              <BtnCard>Ver todas</BtnCard>
            </Link>
          </NavigationCard>
        </GlovesFlay>
      </React.Fragment>
    </ContainerGloves>
  );
}
