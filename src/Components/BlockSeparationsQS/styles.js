import styled, { css } from "styled-components";

export const ContainerSeparationGreen = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 180px;
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

export const TitlePage = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 100px;
  margin: 40px 0 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-items: center;
  /* ${({ active }) => (active == true ? "display:flex;" : "display:none;")} */
  /* border: solid 1px var(--azulpadrao); */
  border-radius: 10px;
  ${({ active }) => (active == true ? activeBgSlider : inactiveBgSlider)};
  background-color: ${({ color }) => color};
  /* color: var(--colortextverde); */
  @media (max-width: 780px) {
    min-height: 150px;
    padding: 10px 20px 10px 20px;
  }
  @media (max-width: 420px) {
    padding: 20px 20px 20px 20px;
    min-height: 170px;
  }
`;

const activeBgSlider = css`
  border: solid 1px var(--azulpadrao);
`;

const inactiveBgSlider = css`
  border: none;
`;

export const TitleInit = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  /* max-width: 50%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: #0080c0; */
  align-items: center;
  ${({ viewLargura }) =>
    viewLargura == true ? "max-width: 50%;" : "max-width: 608px;"};
  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
    /* height: 60px; */
  }
`;

export const InitTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${({ colorTitle }) => colorTitle};
  @media (max-width: 1050px) {
    text-align: center;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 20px;
    padding-left: 10px;
  }
  @media (max-width: 780px) {
    text-align: center;
    padding-left: 0px;
  }
`;
export const TitleDescription = styled.div`
  position: relative;
  /* background-color: #ccc; */
  width: 100%;
  height: auto;
  max-width: 50%;
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({ viewDisplay }) =>
    viewDisplay == true ? " display: flex;" : " display: none;"};
  @media (max-width: 780px) {
    max-width: 100%;
    padding-bottom: 20px;
  }
  @media (max-width: 680px) {
    max-width: 100%;
    padding-top: 20px;
  }
`;

export const Paragraph = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 10px;
  /* color: var(--colorTexts); */
  color: ${({ colorTitle }) => colorTitle};
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 14px;
  }
  @media (max-width: 780px) {
    text-align: center;
    line-height: 25px;
  }
`;
