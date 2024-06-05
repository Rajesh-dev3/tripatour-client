import { useEffect, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import { Outlet } from "react-router-dom";
import Sider from "../layout/sider/Sider";
import TopBanner from "../component/topBanner/TopBanner";
import { useMediaQuery } from "../useMediaQuery/UseMediaQuery";
import MobileNavbar from "../layout/mobileNavbar/MobileNavbar";
import MobileFooter from "../layout/footer/MobileFooter";
import "./styles.scss"

const Mainlayout = () => {
  const [siderOpen, setSiderOpen] = useState(false);

  const siderOpenHandler = (val) => {
    setSiderOpen(val);
  };
  useEffect(() => {
    if (siderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [siderOpen]);
  const isMobile = useMediaQuery("(max-width:480px)")
  return (
    <>
    {isMobile?
    <>
      <MobileNavbar/>
      <div className="mobile-layout-center-col">

      <Outlet />
      </div>
      <MobileFooter />
      
    </>
      :<>
      {siderOpen && <Sider fun={siderOpenHandler} />}
      <Navbar fun={siderOpenHandler} siderOpen={siderOpen} />
    
      <TopBanner/>
      <div className="layout-center-col">

      <Outlet />
      </div>
      <Footer />
      </>
    }
    </>
  );
};

export default Mainlayout;
