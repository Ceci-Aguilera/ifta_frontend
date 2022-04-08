import '../styles/globals.css'
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/Layout"

import { AuthProvider } from "../context/AuthContext";
import { TrucksProvider } from "../context/TrucksContext";
import { DriversProvider } from "../context/DriversContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DriversProvider>
        <TrucksProvider>
          <Layout>
            <Head>
              <link rel="shortcut icon" href="/favicons/favicon.ico" />
              <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#00aba9" />
              <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </TrucksProvider>
      </DriversProvider>
    </AuthProvider>
  );
}

export default MyApp
