import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OutlinedInput from "@mui/material/OutlinedInput";
import { BorderlessSelect } from "./styled";
import { useState } from "react";
import DetailTabs from "../../component/detailTabs/DetailTabs";
import StepsTrack from "../../component/stepsTrack/StepsTrack";
import DetailCard from "../../component/detailsPageCard/DetailCard";
import HouseRuleContent from "../../component/houseRuleContent/HouseRuleContent";
import SimilarPackageCard from "../../component/similarPackageCard/SimilarPackageCard"

///styles
import "./styles.scss";
import DesertExtremeCard from "../../component/desertExtremeCard/DesertExtremeCard";

import SliderComponent from "../../component/slider/Slider";
import { useGetFavoriteTourQuery } from "../../service/favourite/AddFavourite";
import FavSliderComponent from "../../component/slider/FavSlider";
const TourDetail = () => {
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const [personName, setPersonName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const {data:favouriteData} = useGetFavoriteTourQuery()
  const detailList = [
    {
      name: "High",
      list: [
        "Get an affordable desert safari experience complete with an unlimited BBQ dinner with plenty of options from different cuisines including hummus, biriyani, and pasta.",
        "Enjoy must-do experiences with your ticket including 15 minutes of dune bashing, a camel ride, and sandboarding",
        "Deck out in traditional clothes with a falcon resting on your arm and get a beautiful henna design on your palms for the complete Emirati experience.",
        "Spread out on an Arabic Majlis while puffing shisha and try  traditional tea, qehwah, and luqaimat – a sweet dish",
        "Relish in your delicious dinner with a side of a thrilling belly dance performance, a fire show as well as a Tanoura dance performance",
      ],
    },
    {
      name: "Inclusions",
      list: [
        "6-hour desert safari",
        "Hotel transfers in AC 4x4 cars",
        "Dune bashing for 10-15 mins",
        "BBQ dinner buffet with veg, non-veg and Jain dishes (find the menu here)",
        "Live entertainment shows (Tanoura, belly dancing, and fire dancing)",
        "Camel ride",
        "Sunset photo stop",
        "Traditional Arabic costume photo opportunity",
        "Sandboarding",
        "Arabic coffee or tea",
        "Henna painting Unlimited refreshments: tea, coffee, water, soft drinks",
      ],
    },
    {
      name:"Need To Know",
      list:[
        "A buggy is available on request",
"Facilities: Wheelchair Accessibility","Belly dance will not be available during the holy month of Ramadan."
      ]
    },
    {name:"Cancellation Policy",
      list:["These tickets can't be cancelled or rescheduled."]
    }
  ];


  return (
    <>
      <div className="tour-detail-container">
        <div className="tour-detail-left-col">
          <div className="heading">
            <div className="heading-left-col">
              <h1>Morning Desert Safari with Quad Bike</h1>
              <ul>
                <li>
                  <p>
                    <AccessTimeIcon />
                  </p>
                  6Hr.
                </li>
                <li>
                  <p>
                    <AccessTimeIcon />
                  </p>
                  Transfer Included
                </li>
                <li>
                  <p>
                    <AccessTimeIcon />
                  </p>
                  Hotel Pickup
                </li>
                <li>
                  <p>
                    <AccessTimeIcon />
                  </p>
                  Meals Included
                </li>
              </ul>
            </div>
            <div className="heading-right-col">
              <FormControl sx={{ width: "100%" }}>
                <BorderlessSelect
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <>Sort By: Popularity</>;
                    }

                    return selected.join(", ");
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <>Sort By: Popularity</>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </BorderlessSelect>
              </FormControl>
            </div>
          </div>
          <DetailTabs />
          <StepsTrack />
          <div className="highlights-section">
            {detailList.map((item)=>{
              return(

                <DetailCard name={item?.name}  list={item?.list} key={item?.name}/>
              )
            })}
           
          </div>
          <div className="guest-review">
            <div className="guest-review-left-col">Guest Reviews</div>
            <div className="guest-review-right-col">
              <ul>
                <li>8.1</li>
                <li>Very Good</li>
                <li>10,926 reviews</li>
                <li>Read all reviews</li>
              </ul>
            </div>
          </div>
          <div className="house-rules">
            <div className="heading-house-rule">
              <h4>House Rules </h4>
              <p>Wyndham Dubai Marina takes special requests-add in the next steps!</p>
            </div>
            <div className="house-rule-content">
             <HouseRuleContent/>
             

            </div>

          
          </div>
          <div className="slider-section" >
              <div className="slider-heading">
              Travellers' favorite choice
                <p className="para">From Desert Sands to Celestial Canopies: Dubai Safari Expeditions</p>
              </div>
              <div className="slider-col2 slider-col">
                <div className="slider-container">
                

                      <FavSliderComponent data={favouriteData?.data}/>
                  
                </div>
                <div className="slider-bg"></div>
              </div>
            </div>
        </div>
        <div className="tour-detail-right-col">
          <h3>Similar Package</h3>
          <SimilarPackageCard/>
          <DesertExtremeCard/>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
