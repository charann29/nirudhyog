import React, { useState } from "react";

const Courses = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="bg-backgroundColor py-16">
      <div className="flex flex-col justify-center items-center  py-10 px-4 text-center w-[90%] mr-auto ml-auto  lg:w-[85%] xl:w-[70%]  2xl:w-50% ">
        <h2 className="text-4xl  xl:text-5xl leading-[1.125] font-bold text-black">
          If you missed something, access it right here
        </h2>
        {/* <div className="flex overflow-x-auto flex-wrap gap-8 justify-center p-4 mx-auto mt-4 max-w-2xl no-scrollbar">
          <PastEventButton
            text={"Weekly Contest"}
            index={0}
            current={current}
            setCurrent={setCurrent}
          ></PastEventButton>
          <PastEventButton
            text={"Workshops"}
            index={1}
            current={current}
            setCurrent={setCurrent}
          ></PastEventButton>
          <PastEventButton
            text={"Doubt Resolution Sessions"}
            index={2}
            current={current}
            setCurrent={setCurrent}
          ></PastEventButton>
        </div> */}

        <div className="flex flex-wrap gap-6 justify-center mt-12">
          {PAST_WEEKLY_CONTEST.map((data, index) => (
            <MissedEventCard key={index} data={data}></MissedEventCard>
          ))}
        </div>

        <button
          className="cursor-pointer text-black flex shrink-0 justify-center items-center gap-2 font-semibold transition-all duration-300 rounded-full focus-visble:ring focus-visble:ring-red-800 focus-visble:ring-opacity-10 ring-red-800 focus:outline-none select-none disabled:cursor-not-allowed disabled:opacity-80   bg-[#004AAD]  lg:px-8 px-7 lg:py-4 py-3 lg:text-lg text-md w-full lg:w-auto  text-white mt-12"
          type="button"
        >
          Access All Courses
        </button>
      </div>
    </section>
  );
};

export default Courses;

const PastEventButton = ({
  text,
  index,
  current,
  setCurrent,
  color = false,
}: any) => {
  const clickHandler = () => {
    setCurrent(index);
  };

  return (
    <button
      className={` ${
        current === index
          ? "outline-none px-4 py-2 min-w-max transition-all rounded-full bg-[#004AAD] text-current"
          : "outline-none px-4 py-2 min-w-max transition-all border-2 border-current rounded-full hover:scale-95 text-black hover:bg-[#004AAD] hover:text-white   focus:text-[#004AAD] "
      } ${color === true ? "text-gray-800 border-gray-800" : ""}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

const MissedEventCard = ({ data }: any) => {
  return (
    <figure className="w-[350px]  rounded overflow-hidden text-left shadow-sm transition-shadow">
      <img
        src={data.image}
        className="object-cover brightness-90 h-[200px] aspect-video"
        alt="How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers"
      ></img>
      <figcaption className="lg:flex lg:flex-col lg:justify-between  px-4 py-3 text-lg font-medium bg-[#1e1e1e]">
        {/* {data.name} */}
        <button className="px-4 py-2 rounded-full mt-4 w-full text-blue-600 rounded border-2 border-current transition-all outline-none hover:text-blue-800 hover:bg-blue-600/10 focus:text-blue-800 focus:bg-blue-800/10">
          {data.buttonText}
        </button>
      </figcaption>
    </figure>
  );
};

const PAST_WEEKLY_CONTEST = [
  {
    name: "How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers ",
    image: "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
    buttonText: "Try Now",
  },
  {
    name: "How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers ",
    image: "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
    buttonText: "Try Now",
  },
  {
    name: "How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers ",
    image: "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
    buttonText: "Try Now",
  },
  {
    name: "How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers ",
    image: "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
    buttonText: "Try Now",
  },
  {
    name: "How does blockchain work? | Blockchain systems rely on a peer-to-peer network of computers ",
    image: "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
    buttonText: "Try Now",
  },
];
