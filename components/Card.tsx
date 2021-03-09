import React, { Fragment } from "react";
import Router from "next/router";
import styles from "../styles/card.module.css";
export interface IRepository {
  id: number;
  name: string;
  language: string;
  createdAt: string;
}

interface CardProps {
  repository: IRepository;
  username: string | undefined;
}

const Card: React.FC<CardProps> = ({ repository, username }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <a
            className={styles.card_title}
            onClick={() => {
              Router.push({
                pathname: `/issues`,
                query: { id: repository.name, username },
              });
            }}
          >
            {repository.name}
          </a>
        </div>

        <div className={styles.card_content}>
          <div className={styles.card_tags}>
            <div className={styles.card_tag}>
              <div className={styles.dot}></div>
              <p className={styles.text_primary}>{repository.language}</p>
            </div>
          </div>

          <p className={styles.card_date}>{repository.createdAt}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
