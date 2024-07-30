const Footer = () => {
  return (
    <div className="w-full  py-6 text-gray-50 md:py-20 bg-[#101114]  px-6 text-black ">
      <div className="max-w-[65rem] mx-auto container relative">
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:flex-nowrap">
          <div className="max-w-xs">
            <p className="font-inter text-[18px] text-gray-300 ">
              Goalstreet is one of India's largest student communities that
              provides a one-stop platform for students to learn new skills,
              network with peers, and grow as an individual.
            </p>
            <div className="mt-6 flex items-center gap-4 md:gap-2 md:mt-10 md:gap-7">
              <a
                href="https://www.instagram.com/mygoalstreet"
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
                href="https://www.linkedin.com/company/mygoalstreet/about/"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-3  gap-4"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  font-size="20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@goalstreet1375"
                target="_blank"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-3  gap-4 "
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
                  <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/MyGoalStreet"
                target="_blank"
                role="group"
                className="cursor-pointer flex shrink-0 gap-2 items-center justify-center w-fit rounded-full focus-visble:ring focus-visble:ring-gray-800 focus-visble:ring-opacity-10 ring-gray-800 focus:outline-none transition-all duration-300 select-none disabled:opacity-80 text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-50 hover:bg-gray-800 dark:hover:bg-gray-100 p-4  gap-4"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  font-size="20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
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
                href="/hrForm"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                Hire talent
              </a>
              <a
                href="/findwork"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                Find work
              </a>
              <a
                href="/internships"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                internships
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 mx-auto text-center lg:text-left">
            <p className="font-bold text-gray-300 ">
              © 2024. GOAL STREET. All rights reserved.
            </p>
            <p className="font-bold text-blue-500 underline cursor-pointer">
              Developed by ElevateBox
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
