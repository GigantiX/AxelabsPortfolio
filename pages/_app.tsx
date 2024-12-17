import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="inter.className">
    <NextUIProvider>
      <Fragment>
        <Head>
          <title>AxeLabs</title>
          <link rel="icon" href="\logo-only.png" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    </NextUIProvider>
    </main>
  )
};

export default MyApp;
