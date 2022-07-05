// ContainerM

import styled, { css } from "styled-components";

export const ContainerM = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  /* z-index: 99999999; */
  z-index: 9999996;
  width: 100%;
  max-width: 100%;
  height: 113px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--colorDefault);

  .active {
    box-shadow: rgb(0 0 0) 0px 0px 8em;
  }

  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContanersFluidM = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #ccc; */

  @media (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
  }
  @media (min-width: 1500px) {
    /* display: flex;
    justify-content: flex-start;
    align-items: center; */
    /* max-width: 1750px; */
  }
`;

export const Mec = styled.div`
  position: relative;
  width: 100%;
  max-width: 1130px;
  height: 70px;
  display: flex;
  /* left: 115px; */
  /* margin-left: 8%; */
  justify-content: flex-end;
  align-items: center;
  /* background-color: yellow; */
  :hover p {
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
    color: #fff !important;
  }
  @media (max-width: 980px) {
    display: none !important;
  }
  @media (max-width: 1200px) {
    justify-content: flex-end;
  }
`;
export const MecDados = styled.div`
  text-align: start;
  height: 100%;

  /* background-color: red; */
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 7px; */
  ::after {
    content: "";
    width: 0px;
    height: 2px;
    background: var(--pink);
    margin-top: 2px;
    position: absolute;
    bottom: 40px;
    transition: 0.4s ease-in-out;
  }

  :hover {
    &::after {
      width: 85px;
    }
    color: #fff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  :hover #AAM {
    transition: all 0.2s ease;
    color: red;
  }

  #AAM {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-decoration: none;
    list-style: none;
    color: #fff;
    height: 100%;
    width: auto;
    background-color: transparent;
  }

  @media (max-width: 900px) {
    display: none !important;
  }
  @media (max-width: 1200px) {
    margin-right: 20px;
  }
  @media (min-width: 1250px) {
    margin-right: 20px;
  }
  @media (min-width: 1400px) {
    margin-right: 28px;
  }
  @media (min-width: 1500px) {
    margin-right: 40px;
  }
`;

export const Social = styled.div`
  width: 100%;
  max-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: #cc181e; */
  #socialy {
    width: 100%;
    max-width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 950px) {
    display: none;
  }
  @media (max-width: 1200px) {
    max-width: 55px;
  }
`;
export const Allink = styled.span`
  text-transform: uppercase;
  ${({ viewColor }) => (viewColor == true ? activeBgMenu : inactiveBgMenu)};
  border-radius: 20px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 12px;
  color: var(--colorTxtNav);
`;
const activeBgMenu = css`
  background: var(--azulpadrao);
  color: #fff !important;
`;

const inactiveBgMenu = css`
  background: transparent;
  :hover {
    color: var(--azulpadrao);
    font-weight: 400;
    transition: 0.2s ease-out;
  }
  @media (max-width: 980px) {
    font-size: 11px;
  }
  @media (max-width: 1060px) {
    font-size: 13px;
  }
  @media (min-width: 1300px) {
    font-size: 15px;
  }
  @media (min-width: 1350px) {
    font-size: 16px;
  }
`;
export const MLogo = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  max-width: 220px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #000; */

  #AA {
    font-size: 1em;
    text-decoration: none;
    list-style: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 950px) {
    max-width: 200px;
  }
  @media (max-width: 1250px) {
    max-width: 130px;
    left: 5px;
  }
  @media (min-width: 1500px) {
    /* max-width: 160px; */
    left: -50px;
  }
`;

export const ImgLogo = styled.img`
  width: 190px;
  height: auto;
  @media (max-width: 1250px) {
    max-width: 130px;
  }
`;

export const SubCategoryMobile = styled.span`
  font-size: 1em;
  text-decoration: none;
  list-style: none;
  color: var(--azulpadrao);
  display: flex;
  font-weight: 700;
  padding-left: 45px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    display: none !important;
  }
`;

// mobile aqui

export const MenuMobilea = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 60px;
  text-align: center;
  height: 40px;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #8257e5;
  margin-left: 50px;
  @media (max-width: 980px) {
    display: flex;
    margin-right: 50px;
  }
  .containerMM {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iPTmOBILE {
    background-color: red;
    width: 50px;
    height: 50px;
  }
  #checkbox-menu {
    position: absolute;
    opacity: 0;
  }

  .Labelm {
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .Labelm span:nth-child(2) {
    width: 15px;
    height: 2px;
  }

  .Labelm span {
    position: absolute;
    display: block;
    height: 2px;
    width: 100%;
    background: var(--azulpadrao);
    transition: 0.25s ease-in-out;
  }

  .Labelm span:nth-child(1) {
    top: 0;
  }

  .Labelm span:nth-child(2) {
    top: 8px;
  }

  .Labelm span:nth-child(3) {
    top: 16px;
  }

  #checkbox-menu:checked + .Labelm span:nth-child(1) {
    transform: rotate(-45deg);
    top: 8px;
    background-color: var(--azulpadrao);
  }

  #checkbox-menu:checked + .Labelm span:nth-child(2) {
    opacity: 0;
  }

  #checkbox-menu:checked + .Labelm span:nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
    background-color: var(--azulpadrao);
  }
