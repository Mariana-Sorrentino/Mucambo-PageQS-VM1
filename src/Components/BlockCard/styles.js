import styled from "styled-components";

//usando container page compnetes
export const TestsSectorPage = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 453px;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 10px 0 10px 0;
  background-color: var(--colorDefault);
  
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const CardTxt = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  /* background-color: #00d2d255; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 25px;
  padding-bottom: 15px;

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0;
  }
`;
export const SectorsTexts = styled.span`
  width: 100%;
  max-width: 100%;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.03em;
  text-align: flex-start;
  color: var(--azulpadrao);

  @media (max-width: 1250px) {
    margin-left: 0;
    font-size: 38px;
  }

  @media (max-width: 950px) {
    padding: 20px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 36px;
    line-height: 45px;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    font-size: 34px;
  }
`;
export const Paragraph = styled.span`
  width: 100%;
  font-family: "Plus Jakarta Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  max-width: 75%;
  /* margin-left: 16%; */
  padding: 10px 0px 20px 0px;
  color: var(--colorBclak);
  font-weight: 20;
  text-align: flex-start;

  @media (max-width: 1250px) {
    margin-left: 0;
    font-size: 16px;
  }

  @media (max-width: 950px) {
    padding: 20px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
  strong {
    color: #000;
  }
`;

export const SectorsCards = styled.div`
  width: 100%;
  max-width: 1200px;
  /* background-color: #00800055; */
  height: auto;
  min-height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 227px;
  height: auto;
  min-height: 220px;
  max-height: 220px;
  /* background-color: #0000a055; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  /* box-shadow: 0px 0px 50px #d2d2d289; */
  /* margin: 5px; */
  /* box-shadow: rgb(144 131 131 / 54%) 0px 0px 50px; */
  
  @media (max-width: 1050px) {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;

export const SectorImgCard = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  height: 70px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #c3c4c4; */
`;

export const CardImages = styled.img`
  width: 65px;
  height: 65px;
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 55px;
  }
`;

export const Hrs = styled.hr`
  width: 100%;
  max-width: 30px;
  height: 4px;
  border: none;
  border-style: none;
  /* background-color: #c3c4c4; */
  margin-top: 30px;
`;

export const CardFullTitle = styled.div`
  font-family: "Plus Jakarta Sans";
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #0080c055; */

  text-align: center;
`;
export const CardTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 32px;
  width: 100%;
  max-width: 100%;
  margin-top: 0px;
  /* margin-left: 5px;
  margin-right: 5px;
  padding: 5px 5px 5px 5px; */
  color: var(--azulpadrao);
  text-align: center;

  @media (max-width: 1050px) {
    font-size: 15px;
    margin-top: 0px;
    margin-left: 2px;
    margin-right: 2px;
    padding: 1px;
  }
`;

export const CardParagraph = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  width: 100%;
  max-width: 86%;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 5px 5px 5px;
  color: #2f2f2f;

  @media (max-width: 950px) {
    font-size: 13px;
    margin-top: 0px;
    margin-left: 2px;
    margin-right: 2px;

    padding: 1px;
  }
`;
