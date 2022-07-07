import React from "react";
import {
  ContainerPortfolio,
  BlockBase,
  CardLeft,
  CardRight,
  BlockTitlePortfolio,
  TitlePortfolio,
  BlockInfoPortfolio,
  InfoPortfolio,
  CardIcons,
  BlockIcons,
  CartItem,
  CartItemPhoto,
  CartItemTitle,
} from "./styles";

export default function BlockPortfolioComplet() {
  return (
    <ContainerPortfolio>
      <BlockBase>
        <CardLeft>
          <BlockTitlePortfolio>
            <TitlePortfolio>
              <strong>Portfólio completo, </strong>
              com mais de 100 marcas no mundo todo.
            </TitlePortfolio>
          </BlockTitlePortfolio>
        </CardLeft>

        <CardRight>
          <BlockInfoPortfolio>
            <InfoPortfolio>
              Hoje, as marcas que fazem parte da Newell Brands estão
              <strong> organizadas em 8 unidades de negócio.</strong>
            </InfoPortfolio>
          </BlockInfoPortfolio>

          {/* CART ICONE UM */}
          <BlockIcons>
            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/Iconkitchen.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>
                  Aparelhos e utensílios para cozinha
                </CartItemTitle>
              </CartItem>
            </CardIcons>

            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/IconComerciais.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>Soluções comerciais</CartItemTitle>
              </CartItem>
            </CardIcons>

            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/Iconpapelaria.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>Papelaria</CartItemTitle>
              </CartItem>
            </CardIcons>

            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/Iconbebes.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>Produtos para bebês</CartItemTitle>
              </CartItem>
            </CardIcons>
          </BlockIcons>

          {/* CART ICONE DOIS */}
          <BlockIcons>
            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/IconCasaConectada.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>Casa conectada e segurança</CartItemTitle>
              </CartItem>
            </CardIcons>

            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/IconPerfume.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>Fragrâncias para a casa</CartItemTitle>
              </CartItem>
            </CardIcons>

            <CardIcons>
              <CartItem>
                <CartItemPhoto src="/image/Post/Iconplayground.svg" />
              </CartItem>

              <CartItem>
                <CartItemTitle>Recreação ao ar livre</CartItemTitle>
              </CartItem>
            </CardIcons>

            <CardIcons></CardIcons>
          </BlockIcons>
        </CardRight>
      </BlockBase>
    </ContainerPortfolio>
  );
}
