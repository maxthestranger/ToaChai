import React from "react";
import Head from "next/head";
import styles from "../styles/header.module.css";
type Props = {
  title?: string;
};

const Layout = ({ title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1 className={styles.header_text}>Github Issue Tracker</h1>
    </header>
  </div>
);

export default Layout;
