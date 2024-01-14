import { Button, Label, TextInput, Select } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const bloodGroup = event.target.bloodGroup.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const presentAddress = event.target.presentAddress.value;
    const donorArea = event.target.donorArea.value;

    console.log(name, bloodGroup, email, phone, presentAddress, donorArea);
  };
  return (
    <div className="container mx-auto md:h-5/6 md:my-32">
      <h1 className="text-center font-bold text-red-600 text-xl mb-10">
        Update Information
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
              defaultValue={user.name}
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
                <option className="text-lg ">{user.bloodGroup} </option>
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
              defaultValue={user.email}
              required
              shadow
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
              defaultValue={user.phone}
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
              defaultValue={user.presentAddress}
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
                <option className="text-lg ">{user.area}</option>
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
