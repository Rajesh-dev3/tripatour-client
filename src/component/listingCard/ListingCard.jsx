import  { useState } from "react";
import { cardImage } from "../../assets/images";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FastfoodIcon from '@mui/icons-material/Fastfood';

///styles
import "./styles.scss";
const ListingCard = ({data}) => {
  const [value, setValue] = useState(4);
  const infoSplit = data?.info[0]?.split(",")
  console.log(infoSplit)
  return (
    <div className="listing-card-container">
      <div
        className="listing-card-img-col"
        style={{ backgroundImage: `url(${data?.images})` }}
      ></div>
      <div className="listing-card-desc-col">
        <div className="rating">
          <Rating
            size="small"
            name="simple-controlled"
            // disabled
            value={data?.star}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className="listing-card-desc-top-col">
          <div>
            <h4>{data?.name}</h4>
            <div className="xtreme">
              Desert Xtreme <StarIcon />{data?.star}
            </div>
          </div>
          <div>
            <div className="number-rating">
              <span>{data?.star}</span> <p>Very Good</p>
              (44 VERIFIED RATINGS)
            </div>
            <p className="review-p">(1250 REVIEWS)</p>
          </div>
        </div>
        <div className="listing-card-desc-bottom-col">
            <div className="desc-bottom-left-col">
                <ul>
                  {infoSplit?.map((item,index)=>{
                    if(index<6){
                      return(

                        <li key={item}>
                            <div className="icon">
                                <FastfoodIcon/>
    
                            </div>
                            <span>{item}</span>
                        </li>
                        )
                    }
                    
                  })}
                  
                </ul>
            </div>
            <div className="desc-bottom-right-col">
            <div className="price">
          <h4 className="aed">AED {data?.price}</h4> <p className="per-night">(Per Person)</p>
        </div>
        <div className="book-now-btn">
            <button>BOOK NOW</button>
        </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
