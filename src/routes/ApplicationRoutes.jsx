import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../common/Mainlayout";
import TourDetail from "../pages/tourDetail/TourDetail"
import Listing from "../pages/listing/Listing";
import TourDetailLayout from "../pages/tourDetail/TourDetailLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
