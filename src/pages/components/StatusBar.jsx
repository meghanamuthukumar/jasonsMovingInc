import * as React from "react";
import "./StatusBar.css";
import icons from "../assets/icons.svg";
const StatusBar = (props) => {
  return (
    <div className={`status-bar ${props.className || ""}`}>
      <div className="background">
        <span className="num-1230">{props.num || "12:30"}</span>
        <img className="icons" src={icons} />
      </div>
    </div>
  );
};
export default StatusBar;
