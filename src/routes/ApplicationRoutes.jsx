import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../common/Mainlayout";
import TourDetail from "../pages/tourDetail/TourDetail"
import Listing from "../pages/listing/Listing";
import TourDetailLayout from "../pages/tourDetail/TourDetailLayout";
import MobileHome from "../pages/home/MobileHome";
import MobileDetailPage from "../pages/tourDetail/MobileDetailPage";
import NotFound from "../pages/notFound/NotFound";
import AboutPolicy from "../pages/Policys/AboutPolicy";
import PrivacyPolicy from "../pages/Policys/PrivacyPolicy";
import RefundPolicy from "../pages/Policys/RefundPolicy";
import TermsandConditions from "../pages/Policys/TermsandConditions";
import ContactUs from "../pages/Policys/ContactUs";

export const router=(isMobille) =>{
  return createBrowserRouter([
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
            
          },
          {
            path: "/about-policy",
            element: <AboutPolicy />,
          
        },
          {
            path: "/Contactus-policy",
            element: <ContactUs />,
          
        },
          {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
          
        },
          {
            path: "/refund-policy",
            element: <RefundPolicy />,
          
        },
          {
            path: "/term&condition-policy",
            element: <TermsandConditions />,
          
        }

        ]
        },
        
      ],
    },
    {
      path:"*", 
      element:<NotFound />
    }
  ]);
} 
export const mobileRouter=(isMobille) =>{
  return createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element:<MobileHome/>,
        },{
          path:"/tour-detail/:id",
          element:<MobileDetailPage/>
        }
      
        ,
      
      ],
    },
    {
      path:"*", 
      element:<NotFound />
    }
  ]);
} 
