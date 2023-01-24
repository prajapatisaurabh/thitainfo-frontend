import React from "react";
import { Link } from "react-router-dom";

const EntryContent = ({ blogInfo }) => {
  return (
    <div className="entry-content">
      <p className="font-monospace">{blogInfo.header}</p>
      <div className="read-more">
        <Link to={`/${blogInfo.readMoreBtn}`}>Read More</Link>
      </div>
    </div>
  );
};

export default EntryContent;
