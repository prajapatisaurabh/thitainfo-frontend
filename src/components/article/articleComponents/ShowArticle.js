import React from "react";
import { Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
// css
import "./article.css";
import { productData } from "../Constant";
import { TreeviewData } from "../Constant";
// Import 3 core
import Content from "../innerArticles/Content";
import ContentIndex from "../innerArticles/ContentIndex";
import Tree from "../innerArticles/Tree";

const ShowArticle = () => {
  const navigate = useNavigate();
  const linkList = productData.map((product) => {
    return (
      <ListGroupItem
        key={product.articleId}
        onClick={() => {
          navigate(`/Articles/${product.articleName}`);
        }}
        className="listGroupDetails"
      >
        {product.articleName}
      </ListGroupItem>
    );
  });

  return (
    <>
      <Row>
        <Col className="bg-light" xs="3">
          <ListGroup numbered>{linkList}</ListGroup>
          <Tree data={TreeviewData} />
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
