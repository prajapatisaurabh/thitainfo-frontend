import React from "react";
import { Col, Row } from "reactstrap";
import { TreeviewData } from "./Constant";

import Content from "./Content";
import ContentIndex from "./ContentIndex";
import Tree from "./component/Tree";
import "./article.css";

const Article = () => {
  return (
    <>
      <Row className="article-row">
        <Col className="tree-col" xs="3">
          <Tree treeData={TreeviewData} />
        </Col>
        <Col className="content-col" xs="9">
          <Row>
            <Col className="main-col" xs="9">
              <Content />
            </Col>
            <Col className="index-col" xs="3">
              <ContentIndex />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Article;
