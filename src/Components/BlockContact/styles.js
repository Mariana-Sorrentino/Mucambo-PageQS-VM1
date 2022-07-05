import styled from "styled-components";

export const ContainerMaster = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
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
  max-width: 1120px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  max-width: 600px;
  /* max-width: 50%; */
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  /* background-color: yellow; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: auto;
    align-items: center;
  }
`;
export const LeftImg = styled.img`
  width: 100%;
  max-width: 90%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 60%;
    flex-wrap: wrap;
    min-height: auto;
    padding: 10px;
  }
`;

export const CardRight = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 600px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  max-width: 95%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 0 0 20px;
  text-align: start;
  @media (min-width: 1500px) {
    width: 95%;
    /* max-width: 60%; */
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const RightTitles = styled.div`
  width: 100%;
  max-width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  /* padding: 20px 0 0 20px;
  text-align: start; */
  @media (min-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0;
  }
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0;
  }
  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;
export const ImgTitle = styled.img`
  width: 100%;
  max-width: 100px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 80px;
  }
  @media (min-width: 1500px) {
    max-width: 120px;
  }
`;
export const RightTextsTitle = styled.span`
  font-family: "Plus Jakarta Text Regular", sans-serif;
  font-size: 40px;
  font-weight: normal;
  color: var(--azulpadrao);
  margin-bottom: 5px;
  max-width: 57%;
  line-height: 40px;
  /* background-color: blue; */
  @media (max-width: 950px) {
    font-size: 30px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
  @media (max-width: 1260px) {
    font-size: 30px;
    width: 100%;
    max-width: 70%;
    flex-wrap: wrap;
  }
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 60%;
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const RightTextsParagraph = styled.p`
  width: 100%;
  max-width: 80%;
  font-size: 16px;
  font-weight: normal;
  /* background-color: purple; */
  color: var(--colorBclak);
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    /* padding: 10px 0 0 10px; */
  }
  span {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    color: var(--azulpadrao);
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  h5 {
  }
`;
