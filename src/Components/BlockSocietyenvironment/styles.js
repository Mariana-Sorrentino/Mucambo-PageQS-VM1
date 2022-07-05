import styled from "styled-components";

export const ContainerSociety = styled.div`
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
  /* background-color: #fafbff; */
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 50px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const Society = styled.div`
  position: relative;
  z-index: 3;
  top: 25px;
  width: 100%;
  height: auto;
  max-width: 800px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* background-color: #fafbff; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const SocietyTitle = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 760px;
  min-height: 113px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--colorVerdeescuro);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const TitleSociety = styled.span`
  font-family: "Plus Jakarta Sans";
  height: auto;
  letter-spacing: 2px;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: var(--colorDefault);
`;

export const TitleSocietyStrong = styled.span`
  font-family: "Plus Jakarta Sans";
  height: auto;
  letter-spacing: 2px;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  margin-left: 10px;

  color: ${({ color }) => color};
`;

export const SocietyCards = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 760px;
  min-height: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const Cards = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 370px;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--colorDefault);
  margin: 5px;
  /* 0px 5px 0px 5px; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    background-color: blue;
  }
`;
export const CardTag = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 20%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorDefault);

  @media (max-width: 950px) {
    width: 100%;
    max-width: 20%;
    flex-wrap: wrap;
  }
`;
export const Icons = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #66b031;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const Iconphoto = styled.img`
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 40%;
    flex-wrap: wrap;
  }
`;

export const CardTagTitleItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 80%;
  min-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  background-color: var(--colorDefault);
  font-size: 16px;
  color: var(--colorBclak);

  @media (max-width: 950px) {
    width: 100%;
    max-width: 80%;
    flex-wrap: wrap;
  }
`;

export const Title = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  position: relative;
  padding: 0 0 0 15px;
  font-size: 16px;
  color: var(--colorVerdeescuro);
  text-align: flex-start;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const NavigationCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1;
  @media (max-width: 950px) {
    margin-top: 25px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const BtnCard = styled.button`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  width: 100%;
  max-width: 200px;
  height: 65px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorBclak);
  background-color: var(--colorDefault);

  :hover {
    background-color: var(--azulpadrao);
    color: var(--colorDefault);
    transition: all 0.5s ease-out;
  }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 150px;
    margin-top: 5px;
    padding: 15px;
    left: 0;
  }
`;
