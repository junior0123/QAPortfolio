import React from "react";
import "./CustomRepoCard.css";

const CustomRepoCard = ({ repo, theme }) => {
  return (
    <div
      className="custom-repo-card"
      style={{ backgroundColor: theme.background }}
    >
      <img
        src={repo.image}
        alt={repo.name}
        className="custom-repo-card-image"
      />
      <div className="custom-repo-card-content">
        <h2 style={{ color: theme.text }}>{repo.name}</h2>
        <p style={{ color: theme.secondaryText }}>{repo.description}</p>
        <a
          href={repo.link}
          className="custom-repo-card-button"
          style={{
            backgroundColor: theme.buttonColor,
            color: theme.buttonText,
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default CustomRepoCard;
