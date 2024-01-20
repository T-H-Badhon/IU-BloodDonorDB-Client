import { Modal, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import DonorCard from "../components/DonorCard";

const AllDonors = () => {
  const [donors, setDonors] = useState([]);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/donors", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDonors(data.data);
        setLocalLoading(false);
      });
  }, []);

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
      <h1 className="text-2xl font-bold text-red-500 my-10">Requests: </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {donors?.length
          ? donors.map((donor) => (
              <DonorCard donor={donor} key={donor?._id}></DonorCard>
            ))
          : null}
      </div>
      {!donors?.length ? (
        <h1 className="text-3xl md:my-20 my-5 text-red-500 text-center">
          No Donors Found!
        </h1>
      ) : null}
    </div>
  );
};

export default AllDonors;
