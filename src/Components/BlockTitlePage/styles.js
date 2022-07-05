import styled from "styled-components";

export const ContainerTitlePages = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 110px;
  padding: 0 15px 0 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: var(--bgpadrao);
  /* background-color: #ffff80; */

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const ViewTitle = styled.div`
  width: 100%;
  height: auto;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 950px) {
    flex-wrap: wrap;
    max-width: 80%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const TitlePages = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 52px;
  color: var(--azulpadrao);
  letter-spacing: -0.03em;

  @media (max-width: 950px) {
    font-size: 35px;
  }
`;
