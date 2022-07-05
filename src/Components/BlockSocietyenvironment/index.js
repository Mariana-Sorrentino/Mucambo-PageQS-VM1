import React from "react";
import {
  ContainerSociety,
  Society,
  SocietyTitle,
  TitleSociety,
  TitleSocietyStrong,
  SocietyCards,
  Cards,
  CardTag,
  CardTagTitleItem,
  Icons,
  Iconphoto,
  Title,
  NavigationCard,
  BtnCard,
} from "./styles";
import { BiPlus } from "react-icons/bi";
export default function BlockSociety() {
  return (
    <ContainerSociety background="/image/enveroment/enveroment.png">
      <Society>
        <SocietyTitle>
          <TitleSociety>Sociedade & </TitleSociety>
          <TitleSocietyStrong color="var(--colortextverde)">
            Meio Ambiente
          </TitleSocietyStrong>
        </SocietyTitle>
        <SocietyCards>
          <Cards>
            <CardTag>
              <Icons>
                <Iconphoto src="/image/enveroment/society1.svg" />
              </Icons>
            </CardTag>
            <CardTagTitleItem>
              <Title>Proteção a sustentabilidade e biodiversidade</Title>
            </CardTagTitleItem>
          </Cards>
          <Cards>
            <CardTag>
              <Icons>
                <Iconphoto src="/image/enveroment/society02.svg" />
              </Icons>
            </CardTag>
            <CardTagTitleItem>
              <Title>Direitos do uso da terra</Title>
            </CardTagTitleItem>
          </Cards>
          <Cards>
            <CardTag>
              <Icons>
                <Iconphoto src="/image/enveroment/society01.svg" />
              </Icons>
            </CardTag>
            <CardTagTitleItem>
              <Title>Diálogo e desenvolvimento socioambiental</Title>
            </CardTagTitleItem>
          </Cards>
          <Cards>
            <CardTag>
              <Icons>
                <Iconphoto src="/image/enveroment/society04.svg" />
              </Icons>
            </CardTag>
            <CardTagTitleItem>
              <Title>Melhoria continua</Title>
            </CardTagTitleItem>
          </Cards>
        </SocietyCards>
      </Society>
      <NavigationCard>
        <BtnCard>Saiba mais</BtnCard>
      </NavigationCard>
    </ContainerSociety>
  );
}
