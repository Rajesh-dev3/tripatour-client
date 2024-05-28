import { useEffect, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import { Outlet } from "react-router-dom";
import Sider from "../layout/sider/Sider";

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

  return (
    <>
      {siderOpen && <Sider fun={siderOpenHandler} />}
      <Navbar fun={siderOpenHandler} siderOpen={siderOpen} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainlayout;
