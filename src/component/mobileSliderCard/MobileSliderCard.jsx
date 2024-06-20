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
    <>
    {data?.map((item)=>{
      return(

    <div className='mobile-slider-card' onClick={()=>navHandler(item?._id)} key={item.name}>
        <div className="card-top-col" style={{backgroundImage:`url(${item?.images})`}}></div>
        <div className="card-bottom-col">
            <h5>{item?.name}</h5>
            <span>{item?.description}</span>
            <p>AED {item?.price}</p>
        </div>
    </div>
      )
    })}
    </>
  )
}

export default MobileSliderCard