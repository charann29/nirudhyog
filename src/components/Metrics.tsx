const Metrics = () => {
  return (
    <section className="relative z-0 mx-auto  bg-[#004AAD] px-6  py-16">
      <h2 className="text-2xl  xl:text-4xl leading-[1.125] font-bold text-white text-center mb-12">
        Achieve your need with our Services
      </h2>
      <div className="mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl items-center justify-center gap-2 lg:gap-8 ">
        <a
          target="_blank"
          href="https://www.whatsapp.com/catalog/918121398942/"
          className="COUNT cursor-pointer hover:bg-purple-800 w-full flex lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-purple-500 px-4 py-8 text-center h-72 md:px-6 md:py-10"
        >
          <h2 className="text-4xl text-white font-semibold">
            100% ATS Upgrade
          </h2>
          <p className="text-white">
            {" "}
            Unlock Your Career Potential with ATS-Free Resumes
          </p>
        </a>
        <a
          target="_blank"
          href="https://www.whatsapp.com/catalog/918121398942/"
          className="COUNT cursor-pointer hover:bg-green-800 flex w-full lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-green-500 px-4 py-8 text-center h-72 md:px-6 md:py-10"
        >
          <h2 className="text-4xl text-white font-semibold">
            Portfolio Creation
          </h2>
          <p className="text-white">
            Showcase Your Skills with Professional Creation
          </p>
        </a>
        <a
          target="_blank"
          href="https://www.whatsapp.com/catalog/918121398942/"
          className="COUNT cursor-pointer hover:bg-yellow-600 flex w-full lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-yellow-500 px-4 py-8 text-center h-72 md:px-6 md:py-10"
        >
          <h2 className="text-4xl text-white font-semibold">
            Linkedin Optimization
          </h2>
          <p className="text-white">
            Maximize Your Professional Presence with Optimization
          </p>
        </a>
        <a
          target="_blank"
          href="https://elevatebox.in"
          className="COUNT cursor-pointer hover:bg-red-800 flex w-full lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-red-500 px-4 py-8 text-center h-72 md:px-6 md:py-10"
        >
          <h2 className="text-4xl text-white font-semibold">Development</h2>
          <p className="text-white">Turn your thoughts in to business</p>
        </a>
      </div>
    </section>
  );
};

export default Metrics;

