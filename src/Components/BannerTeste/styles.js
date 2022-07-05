import styled from "styled-components";

export const ContainerBanner = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 0px;
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
