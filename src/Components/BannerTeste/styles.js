import styled from "styled-components";

export const ContainerBanner = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 460px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${({ background }) => background});

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: inherit;

  /* background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */

  top: 0px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
//BRANDTESTES
export const Lentes = styled.div`
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
  background-color: #f5f5f5d1;
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
//FINAL BRAND

export const OndeEncontrar = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  /* background-color: var(--colorDefault); */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const OndeEncontrarImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const SectorEncontrarTitle = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const TitleLocalition = styled.span`
  /* padding-left: 150px; */
  position: relative;
  font-size: 40px;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    font-size: 30px;
    padding-left: 0px;
  }
`;
export const SeparaPages = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  /* background-color: blue; */
  padding: 0 0 5px 150px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    font-size: 30px;
    padding: 0 0 0 9px;
  }
`;

export const TitlePages = styled.span`
  /* padding-left: 150px; */
  position: relative;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    font-size: 16px;
    padding-left: 0px;
  }
`;
export const SectorEncontrar = styled.div`
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
  /* background-color: var(--colorroxo); */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
