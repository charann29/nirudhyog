import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const FindWorkPage = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsCollection = collection(db, "jobs");
        const snapshot = await getDocs(jobsCollection);
        const jobsData = snapshot.docs.map((doc) => doc.data());
        setData(jobsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item: any) => {
    // You can adjust this condition to match your search criteria
    return (
      item.jobName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jobDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salaryRange.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.officeType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jobType.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div className=" py-2 md:py-[50px] pt-24 px-6 lg:pt-36">
      <div className="container max-w-[70rem] mx-auto min-h-[60vh]">
        <div className=" md:px-6">
          <div className="sticky top-10 z-10">
            <div className="py-6">
              <h2 className="mb-4 text-md text-black font-medium">
                Explore gigs
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center bg-white gap-2 transition duration-300 rounded-lg border border-gray-100 bg-transparent px-3 dark:border-gray-600">
                  <div className="p-2 text-lg text-gray-500">
                    <svg
                      stroke="black"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <line x1={21} y1={21} x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <input
                    className="flex h-10 text-black w-full bg-transparent py-3 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search role, skills, company name, etc."
                    defaultValue=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {filteredData.length === 0 && (
            <div className="w-full flex justify-center items-center ">
              <div role="status mx-auto">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-[#fc921b] animate-spin  fill-gray-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <div className="flex min-w-0 items-start gap-6">
            <div className="grid  shrink-0 gap-4 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {filteredData?.map((d: any) => (
                <div
                  className="flex min-h-[192px] min-w-[100%] cursor-pointer flex-col rounded-lg border p-6 border-gray-100 bg-white shadow-md"
                  id="work_12982"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <p className="text-xs    text-gray-500">
                      posted on : {d.postedDate.slice(0, 10)}
                    </p>
                  </div>
                  <div className="flex grow gap-2">
                    <div className="grow space-y-1">
                      <p className="font-semibold line-clamp-2 text-black">
                        {d.domain.toUpperCase()}
                      </p>
                      <p className="text-xs text-gray-500">{d.companyName}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-col md:flex-row my-2">
                    <div className="cursor-pointer inline-flex items-center rounded-full fit-content px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-green-200 bg-green-50 text-gray-800 w-fit">
                      <svg
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.94287H3.5C3.36739 4.94287 3.24021 4.89019 3.14645 4.79642C3.05268 4.70266 3 4.57548 3 4.44287C3 4.31026 3.05268 4.18309 3.14645 4.08932C3.24021 3.99555 3.36739 3.94287 3.5 3.94287H12C12.1326 3.94287 12.2598 3.89019 12.3536 3.79642C12.4473 3.70266 12.5 3.57548 12.5 3.44287C12.5 3.31026 12.4473 3.18309 12.3536 3.08932C12.2598 2.99555 12.1326 2.94287 12 2.94287H3.5C3.10218 2.94287 2.72064 3.10091 2.43934 3.38221C2.15804 3.66352 2 4.04505 2 4.44287V12.4429C2 12.8407 2.15804 13.2222 2.43934 13.5035C2.72064 13.7848 3.10218 13.9429 3.5 13.9429H13.5C13.7652 13.9429 14.0196 13.8375 14.2071 13.65C14.3946 13.4624 14.5 13.2081 14.5 12.9429V5.94287C14.5 5.67765 14.3946 5.4233 14.2071 5.23576C14.0196 5.04823 13.7652 4.94287 13.5 4.94287ZM11.25 9.94287C11.1017 9.94287 10.9567 9.89888 10.8333 9.81647C10.71 9.73406 10.6139 9.61693 10.5571 9.47988C10.5003 9.34284 10.4855 9.19204 10.5144 9.04655C10.5434 8.90107 10.6148 8.76743 10.7197 8.66254C10.8246 8.55765 10.9582 8.48622 11.1037 8.45728C11.2492 8.42834 11.4 8.4432 11.537 8.49996C11.6741 8.55673 11.7912 8.65286 11.8736 8.77619C11.956 8.89953 12 9.04454 12 9.19287C12 9.39178 11.921 9.58255 11.7803 9.7232C11.6397 9.86385 11.4489 9.94287 11.25 9.94287Z"
                          fill="#42BE42"
                        />
                      </svg>
                      ₹{d.salaryRange}/month
                    </div>

                    <div className="flex gap-[2px]">
                      <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-white text-gray-800">
                        {d.officeType.toLowerCase()}
                      </div>
                      <div className="cursor-pointer inline-flex gap-0.5 items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 truncate border border-gray-100 bg-white text-gray-800">
                        {d.jobType.toLowerCase()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default FindWorkPage;
