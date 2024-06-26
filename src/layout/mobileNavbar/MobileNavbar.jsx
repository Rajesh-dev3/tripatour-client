import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
///
import "./styles.scss"
import { mobileLogo } from '../../assets/images'
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const MobileNavbar = () => {

  return (
    <div className='mobile-navbar-container'>
      <div className="mbile-nav-left-col">
        <Link to={"/"}>
          <img src={mobileLogo} alt="" />
        </Link>
      </div>
      <div className="mbile-nav-right-col">
      <a href="https://api.whatsapp.com/send?phone=+971526063261&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details" >
          <div className="bell-icon">
            {/* <CircleNotificationsIcon/> */}
            <FaWhatsapp />
          </div>
          <div className="welcome-heading">
            <p>+971 526063261</p>
            {/* <p>Welcome back,</p> */}
            {/* <p>Rachelle!</p> */}
          </div>
      </a>
      </div>
    </div>
  )
}

export default MobileNavbar