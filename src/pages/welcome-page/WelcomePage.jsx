import * as React from "react";
import "./WelcomePage.css";
import union from "./../assets/union.svg";
import cellular from "./../assets/cellular.svg";
import image from "./../assets/image.png";
import wifi from "./../assets/wifi.svg";
import StatusBar from "../components/StatusBar";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const propsData = {
    statusBar: {
      num: "12:30",
      wifi: wifi,
      cellular: cellular,
      union: union,
    },
    button: {
      disableElevation: true,
      color: "secondary",
      size: "large",
      variant: "outlined",
      children: "Customer",
    },
    button1: {
      disableElevation: true,
      color: "secondary",
      size: "large",
      variant: "outlined",
      children: "Employee",
    },
    button2: {
      disableElevation: true,
      color: "secondary",
      size: "large",
      variant: "outlined",
      children: "Manager",
    },
  };
  return (
    <div className="welcome-page">
      <div className="customer-flow">
        {/* <StatusBar className="status-bar-instance-1" {...propsData.statusBar} /> */}
        <img className="image" src={image} />
        <div className="frame-1">
          <div className="frame">
            <h3 className="welcome welcome-page-text">Welcome!</h3>
            <span className="please-select-one-of-the-options">
              Please select one of the options below -{" "}
            </span>
          </div>
        </div>
        <Link to="/sign-in" > 
          <Button  className="button-instance-1">
            CUSTOMER
          </Button>
        </Link>
        <Button className="button-1-instance" {...propsData.button1} />
        <Button className="button-2-instance" {...propsData.button2} />
      </div>
    </div>
  );
};

export default WelcomePage;
