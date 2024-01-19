import { Button, Navbar } from "flowbite-react";
import logo from "../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const { authorized } = useContext(AuthContext);
  return (
    <div>
      <Navbar fluid rounded className="container my-10 mx-auto">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-9 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl text-red-600 font-semibold dark:text-white">
            IU DonorDB
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {authorized ? (
            <Link to="/profile">
              <Button color="failure">Profile</Button>
            </Link>
          ) : (
            <Link to="login">
              <Button color="failure">Sign In</Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link className="text-red-600 hover:text-xl" to="/">
            Home
          </Link>
          <Link className="text-red-600 hover:text-xl" to="findDonor">
            Find Donor
          </Link>
          <Link className="text-red-600 hover:text-xl" to="/registration">
            Be a Donor
          </Link>
          <Link className="text-red-600 hover:text-xl" to="/addBloodRequest">
            Add Blood Request
          </Link>
          <Link className="text-red-600 hover:text-xl" to="/allBloodRequest">
            All Blood Requests
          </Link>
          <Link className="text-red-600 hover:text-xl" to="/blogs">
            Community
          </Link>
          <Link className="text-red-600 hover:text-xl" to="/aboutus">
            About Us
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
