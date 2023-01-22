import React from "react";
import TreeNode from "./TreeNode";

const Tree = ({ treeData }) => {
  return (
    <ul>
      {treeData.map((node) => (
        <TreeNode key={node.id} data={node} />
      ))}
    </ul>
  );
};
export default Tree;
