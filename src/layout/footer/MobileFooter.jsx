import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
///styles
import "./mobileFooter.scss"
const MobileFooter = () => {
  const [activeFooterTab, setActiveFooterTab] = useState(0)
  return (
    <div className='mobile-footer-container'>
        
        
        <ul>
          {/* {["Home","My Booking","Profile"].map((item,index)=>{
            return <li key={item} className={`${activeFooterTab == index?"active-footer-tab":""}`} onClick={()=>setActiveFooterTab(index)}><HomeOutlinedIcon/>{item}</li>
          })} */}
            
         
       <li className='what-app-icon'><WhatsAppIcon/></li>
        </ul>
       
    </div>
  )
}

export default MobileFooter