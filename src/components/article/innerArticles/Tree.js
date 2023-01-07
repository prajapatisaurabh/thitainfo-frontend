import React from "react";
import TreeNode from "./TreeNode";

const Tree = ({ data }) => {
  return (
    <ul>
      {data.map((node) => (
        <TreeNode key={node.id} data={node} />
      ))}
    </ul>
  );
};
export default Tree;
