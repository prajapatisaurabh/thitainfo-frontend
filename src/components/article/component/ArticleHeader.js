import React from "react";
import Author from "./Author";
import "./Article.css";

const ArticleHeader = ({ articleName, artcleMetadata }) => (
  <section className="HeaderSection">
    <h1 className="headerTitle">{articleName}</h1>
    <Author author={artcleMetadata} />
  </section>
);

export default ArticleHeader;
