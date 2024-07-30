const HomeHero = () => {
  return (
    <div className="bg-[#101114] w-screen h-screen text-white flex justify-center items-center">
      <div className="space-y-8 px-4">
        <div className="max-w-6xl text-center mx-auto text-2xl font-semibold leading-relaxed md:text-4xl lg:text-6xl">
          <h1 id="Headline" style={{ transformStyle: "preserve-3d" }}>
            The largest community of tomorrow’s
          </h1>
          <h1 id="Headline" style={{ transformStyle: "preserve-3d" }}>
            builders with 200,000+ members{/* */}{" "}
          </h1>
        </div>
        <p className="max-w-4xl text-center mx-auto text-sm lg:text-2xl">
          A place where you can learn, find work opportunities, and meet
          passionate people to grow with.
        </p>
        <div className="flex max-w-6xl mx-auto justify-center  flex-col items-center gap-4 lg:flex-row lg:gap-6">
          <button
            className="cursor-pointer text-black flex shrink-0 justify-center items-center gap-2 font-semibold transition-all duration-300 rounded-full focus-visble:ring focus-visble:ring-red-800 focus-visble:ring-opacity-10 ring-red-800 focus:outline-none select-none disabled:cursor-not-allowed disabled:opacity-80   hover:bg-[#004AAD]  lg:px-8 px-7 lg:py-4 py-3 lg:text-lg text-md w-full lg:w-auto bg-white hover:text-white"
            type="button"
          >
            Download on Google Play
          </button>
          <button
            className="cursor-pointer text-black flex shrink-0 justify-center items-center gap-2 font-semibold transition-all duration-300 rounded-full focus-visble:ring focus-visble:ring-red-800 focus-visble:ring-opacity-10 ring-red-800 focus:outline-none select-none disabled:cursor-not-allowed disabled:opacity-80   hover:bg-[#004AAD] lg:px-8 px-7 lg:py-4 py-3 lg:text-lg text-md w-full lg:w-auto bg-white hover:text-white"
            type="button"
          >
            Download on App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
