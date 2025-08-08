import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="">
      <span className="">© 2025 EmDablju</span>
      <span className="">Developed by EmDablju</span>
      <ul className="">
        <li className="">
          <a href="#" className="">
            <FaGithub />
          </a>
        </li>
        <li className="">
          <a href="#" className="">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
