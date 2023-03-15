import React, { useState } from "react";
import Tree from "./Tree";
import "../Content.css";
import { useNavigate } from "react-router-dom";

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
        style={{ marginBottom: "10px", cursor: "pointer" }}
        className="index-setting"
      >
        <span
          onClick={() => {
            navigate(`/Articles/${label}`);
          }}
        >
          {label}
        </span>
      </div>
      <ul
        style={{
          paddingLeft: "10px",
          borderLeft: "1px solid black",
          cursor: "pointer",
        }}
      >
        {collapsed && children && <Tree treeData={children} />}
      </ul>
    </>
  );
};
export default TreeNode;
