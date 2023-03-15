import React from "react";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { codeData } from "./constant";
import "./Code.css";
import { useNavigate, useParams } from "react-router-dom";
import CodeQuestion from "./CodeQuestion";

const Code = () => {
  const navigate = useNavigate();
  const { question } = useParams();
  return (
    <Row style={{ marginTop: "90px" }}>
      <Col className="bg-light" xs="3">
        <ListGroup flush numbered>
          {codeData.map((cd, index) => (
            <ListGroupItem
              onClick={() => {
                navigate(`/code/${cd.navigateId}`);
              }}
              className="codeIndex"
              key={index}
            >
              {cd.label}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col className="bg-light" xs="9">
        <CodeQuestion navigateTo={question} />
      </Col>
    </Row>
  );
};

export default Code;
