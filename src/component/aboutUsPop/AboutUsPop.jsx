import React from 'react';
import "./about.scss";
import CloseIcon from '@mui/icons-material/Close';

const AboutUsPop = ({  setOpen}) => {
  return (
    <div style={{ marginTop: "71px", borderRadius: "20px", padding: "10px" }}>
      <div className="about-main">
        <div 
          className="cross" 
          style={{ color: "black", position: "absolute", right: "3%", top: "5%" }} 
        >
          <CloseIcon onClick={()=>setOpen()}/>
        </div>
        <h2>About Us</h2>
        <hr style={{ background: "black" }} />
        <p>
          Tripatours is committed to serving people with their professional
          services and giving them the full level of satisfaction. Our motive is
          to provide inspiration to people travel to explore new things and have
          some unforgettable memories. The goal is to surpass all the
          requirements of tourism through the use of advanced technology for
          effective and efficient travel services to the folks. At Tripatours,
          we keep an eye on the provided service quality and make sure that it
          is as per the mark with a reasonable range of prices. We assure you to
          make familiar with the best tour deals along with satisfactory
          services and attractive services so that you come back to us for
          another trip. With this, there is also a facility for tours, or
          excursions booking through an online mode. We’re driven to contribute
          to the growth of the tourism industry, our online booking system gives
          you speedy services, in the shortest possible time.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPop;
