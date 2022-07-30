import React, { useContext } from "react";
import Toggle from "./Toggle";
import { HSKReaderContext } from "./HSKReader";

const ToggleMenu = () => {
  const {
    hskToggles,
    setHskToggles,
    masterIsOn,
    setMasterIsOn,
    masterIsActive,
    setMasterIsActive,
  } = useContext(HSKReaderContext);

  const onToggleChange = (toggleIndex, isOn) => {
    // User toggled All, either turn on or off all others
    if (toggleIndex === 0) {
      setMasterIsOn(isOn);
      setMasterIsActive(true);
      setHskToggles(hskToggles.map(() => isOn));
    } else {
      setMasterIsActive(false);

      setHskToggles(
        hskToggles.map((value, i) => (toggleIndex === i ? isOn : value))
      );
    }
  };

  const renderedToggles = () => {
    const labels = [
      "All",
      "HSK 1",
      "HSK 2",
      "HSK 3",
      "HSK 4",
      "HSK 4",
      "HSK 6",
    ];

    return labels.map((label, index) => {
      return (
        <Toggle
          key={`toggle-${index}`}
          toggleIndex={index}
          label={label}
          masterIsActive={masterIsActive}
          masterIsOn={masterIsOn}
          onToggleChange={onToggleChange}
          color={label.toLowerCase().replace(/\s/g, "")}
        />
      );
    });
  };

  return (
    <div>
      <h3 className="text-center">Highlight by Level</h3>
      {renderedToggles()}
    </div>
  );
};

export default ToggleMenu;
