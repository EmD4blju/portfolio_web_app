import { FaHome } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <ul className="navbar flex-fill d-flex flex-wrap justify-content-evenly list-unstyled m-0 fs-1">
      <li className="p-3 p-sm-3">
        <a href="#" className="link-light link-opacity-25-hover custom-fade">
          <FaHome />
        </a>
      </li>
      <li className="p-3 p-sm-3">
        <a href="#" className="link-light link-opacity-25-hover custom-fade">
          <FaLaptopCode />
        </a>
      </li>
      <li className="p-3 p-sm-3">
        <a href="#" className="link-light link-opacity-25-hover custom-fade">
          <FaRegNewspaper />
        </a>
      </li>
      <li className="p-3 p-sm-3">
        <a href="#" className="link-light link-opacity-25-hover custom-fade">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
