import React, { createContext, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import HSKReaderContent from "./HSKReaderContent";

export const HSKReaderContext = createContext({
  hskToggles: [],
  setHskToggles: () => {},
});

const HSKReader = () => {
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

  return (
    <HSKReaderContext.Provider value={value}>
      <div className="d-flex">
        <div className="main-content">
          <HSKReaderContent />
        </div>
        <div className="sidebar">
          <ToggleMenu />
        </div>
      </div>
    </HSKReaderContext.Provider>
  );
};

export default HSKReader;
