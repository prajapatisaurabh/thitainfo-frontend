import React from "react";
import MyBlog from "../components/blog/MyBlog";
import { Link } from "react-router-dom";

const Blog = () => (
  <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Blog</li>
        </ol>
      </div>
    </section>

    <MyBlog />
  </main>
);

export default Blog;
