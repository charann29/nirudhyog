import { useState } from "react";
import Minus from "../assets/Minus";
import Plus from "../assets/Plus";

const FAQ = () => {
  return (
    <section className="bg-white max-w-[65rem] mx-auto py-24 ">
      <div className="onBoardSection 2xl:w-50% !block">
        <h2 className="text-4xl  xl:text-5xl leading-[1.125] font-bold text-black text-center mb-12">
          FAQS
        </h2>

        <div className="grid-cols-1 grid gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="space-y-6   w-full">
            {FAQS_DATA.map((faq, index) =>
              index % 2 === 0 ? <FAQPoint faq={faq}></FAQPoint> : <></>
            )}
          </div>
          <div className="space-y-6">
            {FAQS_DATA.map((faq, index) =>
              index % 2 === 1 ? <FAQPoint faq={faq}></FAQPoint> : <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const FAQPoint = ({ faq }: any) => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((p) => !p);
  };
  return (
    <div className="overflow-hidden rounded-lg border-2 border-[#DEE3EA]/30  ">
      <div
        className={`flex  items-center gap-[5px] w-full cursor-pointer justify-between  bg-gray-900 p-5 text-left  outline-none `}
        onClick={clickHandler}
      >
        <p>{faq.QUESTION}</p>
        {click ? <Minus></Minus> : <Plus></Plus>}
      </div>
      {click ? (
        <div className=" p-5 rounded-b-md bg-gray-900 text-gray-100 border-t-2 border-[#DEE3EA]/30">
          <p>{faq.ANSWER}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Header = ({ text, borderLength = "100%" }: any) => {
  return (
    <div className="w-min  mb-4 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3">
        {text}
      </h1>
      <div
        className={`h-2 w-[${borderLength}]  rounded-full bg-[#004AAD]`}
      ></div>
    </div>
  );
};

const FAQS_DATA = [
  {
    QUESTION: "How do I stay up to date on the latest updates sddsd?",
    ANSWER:
      "Please subscribe to our neewsletter to saty up to date on the latest updates  saty up to date on the latest updates",
  },
  {
    QUESTION: "How do I stay up to date on the latest updates?",
    ANSWER:
      "Please subscribe to our neewsletter to saty up to date on the latest updates",
  },
  {
    QUESTION: "How do I stay up to date on the latest updates?",
    ANSWER:
      "Please subscribe to our neewsletter to saty up to date on the latest updates",
  },
  {
    QUESTION: "How do I stay up to date on the latest updates?",
    ANSWER:
      "Please subscribe to our neewsletter to saty up to date on the latest updates",
  },
  {
    QUESTION: "How do I stay up to date on the latest updates?",
    ANSWER:
      "Please subscribe to our neewsletter to saty up to date on the latest updates",
  },
];
