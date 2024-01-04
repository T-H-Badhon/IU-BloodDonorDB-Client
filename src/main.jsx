import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import RegistrationForm from "./pages/RegistrationForm";
import Login from "./pages/Login";
import AddBloodRequest from "./pages/AddBloodRequest";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import WhoCanDonate from "./pages/WhoCanDonate";
import AboutUs from "./pages/AboutUs";
import DonorSearch from "./components/DonorSearch";
import BeAwareOfFraud from "./pages/BeAwareOfFraud";
import DonorList from "./pages/DonorList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addBloodRequest",
        element: <AddBloodRequest></AddBloodRequest>,
      },
      {
        path: "findDonor",
        element: <DonorSearch></DonorSearch>,
      },
      {
        path: "donorList",
        element: <DonorList></DonorList>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "update",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "whocandonate",
        element: <WhoCanDonate></WhoCanDonate>,
      },
      {
        path: "beAwareOfFraud",
        element: <BeAwareOfFraud></BeAwareOfFraud>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
