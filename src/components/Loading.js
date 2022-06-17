import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="text-center fade-in-out">This may take a while...</div>
    </div>
  );
};

export default Loading;
