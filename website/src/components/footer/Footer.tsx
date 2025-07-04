import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface FooterProperties {}

function Footer() {
  return (
    <div className="fs-5 border-top rounded-4 border-light d-flex justify-content-between">
      <span className="align-self-center p-3">© 2025 EmDablju</span>
      <span className="align-self-center p-3 d-none d-sm-block">
        Developed by EmDablju
      </span>
      <ul className="d-flex flex-wrap justify-content-end gap-4 list-unstyled m-0 p-3 fs-1">
        <li className="">
          <a href="#" className="link-light link-opacity-25-hover custom-fade">
            <FaGithub />
          </a>
        </li>
        <li className="">
          <a href="#" className="link-light link-opacity-25-hover custom-fade">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
