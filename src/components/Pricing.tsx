const PricePlan = () => {
  return (
    <section className="select-none mt-0  text-white  px-6  bg-[#f0fbff]  ">
      <div className="container relative  max-w-[65rem] mx-auto   py-16">
        <h2 className="text-4xl   xl:text-5xl leading-[1.125] font-bold text-black text-center mb-12">
          Pricing
        </h2>
        <div className="dark mb-6 flex flex-col items-center md:items-start justify-center gap-7 md:mb-14 md:flex-row">
          {Data.map((d, index) => (
            // background-image: linear-gradient( 135deg, #F0FF00 10%, #58CFFB 100%);

            <div
              className={`text-white  ${
                index % 2 === 1
                  ? "!bg-[linear-gradient(142deg,#130C61_0%,#171254_100%)]"
                  : "bg-[#1f2937]"
              } border-gray-100 text-gray-900 dark:border-[#4D3A77] dark:text-white [&_p]:text-gray-500 dark:[&_p]:text-gray-400 flex max-w-[480px] flex-col rounded-3xl border p-4 md:p-6 basis-1/2 `}
            >
              <div className="mb-5 flex items-center justify-between md:mb-7">
                <div className="h-10 w-10 rounded-xl border border-gray-300 bg-gray-900/20 p-2.5 dark:border-0 dark:bg-white/20 md:h-12 md:w-12">
                  <svg
                    viewBox="0 0 33 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.3867 0.415141C17.7779 -0.138381 16.2221 -0.13838 15.6133 0.415142L4.20741 10.784C3.60935 11.3276 4.37609 12 5.59415 12H16.5C15.8132 12 15.1263 12.2191 14.7399 12.6573L0.263246 29.0746C-0.495828 29.9354 0.477339 31 2.02334 31H30.9767C32.5227 31 33.4958 29.9354 32.7368 29.0746L18.2601 12.6573C17.8737 12.2191 17.1868 12 16.5 12H28.4059C29.6239 12 30.3907 11.3276 29.7926 10.784L18.3867 0.415141Z"
                      fill="#F0F0F0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.3867 0.415141C17.7779 -0.138381 16.2221 -0.13838 15.6133 0.415142L4.20741 10.784C3.60935 11.3276 4.37609 12 5.59415 12H16.5C15.8132 12 15.1263 12.2191 14.7399 12.6573L0.263246 29.0746C-0.495828 29.9354 0.477339 31 2.02334 31H30.9767C32.5227 31 33.4958 29.9354 32.7368 29.0746L18.2601 12.6573C17.8737 12.2191 17.1868 12 16.5 12H28.4059C29.6239 12 30.3907 11.3276 29.7926 10.784L18.3867 0.415141Z"
                      fill="url(#paint0_linear_1326_1973)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1326_1973"
                        x1={0}
                        y1={0}
                        x2="26.0195"
                        y2="36.0397"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.416667" stopColor="white" />
                        <stop offset={1} stopColor="white" stopOpacity="0.21" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹{d.price}/-</div>
                  <div className="text-2xs text-gray-500 md:text-xs">
                    <span className="font-medium">{d.priceTag}</span> • Incl.
                    GST
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold md:mb-3 md:text-4xl">
                {d.heading}
              </div>
              <p className="md:mb-9md:text-md mb-7 text-sm">{d.headerTag}</p>
              <div className="mb-7 grow space-y-2.5 md:mb-9 md:space-y-4">
                {d.options.map((item) => (
                  <div className="flex items-center gap-3">
                    <svg
                      className="shrink-0"
                      height={24}
                      width={24}
                      viewBox="0 0 26 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g style={{ mixBlendMode: "plus-lighter" }}>
                        <path
                          d="M12.9336 26.1152C20.1135 26.1152 25.9336 20.2951 25.9336 13.1152C25.9336 5.93533 20.1135 0.115234 12.9336 0.115234C5.75369 0.115234 -0.0664062 5.93533 -0.0664062 13.1152C-0.0664062 20.2951 5.75369 26.1152 12.9336 26.1152Z"
                          className="fill-gray-100/30"
                        />
                      </g>
                      <path
                        className="stroke-white dark:stroke-white"
                        d="M7.05078 13.9558L10.4126 17.3176L18.8171 8.91309"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-sm font-medium md:text-md">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/register"
                type="button"
                className="inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale text-sm md:text-sm px-4 md:px-6 py-2 md:py-2.5 w-fit bg-white text-gray-900 hover:bg-opacity-90"
              >
                Enroll now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePlan;

const Data = [
  {
    price: "2300",
    priceTag: "",
    heading: "Growth",
    headerTag: `Recorded Learning
        Experience`,
    options: [
      {
        text: "Recorded Classes",
        provided: true,
      },
      {
        text: `Live doubt clearing
            Sessions`,
        provided: true,
      },

      {
        text: "Labs & Challenges",
        provided: true,
      },

      {
        text: "Certificate",
        provided: true,
      },
      {
        text: `Placement Support from
            Companies (Online/
            Offline)`,
        provided: true,
      },
      {
        text: "Community Support",
        provided: true,
      }
    ],
  },
  {
    price: "4800",
    priceTag: "",
    heading: "Foundation",
    headerTag: `Comprehensive
      Learning Experience`,
    options: [
      {
        text: "Live Classes",
        provided: true,
      },
      {
        text: "Recorded Classes",
        provided: true,
      },
      {
        text: `Live doubt clearing
          Sessions`,
        provided: true,
      },
      {
        text: `Access to Webinars -
          Recruiters from
          Companies`,
        provided: true,
      },
      {
        text: "Access to Mentors 24/7",
        provided: true,
      },
      {
        text: "Customised Learning path",
        provided: true,
      },
      {
        text: "Labs & Challenges",
        provided: true,
      },

      {
        text: "Certificate",
        provided: true,
      },
      {
        text: `Placement Support from
            Companies (Online/
            Offline)`,
        provided: true,
      },
      {
        text: "Community Support",
        provided: true,
      }
    ],
  },
];
