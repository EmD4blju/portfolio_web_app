import HeaderTitle from "./HeaderTitle";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="p-5 rounded-bottom-4 bg-dark d-flex justify-content-evenly align-items-center flex-wrap">
      <HeaderTitle />
      <Navbar />
    </div>
  );
}

export default Header;
