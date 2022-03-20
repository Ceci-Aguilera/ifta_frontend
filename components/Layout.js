import NextNavbar from "./Navbar";
import NextFooter from "./Footer";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <html lang={"en"} />
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>

        <link
          rel="preload"
          href="/fonts/Abadi MT Condensed Light/Abadi MT Condensed Light"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Century Gothic/Century Gothic"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Arial/Arial"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Trebuchet MS/Trebuchet MS"
          as="font"
          crossOrigin=""
        />
      </Head>
      {/* <NextNavbar /> */}
      <main>{children}</main>
      <NextFooter />
    </>
  );
}
