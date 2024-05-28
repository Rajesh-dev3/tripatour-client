import  { useState } from "react";
///styles
import "./styles.scss";
import { useFeedBackMutation } from "../../service/feedBack/Feedback";
const Footer = () => {
  const [feedbackForm, setFeedbackForm] = useState(
    {
      firstName:"",
      lastName:"",
      email:""
  }
  )
  const [error, setError] = useState( {
    firstName:"",
    lastName:"",
    email:""
})


  const [trigger,{data}]=useFeedBackMutation()

  const formHandler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFeedbackForm((prev)=>{
      return{
        ...prev,[name]:value
      }
    })
  }

  const submitHandler = ()=>{
    let isSuccess = false;

    for (const key of Object.keys(feedbackForm)) {
      setError((prev) => {
        return { ...prev, [key]: Boolean(!feedbackForm[key]) };
      });
    }

    for (const key of Object.keys(feedbackForm)) {
      const value = Boolean(feedbackForm[key]);
      if (!value) {
        isSuccess = false;
        break;
      } else {
        isSuccess = true;
      }
    }

    if (isSuccess) {
      trigger(feedbackForm)
    }
  }
  return (
    <div className="footer-container">
      <div className="footer-form">
        <div className="form-heading">
          <h4>receive inspiration in your inbox</h4>
        </div>
        <div className="form">
          <div>

          <input type="text" placeholder="FIRST NAME" name="firstName" onChange={(e)=>formHandler(e)}/>
          </div>
          <div>

          <input type="text" placeholder="LAST NAME" name="lastName" onChange={(e)=>formHandler(e)}/>
          </div>
          <div>

          <input type="text" placeholder="EMAIL" name="email" onChange={(e)=>formHandler(e)}/>
          </div>
          <div className="btn-div">
            <button className="form-submit" onClick={()=>submitHandler()}>Submit</button>
          </div>
        </div>
      </div>
      <div className="address">
        <ul>
          <li>DUBAI: +76 1273 074 734</li>
          <li>INDIA: +91 98550 56307</li>
          <li>enquiries@tripatours.com</li>

          <li>Studio 65, roussefield,
            <br/>
             DUBAI, 768364<br/>
             United ARAB Emirates</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
