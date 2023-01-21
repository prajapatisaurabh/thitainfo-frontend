import React from "react";
import { CopyBlock, a11yDark, atomOneDark } from "react-code-blocks";
import "../Content.css";

const Example = ({ hasExample, examples }) => {
  let example;
  let output = <></>;

  if (hasExample) {
    if (examples.output) {
      output = (
        <>
          <p className="strick">
            <span>Output OR Explanation</span>
          </p>
          <div>
            <CopyBlock text={examples.output} theme={atomOneDark} />
          </div>
        </>
      );
    }
    example = (
      <span>
        <div>
          <CopyBlock
            text={examples.code}
            language={examples.language}
            theme={a11yDark}
          />
        </div>
        {output}
      </span>
    );
  } else {
    example = <></>;
  }
  return <>{example}</>;
};

export default Example;
