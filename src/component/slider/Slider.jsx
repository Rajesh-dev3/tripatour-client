// Import Swiper React components


// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

///styles
import "./styles.scss"
import Slider from "react-slick";
import SliderCard from "../sliderCard/SliderCard";
import {useAllTourQuery} from "../../service/allTours/AllTours"
const SliderComponent = ({data}) => {


  var settings = {
    dots: true,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };

  return (

       <Slider {...settings} >
        {data?.map((item,index)=>{
          return(

            <SliderCard key={index} data={item}/>
          )
        })}



       

    </Slider>

   
  )
}

export default SliderComponent