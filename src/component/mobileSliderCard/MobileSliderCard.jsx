import React from 'react'
///styles
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
const MobileSliderCard = () => {
  const nav = useNavigate()
  const navHandler = ()=>{
    nav("/tour-detail")
  }
  return (
    <div className='mobile-slider-card' onClick={()=>navHandler()}>
        <div className="card-top-col"></div>
        <div className="card-bottom-col">
            <h5>Morning Polaris Quad Tour</h5>
            <p>AED 1672</p>
        </div>
    </div>
  )
}

export default MobileSliderCard