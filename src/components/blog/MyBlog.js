import React from "react";
import { Card, Button } from "react-bootstrap";
import "./blogs/MyBlog.css"; // Import the CSS file

import { BlogJson } from "./ConstantBlog";

function MyBlog() {
  return (
    <div className="my-blog-container">
      {/* Add a class to the container */}
      {BlogJson.map((blog) => (
        <Card key={blog.id} className="my-blog-card">
          {" "}
          {/* Add a class to the Card component */}
          <Card.Img variant="top" src={blog.image.link} />
          <Card.Body>
            <Card.Title>{blog.name}</Card.Title>
            <Card.Text>{blog.contentHeader.header}</Card.Text>
            <Button variant="primary" href={blog.contentHeader.readMoreBtn}>
              Read More
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              By {blog.author.name}, {blog.author.location} on{" "}
              {blog.author.date}
            </small>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default MyBlog;
