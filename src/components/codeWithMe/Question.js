import React from "react";
import { useParams } from "react-router-dom";

const Question = () => {
  const { que } = useParams();
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Code With Me</li>
          </ol>
        </div>
      </section>
      <div>
        <h1>New,{que}</h1>
      </div>
    </>
  );
};

export default Question;
