import React, { useEffect, useState } from 'react'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OutlinedInput from "@mui/material/OutlinedInput";
import { BorderlessSelect } from "./styled";
import { useGetFavoriteTourQuery } from '../../service/favourite/AddFavourite';
import FavSliderComponent from "../../component/slider/FavSlider";
import DetailTabs from "../../component/detailTabs/DetailTabs";
import StepsTrack from "../../component/stepsTrack/StepsTrack";
import DetailCard from "../../component/detailsPageCard/DetailCard";
import HouseRuleContent from "../../component/houseRuleContent/HouseRuleContent";
import { useDetailHighlightMutation } from '../../service/detailPage/Detail';
import { useParams } from 'react-router-dom';
import { useHouseRuleQuery } from '../../service/houseRule/HouseRule';
const TourDetail = () => {
    const {data:favouriteData} = useGetFavoriteTourQuery()
    const [personName, setPersonName] = useState([]);
    const {id} = useParams()
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    const [trigger,{data}]=useDetailHighlightMutation()

    useEffect(() => {
      trigger({tourId:id})
    }, [id])

    const removeCol = (name) => {
      if(name == "highlights"){

        return data && data?.data[0][name][0].split('\n')?.map(item => item.trim().replace(/^"|"$/g, '').replace(/,$/, '')) || [];
      }else{
        return data && data?.data[0][name].split('\n')?.map(item => item.trim().replace(/^"|"$/g, '').replace(/,$/, '')) || [];

      }
    }
  
    
    const detailList = [
      {
        name: "Highlights",
        list:data && removeCol("highlights") || []
      },
      {
        name: "Inclusions",
        list: data && removeCol("inclusions") || [] 
      },
      {
        name:"Need To Know",
        list: data && removeCol("needToKnow") || [] 
      },
      {name:"Cancellation Policy",
      list: data && removeCol("canclePolicy") || []
      }
    ];
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
  const {data:houseRule} = useHouseRuleQuery(id)
  const houseRuleData = houseRule && houseRule?.data[0]
  return (
    <>
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
          <DetailTabs sliderData={data}/>
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
              <p>{houseRuleData?.description}</p>
            </div>
            <div className="house-rule-content">
             <HouseRuleContent houseRuleData={houseRuleData}/>
             

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
    </>
  )
}

export default TourDetail