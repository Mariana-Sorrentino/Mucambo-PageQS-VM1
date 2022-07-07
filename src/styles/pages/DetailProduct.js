import styled, { css } from "styled-components";

export const ContainerDetalheProd = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 800px;
  margin-top: 113px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fafbff;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;
export const BannerProd = styled.div`
  position: relative;
  background-image: url(${({ background }) => background});
  width: 100%;
  height: auto;
  max-width: 100%;
  min-height: 105px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    min-height: 120px;
  }
`;

export const SeparaPages = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;
  /* background-color: blue; */
  padding: 0 0 5px 0px;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    font-size: 30px;
  }
`;

export const SectorPrimary = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-wrap: wrap;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap-reverse;
  }
`;

export const TitleLocalition = styled.span`
  position: relative;
  color: #fff;
  text-transform: capitalize;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 50px;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    font-size: 30px;
  }
`;
export const DetailProduct = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fafbff;
  flex-wrap: wrap;
  @media (max-width: 1050px) {
    /* flex-wrap: wrap-reverse; */
  }
  @media (max-width: 950px) {
  }
`;
export const DetailProd = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  min-height: 500px;
  /* background-color: red; */
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const DetailProdItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 200px;
  /* background-color: blue; */
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    padding-left: 10px;
  }
  @media (max-width: 950px) {
  }
`;
export const SectorDetailItems = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const DetailItems = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 50px;

  margin-top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const DetailTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #000000;

  @media (max-width: 950px) {
  }
`;
export const TitleProduct = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 52px;
  background-color: ${({ color }) => color};
  letter-spacing: -0.03em;
  color: #fff;
  padding: 10px;
  @media (max-width: 950px) {
  }
`;

export const DetailItemscaption = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 200px;
  /* background-color: red; */
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;

  @media (max-width: 950px) {
  }
`;
export const TitleDescription = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  @media (max-width: 950px) {
  }
`;

export const ProducDestac = styled.span`
  font-family: "Plus Jakarta Sans";
  color: var(--azulpadrao);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  @media (max-width: 950px) {
    padding-left: 10px;
  }
`;

export const ProductMatirial = styled.div`
  /* width: 423px; */

  position: relative;
  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 170px;
  border: 2px solid #ededed;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fafbff;
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const CartMaterial = styled.div`
  position: relative;
  width: 100%;
  max-width: 100px;
  height: auto;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #ccc; */
  margin: 10px;
  @media (max-width: 950px) {
  }
`;
export const CartItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  margin-top: 10px;

  @media (max-width: 950px) {
  }
`;
export const CartItemPhoto = styled.img`
  position: relative;
  width: 100%;
  max-width: 60px;
  height: auto;
  max-height: 60px;

  @media (max-width: 950px) {
  }
`;
export const CartItemTitle = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: var(--colorTxtNav);
  text-align: center;
  min-height: 30px;

  @media (max-width: 950px) {
  }
`;
export const TitleEspecific = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.03em;
  color: var(--azulpadrao);

  @media (max-width: 950px) {
    font-size: 30px;
    line-height: 32px;
    padding-left: 10px;
  }
  @media (max-width: 950px) {
    font-size: 25px;
    line-height: 28px;
    padding-left: 10px;
  }
`;

export const Descriptioncaption = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 300px;
  max-height: 300px;
  flex-wrap: wrap;
  background-color: #fafbff;
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  flex-direction: column;
  flex-wrap: wrap;
  P {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    @media (max-width: 950px) {
      text-align: start;

      font-size: 14px;
      line-height: 20px;
      padding-left: 10px;
      width: 100%;
      max-width: 95%;
    }
  }
  @media (max-width: 950px) {
    padding-left: 10px;
    display: contents;
  }
`;

export const DescriptionGeralProduct = styled.p`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  @media (max-width: 950px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
//final dados produto

// INIT IMAGEM PRODUCT
export const DetailImg = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  min-height: 800px;
  background-color: #fafbff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    max-width: 100%;

    min-height: 400px;
  }
`;
export const ImgProductFilter = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafbff;
  /* top: 80px; */
  @media (max-width: 950px) {
    max-width: 100%;
    /* background-color: red; */
    min-height: 420px;
  }
`;
export const BlocKPainting = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;

  @media (max-width: 950px) {
    max-width: 330px;
    height: 230px;
  }
`;

export const ProductsModel = styled.img`
  position: absolute;
  width: 100%;
  max-width: 98%;
  height: auto;
  /* max-width: 600px;
  max-height: 500px; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 55px;
  @media (max-width: 950px) {
    margin-top: 35px;
    max-width: 500px;
  }
`;

export const Navigation = styled.div`
  position: relative;

  height: auto;
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* margin-top: 150px; */
  margin-top: 50px;

  @media (max-width: 950px) {
  }
`;
export const Butnlink = styled.a`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  width: 100%;
  max-width: 350px;
  height: 65px;
  text-decoration: none;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colorDefault);
  background-color: var(--azulpadrao);
  cursor: pointer;
  :hover {
    background-color: var(--colorAzulclaro);
    color: #ffffff;
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 1050px) {
    width: 100%;
    max-width: 350px;
    padding: 15px;
    left: 0;
  }
  @media (max-width: 950px) {
    width: 100%;
    max-width: 90%;
    padding: 15px;
    left: 0;
  }
`;

export const TitleInstruction = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const ItemInstruct = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 0 10px 0;
  span {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    width: 100%;
    max-width: 650px;
    color: #000000;
    @media (max-width: 950px) {
      font-size: 14px;
      line-height: 33px;
    }
  }

  /* background-color: #fff; */
  @media (max-width: 950px) {
    width: 100%;
    max-width: 100%;
    padding: 15px;
  }
`;
export const CategoryInstruction = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.03em;
  color: var(--azulpadrao);
  width: 100%;
  max-width: 1200px;
  text-align: start;
  margin: 20px 0;
  @media (max-width: 950px) {
    font-size: 25px;
    line-height: 28px;
    padding-left: 15px;
  }
`;

export const DescriptionInstruction = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  max-width: 650px;
  color: #000000;
  @media (max-width: 950px) {
    font-size: 14px;
    line-height: 33px;
  }
`;
export const DescriptionInstructionItens = styled.p`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 100%;
  max-width: 650px;
  color: #000000;
  @media (max-width: 950px) {
    font-size: 14px;
    line-height: 33px;
  }
`;
// FINISH IMAGEM PRODUCT

//PDF
export const SectorPDF = styled.div`
  margin: 40px 0 40px 0;
  position: relative;
  width: 100%;
  max-width: 912px;
  height: 160px;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    height: auto;
    justify-content: center;
    font-size: 14px;
    line-height: 33px;
    padding-bottom: 10px;
  }
`;

export const DocImg = styled.div`
  position: relative;
  width: 100%;
  max-width: 100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  margin-right: 20px;

  @media (max-width: 950px) {
  }
`;
export const IconPhotoDoc = styled.img`
  position: relative;
  width: 100%;
  max-width: 80px;
  height: auto;
  max-height: 95px;

  @media (max-width: 950px) {
    max-width: 60px;
    height: auto;
    max-height: 75px;
  }
`;
export const TitlePDF = styled.span`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  width: 100%;
  max-width: 300px;
  margin-right: 20px;
  @media (max-width: 950px) {
    font-size: 13px;
    line-height: 33px;
    text-align: center;
  }
`;
