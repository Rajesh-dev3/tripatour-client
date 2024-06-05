import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../common/Mainlayout";
import TourDetail from "../pages/tourDetail/TourDetail"
import Listing from "../pages/listing/Listing";
import TourDetailLayout from "../pages/tourDetail/TourDetailLayout";
import MobileHome from "../pages/home/MobileHome";

export const router=(isMobille) =>{
  return createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element:isMobille ? <MobileHome/>: <Home />,
        },
        {
          path:"/",
          element:<TourDetailLayout/>,
          children:[
            {
              path: "/tour-detail/:id",
              element: <TourDetail />,
            },
            {
              path: "/listing",
              element: <Listing />,
            
          }]
        }
      
      ],
    },
  ]);
} 
