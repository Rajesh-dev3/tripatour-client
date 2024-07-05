import React, { useEffect } from 'react'
import "./about.scss";


const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);
  return (
  <>
      <h2 id='refund-policy'>REFUND AND RETURN POLICY</h2>
      <hr style={{ background: "black" }} />
      <p>
      Welcome to Tripatours. The only aim with which we operate our website is to provide all customers
with the best possible experience and this is the reason we strive hard to bring perfection in all our
services. To make everything transparent for our customers, we recommend they go through our
website&#39;s (http://tripatours.com/) return and refund policy so that they can clearly understand their
rights and obligations when they use our services.
      </p>
      <h2>CANCELLATIONS AND REFUNDS</h2>
      <h5>1. Cancellation done by Customer</h5>
      <ul className='bullets'>
        <li>If you cancel any tours or excursions prior to 30 days before the scheduled tour date, you
        are subject to get a 75% refund of the paid amount</li>
        <li>On the other hand, if you cancel the trip 15 to 30 days prior to the scheduled date, then you
        may get a 50% refund of the paid amount</li>
        <li>If you cancel 7 to 15 days prior to the trip, you are subject to get a 25% refund</li>
        <li>However, if you cancel the trip within 0 to 7 days, then you will not be provided with any
        refund</li>
     
      </ul>
      <h5>2. Cancellation done at Tripatours end</h5>
      <p>If, due to any unforeseen circumstances, we cancel any tours and excursions at our end, all the
customers who have made a booking with us will get a complete refund or the opportunity to
reschedule the trip.</p>
<h2>CHANGES/MODIFICATIONS IN TRIPS/EXCURSIONS</h2>
<h5>1. Changes requested by Customers</h5>
<ul className="bullets">
<li>If you want to make any specific changes to your bookings, then we encourage you to request
the same via email.</li>
<li>We do not guarantee that we will be able to fulfill your request as it will be completely based on
availability.</li>
<li>Additional charges may be applicable to cater to your request.</li>
</ul>
<h5>2. Changes initiated by Tripatours</h5>
<p>We reserve all the rights to make any minor changes to the itineraries as well as schedules, as and when
needed. However, you will be informed about these changes as soon as we finalize them.</p>
<h2>NO-SHOW POLICY</h2>
<p>In case you fail to appear on the scheduled date and time for your tours and excursions without any
prior notification, it will be considered as a no-show and hence you will not be eligible for a refund.</p>
<h2>PROCESSING OF REFUND</h2>
<p>When you request cancellation of any bookings and you are subject to getting a refund, then the refund
may take around 14 business days from the requested date to get reflected in your bank account.</p>
<p>The refunds shall be issued only to the original payment method that you used at the time of booking.</p>
<h2>NON-REFUNDABLE SERVICES/ITEMS</h2>
<p>Some items in your travel or tour booking may be non-refundable such as travel insurance, ticket
booking for sites such as Dubai Frame, Dubai Aquarium, and other additional services. You will be
notified about the same at the time of booking.</p>
<h2>REFUND/RETURNS UNDER SPECIAL CIRCUMSTANCES</h2>
<p>If you come across an unfortunate situation or face medical emergencies or unavoidable circumstances,
you can get in touch with us and have a one-on-one conversation with our representatives to discuss the
matter.</p>
<h2>CONTACT US</h2>
<p>Have any queries or need help regarding anything? Don’t hesitate to contact us immediately:</p>
<ul className="bullets">
  <li><b style={{paddingRight:"30px"}}>Email:  </b> ENQUIRIES@TRIPATOURS.COM</li>
  <li><b style={{paddingRight:"25px"}}>Phone:  </b>DUBAI: +971 526063261, INDIA: +91 9205960841</li>
  <li><b style={{paddingRight:"15px"}}>Address: </b>RETREAT BY SHARJAH COLLECTION - MADAM RD - NEAR AL BADAYER - AL BADAYER
  SHARJAH - UNITED ARAB EMIRATES</li>
</ul>
<p>By booking your trips and excursions with us, you acknowledge that you have carefully gone through our
policies, terms and conditions, and other vital details and you agree to the returns/refund policy given
hereby.</p>
<p>We thank you for choosing us as your trustworthy travel partner. We look forward to providing you with
the best and most seamless services we can.</p>

  </>
)
};

export default RefundPolicy;
