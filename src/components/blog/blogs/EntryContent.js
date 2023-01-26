import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const EntryContent = ({ blogInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="entry-content">
      <p className="font-monospace">{blogInfo.header}</p>
      <div className="read-more">
        <Button
          onClick={() => {
            navigate(`/blogs/${blogInfo.readMoreBtn}`);
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default EntryContent;
