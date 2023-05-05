import React from "react";
import { Container } from "react-bootstrap";
import MyBlog from "../components/blog/MyBlog";

const Blog = () => (
  <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Blog</li>
        </ol>
      </div>
    </section>

    <MyBlog />
  </main>
);

export default Blog;
