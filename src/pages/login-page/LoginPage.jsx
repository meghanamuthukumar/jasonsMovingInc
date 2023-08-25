import * as React from "react";
import "./LoginPage.css";
import cellular from "../assets/cellular.svg";
import image from "../assets/image.png";
import wifi from "../assets/wifi.svg";
import checkboxes from "../assets/checkboxes.svg";
import union from "../assets/union.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import StatusBar from "../components/StatusBar";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginPage = () => {
  const propsData = {
    statusBar: {
      union: union,
      wifi: wifi,
      num: "12:30",
      cellular: cellular,
    },
    textField1: {
      id: "outlined-required",
      required: true,
      label: "Enter Full Name",
      defaultValue: "",
    },
    textField3: {
      required: true,
      id: "outlined-required",
      label: "Enter Email ID",
      defaultValue: "",
    },
    textField5: {
      required: true,
      id: "outlined-required",
      label: "Enter Phone Number",
      defaultValue: "",
    },
    button: {
      color: "success",
      disableElevation: true,
      variant: "contained",
      size: "large",
      children: "Sign up",
    },
    secondaryButton: {
      size: "small",
      color: "success",
      variant: "outlined",
      children: "Log in",
    },
  };
  return (
    <div className="sign-in-sign-up">
      <div className="customer-flow">
        <StatusBar className="status-bar-instance-1" {...propsData.statusBar} />
        <img className="image" src={image} />
        <br />
        <div className="frame-9">
          <div className="frame">
            <span className="sign-up">Sign up</span>
            <span className="get-started-by-filling-up-the-fo">
              Get started by filling up the following details
            </span>
          </div>
          <div className="frame-4">
            <TextField {...propsData.textField1} />
            <TextField {...propsData.textField3} />
            <TextField {...propsData.textField5} />
          </div>
          <div className="frame-8">
            <div className="frame-6">
              <div className="frame-5">
              <Checkbox {...label} />
                <span className="accept-terms-and-conditions">
                  Accept Terms and Conditions
                </span>
              </div>
              <Link to="/home">
                <Button className="signup-button" {...propsData.button} />
              </Link>
            </div>
            <div className="frame-7">
              <span className="already-a-user">Already a User?</span>
              <Button {...propsData.secondaryButton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;