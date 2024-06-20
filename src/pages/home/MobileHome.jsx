import MenuIcon from '@mui/icons-material/Menu';
///styles
import "./mobileHome.scss"
import MobileTag from '../../component/mobileTag/MobileTag';
import MobileSliderCard from '../../component/mobileSliderCard/MobileSliderCard';
import { useAllTourQuery } from '../../service/allTours/AllTours';
import { useEffect, useState } from 'react';
import Loader from '../../component/loader/Loader';
const MobileHome = () => {
  
  const [categoryData, setCategoryData] = useState([])
  const [packages, setPackages] = useState([])
  const [checkCategory, setCheckCategory] = useState("BUGGY PACKAGES")
  const { data,isLoading } = useAllTourQuery();
  const categoryNames = data?.data.map(category => category.categoryName);

  useEffect(() => {
    setCategoryData(categoryNames)
  }, [data])
  function findPackagesByCategoryName(categoryName) {
    const category = data?.data?.find(cat => cat.categoryName === categoryName);
    setPackages( category ? category.packages : [])
  }

useEffect(() => {
 findPackagesByCategoryName(data?.data[0].categoryName)
}, [data?.data])

  return (
    <div className='mobile-home-container'>
      <div className="center-col">

      <div className="m-h-heading">
        <h2>Find Your Dream Destination</h2>
        <div className="sider-icon"><MenuIcon/></div>
      </div>
      {/* <div className="tag-container">
        <MobileTag findPackagesByCategoryName={findPackagesByCategoryName} setCheckCategory={setCheckCategory} checkCategory={checkCategory} categoryData={categoryData}/>
      </div> */}
      </div>
      <div className="mobile-slider-section">
        {isLoading ?<Loader/> :
          data?.data?.map((item)=>{
            return(
<>
        <div className="mobile-slider-heading" key={item?.categoryName}>{item?.categoryName}</div>
        <div className={`mobile-slider-container ${isLoading ? "cen":" "}`}>
          <MobileSliderCard  data={item?.packages}/>

        {/* <MobileSliderComponent/> */}
        </div>
</>
            )
          })
        }
      </div>
    </div>
  )
}

export default MobileHome