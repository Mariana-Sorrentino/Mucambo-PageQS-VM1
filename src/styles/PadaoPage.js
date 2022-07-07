import styled from "styled-components";

export const ComponentPage = styled.div`
  width: 100%;
  /* max-width: 1750px; */
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: #ccc; */

  @media (max-width: 1230px) {
    padding: 0 20px 0 20px;
  }
`;

// export const ComponentPage = styled.div`
//   width: 100%;
//   /* max-width: 1750px; */
//   max-width: 1200px;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   /* background-color: #ccc; */
// `;
export const ComponentFull = styled.div`
  width: 1750px;
  /* max-width: 1750px; */
  max-width: 1750px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: red;
`;
