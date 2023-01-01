import React from "react";
import SideBar from "../components/blog/SideBar";
// Articles
import ScienceCity from "../components/blog/ScienceCity";
import GithubStudentPack from "../components/blog/GithubStudentPack";
import { Container, Col, Row } from "react-bootstrap";

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
        <h2>Blog</h2>
      </div>
    </section>

    <section id="blog" className="blog">
      <Container>
        <Row className="m-15">
          <Col sm={8}>
            <GithubStudentPack />
          </Col>
          <Col sm={4}>
            <SideBar />
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <ScienceCity />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </section>
  </main>
);

export default Blog;
