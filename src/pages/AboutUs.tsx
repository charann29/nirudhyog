const Aboutus = () => {
  return (
    <div className="bg-white w-full">
      <div className="container max-w-[65rem] px-6 pt-36 mx-auto flex flex-col gap-[20px] py-[5rem] lg:flex-row">
        <img
          className="lg:w-[50%] object-cover aspect-square rounded-full"
          src={"https://www.goalstreet.in/assets/AboutUs-CnEoUlNO.jpeg"}
          alt="About Us"
        />
        <div className="bg-[#004AAD] p-[20px] md:p-[32px] lg:p-[64px] rounded-[20px] space-y-[20px] lg:w-fit lg:flex lg:flex-col lg:justify-center">
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-[40px] text-white">
            About Us
          </h1>
          <p className="text-white">
            At Nirudyog, we believe in empowering students to unlock their full potential and embark on successful career journeys. We understand that <span className="text-yellow-500">placement training</span> plays a pivotal role in shaping career paths, and our platform is designed to connect students with valuable training and opportunities that align with their aspirations and academic pursuits.
            <br />
            <br />
            Our mission at Nirudyog is simple yet profound: to bridge the gap between education and professional experience by providing students with <span className="text-yellow-500">meaningful internship opportunities</span>. We strive to facilitate connections between ambitious students and reputable organizations, fostering a mutually beneficial relationship where both parties can learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
