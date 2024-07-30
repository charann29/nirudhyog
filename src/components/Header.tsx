import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    console.log("NavBar  ::: clickHandler ::: came");
    setClick((a) => !a);
  };

  return (
    <header
      className={`fixed  z-20 w-full   transition-all duration-200 ${
        click ? "bg-[#121212]" : ""
      } `}
    >
      <div className="w-full mx-auto bg-[#004aad] p-[2px]">
        <p className="text-center">
          parterned with{" "}
          <span className="underline cursor-pointer">Elevatebox</span>
        </p>
      </div>
      {/* <div className="absolute bg-red-500  p-[1px]   w-[169px] left-0 top-[76px] rotate-[-90deg]  translate-x-[-75px] ">
        <p className="text-sm">Parterned with ElevateBox</p>
      </div> */}
      <nav
        className={`  flex items-center  pt-4 pb-3   justify-between w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50% ml-auto mr-auto  `}
      >
        <Link
          to=""
          className="cursor-pointer rounded-full bg-gray-800 px-4 py-2 shadow-xl  lg:px-6 lg:py-3"
        >
          <Logo></Logo>
        </Link>
        <div className="hidden lg:flex cursor-pointer rounded-full bg-gray-800 px-4 py-2 shadow-xl  lg:px-6 lg:py-3 items-center   gap-3 !cursor-default">
          <a
            href="#cirriculum"
            className="cursor-pointer select-none rounded-full  font-semibold text-gray-50 transition duration-300 hover:text-blue-300"
          >
            Courses
          </a>
          <Link
            to={"aboutUs"}
            className="cursor-pointer select-none rounded-full  font-semibold text-gray-50 transition duration-300 hover:text-blue-300"
          >
            Services
          </Link>
          <Link
            to="/mentorship"
            className="cursor-pointer select-none rounded-full  font-semibold text-gray-50 transition duration-300 hover:text-blue-300"
          >
            Contact Us
          </Link>
          <Link
            to="/events"
            className="cursor-pointer select-none rounded-full  font-semibold text-gray-50 transition duration-300 hover:text-blue-300"
          >
            About Us
          </Link>
        </div>
        <div
          className="cursor-pointer rounded-full bg-gray-800 px-4 py-2 shadow-xl  lg:px-6 lg:py-3 hidden lg:block   !bg-primary font-semibold "
          style={{ transform: "none" }}
        >
          <a>Apply a job</a>
        </div>
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
        className={`transform  ${
          click ? "translate-x-0" : "-translate-x-[200%]"
        } duration-300  ml-auto mr-auto bg-[#121212]  border-[#1E1E1E]  border-t-[1px]   w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50%   py-4 lg:hidden`}
      >
        <a href="#cirriculum" className="mb-2 text-[18px] cursor-pointer">
          Cirriculum
        </a>
        <br />
        <a href="#events" className="mb-2 text-[18px] cursor-pointer">
          Mentorship
        </a>
        <br />
        <a href="#mentorship" className="mb-2 text-[18px] cursor-pointer">
          Events
        </a>
        <br />
        <Link to={"aboutUs"} className="mb-2 !text-[18px] cursor-pointer">
          About Us
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
