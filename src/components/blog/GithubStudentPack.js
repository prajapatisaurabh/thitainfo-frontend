import React from "react";
import { LINKEDIN_URL } from "../../constrains/Constant";
import { Link } from "react-router-dom";

const GithubStudentPack = () => {
  return (
    <article id="sciencecity" className="entry">
      <div className="entry-img">
        <img
          src="assets/img/blog/githubstudent.png"
          alt=""
          className="img-fluid"
        />
      </div>

      <h2 className="entry-title">
        <a href="#blog-single.html">Github Student Developer Pack</a>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="bi bi-person"></i>
            <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
              Saurabh Prajapati
            </a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-clock"></i>
            <a href="#date">
              <time datetime="2022-06-12">Dec 12, 2022</time>
            </a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-chat-dots"></i>
            <a href="#Ammedabad">Ahmedabad</a>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p className="font-monospace">
          The GitHub Student Developer Pack is one of the best resources that
          will get students start out as developers — Not only do you get free
          access to all of GitHub’s pro features, such as private repositories,
          you’ll also get access to over 20 different developer tools and
          courses to keep you busy.
        </p>
        <div className="read-more">
          <Link to={"/blogGit"}>Read More</Link>
        </div>
      </div>
    </article>
  );
};
export default GithubStudentPack;
