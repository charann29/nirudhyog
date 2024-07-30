import { useState } from "react";
import Minus from "../assets/Minus";
import Plus from "../assets/Plus";
// bg-[#f0fbff]
const FAQ = () => {
  return (
    <div className="bg-[#f0fbff] w-full">
      <section className=" max-w-[65rem] mx-auto  px-6 py-16 px-4 ">
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
    </div>
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
        className={`flex  items-center gap-[5px] w-full cursor-pointer justify-between  bg-[#004AAD] p-5 text-left  outline-none `}
        onClick={clickHandler}
      >
        <p>{faq.QUESTION}</p>
        {click ? <Minus></Minus> : <Plus></Plus>}
      </div>
      {click ? (
        <div className=" p-5 rounded-b-md bg-[#004AAD] text-gray-100 border-t-2 border-[#DEE3EA]/30">
          <p>{faq.ANSWER}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

// const Header = ({ text, borderLength = "100%" }: any) => {
//   return (
//     <div className="w-min  mb-4 ">
//       <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3">
//         {text}
//       </h1>
//       <div
//         className={`h-2 w-[${borderLength}]  rounded-full bg-[#004AAD]`}
//       ></div>
//     </div>
//   );
// };

const FAQS_DATA = [
  {
    QUESTION: "What are the prerequisites to join?",
    ANSWER:
      "The only prerequisites to join the cohort are that you should have a basic knowledge of respective domain, and willingness to learn",
  },
  {
    QUESTION: "Why should I trust you guys?",
    ANSWER:
      "Our cohorts saw 5000+ registrations and a rating of 4.6/5 from cohort members! We have a community of 20,000+ students, freelancers, and entrepreneurs from across the country growing with us. bluelearn is backed by Lightspeed India, Elevation Capital, Titan Capital, and a host of angel investors!",
  },
  {
    QUESTION: "How do I choose between the Foundation and Growth Plan?",
    ANSWER:
      "The Growth Plan is perfect for you if: -You want to upskill in design with hands-on projects -You already know the basics of the domain choosen -You want to build your portfolio and find paid work -You want feedback on your projects from someone experienced You’ll be a great fit for the Foundation Plan if: -You want to learn scratch -You want to upskill in code with hands-on projects -You want to build your portfolio and find your first paid work",
  },
  {
    QUESTION: "How are you guys helping us get internships and gigs?",
    ANSWER:
      "Being one of India's largest remote internships platforms, we get 1,000+ paid internships and freelancing opportunities posted on our platform every single month. These opportunities range across tech, design, marketing, product, and more. As a member of cohort, you’ll get exclusive early access to all opportunities, and a badge to help you stand out from the crowd!",
  },
  {
    QUESTION: "What’s the last date to make the payment?",
    ANSWER:
      "We have limited seats and cohort acceptance happens through a screening process on a first-come first-serve basis. Payments close a week before the cohort starts, or earlier if we fill all the available seats.",
  },
];
