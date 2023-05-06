import React, { useState } from "react";
import TreeNode from "./TreeNode";
import "./Tree.css";

const Tree = ({ treeData }) => {
  const [expandedNode, setExpandedNode] = useState(null);

  const handleNodeClick = (nodeId) => {
    if (nodeId === expandedNode) {
      setExpandedNode(null);
    } else {
      setExpandedNode(nodeId);
    }
  };

  const renderTreeNodes = (nodes, parentId = null) => (
    <ul>
      {nodes.map((node) => {
        const isExpanded = expandedNode === node.id;
        const hasChildren = node.children && node.children.length > 0;
        const isChild = parentId !== null;
        return (
          <TreeNode
            key={node.id}
            data={node}
            isExpanded={isExpanded}
            hasChildren={hasChildren}
            isChild={isChild}
            onClick={() => handleNodeClick(node.id)}
          >
            {hasChildren &&
              isExpanded &&
              renderTreeNodes(node.children, node.id)}
          </TreeNode>
        );
      })}
    </ul>
  );

  return <div>{renderTreeNodes(treeData)}</div>;
};

export default Tree;
