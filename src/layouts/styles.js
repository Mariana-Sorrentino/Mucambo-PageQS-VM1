import styled from "styled-components";

export const ContainerApp = styled.div`
  /* padding: 0 2rem; */
  width: 100%;
  max-width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffc107;
  }
`;

export const StyledApp = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  background-color: var(--colorDefault);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
