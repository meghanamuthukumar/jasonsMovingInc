import * as React from "react";
import "./PaymentPage.css";
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

const PaymentPage = () => {
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
          children: "Back",
        },
        button2: {
            variant: "text",
            disableElevation: true,
            color: "warning",
            children: "Edit Details",
        },
        button1: {
          size: "large",
          variant: "contained",
          color: "error",
          disableElevation: true,
          children: "Pay now",
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
          payment: true
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
            label: "Enter dropoff location",
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
        <div className="terms-section">
            <div className="nav-item">
                <div className="state-layer-4">
                <img className="container" src={container} />
                <span className="label">Payments</span>
                </div>
            </div>
            <ProgressBar className="navigation-bar-instance-2"
                {...propsData.navigationBar }/>

            <div className="payment-grid">
                <div className="payment-card">
                    <div className="payment-card-component">
                        <div>
                            Card Number
                        </div>
                        <div>
                            xxxx xxxx xxxx 9000
                        </div>
                    </div>
                    <div className="payment-card-component">
                        <div>
                            Card Holder
                        </div>
                        <div>
                            John Lennon
                        </div>
                    </div>
                    <div className="payment-card-component">
                        <div>
                            Expiry Date
                        </div>
                        <div>
                            10/28
                        </div>
                    </div>
                    <div className="payment-card-component">
                        <div>
                            CVV
                        </div>
                        <div>
                            xxx
                        </div>
                    </div>
                    <Button className="cancelButton editButton" {...propsData.button2} />
                </div>
                <div className="payment-cost">
                    <br />
                    <br />
                    Total Price: $115.67
                </div>
            </div>
            <div className="actions terms-actions">
                <Link to="/home">
                <Button className="cancelButton" {...propsData.button} />
                </Link>
                <Link to="/past-orders">
                <Button className="nextButton payButton" {...propsData.button1} />
                </Link>
            </div>
            <Bottombar
                className="navigation-bar-instance-1"
                {...propsData.navigationBar}
            />
        </div>
    )
}
export default PaymentPage;