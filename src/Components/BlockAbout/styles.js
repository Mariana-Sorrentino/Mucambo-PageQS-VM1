import styled from "styled-components";

export const ContainerAbout = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 480px;
  padding: 0 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--bgpadrao);
  /* background-color: #ffff8033; */

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const BlockBase = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-height: 420px; 
  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #01416655; */

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const CardRow = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;  
  /* background-color: #41665555; */

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
  }
`;

export const CardLeft = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50%;
  padding-right: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #ffaaaa55; */

  @media (max-width: 950px) {
    max-width: 80%;
    padding-right: 0px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
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
  /* background-color: #b3005955; */

  @media (max-width: 950px) {
    max-width: 80%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const BlockText = styled.div`
  position: relative;
  width: 100%;
  max-width: 544px;
  height: auto;
  min-height: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
  /* background-color: #00808055; */

  @media (max-width: 950px) {
    min-height: 100px;
    margin-bottom: 20px;
  }
`;

export const Paragraph = styled.span`
  height: auto;
  color: var(--colorTexts);
  position: relative;
  z-index: 10;
  text-align: start;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* background-color: #ff80c0; */

  @media (max-width: 950px) {
    font-size: 15px;   
  }

  @media (max-width: 460px) {
    font-size: 14px;   
  }
`;

export const BlockStrong = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 542px;
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* background-color: #ff9f9f; */

  @media (max-width: 950px) {
    min-height: 210px;
    top: -15px;
  }

  @media (max-width: 662px) {
    min-height: 180px;
    top: 0px;
  }

  @media (max-width: 390px) {
    min-height: 200px;
  }
  
  @media (max-width: 282px) {
    min-height: 220px;
  }
`;

export const BlockStrongTwo = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 501px;
  min-height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* background-color: #ff9f9f; */

  @media (max-width: 950px) {
    align-items: center;
    min-height: 130px;
    margin-bottom: 10px;
  }
`;

export const TextStrong = styled.span`
  height: auto;
  color: var(--azulpadrao);
  position: relative;
  z-index: 10;
  text-align: start;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.03em;
  /* background-color: #ff80c0; */

  @media (max-width: 950px) {
    font-size: 35px;
  }

  @media (max-width: 665px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media (max-width: 610px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media (max-width: 560px) {
    font-size: 28px;
    line-height: 38px;
  }

  @media (max-width: 460px) {
    font-size: 26px;
    line-height: 36px;
  }

  @media (max-width: 362px) {
    font-size: 24px;
    line-height: 34px;
  }

  :after {
    content: "";
    width: 96px;
    max-width: 93px;
    margin-top: 70px;
    height: 4px;
    left: 0px;
    position: absolute;
    background-color: var(--azulpadrao);

    @media (max-width: 415px) {
      margin-top: 60px;
  }

  @media (max-width: 390px) {
      margin-top: 55px;
  }

  @media (max-width: 362px) {
      margin-top: 50px;
  }
  }
`;

export const CardImgAbout = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 545px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  /* background-color: #ffff71; */

  @media (max-width: 950px) {
    max-width: 100%;
    justify-content: center;
    top: 10px;
  }
`;

export const ImgAbout = styled.img`
  width: 100%;
  max-width: 545px;
  height: 328px;
  background-repeat: no-repeat;
  object-fit: cover;

  @media (max-width: 450px) {
    height: 230px;
  }

  @media (max-width: 360px) {
    height: 190px;
  }
`;
