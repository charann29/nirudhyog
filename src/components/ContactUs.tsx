const ContactUs = () => {
  return (
    <div className="bg-[#f0fbff]  w-full  px-6 py-16 ">
      <div
        className="mx-auto flex max-w-[60rem] flex-col   justify-center gap-4 rounded-xl bg-white p-4 md:flex-row md:gap-12 md:p-24"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
      >
        <div className="md:w-[50%]">
          <div className="flex items-center gap-2">
            <p className="text-[19px] text-black md:text-[24px]">
              Join our WhatsApp community
            </p>
          </div>
          <p className=" mt-4 text-[#747474]">
            Join a group of experts who want to know more about latest Creator
            Economy trends and engage with knowledgeable posts.
            <br className="" /> Every alternate day we share an interesting
            insight that will help you in your content creation journey.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-[40%]  ">
          <input
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2  text-[16px] text-black  outline-none"
            placeholder="Phone Number"
            defaultValue=""
          />
          <input
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2 text-[16px]   text-black  outline-none"
            placeholder="Email"
            defaultValue=""
          />
          <button className="mt-2 cursor-pointer rounded-md bg-[#004AAD] p-2 ">
            <div className="flex items-center  justify-center gap-2 text-[16px]">
              {/* */}COUNT ME IN
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
