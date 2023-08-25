import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import './Bottombar.css'
import { Link } from 'react-router-dom';


export default function Bottombar() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='footer'>
    <BottomNavigation className='bottom-bar-nav' value={value} onChange={handleChange}>
          <Link to="/home">
            <BottomNavigationAction
              label="Home"
              value="home"
              icon={<HomeIcon />}
              className="bottom-bar-icon"
            />
            <span className='bottom-item-label'>Home</span>
          </Link>
          <Link to="/schedule-pickup">
            <BottomNavigationAction
              label="New Order"
              value="newOrder"
              icon={<PostAddIcon />}
              className="bottom-bar-icon"

            />
            <span className='bottom-item-label'>New Order</span>
          </Link>
          
          <Link to="/past-orders">
            <BottomNavigationAction
              label="Past Orders"
              value="pastOrders"
              icon={<HistoryIcon />}
              className="bottom-bar-icon"

            />
            <span className='bottom-item-label'>Past Orders</span>
          </Link>
          <Link to="/profile">
            <BottomNavigationAction 
              label="Profile" 
              value="profile" 
              icon={<PersonIcon />} 
              className="bottom-bar-icon"
            />
            <span className='bottom-item-label'>Profile</span>
          </Link>
        </BottomNavigation>
    </div>
    
  );
}