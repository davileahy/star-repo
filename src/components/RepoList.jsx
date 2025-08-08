import React from "react";

export default function RepoList({ title, time, repos }) {
    return (
        <div style={{ marginBottom: "30px" }}>
            <h2>{title}</h2>
            <p>Tempo: {time} ms</p>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            {repo.name}
                        </a> ⭐ {repo.stargazers_count}
                    </li>
                ))}
            </ul>
        </div>
    );
}
