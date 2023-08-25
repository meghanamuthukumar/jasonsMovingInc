import * as React from "react";
import "./BuildingBlocksInput1.css";
const BuildingBlocksInput1 = (props) => {
  return (
    <div className={`building-blocks-input-1 ${props.className || ""}`}>
      <div className="default-zg-vm-yx-vsd-a-base">
        <span className="time-text-1">{props.timeText || "00"}</span>
      </div>
    </div>
  );
};
export default BuildingBlocksInput1;
