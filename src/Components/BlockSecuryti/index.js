import React from "react";
import { ComponentPage } from "src/styles/PadaoPage";
import {
  TestsSectorPage,
  CardTxt,
  SectorsTexts,
  Paragraph,
  SectorsCards,
  Card,
  CardImages,
  Hrs,
  CardTitle,
  CardParagraph,
} from "./styles";

export default function BlockSecuryti() {
  return (
    <React.Fragment>
      <TestsSectorPage background="/image/Card/BgSecurity.png">
        {/* <CardTxt>
          <SectorsTexts>Reconhecida pelos profissionais</SectorsTexts>
          <Paragraph>
            A <strong>Mucambo</strong> é reconhecida pelos profissionais da área
            da saúde como a <strong>luva de melhor sensibilidade tátil</strong>{" "}
            e de <strong>melhor qualidade</strong> do mercado.
          </Paragraph>
        </CardTxt> */}
        <ComponentPage>
          <SectorsCards>
            <Card>
              <CardImages src="/image/Card/lider.svg" />

              <CardTitle>Líder em produção</CardTitle>
              <CardParagraph>
                Atualmente com 8 centros de produção de luvas espalhadas por
                vários países.
              </CardParagraph>
            </Card>
            <Card>
              <CardImages src="/image/Card/experience.svg" />

              <CardTitle>Experiência</CardTitle>
              <CardParagraph>
                Primeira empresa brasileira de luvas a conquistar a certificação
                ISO 9000.
              </CardParagraph>
            </Card>
            <Card>
              <CardImages src="/image/Card/Desenvolvimento.svg" />

              <CardTitle>Desenvolvimento</CardTitle>
              <CardParagraph>
                3 centros de pesquisa e desenvolvimento e aperfeiçoamento de
                produtos.
              </CardParagraph>
            </Card>
            <Card>
              <CardImages src="/image/Card/Protect.svg" />

              <CardTitle>Proteção</CardTitle>
              <CardParagraph>
                A luva de melhor sensibilidade tátil e de melhor qualidade do
                mercado.
              </CardParagraph>
            </Card>
          </SectorsCards>
        </ComponentPage>
      </TestsSectorPage>
    </React.Fragment>
  );
}
