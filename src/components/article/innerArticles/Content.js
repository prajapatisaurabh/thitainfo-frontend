import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./Content.css";
import { productData } from "../Constant";
import Example from "./component/Example";
import Author from "./component/Author";
const Content = () => {
  const navigate = useNavigate();
  const { articleName } = useParams();
  const product = productData.find(
    (p) => String(p.articleName) === String(articleName)
  );
  var renderdata;
  let listview = <></>;
  let list = <></>;
  if (product) {
    renderdata = (
      <>
        <section className="HeaderSection p-0">
          <h1 className="font-monospace">{product.articleName}</h1>
          <Author author={product.artcleMetadata} />
        </section>
        <hr />
      </>
    );
    if (product.hasListView) {
      listview = (
        <section className="p-0">
          {product.ListView.map((prod, index) => (
            <div key={index}>
              <p className="h2 font-monospace">{prod.header}</p>
              <p className="h5 fontDetails">{prod.description}</p>
              <Example examples={prod.Example} />
              <hr />
            </div>
          ))}
        </section>
      );
    }
    if (product.hasList) {
      list = (
        <section className="p-0">
          <ListGroup flush numbered>
            {product.List.map((prod, index) => (
              <ListGroupItem key={index} className="listgroupDetails">
                {prod.text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </section>
      );
    }
  } else {
    renderdata = (
      <>
        <ListGroup flush numbered>
          {productData.slice(0, 2).map((prod, index) => (
            <ListGroupItem
              key={index}
              className="listDetails"
              onClick={() => {
                navigate(`/Articles/${prod.articleName}`);
              }}
            >
              {prod.articleName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    );
  }
  return (
    <>
      <Container>
        {renderdata}
        {listview}
        {list}
      </Container>
    </>
  );
};

export default Content;
