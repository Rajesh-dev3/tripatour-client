import  { useState } from "react";
import { cardImage } from "../../assets/images";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FastfoodIcon from '@mui/icons-material/Fastfood';
///styles
import "./styles.scss";
const ListingCard = () => {
  const [value, setValue] = useState(4);
  return (
    <div className="listing-card-container">
      <div
        className="listing-card-img-col"
        style={{ backgroundImage: `url(${cardImage})` }}
      ></div>
      <div className="listing-card-desc-col">
        <div className="rating">
          <Rating
            size="small"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className="listing-card-desc-top-col">
          <div>
            <h4>Morning Desert Safari</h4>
            <div className="xtreme">
              Desert Xtreme <StarIcon /> 4.5
            </div>
          </div>
          <div>
            <div className="number-rating">
              <span>3.9</span> <p>Very Good</p>
              (44 VERIFIED RATINGS)
            </div>
            <p className="review-p">(1250 REVIEWS)</p>
          </div>
        </div>
        <div className="listing-card-desc-bottom-col">
            <div className="desc-bottom-left-col">
                <ul>
                    <li>
                        <div className="icon">
                            <FastfoodIcon/>

                        </div>
                        <span>Free Cancellation</span>
                    </li>
                    <li>
                        <div className="icon">
                            <FastfoodIcon/>

                        </div>
                        <span>Free Cancellation</span>
                    </li>
                    <li>
                        <div className="icon">
                            <FastfoodIcon/>

                        </div>
                        <span>Free Cancellation</span>
                    </li>  <li>
                        <div className="icon">
                            <FastfoodIcon/>

                        </div>
                        <span>Free Cancellation</span>
                    </li>
                </ul>
            </div>
            <div className="desc-bottom-right-col">
            <div className="price">
          <h4 className="aed">AED 250.00</h4> <p className="per-night">(Per Person)</p>
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
