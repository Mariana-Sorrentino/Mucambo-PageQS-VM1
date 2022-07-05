import React, { useEffect, useState, useContext } from "react";
import API from "../../services/api";
import Link from "next/link";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {
  ContainerM,
  ContanersFluidM,
  Mec,
  MecDados,
  Allink,
  MLogo,
  ImgLogo,
  MenuMobilea,
  MenuMobBloco,
  Menuseparation,
  BtnSwit,
  DarkmodeMobile,
  ModalBtnResFull,
  ButtonResgate,
  ContanersSubimenu,
  SubSector,
  TxtSub,
  MoboItem,
  Social,
  SocialMobile,
  TesteB,
} from "./styles";
//import "../../App.css";

export default function Menu({ menus, HidenMenu }) {
  const [viewColor, setViewColor] = useState("");
  const [idSubMenu, setIdSubMenu] = useState(null);
  const [toogleSubMenu, setToogleSubMenu] = useState(false);
  // const [menus, setMenus] = useState();
  const [submenus, setSubmenus] = useState();
  const [btnColor, setBtnColor] = useState(false);
  /*  useEffect(() => {
    async function loadNews() {
      const { data } = await API.get("menu");
      console.clear();
      setMenus(data);
      const { data: datas } = await API.get("submenu/fer/4");
      setSubmenus(datas.Submenus);
      //console.log(datas.Submenus);
      console.clear();
    }

    loadNews();
  }, []); */

  // const [menufake, setData] = useState(null);
  // useEffect(() => {
  //   setData(MENU_FAKE);
  // }, []);

  // const MENU_FAKE = [
  //   {
  //     id: 1,
  //     url: "#",
  //     title: "HOME",
  //     done: true,
  //   },
  //   {
  //     id: 2,
  //     url: "quemsomos",
  //     title: "QUEM SOMOS",
  //     done: true,
  //   },
  //   {
  //     id: 3,
  //     url: "#",
  //     title: "PRODUTOS",
  //     done: true,
  //   },
  //   {
  //     id: 4,
  //     url: "#",
  //     title: "MEIO AMBIENTE",
  //     done: true,
  //   },
  //   {
  //     id: 5,
  //     url: "#",
  //     title: "ONDE ENCONTRAR",
  //     done: true,
  //   },
  //   {
  //     id: 6,
  //     url: "#",
  //     title: "CONTATO",
  //     done: true,
  //   },
  // ];

  var [navRef, setrEF] = useState("navG");

  useEffect(() => {
    setBtnColor(true);
    menug();
  }, []);
  function menug() {
    var prevScrollpos = window.pageYOffset;
    const header = document.querySelector("#header");
    window.onscroll = function () {
      var currentScrollpos = window.pageYOffset;
      if (prevScrollpos > currentScrollpos) {
        document.querySelector("#header").style =
          "top:0px;height:113px;transition:all 0.3s ease";
        if (window.scrollY > 90) {
          document.querySelector("#header").style =
            "backdrop-filter: saturate(180%) blur(20px);box-shadow: rgb(25 81 160 / 50%) 0px 0px 8em;transition:all 0.3s ease";
        } else {
          document.querySelector("#header").style =
            "top:0px;height:113px;transition:all 0.3s ease";
        }
      } else {
        document.querySelector("#header").style.top = "-113px";
      }

      prevScrollpos = currentScrollpos;
    };
  }

  function Segmobile() {
    let btn = document.querySelector("#Mobos");
    if (btn.classList.contains("active")) {
      btn.style.display = "none";
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
      btn.style.display = "flex";
    }
  }

  return (
    <React.Fragment>
      {!HidenMenu && (
        <ContainerM id="header">
          <ContanersFluidM>
            <MLogo>
              <Link href="/">
                <a id="AA">
                  <ImgLogo src="/image/logo.svg" />
                </a>
              </Link>
            </MLogo>

            <Mec>
              {menus != null &&
                menus.map(function (obj) {
                  return (
                    <MecDados
                      id={obj.id}
                      key={obj.id}
                      onMouseEnter={() => {
                        setIdSubMenu(obj.id);
                        setToogleSubMenu(true);
                      }}
                    >
                      {/* href={`/${obj.url}`} */}
                      {/* <Link href={obj.url === "/home" ? "/" : obj.url} id="AAM">
                        <React.Fragment>
                          <a id="AAM">
                            <Allink
                              onClick={() => {
                                // key(`#IconsM-${obj.id}`);
                                setViewColor(`banana-${obj.id}`);
                                console.log("clicou no botao", viewColor);
                              }}
                              viewColor={
                                viewColor === `banana-${obj.id}` ? true : false
                              }
                            >
                              {obj.title}
                            </Allink>
                          </a> */}
                      <React.Fragment>
                        <Link
                          id="#al"
                          href={obj.url === "home" ? "/" : obj.url}
                        >
                          <a id="#al">
                            <Allink
                              onClick={() => {
                                // key(`#IconsM-${obj.id}`);
                                setViewColor(`banana-${obj.id}`);
                                console.log("clicou no botao", viewColor);
                              }}
                              viewColor={
                                viewColor === `banana-${obj.id}` ? true : false
                              }
                            >
                              {obj.title}
                            </Allink>
                          </a>
                        </Link>

                        {/* {obj.title != null && obj.title.length > 0 ? (
                            <>
                              <ContanersSubimenu
                                id="Subflex"
                                active={
                                  idSubMenu === obj.id ? toogleSubMenu : false
                                }
                              >
                               {obj.id === 4 &&
                                  submenus != null &&
                                  submenus.map(function (objSub) {
                                    return (
                                      <SubSector id={objSub.id} key={objSub.id}>
                                        <ul>
                                          <li id={objSub.id}>
                                            <Link
                                              id="#al"
                                              href={`/${objSub.url}`}
                                            >
                                              {objSub.title != null &&
                                              objSub.title.length > 0 ? (
                                                <a
                                                  href={`/${objSub.url}`}
                                                  id="#al"
                                                >
                                                  <TxtSub id="#al">
                                                    {objSub.title}
                                                  </TxtSub>
                                                </a>
                                              ) : (
                                                <></>
                                              )}
                                            </Link>
                                          </li>
                                        </ul>
                                      </SubSector>
                                    );
                                  })} 
                              </ContanersSubimenu>
                            </>
                          ) : (
                            <></>
                          )} */}
                      </React.Fragment>
                      {/* </Link> */}

                      {/* <TesteB
                        href={`/${obj.url}`}
                        onClick={() => {
                          // key(`#IconsM-${obj.id}`);
                          setViewColor(`banana-${obj.id}`);
                          console.log("clicou no botao", viewColor);
                        }}
                        viewColor={
                          viewColor === `banana-${obj.id}` ? true : false
                        }
                      >
                        Teste menu
                      </TesteB> */}
                    </MecDados>
                  );
                })}
            </Mec>
            {/* menu teste */}
            <Mec>
              {menus != null &&
                menus.map(function (obj) {
                  return (
                    <MecDados
                      id={obj.id}
                      key={obj.id}
                      onMouseEnter={() => {
                        setIdSubMenu(obj.id);
                        setToogleSubMenu(true);
                      }}
                    >
                      <React.Fragment>
                        {/* <Link
                          id="#al"
                          href={obj.url === "home" ? "/" : obj.url}
                        >
                          <a id="#al">
                            <Allink
                              onClick={() => {
                                // key(`#IconsM-${obj.id}`);
                                setViewColor(`banana-${obj.id}`);
                                console.log("clicou no botao", viewColor);
                              }}
                              viewColor={
                                viewColor === `banana-${obj.id}` ? true : false
                              }
                            >
                              {obj.title}
                            </Allink>
                          </a>
                        </Link> */}
                      </React.Fragment>
                      {/* </Link> */}
                      <Link href={obj.url === "home" ? "/" : obj.url}>
                        <TesteB
                          onClick={() => {
                            // key(`#IconsM-${obj.id}`);
                            setBtnColor(`btnbg-${obj.id}`);
                            console.log("clicou no botao btnbg", btnColor);
                          }}
                          valorbg={
                            btnColor === `btnbg-${obj.id}` ? true : false
                          }
                        >
                          {obj.title}
                        </TesteB>
                      </Link>
                    </MecDados>
                  );
                })}
            </Mec>
            {/* menu teste */}
            <Social>
              <React.Fragment>
                <Link href="https://www.facebook.com/">
                  <a target="_blank" id="socialy">
                    <i id={`IconsM`}>
                      <AiFillFacebook
                        style={{
                          fontSize: 25,
                          color: "#1951a0",
                        }}
                      />
                    </i>
                  </a>
                </Link>
                <Link href="https://www.facebook.com/">
                  <a target="_blank" id="socialy">
                    <i id={`IconsM`}>
                      <AiFillInstagram
                        style={{
                          fontSize: 25,
                          color: "#1951a0",
                        }}
                      />
                    </i>
                  </a>
                </Link>
              </React.Fragment>
            </Social>

            <MenuMobilea onClick={Segmobile}>
              <div className="containerMM" onClick={Segmobile}>
                <input
                  type="checkbox"
                  id="checkbox-menu"
                  className="iPTmOBILE"
                  onClick={Segmobile}
                />

                <label className="Labelm" htmlFor="checkbox-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </MenuMobilea>
          </ContanersFluidM>
        </ContainerM>
      )}

      <MenuMobBloco id="Mobos">
        {/* <DarkmodeMobile>
          <Menuseparation></Menuseparation>
        </DarkmodeMobile> */}
        <MoboItem>
          {menus != null &&
            menus.map(function (obj) {
              return (
                <Menuseparation key={obj.id} id={obj.id}>
                  <Link id="links" href={obj.url === "home" ? "/" : obj.url}>
                    <React.Fragment>
                      {obj.title != null && obj.title.length > 0 ? (
                        <a id="links" href={obj.url === "home" ? "/" : obj.url}>
                          <Allink>{obj.title}</Allink>
                        </a>
                      ) : (
                        <h2>Não encontra....</h2>
                      )}
                    </React.Fragment>
                  </Link>
                </Menuseparation>
              );
            })}

          <SocialMobile>
            <React.Fragment>
              <Link href="https://www.facebook.com/">
                <a target="_blank" id="socialyMobile">
                  <i id={`IconsM`}>
                    <AiFillFacebook
                      style={{
                        fontSize: 35,
                        color: "#1951a0",
                      }}
                    />
                  </i>
                </a>
              </Link>
              <Link href="https://www.facebook.com/">
                <a target="_blank" id="socialyMobile">
                  <i id={`IconsM`}>
                    <AiFillInstagram
                      style={{
                        fontSize: 35,
                        color: "#1951a0",
                      }}
                    />
                  </i>
                </a>
              </Link>
            </React.Fragment>
          </SocialMobile>
        </MoboItem>
      </MenuMobBloco>
    </React.Fragment>
  );
}
// NOVO;
export const getServerSideProps = async () => {
  try {
    const { data } = await API.get("menu");
    const { data: datas } = await API.get("submenu/fer/4");
    console.log(ContextSub, "serividor menu");
    return { props: { contextMenu: data, ContextSub: datas.submenus } };
  } catch (error) {
    console.error(error);
    return { props: { contextMenu: null } };
  }
};
