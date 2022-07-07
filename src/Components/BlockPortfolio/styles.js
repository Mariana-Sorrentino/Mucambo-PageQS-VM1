import styled from "styled-components";

export const ContainerPortfolio = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 410px;
  padding: 0 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--bgpadrao);
  /* background-color: #ffff8077; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const BlockBase = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #01416655; */
  @media (max-width: 950px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export const CardLeft = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  min-height: 410px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #ffaaaa55; */
  @media (max-width: 950px) {
    width: 100%;
    min-height: auto;
    min-width: 100%;
    align-items: center;
  }
`;

export const CardRight = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  min-height: 410px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #b3005955; */
  @media (max-width: 950px) {
    width: 100%;
    min-width: 100%;
    min-height: auto;
    align-items: center;
  }
`;

export const BlockTitlePortfolio = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 447px;
  min-height: 224px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: #ff9f9f; */
  @media (max-width: 950px) {
    max-width: 517px;
    min-height: 170px;
  }
  @media (max-width: 950px) {
    min-height: 150px;
  }
  @media (max-width: 430px) {
    min-height: 200px;
  }
  @media (max-width: 340px) {
    min-height: 230px;
  }
`;

export const TitlePortfolio = styled.span`
  height: auto;
  color: var(--colorFooter);
  position: relative;
  z-index: 10;
  text-align: start;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  width: 100%;
  letter-spacing: -0.03em;
  /* background-color: #ff80c0; */
  @media (max-width: 950px) {
    font-size: 35px;
  }
  @media (max-width: 460px) {
    font-size: 30px;
    line-height: 42px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 42px;
  }
  :after {
    content: "";
    width: 96px;
    max-width: 93px;
    margin-top: 70px;
    height: 4px;
    left: 0px;
    position: absolute;
    background-color: var(--colorFooter);
  }
`;

export const BlockInfoPortfolio = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 512px;
  min-height: 75px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: #00808055; */
  @media (max-width: 380px) {
    min-height: 110px;
  }
`;

export const InfoPortfolio = styled.span`
  height: auto;
  color: var(--colorTexts);
  position: relative;
  z-index: 10;
  text-align: start;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  /* background-color: #ff80c0; */
  @media (max-width: 950px) {
    font-size: 15px;
  }
  @media (max-width: 460px) {
    font-size: 14px;
  }
`;

export const BlockIcons = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 532px;
  min-height: 129px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  /* background-color: #8080c055; */
  @media (max-width: 510px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0px;
    min-height: auto;
  }
  @media (max-width: 280px) {
    justify-content: space-between;
  }
`;

export const CardIcons = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 110px;
  min-height: 129px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  /* background-color: #c2565555; */
  @media (max-width: 510px) {
    margin-right: 50px;
    margin-bottom: 20px;
  }
  @media (max-width: 460px) {
    margin-right: 40px;
  }
  @media (max-width: 360px) {
    margin-right: 10px;
  }
  @media (max-width: 280px) {
    margin-right: 5px;
  }
`;

export const CartItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 110px;
  height: auto;
  min-height: 66px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  /* background-color: #b7ffb766; */
  @media (max-width: 520px) {
  }
`;

export const CartItemPhoto = styled.img`
  position: relative;
  width: 100%;
  max-width: 59px;
  height: auto;
  max-height: 59px;
  @media (max-width: 950px) {
  }
`;
export const CartItemTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--colorTxtNav);
  text-align: center;
  @media (max-width: 950px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
