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
        <Link
          to="/"
          className="cursor-pointer rounded-full bg-white px-4 py-2 shadow-xl lg:px-6 lg:py-3"
        >
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center space-x-6 cursor-pointer rounded-full bg-white px-4 py-2 shadow-xl lg:px-6 lg:py-3">
          <a
            href="/courses"
            className="text-black font-semibold transition duration-300 hover:text-blue-300"
          >
            Courses
          </a>
          <Link
            to="/services"
            className="text-black font-semibold transition duration-300 hover:text-blue-300"
          >
            Services
          </Link>
          <Link
            to="/contactus"
            className="text-black font-semibold transition duration-300 hover:text-blue-300"
          >
            Tribe
          </Link>
          <Link
            to="/aboutus"
            className="text-black font-semibold transition duration-300 hover:text-blue-300"
          >
            About Us
          </Link>
        </div>
        <a
          href="/register"
          className="hidden lg:block cursor-pointer shadow-xl select-none rounded-full font-semibold text-black transition duration-300 hover:text-blue-300"
        >
          <button className="bg-white text-black   font-semibold transition duration-300 hover:bg-gray-100 hover:text-blue-300 py-2 px-6 rounded-full">
            Join Us
          </button>
        </a>
        <div className="flex gap-3 lg:hidden">
          <button
            className="cursor-pointer flex shrink-0  items-center justify-center  rounded-full  transition-all duration-300 select-none   text-gray-50  hover:bg-gray-700  p-2  gap-4 relative h-10 w-10 bg-gray-800  active:outline-none lg:hidden"
            onClick={clickHandler}
          >
            <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/3 transform ">
              <span
                aria-hidden="true"
                className={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${
                  click === true ? "rotate-45" : "-translate-y-[7px]"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${
                  click === true ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${
                  click === true ? "-rotate-45" : "translate-y-[7px]"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
      <div
        className={`transform  h-0 w-full px-6  ${
          click ? "translate-x-0 h-auto py-4" : "-translate-x-[200%]"
        } duration-300  ml-auto mr-auto bg-[#121212]  border-[#1E1E1E]  border-t-[1px]   w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%    lg:hidden`}
      >
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="/courses"
            className="text-lg font-semibold hover:text-blue-300"
            onClick={closeMenu}
          >
            Courses
          </Link>
          <Link
            to="/services"
            className="text-lg font-semibold hover:text-blue-300"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/aboutus"
            className="text-lg font-semibold hover:text-blue-300"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-lg font-semibold hover:text-blue-300"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/register"
            className="bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100"
            onClick={closeMenu}
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
