import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Article.css";
import { productData } from "./../Constant";

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <ListGroup flush numbered className="product-list">
      {productData.slice(0, 2).map((product, index) => (
        <ListGroupItem
          key={index}
          className="product-list__item"
          onClick={() => {
            navigate(`/articles/${product.articleName}`);
          }}
        >
          {product.articleName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ProductList;
