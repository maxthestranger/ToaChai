import React, { Fragment } from "react";
import styles from "../styles/table.module.css";

interface TableProps {
  issues: any[];
}

const Table: React.FC<TableProps> = ({ issues }) => {
  return (
    <Fragment>
      <div className={styles.table_container}>
        <div className={styles.table_heading}>
          <p className={styles.heading_text}>Issue Name</p>
          <p className={styles.heading_text}>Date Opened</p>
          <p className={styles.heading_text}>Author</p>
          <p className={styles.heading_text}>Labels</p>
          <p className={styles.heading_text}>Comments</p>
        </div>
        <div className={styles.table_content}>
          {issues.map((issue) => (
            <div className={styles.table_row} key={issue.id}>
              {console.log(issue)}
              <p className={styles.heading_text}>{issue.title}</p>
              <p className={styles.heading_text}>{issue.created_at}</p>
              <p className={styles.heading_text}>{issue.user.login}</p>
              <div className={styles.heading_text}>
                {issue.labels?.map((label: any) => (
                  <p key={label.id}>{label.name}</p>
                ))}
              </div>
              <p className={styles.heading_text}>{issue.comments}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
