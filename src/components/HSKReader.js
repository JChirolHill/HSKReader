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
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [font, setFont] = useState("inherit");
    const value = {
        hskToggles,
        setHskToggles,
        masterIsOn,
        setMasterIsOn,
        masterIsActive,
        setMasterIsActive,
        font,
        setFont,
    };

    const handleReturnEditModeClick = () => {
        navigate("/");
    };

    return (
        <HSKReaderContext.Provider value={value}>
            <div className="d-flex justify-content-between">
                <p>
                    Toggle HSK levels on the side bar based on your level.
                    <br />
                    Hover over words to see their definitions. (Non-HSK words
                    will not have definitions.)
                </p>
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
            </div>
            <div className="d-flex justify-content-center">
                <div className="main-content">
                    <HSKReaderContent text={text} font={font} />
                </div>
                <div
                    className="sidebar"
                    style={{ display: isSidebarVisible ? "block" : "none" }}
                >
                    <button className="btn" onClick={handleReturnEditModeClick}>
                        New Text
                    </button>
                    <ToggleMenu />
                </div>
            </div>
        </HSKReaderContext.Provider>
    );
};

export default HSKReader;
