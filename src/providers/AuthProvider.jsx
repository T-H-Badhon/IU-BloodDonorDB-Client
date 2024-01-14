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
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(true);

  const createUser = (userData) => {
    console.log(userData);
  };
  const updateUser = (updateData) => {
    console.log(updateData);
  };
  const logIn = (loginCredential) => {
    console.log(loginCredential);
  };

  const logOut = () => {
    console.log("logOut");
  };
  const deleteProfile = () => {
    console.log("deleteProfile");
  };

  const authInfo = {
    user,
    loading,
    createUser,
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
