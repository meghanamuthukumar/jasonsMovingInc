import * as React from "react";
import "./PastOrder.css";
import { useState, useEffect } from 'react';
import labelText from "../assets/labelText.svg";
import iconContainer from "../assets/iconContainer.svg";
import cellular from "../assets/cellular.svg";
import iconContainer1 from "../assets/iconContainer1.svg";
import container from "../assets/container.svg";
import wifi from "../assets/wifi.svg";
import divider from "../assets/divider.svg";
import iconContainer3 from "../assets/iconContainer3.svg";
import iconContainer2 from "../assets/iconContainer2.svg";
import union from "../assets/union.svg";
import StatusBar from "../components/StatusBar";
import Tabs from "../components/Tabs";
import Bottombar from "../components/Bottombar";
import Button from "@mui/material/Button";


const PastOrders = () => {
  const propsData = {
    statusBar: {
      num: "12:30",
      cellular: cellular,
      wifi: wifi,
      union: union,
    },
    tabs: {
      buildingBlocksTabSingleUnitPr4: {
        label: "Upcoming",
      },
      buildingBlocksTabSingleUnitPr1: {
        label: "In Progress",
      },
      buildingBlocksTabSingleUnitPr2: {
        label: "Past",
      },
      divider: divider,
    },
    navigationBar: {
      iconContainer2: iconContainer2,
      labelText: "Home",
      labelText1: "New Order",
      labelText3: "Profile",
      iconContainer3: iconContainer3,
      iconContainer1: iconContainer1,
      labelText2: "Past Orders",
      iconContainer: iconContainer,
    },
    button1: {
      size: "large",
      variant: "contained",
      color: "error",
      disableElevation: true,
      children: "View Details",
    },
  };
  //Fetch upcoming hauls
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/hauls/upcoming/cindysudeikis');
    const jsonData = await response.json();
    setData(jsonData);
  };
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="in-progress-orders">
      <div className="past-orders">
        <div className="nav-item">
          <div className="state-layer-5">
            <img className="container" src={container} />
            <span className="label">Past orders</span>
          </div>
        </div>
        <Tabs className="tabs-instance-1" {...propsData.tabs} />
        {data.map((element) => (
          <div className="order-details">
            <div className="payment-card past-order">
              <div className="payment-card-component">
                <div>
                  Pick up
                </div>
                <div>
                  {element.pickupLocation.typeOfLocation + " , " + element.pickupLocation.size}
                </div>
              </div>
              <div className="payment-card-component">
                <div>
                  Date
                </div>
                <div>
                {new Date(element.pickupDate).toLocaleDateString('en-US', options)}
                </div>
              </div>
              <div className="payment-card-component">
                <div>
                  Pick up
                </div>
                <div>
                {element.pickupLocation.address}
                </div>
              </div>
              <div className="payment-card-component">
                <div>
                  Drop off
                </div>
                <div>
                {element.dropOffLocation.address}
                </div>
              </div>
              <Button className="nextButton detailsButton" {...propsData.button1} />

            </div>
          </div>
        ))}
        
        {/* <span className="label-text">No orders under this category.</span> */}
        <img className="label-text-1" src={labelText} />
        <Bottombar
          className="navigation-bar-instance-1"
          {...propsData.navigationBar}
        />
      </div>
    </div>
  );
};
export default PastOrders;