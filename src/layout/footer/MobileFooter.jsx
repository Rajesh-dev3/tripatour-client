import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
///styles
import "./mobileFooter.scss"
const MobileFooter = () => {
  const [activeFooterTab, setActiveFooterTab] = useState(0)
  return (
    <div className='mobile-footer-container'>
        <ul>
          {["Home","My Booking","Profile"].map((item,index)=>{
            return <li key={item} className={`${activeFooterTab == index?"active-footer-tab":""}`} onClick={()=>setActiveFooterTab(index)}><HomeOutlinedIcon/>{item}</li>
          })}
            
         
        
        </ul>
    </div>
  )
}

export default MobileFooter