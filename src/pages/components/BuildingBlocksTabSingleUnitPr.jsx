import * as React from "react";
import "./BuildingBlocksTabSingleUnitPr.css";
import indicator from "../assets/indicator.svg";
const BuildingBlocksTabSingleUnitPr = (props) => {
  return (
    <div
      className={`building-blocks-tab-single-unit-pr ${props.className || ""}`}
    >
      <div className="state-layer">
        <div className="tab-contents">
          <span className="label-2">{props.label || "In Progress"}</span>
          <img className="indicator" src={indicator} />
        </div>
      </div>
    </div>
  );
};
export default BuildingBlocksTabSingleUnitPr;
