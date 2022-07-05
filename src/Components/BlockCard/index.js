import React from "react";

import {
  TestsSectorPage,
  CardTxt,
  SectorsTexts,
  Paragraph,
  SectorsCards,
  Card,
  SectorImgCard,
  CardImages,
  Hrs,
  CardFullTitle,
  CardTitle,
  CardParagraph,
} from "./styles";

export default function BlockCard() {
  return (
    <React.Fragment>
      <TestsSectorPage background="/image/Card/BgSecurity.png">
        <CardTxt>
          <SectorsTexts>Reconhecida pelos profissionais</SectorsTexts>
          <Paragraph>
            A <strong>Mucambo</strong> é reconhecida pelos profissionais da área
            da saúde como a <strong>luva de melhor sensibilidade tátil</strong>{" "}
            e de <strong>melhor qualidade</strong> do mercado.
          </Paragraph>
        </CardTxt>
        <SectorsCards>
          <Card>
            <SectorImgCard>
              <CardImages src="/image/Card/lider.svg" />
            </SectorImgCard>

            <CardFullTitle>
              <CardTitle>Líder em produção</CardTitle>
            </CardFullTitle>

            <CardParagraph>
              Atualmente com 8 centros de produção de luvas espalhadas por
              vários países.
            </CardParagraph>
          </Card>
          <Card>
            <SectorImgCard>
              <CardImages src="/image/Card/experience.svg" />
            </SectorImgCard>
            <CardFullTitle>
              <CardTitle>Experiência</CardTitle>
            </CardFullTitle>
            <CardParagraph>
              Primeira empresa brasileira de luvas a conquistar a certificação
              ISO 9000.
            </CardParagraph>
          </Card>
          <Card>
            <SectorImgCard>
              <CardImages src="/image/Card/Desenvolvimento.svg" />
            </SectorImgCard>
            <CardFullTitle>
              <CardTitle>Desenvolvimento</CardTitle>
            </CardFullTitle>
            <CardParagraph>
              3 centros de pesquisa e desenvolvimento e aperfeiçoamento de
              produtos.
            </CardParagraph>
          </Card>
          <Card>
            <SectorImgCard>
              <CardImages src="/image/Card/Protect.svg" />
            </SectorImgCard>
            <CardFullTitle>
              <CardTitle>Proteção</CardTitle>
            </CardFullTitle>
            <CardParagraph>
              A luva de melhor sensibilidade tátil e de melhor qualidade do
              mercado.
            </CardParagraph>
          </Card>
        </SectorsCards>
      </TestsSectorPage>
    </React.Fragment>
  );
}
