import React, { useState } from "react";
import Tree from "./Tree";
import "../Content.css";
const TreeNode = ({ data }) => {
  const { label, children } = data;
  const [collapsed, setCollapsed] = useState(true);
  return (
    <li className="listDetails" onClick={() => setCollapsed(!collapsed)}>
      {/* <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "+" : "-"}
      </button> */}
      {label}
      {!collapsed && children && children.length > 0 && (
        <Tree data={children} />
      )}
    </li>
  );
};
export default TreeNode;
