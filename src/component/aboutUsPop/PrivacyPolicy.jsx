import React from 'react';
import "./about.scss";
import CloseIcon from '@mui/icons-material/Close';

const PrivacyPolicy = ({setOpen}) => {
  return (
    <div style={{marginTop: "71px",color:"white", borderRadius: "20px", padding: "10px",overflowY:"scroll" }}>
      <div className="about-main">
        <div 
          className="cross" 
          style={{ color: "black", position: "absolute", right: "3%", top: "5%" }} 
        >
          <CloseIcon onClick={()=>setOpen()}/>
        </div>
        <h2> Privacy Policy</h2>
        <hr style={{ background: "black" }} />
        <p>
        We, at Tripatours, respect the privacy of our valuable clients and visitors. To ensure the same, our website takes strict security measures so that your privacy is not compromised with at any level. Hence, we make sure that we do not collect any personal information of users except for the details that are required for booking. As a customer on our website, you have complete rights to know how the information shared by you is being used on our platform. Therefore, we suggest you carefully read our privacy policy till the last so that everything is clear to you. If you disagree with any policy mentioned herein, you can discontinue using our services.
<h5>
  Collection of PII (Personally Identifiable Information) 
  </h5>
The information that we collect from our users is mainly done when a user contacts us regarding services or wishes to acquire knowledge about our products and services. The information collected during this includes your name, contact details, email ID, credit card details, residential addresses, referral sources, etc.
Whenever you submit any of the said information to us, you eventually give us the consent to use your information to process your orders in the best possible ways.
<h5>
  How do we use your information? 
  </h5> 
Any information that you share with us willingly will be used by Tripatours to process your booking orders, verify your payment details, and provide you with necessary details about your booking or any other services that you have availed of through this website. In addition to that, we may also use your details for auditing, conducting research, and improving the performance of our website by making the necessary changes.
<h5>
   Ensuring privacy of your information 
  </h5>
Any of the details that are shared by customers during the online booking procedures including information such as their name, address, email address, payment details, is considered as their personal information. This information shall not be revealed or sold to any third parties except for our service providers who are involved in the loop of completing your order. However, before sharing your information with these third parties, we ensure that these parties abide by our privacy policy and use strict security measures to avoid any misuse of your information.

<h5>
Disclosure of information on the legal basis 
</h5>
If ever needed, we may disclose your information to comply with the court order or legal proceeding in case it helps us in any way to protect company's rights.
<h5>
Collection of non-personal information 
</h5>
Tripatours collects data from different websites through the help of web beacons such as web beacons via weblogs and third-party service providers. This non-personal information is mostly used to measure the efficiency of a particular website, its content, and services.
<h5>

Option to opt-out 
</h5>
On our website, we provide users with an option to "opt out" of the usage of their personal information by third-party service providers. For example, in case you do not wish to receive any promotional offers, newsletters, or emails, you can opt out of this by contacting us personally.
<h5>

Participation in content and surveys 
</h5>
At times, Tripatours organizes contests and surveys that are conducted in association with third-party sponsors. All the visitors to our website will be informed about the same directly through our website. If we use your information during any phase of this contest, you shall be notified about it at the same time and we'll also inform you about the details of you being used. It will be your sole decision to participate in these contents and whether or not, you want to share your personal information with them.
<h5>

Highly secure transactions 
</h5>
For the purpose of maintaining the accuracy of your data and to restrict any unauthorized access of the information of users, we try our best that this information is shared only through secured servers. In addition to that, we make use of highly technically safe protocols such as encryption, socket layers, and firewalls to ensure that your sensitive information or payment-related details are transferred through a safe ecosystem. 
        </p>
      </div>
     
     
      


    </div>
  )
}

export default PrivacyPolicy
