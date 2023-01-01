import React, { useState, useEffect } from "react";

// Articles
import SearchBtn from "../components/article/articleComponents/SearchBtn";
import RecentsPost from "../components/article/articleComponents/RecentsPost";
import CodeBlockIndex from "../components/article/articleComponents/CodeBlockIndex";

// get article from database
import { getArticles } from "../utils/ApiUtils";

// React Boostrap
import { Container, Row, Col } from "react-bootstrap";

const ArticlesMaster = () => {
  const [article, SetArticle] = useState([]);

  useEffect(() => {
    getArticles()
      .then((res) => {
        console.log("response:" + res);
        SetArticle(res);
      })
      .catch((err) => {
        console.log(
          (err && err.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col sm={9}>
          <RecentsPost header="Latest Post ..." code={article} />
          <CodeBlockIndex codeString={article} />
        </Col>
        <Col sm={3}>
          <SearchBtn />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesMaster;
