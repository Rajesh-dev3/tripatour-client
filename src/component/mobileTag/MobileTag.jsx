import React, { useState } from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
///styles
import "./styles.scss"
const MobileTag = () => {
  const [activeTag, setActiveTag] = useState(0)
  const activeChangeHandler = (val)=>{
    setActiveTag(val)
  }
  return (
    <>
    {[1,2,3,4].map((item,index)=>{
      return <div className={`tag-col ${activeTag == index?"tag-active":"tag-not-active"}`} key={index} onClick={()=>activeChangeHandler(index)}>
      <div className="tag-circle">
        <LocalShippingOutlinedIcon/>
      </div>
      <div className="tag-text">
        Safari
      </div>
  </div>})}
        </>
    
  )
}

export default MobileTag