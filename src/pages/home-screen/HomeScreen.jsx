import * as React from "react";
import "./HomeScreen.css";
import image from "../assets/image.png";
import iconContainer3 from "../assets/iconContainer3.svg";
import union from "../assets/union.svg";
import iconContainer1 from "../assets/iconContainer1.svg";
import pngtreedeliveryWorkerPushTrol from "../assets/pngtreedeliveryWorkerPushTrol.png";
import iconContainer2 from "../assets/iconContainer2.svg";
import cellular from "../assets/cellular.svg";
import iconContainer from "../assets/iconContainer.svg";
import wifi from "../assets/wifi.svg";
import StatusBar from "../components/StatusBar";
import Bottombar from "../components/Bottombar";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const propsData = {
    statusBar: {
      num: "12:30",
      union: union,
      cellular: cellular,
      wifi: wifi,
    },
    button: {
      color: "error",
      size: "large",
      variant: "contained",
      children: "Get Started Now ",
    },
    navigationBar: {
      iconContainer1: iconContainer1,
      iconContainer2: iconContainer2,
      labelText3: "Profile",
      labelText1: "New Order",
      labelText: "Home",
      iconContainer: iconContainer,
      iconContainer3: iconContainer3,
      labelText2: "Past Orders",
    },
  };
  return (
    <div className="home">
      <div className="nav-item">
        <div className="state-layer-2">
          <span className="label">Jason’s Moving Inc.</span>
          <div className="container">
            <div className="state-layer-1" />
          </div>
        </div>
      </div>
      <div className=".flex-container-home">
        <div className="grid-container">
          <div className="grid-item">
           <img className="image" src={image} />
          </div>
          <div className="grid-item">
            <span className="moving-made-easy-professional-mo">
              MOVING MADE EASY! Professional movers serving the Greater Kingston,
              Belleville, Trenton, Quinte, Prince Edward County, Hastings, and
              Northumberland regions.
            </span>
          </div>
          
        </div>
        <br />
        <img
          className="pngtreedelivery-worker-push-trol"
          src={pngtreedeliveryWorkerPushTrol}
        />
      </div>
      <Link to="/schedule-pickup">
        <Button className="button-instance-1 home-button" {...propsData.button} />
      </Link>
      <Bottombar
        className="navigation-bar-instance-1"
        {...propsData.navigationBar}
      />
    </div>
  );
};
export default HomeScreen;