import styled, { css } from "styled-components";

export const SlidercContainerHome = styled.div`
  width: 100%;
  max-width: 100%;
  /* max-width: 1750px; */
  height: auto;
  max-height: 800px;
  min-height: 700px;
  /* margin-top: 110px; */
  position: relative;
  /* margin: auto; */
  overflow: hidden;
  background-color: #ededed;
  /* background-color: #0070f3; */
  @media (max-width: 1050px) {
    height: auto;
    max-height: auto;
    min-height: 1000px;
    /* max-height: 40vh; */
    /* background-color: #ccc; */
    /* display: none; */
  }
`;

const activeBgSlider = css`
  height: 100%;
  width: 100%;
  max-width: 1850px;
  position: relative;
  display: flex;
`;

const inactiveBgSlider = css`
  display: none;
`;

export const BlocosSliderHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-height: 90vh; */
  min-height: 700px;
  width: 100%;
  max-width: 1850px;
  position: relative;
  margin: auto;
  overflow: hidden;

  //background: var(--horizontal-gradient);
  @media (max-width: 1050px) {
    max-height: 1500px;
    min-height: 630px;
    /* background-color: #6e0050; */
    /* display: none; */
  }
`;

export const SlidesHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${({ active }) => (active == true ? activeBgSlider : inactiveBgSlider)}
  /* background-color:blue; */
  @media (max-width: 1050px) {
    /* flex-direction: column; */
    height: auto;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0;
    /* background-color: red; */
  }
`;

export const SliderGroupImg = styled.div`
  width: 100%;
  max-width: 50%;
  height: 100%;
  min-height: 750px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  /* #ffffff */
  border-left: 8px solid ${({ color }) => color};

  @media (max-width: 1050px) {
    min-height: 300px;
    width: 100%;
    max-width: 500px;

    /* height: auto;
    max-height: 500px;
    min-height: 500px;
    width: 100%;
    max-width: 100%; */
  }
  @media (max-width: 750px) {
    min-height: 300px;
    width: 100%;
    max-width: 95%;
  }
`;
export const SlideImageHome = styled.img`
  /* width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 750px;
  background-size: cover;
  position: relative; */

  /* min-height: 800px !important ; */
  /* position: absolute; */
  /* object-fit: cover; */
  object-fit: cover;
  background-position: center;
  background-attachment: unset;
  background-repeat: no-repeat;
  background-origin: unset;
  overflow: unset;

  @media (max-width: 950px) {
    object-fit: cover;
    overflow: hidden;
    /* height: auto;
    max-height: 500px;
    min-height: 500px;
    width: 100%;
    max-width: 100%;
    background-position: center;
    background-size: contain; */
  }
  @media (max-width: 1050px) {
    object-fit: cover;
    overflow: hidden;
  }
`;

export const Sliderbloco = styled.div`
  width: 100%;
  max-width: 450px;
  height: 90px;
  bottom: 60px;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 50%);
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 450px;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 450px;
  }
  @media (max-width: 750px) {
    width: 100%;
    max-width: 90%;
  }
`;
export const SliderIcon = styled.div`
  width: 100%;
  max-width: 100px;
  height: 90px;
  bottom: 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100px;
  }
`;
export const SliderBTitle = styled.div`
  width: 100%;
  max-width: 350px;
  height: 90px;
  bottom: 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 16px;
  color: var(--colorDefault);
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    font-size: 15px;
  }
  @media (max-width: 950px) {
    width: 100%;
    font-size: 14px;
  }
  @media (max-width: 650px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 390px) {
    width: 100%;
    font-size: 10px;
  }
`;
export const SliderGroupText = styled.div`
  width: 100%;
  max-width: 50%;
  height: 100%;
  min-height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  @media (max-width: 1050px) {
    height: auto;
    min-height: 500px !important ;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
    /* display: none; */
  }
  @media (max-width: 750px) {
    height: auto;
    min-height: 500px !important ;
    max-height: 100%;
    width: 100%;
    max-width: 95%;
    margin-bottom: 10px;
    margin-top: 10px;
    /* display: none; */
  }
`;
export const SliderGroup = styled.div`
  top: 10%;
  width: 100%;
  /* max-width: 68%; */
  /* max-width: 700px; */
  max-width: 75%;
  height: auto;
  min-height: 80%;
  min-height: 500px;
  padding: 0 20px 0 20px;
  /* position: static; */
  position: relative;
  /* background: #1951a0; */
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1200px) {
    max-width: 500px;
    margin-top: 10px;
  }

  @media (max-width: 950px) {
    top: 0;
    height: auto;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    margin-top: 10px;
  }

  
`;
export const SliderGroupTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: #ff8080; */

  @media (max-width: 950px) {
    left: 0;
  }
