import React from 'react'
import './AddItems.css'
import { useState, useEffect } from 'react';
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
import AttachFile from '@mui/icons-material/AttachFile';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddItems = () => {
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
      button2: {
        size: "large",
        variant: "contained",
        color: "error",
        disableElevation: true,
        children: "Add new item",
      },
      height: {
        id: "outlined-required",
        required: false,
        label: "Height",
    },
    width: {
      id: "outlined-required",
      required: false,
      label: "Width",
  },
  length: {
    id: "outlined-required",
    required: false,
    label: "Length",
},
weight: {
  id: "outlined-required",
  required: false,
  label: "Weight",
  defaultValue: "",
},
  };
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      }
    }
    

    //Fetch items list
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/items/all');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const [category, setCategory] = React.useState('');
  const [width, setWidth] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
        //get dimensions and weight
        data.forEach((item) => {
          if(item.itemName === event.target.value){
            setWidth(item.width)
            setLength(item.length)
            setWeight(item.weight)
          }
        })
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
      <div className="add-items-segment">
        <div className="choose-category">
            <div className="choose-category-1">
                <span>Choose Category</span>
            </div>
            <div className='choose-category-2'>
                {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Category</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={10}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Seating</MenuItem>
                        <MenuItem value={20}>Tables</MenuItem>
                        <MenuItem value={30}>Storage</MenuItem>
                        <MenuItem value={10}>Beds</MenuItem>
                        <MenuItem value={20}>Desks</MenuItem>
                        <MenuItem value={30}>Entertainment</MenuItem>
                        <MenuItem value={10}>Outdoor</MenuItem>
                        <MenuItem value={20}>Office</MenuItem>
                        <MenuItem value={30}>Kids</MenuItem>

                    </Select>
                </FormControl> */}
            </div>
        </div>
        
        <div className="add-items-form">
                <div className='no-of-flights '>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={category}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {data.map((element) => (
                        <MenuItem value={element.itemName}>{element.itemName}</MenuItem>))}
                        </Select>
                        <FormHelperText>Choose an item from the dropdown</FormHelperText>
                    </FormControl>
                </div>
                <div className="dimensions-segment">
                    <div className='no-of-flights dimentions-input'>
                        <TextField id='height' className='flights-textfield dimentions-input-textfield' {...propsData.height} />
                        <p className='flights-textfield-helper'>Enter the height of the item in ft.</p>
                    </div>
                    <div className='no-of-flights dimentions-input'>
                        <TextField value={width} className='flights-textfield dimentions-input-textfield' {...propsData.width} />
                        <p className='flights-textfield-helper'>Enter the width of the item in ft.</p>
                    </div>
                    <div className='no-of-flights dimentions-input'>
                        <TextField value={length} className='flights-textfield dimentions-input-textfield' {...propsData.length} />
                        <p className='flights-textfield-helper'>Enter the length of the item in ft.</p>
                    </div>
                </div>
                <div className='weight-segment'>
                    <div className='no-of-flights'>
                        <TextField value={weight} className='flights-textfield ' {...propsData.weight} />
                        <p className='flights-textfield-helper'>Enter the weight of the item in lbs.</p>
                    </div>
                </div>
                <div className="frame-5">
                <Checkbox {...label} />
                    <span className="accept-terms-and-conditions">
                    Is it a fragile?
                    </span>
                </div>
        </div>
    
        
        <div className="actions category-actions">
            <Link to="/home">
                <Button className="cancelButton" {...propsData.button} />
            </Link>
            <Link to="/review-items">
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
export default AddItems;