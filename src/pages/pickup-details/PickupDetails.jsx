import React from 'react'
import './PickupDetails.css'
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
const PickupDetails = (props) => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const propsData = {
        statusBar: {
          union: union,
          wifi: wifi,
          cellular: cellular,
          num: "12:30",
        },
        frame: {
          required: true,
          id: "outlined-required",
        },
        hourInput: {
          timeText: "07",
        },
        minuteInput: {
          timeText: "00",
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
          dropoff: false,
          addItems: false,
          payment: false
        },
        textField1: {
            id: "outlined-required",
            required: false,
            label: "Unit number",
            defaultValue: "",
        },
        textField2: {
            id: "outlined-required",
            required: false,
            label: "Buzz code",
            defaultValue: "",
        },
        textField3: {
            id: "outlined-required",
            required: false,
            label: "Enter pickup location",
            defaultValue: "",
        },
        textField4: {
            id: "outlined-required",
            required: false,
            label: "Number of flights",
            defaultValue: "",
        },
        textField5: {
            id: "outlined-required",
            required: false,
            label: "Size",
            defaultValue: "",
        },
        textField6: {
            id: "outlined-required",
            required: false,
            label: "Additional Details",
            defaultValue: "",
        },
      };
    return (
        <div className="schedule-pick-up pickup-details">
            <div className="schedule-pickup">
            <div className="nav-item">
                <div className="state-layer-4">
                <img className="container" src={container} />
                <span className="label">Pick up location</span>
                </div>
            </div>
            <ProgressBar className="navigation-bar-instance-2"
                {...propsData.navigationBar }/>
            {/* <div className="frame-4">
                <TextField {...propsData.textField3} />
            </div> */}

            <div className="pickup-details-form">
                <div className='toggle-group'>
                    <p>Type of location</p>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        className='toggle-button-group'
                    >
                        <ToggleButton className='toggle-button' value="left" aria-label="left aligned">
                            <span>Residential</span>
                        </ToggleButton>
                        <ToggleButton className='toggle-button' value="center" aria-label="centered">
                            <span>Apartment</span>
                        </ToggleButton>
                        <ToggleButton className='toggle-button' value="right" aria-label="right aligned">
                            <span>Commercial</span>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className='unit-buzz-div'>
                    <div className='unit-number'>
                        <TextField className='pickup-textfield' {...propsData.textField1} />
                        <p className='pickup-textfield-helper'>Please enter your unit/suite number</p>
                    </div>
                    <div className='buzz-code'>
                        <TextField className='pickup-textfield' {...propsData.textField2} />
                        <p className='pickup-textfield-helper'>Please enter your buzz/access code.</p>
                    </div>
                </div>
                <div className='no-of-flights'>
                    <TextField className='flights-textfield' {...propsData.textField4} />
                    <p className='flights-textfield-helper'>Enter total number of flight to reach the home.</p>
                </div>
                <div className='no-of-flights'>
                    <TextField className='flights-textfield' {...propsData.textField5} />
                    <p className='flights-textfield-helper'>Enter the size of the home. (eg: 1 Bed, 2 Bed, 3 Bed).</p>
                </div>
                <div className='no-of-flights'>
                    <TextField className='flights-textfield' {...propsData.textField6} />
                    <p className='flights-textfield-helper'>Enter any additional directions for the delivery. 
                        (eg: drop off at the door).</p>
                </div>
                <div className="frame-5">
                <Checkbox {...label} />
                    <span className="accept-terms-and-conditions">
                    Would you like to save this address?
                    </span>
                </div>
            </div>
            <div className="actions">
                <Link to="/home">
                <Button className="cancelButton" {...propsData.button} />
                </Link>
                <Link to="/schedule-dropoff">
                <Button className="nextButton" {...propsData.button1} />
                </Link>
                
            </div>
            <Bottombar
                className="navigation-bar-instance-1"
                {...propsData.navigationBar}
            />
            </div>
        </div>
    )
}

export default PickupDetails;
