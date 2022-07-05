import styled from "styled-components";

//usando container page compnetes
export const TestsSectorRevenda = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-position: center;

  margin: 10px 0 10px 0;
  background-color: #fafbff;
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

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
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
  font-family: "Plus Jakarta Sans";
  font-size: 24px;
  line-height: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 1px;
  text-align: flex-start;
  color: var(--colorAzulclaro);
  font-family: "Plus Jakarta Sans";

  /* or 133% */

  text-align: center;
  letter-spacing: -0.02em;

  @media (max-width: 1250px) {
    margin-left: 10%;
  }
  @media (max-width: 950px) {
    padding: 20px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    font-size: 22px;
    margin-left: 1%;
  }
`;
// bloco input buscar select
export const DivSeahchimSelected = styled.div`
  width: 100%;
  max-width: 500px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  @media (max-width: 900px) {
    max-width: 90%;

    height: 50px;
  }
`;
export const CustonSelects = styled.label`
  position: relative;
  display: block;
  max-width: 390px;
  margin: 0 auto;
  border: 0px solid #e4002b;
  background-color: transparent;
  z-index: 10;
  :after {
    border-right: 2px solid;
    border-top: 2px solid;
    color: #000;
    content: "";
    display: inline-block;
    height: 10px;
    position: absolute;
    right: 1.5em;
    top: 10px;
    /* -webkit-transform: rotate(45deg); */
    transform: rotate(135deg);
    width: 10px;
  }
`;
export const DroSeletsF = styled.select`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  border: none;
  outline: none;
  background: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  margin: 0;
  display: block;
  width: 400px;
  max-width: 400px;
  /* padding: 12px 55px 15px 15px; */
  font-size: 18px;
  color: #7f8282;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  line-height: 51px;
  padding-left: 5px;
`;
export const SelectsOptions = styled.option`
  height: 50px !important;
  padding: 12px 55px 15px 15px;
  border: none;
  :focus {
    background-color: red;
  }
  :hover {
    background: red;
  }
`;

export const SectorSwitch = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: var(--bgpadrao);
  height: auto;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
  .switch {
    position: relative;
    width: 315px;
    height: 50px;
    border-radius: 25px;
    /* background-color: blue; */
  }
  .switch input {
    appearance: none;
    width: 315px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    outline: none;
    border: solid 1px #25a2ed;
  }

  .switch input::before,
  .switch input::after {
    z-index: 2;
    position: absolute;
    top: 56%;
    transform: translateY(-50%);
    font-weight: bolder;
  }
  .switch input::before {
    content: "Vendedor";
    left: 50px;
    color: #fff;
  }
  .switch input::after {
    content: "Representante";
    right: 35px;
    color: #fff;
  }
  .switch label {
    z-index: 1;
    position: absolute;
    top: 10px;
    bottom: 4px;
    border-radius: 20px;
    color: #000;
  }
  .switch input {
    transition: 0.25s;
  }
  .switch input:checked::after,
  .switch:input:checked::before {
    color: #fff;
    transition: color 0.5s;
  }
  .switch input:checked + label {
    left: 10px;
    right: 157px;
    background-color: #25a2ed;
    transition: left 0.5s, right 0.4s 0.2s;
    color: red;
  }
  .switch input:not(:checked) {
    background: #fff;
    transition: background 0.4s;
  }
  .switch input:not(:checked)::before {
    color: #fff;
    transition: color 0.5s;
  }
  .switch input:not(:checked)::after {
    color: #fff;
    transition: color 0.5s 0.2s;
  }

  .switch input:not(:checked) + label {
    left: 157px;
    right: 2px;
    background: #25a2ed;
    transition: left 0.4s 0.2s, right 0.5s, background 0.35s;
  }
`;
export const RepresentContainer = styled.div`
  margin-top: 40px;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 300px;
  background-color: #fafbff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Representas = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  position: relative;
  width: 1050px;
  height: auto;
  min-height: 230px;
  max-height: 430px;
  border: 1px solid #1951a0;
  border-radius: 20px;
  color: #000;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 950px) {
    height: auto;
    width: 100%;
    max-width: 95%;
    flex-wrap: wrap;
    max-height: none;
  }
`;

export const StadoTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 0px;
  position: relative;
  width: 1050px;
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  :after {
    content: "";
    position: absolute;
    width: 90px;
    height: 3px;
    top: 60px;
    left: 30px;
    background-color: var(--azulpadrao);
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    /* background-color: red; */
    margin: 0;
  }
`;

export const TitleStates = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  position: relative;
  color: var(--colorAzulclaro);
  padding-left: 20px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    padding-left: 20px;
  }
`;

export const RepresentData = styled.div`
  /* margin-top: 5px;
  margin-bottom: 5px; */
  position: relative;
  width: 100%;
  min-height: 80px;
  height: auto;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    height: auto;
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
  }
`;
export const DataFormName = styled.div`
  /* margin-top: 30px; */
  width: 100%;
  max-width: 300px;
  min-width: 250px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
`;

export const DataFormEmail = styled.div`
  /* margin-top: 30px; */
  width: 100%;
  max-width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
`;
export const DataForm = styled.div`
  /* margin-top: 30px; */
  width: 100%;
  max-width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
`;
export const RepresentaTitle = styled.span`
  padding-top: 5px;
  margin-left: 20px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #676767;
  strong {
    color: var(--colorAzulclaro);
  }
  #Nufe {
    color: var(--colorAzulclaro);
    font-size: 18px;
  }
`;
export const RepresentaEstado = styled.span`
  padding-top: 5px;
  margin-left: 20px;
  color: #676767;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /*  text-transform: capitalize; */

  strong {
    color: var(--colorAzulclaro);
    font-weight: 500;
  }
`;

export const SectorMap = styled.div`
  /* padding-bottom: 5px; */
  position: relative;
  width: 100%;
  max-width: 100%;

  height: 230px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 950px) {
    height: auto;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
  }
`;

export const Mapas = styled.div`
  position: relative;
  padding-left: 20px;
  width: 100%;
  max-width: 990px;
  min-height: 230px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    height: auto;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    #LocalizaMap {
      max-width: 100%;
    }
  }

  #LocalizaMap {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 220px;
    border: 0;
  }
`;
