import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
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
  ListaMobile,
  SubLi,
  TxtSub,
  MoboItem,
  Social,
  SocialMobile,
  SubCategoryMobile,
  NewsAmobile,
  TesteB,
} from "./styles";

export default function Menu({ menus, HidenMenu }) {
  const router = useRouter();
  const [viewColor, setViewColor] = useState("");
  const [idSubMenu, setIdSubMenu] = useState(null);
  const [toogleSubMenu, setToogleSubMenu] = useState(false);
  const [btnColor, setBtnColor] = useState(false);

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
            "backdrop-filter: saturate(180%) blur(20px);box-shadow: rgb(25 81 160 / 27%) 0px 0px 1em;transition:all 0.3s ease";
          // ;box-shadow: rgb(25 81 160 / 50%) 0px 0px 8em
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
              {menus.map(function (obj) {
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
                        href={
                          obj.url === "home"
                            ? "/"
                            : obj.submenu.length > 0
                            ? "#"
                            : `/${obj.url}`
                        }
                      >
                        <a id="#al">
                          <Allink
                            viewColor={
                              router.pathname === `/${obj.url}` ? true : false
                            }
                          >
                            {obj.title}
                          </Allink>
                        </a>

                       
                      </Link> */}

                      <Link
                        id="#al"
                        href={
                          obj.url === "home"
                            ? "/"
                            : obj.submenu.length > 0
                            ? "#"
                            : `/${obj.url}`
                        }
                      >
                        {obj.submenu.length > 0 ? (
                          <>
                            <a id="#al">
                              <Allink
                                viewColor={
                                  router.pathname === `/${obj.url}`
                                    ? true
                                    : false
                                }
                              >
                                {obj.title}
                              </Allink>
                            </a>
                            <i id={`IconsM-${obj.id}`}>
                              <FaChevronDown
                                style={{
                                  marginLeft: 2,
                                  fontSize: 13,
                                  color: "var(--colorTxtNav)",
                                }}
                              />
                            </i>
                          </>
                        ) : (
                          <a id="#al">
                            <Allink
                              viewColor={
                                router.pathname === `/${obj.url}` ? true : false
                              }
                            >
                              {obj.title}
                            </Allink>
                          </a>
                        )}
                      </Link>

                      <ContanersSubimenu
                        id="Subflex"
                        active={idSubMenu === obj.id ? toogleSubMenu : false}
                      >
                        {obj.submenu.length > 0 &&
                          obj.submenu.map(function (objSub) {
                            return (
                              <SubSector id={objSub.id} key={objSub.id}>
                                <ListaMobile>
                                  <li id={objSub.id}>
                                    {" "}
                                    <Link
                                      id="#al"
                                      href={`/${
                                        obj.url === "home" ? "/" : obj.url
                                      }/${objSub.url}`}
                                    >
                                      <a id="#al">
                                        <TxtSub id="#al">{objSub.title}</TxtSub>
                                      </a>
                                    </Link>
                                  </li>
                                </ListaMobile>
                              </SubSector>
                            );
                          })}
                      </ContanersSubimenu>
                    </React.Fragment>
                  </MecDados>
                );
              })}

              <Social>
                <React.Fragment>
                  <Link href="https://www.facebook.com/">
                    <a target="_blank" id="socialy">
                      <i id={`IconsM`}>
                        <AiFillFacebook
                          style={{
                            fontSize: 30,
                            color: "#1951a0",
                            borderRadius: 25,
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
                            fontSize: 30,
                            color: "#1951a0",
                          }}
                        />
                      </i>
                    </a>
                  </Link>
                </React.Fragment>
              </Social>
            </Mec>

            {/* <Social>
              <React.Fragment>
                <Link href="https://www.facebook.com/">
                  <a target="_blank" id="socialy">
                    <i id={`IconsM`}>
                      <AiFillFacebook
                        style={{
                          fontSize: 25,
                          color: "#1951a0",
                          borderRadius: 25,
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
            </Social> */}

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
                <React.Fragment>
                  <Link
                    id="links"
                    href={
                      obj.url === ""
                        ? "/"
                        : obj.submenu.length > 0
                        ? "#"
                        : `/${obj.url}`
                    }
                  >
                    <NewsAmobile onClick={Segmobile} key={obj.id}>
                      <Menuseparation key={obj.id} id={obj.id}>
                        <Allink>{obj.title}</Allink>
                      </Menuseparation>
                    </NewsAmobile>
                  </Link>

                  <>
                    {obj.submenu.length > 0 &&
                      obj.submenu.map(function (objSub) {
                        return (
                          <Link id="#al" href={`/${obj.url}/${objSub.url}`}>
                            <NewsAmobile id="#al" onClick={Segmobile}>
                              <Menuseparation id={objSub.id} key={objSub.id}>
                                <SubCategoryMobile>
                                  {objSub.title}
                                </SubCategoryMobile>
                              </Menuseparation>
                            </NewsAmobile>
                          </Link>
                        );
                      })}
                  </>
                </React.Fragment>
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
