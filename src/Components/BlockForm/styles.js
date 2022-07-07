import styled from "styled-components";

export const ContainerForm = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f4;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const FormSector = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
  height: auto;
  min-height: 450px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 90%;
    flex-wrap: wrap;
  }
`;
export const SectorLeft = styled.div`
  width: 100%;
  max-width: 50%;
  /* background-color: purple; */
  height: auto;
  min-height: 450px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const GroupTitle = styled.div`
  width: 100%;
  max-width: 100%;
  /* background-color: var(--colorDefault); */
  height: auto;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const Description = styled.span`
  color: var(--azulpadrao);

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Paragraph = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: var(--colorTxtNav);

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const GroupForms = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  /* background-color: purple; */
  height: auto;
  min-height: 250px;
  /* background-color: #ccc; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const InpForm = styled.input`
  padding: 0 0 0 10px;
  font-size: 14px;
  color: var(--colorTxtNav);
  width: 100%;
  max-width: 550px;
  height: 50px;
  color: #ccc;
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const InpFormMessage = styled.input`
  padding: 0 0 0 10px;
  font-size: 14px;
  color: var(--colorTxtNav);
  border-radius: 5px;
  width: 100%;
  max-width: 550px;
  height: 100px;
  min-height: 100px;
  color: #ccc;
  background-color: #ffffff;
  margin-top: 10px;
  border: none;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const GroupAccet = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  max-width: 550px;
  /* background-color: purple; */
  height: auto;
  margin-top: 10px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
  }
`;
export const DescriptionAccet = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #676767;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    padding-right: 5px;
  }
`;
export const CheckBox = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  outline: none;
  resize: none;
  cursor: pointer;
  transition: transform 0.5s;

  :checked {
    transform: rotateY(360deg);
  }
  :before {
    transform: rotateY(360deg);
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -1;
    left: -1;
    background-color: #fff;
    border: solid 1px #ccc;
    border-radius: 2px;
  }
  :checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: -1;
    left: -1;
    background-color: var(--azulpadrao);
    border: solid 1px var(--azulpadrao);
  }
  :checked:after {
    content: "";
    display: block;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    left: 7px;
  }

  @media (max-width: 950px) {
    width: 100%;
    max-width: 20px;
  }
`;
export const NavigationBtn = styled.div`
  width: 100%;
  max-width: 550px;
  /* background-color: blue; */
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    /* background-color: red; */
    justify-content: center;
    margin-top: 30px;
  }
`;
export const BtaAccet = styled.button`
  width: 100%;
  max-width: 200px;
  height: 48px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorDefault);
  background-color: var(--azulpadrao);
  font-weight: 400;
  :hover {
    background-color: var(--colorAzulclaro);

    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    left: 0;
  }
`;
export const SectorRight = styled.div`
  width: 100%;
  max-width: 50%;
  /* background-color: blue; */
  height: auto;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    min-height: 300px;
  }
`;

export const FormImg = styled.div`
  width: 100%;
  max-width: 80%;
  /* background-color: yellow; */
  height: auto;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgGroup = styled.img`
  width: 100%;
  max-width: 530px;
  height: auto;
  min-height: 270px;
  max-height: 270px;
`;
// export const FormSector = styled.div``;
