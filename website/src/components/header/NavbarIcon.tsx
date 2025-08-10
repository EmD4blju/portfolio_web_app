import type { IconType } from "react-icons";

export interface NavbarIconProperties {
  link: string;
  icon: IconType;
}

function NavbarIcon({ link, icon: Icon }: NavbarIconProperties) {
  return (
    <a href={link} className="navbar-icon">
      {<Icon />}
    </a>
  );
}

export default NavbarIcon;
