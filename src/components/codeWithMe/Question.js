import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/question.css";

const Question = () => {
  const { que } = useParams();
  return (
    <main id="main" style={{ marginTop: "90px" }}>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Pricing</li>
          </ol>
        </div>
      </section>
      <div style={{ backgroundColor: "white", color: "black" }}>
        <h1>New,{que}</h1>
      </div>
    </main>
  );
};

export default Question;
