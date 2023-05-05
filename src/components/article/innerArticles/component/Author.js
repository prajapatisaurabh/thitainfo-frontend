import React from "react";
import "./Article.css";

const Author = ({ author }) => {
  return (
    <h6 className="authorInfo">
      <span className="authorName">
        <b>Author:</b> {author.user}
      </span>{" "}
      <span className="articleDate">
        <b>Article Date:</b>
        {author.date}
      </span>
      <span className="difficultyLevel">
        <b>Difficulty Level:</b>
        {author.level}
      </span>
    </h6>
  );
};

export default Author;
