import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
///styles
import "./mobileFooter.scss"
import { Link } from 'react-router-dom';
const MobileFooter = () => {
  const [activeFooterTab, setActiveFooterTab] = useState(0)
  return (
    <div className='mobile-footer-container'>
        
        
        <ul>
          {/* {["Home","My Booking","Profile"].map((item,index)=>{
            return <li key={item} className={`${activeFooterTab == index?"active-footer-tab":""}`} onClick={()=>setActiveFooterTab(index)}><HomeOutlinedIcon/>{item}</li>
          })} */}
            
         
            <a href="https://api.whatsapp.com/send?phone=+971526063261&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details" >
       <li className='what-app-icon'>
        <WhatsAppIcon/>
        </li>
        </a>
        </ul>

       
    </div>
  )
}

export default MobileFooter