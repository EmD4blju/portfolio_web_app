import HeaderTitle from "./HeaderTitle";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="p-2 w-75 mt-2 z-3 position-fixed rounded-pill bg-secondary d-flex justify-content-evenly align-items-center flex-wrap align-self-center">
      <HeaderTitle />
      <Navbar />
    </div>
  );
}

export default Header;
