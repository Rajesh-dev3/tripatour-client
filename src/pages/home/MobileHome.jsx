import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
///styles
import "./mobileHome.scss"
import MobileTag from '../../component/mobileTag/MobileTag';
import MobileSliderComponent from '../../component/slider/MbileSlider';
import MobileSliderCard from '../../component/mobileSliderCard/MobileSliderCard';
const MobileHome = () => {
  return (
    <div className='mobile-home-container'>
      <div className="center-col">

      <div className="m-h-heading">
        <h2>Find Your Dream Destination</h2>
        <div className="sider-icon"><MenuIcon/></div>
      </div>
      <div className="tag-container">
        <MobileTag />
      </div>
      <div className="mobile-slider-section">
        <div className="mobile-slider-heading">Top Dubai Experiences</div>
        <div className="mobile-slider-container">
<MobileSliderCard/>
<MobileSliderCard/>
<MobileSliderCard/>
<MobileSliderCard/>
        {/* <MobileSliderComponent/> */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default MobileHome