`;
export const MenuMobBloco = styled.div`
  z-index: 999999;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 100%;
  text-align: center;
  height: 100%;
  color: #8257e5;
  background-color: var(--colorDefault);
  border: none;
  left: 0;
  top: 0;
  cursor: pointer;
  position: fixed;

  @media (min-width: 1024px) {
    display: none !important;
  }
`;

export const MoboItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  /* background-color: red; */
  height: auto;
  margin-top: 113px;
`;

export const Menuseparation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 97%;
  margin: 5px;
  text-align: center;
  height: 55px;
  /* color: #8257e5; */
  /* border-radius: 5px; */
  background: #f7f7f7;
  cursor: pointer;
  position: relative;
  :hover {
    border-left: 2px solid #8257e5;
    color: var(--azulpadrao);
    background: #ffffff;
    border-radius: 0;
  }
  :hover #links {
    color: #ccc !important;
  }
  #links {
    font-weight: 700;
    /* font-size: 1em; */
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    padding-left: 24px;
  }
`;

export const NewsAmobile = styled.a`
  width: 100%;

  @media (max-width: 950px) {
  }
`;

export const BtnSwit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 50px;
  height: 100%;
  margin-right: 20px;
  color: #8257e5;
  position: relative;
  @media (max-width: 950px) {
    display: none !important;
  }
`;

// export const DarkmodeMobile = styled.div`
//   margin-top: 130px;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
//   max-width: 95%;
//   margin: 130px 0 0 0;
//   text-align: center;
//   height: 55px;
//   color: #8257e5;
//   border-radius: 5px;
//   background: #f7f7f7;
//   border: solid 1px #ccc;
//   cursor: pointer;
//   position: relative;
// `;
export const SocialMobile = styled.div`
  width: 100%;
  max-width: 100%;
  /* margin: 5px; */
  display: none;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  height: 55px;
  max-height: 55px;
  background: #f7f7f7;
  padding-left: 40px;
  #socialyMobile {
    width: 100%;
    max-width: 90px;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 950px) {
    display: flex;
  }
  @media (min-width: 980px) {
    display: none;
  }
`;
export const ModalBtnResFull = styled.section`
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  bottom: 0;
  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
    display: none;
  }
`;

// export const ButtonResgate = styled.button`
//   height: unset;
//   margin-left: 24px;
//   padding: 12px 24px;
//   line-height: 48px;
//   background: transparent;
//   color: #fff;
//   text-decoration: none;
//   border: solid 1px var(--bgButtons);
//   cursor: pointer;
//   font-size: 12px;
//   font-weight: 800;
//   line-height: 19px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: all 0.3s ease;
//   :hover {
//     color: #121214;
//     background-color: #e7b400;
//   }
//   :hover #Btnlink {
//     color: #4e4e4e;
//   }
//   #Btnlink {
//     text-decoration: none;
//     color: #fff;
//     transition: all 0.3s ease;
//   }
//   @media (max-width: 1000px) {
//     width: 90%;
//     font-size: 10px;
//   }
// `;

// submenu

// submenu dados
export const ContanersSubimenu = styled.div`
  position: absolute;
  height: auto;
  /* min-height: 80px; */
  top: 90px;
  justify-content: flex-start;
  align-items: flex-start;
  /* display: flex; */
  flex-direction: column;
  /* padding: 20px; */
  background-color: #ffffff;
  /* padding: 10px; */
  display: ${({ active }) => (active ? "flex" : "none")};
`;

export const SubSector = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 200px; */
  padding: 10px 0 10px 0px;
  height: auto;
  /* min-height: 45px; */
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  /* margin: 2px; */
  /* background-color: ${(props) => props.theme.BgMenu}; */
  position: relative;
  flex-direction: column;
  border-bottom: 1px solid var(--azulpadrao);
  margin: 0;
  @media (max-width: 980px) {
    width: 100%;
    max-width: 100%;
  }
  :hover #SUB {
    transition: all 0.2s ease;
    color: #000;
  }

  ul {
    width: 200px;
    max-width: 200px;
    /* min-height: 45px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    /* background-color: red; */
    /* padding: 5px 5px 5px 5px; */
  }
  li {
    height: 30px;
    list-style: none;
    background: transparent;
    justify-content: flex-start;
    align-items: center;
    display: flex;

    :hover #al {
      color: #fff !important;
    }
  }
  #al {
    text-decoration: none;
    color: #737380;
    /* color: #d1006d; */
    width: 100%;
    font-size: 20px;
    font-weight: 800;
  }
`;
export const ListaMobile = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  height: auto;
  min-height: 30px;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px 0 10px;
  /* background-color: red; */
  :hover {
    background: #ccc;
    color: #fff;
  }
`;

export const SubLi = styled.li`
  width: 100%;
  max-width: 100%;
  height: 45px;
  background-color: blue;
`;

export const TxtSub = styled.text`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  color: #737380;
  width: 100%;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  list-style: none;
`;
export const TesteB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  height: 40px;
  border-radius: 20px;
  border: solid 2px red;
  ${({ valorbg }) => (valorbg == true ? activeBgMenuBG : inactiveBgMenuBG)};
  cursor: pointer;
`;
const activeBgMenuBG = css`
  background: var(--azulpadrao);
  color: #fff;
`;

const inactiveBgMenuBG = css`
  background: transparent;
  :hover {
    color: var(--colorBclak);
    transition: 0.2s ease-out;
  }
  @media (max-width: 1280px) {
    font-size: 11px;
  }
`;
