import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
    <Fragment>
      <Head>
        <title>AxeLabs</title>
        <link rel="icon" href="\logo-only.png"/>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
    </NextUIProvider>
  );
}

export default MyApp;
