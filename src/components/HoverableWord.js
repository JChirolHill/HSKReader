import React, { useContext } from "react";
import "./HoverableWord.css";
import { HSKReaderContext } from "./HSKReader";

const HoverableWord = ({ word }) => {
  const { hskToggles, masterIsActive, masterIsOn } =
    useContext(HSKReaderContext);

  let color = masterIsActive
    ? masterIsOn
      ? `var(--hsk${word.hsk})`
      : ""
    : hskToggles[word.hsk]
    ? `var(--hsk${word.hsk})`
    : "";
  return (
    <span className="tooltip hoverable-hsk" style={{ color }}>
      {word.zh}
      <span className="tooltipText">
        {word.zh}
        <br />
        {word.py}
        <br />
        {word.en}
        <br />
        {`HSK ${word.hsk}`}
      </span>
    </span>
  );
};

export default HoverableWord;
