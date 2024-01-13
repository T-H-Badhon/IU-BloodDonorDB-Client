import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import BDFooter from "../components/BDFooter";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
      <BDFooter></BDFooter>
    </div>
  );
};

export default Main;
