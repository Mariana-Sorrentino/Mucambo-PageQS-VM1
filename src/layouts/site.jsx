import React from "react";

import { StyledApp } from "./styles";
import Menu from "../Components/Menu/index";
import Footer from "../Components/Footer";
import BlockForm from "src/Components/BlockForm";
// import Loading from "../Components/pageLoading";

export default function SiteLayout({ children, appData }) {
  return (
    <React.Fragment>
      <Menu menus={appData.menu} />
      <StyledApp>{children}</StyledApp>
      {appData.page.footer_form === 1 && <BlockForm page={appData.page} />}
      <Footer appData={appData} />
    </React.Fragment>
  );
}
