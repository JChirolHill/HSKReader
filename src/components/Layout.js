import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <h1 onClick={handleTitleClick}>Chinese HSK Reader</h1>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
