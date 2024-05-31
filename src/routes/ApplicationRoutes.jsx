import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Mainlayout from "../common/Mainlayout";
import TourDetail from "../pages/tourDetail/TourDetail";

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
        path: "/tour-detail/:id",
        element: <TourDetail />,
      },
    ],
  },
]);
