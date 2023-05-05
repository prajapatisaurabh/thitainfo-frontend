import React, { useState } from "react";
import {
  CardBody,
  CardHeader,
  CardText,
  ListGroup,
  ListGroupItem,
  Card,
} from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../Constant";
import Example from "./component/Example";
import Author from "./component/Author";
import { Tabs, Tab } from "react-bootstrap";

import "./Content.css";

const Content = () => {
  const navigate = useNavigate();
  const { articleName } = useParams();
  const product = productData.find(
    (p) => String(p.articleName) === String(articleName)
  );
  const [key, setKey] = useState("read");

  let listview = null;
  let list = null;
  let conclusion = null;
  let description = null;

  if (product) {
    const {
      articleName,
      artcleMetadata,
      hasListView,
      ListView,
      hasList,
      List,
      description: articleDescription,
      conclustion,
    } = product;

    const renderdata = (
      <section className="HeaderSection p-0">
        <h1 className="font-monospace">{articleName}</h1>
        <Author author={artcleMetadata} />
      </section>
    );

    if (hasListView) {
      listview = (
        <section className="p-0">
          {ListView.map((prod, index) => (
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

    if (hasList) {
      list = (
        <section className="p-0">
          <ListGroup flush numbered>
            {List.map((prod, index) => (
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
            ))}
          </ListGroup>
        </section>
      );
    }

    if (conclustion) {
      conclusion = <p className="listgroupDetails pt-3">{conclustion}</p>;
    }

    if (articleDescription) {
      description = <p>{articleDescription}</p>;
    }

    return (
      <>
        {renderdata}
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="read" title="Read">
            {description}
            {listview}
            {list}
            {conclusion}
          </Tab>
          <Tab eventKey="discuss" title="Discuss">
            text2
          </Tab>
        </Tabs>
      </>
    );
  } else {
    return (
      <>
        <ListGroup flush numbered className="list-group">
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
};

export default Content;
