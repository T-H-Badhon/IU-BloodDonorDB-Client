import { Button } from "flowbite-react";

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-red-600 my-10">Profile</h1>
          <Link to="/update">
            <Button color="failure">Update Profile</Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h1>Name:</h1>
          </div>
          <div className="col-span-3">
            <h1>Name:</h1>
          </div>
          <div className="col-span-1">
            <h1>Blood Group</h1>
          </div>
          <div className="col-span-3">
            <h1>Blood Group</h1>
          </div>
          <div className="col-span-1">
            <h1>Email</h1>
          </div>
          <div className="col-span-3">
            <h1>Email</h1>
          </div>
          <div className="col-span-1">
            <h1>Contact No.</h1>
          </div>
          <div className="col-span-3">
            <h1>Contact No.</h1>
          </div>
          <div className="col-span-1">
            <h1>Present Address</h1>
          </div>
          <div className="col-span-3">
            <h1>Present Address</h1>
          </div>
          <div className="col-span-1">
            <h1>Prefered Area:</h1>
          </div>
          <div className="col-span-3">
            <h1>Prefered Area:</h1>
          </div>
          <div className="col-span-1">
            <h1>Status:</h1>
          </div>
          <div className="col-span-3">
            <h1>Status:</h1>
          </div>
          <div className="col-span-1">
            <h1>Last donate Date:</h1>
          </div>
          <div className="col-span-3">
            <h1>Last donate Date:</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
