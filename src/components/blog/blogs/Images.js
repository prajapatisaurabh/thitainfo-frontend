import React from "react";

const Images = ({ img }) => {
  return (
    <div className="entry-img">
      <img src={img.link} alt="" className="img-blog" />
    </div>
  );
};

export default Images;
