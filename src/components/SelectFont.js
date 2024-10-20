import React from "react";
import "./SelectFont.css";

const SelectFont = (props) => {
    return (
        <div className="select-wrapper">
            Font:&nbsp;&nbsp;
            <select onChange={(e) => props.handleSelectFont(e.target.value)}>
                <option value="sans-serif">Default</option>
                <option value="serif">Serif</option>
                <option value="cursive">Cursive</option>
            </select>
        </div>
    );
};

export default SelectFont;
