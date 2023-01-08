import React from "react";

const Author = ({ author }) => {
  return (
    <h6>
      <span>
        <b>Author:</b> {author.user}
      </span>{" "}
      <span className="p-2">
        <b>Article Date:</b>
        {author.date}
      </span>
      <span className="p-2">
        <b>Diffeculty Level:</b>
        {author.level}
      </span>
    </h6>
  );
};
export default Author;
