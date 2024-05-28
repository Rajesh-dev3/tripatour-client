import React from 'react'
import { SiNike } from "react-icons/si";
////styles
import "./styles.scss"
const WhyUsCard = () => {
  return (
    <div className='why-us-card'>
        <div className="why-us-card-heading"><span>
          <SiNike/></span> Insider Access</div>
        <div className="why-us-card-content">
        With our long-standing local relationships and reputation, 
        we offer a true ‘Insider Access’ to our guests
         to create a difference between a holiday and an experience.
        </div>
    </div>
  )
}

export default WhyUsCard