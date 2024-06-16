import React, { useState } from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
///styles
import "./styles.scss"
const MobileTag = ({setCheckCategory,checkCategory,categoryData,findPackagesByCategoryName}) => {
const packagesObj = {
  "BUGGY PACKAGES":"BUGGY",
  "DESERT SAFARI PACKAGES":"SAFARI"
}
  return (
    <>
    {categoryData?.map((item,index)=>{
      return <div className={`tag-col ${checkCategory == item?"tag-active":"tag-not-active"}`} key={index} onClick={()=>{findPackagesByCategoryName(item),setCheckCategory(item)}}>
      <div className="tag-circle">
        <LocalShippingOutlinedIcon/>
      </div>
      <div className="tag-text">
        {packagesObj[item]}
      </div>
  </div>})}
  <div className={`tag-col tag-not-active`} style={{opacity:"0.5"}}>
      <div className="tag-circle">
        <LocalShippingOutlinedIcon/>
      </div>
      <div className="tag-text">
       Visa
      </div>
  </div><div className={`tag-col tag-not-active`} style={{opacity:"0.5"}}>
      <div className="tag-circle">
        <LocalShippingOutlinedIcon/>
      </div>
      <div className="tag-text">
       Car Rental
      </div>
  </div>
        </>
    
  )
}

export default MobileTag