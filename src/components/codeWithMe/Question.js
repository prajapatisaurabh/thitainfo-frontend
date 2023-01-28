import React from "react";
import { useParams } from "react-router-dom";

const Question = () => {
  const { que } = useParams();
  return (
    <div>
      <h1>New,{que}</h1>
    </div>
  );
};

export default Question;
