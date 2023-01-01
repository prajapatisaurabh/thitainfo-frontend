import React from "react";
import { Col, Row, Container, Card } from "reactstrap";
import RecentsPost from "./RecentsPost";

const CodeBlockIndex = ({ codeString }) => {
  return (
    <Container>
      <Row>
        {codeString.map((code) => (
          <Col className="bg-light border mt-5" sm={{ offset: 1, size: 5 }}>
            <Card style={{ border: "none" }}>
              <RecentsPost header="Java" code={codeString} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CodeBlockIndex;
