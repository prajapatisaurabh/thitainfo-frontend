import React from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {
  const { readMoreBtn } = useParams();
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>Services</li>
          </ol>
          <h2>Services</h2>
        </div>
      </section>
      <div>
        <h1>Internal Blogs: {readMoreBtn}</h1>
      </div>
    </>
  );
};

export default Blogs;
