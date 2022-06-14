import React, { useState, useEffect } from "react";
import "./Toggle.css";

const Toggle = (props) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (props.masterIsActive) {
      setIsOn(props.masterIsOn);
    }
  }, [props.masterIsActive, props.masterIsOn]);

  const handleOnToggleChange = () => {
    props.onToggleChange(props.toggleIndex, !isOn);
    setIsOn(!isOn);
  };

  return (
    <div
      className={`d-flex justify-content-between m-half ${
        props.label === "All" && !props.masterIsActive ? "low-opacity" : ""
      }`}
    >
      <div>{props.label}</div>
      <label className="switch">
        <input
          type="checkbox"
          checked={props.masterIsActive ? props.masterIsOn : isOn}
          onChange={handleOnToggleChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
