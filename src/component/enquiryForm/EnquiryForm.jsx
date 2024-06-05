import React, { useEffect, useState } from "react";
///styles
import "./styles.scss";
import { useEnquiryFormMutation } from "../../service/enquiry/Enquiry";
import { notify } from "../toast/Toast";
const EnquiryForm = ({setOpen,id}) => {

  const [formdat, setFormdat] = useState({
    tourId:id,
    first_name:"",
    last_name:"",
    email:"",
    phone_number:"",
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

    <div className="enquiry-form-container" onClick={(e)=>e.stopPropagation()}>
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
              <label htmlFor="">First Name</label>
              <input type="text" onChange={formhandler} name="first_name"/>
            </div>
            <div className="input-col">
              <label htmlFor="">Last Name</label>
              <input type="text" onChange={formhandler} name="last_name"/>
            </div>
          </div>
          <div className="form-col">
            <div className="input-col">
              <label htmlFor="">Email Adress</label>
              <input type="text" onChange={formhandler} name="email"/>
            </div>
            <div className="input-col">
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="+91" onChange={formhandler} name="phone_number"/>
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
