import React from "react";
import { CopyBlock, a11yDark } from "react-code-blocks";

const Example = ({ examples }) => {
  return (
    <>
      {examples.map((example, index) => (
        <span key={index}>
          <br />
          <p className="fontDetails fw-normal">
            <b>{index + 1}</b>.{example.problem}
          </p>
          <div>
            <CopyBlock
              text={example.code}
              language="javascript"
              theme={a11yDark}
            />
          </div>
        </span>
      ))}
    </>
  );
};

export default Example;
