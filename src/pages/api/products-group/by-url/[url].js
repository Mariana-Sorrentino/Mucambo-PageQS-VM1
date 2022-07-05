export default function handler(req, res) {
  const {
    query: { url },
  } = req;
  switch (url) {
    case "linha-cirurgica":
      res.status(200).json(linhaCirurgica);
      break;
    case "linha-complementar":
      res.status(200).json(linhaComplementar);
      break;
    default:
      res.status(401).end("group not found");
  }
}

const linhaCirurgica = {
  id: "1",
  image: "/image/PageView/LuvasCirurgicas.png",
  title: "Luvas Cirúrgicas",
  url: "linha-cirurgica",
  breadcrumb: ["Home", "Produtos", "Linha Cirúrgica"],
  categories: [
    {
      id: "1",
      name: "Linha Sintética",
      title: "Linha Sintética",
      color: "#4D4D4D",
      descriptionTitle: "Prevenção e precisão",
      descriptionText:
        "Soluções de prevenção e precisão médicas inovadoras para atender as diversas necessidades dos profissionais da área da saúde.  A qualidade de mais de 60 anos, acompanhada da evolução tecnológica para uma maior segurança, conforto e agilidade durante procedimentos cirúrgicos.",
      products: [
        {
          id: 1,
          name: "Sensitouch",
          url: "sensitouch",
          image: "/image/Productcard/CardProduct1.png",
          color: "#4D4D4D",
          line: "Sintética",
          elements: ["sintética", "látex free", "anatômica"],
        },
      ],
    },
    {
      id: "2",
      name: "Linha Látex Natural",
      title: "Linha Látex Natural",
      color: "#355E94",
      descriptionTitle: "",
      descriptionText: "",
      products: [
        {
          id: 2,
          name: "Sensitex",
          url: "sensitex",
          image: "/image/Productcard/CardProduct1.png",
          color: "Red",
          line: "Látex Natural",
          elements: ["pó bioabsorvpivel", "maior sensibilidade", "anatômica"],
        },
        {
          id: 3,
          name: "Sensifree",
          url: "sensifree",
          image: "/image/Productcard/CardProduct1.png",
          color: "#2D7A21",
          line: "Látex Natural",
          elements: ["polímero sintético", "sem pó bioabsorvível", "anatômica"],
        },
        {
          id: 4,
          name: "Sensifirm",
          url: "sensifirm",
          image: "/image/Productcard/CardProduct1.png",
          color: "#355E94",
          line: "Látex Natural",
          elements: ["antiderrapante", "pó bioabsorvível", "anatômica"],
        },
        {
          id: 5,
          name: "Dial",
          url: "dial",
          image: "/image/Productcard/CardProduct1.png",
          color: "#0E7570",
          line: "Látex Natural",
          elements: ["pó bioabsorvível", "confortável", "precisão"],
        },
        {
          id: 6,
          name: "Dial não estéril",
          url: "dial-nao-esteril",
          image: "/image/Productcard/CardProduct1.png",
          color: "#355E94",
          line: "Látex Natural",
          elements: ["pó bioabsorvível", "procedimentos gerais", "anatômica"],
        },
      ],
    },
  ],
};

const linhaComplementar = {
  id: "2",
  image: "/image/PageView/LinhaComplementar.png",
  title: "Linha Complementar",
  url: "linha-complementar",
  breadcrumb: ["Home", "Produtos", "Linha Complementar"],
  categories: [
    {
      id: "3",
      name: "Linha Látex",
      title: "Linha Látex Natural",
      color: "#2D7A21",
      descriptionTitle: "Prevenção e precisão",
      descriptionText:
        "Luvas complementares desenvolvidas em látex natural e com acabamanto antiderrapante na palma. Especialmente indicadas para limpeza e conservaçãode ambientes diversos.",
      products: [
        {
          id: 7,
          name: "Pro 137",
          url: "pro-137",
          image: "/image/Productcard/CardProduct1.png",
          color: "#355E94",
          line: "Látex Natural",
          elements: ["antiderrapante", "interno liso", "anatômica"],
        },
        {
          id: 8,
          name: "Pro 230",
          url: "pro-230",
          image: "/image/Productcard/CardProduct1.png",
          color: "Ambar",
          line: "Látex Natural",
          elements: [
            "antiderrapante",
            "forrado em algodão flocado",
            "anatômica",
          ],
        },
        {
          id: 9,
          name: "Pro 250",
          url: "pro-250",
          image: "/image/Productcard/CardProduct1.png",
          color: "Tifany",
          line: "Látex Natural",
          elements: [
            "antiderrapante",
            "forrado em algodão flocado",
            "anatômica",
          ],
        },
      ],
    },

    {
      id: "4",
      name: "Linha Nitrílicas",
      title: "Linha Nitrílicas",
      color: "#355E94",
      descriptionTitle: "Maior resistência e durabilidade",
      descriptionText:
        "As luvas de borracha nitrílica Mapa Professional denotam maior resistência e durabilidade, tanto ao desgaste natural ocasionado pelo tempo de uso, quanto ao entrar em contato com produtos corrosivos, como solventes clorados, álcool, álcalis diluídos, derivados do petróleo, graxas, óleos e aminoácidos.Devido à alta resistência, essas peças são utilizadas por paramédicos e em serviços laboratoriais e esterilização, sendo também recomendadas aos trabalhadores que manuseiam produtos químicos, agrícolas e óleos, além de higienização e serviços gerais.",
      products: [
        {
          id: 10,
          name: "Temp-Cook 476",
          url: "temp-cook-476",
          image: "/image/Productcard/CardProduct1.png",
          color: "Brown",
          line: "Nitrílica",
          elements: [
            "altas temperaturas",
            "100% a prova de líquidos",
            "uso em cozinhas industriais",
          ],
        },
        {
          id: 11,
          name: "Sensifree",
          url: "sensifree-nitrilica",
          image: "/image/Productcard/CardProduct1.png",
          color: "Navy",
          line: "Nitrílica",
          elements: [
            "proteção enter -30º e 150ºC",
            "forro isolante",
            "tripia camada neoprene",
          ],
        },
        {
          id: 12,
          name: "Ultranitril A18 - 480",
          url: "ultranitril-a18-480",
          image: "/image/Productcard/CardProduct1.png",
          color: "#0E7570",
          line: "Nitrílica",
          elements: [
            "punho super longo",
            "interior liso",
            "acabamento clorinado",
          ],
        },
        {
          id: 13,
          name: "Ultranitril A10 - 470",
          url: "ultranitril-a10-470",
          image: "/image/Productcard/CardProduct1.png",
          color: "Lime",
          line: "Nitrílica",
          elements: [
            "palma antiderrapante",
            "interior liso",
            "acabamento clorinado",
          ],
        },
      ],
    },
  ],
};
