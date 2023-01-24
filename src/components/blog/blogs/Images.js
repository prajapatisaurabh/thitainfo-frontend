import React from "react";

const Images = ({ img }) => {
  console.log(img.link);
  return (
    <div className="entry-img">
      <img src={img.link} alt="" height="300px" width="100%" />
    </div>
  );
};

export default Images;
