import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";
import SelectFont from "./SelectFont";

const Layout = () => {
  const navigate = useNavigate();
  const [font, setFont] = useState("inherit");

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header d-flex align-center">
        <h1 onClick={handleTitleClick}>Chinese HSK Reader</h1>
        <SelectFont handleSelectFont={(font) => setFont(font)} />
      </div>
      <div className="container">
        <Outlet context={[font]} />
      </div>
    </div>
  );
};

export default Layout;
