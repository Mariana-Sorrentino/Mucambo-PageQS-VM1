import styled, { css } from "styled-components";

export const TitlePage = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 100px;
  margin: 30px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  /* ${({ active }) => (active == true ? "display:flex;" : "display:none;")} */
  /* border: solid 1px var(--azulpadrao); */
  border-radius: 10px;

  background-color: ${({ color }) => color};
  ${({ active }) => (active == true ? activeBgSlider : inactiveBgSlider)};

  @media (max-width: 950px) {
    width: 100%;
    max-width: 95%;
    flex-wrap: wrap;
  }
`;

const activeBgSlider = css`
  border: solid 1px var(--azulpadrao);
`;

const inactiveBgSlider = css`
  border: solid 1px transparent;
`;

export const TitleInit = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 40%;
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
export const InitTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */
  padding-left: 2px;
  /* text-transform: capitalize; */
  max-width: 360px;
  /* background-color: red; */

  color: ${({ colorTitle }) => colorTitle};
  /* color: var(--colortextverde); */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 20px;
    padding-left: 10px;
  }
`;
export const TitleDescription = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 60%;

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
export const Paragraph = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 15px;
  color: ${({ colorTitle }) => colorTitle};
  /* color: var(--colorTexts); */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 14px;
  }
`;
