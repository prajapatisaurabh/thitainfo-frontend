import React from "react";
import { CardBody, CardHeader, CardText, Card } from "reactstrap";
import "./Article.css";

const ArticleListView = ({ ListView }) => {
  return (
    <section className="p-0">
      {ListView.map((prod, index) => (
        <Card outline className="my-2" key={index}>
          <CardHeader className="listviewHeader">{prod.header}</CardHeader>
          <CardBody>
            <CardText className="listviewDescription">
              {prod.description}
            </CardText>
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default ArticleListView;
