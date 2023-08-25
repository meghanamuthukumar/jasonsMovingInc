import React from 'react'
import './CategoryPage.css'
import union from "../assets/union.svg";
import wifi from "../assets/wifi.svg";
import iconContainer2 from "../assets/iconContainer2.svg";
import iconContainer from "../assets/iconContainer.svg";
import iconContainer3 from "../assets/iconContainer3.svg";
import cellular from "../assets/cellular.svg";
import iconContainer1 from "../assets/iconContainer1.svg";
import container from "../assets/container.svg";
import StatusBar from "../components/StatusBar";
import Bottombar from "../components/Bottombar";
import BuildingBlocksInput1 from "../components/BuildingBlocksInput1";
import BuildingBlocksInput from "../components/BuildingBlocksInput";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import ProgressBar from '../components/ProgressBar';
import LabelBottomNavigation from '../components/Bottombar'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CategoryPage = () => {
  const propsData = {
    statusBar: {
      wifi: wifi,
      num: "12:30",
      union: union,
      cellular: cellular,
    },
    textField1: {
        id: "outlined-required",
        required: true,
        label: "Add a new category",
        defaultValue: "",
      },
    navigationBar: {
        labelText3: "Profile",
        iconContainer3: iconContainer3,
        iconContainer2: iconContainer2,
        iconContainer: iconContainer,
        labelText2: "Past Orders",
        labelText: "Home",
        iconContainer1: iconContainer1,
        labelText1: "New Order",
        progressId: "pickup-selected",
        pickup: true,
        dropoff: true,
        addItems: true,
        payment: false
      },
      button: {
        variant: "text",
        disableElevation: true,
        color: "warning",
        children: "Cancel",
      },
      button1: {
        size: "large",
        variant: "contained",
        color: "error",
        disableElevation: true,
        children: "Next",
      },
  };
  return (
    <div className="add-item">
        <div className="nav-item">
                <div className="state-layer-4">
                <img className="container" src={container} />
                <span className="label">Add items by category</span>
                </div>
        </div>
      <ProgressBar className="status-bar-instance-1" {...propsData.navigationBar} />
      <br />
      <div className='category-segment'>
        <span>Choose category:</span>
        <div className="text-field">
            <TextField {...propsData.textField1} />
            
        </div>
        <div className="actions category-actions">
            <Link to="/home">
                <Button className="cancelButton" {...propsData.button} />
            </Link>
            <Link to="/list-category">
                <Button className="nextButton" {...propsData.button1} />
            </Link>
        </div>
      </div>
        
      <Bottombar
        className="navigation-bar-1-instance-1"
        {...propsData.navigationBar}
      />
    </div>
  );
};
export default CategoryPage;