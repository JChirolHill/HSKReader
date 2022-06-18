import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import HSKReaderContent from "./HSKReaderContent";

export const HSKReaderContext = createContext({
  hskToggles: [],
  setHskToggles: () => {},
});

const HSKReader = ({ text }) => {
  const navigate = useNavigate();
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
      <div className="d-flex">
        <div className="main-content">
          <HSKReaderContent text={text} />
        </div>
        <div className="sidebar">
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