// const Metrics = () => {
//   return (
//     <section className="relative z-0 mx-auto  bg-[#004AAD] px-6  py-16">
//       <h2 className="text-2xl  xl:text-4xl leading-[1.125] font-bold text-white text-center mb-12">
//         Achieve your need with our Services
//       </h2>
//       <div className="mx-auto  flex max-w-6xl flex-wrap items-center justify-center gap-6 lg:gap-[72px]">
//         <div className="COUNT w-full flex lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-purple-200 px-4 py-8 text-center md:px-6 md:py-10">
//           <svg
//             width={80}
//             height={81}
//             fill="none"
//             className="hidden lg:block"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g clipPath="url(#members_svg__a)" fill="#121212">
//               <path d="M45 56.574h2.5v23.75H45v-23.75ZM32.5 56.574H35v23.75h-2.5v-23.75Z" />
//               <path d="M47.5 61.574h-1.25v-2.5h1.25a3.75 3.75 0 0 0 3.75-3.75v-13.75a6.257 6.257 0 0 0-6.25-6.25H35a6.257 6.257 0 0 0-6.25 6.25v13.75a3.75 3.75 0 0 0 3.75 3.75h1.25v2.5H32.5a6.257 6.257 0 0 1-6.25-6.25v-13.75a8.76 8.76 0 0 1 8.75-8.75h10a8.76 8.76 0 0 1 8.75 8.75v13.75a6.257 6.257 0 0 1-6.25 6.25Z" />
//               <path d="M40 35.324a8.75 8.75 0 1 1 8.75-8.75 8.76 8.76 0 0 1-8.75 8.75Zm0-15a6.25 6.25 0 1 0 6.25 6.25 6.257 6.257 0 0 0-6.25-6.25ZM38.75 64.074h2.5v16.25h-2.5v-16.25ZM67.5 52.824H70v23.75h-2.5v-23.75ZM55 52.824h2.5v23.75H55v-23.75Z" />
//               <path d="M70 57.824h-1.25v-2.5H70a3.75 3.75 0 0 0 3.75-3.75v-13.75a6.257 6.257 0 0 0-6.25-6.25h-10a6.257 6.257 0 0 0-4.659 2.084l-1.863-1.668a8.762 8.762 0 0 1 6.522-2.916h10a8.76 8.76 0 0 1 8.75 8.75v13.75a6.257 6.257 0 0 1-6.25 6.25Z" />
//               <path d="M62.5 31.574a8.75 8.75 0 1 1 8.75-8.75 8.76 8.76 0 0 1-8.75 8.75Zm0-15a6.25 6.25 0 1 0 6.25 6.25 6.257 6.257 0 0 0-6.25-6.25ZM61.25 60.324h2.5v16.25h-2.5v-16.25ZM22.5 52.824H25v23.75h-2.5v-23.75ZM10 52.824h2.5v23.75H10v-23.75Z" />
//               <path d="M11.25 57.824H10a6.258 6.258 0 0 1-6.25-6.25v-13.75a8.76 8.76 0 0 1 8.75-8.75h10a8.766 8.766 0 0 1 6.521 2.916l-1.862 1.668a6.256 6.256 0 0 0-4.659-2.084h-10a6.257 6.257 0 0 0-6.25 6.25v13.75a3.75 3.75 0 0 0 3.75 3.75h1.25v2.5Z" />
//               <path d="M17.5 31.574a8.75 8.75 0 1 1 8.75-8.75 8.76 8.76 0 0 1-8.75 8.75Zm0-15a6.25 6.25 0 1 0 6.25 6.25 6.257 6.257 0 0 0-6.25-6.25Z" />
//               <path d="M30 17.824a8.75 8.75 0 1 1 8.75-8.75 8.76 8.76 0 0 1-8.75 8.75Zm0-15a6.25 6.25 0 1 0 6.25 6.25A6.257 6.257 0 0 0 30 2.824ZM50 17.824a8.75 8.75 0 1 1 8.75-8.75 8.76 8.76 0 0 1-8.75 8.75Zm0-15a6.25 6.25 0 1 0 6.25 6.25A6.257 6.257 0 0 0 50 2.824ZM16.25 60.324h2.5v16.25h-2.5v-16.25Z" />
//             </g>
//             <defs>
//               <clipPath id="members_svg__a">
//                 <path
//                   fill="#fff"
//                   transform="translate(0 .324)"
//                   d="M0 0h80v80H0z"
//                 />
//               </clipPath>
//             </defs>
//           </svg>
//           <h2 className="text-4xl text-white font-semibold">100%</h2>
//           <p className="text-white"> ATS Upgrade(profile builfing)</p>
//         </div>
//         <div className="COUNT flex w-full lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-green-300 px-4 py-8 text-center md:px-6 md:py-10">
//           <svg
//             width={80}
//             height={81}
//             className="hidden lg:block"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M78.667 71.36V40.325a1.304 1.304 0 0 0-.154-.591h.014l-3.264-6.527a3.978 3.978 0 0 0-3.578-2.216h-9.018v-1.333c0-.354-.14-.693-.391-.943l-7.219-7.218a3.946 3.946 0 0 0-1.724-1v-8.992L56 10.788v3.239a4.087 4.087 0 0 0 1.823 3.406 1.334 1.334 0 1 0 1.48-2.219 1.424 1.424 0 0 1-.636-1.188V9.954a2.667 2.667 0 0 0-.64-4.884L40.685.414a2.654 2.654 0 0 0-1.37 0L21.973 5.07a2.681 2.681 0 0 0 0 5.173l4.694 1.26v8.82h-.084a3.99 3.99 0 0 0-3.067 1.44l-5.867 7.04c-.202.24-.314.541-.316.854v1.333H8.315a3.977 3.977 0 0 0-3.578 2.21l-3.264 6.527h.014c-.098.184-.15.389-.154.597V71.36A2.657 2.657 0 0 0 0 73.657v2.667a2.667 2.667 0 0 0 2.667 2.666H20.37a2.657 2.657 0 0 0 2.296 1.334h34.666a2.657 2.657 0 0 0 2.296-1.334h17.704A2.667 2.667 0 0 0 80 76.324v-2.667a2.657 2.657 0 0 0-1.333-2.296Zm-20-.37h-1.334V41.657H76V70.99H58.667ZM44 70.99h-8V56.324h8V70.99Zm1.333-17.333H34.667c-.737 0-1.334.597-1.334 1.333v16h-8V41.657h29.334V70.99h-8v-16c0-.736-.597-1.333-1.334-1.333ZM60 30.99v2.667H20V30.99h40Zm-2.667 5.334v2.666H22.667v-2.666h34.666Zm14.352-2.667c.506-.002.968.284 1.192.737l2.299 4.596H60v-2.666a2.667 2.667 0 0 0 2.667-2.667h9.018ZM40 2.99l17.352 4.667h-.017l-17.328 4.666-17.34-4.677L40 2.99Zm-10.667 9.23 9.982 2.68c.449.12.921.12 1.37 0l9.982-2.68v8.103H29.333V12.22ZM25.56 23.47c.253-.304.628-.48 1.024-.48h25.645c.354 0 .694.14.944.39l4.943 4.944H21.513l4.046-4.854ZM7.123 34.394a1.325 1.325 0 0 1 1.192-.737h9.018A2.667 2.667 0 0 0 20 36.324v2.666H4.824l2.299-4.596ZM2.667 73.657H20v2.667H2.667v-2.667Zm18.666-2.667H4V41.657h18.667V70.99h-1.334Zm1.334 6.667v-4h34.666v4H22.667Zm54.666-1.333H60v-2.667h17.333v2.667Z"
//               fill="#121212"
//             />
//             <path
//               d="M36 44.324c-.737 0-1.334.597-1.334 1.334v2.666a1.333 1.333 0 0 0 2.667 0v-2.666c0-.737-.597-1.334-1.334-1.334ZM17.333 45.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 1 0 2.667 0V46.99c0-.737-.597-1.334-1.334-1.334ZM9.333 45.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 1 0 2.667 0V46.99c0-.737-.597-1.334-1.334-1.334ZM17.333 53.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V54.99c0-.737-.597-1.334-1.334-1.334ZM9.333 53.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V54.99c0-.737-.597-1.334-1.334-1.334ZM17.333 61.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V62.99c0-.737-.597-1.334-1.334-1.334ZM9.333 61.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V62.99c0-.737-.597-1.334-1.334-1.334ZM70.667 45.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 1 0 2.667 0V46.99c0-.737-.597-1.334-1.334-1.334ZM62.667 45.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 1 0 2.667 0V46.99c0-.737-.597-1.334-1.334-1.334ZM70.667 53.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V54.99c0-.737-.597-1.334-1.334-1.334ZM62.667 53.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V54.99c0-.737-.597-1.334-1.334-1.334ZM70.667 61.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V62.99c0-.737-.597-1.334-1.334-1.334ZM62.667 61.656c-.736 0-1.333.597-1.333 1.334v2.666a1.333 1.333 0 0 0 2.667 0V62.99c0-.737-.597-1.334-1.334-1.334ZM44 44.324c-.737 0-1.334.597-1.334 1.334v2.666a1.333 1.333 0 0 0 2.667 0v-2.666c0-.737-.597-1.334-1.334-1.334Z"
//               fill="#121212"
//             />
//           </svg>
//           <h2 className="text-4xl text-white font-semibold">5,500+</h2>
//           <p className="text-white">Schools and colleges across India</p>
//         </div>
//         <div className="COUNT flex w-full lg:h-68 lg:w-68 flex-col items-center justify-center rounded-3xl bg-yellow-300 px-4 py-8 text-center md:px-6 md:py-10">
//           <svg
//             width={78}
//             height={81}
//             fill="none"
//             className="hidden lg:block"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M70.72 9.002A7.13 7.13 0 0 0 70.227 9H64.06V3.698c0-2.12-2.024-3.374-4.145-3.374H54.23c-2.12 0-3.663 1.253-3.663 3.374v5.3H27.433v-5.3c0-2.12-1.542-3.374-3.662-3.374h-5.687c-2.12 0-4.145 1.253-4.145 3.374v5.3H7.771a7.133 7.133 0 0 0-7.326 7.423v55.71c0 4.241 3.085 8.193 7.326 8.193h62.458c4.24 0 7.325-3.952 7.325-8.193v-55.71a7.132 7.132 0 0 0-6.835-7.419ZM54.228 4.18h5.976v10.602h-5.976V4.18Zm-36.145 0h5.494v10.602h-5.494V4.18ZM73.698 72.13c0 2.12-1.349 4.338-3.47 4.338H7.772c-2.12 0-3.47-2.217-3.47-4.338V31.168h69.397V72.13Zm0-55.71v10.891H4.301V16.421a3.277 3.277 0 0 1 3.47-3.567h6.168v2.12c0 2.122 2.024 3.664 4.145 3.664h5.687a3.566 3.566 0 0 0 3.662-3.663v-2.12h23.133v2.12a3.566 3.566 0 0 0 3.663 3.662h5.686c2.12 0 4.145-1.542 4.145-3.662v-2.12h6.169a3.277 3.277 0 0 1 3.47 3.566Z"
//               fill="#121212"
//             />
//             <path
//               d="m28.301 57.481-1.735 9.639a1.929 1.929 0 0 0 2.796 2.024l8.674-4.53 8.675 4.53.867.192a1.83 1.83 0 0 0 1.157-.385c.576-.42.872-1.125.771-1.831l-1.735-9.639 7.036-6.747a2.12 2.12 0 0 0 .482-2.024 2.024 2.024 0 0 0-1.542-1.253l-9.639-1.446-4.337-8.77a1.927 1.927 0 0 0-3.47 0l-4.337 8.77-9.639 1.446a2.024 2.024 0 0 0-1.542 1.253 2.12 2.12 0 0 0 .482 2.024l7.036 6.747Zm5.302-7.807a1.734 1.734 0 0 0 1.349-1.06l3.084-6.169 3.084 6.169c.232.567.745.97 1.35 1.06l6.843.964-4.916 4.723a2.025 2.025 0 0 0-.578 1.735l1.157 6.843-6.072-3.277-.868-.193-.867.193-6.073 3.277 1.157-6.843a2.024 2.024 0 0 0-.579-1.735l-4.915-4.723 6.844-.964Z"
//               fill="#121212"
//             />
//           </svg>
//           <h2 className="text-4xl text-white font-semibold">15 Days</h2>
//           <p className="text-white">start earning confidence within</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Metrics;
