import * as React from "react";
import "./BuildingBlocksInput.css";
const BuildingBlocksInput = (props) => {
  return (
    <div className={`building-blocks-input ${props.className || ""}`}>
      <div className="selected">
        <span className="time-text">{props.timeText || "07"}</span>
      </div>
    </div>
  );
};
export default BuildingBlocksInput;
