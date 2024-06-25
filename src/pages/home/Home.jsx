
import WhyUsCard from "../../component/whyUsCard/WhyUsCard";
import { about, buggy } from "../../assets/images";
import SliderComponent from "../../component/slider/Slider";
import { useAllTourQuery } from "../../service/allTours/AllTours";
import GalleryCard from "../../component/galleryCard/GalleryCard";
import Slider from "react-slick";
////styles
import "./styles.scss";
import FavSliderComponent from "../../component/slider/FavSlider";
import { useGetFavoriteTourQuery } from "../../service/favourite/AddFavourite";
import { useEffect, useRef } from "react";
const Home = () => {
  const { data } = useAllTourQuery();
  const {data:favouriteData} = useGetFavoriteTourQuery()
  var settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  const linkRef = useRef(null);

  useEffect(() => {
    // Function to handle the click on the <a> tag
    console.log(linkRef.current,"current")
    const handleClick = () => {
      if (linkRef.current) {
        linkRef.current.click(); // Simulate a click on the <a> tag
      }
    };

    // Call handleClick function when the component mounts
    const timeoutId = setTimeout(handleClick, 1000);

    // Clear the timeout if the component unmounts or useEffect runs again
    return () => clearTimeout(timeoutId);
  }, [linkRef]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
   
      
        <div className="about-section" id="aboutUs" ref={linkRef}>
          <div className="about-left-col">
            <img src={about} alt="" />
          </div>
          <div className="about-right-col">
            <p className="about">{"//"}About Us</p>
            <h3>
              Embrace <br />
              the <span>Journey:</span>
            </h3>
            <p>
              Desert Safari Dubai provides a variety of all-inclusive packages
              for different types of desert safaris, featuring numerous
              additional options such as dune buggies and quad bikes for
              off-road adventure seekers, all guided by skilled professionals.
              We can tailor your desert safari experience to meet your needs, as
              we have many carefully selected camps. These camps, chosen by our
              desert safari experts, are clean and hygienic. Our fleet consists
              entirely of 4x4 vehicles, driven by licensed and highly
              experienced drivers. As the leading online agent for desert safari
              bookings, we prioritize fair pricing over profit maximizatio
            </p>
            <div className="about-car-img-div">
              <img src={buggy} alt="" />
            </div>
          </div>
        </div>
        {data?.data?.map((item) => {
          return (
            <div className="slider-section" key={item.heading} id={item?.categoryName == "BUGGY PACKAGES"?"buggyTours":"safari"}>
              <div className="slider-heading">
                {item?.categoryName}
                <p className="para">{item?.category?.description}</p>
              </div>
              <div className="slider-col">
                <div className="slider-container">
                  <SliderComponent data={item?.packages} />
                </div>
                <div className="slider-bg"></div>
              </div>
            </div>
          );
        })}

        <div className="why-us-section">
          <div className="why-us-heading">Why Us?</div>
          <div className="why-us-sub-heading">Dubai top Safari</div>
          <div className="why-us-content">
            <WhyUsCard />
            <WhyUsCard />
            <WhyUsCard />
            <WhyUsCard />
          </div>
        </div>
        <div className="gallery-section">
          <div className="gallery-heading">Gallery</div>
          <div className="gallery-sub-heading">
            Dubai Safari's stunning wildlife gallery
          </div>
          <Slider {...settings}>
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
           
          </Slider>
        </div>
        <div className="slider-section" style={{marginTop:"10%"}} >
              <div className="slider-heading">
              Travellers' favorite choice
                <p className="para">From Desert Sands to Celestial Canopies: Dubai Safari Expeditions</p>
              </div>
              <div className="slider-col slider-col">
                <div className="slider-container">
                

                      <SliderComponent data={favouriteData?.data}/>
                  
                </div>
                <div className="slider-bg"></div>
              </div>
            </div>
    </>
  );
};

export default Home;
