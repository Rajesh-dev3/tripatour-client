
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/ApplicationRoutes";
import { Provider } from "react-redux";
import {store }from "./app/Store"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store = {store}>
      <RouterProvider router={router} />
      <ToastContainer /> 
    </Provider>
  );
}

export default App;
