import React, { useEffect, useState } from "react";
///styles
import "./styles.scss";
import { useEnquiryFormMutation } from "../../service/enquiry/Enquiry";
import { notify } from "../toast/Toast";
import CloseIcon from '@mui/icons-material/Close';
const EnquiryForm = ({setOpen,id,width}) => {

  const [formdat, setFormdat] = useState({
    packageId:id,
    fullName:"",
    email:"",
    phone_number:"",
    peopleInfo:"",
    message:""
})
const formhandler = (e)=>{
  const {name,value} = e.target
  setFormdat((prev)=>{
return{
  ...prev,[name]:value
}
  })
}
const [trigger,{data}]= useEnquiryFormMutation()
const submit = (e)=>{
e.preventDefault()
trigger(formdat)
}
useEffect(() => {
 if(data){
  notify(data?.message).success()
  setOpen(false)
 }
}, [data])

  return (
    <div style={{width:"100%",height:"100vh",background:"transparent"}} onClick={()=>setOpen(false)}>

    <div className="enquiry-form-container" style={{width:width,marginTop:width && "15%",position:"relative"}} onClick={(e)=>e.stopPropagation()}>
      <div className="cross" style={{color:"black",position:"absolute",right:"5%",top:"5%",zIndex:10}} onClick={()=>setOpen(false)}><CloseIcon/ ></div>
      <div className="form-center-col">
        <h2>Enquiry Form</h2>
        <p>
          Fill in the details below and our advisors will get in touch with you
          in the next 24 hours
        </p>
        <hr />
        <form>
          <div className="form-col">
            <div className="input-col">
              <label htmlFor="">Full Name</label>
              <input type="text" onChange={formhandler} name="fullName"/>
            </div>
            <div className="input-col">
              <label htmlFor="">Email Adress</label>
              <input type="email" onChange={formhandler} name="email"/>
            </div>
          </div>
          <div className="form-col">
          
            <div className="input-col">
              <label htmlFor="">Phone Number</label>
              <input type="number" placeholder="+91" onChange={formhandler} name="phone_number"/>
            </div>
            <div className="input-col">
              <label htmlFor="">No of Packs</label>
              <input type="text" onChange={formhandler} name="peopleInfo"/>
            </div>
          </div>
         
          <div className="form-col" >
            <div className="input-col">
            <label htmlFor="">Message</label>
           <textarea onChange={formhandler} name="message"/>
           </div>
          </div>
          <button type="submit" onClick={submit}>Submit Query</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EnquiryForm;
