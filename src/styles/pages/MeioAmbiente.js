import styled from "styled-components";

export const ContainerMeioAmbiente = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 800px;
  margin-top: 113px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--colorDefault);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

{
  /* passar para componente se precisar */
}
export const TitlePage = styled.div`
  background-color: ${({ color }) => color};
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 130px;
  margin: 30px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  /* border: solid 1px var(--azulpadrao); */
  border-radius: 10px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 95%;
    flex-wrap: wrap;
  }
`;

export const TitleInit = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* background-color: var(--azulpadrao); */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const InitTitleMB = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  padding-left: 2px;
  max-width: 460px;
  /* background-color: red; */
  color: ${({ colorTitle }) => colorTitle};
  /* color: var(--colortextverde); */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding-left: 10px;
  }
`;
export const TitleDescriptionMB = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 40%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* background-color: #ccc; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const NavigationBtn = styled.div`
  width: 100%;
  max-width: 550px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
    padding: 20px;
  }
`;
export const BtaAccet = styled.a`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  width: 100%;
  max-width: 200px;
  height: 64px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorDefault);
  background-color: var(--azulpadrao);

  :hover {
    background-color: var(--colorAzulclaro);

    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    left: 0;
  }
`;

export const Paragraph = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 10px;
  color: var(--colorTexts);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const Separations = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  height: 70px;
  background-color: var(--azulpadrao);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const BannerMeioAmbiente = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 30px 0 5px 0;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 95%;
    flex-wrap: wrap;
  }
`;

// export const BannerA = styled.img`
//   width: 100%;
//   height: auto;
//   max-width: 1750px;
//   min-height: 100%;
//   display: flex;
//   background-size: cover;
//   background-repeat: no-repeat;
//   @media (max-width: 950px) {
//     width: 100%;
//     max-width: 100%;
//     flex-wrap: wrap;
//   }
// `;

{
  /* passar para componente se precisar */
}
