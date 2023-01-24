import React from "react";

const Author = ({ user }) => {
  return (
    <div className="entry-meta">
      <ul>
        <li className="d-flex align-items-center">
          <i className="bi bi-person"></i>
          <a href="#" rel="noreferrer" target="_blank">
            {user.name}
          </a>
        </li>
        <li className="d-flex align-items-center">
          <i className="bi bi-clock"></i>
          <a href="#date">
            <time datetime="2022-06-12">{user.date}</time>
          </a>
        </li>
        <li className="d-flex align-items-center">
          <i className="bi bi-chat-dots"></i>
          <a href="#Ammedabad">{user.location}</a>
        </li>
      </ul>
    </div>
  );
};
export default Author;
