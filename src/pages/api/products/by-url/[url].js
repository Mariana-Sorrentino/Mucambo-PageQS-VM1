export default function handler(req, res) {
  res.status(200).json(product);
}

const product = {
  id: 1,
  name: "Sensitouch",
  url: "sensitouch",
  image: "/image/Productcard/CardProduct1.png",
  color: "#4D4D4D",
  line: "Látex Natural",
  breadcrumb: ["Home", "Produtos", "Linha Cirúrgica"],
  elements: [
    {
      id: 1,
      title: "Material sintético",
      icon: "quimiq",
    },
    {
      id: 2,
      title: "Látex free",
      icon: "no_balls",
    },
    {
      id: 3,
      title: "Luvas anatômicas",
      icon: "anatomic",
    },
  ],
  group: {
    id: 1,
    title: "Luvas Cirúrgicas",
  },
  category: {
    id: 2,
    title: "Linha Látex Natural",
  },
};
