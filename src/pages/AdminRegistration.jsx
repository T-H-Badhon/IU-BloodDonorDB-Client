import { Button, Label, TextInput, Select, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { HiOutlineBadgeCheck, HiXCircle } from "react-icons/hi";

const AdminRegistration = () => {
  const { createAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const bloodGroup = event.target.bloodGroup.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const address = event.target.presentAddress.value;
    const area = event.target.donorArea.value;
    const password = event.target.password2.value;
    const repeatPassword = event.target.repeatPassword.value;
    const superAdminKey = event.target.superAdminKey.value;
    const userDate = {
      password,
      email,
      phone,
    };
    const adminData = {
      name,
      bloodGroup,
      area,
      address,
    };
    createAdmin(userDate, adminData, superAdminKey)
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          setOpenModal(true);
        } else {
          setErrorModal(true);
        }
      });
    event.target.reset();
  };

  const goToLogin = () => {
    setOpenModal(false);
    navigate("/login");
  };

  return (
    <div>
      <div>
        <Button onClick={() => setOpenModal(true)}>ofsofj</Button>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineBadgeCheck className="mx-auto mb-4 h-14 w-14 text-lime-600 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-lime-600 dark:text-gray-400">
                Registration Completed Successfully!!
              </h3>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={goToLogin}
              className="mx-auto"
              gradientMonochrome="lime"
            >
              Go to Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Button onClick={() => setErrorModal(true)}>error</Button>
        <Modal
          show={errorModal}
          size="md"
          onClose={() => setErrorModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiXCircle className="mx-auto mb-4 h-14 w-14 text-red-800 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-red-800 dark:text-gray-400">
                Registration Failed!!
              </h3>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div className="container mx-auto md:h-5/6 md:my-32">
        <h1 className="text-center font-bold text-red-600 text-xl mb-10">
          Register as Admin
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

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeatPassword" value="Repeat password" />
            </div>
            <TextInput id="repeatPassword" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="superAdminKey" value="Super Admin Key" />
            </div>
            <TextInput id="superAdminKey" type="password" required shadow />
          </div>
          <Button color="failure" type="submit">
            Register new account
          </Button>
        </form>
        <div className="max-w-xl mx-auto my-5">
          <Link className="flex" to="/login">
            Alreay have account?
            <button className="flex ml-2 font-bold text-green-500">
              Login{" "}
              <ArrowLeftOnRectangleIcon className="ml-2 h-6 w-6"></ArrowLeftOnRectangleIcon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistration;
