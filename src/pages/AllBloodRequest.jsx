import { Button } from "flowbite-react";
import BloodRequestCard from "../components/BloodRequestCard";

const AllBloodRequest = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div>
        <div>
          <Button>My Requests</Button>
          <Button>All Requests</Button>
        </div>
      </div>
      <BloodRequestCard
        key={bloodRequest._id}
        bloodRequest={bloodRequest}
      ></BloodRequestCard>
    </div>
  );
};

export default AllBloodRequest;
