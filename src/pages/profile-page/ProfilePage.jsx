import * as React from "react";
import { useState, useEffect } from 'react';
import "./ProfilePage.css";
import container from "../assets/container.svg";
import icon from "../assets/icon.svg";
import horizontalmiddleInset from "../assets/horizontalmiddleInset.svg";
import cellular from "../assets/cellular.svg";
import iconContainer1 from "../assets/iconContainer1.svg";
import iconContainer from "../assets/iconContainer.svg";
import wifi from "../assets/wifi.svg";
import iconContainer3 from "../assets/iconContainer3.svg";
import buildingBlocksstateLayer1Enab from "../assets/checkboxes.svg";
import divider from "../assets/divider.svg";
import vector from "../assets/vector.svg";
import union from "../assets/union.svg";
import iconContainer2 from "../assets/iconContainer2.svg";
import Bottombar from "../components/Bottombar";
import ListItemListItem0Density from "../components/ListItemListItem0Density";
import StatusBar from "../components/StatusBar";
import List from "../components/List";

const ProfilePage = () => {
  const propsData = {
    statusBar: {
      num: "12:30",
      cellular: cellular,
      union: union,
      wifi: wifi,
    },
    list: {
      listItemListItem0Density1: {
        buildingBlocksstateLayer1Enab: buildingBlocksstateLayer1Enab,
        horizontalmiddleInset: horizontalmiddleInset,
        headline: "Phone",
        metadata: "543-343-2454",
      },
      listItemListItem0Density3: {
        buildingBlocksstateLayer1Enab: buildingBlocksstateLayer1Enab,
        horizontalmiddleInset: horizontalmiddleInset,
        headline: "Email",
        metadata: "",
        checkboxes: buildingBlocksstateLayer1Enab,
      },
      listItemListItem0Density10: {
        buildingBlocksstateLayer1Enab: buildingBlocksstateLayer1Enab,
        metadata: "6",
        headline: "Number of trips requested",
      },
    },
    listItem3: {
      metadata: "9080",
      headline: "Number of points earned ",
      buildingBlocksstateLayer1Enab: buildingBlocksstateLayer1Enab,
    },
    navigationBar: {
      iconContainer1: iconContainer1,
      labelText1: "New Order",
      labelText3: "Profile",
      labelText2: "Past Orders",
      labelText: "Home",
      iconContainer2: iconContainer2,
      iconContainer3: iconContainer3,
      iconContainer: iconContainer,
    },
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/customer/cindysudeikis');
    const jsonData = await response.json();
    setData(jsonData);
  };
  return (
    <div className="customer-profile">
      <div className="profile ">
        <div className="nav-item nav-item-profile-page">
          <div className="state-layer-13">
            <img className="container" src={container} />
            <span className="label">Profile</span>
          </div>
        </div>
        <div className="flex-container">
          <img className="vector" src={vector} />
          <img className="icon" src={icon} />
        </div>
          
          <div>
            
             <p className="profile-name">{data.name}</p>
          
             <table>
               <tr className="table-row">
                 <td className="table-item">Phone</td>
                 <td className="table-item">{data.phone}</td>
               </tr>
               <tr className="table-row">
                 <td className="table-item">Email</td>
                 <td className="table-item">{data.email}</td>
               </tr>
               <tr className="table-row">
                 <td className="table-item">Number of trips requested</td>
                 <td className="table-item">{data.noOfHauls}</td>
               </tr>
               <tr className="table-row">
                 <td className="table-item">Number of points earned</td>
                 <td className="table-item">9080</td>
               </tr>
             </table>
          </div>
        {/* <div className="flex-container-1">
            
          <List className="list-instance-1" {...propsData.list} />
          <div className="cat-absolute-container">
            <span className="metadata">catherine@gmail.com</span>
          </div>
          <ListItemListItem0Density
            className="list-item-3-instance"
            {...propsData.listItem3}
          />
        </div> */}
        <Bottombar
          className="navigation-bar-instance-1"
          {...propsData.navigationBar}
        />
      </div>
    </div>
  );
};
export default ProfilePage;