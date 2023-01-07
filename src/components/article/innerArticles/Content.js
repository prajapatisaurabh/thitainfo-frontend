import React from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { CopyBlock, a11yDark } from "react-code-blocks";
import "./Content.css";
import { productData } from "../Constant";
const Content = () => {
  const { articleName } = useParams();
  const product = productData.find(
    (p) => String(p.articleName) === String(articleName)
  );
  console.log(articleName + " " + product);
  let renderdata;
  if (product) {
    renderdata = (
      <div>
        <h3 className="headerDetails">{product.articleName}</h3>
        <h6>
          Author: {product.artcleMetadata.user}, Article Date:{" "}
          {product.artcleMetadata.date}, Diffeculty Level:{" "}
          {product.artcleMetadata.level}
        </h6>
        <hr />
        <h4>
          {product.ListView.map((ex) =>
            ex.Example.map((exp) => (
              <span>
                <p className="fontDetails">{exp.problem}</p>
                <br />
                <div>
                  <CopyBlock
                    text={exp.code}
                    language="javascript"
                    theme={a11yDark}
                  />
                </div>
              </span>
            ))
          )}
        </h4>
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
