import React, { ChangeEvent, useState } from "react";
import Router from "next/router";
import Container from "../components/Container";
import Layout from "../components/Header";
import styles from "../styles/homepage.module.css";
const IndexPage = () => {
  const [username, setUsername] = useState<string>(``);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const submitForm = (e: any) => {
    e.preventDefault();
    Router.push({
      pathname: `/user`,
      query: { id: username },
    });
  };
  return (
    <Container>
      <Layout title="Github Issue Tracker | Home" />
      <div className={styles.search_group}>
        <div className={styles.search_text}>Get started by typing your </div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="username"
            onChange={handleChange}
          />
          <button type="submit" className={styles.btn_search}>
            {" "}
            Search
          </button>
        </form>
      </div>
    </Container>
  );
};

export default IndexPage;
