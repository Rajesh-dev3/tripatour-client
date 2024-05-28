import { IoIosStar } from "react-icons/io";
import { SiNike } from "react-icons/si";
import WhyUsCard from "../../component/whyUsCard/WhyUsCard";
import { about, buggy } from "../../assets/images";
import SliderComponent from "../../component/slider/Slider";
import { useAllTourQuery } from "../../service/allTours/AllTours";
import GalleryCard from "../../component/galleryCard/GalleryCard";
import Slider from "react-slick";
////styles
import "./styles.scss";
const Home = () => {
  const { data } = useAllTourQuery();

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
  return (
    <div>
      <div className="top-banner">
        <div className="center-box">
          <p>Wild Excursions</p>
          <h1>
            Experience dubai <br />
            Safari wonders!
          </h1>
          <button>Explore Now</button>
        </div>
        <div className="top-banner-bottom-rectangle">
          <ul>
            <li>
              <span>
                <IoIosStar />
              </span>
              4.6 Rated
            </li>
            <li>
              <span>
                <SiNike />
              </span>
              100% Customised trips
            </li>
            <li>
              <span>
                <SiNike />
              </span>
              100% Customised trips
            </li>
            <li>
              <span>
                <SiNike />
              </span>
              24x7 concierge
            </li>
          </ul>
        </div>
      </div>
      <div className="layout-center-col">
        <div className="about-section">
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
        {data?.tours?.map((item) => {
          return (
            <div className="slider-section" key={item.heading}>
              <div className="slider-heading">
                {item?.category?.name}
                <p className="para">{item?.category?.description}</p>
              </div>
              <div className="slider-col">
                <div className="slider-container">
                  <SliderComponent data={item?.tours} />
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
      </div>
    </div>
  );
};

export default Home;
