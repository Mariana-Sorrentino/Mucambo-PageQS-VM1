import styled from "styled-components";

export const ContainerMaster = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  margin-bottom: -40px;
  min-height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--bgpadrao);
  /* background-color: #00808066; */
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const GlovesTitle = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--azulpadrao);
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const CardPost = styled.div`
  top: -120px;
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: #b3005955; */
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardLeft = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 636px;
  min-height: 490px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #ffff71; */
  @media (max-width: 600px) {
    min-height: 350px;
  }
  @media (max-width: 500px) {
    min-height: 250px;
  }
`;

export const LeftImg = styled.img`
  width: 100%;
  height: 490px;
  background-repeat: no-repeat;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
`;

export const CardRight = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #80ff8066; */
  @media (max-width: 950px) {
    max-width: 100%;
    align-items: center;
  }
`;
export const RightTexts = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  /* background-color: #0080ff; */
  @media (max-width: 950px) {
    max-width: 80%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const RightTitles = styled.div`
  width: 100%;
  max-width: 430px;
  height: auto;
  min-height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: red; */
  /* padding: 20px 0 0 20px;
  text-align: start; */
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const RightTextsTitle = styled.span`
  font-family: "Plus Jakarta Text Regular", sans-serif;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  strong {
    font-weight: 800;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: -0.03em;
    @media (max-width: 1200px) {
      font-size: 38px;
    }
    @media (max-width: 600px) {
      font-size: 36px;
    }
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Descriptions = styled.div`
  width: 100%;
  max-width: 448px;
  height: auto;
  min-height: 334px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #ff808066; */
  @media (max-width: 1000px) {
    padding-right: 10px;
  }
  @media (max-width: 950px) {
    max-width: 80%;
    min-height: auto;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const RightTextsParagraph = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  position: relative;
  margin-bottom: 25px;
  color: var(--colorTexts);
  /* background-color: #ff80ff; */
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const BlockBotton = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 150px;
  top: -80px;
  padding: 0 25px 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const CardBotton = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: #ff9dce; */

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const CardTextBotton = styled.div`
  width: 100%;
  max-width: 441px;
  height: auto;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
  /* background-color: #0080c066; */
  @media (max-width: 1000px) {
    margin-right: 20px;
  }
  @media (max-width: 950px) {
    min-height: 110px;
    max-width: 80%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Year = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #2d7a21;
  /* background-color: #8080ff; */
  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const TextBotton = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: var(--colorTexts);
  /* background-color: #0080c0; */
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
