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
import BeAwareOfFraud from "./pages/BeAwareOfFraud";
import DonorList from "./pages/DonorList";
import FindDonor from "./pages/FindDonor";
import Blogs from "./pages/Blogs";
import AllBloodRequest from "./pages/AllBloodRequest";
import AuthProvider from "./providers/AuthProvider";
import AdminRegistration from "./pages/AdminRegistration";
import ChangePassword from "./pages/ChangePassword";

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
        path: "adminRegistration",
        element: <AdminRegistration></AdminRegistration>,
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
        path: "allBloodRequest",
        element: <AllBloodRequest></AllBloodRequest>,
      },
      {
        path: "findDonor",
        element: <FindDonor></FindDonor>,
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
        path: "changePassword",
        element: <ChangePassword></ChangePassword>,
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
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
