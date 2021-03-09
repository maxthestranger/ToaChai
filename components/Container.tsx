import React, { Fragment } from "react";
import styles from "../styles/container.module.css";

const Container: React.FC = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.container}>{children}</div>
    </Fragment>
  );
};

export default Container;
