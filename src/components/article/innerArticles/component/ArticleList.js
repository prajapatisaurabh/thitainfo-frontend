import React from "react";
import Example from "./Example";
import { CardBody, CardText, ListGroup, Card } from "reactstrap";
import "./Article.css";

const ArticleList = ({ List }) => {
  return (
    <section className="p-0">
      <ListGroup flush numbered>
        {List.map((prod, index) => (
          <Card key={index} className="listgroupDetails">
            <CardBody>
              <CardText className="listgroupTitle">
                {index + 1}. {prod.text}
              </CardText>
              <CardText className="listgroupExample">
                <Example hasExample={prod.hasExample} examples={prod.example} />
              </CardText>
            </CardBody>
          </Card>
        ))}
      </ListGroup>
    </section>
  );
};

export default ArticleList;
