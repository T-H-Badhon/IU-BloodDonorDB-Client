import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialUser = {
    name: "Not provided",
    bloodGroup: "Not provided",
    phone: "Not provided",
    email: "Not provided",
    presentAddress: "Not provided",
    area: "Not provided",
    status: "Not provided",
    lastDonateDate: "Not provided",
  };
  const [authorized, setAuthorize] = useState(false);
  const [loading, setLoading] = useState(true);

  const createAdmin = (userData, adminData, superAdminKey) => {
    const newAdmin = {
      userData,
      adminData,
    };
    return fetch("http://localhost:5000/api/auth/registerAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: superAdminKey,
      },
      body: JSON.stringify(newAdmin),
    });
  };

  const createDonor = (userData, donorData) => {
    const newDonor = {
      userData,
      donorData,
    };
    return fetch("http://localhost:5000/api/auth/registerDonor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDonor),
    });
  };

  const updateUser = (updateData) => {
    console.log(updateData);
  };
  const logIn = (loginCredential) => {
    const loginData = {
      loginCredential,
    };
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("AC_token", data.result.token);
        setAuthorize(true);
        console.log(data);
      });
  };

  const logOut = () => {
    console.log("logOut");
  };
  const deleteProfile = () => {
    console.log("deleteProfile");
  };

  const authInfo = {
    authorized,
    loading,
    createAdmin,
    createDonor,
    updateUser,
    logIn,
    logOut,
    deleteProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
