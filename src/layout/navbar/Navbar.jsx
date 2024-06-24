import { logo, mobileLogo } from "../../assets/images/index";
import { ImWhatsapp } from "react-icons/im";
import { IoIosMenu } from "react-icons/io";

import { useEffect, useState } from "react";

////styles
import "./styles.scss";
import { Link } from "react-router-dom";
export const navList = [
  {
    name: "home",
    del: "Explore desert wonders",
    link:"#"
  },
  {
    name: "About Us",
    del: "Discovering desert adventures",
    link:"/#aboutUs"
  },
  {
    name: "Buggy Tours",
    del: "Off-road adventures",
    link:"/#buggyTours"
  },
  {
    name: "Safari",
    del: "Wild life adventure Journey",
    link:"/#safari"
  },
];
const Navbar = ({ fun }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActivetab] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Set the threshold for scrolling
      const scrollThreshold = 100;

      // Check if the scroll position is below the threshold
      if (scrollTop > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLinkHandler = (key) => {
    setActivetab(key);
  };

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`} >
      <Link to={"/"}> 
      <div className="logo">
        <div className="ham-icon" onClick={() => fun(true)}>
          <IoIosMenu />
        </div>
        <img src={scrolled ?mobileLogo: logo} />
      </div>
      </Link>
      <div className="nav-list">
        <ul>
          {navList?.map((item, index) => {
            return (
              <a href={item?.link}  key={item.name}>

              <li
               
                onClick={() => activeLinkHandler(index)}
                className={`${activeTab === index ? "active-nav" : ""}`}
                >
                {item?.name}
                <span>{item?.del}</span>
              </li>
                </a>
            );
          })}
        </ul>
      </div>
      <div className="contact-info">
        <ul>
          <li>
            <span></span> For Queries Email Us
          </li>
          <li>
            <span>
              <ImWhatsapp />
            </span>
            +971 526063261
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
