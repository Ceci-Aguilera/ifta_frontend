import '../styles/globals.css'

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
            <Component {...pageProps} />
          </Layout>
        </TrucksProvider>
      </DriversProvider>
    </AuthProvider>
  );
}

export default MyApp
