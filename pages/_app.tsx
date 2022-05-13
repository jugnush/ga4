import '../styles/globals.css'
import { useEffect } from "react";
import Script from 'next/script'
import type { AppProps } from 'next/app'
import TagManager from "react-gtm-module"
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const tagManagerArgs = {
  id: "GTM-58LQ749",
}


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, []);

  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
