import { useState } from "react";
import Minus from "../assets/Minus";
import Plus from "../assets/Plus";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f0fbff] w-full">
      <section className="max-w-[65rem] mx-auto px-6 py-16 px-4">
        <div className="onBoardSection 2xl:w-50% !block">
          <h2 className="text-4xl xl:text-5xl leading-[1.125] font-bold text-black text-center mb-12">
            FAQS
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
            <div className="space-y-6 w-full">
              {FAQS_DATA.map((faq, index) =>
                index % 2 === 0 ? (
                  <FAQPoint
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                  />
                ) : null
              )}
            </div>
            <div className="space-y-6">
              {FAQS_DATA.map((faq, index) =>
                index % 2 === 1 ? (
                  <FAQPoint
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQPoint = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-[#DEE3EA]/30">
      <div
        className={`flex items-center gap-[5px] w-full cursor-pointer justify-between bg-[#004AAD] p-5 text-left outline-none`}
        onClick={onClick}
      >
        <p className="text-white">{faq.QUESTION}</p>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      {isOpen && (
        <div className="p-5 rounded-b-md bg-[#004AAD] text-gray-100 border-t-2 border-[#DEE3EA]/30">
          <div dangerouslySetInnerHTML={{ __html: faq.ANSWER }} />
        </div>
      )}
    </div>
  );
};

const FAQS_DATA = [
  {
    QUESTION: "What are the prerequisites to join?",
    ANSWER:
      "The only prerequisites to join the cohort are that you should have a basic knowledge of the respective domain and a willingness to learn.",
  },
  {
    QUESTION: "Why should I trust you guys?",
    ANSWER:
      `Our cohorts have seen over <span class="text-yellow-500">5000 registrations</span> with a rating of <span class="text-yellow-500">4.6/5</span> from members!<br/><br/>
       We have a community of 20,000+ students, freelancers, and entrepreneurs growing with us.<br/><br/>
       We've made <span class="text-yellow-500">3 SaaS platforms</span> from the ground up since we started.`,
  },
  {
    QUESTION: "How do I choose between the Foundation and Growth Plan?",
    ANSWER:
      `The <span class="text-yellow-500">Growth Plan</span> is ideal for you if you want to advance your skills in design through hands-on projects, already have a basic understanding of the domain you’ve chosen, aim to build a strong portfolio and secure paid work opportunities, and seek constructive feedback on your projects from experienced professionals.<br/><br/>
       The <span class="text-yellow-500">Foundation Plan</span> is best for you if you are starting from scratch and want to build foundational knowledge, aim to enhance your coding skills with practical, hands-on projects, and want to develop your portfolio and land your first paid work opportunities.`,
  },
  {
    QUESTION: "How are you guys helping us get internships and gigs?",
    ANSWER:
      `As one of India’s largest remote internship platforms, we post over  <span class="text-yellow-500"> 1,000 paid internships </span> and <span class="text-yellow-500">freelancing opportunities</span> each month.<br/><br/>
       These opportunities span across  <span class="text-yellow-500">tech, design, marketing, product</span>, and more.<br/><br/>
       As a member of the cohort, you’ll get exclusive early access to all opportunities, along with a badge to help you stand out.`,
  },
  {
    QUESTION: "What’s the last date to make the payment?",
    ANSWER:
      "We have limited seats, and cohort acceptance occurs on a first-come, first-serve basis. Payments close a week before the cohort starts or earlier if all seats are filled.",
  },
];

export default FAQ;
