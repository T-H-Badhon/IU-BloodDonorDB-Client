import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authorized, setAuthorize] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAdmin = async (userData, adminData, superAdminKey) => {
    const newAdmin = {
      userData,
      adminData,
      superKey: superAdminKey,
    };
    return fetch("http://localhost:5000/api/auth/registerAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success == true) {
          localStorage.setItem("AC_token", data.data.token);
          setAuthorize(true);
          setRole(data.data.role);
          return {
            success: true,
          };
        } else {
          return { success: false, errorMessage: data.errorMessage };
        }
      });
  };

  const createDonor = async (userData, donorData) => {
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
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success == true) {
          localStorage.setItem("AC_token", data.data.token);
          setAuthorize(true);
          setRole(data.data.role);
          return {
            success: true,
          };
        } else {
          return { success: false, errorMessage: data.errorMessage };
        }
      });
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
    setAuthorize(false);
    localStorage.removeItem("AC_token");
    console.log("logOut");
  };

  const changePassword = (changePasswordCredential) => {
    const changePasswordData = {
      changePasswordCredential,
    };
    fetch("http://localhost:5000/api/auth/change-password", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("AC_token"),
      },
      body: JSON.stringify(changePasswordData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const deleteProfile = () => {
    console.log("deleteProfile");
  };

  const authInfo = {
    authorized,
    loading,
    role,
    createAdmin,
    createDonor,
    logIn,
    logOut,
    changePassword,
    deleteProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
