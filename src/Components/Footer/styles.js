import styled, { css } from "styled-components";

export const ContainerFooter = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--colorFooter);
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const FooterNave = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100px;
  background-color: var(--colorFooter);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    max-width: 100%;
    min-height: 100px;
    padding: 40px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 950px) {
      font-size: 12px;
      width: 100%;
      max-width: 100%;
    }
    @media (max-width: 1100px) {
      font-size: 12px;
    }
    @media (min-width: 1400px) {
      font-size: 16px;
    }
  }
`;
export const AllinkA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-size: 14px;

  @media (max-width: 950px) {
    font-size: 11px;
  }
  @media (max-width: 1100px) {
    font-size: 12px;
    width: 100%;
    max-width: 100%;
  }
  @media (min-width: 1400px) {
    font-size: 16px;
  }
`;
export const Allink = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  list-style: none;
  height: 100%;
  height: 40px;
  color: var(--colorDefault);
  border-radius: 20px;
  padding: 0 10px;
  :hover {
    color: var(--azulpadrao);
    transition: 0.3s ease-out;
  }
  /* @media (min-width: 1100px) {
    font-size: 10px;
  } */
  /* @media (max-width: 950px) {
    font-size: 12px;
  } */
  /* @media (min-width: 1400px) {
    font-size: 16px;
  } */
`;

export const Socialfooter = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: #cc181e; */
  #socialy {
    width: 100%;
    max-width: 50%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #socialIcons {
    font-size: 40px;
    color: #fff;
    border-radius: 30px;
    :hover {
      color: var(--azulpadrao);
    }
  }

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    #socialy {
      width: 100%;
      max-width: 20%;
    }
  }
  @media (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const AllinContacts = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
  height: 40px;
  color: var(--colorDefault);
  padding: 0 10px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const Logofooter = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    margin: 10px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    max-width: 100%;
    margin: 10px;
  }
  a {
    width: 100%;
    max-width: 100%;

    padding-left: 10px;
  }
`;
export const Logoimg = styled.img`
  width: 100%;
  max-width: 150px;
  height: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    max-width: 100px;
  }
`;

export const TesteB = styled.button`
  width: 200px;
  height: 60px;
  border: solid 2px red;

  margin-bottom: 60px;
  cursor: pointer;
  ${({ viewColor }) => (viewColor == true ? activeBgMenu : inactiveBgMenu)};
`;
const activeBgMenu = css`
  background: var(--colorVerde);
`;

const inactiveBgMenu = css`
  background: transparent;
`;
