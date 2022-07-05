import styled, { css } from "styled-components";

export const ContainerGloves = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fafbff;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const GlovesProduct = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorDefault);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const TitleProduct = styled.span`
  height: auto;
  color: var(--azulpadrao);
  position: relative;
  text-align: center;
  z-index: 10;
  text-align: start;
  font-size: 40px;
  width: 100%;
  max-width: 1200px;
  font-weight: 700;
  letter-spacing: 4px;
  /* background-color: black; */
  padding: 7px 0px 0px 60px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const GlovesTitle = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  /* background-color: var(--colorTxtNav);

  background-color: var(--azulpadrao); */

  /* ${({ BgColor }) => (BgColor == true ? activeBg : inactiveBg)} */
  margin-top: 50px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const activeBg = css`
  background-color: var(--azulpadrao);
`;

const inactiveBg = css`
  background-color: var(--colorTxtNav);
`;

export const TitleBlock = styled.span`
  height: auto;
  color: var(--colorDefault);
  position: relative;
  text-align: center;
  z-index: 10;
  text-align: start;
  font-size: 32px;
  width: 100%;
  max-width: 1200px;
  font-weight: 500;
  letter-spacing: 4px;
  /* background-color: black; */
  padding: 7px 0px 0px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :before {
    content: "";
    width: 100%;
    max-width: 780px;
    height: 2px;
    margin-left: 35%;
    /* left: 0; */
    position: absolute;
    background-color: var(--colorDefault);
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0;
    text-align: center;
    justify-content: center;
    font-size: 25px;
  }
  @media (max-width: 1100px) {
    :before {
      content: "";
      width: 100%;
      max-width: 20%;
      top: 70px;
      margin-left: 0;
    }
  }
`;
export const GlovesFlay = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafbff;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const CardFaly = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  margin-top: -60px;
  z-index: 1;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 350px;
  min-height: 530px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--colorDefault);
  //margin: 0 0 0 40px;
  margin: 0 0 20px 0;
  /* margin-left: 10px; */
  cursor: pointer;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 300px;

    flex-wrap: wrap;
    margin: 10px;
  }
`;
export const CardPhoto = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 350px;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardItem = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 350px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardTag = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--azulpadrao);
  margin: 10px 0 0px 0px;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardTagTitleItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 55%;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4d4d4d;
  font-size: 16px;
  color: var(--colorDefault);

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CarddELETARDEPOIS = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 55%;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: VAR(--colorVermelhor);
  background-color: ${({ color }) => color};
  font-size: 16px;
  color: var(--colorDefault);

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardTagCategory = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 45%;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  font-size: 16px;
  color: var(--azulpadrao);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardTxt = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorDefault);
  ::after {
    content: "";
    width: 100%;
    max-width: 80px;
    height: 1px;
    margin-top: 200px;
    /* left: 0; */
    position: absolute;
    background-color: var(--colorTxtNav);
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    ::after {
      content: "";

      margin-top: 80px;
    }
  }
`;

export const Contents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 80%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  font-size: 16px;
  color: var(--bgAmarelo);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: 150px;
  }
`;
export const ContentsTitles = styled.span`
  width: 100%;
  max-width: 100%;
  font-size: 16px;
  min-height: 40px;
  font-weight: 400;
  color: var(--colorBclak);

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
  strong {
    color: var(--colorBclak);
    font-size: 25px;
    margin: 0 20px 0 20px;
  }
`;

export const News = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 20%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #ffffff;
  font-size: 16px;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: 50px;
  }
`;
export const Icons = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  font-size: 16px;
  color: var(--azulpadrao);
  bottom: 0;
  :hover {
    background-color: var(--azulpadrao);
    color: var(--colorDefault);
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: 50px;
  }
`;

export const NavigationCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 60px;
  z-index: 1;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const BtnCard = styled.div`
  width: 100%;
  max-width: 200px;
  height: 65px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorDefault);
  background-color: var(--azulpadrao);
  font-weight: 400;
  :hover {
    background-color: #fff;
    color: var(--colorBclak);
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    left: 0;
  }
`;
export const SectorTtilePage = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  /* background-color: #ccc; */
  padding-top: 0px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    /* background-color: red; */
  }
`;

export const TitleCategory = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: var(--azulpadrao);
  @media (max-width: 950px) {
    width: 100%;
    font-size: 30px;
    padding-left: 10px;
  }
`;

export const DescriptionCategory = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  max-width: 62%;
  margin-top: 5px;
  @media (max-width: 950px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 100%;
  }
`;

export const SectorProdutoDeletardepois = styled.span`
  width: 100%;
  max-width: 1750px;
  background-color: red;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  /* background-color: #ccc; */
  padding-top: 50px;
`;
