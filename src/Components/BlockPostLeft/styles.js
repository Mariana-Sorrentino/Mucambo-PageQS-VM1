import styled from "styled-components";

export const ContainerMaster = styled.div`
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
  background-color: var(--bgpadrao);
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
  background-color: var(--azulpadrao);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
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
  padding: 7px 0px 0px 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :before {
    content: "";
    width: 100%;
    max-width: 68%;
    height: 2px;
    margin-left: 25%;
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
export const CardPost = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardLeft = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: yellow; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: auto;
  }
`;
export const LeftImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardRight = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: purple; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: auto;
  }
`;
export const RightTexts = styled.div`
  width: 100%;
  max-width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 0 0 20px;
  text-align: start;
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 80%;
    flex-wrap: wrap;
    padding: 0;
  }
`;
export const RightTextsTitle = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: var(--colorverde);
  margin-bottom: 30px;
  /* background-color: blue; */

  @media (max-width: 1260px) {
    font-size: 30px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const RightTextsParagraph = styled.p`
  width: 100%;
  max-width: 80%;
  font-size: 16px;
  font-weight: 800;
  /* background-color: purple; */
  color: var(--colorBclak);
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 10px 0 0 10px;
  }
`;
