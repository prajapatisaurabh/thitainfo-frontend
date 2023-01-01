import React from "react";
import { FaRegClock } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const RecentsPost = ({ header, code }) => {
  return (
    <>
      <ListGroup>
        <ListGroupItem
          key="001"
          style={{ border: "none", background: "#F8F9FA" }}
        >
          <h1 className="fw-semibold">
            <FaRegClock /> {header}
          </h1>
        </ListGroupItem>
      </ListGroup>
      <ListGroup numbered>
        {code.map((obj) => (
          <ListGroupItem
            style={{ border: "none", background: "#F8F9FA" }}
            key={obj.codeId}
            tag={Link}
            to={"/" + obj.codeId}
          >
            {obj.question}
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default RecentsPost;
