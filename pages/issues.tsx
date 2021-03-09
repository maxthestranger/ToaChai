import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Layout from "../components/Header";
import Table from "../components/Table";
import styles from "../styles/issues.module.css";

export interface IIssue {
  id?: number;
  name?: string;
  created_at?: string;
  author?: string;
  labels?: ILabel[];
  comments?: number;
}

export interface ILabel {
  id: number;
  name: string;
}

const Issues: React.FC = () => {
  const router = useRouter();
  const [issues, setIssues] = useState<any[]>([]);
  const repoName = router.query.id;
  const userName = router.query.username;
  const fetchIssues = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}/issues`
    );

    const data = await response.json();
    setIssues(data);
    // data.map((issue: any) => {
    // console.log(issue.labels);
    // issue.labels.map((label: any) => {
    //   labels.push({
    //     id: label.id,
    //     name: label.name,
    //   });
    // });
    // });
    // const issuesFetched: IIssue[] = data.map((issue: any) => ({
    //   id: issue.id,
    //   name: issue.title,
    //   dateOpened: issue.created_at,
    //   author: issue.user.login,
    //   comments: issue.comments,
    // }));
    console.log(data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <Fragment>
      <Layout title="Github Issues Tracker | Issues Page" />
      <p className={styles.heading_title}>List all issues</p>
      <div className={styles.center}>
        <Table issues={issues} />
      </div>
    </Fragment>
  );
};

export default Issues;
