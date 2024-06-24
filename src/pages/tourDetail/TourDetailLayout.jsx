
import { useState } from "react";

import SimilarPackageCard from "../../component/similarPackageCard/SimilarPackageCard"

///styles
import "./styles.scss";
import DesertExtremeCard from "../../component/desertExtremeCard/DesertExtremeCard";
import { Outlet, useParams } from "react-router-dom";
import BasicModal from "../../component/modal/Modal";
import EnquiryForm from "../../component/enquiryForm/EnquiryForm";


const TourDetailLayout = () => {


 
const checkLoaction = window.location.pathname
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const {id} = useParams()
  return (
    <>
     <BasicModal Children={<EnquiryForm setOpen={setOpen} id={id} width={""}/>}  setOpen={setOpen} open={open}/>
      <div className="tour-detail-container">
        <div className="tour-detail-left-col">
       <Outlet context={[handleOpen]}/>
       
        </div>
        <div className="tour-detail-right-col">
          <h3>Similar Package</h3>
          <SimilarPackageCard fun={handleOpen}/>
          {checkLoaction != "/listing"
           &&
          <DesertExtremeCard fun={handleOpen}/>
           }
        </div>
      </div>
    </>
  );
};

export default TourDetailLayout;
