import React, { createContext, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import HSKReaderContent from "./HSKReaderContent";

export const HSKReaderContext = createContext({
  hskToggles: [],
  setHskToggles: () => {},
});

const HSKReader = ({ text }) => {
  const navigate = useNavigate();
  const [font] = useOutletContext();
  const [hskToggles, setHskToggles] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [masterIsOn, setMasterIsOn] = useState(false);
  const [masterIsActive, setMasterIsActive] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const value = {
    hskToggles,
    setHskToggles,
    masterIsOn,
    setMasterIsOn,
    masterIsActive,
    setMasterIsActive,
  };

  const handleReturnEditModeClick = () => {
    navigate("/");
  };

  return (
    <HSKReaderContext.Provider value={value}>
      <div
        className="hideSidebar"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        <i
          className={`fa-solid fa-chevron-${
            isSidebarVisible ? "right" : "left"
          }`}
        ></i>
        {isSidebarVisible && <>&nbsp;&nbsp;&nbsp; Hide Sidebar</>}
      </div>
      <div className="d-flex">
        <div className="main-content">
          <HSKReaderContent text={text} font={font} />
        </div>
        <div
          className="sidebar"
          style={{ display: isSidebarVisible ? "block" : "none" }}
        >
          <button className="btn" onClick={handleReturnEditModeClick}>
            Return to Edit Mode
          </button>
          <ToggleMenu />
        </div>
      </div>
    </HSKReaderContext.Provider>
  );
};

export default HSKReader;
