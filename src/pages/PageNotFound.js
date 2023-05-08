import React from "react";
import "animate.css";

const PageNotFound = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h1 className="animate__animated animate__fadeInDown">Page Not Found</h1>
      <p className="animate__animated animate__fadeInUp">
        Sorry, the page you're looking for could not be found.
      </p>
    </div>
  );
};

export default PageNotFound;
