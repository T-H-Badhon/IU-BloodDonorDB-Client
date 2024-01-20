import {
  Button,
  Dropdown,
  Modal,
  Navbar,
  Spinner,
  Tooltip,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { logOut, role } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [localLoading, setLocalLoading] = useState(true);
  const signOut = () => {
    logOut();
    navigate("/");
  };
  useEffect(() => {
    const link =
      role == "admin"
        ? "http://localhost:5000/api/admin/me"
        : "http://localhost:5000/api/donors/donor/profile";

    fetch(`${link}`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLocalLoading(false);
        setProfileData(data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeState = () => {
    const updateData = {
      isAvailable: !profileData.isAvailable,
    };
    setLocalLoading(true);
    const link =
      role == "admin"
        ? "http://localhost:5000/api/admin/me"
        : "http://localhost:5000/api/donors/donor/profile";

    fetch(`${link}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("AC_token"),
      },
      body: JSON.stringify({ updateData }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLocalLoading(false);
        setProfileData(data.data);
      });
  };

  return (
    <div className="container mx-auto min-h-screen">
      {localLoading ? (
        <Modal show={localLoading} size="md" popup>
          <Modal.Body>
            <div className="text-center my-5">
              <Spinner
                color="failure"
                aria-label="Extra large spinner example"
                size="xl"
              />
            </div>
            <h1 className="text-center text-xl text-red-500">Please Wait...</h1>
          </Modal.Body>
        </Modal>
      ) : null}
      <div className="max-w-4xl mx-auto">
        <div>
          <Navbar fluid rounded>
            <Navbar.Brand>
              <span className="self-center text-red-600 whitespace-nowrap text-xl font-semibold dark:text-white">
                Profile
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={<Button color="failure">Setting</Button>}
              >
                <Dropdown.Item>
                  <Link to="/changePassword">Change Password</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/update">Update</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button>delete</button>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <button onClick={signOut}>Sign out</button>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </Navbar>
        </div>
        <hr className="mt-5 mb-10" />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Name:</h1>
          </div>
          <div className="col-span-3">
            <h1>{profileData?.name}</h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Blood Group</h1>
          </div>
          <div className="col-span-3">
            <h1>{profileData?.bloodGroup}</h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Email</h1>
          </div>
          <div className="col-span-3">
            <h1>{profileData?.userId.email}</h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Contact No.</h1>
          </div>
          <div className="col-span-3">
            <h1>{profileData?.phone}</h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Present Address</h1>
          </div>
          <div className="col-span-3">
            <h1>{profileData?.address}</h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Prefered Area:</h1>
          </div>
          <div className="col-span-3">
            <h1>{profileData?.area}</h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Status:</h1>
          </div>
          <div className="col-span-2">
            <h1>
              {profileData?.isAvailable ? (
                <h1 className="text-lg text-lime-500">Available</h1>
              ) : (
                <h1 className="text-lg text-red-700">Unavailable</h1>
              )}
            </h1>
          </div>
          <div className="col-span-1">
            <h1>
              {profileData?.isAvailable ? (
                <Tooltip content="Mark yourself Unavailable">
                  <Button onClick={changeState} color="failure">
                    Change Status
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip content="Mark yourself Available">
                  <Button onClick={changeState} color="success">
                    Change Status
                  </Button>
                </Tooltip>
              )}
            </h1>
          </div>
          <div className="col-span-1 text-red-500 font-bold">
            <h1>Last donate Date:</h1>
          </div>
          <div className="col-span-3">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
