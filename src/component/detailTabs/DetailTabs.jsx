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
import { Loop } from "@mui/icons-material";
const DetailTabs = ({sliderData,fun}) => {
  const [activePreviewImg, setActivePreviewImg] = useState("")
  const [value, setValue] =useState(4);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    autoPlay:true,
    Loop:true,
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
  const tabs = [ {
  name:"Highlights",link:"highlights"},
  {
  name:"Inclusions",link:"highlights"}, {
  name:"Need to Know",link:"highlights"},{
  name:"Cancellation Policy",link:"highlights"},{
  name:"Reviews",link:"highlights"}]
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
  
  useEffect(() => {
   setValue(sliderData?.data?.star)
  }, [sliderData])
  return (

    <div className="tabs-container">
      <div className="tabs-title">
        <ul>
          {tabs.map((item,index)=>{
            return(

            <a href={`#${item.link}`} key={item} >

              <li onClick={()=>setActiveTabs(index)} className={activeTabs == index?"active-tab":""}>{item.name}</li>
            </a> 
            )
          })}
         
        </ul>
      </div>
      <div className="tabs-content">
        <div className="slides">
          <div className="preview-slide">
            <img src={activePreviewImg || sliderData?.data?.images} alt="" />
            <div className={` ${checkFavourite ?"heart-icon2":"heart-icon"}`} onClick={()=>addFavouriteTour()}>{!checkFavourite ?<FavoriteBorderOutlinedIcon/>:<FavoriteOutlinedIcon /> }</div>
          </div>
          <div className="slides-list">
          <Slider {...settings}>
              
         
            {sliderData?.data?.galleryPhoto?.map((item) => (
              <img src={item} alt={item} onClick={() => setActivePreviewImg(item)} key={item} />
            ))}
    </Slider>
         
          </div>
        </div>
        <div className="review-and-map">
        <Rating
        size="small"
  name="simple-controlled"
  value={sliderData?.data?.star || value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<div className="number-rating">
  <span>{value}</span> <p>
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
  AED {sliderData?.data?.price}</h4> <p>(Per Person)</p></div>
<div className="xtreme">
  Desert Xtreme <StarIcon/> {sliderData?.data?.star}
</div>
<div className="book-btn">
  <button onClick={()=>fun()}>BOOK NOW</button>
</div>
{/* <div className="pickup-drop-time">
  <ul>
    <li><span>PICKUP TIME</span>9:00AM | 23-FEB 2023</li>
    <li><span>DROP TIME</span>9:00AM | 23-FEB 2023</li>
  </ul>
</div> */}
<div className="map">
<iframe src= {sliderData?.data?.map}
 style={{border:"0px"}}  loading="lazy" ></iframe>
</div>
</div>
        </div>
      </div>
    </div>
  )
}

export default DetailTabs