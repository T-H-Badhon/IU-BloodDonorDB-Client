import {
  Button,
  Label,
  TextInput,
  Select,
  Modal,
  Spinner,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { role } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [localLoading, setLocalLoading] = useState(true);
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
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const bloodGroup = event.target.bloodGroup.value;
    const phone = event.target.phone.value;
    const address = event.target.presentAddress.value;
    const area = event.target.donorArea.value;

    const updateData = {
      name,
      bloodGroup,
      phone,
      address,
      area,
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
        setProfileData(data.data);
        setLocalLoading(false);
      });
  };
  return (
    <div className="container mx-auto md:h-5/6 md:my-32">
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
      <h1 className="text-center font-bold text-red-600 text-xl mb-10">
        Update Profile
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-xl mx-auto flex-col gap-4 "
      >
        <div className="md:grid grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Name"
              defaultValue={profileData?.name}
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bloodGroup" value="Your Blood Group" />
            </div>
            <div className="">
              <Select id="bloodGroup" required>
                <option className="text-lg ">{profileData?.bloodGroup} </option>
                <option className="text-lg ">A+</option>
                <option className="text-lg ">B+</option>
                <option className="text-lg ">O+</option>
                <option className="text-lg ">AB+</option>
                <option className="text-lg ">A-</option>
                <option className="text-lg ">B-</option>
                <option className="text-lg ">O-</option>
                <option className="text-lg ">AB-</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-5 gap-5">
          <div className="md:col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="example@email.com"
              defaultValue={profileData?.userId.email}
              required
              shadow
              disabled
            />
          </div>
          <div className="md:col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Contact No." />
            </div>
            <TextInput
              id="phone"
              type="text"
              placeholder="017XXXXXXXX"
              defaultValue={profileData?.phone}
              required
              shadow
            />
          </div>
        </div>
        <div className="md:grid grid-cols-5 gap-5">
          <div className="md:col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="presentAddress" value="Present Address" />
            </div>
            <TextInput
              id="presentAddress"
              type="text"
              placeholder="Address"
              defaultValue={profileData?.address}
              required
              shadow
            />
          </div>
          <div className="md:col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="donorArea" value="Prefered Area" />
            </div>
            <div className="">
              <Select id="donorArea" required>
                <option className="text-lg ">{profileData?.area}</option>
                <option className="text-lg ">Kushtia</option>
                <option className="text-lg ">Jhinaidah</option>
                <option className="text-lg ">Sheikhpara</option>
              </Select>
            </div>
          </div>
        </div>
        <Button color="failure" type="submit">
          Update Now
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfile;
