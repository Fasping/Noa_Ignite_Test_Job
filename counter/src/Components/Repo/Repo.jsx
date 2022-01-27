import React, { useState, useEffect } from "react";

const Repo = ({ counter }) => {
  const [repoInfo, setRepoInfo] = useState({});
  
    const repositories = [
    "Marak/faker.js",
    "flutter/flutter",
    "eslint/eslint",
    "oakwood/front-end-questions",
    "babel/babel",
    "storybooks/storybook",
    "facebook/react",
    "reactjs/redux",
    "expressjs/express",
  ];

  const URL = `https://api.github.com/repos/${repositories[counter]}`;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((repo) => {
        setRepoInfo(repo);
      });
  }, [counter]);

  return (
    <div className="repo">
      { repoInfo.id && (
        <div>
          <h2>{repoInfo.full_name}</h2>
          <p>{repoInfo.description}</p>

          <p>
            {repoInfo.stargazers_count}
          </p>
        </div>
      )}
      {!repoInfo.id && (
        <div>
          <p>
            {repoInfo.message
          }
          </p>
        </div>
      )}
    </div>
  );
};

export default Repo;