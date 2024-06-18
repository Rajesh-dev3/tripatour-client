import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import { FormControl, MenuItem } from '@mui/material';
import { BorderlessSelect, BorderlessSelectShow } from '../tourDetail/styled';
import OutlinedInput from "@mui/material/OutlinedInput";
import ListingCard from '../../component/listingCard/ListingCard';
import FavSliderComponent from '../../component/slider/FavSlider';
import { useGetFavoriteTourQuery } from '../../service/favourite/AddFavourite';
import {useListingQuery} from "../../service/listing/Listing"
import Pagination from '@mui/material/Pagination';
///styles
import "./styles.scss"
import { useAllPackagesQuery } from '../../service/allPackages/AllPackages';
import { Link } from 'react-router-dom';
const Listing = () => {
    const [personName, setPersonName] = useState([]);
    const {data,isLoading} = useListingQuery()
    console.log(data?.data,"l")

    // const {data} = useAllPackagesQuery()
    const names = [
        "25",
        "50",
        "75",
        "100",
       
      ];
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
  return (
    <>
        <div className="bred-crum">
            <ul>
            <Link to={"/"}><li>Home </li></Link>
                <li><EastIcon/></li>
                <li>Things to do in dubai</li>
            </ul>
        </div>
        <div className="listing-container">
                <div className="listing-heading">
                   <h4>
                    
                     Showing 6349 properties in Dubai
                    </h4>
                <FormControl >
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
                {data?.data.map((item,index)=>{
                  return <ListingCard data={item} key={index}/>
                })}
               
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


            <div className="pagination">

            <Pagination count={10} variant="outlined" shape="rounded" />
            <FormControl >
                <BorderlessSelectShow
                  multiple
                  displayEmpty
                  IconComponent={false}
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <>Show 1 - 25</>;
                    }

                    return selected.join(", ");
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                 
                >
                  <MenuItem disabled value="" >
                    <>Show 1 - 25</>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </BorderlessSelectShow>
              </FormControl>
            </div>
        </div>
    </>
  )
}

export default Listing