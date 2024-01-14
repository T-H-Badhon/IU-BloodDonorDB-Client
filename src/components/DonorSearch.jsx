import { Button, Label, Radio, Select } from "flowbite-react";

const DonorSearch = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const bloodGroup = event.target.bloodGroup.value;
    const area = event.target.area.value;
    const donorType = event.target.donorType.value;
    console.log(bloodGroup, area, donorType);
  };
  return (
    <div className="container mx-auto md:h-36  my-20  ">
      <h1 className="text-3xl text-red-600 text-center font-bold p-2">
        Search Donor
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 md:mx-20 p-5 md:flex-row justify-around items-center bg-red-600 rounded-lg"
      >
        <div className="mb-2 block ">
          <Label className="text-xl text-white" value="Blood Group" />
          <fieldset className="grid grid-cols-4 max-w-md gap-4">
            <div className="flex items-center gap-2">
              <Radio id="A+" name="bloodGroup" value="A+" />
              <Label className=" text-white" htmlFor="A+">
                A+
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="B+" name="bloodGroup" value="B+" />
              <Label className=" text-white" htmlFor="B+">
                B+
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="AB+" name="bloodGroup" value="AB+" />
              <Label className=" text-white" htmlFor="AB+">
                AB+
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="O+" name="bloodGroup" value="O+" />
              <Label className=" text-white" htmlFor="O+">
                O+
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="A-" name="bloodGroup" value="A-" />
              <Label className=" text-white" htmlFor="A-">
                A-
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="B-" name="bloodGroup" value="B-" />
              <Label className=" text-white" htmlFor="B-">
                B-
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="AB-" name="bloodGroup" value="AB-" />
              <Label className=" text-white" htmlFor="AB-">
                AB-
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="O-" name="bloodGroup" value="O-" />
              <Label className=" text-white" htmlFor="O-">
                O-
              </Label>
            </div>
          </fieldset>
        </div>
        <div>
          <div className="">
            <Select id="area" required>
              <option className="text-lg ">Select Area</option>
              <option className="text-lg ">Kushtia</option>
              <option className="text-lg ">Jhinaidah</option>
              <option className="text-lg ">Sheikhpara</option>
            </Select>
          </div>
        </div>
        <div>
          <div className="">
            <Select id="donorType" required>
              <option className="text-lg ">Donor Type</option>
              <option className="text-lg ">All</option>
              <option className="text-lg ">Eligible</option>
            </Select>
          </div>
        </div>
        <div>
          <Button outline color="failure" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DonorSearch;
