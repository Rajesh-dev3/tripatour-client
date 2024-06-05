import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
///styles
import "./styles.scss";
import { useAddFavouriteTourMutation } from "../../service/favourite/AddFavourite";
import { useParams } from "react-router-dom";
import { notify } from "../toast/Toast";
const SimilarPackageCard = ({fun}) => {
  const [trigger,{data}]=useAddFavouriteTourMutation()
  const {id} =useParams()
  const addFavouriteTour = ()=>{
    trigger({tourId:id})
  }
  useEffect(() => {
   if(data){
    notify(data?.message).success()
   }
  }, [data])
  return (
    <div className="similar-package-card-col">
      <div className="similar-card-img">
      <div className="heart-icon" onClick={()=>addFavouriteTour()}><FavoriteBorderOutlinedIcon/></div>
      </div>
      <div className="similar-card-content">
        <h4>Luxury Heritage Evening Desert Safari</h4>
        <p>(4 Persons)</p>
        <hr />
        <div className="price">
          <h4 className="aed">AED 250.00</h4> <p className="per-night">(Per Night | Per Person)</p>
        </div>
        <div className="xtreme">
          Desert Xtreme <StarIcon /> 4.5
        </div>
        <div className="per-person-price">
          <p>($1099 Per Person) x 4 = </p><h4>AED 1050</h4>
        </div>
      </div>
        <div className="similar-card-book-btn">
          <button onClick={()=>fun()}>BOOK NOW</button>
        </div>
    </div>
  );
};

export default SimilarPackageCard;
