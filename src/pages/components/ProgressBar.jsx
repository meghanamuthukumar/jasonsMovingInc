import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/PinDrop';
import PostAddIcon from '@mui/icons-material/LocalShipping';
import HistoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Payment';
import './Progressbar.css'
import { Link } from 'react-router-dom';


export default function ProgressBar(props) {
  const [value, setValue] = React.useState('Pickup');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='progress-bar'>
        <BottomNavigation className='progess-bar-nav' value={value} onChange={handleChange}>
            <Link to="/schedule-pickup">
                <BottomNavigationAction
                label="Pickup"
                value="Pickup"
                icon={<HomeIcon />}
                className="progress-bar-icon"
                id={(props.pickup == true ? "progress-selected" : "")}
                />
                <span className='progress-item-label'>Pick up</span>
            </Link>
            <Link to="/schedule-pickup">
                <BottomNavigationAction
                label="Dropoff"
                value="Dropoff"
                icon={<PostAddIcon />}
                className="progress-bar-icon"
                id={(props.dropoff == true ? "progress-selected" : "")}
                />
                <span className='progress-item-label'>Drop off</span>

            </Link>
            
            <Link to="/past-orders">
                <BottomNavigationAction
                label="Additems"
                value="Additems"
                icon={<HistoryIcon />}
                className="progress-bar-icon"
                id={(props.addItems == true ? "progress-selected" : "")}
                />
                <span className='progress-item-label'>Add items</span>
            </Link>
            <Link to="/profile">
                <BottomNavigationAction
                    id={(props.payment == true ? "progress-selected" : "")}
                    label="Payment" 
                    value="Payment" 
                    icon={<PersonIcon />} 
                    className="progress-bar-icon"/>
                <span className='progress-item-label'>Payment</span>
            </Link>
        </BottomNavigation>
    </div>
    
  );
}