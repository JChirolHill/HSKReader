import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./InputTextForm.css";

const InputTextForm = (props) => {
  const [text, setText] = useState(props.text ? props.text : "");
  const [error, setError] = useState("");
  const [font] = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Put a character limit to prevent too huge processing time
    if (event.target[0].value.length > 5000) {
      setError(
        "Text entered is too long, please consider breaking up into smaller sections."
      );
    } else {
      setError("");

      // Remove all leading and trailing spaces on each line
      let noLeadingTrailing = text.replace(/\n+\s+/gm, "\n");

      props.onChangeText(noLeadingTrailing);
      navigate("/reader");
    }
  };

  return (
    <div>
      <p>Paste your Chinese text directly below:</p>
      {error && <p className="text-error">* {error}</p>}
      <form onSubmit={handleSubmit} className="d-flex">
        <textarea
          className="main-content"
          style={{ fontFamily: font }}
          rows={20}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="sidebar">
          <button type="submit" className="btn">
            Enter Reader Mode!
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTextForm;
