import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const BackendTesting = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}account/`, {
          withCredentials: true,
        });
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  const getRepos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}account/repos/`, {
        withCredentials: true,
      });
      console.log("response\n", response.data);
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/logout`, {
      withCredentials: true,
    });
    console.log(response);

    navigate("/");
  };
  return (
    <div>
      <h1>Backend Testing Component</h1>
      {user ? (
        <>
          <a href={`https://github.com/${user.login}`} target="_blank">
            <h2>Full Name: {user.name}</h2>
            <h3>Username: {user.login}</h3>
          </a>
          <h4>Bio: {user.bio} </h4>
          <br />
          <img
            src={user.avatar_url}
            alt={user.login}
            width="64px"
            height="64px"
          />
          <button onClick={handleLogout}>Logout</button>
          <a
            href={`https://github.com/${user.login}?tab=repositories`}
            target="_blank"
          >
            <h3>Repositories: {user.public_repos}</h3>
          </a>
          <br />
          <h1>User Repos: </h1>
          <button onClick={getRepos}>Get Repos</button>
          {repos && repos.length > 0 ? (
            repos.map((repo) => {
              return (
                <div style={{ border: "1px solid black" }} key={repo.id}>
                  <h2>
                    <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
                  </h2>
                  <p>path: {repo.full_name}</p>
                  <p>visibility: {repo.visibility}</p>
                </div>
              );
            })
          ) : (
            <h3>No repos Yet!</h3>
          )}
        </>
      ) : (
        <h2>No User Yet!</h2>
      )}
    </div>
  );
};

export default BackendTesting;
