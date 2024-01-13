import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div className="container mx-auto md:h-5/6 md:my-32">
      <h1 className="text-center font-bold text-red-600 text-xl mb-10">
        Update Information
      </h1>
      <form className="flex max-w-xl mx-auto flex-col gap-4 ">
        <div className="md:grid grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Name"
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
                <option className="text-lg ">Blood Group</option>
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
                <option className="text-lg ">Select Area</option>
                <option className="text-lg ">Kushtia</option>
                <option className="text-lg ">Jhinaidah</option>
                <option className="text-lg ">Sheikhpara</option>
              </Select>
            </div>
          </div>
        </div>
        <Link to="">
          <Button color="failure" type="submit">
            Update Now
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateProfile;
