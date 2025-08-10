import { FaHome } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavbarIcon from "./NavbarIcon";

function Navbar() {
  return (
    <div className="navbar">
      <NavbarIcon link="#" icon={FaHome} />
      <NavbarIcon link="#" icon={FaLaptopCode} />
      <NavbarIcon link="#" icon={FaRegNewspaper} />
      <NavbarIcon link="https://github.com/EmD4blju" icon={FaGithub} />
      <NavbarIcon
        link="https://www.linkedin.com/in/mikołaj-warda-8988a8304/"
        icon={FaLinkedin}
      />
    </div>
  );
}

export default Navbar;
