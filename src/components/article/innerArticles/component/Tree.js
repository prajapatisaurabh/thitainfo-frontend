import React from "react";
import TreeNode from "./TreeNode";
import "./Tree.css"; // import the styles

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
