import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavbarIcon from "../header/NavbarIcon";

function Footer() {
  return (
    <div className="footer">
      <p className="self-center">© EmDablju</p>
      <div className="navbar max-md:hidden">
        <NavbarIcon link="https://github.com/EmD4blju" icon={FaGithub} />
        <NavbarIcon
          link="https://www.linkedin.com/in/mikołaj-warda-8988a8304/"
          icon={FaLinkedin}
        />
      </div>
    </div>
  );
}

export default Footer;
