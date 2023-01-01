import React from "react";
import { Container, Row, Button, InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
  return (
    <Container>
      <Row>
        <InputGroup size="lg">
          <Form.Control placeholder="Search ..." aria-label="search bar" />
          <Button variant="outline-dark" id="button-addon1">
            <FaSearch />
          </Button>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default SearchBtn;
