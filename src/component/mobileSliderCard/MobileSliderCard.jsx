import React from 'react'
///styles
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
const MobileSliderCard = ({data}) => {
  const nav = useNavigate()
  const navHandler = (url)=>{
    nav(`/tour-detail/${url}`)
  }
  return (
    <div className='mobile-slider-card' onClick={()=>navHandler(data?._id)}>
        <div className="card-top-col" style={{backgroundImage:`url(${data?.images})`}}></div>
        <div className="card-bottom-col">
            <h5>{data?.name}</h5>
            <span>{data?.description}</span>
            <p>AED {data?.price}</p>
        </div>
    </div>
  )
}

export default MobileSliderCard