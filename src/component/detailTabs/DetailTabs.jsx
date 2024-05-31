import { useEffect, useState } from "react"
import { buggy, cardImage, topBanner } from "../../assets/images"
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss"
import { Rating } from "@mui/material";
import { useAddFavouriteTourMutation, useGetFavoriteTourQuery } from "../../service/favourite/AddFavourite";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useParams } from "react-router-dom";
import { notify } from "../toast/Toast";
const DetailTabs = () => {
  const [activePreviewImg, setActivePreviewImg] = useState(topBanner)
  const [value, setValue] =useState(4);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const {id} = useParams()
  const [activeTabs, setActiveTabs] = useState(0)
  const tabs = ["Highlights","Inclusions","Need to Know","Cancellation Policy","Reviews"]
  const [trigger,{data}]=useAddFavouriteTourMutation()
  const addFavouriteTour = ()=>{
    trigger({tourId:id})
  }
  useEffect(() => {
   if(data){
    notify(data?.message).success()
   }
  }, [data])
  const {data:favouriteData} = useGetFavoriteTourQuery()
  const [checkFavourite, setCheckFavourite] = useState(false)
  useEffect(() => {
    const checkFav =favouriteData?.data.find((item)=>item?._id == id)
      // if(item._id == id){
      //  
      // }else{
      //   return (
      //     <FavoriteOutlinedIcon/>
      //   )
      // }
      if(Object.keys(checkFav || {} ).length){
        setCheckFavourite(true)
      }else{
        setCheckFavourite(false)
      }
  }, [id,favouriteData])
  

  return (

    <div className="tabs-container">
      <div className="tabs-title">
        <ul>
          {tabs.map((item,index)=>{
            return(

              <li key={item} onClick={()=>setActiveTabs(index)} className={activeTabs == index?"active-tab":""}>{item}</li>
            )
          })}
         
        </ul>
      </div>
      <div className="tabs-content">
        <div className="slides">
          <div className="preview-slide">
            <img src={activePreviewImg} alt="" />
            <div className={` ${checkFavourite ?"heart-icon2":"heart-icon"}`} onClick={()=>addFavouriteTour()}>{!checkFavourite ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon /> }</div>
          </div>
          <div className="slides-list">
          <Slider {...settings}>
            <img src={topBanner} alt="" onClick={()=>setActivePreviewImg(topBanner)}/>
          <img src={buggy} alt="" onClick={()=>setActivePreviewImg(buggy)}/>
            <img src={cardImage} alt="" onClick={()=>setActivePreviewImg(cardImage)}/>
            <img src={buggy} alt="" onClick={()=>setActivePreviewImg(buggy)}/>
            <img src={cardImage} alt="" onClick={()=>setActivePreviewImg(cardImage)}/>
    </Slider>
         
          </div>
        </div>
        <div className="review-and-map">
        <Rating
        size="small"
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<div className="number-rating">
  <span>3.9</span> <p>
    Very Good
    </p>
     (44 VERIFIED RATINGS)
</div>
<div className="tags">
  <ul>
    <li>Great for Two Travelers</li>
    <li>Travel Sustainable Properties</li>
  </ul>
</div>
<div className="price-booking">

  <div className="price"><h4>
  AED 250</h4> <p>(Per Night | Per Person)</p></div>
<div className="xtreme">
  Desert Xtreme <StarIcon/> 4.5
</div>
<div className="book-btn">
  <button>BOOK NOW</button>
</div>
<div className="pickup-drop-time">
  <ul>
    <li><span>PICKUP TIME</span>9:00AM | 23-FEB 2023</li>
    <li><span>DROP TIME</span>9:00AM | 23-FEB 2023</li>
  </ul>
</div>
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.144956154799!2d77.06290787408719!3d28.47518089121143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191ba7c41615%3A0xd9e66f6b36de988e!2sIFFCO%20Chowk%20Flyover%2C%20Harjan%20Basti%2C%20Sector%2017%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1716978634577!5m2!1sen!2sin"  style={{border:"0px"}}  loading="lazy" ></iframe>
</div>
</div>
        </div>
      </div>
    </div>
  )
}

export default DetailTabs