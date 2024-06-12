import React, { useState } from 'react'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
////styles
import "./mobileDetail.scss"
import { Rating } from '@mui/material';
import { CustomAccordion } from './styled';
const MobileDetailPage = () => {
    const [value, setValue] =useState(4);
  return (
    <div>
        <div className="detail-center-col">

        <div className="mobile-detail-top-banner">
            <div className="mobile-deatil-banner-head">
                <div className="head-left-col">
                    <div className="head-icon">
<KeyboardBackspaceOutlinedIcon/>
                    </div>
                    <button>Buggy Tours</button>
                </div>
                <div className="head-right-col">
<button>Book Now</button>
                <div className="head-icon">
<ReplyOutlinedIcon/>
</div>
                </div>
            </div>
<div className="mobile-detail-banner-bottom-col">
    <ul>
        <li>
            <div className="icon"><AccessAlarmsIcon/></div>
            <div className="text-b">Duration 6Hr.</div>
        </li>
        <li>
            <div className="icon"><AirportShuttleOutlinedIcon/></div>
            <div className="text-b">Transfer Included</div>
        </li>
        <li>
            <div className="icon"><LocalHotelOutlinedIcon/></div>
            <div className="text-b">Hotel Pickup</div>
        </li>
        <li>
            <div className="icon"><RamenDiningOutlinedIcon/></div>
            <div className="text-b">Meals Included</div>
        </li>
    </ul>
</div>
        </div>
        <div className="detail-heading">
            <h2>Morning Polaris Quad Tour</h2>
        </div>
        <div className="price-rating-section">
            <p>AED 1672/-</p>
<div>
    <div className="star-rating">

<Rating
        size="small"
        name="simple-controlled"
        color='green'
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
/>
        </div>
            <div className="number-rating">
           
              <span>3.9</span> <p>Very Good</p>
              (44 VERIFIED RATINGS)
            </div>
</div>
        </div>
        <hr />
        <div className="detail-description">
        Experience the thrill of Dubai's desert with an exhilarating quad buggy adventure! Ride powerful buggies over golden dunes, navigating the stunning and rugged terrain. Guided tours ensure safety and fun, making it suitable for all skill levels. Witness breathtaking desert vistas and 
        capture unforgettable moments.
        <span>
            
             SHOW MORE 
            </span>
        </div>
        <div className="experience-section">
            <h2>Experience</h2>
            <CustomAccordion>
        <AccordionSummary
          expandIcon={null}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            // filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            }}
        >
          <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:"14px"}}>

<span style={{width:"8px",height:"8px",background:"green",borderRadius:"100px"}}></span>
Highlights
   </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </CustomAccordion>
            <CustomAccordion>
        <AccordionSummary
          expandIcon={null}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            }}
        >
          <div style={{display:"flex",alignItems:"center",gap:"10px",fontSize:"14px"}}>

<span style={{width:"8px",height:"8px",background:"green",borderRadius:"100px"}}></span>
Highlights
   </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </CustomAccordion>
     
        </div>
        </div>
    </div>
  )
}

export default MobileDetailPage