`;
export const SlideTitleHome = styled.span`
  height: auto;
  color: var(--colorSlider);
  position: relative;
  text-align: start;
  max-width: 100%;
  letter-spacing: 4px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 80px;
  line-height: 101px;
  padding: 7px 0px 0px 0px;

  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }

  @media (max-width: 1400px) {
    font-size: 75px;
    line-height: 90px;
  }

  @media (max-width: 1200px) {
    font-size: 60px;
    line-height: 80px;
  }

  @media (max-width: 1050px) {
    top: 10px;
    width: 100%;
    max-width: 100%;
    left: 0;
  }

  @media (max-width: 950px) {
    font-size: 55px;
    line-height: 70px;
  }

  @media (max-width: 500px) {
    font-size: 45px;
    line-height: 60px;
  }
`;
export const SlideTitleStrong = styled.span`
  font-family: "Plus Jakarta Sans";
  height: auto;
  font-size: 80px;
  max-width: 100%;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${({ color }) => color};
  padding: 7px 0px 0px 0px;

  :before {
    content: "";
    width: 110px;
    height: 3px;
    margin-top: 105px;
    position: absolute;
    background-color: ${({ color }) => color};
  }

  @media (max-width: 1050px) {
    font-size: 40px;
    line-height: 50px;
    :before {
      content: "";
      margin-top: 90px;
    }
  }

  @media (max-width: 950px) {
    font-size: 40px;
    line-height: 50px;
    :before {
      content: "";
      margin-top: 80px;
    }
  }

  @media (max-width: 500px) {
    font-size: 40px;
    line-height: 50px;
    :before {
      content: "";
      margin-top: 70px;
    }
  }

  @media (min-width: 1500px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 1400px) {
    font-size: 75px;
    line-height: 90px;
  }

  @media (max-width: 1200px) {
    font-size: 60px;
    line-height: 80px;
  }

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    left: 0;
  }

  @media (max-width: 950px) {
    font-size: 55px;
    line-height: 70px;
  }

  @media (max-width: 500px) {
    font-size: 45px;
    line-height: 60px;
  }


  /* @media (max-width: 1400px) {
    font-size: 3em;
    :before {
      margin-top: 75px;
    }
  } */

  
`;

export const SliderGroupCaption = styled.div`
  position: relative;
  width: 100%;
  max-width: 750px;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 1050px) {
  }
`;

export const SlideTextParagraph = styled.text`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: var(--colorblack);
  position: relative;
  text-align: center;
  z-index: 10;
  text-align: start;
  padding: 20px 40px 0px 0px;
  max-width: 100%;

  @media (min-width: 1500px) {
    font-size: 24px;
  }

  @media (min-width: 1400px) {
    font-size: 24px;
    padding-top: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
    padding-top: 40px;
  }

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    padding: 20px 0 0 0;
    left: 0;
    top: 0;
    font-size: 18px;
  }

  @media (max-width: 950px) {
    font-size: 20px;
  }
`;

export const BtnLinkSlider = styled.div`
  height: auto;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  text-align: center;
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
  bottom: 0;
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    left: 0;
  }
`;
export const Butnlink = styled.a`
  width: 100%;
  max-width: 200px;
  height: 65px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  /* border: solid 2px ${(props) => props.theme.IconsBg}; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorDefault);

  background-color: var(--azulpadrao);
  font-weight: 700;
  :hover {
    background-color: #fff;
    color: var(--colorBclak);
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 150px;
    padding: 15px;
    left: 0;
  }
`;

export const NavigatioBtnSlider = styled.div`
  width: 100%;
  max-width: 2000px;
  display: none;
  justify-content: end;
  align-items: center;
  position: absolute;
  z-index: 1;
  height: 50px;
  bottom: 8%;
  /* background: #fff; */
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
    left: 0;
    bottom: 18%;
    /* background-color: #e91e63; */
  }
`;
export const PrevHome = styled.span`
  font-weight: bold;
  font-size: 1em;
  right: 300px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
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
  @media (max-width: 1050px) {
    display: flex !important;
    height: 40px;
    width: 60px;
    left: 15px;
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
  right: 200px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
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
  @media (max-width: 1050px) {
    display: flex !important;
    height: 40px;
    width: 60px;
    left: 100px;
    :hover {
      transition: left none;
      transition: all none;
      transform: none;
      transform-origin: none;
    }
  }
`;
export const AllDotsHomeSlider = styled.div`
  width: 100%;
  max-width: 50%;
  height: auto;
  position: absolute;
  display: flex;
  bottom: 5%;
  justify-content: center;
  align-items: center;
  z-index: 200;
  height: 50px;
  @media (max-width: 1050px) {
    /* background-color: blue; */
    position: absolute;
    z-index: 9999999;
    bottom: 0%;
    height: 50px;
    width: 100%;
    max-width: 100%;
    display: flex;
  }
  @media (max-width: 1250px) {
    bottom: 0;
  }
`;

export const DotHomeSlider = styled.span`
  cursor: pointer;
  height: 8px;
  width: 50px;
  margin: 0px 3px;
  /* border: solid 1px blue; */
  display: flex;
  ${({ active }) => (active == true ? activeBgDots : inactiveBgDots)}
`;

const activeBgDots = css`
  background-color: var(--azulpadrao);
`;

const inactiveBgDots = css`
  background-color: #c4c4c4;
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
