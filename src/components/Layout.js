import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <h1>Chinese HSK Reader</h1>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
