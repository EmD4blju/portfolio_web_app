import { FaHome } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className="self-center flex flex-wrap justify-center gap-6 text-3xl">
      <a href="" className="navbar-icon">
        <FaHome />
      </a>
      <a href="" className="navbar-icon">
        <FaRegNewspaper />
      </a>
      <a href="" className="navbar-icon">
        <FaLaptopCode />
      </a>
      <a href="https://github.com/EmD4blju" className="navbar-icon">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/miko%C5%82aj-warda-8988a8304/"
        className="navbar-icon"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default Navbar;
