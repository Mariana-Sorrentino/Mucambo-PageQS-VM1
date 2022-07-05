import React, { useEffect, useState } from "react";
import {
  ContainerFooter,
  FooterNave,
  Allink,
  AllinkA,
  Socialfooter,
  Logofooter,
  Logoimg,
  TesteB,
} from "./styles";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function BlockSociety({ appData }) {
  const [viewColor, setViewColor] = useState(false);
  const [footerfake, setData] = useState(null);
  useEffect(() => {
    setData(DATA_FOOTER);
  }, []);

  const DATA_FOOTER = [
    {
      id: 1,
      url: "#",
      title: "© Newell Co.",
      done: true,
    },
    {
      id: 2,
      url: "#",
      title: "Contato",
      done: true,
    },
    {
      id: 3,
      url: "#",
      title: "Política de Cookies",
      done: true,
    },
    {
      id: 4,
      url: "#",
      title: "Privacidade",
      done: true,
    },
    {
      id: 5,
      url: "#",
      title: "Termos de Uso das Marcas",
      description: "Tecnologia e proteção para quem mais entende de saúde.",
      done: true,
    },
    {
      id: 6,
      url: "#",
      title: "SAC: 0800 0754638  |  +55 11 2133.3000",
      description: "Tecnologia e proteção para quem mais entende de saúde.",
      done: true,
    },
    {
      id: 7,
      url: "#",
      title: "Siga-nos:",
      done: true,
    },
  ];

  return (
    <ContainerFooter>
      <FooterNave>
        {footerfake != null &&
          footerfake.map(function (itens) {
            return (
              <Link key={itens.id} href={`/${itens.url}`}>
                <AllinkA href={`/${itens.url}`}>
                  <Allink key={itens.id}>{itens.title}</Allink>
                </AllinkA>
              </Link>
            );
          })}
        <Socialfooter>
          <React.Fragment>
            <Link href={appData.company.facebook}>
              <a target="_blank" id="socialy">
                <i id={`IconsM`}>
                  <AiFillFacebook
                    style={{
                      fontSize: 25,
                      color: "#fff",
                    }}
                  />
                </i>
              </a>
            </Link>
            <Link href={appData.company.instagram}>
              <a target="_blank" id="socialy">
                <i id={`IconsM`}>
                  <AiFillInstagram
                    style={{
                      fontSize: 25,
                      color: "#fff",
                    }}
                  />
                </i>
              </a>
            </Link>
          </React.Fragment>
        </Socialfooter>
        <Logofooter>
          <Logoimg src="/image/newellfooter.svg" />
        </Logofooter>
      </FooterNave>
      {/* <TesteB
        key={`mnu-1`}
        onClick={() => {
          setViewColor(true);
          console.log("clicou no botao", viewColor);
        }}
        viewColor={viewColor}
      >
        teste botão
      </TesteB> */}
    </ContainerFooter>
  );
}

// export async function getServerSideProps() {
//     const data = [
//       {
//         id: 1,
//         url: "#",
//         title: "© Newell Co.",
//         done: true,
//       },
//       {
//         id: 2,
//         url: "#",
//         title: "Contato",
//         done: true,
//       },
//       {
//         id: 3,
//         url: "#",
//         title: "Política de Cookies",
//         done: true,
//       },
//       {
//         id: 4,
//         url: "#",
//         title: "Privacidade",
//         done: true,
//       },
//       {
//         id: 5,
//         url: "#",
//         title: "Termos de Uso das Marcas",
//         description: "Tecnologia e proteção para quem mais entende de saúde.",
//         done: true,
//       },
//       {
//         id: 6,
//         url: "#",
//         title: "SAC: 0800 0754638  |  +55 11 2133.3000",
//         description: "Tecnologia e proteção para quem mais entende de saúde.",
//         done: true,
//       },
//       {
//         id: 7,
//         url: "#",
//         title: "Siga-nos:",
//         done: true,
//       },
//     ];

//     return {
//       props: { contextFooter: data }, // will be passed to the page component as props
//     };
//   }
