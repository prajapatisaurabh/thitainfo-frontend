import React, { useState } from "react";
import Tree from "./Tree";
import { useNavigate } from "react-router-dom";
import "./Tree.css"; // import the styles

const TreeNode = ({ data }) => {
  const { label, children } = data;
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={handleCollapsed}
        className="index-setting" // apply the style class
      >
        <span
          onClick={() => {
            navigate(`/Articles/${label}`);
          }}
        >
          {label}
        </span>
      </div>
      <ul>{collapsed && children && <Tree treeData={children} />}</ul>
    </>
  );
};

export default TreeNode;
