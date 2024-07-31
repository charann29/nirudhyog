import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clickHandler = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <header
      className={`fixed z-20 w-full transition-all duration-200 ${
        click ? "bg-[#ffffff]" : ""
      } ${isScrolled ? "backdrop-blur-md bg-[#004aad]/10" : "bg-transparent"} `}
    >
      <nav
        className={`flex items-center pt-4 pb-3 justify-between w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50% ml-auto mr-auto`}
      >
        <Link to="/" className="cursor-pointer rounded-full bg-white px-4 py-2 shadow-xl lg:px-6 lg:py-3">
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center space-x-6 cursor-pointer rounded-full bg-white px-4 py-2 shadow-xl lg:px-6 lg:py-3">
          <a href="/courses" className="text-black font-semibold transition duration-300 hover:text-blue-300">
            Courses
          </a>
          <Link to="/services" className="text-black font-semibold transition duration-300 hover:text-blue-300">
            Services
          </Link>
          <Link to="/contactus" className="text-black font-semibold transition duration-300 hover:text-blue-300">
            Tribe
          </Link>
          <Link to="/aboutus" className="text-black font-semibold transition duration-300 hover:text-blue-300">
            About Us
          </Link>
        </div>
        <a href="/register" className="cursor-pointer select-none rounded-full font-semibold text-black transition duration-300 hover:text-blue-300">
          <button className="bg-white text-black font-semibold transition duration-300 hover:bg-gray-100 hover:text-blue-300 py-2 px-6 rounded-full">
            Join Us
          </button>
        </a>
        <div className="flex gap-3 lg:hidden">
          <button
            className="flex items-center justify-center p-2 rounded-full bg-gray-800 text-white relative"
            onClick={clickHandler}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-6 h-0.5 bg-white rounded transition-transform duration-300 ${
                  click ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${
                  click ? "opacity-0" : "opacity-100"
                }`}
                style={{ margin: '2px 0' }} // Further reduced space between lines
              ></div>
              <div
                className={`w-6 h-0.5 bg-white rounded transition-transform duration-300 ${
                  click ? "-rotate-45 translate-y-1" : "translate-y-1"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full bg-[#121212] text-white p-6 transition-transform duration-300 ${
          click ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <Link to="/courses" className="text-lg font-semibold hover:text-blue-300" onClick={closeMenu}>
            Courses
          </Link>
          <Link to="/services" className="text-lg font-semibold hover:text-blue-300" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/aboutus" className="text-lg font-semibold hover:text-blue-300" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/contactus" className="text-lg font-semibold hover:text-blue-300" onClick={closeMenu}>
            Contact Us
          </Link>
          <Link to="/register" className="bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100" onClick={closeMenu}>
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
