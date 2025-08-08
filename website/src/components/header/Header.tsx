import HeaderTitle from "./HeaderTitle";
import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="p-1 mt-2 z-3 position-fixed rounded-pill bg-dark d-flex justify-content-evenly align-items-center align-self-center"
      style={{ width: "90%", height: "80px" }}
    >
      <HeaderTitle />
      <Navbar />
    </div>
  );
}

export default Header;
