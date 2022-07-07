import styled, { css } from "styled-components";

export const SlidercContainerHome = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  /* max-height: 800px;
  min-height: 700px;
  margin-top: 110px; */
  margin-top: 111px;
  position: relative;
  /* margin: auto; */
  overflow: hidden;
  /* background-color: #0070f3; */
  @media (max-width: 950px) {
    height: auto;
    margin-top: 0;
    /* max-height: 40vh; */
    /* background-color: blue; */
    /* display: none; */
  }
`;

export const BlocosSliderHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 90vh;
  min-height: 700px;
  width: 100%;
  max-width: 100%;
  /* max-width: 1750px; */
  position: relative;
  margin: auto;
  overflow: hidden;
  background: var(--bgpadrao);
  @media (max-width: 1050px) {
    max-height: 700px;
    min-height: 700px;
    /* background-color: #6e0050; */
    /* display: none; */
  }
`;

export const SlidesHome = styled.div`
  ${({ active }) => (active == true ? activeBgSlider : inactiveBgSlider)};
  /* background-color: RED; */

  @media (max-width: 1050px) {
    height: 500px;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }
`;
const activeBgSlider = css`
  height: 100%;
  width: 100%;
  max-width: 100%;
  position: relative;
  display: inline-block;
`;

const inactiveBgSlider = css`
  display: none;
`;
export const SlideImageHome = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 800px !important ;
  /* position: absolute; */
  object-fit: cover;
  position: relative;
  @media (max-width: 1050px) {
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }
`;
export const SliderGroup = styled.div`
  top: 10%;
  width: 100%;
  /* max-width: 58%; */
  max-width: 100%;
  height: auto;
  min-height: 80%;
  /* position: static; */
  position: absolute;
  /* background: #1951a0; */
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 950px) {
    top: 40px;
    height: auto;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    /* background-color: #333; */
    align-items: flex-start;
    /* padding-left: 20px; */
  }
  /* @media (min-width: 980px) {
    max-width: 1130px;
    
  } */
`;
export const SliderGroupPage = styled.div`
  width: 100%;
  /* max-width: 1750px; */
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* background-color: red; */
  @media (max-width: 950px) {
    left: 0;
    height: auto;
  
  }
`;

export const SliderGroupTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 750px;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 950px) {
    left: 0;
  }
`;

export const SlideTitleHome = styled.span`
  font-family: "Plus Jakarta Sans";
  height: auto;
  color: #fff;
  position: relative;
  text-align: start;
  z-index: 10;
  text-align: start;
  font-size: 80px;
  line-height: 101px;
  max-width: 100%;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 2px;
  /* background-color: black; */
  margin-left: 0;
  color: var(--colorDefault);

  strong {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    color: var(--colorDefault);
  }
  @media (max-width: 950px) {
    top: 10px;
    width: 100%;
    max-width: 95%;
    font-size: 35px;
    line-height: 60px;
    padding-left: 10px;
  }
  @media (max-width: 760px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (min-width: 951px) {
    font-size: 50px;
    line-height: 60px;
  }
  @media (min-width: 1350px) {
    font-size: 60px;
    line-height: 70px;
  }
  @media (min-width: 1500px) {
    font-size: 80px;
    line-height: 101px;
    top: 10px;
    width: 100%;
    max-width: 100%;
    /* padding: 15px; */
    padding: 0px 0 0 0;
    /* background-color: #e91e63; */
  }
`;
export const SliderGroupCaption = styled.div`
  position: relative;
  /* left: 250px; */
  width: 100%;
  max-width: 750px;
  padding-top: 20px;
  height: auto;
  /* background-color: blue; */
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 1050px) {
  }
`;
export const SlideTextParagraph = styled.text`
  font-family: "Plus Jakarta Text Regular", sans-serif;
  height: auto;
  color: #fff;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 10;
  text-align: start;
  /* left: 30%; */
  /* background-color: purple; */
  font-size: 24px;
  max-width: 60%;
  margin-left: 0;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    padding: 0 0 0 10px;
    font-size: 18px;
    :before {
      content: "";
      width: 90px;
      height: 1px;
      margin-top: 70px;
      margin-left: 2%;
      position: absolute;
      background-color: #fff;
    }
  }
  :before {
    content: "";
    width: 90px;
    height: 1px;
    margin-top: 90px;
    left: 0;
    position: absolute;
    background-color: #fff;
  }
`;

