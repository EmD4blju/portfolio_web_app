import HeaderTitle from "./HeaderTitle";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header max-md:justify-center ">
      <HeaderTitle />
      <Navbar />
    </div>
  );
}

export default Header;
