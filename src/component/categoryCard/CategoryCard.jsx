import React from 'react'
import "./styles.scss"
const CategoryCard = ({setCheckCategory,checkCategory,categoryData,findPackagesByCategoryName}) => {
  const packagesObj = {
    "BUGGY PACKAGES":"BUGGY",
    "DESERT SAFARI PACKAGES":"SAFARI"
  }
  return (
    <>
     {categoryData?.map((item,index)=>{
    return(

      <div className='card-col' key={index} onClick={()=>{findPackagesByCategoryName(item),setCheckCategory(item)}}>
        <div className="card-top-col"></div>
        <div className="card-bottom-col">
        {packagesObj[item]}
        </div>
    </div>
    )
    })}
    </>
  )
}

export default CategoryCard