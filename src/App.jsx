
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { mobileRouter, router } from "./routes/ApplicationRoutes";
import { Provider } from "react-redux";
import {store }from "./app/Store"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from "./useMediaQuery/UseMediaQuery";

function App() {
  const isMobille = useMediaQuery("(max-width:480px)")
  return (
    <Provider store = {store}>
      <RouterProvider router={isMobille ? mobileRouter(isMobille): router(isMobille)} />
      <ToastContainer /> 
    </Provider>
  );
}

export default App;
