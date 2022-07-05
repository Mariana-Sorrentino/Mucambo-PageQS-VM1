import styled from "styled-components";

export const ContainerMaster = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 390px;
  padding: 0 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  background-color: var(--bgpadrao);
  /* background-color: #ffff8077; */

  @media (max-width: 950px) {
    min-height:auto;
    padding-top: 40px;
  }

  @media (max-width: 500px) {
    min-height: auto;
    padding-top: 0px;
  }

  @media (max-width: 450px) {
    margin-bottom: -30px;
  }

  @media (max-width: 365px) {
    margin-bottom: -50px;
  }
`;

export const CardPost = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 328px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* background-color: #80004066; */

  @media (max-width: 950px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CardLeft = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 550px;
  min-height: 328px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  /* background-color: #ffff95; */

  @media (max-width: 950px) {
    justify-content: center;
    margin-bottom: 25px;
  }

  @media (max-width: 420px) {
    margin-top: -30px;
  }

  @media (max-width: 330px) {
    margin-top: -50px;
  }
`;

export const LeftImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardRight = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 620px;
  min-height: 328px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: #c1006155; */

  @media (max-width: 950px) {
    padding-left: 0px;
    max-width: 80%;
    min-height: auto;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }

  @media (max-width: 450px) {
  bottom: 30px;
  }

  @media (max-width: 365px) {
  bottom: 50px;
  }
`;

export const RightTexts = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 500px;
  /* background-color: #00aeae33; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  text-align: start;

  @media (max-width: 950px) {
    justify-content: flex-start;
  }
`;

export const RightTitles = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  /* background-color: #64b1ff; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  @media (min-width: 1500px) {
    flex-wrap: wrap;
  }
`;

export const RightTextsTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 42px;
  /* identical to box height, or 105% */
  letter-spacing: -0.03em;
  color: #238ec2;

  /* background-color: blue; */
  :after {
    content: "";
    width: 96px;
    max-width: 93px;
    margin-top: 60px;
    height: 3px;
    left: 1px;
    position: absolute;
    background-color: #238ec2;
    
  }

  @media (max-width: 1260px) {
    font-size: 38px;
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: 950px) {
    font-size: 35px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const RightTextsParagraph = styled.p`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  max-width: 90%;
  color: var(--colorBclak);
  /* background-color: #ff9dce; */
  margin-bottom: -2px;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 1120px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
