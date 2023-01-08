import React from "react";
import { CopyBlock, a11yDark } from "react-code-blocks";

const Example = ({ code }) => {
  return (
    <span>
      <p className="fontDetails">{code.problem}</p>
      <br />
      <div>
        <CopyBlock text={code.code} language="javascript" theme={a11yDark} />
      </div>
    </span>
  );
};

export default Example;
