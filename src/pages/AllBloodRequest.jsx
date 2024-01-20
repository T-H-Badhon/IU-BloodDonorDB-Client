import { Button, Modal, Spinner } from "flowbite-react";
import BloodRequestCard from "../components/BloodRequestCard";
import { useEffect, useState } from "react";

const AllBloodRequest = () => {
  const [requests, setRequests] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/blood-requests/", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRequests(data.data);
        setLocalLoading(false);
      });
  }, []);

  const myRequests = () => {
    setOwner(true);
    setLocalLoading(true);
    fetch("http://localhost:5000/api/blood-requests/my-requests", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRequests(data.data);
        setLocalLoading(false);
      });
  };

  const allRequests = () => {
    setOwner(false);
    setLocalLoading(true);
    fetch("http://localhost:5000/api/blood-requests/", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRequests(data.data);
        setLocalLoading(false);
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
            <h1 className="text-center text-xl text-red-500">Loading...</h1>
          </Modal.Body>
        </Modal>
      ) : null}
      <div>
        <div>
          {!owner ? (
            <Button onClick={myRequests} color="failure">
              My requests
            </Button>
          ) : (
            <Button onClick={allRequests} color="failure">
              All requests
            </Button>
          )}
        </div>
      </div>
      <h1 className="text-2xl text-red-500 my-10">Requests: </h1>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {requests.length
          ? requests.map((request) => (
              <BloodRequestCard
                request={request}
                key={request?._id}
              ></BloodRequestCard>
            ))
          : null}
      </div>
      {!requests.length ? (
        <h1 className="text-3xl md:my-20 my-5 text-red-500 text-center">
          No Requests Found!
        </h1>
      ) : null}
    </div>
  );
};

export default AllBloodRequest;
