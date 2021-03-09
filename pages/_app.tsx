import "../styles/styles.css";
import { NextPage } from "next";
import { AppProps } from "next/app";
// This default export is required in a new `pages/_app.js` file.

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
