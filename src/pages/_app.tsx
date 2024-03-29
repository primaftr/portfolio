import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import theme from "../theme";
import { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Prima Fitra</title>
        <link rel="icon" href="/logo.ico"></link>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JN4MZ9GEHV"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive" id="google-analytics-script">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JN4MZ9GEHV',{
            page_path: window.location.pathname
          });
        `}
      </Script>
      <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
