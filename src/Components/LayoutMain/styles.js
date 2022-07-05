import styled from "styled-components";

export const ContainerGeneral = styled.div`
  /* padding: 0 2rem; */
  width: 100%;
  max-width: 1750px;
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
