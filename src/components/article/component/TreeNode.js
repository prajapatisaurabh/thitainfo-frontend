import React, { useState } from "react";
import Tree from "./Tree";
import { useNavigate } from "react-router-dom";
import "./Tree.css";

const TreeNode = ({ data }) => {
  const { label, children } = data;
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();
  return (
    <li>
      <div
        className={`index-setting${expanded ? " expanded" : ""}`}
        onClick={toggleExpanded}
      >
        <span
          onClick={() => {
            navigate(`/Articles/${label}`);
          }}
        >
          {label}
        </span>
        {children && (
          <span className="expand-icon">{expanded ? "-" : "+"}</span>
        )}
      </div>
      {children && (
        <ul className={`children${expanded ? " show" : ""}`}>
          <Tree treeData={children} />
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
