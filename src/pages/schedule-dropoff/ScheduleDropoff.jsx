import * as React from "react";
import "./ScheduleDropoff.css";
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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from "@mui/material/Button";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import ProgressBar from '../components/ProgressBar';


const ScheduleDropoff = () => {
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
      addItems: false,
      payment: false
    },
  };
  return (
    <div className="schedule-pick-up schedule-drop-off">
      <div className="schedule-pickup">
        <div className="nav-item">
          <div className="state-layer-4">
            <img className="container" src={container} />
            <span className="label">Schedule your drop up</span>
          </div>
        </div>
        <ProgressBar className="navigation-bar-instance-2"
                {...propsData.navigationBar }/>

        <span className="schedule-pickup-date">Schedule dropoff date:</span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
        <span className="schedule-pickup-time">Schedule dropoff time:</span>
        <div className="input">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Time picker" />
      </DemoContainer>
    </LocalizationProvider>

        </div>
        <div className="actions">
          <Link to="/home">
            <Button className="cancelButton" {...propsData.button} />
          </Link>
          <Link to="/dropoff-location">
            <Button className="nextButton" {...propsData.button1} />
          </Link>
        </div>
        <Bottombar
          className="navigation-bar-instance-1"
          {...propsData.navigationBar}
        />
      </div>
    </div>
  );
};
export default ScheduleDropoff;