import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/Home.module.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";
//import LayoutMain from "../Components/LayoutMain";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [inLoad, setInLoad] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <React.Fragment>
      {/* <LayoutMain> */}
      <Component {...pageProps} />
      <ToastContainer />
      {/* </LayoutMain> */}
    </React.Fragment>
  );
}
