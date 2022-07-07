import styled from "styled-components";

export const ContainerBrandcumb = styled.div`
  position: relative;
  z-index: 99999;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--colorCategory);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const List = styled.div`
  position: relative;
  left: 290px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  @media (max-width: 950px) {
    display: flex;
    flex-wrap: wrap;
    left: 10px;
  }
`;
export const Title = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  /* padding: 0px 19px 0 16px; */
  padding: 0 10px 0 4px;
  font-size: 14px;

  color: var(--colorTxtNav);

  @media (max-width: 950px) {
    font-size: 14px;
  }
`;
export const TitleStrong = styled.strong`
  font-size: 14px;
  padding: 0 0 0 1px;
  color: var(--colorBclak);

  @media (max-width: 950px) {
    font-size: 14px;
  }
`;
