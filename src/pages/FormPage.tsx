import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, saetCollege] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [rate, setRate] = useState("0");
  const [cgpa, setcgpa] = useState(7.8);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState(
    "Some Error Occured.. Please Try Again.. Later"
  );
  const [error, setError] = useState(false);

  const onSubmitHandler = async () => {
    console.log(
      name,
      "-",
      phoneNumber,
      "-",
      college,
      "-",
      email,
      "-",
      domain,
      "-",
      rate,
      "-",
      cgpa
    );
    if (
      !name ||
      !phoneNumber ||
      !college ||
      !email ||
      !domain ||
      !rate ||
      !cgpa
    ) {
      setModalText("Please Enter all the fields Required!");
      setShowModal(true);
      setError(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      setModalText("Please Enter a valid email !");
      setShowModal(true);
      setError(true);
      return;
    }
    const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (phoneRegex.test(phoneNumber) === false) {
      setModalText("Please Enter a valid phone number !");
      setShowModal(true);
      setError(true);
      return;
    }

    try {
      const docData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        college: college,
        domain: domain,
        rate: rate,
        passOut: cgpa,
      };

      // Add a new document to Firestore
      const docRef = await addDoc(collection(db, "FormJoins"), docData);

      console.log("Document written with ID: ", docRef.id);
      setModalText("Successfully Registered!");
      setShowModal(true);
      setError(false);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setcgpa(0);
      setRate("");
      saetCollege("");
      setDomain("");
    } catch (err) {
      console.error("Error adding document: ", err);
      setModalText("Error submitting data. Please try again.");
      setShowModal(true);
      setError(true);
    }
  };
  return (
    <div className="font-outfit pt-28   ">
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          modalText={modalText}
          error={error}
        ></Modal>
      ) : null}
      <main>
        <div className="min-h-[80vh] px-0  flex justify-center sm:py-12 ">
          <div className="relative py-3 w-screen sm:w-[100%]  md:w-[600px]  lg:w-[50%] xl:w-[40%] 2xl:w-[35%]">
            <div className="relative bg-blue-500   px-4 md:px-8 py-10 bg-white mx-4 md:mx-8 md:mx-0  shadow rounded-3xl sm:p-10">
              <div className="text-base leading-6 space-y-4  text-gray-700 md:text-lg sm:leading-7">
                <div className="flex items-center space-x-5 ">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    i
                  </div>
                  <div className="block pl-2  text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed font-semibold text-black">
                      Register
                    </h2>
                    <p className="text-gray-400 text-sm">
                      please fill all the fileds
                    </p>
                  </div>
                </div>
                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="name-label"
                    className="mb-2 text-black text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    Full Name
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="name"
                    id="name"
                    placeholder="Sai Charan"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={25}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
                </div>
                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="phone-label"
                    className="mb-2 text-black text-sm transition-colors group-focus-within:text-blue-700 font-outfit astro-QYQQ6LVS"
                  >
                    Mobile
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="phoneNumber"
                    id="phone"
                    maxLength={10}
                    placeholder={"9878787123"}
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-red-600 font-outfit astro-QYQQ6LVS" />
                </div>
                <div className="flex flex-col group font-outfit astro-QYQQ6LVS">
                  <label
                    id="email-label"
                    className="mb-2 text-black font-outfit text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS"
                  >
                    Email
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="email"
                    id="email"
                    placeholder="20311A05M7@sreenidhi.edu.in"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-red-600  font-outfit astro-QYQQ6LVS" />
                </div>

                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="otherCollegeName-label"
                    className="mb-2 text-black text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    College Name
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="college"
                    id="college"
                    placeholder="NIT Trichy"
                    type="text"
                    required
                    value={college}
                    onChange={(e) => saetCollege(e.target.value)}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS" />
                </div>

                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="passOutYear-label"
                    className="mb-2 text-black text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    CGPA
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="passOut"
                    id="passOutYear"
                    placeholder={"2024"}
                    type="number"
                    required
                    value={cgpa}
                    onChange={(e: any) => setcgpa(e.target.value)}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
                </div>
                <div className="flex gap-4 ">
                  <div className="flex flex-col gap-2 group w-[50%]">
                    <label className="text-sm text-black transition-colors group-focus-within:text-blue-700">
                      Please Select a Language ?
                    </label>
                    <select
                      value={domain}
                      name="domain"
                      id="softSkills"
                      onChange={(e) => {
                        console.log("changed ", e.target.value);
                        setDomain(e.target.value);
                      }}
                      className="px-4 py-2 border text-black focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none "
                    >
                      {" "}
                      <option>select an option</option>
                      {["java", "c++"].map((d: any) => (
                        <option className="text-black" value={d}>
                          <p className="text-black">{d}</p>
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 group w-[50%]">
                    <label
                      className="text-sm text-black transition-colors group-focus-within:text-blue-700"
                      htmlFor="softSkills"
                    >
                      Rate in selected language?
                    </label>
                    <select
                      value={rate}
                      onChange={(e) => {
                        setRate(e.target.value);
                      }}
                      name="secondDomain"
                      id="language"
                      className="px-4 py-2 border bg-white text-gray-800 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none "
                    >
                      <option defaultValue={"0"}>select an option</option>
                      {[
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                      ].map((d: any) => (
                        <option className="text-black" value={d}>
                          <p className="text-black">{d}</p>
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={onSubmitHandler}
                  className="block  text-white cursor-pointer mx-auto text-black btn font-outfit w-[100%]  p-3 px-6 rounded-md bg-[#004AAD]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;

const Modal = ({ setShowModal, modalText, error = false }: any) => {
  return (
    <div id="app" className="fixed z-40 w-screen h-screen overflow-hidden ">
      <div className="flex items-center justify-center absolute h-screen top-0 left-0" />

      {/* Modal */}
      <div
        v-if="showModal"
        className="w-11/12 lg:w-full max-w-xl z-20 mx-auto bg-white flex flex-col relative self-center shadow-2xl rounded-md "
      >
        {/* Modal header */}

        {/* ./Modal header */}
        {/* Modal body */}
        <div className="p-6 text-center font-bold text-[20px] font-outfit text-black">
          {modalText}
        </div>
        {/* ./Modal body */}
        {/* Modal footer */}
        <div className=" p-6 flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="bg-green-400 text-white hover:bg-green-500 focus:outline-none transition px-4 py-2 rounded-md text-black transition duration-500 ease-in-out text-black"
            style={error ? { backgroundColor: "red" } : {}}
          >
            Close Modal
          </button>
        </div>
        {/* ./Modal footer */}
      </div>
      {/* ./Modal */}

      {/* Overlay */}
      <div
        v-if="showModal"
        className="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-500 ease-in-out transfom z-10"
      />
      {/* ./Overlay */}
    </div>
  );
};
