import { useEffect, useState } from "react";
import { useEnquiryFormMutation } from "../../service/enquiry/Enquiry";
import"./form.scss"
import { notify } from "../toast/Toast";

const Form = () => {
  const [formdat, setFormdat] = useState({
    fullName:"",
    email:"",
    phone_number:"",
    peopleInfo:"",
    message:"",
  })
  const formhandler = (e)=>{
    const {name,value} = e.target
    setFormdat((prev)=>{
  return{
    ...prev,[name]:value
  }
    })
  }
  
  const [trigger,{data:enquiryData}]= useEnquiryFormMutation()
  const submit = (e)=>{
  e.preventDefault()
  trigger(formdat)
  }
  useEffect(() => {
   if(enquiryData){
    notify(enquiryData?.message).success()
    // setOpen(false)
    setFormdat((prev)=>{
      return{
        ...prev,
        fullName:"",
        email:"",
        phone_number:"",
        peopleInfo:"",
        message:"",
      }
    })
   }
  }, [enquiryData])
    return (
     
       
    
          <div className="enquiry-form-container" style={{width:"100%", marginTop:"40px" }}>
          <h1>get in touch with us</h1>
          <hr style={{width:"12%", background:"black", height:"5px"}}/>
              <p>
                Fill in the details below and out advisory will
               
                get in touch with you in the next 24 hours
              </p>
            <div className="form-center-col">
              <form>
                <div className="form-col">
                  <div className="input-col">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="fullName" value={formdat?.fullName} onChange={formhandler}/>
                  </div>
                  <div className="input-col">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={formdat?.email} onChange={formhandler}/>
                  </div>
                 
                </div>
                <div className="form-col">
                  <div className="input-col">
                    <label htmlFor="">People Info</label>
                    <input type="text" name="peopleInfo" value={formdat?.peopleInfo} onChange={formhandler}/>
                  </div>
                  <div className="input-col">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" placeholder="+91" value={formdat?.phone_number} name="phone_number" onChange={formhandler}/>
                  </div>
                </div>
    
                <div className="form-col">
                  <div className="input-col">
                    <label htmlFor="">Message</label>
                    <textarea name="message" value={formdat?.message} onChange={formhandler}/>
                  </div>
                </div>
                <button type="submit" onClick={submit}>Submit Query</button>
              </form>
            </div>
          </div>

     
      );
    };

export default Form;