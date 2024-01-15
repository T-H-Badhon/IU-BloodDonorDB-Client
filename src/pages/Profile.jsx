import { Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto min-h-screen">
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
                  <Link to="/update">Update</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button>delete</button>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <button>Sign out</button>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </Navbar>
        </div>
        <hr className="mt-5 mb-10" />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h1>Name:</h1>
          </div>
          <div className="col-span-3">
            <h1>{user.name}</h1>
          </div>
          <div className="col-span-1">
            <h1>Blood Group</h1>
          </div>
          <div className="col-span-3">
            <h1>{user?.bloodGroup}</h1>
          </div>
          <div className="col-span-1">
            <h1>Email</h1>
          </div>
          <div className="col-span-3">
            <h1>{user.email}</h1>
          </div>
          <div className="col-span-1">
            <h1>Contact No.</h1>
          </div>
          <div className="col-span-3">
            <h1>{user.phone}</h1>
          </div>
          <div className="col-span-1">
            <h1>Present Address</h1>
          </div>
          <div className="col-span-3">
            <h1>{user?.address}</h1>
          </div>
          <div className="col-span-1">
            <h1>Prefered Area:</h1>
          </div>
          <div className="col-span-3">
            <h1>{user?.area}</h1>
          </div>
          <div className="col-span-1">
            <h1>Status:</h1>
          </div>
          <div className="col-span-3">
            <h1>{user?.isAvailable}</h1>
          </div>
          <div className="col-span-1">
            <h1>Last donate Date:</h1>
          </div>
          <div className="col-span-3">
            <h1>{user?.lastDonateDate}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
