import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { CiHeart } from "react-icons/ci";

///styles
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
const MobileSliderCard = ({data}) => {
  const nav = useNavigate()
  const navHandler = (url)=>{
    console.log(url)
    nav(`/tour-detail/${url}`)
  }
  return (
    <>
    {/* {data?.map((item)=>{ */}

    <div className='mobile-slider-card' onClick={()=>navHandler(data?.name)} key={data.name}>
      
        <div className="card-top-col" style={{backgroundImage:`url(${data?.images})`}}>
          <div className="bike"><p>quad bike</p> </div>
          <div className="rate">
            <span><CiHeart />
            </span>
          </div>
        </div>
        <div className="card-bottom-col">
          <div className="bottom-name-col">
            <h5>{data?.name}</h5>
            <div className="star-col">

              {[1,2,3,4,5].map((item,i)=><div className={`${i+1 <= data?.star?"active-star":"star"}`} key={i}><StarIcon /> </div>)}
            </div>
            </div>
            <div className="price-col">
            <p>
              <span>Per Person from</span>
                AED {data?.price}
              </p>
              <button>Book Now</button>
            </div>
            
            
        </div>
    </div>
    {/* })} */}
    </>
  )
}

export default MobileSliderCard