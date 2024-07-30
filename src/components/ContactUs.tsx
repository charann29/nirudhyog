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
              Connect with us for any questions
            </p>
          </div>
          <p className=" mt-4 text-[#747474]">
            For technical questions, please post your questions on our forum
            where you can get help from fellow students.
            <br className="" /> For course suggestions and career advice, check
            out our learning paths.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-[40%]  ">
          <input
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2 text-[16px]   text-black  outline-none"
            placeholder="Email"
            defaultValue=""
          />
          <textarea
            className="w-full rounded-md border-[#CCCCCC] bg-[#EBEBEB] p-2  text-[16px] text-black  outline-none"
            placeholder="Message"
            defaultValue=""
          />
          <button className="mt-2 cursor-pointer rounded-md bg-[#004AAD] p-2 ">
            <div className="flex items-center  justify-center gap-2 text-[16px]">
              {/* */}Send
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
