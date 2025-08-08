import HeaderTitle from "./HeaderTitle";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="w-11/12 mt-2 p-3 self-center fixed flex flex-wrap justify-center sm:justify-between bg-neutral-700 rounded-md shadow-md/60">
      <HeaderTitle />
      <Navbar />
    </div>
  );
}

export default Header;
