import React from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {
  const { readMoreBtn } = useParams();
  return (
    <div>
      <h1>Internal Blogs: {readMoreBtn}</h1>
    </div>
  );
};

export default Blogs;
