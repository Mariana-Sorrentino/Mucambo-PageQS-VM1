import styled from "styled-components";

export const ContainerOndeEncontrar = styled.div`
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
export const OndeEncontrar = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 1750px;
  min-height: 320px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
// export const OndeEncontrarImg = styled.img`
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

export const SectorEncontrarTitle = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const TitleLocalition = styled.span`
  padding-left: 10%;
  position: relative;
  font-size: 40px;
  font-weight: 600;

  z-index: 1;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    font-size: 30px;
  }
`;
export const SectorEncontrar = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 1750px;
  min-height: 600px;
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
