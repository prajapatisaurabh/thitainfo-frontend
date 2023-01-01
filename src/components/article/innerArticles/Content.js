import React from "react";
import { Container } from "reactstrap";
import { useParams, Outlet } from "react-router-dom";

const Content = () => {
  const { name } = useParams();
  return (
    <>
      <Container>productData , {name}</Container>
    </>
  );
};

export default Content;
