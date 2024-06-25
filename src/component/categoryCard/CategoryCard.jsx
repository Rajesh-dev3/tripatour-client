import React from 'react'
import "./styles.scss"
import { category1, category2, category3, category4, category5 } from '../../assets/images'
const CategoryCard = ({setCheckCategory,checkCategory,categoryData,findPackagesByCategoryName}) => {
  const packagesObj = {
    "BUGGY PACKAGES":"BUGGY",
    "DESERT SAFARI PACKAGES":"SAFARI"
  }
  const categoryImage = {
    "DESERT SAFARI PACKAGES":category2,
    "BUGGY PACKAGES":category1,
  }
  const categoryImagesArray = [{name:"Dhow Cruise",image:category3},{name:"City Tour",image:category4},{name:"Dubai Visa",image:category5}]
  return (
    <>
     {categoryData?.map((item,index)=>{
    return(

      <div className='card-col' key={index} onClick={()=>{findPackagesByCategoryName(item),setCheckCategory(item)}}>
        <div className="card-top-col" style={{backgroundImage:`url(${categoryImage[item]})`}}></div>
        <div className="card-bottom-col">
        {packagesObj[item]}
        </div>
    </div>
    )
    })}
    {categoryImagesArray.map((item)=>{
      return(

     <div className='card-col'key={item?.image}>
        <div className="card-top-col" style={{backgroundImage:`url(${item?.image})`}}></div>
        <div className="card-bottom-col">
        {item?.name}
        </div>
    </div>
      )
    })}
    </>
  )
}

export default CategoryCard