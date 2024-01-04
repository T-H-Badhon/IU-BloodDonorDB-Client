import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";

const AddBloodRequest = () => {
  return (
    <div className="container mx-auto md:my-36">
      <form className="flex mx-auto  max-w-md flex-col gap-4">
        <div className="md:grid grid-cols-2 gap-5">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="bloodGroup" value="Blood Group" />
            </div>
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
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="requestArea" value="Area" />
            </div>
            <Select id="requestArea" required>
              <option className="text-lg ">Select Area</option>
              <option className="text-lg ">Kushtia</option>
              <option className="text-lg ">Jhinaidah</option>
              <option className="text-lg ">Sheikhpara</option>
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput id="name" type="text" />
        </div>
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Contact No." />
            </div>
            <TextInput id="phone" type="text" placeholder="017XXXXXXXX" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Date" />
            </div>
            <Datepicker id="date" />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="reason" value="Reason" />
          </div>
          <TextInput
            id="reason"
            type="text"
            placeholder="Why you need Blood?"
          />
        </div>
        <Button color="failure" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddBloodRequest;
