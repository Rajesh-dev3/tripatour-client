
import { useState } from "react";

import SimilarPackageCard from "../../component/similarPackageCard/SimilarPackageCard"

///styles
import "./styles.scss";
import DesertExtremeCard from "../../component/desertExtremeCard/DesertExtremeCard";
import { Outlet } from "react-router-dom";


const TourDetailLayout = () => {


 
const checkLoaction = window.location.pathname

  return (
    <>
      <div className="tour-detail-container">
        <div className="tour-detail-left-col">
       <Outlet/>
       
        </div>
        <div className="tour-detail-right-col">
          <h3>Similar Package</h3>
          <SimilarPackageCard/>
          {!checkLoaction == "/listing"
           &&
          <DesertExtremeCard/>
           }
        </div>
      </div>
    </>
  );
};

export default TourDetailLayout;
