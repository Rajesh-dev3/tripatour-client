import MenuIcon from '@mui/icons-material/Menu';
///styles
import "./mobileHome.scss"
import MobileTag from '../../component/mobileTag/MobileTag';
import MobileSliderCard from '../../component/mobileSliderCard/MobileSliderCard';
import { useAllTourQuery } from '../../service/allTours/AllTours';
import { useEffect, useState } from 'react';
import Loader from '../../component/loader/Loader';
import CategoryCard from '../../component/categoryCard/CategoryCard';
import Slider from 'react-slick';
import SliderCard2 from '../../component/sliderCard/SliderCard2';
import SliderCard3 from '../../component/sliderCard/SliderCard3';
import Form from "../../component/mobileform/Form.jsx"
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import { logo, mobileLogo, mobileTopBanner } from '../../assets/images/index.jsx';
import { useListingQuery } from '../../service/listing/Listing.js';
import { useEnquiryFormMutation } from '../../service/enquiry/Enquiry.js';
import { notify } from '../../component/toast/Toast.jsx';
import { Link } from 'react-router-dom';
import BasicModal from '../../component/modal/Modal.jsx';

import AboutUsPop from "../../component/aboutUsPop/AboutUsPop.jsx"
import ContactUs from '../../component/aboutUsPop/ContactUs.jsx';
import PrivacyPolicy from '../../component/aboutUsPop/PrivacyPolicy.jsx';
import TermsandConditions from '../../component/aboutUsPop/TermsandConditions.jsx';

const MobileHome = () => {
  
  const [categoryData, setCategoryData] = useState([])
  const [packages, setPackages] = useState([])
  const [checkCategory, setCheckCategory] = useState("BUGGY PACKAGES")
  const { data,isLoading } = useAllTourQuery();
  const categoryNames = data?.data?.map(category => category?.categoryName);

  useEffect(() => {
    setCategoryData(categoryNames)
  }, [data])
  function findPackagesByCategoryName(categoryName) {
    const category = data?.data?.find(cat => cat?.categoryName === categoryName);
    setPackages( category ? category.packages : [])
  }

useEffect(() => {
 findPackagesByCategoryName(data?.data[0]?.categoryName)
}, [data?.data])
var settings = {
  dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow:3,
  loop: true,
  slidesToScroll: 3,
  variableWidth: false,
  arrows:false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        loop: true,
        autoplay:true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay:true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      },
    },
  ],
};
const {data:listingData,isLoading:listingLoading} = useListingQuery()
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
const [open,setOpen] = useState(false)
const [modelOpenVal,setModelOpenVal] = useState(false)
const openModelHandler = (val)=>{
  setModelOpenVal(val)
  setOpen(true)
}


const modelObj  = {
  0:<AboutUsPop setOpen={setOpen}/>,
  1:<ContactUs setOpen={setOpen}/>,
  2:<PrivacyPolicy setOpen={setOpen}/>,
  3:<TermsandConditions setOpen={setOpen}/>,
}
  return (
    <>
    <BasicModal Children={modelObj[modelOpenVal]}  setOpen={setOpen} open={open}/>
    <div className='mobile-home-container'>
      <div className="mobil-top-banner">
        <a href="#category">

      
        <div className="btn-banner">
        <div className='let-start'>
           let's start
        </div>
          <div className="arrow">
           <span><FaArrowDown />
          </span>

          </div>
      </div>
      </a>
        <img src={mobileTopBanner} alt="" />
      </div>
      <div className="center-col">

      {/* <div className="m-h-heading">
        <h2>Find Your Dream Destination</h2>
        <div className="sider-icon"><MenuIcon/></div>
      </div> */}
    
      {/* <div className="tag-container">
        <MobileTag findPackagesByCategoryName={findPackagesByCategoryName} setCheckCategory={setCheckCategory} checkCategory={checkCategory} categoryData={categoryData}/>
      </div> */}
      </div>
      <div className="categories" id='category'>
        <div className="mobile-slider-heading">

          Categories
        </div>
        <div className="category-card-container">
          <CategoryCard findPackagesByCategoryName={findPackagesByCategoryName} setCheckCategory={setCheckCategory} checkCategory={checkCategory} categoryData={categoryNames}/>
        
        </div>
      </div>
      <div className="mobile-slider-section">
         <div className="mobile-slider-heading" >{checkCategory}</div>
        <div className={`mobile-slider-container ${isLoading ? "cen":" "}`}> 
        {isLoading ?<Loader/> :
          packages?.map((item,i)=>{
            return(
          <MobileSliderCard  data={item} key={i}/>
        )
      })
    }
        {/* <MobileSliderComponent/> */}
         </div> 
         
      </div>
      <div className="mobile-slider-section">
         <div className="mobile-slider-heading" >RECOMMENDED FOR YOU</div>
        <div className={`mobile-slider-container ${isLoading ? "cen":" "}`}> 
        {listingLoading ?<Loader/> :
          listingData?.data?.map((item,i)=>{
            return(
          <MobileSliderCard  data={item} key={i}/>
        )
      })
    }
        {/* <MobileSliderComponent/> */}
         </div> 
         
      </div>
      <div className="best-dune">
      <Slider {...settings}>
      {[1,2,3,4].map((item, index) => {
        return <SliderCard3 key={index}  />;
      })}
    </Slider>
      </div>
      <div className='form-container'>
        <Form />
      </div>
      <div className="footer">
        <div className="logo">
          <img src={mobileLogo} alt="" />
        </div>
        <ul className='footer-menu'>
          <li onClick={()=>openModelHandler(0)}>About</li>
          <li  onClick={()=>openModelHandler(1)}>contact us</li>
          <li  onClick={()=>openModelHandler(2)}>privacy ploicy</li>
          <li onClick={()=>openModelHandler(3)}>Terms & conditions</li>
        </ul>
          <ul className='footer-icon'>
           <Link to={"https://youtube.com/@tripatours604?si=WwkP92zvzLwqAVJM"}>
           <li><FaYoutube />
            </li>
           </Link> 
           <Link to={"https://www.instagram.com/tripatour?igsh=aWI4ODB3dWFpOHh3"}>
           <li><PiInstagramLogoLight />
            </li>
           </Link> 
           <Link to={"https://www.linkedin.com/in/tripa-tours-3685a4264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}>
           <li><FaLinkedinIn />
            </li>
           </Link> 
           <Link to={"https://www.facebook.com/tripatours?mibextid=LQQJ4d"}>
           <li><FaFacebookF />
            </li>
           </Link> 
           <Link to={"https://api.whatsapp.com/send?phone=+971526063261&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details"}>
           <li><FaWhatsapp />
            </li>
           </Link> 
          
       
          
          </ul>
      <div className="copywrite">
        <p><span>@</span>2024 tripatours</p>
      </div>
      </div>
    </div>
    </>

  )
}

export default MobileHome