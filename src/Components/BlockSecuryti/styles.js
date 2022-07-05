import styled from "styled-components";

//usando container page compnetes
export const TestsSectorPage = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 370px;
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
  }
`;
export const CardTxt = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 120px;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
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
  max-width: 70%;
  margin-left: 20%;
  font-size: 35px;
  color: var(--azulpadrao);
  font-weight: 500;
  text-align: flex-start;
  @media (max-width: 1050px) {
    margin-left: 0;
    padding: 20px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 22px;
  }
`;
export const Paragraph = styled.span`
  width: 100%;
  font-size: 18px;
  max-width: 70%;
  margin-left: 20%;
  padding: 10px 0px 20px 0px;
  color: var(--colorBclak);
  font-weight: 20;
  text-align: flex-start;
  @media (max-width: 1050px) {
    margin-left: 0;
    padding: 0;
    width: 100%;
    max-width: 90%;
    flex-wrap: wrap;
    font-size: 15px;
  }
  strong {
    color: #000;
  }
`;
export const SectorsCards = styled.div`
  width: 100%;
  max-width: 1200px;
  /* background-color: red; */
  height: auto;
  min-height: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  min-height: 300px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
  /* box-shadow: 0px 0px 50px #d2d2d289; */
  margin: 5px;
  /* box-shadow: rgb(144 131 131 / 54%) 0px 0px 50px; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 250px;
    height: auto;
    min-height: 190px;
    flex-wrap: wrap;

    margin-top: 10px;
  }
`;
export const CardImages = styled.img`
  width: 100%;
  max-width: 70px;
  margin-top: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 73px;
    height: 50px;
  }
`;

export const Hrs = styled.hr`
  width: 100%;
  max-width: 30px;
  height: 4px;
  border: none;
  border-style: none;
  background-color: #c3c4c4;
  margin-top: 30px;
`;

export const CardTitle = styled.span`
  width: 100%;
  max-width: 80%;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;

  padding: 5px 5px 5px 5px;
  font-size: 15px;
  font-weight: 700;
  color: var(--azulpadrao);
  text-align: center;

  @media (max-width: 950px) {
    font-size: 12px;
    margin-top: 10px;
    margin-left: 2px;
    margin-right: 2px;

    padding: 1px;
  }
`;

export const CardParagraph = styled.span`
  width: 100%;
  max-width: 80%;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;

  padding: 5px 5px 5px 5px;
  font-size: 15px;
  font-weight: 400;
  color: #2f2f2f;
  text-align: center;

  @media (max-width: 1050px) {
    font-size: 12px;
    margin-top: 0px;
    margin-left: 2px;
    margin-right: 2px;

    padding: 1px;
  }
`;
