const Footer = () => {
  return (
    <div className="w-full  py-6 text-gray-50 md:py-20 bg-[#101114]  px-6 text-black ">
      <div className="max-w-[65rem] mx-auto container relative">
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:flex-nowrap">
          <div className="max-w-xs">
            <p className="font-inter text-[18px] text-gray-300 ">
              Nirudhyog is one of India's largest student communities that
              provides a one-stop platform for students to learn new skills,
              network with peers, and grow as an individual.
            </p>
            <div className="mt-6 flex items-center gap-4 md:gap-2 md:mt-10 md:gap-7">
              <a
                href="https://www.instagram.com/nirudhyog"
                target="_blank"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-3  gap-4"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  font-size="20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://wa.me/message/3IZKT7KUXCIIB1"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-3  gap-4"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  font-size="20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://whatsapp.com/channel/0029VaJEe68BadmWclssun3J"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-3  gap-4"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  font-size="20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://wa.me/c/918121398942"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-3  gap-4"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  font-size="20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-sm md:text-lg text-gray-300  ">
            <h4 className="font-semibold  text-gray-300 ">COMPANY</h4>
            <ul className="mt-4 w-fit space-y-3  text-gray-300 ">
              <a
                href="/aboutus"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                About us
              </a>
              <li className="cursor-pointer underline-offset-2 hover:underline">
                Privacy policy
              </li>
              <li className="cursor-pointer underline-offset-2 hover:underline">
                Terms &amp; conditions
              </li>
            </ul>
          </div>
          <div className="text-sm md:text-lg text-gray-300">
            <h4 className="font-semibold  text-gray-300 ">QUICK LINKS</h4>
            <div className="mt-4 w-fit space-y-3 flex flex-col  text-gray-300  ">
              <a
                href="/register"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                Join Us
              </a>
              <a
                href="/findwork"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                Find work
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 mx-auto text-center lg:text-left">
            <p className="font-bold text-gray-300 ">
              © 2024. Nirudhyog. All rights reserved.
            </p>
            <a
              href="https://elevatebox.in"
              target="_blank"
              className="font-bold text-blue-500 underline cursor-pointer"
            >
              Developed by ElevateBox
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
