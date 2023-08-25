import * as React from "react";
import "./ListItemListItem0Density.css";
import horizontalmiddleInset from "../assets/horizontalmiddleInset.svg";
import buildingBlocksstateLayer1Enab from "../assets/checkboxes.svg";
const ListItemListItem0Density = (props) => {
  return (
    <div className={`list-item-list-item-0-density ${props.className || ""}`}>
      <img
        className="building-blocksstate-layer-1-enab"
        src={
          props.buildingBlocksstateLayer1Enab || buildingBlocksstateLayer1Enab
        }
      />
      <div className="cat-absolute-container-1">
        <div className="state-layer">
          <div className="content">
            <span className="headline">{props.headline || "Phone"}</span>
          </div>
          <div className="trailing-element">
            <span className="metadata-1">
              {props.metadata || "543-343-2454"}
            </span>
          </div>
        </div>
        <img
          className="horizontalmiddle-inset"
          src={props.horizontalmiddleInset || horizontalmiddleInset}
        />
      </div>
    </div>
  );
};
export default ListItemListItem0Density;
