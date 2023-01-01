import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Search</h3>
      <div className="sidebar-item search-form">
        <form action="">
          <input type="text" />
          <button disabled type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <h3 className="sidebar-title">Categories</h3>
      <div className="sidebar-item categories">
        <ul>
          <li>
            <a href="#sciencecity">Science City</a>
          </li>
          <li>
            <a href="#GitStuPack">Github Student Developer pack</a>
          </li>
        </ul>
      </div>

      <h3 className="sidebar-title">Tags</h3>
      <div className="sidebar-item tags">
        <ul>
          <li>
            <a href="#1">App</a>
          </li>
          <li>
            <a href="#1">IT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