export const BtnLinkSlider = styled.div`
  height: auto;
  color: #fff;
  position: relative;
  //display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: yellow; */
  z-index: 10;
  text-align: center;
  left: 0;
  padding-top: 30px;
  width: 100%;
  max-width: 100%;
  ${({ navigateLinks }) =>
    navigateLinks == true ? "display:flex;" : "display:none;"};
  @media (max-width: 950px) {
    margin-top: 10px;
    width: 100%;
    max-width: 100%;
    padding: 15px;
    /* background-color: #e91e63; */
    left: 0;
  }
`;
export const Butnlink = styled.a`
  width: 100%;
  max-width: 200px;
  height: 50px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  /* border: solid 2px ${(props) => props.theme.IconsBg}; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;
  background-color: #fff;
  font-weight: 700;
  :hover {
    background-color: var(--azulpadrao);
    color: var(--colorDefault);
    /* background-color: ${(props) => props.theme.IconsBg};
    color: ${(props) => props.theme.Colortxt}; */
    transition: all 1s;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    left: 0;
  }
`;

export const NavigatioBtn = styled.div`
  width: 100%;
  max-width: 300px;
  right: 0;
  //display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  z-index: 1;
  height: 65px;
  /* background: red; */
  /* bottom: 8%; */
  bottom: 6%;
  ${({ navigateactive }) =>
    navigateactive == true ? "display:flex;" : "display:none;"};
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    left: 0;
    bottom: 6%;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: #e91e63; */
  }
`;
export const PrevHome = styled.span`
  font-weight: bold;
  font-size: 1em;
  /* right: 100px; */
  margin-right: 50px;
  margin-left: 20px;
  cursor: pointer;
  z-index: 100;
  position: relative;
  width: auto;
  height: 60px;
  width: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  transition: 0.4s linear;
  background: var(--colorDefault);
  #IconsSliderPrev {
    font-size: 18px;
    color: var(--azulpadrao);
  }
  :hover > #IconsSliderPrev {
    font-size: 20px;
  }
  :hover {
    transition: right 0.2s;
    transition: all 0.3s ease-in-out;
    transform: scale(1.3, 1);
    transform-origin: right;
  }
  @media (max-width: 900px) {
    display: flex !important;
  }
  @media (max-width: 950px) {
    display: flex !important;
    height: 60px;
    width: 60px;
    //left: 15px;
    :hover {
      transition: left none;
      transition: all none;
      transform: none;
      transform-origin: none;
    }
  }
`;

export const NextHome = styled.span`
  background: var(--colorDefault);
  font-size: 1em;
  /* right: 100px; */
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  z-index: 100;
  position: relative;
  width: auto;
  height: 60px;
  width: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  transition: 0.4s linear;

  #IconsSliderNext {
    font-size: 18px;
    color: var(--azulpadrao);
  }
  :hover > #IconsSliderNext {
    /* color: var(--colorTxt); */
    font-size: 20px;
  }

  :hover {
    transition: left 0.2s;
    transition: all 0.3s ease-in-out;
    transform: scale(1.3, 1);
    transform-origin: left;
  }
  @media (max-width: 900px) {
    display: flex !important;
  }
  @media (max-width: 950) {
    display: flex !important;
    height: 40px;
    width: 60px;
    //left: 100px;
    :hover {
      transition: left none;
      transition: all none;
      transform: none;
      transform-origin: none;
    }
  }
`;
export const AllDotsHome = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  position: absolute;
  // display: flex;
  bottom: 0%;
  justify-content: center;
  align-items: center;
  z-index: 200;
  /* background: black; */
  height: 50px;

  ${({ navigateDots }) =>
    navigateDots == true ? "display:flex;" : "display:none;"};
  @media (max-width: 1050px) {
    /* background-color: red; */
    position: absolute;
    z-index: 9999999;
    bottom: 0;
    height: 50px;
    width: 100%;
    /* display: none; */
  }
`;
export const DotHome = styled.span`
  cursor: pointer;
  height: 5px;
  width: 50px;
  margin: 0px 3px;
  display: flex;
  ${({ active }) => (active == true ? activeBgDots : inactiveBgDots)}
`;

const activeBgDots = css`
  background-color: var(--azulpadrao);
`;

const inactiveBgDots = css`
  background-color: var(--colorDefault);
`;

export const SvgContainer = styled.section`
  bottom: 50px;
  width: 100%;
  height: 120px;
  position: absolute;
  z-index: 4;
  background: transparent;
  @media (min-width: 1500px) {
    bottom: -40px;
    height: 300px;
  }
  @media (max-width: 1050px) {
    bottom: 0px;
    height: auto;
  }
`;
