import HeaderTitle from "./HeaderTitle";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header max-md:justify-center ${
        isScrolled ? "w-11/12 bg-white shadow-md/40" : "bg-transparent"
      }`}
    >
      <HeaderTitle />
      <Navbar />
    </div>
  );
}

export default Header;
