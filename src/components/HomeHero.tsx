const HomeHero = () => {
  return (
    <div className="bg-[#101114]  w-screen h-screen text-white flex justify-center items-center md:pt-36">
      
      <div className="px-4 max-w-[70rem] flex flex-col mx-auto  gap-12 ">
        <div className="">
          <div className="max-w-6xl text-center  mx-auto text-2xl font-semibold leading-relaxed md:text-4xl lg:text-5xl">
            <h1 id="Headline" style={{ transformStyle: "preserve-3d" }}>
              The largest community of tomorrow’s
            </h1>
            <h1 id="Headline" style={{ transformStyle: "preserve-3d" }}>
              builders with 200,000+ members{/* */}{" "}
            </h1>
          </div>
          <p className="max-w-4xl text-center mt-2  mx-auto text-gray-400 text-sm lg:text-2xl">
            A place where you can learn, find work opportunities, and meet
            passionate people to grow with.
          </p>
          <button
            className="mt-4 mx-auto cursor-pointer text-white hover:text-black flex shrink-0 justify-center items-center gap-2 font-semibold transition-all duration-300 rounded-full focus-visble:ring focus-visble:ring-red-800 focus-visble:ring-opacity-10 ring-red-800 focus:outline-none select-none disabled:cursor-not-allowed disabled:opacity-80   bg-[#004AAD] hover:bg-white  lg:px-8 px-7 lg:py-4 py-3 lg:text-lg text-md w-full lg:w-auto "
            type="button"
          >
            Find Work
          </button>
        </div>
        <div className="sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto ">
          <img
            className="object-cover mx-auto  rounded-[30px]"
            src="https://www.goalstreet.in/assets/HeroPicTwo-DFduE_yA.avif"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
