import React from "react";
import {
  CardBody,
  CardHeader,
  CardText,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
} from "reactstrap";
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
  let conclusion = <></>;
  let description = <></>;
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
            <Card outline className="my-2" key={index}>
              <CardHeader tag="h5">{prod.header}</CardHeader>
              <CardBody>
                <CardText>{prod.description}</CardText>
              </CardBody>
            </Card>
          ))}
        </section>
      );
    }
    if (product.hasList) {
      list = (
        <section className="p-0 ">
          <ListGroup flush numbered>
            {product.List.map((prod, index) => (
              <>
                <Card key={index} className="listgroupDetails">
                  <CardBody>
                    <CardText>
                      {index + 1}. {prod.text}
                    </CardText>
                    <CardText>
                      <Example
                        hasExample={prod.hasExample}
                        examples={prod.example}
                      />
                    </CardText>
                  </CardBody>
                </Card>
              </>
            ))}
          </ListGroup>
        </section>
      );
    }
    if (product.conclustion) {
      conclusion = (
        <p className="listgroupDetails pt-3">{product.conclustion}</p>
      );
    }

    if (product.description) {
      description = <p>{product.description}</p>;
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
        {description}
        {listview}
        {list}
        {conclusion}
      </Container>
    </>
  );
};

export default Content;
