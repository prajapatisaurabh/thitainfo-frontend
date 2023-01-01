import React from "react";
import { Col, Row, ListGroup, ListGroupItem } from "reactstrap";

import { useNavigate } from "react-router-dom";

// Import 3 core
import Content from "../innerArticles/Content";
import ContentIndex from "../innerArticles/ContentIndex";

const ShowArticle = () => {
  const navigate = useNavigate();
  const productData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];
  const linkList = productData.map((product) => {
    return (
      <ListGroupItem
        key={product.id}
        onClick={() => {
          navigate(`/Articles/${product.name}`);
        }}
      >
        {product.name}
      </ListGroupItem>
    );
  });

  return (
    <>
      <Row>
        <Col className="bg-light" xs="3">
          <ListGroup>{linkList}</ListGroup>
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
