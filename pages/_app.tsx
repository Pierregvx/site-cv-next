import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// import '../styles/Home.module.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
