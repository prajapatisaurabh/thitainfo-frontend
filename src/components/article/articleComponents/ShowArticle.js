import React from "react";
import { Col, Row } from "reactstrap";
// css
import "./article.css";
import { TreeviewData } from "../Constant";
// Import 3 core
import Content from "../innerArticles/Content";
import ContentIndex from "../innerArticles/ContentIndex";
import Tree from "../innerArticles/component/Tree";

const ShowArticle = () => {
  return (
    <>
      <Row style={{ marginTop: "90px", color: "black" }}>
        <Col className="bg-light" xs="3">
          <Tree treeData={TreeviewData} />
        </Col>
        <Col className="bg-light" xs="9">
          <Row>
            <Col className="bg-light" xs="9">
              <Content />
            </Col>
            <Col className="bg-light" xs="3">
              <ContentIndex />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ShowArticle;
