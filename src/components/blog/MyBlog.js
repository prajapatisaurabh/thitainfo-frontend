import React from "react";
import { BlogJson } from "./ConstantBlog";
import Images from "./blogs/Images";
import Author from "./blogs/Author";
import EntryContent from "./blogs/EntryContent";

// Here Is link for Auto Place Geid Layout
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout

const MyBlog = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {BlogJson.map((blog, index) => (
        <article key={index} id="sciencecity" className="entry">
          <Images img={blog.image} />
          <h2 className="entry-title">
            <a href="#blog-single.html">{blog.name}</a>
          </h2>
          <Author user={blog.author} />
          <EntryContent blogInfo={blog.contentHeader} />
        </article>
      ))}
    </div>
  );
};

export default MyBlog;
