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
          <h3 className="headerDetails">{product.articleName}</h3>
          <Author author={product.artcleMetadata} />
        </section>
        <hr />
        <section className="p-0">
          <div>
            <h4>
              {product.ListView.map((ex) =>
                ex.Example.map((exp, index) => (
                  <Example key={index} code={exp} />
                ))
              )}
            </h4>
          </div>
        </section>
      </div>
    );
  } else {
    renderdata = <h2>Sorry. Product doesn't exist</h2>;
  }
  return (
    <>
      <Container>{renderdata}</Container>
    </>
  );
};

export default Content;
