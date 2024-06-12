import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
///
import "./styles.scss"
import { mobileLogo } from '../../assets/images'
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
   
  return (
    <div className='mobile-navbar-container'>
      <div className="mbile-nav-left-col">
        <Link to={"/"}>
        <img src={mobileLogo} alt="" />
        </Link>
      </div>
      <div className="mbile-nav-right-col">
        <div className="welcome-heading">
<p>Welcome back,</p>
<p>Rachelle!</p>
        </div>
        <div className="bell-icon">
<CircleNotificationsIcon/>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar