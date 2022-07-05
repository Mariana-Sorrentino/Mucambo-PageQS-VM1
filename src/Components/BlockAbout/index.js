import React from "react";
import { ContainerAbout,
         BlockBase,
         CardRow,
         CardLeft,
         CardRight,
         BlockText,
         Paragraph,
         BlockStrong,
         BlockStrongTwo,
         TextStrong,
         CardImgAbout,
         ImgAbout
} from "./styles";

export default function About() {
  return (
    <ContainerAbout> 
      <BlockBase>
        <CardRow>
          <CardLeft>
            <BlockText>
              <Paragraph>
                Esses acontecimentos trouxeram um reconhecimento
                a nível internacional e ajudaram a fortalecer ainda
                mais a presença da marca no segmento. No entanto,
                uma coisa nunca mudou: o comprometimento da
                empresa com os seus diferentes públicos.
              </Paragraph>
            </BlockText>        
          </CardLeft>

          <CardRight>
            <BlockText>
              <Paragraph>
                Hoje, a Mucambo é sinônimo de tradição e excelência
                e continua a investir em inovação constante para
                conquistar resultados cada vez melhores!
              </Paragraph>
            </BlockText>
          </CardRight>
        </CardRow>

        <CardRow>
          <CardLeft>
          <BlockStrong>
              <TextStrong>
                Por que a Mucambo é<strong> destaque no mercado de 
                luvas de proteção para a área da saúde?</strong>
                </TextStrong>
            </BlockStrong>
          </CardLeft>

          <CardRight>
            <BlockText>
              <Paragraph>
                Primeira empresa brasileira do setor a conquistar
                a certificação ISO 9000.
              </Paragraph>
              <Paragraph>
                Vários anos de experiência, com instalações
                industriais em diferentes países.
                Equipes altamente qualificadas voltadas ao
                desenvolvimento e ao aperfeiçoamento de produtos.
              </Paragraph>
            </BlockText>
          </CardRight>
        </CardRow>

        <CardRow>
          <CardLeft>
          <CardImgAbout>
              <ImgAbout src="/image/Post/negotiation.png" />
          </CardImgAbout> 
          </CardLeft> 

          <CardRight>
            <BlockStrongTwo>
              <TextStrong>
                <strong>Um time comercial de peso</strong>
                </TextStrong>
            </BlockStrongTwo>

            <BlockText>
              <Paragraph>
                Além de prezar pela máxima qualidade em todos os 
                processos, a Mucambo também valoriza o know-how de quem 
                representa a empresa junto ao público consumidor.
              </Paragraph>
              <Paragraph>
              Prova disso é o privilégio de poder contar com uma 
              <strong> equipe comercial especializada e formada por 
                profissionais que, há mais de 30 anos, dedicam suas 
                carreiras ao mercado de luvas</strong> e contribuem com o 
                crescimento da marca.
              </Paragraph>
            </BlockText>
          </CardRight>
        </CardRow>

      </BlockBase>
    </ContainerAbout>
  );
}
