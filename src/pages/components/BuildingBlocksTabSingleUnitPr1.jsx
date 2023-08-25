import * as React from "react";
import "./BuildingBlocksTabSingleUnitPr1.css";
const BuildingBlocksTabSingleUnitPr1 = (props) => {
  return (
    <div
      className={`building-blocks-tab-single-unit-pr-1 ${
        props.className || ""
      }`}
    >
      <div className="state-layer-1">
        <div className="tab-contents-1">
          <span className="label-1">{props.label || "Upcoming"}</span>
        </div>
      </div>
    </div>
  );
};
export default BuildingBlocksTabSingleUnitPr1;
