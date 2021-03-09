import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Card, { IRepository } from "../components/Card";
import Container from "../components/Container";
import Layout from "../components/Header";
import styles from "../styles/user.module.css";
interface IError {
  statusCode: number;
  message: string;
}
interface UserResponse {
  userName?: string;
  error?: IError;
}

const User: React.FC = () => {
  const router = useRouter();
  const username = router.query.id;
  const [userResponse, setUserResponse] = useState<UserResponse>({});
  const [repos, setRepos] = useState<IRepository[]>([]);
  const [fetched, setFetched] = useState<boolean>(false);

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (response.status === 404) {
      setUserResponse((userResp) => ({
        ...userResp,
        error: {
          statusCode: 404,
          message: `Sorry could not find user`,
        },
      }));
    }
    if (response.status === 403) {
      setUserResponse((userResp) => ({
        ...userResp,
        error: {
          statusCode: 403,
          message: `Sorry, you have reached your rate limited`,
        },
      }));
    }
    setUserResponse((userResp) => ({
      ...userResp,
      userName: data.login,
    }));
    setFetched(true);
  };

  const fetchRepositories = async () => {
    if (!userResponse.userName) {
      return;
    }

    const response = await fetch(
      `https://api.github.com/users/${userResponse.userName}/repos?per_page=100`
    );
    const fetchedRepos = await response.json();
    const repositories: IRepository[] = fetchedRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      language: repo.language,
      createdAt: repo.created_at,
    }));
    setRepos(repositories);
  };

  useEffect(() => {
    fetchUser();
    fetchRepositories();
  }, [fetched]);
  return (
    <Fragment>
      <Layout title="Github Issue Tracker | User" />
      <Container>
        <div className={styles.grid_of_2}>
          {repos.map((repo) => (
            <Card
              key={repo.id}
              repository={repo}
              username={userResponse.userName}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default User;
