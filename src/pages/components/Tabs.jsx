import * as React from "react";
import "./Tabs.css";
import divider from "../assets/divider.svg";
import BuildingBlocksTabSingleUnitPr1 from "./BuildingBlocksTabSingleUnitPr1";
import BuildingBlocksTabSingleUnitPr from "./BuildingBlocksTabSingleUnitPr";
const Tabs = (props) => {
  return (
    <div className={`tabs ${props.className || ""}`}>
      <div className="tab-group">
        <BuildingBlocksTabSingleUnitPr1
          {...props.buildingBlocksTabSingleUnitPr1}
        />
        <BuildingBlocksTabSingleUnitPr
          {...props.buildingBlocksTabSingleUnitPr4}
        />
        <BuildingBlocksTabSingleUnitPr1
          {...props.buildingBlocksTabSingleUnitPr2}
        />
      </div>
      {/* <img className="divider" src={props.divider || divider} /> */}
    </div>
  );
};
export default Tabs;
