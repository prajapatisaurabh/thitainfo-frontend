import React from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import "./Content.css";
import { productData } from "../Constant";
import Example from "./component/Example";
import Author from "./component/Author";
const Content = () => {
  const { articleName } = useParams();
  const product = productData.find(
    (p) => String(p.articleName) === String(articleName)
  );
  let renderdata;
  if (product) {
    renderdata = (
      <div>
        <section className="HeaderSection p-0">
          <h3 className="headerDetails font-monospace">
            {product.articleName}
          </h3>
          <Author author={product.artcleMetadata} />
        </section>
        <hr />
        <section className="p-0">
          {product.ListView.map((prod, index) => (
            <div key={index}>
              <p className="h2 font-monospace">{prod.header}</p>
              <p className="h5">{prod.description}</p>
              <Example examples={prod.Example} />
              <hr />
            </div>
          ))}
        </section>
      </div>
    );
  } else {
    renderdata = <h2>Please select any article</h2>;
  }
  return (
    <>
      <Container>{renderdata}</Container>
    </>
  );
};

export default Content;
