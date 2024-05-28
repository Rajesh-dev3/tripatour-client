
/////styles
import { RxCross2 } from "react-icons/rx"
import "./styles.scss"
import { logo } from "../../assets/images"
import { navList } from "../navbar/Navbar"
import { useState } from "react"
const Sider = ({siderOpen,fun}) => {
  const [activeTab, setActivetab] = useState(0)
  const activeLinkHandler = (key)=>{
    setActivetab(key)
  }
  return (
    <div className={`sider-container ${!siderOpen?"sider-open":"sider-close"} `}>
   
<div className="sider-col">

      <div className="sider-heading">
        <img src={logo} alt="" />
        <RxCross2 onClick={()=>fun(false)}/>
      </div>
      
      <div className="sider-nav-list">
          <ul>
            {navList?.map((item,index)=>{
              return(

            <li key={item.name} onClick={()=>activeLinkHandler(index)}  className={`${activeTab===index ? 'active-nav' : ''}`}>{item?.name} 
              <span>{item?.del}</span>
            </li>
              )
            })}
          
          </ul>
        </div>
</div>
        </div>
  )
}

export default Sider