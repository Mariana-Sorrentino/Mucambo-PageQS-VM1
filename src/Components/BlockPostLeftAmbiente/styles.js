import styled from "styled-components";

export const ContainerMaster = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  /* min-height: 800px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const CardPost = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
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
  /* max-width: 50%; */
  /* min-height: 600px; */
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: red; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    flex-wrap: wrap;
  }
`;
export const LeftImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url(${({ background }) => background}); */
`;

export const CardRight = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  /* min-height: 600px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: purple; */
  padding-left: 20px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: auto;
    padding-left: 10px;
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
  /* padding: 20px 0 0 20px; */
  text-align: start;
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
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
  /* padding: 20px 0 0 20px;
  text-align: start; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const RightTextsTitle = styled.span`
  font-family: "Plus Jakarta Text Regular", sans-serif;
  font-size: 40px;
  font-weight: normal;
  color: var(--colortextverde);
  margin-bottom: 2px;
  max-width: 40%;
  line-height: 40px;
  /* background-color: blue; */
  ::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 120px;
    margin-top: 50px;
    left: 20px;
    background-color: var(--azulpadrao);
  }
  @media (max-width: 950px) {
    font-size: 25px;
    width: 100%;
    max-width: 90%;
    flex-wrap: wrap;
  }

  @media (min-width: 1500px) {
    width: 100%;
    max-width: 50%;
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const RightTextsParagraph = styled.p`
  width: 100%;
  max-width: 80%;
  font-size: 16px;
  font-weight: normal;
  /* background-color: #333; */
  color: var(--colorBclak);
  padding-top: 15px;
  @media (min-width: 1500px) {
    width: 100%;
    max-width: 90%;
    flex-wrap: wrap;
    /* padding: 10px 0 0 10px; */
  }
`;
