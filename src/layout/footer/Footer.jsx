import { useEffect, useState } from "react";
import { useFeedBackMutation } from "../../service/feedBack/Feedback";
///styles
import "./styles.scss";
import { notify } from "../../component/toast/Toast";
import { Link, useLocation, useParams } from "react-router-dom";
import RefundPolicy from "../../component/aboutUsPop/RefundPolicy";
import AboutPolicy from "../../pages/Policys/AboutPolicy";

const Footer = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [trigger, { data }] = useFeedBackMutation();

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedbackForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = () => {
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
      const dataFeeddbackForm = {firstName:feedbackForm?.firstName+" "+ feedbackForm?.lastName,email:feedbackForm?.email}
      trigger(dataFeeddbackForm);
    }else{
      notify("Please fill all form").error()
    }
  };

  useEffect(() => {
    if(data){
     notify(data?.message).success()
    }
   }, [data])
const [checkPath, setCheckPath] = useState("")

const {pathname} = useLocation()
   useEffect(() => {
    setCheckPath(pathname)
   }, [pathname])
  return (
    <>
    <div className="footer-container">
      <div className="footer-form">
        <div className="form-heading">
          <h4>receive inspiration in your inbox</h4>
        </div>
        <div className="form">
          <div>
            <input
              type="text"
              placeholder="FIRST NAME"
              name="firstName"
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="LAST NAME"
              name="lastName"
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="EMAIL"
              name="email"
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div className="btn-div">
            <button className="form-submit" onClick={() => submitHandler()}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="address">
        <ul>
          <li>DUBAI: +971 526063261</li>
          <li>INDIA: +91 9205960841</li>
          <li>enquiries@tripatours.com</li>

          <li>Addres: Retreat by Sharjah Collection - 
          <br />
          Madam Rd - near Al Badayer - 
          <br />
          Al Badayer - Sharjah - United
           Arab Emirates
          </li>
        </ul>
      </div>
    </div>
      <div className="footer-policy">
    <ul className="policy">
      {
        checkPath == "/about-policy"?
        <a href="#AboutPolicy">
          About Us
        </a>:<Link to="/about-policy"><li>About Us</li></Link>
      }
      
      {checkPath == "/Contactus-policy"?
      <a href="#Contactus-policy">Contact Us</a>:
      <Link to="/Contactus-policy"><li>Contact Us</li></Link>
       }
      {checkPath == "/privacy-policy"?
      <a href="#privacy-policy">Privacy Policy</a>:
      <Link to="/privacy-policy"><li>Privacy Policy</li></Link>
       }
      {checkPath == "/refund-policy"?
      <a href="#refund-policy">Refund and Return Policy</a>:
      <Link to="/refund-policy"><li>Refund and Return Policy</li></Link>
       }
      {checkPath == "/term&condition-policy"?
      <a href="#term&condition-policy">Term & Condition</a>:
      <Link to="/term&condition-policy"><li>Term & Conditions</li></Link>
       }
   
    </ul>
      </div>
</>
);
};

export default Footer;
